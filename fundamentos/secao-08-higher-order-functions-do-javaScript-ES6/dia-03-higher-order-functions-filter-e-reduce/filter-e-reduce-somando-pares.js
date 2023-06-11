// Faça uma função que some todos os números pares do array numeros:
const numeros = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// Solução usando filter e reduce:
const ePar = (numero) => numero % 2 === 0;
const soma = (acc, num) => acc + num;
const somaNumeros = (array) => array.filter(ePar).reduce(soma);
console.log(somaNumeros(numeros));
