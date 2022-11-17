const createAnswerItem = (name, number) => {
  const item = document.createElement('label');
  item.className = 'answers__item';
  item.setAttribute('data-id', number);
  let template = `${name}
                  <input type="checkbox">
                  <span class="checkmark"></span>`;
  item.innerHTML = template;
  
  return item;
} 

const createNewMainPlayer = () => {
  const newMainAudio = document.createElement('audio');
  newMainAudio.className = 'audio';

  const controls = document.createElement('div');
  controls.className = 'controls';
  controls.innerHTML = `<div class="play-container">
                          <span class="play"></span>
                        </div>
                        <div class="progress-container">
                          <input type="range" value="0" max="100" class="progress">          
                          <div class="time">
                            <span class="time__current">
                              <span class="time__current-minutes">00</span>:<span class="time__current-seconds">00</span>
                            </span>
                            <span class="time__total">
                              <span class="time__total-minutes">00</span>:<span class="time__total-seconds">00</span>
                            </span>
                          </div>
                        </div>`;

  const volumeContainer = document.createElement('div');
  volumeContainer.className = 'volume-container';
  volumeContainer.innerHTML =  `<span class="volume"></span>
                                <input type="range" value="40" min="0" max="100" 
                                        step="1" class="volume-progress">`;
    
  return [newMainAudio, controls, volumeContainer];                                      
}

const createHiddenBirdImage = () => {
  const image = document.createElement('img');
  image.className = 'current__img';
  image.alt = 'bird';
  image.src = '../../assets/bird.jpg';

  return image;
}

const createDescriptionText = () => {
  const text = document.createElement('div');
  text.className = 'description__text';

  let lang;
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
  }    
  if (lang === 'en') {
    text.innerHTML = `Listen to the player. <br> Select a bird from the list`;
  } else {
    text.innerHTML = `Послушайте плеер. <br> Выберите птицу из списка`;
  }  

  return text;
}

export { createAnswerItem, createNewMainPlayer, createHiddenBirdImage, createDescriptionText };