/*Implementação de Linear Search (busca linear). Dando possibilidade do usuário informar qual tópico deseja testar.
1- Encontrar o elemento desejado.
2- Apresentação da lista em ordem crescente.
3- Apresentação da lista de forma decrescente.
*/

const readline = require("readline-sync")

let arrayNumero = [4,7,20,15,10,8,50]

// Para encontrar o elemento desejado, caso exista..
function buscaElemento(arrayNumero){

    let elemento = parseInt(readline.question("Informe o elemento de busca :"))
    let encontrado = false

    for(let i=0 ; i<arrayNumero.length ; i++){

        if(elemento === arrayNumero[i]){
            encontrado=true
            console.log(`${elemento}! Elemento encontrado na posição ${i} !`)
            break
        }
    }
    if(!encontrado){
        console.log(`Nenhuma correspondência encontrada !`)
    }
}
//-------------------------------------------------------------------

function ordemCrescente(arrayNumero){

   let arrayCrescente = arrayNumero.slice().sort((a,b) => a-b)
   console.log(`Lista em ordem crescente ${arrayCrescente}`)

}
//----------------------------------------------------------------------
function ordemDecrescente(arrayNumero){

   let arrayDecrescente = arrayNumero.slice().sort((a,b) => b-a)
   console.log(`Lista em ordem decrescente ${arrayDecrescente}`)
}
//------------------------------------------------------------------------
do{
    console.log("\n Escolha uma operação :")
    console.log("1 - Encontrar o elemento desejado.")
    console.log("2 - Apresentação da lista em ordem crescente.")
    console.log("3 - Apresentação da lista em ordem decrescente.")
    console.log("0 - Sair.")

    let escolha = parseInt(readline.question("Escolha 1 operação."))

    switch(escolha){
        case 1: buscaElemento(arrayNumero) // Opção 1: Busca do elemento
            break
        case 2: ordemCrescente(arrayNumero) // Opção 2: Ordem crescente
            break
        case 3: ordemDecrescente(arrayNumero) // Opção 3: Ordem decrescente
            break
        case 0: console.log("Saindo...")
            break
        default: console.log("Opção inválida !")        
    }
}
while(escolha != 0)
