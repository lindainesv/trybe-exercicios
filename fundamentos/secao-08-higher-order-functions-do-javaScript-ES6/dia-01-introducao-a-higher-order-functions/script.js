/* eslint-disable quotes */
const btnSubmit = document.querySelector('#btnSubmit');

function loginValidation() {
  const userEmail = document.querySelector('#email').value;
  const validEmail = userEmail === 'tryber@teste.com';

  const userPwd = document.querySelector('#password').value;
  const validPwd = userPwd === '123456';

  if (validEmail && validPwd) {
    return true;
  }
  return false;
}

function verifyLogin(event) {
  event.preventDefault();
  const validation = loginValidation();

  if (validation === true) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnSubmit.addEventListener('click', verifyLogin);
