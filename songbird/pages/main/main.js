/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/translate.js":
/*!*****************************!*\
  !*** ./src/js/translate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _translateData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translateData */ "./src/js/translateData.js");

function translate(lang) {
  var dataLang = document.querySelectorAll('[data-i18]');
  dataLang.forEach(function (item) {
    item.textContent = _translateData__WEBPACK_IMPORTED_MODULE_0__["default"][lang][item.dataset.i18];
    if (item.placeholder) {
      item.placeholder = _translateData__WEBPACK_IMPORTED_MODULE_0__["default"][lang][item.dataset.i18];
      item.textContent = '';
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (translate);

/***/ }),

/***/ "./src/js/translateData.js":
/*!*********************************!*\
  !*** ./src/js/translateData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var i18Obj = {
  'en': {
    'home': 'Home',
    'game': 'Quiz',
    'gallery': 'Gallery',
    'pre-game': 'Pre-game',
    'passerines': 'Passerines',
    'forest-birds': 'Forest birds',
    'song-birds': 'Song birds',
    'predator-birds': 'Predator birds',
    'sea-birds': 'Sea birds',
    'score': 'Score:',
    'level': 'Next level'
  },
  'ru': {
    'home': 'Главная',
    'game': 'Викторина',
    'gallery': 'Галерея',
    'pre-game': 'Разминка',
    'passerines': 'Воробьиные',
    'forest-birds': 'Лесные птицы',
    'song-birds': 'Певчие птицы',
    'predator-birds': 'Хищные птицы',
    'sea-birds': 'Морские птицы',
    'score': 'Счёт:',
    'level': 'Следующая'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18Obj);

/***/ }),

/***/ "./src/pages/main/main.scss":
/*!**********************************!*\
  !*** ./src/pages/main/main.scss ***!
  \**********************************/
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/pages/main/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/translate */ "./src/js/translate.js");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.scss */ "./src/pages/main/main.scss");


window.addEventListener('DOMContentLoaded', function () {
  if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'ru');
  }
  var lang;
  var langRu = document.querySelector('.header__lang-ru');
  var langEng = document.querySelector('.header__lang-en');
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    (0,_js_translate__WEBPACK_IMPORTED_MODULE_0__["default"])(lang);
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
    (0,_js_translate__WEBPACK_IMPORTED_MODULE_0__["default"])('ru');
    langRu.classList.add('header__lang_active');
    langEng.classList.remove('header__lang_active');
  });
  langEng.addEventListener('click', function () {
    localStorage.setItem('lang', 'en');
    (0,_js_translate__WEBPACK_IMPORTED_MODULE_0__["default"])('en');
    langEng.classList.add('header__lang_active');
    langRu.classList.remove('header__lang_active');
  });
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map