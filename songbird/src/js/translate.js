import i18Obj from './translateData';

function translate(lang) {
  const dataLang = document.querySelectorAll('[data-i18]');

  dataLang.forEach(item => {
    item.textContent = i18Obj[lang][item.dataset.i18];

    if (item.placeholder) {
      item.placeholder = i18Obj[lang][item.dataset.i18];
      item.textContent = '';
    }

  });  
}

export default translate;