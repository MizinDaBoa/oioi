const prompt = require('prompt-sync')()

const criarBaralho = require('./baralhofunctions/criarBaralho')
const listarBaralho = require('./baralhofunctions/listarBaralho')
const atualizarBaralho = require('./baralhofunctions/atualizarBaralho')
const deletarBaralho = require('./baralhofunctions/deletarBaralho')
const { baralhos } = require('./data')
const listarFlashCards = require('./flashfunctions/listarFlashCards')
const criarFlashCard = require('./flashfunctions/criarFlashCard')



function Menu(){
    console.log(`
    Menu:
    1. Criar Baralho
    2. Criar Flashcard
    3. Listar Baralhos
    4. Listar Flashcards
    5. Listar Flashcards por Baralho
    6. Atualizar Baralho
    7. Atualizar Flashcard
    8. Deletar Baralho
    9. Deletar Flashcard
    10. Buscar Flashcards por Pergunta
    11. Buscar Flashcards por Baralho
    0. Sair`)
    let opc = prompt('digite a opcao desejada: ')
    switch(opc){
        case '1':
            criarBaralho(prompt)
            Menu()
            break
        case '2':
            criarFlashCard(prompt,Menu)
            break
        case '3':
            if(baralhos.length == 0){
                console.log('nao ha nenhum baralho disponivel')
                Menu()
            }else{
            listarBaralho()
            Menu()
            }
            break
        case '4':
            if(baralhos.length == 0){
                console.log('nao ha nenhum flashcard disponivel')
                Menu()
            }else{
            listarFlashCards()
            Menu()
            }
            break
            case '6':
                if(baralhos.length == 0){
                    console.log('nao ha nenhum baralho disponivel para atualizar')
                    Menu()
                }else{
                atualizarBaralho(prompt,Menu)
                }
                break
            case '8':
                if(baralhos.length == 0){
                    console.log('nao ha nenhum baralho disponivel para atualizar')
                    Menu()
                }else{
                deletarBaralho(prompt,Menu)
                }
                break
        default:
            throw new Error('opcao invalida')
    }
}
Menu()