const express = require('express');
const AnimalService = require("../services/AnimalService");
const router = express.Router();
const db = require("../models");
const animalService = new AnimalService(db);

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

router.get('/', async function (req, res, next) {
  const animals = await animalService.get();
  res.render('animals', { title: 'Animals', user: req.user, animals: animals});
});

router.post('/', jsonParser, async function(req, res, next) {
  let Id = req.body.Id;
  let Name = req.body.Name;
  let Birthday = req.body.Birthday;
  await animalService.create(Id, Name, Birthday);
  res.end()
});

router.patch('/:id', async (req, res) => {
  const animalId = req.params.id;
  const user = req.user;
if (user === undefined) {
  res.sendStatus(400).send('user is required');
} else {
  try {
    const animal = await animalService.updateAnimal(animalId);
    res.json(animal);
  } catch (error) {
    res.status(404).send(error.message);
  }
}
});

router.delete('/', jsonParser, async function(req, res, next) {
  let id = req.body.id;
  await animalService.deleteAnimal(id);
  res.end()
});

module.exports = router;
