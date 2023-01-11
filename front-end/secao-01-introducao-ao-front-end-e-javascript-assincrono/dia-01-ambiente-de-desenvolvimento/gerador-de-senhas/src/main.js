import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

const senhaBtnEl = document.querySelector('button');
const displaySenhaEl = document.querySelector('h2');

senhaBtnEl.addEventListener('click', () => {
    const senhaAleatoria = nanoid();
    displaySenhaEl.innerHTML = senhaAleatoria;
});
displaySenhaEl.addEventListener('click', (copiar) => {
  copy(copiar.target.innerHTML),
    alert('Senha copiada!');
})