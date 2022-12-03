const produtos = ["Arroz", "Feijão", "Alface", "Tomate"];
const precos = [2.99, 3.99, 1.5, 2];

const atualizandoProdutos = (listaProdutos, listaPrecos) =>
  listaProdutos.map((produtos, index) => ({ [produtos]: listaPrecos[index] }));

const listaProdutos = atualizandoProdutos(produtos, precos);

console.log(listaProdutos);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]