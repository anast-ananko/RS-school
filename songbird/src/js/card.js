class Card {
  constructor({ id, name, species, description, image, audio }) {
    this.id = id;
    this.name = name;
    this.species = species;
    this.description = description;   
    this.image = image;  
    this.audio = audio;
  }

  generateCard() {
    let template = '';
    let card = document.createElement('div');
    card.className = 'description__card';
    card.setAttribute('data-id', this.id);

    template += `<div class="decription__main-content">`
    template += `<div class="description__image">`
    template += `<img class="description__img" src=${this.image} alt="${this.name}">`
    template += `</div>`
    template += `<div class="description__content">`
    template += `<div class="description__title line">${this.name}`
    template += `</div>`
    template += `<div class="description__subtitle line">${this.species}`
    template += `</div>`
    template += `<div class="description__audio">
                    <audio hidden="" class="audio"></audio>
                    <div class="controls">
                      <div class="play-container">
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
                      </div>  
                    </div>    
                    <div class="volume-container">
                      <span class="volume"></span>
                      <input type="range" value="40" min="0" max="100" step="1" class="volume-progress">
                    </div>
                  </div>`        
    template += `</div>`
    template += `</div>`
    template += `<div class="description__text-content">
                  ${this.description}
                 </div>`
    template += `</div>`

    card.innerHTML = template;
    return card;
  }
}

export default Card;