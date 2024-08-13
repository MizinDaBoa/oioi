let {flashcards} = require('../data')
let {baralhos} = require('../data')
const criarBaralho = require('../baralhofunctions/criarBaralho')

function criarFlashCard(prompt,callback){
    if(baralhos.length == 0){
        console.log(' é preciso ter um baralho,crie um: ')
        idBar = criarBaralho(prompt)
        let id = 1
        let pergunta = prompt('digite a pergunta: ')
        let resposta = prompt('digite a resposta: ')
        for(let i =0;i > flashcards.length;i++){
            if(id == flashcards[i].id){
                id++
            }
          
        }
        flashcards.push({id: id,pergunta: pergunta,resposta: resposta,idbaralho: idBar})
        console.log('criado com sucesso!!')
        console.log(baralhos)
        callback()
    }
}


module.exports = criarFlashCard
