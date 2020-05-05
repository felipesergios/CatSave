'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with cats
 */
const Database = use('Database')
const cat = use('App/Models/Cat')
class CatController {

  async index ({ request, response, view }) {
    const cats = await cat.all()
    return cats
  }

  async status(){
    const total = await cat.getCount()
    const castrados = await cat.query().where({ castrado: "s" }).getCount() 
    const temporario = await cat.query().where({tempo:"s"}).getCount()
    const adotado = await cat.query().where({adotado:"s"}).getCount()
    return ({resgatados:total,adotados:adotado,lartemp:temporario,castrado:castrados})
  }

  
  async store ({ request, response }) {
    const data = request.only(['name','sexo','local','castrado','adotado','tempo','status','desc'])
    const Register = cat.create(data)
    return Register
  }

  
  async show ({ params}) {
    const catUnique = await cat.findOrFail(params.id)
    return catUnique
  }

  

 
  async update ({ params, request, response }) {
    const data = request.only(['id','name','sexo','local','castrado','status','desc'])
    const catUniqueID = await cat.find(data.id)
    catUniqueID.merge(data)
    await catUniqueID.save()
    return ({catUniqueID,mensage:"Updated"})
  }

  
  async destroy ({ params, request, response }) {
    const catUnique = await cat.findOrFail(params.id)
    await catUnique.delete()
    return ({response:"Deletado"})
  }
}

module.exports = CatController
