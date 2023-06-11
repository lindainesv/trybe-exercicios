const names = ["Mateus", "José", "Ana", "Cláudia", "Bruna"];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((nomePassado) => nomePassado === name);
};

console.log(hasName(names, "Ana")); // true
console.log(hasName(names, "Pedro")); // false