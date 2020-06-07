'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CatSchema extends Schema {
  up () {
    this.create('cats', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.enu('sexo',['m','f']).notNullable()
      table.string('local')
      table.enu('castrado',['s','n'])
      table.enu('adotado',['s','n'])
      table.enu('tempo',['s','n'])
      table.string('status')
      table.text('desc')
      table.string('path').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cats')
  }
}

module.exports = CatSchema
