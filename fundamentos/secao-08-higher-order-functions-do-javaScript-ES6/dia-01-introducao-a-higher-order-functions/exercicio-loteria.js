const checandoNumero = (meuNumero, numero) =>
meuNumero === numero;

const resultadoDoSorteio = (meuNumero, callBack) => {
  const numero = Math.floor((Math.random() * 5) + 1);

  return callBack(meuNumero, numero) ? 'Parabéns, você ganhou!' : 'Tente novamente';
};
console.log(resultadoDoSorteio(1, checandoNumero));