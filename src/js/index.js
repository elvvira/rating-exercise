// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
// import { sayHello } from './demo.js';

const containerSubmit = document.getElementById('container-submit');
const containerThanks = document.getElementById('container-thanks');
const formElement = document.getElementById('form');
const button = document.getElementById('button');
const youSelect = document.getElementById('you-select');

formElement.addEventListener('click', e => {
  if (e.target.name === 'number') {
    youSelect.textContent = e.target.previousElementSibling.textContent + ' ';
  }
  return;
});

formElement.addEventListener('submit', e => {
  e.preventDefault();
});

button.addEventListener('click', e => {
  for (let index = 0; index < 5; index++) {
    if (formElement.children[index].lastElementChild.checked) {
      containerSubmit.classList.add('none');
      containerThanks.classList.add('block');
    }
  }
});
