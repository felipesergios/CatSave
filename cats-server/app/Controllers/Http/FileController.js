'use strict'
const Helpers = use('Helpers')
const File = use('App/Models/File')
const Env = use('Env')

class FileController {
 
  async store ({ request }) {
    const validadeOptions = {
      types:['image'],
      size:'2mb'
    }
    const file = request.file('file',validadeOptions)
    const {cat_id}=request.only(['cat_id'])
    
    
    await file.move(Helpers.tmpPath('uploads'),{
      name:`${new Date().getTime()}.${file.subtype}`
    })
    if (!file.moved()){
      return file.error()
    }
    const fileModel = await File.create({
      name:file.fileName,
      path:`${Env.get('APP_URL')}/files/${file.fileName}`,
      cat_id:cat_id
    })

   
    return fileModel

  }

  
  async show({ params, response }) {
    return response.download(Helpers.tmpPath(`uploads/${params.file}`))
  }

  
  async destroy ({ params, request, response }) {
  }
  async index ({request, response }) {
    const Photos = File.all()
    return Photos
  }
}

module.exports = FileController
