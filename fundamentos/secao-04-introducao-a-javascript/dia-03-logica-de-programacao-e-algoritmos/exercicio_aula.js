// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é: X
var soma = 0;
for (var n = 1; n <= 50; n += 1) {
	soma += n;
 }
 	console.log("A soma total de 1 a 50 é: " + soma);

// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

var multiplicador = 0;
for (var i = 2; i <= 150; i+=1)	{
	for (let o = 1; o <= 50; o +=1) {
		multiplicador = o * 3;
		if(o === multiplicador) {
			contador += 1;
		}
	}
}

if (contador === 50){
  console.log('Esta é uma mensagem secreta ;D')
}

var contador = 0;
var multiplicador = 0;
for (let i = 2; i <= 150; i += 1){
  for (let m = 1; m <=50; m += 1){
    multiplicador = m * 3;
    if (i === multiplicador){
      contador += 1;
    }
  }
}
if (contador === 50){
  console.log('Esta é uma mensagem secreta ;D')
}


// 3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 
// 4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
// Bônus: Crie a condição utilizando operador ternário.
// 5 - Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.