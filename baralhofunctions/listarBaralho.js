let {baralhos} = require('../data')

function listarBaralho(){
    baralhos.forEach((baralho)=>{
        console.log(`id do baralho: ${baralho.id}\n nome do baralho: ${baralho.nome}`)
    })
}





module.exports = listarBaralho