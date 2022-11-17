import translate from '../../js/translate';

import './main.scss';

window.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'ru');
  }

  let lang;
  const langRu = document.querySelector('.header__lang-ru');
  const langEng = document.querySelector('.header__lang-en');

  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    translate(lang);

    if (lang === 'en') {
      langEng.classList.add('header__lang_active');
      langRu.classList.remove('header__lang_active');  
    } else {
      langRu.classList.add('header__lang_active');
      langEng.classList.remove('header__lang_active');
    }
  } 

  langRu.addEventListener('click', () => {
    localStorage.setItem('lang', 'ru');
    translate('ru');
    langRu.classList.add('header__lang_active');
    langEng.classList.remove('header__lang_active');
  });

  langEng.addEventListener('click', () => {
    localStorage.setItem('lang', 'en');
    translate('en');
    langEng.classList.add('header__lang_active');
    langRu.classList.remove('header__lang_active');
  });

  console.log('Оценка: 270 / 270. Все пункты выполнены в полном объеме')
});