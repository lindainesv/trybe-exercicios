// Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let aliquotaINSS;
let aliquotaIR;

const salarioBruto = 3000.0;

// //REFERENCIAS
// //INSS
// const aliquota8 = salarioBruto <= 1556.94;
// const aliquota9 = salarioBruto  <= 2594.92;
// const aliquota11 = salarioBruto  <= 5189.82;
// const aliquotaMax = 570.88

// //IR
// const aliquota0 = salarioBruto <= 1903.98;
// const aliquota75 = salarioBruto  <= 2826.65;
// const aliquota15 = salarioBruto  <= 3751.05;
// const aliquota225 = salarioBruto  <= 4664.68;
// const aliquota275 = salarioBruto >= 4664.68;

if (salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * 0.88;
} else if (salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
} else {
  aliquotaINSS = 570.88; //aqui se utilizou o valor integral da aliquota
}

const salarioBase = salarioBruto - aliquotaINSS;


if (salarioBase <= 1903.98) {
	aliquotaIR = salarioBase * 0;	
} else if (salarioBase <= 2826.65) {
	aliquotaIR = (salarioBase * 0.075) - 142.80; //nao entendi a logica desse valor ser incluido
} else if (salarioBase <= 3751.05)  {
	aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
	aliquotaIR = (salarioBase * 0.225) - 636.13;
} else {
	aliquotaIR = (salarioBase * 0.275) - 869.36;
};


console.log("O valor liquido a ser recebido será de R$" + (salarioBase - aliquotaIR));


