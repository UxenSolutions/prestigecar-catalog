let btnMenuMob = document.querySelector('#btn-menu-mobile');
let lineOne = document.querySelector('.line-menumob-1');
let lineTwo = document.querySelector('.line-menumob-2');
let menuMobile = document.querySelector('#menu-mobile');


let body = document.querySelector('body');

btnMenuMob.addEventListener('click', () => {
    lineOne.classList.toggle('line-menumob-1-active');
    lineTwo.classList.toggle('line-menumob-2-active');
    menuMobile.classList.toggle('menu-mobile-active');
    
    body.classList.toggle('body-active');
});
