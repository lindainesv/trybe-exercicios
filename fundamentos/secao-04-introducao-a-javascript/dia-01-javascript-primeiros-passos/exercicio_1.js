const n1 = -11;
const n2 = 3;
const n3 = 14;

//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n2 % n2);

//Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
if (n1 > n2) {
  console.log(n1 + " é maior que " + n2 + ".");
} else {
  console.log(n2 + " é maior que " + n1 + ".");
}

//Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
if (n1 > n2 && n1 > n3) {
  console.log("O maior numero é " + n1 + "(a)");
} else if (n2 > n1 && n2 > n3) {
  console.log("O maior numero é " + n2 + " (b)");
} else if (n3 > n2 && n3 > n1) {
  console.log("O maior numero é " + n3 + " (c)");
}

//Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
if (n1 < 0) {
  console.log("negative");
} else if (n1 > 0) {
  console.log("positive");
} else {
  console.log("zero");
}

//🚀 Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

