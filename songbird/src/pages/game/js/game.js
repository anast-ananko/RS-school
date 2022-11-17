import birdsData from '../../../js/birds';
import birdsDataEn from '../../../js/birds-en';
import mainPlayer from './mainPlayer';
import addPlayer from './addPlayer';
import Card from '../../../js/card';
import getRandomInt from './getRandomInt';
import { playOkSound, playErrorSound } from './sounds';
import { createAnswerItem, createNewMainPlayer, createHiddenBirdImage, createDescriptionText } from '../../../js/createElements';
import { blockCheckboxes, blockAllCheckboxes } from './addFunctions';
import translate from '../../../js/translate';

import '../styles/index.scss';

window.addEventListener('DOMContentLoaded', () => {  
  
  const changeLevelOfGame = (levelOfGame) => {
    let lang = localStorage.getItem('lang'); 
    let arrayOfBirds;
    let canCount = true;

    if (lang === 'ru') {
      arrayOfBirds = birdsData[levelOfGame];
    } else {
      arrayOfBirds = birdsDataEn[levelOfGame];
    } 
    translate(lang);

    let randomNumber = getRandomInt(6);  
    let hiddenBird = arrayOfBirds[randomNumber];
    let points = 5;

    const questions = document.querySelectorAll('.questions__item');
    const description = document.querySelector('.description');    

    //==== Переключение активного вопроса в блоке Top ===
    for (let item of questions) {
      item.classList.remove('questions__item_active');
    }
    for (let item of questions) {
      if (levelOfGame == item.dataset.level) {
        item.classList.add('questions__item_active');
      }
    }
    //==================================================== 

    //==== Отрисовка блока Current ==================
    const currentImage = document.querySelector('.current__image');
    const newImage = createHiddenBirdImage();  
    currentImage.innerHTML = '';
    currentImage.append(newImage);

    const currentTitle = document.querySelector('.current__title');
    currentTitle.innerHTML = '******';

    const currentAudio = document.querySelector('.current__audio');  
    const arrayNewElements = createNewMainPlayer();
    currentAudio.innerHTML = '';
    arrayNewElements.forEach(item => {
      currentAudio.append(item);
    });

    mainPlayer(hiddenBird.audio);
    //==============================================

    //==== Отрисовка блока Answers =================
    let arrayItems = [];
    for (let i = 0; i < arrayOfBirds.length; i++) {
      createAnswerItem(arrayOfBirds[i].name, arrayOfBirds[i].id);   
      arrayItems.push(createAnswerItem(arrayOfBirds[i].name, arrayOfBirds[i].id));
    }

    const answersContainer = document.querySelector('.answers');
    answersContainer.innerHTML = '';
    arrayItems.forEach(item => {
      answersContainer.append(item);
    });
    //=============================================

    //==== Отрисовка блока Description ============
    let newText = createDescriptionText();
    description.innerHTML = '';
    description.append(newText);
    //=============================================

    //==== Сброс активной кнопки в блоке Bottom ==
    const buttonLevel = document.querySelector('.bottom__button');
    buttonLevel.classList.remove('bottom__button_active');
    buttonLevel.setAttribute('disabled', 'true');
    //=============================================    
 
    const answers = document.querySelectorAll('.answers__item');
    const checkboxes = document.querySelectorAll('input[type*="checkbox"]');
    const scoreNumber = document.querySelector('.top__number'); 

    for (let item of answers) {
      if (item.dataset.id == hiddenBird.id) {
        item.classList.add('answers__item_correct');
      }
    }

    const showHiddenBird = () => {
      const image = document.querySelector('.current__image');
      const title = document.querySelector('.current__title');

      let newImage = document.createElement('img');
      newImage.src = hiddenBird.image;
      newImage.className = "current__img";
      newImage.alt = "bird";
      image.innerHTML = '';
      image.append(newImage)
      title.innerHTML = hiddenBird.name;

      if (canCount) {
        number += points;
      }
      
      scoreNumber.innerHTML = number;
      
      if (levelOfGame === 5) {
        localStorage.setItem('score', number);
      }
    }

    const openNewLevel = () => {    
      buttonLevel.removeAttribute('disabled');
      buttonLevel.classList.add('bottom__button_active');      
    }

    window.mainAudio;
    window.activeAudio; 
    let canPlaySound = true;    
    
    for (let item of checkboxes) {
      item.addEventListener('click', (e) => {
        e.stopPropagation(); 
      });
    }    

    const handler = (e) => {    
      
      if (window.activeAudio) {
        window.activeAudio.pause();
      }  

      let targetNumber = e.target.closest('label').dataset.id;
      let card = new Card(arrayOfBirds[targetNumber - 1]);
      description.innerHTML = '';
      description.append(card.generateCard());
      addPlayer(arrayOfBirds[targetNumber - 1].audio);  
  
      if (e.target.closest('label').classList.contains('answers__item_correct')) {
        showHiddenBird();
        if (canPlaySound) {
          playOkSound();
        }    
  
        if (window.mainAudio) {
          window.mainAudio.pause();
          window.mainAudio.currentTime = 0;
        }
  
        openNewLevel();
  
        blockAllCheckboxes(checkboxes);
        canPlaySound = false; 
        canCount = false;      
        
      } else {
        if (!e.target.closest('label').hasAttribute('data-clicked')) {

          if (canCount) {
            points--;
          }

        }

        if (e.target.closest('label').classList.contains('answers__item')) {
          e.target.closest('label').setAttribute('data-clicked', true);
        }     

        if (canPlaySound) {
          playErrorSound();
        }    
      }   
      
      blockCheckboxes(checkboxes);      
    }
    
    window.handler = handler;
    answersContainer.addEventListener('click', handler);    
  }
 
  let number = 0;
  let levelOfGame = 0;
  changeLevelOfGame(levelOfGame);

  const buttonLevel = document.querySelector('.bottom__button');

  buttonLevel.addEventListener('click', () => {
    if (window.activeAudio) {
      window.activeAudio.pause();
    }  

    const answersContainer = document.querySelector('.answers'); 
    answersContainer.removeEventListener('click', window.handler);

    if (levelOfGame === 5) {
      window.location.href = '../results/index.html';
    } else {
      levelOfGame++;
    changeLevelOfGame(levelOfGame);
    }
    
  });
  
});