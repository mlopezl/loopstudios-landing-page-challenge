const hamburger = document.querySelector('.header__hamburger');
const menu = document.querySelector('.header__menu');
const closeMenu = document.querySelector('.header__close');

hamburger.addEventListener('click', () => {
  menu.classList.remove('hide');
});

closeMenu.addEventListener('click', () => {
  menu.classList.add('hide');
});