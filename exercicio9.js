/*Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1,
marcando os números que forem divisíveis por 4, exatamente como mostrado abaixo:
30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16]...*/

function contagemRegressiva(){
    
    for(let n=30 ; n>=1 ; n--){
        console.log(`${i}`)

        if(n%4 === 0){
            console.log(`${i}, end=""`)
        }
        else{
            console.log(n, end="")
        }
    }
}
let res = contagemRegressiva()
