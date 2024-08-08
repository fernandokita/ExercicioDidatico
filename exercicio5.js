/* Faça um algoritmo que calcule e mostre a tabuada de um número digitado pelo usuário.*/

const readline = require("readline-sync");

let n1 = parseInt(readline.question("Informe o número para apresentar a respectiva tabuada :"))

function calcularTabuada(n1){

    let resultado = 0

    for(let i = 0 ; i <= 10 ; i++){
        resultado = n1 * i
        console.log(`${n1} x ${i} = ${resultado} `)
    }
}
calcularTabuada(n1)

module.exports = calcularTabuada