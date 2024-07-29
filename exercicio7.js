/*Implementação do algoritmo Binary Search (busca binária), com o usuário informando um número, e a partir disto percorrer pela lista até encontrá-lo. 
ArrayNumero = [3,7,5,30,32,10,25,16]*/

const readline = require("readline-sync");

let arrayNumero = [3,7,5,30,32,10,25,16]

let elemento = parseInt(readline.question("Informe um elemento para busca :"))

function buscaDeElemento(arrayNumero,elemento){

    let sortedArray = arrayNumero.slice().sort((a,b) => a-b)

    let inicio = 0
    let fim = sortedArray.length-1

    let encontrado = false;

    while(sortedArray[inicio] <= sortedArray[fim]){
        
        let meio = Math.floor( (sortedArray[inicio] + sortedArray[fim]) /2 )

        if(elemento === sortedArray[meio]){
            encontrado = true
            console.log(`${elemento} Elemento encontrado na posição ${meio}!`)
        }
        else 
            if(elemento > sortedArray[meio]){
                sortedArray[inicio] = sortedArray[meio+1]
            }
            else{
                sortedArray[fim] = sortedArray[meio-1]
            }
    }
    return "Nenhuma correspondência encontrada !"
}
buscaDeElemento(arrayNumero,elemento)