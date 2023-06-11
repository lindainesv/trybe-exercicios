const readline = require('readline-sync');

// const pesoKG = 80; // Você pode utilizar o valor que desejar aqui
// const alturaCM = 178; // Você pode utilizar o valor que desejar aqui

function calculoIMC(pesoKG, alturaCM) {
  console.log(`Peso: ${pesoKG}, Altura: ${alturaCM}`);

  const alturaEmMetros = alturaCM / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;
  const imc = pesoKG / alturaAoQuadrado;
 // nao entendiiii a logica do codigo
 return imc;
 }

const tabelaIMC = {
  'Abaixo do peso': {
    minIMC: 0,
    maxIMC: 18.4,
  },
  'Peso normal': {
    minIMC: 18.5,
    maxIMC: 24.9,
  },
  'Sobrepeso': {
    minIMC: 25,
    maxIMC: 29.9,
  },
  'Obesidade grau I': {
    minIMC: 30,
    maxIMC: 34.9,
  },
  'Obesidade grau II': {
    minIMC: 35,
    maxIMC: 39.9,
  },
  'Obesidade graus III e IV': {
    minIMC: 40,
    maxIMC: 100,
  },
};

function classificacaoIMC(imc) {
  const classificacao = Object.keys(tabelaIMC);
  const resultado = classificacao.find((status) => {
    const { maxIMC, minIMC } = tabelaIMC[status];
    return imc >= minIMC && imc <= maxIMC;
  });
  return resultado;
}


 // A função main é o ponto de partida do nosso programa
 function retorno() {
  const peso = readline.questionFloat('Qual o seu peso? (kg)');
  const altura = readline.questionInt('Qual a sua altura? (cm)');
  const imc = calculoIMC(peso, altura);
  const resultadoIMC = classificacaoIMC(imc);

  //  const imc = calculoIMC(pesoKG, alturaCM);
  console.log(`IMC: ${imc.toFixed(2)}`); // toFixed = é para ter apenas duas casas apos o ponto

  console.log(`Resultado: ${resultadoIMC}`)
}
//  console.log();
retorno();
