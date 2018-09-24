
const { getAllAnimals, getAnimalsByParam, voteAnimalURL } = require('../api')

export function fetchAnimals(animals) {
    return {
        type: 'RECEIVE_ALL_ANIMALS',
        animals
    }
}

export function getAnimals() {
    return (dispatch) => {
        // getAllAnimals()
    }
}

