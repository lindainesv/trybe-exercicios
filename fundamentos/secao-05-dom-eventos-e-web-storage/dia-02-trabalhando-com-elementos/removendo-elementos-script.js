// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

/* const mandandoEmBoraOsFilhos = () => {
let acessoAoPai = document.getElementById("pai");
let filhosDePaiDoPai = pai.childNodes;
for (let i = i; filhosDePaiDoPai.lengt - 1; i>=0; i-=1){
	const
}

console.log(filhosDePaiDoPai);

}; mandandoEmBoraOsFilhos (); */




    const pai = document.getElementById('pai');
    const todosOsFilhos = pai.childNodes;
    for (let index = todosOsFilhos.length - 1; index >= 0; index -= 1) {
      const filhoAtual = todosOsFilhos[index];
      if (filhoAtual.id !== 'elementoOndeVoceEsta') {
        filhoAtual.remove();
      }
    }
    const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
    segundoEUltimoFilhoDoFilho.remove();
