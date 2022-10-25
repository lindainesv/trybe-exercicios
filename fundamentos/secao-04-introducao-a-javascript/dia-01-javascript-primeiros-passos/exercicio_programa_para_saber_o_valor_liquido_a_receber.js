// Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto = 0;

//REFERENCIAS
//INSS
const aliquota8 = salarioBruto <= 1556.94; 
const aliquota9 = salarioBruto >= 1556.95 <= 2594.92; 
const aliquota11 = salarioBruto >= 2594.93 <= 5189.82; 
const aliquotaMax = 570.88 

//IR
const aliquota0 = salarioBruto <= 1903.98;
const aliquota75 = salarioBruto >= 1903.99 <= 2826.65;
const aliquota15 = salarioBruto >= 2826.66 <= 3751.05;
const aliquota22 = salarioBruto >= 3751.06 <= 4664.68;
const aliquota27 = salarioBruto >= 4664.68;


if (condition) {
	
} else {
	
} 
	console.log("O valor liquido a ser recebido será de R$"  );