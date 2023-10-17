/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/header-search.js":
/*!****************************************!*\
  !*** ./assets/src/js/header-search.js ***!
  \****************************************/
/***/ (function() {

eval("(() => {\n  let radioInputs = document.querySelectorAll(\"#header-search-form input[type=radio]\");\n  let form = document.querySelector(\"#header-search-form\");\n  let searchInput = document.querySelector(\"#header-search-input\");\n  for (let radioInput of radioInputs) {\n    let label = document.querySelector('label[for=\"' + radioInput.id + '\"]');\n    label.addEventListener(\"click\", function () {\n      updateFormAndInput(radioInput);\n    });\n    radioInput.addEventListener(\"change\", function () {\n      if (radioInput.checked) {\n        updateFormAndInput(radioInput);\n      }\n    });\n    label.addEventListener(\"keydown\", function (e) {\n      if (e.key == \" \" || e.code == \"Space\" || e.keyCode == 32 || e.key === 'Enter' || e.keyCode === 13) {\n        radioInput.checked = true;\n        updateFormAndInput(radioInput);\n      }\n    });\n  }\n  function updateFormAndInput(radioInput) {\n    form.action = radioInput.dataset.action;\n    searchInput.placeholder = radioInput.dataset.placeholder;\n  }\n})();\n\n//# sourceURL=webpack://@swre/normes_web/./assets/src/js/header-search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/src/js/header-search.js"]();
/******/ 	
/******/ })()
;