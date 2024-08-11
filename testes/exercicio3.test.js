const { assert } = require("chai");

const superSomador = require("../exercicio3");
assert

describe(`Função Super somador`,()=>{
        test(`Somatória do intervalo do primeiro e segundo número informado`,()=>{

        const testeDeCaso =[
           {n1: 2, n2: 6, resultadoEsperado: 20}, //`2 + 3 + 4 + 5 + 6 = 20`
           {n1: 5, n2: 8, resultadoEsperado: 26}, //`5 + 6 + 7 + 8 = 26`,
           {n1: 1, n2: 4, resultadoEsperado: 10}, //`1 + 2 + 3 + 4 = 10`,
           {n1: 0, n2: 0, resultadoEsperado: 0},  //`0 + 0 = 0 `
        ]

        testeDeCaso.forEach(({n1,n2,resultadoEsperado}) => {
            resultado = superSomador(n1,n2)
            console.log(`A soma do intervalo entre o número ${n1} e o número ${n2} é ${resultado}`)
            assert.strictEqual(resultado,resultadoEsperado)
        });
    })
})