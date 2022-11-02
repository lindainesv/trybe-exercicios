// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
//  1. Recuperar o elemento com o id pai
const acessoPai = document.getElementById("pai");

//  2. Utilize o .childNodes para retornar uma coleção viva de nós filhos do elemento pai.
const todosFilhos = acessoPai.childNodes;

//  3. Terceiro passo: Utilize uma estrutura de repetição para iterar sob o array todosOsFilhos.
//  Utilize o .length para verificar o tamanho que todosOsFilhos possui;
//  Como a primeira posição de um array é a posição 0, subtraia 1 do tamanho de todosOsFilhos;
//  Decremente o index a cada iteração.
for (let i = todosFilhos.length -1; i >= 0; i-=1) {

//  4. Armazene o filho atual em uma variável.
	const filhoAtual = todosFilhos[i]; 

// 5. Caso o id do filhoAtual seja diferente de elementoOndeVoceEsta, remova o filhoAtual.
		if (filhoAtual.id !== 'elementoOndeVoceEsta') {
		filhoAtual.remove();
		}
}

// 6. Recupere o elemento com o id segundoEUltimoFilhoDoFilho e o remova.
const segundoEUltimoFilhoDoFilho = document.getElementById("segundoEUltimoFilhoDoFilho");
segundoEUltimoFilhoDoFilho.remove();


