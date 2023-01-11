import { validator } from './validator';

const campoDeTexto = document.querySelector('#valor');
const botao = document.querySelector('#botao');
const seletor = document.querySelector('#opcao');
const textoDeSaida = document.querySelector('#resposta');

botao.addEventListener('click', (evento) => {

evento.preventDefault();
const campos = {
  cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
  email: validator.isEmail(campoDeTexto.value),
  url: validator.isURL(campoDeTexto.value),
  uuid: validator.isUUID(campoDeTexto.value, 4),
  hexColor: validator.isHexColor(campoDeTexto.value)
};
textoDeSaida.innerHTML = `A validação retornou ${campos[seletor.value]}`;
})