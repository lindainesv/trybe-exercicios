let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
/* for (let lista of numbers) {
  console.log(lista);
} */

// Some todos os valores contidos no array e imprima o resultado;
/* soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}
console.log(soma); */

// metodo ES6
/* let soma2 = numbers.reduce(function (soma2, i2) {
  return soma2 + i2;
});
console.log(soma2); */

// Calcule e imprima a média aritmética dos valores contidos no array
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
/* let soma3 = numbers.reduce((numbers, i) => numbers + i);
let media = soma3 / numbers.length;
console.log(media); */

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

/* let mensagem = 'valor maior que 20'
if (media > 20) {
console.log (mensagem);
} else 'valor menor ou igual a 20';
console.log(); */

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
/* let maiorValor = numbers[0];
for (let i = 0; i< numbers.length; i+= 1) {
	if (numbers[i] > maiorValor) {
		maiorValor = numbers[i];
	}
}
	console.log(maiorValor) */

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
/* soImpar = numbers.length % 2 !== 0;
quantidadeImpar => numbers.length % 2 !== 0;
if (numbers % 2 === 0) {
	console.log('nenhum valor ímpar encontrado');
}
else {
	console.log (soImpar);
} */

/* let soImpar = 0;
let mensagem = "nenhum valor ímpar encontrado";
let mensagem2 = "quantidade de numeros ímpares é: ";

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    soImpar += 1;
  }
}
if (soImpar === 0) {
  console.log(mensagem);
} else {
  console.log(mensagem2 + soImpar);
} */

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
/* let menorValor = numbers[0];
for(let i = 0; i < numbers.length; i+= 1) {
	if (numbers[i] < menorValor) {
		menorValor = numbers[i];
	}
}
console.log(menorValor) */

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let lista = [];
for (let iLista = 1; iLista <= 25; iLista+= 1) {
	lista.push (iLista);
}
console.log(lista);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (let iLista = 0; iLista < lista.length; iLista += 1) {
	console.log (lista[iLista] /2 );
}

