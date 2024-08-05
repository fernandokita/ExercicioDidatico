import poupanca from "../exercicio4";

const testarPoupanca(){
    const casosDeTeste = [
        {
            quanPao:0 , vendaDePao: 0*0.12 , quantBroa:0 , vendaDeBroa: 0*1.50 , resultadoEsperado: 0.00
        },
        {
            quanPao:5 , vendaDePao: 5*0.12 , quantBroa:4 , vendaDeBroa: 4*1.50 , resultadoEsperado: 6.60
        },
        {
            quanPao:8 , vendaDePao: 8*0.12 , quantBroa:6 , vendaDeBroa: 6*1.50 , resultadoEsperado: 9.96
        },
    ]

    casosDeTeste.forEach(caso =>{

        const{
            quanPao,
            quantBroa,
            vendaDePao,
            vendaDeBroa,
            resultadoEsperado
        } = caso

        resultado = poupanca(vendaDePao,vendaDeBroa)

        console.log(`Quantidade de pão : ${quanPao} Venda de pão : ${vendaDePao.toFixed(2)} Total : ${resultadoEsperado.toFixed(2)}`)
        console.log(`Quantidade de broa : ${quantBroa} Venda de broa : ${vendaDeBroa.toFixed(2)} Total : ${resultadoEsperado} `)
    }
    )
}
testarPoupanca()