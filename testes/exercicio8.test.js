const { expect, assert } = require("chai");
assert
const valorTotal = require("../exercicio8");
expect

describe('Valor total do salário',()=>{
    test('Retornar o salário fixo + 4% de comissão sobre as vendas',()=>{

        const casosDeTeste= [
            {salarioFuncionario: 1500.00, venda: 700.00*0.04, resultadoEsperado: 1528.00.toFixed(2)},
            {salarioFuncionario: 2000.00, venda: 800.00*0.04, resultadoEsperado: 2032.00.toFixed(2)},
            {salarioFuncionario: 500.00, venda: 1250.00*0.04, resultadoEsperado: 600.00.toFixed(2)},
            {salarioFuncionario: 2500.00, venda: 200.00*0.04, resultadoEsperado: 2508.00.toFixed(2)},
            {salarioFuncionario: 6000.00, venda: 3455.00*0.04, resultadoEsperado: 6138.20.toFixed(2)}
        ]

        const resultadoTeste = casosDeTeste(salarioFuncionario,venda)
        valorTotal(salarioFuncionario,venda)
        console.log(`Salário fixo: ${salarioFuncionario.toFixed(2)} Venda: ${venda.toFixed(2)} Comissão: ${venda*0.04.toFixed(2)} Salário Total: ${resultadoEsperado.toFixed(2)}`)
        assert.strictEqual(resultadoTeste,valorTotal)
        
    })
})