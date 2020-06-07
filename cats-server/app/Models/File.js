'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')


class File extends Model {
    Cat(){
        return this.belongsTo('App/Models/Cat')
    }
}

module.exports = File
