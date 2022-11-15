/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/game/js/addFunctions.js":
/*!*******************************************!*\
  !*** ./src/pages/game/js/addFunctions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blockAllCheckboxes": () => (/* binding */ blockAllCheckboxes),
/* harmony export */   "blockCheckboxes": () => (/* binding */ blockCheckboxes)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var blockCheckboxes = function blockCheckboxes(checkboxes) {
  var _iterator = _createForOfIteratorHelper(checkboxes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      if (item.checked) {
        item.setAttribute('disabled', true);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var blockAllCheckboxes = function blockAllCheckboxes(checkboxes) {
  var correctItem = document.querySelector('.answers__item_correct > input');
  correctItem.setAttribute('checked', 'true');
  var _iterator2 = _createForOfIteratorHelper(checkboxes),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;
      item.setAttribute('disabled', true);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};


/***/ }),

/***/ "./src/pages/game/js/addPlayer.js":
/*!****************************************!*\
  !*** ./src/pages/game/js/addPlayer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function addPlayer(src) {
  var descriptionAudio = document.querySelector('.description__audio');
  var audio = descriptionAudio.querySelector('.audio');
  audio.src = src;
  audio.preload = 'metadata';
  window.activeAudio = audio;
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
    setTime();
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

/***/ "./src/pages/game/js/game.js":
/*!***********************************!*\
  !*** ./src/pages/game/js/game.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_birds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../js/birds */ "./src/js/birds.js");
/* harmony import */ var _js_birds_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/birds-en */ "./src/js/birds-en.js");
/* harmony import */ var _mainPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainPlayer */ "./src/pages/game/js/mainPlayer.js");
/* harmony import */ var _addPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addPlayer */ "./src/pages/game/js/addPlayer.js");
/* harmony import */ var _js_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../js/card */ "./src/js/card.js");
/* harmony import */ var _getRandomInt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getRandomInt */ "./src/pages/game/js/getRandomInt.js");
/* harmony import */ var _sounds__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sounds */ "./src/pages/game/js/sounds.js");
/* harmony import */ var _js_createElements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../js/createElements */ "./src/js/createElements.js");
/* harmony import */ var _addFunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addFunctions */ "./src/pages/game/js/addFunctions.js");
/* harmony import */ var _js_translate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../js/translate */ "./src/js/translate.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/index.scss */ "./src/pages/game/styles/index.scss");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }











window.addEventListener('DOMContentLoaded', function () {
  var changeLevelOfGame = function changeLevelOfGame(levelOfGame) {
    var lang = localStorage.getItem('lang');
    var arrayOfBirds;
    var canCount = true;
    if (lang === 'ru') {
      arrayOfBirds = _js_birds__WEBPACK_IMPORTED_MODULE_0__["default"][levelOfGame];
    } else {
      arrayOfBirds = _js_birds_en__WEBPACK_IMPORTED_MODULE_1__["default"][levelOfGame];
    }
    (0,_js_translate__WEBPACK_IMPORTED_MODULE_9__["default"])(lang);
    var randomNumber = (0,_getRandomInt__WEBPACK_IMPORTED_MODULE_5__["default"])(6);
    var hiddenBird = arrayOfBirds[randomNumber];
    var points = 5;
    var questions = document.querySelectorAll('.questions__item');
    var description = document.querySelector('.description');

    //==== Переключение активного вопроса в блоке Top ===
    var _iterator = _createForOfIteratorHelper(questions),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        item.classList.remove('questions__item_active');
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(questions),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _item = _step2.value;
        if (levelOfGame == _item.dataset.level) {
          _item.classList.add('questions__item_active');
        }
      }
      //==================================================== 

      //==== Отрисовка блока Current ==================
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var currentImage = document.querySelector('.current__image');
    var newImage = (0,_js_createElements__WEBPACK_IMPORTED_MODULE_7__.createHiddenBirdImage)();
    currentImage.innerHTML = '';
    currentImage.append(newImage);
    var currentTitle = document.querySelector('.current__title');
    currentTitle.innerHTML = '******';
    var currentAudio = document.querySelector('.current__audio');
    var arrayNewElements = (0,_js_createElements__WEBPACK_IMPORTED_MODULE_7__.createNewMainPlayer)();
    currentAudio.innerHTML = '';
    arrayNewElements.forEach(function (item) {
      currentAudio.append(item);
    });
    (0,_mainPlayer__WEBPACK_IMPORTED_MODULE_2__["default"])(hiddenBird.audio);
    //==============================================

    //==== Отрисовка блока Answers =================
    var arrayItems = [];
    for (var i = 0; i < arrayOfBirds.length; i++) {
      (0,_js_createElements__WEBPACK_IMPORTED_MODULE_7__.createAnswerItem)(arrayOfBirds[i].name, arrayOfBirds[i].id);
      arrayItems.push((0,_js_createElements__WEBPACK_IMPORTED_MODULE_7__.createAnswerItem)(arrayOfBirds[i].name, arrayOfBirds[i].id));
    }
    var answersContainer = document.querySelector('.answers');
    answersContainer.innerHTML = '';
    arrayItems.forEach(function (item) {
      answersContainer.append(item);
    });
    //=============================================

    //==== Отрисовка блока Description ============
    var newText = (0,_js_createElements__WEBPACK_IMPORTED_MODULE_7__.createDescriptionText)();
    description.innerHTML = '';
    description.append(newText);
    //=============================================

    //==== Сброс активной кнопки в блоке Bottom ==
    var buttonLevel = document.querySelector('.bottom__button');
    buttonLevel.classList.remove('bottom__button_active');
    buttonLevel.setAttribute('disabled', 'true');
    //=============================================    

    var answers = document.querySelectorAll('.answers__item');
    var checkboxes = document.querySelectorAll('input[type*="checkbox"]');
    var scoreNumber = document.querySelector('.top__number');
    var _iterator3 = _createForOfIteratorHelper(answers),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _item2 = _step3.value;
        if (_item2.dataset.id == hiddenBird.id) {
          _item2.classList.add('answers__item_correct');
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var showHiddenBird = function showHiddenBird() {
      var image = document.querySelector('.current__image');
      var title = document.querySelector('.current__title');
      var newImage = document.createElement('img');
      newImage.src = hiddenBird.image;
      newImage.className = "current__img";
      newImage.alt = "bird";
      image.innerHTML = '';
      image.append(newImage);
      title.innerHTML = hiddenBird.name;
      if (canCount) {
        number += points;
      }
      scoreNumber.innerHTML = number;
      if (levelOfGame === 5) {
        localStorage.setItem('score', number);
      }
    };
    var openNewLevel = function openNewLevel() {
      buttonLevel.removeAttribute('disabled');
      buttonLevel.classList.add('bottom__button_active');
    };
    window.mainAudio;
    window.activeAudio;
    var canPlaySound = true;
    var _iterator4 = _createForOfIteratorHelper(checkboxes),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _item3 = _step4.value;
        _item3.addEventListener('click', function (e) {
          e.stopPropagation();
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var handler = function handler(e) {
      if (window.activeAudio) {
        window.activeAudio.pause();
      }
      var targetNumber = e.target.closest('label').dataset.id;
      var card = new _js_card__WEBPACK_IMPORTED_MODULE_4__["default"](arrayOfBirds[targetNumber - 1]);
      description.innerHTML = '';
      description.append(card.generateCard());
      (0,_addPlayer__WEBPACK_IMPORTED_MODULE_3__["default"])(arrayOfBirds[targetNumber - 1].audio);
      if (e.target.closest('label').classList.contains('answers__item_correct')) {
        showHiddenBird();
        if (canPlaySound) {
          (0,_sounds__WEBPACK_IMPORTED_MODULE_6__.playOkSound)();
        }
        if (window.mainAudio) {
          window.mainAudio.pause();
          window.mainAudio.currentTime = 0;
        }
        openNewLevel();
        (0,_addFunctions__WEBPACK_IMPORTED_MODULE_8__.blockAllCheckboxes)(checkboxes);
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
          (0,_sounds__WEBPACK_IMPORTED_MODULE_6__.playErrorSound)();
        }
      }
      (0,_addFunctions__WEBPACK_IMPORTED_MODULE_8__.blockCheckboxes)(checkboxes);
    };
    window.handler = handler;
    answersContainer.addEventListener('click', handler);
  };
  var number = 0;
  var levelOfGame = 0;
  changeLevelOfGame(levelOfGame);
  var buttonLevel = document.querySelector('.bottom__button');
  buttonLevel.addEventListener('click', function () {
    if (window.activeAudio) {
      window.activeAudio.pause();
    }
    var answersContainer = document.querySelector('.answers');
    answersContainer.removeEventListener('click', window.handler);
    if (levelOfGame === 5) {
      window.location.href = '../results/index.html';
    } else {
      levelOfGame++;
      changeLevelOfGame(levelOfGame);
    }
  });
});

/***/ }),

/***/ "./src/pages/game/js/getRandomInt.js":
/*!*******************************************!*\
  !*** ./src/pages/game/js/getRandomInt.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRandomInt);

/***/ }),

/***/ "./src/pages/game/js/mainPlayer.js":
/*!*****************************************!*\
  !*** ./src/pages/game/js/mainPlayer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function mainPlayer(src) {
  var audio = document.querySelector('.audio');
  audio.src = src;
  audio.preload = 'metadata';
  window.mainAudio = audio;
  var playAudio = document.querySelector('.play');
  var progress = document.querySelector('.progress');
  var timeCurrentMinutes = document.querySelector('.time__current-minutes');
  var timeCurrentSeconds = document.querySelector('.time__current-seconds');
  var timeTotalMinutes = document.querySelector('.time__total-minutes');
  var timeTotalSeconds = document.querySelector('.time__total-seconds');
  var volume = document.querySelector('.volume');
  var volumeProgress = document.querySelector('.volume-progress');
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainPlayer);

/***/ }),

/***/ "./src/pages/game/js/sounds.js":
/*!*************************************!*\
  !*** ./src/pages/game/js/sounds.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playErrorSound": () => (/* binding */ playErrorSound),
/* harmony export */   "playOkSound": () => (/* binding */ playOkSound)
/* harmony export */ });
var playOkSound = function playOkSound() {
  var audio = new Audio();
  audio.src = '../../assets/ok.mp3';
  audio.play();
};
var playErrorSound = function playErrorSound() {
  var audio = new Audio();
  audio.src = '../../assets/error.mp3';
  audio.play();
};


/***/ }),

/***/ "./src/pages/game/styles/index.scss":
/*!******************************************!*\
  !*** ./src/pages/game/styles/index.scss ***!
  \******************************************/
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
/******/ 			"game": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_js_birds-en_js-src_js_birds_js-src_js_card_js-src_js_createElements_js-src_js_translate_js"], () => (__webpack_require__("./src/pages/game/js/game.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=game.js.map