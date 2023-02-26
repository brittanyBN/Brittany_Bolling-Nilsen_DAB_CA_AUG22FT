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

  router.patch('/adopt', async function (req,res,next) {
    let animalId = req.body.id;
    console.log(animalId);
    let adoptionStatus = req.body.adopted;
    console.log(adoptionStatus);
    await animalService.updateAnimal(animalId, adoptionStatus).then(() => {
      console.log("Animal updated");
      res.send("Animal updated")
    })
        .catch((response) => {
          alert(response.statusText);
          res.send("Update failed");
        });
    res.end()
  });

router.patch('/cancel', async function (req,res,next) {
  let animalId = req.body.id;
  console.log(animalId);
  let adoptionStatus = req.body.adopted;
  console.log(adoptionStatus);
  await animalService.returnAnimal(animalId, adoptionStatus).then(() => {
    console.log("Animal updated");
    res.send("Animal updated")
  })
      .catch((response) => {
        alert(response.statusText);
        res.send("Update failed");
      });
  res.end()
});

module.exports = router;
