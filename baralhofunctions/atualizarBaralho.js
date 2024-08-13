let {baralhos} = require('../data')
const listar = require('./listarBaralho')

function atualizarBaralho(prompt,callback){
    listar()
    let opcaoId = parseInt(prompt('digite o id do baralho que voce quer editar'))
    let index = baralhos.findIndex(b => b.id === opcaoId)
    let novoNome = prompt('nome: ')
    baralhos[index].nome = novoNome
    console.log('editado com sucesso!!')
    callback()
}






module.exports = atualizarBaralho