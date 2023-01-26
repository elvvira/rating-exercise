// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
// import { sayHello } from './demo.js';

const containerSubmit = document.getElementById('container-submit');
const containerThanks = document.getElementById('container-thanks');
const formElement = document.getElementById('form');
const button = document.getElementById('button');

formElement.addEventListener('submit', e => {
  e.preventDefault();
});
button.addEventListener('click', e => {
  console.dir(e.target);
  containerSubmit.classList.add('none');
  containerThanks.classList.add('block');
});
