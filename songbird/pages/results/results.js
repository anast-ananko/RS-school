/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/results/results.scss":
/*!****************************************!*\
  !*** ./src/pages/results/results.scss ***!
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
/************************************************************************/
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
/*!**************************************!*\
  !*** ./src/pages/results/results.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _results_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./results.scss */ "./src/pages/results/results.scss");

window.addEventListener('DOMContentLoaded', function () {
  var body = document.querySelector('.main__content');
  var score;
  var template = '';
  if (localStorage.getItem('score')) {
    score = localStorage.getItem('score');
  }
  var text = document.createElement('div');
  text.className = 'main__text';
  var lang = localStorage.getItem('lang');
  if (lang === 'ru') {
    if (score < 30) {
      template += "<div class=\"main__title\">\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u0435\u043C!</div>";
      template += "<div class=\"main__description\">\n                    \u0412\u044B \u043F\u0440\u043E\u0448\u043B\u0438 \u0432\u0438\u043A\u0442\u043E\u0440\u0438\u043D\u0443 \u0438 \u043D\u0430\u0431\u0440\u0430\u043B\u0438 \n                    <span class=\"main__score\">".concat(score, "</span>\n                     \u0438\u0437 <span class=\"main__score\">30</span> \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0445 \u0431\u0430\u043B\u043B\u043E\u0432\n                   </div>");
      template += "<div class=\"main__links\">";
      template += "<a href=\"../game/index.html\" class=\"link\">\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0435\u0449\u0435 \u0440\u0430\u0437</a>";
      template += "<a href=\"../main/index.html\" class=\"link\">\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E</a>";
      template += "</div>";
    } else {
      template += "<div class=\"main__title\">\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u0435\u043C!</div>";
      template += "<div class=\"main__description\">\n                    \u0412\u044B \u043D\u0430\u0431\u0440\u0430\u043B\u0438 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0431\u0430\u043B\u043B\u043E\u0432!\n                    <br>\n                    \u0418\u0433\u0440\u0430 \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u0430!\n                   </div>";
      template += "<a href=\"../main/index.html\" class=\"link link_center\">\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E</a>";
    }
  } else {
    if (score < 30) {
      template += "<div class=\"main__title\">Congratulations!</div>";
      template += "<div class=\"main__description\">\n                    You passed the quiz and scored\n                    <span class=\"main__score\">".concat(score, "</span>\n                    out of <span class=\"main__score\">30</span> possible points\n                   </div>");
      template += "<div class=\"main__links\">";
      template += "<a href=\"../game/index.html\" class=\"link\">Try again</a>";
      template += "<a href=\"../main/index.html\" class=\"link\">Home</a>";
      template += "</div>";
    } else {
      template += "<div class=\"main__title\">Congratulations!</div>";
      template += "<div class=\"main__description\">\n                    You have scored the maximum number of points!\n                    <br>\n                    The game is over!\n                   </div>";
      template += "<a href=\"../main/index.html\" class=\"link link_center\">Home</a>";
    }
  }
  text.innerHTML = template;
  body.append(text);
});
})();

/******/ })()
;
//# sourceMappingURL=results.js.map