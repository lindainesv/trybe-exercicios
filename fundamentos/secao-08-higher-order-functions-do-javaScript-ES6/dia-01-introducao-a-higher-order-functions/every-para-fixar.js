const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

//Adicione seu código aqui
const verifyAges = (arr, minimumAge) => {
  return arr.every((person) => person.age >= minimumAge);
};

console.log(verifyAges(people, 18)); // false | Retorna false porque o 'José' não atende essa regra pois ele tem de 16 anos
console.log(verifyAges(people, 14)); // true | Quando você muda a regra para >= 14, ele passa a atender
console.log(verifyAges(people, 17)); // false
console.log(verifyAges(people, 16)); // true

// Ele retorna true se todos os elementos se encaixarem com a condição. Como todas as idades são maiores que 14 então dá true.