let {baralhos} = require('../data')
const listar = require('./listarBaralho')

function deletarBaralho(prompt,callback){
    listar()
    let opcId = parseInt(prompt('digite o id: '))
    let index = baralhos.findIndex(b => b.id === opcId)
    if(index == -1){
        console.log('nao ha nenhum numero com esse id')
        callback()
    }else{
    baralhos.splice(index,1)
    console.log('baralho deletado com sucesso')
    callback()
    }
}

module.exports = deletarBaralho