function addPlayer(src, container) {
  const descriptionAudio = container;
  const audio = descriptionAudio.querySelector('.audio');
  audio.src = src;
  audio.preload = 'metadata';
  window.galleryAudio = audio;

  const playAudio = descriptionAudio.querySelector('.play');
  const progress = descriptionAudio.querySelector('.progress');
  
  const timeCurrentMinutes = descriptionAudio.querySelector('.time__current-minutes');
  const timeCurrentSeconds = descriptionAudio.querySelector('.time__current-seconds');
  const timeTotalMinutes = descriptionAudio.querySelector('.time__total-minutes');
  const timeTotalSeconds = descriptionAudio.querySelector('.time__total-seconds');
  
  const volume = descriptionAudio.querySelector('.volume');
  const volumeProgress = descriptionAudio.querySelector('.volume-progress'); 
  
  const toStr = (value) => {
    let str = value + "";
  
    if (str.length < 2) {
      return "0" + str;
    } else {
      return str;
    }
  }  
  
  const setTime = () => {
    audio.addEventListener('loadedmetadata', () => {
      timeTotalSeconds.innerHTML = toStr(Math.round(audio.duration)%60);
      timeTotalMinutes.innerHTML = toStr(parseInt(audio.duration/60)); 
    }); 
  }  

  setTime();
    
  const togglePlay = () => {
    const method = audio.paused ? "play" : "pause";
    audio[method]();
    playAudio.classList.toggle('pause');    
  }

  const updateProgress = () => {
    const progressLine = audio.currentTime / audio.duration * 100;
    progress.value = progressLine;
    progress.style.background = `linear-gradient(to right, #3baf8e 0%, #0e6467 ${progressLine}%, #64696b ${progressLine}%, #64696b 100%)`;
  }  
  
  const setProgress = (e) => {  
    const width = progress.clientWidth;
    const clickX = e.offsetX;
    audio.currentTime = audio.duration * (clickX / width);
  }

  const updateTime = () => {
    timeCurrentSeconds.innerHTML = toStr(Math.round(audio.currentTime)%60);
    timeCurrentMinutes.innerHTML = toStr(parseInt(audio.currentTime/60));
  }  
  
  const toggleVolume = () => {
    if (audio.volume === 0) {
      audio.volume = volumeProgress.value / 100;
    } else {
      audio.volume = 0;
    }  
      
    volume.classList.toggle('mute');
  }

  const updateVolume = () => {
    let vol = volumeProgress.value;
    audio.volume = vol / 100;
    volumeProgress.style.background = `linear-gradient(to right, #3baf8e 0%, #0e6467 ${vol}%, #64696b ${vol}%, #64696b 100%)`;

    if (audio.volume === 0) {
      volume.classList.add('mute');
    }  

    if (audio.volume !== 0) {
      volume.classList.remove('mute');
    }
  }  
  
  const setBgVolume = () => {
    let vol = volumeProgress.value;
    audio.volume = vol / 100;
    volumeProgress.style.background = `linear-gradient(to right, #3baf8e 0%, #0e6467 ${vol}%, #64696b ${vol}%, #64696b 100%)`;
  } 

  setBgVolume();
  
  playAudio.addEventListener('click', togglePlay);
  
  volume.addEventListener('click', toggleVolume);
  volumeProgress.addEventListener('input', updateVolume);
  
  audio.addEventListener('timeupdate', updateProgress);
  progress.addEventListener('click', setProgress);
  audio.addEventListener('timeupdate', updateTime);
}
  
export default addPlayer;