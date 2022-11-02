/* // Crie um irmão para elementoOndeVoceEsta.
//  1. recuperando o elemento a partir de 'pai'
const pai = document.getElementById('pai');
//  2. criando um novo elemento
const irmaoDeElementoOndeVoceEsta = document.createElement('section');
irmaoDeElementoOndeVoceEsta.id = 'irmaoDeElementoOndeVoceEsta';
// 3. adicionando o elemento criado como filho do elemento com o id `pai`
pai.appendChild(irmaoDeElementoOndeVoceEsta); 


// Crie um filho para elementoOndeVoceEsta.
//  1. recupera
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')
//  2. cria
const filhoDeElementoOndeVoceEsta = document.createElement('section');
filhoDeElementoOndeVoceEsta.id = 'filhoDeElementoOndeVoceEsta';
//  3. adiciona
elementoOndeVoceEsta.appendChild(filhoDeElementoOndeVoceEsta); 

//Crie um filho para primeiroFilhoDoFilho.
//  1. recupera
const primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
//  2. cria
const filhoDePrimeiroFilhoDoFilho = document.createElement("section");
filhoDePrimeiroFilhoDoFilho.id = "filhoDePrimeiroFilhoDoFilho";
//  3. adiciona
primeiroFilhoDoFilho.appendChild(filhoDePrimeiroFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho.
const acessoAo3 = () => {
	let acessoAoTerceiroFilho = document.getElementById("filhoDePrimeiroFilhoDoFilho").parentElement.parentElement.nextElementSibling;
	console.log(acessoAoTerceiroFilho);
}; acessoAo3 (); */