const pessoas = [
  { nome: 'Ana', cargo: 'Analista' },
  { nome: 'João', cargo: 'Gerência' },
  { nome: 'Aline', cargo: 'Analista' },
  { nome: 'Joana', cargo: 'Gerência' },
];

// const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência'); // true

const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Product Owner'); // false


console.log(verificaCargo);