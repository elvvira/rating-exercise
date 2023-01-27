// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
// import { sayHello } from './demo.js';

const containerSubmit = document.getElementById('container-submit');
const containerThanks = document.getElementById('container-thanks');
const formElement = document.getElementById('form');
const youSelect = document.getElementById('you-select');

formElement.addEventListener('submit', e => {
  e.preventDefault();
  const rating = e.target.number.value;
  if (rating) {
    containerSubmit.classList.add('none');
    containerThanks.classList.add('block');
    youSelect.textContent = rating;
  }
});
