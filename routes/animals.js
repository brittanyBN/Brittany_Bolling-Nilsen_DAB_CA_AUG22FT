const express = require('express');
const AnimalService = require("../services/AnimalService");
const AdoptedService = require("../services/AdoptedService");
const router = express.Router();
const db = require("../models");
const animalService = new AnimalService(db);
const adoptedService = new AdoptedService(db);

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

function calculateAge() {
  let birthday  = req.body.Birthday;
  let dob = new Date(birthday);
    let month_diff = Date.now() - dob.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);
    return document.getElementById("result").innerHTML =
        "Age is: " + age + " years. ";
  }


router.get('/', async function (req, res, next) {
  const animals = await animalService.get();
  const user = req.user;
  const size = req.size;
  const adopted = await adoptedService.get();
  res.render('animals', { title: 'Animals', animals: animals, user: user, size: size, adopted: adopted});
});

router.post('/', jsonParser, async function(req, res, next) {
  let Id = req.body.Id;
  let Name = req.body.Name;
  let Birthday = req.body.Birthday;
  await animalService.create(Id, Name, Birthday);
  res.end()
});

router.delete('/', jsonParser, async function(req, res, next) {
  let id = req.body.id;
  await animalService.deleteAnimal(id);
  res.end()
});

module.exports = router;
