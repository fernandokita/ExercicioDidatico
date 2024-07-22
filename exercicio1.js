/*Construa um algoritmo que, tendo como dados de entrada dois pontos quaisquer no plano, P(x1,y1) e P(x2,y2), escreva a distância entre eles.*/

let x1 = 2, y1 = 3, x2 = 4 , y2 = 6
const d = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2)); //Fórmula da distância que irá definir o resultado

console.log(`A distância entre os pontos ${x1},${y1} , ${x2}, ${y2} é ${d.toFixed(2)}`)