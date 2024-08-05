import calcularDistancia from "../exercicio1";

// Função de teste
function testarCalcularDistancia() {
    // Definindo alguns casos de teste
    const casosDeTeste = [
      { x1: 2, y1: 3, x2: 4, y2: 6, resultadoEsperado: 3.61 },
      { x1: 0, y1: 0, x2: 3, y2: 4, resultadoEsperado: 5.00 },
      { x1: -1, y1: -1, x2: 1, y2: 1, resultadoEsperado: 2.83 },
      { x1: 1, y1: 1, x2: 1, y2: 1, resultadoEsperado: 0.00 },
    ];
  
    // Iterar sobre os casos de teste e verificar os resultados
    casosDeTeste.forEach(caso => {
      const { x1, y1, x2, y2, resultadoEsperado } = caso;
      const resultado = calcularDistancia(x1, y1, x2, y2).toFixed(2);
      console.log(`Teste - Pontos (${x1}, ${y1}) e (${x2}, ${y2}):`);
      console.log(`Resultado esperado: ${resultadoEsperado}`);
      console.log(`Resultado obtido: ${resultado}`);
      console.log(`Passou no teste? ${resultado == resultadoEsperado}\n`);
    });
  }
  
  // Chamar a função de teste
  testarCalcularDistancia();



