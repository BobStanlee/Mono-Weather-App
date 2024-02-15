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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst apiKey = 'f89648074bac4104939211917240602';\r\nconst currentApiURL = 'http://api.weatherapi.com/v1/current.json?';\r\n\r\nasync function getCurrentWeatherData(city) {\r\n    try {\r\n      const responds = await fetch(\r\n        `${currentApiURL}` + `key=${apiKey}` + `&q=${city}`\r\n      );\r\n  \r\n      if (!responds.ok) {\r\n        // If the response status is not ok, throw an error\r\n        throw new Error(`Failed to fetch data. Status: ${responds.status}`);\r\n      }\r\n  \r\n      const data = await responds.json();\r\n      return data;\r\n    } catch (error) {\r\n      // Handle the error here\r\n      console.error('Error fetching weather data:', error.message);\r\n      throw error; // Optionally rethrow the error to propagate it to the caller\r\n    }\r\n  }\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentWeatherData);\r\n  \n\n//# sourceURL=webpack://mono-weather-app/./src/currentweather.js?");

/***/ }),

/***/ "./src/details.js":
/*!************************!*\
  !*** ./src/details.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _forecastweather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecastweather */ \"./src/forecastweather.js\");\n\r\n\r\nlet forecastDataPromise = (0,_forecastweather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nasync function updateDetails() {\r\n    forecastDataPromise.then((resolvedData) => {\r\n\r\n        let infoContainer = document.querySelector('.info-container');\r\n\r\n        let detailContent = `\r\n                <div class=\"details\">\r\n                <h2>Details</h2>\r\n\r\n                <div class=\"precipitation-item\">\r\n                <span class=\"des\">Precipitation</span>\r\n                <span class=\"value\">${resolvedData.current.precip_mm} mm</span>\r\n                </div>\r\n\r\n                <div class=\"wind-item\">\r\n                <span class=\"des\">SE Wind</span>\r\n                <span class=\"value\">${resolvedData.current.wind_kph} km/h</span>\r\n                </div>\r\n                \r\n                <div class=\"humidity-item\">\r\n                <span class=\"des\">Humidity</span>\r\n                <span class=\"value\">${resolvedData.current.humidity} %</span>\r\n                </div>\r\n                \r\n                <div class=\"visibility-item\">\r\n                <span class=\"des\">Visibility</span>\r\n                <span class=\"value\">${resolvedData.current.vis_km} km</span>\r\n                </div>\r\n                \r\n                <div class=\"uv-item\">\r\n                <span class=\"des\">UV</span>\r\n                <span class=\"value\">${classifyUVIndex(resolvedData.current.uv)}</span>\r\n                </div>\r\n                \r\n                <div class=\"pressure-item\">\r\n                <span class=\"des\">Pressure</span>\r\n                <span class=\"value\">${resolvedData.current.pressure_mb} hPa</span>\r\n                </div>\r\n            </div>\r\n      `;\r\n\r\n        infoContainer.innerHTML = '';\r\n        infoContainer.innerHTML = detailContent;\r\n    })\r\n}\r\n\r\nfunction classifyUVIndex(uvIndex) {\r\n    if (uvIndex >= 0 && uvIndex <= 2) {\r\n        return \"Low risk\";\r\n    } else if (uvIndex <= 5) {\r\n        return \"Moderate risk\";\r\n    } else if (uvIndex <= 7) {\r\n        return \"High risk\";\r\n    } else if (uvIndex <= 10) {\r\n        return \"Very high risk\";\r\n    } else {\r\n        return \"Extreme risk\";\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateDetails);\n\n//# sourceURL=webpack://mono-weather-app/./src/details.js?");

/***/ }),

/***/ "./src/forecast.js":
/*!*************************!*\
  !*** ./src/forecast.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _forecastweather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecastweather */ \"./src/forecastweather.js\");\n\r\n\r\nasync function updateForecast() {\r\n\r\n  let resolvedDatas = (0,_forecastweather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n  createForecast();\r\n\r\n  let hourlyContainer = document.querySelector('.hourly-container');\r\n  let dailyContainer = document.querySelector('.daily-container');\r\n\r\n    resolvedDatas.then((resolvedData) => {\r\n        let forecastHourly = resolvedData.forecast.forecastday[0].hour;\r\n        let forecastDaily = resolvedData.forecast.forecastday[0].day;\r\n        let forecastDailyDate = resolvedData.forecast.forecastday[0].date;\r\n        \r\n        forecastHourly.forEach((hour) => {\r\n          createHourItem(hour,hourlyContainer);\r\n        })\r\n\r\n        createDailyItem(forecastDaily, dailyContainer, forecastDailyDate);\r\n    });\r\n}\r\n\r\nfunction createForecast() {\r\n    const infoContainer = document.querySelector('.info-container');\r\n    const forecastContainer = document.createElement('div');\r\n    const h2 = document.createElement('h2');\r\n\r\n    h2.textContent = 'Forecast';\r\n    forecastContainer.classList.add('forecast');\r\n\r\n    const hourlyDiv = document.createElement('div');\r\n    const dailyDiv = document.createElement('div');\r\n\r\n    hourlyDiv.classList.add('hourly-forecast');\r\n    dailyDiv.classList.add('daily-forecast');\r\n\r\n    const hourlyh3 = document.createElement('h3');\r\n    const dailyh3 = document.createElement('h3');\r\n\r\n    hourlyh3.textContent = 'Hourly Forecast';\r\n    dailyh3.textContent = 'Daily Forecast';\r\n\r\n    hourlyDiv.appendChild(hourlyh3);\r\n    dailyDiv.appendChild(dailyh3);\r\n\r\n    const hourlyContainer = document.createElement('div');\r\n    const dailyContainer = document.createElement('div');\r\n\r\n    hourlyContainer.classList.add('hourly-container');\r\n    dailyContainer.classList.add('daily-container');\r\n\r\n    hourlyDiv.appendChild(hourlyContainer);\r\n    dailyDiv.appendChild(dailyContainer);\r\n\r\n\r\n    forecastContainer.appendChild(h2);\r\n\r\n    forecastContainer.appendChild(hourlyDiv);\r\n    forecastContainer.appendChild(dailyDiv);\r\n\r\n    infoContainer.appendChild(forecastContainer);\r\n}\r\n\r\n\r\nfunction createHourItem(hourlyForcast, hourlyContainer) {\r\n    let hourItem = document.createElement('div');\r\n    let timeSpan = document.createElement('span');\r\n    let weatherImg = document.createElement('img');\r\n\r\n    hourItem.classList.add('hour-item');\r\n    timeSpan.classList.add('time');\r\n    weatherImg.classList.add('weather-img');\r\n\r\n    weatherImg.src = hourlyForcast.condition.icon;\r\n    timeSpan.textContent = formatTime(hourlyForcast.time);\r\n\r\n    hourItem.appendChild(timeSpan);\r\n    hourItem.appendChild(weatherImg);\r\n\r\n    hourlyContainer.appendChild(hourItem);\r\n}\r\n\r\nfunction createDailyItem(dailyForcast, dailyContainer, date) {\r\n    let dailyItem = document.createElement('div');\r\n    let dateSpan = document.createElement('span');\r\n    let weatherImg = document.createElement('img');\r\n\r\n    let highTSpan = document.createElement('span');\r\n    let lowTSpan = document.createElement('span');\r\n\r\n    dailyItem.classList.add('daily-item');\r\n    dateSpan.classList.add('date');\r\n    weatherImg.classList.add('weather-img');\r\n    highTSpan.classList.add('high-temp');\r\n    lowTSpan.classList.add('low-temp');\r\n\r\n    dateSpan.textContent = formatDate(date);\r\n    weatherImg.src = dailyForcast.condition.icon;\r\n\r\n    let upArrowHighImg = document.createElement('img');\r\n    let downArrowlowImg = document.createElement('img');\r\n\r\n    upArrowHighImg.src = '../src/img/Up Arrow.png';\r\n    downArrowlowImg.src = '../src/img/Down Arrow.png';\r\n\r\n    highTSpan.textContent = Math.round(dailyForcast.maxtemp_c);\r\n    lowTSpan.textContent = Math.round(dailyForcast.mintemp_c);\r\n\r\n    highTSpan.appendChild(upArrowHighImg);\r\n    lowTSpan.appendChild(downArrowlowImg);\r\n\r\n    dailyItem.appendChild(dateSpan);\r\n    dailyItem.appendChild(weatherImg);\r\n    dailyItem.appendChild(highTSpan);\r\n    dailyItem.appendChild(lowTSpan);\r\n\r\n    dailyContainer.appendChild(dailyItem);\r\n}\r\n\r\nfunction formatTime(timeString) {\r\n  // Create a Date object from the time string\r\n  const dateTime = new Date(timeString);\r\n\r\n  // Get the hours and minutes\r\n  const hours = dateTime.getHours();\r\n  const minutes = dateTime.getMinutes();\r\n\r\n  // Format the result as \"hh:mm\"\r\n  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;\r\n\r\n  return formattedTime;\r\n}\r\n\r\nfunction formatDate(dateString) {\r\n  // Create a Date object from the date string\r\n  const dateObject = new Date(dateString);\r\n\r\n  // Get the day and month\r\n  const day = dateObject.getDate();\r\n  \r\n  // Array of month names (adjust as needed)\r\n  const monthNames = [\r\n      \"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\",\r\n      \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"\r\n  ];\r\n\r\n  const monthIndex = dateObject.getMonth();\r\n  const month = monthNames[monthIndex];\r\n\r\n  // Format the result as \"dd MMM\"\r\n  const formattedDate = `${day.toString().padStart(2, '0')} ${month}`;\r\n\r\n  return formattedDate;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateForecast);\n\n//# sourceURL=webpack://mono-weather-app/./src/forecast.js?");

/***/ }),

/***/ "./src/forecastweather.js":
/*!********************************!*\
  !*** ./src/forecastweather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst apiKey = 'f89648074bac4104939211917240602';\r\nconst forecastApiUrl = 'https://api.weatherapi.com/v1/forecast.json?';\r\n\r\nasync function getForecastWeatherData(city='sunyani') {\r\n    try {\r\n      const responds = await fetch(\r\n        `${forecastApiUrl}` + `key=${apiKey}` + `&q=${city}`\r\n      );\r\n  \r\n      if (!responds.ok) {\r\n        // If the response status is not ok, throw an error\r\n        throw new Error(`Failed to fetch data. Status: ${responds.status}`);\r\n      }\r\n  \r\n      const data = await responds.json();\r\n      return data;\r\n    } catch (error) {\r\n      // Handle the error here\r\n      console.error('Error fetching weather data:', error.message);\r\n      throw error; // Optionally rethrow the error to propagate it to the caller\r\n    }\r\n  }\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getForecastWeatherData);\r\n  \n\n//# sourceURL=webpack://mono-weather-app/./src/forecastweather.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _forecastweather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecastweather */ \"./src/forecastweather.js\");\n/* harmony import */ var _switchtab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switchtab */ \"./src/switchtab.js\");\n/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location */ \"./src/location.js\");\n\r\n\r\n\r\n\r\nasync function updateHomeContent(city='sunyani') {\r\n    let resolvedDatas = (0,_forecastweather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(city);\r\n\r\n    resolvedDatas.then((resolvedData) => {\r\n\r\n        let date = formatLastUpdated(resolvedData.current.last_updated);\r\n\r\n        let homeContent = `\r\n        <div class=\"home-container\">\r\n        <div class=\"header-info\"><!--Header info-->\r\n          <div class=\"loc-item\">\r\n            <span class=\"location\">${resolvedData.location.name}</span>\r\n            <p>Current Location</p>\r\n          </div>\r\n  \r\n          <div class=\"set-item\">\r\n            <a href=\"#\" class=\"location-icon\">\r\n              <img src=\"../src/img/Locations.png\" alt=\"Location Icon\">\r\n            </a>\r\n  \r\n            <a href=\"#\" class=\"settings-icon\">\r\n              <img src=\"../src/img/settings.png\" alt=\"Settings Icon\">\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"sync\">\r\n            <span class=\"home\">Home</span>\r\n            <span class=\"details\">Details</span>\r\n            <span class=\"forecast\">Forecast</span>\r\n        </div>\r\n\r\n        <div class=\"info-container\">\r\n          <div class=\"home\">\r\n          <div class=\"date-N-temperature\">\r\n            <p class=\"date\">${date}</p>\r\n    \r\n            <h1 class=\"temp\">${Math.round(resolvedData.current.temp_c)}<span>°C</span></h1>\r\n    \r\n            <div class=\"temps\">\r\n              <span class=\"low-temp\">\r\n                <img src=\"../src/img/Down Arrow.png\" alt=\"Down Arrow\">\r\n                ${Math.round(resolvedData.current.temp_c) - 6}°C\r\n              </span>\r\n    \r\n              <span class=\"high-temp\">\r\n                <img src=\"../src/img/Up Arrow.png\" alt=\"Down Arrow\">\r\n                ${Math.round(resolvedData.current.temp_c) + 4}°C\r\n              </span>\r\n            </div>\r\n          </div>\r\n    \r\n          <div class=\"weather-image-item\">\r\n            <img src=${resolvedData.current.condition.icon} alt=\"weather-image\" class=\"weather-image\">\r\n            <span class=\"weather-des\">${resolvedData.current.condition.text}</span>\r\n          </div>\r\n    \r\n          <div class=\"sunrise-sunset-container\">\r\n            <div class=\"sunrise-item\">\r\n              <img src=\"../src/img/sunrise.png\" alt=\"Sunrise icon\">\r\n              <span class=\"time\">${resolvedData.forecast.forecastday[0].astro.sunrise}</span>\r\n            </div>\r\n    \r\n            <div class=\"sunset-item\">\r\n              <img src=\"../src/img/sunset.png\" alt=\"Sunset icon\">\r\n              <span class=\"time\">${resolvedData.forecast.forecastday[0].astro.sunset}</span>\r\n            </div>\r\n          </div>\r\n          </div>\r\n          </div>\r\n      </div>`;\r\n\r\n\r\n        // Check if body does not contain div.splash-container\r\n        if (!document.querySelector('body div.splash-container')) {\r\n            document.body.innerHTML = homeContent;\r\n        }\r\n\r\n        (0,_switchtab__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n        handleHomeClicks();\r\n    })\r\n}\r\n\r\nfunction formatLastUpdated(lastUpdatedString) {\r\n  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\r\n  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\r\n\r\n  // Convert the string to a Date object\r\n  const lastUpdatedDate = new Date(lastUpdatedString);\r\n\r\n  // Extract the day, date, month, and year\r\n  const dayOfWeek = daysOfWeek[lastUpdatedDate.getDay()];\r\n  const date = lastUpdatedDate.getDate();\r\n  const month = months[lastUpdatedDate.getMonth()];\r\n  const year = lastUpdatedDate.getFullYear();\r\n\r\n  // Format the result\r\n  const formattedDate = `${dayOfWeek}, ${date} ${month} ${year}`;\r\n  \r\n  return formattedDate;\r\n}\r\n\r\nfunction handleHomeClicks() {\r\n  const locationBtn = document.querySelector('.location-icon');\r\n  const settingBtn = document.querySelector('.settings-icon');\r\n\r\n  locationBtn.addEventListener('click', ()=> {\r\n    (0,_location__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateHomeContent);\n\n//# sourceURL=webpack://mono-weather-app/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _splash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splash */ \"./src/splash.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\n\r\n// Run the function on page load\r\nwindow.addEventListener('load', _splash__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\n// Run the update home content after the splash content has finish doing its thing\r\nsetTimeout(() => {\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}, 5200);\r\n\n\n//# sourceURL=webpack://mono-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/location.js":
/*!*************************!*\
  !*** ./src/location.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _currentweather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentweather */ \"./src/currentweather.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\n\r\nlet locations = ['Sunyani', 'Kumasi', 'Accra'];\r\n\r\nasync function updateLocation() {\r\n    let defaultContent = `\r\n        <div class=\"location-container\">\r\n            <div class=\"header\">\r\n                <div class=\"title-item\">\r\n                    <img src=\"../src/img/Back Icon.png\" alt=\"Back\">\r\n                    <span>Select City</span>\r\n                </div>\r\n\r\n                <div class=\"addbtn\">\r\n                    <img src=\"../src/img/Add Location.png\" alt=\"Add Button\" class=\"add-btn\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"location-content\">\r\n       \r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"get-city-container\">\r\n            <div class=\"city-input-item\">\r\n                <label for=\"city\">Enter Your Preferred City Here:</label>\r\n                <input type=\"text\" name=\"city\" class=\"city\" id=\"city\" required>\r\n                <button type=\"submit\" class=\"search-item\">\r\n                <img src=\"../src/img/Locations.png\" alt=\"\">\r\n                <span>Add City</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    `\r\n\r\n    document.body.innerHTML = '';\r\n    document.body.innerHTML = defaultContent;\r\n\r\n    let locationContent = document.querySelector('.location-content');\r\n\r\n    let allLocItems = [];\r\n\r\n    // Use Promise.all to wait for all promises to resolve\r\n    await Promise.all(locations.map(async (location) => {\r\n        let resolvedData = await (0,_currentweather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(location);\r\n        let node = createLocationItem(resolvedData);\r\n        locationContent.appendChild(node);\r\n        allLocItems.push(node);\r\n    }));\r\n\r\n    handleClicks();\r\n}\r\n\r\nfunction createLocationItem(resolvedData) {\r\n    const locationItem = document.createElement('div');\r\n    const locInfo = document.createElement('div');\r\n    const weatherItem = document.createElement('div');\r\n\r\n    locationItem.classList.add('location-item');\r\n    locInfo.classList.add('loc-info');\r\n    weatherItem.classList.add('weather-item');\r\n\r\n    const citySpan = document.createElement('span');\r\n    const tempSpan = document.createElement('span');\r\n    const conditionSpan = document.createElement('span');\r\n\r\n    citySpan.classList.add('city');\r\n    tempSpan.classList.add('temp');\r\n    conditionSpan.classList.add('condition');\r\n\r\n    citySpan.textContent = `${resolvedData.location.name}`;\r\n    tempSpan.textContent = `${Math.round(resolvedData.current.temp_c)}°C`;\r\n    conditionSpan.textContent = `${resolvedData.current.condition.text}`;\r\n\r\n    const weatherIcon = document.createElement('img');\r\n\r\n    weatherIcon.classList.add('weather-icon');\r\n    weatherIcon.src = `${resolvedData.current.condition.icon}`;\r\n\r\n    locInfo.appendChild(citySpan);\r\n    locInfo.appendChild(tempSpan);\r\n    locInfo.appendChild(conditionSpan);\r\n\r\n    weatherItem.appendChild(weatherIcon);\r\n\r\n    locationItem.appendChild(locInfo);\r\n    locationItem.appendChild(weatherItem);\r\n\r\n    return locationItem;\r\n}\r\n\r\nfunction handleClicks() {\r\n    const locItems = document.querySelectorAll('.location-item');\r\n    const backBtn = document.querySelector('.title-item');\r\n    const addBtn = document.querySelector('.addbtn');\r\n\r\n    locItems.forEach((item) => {\r\n        item.addEventListener('click', ()=> {\r\n            const name = item.querySelector('.city').textContent;\r\n\r\n            (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(name);\r\n        })\r\n    })\r\n\r\n    backBtn.addEventListener('click', ()=> {\r\n        ;(0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    })\r\n\r\n    addBtn.addEventListener('click', ()=> {\r\n        const modal = document.querySelector('.get-city-container');\r\n        const input = document.querySelector('.get-city-container .city-input-item input');\r\n        const addCityBtn = document.querySelector('.get-city-container .city-input-item button'); \r\n        \r\n        modal.classList.add('show-modal');\r\n\r\n        modal.addEventListener('keydown', (e)=> {\r\n            if (e.keyCode == 13 && input.value.length > 1) {\r\n                modal.classList.remove('show-modal');\r\n                let cityName = input.value;\r\n\r\n                locations.push(cityName);\r\n                updateLocation();\r\n            }\r\n        })\r\n\r\n        addCityBtn.addEventListener('click', () => {\r\n            if (input.value.length > 1) {\r\n                modal.classList.remove('show-modal')\r\n                modal.classList.remove('show-modal');\r\n                let cityName = input.value;\r\n\r\n                locations.push(cityName);\r\n                updateLocation();\r\n            }\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateLocation);\n\n//# sourceURL=webpack://mono-weather-app/./src/location.js?");

/***/ }),

/***/ "./src/splash.js":
/*!***********************!*\
  !*** ./src/splash.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst splashContent = function() {\r\n    let content = `<div class=\"splash-container\">\r\n                        <h1 class=\"title\">\r\n                        Mono Weather\r\n                        </h1>\r\n                    </div>`\r\n\r\n    document.body.innerHTML = content;\r\n\r\n    setTimeout(() => {\r\n        // Remove the function from the load event\r\n        document.body.innerHTML = '';\r\n      }, 5000);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (splashContent);\n\n//# sourceURL=webpack://mono-weather-app/./src/splash.js?");

/***/ }),

/***/ "./src/switchtab.js":
/*!**************************!*\
  !*** ./src/switchtab.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details */ \"./src/details.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forecast */ \"./src/forecast.js\");\n\r\n\r\n\r\n\r\nfunction switchtabs() {\r\n    let btns = document.querySelectorAll(\".sync span\");\r\n    let infoContainer = document.querySelector(\".info-container\");\r\n    \r\n    btns.forEach((btn) => {\r\n      btn.addEventListener(\"click\", () => {\r\n        if (\r\n          btn.classList.contains(\"details\") &\r\n          !infoContainer.querySelector(\".details\")\r\n        ) {\r\n          (0,_details__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n        } else if (\r\n          btn.classList.contains(\"forecast\") &\r\n          !infoContainer.querySelector(\".forecast\")\r\n        ) {\r\n            infoContainer.innerHTML = '';\r\n            (0,_forecast__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n        } else if (\r\n          btn.classList.contains(\"home\") &&\r\n          !infoContainer.querySelector(\".home\")\r\n        ) {\r\n          (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n        }\r\n      });\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (switchtabs);\n\n//# sourceURL=webpack://mono-weather-app/./src/switchtab.js?");

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