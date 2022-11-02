// arquivo script.js

// Acessar elemento 'elementoOndeVoceEsta'.
console.log(document.getElementById('elementoOndeVoceEsta').parentNode)

// Acessar 'pai' a partir de 'elementoOndeVoceEsta' e adicione uma cor a ele.
const minhaCor = () => {
	let alterarCor = document.getElementById('elementoOndeVoceEsta').parentNode;
	alterarCor.style.color = "blue"
}; minhaCor();


// Acesse o 'primeiroFilhoDoFilho'e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const text = () => {
	let addText = document.getElementById("primeiroFilhoDoFilho");
	addText.innerText= "texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto "
}; text(); 

// Acesse o primeiroFilho a partir de pai.
const acesso = () => {
	let acessoPrimeiroFilho = document.getElementById("pai").firstElementChild;
	console.log(acessoPrimeiroFilho);
}; acesso ();

// Agora acesse o 'primeiroFilho' a partir de elementoOndeVoceEsta.
const acesso5 = () => {
	let acessoPrimeiroFilho = document.getElementById("elementoOndeVoceEsta").previousElementSibling;
	console.log(acessoPrimeiroFilho);
}; acesso5 ();

// Acessar o texto 'Atenção!' a partir de 'elementoOndeVoceEsta'.
const acesso6 = () => {
	let acessoTexto = document.getElementById("elementoOndeVoceEsta").nextSibling;
	console.log(acessoTexto);
}; acesso6 ();

// Acessar o terceiroFilho a partir de elementoOndeVoceEsta.
const acesso7 = () => {
	let terceiroFilho = document.getElementById("elementoOndeVoceEsta").nextElementSibling;
	console.log(terceiroFilho);
}; acesso7 ();

// Acessar o terceiroFilho a partir de pai.
const acesso8 = () => {
let terceiroFilhoPai = document.getElementById("pai").lastElementChild.previousElementSibling;
	console.log(terceiroFilhoPai);
}; acesso8 ();

