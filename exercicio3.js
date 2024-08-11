/* Crie um programa que tenha uma função SuperSomador(), que vai receber dois
números como parâmetro e depois vai retornar a soma de todos os valores no
intervalo entre os valores recebidos.
Ex:
SuperSomador(1, 6) vai somar 1 + 2 + 3 + 4 + 5 + 6 e vai retornar 21
SuperSomador(15, 19) vai somar 15 + 16 + 17 + 18 + 19 e vai retornar 85*/

const readline = require("readline-sync");

let n1 = parseInt(readline.question("Informe o primeiro número :"))
let n2 = parseInt(readline.question("informe o segundo número :"))

function superSomador (n1,n2){
    let soma = 0;

    for(let i=n1 ; i<=n2 ; i++){
        soma = soma + i
    }
    return soma
}
let resultado = superSomador(n1,n2)

console.log("O RESULTADO DA SOMA ENTRE" +n1 +"E"+ n2 +"É IGUAL A "+ resultado)

module.exports = superSomador