import { expect } from "chai";
import calcularTabuada from "../exercicio5";
expect

describe('Calcula tabuada', ()=>{
    test('Apresenta a tabuada do respectivo número digitado',()=>{
        const resultadoEsperado = [
            '2 x 0 = 0',
            '2 x 1 = 2',
            '2 x 2 = 4',
            '2 x 3 = 6',
            '2 x 4 = 8',
            '2 x 5 = 10',
            '2 x 6 = 12',
            '2 x 7 = 14',
            '2 x 8 = 16',
            '2 x 9 = 18',
            '2 x 10 = 20',
        ]
        const atual = []
        const originalConsoleLog = console.log
        console.log = (output) => atual.push(output)
        calcularTabuada(2)
        console.log = originalConsoleLog
        expect(atual).to.deep.equal(resultadoEsperado)
        console.log(atual)

    }) //ou "it"
})