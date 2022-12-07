// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maça', 'banana', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['creme de leite', 'aveia', 'granola'];

const fruitSalad = (fruit, additional) => {
const saladaComAdd = [...fruit, ...additional];
return saladaComAdd;
};

console.log(fruitSalad(specialFruit, additionalItens));