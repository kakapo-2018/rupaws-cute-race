const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getRanking: getRanking,
  getAnimals: getAnimals,
  getSpecies: getSpecies
}

function getAnimals (testConn) {
  const conn = testConn || connection
  return conn('animals').select()
}


function getRanking (testConn) {
  const conn = testConn || connection
  return conn('animals').select().orderBy('votes','desc').limit(10)
}


function getSpecies (type, testConn) {
  const conn = testConn || connection
  return conn('animals').where('type', type).select() // insert top 10 logiv
}
