import jsonObject from "../../pets.json" assert { type: "json" };

import data from "../../reviews.json" assert { type: "json" };

window.addEventListener('DOMContentLoaded', function() {
    burgerMenuHandler(); 
    openMenuHandler();
    stopBurgerPropagation();   

    //slider

    //generateArrayRandomNumber(jsonObject);
    firstGenerateCards(jsonObject);
    slider(jsonObject);  

    //reviews
    initialReviews(data);
    rangeHandler();
   // console.log(data);

   //modal
   if (document.documentElement.clientWidth < 1000) {
        //console.log(document.documentElement.clientWidth )
        openModal();
   }
   


});

//burger

const MENU = document.querySelector('.header__nav');
const BURGER =  document.querySelector('.header__burger');
const BODY = document.querySelector('body');

const toggleMENU = () => {
    MENU.classList.toggle('header__nav_active'); 
    BODY.classList.toggle('overflow-hidden');        
}

const burgerMenuHandler = () => {
    BURGER.addEventListener('click', () => {
        toggleMENU();
    })
}

const stopBurgerPropagation = () => {
    BURGER.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

const openMenuHandler = () => {
    document.addEventListener('click', (e) => {
        let target = e.target;
        let its_menu = target == MENU || MENU.contains(target);
        let menu_is_active = MENU.classList.contains('header__nav_active');       

        if ( !its_menu && menu_is_active ) {
            toggleMENU();   
        }        
    });
}


// slider

let centerCards = document.querySelector('.pets__cards-active');
let leftCards = document.querySelector('.pets__cards-left');
let rightCards = document.querySelector('.pets__cards-right');
//let activeCenterCards = document.querySelectorAll('.pets__cards-active >.pets__card');


// класс для создания карточки животного
class Card {
    constructor({ id, name, country, img, food, classFood }) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.img = img;   
        this.food = food;  
        this.classFood = classFood
    }

    generateCard() {
        let template = '';
        let card = document.createElement('div');
        card.className = 'pets__card';
        card.setAttribute('data-id', this.id);

        template += `<div class="pets__card-image">`
        template += `<img class="pets__image" src=${this.img} alt="${this.name}">`
        template += `</div>`
        template += `<div class="pets__desc">`
        template += `<div class="pets__desc-text">`
        template += `<p class="pets__title">${this.name}</p>`
        template += `<p class="pets__country">${this.country}</p>`
        template += `</div>`
        template += `<div class="pets__desc-icon">`
        template += `<object type="image/svg+xml" data=${this.food} class=${this.classFood}></object>`
        template += `</div>`
        template += `</div>`

        card.innerHTML = template;
        return card;
    }
}

// генерация массива случайных чисел для одного слайда
const generateArrayRandomNumber = (data) => {
    let widthContent = document.documentElement.clientWidth;
    let number;
    if (widthContent >= 640) {
        number = 6;
    } else number = 4;

    let arrayRandomNumbers = [];
    //let activeNumbers = [];
    //let activeCards = active;

    // for (let i = 0; i < activeCards.length; i++) {
    //     activeNumbers.push(Number(activeCards[i].dataset.id) - 1);
    // }
    
    do {   
        let randomNumber = Math.floor(Math.random() * data.length);
        //if (!activeNumbers.includes(randomNumber)) {
            if (!arrayRandomNumbers.includes(randomNumber)) {
                arrayRandomNumbers.push(randomNumber);
            }
       // }
    } while (arrayRandomNumbers.length < number);
    //console.log(arrayRandomNumbers)
    return arrayRandomNumbers;
}

// генерация карточек на одном слайде
const generateCards = (data) => { 
    let cards = [];
    let arrayRandomNumbers = generateArrayRandomNumber(data);

    for (let i = 0; i < arrayRandomNumbers.length; i++) {
        cards.push(new Card(data[arrayRandomNumbers[i]]));
    }
  // console.log(cards)
    return cards; 
}

const firstGenerateCards = (data) => {
    centerCards.innerHTML = '';
    renderDivsToDom(data, centerCards, true);
    renderDivsToDom(data, leftCards);
    renderDivsToDom(data, rightCards);
}

const renderDivsToDom = (data, part) => {
    let cardsWrapper = part;
    cardsWrapper.innerHTML = '';

    generateCards(data).forEach(card => {
        cardsWrapper.append(card.generateCard());
    })

    // if (generationCenterCards) {
    //     activeCenterCards = document.querySelectorAll('.pets__cards-active >.pets__card');
    // }
}

const BTN_LEFT = document.querySelector(".arrow-left");
const BTN_RIGHT = document.querySelector(".arrow-right");
const CAROUSEL = document.querySelector(".pets__cards");

const moveLeft = () => {
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
    CAROUSEL.classList.add("transition-right");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

const slider = (data) => {
   
    CAROUSEL.addEventListener("animationend", (animationEvent) => {

        let newCards = document.createElement('div');        
      
        if (animationEvent.animationName === "move-left") {
            CAROUSEL.classList.remove("transition-left");

            let left = document.querySelectorAll('.pets__cards-left >.pets__card');
        
            newCards.innerHTML = '';
            generateCards(data, left).forEach(card => {
                newCards.append(card.generateCard());
            }) 

        centerCards.innerHTML = leftCards.innerHTML;
        leftCards.innerHTML = newCards.innerHTML;
          
        } else {
            CAROUSEL.classList.remove("transition-right");

            let right = document.querySelectorAll('.pets__cards-right >.pets__card');
        
            newCards.innerHTML = '';
            generateCards(data, right).forEach(card => {
                newCards.append(card.generateCard());
            })
     
            centerCards.innerHTML = rightCards.innerHTML;
            rightCards.innerHTML = newCards.innerHTML;          
        } 
        
        BTN_LEFT.addEventListener("click", moveLeft);
        BTN_RIGHT.addEventListener("click", moveRight);
    })
}




// slider reviews

const elem = document.querySelector('.progress');
const reviews = document.querySelector('.testimonials__cards');

// класс для создания отзыва
class Review {
    constructor({ id, name, country, data, img, text }) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.data = data;
        this.img = img;   
        this.text =  text;          
    }

    generateCard() {
        let template = '';
        let card = document.createElement('div');
        card.className = 'testimonials__card';
        card.setAttribute('data-id', this.id);

        template += `<div class="testimonials__card-title">`
        template += `<div class="testimonials__card-pic">`
        template += `<img class="testimonials__pic" src=${this.img} alt="user">`
        template += `</div>`
        template += `<div class="testimonials__card-desc">`
        template += `<div class="testimonials__card-name">`
        template += `${this.name}`
        template += `</div>`
        template += `<div class="testimonials__card-add">`
        template += `<p class="testimonials__card-local">${this.country}</p>`
        template += `<p>•</p>`
        template += `<p class="testimonials__card-data">${this.data}</p>`
        template += `</div>`
        template += `</div>`
        template += `</div>`
        template += `<div class="testimonials__card-text">`
        template += `${this.text}`
        template += `</div>`
         
        card.innerHTML = template;
        return card;
    }
}
// генерация отзывов

const generateReviews = (data) => { 
    let cards = [];
    let widthContent = document.documentElement.clientWidth;
    let number = 0;

    if (widthContent >= 1000) {
        number = 11;
    } else {
        number = 3;
    }
    console.log(number)
    for (let i = 0; i < number; i++) {
        cards.push(new Review(data[i]));
    }
    
    return cards; 
}

const renderRiviewsToDom = (data) => {
   
    reviews.innerHTML = '';

    generateReviews(data).forEach(l => {
        reviews.append(l.generateCard());
    })
    console.log(reviews)

}


const initialReviews = (data) => {
    let widthContent = document.documentElement.clientWidth;

    if (widthContent < 1600) {
        elem.max = 8;
    }

    //console.log(data);
    //reviews.innerHTML = '';
    renderRiviewsToDom(data);
}

const rangeValue = () => { 
    console.log(elem.max);
    let newValue = elem.value;
   //console.log(newValue)
   // let target = document.querySelector('.value');
    //target.innerHTML = newValue;
    shiftReviews(newValue);    
    
}

const shiftReviews = (shift) => {
    let r = shift * 296;
   // let t = `${r}px`;
   // console.log(t);
   
   console.log(elem.max);
    if(elem.max == 7) {
        r = shift * 296;
    } else {
        r = shift * 321;
    }
   
    reviews.style.transform = `translateX(-${r}px)`;
    
};

const rangeHandler = () => {
    elem.addEventListener("input", rangeValue);

}


// modal
class Modal {
    constructor ({ id, name, country, data, img, text }) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.data = data;
        this.img = img;   
        this.text =  text;  

        this.overlay = '';
        this.modalContent = '';
        this.modalCloseBtn = '';
    }

    generateContent() {
        let template = '';
        let modalCard = document.createElement('div');
        modalCard.className = 'modal__card testimonials__card';
        modalCard.setAttribute('data-id', this.id);

        template += `<div class="testimonials__card-title">`
        template += `<div class="testimonials__card-pic">`
        template += `<img class="testimonials__pic" src=${this.img} alt="user">`
        template += `</div>`
        template += `<div class="testimonials__card-desc">`
        template += `<div class="testimonials__card-name">`
        template += `${this.name}`
        template += `</div>`
        template += `<div class="testimonials__card-add">`
        template += `<p class="testimonials__card-local">${this.country}</p>`
        template += `<p>•</p>`
        template += `<p class="testimonials__card-data">${this.data}</p>`
        template += `</div>`
        template += `</div>`
        template += `</div>`
        template += `<div class="testimonials__card-text">`
        template += `${this.text}`
        template += `</div>`

        modalCard.innerHTML = template;
        return modalCard;
    }

    renderModal() {
        this.buildModal();
    }

    buildModal() {
        this.overlay = this.createDomNode(this.overlay, 'div', 'overlay', 'overlay_modal');

        //Modal
        this.modal = this.createDomNode(this.modal, 'div', 'modal');

        //Modal content
        this.modalContent = this.generateContent();

        //Close Button
        this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'button', 'modal__close-btn');
        this.modalCloseBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4239 10.5172L20.6009 2.33999C21.1331 1.80809 21.1331 0.948089 20.6009 0.416194C20.069 -0.115701 19.209 -0.115701 18.6771 0.416194L10.4999 8.59343L2.3229 0.416194C1.79076 -0.115701 0.931004 -0.115701 0.399108 0.416194C-0.133036 0.948089 -0.133036 1.80809 0.399108 2.33999L8.5761 10.5172L0.399108 18.6945C-0.133036 19.2263 -0.133036 20.0863 0.399108 20.6182C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6182L10.4999 12.441L18.6771 20.6182C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6182C21.1331 20.0863 21.1331 19.2263 20.6009 18.6945L12.4239 10.5172Z" fill="#EBC386"/></svg>';
        
        this.appendModalElements();

        // Bind Events
        this.bindEvents();

        // Open Modal
        this.openModal();
    }

    createDomNode (node, element, ...classes){
        node = document.createElement(element);
        node.classList.add(...classes);
        return node;
    }

    appendModalElements() {
        this.modal.append(this.modalCloseBtn);
        this.modal.append(this.modalContent);
        this.overlay.append(this.modal);
    }

    bindEvents() {
        this.modalCloseBtn.addEventListener('click', this.closeModalByButton);
        this.overlay.addEventListener('click', this.closeModal);
    }

    openModal() {
        document.body.append(this.overlay);
        BODY.classList.add('no-scroll');  
    }

    closeModal(e) {
        let classes = e.target.classList;
        if (classes.contains('overlay')) {
            document.querySelector('.overlay').remove();            
        }
        BODY.classList.remove('no-scroll');          
    }

    closeModalByButton() {        
        document.querySelector('.overlay').remove();
        BODY.classList.remove('no-scroll');  
        
    }
}

const renderModalWindow = (card) => {
    let modal =  new Modal (card);
    modal.renderModal();
}

const getClickedData = (id) => {
    return data.find(info => info.id == id);
}

const openModal = () => {
    reviews.addEventListener('click', (e) => {
        if (e.target.closest('.testimonials__card')) {
            let id = e.target.closest('.testimonials__card').getAttribute('data-id');
            let clickedData = getClickedData(id);        
            renderModalWindow(clickedData);
        }
    })
}
