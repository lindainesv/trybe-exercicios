const numeros = [50, 85, -30, 3, 15];

const numeroMaior = () => {
  numeros.reduce((numeroMaisAlto, numero) => {
    return numeroMaisAlto > numero ? numeroMaisAlto : numero; // '?' e ':' é operador ternario
    // Se 'numeroMaisAlto' for maior que (>) 'numero', retorne (?) 'numeroMaisAlto', se não (:), retorne 'numero'.
  });
};
return numeros;

// Código em apenas uma linha:
// numeros.reduce((bigger, numero) => bigger > numero ? bigger : numero);

// Codigo separado em uma função:
// const getBigger = (bigger, numero) => (bigger > numero ? bigger : numero);
// const bigger = numeros.reduce(getBigger);
// console.log(bigger);
