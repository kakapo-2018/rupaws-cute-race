import request from 'superagent'

const getAllAnimalsURL = "/api/v1/animals/all"
const getAnimalByParamURL = "/api/v1/animals/" //followed by param
const voteAnimalURL = "/api/v1/animals/vote"

export function getAllAnimals(cb) {
  request
    .get(getAllAnimalsURL)
    .end((err, res) => {
      cb(err, res.body)
    })
}

export function getAnimalByParam(animal, cb) {
  // animal can be "dog", "panda", "cat", "aye-aye", "sloth" or "human"
  let url = getAnimalByParamURL + animal
  request
    .get(url)
    .end((err, res) => {
      cb(err, res.body)
    })
}

export function voteAnimal(id, cb) {
  let obj = { "id": id }
  request
    .post(voteAnimalURL)
    .send(obj)
    .end((err, res) => {
      cb(err, res.body)
    })
}

//------

// Example API consumption function

// api.getAnimalByParam ('panda', myFunc)

// let myFunc = (e, stuff) => {
//   this.setState({
//     animals: stuff
//   })
// }

//------