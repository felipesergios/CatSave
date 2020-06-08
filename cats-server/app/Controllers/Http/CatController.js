'use strict'


//const Database = use('Database')
const cat = use('App/Models/Cat')
const Helpers = use('Helpers')
const { validate } = use('Validator')
//const File = use('App/Models/File')
const Env = use('Env')
class CatController {

  async index ({ request, response, view }) {
    const Gatos = await cat.all()
    
    return Gatos
  }

  async status(){
    const total = await cat.getCount()
    const castrados = await cat.query().where({ castrado: "s" }).getCount() 
    const temporario = await cat.query().where({tempo:"s"}).getCount()
    const adotado = await cat.query().where({adotado:"s"}).getCount()
    return ({resgatados:total,adotados:adotado,lartemp:temporario,castrado:castrados})
  }

  
  async store ({ request }) {
   




    const rules = {
      name: 'required',
      sexo: 'required|max:1',
      local:'max:30',
      castrado:'required|max:1',
      adotado:'required|max:3',
      tempo:'max:30',
      status:'required',
      desc:'max:40'
    }

    const data = request.only(['name','sexo','local','castrado','adotado','tempo','status','desc'])
    const validation = await validate(data, rules)
    if (validation.fails()) {
      return validation.messages()
    }
    const validadeOptions = {
      types:['image'],
      size:'2mb'
    }
    const file = request.file('file',validadeOptions)
    
    
    
    await file.move(Helpers.tmpPath('uploads'),{
      name:`${new Date().getTime()}.${file.subtype}`
    })
    if (!file.moved()){
      return file.error()
    }
    const fileModel = await cat.create({
      
      name:file.fileName,
      sexo:data.sexo,
      local:data.local,
      castrado:data.castrado,
      adotado:data.adotado,
      tempo:data.tempo,
      status:data.status,
      desc:data.desc,
      path:`${Env.get('APP_URL')}/files/${file.fileName}`,
    })
    return fileModel
  }

  
  async show ({params}) {
    const catUnique = await cat.findOrFail(params.id)
    await catUnique.load('files')
    const IMG = catUnique.files.path
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
