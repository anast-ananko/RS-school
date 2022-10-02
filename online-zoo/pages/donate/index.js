window.onload = function() {
    // burger menu
    burgerMenuHandler();    
   
}

//burger
const MENU = document.querySelector('.header__nav');
const LOGO = document.querySelector('.header__logo-link');
const BURGER =  document.querySelector('.header__burger');
const BODY = document.querySelector('body');

const toggleMENU = () => {
    MENU.classList.toggle('header__nav_active');        
    LOGO.classList.toggle('hidden');       
    BODY.classList.toggle('overflow-hidden');  
}

const burgerMenuHandler = () => {
    BURGER.addEventListener('click', () => {
        toggleMENU();
    })
}

