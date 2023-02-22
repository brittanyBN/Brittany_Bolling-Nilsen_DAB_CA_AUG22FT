const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const db = require("../models");
const UserService = require("../services/UserService")
const userService = new UserService(db);

passport.use(new LocalStrategy(function verify(username, password, cb) {
    userService.getOneByName(username).then((data) => {
        if(data === null) {
            return cb(null, false, { message: 'Incorrect username or password.' });
        }
            return cb(null, data);
        });
}));

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
        cb(null, { id: user.id, username: user.Username });
    });
});

passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});

var router = express.Router();
router.get('/login', function(req, res, next) {
    res.render('login');
});
router.post('/login/password', passport.authenticate('local', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login',
    failureMessage: true
}));

router.post('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/login');
    });
});

router.get('/signup', function(req, res, next) {
    res.render('signup');
});

router.post('/signup', function(req, res, next) {
    db.run('INSERT INTO users (username, fullName, password) VALUES (?, ?, ?)', [
        req.body.username,
        password,
    ], function(err) {
        if (err) {
            return next(err);
        }
        let user = {
            id: this.id,
            username: req.body.username
        };
        req.login(user, function (err) {
            if (err) {
                return next(err);
            }
            res.redirect('/');
        });
    });
});

module.exports = router;