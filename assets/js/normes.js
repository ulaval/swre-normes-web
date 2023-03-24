/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/normes.js":
/*!**************************!*\
  !*** ./src/js/normes.js ***!
  \**************************/
/***/ (() => {

eval("let currentOpenMenu = null;\n\n// Fermeture du menu\nvar closeMainMenu = function () {\n  document.querySelector(\".ulaval-header-mobile-menu\").classList.remove(\"open\");\n  document.querySelector(\".ulaval-header-menu-trigger\").querySelector(\"span.screen-reader-text\").innerText = \"Ouvrir le menu principal\";\n  document.querySelector(\".ulaval-header-menu-trigger\").setAttribute(\"aria-expanded\", \"false\");\n  document.body.classList.remove(\"ulaval-nav-mobile-open\");\n};\n\n// Fermeture du moteur de recherche\nvar closeMainSearch = function () {\n  document.querySelector(\".ulaval-header-search\").classList.remove(\"open\");\n  document.removeEventListener(\"keydown\", detectBackTabOnSearchBar);\n  document.querySelector(\".ulaval-header-search-trigger\").setAttribute(\"aria-expanded\", \"false\");\n};\n\n// Fermeture du moteur de recherche\nvar closeMenuSousUnite = function () {\n  document.querySelector(\".ulaval-header-menu-sous-unite\").classList.remove(\"open\");\n  document.querySelector(\".ulaval-header-menu-sous-unite-trigger\").setAttribute(\"aria-expanded\", \"false\");\n  document.querySelector(\".ulaval-header-menu-sous-unite-trigger\").setAttribute(\"aria-label\", \"Ouvrir le menu\");\n};\n\n// Fermeture d'un menu d'outil\nvar closeToolMenu = function () {\n  if (currentOpenMenu) {\n    document.getElementById(currentOpenMenu.list).hidden = true;\n    document.querySelector(currentOpenMenu.button).setAttribute(\"aria-expanded\", \"false\");\n    if (currentlyFocusedLang = document.querySelector(\"#\" + currentOpenMenu.list + \">li[aria-selected=true]\")) {\n      currentlyFocusedLang.setAttribute(\"aria-selected\", \"false\");\n    }\n    document.removeEventListener('keyup', toolMenuKeyUp);\n    document.removeEventListener('keydown', preventScrollOnNavKeyDowns);\n    document.removeEventListener('click', detectClickOutside);\n    const switcherItems = document.querySelectorAll(\"#\" + currentOpenMenu.list + \">li a\");\n    switcherItems.forEach(item => {\n      item.removeEventListener(\"mouseover\", blurSwitcherItems);\n    });\n  }\n  currentOpenMenu = null;\n};\n\n// Ouverture d'un menu d'outil\nvar openToolMenu = function (menu, trigger) {\n  triggerButton = document.querySelector(trigger);\n  if (triggerButton.getAttribute(\"aria-expanded\") == \"false\") {\n    closeOtherElements();\n    currentOpenMenu = {\n      list: menu,\n      button: trigger\n    };\n    document.getElementById(menu).hidden = false;\n    triggerButton.setAttribute(\"aria-expanded\", \"true\");\n    document.querySelector(\"#\" + menu + \">li:first-child a\").focus();\n    document.querySelector(\"#\" + menu + \">li:first-child\").setAttribute(\"aria-selected\", \"true\");\n    document.addEventListener('keyup', toolMenuKeyUp);\n    document.addEventListener('keydown', preventScrollOnNavKeyDowns);\n    document.addEventListener('click', detectClickOutside);\n    const menuItems = document.querySelectorAll(\"#\" + menu + \">li a\");\n    menuItems.forEach(item => {\n      item.addEventListener(\"mouseover\", blurSwitcherItems);\n    });\n  } else {\n    closeToolMenu();\n  }\n};\n\n// Comportement du bouton de menu mobile\ndocument.querySelector(\".ulaval-header-menu-trigger\").addEventListener(\"click\", function () {\n  if (this.getAttribute(\"aria-expanded\") == \"false\") {\n    closeOtherElements();\n    document.querySelector(\".ulaval-header-mobile-menu\").classList.add(\"open\");\n    this.querySelector(\"span.screen-reader-text\").innerText = \"Fermer le menu principal\";\n    this.setAttribute(\"aria-expanded\", \"true\");\n    document.body.classList.add(\"ulaval-nav-mobile-open\");\n  } else {\n    closeMainMenu();\n  }\n});\n\n// Comportement du bouton du moteur de recherche principal\nif (searchBarButton = document.querySelector(\".ulaval-header-search-trigger\")) {\n  searchBarButton.addEventListener(\"click\", function () {\n    if (this.getAttribute(\"aria-expanded\") == \"false\") {\n      closeOtherElements();\n      document.querySelector(\".ulaval-header-search\").classList.add(\"open\");\n      document.querySelector(\".champ-recherche\").focus();\n      document.addEventListener(\"keydown\", detectBackTabOnSearchBar);\n      this.setAttribute(\"aria-expanded\", \"true\");\n    } else {\n      closeMainSearch();\n    }\n  });\n}\n\n// Activation du sélecteur de langue si disponible\nif (languageSwitcher = document.querySelector(\".ulaval-language-switcher-trigger\")) {\n  languageSwitcher.addEventListener(\"click\", function () {\n    openToolMenu(\"ulaval-language-switcher-list\", \".ulaval-language-switcher-trigger\");\n  });\n}\n\n// Activation du menu sécurisé si disponible\nif (secureMenu = document.querySelector(\".ulaval-secure-menu-trigger\")) {\n  secureMenu.addEventListener(\"click\", function () {\n    openToolMenu(\"ulaval-secure-menu\", \".ulaval-secure-menu-trigger\");\n  });\n}\n\n// Activation du menu sous-unité si disponible\nif (sousUniteTrigger = document.querySelector(\".ulaval-header-menu-sous-unite-trigger\")) {\n  sousUniteTrigger.addEventListener(\"click\", function () {\n    if (this.getAttribute(\"aria-expanded\") == \"false\") {\n      closeOtherElements();\n      document.querySelector(\".ulaval-header-menu-sous-unite\").classList.add(\"open\");\n      this.setAttribute(\"aria-label\", \"Fermer le menu\");\n      this.setAttribute(\"aria-expanded\", \"true\");\n    } else {\n      closeMenuSousUnite();\n    }\n  });\n}\nvar blurSwitcherItems = function () {\n  const menuItems = document.querySelectorAll(\"#\" + currentOpenMenu.list + \">li a\");\n  menuItems.forEach(item => {\n    if (item == document.activeElement) {\n      item.blur();\n    }\n  });\n};\nvar detectClickOutside = function (e) {\n  if (!document.querySelector(currentOpenMenu.button).parentElement.contains(e.target)) {\n    closeToolMenu();\n  }\n};\n\n// Prévient le scroll down lorsque nous sommes en train de sélectionner une langue avec les flèches\nvar preventScrollOnNavKeyDowns = function (e) {\n  if (e.keyCode == 38 || e.keyCode == 40) {\n    e.preventDefault();\n  }\n};\n\n// Retourne le focus directement sur le bouton trigger de la barre de recherche\nvar detectBackTabOnSearchBar = function (e) {\n  if (document.activeElement == document.querySelector(\".champ-recherche\") && e.shiftKey && e.keyCode == 9) {\n    document.querySelector(\".ulaval-header-search-trigger\").focus();\n    e.preventDefault();\n  }\n};\n\n// Détection des touches pour la navigation du sélecteur de langue par clavier\nvar toolMenuKeyUp = function (e) {\n  const currentFocus = document.activeElement.parentElement;\n  const currentIndex = [...currentFocus.parentElement.children].indexOf(currentFocus);\n  switch (e.keyCode) {\n    case 38:\n      // Up\n      currentFocus.setAttribute(\"aria-selected\", \"false\");\n      if (currentIndex == 0) {\n        document.querySelector(\"#\" + currentOpenMenu.list + \" li:last-child a\").focus();\n        document.querySelector(\"#\" + currentOpenMenu.list + \" li:last-child\").setAttribute(\"aria-selected\", \"true\");\n      } else {\n        currentFocus.previousElementSibling.querySelector(\"a\").focus();\n        currentFocus.previousElementSibling.setAttribute(\"aria-selected\", \"true\");\n      }\n      break;\n    case 40:\n      // Down\n      currentFocus.setAttribute(\"aria-selected\", \"false\");\n      if (currentIndex == [...currentFocus.parentElement.children].length - 1) {\n        document.querySelector(\"#\" + currentOpenMenu.list + \" li:first-child a\").focus();\n        document.querySelector(\"#\" + currentOpenMenu.list + \" li:first-child\").setAttribute(\"aria-selected\", \"true\");\n      } else {\n        currentFocus.nextElementSibling.querySelector(\"a\").focus();\n        currentFocus.nextElementSibling.setAttribute(\"aria-selected\", \"true\");\n      }\n      break;\n    case 27: // Escape\n    case 9:\n      // Tab\n      document.querySelector(currentOpenMenu.button).focus();\n      closeToolMenu();\n      break;\n  }\n};\nvar closeOtherElements = function () {\n  closeMainMenu();\n  closeToolMenu();\n  if (document.querySelector(\".ulaval-header-search\")) {\n    closeMainSearch();\n  }\n  if (document.querySelector(\".ulaval-header-menu-sous-unite\")) {\n    closeMenuSousUnite();\n  }\n};\n\n// Ajout/retrait de certaines classes durant les périodes d'animation pour aider à la fluidité\ndocument.addEventListener('animationstart', function (e) {\n  if (e.animationName === 'ulaval-header-search-fadeIn' || e.animationName === 'ulaval-header-mobile-fadeIn' || e.animationName === 'ulaval-header-sous-unite-fadeIn') {\n    e.target.classList.add('remove');\n  }\n});\ndocument.addEventListener('animationend', function (e) {\n  if (e.animationName === 'ulaval-header-search-fadeOut' || e.animationName === 'ulaval-header-mobile-fadeOut' || e.animationName === 'ulaval-header-sous-unite-fadeOut') {\n    e.target.classList.remove('remove');\n  }\n});\n\n//# sourceURL=webpack://@ulaval/normes_web/./src/js/normes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/normes.js"]();
/******/ 	
/******/ })()
;