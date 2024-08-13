let {baralhos} = require('../data')

function criarBaralho(prompt){
    let id 
    if(baralhos.length ==0){
        id = 1
    }else{
    id = baralhos[baralhos.length-1].id+1
    }
    let nome = prompt('digite o nome d baralho: ')
    baralhos.push({id: id,nome: nome})
    
    console.log('baralho adicionado com sucesso!!')
    return id
}

module.exports = criarBaralho