import Swal from 'sweetalert2';
import './style.css';

const img = document.querySelector('#image');
const name = document.querySelector('#name');
const btn = document.querySelector('#button');

// nao estou conseguindo acessar a api
const BASE_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id';

const MAX_HEROES = 1000;

// const randomID = parseInt(Math.random() * MAX_HEROES);
const randomId = () => Math.floor(Math.random() * MAX_HEROES);

btn.addEventListener('click', (event) => {
    event.preventDefault();

    const id = randomId();

    fetch(`${BASE_URL}/${id}.json`)
        .then((result) => result.json())
        .then((data) => {
            img.src = data.images.lg;
            name.innerHTML = data.name;
            console.log(name.innerHTML);
        })
        .catch((error) => Swal.fire({
            title: 'Hero not found',
            text: error.message,
            icon: 'error',
            confirmButtonText: 'Cool',
        }));
});
