// Faça uma função que some todos os números pares do array numeros:
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// Solução usando apenas reduce:
const sum = (accumulator, number) =>
  number % 2 === 0 ? accumulator + number : accumulator;
const sumNumbers = (array) => array.reduce(sumPair, 0);
console.log(sumNumbers(numbers)); // 152
