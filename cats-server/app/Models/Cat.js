'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')

class Cat extends Model {
    files(){
        return this.hasMany('App/Models/File')
    }
}

module.exports = Cat
