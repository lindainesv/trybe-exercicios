const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 🚀 6 - Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.

const expectedResult = 'O Senhor dos Anéis';

const authorWith3DotsOnName = () => {
  return books.filter((livro) => (
    livro.author.name[1] === '.'
    && livro.author.name[4] === '.'
    && livro.author.name[7] === '.'
  ))[0].name;
};

console.log(authorWith3DotsOnName());


// Resolução com o 'split':
const authorWith3DotsOnName2 = () => {
  return books.find((book) => (
    book.author.name.split(' ')
      .filter((word) => word.endsWith('.')).length === 3
  )).name;
}
console.log(authorWith3DotsOnName2());


// [A. A. A.]
// [
// 0 = 'A',
// 1 = '.',
// 2 = ' ',
// 3 = 'A',
// 4 = '.',
// 5 = ' ',
// 6 = 'A',
// 7 = '.',
// ]