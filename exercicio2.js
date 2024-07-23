/*Tendo como dados de entrada a altura e o sexo de uma pessoa (?M? masculino e ?F? feminino), construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:

- para homens: (72.7*h)-58

- para mulheres: (62.1*h)-44.7*/

const readline = require("readline-sync");

let h = parseFloat(readline.question("Informe a altura :")) //variável altura..
let sexo = readline.question("Informe o sexo :").toUpperCase();

function calcularPeso(h,sexo){
    let peso = 0;
    let alturaEmMetros = h/100;

    if(sexo === "M"){
        peso = (72.7*alturaEmMetros)-58
        console.log("O peso de um homem é :" +peso.toFixed(2) +"Kg")
    }
    else if(sexo === "F"){
        peso = (62.1*alturaEmMetros)-44.7
        console.log("O peso de uma mulher é :" +peso.toFixed(2) +"Kg")
    }
    else{
        console.log("É válido apenas sexo M ou F")
    }
}

calcularPeso(h,sexo);