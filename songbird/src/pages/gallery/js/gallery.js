import Card from '../../../js/card';
import birdsData from '../../../js/birds';
import birdsDataEn from '../../../js/birds-en';
import addPlayer from './player';
import { createNewMainPlayer } from '../../../js/createElements';
import translate from '../../../js/translate';

import '../gallery.scss';

window.addEventListener('DOMContentLoaded', () => {
  let arrayOfBirds;
  let slides;
  let numberOfBlock = 0;

  const addAudio = (number) => {
    addPlayer(arrayOfBirds[number - 1].audio, slides[number - 1]);  
  }

  const updateAudio = () => {
    const audio = slides[slideIndex - 1].querySelector('.description__audio');
    audio.innerHTML = '';
    let newAudioElements = createNewMainPlayer();
    newAudioElements.forEach(item => {
      audio.append(item);
    });
    addAudio(slideIndex); 
  }

  const updateActiveSlideWithLang = () => {
    const cardsInner = document.querySelector('.slider__inner');
    const cardsWrapper = document.querySelector('.slider__wrapper');
    const widthOfSLide = window.getComputedStyle(cardsWrapper).width;  
  
    if (window.activeSlide) {
      current.textContent = window.activeSlide;
      slideIndex = window.window.activeSlide;
      offset = +widthOfSLide.slice(0, widthOfSLide.length - 2) * (window.activeSlide - 1);
      cardsInner.style.transform = `translateX(-${offset}px)`;

      updateAudio();
    }
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
    
    window.activeSlide = document.querySelector('.slider__current').innerHTML;
    updateSlider(numberOfBlock);
    updateActiveSlideWithLang(); 
  });

  langEng.addEventListener('click', () => {
    localStorage.setItem('lang', 'en');
    translate('en');
    langEng.classList.add('header__lang_active');
    langRu.classList.remove('header__lang_active');

    window.activeSlide = document.querySelector('.slider__current').innerHTML;
    updateSlider(numberOfBlock);
    updateActiveSlideWithLang();
  });

  const buttons = document.querySelectorAll('.block__button');

  const clearAciveClasses = () => {
    buttons.forEach((btn) => {
      btn.classList.remove('block__button_active');
    });
  }  

  for (let btn of buttons) { 
    btn.addEventListener('click', () => {
      clearAciveClasses();
      btn.classList.add('block__button_active');
      numberOfBlock = btn.dataset.block;
      
      updateSlider(numberOfBlock);
    });
  }

  const toNumber = (str) => {
    return +str.replace(/\D/g, '');
  }     

  //slider 
  let slideIndex;
  let offset;
  let current;

  const updateSlider = (number) => {

    let cardsWrapper = document.querySelector('.slider__wrapper');
    offset = 0;
    slideIndex = 1;
    window.numberOfBird = slideIndex;   

    const cards = document.createElement('div');
    cards.className = 'slider__inner';

    lang = localStorage.getItem('lang'); 

    if (lang === 'ru') {
      arrayOfBirds = birdsData[number];
    } else {
      arrayOfBirds = birdsDataEn[number];
    }    

    const createSlide = (data) => {
      let card = new Card(data);

      return card.generateCard();
    }

    arrayOfBirds.forEach(item => {
      cards.append(createSlide(item));
    });

    cardsWrapper.innerHTML = '';  
    cardsWrapper.append(cards);

    const counter = document.querySelector('.slider__counter');

    counter.innerHTML = '';
    counter.innerHTML = ` <div class="slider__prev">
                            <img src="../../assets/left.png" alt="prev">
                          </div>
                          <span class="slider__current"></span>
                          <span>/</span>
                          <span class="slider__total"></span>
                          <div class="slider__next">
                            <img src="../../assets/right.png" alt="next">
                          </div>`;

    const cardsInner = document.querySelector('.slider__inner');
    slides = document.querySelectorAll('.description__card');
    current = document.querySelector('.slider__current');
    const total = document.querySelector('.slider__total');
    const prev = document.querySelector('.slider__prev');
    const next = document.querySelector('.slider__next');

    total.textContent = slides.length;
    current.textContent =  slideIndex;

    addAudio(slideIndex); 

    next.addEventListener('click', () => {

      if (window.galleryAudio) {
        window.galleryAudio.pause();
        window.galleryAudio.currentTime = 0;
      }

      cardsWrapper = document.querySelector('.slider__wrapper');
      const widthOfSLide = window.getComputedStyle(cardsWrapper).width;

      if (offset == (toNumber(widthOfSLide) * (slides.length - 1))) {
        offset = 0;
      } else {
        offset += toNumber(widthOfSLide); 
      }
      
      cardsInner.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == slides.length) {
        slideIndex = 1;
      } else {
        slideIndex++;
        window.numberOfBird = slideIndex;
      }
  
      updateAudio();
      current.textContent = slideIndex;        
    });

    prev.addEventListener('click', () => {
      if (window.galleryAudio) {
        window.galleryAudio.pause();
        window.galleryAudio.currentTime = 0;
      }
      cardsWrapper = document.querySelector('.slider__wrapper');
      const widthOfSLide = window.getComputedStyle(cardsWrapper).width;

      if (offset == 0) {
        offset = toNumber(widthOfSLide) * (slides.length - 1);
      } else {
        offset -= toNumber(widthOfSLide);
      }

      cardsInner.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == 1) {
        slideIndex = slides.length;
      } else {
        slideIndex--;
        window.numberOfBird = slideIndex;
      }

      updateAudio();
      current.textContent = slideIndex;     
    });
  }

  updateSlider(0);

  window.addEventListener('resize', () => {
    const cardsInner = document.querySelector('.slider__inner');
    const cardsWrapper = document.querySelector('.slider__wrapper');
    const widthOfSLide = window.getComputedStyle(cardsWrapper).width;    

    if (window.numberOfBird) {
      current.textContent = window.numberOfBird;
      slideIndex = window.numberOfBird;
      offset = +widthOfSLide.slice(0, widthOfSLide.length - 2) * (window.numberOfBird - 1);
      cardsInner.style.transform = `translateX(-${offset}px)`;
    }
    
  });

}); 