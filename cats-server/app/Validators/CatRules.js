'use strict'

class CatRules {
  get rules () {
    return {
        name: 'required',
        sexo: 'required|max:1',
        local:'max:30',
        castrado:'required|max:1',
        adotado:'required|max:3',
        tempo:'max:30',
        status:'required',
        desc:'max:40'
    }
  }
 
  get messages () {
    return {
      'name.required': 'Preecha o campo name',
      'sexo.required': 'voce deve informar um sexo',
      'sexo.max': 'esse campo recebe apenas 1 valor.',
      'castrado.required': 'Infome se o animal foi castrado',
      'castrado.max': 'esse campo recebe apenas 1 valor.',
      'adotado.max': 'esse campo recebe apenas sim ou nao.',
      'status.required':'Esse campo é requerido'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
  
}

module.exports = CatRules
