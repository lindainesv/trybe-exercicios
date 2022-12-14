// Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// people.sort((a, b) => a.age - b.age); /* mais novo primeiro*/
// people.sort((a, b) => b.age - a.age); /* mais velho primeiro*/

people.sort((a, b) => {
  return a.name < b.name 
  ? -1 : a.name > b.name 
  ? 1 : 0;
}); /* lista os itens em ordem alfabetica*/

console.log(people);




