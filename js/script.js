//? DECLARAÇÃO DE VARIÁVEIS
const buttonMobile = document.querySelector('.buttonMobile');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const portfolioImage = document.querySelector('.portfolioImage');
const portfolioPrev = document.querySelector('.portfolioPrev');
const portfolioNext = document.querySelector('.portfolioNext');
const portfolioName = document.querySelector('.portfolio-name');
const links = document.querySelectorAll('a[href^="#"]');
let contador = 1;

//? GALERIA PORTFOLIO
function toggleImage(event) {
  let next = (event.target === portfolioNext);
  let prev = (event.target === portfolioPrev);

  if (next) contador++;
  if (prev) contador--;

  if (next && contador >= 4) contador = 1;
  if (prev && contador <= 0) contador = 3;

  portfolioImage.src = `./images/project-${contador}.PNG`;

  if (contador === 1) {
    portfolioName.innerHTML = 'Calculator';
    portfolioName.href = 'https://willy4nn.github.io/Calculadora-Willy4nn/';
  }

  if (contador === 2) {
    portfolioName.innerHTML = 'Royal Coffee';
    portfolioName.href = 'https://willy4nn.github.io/Royal-Coffee-Willy4nn/';
  }

  if (contador === 3) {
    portfolioName.innerHTML = 'Currency Wizard';
    portfolioName.href = 'https://willy4nn.github.io/CurrencyWizard-Willy4nn/';
  }
}

portfolioNext.addEventListener('click', toggleImage);
portfolioPrev.addEventListener('click', toggleImage);

//? BOTÃO DO MENU MOBILE
function toggleMenu() {
  windowWidth = window.innerWidth;
  
  if (windowWidth < 800) {
    header.classList.toggle('active');
    body.classList.toggle('active');
  }
}

buttonMobile.addEventListener('click', toggleMenu);

//? SCROLL E FECHAMENTO DO MENU
links.forEach(item => {
  item.addEventListener('click', scrollToId);
});

function scrollToId(event) {
  header.classList.remove('active');
  body.classList.remove('active');
}