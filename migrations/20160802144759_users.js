exports.up = (knex, Promise) => {
  return knex.schema.createTable('animals', (table) => {
    table.increments('id').primary()
    table.string('type')
    table.string('imgSrc')
    table.integer('votes')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('animals')
}


