'use strict';

const burger = document.querySelector('.header__menu__burger');
const aside = document.querySelector('.asidePanel');
const close = document.querySelectorAll('.asidePanel__nav');
const closeBurger = document.querySelector('.header__menu__burger-close');

burger.addEventListener('click', () => {
  if (!aside.classList.contains('active')) {
    aside.classList.add('active');
    burger.style.display = 'none';
    closeBurger.style.display = 'block';
    document.body.classList.add('modal-open');
  } else {
    aside.classList.remove('active');
    burger.style.display = 'flex';
    closeBurger.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
});

closeBurger.addEventListener('click', () => {
  aside.classList.remove('active');
  burger.style.display = 'flex';
  closeBurger.style.display = 'none';
  document.body.classList.remove('modal-open');
});

close.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('asidePanel__nav')) {
      aside.classList.remove('active');
      burger.style.display = 'flex';
      closeBurger.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  });
});
