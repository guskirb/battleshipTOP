/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Army Buster.otf */ "./src/Army Buster.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fire.svg */ "./src/fire.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./miss.png */ "./src/miss.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./bomb.svg */ "./src/bomb.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Army Buster";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

ubuntu-sans- {
  font-family: "Ubuntu Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 100;
  font-style: normal;
  font-variation-settings: "wdth" 100;
}

:root {
  --boxsize: 40px;
  --left-coord: clamp(59.5%, 67.5%);
  --carrier-coord: 32%;
  --battleship-coord: 38%;
  --destroyer-coord: 44%;
  --submarine-coord: 50%;
  --patrolboat-coord: 56%;
  --background-color: black;
  --accent-color: #8bf688;
  --ship-color: rgba(107, 196, 104, 0.767);
  --radar-color: #09562e;
}

body {
  background-image: radial-gradient(var(--background-color), #010f08);
  height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-family: "Army Buster", sans-serif;
  font-weight: 100;
  overflow: hidden;
}

.startScreen {
  background-image: radial-gradient(var(--background-color), #010f08);
  color: var(--accent-color);
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  opacity: 1;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  z-index: 10;
  transition: opacity 1s, display 1s allow-discrete;
}

.startScreen > h1 {
  margin: 0;
  font-size: 6em;
  font-weight: 100;
}

.startScreen > div {
  display: flex;
  gap: 50px;
}

.nameInput {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.nameInput > input {
  color: #8bf688;
  height: 20px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid var(--accent-color);
  font-family: "Ubuntu Sans", sans-serif;
  font-size: 1em;
}

.nameInput > input:hover {
  outline: 2px solid #8bf688;
}

.nameInput > input:focus {
  outline: 2px solid #8bf688;
}

.radio {
  display: inline-flex;
  width: 80px;
  justify-content: space-between;
  align-items: flex-end;
  cursor: pointer;
  padding: 5px;
}

.radioInput {
  display: none;
}

.radioButton {
  width: 0.9em;
  height: 0.9em;
  background-color: var(--background-color);
  border: solid 1px var(--accent-color);
  padding: 3px;
}

.radioButton::after {
  content: "";
  width: 100%;
  height: 100%;
  display: block;
  background-color: var(--accent-color);
  opacity: 0;
}

.radioInput:checked + .radioButton::after {
  opacity: 1;
}

.errorText {
  font-family: "Ubuntu Sans", sans-serif;
  font-size: 0.9em;
  font-weight: 600;
  color: red;
  display: none;
  position: fixed;
  top: 58.7%;
}

.cpuDifficulty {
  display: flex;
  flex-flow: column;
  align-items: center;
  align-items: center;
}

label {
  font-family: "Ubuntu Sans", sans-serif;
  font-size: 1em;
  font-weight: 300;
}

.subHeader {
  font-size: 1.3em;
  font-weight: 600;
  padding: 10px;
}

.gameArea {
  display: flex;
  gap: 80px;
}

h2 {
  text-align: center;
  margin: 0;
  margin-bottom: 10px;
  font-size: 2.5em;
  font-weight: 100;
  color: var(--accent-color);
}

.playerBoard,
.enemyBoard {
  height: 400px;
  width: 400px;
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(10, 1fr);
  gap: 1px;
  background-image: radial-gradient(
    var(--radar-color),
    var(--background-color)
  );
}

.playerBoard > div,
.enemyBoard > div {
  border: solid 1px var(--accent-color);
}

.enemyName {
  transition: opacity 0.5s, display 0.5s allow-discrete;
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.enemyBoard {
  transition: opacity 0.5s, display 0.5s allow-discrete;
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(500px);
    transform: translateX(500px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(500px);
    transform: translateX(500px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

.playerSide {
  display: flex;
  gap: 40px;
  transition: opacity 0.5s, display 0.5s allow-discrete;
}

.battleships {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  gap: 20px;
  margin-top: 60px;
}

.buttons {
  margin-top: auto;
  display: flex;
  flex-flow: column;
  gap: 10px;
}

.buttons > button {
  height: 30px;
}

.carrier {
  background-color: var(--ship-color);
  border: 1px solid var(--accent-color);
  display: none;
  grid-template-columns: repeat(5, var(--boxsize));
  height: var(--boxsize);
  position: fixed;
  top: var(--carrier-coord);
  left: var(--left-coord);
}

.battleship {
  background-color: var(--ship-color);
  border: 1px solid var(--accent-color);
  display: none;
  grid-template-columns: repeat(4, var(--boxsize));
  height: var(--boxsize);
  position: absolute;
  top: var(--battleship-coord);
  left: var(--left-coord);
}

.destroyer {
  background-color: var(--ship-color);
  border: 1px solid var(--accent-color);
  display: none;
  grid-template-columns: repeat(3, var(--boxsize));
  height: var(--boxsize);
  position: absolute;
  top: var(--destroyer-coord);
  left: var(--left-coord);
}

.submarine {
  background-color: var(--ship-color);
  border: 1px solid var(--accent-color);
  display: none;
  grid-template-columns: repeat(3, var(--boxsize));
  height: var(--boxsize);
  position: absolute;
  top: var(--submarine-coord);
  left: var(--left-coord);
}

.patrolboat {
  background-color: var(--ship-color);
  border: 1px solid var(--accent-color);
  display: none;
  grid-template-columns: repeat(2, var(--boxsize));
  height: var(--boxsize);
  position: absolute;
  top: var(--patrolboat-coord);
  left: var(--left-coord);
}

.ship {
  background-color: var(--ship-color);
  transition: all 0.25s linear;
}

.hit::before {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  content: "";
  width: 33px;
  height: 33px;
  background-size: 100%;
  display: inline-block;
  animation-name: bomb;
  animation-duration: 2s;
  translate: 2px 2px;
}

.miss::before {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  content: "";
  width: 33px;
  height: 33px;
  background-size: 100%;
  display: inline-block;
  animation-name: bomb;
  animation-duration: 2s;
  translate: 2px 2px;
}

.hit {
  transition: all 0.5s linear;
  background-color: var(--ship-color);
}

@keyframes bomb {
  0% {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    transform: translateY(-100px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    opacity: 1;
  }
}

.playerHitMessage,
.enemyHitMessage {
  color: var(--background-color);
  top: 0;
  position: fixed;
  opacity: 0;
  display: none;
  pointer-events: none;
  transition: opacity 0.5s ease-in-out;
  -webkit-animation: scale-up-right 1.5s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: scale-up-right 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

@-webkit-keyframes scale-up-right {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
  }
  100% {
    -webkit-transform: scale(2);
    transform: scale(2);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
  }
}
@keyframes scale-up-right {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
  }
  100% {
    -webkit-transform: scale(2);
    transform: scale(2);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
  }
}

.resultScreen {
  color: var(--accent-color);
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  display: none;
}

.resultScreen > h1 {
  font-size: 6em;
  font-weight: 100;
  margin: 5px;
}

button {
  background-color: var(--accent-color);
  border: none;
  outline: none;
  color: black;
  font-family: "Ubuntu Sans", sans-serif;
  font-weight: 700;
  width: 110px;
  height: 40px;
}

button:hover {
  background-color: transparent;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"Army Buster\";\n  src: url(./Army\\ Buster.otf);\n}\n\nubuntu-sans- {\n  font-family: \"Ubuntu Sans\", sans-serif;\n  font-optical-sizing: auto;\n  font-weight: 100;\n  font-style: normal;\n  font-variation-settings: \"wdth\" 100;\n}\n\n:root {\n  --boxsize: 40px;\n  --left-coord: clamp(59.5%, 67.5%);\n  --carrier-coord: 32%;\n  --battleship-coord: 38%;\n  --destroyer-coord: 44%;\n  --submarine-coord: 50%;\n  --patrolboat-coord: 56%;\n  --background-color: black;\n  --accent-color: #8bf688;\n  --ship-color: rgba(107, 196, 104, 0.767);\n  --radar-color: #09562e;\n}\n\nbody {\n  background-image: radial-gradient(var(--background-color), #010f08);\n  height: 100vh;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  font-family: \"Army Buster\", sans-serif;\n  font-weight: 100;\n  overflow: hidden;\n}\n\n.startScreen {\n  background-image: radial-gradient(var(--background-color), #010f08);\n  color: var(--accent-color);\n  position: absolute;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  opacity: 1;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  gap: 50px;\n  z-index: 10;\n  transition: opacity 1s, display 1s allow-discrete;\n}\n\n.startScreen > h1 {\n  margin: 0;\n  font-size: 6em;\n  font-weight: 100;\n}\n\n.startScreen > div {\n  display: flex;\n  gap: 50px;\n}\n\n.nameInput {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.nameInput > input {\n  color: #8bf688;\n  height: 20px;\n  background-color: transparent;\n  border: none;\n  border-bottom: 2px solid var(--accent-color);\n  font-family: \"Ubuntu Sans\", sans-serif;\n  font-size: 1em;\n}\n\n.nameInput > input:hover {\n  outline: 2px solid #8bf688;\n}\n\n.nameInput > input:focus {\n  outline: 2px solid #8bf688;\n}\n\n.radio {\n  display: inline-flex;\n  width: 80px;\n  justify-content: space-between;\n  align-items: flex-end;\n  cursor: pointer;\n  padding: 5px;\n}\n\n.radioInput {\n  display: none;\n}\n\n.radioButton {\n  width: 0.9em;\n  height: 0.9em;\n  background-color: var(--background-color);\n  border: solid 1px var(--accent-color);\n  padding: 3px;\n}\n\n.radioButton::after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  display: block;\n  background-color: var(--accent-color);\n  opacity: 0;\n}\n\n.radioInput:checked + .radioButton::after {\n  opacity: 1;\n}\n\n.errorText {\n  font-family: \"Ubuntu Sans\", sans-serif;\n  font-size: 0.9em;\n  font-weight: 600;\n  color: red;\n  display: none;\n  position: fixed;\n  top: 58.7%;\n}\n\n.cpuDifficulty {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  align-items: center;\n}\n\nlabel {\n  font-family: \"Ubuntu Sans\", sans-serif;\n  font-size: 1em;\n  font-weight: 300;\n}\n\n.subHeader {\n  font-size: 1.3em;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.gameArea {\n  display: flex;\n  gap: 80px;\n}\n\nh2 {\n  text-align: center;\n  margin: 0;\n  margin-bottom: 10px;\n  font-size: 2.5em;\n  font-weight: 100;\n  color: var(--accent-color);\n}\n\n.playerBoard,\n.enemyBoard {\n  height: 400px;\n  width: 400px;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  gap: 1px;\n  background-image: radial-gradient(\n    var(--radar-color),\n    var(--background-color)\n  );\n}\n\n.playerBoard > div,\n.enemyBoard > div {\n  border: solid 1px var(--accent-color);\n}\n\n.enemyName {\n  transition: opacity 0.5s, display 0.5s allow-discrete;\n  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)\n    both;\n  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.enemyBoard {\n  transition: opacity 0.5s, display 0.5s allow-discrete;\n  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)\n    both;\n  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n@-webkit-keyframes slide-in-right {\n  0% {\n    -webkit-transform: translateX(500px);\n    transform: translateX(500px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes slide-in-right {\n  0% {\n    -webkit-transform: translateX(500px);\n    transform: translateX(500px);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n.playerSide {\n  display: flex;\n  gap: 40px;\n  transition: opacity 0.5s, display 0.5s allow-discrete;\n}\n\n.battleships {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  gap: 20px;\n  margin-top: 60px;\n}\n\n.buttons {\n  margin-top: auto;\n  display: flex;\n  flex-flow: column;\n  gap: 10px;\n}\n\n.buttons > button {\n  height: 30px;\n}\n\n.carrier {\n  background-color: var(--ship-color);\n  border: 1px solid var(--accent-color);\n  display: none;\n  grid-template-columns: repeat(5, var(--boxsize));\n  height: var(--boxsize);\n  position: fixed;\n  top: var(--carrier-coord);\n  left: var(--left-coord);\n}\n\n.battleship {\n  background-color: var(--ship-color);\n  border: 1px solid var(--accent-color);\n  display: none;\n  grid-template-columns: repeat(4, var(--boxsize));\n  height: var(--boxsize);\n  position: absolute;\n  top: var(--battleship-coord);\n  left: var(--left-coord);\n}\n\n.destroyer {\n  background-color: var(--ship-color);\n  border: 1px solid var(--accent-color);\n  display: none;\n  grid-template-columns: repeat(3, var(--boxsize));\n  height: var(--boxsize);\n  position: absolute;\n  top: var(--destroyer-coord);\n  left: var(--left-coord);\n}\n\n.submarine {\n  background-color: var(--ship-color);\n  border: 1px solid var(--accent-color);\n  display: none;\n  grid-template-columns: repeat(3, var(--boxsize));\n  height: var(--boxsize);\n  position: absolute;\n  top: var(--submarine-coord);\n  left: var(--left-coord);\n}\n\n.patrolboat {\n  background-color: var(--ship-color);\n  border: 1px solid var(--accent-color);\n  display: none;\n  grid-template-columns: repeat(2, var(--boxsize));\n  height: var(--boxsize);\n  position: absolute;\n  top: var(--patrolboat-coord);\n  left: var(--left-coord);\n}\n\n.ship {\n  background-color: var(--ship-color);\n  transition: all 0.25s linear;\n}\n\n.hit::before {\n  background-image: url(./fire.svg);\n  content: \"\";\n  width: 33px;\n  height: 33px;\n  background-size: 100%;\n  display: inline-block;\n  animation-name: bomb;\n  animation-duration: 2s;\n  translate: 2px 2px;\n}\n\n.miss::before {\n  background-image: url(./miss.png);\n  content: \"\";\n  width: 33px;\n  height: 33px;\n  background-size: 100%;\n  display: inline-block;\n  animation-name: bomb;\n  animation-duration: 2s;\n  translate: 2px 2px;\n}\n\n.hit {\n  transition: all 0.5s linear;\n  background-color: var(--ship-color);\n}\n\n@keyframes bomb {\n  0% {\n    background-image: url(\"./bomb.svg\");\n    transform: translateY(-100px);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(0);\n    background-image: url(\"./bomb.svg\");\n    opacity: 1;\n  }\n}\n\n.playerHitMessage,\n.enemyHitMessage {\n  color: var(--background-color);\n  top: 0;\n  position: fixed;\n  opacity: 0;\n  display: none;\n  pointer-events: none;\n  transition: opacity 0.5s ease-in-out;\n  -webkit-animation: scale-up-right 1.5s cubic-bezier(0.39, 0.575, 0.565, 1)\n    both;\n  animation: scale-up-right 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n\n@-webkit-keyframes scale-up-right {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n  }\n  100% {\n    -webkit-transform: scale(2);\n    transform: scale(2);\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n  }\n}\n@keyframes scale-up-right {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n  }\n  100% {\n    -webkit-transform: scale(2);\n    transform: scale(2);\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n  }\n}\n\n.resultScreen {\n  color: var(--accent-color);\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.8);\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  display: none;\n}\n\n.resultScreen > h1 {\n  font-size: 6em;\n  font-weight: 100;\n  margin: 5px;\n}\n\nbutton {\n  background-color: var(--accent-color);\n  border: none;\n  outline: none;\n  color: black;\n  font-family: \"Ubuntu Sans\", sans-serif;\n  font-weight: 700;\n  width: 110px;\n  height: 40px;\n}\n\nbutton:hover {\n  background-color: transparent;\n  border: 1px solid var(--accent-color);\n  color: var(--accent-color);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Army Buster.otf":
/*!*****************************!*\
  !*** ./src/Army Buster.otf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d47b689392221e27007c.otf";

/***/ }),

/***/ "./src/bomb.svg":
/*!**********************!*\
  !*** ./src/bomb.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "316e32a70144322c34cb.svg";

/***/ }),

/***/ "./src/fire.svg":
/*!**********************!*\
  !*** ./src/fire.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "879967763e046c5d2c72.svg";

/***/ }),

/***/ "./src/miss.png":
/*!**********************!*\
  !*** ./src/miss.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "982762e099bdc1a8a829.png";

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");

const NewBoard = class Board {
  constructor() {
    this.board = [];
    this.lastHit = undefined;
  }
  createBoard() {
    for (let x = 0; x < 10; x += 1) {
      this.board[x] = [];
      for (let y = 0; y < 10; y += 1) {
        this.board[x].push('o');
      }
    }
    return this.board;
  }
  place(ship, position) {
    const length = ship.length;
    const row = this.board[position[0]];
    if (length + row[position[1]] >= 10) {
      return false;
    }
    for (let x = 0; x < length; x += 1) {
      if (row[position[1] + x] !== 'o') {
        return false;
      }
    }
    for (let x = 0; x < length; x += 1) {
      row[position[1] + x] = ship;
    }
    return true;
  }
  receiveAttack(position) {
    const row = this.board[position[0]];
    if (row[position[1]] === 'x' || row[position[1]] === '-') {
      return false;
    }
    if (row[position[1]] === 'o') {
      row[position[1]] = '-';
      return true;
    }
    console.log(row[position[1]]);
    row[position[1]].hit();
    this.lastHit = position;
    _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].hitMessage(position);
    if (row[position[1]].isSunk()) {
      this.lastHit = undefined;
    }
    row[position[1]] = 'x';
    return true;
  }
  checkShip() {
    let ship = false;
    for (let x = 0; x < 10; x += 1) {
      this.board[x].forEach(element => {
        if (!(element === 'x' || element === 'o' || element === '-')) {
          ship = true;
        }
      });
    }
    return ship;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewBoard);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Render)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/player.js");


let startX = 0;
let startY = 0;
const button = document.querySelector('.submit');
const nameInput = document.querySelector('#name');
const startScreen = document.querySelector('.startScreen');
const playerName = document.querySelector('.playerName');
const enemyName = document.querySelector('.enemyName');
const errorText = document.querySelector('.errorText');
const enemySide = document.querySelector('.enemy');
const randomButton = document.querySelector('.randomButton');
const playButton = document.querySelector('.playButton');
const battleshipArea = document.querySelector('.battleships');
const carrier = document.querySelector('.carrier');
const battleship = document.querySelector('.battleship');
const destroyer = document.querySelector('.destroyer');
const submarine = document.querySelector('.submarine');
const patrolboat = document.querySelector('.patrolboat');
const playerHitMessage = document.querySelector('.playerHitMessage');
const enemyHitMessage = document.querySelector('.enemyHitMessage');
const resultScreen = document.querySelector('.resultScreen');
const result = document.querySelector('.result');
const replayButton = document.querySelector('.replayButton');
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let turn = true;
let Player1;
let Player2;
let currentShip;
let currentDiv;
let hardMode;
class Render {
  static createPlayerBoard() {
    const playerBoard = document.querySelector('.playerBoard');
    for (let x = 0; x < 10; x += 1) {
      for (let y = 0; y < 10; y += 1) {
        const playerDiv = document.createElement('div');
        playerBoard.appendChild(playerDiv).classList.add('player', `[${x},${y}]`);
      }
    }
  }
  static createEnemyBoard() {
    const enemyBoard = document.querySelector('.enemyBoard');
    for (let x = 0; x < 10; x += 1) {
      for (let y = 0; y < 10; y += 1) {
        let enemyDiv = document.createElement('div');
        enemyBoard.appendChild(enemyDiv).classList.add('enemy', `[${x},${y}]`);
        enemyDiv = document.getElementsByClassName(`enemy [${x},${y}]`);
        enemyDiv[0].addEventListener('click', () => {
          if (!turn) {
            return;
          }
          if (Player2.board.receiveAttack([x, y])) {
            Player2.board.receiveAttack([x, y]);
            this.renderEnemy(Player2);
            turn = false;
            this.enemyTurn();
          }
        });
      }
    }
  }
  static renderPlayer(player) {
    for (let x = 0; x < 10; x += 1) {
      for (let y = 0; y < 10; y += 1) {
        if (!(player.board.board[x][y] === '-' || player.board.board[x][y] === 'o')) {
          const ship = document.getElementsByClassName(`player [${x},${y}]`);
          ship[0].classList.add('ship');
        }
        if (player.board.board[x][y] === '-') {
          const ship = document.getElementsByClassName(`player [${x},${y}]`);
          ship[0].classList.add('miss');
        }
        if (player.board.board[x][y] === 'x') {
          const ship = document.getElementsByClassName(`player [${x},${y}]`);
          ship[0].classList.add('hit');
        }
      }
    }
    if (!player.board.checkShip()) {
      resultScreen.style.display = 'flex';
      result.textContent = 'You Lose!';
    }
  }
  static renderEnemy(player) {
    for (let x = 0; x < 10; x += 1) {
      for (let y = 0; y < 10; y += 1) {
        if (player.board.board[x][y] === '-') {
          const ship = document.getElementsByClassName(`enemy [${x},${y}]`);
          ship[0].classList.add('miss');
        }
        if (player.board.board[x][y] === 'x') {
          const ship = document.getElementsByClassName(`enemy [${x},${y}]`);
          ship[0].classList.add('hit');
        }
      }
    }
    if (!player.board.checkShip()) {
      resultScreen.style.display = 'flex';
      result.textContent = 'You Win!';
    }
  }
  static clearBoard() {
    const playerBoard = document.querySelector('.playerBoard');
    const enemyBoard = document.querySelector('.enemyBoard');
    while (playerBoard.firstChild) {
      playerBoard.removeChild(playerBoard.firstChild);
    }
    while (enemyBoard.firstChild) {
      enemyBoard.removeChild(enemyBoard.firstChild);
    }
  }
  static enemyTurn() {
    let x = getRandomInt(10);
    let y = getRandomInt(10);
    while (Player1.board.board[x][y] === '-' || Player1.board.board[x][y] === 'x') {
      x = getRandomInt(10);
      y = getRandomInt(10);
    }
    setTimeout(() => {
      if (hardMode) {
        if (!(Player1.board.lastHit === undefined)) {
          const coord = Player1.board.lastHit;
          if (!(Player1.board.board[coord[0]][coord[1] + 1] === '-' || Player1.board.board[coord[0]][coord[1] + 1] === 'x' || Player1.board.board[coord[0]][coord[1] + 1] === undefined)) {
            Player1.board.receiveAttack([coord[0], coord[1] + 1]);
          } else if (!(Player1.board.board[coord[0]][coord[1] - 1] === '-' || Player1.board.board[coord[0]][coord[1] - 1] === 'x' || Player1.board.board[coord[0]][coord[1] - 1] === undefined)) {
            Player1.board.receiveAttack([coord[0], coord[1] - 1]);
          } else if (!(Player1.board.board[coord[0]][coord[1] - 2] === '-' || Player1.board.board[coord[0]][coord[1] - 2] === 'x' || Player1.board.board[coord[0]][coord[1] - 2] === undefined)) {
            Player1.board.receiveAttack([coord[0], coord[1] - 2]);
          } else if (!(Player1.board.board[coord[0]][coord[1] + 2] === '-' || Player1.board.board[coord[0]][coord[1] + 2] === 'x' || Player1.board.board[coord[0]][coord[1] + 2] === undefined)) {
            Player1.board.receiveAttack([coord[0], coord[1] + 2]);
          } else {
            Player1.board.receiveAttack([x, y]);
          }
        } else {
          Player1.board.receiveAttack([x, y]);
        }
      } else {
        Player1.board.receiveAttack([x, y]);
      }
      this.renderPlayer(Player1);
      turn = true;
    }, 1500);
  }
  static randomPlace(player) {
    let x = [getRandomInt(10), getRandomInt(10)];
    while (!player.board.place(player.carrier, x)) {
      x = [getRandomInt(10), getRandomInt(10)];
    }
    player.board.place(player.carrier, x);
    while (!player.board.place(player.battleship, x)) {
      x = [getRandomInt(10), getRandomInt(10)];
    }
    player.board.place(player.battleship, x);
    while (!player.board.place(player.destroyer, x)) {
      x = [getRandomInt(10), getRandomInt(10)];
    }
    player.board.place(player.destroyer, x);
    while (!player.board.place(player.submarine, x)) {
      x = [getRandomInt(10), getRandomInt(10)];
    }
    player.board.place(player.submarine, x);
    while (!player.board.place(player.patrolboat, x)) {
      x = [getRandomInt(10), getRandomInt(10)];
    }
    player.board.place(player.patrolboat, x);
  }
  static placeBoat() {
    const array = Array.from(currentDiv);
    const player = Player1[currentShip];
    if (currentShip) {
      if (Player1.board.place(player, [parseInt(array[1], 10), parseInt(array[3], 10)])) {
        Player1.board.place(player, [parseInt(array[1], 10), parseInt(array[3], 10)]);
        Render.renderPlayer(Player1);
        document.querySelector(`.${currentShip}`).style.display = 'none';
      }
    }
  }
  static setShip(state) {
    carrier.style.display = state;
    battleship.style.display = state;
    destroyer.style.display = state;
    submarine.style.display = state;
    patrolboat.style.display = state;
  }
  static hitMessage(position) {
    let ship;
    if (turn) {
      ship = document.getElementsByClassName(`enemy [${position}]`)[0].getBoundingClientRect();
      enemyHitMessage.style.top = `${ship.top + 10}px`;
      enemyHitMessage.style.left = `${ship.left + 10}px`;
      enemyHitMessage.style.display = 'block';
      enemyHitMessage.style.opacity = '1';
      enemyHitMessage.style.animation = '';
    } else {
      ship = document.getElementsByClassName(`player [${position}]`)[0].getBoundingClientRect();
      playerHitMessage.style.top = `${ship.top + 10}px`;
      playerHitMessage.style.left = `${ship.left + 10}px`;
      playerHitMessage.style.display = 'block';
      playerHitMessage.style.opacity = '1';
      playerHitMessage.style.animation = '';
    }
    setTimeout(() => {
      enemyHitMessage.style.opacity = '0';
      enemyHitMessage.style.display = 'block';
      playerHitMessage.style.opacity = '0';
      playerHitMessage.style.display = 'block';
      setTimeout(() => {
        enemyHitMessage.style.animation = 'none';
        playerHitMessage.style.animation = 'none';
      }, 500);
    }, 1000);
  }
}
button.addEventListener('click', () => {
  if (!nameInput.value) {
    errorText.style.display = 'inline';
    return;
  }
  if (document.getElementById('hard').checked) {
    hardMode = true;
  } else {
    hardMode = undefined;
  }
  Player1 = new _player_js__WEBPACK_IMPORTED_MODULE_1__["default"](nameInput.value);
  Player1.initialize();
  Player2 = new _player_js__WEBPACK_IMPORTED_MODULE_1__["default"]('CPU');
  playerName.textContent = "Place your battleships";
  battleshipArea.style.display = 'flex';
  startScreen.style.opacity = '0';
  startScreen.style.display = 'none';
  enemySide.style.display = 'none';
  enemySide.style.opacity = '0';
  Render.clearBoard();
  Render.setShip('grid');
  Render.createPlayerBoard();
  errorText.style.display = 'none';
});
randomButton.addEventListener('click', () => {
  Player1.initialize();
  Render.clearBoard();
  Render.createPlayerBoard();
  Render.randomPlace(Player1);
  Render.renderPlayer(Player1);
  Render.setShip('none');
});
playButton.addEventListener('click', () => {
  Player2.initialize();
  Render.createEnemyBoard();
  Render.randomPlace(Player2);
  Render.renderEnemy(Player2);
  playerName.textContent = Player1.name.toUpperCase();
  enemyName.textContent = Player2.name.toUpperCase();
  enemySide.style.display = 'grid';
  enemySide.style.opacity = '1';
  battleshipArea.style.display = 'none';
});
replayButton.addEventListener('click', () => {
  resultScreen.style.display = 'none';
  startScreen.style.display = 'flex';
  startScreen.style.opacity = '1';
});
function mouseMove(e) {
  startX = e.clientX;
  startY = e.clientY;
  document.querySelector(`.${currentShip}`).style.top = `${startY - 10}px`;
  document.querySelector(`.${currentShip}`).style.left = `${startX - 10}px`;
}
function mouseUp(e) {
  document.querySelector(`.${currentShip}`).style.top = `var(--${currentShip}-coord)`;
  document.querySelector(`.${currentShip}`).style.left = 'var(--left-coord)';
  document.removeEventListener('mousemove', mouseMove);
  document.removeEventListener('mouseup', mouseUp);
  currentDiv = document.elementFromPoint(e.clientX, e.clientY).classList[1];
  if (currentDiv) {
    Render.placeBoat();
  }
  currentShip = undefined;
}
function mouseDown(e) {
  currentShip = e.target.className;
  startX = e.clientX;
  startY = e.clientY;
  document.addEventListener('mousemove', mouseMove);
  document.addEventListener('mouseup', mouseUp);
}
carrier.addEventListener('mousedown', mouseDown);
battleship.addEventListener('mousedown', mouseDown);
destroyer.addEventListener('mousedown', mouseDown);
submarine.addEventListener('mousedown', mouseDown);
patrolboat.addEventListener('mousedown', mouseDown);

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ "./src/board.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");


const NewPlayer = class Player {
  constructor(name) {
    this.name = name;
  }
  initialize() {
    this.board = new _board_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.board.createBoard();
    this.carrier = new _ship_js__WEBPACK_IMPORTED_MODULE_1__["default"](5);
    this.battleship = new _ship_js__WEBPACK_IMPORTED_MODULE_1__["default"](4);
    this.destroyer = new _ship_js__WEBPACK_IMPORTED_MODULE_1__["default"](3);
    this.submarine = new _ship_js__WEBPACK_IMPORTED_MODULE_1__["default"](3);
    this.patrolboat = new _ship_js__WEBPACK_IMPORTED_MODULE_1__["default"](2);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewPlayer);

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const NewShip = class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
  }
  hit() {
    if (this.isSunk()) {
      return 'Error';
    }
    this.hits += 1;
    return this.hits;
  }
  isSunk() {
    if (this.hits === this.length) {
      return true;
    }
    return false;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewShip);

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundleb9cf9e579aecd06bac2d.js.map