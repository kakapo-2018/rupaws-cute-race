
function animals(state = [], action) {
    switch (action.type) {
        case 'RECEIVE_ALL_ANIMALS':
            return action.animals
        default:
            return state
    }
}

module.exports = {
    animals
}