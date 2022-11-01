// 1.mudar texto na tag '<p>-----</p>'
const minhaDescricao = () => {
let tagP = document.getElementsByTagName("p")[1];
tagP.innerText = 'texto aquitexto aquitexto aquitexto aquitexto aquitexto aquitexto aquitexto aquitexto aquitexto aquitexto aquitexto aquitexto aquitexto aquitexto aquitexto aquitexto aquitexto aquitexto aqui';
}; minhaDescricao ();

// 2. mudar cor amarela para a verde
const minhaCor = () => {
let corAmarela = document.getElementsByClassName("mainContent")[0];
corAmarela.style.background = "rgb(76,164,109)";
}; minhaCor ();

// 3. mudar cor vermelha para branco
const minhaCor2 = () => {
let corVermelha = document.getElementsByClassName("center-content")[0];
corVermelha.style.background = "white";
}; minhaCor2 ();


// 4. corrigir texto da tag <h1>
const mudarTextoTagH1 = () => {
	let textoTagH1 = document.getElementsByTagName("h1")[0];
	textoTagH1.innerText = "Exercício - JavaScript";
}; mudarTextoTagH1 ();

// 5. mudar tag <p> para maiúsculo
const textoMaisculo = () => {
	let textoP0 = document.getElementsByTagName('p') [0];
	textoP0.innerText = textoP0.innerText.toUpperCase();
}; textoMaisculo ();

// 6. exibir o conteudo de todos os <p>
const exibirTodosPs = () => {
let todosPs = document.getElementsByTagName("p"); {
	for (let i = 0; i < todosPs.length; i += 1 )
		console.log (todosPs[i].innerHTML);
	}
} 
	exibirTodosPs();




