const express = require('express')

const db = require('../db/db')

const router = express.Router()


router.get('/animals/all', getAllAnimals)

function getAllAnimals (req, res, next) {
  db.getAnimals()
    .then(animals => {
      res.json(animals)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

router.post('/animals/vote', viewVotes)

function viewVotes (req, res, next) {
  db.updateRanking()
    .then(animals => {
      res.json(animals)
    }) 
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

router.get('/animals/:animal', getAnimalsByParam)

function getAnimalsByParam (req, res, next) {
  db.getSpecies(req.params.animal)
    .then(animals => {
      res.json(animals)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

module.exports = router
