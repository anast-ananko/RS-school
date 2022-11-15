/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/gallery/js/gallery.js":
/*!*****************************************!*\
  !*** ./src/pages/gallery/js/gallery.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../js/card */ "./src/js/card.js");
/* harmony import */ var _js_birds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/birds */ "./src/js/birds.js");
/* harmony import */ var _js_birds_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../js/birds-en */ "./src/js/birds-en.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/pages/gallery/js/player.js");
/* harmony import */ var _js_createElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../js/createElements */ "./src/js/createElements.js");
/* harmony import */ var _js_translate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../js/translate */ "./src/js/translate.js");
/* harmony import */ var _gallery_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../gallery.scss */ "./src/pages/gallery/gallery.scss");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







window.addEventListener('DOMContentLoaded', function () {
  var arrayOfBirds;
  var slides;
  var numberOfBlock = 0;
  var addAudio = function addAudio(number) {
    (0,_player__WEBPACK_IMPORTED_MODULE_3__["default"])(arrayOfBirds[number - 1].audio, slides[number - 1]);
  };
  var updateAudio = function updateAudio() {
    var audio = slides[slideIndex - 1].querySelector('.description__audio');
    audio.innerHTML = '';
    var newAudioElements = (0,_js_createElements__WEBPACK_IMPORTED_MODULE_4__.createNewMainPlayer)();
    newAudioElements.forEach(function (item) {
      audio.append(item);
    });
    addAudio(slideIndex);
  };
  var updateActiveSlideWithLang = function updateActiveSlideWithLang() {
    var cardsInner = document.querySelector('.slider__inner');
    var cardsWrapper = document.querySelector('.slider__wrapper');
    var widthOfSLide = window.getComputedStyle(cardsWrapper).width;
    if (window.activeSlide) {
      current.textContent = window.activeSlide;
      slideIndex = window.window.activeSlide;
      offset = +widthOfSLide.slice(0, widthOfSLide.length - 2) * (window.activeSlide - 1);
      cardsInner.style.transform = "translateX(-".concat(offset, "px)");
      updateAudio();
    }
  };
  var lang;
  var langRu = document.querySelector('.header__lang-ru');
  var langEng = document.querySelector('.header__lang-en');
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    (0,_js_translate__WEBPACK_IMPORTED_MODULE_5__["default"])(lang);
    if (lang === 'en') {
      langEng.classList.add('header__lang_active');
      langRu.classList.remove('header__lang_active');
    } else {
      langRu.classList.add('header__lang_active');
      langEng.classList.remove('header__lang_active');
    }
  }
  langRu.addEventListener('click', function () {
    localStorage.setItem('lang', 'ru');
    (0,_js_translate__WEBPACK_IMPORTED_MODULE_5__["default"])('ru');
    langRu.classList.add('header__lang_active');
    langEng.classList.remove('header__lang_active');
    window.activeSlide = document.querySelector('.slider__current').innerHTML;
    updateSlider(numberOfBlock);
    updateActiveSlideWithLang();
  });
  langEng.addEventListener('click', function () {
    localStorage.setItem('lang', 'en');
    (0,_js_translate__WEBPACK_IMPORTED_MODULE_5__["default"])('en');
    langEng.classList.add('header__lang_active');
    langRu.classList.remove('header__lang_active');
    window.activeSlide = document.querySelector('.slider__current').innerHTML;
    updateSlider(numberOfBlock);
    updateActiveSlideWithLang();
  });
  var buttons = document.querySelectorAll('.block__button');
  var clearAciveClasses = function clearAciveClasses() {
    buttons.forEach(function (btn) {
      btn.classList.remove('block__button_active');
    });
  };
  var _iterator = _createForOfIteratorHelper(buttons),
    _step;
  try {
    var _loop = function _loop() {
      var btn = _step.value;
      btn.addEventListener('click', function () {
        clearAciveClasses();
        btn.classList.add('block__button_active');
        numberOfBlock = btn.dataset.block;
        updateSlider(numberOfBlock);
      });
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var toNumber = function toNumber(str) {
    return +str.replace(/\D/g, '');
  };

  //slider 
  var slideIndex;
  var offset;
  var current;
  var updateSlider = function updateSlider(number) {
    var cardsWrapper = document.querySelector('.slider__wrapper');
    offset = 0;
    slideIndex = 1;
    window.numberOfBird = slideIndex;
    var cards = document.createElement('div');
    cards.className = 'slider__inner';
    lang = localStorage.getItem('lang');
    if (lang === 'ru') {
      arrayOfBirds = _js_birds__WEBPACK_IMPORTED_MODULE_1__["default"][number];
    } else {
      arrayOfBirds = _js_birds_en__WEBPACK_IMPORTED_MODULE_2__["default"][number];
    }
    var createSlide = function createSlide(data) {
      var card = new _js_card__WEBPACK_IMPORTED_MODULE_0__["default"](data);
      return card.generateCard();
    };
    arrayOfBirds.forEach(function (item) {
      cards.append(createSlide(item));
    });
    cardsWrapper.innerHTML = '';
    cardsWrapper.append(cards);
    var counter = document.querySelector('.slider__counter');
    counter.innerHTML = '';
    counter.innerHTML = " <div class=\"slider__prev\">\n                            <img src=\"../../assets/left.png\" alt=\"prev\">\n                          </div>\n                          <span class=\"slider__current\"></span>\n                          <span>/</span>\n                          <span class=\"slider__total\"></span>\n                          <div class=\"slider__next\">\n                            <img src=\"../../assets/right.png\" alt=\"next\">\n                          </div>";
    var cardsInner = document.querySelector('.slider__inner');
    slides = document.querySelectorAll('.description__card');
    current = document.querySelector('.slider__current');
    var total = document.querySelector('.slider__total');
    var prev = document.querySelector('.slider__prev');
    var next = document.querySelector('.slider__next');
    total.textContent = slides.length;
    current.textContent = slideIndex;
    addAudio(slideIndex);
    next.addEventListener('click', function () {
      if (window.galleryAudio) {
        window.galleryAudio.pause();
        window.galleryAudio.currentTime = 0;
      }
      cardsWrapper = document.querySelector('.slider__wrapper');
      var widthOfSLide = window.getComputedStyle(cardsWrapper).width;
      if (offset == toNumber(widthOfSLide) * (slides.length - 1)) {
        offset = 0;
      } else {
        offset += toNumber(widthOfSLide);
      }
      cardsInner.style.transform = "translateX(-".concat(offset, "px)");
      if (slideIndex == slides.length) {
        slideIndex = 1;
      } else {
        slideIndex++;
        window.numberOfBird = slideIndex;
      }
      updateAudio();
      current.textContent = slideIndex;
    });
    prev.addEventListener('click', function () {
      if (window.galleryAudio) {
        window.galleryAudio.pause();
        window.galleryAudio.currentTime = 0;
      }
      cardsWrapper = document.querySelector('.slider__wrapper');
      var widthOfSLide = window.getComputedStyle(cardsWrapper).width;
      if (offset == 0) {
        offset = toNumber(widthOfSLide) * (slides.length - 1);
      } else {
        offset -= toNumber(widthOfSLide);
      }
      cardsInner.style.transform = "translateX(-".concat(offset, "px)");
      if (slideIndex == 1) {
        slideIndex = slides.length;
      } else {
        slideIndex--;
        window.numberOfBird = slideIndex;
      }
      updateAudio();
      current.textContent = slideIndex;
    });
  };
  updateSlider(0);
  window.addEventListener('resize', function () {
    var cardsInner = document.querySelector('.slider__inner');
    var cardsWrapper = document.querySelector('.slider__wrapper');
    var widthOfSLide = window.getComputedStyle(cardsWrapper).width;
    if (window.numberOfBird) {
      current.textContent = window.numberOfBird;
      slideIndex = window.numberOfBird;
      offset = +widthOfSLide.slice(0, widthOfSLide.length - 2) * (window.numberOfBird - 1);
      cardsInner.style.transform = "translateX(-".concat(offset, "px)");
    }
  });
});

/***/ }),

/***/ "./src/pages/gallery/js/player.js":
/*!****************************************!*\
  !*** ./src/pages/gallery/js/player.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function addPlayer(src, container) {
  var descriptionAudio = container;
  var audio = descriptionAudio.querySelector('.audio');
  audio.src = src;
  audio.preload = 'metadata';
  window.galleryAudio = audio;
  var playAudio = descriptionAudio.querySelector('.play');
  var progress = descriptionAudio.querySelector('.progress');
  var timeCurrentMinutes = descriptionAudio.querySelector('.time__current-minutes');
  var timeCurrentSeconds = descriptionAudio.querySelector('.time__current-seconds');
  var timeTotalMinutes = descriptionAudio.querySelector('.time__total-minutes');
  var timeTotalSeconds = descriptionAudio.querySelector('.time__total-seconds');
  var volume = descriptionAudio.querySelector('.volume');
  var volumeProgress = descriptionAudio.querySelector('.volume-progress');
  var toStr = function toStr(value) {
    var str = value + "";
    if (str.length < 2) {
      return "0" + str;
    } else {
      return str;
    }
  };
  var setTime = function setTime() {
    audio.addEventListener('loadedmetadata', function () {
      timeTotalSeconds.innerHTML = toStr(Math.round(audio.duration) % 60);
      timeTotalMinutes.innerHTML = toStr(parseInt(audio.duration / 60));
    });
  };
  setTime();
  var togglePlay = function togglePlay() {
    var method = audio.paused ? "play" : "pause";
    audio[method]();
    playAudio.classList.toggle('pause');
  };
  var updateProgress = function updateProgress() {
    var progressLine = audio.currentTime / audio.duration * 100;
    progress.value = progressLine;
    progress.style.background = "linear-gradient(to right, #3baf8e 0%, #0e6467 ".concat(progressLine, "%, #64696b ").concat(progressLine, "%, #64696b 100%)");
  };
  var setProgress = function setProgress(e) {
    var width = progress.clientWidth;
    var clickX = e.offsetX;
    audio.currentTime = audio.duration * (clickX / width);
  };
  var updateTime = function updateTime() {
    timeCurrentSeconds.innerHTML = toStr(Math.round(audio.currentTime) % 60);
    timeCurrentMinutes.innerHTML = toStr(parseInt(audio.currentTime / 60));
  };
  var toggleVolume = function toggleVolume() {
    if (audio.volume === 0) {
      audio.volume = volumeProgress.value / 100;
    } else {
      audio.volume = 0;
    }
    volume.classList.toggle('mute');
  };
  var updateVolume = function updateVolume() {
    var vol = volumeProgress.value;
    audio.volume = vol / 100;
    volumeProgress.style.background = "linear-gradient(to right, #3baf8e 0%, #0e6467 ".concat(vol, "%, #64696b ").concat(vol, "%, #64696b 100%)");
    if (audio.volume === 0) {
      volume.classList.add('mute');
    }
    if (audio.volume !== 0) {
      volume.classList.remove('mute');
    }
  };
  var setBgVolume = function setBgVolume() {
    var vol = volumeProgress.value;
    audio.volume = vol / 100;
    volumeProgress.style.background = "linear-gradient(to right, #3baf8e 0%, #0e6467 ".concat(vol, "%, #64696b ").concat(vol, "%, #64696b 100%)");
  };
  setBgVolume();
  playAudio.addEventListener('click', togglePlay);
  volume.addEventListener('click', toggleVolume);
  volumeProgress.addEventListener('input', updateVolume);
  audio.addEventListener('timeupdate', updateProgress);
  progress.addEventListener('click', setProgress);
  audio.addEventListener('timeupdate', updateTime);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addPlayer);

/***/ }),

/***/ "./src/pages/gallery/gallery.scss":
/*!****************************************!*\
  !*** ./src/pages/gallery/gallery.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"gallery": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksongbird"] = self["webpackChunksongbird"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_js_birds-en_js-src_js_birds_js-src_js_card_js-src_js_createElements_js-src_js_translate_js"], () => (__webpack_require__("./src/pages/gallery/js/gallery.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=gallery.js.map