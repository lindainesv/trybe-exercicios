//Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
//Bonus: use somente um if.

const n1 = 2;
const n2 = 4;
const n3 = 6;

let ePar = false;
if (n1 % 2 === 0 || n2 % 2 === 0|| n3 % 2 === 0) {
	ePar = true
}; 
	console.log(ePar);


//Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
//Bonus: use somente um if.


let eImpar = false;
if (n1 % 2 !== 0 || n2 % 2 !== 0 || n3 % 2 !== 0) {
	eImpar = true
};
	console.log(eImpar);

