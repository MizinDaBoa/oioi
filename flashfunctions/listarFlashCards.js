let {flashcards} = require('../data')

function listarFlashCards(){
    flashcards.forEach((flash) => {
        console.log(`id: ${flash.id},pergunta: ${flash.pergunta},resposta: ${flash.resposta}, id do baralho: ${flash.idbaralho}`)
    })
}


module.exports = listarFlashCards