const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite', 'abacate'];
food.sort();
console.log(food);







const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
// troca a operação para b - a
inventory.sort((a, b) => b - a);
console.log(inventory); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]