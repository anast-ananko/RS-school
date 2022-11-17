import './results.scss';

window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('.main__content');
  let score;
  let template = '';

  if (localStorage.getItem('score')) {
    score = localStorage.getItem('score');    
  }
  
  const text = document.createElement('div');
  text.className = 'main__text';

  let lang = localStorage.getItem('lang'); 

  if (lang === 'ru') {
    if (score < 30) {
      template += `<div class="main__title">Поздравляем!</div>`
      template += `<div class="main__description">
                    Вы прошли викторину и набрали 
                    <span class="main__score">${score}</span>
                     из <span class="main__score">30</span> возможных баллов
                   </div>`
      template += `<div class="main__links">`
      template += `<a href="../game/index.html" class="link">Попробовать еще раз</a>`
      template += `<a href="../main/index.html" class="link">На главную</a>`
      template += `</div>`
    } else {
      template += `<div class="main__title">Поздравляем!</div>`
      template += `<div class="main__description">
                    Вы набрали максимальное количество баллов!
                    <br>
                    Игра окончена!
                   </div>`
      template += `<a href="../main/index.html" class="link link_center">На главную</a>`              
    }
  } else {
    if (score < 30) {
      template += `<div class="main__title">Congratulations!</div>`
      template += `<div class="main__description">
                    You passed the quiz and scored
                    <span class="main__score">${score}</span>
                    out of <span class="main__score">30</span> possible points
                   </div>`
      template += `<div class="main__links">`
      template += `<a href="../game/index.html" class="link">Try again</a>`
      template += `<a href="../main/index.html" class="link">Home</a>`
      template += `</div>`
    } else {
      template += `<div class="main__title">Congratulations!</div>`
      template += `<div class="main__description">
                    You have scored the maximum number of points!
                    <br>
                    The game is over!
                   </div>`
      template += `<a href="../main/index.html" class="link link_center">Home</a>`              
    }
  } 

  text.innerHTML = template;
  body.append(text);
});  