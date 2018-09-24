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
  db.getRanking()

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


// router.post('/animals/vote', updateVote)


function dbGetAnimalsByParam (animal) {
  switch (animal) {
    case "dog":
      return [
        {
          "id": 3,
          "type": "dog",
          "imgSrc": "dog1.jpg",
          "votes": 26
        }
      ]
    case "panda":
      return [
        {
          "id": 1,
          "type": "panda",
          "imgSrc": "panda1.jpg",
          "votes": 5
        },
        {
          "id": 2,
          "type": "panda",
          "imgSrc": "panda2.jpg",
          "votes": 3
        }
      ]
    case "sloth":
      return [
        {
          "id": 5,
          "type": "sloth",
          "imgSrc": "sloth1.jpg",
          "votes": 21
        }
      ]
    case "aye-aye":
      return [
        {
          "id": 6,
          "type": "aye-aye",
          "imgSrc": "aye-aye1.jpg",
          "votes": 15
        }
      ]
    case "cat":
      return [
        {
          "id": 7,
          "type": "cat",
          "imgSrc": "cat1.jpg",
          "votes": 10
        }
      ]
    case null:
      return []
  }
}

function dbUpdateVotes (id) {
  return {
    "id": 1,
    "type": "panda",
    "imgSrc": "panda1.jpg",
    "votes": 6
  }
}

module.exports = router