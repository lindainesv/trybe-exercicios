import '../style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from '../utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
// lógica para pegar as informações das pessoas usuárias e preencher o select aqui.
fetch(USERS_API)
  .then((resposta) => resposta.json())
  .then((data) => {
    const { users } = data;
    
    fillUsersSelect(users);
});

usersSelect.addEventListener('change', () => {
  clearPageData();

  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
  const POSTS_API = `https://dummyjson.com/users/${usersSelect.value}`;
  
  fetch(POSTS_API)
    .then((resposta) => resposta.json())
    .then((data) => {
      const { posts } = data;

      fillPosts(posts);
    })  
});
