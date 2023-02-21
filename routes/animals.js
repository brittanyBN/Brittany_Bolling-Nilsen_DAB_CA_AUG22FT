const express = require('express');
const AnimalService = require("../services/AnimalService");
const router = express.Router();
const db = require("../models");
const animalService = new AnimalService(db);

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

exports.getAllAnimals = async () => {
  try {
    return await db.Animal.findAll({
      include: [
        {model: db.species},
        {model: db.temperament},
        {model: db.adoption, include: [{model: db.User}]}
      ]
    });
  } catch (error) {
    throw new Error('Error retrieving animals');
  }
};


router.get('/', async function (req, res, next) {
  const animals = await animalService.get();
  const user = req.user;
  res.render('animals', { title: 'Animals', animals: animals, user: user });
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
