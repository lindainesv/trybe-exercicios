const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];

/* Mostrar no console o nome das pessoas que estão no array.
  O forEach não tem e não espera retorno da callback */
pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`));

// Encontrar a primeira pessoa chamada 'Aline'.
const encontrarAline = 
pessoas.find((pessoa) => pessoa.nome === 'Aline'); // mas o que faço com isso? eu chamo essa estrutura dentro de uma variavel 'encontrarAline'
console.log(encontrarAline);

// Verificar se alguma pessoa em mais de 30 anos.
const temMaisDe30 =
pessoas.some((pessoa) => pessoa.idade >= 30);
console.log(temMaisDe30);

// Verifica se todas as pessoas tem mais de 30 anos.
const todosTemMais30 =
pessoas.every((pessoa) => pessoa.idade > 30);
console.log(todosTemMais30);