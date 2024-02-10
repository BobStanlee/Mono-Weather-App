/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/currentweather.js":
/*!*******************************!*\
  !*** ./src/currentweather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst apiKey = 'f89648074bac4104939211917240602';\r\nconst currentApiURL = 'http://api.weatherapi.com/v1/current.json?';\r\n\r\nasync function getCurrentWeatherData(city = 'sunyani') {\r\n    try {\r\n      const responds = await fetch(\r\n        `${currentApiURL}` + `key=${apiKey}` + `&q=${city}`\r\n      );\r\n  \r\n      if (!responds.ok) {\r\n        // If the response status is not ok, throw an error\r\n        throw new Error(`Failed to fetch data. Status: ${responds.status}`);\r\n      }\r\n  \r\n      const data = await responds.json();\r\n      return data;\r\n    } catch (error) {\r\n      // Handle the error here\r\n      console.error('Error fetching weather data:', error.message);\r\n      throw error; // Optionally rethrow the error to propagate it to the caller\r\n    }\r\n  }\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentWeatherData);\r\n  \n\n//# sourceURL=webpack://mono-weather-app/./src/currentweather.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _currentweather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentweather */ \"./src/currentweather.js\");\n\r\n\r\nfunction updateHomeContent(city) {\r\n    let currentweatherDataPromise = (0,_currentweather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n    currentweatherDataPromise.then((resolvedData) => {\r\n        console.log(resolvedData);\r\n\r\n        let date = formatLastUpdated(resolvedData.current.last_updated);\r\n\r\n        let homeContent = `<div class=\"home-container\">\r\n        <div class=\"header-info\"><!--Header info-->\r\n          <div class=\"loc-item\">\r\n            <span class=\"location\">${resolvedData.location.name}</span>\r\n            <p>Current Location</p>\r\n          </div>\r\n  \r\n          <div class=\"set-item\">\r\n            <a href=\"#\" id=\"location-icon\">\r\n              <img src=\"../src/img/Locations.png\" alt=\"Location Icon\">\r\n            </a>\r\n  \r\n            <a href=\"#\" id=\"settings-icon\">\r\n              <img src=\"../src/img/settings.png\" alt=\"Settings Icon\">\r\n            </a>\r\n          </div>\r\n        </div>\r\n  \r\n        <p class=\"sync\">in sync</p>\r\n  \r\n        <div class=\"date-N-temperature\">\r\n          <p class=\"date\">${date}</p>\r\n  \r\n          <h1 class=\"temp\">${resolvedData.current.temp_c}<span>°C</span></h1>\r\n  \r\n          <div class=\"temps\">\r\n            <span class=\"low-temp\">\r\n              <img src=\"../src/img/Down Arrow.png\" alt=\"Down Arrow\">\r\n              ${resolvedData.current.temp_c - 6}°C\r\n            </span>\r\n  \r\n            <span class=\"high-temp\">\r\n              <img src=\"../src/img/Up Arrow.png\" alt=\"Down Arrow\">\r\n              ${resolvedData.current.temp_c + 4}°C\r\n            </span>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"weather-image-item\">\r\n          <img src=${resolvedData.current.condition.icon} alt=\"weather-image\" class=\"weather-image\">\r\n          <span class=\"weather-des\">${resolvedData.current.condition.text}</span>\r\n        </div>\r\n  \r\n        <div class=\"sunrise-sunset-container\">\r\n          <div class=\"sunrise-item\">\r\n            <img src=\"../src/img/sunrise.png\" alt=\"Sunrise icon\">\r\n            <span class=\"time\">09:18 AM</span>\r\n          </div>\r\n  \r\n          <div class=\"sunset-item\">\r\n            <img src=\"../src/img/sunset.png\" alt=\"Sunset icon\">\r\n            <span class=\"time\">09:18 AM</span>\r\n          </div>\r\n        </div>\r\n      </div>`;\r\n\r\n\r\n        // Check if body does not contain div.splash-container\r\n        if (!document.querySelector('body div.splash-container')) {\r\n            document.body.innerHTML = homeContent;\r\n            console.log(date);\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateHomeContent);\n\n//# sourceURL=webpack://mono-weather-app/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _splash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash */ \"./src/splash.js\");\n/* harmony import */ var _currentweather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentweather */ \"./src/currentweather.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\n\r\n\r\n// Run the function on page load\r\nwindow.addEventListener('load', _splash__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\n// Run the update home content after the splash content has finish doing its thing\r\n// setTimeout(() => {\r\n//     updateHomeContent();\r\n// }, 5000)\r\n\n\n//# sourceURL=webpack://mono-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/splash.js":
/*!***********************!*\
  !*** ./src/splash.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst splashContent = function() {\r\n    let content = `<div class=\"splash-container\">\r\n                        <h1 class=\"title\">\r\n                        Mono Weather\r\n                        </h1>\r\n                    </div>`\r\n\r\n    document.body.innerHTML = content;\r\n\r\n    setTimeout(() => {\r\n        // Remove the function from the load event\r\n        document.body.innerHTML = '';\r\n        console.log('The function has been removed after 5 seconds');\r\n      }, 5000);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (splashContent);\n\n//# sourceURL=webpack://mono-weather-app/./src/splash.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;