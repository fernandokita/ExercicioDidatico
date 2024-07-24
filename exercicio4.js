/* A padaria Hotpão vende uma certa quantidade de pães franceses e uma quantidade de broas a 
cada dia. Cada pãozinho custa R$ 0,12 e a broa custa R$ 1,50. Ao final do dia, o dono quer saber 
quanto arrecadou com a venda dos pães e broas (juntos), e quanto deve guardar numa conta de 
poupança (10% do total arrecadado). Você foi contratado para fazer os cálculos para o dono. Com 
base nestes fatos, faça um algoritmo para ler as quantidades de pães e de broas, e depois calcular 
os dados solicitados. */

const readline = require("readline-sync");

// Ler a quantidade de paes vendidos..
let quantPao = parseInt(readline.question("Quantos paes foram vendidos ?"))

// Ler quantidade de broas vendidas..
let quantBroa = parseInt(readline.question("Quantas broas foram vendidas ?"))

// Calculando venda total..
let vendaDepao = quantPao*0.12
let vendaDeBroa = quantBroa*1.50

console.log(`Foram vendidos ${vendaDepao.toFixed(2)} de paes & ${vendaDeBroa.toFixed(2)} de Broas`)

//----------

// Valor a ser calculado para guardar na poupança..
function poupanca(vendaDepao,vendaDeBroa){
    let valorGuardarPoupanca = (vendaDepao + vendaDeBroa) * 0.10

    return valorGuardarPoupanca.toFixed(2)
}
poupanca(vendaDepao,vendaDeBroa)

console.log(`De acordo com a venda de hoje, terá que ser guardado ${poupanca(vendaDepao,vendaDeBroa)} na poupança`)