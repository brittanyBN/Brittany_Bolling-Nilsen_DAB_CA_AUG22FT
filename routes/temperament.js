const express = require('express');
const TemperamentService = require("../services/TemperamentService");
const router = express.Router();
const db = require("../models");
const temperamentService = new TemperamentService(db);

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

router.get('/', async function (req, res, next) {
    const temperament = await temperamentService.get();
    res.render("temperament", {user: req.user, temperament: temperament})
})

router.post('/add', jsonParser, async function (req,res,next) {
    let temp = req.body.name;
    await temperamentService.create(temp);
        res.end();
});

router.put('/update', async function (req,res,next){
    res.render("index",{user: req.user})
})

router.delete('/', jsonParser, async function(req, res, next) {
    let Id = req.body.id;
    await temperamentService.deleteTemperament(Id);
    res.end()
});

module.exports = router;