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

    for(let i=0 ; i<=arrayNumero[6] ; i++){

        if(elemento === arrayNumero[i]){
            console.log(`${elemento}! Elemento encontrado !`)
        }
        else{
            console.log("Nenhuma correspondência encontrada.")
        }
    }
}

function ordemCrescente(arrayNumero){
    
    for(let i=0 ; i<= arrayNumero[6] ; i++){
        
        if(arrayNumero[i]>arrayNumero[i+1]){
            arrayNumero[i] = arrayNumero[i+1]
            arrayNumero[i+1] = arrayNumero[i]
        }
        else{
            
        }
    }

}

function ordemDecrescente(){

    for(let i=0 ; i<=arrayNumero[6] ; i++){

        if(arrayNumero[i]<arrayNumero[i+1]){
            
        }
    }
}

do{
    let escolha = parseInt(readline.question("Escolha 1 operação."))

    switch(escolha){
        case 1: buscaElemento(arrayNumero) // Opção 1..
        case 2: ordemCrescente(arrayNumero) // Opção 2..
        case 3: ordemDecrescente() // Opção 3..
    }
    
}
while(escolha != 0)
