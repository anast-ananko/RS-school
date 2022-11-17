const playOkSound = () => {
  const audio = new Audio();
  audio.src = '../../assets/ok.mp3';
  audio.play(); 
}

const playErrorSound = () => {
  const audio = new Audio();
  audio.src = '../../assets/error.mp3';
  audio.play();  
}

export { playOkSound, playErrorSound };