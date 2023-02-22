const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const db = require("../models");
const UserService = require("../services/UserService")
const userService = new UserService(db);
const router = express.Router();

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
        cb(null, { id: user.id, username: user.username });
    });
});

passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});

router.get('/login', function(req, res, next) {
    res.render('login',{ user: req.user, username: req.username})
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
    res.render('signup',{ user: req.user})
});

router.post('/signup', function(req, res, next) {
    userService.create(req.body.firstname, req.body.lastname, req.body.username, req.body.password).then((data) => {
        res.redirect('/login');
    });
});

module.exports = router;