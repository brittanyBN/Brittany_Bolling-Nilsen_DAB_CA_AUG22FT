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

router.patch('/animals/:id', async (req, res) => {
  const animal = await Animal.findOne({
    where: {id: req.params.id},
    include: [Adoption]
  });
  if (animal) {
    animal.Adoption.adopted = req.body.adopted;
    animal.Adoption.userId = req.body.userId;
    await animal.Adoption.save();

    res.status(200).json(animal);
  } else {
    res.status(404).json({message: 'Animal not found'});
  }
});

router.delete('/', jsonParser, async function(req, res, next) {
  let id = req.body.id;
  await animalService.deleteAnimal(id);
  res.end()
});

module.exports = router;
