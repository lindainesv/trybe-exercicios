//Utilize o for/of para imprimir os elementos da lista names com o console.log():

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let lista of names ){
	console.log(lista);
}

// Wile
function dice () { 
	return Math.ceil(Math.random() * 6); // A função Math.ceil(x) retorna o menor número inteiro maior ou igual a "x".


}

let d1 = dice();
let d2 = dice();
while (d1 === d2) {
	d2 = dice();
}
console.log(dice());