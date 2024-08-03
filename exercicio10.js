/*Algoritmo Merge Sort. Implementação e resolução.*/

let arraynumero = [30,20,50,40]

function divisaoArray(arraynumero){
    if(arraynumero.length <= 1 ){
        return arraynumero
    }

    let meio = math.floor(arraynumero.length/2)
    let esquerda = arraynumero.slice(0,meio)
    let direita = arraynumero.slice(meio)

    ordenacao(esquerda, direita)
}

function ordenacao(arraynumero, esquerda, direita){
    let indexEsquerda = 0
    let indexDireita = 0

    while(indexEsquerda<esquerda && indexDireita<direita){
        if(esquerda[indexEsquerda]<direita[indexDireita]){
            arraynumero.push(indexEsquerda)
        }
        else{
            arraynumero.push(indexDireita)
        }
    }
}