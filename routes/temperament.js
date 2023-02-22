const express = require('express');
const TemperamentService = require("../services/TemperamentService");
const router = express.Router();
const db = require("../models");
const temperamentService = new TemperamentService(db);

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

router.get('/', async function (req, res, next) {
    const temperament = await temperamentService.get();
    res.render("temperament", {user: null, temperament: temperament})
})

router.post('/update', async function (req,res,next){
    res.render("index",{user: null})
})

module.exports = router;