// const customer1 = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// // console.log(customer1);
// customer1.lastName = 'Faria';
// console.log(customer1);

// const customer2 = {
//   firstName: 'Maria',
//   age: 23,
//   job: 'Medic',
// };

// console.log(customer2);
// customer2['lastName'] = 'Silva';
// console.log(customer2);

const customer = {
  firstName: "Roberto",
  age: 22,
  job: "Teacher",
};

let newKey = "lastName";
const lastName = "Ferreira";

const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
  objeto[novaPropriedade] = valor;
};

adicionaPropriedade(customer, newKey, lastName);

newKey = "doces";
const doces = "brigadeiro";

adicionaPropriedade(customer, newKey, doces);
console.log(customer);
