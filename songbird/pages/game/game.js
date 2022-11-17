(()=>{"use strict";var e,t={29:(e,t,n)=>{var r=n(912),a=n(690);var o=n(224);var i=function(e,t){var n=document.createElement("label");n.className="answers__item",n.setAttribute("data-id",t);var r="".concat(e,'\n                  <input type="checkbox">\n                  <span class="checkmark"></span>');return n.innerHTML=r,n};function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=n(617);function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}window.addEventListener("DOMContentLoaded",(function(){var e=function(e){var n,u=localStorage.getItem("lang"),d=!0;n="ru"===u?r.Z[e]:a.Z[e],(0,s.Z)(u);var m,v,f=(v=6,Math.floor(Math.random()*v)),p=n[f],y=5,b=document.querySelectorAll(".questions__item"),g=document.querySelector(".description"),_=l(b);try{for(_.s();!(m=_.n()).done;)m.value.classList.remove("questions__item_active")}catch(e){_.e(e)}finally{_.f()}var h,L=l(b);try{for(L.s();!(h=L.n()).done;){var w=h.value;e==w.dataset.level&&w.classList.add("questions__item_active")}}catch(e){L.e(e)}finally{L.f()}var S,q=document.querySelector(".current__image"),A=((S=document.createElement("img")).className="current__img",S.alt="bird",S.src="../../assets/bird.jpg",S);q.innerHTML="",q.append(A),document.querySelector(".current__title").innerHTML="******";var T=document.querySelector(".current__audio"),E=function(){var e=document.createElement("audio");e.className="audio";var t=document.createElement("div");t.className="controls",t.innerHTML='<div class="play-container">\n                          <span class="play"></span>\n                        </div>\n                        <div class="progress-container">\n                          <input type="range" value="0" max="100" class="progress">          \n                          <div class="time">\n                            <span class="time__current">\n                              <span class="time__current-minutes">00</span>:<span class="time__current-seconds">00</span>\n                            </span>\n                            <span class="time__total">\n                              <span class="time__total-minutes">00</span>:<span class="time__total-seconds">00</span>\n                            </span>\n                          </div>\n                        </div>';var n=document.createElement("div");return n.className="volume-container",n.innerHTML='<span class="volume"></span>\n                                <input type="range" value="40" min="0" max="100" \n                                        step="1" class="volume-progress">',[e,t,n]}();T.innerHTML="",E.forEach((function(e){T.append(e)})),function(e){var t=document.querySelector(".audio");t.src=e,t.preload="metadata",window.mainAudio=t;var n,r=document.querySelector(".play"),a=document.querySelector(".progress"),o=document.querySelector(".time__current-minutes"),i=document.querySelector(".time__current-seconds"),c=document.querySelector(".time__total-minutes"),u=document.querySelector(".time__total-seconds"),s=document.querySelector(".volume"),l=document.querySelector(".volume-progress"),d=function(e){var t=e+"";return t.length<2?"0"+t:t};t.addEventListener("loadedmetadata",(function(){u.innerHTML=d(Math.round(t.duration)%60),c.innerHTML=d(parseInt(t.duration/60))})),n=l.value,t.volume=n/100,l.style.background="linear-gradient(to right, #3baf8e 0%, #0e6467 ".concat(n,"%, #64696b ").concat(n,"%, #64696b 100%)"),r.addEventListener("click",(function(){var e=t.paused?"play":"pause";t[e](),r.classList.toggle("pause")})),s.addEventListener("click",(function(){0===t.volume?t.volume=l.value/100:t.volume=0,s.classList.toggle("mute")})),l.addEventListener("input",(function(){var e=l.value;t.volume=e/100,l.style.background="linear-gradient(to right, #3baf8e 0%, #0e6467 ".concat(e,"%, #64696b ").concat(e,"%, #64696b 100%)"),0===t.volume&&s.classList.add("mute"),0!==t.volume&&s.classList.remove("mute")})),t.addEventListener("timeupdate",(function(){var e=t.currentTime/t.duration*100;a.value=e,a.style.background="linear-gradient(to right, #3baf8e 0%, #0e6467 ".concat(e,"%, #64696b ").concat(e,"%, #64696b 100%)")})),a.addEventListener("click",(function(e){var n=a.clientWidth,r=e.offsetX;t.currentTime=t.duration*(r/n)})),t.addEventListener("timeupdate",(function(){i.innerHTML=d(Math.round(t.currentTime)%60),o.innerHTML=d(parseInt(t.currentTime/60))}))}(p.audio);for(var k=[],M=0;M<n.length;M++)i(n[M].name,n[M].id),k.push(i(n[M].name,n[M].id));var H=document.querySelector(".answers");H.innerHTML="",k.forEach((function(e){H.append(e)}));var O=function(){var e,t=document.createElement("div");return t.className="description__text",localStorage.getItem("lang")&&(e=localStorage.getItem("lang")),t.innerHTML="en"===e?"Listen to the player. <br> Select a bird from the list":"Послушайте плеер. <br> Выберите птицу из списка",t}();g.innerHTML="",g.append(O);var I=document.querySelector(".bottom__button");I.classList.remove("bottom__button_active"),I.setAttribute("disabled","true");var x,j=document.querySelectorAll(".answers__item"),N=document.querySelectorAll('input[type*="checkbox"]'),C=document.querySelector(".top__number"),Z=l(j);try{for(Z.s();!(x=Z.n()).done;){var P=x.value;P.dataset.id==p.id&&P.classList.add("answers__item_correct")}}catch(e){Z.e(e)}finally{Z.f()}window.mainAudio,window.activeAudio;var U,W=!0,X=l(N);try{for(X.s();!(U=X.n()).done;)U.value.addEventListener("click",(function(e){e.stopPropagation()}))}catch(e){X.e(e)}finally{X.f()}var $=function(r){window.activeAudio&&window.activeAudio.pause();var a,i=r.target.closest("label").dataset.id,u=new o.Z(n[i-1]);g.innerHTML="",g.append(u.generateCard()),function(e){var t=document.querySelector(".description__audio"),n=t.querySelector(".audio");n.src=e,n.preload="metadata",window.activeAudio=n;var r,a=t.querySelector(".play"),o=t.querySelector(".progress"),i=t.querySelector(".time__current-minutes"),c=t.querySelector(".time__current-seconds"),u=t.querySelector(".time__total-minutes"),s=t.querySelector(".time__total-seconds"),l=t.querySelector(".volume"),d=t.querySelector(".volume-progress"),m=function(e){var t=e+"";return t.length<2?"0"+t:t},v=function(){n.addEventListener("loadedmetadata",(function(){s.innerHTML=m(Math.round(n.duration)%60),u.innerHTML=m(parseInt(n.duration/60))}))};v(),r=d.value,n.volume=r/100,d.style.background="linear-gradient(to right, #3baf8e 0%, #0e6467 ".concat(r,"%, #64696b ").concat(r,"%, #64696b 100%)"),a.addEventListener("click",(function(){v();var e=n.paused?"play":"pause";n[e](),a.classList.toggle("pause")})),l.addEventListener("click",(function(){0===n.volume?n.volume=d.value/100:n.volume=0,l.classList.toggle("mute")})),d.addEventListener("input",(function(){var e=d.value;n.volume=e/100,d.style.background="linear-gradient(to right, #3baf8e 0%, #0e6467 ".concat(e,"%, #64696b ").concat(e,"%, #64696b 100%)"),0===n.volume&&l.classList.add("mute"),0!==n.volume&&l.classList.remove("mute")})),n.addEventListener("timeupdate",(function(){var e=n.currentTime/n.duration*100;o.value=e,o.style.background="linear-gradient(to right, #3baf8e 0%, #0e6467 ".concat(e,"%, #64696b ").concat(e,"%, #64696b 100%)")})),o.addEventListener("click",(function(e){var t=o.clientWidth,r=e.offsetX;n.currentTime=n.duration*(r/t)})),n.addEventListener("timeupdate",(function(){c.innerHTML=m(Math.round(n.currentTime)%60),i.innerHTML=m(parseInt(n.currentTime/60))}))}(n[i-1].audio),r.target.closest("label").classList.contains("answers__item_correct")?(function(){var n=document.querySelector(".current__image"),r=document.querySelector(".current__title"),a=document.createElement("img");a.src=p.image,a.className="current__img",a.alt="bird",n.innerHTML="",n.append(a),r.innerHTML=p.name,d&&(t+=y),C.innerHTML=t,5===e&&localStorage.setItem("score",t)}(),W&&((a=new Audio).src="../../assets/ok.mp3",a.play()),window.mainAudio&&(window.mainAudio.pause(),window.mainAudio.currentTime=0),I.removeAttribute("disabled"),I.classList.add("bottom__button_active"),function(e){document.querySelector(".answers__item_correct > input").setAttribute("checked","true");var t,n=c(e);try{for(n.s();!(t=n.n()).done;)t.value.setAttribute("disabled",!0)}catch(e){n.e(e)}finally{n.f()}}(N),W=!1,d=!1):(r.target.closest("label").hasAttribute("data-clicked")||d&&y--,r.target.closest("label").classList.contains("answers__item")&&r.target.closest("label").setAttribute("data-clicked",!0),W&&function(){var e=new Audio;e.src="../../assets/error.mp3",e.play()}()),function(e){var t,n=c(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.checked&&r.setAttribute("disabled",!0)}}catch(e){n.e(e)}finally{n.f()}}(N)};window.handler=$,H.addEventListener("click",$)},t=0,n=0;e(n),document.querySelector(".bottom__button").addEventListener("click",(function(){window.activeAudio&&window.activeAudio.pause(),document.querySelector(".answers").removeEventListener("click",window.handler),5===n?window.location.href="../results/index.html":(n++,e(n))}))}))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,a,o)=>{if(!n){var i=1/0;for(l=0;l<e.length;l++){for(var[n,a,o]=e[l],c=!0,u=0;u<n.length;u++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(c=!1,o<i&&(i=o));if(c){e.splice(l--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,a,o]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={757:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[i,c,u]=n,s=0;if(i.some((t=>0!==e[t]))){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(u)var l=u(r)}for(t&&t(n);s<i.length;s++)o=i[s],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(l)},n=self.webpackChunksongbird=self.webpackChunksongbird||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[402],(()=>r(29)));a=r.O(a)})();