/* Um funcionário recebe um salário fixo mais 4% de comissão sobre as vendas. Faça um 
algoritmo que receba o salário fixo de um funcionário e o valor de suas vendas, calcule e mostre a 
comissão e o salário final do funcionário. */

const readline = require("readline-sync")

let salarioFuncionario = parseFloat(readline.question("Informe o salário do vendedor :"))
let venda = parseFloat(readline.question("Quanto foi vendido ?"))

function valorTotal(salarioFuncionario,venda){
    let total = salarioFuncionario + (venda*0.04%)
    return total
}
valorTotal(salarioFuncionario,venda)

console.log(`Valor total do salário com comissão : ${valorTotal(salarioFuncionario,venda)}`)