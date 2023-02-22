const express = require('express');
const SpeciesService = require("../services/SpeciesService");
const router = express.Router();
const db = require("../models");
const speciesService = new SpeciesService(db);

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

router.get('/', async function (req, res, next) {
    const species = await speciesService.get();
    res.render('species', { title: 'Species', species: species, user: req.user });
})

router.post('/', jsonParser, async function(req, res, next) {
    let Species = req.body.Species;
    await speciesService.create(Species);
    res.end()
});

router.delete('/', jsonParser, async function(req, res, next) {
    let Id = req.body.Id;
    let Name = req.body.Name;
    await speciesService.deleteSpecies(Id, Name);
    res.end()
});
module.exports = router;