/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
}

p {
  margin: 5px 0 10px 0;
}

header {
  background-color: gray;
  color: white;
  grid-area: head;
}

.hed {
  font-size: 1em;
  text-align: center;
}

main {
  display: flex;
  margin-left: 1vh;
  border: 1px solid black;
  display: flex;
  grid-area: main;
}

.right-main {
  display: flex;
  flex: 1;
  color: white;
  background-color: rgba(0, 0, 0, 0.747);
}

/* <main>
<div class="left-main">
    <p>sada sad asd asd asd as ssssss </p>
</div>
<div class="right-main">
    <p>sada sad asd asd asd as ssssss </p>
</div>
</main> */
body {
  font-size: 24px;
  display: grid;
  width: 100%;
  height: 100%;
  gap: 1vh;
  background-color: gray;
  color: rgba(255, 255, 255, 0.549);
  grid-template-areas: "head     head    righ" "main     main    righ" "foot     foot    righ";
  grid-template-rows: 35vh 55vh 5vh;
  grid-template-columns: 1fr 1fr 20%;
}

.nav-panel {
  color: green;
  border: 2px solid black;
  font-size: 2vh;
  background-color: rgba(0, 0, 0, 0.747);
  color: white;
  grid-area: righ;
}

.nav-panel p span {
  display: inline;
  border: 1px solid black;
  background-color: red;
}

.nav-text-block {
  margin-left: 2%;
}

.nav-panel {
  color: green;
  border: 2px solid black;
  font-size: 2vh;
  background-color: rgba(0, 0, 0, 0.747);
  color: white;
  grid-area: righ;
}

.nav-panel p span {
  display: inline;
  border: 1px solid black;
  background-color: red;
}

.nav-text-block {
  margin-left: 2%;
}

.line-number {
  padding-top: 0.2vh;
  color: black;
  background-color: rgba(255, 255, 255, 0.549);
  height: 100%;
  width: 3vh;
  padding-right: 1vh;
  text-align: right;
  font-size: 2.26vh;
}

.line-numbers {
  border-right: 0.5px solid white;
  padding-top: 0.2vh;
  color: white;
  background-color: black;
  height: 100%;
  width: 3vh;
  padding-right: 1vh;
  text-align: right;
  font-size: 2.26vh;
}

.checking {
  font-size: 5vh;
}

input {
  width: 100%;
}
input input:disabled {
  background: #ccc;
}

#apple1 {
  left: 12px;
  right: 1px;
}

.button-left {
  cursor: pointer;
  max-width: 1rem;
  min-width: 1px;
  background-color: black;
  color: white;
}

.button-left:hover {
  color: blue;
}

.button-left:active {
  color: red;
}

.button-right {
  cursor: pointer;
  max-width: 1rem;
  min-width: 1px;
  background-color: black;
  color: white;
}

.button-right:hover {
  color: blue;
}

.button-right:active {
  color: red;
}

.but-select {
  cursor: pointer;
  background-color: black;
  color: white;
}

.but-select:hover {
  color: blue;
}

.but-select:active {
  color: red;
}

.select {
  width: 100%;
}

.left-main {
  display: flex;
  flex: 1;
}

.left-second {
  width: 100%;
}

.inp-ancver {
  background-color: rgba(255, 255, 255, 0.549);
  flex: 1;
  margin-left: 10px;
  width: 60%;
}

.enter {
  flex: 1;
  font-size: 0.7rem;
  width: 30%;
  color: red;
  background-color: black;
}

.help-textarea {
  color: rgba(255, 255, 255, 0.549);
  font-size: 0.7rem;
  width: 100%;
  background-color: gray;
  resize: none;
  height: 80%;
}

/*    <input class="inp-anc" type="text">
   <button class="left-but">
       Enter   
   </button> */
.right-second {
  width: 100%;
  height: 100%;
}

.help-textarea-right {
  font-size: 0.75rem;
  background-color: rgba(102, 92, 92, 0.795);
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
}

.modal {
  position: fixed;
  z-index: 2;
  width: 80%;
  height: 100%;
  overflow-y: auto;
  visibility: hidden;
  opacity: 1;
  transition: opacity 2s, visibility 0.4s;
}

.modal-box {
  color: black;
  background-color: white;
  top: 40%;
  height: 20%;
  width: 80%;
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}

.modal.open {
  visibility: visible;
  opacity: 1;
}

.close-modal {
  font-size: 30px;
  position: absolute;
  top: 10px;
  right: 20px;
  border: none;
  background-color: transparent;
  padding: 10px;
  transition: fill 1s;
  cursor: pointer;
}

.close-modal:hover {
  color: blue;
}

.close-modal:active {
  color: red;
}

.text-modal {
  font-size: 2vh;
}

.text-modal p {
  margin-left: 4vh;
  text-align: left;
  margin-top: 4vh;
}

.text-modal pre {
  margin-left: 4vh;
  text-align: left;
  margin-top: 4vh;
  background-color: antiquewhite;
}

.b-restart2 {
  cursor: pointer;
  color: white;
  background-color: black;
}

.b-restart2:hover {
  color: blue;
}

.b-restart2:active {
  color: red;
}

.h2 {
  font-size: 5vh;
}

.b-restart2 {
  position: absolute;
  width: 30vh;
  height: 20%;
  top: 40%;
  left: 30%;
}

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2vh;
  background-color: red;
  color: black;
  grid-area: foot;
}

footer a {
  color: black;
}

footer a:hover {
  color: blue;
}

footer a:active {
  color: green;
}

.box-of-img {
  margin-top: 1%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  height: 20vh;
  -webkit-box-shadow: 8px 8px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 8px 8px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 8px 8px 8px 0px rgba(34, 60, 80, 0.2);
}

.box-of-img {
  display: flex;
}

.box-of-img > * {
  margin: 1%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

h1 {
  font-size: 5vh;
}

.buttons > * {
  cursor: pointer;
  background-color: black;
  color: white;
}

.buttons > *:hover {
  color: blue;
}

.buttons > *:active {
  color: red;
}

.modal2 {
  position: fixed;
  z-index: 2;
  width: 80%;
  height: 100%;
  overflow-y: auto;
  visibility: hidden;
  opacity: 1;
  transition: opacity 2s, visibility 0.4s;
}

.modal-box2 {
  color: black;
  background-color: white;
  top: 40%;
  height: 80%;
  width: 80%;
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}

.modal.open2 {
  visibility: visible;
  opacity: 1;
}

.close-modal2 {
  font-size: 30px;
  position: absolute;
  top: 10px;
  right: 20px;
  border: none;
  background-color: transparent;
  padding: 10px;
  transition: fill 1s;
  cursor: pointer;
}

.close-modal2:hover {
  color: blue;
}

.close-modal2:active {
  color: red;
}

.text-modal2 {
  font-size: 3vh;
}

.text-modal2 p {
  margin-left: 4vh;
  text-align: left;
  margin-top: 4vh;
}

.text-modal2 pre {
  margin-left: 4vh;
  text-align: left;
  margin-top: 4vh;
  background-color: antiquewhite;
}

.open_modal2 {
  cursor: pointer;
  color: white;
  background-color: black;
}

.open_modal2:hover {
  color: blue;
}

.open_modal2:active {
  color: red;
}`, "",{"version":3,"sources":["webpack://./src/sass/base/_reset.scss","webpack://./src/sass/main.scss","webpack://./src/sass/blocks/_header.scss","webpack://./src/sass/blocks/_main.scss","webpack://./src/sass/base/_colors.scss","webpack://./src/sass/blocks/_body.scss","webpack://./src/sass/blocks/_nav.scss","webpack://./src/sass/detales/line-num.scss","webpack://./src/sass/detales/symbol.scss","webpack://./src/sass/detales/buttons-left-right.scss","webpack://./src/sass/detales/select.scss","webpack://./src/sass/blocks/_left-content.scss","webpack://./src/sass/blocks/_textarea-left.scss","webpack://./src/sass/blocks/_textarea-right.scss","webpack://./src/sass/detales/_modal.scss","webpack://./src/sass/blocks/_footer.scss","webpack://./src/sass/detales/_table-box.scss","webpack://./src/sass/detales/box-of-img.scss","webpack://./src/sass/detales/_h1.scss","webpack://./src/sass/detales/_buttons.scss","webpack://./src/sass/detales/_modal2.scss"],"names":[],"mappings":"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","sourcesContent":["* { margin: 0; padding: 0; }\r\np { margin: 5px 0 10px 0; }","* {\n  margin: 0;\n  padding: 0;\n}\n\np {\n  margin: 5px 0 10px 0;\n}\n\nheader {\n  background-color: gray;\n  color: white;\n  grid-area: head;\n}\n\n.hed {\n  font-size: 1em;\n  text-align: center;\n}\n\nmain {\n  display: flex;\n  margin-left: 1vh;\n  border: 1px solid black;\n  display: flex;\n  grid-area: main;\n}\n\n.right-main {\n  display: flex;\n  flex: 1;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.747);\n}\n\n/* <main>\n<div class=\"left-main\">\n    <p>sada sad asd asd asd as ssssss </p>\n</div>\n<div class=\"right-main\">\n    <p>sada sad asd asd asd as ssssss </p>\n</div>\n</main> */\nbody {\n  font-size: 24px;\n  display: grid;\n  width: 100%;\n  height: 100%;\n  gap: 1vh;\n  background-color: gray;\n  color: rgba(255, 255, 255, 0.549);\n  grid-template-areas: \"head     head    righ\" \"main     main    righ\" \"foot     foot    righ\";\n  grid-template-rows: 35vh 55vh 5vh;\n  grid-template-columns: 1fr 1fr 20%;\n}\n\n.nav-panel {\n  color: green;\n  border: 2px solid black;\n  font-size: 2vh;\n  background-color: rgba(0, 0, 0, 0.747);\n  color: white;\n  grid-area: righ;\n}\n\n.nav-panel p span {\n  display: inline;\n  border: 1px solid black;\n  background-color: red;\n}\n\n.nav-text-block {\n  margin-left: 2%;\n}\n\n.nav-panel {\n  color: green;\n  border: 2px solid black;\n  font-size: 2vh;\n  background-color: rgba(0, 0, 0, 0.747);\n  color: white;\n  grid-area: righ;\n}\n\n.nav-panel p span {\n  display: inline;\n  border: 1px solid black;\n  background-color: red;\n}\n\n.nav-text-block {\n  margin-left: 2%;\n}\n\n.line-number {\n  padding-top: 0.2vh;\n  color: black;\n  background-color: rgba(255, 255, 255, 0.549);\n  height: 100%;\n  width: 3vh;\n  padding-right: 1vh;\n  text-align: right;\n  font-size: 2.26vh;\n}\n\n.line-numbers {\n  border-right: 0.5px solid white;\n  padding-top: 0.2vh;\n  color: white;\n  background-color: black;\n  height: 100%;\n  width: 3vh;\n  padding-right: 1vh;\n  text-align: right;\n  font-size: 2.26vh;\n}\n\n.checking {\n  font-size: 5vh;\n}\n\ninput {\n  width: 100%;\n}\ninput input:disabled {\n  background: #ccc;\n}\n\n#apple1 {\n  left: 12px;\n  right: 1px;\n}\n\n.button-left {\n  cursor: pointer;\n  max-width: 1rem;\n  min-width: 1px;\n  background-color: black;\n  color: white;\n}\n\n.button-left:hover {\n  color: blue;\n}\n\n.button-left:active {\n  color: red;\n}\n\n.button-right {\n  cursor: pointer;\n  max-width: 1rem;\n  min-width: 1px;\n  background-color: black;\n  color: white;\n}\n\n.button-right:hover {\n  color: blue;\n}\n\n.button-right:active {\n  color: red;\n}\n\n.but-select {\n  cursor: pointer;\n  background-color: black;\n  color: white;\n}\n\n.but-select:hover {\n  color: blue;\n}\n\n.but-select:active {\n  color: red;\n}\n\n.select {\n  width: 100%;\n}\n\n.left-main {\n  display: flex;\n  flex: 1;\n}\n\n.left-second {\n  width: 100%;\n}\n\n.inp-ancver {\n  background-color: rgba(255, 255, 255, 0.549);\n  flex: 1;\n  margin-left: 10px;\n  width: 60%;\n}\n\n.enter {\n  flex: 1;\n  font-size: 0.7rem;\n  width: 30%;\n  color: red;\n  background-color: black;\n}\n\n.help-textarea {\n  color: rgba(255, 255, 255, 0.549);\n  font-size: 0.7rem;\n  width: 100%;\n  background-color: gray;\n  resize: none;\n  height: 80%;\n}\n\n/*    <input class=\"inp-anc\" type=\"text\">\n   <button class=\"left-but\">\n       Enter   \n   </button> */\n.right-second {\n  width: 100%;\n  height: 100%;\n}\n\n.help-textarea-right {\n  font-size: 0.75rem;\n  background-color: rgba(102, 92, 92, 0.795);\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  color: white;\n}\n\n.modal {\n  position: fixed;\n  z-index: 2;\n  width: 80%;\n  height: 100%;\n  overflow-y: auto;\n  visibility: hidden;\n  opacity: 1;\n  transition: opacity 2s, visibility 0.4s;\n}\n\n.modal-box {\n  color: black;\n  background-color: white;\n  top: 40%;\n  height: 20%;\n  width: 80%;\n  position: relative;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n}\n\n.modal.open {\n  visibility: visible;\n  opacity: 1;\n}\n\n.close-modal {\n  font-size: 30px;\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  border: none;\n  background-color: transparent;\n  padding: 10px;\n  transition: fill 1s;\n  cursor: pointer;\n}\n\n.close-modal:hover {\n  color: blue;\n}\n\n.close-modal:active {\n  color: red;\n}\n\n.text-modal {\n  font-size: 2vh;\n}\n\n.text-modal p {\n  margin-left: 4vh;\n  text-align: left;\n  margin-top: 4vh;\n}\n\n.text-modal pre {\n  margin-left: 4vh;\n  text-align: left;\n  margin-top: 4vh;\n  background-color: antiquewhite;\n}\n\n.b-restart2 {\n  cursor: pointer;\n  color: white;\n  background-color: black;\n}\n\n.b-restart2:hover {\n  color: blue;\n}\n\n.b-restart2:active {\n  color: red;\n}\n\n.h2 {\n  font-size: 5vh;\n}\n\n.b-restart2 {\n  position: absolute;\n  width: 30vh;\n  height: 20%;\n  top: 40%;\n  left: 30%;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 2vh;\n  background-color: red;\n  color: black;\n  grid-area: foot;\n}\n\nfooter a {\n  color: black;\n}\n\nfooter a:hover {\n  color: blue;\n}\n\nfooter a:active {\n  color: green;\n}\n\n.box-of-img {\n  margin-top: 1%;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  width: 80%;\n  justify-content: center;\n  align-items: center;\n  height: 20vh;\n  -webkit-box-shadow: 8px 8px 8px 0px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 8px 8px 8px 0px rgba(34, 60, 80, 0.2);\n  box-shadow: 8px 8px 8px 0px rgba(34, 60, 80, 0.2);\n}\n\n.box-of-img {\n  display: flex;\n}\n\n.box-of-img > * {\n  margin: 1%;\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\n\nh1 {\n  font-size: 5vh;\n}\n\n.buttons > * {\n  cursor: pointer;\n  background-color: black;\n  color: white;\n}\n\n.buttons > *:hover {\n  color: blue;\n}\n\n.buttons > *:active {\n  color: red;\n}\n\n.modal2 {\n  position: fixed;\n  z-index: 2;\n  width: 80%;\n  height: 100%;\n  overflow-y: auto;\n  visibility: hidden;\n  opacity: 1;\n  transition: opacity 2s, visibility 0.4s;\n}\n\n.modal-box2 {\n  color: black;\n  background-color: white;\n  top: 40%;\n  height: 80%;\n  width: 80%;\n  position: relative;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n}\n\n.modal.open2 {\n  visibility: visible;\n  opacity: 1;\n}\n\n.close-modal2 {\n  font-size: 30px;\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  border: none;\n  background-color: transparent;\n  padding: 10px;\n  transition: fill 1s;\n  cursor: pointer;\n}\n\n.close-modal2:hover {\n  color: blue;\n}\n\n.close-modal2:active {\n  color: red;\n}\n\n.text-modal2 {\n  font-size: 3vh;\n}\n\n.text-modal2 p {\n  margin-left: 4vh;\n  text-align: left;\n  margin-top: 4vh;\n}\n\n.text-modal2 pre {\n  margin-left: 4vh;\n  text-align: left;\n  margin-top: 4vh;\n  background-color: antiquewhite;\n}\n\n.open_modal2 {\n  cursor: pointer;\n  color: white;\n  background-color: black;\n}\n\n.open_modal2:hover {\n  color: blue;\n}\n\n.open_modal2:active {\n  color: red;\n}","header{\r\n    background-color: $second-color;\r\n    color: $text-color;\r\n    grid-area: head;\r\n}\r\n.hed{\r\n    font-size: 1em;\r\n    text-align: center;\r\n}","main{\r\n    display: flex;\r\n    margin-left: 1vh;\r\n    border: 1px solid black;\r\n    display: flex;\r\n    grid-area: main;\r\n  }\r\n  \r\n\r\n.right-main{\r\n    display: flex;\r\n    flex: 1;\r\n    color: $text-color;\r\n    background-color: $base-color;\r\n}\r\n/* <main>\r\n<div class=\"left-main\">\r\n    <p>sada sad asd asd asd as ssssss </p>\r\n</div>\r\n<div class=\"right-main\">\r\n    <p>sada sad asd asd asd as ssssss </p>\r\n</div>\r\n</main> */","$base-color: rgba(0, 0, 0, 0.747);\r\n$second-color: gray;\r\n$text-color: white;","body{\r\n  font-size: 24px;\r\n    display: grid;\r\n    width: 100%;\r\n    height: 100%;\r\n    gap: 1vh;\r\n    background-color: gray;\r\n    color: rgba(255, 255, 255, 0.549);\r\n    grid-template-areas:\r\n      \"head     head    righ\"\r\n      \"main     main    righ\"\r\n      \"foot     foot    righ\";\r\n    grid-template-rows: 35vh 55vh 5vh;\r\n    grid-template-columns: 1fr 1fr 20%;\r\n  }\r\n  ",".nav-panel{\r\n    color: green;\r\n    border: 2px solid black;\r\n    font-size: 2vh;\r\n    background-color: $base-color;\r\n    color: $text-color;\r\n    grid-area: righ;\r\n  }\r\n\r\n  .nav-panel p span{\r\n    display: inline;\r\n    border: 1px solid black;\r\n    background-color: red;\r\n  }\r\n  .nav-text-block{\r\n    margin-left: 2%;\r\n  }",".line-number{\r\n    padding-top: 0.2vh;\r\n    color: black;\r\n    background-color: rgba(255, 255, 255, 0.549);\r\n    height: 100%;\r\n    width: 3vh;\r\n    padding-right: 1vh;\r\n    text-align: right;\r\n    font-size: 2.26vh\r\n}\r\n.line-numbers{\r\n    border-right: 0.5px solid white;\r\n    padding-top: 0.2vh;\r\n    color: white;\r\n    background-color: black;\r\n    height: 100%;\r\n    width: 3vh;\r\n    padding-right: 1vh;\r\n    text-align: right;\r\n    font-size: 2.26vh\r\n}\r\n",".checking{\r\n    font-size: 5vh;\r\n}\r\ninput {\r\n    width: 100%;\r\n    input:disabled { background: #ccc; }\r\n    \r\n}\r\n\r\n#apple1{\r\n    left: 12px;\r\n    right: 1px;\r\n}",".button-left{\r\n    cursor: pointer;\r\n    max-width: 1rem;\r\n    min-width: 1px;\r\n    background-color: black;\r\n    color: white;\r\n}\r\n.button-left:hover{\r\n    color: blue;\r\n}\r\n.button-left:active{\r\n    color: red;\r\n}\r\n.button-right{\r\n    cursor: pointer;\r\n    max-width: 1rem;\r\n    min-width: 1px;\r\n    background-color: black;\r\n    color: white;\r\n}\r\n.button-right:hover {\r\n    color: blue;\r\n}\r\n.button-right:active{\r\n    color: red;\r\n}\r\n.but-select{\r\n    cursor: pointer;\r\n    background-color: black;\r\n    color: white;\r\n}\r\n.but-select:hover{\r\n    color: blue;\r\n}\r\n.but-select:active{\r\n    color: red;\r\n}",".select{\r\n    width: 100%;\r\n}",".left-main{\r\n    display: flex;\r\n    flex: 1;\r\n}\r\n\r\n.left-second{\r\n    width: 100%;\r\n}","\r\n.inp-ancver{\r\n    background-color: rgba(255, 255, 255, 0.549);;\r\n    flex: 1;\r\n    margin-left: 10px;\r\n    width: 60%;\r\n}\r\n.enter{\r\n    flex: 1;\r\n    font-size: 0.7rem;\r\n    width: 30%;\r\n    color: red;\r\n    background-color: black;\r\n\r\n}\r\n.help-textarea{\r\n    color: rgba(255, 255, 255, 0.549);\r\n    font-size: 0.7rem;\r\n    width: 100%;\r\n    background-color: $second-color;\r\n    resize: none;\r\n    height: 80%;\r\n\r\n}\r\n\r\n/*    <input class=\"inp-anc\" type=\"text\">\r\n   <button class=\"left-but\">\r\n       Enter   \r\n   </button> */",".right-second{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.help-textarea-right{\r\n    font-size: 0.75rem;\r\n    background-color: rgba(102, 92, 92, 0.795);\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: black;\r\n    color: white;   \r\n}",".modal{\r\n    position: fixed;\r\n    z-index: 2;\r\n    width: 80%;\r\n    height: 100%;\r\n    overflow-y: auto;\r\n    visibility: hidden;\r\n    opacity: 1;\r\n    transition: opacity 2s, visibility .4s;\r\n}\r\n.modal-box{\r\n    color: black;\r\n    background-color: white;\r\n    top: 40%;\r\n    height: 20%;\r\n    width: 80%; \r\n    position: relative;\r\n    left: 50%;\r\n    transform:translate(-50%, -50%);\r\n    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\r\n}\r\n.modal.open{\r\n    visibility: visible;    \r\n    opacity: 1;\r\n}\r\n.close-modal{\r\n    font-size: 30px;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 20px;\r\n    border: none;\r\n    background-color: transparent;\r\n    padding: 10px;\r\n    transition: fill 1s;\r\n    cursor: pointer;\r\n}\r\n.close-modal:hover{\r\n    color: blue;\r\n}\r\n.close-modal:active{\r\n    color: red;\r\n}\r\n.text-modal{\r\n    font-size: 2vh;\r\n}\r\n.text-modal p{\r\n    margin-left: 4vh;\r\n    text-align: left;\r\n    margin-top: 4vh;\r\n}\r\n.text-modal pre{\r\n    margin-left: 4vh;\r\n    text-align: left;\r\n    margin-top: 4vh;\r\n    background-color: antiquewhite;\r\n}\r\n.b-restart2{\r\n    cursor: pointer;\r\n    color: white;\r\n    background-color: black;\r\n}\r\n.b-restart2:hover{\r\n    color: blue;\r\n}\r\n.b-restart2:active{\r\n    color: red;\r\n}\r\n.h2{\r\n    font-size: 5vh;\r\n}\r\n.b-restart2{\r\n    position: absolute;\r\n    width: 30vh;\r\n    height: 20%;\r\n    top: 40%;\r\n    left: 30%;\r\n\r\n}\r\n","footer{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    font-size: 2vh;\r\n    background-color: red;\r\n    color: black;\r\n    grid-area: foot;\r\n}   \r\nfooter a{\r\n    color: black;\r\n}\r\nfooter a:hover{\r\n    color: blue;\r\n}\r\nfooter a:active{\r\n    color: green;\r\n}",".box-of-img{\r\n    margin-top: 1%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: flex;\r\n    width: 80%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 20vh;   \r\n    -webkit-box-shadow: 8px 8px 8px 0px rgba(34, 60, 80, 0.2);\r\n-moz-box-shadow: 8px 8px 8px 0px rgba(34, 60, 80, 0.2);\r\nbox-shadow: 8px 8px 8px 0px rgba(34, 60, 80, 0.2);\r\n}",".box-of-img{\r\n    display: flex;\r\n}\r\n.box-of-img > *{\r\n    margin: 1%;\r\n    display: flex;\r\n    position: relative;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n    width: 100%;\r\n\r\n\r\n}\r\n","h1{\r\n    font-size: 5vh;\r\n}","\r\n.buttons > *{\r\n    cursor: pointer;\r\n    background-color: black;\r\n    color: white;\r\n}\r\n.buttons > *:hover{\r\n    color: blue;\r\n}\r\n.buttons > *:active{\r\n    color: red;\r\n}",".modal2{\r\n    position: fixed;\r\n    z-index: 2;\r\n    width: 80%;\r\n    height: 100%;\r\n    overflow-y: auto;\r\n    visibility: hidden;\r\n    opacity: 1;\r\n    transition: opacity 2s, visibility .4s;\r\n}\r\n.modal-box2{\r\n    color: black;\r\n    background-color: white;\r\n    top: 40%;\r\n    height: 80%;\r\n    width: 80%; \r\n    position: relative;\r\n    left: 50%;\r\n    transform:translate(-50%, -50%);\r\n    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\r\n}\r\n.modal.open2{\r\n    visibility: visible;    \r\n    opacity: 1;\r\n}\r\n.close-modal2{\r\n    font-size: 30px;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 20px;\r\n    border: none;\r\n    background-color: transparent;\r\n    padding: 10px;\r\n    transition: fill 1s;\r\n    cursor: pointer;\r\n}\r\n.close-modal2:hover{\r\n    color: blue;\r\n}\r\n.close-modal2:active{\r\n    color: red;\r\n}\r\n.text-modal2{\r\n    font-size: 3vh;\r\n}\r\n.text-modal2 p{\r\n    margin-left: 4vh;\r\n    text-align: left;\r\n    margin-top: 4vh;\r\n}\r\n.text-modal2 pre{\r\n    margin-left: 4vh;\r\n    text-align: left;\r\n    margin-top: 4vh;\r\n    background-color: antiquewhite;\r\n}\r\n.open_modal2{\r\n    cursor: pointer;\r\n    color: white;\r\n    background-color: black;\r\n}\r\n.open_modal2:hover{\r\n    color: blue;\r\n}\r\n.open_modal2:active{\r\n    color: red;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./src/assets/appl.png":
/*!*****************************!*\
  !*** ./src/assets/appl.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "354305c1295d1d4a6ca3f2d9dfe6da90.png");

/***/ }),

/***/ "./src/assets/image.png":
/*!******************************!*\
  !*** ./src/assets/image.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "fba2e31795eb30221af9267d697acb3c.png");

/***/ }),

/***/ "./src/assets/orange.png":
/*!*******************************!*\
  !*** ./src/assets/orange.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "0d470a13add4fa76b003f0073ad82b4d.png");

/***/ }),

/***/ "./src/assets/pickle.png":
/*!*******************************!*\
  !*** ./src/assets/pickle.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "0c2bf3977e49752947ecef09dab1d784.png");

/***/ }),

/***/ "./src/assets/rr.svg":
/*!***************************!*\
  !*** ./src/assets/rr.svg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c3644ab49acca98e9261c5bd839b8d77.svg");

/***/ }),

/***/ "./src/assets/square.svg":
/*!*******************************!*\
  !*** ./src/assets/square.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "3f0b9f87064ece18c1377ed1ef7cad3a.svg");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/js/basejs/b-help.ts":
/*!*********************************!*\
  !*** ./src/js/basejs/b-help.ts ***!
  \*********************************/
/***/ (() => {

document.querySelector('.b-help').addEventListener('click', function () {
    var lvl = Number(document.querySelector(".select").value);
    if (lvl == 1) {
        return helpig("plate");
    }
    if (lvl == 2) {
        return helpig("bento");
    }
    if (lvl == 3) {
        return helpig("#fancy");
    }
    if (lvl == 4) {
        return helpig("plate apple");
    }
    if (lvl == 5) {
        return helpig("#fancy pickle");
    }
    if (lvl == 6) {
        return helpig(".small");
    }
    if (lvl == 7) {
        return helpig("orange.small");
    }
    if (lvl == 8) {
        return helpig("bento orange.small");
    }
    if (lvl == 9) {
        return helpig("plate, bento");
    }
    if (lvl == 10) {
        return helpig("*");
    }
});
function helpig(text) {
    var f = Number(0);
    document.querySelector('.inp-ancver').value = "";
    setInterval(function () {
        if (text.length > f) {
            document.querySelector('.inp-ancver').value += text[f];
            f = f + 1;
        }
    }, 100);
}


/***/ }),

/***/ "./src/js/basejs/buttons-left-right.ts":
/*!*********************************************!*\
  !*** ./src/js/basejs/buttons-left-right.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkingLvl: () => (/* binding */ checkingLvl),
/* harmony export */   "default": () => (/* binding */ nextLevelUse),
/* harmony export */   str: () => (/* binding */ str)
/* harmony export */ });
/* harmony import */ var _task1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task1 */ "./src/js/basejs/task1.ts");
/* harmony import */ var _task2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task2 */ "./src/js/basejs/task2.ts");
/* harmony import */ var _task3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task3 */ "./src/js/basejs/task3.ts");
/* harmony import */ var _task4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task4 */ "./src/js/basejs/task4.ts");
/* harmony import */ var _task5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task5 */ "./src/js/basejs/task5.ts");
/* harmony import */ var _task6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task6 */ "./src/js/basejs/task6.ts");
/* harmony import */ var _task7__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task7 */ "./src/js/basejs/task7.ts");
/* harmony import */ var _task8__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task8 */ "./src/js/basejs/task8.ts");
/* harmony import */ var _task9__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task9 */ "./src/js/basejs/task9.ts");
/* harmony import */ var _task10__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task10 */ "./src/js/basejs/task10.ts");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form */ "./src/js/basejs/form.ts");











document.querySelector('.button-left').addEventListener('click', function () {
    var select = document.querySelector(".select").value;
    if (Number(select) > 1) {
        var a = Number(document.querySelector("#value").textContent) - 1;
        document.querySelector("#value").textContent = String(a);
        document.querySelector("#pi_input").value = String(a);
        var thisVal = document.querySelector(".select").value = String(a);
        checkingLvl(Number(thisVal));
    }
    else {
        var thisVal = document.querySelector(".select").value = String(10);
        document.querySelector("#value").textContent = String(10);
        document.querySelector("#pi_input").value = String(10);
        checkingLvl(Number(thisVal));
    }
});
document.querySelector('.button-right').addEventListener('click', function () {
    setTimeout(nextLevelUse, 500);
});
function nextLevelUse() {
    var select = document.querySelector(".select").value;
    if (Number(select) < 10) {
        var a = Number(document.querySelector("#value").textContent) + 1;
        document.querySelector("#value").textContent = String(a);
        document.querySelector("#pi_input").value = String(a);
        var thisVal = document.querySelector(".select").value = String(a);
        checkingLvl(Number(thisVal));
    }
    else {
        document.querySelector("#value").textContent = String(1);
        document.querySelector("#pi_input").value = String(1);
        var thisVal = document.querySelector(".select").value = String(1);
        checkingLvl(Number(thisVal));
    }
}
function checkingLvl(thisVal) {
    localStorage.setItem("saveLvl", JSON.stringify(thisVal));
    setThisPosition(String(thisVal));
    switch (thisVal) {
        case 1:
            (0,_task1__WEBPACK_IMPORTED_MODULE_0__["default"])();
            break;
        case 2:
            (0,_task2__WEBPACK_IMPORTED_MODULE_1__["default"])();
            break;
        case 3:
            (0,_task3__WEBPACK_IMPORTED_MODULE_2__["default"])();
            break;
        case 4:
            (0,_task4__WEBPACK_IMPORTED_MODULE_3__["default"])();
            break;
        case 5:
            (0,_task5__WEBPACK_IMPORTED_MODULE_4__["default"])();
            break;
        case 6:
            (0,_task6__WEBPACK_IMPORTED_MODULE_5__["default"])();
            break;
        case 7:
            (0,_task7__WEBPACK_IMPORTED_MODULE_6__["default"])();
            break;
        case 8:
            (0,_task8__WEBPACK_IMPORTED_MODULE_7__["default"])();
            break;
        case 9:
            (0,_task9__WEBPACK_IMPORTED_MODULE_8__["default"])();
            break;
        case 10:
            (0,_task10__WEBPACK_IMPORTED_MODULE_9__["default"])();
            break;
        default:
            (0,_task1__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }
}
function setThisPosition(thisVal) {
    document.querySelector(".select").value = thisVal;
    document.querySelector("#value").textContent = thisVal;
    document.querySelector("#pi_input").value = thisVal;
}
//localStorage.setItem("saveLvl","1");
function str() {
    var starting = parseInt(localStorage.getItem("saveLvl"));
    if (isNaN(starting)) {
        localStorage.setItem("myKey", JSON.stringify(_form__WEBPACK_IMPORTED_MODULE_10__.lvls));
        checkingLvl(1);
    }
    else {
        checkingLvl(starting);
    }
}
str();
/* function invokeMe() {
    console.log("Hello ssssssworld!");
}

var result = eval("invokeMe()"); */


/***/ }),

/***/ "./src/js/basejs/form.ts":
/*!*******************************!*\
  !*** ./src/js/basejs/form.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lvls: () => (/* binding */ lvls)
/* harmony export */ });
/* harmony import */ var _buttons_left_right__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons-left-right */ "./src/js/basejs/buttons-left-right.ts");

var checkedWork = function () {
    document.querySelector('.enter').addEventListener('click', function (e) {
        if (valid()) {
        }
        else {
            invalid();
        }
    });
    document.addEventListener('keydown', function (event) {
        if (event.code === 'Enter' && valid()) {
        }
        else if (event.code === 'Enter') {
            invalid();
        }
    });
    function valid() {
        if (!whatIsWalid())
            return false;
        winOrNot();
        var p = localStorage.setItem("myKey", JSON.stringify(lvls));
        var start = 1;
        var finish = setInterval(function () {
            document.querySelector(".box-of-img").style.opacity = String(start);
            start = start - 0.1;
            if (start < 0)
                clearInterval(finish);
        }, 80);
        document.querySelector('.inp-ancver').value = "";
        setTimeout(_buttons_left_right__WEBPACK_IMPORTED_MODULE_0__["default"], 1000);
    }
    function invalid() {
        var start = 0;
        var timer = setInterval(function () {
            document.querySelector("main").style.marginRight = start + '%';
            document.querySelector("main").style.marginLeft = start + '%';
            start = start + 1;
            if (start > 10) {
                clearInterval(timer);
                var timer2_1 = setInterval(function () {
                    document.querySelector("main").style.marginRight = start + '%';
                    document.querySelector("main").style.marginLeft = start + '%';
                    start = start - 1;
                    if (start === 0)
                        clearInterval(timer2_1);
                }, 10);
            }
        }, 10);
    }
};
checkedWork();
function whatIsWalid() {
    var a = document.querySelector(".select").value;
    var valu = document.querySelector('.inp-ancver').value;
    var lvl = Number(a);
    if (lvl == 1 && valu.split(" ").join() === "plate") {
        lvls.lvl1 = true;
        return true;
    }
    if (lvl == 2 && valu.split(" ").join() === "bento") {
        lvls.lvl2 = true;
        return true;
    }
    if (lvl == 3 && valu.split(" ").join() === "#fancy") {
        lvls.lvl3 = true;
        return true;
    }
    if (lvl == 4 && valu.split(" ").join("") === "plateapple") {
        lvls.lvl4 = true;
        return true;
    }
    if (lvl == 5 && valu.split(" ").join("") === "#fancypickle") {
        lvls.lvl5 = true;
        return true;
    }
    if (lvl == 6 && (valu === "apple.small" || valu === ".small")) {
        lvls.lvl6 = true;
        return true;
    }
    if (lvl == 7 && valu === "orange.small") {
        lvls.lvl7 = true;
        return true;
    }
    if (lvl == 8 && valu === "bento orange.small") {
        lvls.lvl8 = true;
        return true;
    }
    if (lvl == 9 && (valu.split(" ").join("") === "plate,bento" || valu.split(" ").join("") === "bento,plate")) {
        lvls.lvl9 = true;
        return true;
    }
    if (lvl == 10 && (valu.split(" ").join("") === "*")) {
        lvls.lvl10 = true;
        return true;
    }
    else {
        return false;
    }
}
var lvls = {
    lvl1: false,
    lvl2: false,
    lvl3: false,
    lvl4: false,
    lvl5: false,
    lvl6: false,
    lvl7: false,
    lvl8: false,
    lvl9: false,
    lvl10: false,
};
//localStorage.setItem("myKey",JSON.stringify(arr));
function winOrNot() {
    var count = 0;
    for (var key in lvls) {
        count++;
        if (lvls[key] === false)
            return;
        if (count === 10) {
            console.log("urur");
            setTimeout(YouWin, 1000);
        }
    }
}
function YouWin() {
    document.querySelector('.modal').classList.add('open');
    document.querySelector(".b-restart").style.color = "red";
}


/***/ }),

/***/ "./src/js/basejs/line-number.ts":
/*!**************************************!*\
  !*** ./src/js/basejs/line-number.ts ***!
  \**************************************/
/***/ (() => {

(function line() {
    var num = "";
    for (var i = 1; i <= 20; i++) {
        num += i;
        num += '<br>';
    }
    document.querySelector('.line-number').innerHTML = num;
    document.querySelector('.line-numbers').innerHTML = num;
})();


/***/ }),

/***/ "./src/js/basejs/littleMoving.ts":
/*!***************************************!*\
  !*** ./src/js/basejs/littleMoving.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ timerLittle)
/* harmony export */ });
function timerLittle(arg) {
    var m = 50;
    var count = 45;
    setInterval(function () {
        arg.style.position = "absolute";
        arg.style.height = "30%";
        arg.style.padding = "1%";
        if (count < m) {
            arg.style.height = count + '%';
            count = count + 0.5;
        }
        else {
            m = 45;
            arg.style.height = count + '%';
            count = count - 0.5;
            if (count < 46) {
                m = 50;
            }
        }
    }, 25);
}
;


/***/ }),

/***/ "./src/js/basejs/modal.ts":
/*!********************************!*\
  !*** ./src/js/basejs/modal.ts ***!
  \********************************/
/***/ (() => {

document.querySelector(".close-modal").addEventListener('click', function () {
    document.querySelector('.modal').classList.remove('open');
});
window.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
        document.querySelector('.modal').classList.remove('open');
    }
});
window.addEventListener('click', function (e) {
    if (document.querySelector('.modal').classList.contains('open')) {
        if (e.target !== document.querySelector(".modal-box") && e.target !== document.querySelector(".open_modal")) {
            document.querySelector('.modal').classList.remove('open');
        }
    }
});


/***/ }),

/***/ "./src/js/basejs/mouscolor.ts":
/*!************************************!*\
  !*** ./src/js/basejs/mouscolor.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mouscolor)
/* harmony export */ });
function mouscolor(img, text) {
    var im = document.querySelector(img);
    var tex = document.querySelector(text);
    im.onmouseover = function () {
        //onmouseover.stopPropagation()
        tex.style.backgroundColor = "#0f0";
        im.style.backgroundColor = "red";
        tex.style.color = "black";
        //onmouseout.stopImmediatePropagation()
    };
    im.onmouseout = function () {
        tex.style.color = "white";
        tex.style.backgroundColor = "transparent";
        im.style.backgroundColor = "transparent";
        /*     if(document.querySelector('#round1') === im){
                onmouseout.stopImmediatePropagation()
            } */
        //onmouseout.stopImmediatePropagation()
    };
    tex.addEventListener("mouseover", function (e) {
        if (document.querySelector('#apple-text1') === tex) {
            e.stopPropagation();
        }
        if (document.querySelector('#orange-text1') === tex) {
            e.stopPropagation();
        }
        if (document.querySelector('#pickle-text1') === tex) {
            e.stopPropagation();
        }
        if (document.querySelector('#pickle-text2') === tex) {
            e.stopPropagation();
        }
        if (document.querySelector('#apple-small2') === tex) {
            e.stopPropagation();
        }
        if (document.querySelector('#text-orange-small1') === tex) {
            e.stopPropagation();
        }
        if (document.querySelector('#text-orange1') === tex) {
            e.stopPropagation();
        }
        if (document.querySelector('#text-orange-small2') === tex) {
            e.stopPropagation();
        }
        if (document.querySelector('#text-orange2') === tex) {
            e.stopPropagation();
        }
        if (document.querySelector('#text-apple1') === tex) {
            e.stopPropagation();
        }
        if (document.querySelector('#text-orange3') === tex) {
            e.stopPropagation();
        }
        if (document.querySelector('#text-orange-big1') === tex) {
            e.stopPropagation();
        }
        if (document.querySelector('#pick3') === tex) {
            e.stopPropagation();
        }
        if (document.querySelector('#pick4') === tex) {
            e.stopPropagation();
        }
        if (document.querySelector('#pick5') === tex) {
            e.stopPropagation();
        }
        tex.style.backgroundColor = "#0f0";
        tex.style.color = "black";
        im.style.backgroundColor = "red";
    });
    tex.onmouseout = function () {
        //onmouseout.stopImmediatePropagation()
        tex.style.backgroundColor = "transparent";
        tex.style.color = "white";
        im.style.backgroundColor = "transparent";
    };
}


/***/ }),

/***/ "./src/js/basejs/moving.ts":
/*!*********************************!*\
  !*** ./src/js/basejs/moving.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ timer)
/* harmony export */ });
function timer(arg) {
    var m = 70;
    var count = 65;
    setInterval(function () {
        arg.style.position = "relative";
        arg.style.height = "100%";
        arg.style.padding = "1%";
        if (count < m) {
            arg.style.height = count + '%';
            count = count + 0.5;
        }
        else {
            m = 65;
            arg.style.height = count + '%';
            count = count - 0.5;
            if (count < 66) {
                m = 70;
            }
        }
    }, 25);
}
;


/***/ }),

/***/ "./src/js/basejs/reset.ts":
/*!********************************!*\
  !*** ./src/js/basejs/reset.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttons_left_right__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons-left-right */ "./src/js/basejs/buttons-left-right.ts");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/js/basejs/form.ts");


document.querySelector('.b-restart').addEventListener('click', function () {
    document.querySelector(".b-restart").style.color = "white";
    _form__WEBPACK_IMPORTED_MODULE_1__.lvls.lvl1 = false;
    _form__WEBPACK_IMPORTED_MODULE_1__.lvls.lvl2 = false;
    _form__WEBPACK_IMPORTED_MODULE_1__.lvls.lvl3 = false;
    _form__WEBPACK_IMPORTED_MODULE_1__.lvls.lvl4 = false;
    _form__WEBPACK_IMPORTED_MODULE_1__.lvls.lvl5 = false;
    _form__WEBPACK_IMPORTED_MODULE_1__.lvls.lvl6 = false;
    _form__WEBPACK_IMPORTED_MODULE_1__.lvls.lvl7 = false;
    _form__WEBPACK_IMPORTED_MODULE_1__.lvls.lvl8 = false;
    _form__WEBPACK_IMPORTED_MODULE_1__.lvls.lvl9 = false;
    _form__WEBPACK_IMPORTED_MODULE_1__.lvls.lvl10 = false;
    localStorage.clear();
    localStorage.removeItem("myKey");
    (0,_buttons_left_right__WEBPACK_IMPORTED_MODULE_0__.str)();
});


/***/ }),

/***/ "./src/js/basejs/reset2.ts":
/*!*********************************!*\
  !*** ./src/js/basejs/reset2.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttons_left_right__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons-left-right */ "./src/js/basejs/buttons-left-right.ts");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/js/basejs/form.ts");


document.querySelector('.b-restart2').addEventListener('click', function () {
    document.querySelector(".b-restart").style.color = "white";
    _form__WEBPACK_IMPORTED_MODULE_1__.lvls.lvl1 = false;
    _form__WEBPACK_IMPORTED_MODULE_1__.lvls.lvl2 = false;
    _form__WEBPACK_IMPORTED_MODULE_1__.lvls.lvl3 = false;
    _form__WEBPACK_IMPORTED_MODULE_1__.lvls.lvl4 = false;
    _form__WEBPACK_IMPORTED_MODULE_1__.lvls.lvl5 = false;
    _form__WEBPACK_IMPORTED_MODULE_1__.lvls.lvl6 = false;
    _form__WEBPACK_IMPORTED_MODULE_1__.lvls.lvl7 = false;
    _form__WEBPACK_IMPORTED_MODULE_1__.lvls.lvl8 = false;
    _form__WEBPACK_IMPORTED_MODULE_1__.lvls.lvl9 = false;
    _form__WEBPACK_IMPORTED_MODULE_1__.lvls.lvl10 = false;
    localStorage.clear();
    localStorage.removeItem("myKey");
    (0,_buttons_left_right__WEBPACK_IMPORTED_MODULE_0__.str)();
});


/***/ }),

/***/ "./src/js/basejs/select.ts":
/*!*********************************!*\
  !*** ./src/js/basejs/select.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttons_left_right__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons-left-right */ "./src/js/basejs/buttons-left-right.ts");

document.querySelector(".select").addEventListener('change', function (x) {
    var targe = x.target;
    var m = document.querySelector("#pi_input").value = targe.value;
    document.querySelector("#value").textContent = targe.value;
    (0,_buttons_left_right__WEBPACK_IMPORTED_MODULE_0__.checkingLvl)(Number(m));
});


/***/ }),

/***/ "./src/js/basejs/smallMoving.ts":
/*!**************************************!*\
  !*** ./src/js/basejs/smallMoving.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ timerSmall)
/* harmony export */ });
function timerSmall(arg) {
    console.log(typeof (arg));
    var m = 20;
    var count = 15;
    setInterval(function () {
        arg.style.position = "absolute";
        arg.style.height = "30%";
        arg.style.padding = "1%";
        arg.style.left = "40%";
        if (count < m) {
            arg.style.height = count + '%';
            count = count + 0.5;
        }
        else {
            m = 15;
            arg.style.height = count + '%';
            count = count - 0.5;
            if (count < 16) {
                m = 20;
            }
        }
    }, 25);
}
;


/***/ }),

/***/ "./src/js/basejs/task1.ts":
/*!********************************!*\
  !*** ./src/js/basejs/task1.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ task1)
/* harmony export */ });
/* harmony import */ var _assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/rr.svg */ "./src/assets/rr.svg");
/* harmony import */ var _moving__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving */ "./src/js/basejs/moving.ts");
/* harmony import */ var _mouscolor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mouscolor */ "./src/js/basejs/mouscolor.ts");


//import {lvls} from './form'

function task1() {
    var taskh1 = document.querySelector('h1');
    var navPan = document.querySelector('.nav-text-block');
    var leftPanel = document.querySelector('.help-textarea');
    var rightPanel = document.querySelector('.help-textarea-right');
    var add = '';
    add += '<h2>Type Selector</h2>';
    add += '<p>Select elements by their type</p>';
    add += '<p><span>A</p></span>';
    add += '<p>Selects all elements of type <span>A</span>. Type refers to the type of tag, so <span>div</span>, <span>&lt;p&gt</span>; and <span>&lt;ul&gt</span>; are all different element types.</p>';
    add += '<h3>Examples</h3>';
    add += '<p><span>div</span> selects all <span>&lt;div&gt</span>; elements.</p>';
    add += '<hr>';
    add += '<p><span>p</span> selects all <span>&lt;p&gt</span>; elements.';
    navPan.innerHTML = add;
    add = ' {';
    add += '\n';
    add += ' /* Styles would go here. */';
    add += '\n';
    add += ' }';
    add += '\n';
    add += '\n';
    add += ' /*';
    add += ' Type a number to skip to a';
    add += '\n';
    add += ' level.';
    add += '\n';
    add += ' Ex → "5" for level 5';
    add += '\n';
    add += ' */';
    add += '\n';
    leftPanel.innerHTML = add;
    add = '<div class="table"><pre>&lt;div/&gt;</pre>';
    add += '<div class="bento" id="bento1"><pre>  &lt;plate /&gt</pre></div>';
    add += '<div class="bento" id="bento2"><pre>  &lt;plate /&gt</pre></div>';
    add += '<pre>&lt;div /&gt;</pre></div>';
    rightPanel.innerHTML = add;
    taskh1.textContent = "Select the plates";
    document.querySelector('.table-box').innerHTML = '<div class="box-of-img"></div>';
    add = "<div><img class=\"round\" id=\"round1\" src=".concat(_assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__["default"], "></div>");
    add += "<div><img class=\"round\" id=\"round2\" src=".concat(_assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__["default"], "></div>.");
    document.querySelector('.box-of-img').innerHTML = add;
    var lvl1 = JSON.parse(localStorage.getItem("myKey"));
    if (lvl1.lvl1 === true) {
        document.querySelector('.checking').style.color = "green";
    }
    else {
        document.querySelector('.checking').style.color = "white";
    }
    function addMainStyle() {
        var r = document.querySelectorAll('.round');
        for (var i = 0; i < r.length; i++) {
            (0,_moving__WEBPACK_IMPORTED_MODULE_1__["default"])(r[i]);
        }
    }
    addMainStyle();
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_2__["default"])("#round1", "#bento1");
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_2__["default"])("#round2", "#bento2");
}
/* function myFunc() {
    let blocks = document.querySelectorAll( ".round" ); // находим все элементы с классом block
    for( let i = 0; i < blocks.length; i++){ // проходим циклом по всем элементам объекта
      blocks[i].style.height = "100%"
    }
  }
  myFunc() */
/*   let blocks = document.querySelectorAll( ".round" );
let a = document.querySelectorAll('.round').onclick = function() {
    for( let i = 0; i < blocks.length; i++){ // проходим циклом по всем элементам объекта
        blocks[i].style.height = "100%"
      }
}; */
/* document.querySelector('#round1').onmouseover = function() {
    document.querySelector('#round1').style.backgroundColor = "red"
      
};
document.querySelector('#round2').onmouseover = function() {
    document.querySelector('#round2').style.backgroundColor = "red"
}; */
/* document.querySelector('#round1').onmouseover = function() {
    document.querySelector('#round1').style.backgroundColor = "red"
      
}; */
/* document.querySelector('#round2').onmouseover = function() {
    document.querySelector('#round2').style.backgroundColor = "red"
}; */
/* <input type="text" class="inp-ancver">
<button class="enter">Enter</button> */
/* document.querySelector("#bento1").addEventListener('click', function(){
    console.log("1")
    document.querySelector('#bento1').style.backgroundColor = "#0f0"
}) */
/* let blocks = document.querySelectorAll( ".round" );
document.querySelector('.round').onclick = function() {
    for( let i = 0; i < blocks.length; i++){ // проходим циклом по всем элементам объекта
        console.log(blocks[i])
        blocks[i].style.backgroundColor = "red"
    }
      
};
 */ 


/***/ }),

/***/ "./src/js/basejs/task10.ts":
/*!*********************************!*\
  !*** ./src/js/basejs/task10.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ task10)
/* harmony export */ });
/* harmony import */ var _assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/rr.svg */ "./src/assets/rr.svg");
/* harmony import */ var _assets_square_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/square.svg */ "./src/assets/square.svg");
/* harmony import */ var _assets_image_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/image.png */ "./src/assets/image.png");
/* harmony import */ var _assets_orange_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/orange.png */ "./src/assets/orange.png");
/* harmony import */ var _littleMoving__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./littleMoving */ "./src/js/basejs/littleMoving.ts");
/* harmony import */ var _assets_appl_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/appl.png */ "./src/assets/appl.png");
/* harmony import */ var _moving__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./moving */ "./src/js/basejs/moving.ts");
/* harmony import */ var _smallMoving__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./smallMoving */ "./src/js/basejs/smallMoving.ts");
/* harmony import */ var _mouscolor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mouscolor */ "./src/js/basejs/mouscolor.ts");









function task10() {
    var taskh1 = document.querySelector('h1');
    var navPan = document.querySelector('.nav-text-block');
    var leftPanel = document.querySelector('.help-textarea');
    var rightPanel = document.querySelector('.help-textarea-right');
    var add = '';
    add += '<h2>The Universal Selector</h2>';
    add += '<p>You can select everything!</p>';
    add += '<p><span>*</span>';
    add += '<p>You can select all elements with the universal selector!</p>';
    add += '<h3>Examples</h3>';
    add += '<p><span>p *</span> selects any element inside all <span>&lt;p&gt</span>elements.</p>';
    navPan.innerHTML = add;
    taskh1.textContent = "Select all the things!";
    add = ' {';
    add += '\n';
    add += ' /* Styles would go here. */';
    add += '\n';
    add += ' }';
    add += '\n';
    add += '\n';
    add += ' /*';
    add += ' Type a number to skip to a';
    add += '\n';
    add += ' level.';
    add += '\n';
    add += ' Ex → "5" for level 5';
    add += '\n';
    add += ' */';
    add += '\n';
    leftPanel.innerHTML = add;
    add = '<div class="table"><pre>&lt;div class="table"&gt;</pre>';
    add += '<div id="text-apple1"><pre>  &lt;apple /&gt;</pre></div>';
    add += '<div id="text-plate1"></div>';
    add += '<div id="text-bento1"><pre>  &lt;bento /&gt;</pre></div>';
    add += '<div id="text-bento2"></div>';
    add += '<div id="text-plate2"><pre>  &lt;plate id="fancy" /&gt;</pre></div>';
    add += '<pre>&lt;div /&gt;</pre></div>';
    rightPanel.innerHTML = add;
    add = "<pre>  &lt;plate&gt</pre>";
    add += '<div id="text-orange1"><pre>    &lt;orange class="small" /&gt</pre></div>';
    add += "<pre>  &lt;plate /&gt</pre>";
    document.querySelector('#text-plate1').innerHTML = add;
    add = '<pre>  &lt;bento&gt</pre>';
    add += '<div id="text-orange2"><pre>    &lt;plate id="fancy" /&gt</pre></div>';
    add += "<pre>  &lt;bento /&gt</pre>";
    document.querySelector('#text-bento2').innerHTML = add;
    document.querySelector('.table-box').innerHTML = '<div class="box-of-img"></div>';
    add = "<div class=\"div1\"><img id=\"apple1\" src=".concat(_assets_appl_png__WEBPACK_IMPORTED_MODULE_5__["default"], "></div>");
    add += "<div class=\"div2\"><img id=\"round1\" src=".concat(_assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__["default"], "><img id=\"orange1\" src=").concat(_assets_orange_png__WEBPACK_IMPORTED_MODULE_3__["default"], "></div>");
    add += "<div class=\"div3\"><img id=\"square1\" src=".concat(_assets_square_svg__WEBPACK_IMPORTED_MODULE_1__["default"], "></div>");
    add += "<div class=\"div4\"><img id=\"square2\" src=".concat(_assets_square_svg__WEBPACK_IMPORTED_MODULE_1__["default"], "><img id=\"orange2\" src=").concat(_assets_orange_png__WEBPACK_IMPORTED_MODULE_3__["default"], "></div>");
    add += "<div class=\"div5\"><img id=\"round2\" src=".concat(_assets_image_png__WEBPACK_IMPORTED_MODULE_2__["default"], "></div>");
    document.querySelector('.box-of-img').innerHTML = add;
    var lvl10 = JSON.parse(localStorage.getItem("myKey"));
    if (lvl10.lvl10 === true) {
        document.querySelector('.checking').style.color = "green";
    }
    else {
        document.querySelector('.checking').style.color = "white";
    }
    function addMainStyle() {
        (0,_moving__WEBPACK_IMPORTED_MODULE_6__["default"])(document.querySelector('#apple1'));
        (0,_moving__WEBPACK_IMPORTED_MODULE_6__["default"])(document.querySelector('#round1'));
        (0,_moving__WEBPACK_IMPORTED_MODULE_6__["default"])(document.querySelector('#square1'));
        (0,_moving__WEBPACK_IMPORTED_MODULE_6__["default"])(document.querySelector('#square2'));
        (0,_moving__WEBPACK_IMPORTED_MODULE_6__["default"])(document.querySelector('#round2'));
        (0,_littleMoving__WEBPACK_IMPORTED_MODULE_4__["default"])(document.querySelector('#orange1'));
        (0,_smallMoving__WEBPACK_IMPORTED_MODULE_7__["default"])(document.querySelector('#orange2'));
    }
    addMainStyle();
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_8__["default"])('#apple1', '#text-apple1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_8__["default"])('#round1', '#text-plate1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_8__["default"])('#orange1', '#text-orange1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_8__["default"])('#square1', '#text-bento1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_8__["default"])('#square2', '#text-bento2');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_8__["default"])('#orange2', '#text-orange2');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_8__["default"])('#round2', '#text-plate2');
}
;


/***/ }),

/***/ "./src/js/basejs/task2.ts":
/*!********************************!*\
  !*** ./src/js/basejs/task2.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ task2)
/* harmony export */ });
/* harmony import */ var _assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/rr.svg */ "./src/assets/rr.svg");
/* harmony import */ var _assets_square_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/square.svg */ "./src/assets/square.svg");
/* harmony import */ var _mouscolor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mouscolor */ "./src/js/basejs/mouscolor.ts");
/* harmony import */ var _moving__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moving */ "./src/js/basejs/moving.ts");




function task2() {
    var taskh1 = document.querySelector('h1');
    var navPan = document.querySelector('.nav-text-block');
    var leftPanel = document.querySelector('.help-textarea');
    var rightPanel = document.querySelector('.help-textarea-right');
    var add = '';
    add += '<h2>Type Selector</h2>';
    add += '<p>Select elements by their type</p>';
    add += '<p><span>A</p></span>';
    add += '<p>Selects all elements of type <span>A</span>. Type refers to the type of tag, so <span>&lt;div&gt</span>, <span>&lt;p&gt</span>; and <span>&lt;ul&gt</span>; are all different element types.</p>';
    add += '<h3>Examples</h3>';
    add += '<p><span>div</span> selects all <span>&lt;div&gt</span>; elements.</p>';
    add += '<hr>';
    add += '<p><span>p</span> selects all <span>&lt;p&gt</span>; elements.';
    navPan.innerHTML = add;
    add = ' {';
    add += '\n';
    add += ' /* Styles would go here. */';
    add += '\n';
    add += ' }';
    add += '\n';
    add += '\n';
    add += ' /*';
    add += ' Type a number to skip to a';
    add += '\n';
    add += ' level.';
    add += '\n';
    add += ' Ex → "5" for level 5';
    add += '\n';
    add += ' */';
    add += '\n';
    leftPanel.innerHTML = add;
    add = '<div class="table"><pre>&lt;div/&gt;</pre>';
    add += '<div class="bento" id="square1t"><pre>  &lt;bento /&gt</pre></div>';
    add += '<div class="bento" id="bento1"><pre>  &lt;plate /&gt</pre></div>';
    add += '<div class="bento" id="square2t"><pre>  &lt;bento /&gt</pre></div>';
    add += '<pre>&lt;div /&gt;</pre></div>';
    rightPanel.innerHTML = add;
    taskh1.textContent = "Select the plates";
    document.querySelector('.table-box').innerHTML = '<div class="box-of-img"></div>';
    add = "<div><img class=\"square\" id=\"square1\" src=".concat(_assets_square_svg__WEBPACK_IMPORTED_MODULE_1__["default"], "></div>");
    add += "<div><img class=\"round\" id=\"round1\" src=".concat(_assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__["default"], "></div>");
    add += "<div><img class=\"square\" id=\"square2\" src=".concat(_assets_square_svg__WEBPACK_IMPORTED_MODULE_1__["default"], "></div>");
    document.querySelector('.box-of-img').innerHTML = add;
    var lvl2 = JSON.parse(localStorage.getItem("myKey"));
    if (lvl2.lvl2 === true) {
        document.querySelector('.checking').style.color = "green";
    }
    else {
        document.querySelector('.checking').style.color = "white";
    }
    //localStorage.setItem("myKey",JSON.stringify(lvls));
    function addMainStyle() {
        document.querySelector(".round").style.height = "60%";
        for (var i = 0; i < document.querySelectorAll('.square').length; i++) {
            (0,_moving__WEBPACK_IMPORTED_MODULE_3__["default"])(document.querySelectorAll('.square')[i]);
        }
    }
    addMainStyle();
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_2__["default"])("#square1", "#square1t");
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_2__["default"])("#round1", "#bento1");
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_2__["default"])("#square2", "#square2t");
}


/***/ }),

/***/ "./src/js/basejs/task3.ts":
/*!********************************!*\
  !*** ./src/js/basejs/task3.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ task3)
/* harmony export */ });
/* harmony import */ var _assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/rr.svg */ "./src/assets/rr.svg");
/* harmony import */ var _assets_square_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/square.svg */ "./src/assets/square.svg");
/* harmony import */ var _assets_image_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/image.png */ "./src/assets/image.png");
/* harmony import */ var _moving__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moving */ "./src/js/basejs/moving.ts");
/* harmony import */ var _mouscolor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mouscolor */ "./src/js/basejs/mouscolor.ts");





function task3() {
    var taskh1 = document.querySelector('h1');
    var navPan = document.querySelector('.nav-text-block');
    var leftPanel = document.querySelector('.help-textarea');
    var rightPanel = document.querySelector('.help-textarea-right');
    var add = '';
    add += '<h2>ID Selector</h2>';
    add += '<p>Select elements with an ID</p>';
    add += '<p><span>#id</p></span>';
    add += '<p>Selects the element with a specific <span>id</span>. You can also combine the ID selector with the type selector.</p>';
    add += '<h3>Examples</h3>';
    add += '<p><span>#cool</span> selects any element with<span>id="cool"</span>;</p>';
    add += '<hr>';
    add += '<p><span>ul#long</span> selects <span>&lt;ul id="long"&gt</span>';
    navPan.innerHTML = add;
    add = ' {';
    add += '\n';
    add += ' /* Styles would go here. */';
    add += '\n';
    add += ' }';
    add += '\n';
    add += '\n';
    add += ' /*';
    add += ' Type a number to skip to a';
    add += '\n';
    add += ' level.';
    add += '\n';
    add += ' Ex → "5" for level 5';
    add += '\n';
    add += ' */';
    add += '\n';
    leftPanel.innerHTML = add;
    add = '<div class="table"><pre>&lt;div class="table"&gt;</pre>';
    add += '<div class="bento" id="bento1"><pre>  &lt;plate id="fancy" /&gt</pre></div>';
    add += '<div class="bento" id="bento2"><pre>  &lt;plate /&gt</pre></div>';
    add += '<div class="bento" id="bento3"><pre>  &lt;bento /&gt</pre></div>';
    add += '<pre>&lt;div /&gt;</pre></div>';
    rightPanel.innerHTML = add;
    taskh1.textContent = "Select the pickle on the fancy plate";
    document.querySelector('.table-box').innerHTML = '<div class="box-of-img"></div>';
    add = "<div class=\"div1\"><img class=\"special\" id=\"special\" src=".concat(_assets_image_png__WEBPACK_IMPORTED_MODULE_2__["default"], "></div>");
    add += "<div class=\"div2\"><img class=\"round\" id=\"round1\" src=".concat(_assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__["default"], "></div>");
    add += "<div class=\"div3\"><img class=\"square\" id=\"square1\" src=".concat(_assets_square_svg__WEBPACK_IMPORTED_MODULE_1__["default"], "></div>");
    document.querySelector('.box-of-img').innerHTML = add;
    var lvl3 = JSON.parse(localStorage.getItem("myKey"));
    if (lvl3.lvl3 === true) {
        document.querySelector('.checking').style.color = "green";
    }
    else {
        document.querySelector('.checking').style.color = "white";
    }
    function addMainStyle() {
        var i = document.querySelector('#special');
        (0,_moving__WEBPACK_IMPORTED_MODULE_3__["default"])(i);
        document.querySelector(".div1").style.height = "100%";
        document.querySelector(".div2").style.height = "100%";
        document.querySelector(".div3").style.height = "100%";
        document.querySelector("#round1").style.height = "60%";
        document.querySelector("#square1").style.height = "60%";
    }
    addMainStyle();
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_4__["default"])('#special', '#bento1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_4__["default"])('#round1', '#bento2');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_4__["default"])('#square1', '#bento3');
}
;


/***/ }),

/***/ "./src/js/basejs/task4.ts":
/*!********************************!*\
  !*** ./src/js/basejs/task4.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ task3)
/* harmony export */ });
/* harmony import */ var _assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/rr.svg */ "./src/assets/rr.svg");
/* harmony import */ var _assets_square_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/square.svg */ "./src/assets/square.svg");
/* harmony import */ var _assets_appl_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/appl.png */ "./src/assets/appl.png");
/* harmony import */ var _smallMoving__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smallMoving */ "./src/js/basejs/smallMoving.ts");
/* harmony import */ var _mouscolor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mouscolor */ "./src/js/basejs/mouscolor.ts");





function task3() {
    var taskh1 = document.querySelector('h1');
    var navPan = document.querySelector('.nav-text-block');
    var leftPanel = document.querySelector('.help-textarea');
    var rightPanel = document.querySelector('.help-textarea-right');
    var add = '';
    add += '<h2>Descendant Selector</h2>';
    add += '<p>Select an element inside another element</p>';
    add += '<p><span>A  B</p></span>';
    add += '<p>Selects all <span>B</span> inside of<span>A</span>.<span>B</span>is called a descendant because it is inside of another element.</p>';
    add += '<h3>Examples</h3>';
    add += '<p><span> sp  strong </span> selects all <span>&lt;strong&gt</span>elements that are inside of any <span>&ltp&gt</span></p>';
    add += '<hr>';
    add += '<p><span>#fancy  span</span> selects any <span>&lt;span&gt</span>id="fancy"</span></p>';
    navPan.innerHTML = add;
    add = ' {';
    add += '\n';
    add += ' /* Styles would go here. */';
    add += '\n';
    add += ' }';
    add += '\n';
    add += '\n';
    add += ' /*';
    add += ' Type a number to skip to a';
    add += '\n';
    add += ' level.';
    add += '\n';
    add += ' Ex → "5" for level 5';
    add += '\n';
    add += ' */';
    add += '\n';
    leftPanel.innerHTML = add;
    add = '<div class="table"><pre>&lt;div class="table"&gt;</pre>';
    add += '<div class="square-text" id="square-text1"><pre>  &lt;bento /&gt</pre></div>';
    add += '<div class="round-text" id="round-text1"><pre>  &lt;plate /&gt</pre></div>';
    add += '<div class="apple-text" id="apple-text2"><pre>  &lt;apple /&gt</pre></div>';
    add += '<pre>&lt;div /&gt;</pre></div>';
    rightPanel.innerHTML = add;
    add = "<pre>  &lt;plate /&gt</pre>";
    add += '<div class="apple-text" id="apple-text1"><pre>    &lt;apple /&gt</pre></div>';
    add += "<pre>  &lt;plate /&gt</pre>";
    document.querySelector('.round-text').innerHTML = add;
    taskh1.textContent = "Select the apple on the plate";
    document.querySelector('.table-box').innerHTML = '<div class="box-of-img"></div>';
    add = "<div class=\"div1\"><img class=\"square\" id=\"square1\" src=".concat(_assets_square_svg__WEBPACK_IMPORTED_MODULE_1__["default"], "></div>");
    add += "<div class=\"div2\"><img class=\"round\" id=\"round1\" src=".concat(_assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__["default"], "><img class=\"apple\" id=\"apple1\" src=").concat(_assets_appl_png__WEBPACK_IMPORTED_MODULE_2__["default"], "></div>");
    add += "<div class=\"div3\"><img class=\"apple\" id=\"apple2\" src=".concat(_assets_appl_png__WEBPACK_IMPORTED_MODULE_2__["default"], "></div>");
    document.querySelector('.box-of-img').innerHTML = add;
    var lvl4 = JSON.parse(localStorage.getItem("myKey"));
    if (lvl4.lvl4 === true) {
        document.querySelector('.checking').style.color = "green";
    }
    else {
        document.querySelector('.checking').style.color = "white";
    }
    function addMainStyle() {
        (0,_smallMoving__WEBPACK_IMPORTED_MODULE_3__["default"])(document.querySelector('#apple1'));
        document.querySelector("#square1").style.height = "60%";
        document.querySelector("#round1").style.height = "60%";
        document.querySelector("#apple2").style.height = "60%";
    }
    addMainStyle();
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_4__["default"])('#square1', '#square-text1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_4__["default"])('#apple2', '#apple-text2');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_4__["default"])('#round1', '#round-text1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_4__["default"])('#apple1', '#apple-text1');
}
;


/***/ }),

/***/ "./src/js/basejs/task5.ts":
/*!********************************!*\
  !*** ./src/js/basejs/task5.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ task3)
/* harmony export */ });
/* harmony import */ var _assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/rr.svg */ "./src/assets/rr.svg");
/* harmony import */ var _assets_square_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/square.svg */ "./src/assets/square.svg");
/* harmony import */ var _assets_image_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/image.png */ "./src/assets/image.png");
/* harmony import */ var _assets_orange_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/orange.png */ "./src/assets/orange.png");
/* harmony import */ var _assets_pickle_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/pickle.png */ "./src/assets/pickle.png");
/* harmony import */ var _smallMoving__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./smallMoving */ "./src/js/basejs/smallMoving.ts");
/* harmony import */ var _mouscolor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mouscolor */ "./src/js/basejs/mouscolor.ts");







function task3() {
    var taskh1 = document.querySelector('h1');
    var navPan = document.querySelector('.nav-text-block');
    var leftPanel = document.querySelector('.help-textarea');
    var rightPanel = document.querySelector('.help-textarea-right');
    var add = '';
    add += '<h2>Combine the Descendant & ID Selectors</h2>';
    add += '<p><span>#id  A</span></p>';
    add += '<p>You can combine any selector with the descendent selector.</p>';
    add += '<h3>Examples</h3>';
    add += '<p><span>#cool span</span>selects all<span>&ltspan&gt</span>are inside of elements with<span> id="cool"</span></p>';
    navPan.innerHTML = add;
    taskh1.textContent = "Select the pickle on the fancy plate";
    add = ' {';
    add += '\n';
    add += ' /* Styles would go here. */';
    add += '\n';
    add += ' }';
    add += '\n';
    add += '\n';
    add += ' /*';
    add += ' Type a number to skip to a';
    add += '\n';
    add += ' level.';
    add += '\n';
    add += ' Ex → "5" for level 5';
    add += '\n';
    add += ' */';
    add += '\n';
    leftPanel.innerHTML = add;
    add = '<div class="table"><pre>&lt;div class="table"&gt;</pre>';
    add += '<div class="square-text" id="square-text1"><pre>  &lt;bento /&gt</pre></div>';
    add += '<div class="round-text" id="round-text1"><pre>  &lt;plate /&gt</pre></div>';
    add += '<div class="round-text" id="round-text2"><pre>  &lt;plate /&gt</pre></div>';
    add += '<pre>&lt;div /&gt;</pre></div>';
    rightPanel.innerHTML = add;
    add = "<pre>  &lt;bento&gt</pre>";
    add += '<div class="orange-text" id="orange-text1"><pre>    &lt;orange /&gt</pre></div>';
    add += "<pre>  &lt;bento /&gt</pre>";
    document.querySelector('#square-text1').innerHTML = add;
    add = '<pre>  &lt;plate id="fancy"&gt</pre>';
    add += '<div class="pickle-text" id="pickle-text1"><pre>    &lt;pickle /&gt</pre></div>';
    add += "<pre>  &lt;plate /&gt</pre>";
    document.querySelector('#round-text1').innerHTML = add;
    add = '<pre>  &lt;plate id="fancy"&gt</pre>';
    add += '<div class="pickle-text" id="pickle-text2"><pre>    &lt;pickle /&gt</pre></div>';
    add += "<pre>  &lt;plate /&gt</pre>";
    document.querySelector('#round-text2').innerHTML = add;
    document.querySelector('.table-box').innerHTML = '<div class="box-of-img"></div>';
    add = "<div class=\"div1\"><img class=\"square\" id=\"square1\" src=".concat(_assets_square_svg__WEBPACK_IMPORTED_MODULE_1__["default"], "><img id=\"orange1\" src=").concat(_assets_orange_png__WEBPACK_IMPORTED_MODULE_3__["default"], "></div>");
    add += "<div class=\"div2\"><img class=\"sround\" id=\"sround1\" src=".concat(_assets_image_png__WEBPACK_IMPORTED_MODULE_2__["default"], "><img id=\"pickle1\" src=").concat(_assets_pickle_png__WEBPACK_IMPORTED_MODULE_4__["default"], "></div>");
    add += "<div class=\"div3\"><img class=\"round\" id=\"round1\" src=".concat(_assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__["default"], "><img id=\"pickle2\" src=").concat(_assets_pickle_png__WEBPACK_IMPORTED_MODULE_4__["default"], "></div>");
    document.querySelector('.box-of-img').innerHTML = add;
    var lvl5 = JSON.parse(localStorage.getItem("myKey"));
    if (lvl5.lvl5 === true) {
        document.querySelector('.checking').style.color = "green";
    }
    else {
        document.querySelector('.checking').style.color = "white";
    }
    function addMainStyle() {
        (0,_smallMoving__WEBPACK_IMPORTED_MODULE_5__["default"])(document.querySelector('#pickle1'));
        document.querySelector("#pickle2").style.position = "absolute";
        document.querySelector("#pickle2").style.height = "20%";
        document.querySelector("#square1").style.height = "60%";
        document.querySelector("#orange1").style.position = "absolute";
        document.querySelector("#orange1").style.height = "30%";
        document.querySelector("#sround1").style.height = "60%";
        document.querySelector("#round1").style.height = "60%";
    }
    addMainStyle();
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_6__["default"])('#square1', '#square-text1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_6__["default"])('#orange1', '#orange-text1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_6__["default"])('#sround1', '#round-text1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_6__["default"])('#pickle1', '#pickle-text1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_6__["default"])('#round1', '#round-text2');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_6__["default"])('#pickle2', '#pickle-text2');
}
;


/***/ }),

/***/ "./src/js/basejs/task6.ts":
/*!********************************!*\
  !*** ./src/js/basejs/task6.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ task6)
/* harmony export */ });
/* harmony import */ var _assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/rr.svg */ "./src/assets/rr.svg");
/* harmony import */ var _assets_appl_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/appl.png */ "./src/assets/appl.png");
/* harmony import */ var _smallMoving__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smallMoving */ "./src/js/basejs/smallMoving.ts");
/* harmony import */ var _mouscolor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mouscolor */ "./src/js/basejs/mouscolor.ts");




function task6() {
    var taskh1 = document.querySelector('h1');
    var navPan = document.querySelector('.nav-text-block');
    var leftPanel = document.querySelector('.help-textarea');
    var rightPanel = document.querySelector('.help-textarea-right');
    var add = '';
    add += '<h2>Class Selector</h2>';
    add += '<p>Select elements by their class</p>';
    add += '<p><span>.classname</p></span>';
    add += '<p>The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.</p>';
    add += '<h3>Examples</h3>';
    add += '<p><span>.neato</span> selects all elements with<span> class="neato"</span></p>';
    navPan.innerHTML = add;
    add = ' {';
    add += '\n';
    add += ' /* Styles would go here. */';
    add += '\n';
    add += ' }';
    add += '\n';
    add += '\n';
    add += ' /*';
    add += ' Type a number to skip to a';
    add += '\n';
    add += ' level.';
    add += '\n';
    add += ' Ex → "5" for level 5';
    add += '\n';
    add += ' */';
    add += '\n';
    leftPanel.innerHTML = add;
    add = '<div class="table"><pre>&lt;div class="table"&gt;</pre>';
    add += '<div class="apple-text" id="apple-text1"><pre>  &lt;apple /&gt</pre></div>';
    add += '<div class="apple-text" id="apple-small1"><pre>  &lt;apple class="small" /&gt</pre></div>';
    add += '<div class="plate-text" id="plate-text1"><pre>  &lt;plate /&gt</pre></div>';
    add += '<div class="plate-text" id="plate-text2"><pre>  &lt;plate /&gt</pre></div>';
    add += '<pre>&lt;div /&gt;</pre></div>';
    rightPanel.innerHTML = add;
    add = "<pre>  &lt;plate &gt</pre>";
    add += '<div class="apple-text" id="apple-small2"><pre>     &lt;apple class="small" /&gt</pre></div>';
    add += "<pre>  &lt;plate /&gt</pre>";
    document.querySelector('#plate-text1').innerHTML = add;
    taskh1.textContent = "Select the small apples";
    document.querySelector('.table-box').innerHTML = '<div class="box-of-img"></div>';
    add = "<div class=\"div1\"><img class=\"apple\" id=\"apple1\" src=".concat(_assets_appl_png__WEBPACK_IMPORTED_MODULE_1__["default"], "></div>");
    add += "<div class=\"div2\"><img class=\"apple\" id=\"appleLittle1\" src=".concat(_assets_appl_png__WEBPACK_IMPORTED_MODULE_1__["default"], "></div>");
    add += "<div class=\"div3\"><img class=\"round\" id=\"round1\" src=".concat(_assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__["default"], "><img class=\"apple\" id=\"appleLittle2\" src=").concat(_assets_appl_png__WEBPACK_IMPORTED_MODULE_1__["default"], "></div>");
    add += "<div class=\"div3\"><img class=\"round\" id=\"round2\" src=".concat(_assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__["default"], "></div>");
    document.querySelector('.box-of-img').innerHTML = add;
    var lvl6 = JSON.parse(localStorage.getItem("myKey"));
    if (lvl6.lvl6 === true) {
        document.querySelector('.checking').style.color = "green";
    }
    else {
        document.querySelector('.checking').style.color = "white";
    }
    function addMainStyle() {
        /* timerLittle(document.querySelector('#appleLittle1')) */
        (0,_smallMoving__WEBPACK_IMPORTED_MODULE_2__["default"])(document.querySelector('#appleLittle1'));
        (0,_smallMoving__WEBPACK_IMPORTED_MODULE_2__["default"])(document.querySelector('#appleLittle2'));
        //document.querySelector("#appleLittle1'").style.height = "60%"
        document.querySelector("#apple1").style.height = "60%";
        document.querySelector("#appleLittle1").style.height = "60%";
        document.querySelector("#round1").style.height = "60%";
        document.querySelector("#appleLittle2").style.height = "60%";
        document.querySelector("#round2").style.height = "60%";
    }
    addMainStyle();
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_3__["default"])('#apple1', '#apple-text1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_3__["default"])('#appleLittle1', '#apple-small1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_3__["default"])('#round1', '#plate-text1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_3__["default"])('#appleLittle2', '#apple-small2');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_3__["default"])('#round2', '#plate-text2');
    /*     mouscolor('#square1', '#square-text1')
        mouscolor('#apple2', '#apple-text2')
       mouscolor('#round1', '#round-text1')
        mouscolor('#apple1', '#apple-text1') */
}
;


/***/ }),

/***/ "./src/js/basejs/task7.ts":
/*!********************************!*\
  !*** ./src/js/basejs/task7.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ task7)
/* harmony export */ });
/* harmony import */ var _assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/rr.svg */ "./src/assets/rr.svg");
/* harmony import */ var _assets_square_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/square.svg */ "./src/assets/square.svg");
/* harmony import */ var _assets_orange_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/orange.png */ "./src/assets/orange.png");
/* harmony import */ var _assets_appl_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/appl.png */ "./src/assets/appl.png");
/* harmony import */ var _smallMoving__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smallMoving */ "./src/js/basejs/smallMoving.ts");
/* harmony import */ var _mouscolor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mouscolor */ "./src/js/basejs/mouscolor.ts");






function task7() {
    var taskh1 = document.querySelector('h1');
    var navPan = document.querySelector('.nav-text-block');
    var leftPanel = document.querySelector('.help-textarea');
    var rightPanel = document.querySelector('.help-textarea-right');
    var add = '';
    add += '<h2>Combine the Class Selector</h2>';
    add += '<p><span>A.className</span></p>';
    add += '<p>You can combine the class selector with other selectors, like the type selector.</p>';
    add += '<h3>Examples</h3>';
    add += '<p><span>ul.important</span>selects all<span>&lt;ul /&gt</span>elements that have<span>class="important"</span></p>';
    add += '<hr>';
    add += '<p><span>#big.wide</span> selects all elements with <span> id="big" </span> that also have <span> class="wide"</span></p>';
    navPan.innerHTML = add;
    taskh1.textContent = "Select the small oranges";
    add = ' {';
    add += '\n';
    add += ' /* Styles would go here. */';
    add += '\n';
    add += ' }';
    add += '\n';
    add += '\n';
    add += ' /*';
    add += ' Type a number to skip to a';
    add += '\n';
    add += ' level.';
    add += '\n';
    add += ' Ex → "5" for level 5';
    add += '\n';
    add += ' */';
    add += '\n';
    leftPanel.innerHTML = add;
    add = '<div class="table"><pre>&lt;div class="table"&gt;</pre>';
    add += '<div id="text-apple1"><pre>  &lt;apple /&gt</pre></div>';
    add += '<div id="text-apple-small"><pre>  &lt;apple class="small" /&gt</pre></div>';
    add += '<div id="text-bento1"></div>';
    add += '<div id="text-plate1"></div>';
    add += '<div id="text-plate2"></div>';
    add += '<pre>&lt;div /&gt;</pre></div>';
    rightPanel.innerHTML = add;
    add = "<pre>  &lt;bento&gt</pre>";
    add += '<div id="text-orange-small1"><pre>    &lt;orange class="small" /&gt</pre></div>';
    add += "<pre>  &lt;bento /&gt</pre>";
    document.querySelector('#text-bento1').innerHTML = add;
    add = '<pre>  &lt;plate&gt</pre>';
    add += '<div id="text-orange1"><pre>    &lt;orange /&gt</pre></div>';
    add += "<pre>  &lt;plate /&gt</pre>";
    document.querySelector('#text-plate1').innerHTML = add;
    add = '<pre>  &lt;plate&gt</pre>';
    add += '<div id="text-orange-small2"><pre>    &lt;orange class="small" /&gt</pre></div>';
    add += "<pre>  &lt;plate /&gt</pre>";
    document.querySelector('#text-plate2').innerHTML = add;
    document.querySelector('.table-box').innerHTML = '<div class="box-of-img"></div>';
    add = "<div class=\"div1\"><img id=\"apple1\" src=".concat(_assets_appl_png__WEBPACK_IMPORTED_MODULE_3__["default"], "></div>");
    add += "<div class=\"div2\"><img id=\"apple2\" src=".concat(_assets_appl_png__WEBPACK_IMPORTED_MODULE_3__["default"], "></div>");
    add += "<div class=\"div3\"><img id=\"square1\" src=".concat(_assets_square_svg__WEBPACK_IMPORTED_MODULE_1__["default"], "><img class=\"orange\" id=\"orangeSmall1\" src=").concat(_assets_orange_png__WEBPACK_IMPORTED_MODULE_2__["default"], "></div>");
    add += "<div class=\"div4\"><img id=\"plate1\" src=".concat(_assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__["default"], "><img class=\"orange\" id=\"orangeSmall2\" src=").concat(_assets_orange_png__WEBPACK_IMPORTED_MODULE_2__["default"], "></div>");
    add += "<div class=\"div5\"><img id=\"plate2\" src=".concat(_assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__["default"], "><img class=\"orange\" id=\"orangeSmall3\" src=").concat(_assets_orange_png__WEBPACK_IMPORTED_MODULE_2__["default"], "></div>");
    document.querySelector('.box-of-img').innerHTML = add;
    var lvl7 = JSON.parse(localStorage.getItem("myKey"));
    if (lvl7.lvl7 === true) {
        document.querySelector('.checking').style.color = "green";
    }
    else {
        document.querySelector('.checking').style.color = "white";
    }
    function addMainStyle() {
        (0,_smallMoving__WEBPACK_IMPORTED_MODULE_4__["default"])(document.querySelector('#orangeSmall1'));
        (0,_smallMoving__WEBPACK_IMPORTED_MODULE_4__["default"])(document.querySelector('#orangeSmall3'));
        document.querySelector("#apple1").style.height = "60%";
        document.querySelector("#apple2").style.height = "30%";
        document.querySelector("#square1").style.height = "60%";
        document.querySelector("#plate1").style.height = "60%";
        document.querySelector("#plate2").style.height = "60%";
        document.querySelector("#orangeSmall2").style.position = "absolute";
        document.querySelector("#orangeSmall2").style.height = "30%";
    }
    addMainStyle();
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_5__["default"])('#apple1', '#text-apple1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_5__["default"])('#apple2', '#text-apple-small');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_5__["default"])('#square1', '#text-bento1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_5__["default"])('#orangeSmall1', '#text-orange-small1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_5__["default"])('#plate1', '#text-plate1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_5__["default"])('#orangeSmall2', '#text-orange1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_5__["default"])('#plate2', '#text-plate2');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_5__["default"])('#orangeSmall3', '#text-orange-small2');
}
;


/***/ }),

/***/ "./src/js/basejs/task8.ts":
/*!********************************!*\
  !*** ./src/js/basejs/task8.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ task7)
/* harmony export */ });
/* harmony import */ var _assets_square_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/square.svg */ "./src/assets/square.svg");
/* harmony import */ var _assets_orange_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/orange.png */ "./src/assets/orange.png");
/* harmony import */ var _assets_appl_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/appl.png */ "./src/assets/appl.png");
/* harmony import */ var _smallMoving__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smallMoving */ "./src/js/basejs/smallMoving.ts");
/* harmony import */ var _mouscolor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mouscolor */ "./src/js/basejs/mouscolor.ts");





function task7() {
    var taskh1 = document.querySelector('h1');
    var navPan = document.querySelector('.nav-text-block');
    var leftPanel = document.querySelector('.help-textarea');
    var rightPanel = document.querySelector('.help-textarea-right');
    var add = '';
    add += '<h2>You can do it...</h2>';
    add += '<p><span>Put your back into it!</span></p>';
    add += '<hr>';
    add += '<p>Combine what you learned in the last few levels to solve this one!</p>';
    navPan.innerHTML = add;
    add = ' {';
    add += '\n';
    add += ' /* Styles would go here. */';
    add += '\n';
    add += ' }';
    add += '\n';
    add += '\n';
    add += ' /*';
    add += ' Type a number to skip to a';
    add += '\n';
    add += ' level.';
    add += '\n';
    add += ' Ex → "5" for level 5';
    add += '\n';
    add += ' */';
    add += '\n';
    leftPanel.innerHTML = add;
    add = '<div class="table"><pre>&lt;div class="table"&gt;</pre>';
    add += '<div id="text-bento1"></div>';
    add += '<div id="text-orange1"><pre>  &lt;orange class="small" /&gt</pre></div>';
    add += '<div id="text-bento2"></div>';
    add += '<div id="text-bento3"></div>';
    add += '<div id="text-bento4"></div>';
    add += '<pre>&lt;div /&gt;</pre></div>';
    rightPanel.innerHTML = add;
    taskh1.textContent = "Select the small oranges in the bentos";
    add = "<pre>  &lt;bento&gt</pre>";
    add += '<div id="text-orange-big1"><pre>    &lt;orange /&gt</pre></div>';
    add += "<pre>  &lt;bento /&gt</pre>";
    document.querySelector('#text-bento1').innerHTML = add;
    add = '<pre>  &lt;bento&gt</pre>';
    add += '<div id="text-orange2"><pre>    &lt;orange class="small" /&gt</pre></div>';
    add += "<pre>  &lt;bento /&gt</pre>";
    document.querySelector('#text-bento2').innerHTML = add;
    add = '<pre>  &lt;bento&gt</pre>';
    add += '<div id="text-apple1"><pre>    &lt;apple class="small" /&gt</pre></div>';
    add += "<pre>  &lt;bento /&gt</pre>";
    document.querySelector('#text-bento3').innerHTML = add;
    add = "<pre>  &lt;bento&gt</pre>";
    add += '<div id="text-orange3"><pre>    &lt;orange class="small" /&gt</pre></div>';
    add += "<pre>  &lt;bento /&gt</pre>";
    document.querySelector('#text-bento4').innerHTML = add;
    document.querySelector('.table-box').innerHTML = '<div class="box-of-img"></div>';
    add = "<div class=\"div1\"><img id=\"square1\" src=".concat(_assets_square_svg__WEBPACK_IMPORTED_MODULE_0__["default"], "><img id=\"orangeBig\" src=").concat(_assets_orange_png__WEBPACK_IMPORTED_MODULE_1__["default"], "></div>");
    add += "<div class=\"div2\"><img id=\"orange1\" src=".concat(_assets_orange_png__WEBPACK_IMPORTED_MODULE_1__["default"], "></div>");
    add += "<div class=\"div3\"><img id=\"square2\" src=".concat(_assets_square_svg__WEBPACK_IMPORTED_MODULE_0__["default"], "><img id=\"orange2\" src=").concat(_assets_orange_png__WEBPACK_IMPORTED_MODULE_1__["default"], "></div>");
    add += "<div class=\"div4\"><img id=\"square3\" src=".concat(_assets_square_svg__WEBPACK_IMPORTED_MODULE_0__["default"], "><img id=\"apple1\" src=").concat(_assets_appl_png__WEBPACK_IMPORTED_MODULE_2__["default"], "></div>");
    add += "<div class=\"div5\"><img id=\"square4\" src=".concat(_assets_square_svg__WEBPACK_IMPORTED_MODULE_0__["default"], "><img id=\"orange3\" src=").concat(_assets_orange_png__WEBPACK_IMPORTED_MODULE_1__["default"], "></div>");
    document.querySelector('.box-of-img').innerHTML = add;
    var lvl8 = JSON.parse(localStorage.getItem("myKey"));
    if (lvl8.lvl8 === true) {
        document.querySelector('.checking').style.color = "green";
    }
    else {
        document.querySelector('.checking').style.color = "white";
    }
    function addMainStyle() {
        (0,_smallMoving__WEBPACK_IMPORTED_MODULE_3__["default"])(document.querySelector('#orange2'));
        (0,_smallMoving__WEBPACK_IMPORTED_MODULE_3__["default"])(document.querySelector('#orange3'));
        document.querySelector("#square1").style.height = "60%";
        document.querySelector("#orangeBig").style.position = "absolute";
        document.querySelector("#orangeBig").style.height = "45%";
        document.querySelector("#orange1").style.height = "30%";
        document.querySelector("#square2").style.height = "60%";
        document.querySelector("#square3").style.height = "60%";
        document.querySelector("#apple1").style.position = "absolute";
        document.querySelector("#apple1").style.left = "35%";
        document.querySelector("#apple1").style.height = "30%";
        document.querySelector("#square4").style.height = "60%";
    }
    addMainStyle();
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_4__["default"])('#square1', '#text-bento1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_4__["default"])('#orangeBig', '#text-orange-big1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_4__["default"])('#orange1', '#text-orange1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_4__["default"])('#square2', '#text-bento2');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_4__["default"])('#orange2', '#text-orange2');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_4__["default"])('#square3', '#text-bento3');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_4__["default"])('#apple1', '#text-apple1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_4__["default"])('#square4', '#text-bento4');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_4__["default"])('#orange3', '#text-orange3');
}
;


/***/ }),

/***/ "./src/js/basejs/task9.ts":
/*!********************************!*\
  !*** ./src/js/basejs/task9.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ task9)
/* harmony export */ });
/* harmony import */ var _assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/rr.svg */ "./src/assets/rr.svg");
/* harmony import */ var _assets_square_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/square.svg */ "./src/assets/square.svg");
/* harmony import */ var _littleMoving__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./littleMoving */ "./src/js/basejs/littleMoving.ts");
/* harmony import */ var _assets_pickle_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/pickle.png */ "./src/assets/pickle.png");
/* harmony import */ var _smallMoving__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smallMoving */ "./src/js/basejs/smallMoving.ts");
/* harmony import */ var _mouscolor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mouscolor */ "./src/js/basejs/mouscolor.ts");






function task9() {
    var taskh1 = document.querySelector('h1');
    var navPan = document.querySelector('.nav-text-block');
    var leftPanel = document.querySelector('.help-textarea');
    var rightPanel = document.querySelector('.help-textarea-right');
    var add = '';
    add += '<h2>Comma Combinator</h2>';
    add += '<p>Combine, selectors, with... commas!</p>';
    add += '<p><span>A, B</span>';
    add += '<p>Thanks to Shatner technology, this selects all <span>A</span>and<span>B</span>elements. You can combine any selectors this way, and you can specify more than two.</p>';
    add += '<h3>Examples</h3>';
    add += '<p><span>p, .fun</span> selects all <span>&lt;p&gt</span> elements as well as all elements with <span>class="fun"</span></p>';
    add += '<hr>';
    add += '<p><span>a, p, div</span> selects all <span>&lt;a&gt, &lt;p&gt</span> and <span>&lt;div&gt</span>elements</p>';
    navPan.innerHTML = add;
    taskh1.textContent = "Select all the plates and bentos";
    add = ' {';
    add += '\n';
    add += ' /* Styles would go here. */';
    add += '\n';
    add += ' }';
    add += '\n';
    add += '\n';
    add += ' /*';
    add += ' Type a number to skip to a';
    add += '\n';
    add += ' level.';
    add += '\n';
    add += ' Ex → "5" for level 5';
    add += '\n';
    add += ' */';
    add += '\n';
    leftPanel.innerHTML = add;
    add = '<div class="table"><pre>&lt;div class="table"&gt;</pre>';
    add += '<div class="small" id="pick1"><pre>  &lt;pickle class="small" /&gt;</pre></div>';
    add += '<div id="pick2"><pre>  &lt;pickle&gt;</pre></div>';
    add += '<div class="plate" id="plate1"></div>';
    add += '<div class="bento" id="bento1"></div>';
    add += '<div class="plate" id="plate2"></div>';
    add += '<div class="text-pickle" id="pick6"><pre>  &lt;pickle /&gt;</pre></div>';
    add += '<div class="small" id="pick7"><pre>  &lt;pickle class="small" /&gt;</pre></div>';
    add += '<pre>&lt;div /&gt;</pre></div>';
    rightPanel.innerHTML = add;
    add = "<pre>  &lt;plate&gt</pre>";
    add += '<div id="pick3"><pre>    &lt;pickle /&gt</pre></div>';
    add += "<pre>  &lt;plate /&gt</pre>";
    document.querySelector('#plate1').innerHTML = add;
    add = '<pre>  &lt;bento&gt</pre>';
    add += '<div id="pick4"><pre>    &lt;pickle /&gt</pre></div>';
    add += "<pre>  &lt;bento /&gt</pre>";
    document.querySelector('#bento1').innerHTML = add;
    add = '<pre>  &lt;plate&gt</pre>';
    add += '<div id="pick5"><pre>    &lt;pickle /"&gt</pre></div>';
    add += "<pre>  &lt;/plate&gt</pre>";
    document.querySelector('#plate2').innerHTML = add;
    document.querySelector('.table-box').innerHTML = '<div class="box-of-img"></div>';
    add = "<div class=\"div1\"><img id=\"pickSmal1\" src=".concat(_assets_pickle_png__WEBPACK_IMPORTED_MODULE_3__["default"], "></div>");
    add += "<div class=\"div2\"><img id=\"pickBig1\" src=".concat(_assets_pickle_png__WEBPACK_IMPORTED_MODULE_3__["default"], "></div>");
    add += "<div class=\"div3\"><img id=\"round1\" src=".concat(_assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__["default"], "><img id=\"pickBig2\" src=").concat(_assets_pickle_png__WEBPACK_IMPORTED_MODULE_3__["default"], "></div>");
    add += "<div class=\"div4\"><img id=\"square1\" src=".concat(_assets_square_svg__WEBPACK_IMPORTED_MODULE_1__["default"], "><img id=\"pickBig3\" src=").concat(_assets_pickle_png__WEBPACK_IMPORTED_MODULE_3__["default"], "></div>");
    add += "<div class=\"div5\"><img id=\"round2\" src=".concat(_assets_rr_svg__WEBPACK_IMPORTED_MODULE_0__["default"], "><img id=\"pickBig4\" src=").concat(_assets_pickle_png__WEBPACK_IMPORTED_MODULE_3__["default"], "></div>");
    add += "<div class=\"div6\"><img id=\"pickBig5\" src=".concat(_assets_pickle_png__WEBPACK_IMPORTED_MODULE_3__["default"], "></div>");
    add += "<div class=\"div7\"><img id=\"pickSmal2\" src=".concat(_assets_pickle_png__WEBPACK_IMPORTED_MODULE_3__["default"], "></div>");
    document.querySelector('.box-of-img').innerHTML = add;
    var lvl9 = JSON.parse(localStorage.getItem("myKey"));
    if (lvl9.lvl9 === true) {
        document.querySelector('.checking').style.color = "green";
    }
    else {
        document.querySelector('.checking').style.color = "white";
    }
    function addMainStyle() {
        (0,_smallMoving__WEBPACK_IMPORTED_MODULE_4__["default"])(document.querySelector('#pickBig2'));
        (0,_smallMoving__WEBPACK_IMPORTED_MODULE_4__["default"])(document.querySelector('#pickBig3'));
        (0,_smallMoving__WEBPACK_IMPORTED_MODULE_4__["default"])(document.querySelector('#pickBig4'));
        (0,_littleMoving__WEBPACK_IMPORTED_MODULE_2__["default"])(document.querySelector('#round1'));
        (0,_littleMoving__WEBPACK_IMPORTED_MODULE_2__["default"])(document.querySelector('#square1'));
        (0,_littleMoving__WEBPACK_IMPORTED_MODULE_2__["default"])(document.querySelector('#round2'));
        document.querySelector(".div1").style.marginRight = "5px";
        document.querySelector("#pickSmal1").style.height = "15%";
        document.querySelector("#pickBig1").style.height = "25%";
        document.querySelector("#pickBig5").style.height = "25%";
        document.querySelector("#pickSmal2").style.height = "15%";
    }
    addMainStyle();
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_5__["default"])('#pickSmal1', '#pick1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_5__["default"])('#pickBig1', '#pick2');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_5__["default"])('#round1', '#plate1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_5__["default"])('#pickBig2', '#pick3');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_5__["default"])('#square1', '#bento1');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_5__["default"])('#pickBig3', '#pick4');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_5__["default"])('#round2', '#plate2');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_5__["default"])('#pickBig4', '#pick5');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_5__["default"])('#pickBig5', '#pick6');
    (0,_mouscolor__WEBPACK_IMPORTED_MODULE_5__["default"])('#pickSmal2', '#pick7');
}
;


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basejs_line_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basejs/line-number */ "./src/js/basejs/line-number.ts");
/* harmony import */ var _basejs_line_number__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_basejs_line_number__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _basejs_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basejs/select */ "./src/js/basejs/select.ts");
/* harmony import */ var _basejs_buttons_left_right__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basejs/buttons-left-right */ "./src/js/basejs/buttons-left-right.ts");
/* harmony import */ var _basejs_task1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basejs/task1 */ "./src/js/basejs/task1.ts");
/* harmony import */ var _basejs_task2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basejs/task2 */ "./src/js/basejs/task2.ts");
/* harmony import */ var _basejs_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basejs/form */ "./src/js/basejs/form.ts");
/* harmony import */ var _basejs_mouscolor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basejs/mouscolor */ "./src/js/basejs/mouscolor.ts");
/* harmony import */ var _basejs_smallMoving__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basejs/smallMoving */ "./src/js/basejs/smallMoving.ts");
/* harmony import */ var _basejs_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basejs/modal */ "./src/js/basejs/modal.ts");
/* harmony import */ var _basejs_modal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_basejs_modal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _basejs_b_help__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./basejs/b-help */ "./src/js/basejs/b-help.ts");
/* harmony import */ var _basejs_b_help__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_basejs_b_help__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _basejs_reset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./basejs/reset */ "./src/js/basejs/reset.ts");
/* harmony import */ var _basejs_reset2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./basejs/reset2 */ "./src/js/basejs/reset2.ts");













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
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main.js */ "./src/js/main.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGc5QkFBZzlCLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sWUFBWSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksUUFBUSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxRQUFRLEtBQUssTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFP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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXlCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b21heW82NjYtanNmZTIwMjNxMS8uL3NyYy9zYXNzL21haW4uc2NzcyIsIndlYnBhY2s6Ly95b21heW82NjYtanNmZTIwMjNxMS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8veW9tYXlvNjY2LWpzZmUyMDIzcTEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly95b21heW82NjYtanNmZTIwMjNxMS8uL3NyYy9hc3NldHMvYXBwbC5wbmciLCJ3ZWJwYWNrOi8veW9tYXlvNjY2LWpzZmUyMDIzcTEvLi9zcmMvYXNzZXRzL2ltYWdlLnBuZyIsIndlYnBhY2s6Ly95b21heW82NjYtanNmZTIwMjNxMS8uL3NyYy9hc3NldHMvb3JhbmdlLnBuZyIsIndlYnBhY2s6Ly95b21heW82NjYtanNmZTIwMjNxMS8uL3NyYy9hc3NldHMvcGlja2xlLnBuZyIsIndlYnBhY2s6Ly95b21heW82NjYtanNmZTIwMjNxMS8uL3NyYy9hc3NldHMvcnIuc3ZnIiwid2VicGFjazovL3lvbWF5bzY2Ni1qc2ZlMjAyM3ExLy4vc3JjL2Fzc2V0cy9zcXVhcmUuc3ZnIiwid2VicGFjazovL3lvbWF5bzY2Ni1qc2ZlMjAyM3ExLy4vc3JjL3Nhc3MvbWFpbi5zY3NzPzZhMTciLCJ3ZWJwYWNrOi8veW9tYXlvNjY2LWpzZmUyMDIzcTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8veW9tYXlvNjY2LWpzZmUyMDIzcTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3lvbWF5bzY2Ni1qc2ZlMjAyM3ExLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3lvbWF5bzY2Ni1qc2ZlMjAyM3ExLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3lvbWF5bzY2Ni1qc2ZlMjAyM3ExLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8veW9tYXlvNjY2LWpzZmUyMDIzcTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly95b21heW82NjYtanNmZTIwMjNxMS8uL3NyYy9qcy9iYXNlanMvYi1oZWxwLnRzIiwid2VicGFjazovL3lvbWF5bzY2Ni1qc2ZlMjAyM3ExLy4vc3JjL2pzL2Jhc2Vqcy9idXR0b25zLWxlZnQtcmlnaHQudHMiLCJ3ZWJwYWNrOi8veW9tYXlvNjY2LWpzZmUyMDIzcTEvLi9zcmMvanMvYmFzZWpzL2Zvcm0udHMiLCJ3ZWJwYWNrOi8veW9tYXlvNjY2LWpzZmUyMDIzcTEvLi9zcmMvanMvYmFzZWpzL2xpbmUtbnVtYmVyLnRzIiwid2VicGFjazovL3lvbWF5bzY2Ni1qc2ZlMjAyM3ExLy4vc3JjL2pzL2Jhc2Vqcy9saXR0bGVNb3ZpbmcudHMiLCJ3ZWJwYWNrOi8veW9tYXlvNjY2LWpzZmUyMDIzcTEvLi9zcmMvanMvYmFzZWpzL21vZGFsLnRzIiwid2VicGFjazovL3lvbWF5bzY2Ni1qc2ZlMjAyM3ExLy4vc3JjL2pzL2Jhc2Vqcy9tb3VzY29sb3IudHMiLCJ3ZWJwYWNrOi8veW9tYXlvNjY2LWpzZmUyMDIzcTEvLi9zcmMvanMvYmFzZWpzL21vdmluZy50cyIsIndlYnBhY2s6Ly95b21heW82NjYtanNmZTIwMjNxMS8uL3NyYy9qcy9iYXNlanMvcmVzZXQudHMiLCJ3ZWJwYWNrOi8veW9tYXlvNjY2LWpzZmUyMDIzcTEvLi9zcmMvanMvYmFzZWpzL3Jlc2V0Mi50cyIsIndlYnBhY2s6Ly95b21heW82NjYtanNmZTIwMjNxMS8uL3NyYy9qcy9iYXNlanMvc2VsZWN0LnRzIiwid2VicGFjazovL3lvbWF5bzY2Ni1qc2ZlMjAyM3ExLy4vc3JjL2pzL2Jhc2Vqcy9zbWFsbE1vdmluZy50cyIsIndlYnBhY2s6Ly95b21heW82NjYtanNmZTIwMjNxMS8uL3NyYy9qcy9iYXNlanMvdGFzazEudHMiLCJ3ZWJwYWNrOi8veW9tYXlvNjY2LWpzZmUyMDIzcTEvLi9zcmMvanMvYmFzZWpzL3Rhc2sxMC50cyIsIndlYnBhY2s6Ly95b21heW82NjYtanNmZTIwMjNxMS8uL3NyYy9qcy9iYXNlanMvdGFzazIudHMiLCJ3ZWJwYWNrOi8veW9tYXlvNjY2LWpzZmUyMDIzcTEvLi9zcmMvanMvYmFzZWpzL3Rhc2szLnRzIiwid2VicGFjazovL3lvbWF5bzY2Ni1qc2ZlMjAyM3ExLy4vc3JjL2pzL2Jhc2Vqcy90YXNrNC50cyIsIndlYnBhY2s6Ly95b21heW82NjYtanNmZTIwMjNxMS8uL3NyYy9qcy9iYXNlanMvdGFzazUudHMiLCJ3ZWJwYWNrOi8veW9tYXlvNjY2LWpzZmUyMDIzcTEvLi9zcmMvanMvYmFzZWpzL3Rhc2s2LnRzIiwid2VicGFjazovL3lvbWF5bzY2Ni1qc2ZlMjAyM3ExLy4vc3JjL2pzL2Jhc2Vqcy90YXNrNy50cyIsIndlYnBhY2s6Ly95b21heW82NjYtanNmZTIwMjNxMS8uL3NyYy9qcy9iYXNlanMvdGFzazgudHMiLCJ3ZWJwYWNrOi8veW9tYXlvNjY2LWpzZmUyMDIzcTEvLi9zcmMvanMvYmFzZWpzL3Rhc2s5LnRzIiwid2VicGFjazovL3lvbWF5bzY2Ni1qc2ZlMjAyM3ExLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8veW9tYXlvNjY2LWpzZmUyMDIzcTEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veW9tYXlvNjY2LWpzZmUyMDIzcTEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8veW9tYXlvNjY2LWpzZmUyMDIzcTEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3lvbWF5bzY2Ni1qc2ZlMjAyM3ExL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8veW9tYXlvNjY2LWpzZmUyMDIzcTEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly95b21heW82NjYtanNmZTIwMjNxMS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3lvbWF5bzY2Ni1qc2ZlMjAyM3ExL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3lvbWF5bzY2Ni1qc2ZlMjAyM3ExL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly95b21heW82NjYtanNmZTIwMjNxMS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxucCB7XG4gIG1hcmdpbjogNXB4IDAgMTBweCAwO1xufVxuXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBjb2xvcjogd2hpdGU7XG4gIGdyaWQtYXJlYTogaGVhZDtcbn1cblxuLmhlZCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogMXZoO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgZ3JpZC1hcmVhOiBtYWluO1xufVxuXG4ucmlnaHQtbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc0Nyk7XG59XG5cbi8qIDxtYWluPlxuPGRpdiBjbGFzcz1cImxlZnQtbWFpblwiPlxuICAgIDxwPnNhZGEgc2FkIGFzZCBhc2QgYXNkIGFzIHNzc3NzcyA8L3A+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJyaWdodC1tYWluXCI+XG4gICAgPHA+c2FkYSBzYWQgYXNkIGFzZCBhc2QgYXMgc3Nzc3NzIDwvcD5cbjwvZGl2PlxuPC9tYWluPiAqL1xuYm9keSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZ2FwOiAxdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQ5KTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkICAgICBoZWFkICAgIHJpZ2hcIiBcIm1haW4gICAgIG1haW4gICAgcmlnaFwiIFwiZm9vdCAgICAgZm9vdCAgICByaWdoXCI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzV2aCA1NXZoIDV2aDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDIwJTtcbn1cblxuLm5hdi1wYW5lbCB7XG4gIGNvbG9yOiBncmVlbjtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGZvbnQtc2l6ZTogMnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzQ3KTtcbiAgY29sb3I6IHdoaXRlO1xuICBncmlkLWFyZWE6IHJpZ2g7XG59XG5cbi5uYXYtcGFuZWwgcCBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ubmF2LXRleHQtYmxvY2sge1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbi5uYXYtcGFuZWwge1xuICBjb2xvcjogZ3JlZW47XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBmb250LXNpemU6IDJ2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc0Nyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZ3JpZC1hcmVhOiByaWdoO1xufVxuXG4ubmF2LXBhbmVsIHAgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLm5hdi10ZXh0LWJsb2NrIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG4ubGluZS1udW1iZXIge1xuICBwYWRkaW5nLXRvcDogMC4ydmg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0OSk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDN2aDtcbiAgcGFkZGluZy1yaWdodDogMXZoO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAyLjI2dmg7XG59XG5cbi5saW5lLW51bWJlcnMge1xuICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMC4ydmg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDN2aDtcbiAgcGFkZGluZy1yaWdodDogMXZoO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAyLjI2dmg7XG59XG5cbi5jaGVja2luZyB7XG4gIGZvbnQtc2l6ZTogNXZoO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW5wdXQgaW5wdXQ6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuXG4jYXBwbGUxIHtcbiAgbGVmdDogMTJweDtcbiAgcmlnaHQ6IDFweDtcbn1cblxuLmJ1dHRvbi1sZWZ0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXgtd2lkdGg6IDFyZW07XG4gIG1pbi13aWR0aDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnV0dG9uLWxlZnQ6aG92ZXIge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmJ1dHRvbi1sZWZ0OmFjdGl2ZSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5idXR0b24tcmlnaHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1heC13aWR0aDogMXJlbTtcbiAgbWluLXdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24tcmlnaHQ6aG92ZXIge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmJ1dHRvbi1yaWdodDphY3RpdmUge1xuICBjb2xvcjogcmVkO1xufVxuXG4uYnV0LXNlbGVjdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dC1zZWxlY3Q6aG92ZXIge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmJ1dC1zZWxlY3Q6YWN0aXZlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGVmdC1tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cblxuLmxlZnQtc2Vjb25kIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbnAtYW5jdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0OSk7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogNjAlO1xufVxuXG4uZW50ZXIge1xuICBmbGV4OiAxO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgd2lkdGg6IDMwJTtcbiAgY29sb3I6IHJlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5oZWxwLXRleHRhcmVhIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDkpO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIHJlc2l6ZTogbm9uZTtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbi8qICAgIDxpbnB1dCBjbGFzcz1cImlucC1hbmNcIiB0eXBlPVwidGV4dFwiPlxuICAgPGJ1dHRvbiBjbGFzcz1cImxlZnQtYnV0XCI+XG4gICAgICAgRW50ZXIgICBcbiAgIDwvYnV0dG9uPiAqL1xuLnJpZ2h0LXNlY29uZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWxwLXRleHRhcmVhLXJpZ2h0IHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMiwgOTIsIDkyLCAwLjc5NSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMnMsIHZpc2liaWxpdHkgMC40cztcbn1cblxuLm1vZGFsLWJveCB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRvcDogNDAlO1xuICBoZWlnaHQ6IDIwJTtcbiAgd2lkdGg6IDgwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggMnB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcbn1cblxuLm1vZGFsLm9wZW4ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY2xvc2UtbW9kYWwge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTBweDtcbiAgdHJhbnNpdGlvbjogZmlsbCAxcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2xvc2UtbW9kYWw6aG92ZXIge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmNsb3NlLW1vZGFsOmFjdGl2ZSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi50ZXh0LW1vZGFsIHtcbiAgZm9udC1zaXplOiAydmg7XG59XG5cbi50ZXh0LW1vZGFsIHAge1xuICBtYXJnaW4tbGVmdDogNHZoO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiA0dmg7XG59XG5cbi50ZXh0LW1vZGFsIHByZSB7XG4gIG1hcmdpbi1sZWZ0OiA0dmg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDR2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xufVxuXG4uYi1yZXN0YXJ0MiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmItcmVzdGFydDI6aG92ZXIge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmItcmVzdGFydDI6YWN0aXZlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmgyIHtcbiAgZm9udC1zaXplOiA1dmg7XG59XG5cbi5iLXJlc3RhcnQyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzB2aDtcbiAgaGVpZ2h0OiAyMCU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiAzMCU7XG59XG5cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAydmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IGJsYWNrO1xuICBncmlkLWFyZWE6IGZvb3Q7XG59XG5cbmZvb3RlciBhIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5mb290ZXIgYTpob3ZlciB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG5mb290ZXIgYTphY3RpdmUge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5ib3gtb2YtaW1nIHtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA4MCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDIwdmg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogOHB4IDhweCA4cHggMHB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcbiAgLW1vei1ib3gtc2hhZG93OiA4cHggOHB4IDhweCAwcHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xuICBib3gtc2hhZG93OiA4cHggOHB4IDhweCAwcHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xufVxuXG4uYm94LW9mLWltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5ib3gtb2YtaW1nID4gKiB7XG4gIG1hcmdpbjogMSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA1dmg7XG59XG5cbi5idXR0b25zID4gKiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbnMgPiAqOmhvdmVyIHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5idXR0b25zID4gKjphY3RpdmUge1xuICBjb2xvcjogcmVkO1xufVxuXG4ubW9kYWwyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycywgdmlzaWJpbGl0eSAwLjRzO1xufVxuXG4ubW9kYWwtYm94MiB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRvcDogNDAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgd2lkdGg6IDgwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggMnB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcbn1cblxuLm1vZGFsLm9wZW4yIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNsb3NlLW1vZGFsMiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBmaWxsIDFzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbG9zZS1tb2RhbDI6aG92ZXIge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmNsb3NlLW1vZGFsMjphY3RpdmUge1xuICBjb2xvcjogcmVkO1xufVxuXG4udGV4dC1tb2RhbDIge1xuICBmb250LXNpemU6IDN2aDtcbn1cblxuLnRleHQtbW9kYWwyIHAge1xuICBtYXJnaW4tbGVmdDogNHZoO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiA0dmg7XG59XG5cbi50ZXh0LW1vZGFsMiBwcmUge1xuICBtYXJnaW4tbGVmdDogNHZoO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiA0dmg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1cblxuLm9wZW5fbW9kYWwyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ub3Blbl9tb2RhbDI6aG92ZXIge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLm9wZW5fbW9kYWwyOmFjdGl2ZSB7XG4gIGNvbG9yOiByZWQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9iYXNlL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2Jsb2Nrcy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2Jsb2Nrcy9fbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9iYXNlL19jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvYmxvY2tzL19ib2R5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2Jsb2Nrcy9fbmF2LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2RldGFsZXMvbGluZS1udW0uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvZGV0YWxlcy9zeW1ib2wuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvZGV0YWxlcy9idXR0b25zLWxlZnQtcmlnaHQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvZGV0YWxlcy9zZWxlY3Quc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvYmxvY2tzL19sZWZ0LWNvbnRlbnQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvYmxvY2tzL190ZXh0YXJlYS1sZWZ0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2Jsb2Nrcy9fdGV4dGFyZWEtcmlnaHQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvZGV0YWxlcy9fbW9kYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvYmxvY2tzL19mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvZGV0YWxlcy9fdGFibGUtYm94LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2RldGFsZXMvYm94LW9mLWltZy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9kZXRhbGVzL19oMS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9kZXRhbGVzL19idXR0b25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2RldGFsZXMvX21vZGFsMi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQUksU0FBQTtFQUFXLFVBQUE7QUNHZjs7QURGQTtFQUFJLG9CQUFBO0FDTUo7O0FDUEE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FEVUo7O0FDUkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QURXSjs7QUVsQkE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FGcUJKOztBRWpCQTtFQUNJLGFBQUE7RUFDQSxPQUFBO0VBQ0EsWUNWUztFRFdULHNDQ2JTO0FIaUNiOztBRWxCQTs7Ozs7OztTQUFBO0FFZkE7RUFDRSxlQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0RkFDRTtFQUdGLGlDQUFBO0VBQ0Esa0NBQUE7QUp5Q0o7O0FLdERBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHNDRkpTO0VFS1QsWUZIUztFRUlULGVBQUE7QUx5REo7O0FLdERFO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7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QUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QW5CNllKOztBbUIzWUE7RUFDSSxXQUFBO0FuQjhZSjs7QW1CNVlBO0VBQ0ksVUFBQTtBbkIrWUo7O0FtQjdZQTtFQUNJLGNBQUE7QW5CZ1pKOztBbUI5WUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBbkJpWko7O0FtQi9ZQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QW5Ca1pKOztBbUJoWkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FuQm1aSjs7QW1CalpBO0VBQ0ksV0FBQTtBbkJvWko7O0FtQmxaQTtFQUNJLFVBQUE7QW5CcVpKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiogeyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7IH1cXHJcXG5wIHsgbWFyZ2luOiA1cHggMCAxMHB4IDA7IH1cIixcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDVweCAwIDEwcHggMDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBncmlkLWFyZWE6IGhlYWQ7XFxufVxcblxcbi5oZWQge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiAxdmg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWFyZWE6IG1haW47XFxufVxcblxcbi5yaWdodC1tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc0Nyk7XFxufVxcblxcbi8qIDxtYWluPlxcbjxkaXYgY2xhc3M9XFxcImxlZnQtbWFpblxcXCI+XFxuICAgIDxwPnNhZGEgc2FkIGFzZCBhc2QgYXNkIGFzIHNzc3NzcyA8L3A+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwicmlnaHQtbWFpblxcXCI+XFxuICAgIDxwPnNhZGEgc2FkIGFzZCBhc2QgYXNkIGFzIHNzc3NzcyA8L3A+XFxuPC9kaXY+XFxuPC9tYWluPiAqL1xcbmJvZHkge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ2FwOiAxdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDkpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWQgICAgIGhlYWQgICAgcmlnaFxcXCIgXFxcIm1haW4gICAgIG1haW4gICAgcmlnaFxcXCIgXFxcImZvb3QgICAgIGZvb3QgICAgcmlnaFxcXCI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1dmggNTV2aCA1dmg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMjAlO1xcbn1cXG5cXG4ubmF2LXBhbmVsIHtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAydmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzQ3KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGdyaWQtYXJlYTogcmlnaDtcXG59XFxuXFxuLm5hdi1wYW5lbCBwIHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5uYXYtdGV4dC1ibG9jayB7XFxuICBtYXJnaW4tbGVmdDogMiU7XFxufVxcblxcbi5uYXYtcGFuZWwge1xcbiAgY29sb3I6IGdyZWVuO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDJ2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NDcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZ3JpZC1hcmVhOiByaWdoO1xcbn1cXG5cXG4ubmF2LXBhbmVsIHAgc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm5hdi10ZXh0LWJsb2NrIHtcXG4gIG1hcmdpbi1sZWZ0OiAyJTtcXG59XFxuXFxuLmxpbmUtbnVtYmVyIHtcXG4gIHBhZGRpbmctdG9wOiAwLjJ2aDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDkpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDN2aDtcXG4gIHBhZGRpbmctcmlnaHQ6IDF2aDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyLjI2dmg7XFxufVxcblxcbi5saW5lLW51bWJlcnMge1xcbiAgYm9yZGVyLXJpZ2h0OiAwLjVweCBzb2xpZCB3aGl0ZTtcXG4gIHBhZGRpbmctdG9wOiAwLjJ2aDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDN2aDtcXG4gIHBhZGRpbmctcmlnaHQ6IDF2aDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAyLjI2dmg7XFxufVxcblxcbi5jaGVja2luZyB7XFxuICBmb250LXNpemU6IDV2aDtcXG59XFxuXFxuaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbmlucHV0IGlucHV0OmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxufVxcblxcbiNhcHBsZTEge1xcbiAgbGVmdDogMTJweDtcXG4gIHJpZ2h0OiAxcHg7XFxufVxcblxcbi5idXR0b24tbGVmdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXgtd2lkdGg6IDFyZW07XFxuICBtaW4td2lkdGg6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYnV0dG9uLWxlZnQ6aG92ZXIge1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbi5idXR0b24tbGVmdDphY3RpdmUge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmJ1dHRvbi1yaWdodCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXgtd2lkdGg6IDFyZW07XFxuICBtaW4td2lkdGg6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYnV0dG9uLXJpZ2h0OmhvdmVyIHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4uYnV0dG9uLXJpZ2h0OmFjdGl2ZSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uYnV0LXNlbGVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJ1dC1zZWxlY3Q6aG92ZXIge1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbi5idXQtc2VsZWN0OmFjdGl2ZSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubGVmdC1tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ubGVmdC1zZWNvbmQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbnAtYW5jdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDkpO1xcbiAgZmxleDogMTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLmVudGVyIHtcXG4gIGZsZXg6IDE7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIHdpZHRoOiAzMCU7XFxuICBjb2xvcjogcmVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5oZWxwLXRleHRhcmVhIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQ5KTtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgcmVzaXplOiBub25lO1xcbiAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi8qICAgIDxpbnB1dCBjbGFzcz1cXFwiaW5wLWFuY1xcXCIgdHlwZT1cXFwidGV4dFxcXCI+XFxuICAgPGJ1dHRvbiBjbGFzcz1cXFwibGVmdC1idXRcXFwiPlxcbiAgICAgICBFbnRlciAgIFxcbiAgIDwvYnV0dG9uPiAqL1xcbi5yaWdodC1zZWNvbmQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5oZWxwLXRleHRhcmVhLXJpZ2h0IHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAyLCA5MiwgOTIsIDAuNzk1KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAyO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycywgdmlzaWJpbGl0eSAwLjRzO1xcbn1cXG5cXG4ubW9kYWwtYm94IHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdG9wOiA0MCU7XFxuICBoZWlnaHQ6IDIwJTtcXG4gIHdpZHRoOiA4MCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAycHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xcbn1cXG5cXG4ubW9kYWwub3BlbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNsb3NlLW1vZGFsIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogZmlsbCAxcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsb3NlLW1vZGFsOmhvdmVyIHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4uY2xvc2UtbW9kYWw6YWN0aXZlIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi50ZXh0LW1vZGFsIHtcXG4gIGZvbnQtc2l6ZTogMnZoO1xcbn1cXG5cXG4udGV4dC1tb2RhbCBwIHtcXG4gIG1hcmdpbi1sZWZ0OiA0dmg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLXRvcDogNHZoO1xcbn1cXG5cXG4udGV4dC1tb2RhbCBwcmUge1xcbiAgbWFyZ2luLWxlZnQ6IDR2aDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW4tdG9wOiA0dmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxufVxcblxcbi5iLXJlc3RhcnQyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYi1yZXN0YXJ0Mjpob3ZlciB7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuLmItcmVzdGFydDI6YWN0aXZlIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5oMiB7XFxuICBmb250LXNpemU6IDV2aDtcXG59XFxuXFxuLmItcmVzdGFydDIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDMwdmg7XFxuICBoZWlnaHQ6IDIwJTtcXG4gIHRvcDogNDAlO1xcbiAgbGVmdDogMzAlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IDJ2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGdyaWQtYXJlYTogZm9vdDtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciB7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuZm9vdGVyIGE6YWN0aXZlIHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmJveC1vZi1pbWcge1xcbiAgbWFyZ2luLXRvcDogMSU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogODAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAyMHZoO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA4cHggOHB4IDhweCAwcHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xcbiAgLW1vei1ib3gtc2hhZG93OiA4cHggOHB4IDhweCAwcHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xcbiAgYm94LXNoYWRvdzogOHB4IDhweCA4cHggMHB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcXG59XFxuXFxuLmJveC1vZi1pbWcge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJveC1vZi1pbWcgPiAqIHtcXG4gIG1hcmdpbjogMSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogNXZoO1xcbn1cXG5cXG4uYnV0dG9ucyA+ICoge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5idXR0b25zID4gKjpob3ZlciB7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuLmJ1dHRvbnMgPiAqOmFjdGl2ZSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ubW9kYWwyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDI7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzLCB2aXNpYmlsaXR5IDAuNHM7XFxufVxcblxcbi5tb2RhbC1ib3gyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdG9wOiA0MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiA4MCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAycHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xcbn1cXG5cXG4ubW9kYWwub3BlbjIge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jbG9zZS1tb2RhbDIge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBmaWxsIDFzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xvc2UtbW9kYWwyOmhvdmVyIHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4uY2xvc2UtbW9kYWwyOmFjdGl2ZSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4udGV4dC1tb2RhbDIge1xcbiAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbi50ZXh0LW1vZGFsMiBwIHtcXG4gIG1hcmdpbi1sZWZ0OiA0dmg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLXRvcDogNHZoO1xcbn1cXG5cXG4udGV4dC1tb2RhbDIgcHJlIHtcXG4gIG1hcmdpbi1sZWZ0OiA0dmg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLXRvcDogNHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG4ub3Blbl9tb2RhbDIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5vcGVuX21vZGFsMjpob3ZlciB7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuLm9wZW5fbW9kYWwyOmFjdGl2ZSB7XFxuICBjb2xvcjogcmVkO1xcbn1cIixcImhlYWRlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZC1jb2xvcjtcXHJcXG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xcclxcbiAgICBncmlkLWFyZWE6IGhlYWQ7XFxyXFxufVxcclxcbi5oZWR7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVwiLFwibWFpbntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDF2aDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcblxcclxcbi5yaWdodC1tYWlue1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBjb2xvcjogJHRleHQtY29sb3I7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xcclxcbn1cXHJcXG4vKiA8bWFpbj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJsZWZ0LW1haW5cXFwiPlxcclxcbiAgICA8cD5zYWRhIHNhZCBhc2QgYXNkIGFzZCBhcyBzc3Nzc3MgPC9wPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcInJpZ2h0LW1haW5cXFwiPlxcclxcbiAgICA8cD5zYWRhIHNhZCBhc2QgYXNkIGFzZCBhcyBzc3Nzc3MgPC9wPlxcclxcbjwvZGl2PlxcclxcbjwvbWFpbj4gKi9cIixcIiRiYXNlLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzQ3KTtcXHJcXG4kc2Vjb25kLWNvbG9yOiBncmF5O1xcclxcbiR0ZXh0LWNvbG9yOiB3aGl0ZTtcIixcImJvZHl7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGdhcDogMXZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0OSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgXFxcImhlYWQgICAgIGhlYWQgICAgcmlnaFxcXCJcXHJcXG4gICAgICBcXFwibWFpbiAgICAgbWFpbiAgICByaWdoXFxcIlxcclxcbiAgICAgIFxcXCJmb290ICAgICBmb290ICAgIHJpZ2hcXFwiO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1dmggNTV2aCA1dmg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAyMCU7XFxyXFxuICB9XFxyXFxuICBcIixcIi5uYXYtcGFuZWx7XFxyXFxuICAgIGNvbG9yOiBncmVlbjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcXHJcXG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xcclxcbiAgICBncmlkLWFyZWE6IHJpZ2g7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LXBhbmVsIHAgc3BhbntcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgfVxcclxcbiAgLm5hdi10ZXh0LWJsb2Nre1xcclxcbiAgICBtYXJnaW4tbGVmdDogMiU7XFxyXFxuICB9XCIsXCIubGluZS1udW1iZXJ7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwLjJ2aDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQ5KTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogM3ZoO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdmg7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDIuMjZ2aFxcclxcbn1cXHJcXG4ubGluZS1udW1iZXJze1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDAuNXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMC4ydmg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDN2aDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMXZoO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgZm9udC1zaXplOiAyLjI2dmhcXHJcXG59XFxyXFxuXCIsXCIuY2hlY2tpbmd7XFxyXFxuICAgIGZvbnQtc2l6ZTogNXZoO1xcclxcbn1cXHJcXG5pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBpbnB1dDpkaXNhYmxlZCB7IGJhY2tncm91bmQ6ICNjY2M7IH1cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbiNhcHBsZTF7XFxyXFxuICAgIGxlZnQ6IDEycHg7XFxyXFxuICAgIHJpZ2h0OiAxcHg7XFxyXFxufVwiLFwiLmJ1dHRvbi1sZWZ0e1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1heC13aWR0aDogMXJlbTtcXHJcXG4gICAgbWluLXdpZHRoOiAxcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5idXR0b24tbGVmdDpob3ZlcntcXHJcXG4gICAgY29sb3I6IGJsdWU7XFxyXFxufVxcclxcbi5idXR0b24tbGVmdDphY3RpdmV7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcbi5idXR0b24tcmlnaHR7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOiAxcmVtO1xcclxcbiAgICBtaW4td2lkdGg6IDFweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmJ1dHRvbi1yaWdodDpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG4uYnV0dG9uLXJpZ2h0OmFjdGl2ZXtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuLmJ1dC1zZWxlY3R7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmJ1dC1zZWxlY3Q6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG4uYnV0LXNlbGVjdDphY3RpdmV7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVwiLFwiLnNlbGVjdHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVwiLFwiLmxlZnQtbWFpbntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtc2Vjb25ke1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XCIsXCJcXHJcXG4uaW5wLWFuY3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0OSk7O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG59XFxyXFxuLmVudGVye1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuXFxyXFxufVxcclxcbi5oZWxwLXRleHRhcmVhe1xcclxcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0OSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZC1jb2xvcjtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLyogICAgPGlucHV0IGNsYXNzPVxcXCJpbnAtYW5jXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIj5cXHJcXG4gICA8YnV0dG9uIGNsYXNzPVxcXCJsZWZ0LWJ1dFxcXCI+XFxyXFxuICAgICAgIEVudGVyICAgXFxyXFxuICAgPC9idXR0b24+ICovXCIsXCIucmlnaHQtc2Vjb25ke1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uaGVscC10ZXh0YXJlYS1yaWdodHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMiwgOTIsIDkyLCAwLjc5NSk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGU7ICAgXFxyXFxufVwiLFwiLm1vZGFse1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzLCB2aXNpYmlsaXR5IC40cztcXHJcXG59XFxyXFxuLm1vZGFsLWJveHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdG9wOiA0MCU7XFxyXFxuICAgIGhlaWdodDogMjAlO1xcclxcbiAgICB3aWR0aDogODAlOyBcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAycHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xcclxcbn1cXHJcXG4ubW9kYWwub3BlbntcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgICAgXFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcbi5jbG9zZS1tb2RhbHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTBweDtcXHJcXG4gICAgcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGZpbGwgMXM7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmNsb3NlLW1vZGFsOmhvdmVye1xcclxcbiAgICBjb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuLmNsb3NlLW1vZGFsOmFjdGl2ZXtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuLnRleHQtbW9kYWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcclxcbn1cXHJcXG4udGV4dC1tb2RhbCBwe1xcclxcbiAgICBtYXJnaW4tbGVmdDogNHZoO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBtYXJnaW4tdG9wOiA0dmg7XFxyXFxufVxcclxcbi50ZXh0LW1vZGFsIHByZXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDR2aDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxyXFxufVxcclxcbi5iLXJlc3RhcnQye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi5iLXJlc3RhcnQyOmhvdmVye1xcclxcbiAgICBjb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuLmItcmVzdGFydDI6YWN0aXZle1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG4uaDJ7XFxyXFxuICAgIGZvbnQtc2l6ZTogNXZoO1xcclxcbn1cXHJcXG4uYi1yZXN0YXJ0MntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMzB2aDtcXHJcXG4gICAgaGVpZ2h0OiAyMCU7XFxyXFxuICAgIHRvcDogNDAlO1xcclxcbiAgICBsZWZ0OiAzMCU7XFxyXFxuXFxyXFxufVxcclxcblwiLFwiZm9vdGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGZvbnQtc2l6ZTogMnZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZ3JpZC1hcmVhOiBmb290O1xcclxcbn0gICBcXHJcXG5mb290ZXIgYXtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5mb290ZXIgYTpob3ZlcntcXHJcXG4gICAgY29sb3I6IGJsdWU7XFxyXFxufVxcclxcbmZvb3RlciBhOmFjdGl2ZXtcXHJcXG4gICAgY29sb3I6IGdyZWVuO1xcclxcbn1cIixcIi5ib3gtb2YtaW1ne1xcclxcbiAgICBtYXJnaW4tdG9wOiAxJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMjB2aDsgICBcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA4cHggOHB4IDhweCAwcHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xcclxcbi1tb3otYm94LXNoYWRvdzogOHB4IDhweCA4cHggMHB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcXHJcXG5ib3gtc2hhZG93OiA4cHggOHB4IDhweCAwcHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xcclxcbn1cIixcIi5ib3gtb2YtaW1ne1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4uYm94LW9mLWltZyA+ICp7XFxyXFxuICAgIG1hcmdpbjogMSU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblwiLFwiaDF7XFxyXFxuICAgIGZvbnQtc2l6ZTogNXZoO1xcclxcbn1cIixcIlxcclxcbi5idXR0b25zID4gKntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uYnV0dG9ucyA+ICo6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG4uYnV0dG9ucyA+ICo6YWN0aXZle1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cIixcIi5tb2RhbDJ7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMnMsIHZpc2liaWxpdHkgLjRzO1xcclxcbn1cXHJcXG4ubW9kYWwtYm94MntcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdG9wOiA0MCU7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICB3aWR0aDogODAlOyBcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAycHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xcclxcbn1cXHJcXG4ubW9kYWwub3BlbjJ7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7ICAgIFxcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG4uY2xvc2UtbW9kYWwye1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxMHB4O1xcclxcbiAgICByaWdodDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogZmlsbCAxcztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uY2xvc2UtbW9kYWwyOmhvdmVye1xcclxcbiAgICBjb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuLmNsb3NlLW1vZGFsMjphY3RpdmV7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcbi50ZXh0LW1vZGFsMntcXHJcXG4gICAgZm9udC1zaXplOiAzdmg7XFxyXFxufVxcclxcbi50ZXh0LW1vZGFsMiBwe1xcclxcbiAgICBtYXJnaW4tbGVmdDogNHZoO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBtYXJnaW4tdG9wOiA0dmg7XFxyXFxufVxcclxcbi50ZXh0LW1vZGFsMiBwcmV7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA0dmg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDR2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcclxcbn1cXHJcXG4ub3Blbl9tb2RhbDJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuLm9wZW5fbW9kYWwyOmhvdmVye1xcclxcbiAgICBjb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuLm9wZW5fbW9kYWwyOmFjdGl2ZXtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzU0MzA1YzEyOTVkMWQ0YTZjYTNmMmQ5ZGZlNmRhOTAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZiYTJlMzE3OTVlYjMwMjIxYWY5MjY3ZDY5N2FjYjNjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwZDQ3MGExM2FkZDRmYTc2YjAwM2YwMDczYWQ4MmI0ZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMGMyYmYzOTc3ZTQ5NzUyOTQ3ZWNlZjA5ZGFiMWQ3ODQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImMzNjQ0YWI0OWFjY2E5OGU5MjYxYzViZDgzOWI4ZDc3LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzZjBiOWY4NzA2NGVjZTE4YzEzNzdlZDFlZjdjYWQzYS5zdmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmItaGVscCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGxldCBsdmwgPSBOdW1iZXIoKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0XCIpKS52YWx1ZSlcclxuICAgIGlmKGx2bCA9PSAxKXtcclxuICAgICAgICByZXR1cm4gaGVscGlnKFwicGxhdGVcIilcclxuICAgIH1cclxuICAgIGlmKGx2bCA9PSAyICl7XHJcbiAgICAgICAgcmV0dXJuIGhlbHBpZyhcImJlbnRvXCIpXHJcbiAgICB9XHJcbiAgICBpZihsdmwgPT0gMyl7XHJcbiAgICAgICAgcmV0dXJuIGhlbHBpZyhcIiNmYW5jeVwiKVxyXG4gICAgfWlmKGx2bCA9PSA0KXtcclxuICAgICAgICByZXR1cm4gaGVscGlnKFwicGxhdGUgYXBwbGVcIilcclxuICAgIH1pZihsdmwgPT0gNSApe1xyXG4gICAgICAgIHJldHVybiBoZWxwaWcoXCIjZmFuY3kgcGlja2xlXCIpXHJcbiAgICB9aWYobHZsID09IDYgKXtcclxuICAgICAgICByZXR1cm4gaGVscGlnKFwiLnNtYWxsXCIpXHJcbiAgICB9aWYobHZsID09IDcgKXtcclxuICAgICAgICByZXR1cm4gaGVscGlnKFwib3JhbmdlLnNtYWxsXCIpXHJcbiAgICB9aWYobHZsID09IDggKXtcclxuICAgICAgICByZXR1cm4gaGVscGlnKFwiYmVudG8gb3JhbmdlLnNtYWxsXCIpXHJcbiAgICB9aWYobHZsID09IDkgKXtcclxuICAgICAgICByZXR1cm4gaGVscGlnKFwicGxhdGUsIGJlbnRvXCIpXHJcbiAgICB9aWYobHZsID09IDEwICl7XHJcbiAgICAgICAgcmV0dXJuIGhlbHBpZyhcIipcIilcclxuICAgIH1cclxufSkgIFxyXG5cclxuZnVuY3Rpb24gaGVscGlnKHRleHQ6IHN0cmluZyl7XHJcbiAgICBsZXQgZiA9IE51bWJlcigwKTtcclxuICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wLWFuY3ZlcicpKS52YWx1ZSA9IFwiXCJcclxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGV4dC5sZW5ndGggPiBmKXtcclxuICAgICAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnAtYW5jdmVyJykpLnZhbHVlICs9IHRleHRbZl07XHJcbiAgICAgICAgICAgIGYgPSBmICsgMVxyXG4gICAgICAgIH1cclxuICAgIH0sIDEwMCAgIClcclxufVxyXG4iLCJpbXBvcnQgdGFzazEgZnJvbSAnLi90YXNrMSc7XHJcbmltcG9ydCB0YXNrMiBmcm9tICcuL3Rhc2syJztcclxuaW1wb3J0IHRhc2szIGZyb20gJy4vdGFzazMnO1xyXG5pbXBvcnQgdGFzazQgZnJvbSAnLi90YXNrNCc7XHJcbmltcG9ydCB0YXNrNSBmcm9tICcuL3Rhc2s1JztcclxuaW1wb3J0IHRhc2s2IGZyb20gJy4vdGFzazYnO1xyXG5pbXBvcnQgdGFzazcgZnJvbSAnLi90YXNrNyc7XHJcbmltcG9ydCB0YXNrOCBmcm9tICcuL3Rhc2s4JztcclxuaW1wb3J0IHRhc2s5IGZyb20gJy4vdGFzazknO1xyXG5pbXBvcnQgdGFzazEwIGZyb20gJy4vdGFzazEwJztcclxuaW1wb3J0IHsgbHZscyB9IGZyb20gJy4vZm9ybSc7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tbGVmdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICBsZXQgc2VsZWN0ID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0XCIpKS52YWx1ZVxyXG4gICAgaWYoTnVtYmVyKHNlbGVjdCkgPiAxKXtcclxuICAgICAgbGV0IGEgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2YWx1ZVwiKS50ZXh0Q29udGVudCkgLSAxXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmFsdWVcIikudGV4dENvbnRlbnQgPSBTdHJpbmcoYSk7XHJcbiAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BpX2lucHV0XCIpKS52YWx1ZSA9IFN0cmluZyhhKTtcclxuICAgICAgbGV0IHRoaXNWYWwgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RcIikpLnZhbHVlID0gU3RyaW5nKGEpXHJcbiAgICAgIGNoZWNraW5nTHZsKE51bWJlcih0aGlzVmFsKSlcclxuICAgIH1lbHNle1xyXG4gICAgICBsZXQgdGhpc1ZhbCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdFwiKSkudmFsdWUgPSBTdHJpbmcoMTApO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZhbHVlXCIpLnRleHRDb250ZW50ID0gU3RyaW5nKDEwKTtcclxuICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGlfaW5wdXRcIikpLnZhbHVlID0gU3RyaW5nKDEwKTtcclxuICAgICAgY2hlY2tpbmdMdmwoTnVtYmVyKHRoaXNWYWwpKVxyXG4gICAgfVxyXG59KVxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXJpZ2h0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICBzZXRUaW1lb3V0KG5leHRMZXZlbFVzZSwgNTAwKVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAgbmV4dExldmVsVXNlKCl7XHJcbiAgICBsZXQgc2VsZWN0ID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0XCIpKS52YWx1ZVxyXG4gICAgaWYoTnVtYmVyKHNlbGVjdCkgPCAxMCl7XHJcbiAgICAgICAgbGV0IGEgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2YWx1ZVwiKS50ZXh0Q29udGVudCkgKyAxXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2YWx1ZVwiKS50ZXh0Q29udGVudCA9IFN0cmluZyhhKTtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaV9pbnB1dFwiKSkudmFsdWUgPSBTdHJpbmcoYSk7XHJcbiAgICAgICAgbGV0IHRoaXNWYWwgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RcIikpLnZhbHVlID0gU3RyaW5nKGEpXHJcbiAgICAgIGNoZWNraW5nTHZsKE51bWJlcih0aGlzVmFsKSlcclxuICAgIH1lbHNle1xyXG4gICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2YWx1ZVwiKSkudGV4dENvbnRlbnQgPSBTdHJpbmcoMSk7XHJcbiAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BpX2lucHV0XCIpKS52YWx1ZSA9IFN0cmluZygxKTtcclxuICAgICAgbGV0IHRoaXNWYWwgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RcIikpLnZhbHVlID0gU3RyaW5nKDEpXHJcbiAgICAgIGNoZWNraW5nTHZsKE51bWJlcih0aGlzVmFsKSlcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tpbmdMdmwodGhpc1ZhbDogbnVtYmVyKXsgXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNhdmVMdmxcIixKU09OLnN0cmluZ2lmeSh0aGlzVmFsKSk7XHJcbiAgICBzZXRUaGlzUG9zaXRpb24oU3RyaW5nKHRoaXNWYWwpKVxyXG4gICAgc3dpdGNoICh0aGlzVmFsKSB7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICB0YXNrMSgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICB0YXNrMigpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICB0YXNrMygpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgIHRhc2s0KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgdGFzazUoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICB0YXNrNigpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgIHRhc2s3KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgdGFzazgoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICB0YXNrOSgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICB0YXNrMTAoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0YXNrMSgpO1xyXG4gICAgICB9XHJcbn1cclxuZnVuY3Rpb24gc2V0VGhpc1Bvc2l0aW9uKHRoaXNWYWw6IHN0cmluZyl7XHJcbiAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0XCIpKS52YWx1ZSA9IHRoaXNWYWw7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2YWx1ZVwiKS50ZXh0Q29udGVudCA9IHRoaXNWYWw7XHJcbiAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGlfaW5wdXRcIikpLnZhbHVlID0gdGhpc1ZhbDtcclxufVxyXG4vL2xvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2F2ZUx2bFwiLFwiMVwiKTtcclxuZXhwb3J0IGZ1bmN0aW9uIHN0cigpe1xyXG4gICAgbGV0IHN0YXJ0aW5nID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzYXZlTHZsXCIpKTtcclxuICAgIGlmKGlzTmFOKHN0YXJ0aW5nKSl7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXlLZXlcIixKU09OLnN0cmluZ2lmeShsdmxzKSlcclxuICAgICAgY2hlY2tpbmdMdmwoMSlcclxuICAgIH1lbHNle1xyXG4gICAgICBjaGVja2luZ0x2bChzdGFydGluZylcclxuICAgIH1cclxuICAgIFxyXG59c3RyKClcclxuXHJcbi8qIGZ1bmN0aW9uIGludm9rZU1lKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJIZWxsbyBzc3Nzc3N3b3JsZCFcIik7XHJcbn1cclxuXHJcbnZhciByZXN1bHQgPSBldmFsKFwiaW52b2tlTWUoKVwiKTsgKi9cclxuIiwiaW1wb3J0IHsgY291bnQgfSBmcm9tICdjb25zb2xlJztcclxuaW1wb3J0IG5leHRMZXZlbFVzZSBmcm9tICcuL2J1dHRvbnMtbGVmdC1yaWdodCdcclxubGV0IGNoZWNrZWRXb3JrID0gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVudGVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBpZih2YWxpZCgpKXtcclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGludmFsaWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICBpZihldmVudC5jb2RlID09PSAnRW50ZXInICYmIHZhbGlkKCkpe1xyXG4gICAgICAgIH1lbHNlIGlmKGV2ZW50LmNvZGUgPT09ICdFbnRlcicpe1xyXG4gICAgICAgICAgICBpbnZhbGlkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGZ1bmN0aW9uIHZhbGlkKCl7XHJcbiAgICAgICAgaWYoIXdoYXRJc1dhbGlkKCkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICB3aW5Pck5vdCgpO1xyXG4gICAgICAgIHZhciBwID0gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJteUtleVwiLEpTT04uc3RyaW5naWZ5KGx2bHMpKTtcclxuICAgICAgICBsZXQgc3RhcnQgPSAxXHJcbiAgICAgICAgbGV0IGZpbmlzaCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3gtb2YtaW1nXCIpKS5zdHlsZS5vcGFjaXR5ID0gU3RyaW5nKHN0YXJ0KTtcclxuICAgICAgICAgICAgc3RhcnQgPSBzdGFydCAtIDAuMVxyXG4gICAgICAgICAgICBpZiAoc3RhcnQgPCAwKWNsZWFySW50ZXJ2YWwoZmluaXNoKVxyXG4gICAgICAgIH0sIDgwKTtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucC1hbmN2ZXInKSkudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgc2V0VGltZW91dChuZXh0TGV2ZWxVc2UsIDEwMDAgICApXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpbnZhbGlkKCl7XHJcbiAgICAgICAgICAgIGxldCBzdGFydCA9IDBcclxuICAgICAgICAgICAgbGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuc3R5bGUubWFyZ2luUmlnaHQgPSBzdGFydCArICclJztcclxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKS5zdHlsZS5tYXJnaW5MZWZ0ID0gc3RhcnQgKyAnJSc7XHJcbiAgICAgICAgICAgICAgc3RhcnQgPSBzdGFydCArIDFcclxuICAgICAgICAgICAgICBpZiAoc3RhcnQgPiAxMCl7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKVxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVyMiA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLnN0eWxlLm1hcmdpblJpZ2h0ID0gc3RhcnQgKyAnJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuc3R5bGUubWFyZ2luTGVmdCA9IHN0YXJ0ICsgJyUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gc3RhcnQgLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0ID09PSAwKWNsZWFySW50ZXJ2YWwodGltZXIyKVxyXG4gICAgICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuY2hlY2tlZFdvcmsoKVxyXG5mdW5jdGlvbiB3aGF0SXNXYWxpZCgpe1xyXG4gICAgbGV0IGEgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RcIikpLnZhbHVlXHJcbiAgICBsZXQgdmFsdSA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wLWFuY3ZlcicpKS52YWx1ZVxyXG4gICAgbGV0IGx2bCA9IE51bWJlcihhKVxyXG4gICAgaWYobHZsID09IDEgJiYgdmFsdS5zcGxpdChcIiBcIikuam9pbigpID09PSBcInBsYXRlXCIpe1xyXG5cclxuICAgICAgICBsdmxzLmx2bDEgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBpZihsdmwgPT0gMiAmJiB2YWx1LnNwbGl0KFwiIFwiKS5qb2luKCkgPT09IFwiYmVudG9cIil7XHJcbiAgICAgICAgbHZscy5sdmwyID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgaWYobHZsID09IDMgJiYgdmFsdS5zcGxpdChcIiBcIikuam9pbigpID09PSBcIiNmYW5jeVwiKXtcclxuICAgICAgICBsdmxzLmx2bDMgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9aWYobHZsID09IDQgJiYgdmFsdS5zcGxpdChcIiBcIikuam9pbihcIlwiKSA9PT0gXCJwbGF0ZWFwcGxlXCIpe1xyXG4gICAgICAgIGx2bHMubHZsNCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1pZihsdmwgPT0gNSAmJiB2YWx1LnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpID09PSBcIiNmYW5jeXBpY2tsZVwiKXtcclxuICAgICAgICBsdmxzLmx2bDUgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9aWYobHZsID09IDYgJiYgKHZhbHUgPT09IFwiYXBwbGUuc21hbGxcIiB8fCB2YWx1ID09PSBcIi5zbWFsbFwiKSl7XHJcbiAgICAgICAgbHZscy5sdmw2ID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfWlmKGx2bCA9PSA3ICYmIHZhbHUgPT09IFwib3JhbmdlLnNtYWxsXCIpe1xyXG4gICAgICAgIGx2bHMubHZsNyA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1pZihsdmwgPT0gOCAmJiB2YWx1ID09PSBcImJlbnRvIG9yYW5nZS5zbWFsbFwiKXtcclxuICAgICAgICBsdmxzLmx2bDggPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9aWYobHZsID09IDkgJiYgKHZhbHUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIikgPT09IFwicGxhdGUsYmVudG9cIiB8fCB2YWx1LnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpID09PSBcImJlbnRvLHBsYXRlXCIpKXtcclxuICAgICAgICBsdmxzLmx2bDkgPSB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfWlmKGx2bCA9PSAxMCAmJiAodmFsdS5zcGxpdChcIiBcIikuam9pbihcIlwiKSA9PT0gXCIqXCIgKSl7XHJcbiAgICAgICAgbHZscy5sdmwxMCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBsZXQgbHZsczoge1tpbmRleDogc3RyaW5nXTpib29sZWFufSA9IHtcclxuICAgIGx2bDE6IGZhbHNlLFxyXG4gICAgbHZsMjogZmFsc2UsXHJcbiAgICBsdmwzOiBmYWxzZSxcclxuICAgIGx2bDQ6IGZhbHNlLFxyXG4gICAgbHZsNTogZmFsc2UsXHJcbiAgICBsdmw2OiBmYWxzZSxcclxuICAgIGx2bDc6IGZhbHNlLFxyXG4gICAgbHZsODogZmFsc2UsXHJcbiAgICBsdmw5OiBmYWxzZSxcclxuICAgIGx2bDEwOiBmYWxzZSxcclxufVxyXG4vL2xvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXlLZXlcIixKU09OLnN0cmluZ2lmeShhcnIpKTtcclxuZnVuY3Rpb24gd2luT3JOb3QoKXtcclxuICAgIGxldCBjb3VudCA9IDBcclxuICAgIGZvcihsZXQga2V5IGluIGx2bHMpe1xyXG4gICAgICAgIGNvdW50KytcclxuICAgICAgICBpZihsdmxzW2tleV0gPT09IGZhbHNlKXJldHVyblxyXG4gICAgICAgIGlmKGNvdW50ID09PSAxMCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXJ1clwiKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChZb3VXaW4sIDEwMDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIFlvdVdpbigpe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYi1yZXN0YXJ0XCIpKS5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbn0iLCJcclxuKGZ1bmN0aW9uIGxpbmUoKXtcclxuICAgIGxldCBudW0gPSBcIlwiXHJcbiAgICBmb3IobGV0IGkgPSAxOyBpIDw9IDIwOyBpKyspe1xyXG4gICAgICAgIG51bSArPSAgaVxyXG4gICAgICAgIG51bSArPSAnPGJyPidcclxuICAgIH1cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5lLW51bWJlcicpLmlubmVySFRNTCA9IG51bVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmUtbnVtYmVycycpLmlubmVySFRNTCA9IG51bVxyXG4gICAgXHJcbn0pKCk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVyTGl0dGxlKGFyZzogYW55KXtcclxuICAgIGxldCBtID0gNTBcclxuICAgIGxldCBjb3VudCA9IDQ1XHJcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICBhcmcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCJcclxuICAgICAgICBhcmcuc3R5bGUuaGVpZ2h0ID0gXCIzMCVcIlxyXG4gICAgICAgIGFyZy5zdHlsZS5wYWRkaW5nID0gXCIxJVwiICAgICBcclxuICAgIGlmKGNvdW50IDwgbSl7XHJcbiAgICAgICAgYXJnLnN0eWxlLmhlaWdodCAgPSBjb3VudCArICclJzsgICBcclxuICAgICAgICBjb3VudCA9IGNvdW50ICsgMC41XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBtID0gNDVcclxuICAgICAgICBhcmcuc3R5bGUuaGVpZ2h0ICA9IGNvdW50ICsgJyUnOyAgIFxyXG4gICAgICAgIGNvdW50ID0gY291bnQgLSAwLjVcclxuICAgICAgICBpZihjb3VudCA8IDQ2KXtcclxuICAgICAgICAgICAgbSA9IDUwXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9LCAyNSAgKVxyXG59OyIsIlxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLW1vZGFsXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxyXG59KVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsKGUpID0+IHtcclxuICAgIGlmKGUua2V5ID09PSBcIkVzY2FwZVwiKXtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJylcclxuICAgIH1cclxufSlcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xyXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpe1xyXG4gICAgICAgIGlmKGUudGFyZ2V0ICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWJveFwiKSAmJiBlLnRhcmdldCAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcGVuX21vZGFsXCIpKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuIiwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vdXNjb2xvcihpbWc6IGFueSwgdGV4dDogYW55KXtcclxuICAgIGxldCBpbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaW1nKVxyXG4gICAgbGV0IHRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGV4dClcclxuICAgIGltLm9ubW91c2VvdmVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy9vbm1vdXNlb3Zlci5zdG9wUHJvcGFnYXRpb24oKVxyXG4gXHJcbiAgICAgICAgdGV4LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzBmMFwiXHJcbiAgICAgICAgaW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIlxyXG4gICAgICAgIHRleC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIlxyXG4gICAgICAgIC8vb25tb3VzZW91dC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG4gICAgfVxyXG4gICAgaW0ub25tb3VzZW91dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRleC5zdHlsZS5jb2xvciA9IFwid2hpdGVcIlxyXG4gICAgICAgIHRleC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCJcclxuICAgICAgICBpbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCJcclxuXHJcbiAgICAvKiAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JvdW5kMScpID09PSBpbSl7XHJcbiAgICAgICAgICAgIG9ubW91c2VvdXQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICAgICAgICB9ICovXHJcbiAgICAgICAgLy9vbm1vdXNlb3V0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICB9XHJcblxyXG4gICAgdGV4LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIixmdW5jdGlvbihlOiBhbnkpe1xyXG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHBsZS10ZXh0MScpID09PSB0ZXgpe1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcmFuZ2UtdGV4dDEnKSA9PT0gdGV4KXtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIH1pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGlja2xlLXRleHQxJykgPT09IHRleCl7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICB9aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BpY2tsZS10ZXh0MicpID09PSB0ZXgpe1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgfWlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHBsZS1zbWFsbDInKSA9PT0gdGV4KXtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIH1pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dC1vcmFuZ2Utc21hbGwxJykgPT09IHRleCl7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICB9aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHQtb3JhbmdlMScpID09PSB0ZXgpe1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgfWlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0LW9yYW5nZS1zbWFsbDInKSA9PT0gdGV4KXtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dC1vcmFuZ2UyJykgPT09IHRleCl7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICB9aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHQtYXBwbGUxJykgPT09IHRleCl7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICB9aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHQtb3JhbmdlMycpID09PSB0ZXgpe1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgfWlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0LW9yYW5nZS1iaWcxJykgPT09IHRleCl7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICB9aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BpY2szJykgPT09IHRleCl7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICB9aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BpY2s0JykgPT09IHRleCl7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICB9aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BpY2s1JykgPT09IHRleCl7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGV4LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzBmMFwiXHJcbiAgICAgICAgdGV4LnN0eWxlLmNvbG9yID0gXCJibGFja1wiXHJcbiAgICAgICAgaW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIlxyXG4gICAgfSkgIFxyXG5cclxuICAgIHRleC5vbm1vdXNlb3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy9vbm1vdXNlb3V0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgdGV4LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgIHRleC5zdHlsZS5jb2xvciA9IFwid2hpdGVcIlxyXG4gICAgICAgIGltLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIlxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVyKGFyZzogYW55KXtcclxuICAgIGxldCBtID0gNzBcclxuICAgIGxldCBjb3VudCA9IDY1XHJcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICBhcmcuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCJcclxuICAgICAgICBhcmcuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCJcclxuICAgICAgICBhcmcuc3R5bGUucGFkZGluZyA9IFwiMSVcIlxyXG4gICAgaWYoY291bnQgPCBtKXtcclxuICAgICAgICBhcmcuc3R5bGUuaGVpZ2h0ICA9IGNvdW50ICsgJyUnOyAgIFxyXG4gICAgICAgIGNvdW50ID0gY291bnQgKyAwLjVcclxuICAgIH1lbHNle1xyXG4gICAgICAgIG0gPSA2NVxyXG4gICAgICAgIGFyZy5zdHlsZS5oZWlnaHQgID0gY291bnQgKyAnJSc7ICAgXHJcbiAgICAgICAgY291bnQgPSBjb3VudCAtIDAuNVxyXG4gICAgICAgIGlmKGNvdW50IDwgNjYpe1xyXG4gICAgICAgICAgICBtID0gNzBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH0sIDI1ICApXHJcbn07IiwiaW1wb3J0IHtzdHJ9IGZyb20gJy4vYnV0dG9ucy1sZWZ0LXJpZ2h0J1xyXG5pbXBvcnQgeyBsdmxzIH0gZnJvbSAnLi9mb3JtJztcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmItcmVzdGFydCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmItcmVzdGFydFwiKSkuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICBsdmxzLmx2bDEgPSBmYWxzZTtcclxuICAgIGx2bHMubHZsMiA9IGZhbHNlO1xyXG4gICAgbHZscy5sdmwzID0gZmFsc2U7XHJcbiAgICBsdmxzLmx2bDQgPSBmYWxzZTtcclxuICAgIGx2bHMubHZsNSA9IGZhbHNlO1xyXG4gICAgbHZscy5sdmw2ID0gZmFsc2U7XHJcbiAgICBsdmxzLmx2bDcgPSBmYWxzZTtcclxuICAgIGx2bHMubHZsOCA9IGZhbHNlO1xyXG4gICAgbHZscy5sdmw5ID0gZmFsc2U7XHJcbiAgICBsdmxzLmx2bDEwID0gZmFsc2U7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibXlLZXlcIik7XHJcbiAgICBzdHIoKTtcclxufSlcclxuXHJcbiIsImltcG9ydCB7c3RyfSBmcm9tICcuL2J1dHRvbnMtbGVmdC1yaWdodCdcclxuaW1wb3J0IHsgbHZscyB9IGZyb20gJy4vZm9ybSc7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iLXJlc3RhcnQyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYi1yZXN0YXJ0XCIpKS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcclxuICAgIGx2bHMubHZsMSA9IGZhbHNlO1xyXG4gICAgbHZscy5sdmwyID0gZmFsc2U7XHJcbiAgICBsdmxzLmx2bDMgPSBmYWxzZTtcclxuICAgIGx2bHMubHZsNCA9IGZhbHNlO1xyXG4gICAgbHZscy5sdmw1ID0gZmFsc2U7XHJcbiAgICBsdmxzLmx2bDYgPSBmYWxzZTtcclxuICAgIGx2bHMubHZsNyA9IGZhbHNlO1xyXG4gICAgbHZscy5sdmw4ID0gZmFsc2U7XHJcbiAgICBsdmxzLmx2bDkgPSBmYWxzZTtcclxuICAgIGx2bHMubHZsMTAgPSBmYWxzZTtcclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJteUtleVwiKTtcclxuICAgIHN0cigpO1xyXG59KSIsImltcG9ydCB7IGNoZWNraW5nTHZsIH0gZnJvbSBcIi4vYnV0dG9ucy1sZWZ0LXJpZ2h0XCI7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICh4KSB7XHJcbiAgICBjb25zdCB0YXJnZSA9IHgudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBsZXQgbSA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BpX2lucHV0XCIpKS52YWx1ZSA9IHRhcmdlLnZhbHVlXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZhbHVlXCIpLnRleHRDb250ZW50ID0gdGFyZ2UudmFsdWU7XHJcbiAgICBjaGVja2luZ0x2bChOdW1iZXIobSkpXHJcbn0pIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZXJTbWFsbChhcmc6IGFueSl7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YoYXJnKSlcclxuICAgIGxldCBtID0gMjBcclxuICAgIGxldCBjb3VudCA9IDE1XHJcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICBhcmcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCJcclxuICAgICAgICBhcmcuc3R5bGUuaGVpZ2h0ID0gXCIzMCVcIlxyXG4gICAgICAgIGFyZy5zdHlsZS5wYWRkaW5nID0gXCIxJVwiICAgXHJcbiAgICAgICAgYXJnLnN0eWxlLmxlZnQgPSBcIjQwJVwiIFxyXG4gICAgaWYoY291bnQgPCBtKXtcclxuICAgICAgICBhcmcuc3R5bGUuaGVpZ2h0ICA9IGNvdW50ICsgJyUnOyAgIFxyXG4gICAgICAgIGNvdW50ID0gY291bnQgKyAwLjVcclxuICAgIH1lbHNle1xyXG4gICAgICAgIG0gPSAxNVxyXG4gICAgICAgIGFyZy5zdHlsZS5oZWlnaHQgID0gY291bnQgKyAnJSc7ICAgXHJcbiAgICAgICAgY291bnQgPSBjb3VudCAtIDAuNVxyXG4gICAgICAgIGlmKGNvdW50IDwgMTYpe1xyXG4gICAgICAgICAgICBtID0gMjBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH0sIDI1ICApXHJcbn07IiwiXHJcbmltcG9ydCByb3VuZCBmcm9tICcuLi8uLi9hc3NldHMvcnIuc3ZnJ1xyXG5pbXBvcnQgdGltZXIgZnJvbSAnLi9tb3ZpbmcnXHJcbi8vaW1wb3J0IHtsdmxzfSBmcm9tICcuL2Zvcm0nXHJcbmltcG9ydCBtb3VzY29sb3IgZnJvbSAnLi9tb3VzY29sb3InXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2sxKCl7XHJcbiAgICBjb25zdCB0YXNraDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpXHJcbiAgICBjb25zdCBuYXZQYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXRleHQtYmxvY2snKVxyXG4gICAgY29uc3QgbGVmdFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlbHAtdGV4dGFyZWEnKVxyXG4gICAgY29uc3QgcmlnaHRQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWxwLXRleHRhcmVhLXJpZ2h0JylcclxuICAgIGxldCBhZGQgPSAnJ1xyXG4gICAgYWRkICs9ICc8aDI+VHlwZSBTZWxlY3RvcjwvaDI+J1xyXG4gICAgYWRkICs9ICc8cD5TZWxlY3QgZWxlbWVudHMgYnkgdGhlaXIgdHlwZTwvcD4nXHJcbiAgICBhZGQgKz0gJzxwPjxzcGFuPkE8L3A+PC9zcGFuPidcclxuICAgIGFkZCArPSAnPHA+U2VsZWN0cyBhbGwgZWxlbWVudHMgb2YgdHlwZSA8c3Bhbj5BPC9zcGFuPi4gVHlwZSByZWZlcnMgdG8gdGhlIHR5cGUgb2YgdGFnLCBzbyA8c3Bhbj5kaXY8L3NwYW4+LCA8c3Bhbj4mbHQ7cCZndDwvc3Bhbj47IGFuZCA8c3Bhbj4mbHQ7dWwmZ3Q8L3NwYW4+OyBhcmUgYWxsIGRpZmZlcmVudCBlbGVtZW50IHR5cGVzLjwvcD4nXHJcbiAgICBhZGQgKz0gJzxoMz5FeGFtcGxlczwvaDM+J1xyXG4gICAgYWRkICs9ICc8cD48c3Bhbj5kaXY8L3NwYW4+IHNlbGVjdHMgYWxsIDxzcGFuPiZsdDtkaXYmZ3Q8L3NwYW4+OyBlbGVtZW50cy48L3A+JyAgIFxyXG4gICAgYWRkICs9ICc8aHI+J1xyXG4gICAgYWRkICs9ICc8cD48c3Bhbj5wPC9zcGFuPiBzZWxlY3RzIGFsbCA8c3Bhbj4mbHQ7cCZndDwvc3Bhbj47IGVsZW1lbnRzLidcclxuICAgIG5hdlBhbi5pbm5lckhUTUwgPSBhZGRcclxuICAgIGFkZCA9ICcgeydcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICcgLyogU3R5bGVzIHdvdWxkIGdvIGhlcmUuICovJ1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJyB9J1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnIC8qJ1xyXG4gICAgYWRkICs9ICcgVHlwZSBhIG51bWJlciB0byBza2lwIHRvIGEnXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnIGxldmVsLidcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICcgRXgg4oaSIFwiNVwiIGZvciBsZXZlbCA1J1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJyAqLydcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgbGVmdFBhbmVsLmlubmVySFRNTCA9IGFkZCBcclxuICAgIGFkZCA9ICc8ZGl2IGNsYXNzPVwidGFibGVcIj48cHJlPiZsdDtkaXYvJmd0OzwvcHJlPidcclxuICAgIGFkZCArPSAnPGRpdiBjbGFzcz1cImJlbnRvXCIgaWQ9XCJiZW50bzFcIj48cHJlPiAgJmx0O3BsYXRlIC8mZ3Q8L3ByZT48L2Rpdj4nXHJcbiAgICBhZGQgKz0gJzxkaXYgY2xhc3M9XCJiZW50b1wiIGlkPVwiYmVudG8yXCI+PHByZT4gICZsdDtwbGF0ZSAvJmd0PC9wcmU+PC9kaXY+J1xyXG4gICAgYWRkICs9ICc8cHJlPiZsdDtkaXYgLyZndDs8L3ByZT48L2Rpdj4nXHJcbiAgICByaWdodFBhbmVsLmlubmVySFRNTCA9IGFkZFxyXG4gICAgdGFza2gxLnRleHRDb250ZW50ICA9IFwiU2VsZWN0IHRoZSBwbGF0ZXNcIlxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlLWJveCcpLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiYm94LW9mLWltZ1wiPjwvZGl2PidcclxuICAgIGFkZCA9IGA8ZGl2PjxpbWcgY2xhc3M9XCJyb3VuZFwiIGlkPVwicm91bmQxXCIgc3JjPSR7cm91bmR9PjwvZGl2PmBcclxuICAgIGFkZCArPSBgPGRpdj48aW1nIGNsYXNzPVwicm91bmRcIiBpZD1cInJvdW5kMlwiIHNyYz0ke3JvdW5kfT48L2Rpdj4uYFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveC1vZi1pbWcnKS5pbm5lckhUTUwgPSBhZGRcclxuICAgIGNvbnN0IGx2bDEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlLZXlcIikpO1xyXG4gICAgaWYobHZsMS5sdmwxID09PSB0cnVlKXtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNraW5nJykpLnN0eWxlLmNvbG9yID0gXCJncmVlblwiXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNraW5nJykpLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhZGRNYWluU3R5bGUoKXtcclxuICAgICAgICBjb25zdCByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvdW5kJylcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgci5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRpbWVyKHJbaV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBhZGRNYWluU3R5bGUoKVxyXG4gICAgbW91c2NvbG9yKFwiI3JvdW5kMVwiLCBcIiNiZW50bzFcIilcclxuICAgIG1vdXNjb2xvcihcIiNyb3VuZDJcIiwgXCIjYmVudG8yXCIpXHJcbn1cclxuXHJcblxyXG5cclxuLyogZnVuY3Rpb24gbXlGdW5jKCkge1xyXG4gICAgbGV0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIFwiLnJvdW5kXCIgKTsgLy8g0L3QsNGF0L7QtNC40Lwg0LLRgdC1INGN0LvQtdC80LXQvdGC0Ysg0YEg0LrQu9Cw0YHRgdC+0LwgYmxvY2tcclxuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKXsgLy8g0L/RgNC+0YXQvtC00LjQvCDRhtC40LrQu9C+0Lwg0L/QviDQstGB0LXQvCDRjdC70LXQvNC10L3RgtCw0Lwg0L7QsdGK0LXQutGC0LBcclxuICAgICAgYmxvY2tzW2ldLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiXHJcbiAgICB9XHRcdFxyXG4gIH1cclxuICBteUZ1bmMoKSAqL1xyXG5cclxuLyogICBsZXQgYmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggXCIucm91bmRcIiApO1xyXG5sZXQgYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yb3VuZCcpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKXsgLy8g0L/RgNC+0YXQvtC00LjQvCDRhtC40LrQu9C+0Lwg0L/QviDQstGB0LXQvCDRjdC70LXQvNC10L3RgtCw0Lwg0L7QsdGK0LXQutGC0LBcclxuICAgICAgICBibG9ja3NbaV0uc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCJcclxuICAgICAgfVx0XHJcbn07ICovXHJcblxyXG4vKiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm91bmQxJykub25tb3VzZW92ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3VuZDEnKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiXHJcbiAgICAgIFxyXG59O1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm91bmQyJykub25tb3VzZW92ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3VuZDInKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiXHJcbn07ICovXHJcbi8qIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3VuZDEnKS5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JvdW5kMScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCJcclxuICAgICAgXHJcbn07ICovXHJcbi8qIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3VuZDInKS5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JvdW5kMicpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCJcclxufTsgKi9cclxuXHJcblxyXG5cclxuLyogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnAtYW5jdmVyXCI+XHJcbjxidXR0b24gY2xhc3M9XCJlbnRlclwiPkVudGVyPC9idXR0b24+ICovXHJcbi8qIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmVudG8xXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGNvbnNvbGUubG9nKFwiMVwiKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JlbnRvMScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzBmMFwiXHJcbn0pICovXHJcbi8qIGxldCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBcIi5yb3VuZFwiICk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3VuZCcpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKXsgLy8g0L/RgNC+0YXQvtC00LjQvCDRhtC40LrQu9C+0Lwg0L/QviDQstGB0LXQvCDRjdC70LXQvNC10L3RgtCw0Lwg0L7QsdGK0LXQutGC0LBcclxuICAgICAgICBjb25zb2xlLmxvZyhibG9ja3NbaV0pXHJcbiAgICAgICAgYmxvY2tzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCJcclxuICAgIH1cclxuICAgICAgXHJcbn07XHJcbiAqLyIsIlxyXG5pbXBvcnQgcm91bmQgZnJvbSAnLi4vLi4vYXNzZXRzL3JyLnN2ZydcclxuaW1wb3J0IHNxdWFyZSBmcm9tICcuLi8uLi9hc3NldHMvc3F1YXJlLnN2ZydcclxuaW1wb3J0IHNyb3VuZCBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2UucG5nJ1xyXG5pbXBvcnQgb3JhbmdlIGZyb20gJy4uLy4uL2Fzc2V0cy9vcmFuZ2UucG5nJ1xyXG5pbXBvcnQgdGltZXJMaXR0bGUgZnJvbSAnLi9saXR0bGVNb3ZpbmcnXHJcbmltcG9ydCBhcHBsZSBmcm9tICcuLi8uLi9hc3NldHMvYXBwbC5wbmcnXHJcbmltcG9ydCB0aW1lciBmcm9tICcuL21vdmluZydcclxuaW1wb3J0IHRpbWVyU21hbGwgZnJvbSAnLi9zbWFsbE1vdmluZydcclxuaW1wb3J0IG1vdXNjb2xvciBmcm9tICcuL21vdXNjb2xvcidcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFzazEwKCl7XHJcbiAgICBsZXQgdGFza2gxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKVxyXG4gICAgbGV0IG5hdlBhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtdGV4dC1ibG9jaycpXHJcbiAgICBsZXQgbGVmdFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlbHAtdGV4dGFyZWEnKVxyXG4gICAgbGV0IHJpZ2h0UGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVscC10ZXh0YXJlYS1yaWdodCcpXHJcbiAgICBsZXQgYWRkID0gJydcclxuICAgIGFkZCArPSAnPGgyPlRoZSBVbml2ZXJzYWwgU2VsZWN0b3I8L2gyPidcclxuICAgIGFkZCArPSAnPHA+WW91IGNhbiBzZWxlY3QgZXZlcnl0aGluZyE8L3A+J1xyXG4gICAgYWRkICs9ICc8cD48c3Bhbj4qPC9zcGFuPidcclxuICAgIGFkZCArPSAnPHA+WW91IGNhbiBzZWxlY3QgYWxsIGVsZW1lbnRzIHdpdGggdGhlIHVuaXZlcnNhbCBzZWxlY3RvciE8L3A+J1xyXG4gICAgYWRkICs9ICc8aDM+RXhhbXBsZXM8L2gzPidcclxuICAgIGFkZCArPSAnPHA+PHNwYW4+cCAqPC9zcGFuPiBzZWxlY3RzIGFueSBlbGVtZW50IGluc2lkZSBhbGwgPHNwYW4+Jmx0O3AmZ3Q8L3NwYW4+ZWxlbWVudHMuPC9wPicgICBcclxuICAgIG5hdlBhbi5pbm5lckhUTUwgPSBhZGRcclxuICAgIHRhc2toMS50ZXh0Q29udGVudCA9IFwiU2VsZWN0IGFsbCB0aGUgdGhpbmdzIVwiXHJcbiAgICBhZGQgPSAnIHsnXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnIC8qIFN0eWxlcyB3b3VsZCBnbyBoZXJlLiAqLydcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICcgfSdcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJyAvKidcclxuICAgIGFkZCArPSAnIFR5cGUgYSBudW1iZXIgdG8gc2tpcCB0byBhJ1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJyBsZXZlbC4nXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnIEV4IOKGkiBcIjVcIiBmb3IgbGV2ZWwgNSdcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICcgKi8nXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGxlZnRQYW5lbC5pbm5lckhUTUwgPSBhZGQgXHJcbiAgICBhZGQgPSAgJzxkaXYgY2xhc3M9XCJ0YWJsZVwiPjxwcmU+Jmx0O2RpdiBjbGFzcz1cInRhYmxlXCImZ3Q7PC9wcmU+JyBcclxuICAgIGFkZCArPSAnPGRpdiBpZD1cInRleHQtYXBwbGUxXCI+PHByZT4gICZsdDthcHBsZSAvJmd0OzwvcHJlPjwvZGl2PidcclxuICAgIGFkZCArPSAnPGRpdiBpZD1cInRleHQtcGxhdGUxXCI+PC9kaXY+J1xyXG4gICAgYWRkICs9ICc8ZGl2IGlkPVwidGV4dC1iZW50bzFcIj48cHJlPiAgJmx0O2JlbnRvIC8mZ3Q7PC9wcmU+PC9kaXY+J1xyXG4gICAgYWRkICs9ICc8ZGl2IGlkPVwidGV4dC1iZW50bzJcIj48L2Rpdj4nXHJcbiAgICBhZGQgKz0gJzxkaXYgaWQ9XCJ0ZXh0LXBsYXRlMlwiPjxwcmU+ICAmbHQ7cGxhdGUgaWQ9XCJmYW5jeVwiIC8mZ3Q7PC9wcmU+PC9kaXY+J1xyXG4gICAgYWRkICs9ICc8cHJlPiZsdDtkaXYgLyZndDs8L3ByZT48L2Rpdj4nXHJcbiAgICByaWdodFBhbmVsLmlubmVySFRNTCA9IGFkZFxyXG4gICAgYWRkID0gXCI8cHJlPiAgJmx0O3BsYXRlJmd0PC9wcmU+XCJcclxuICAgIGFkZCArPSc8ZGl2IGlkPVwidGV4dC1vcmFuZ2UxXCI+PHByZT4gICAgJmx0O29yYW5nZSBjbGFzcz1cInNtYWxsXCIgLyZndDwvcHJlPjwvZGl2PidcclxuICAgIGFkZCArPSBcIjxwcmU+ICAmbHQ7cGxhdGUgLyZndDwvcHJlPlwiXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dC1wbGF0ZTEnKS5pbm5lckhUTUwgPSBhZGRcclxuICAgIGFkZCA9ICc8cHJlPiAgJmx0O2JlbnRvJmd0PC9wcmU+J1xyXG4gICAgYWRkICs9JzxkaXYgaWQ9XCJ0ZXh0LW9yYW5nZTJcIj48cHJlPiAgICAmbHQ7cGxhdGUgaWQ9XCJmYW5jeVwiIC8mZ3Q8L3ByZT48L2Rpdj4nXHJcbiAgICBhZGQgKz1cIjxwcmU+ICAmbHQ7YmVudG8gLyZndDwvcHJlPlwiXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dC1iZW50bzInKS5pbm5lckhUTUwgPSBhZGRcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZS1ib3gnKS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImJveC1vZi1pbWdcIj48L2Rpdj4nXHJcbiAgICBhZGQgPSAgYDxkaXYgY2xhc3M9XCJkaXYxXCI+PGltZyBpZD1cImFwcGxlMVwiIHNyYz0ke2FwcGxlfT48L2Rpdj5gXHJcbiAgICBhZGQgKz0gYDxkaXYgY2xhc3M9XCJkaXYyXCI+PGltZyBpZD1cInJvdW5kMVwiIHNyYz0ke3JvdW5kfT48aW1nIGlkPVwib3JhbmdlMVwiIHNyYz0ke29yYW5nZX0+PC9kaXY+YFxyXG4gICAgYWRkICs9IGA8ZGl2IGNsYXNzPVwiZGl2M1wiPjxpbWcgaWQ9XCJzcXVhcmUxXCIgc3JjPSR7c3F1YXJlfT48L2Rpdj5gXHJcbiAgICBhZGQgKz0gYDxkaXYgY2xhc3M9XCJkaXY0XCI+PGltZyBpZD1cInNxdWFyZTJcIiBzcmM9JHtzcXVhcmV9PjxpbWcgaWQ9XCJvcmFuZ2UyXCIgc3JjPSR7b3JhbmdlfT48L2Rpdj5gXHJcbiAgICBhZGQgKz0gYDxkaXYgY2xhc3M9XCJkaXY1XCI+PGltZyBpZD1cInJvdW5kMlwiIHNyYz0ke3Nyb3VuZH0+PC9kaXY+YFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveC1vZi1pbWcnKS5pbm5lckhUTUwgPSBhZGRcclxuICAgIGxldCBsdmwxMCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteUtleVwiKSk7XHJcbiAgICBpZihsdmwxMC5sdmwxMCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2luZycpKS5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIlxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2luZycpKS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIlxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZE1haW5TdHlsZSgpeyBcclxuICAgICAgICB0aW1lcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwbGUxJykpXHJcbiAgICAgICAgdGltZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JvdW5kMScpKVxyXG4gICAgICAgIHRpbWVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcXVhcmUxJykpXHJcbiAgICAgICAgdGltZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NxdWFyZTInKSlcclxuICAgICAgICB0aW1lcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm91bmQyJykpXHJcbiAgICAgICAgdGltZXJMaXR0bGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29yYW5nZTEnKSlcclxuICAgICAgICB0aW1lclNtYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcmFuZ2UyJykpXHJcblxyXG5cclxuICAgIH1cclxuICAgIGFkZE1haW5TdHlsZSgpXHJcbiAgICBtb3VzY29sb3IoJyNhcHBsZTEnLCAnI3RleHQtYXBwbGUxJylcclxuICAgIG1vdXNjb2xvcignI3JvdW5kMScsICcjdGV4dC1wbGF0ZTEnKVxyXG4gICAgbW91c2NvbG9yKCcjb3JhbmdlMScsICcjdGV4dC1vcmFuZ2UxJylcclxuICAgIG1vdXNjb2xvcignI3NxdWFyZTEnLCAnI3RleHQtYmVudG8xJylcclxuICAgIG1vdXNjb2xvcignI3NxdWFyZTInLCAnI3RleHQtYmVudG8yJylcclxuICAgIG1vdXNjb2xvcignI29yYW5nZTInLCAnI3RleHQtb3JhbmdlMicpXHJcbiAgICBtb3VzY29sb3IoJyNyb3VuZDInLCAnI3RleHQtcGxhdGUyJylcclxuXHJcbn07IiwiXHJcbmltcG9ydCByb3VuZCBmcm9tICcuLi8uLi9hc3NldHMvcnIuc3ZnJ1xyXG5pbXBvcnQgc3F1YXJlIGZyb20gJy4uLy4uL2Fzc2V0cy9zcXVhcmUuc3ZnJ1xyXG5pbXBvcnQgbW91c2NvbG9yIGZyb20gJy4vbW91c2NvbG9yJ1xyXG5pbXBvcnQgdGltZXIgZnJvbSAnLi9tb3ZpbmcnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2syKCl7XHJcbiAgICBsZXQgdGFza2gxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKVxyXG4gICAgbGV0IG5hdlBhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtdGV4dC1ibG9jaycpXHJcbiAgICBsZXQgbGVmdFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlbHAtdGV4dGFyZWEnKVxyXG4gICAgbGV0IHJpZ2h0UGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVscC10ZXh0YXJlYS1yaWdodCcpXHJcbiAgICBsZXQgYWRkID0gJydcclxuICAgIGFkZCArPSAnPGgyPlR5cGUgU2VsZWN0b3I8L2gyPidcclxuICAgIGFkZCArPSAnPHA+U2VsZWN0IGVsZW1lbnRzIGJ5IHRoZWlyIHR5cGU8L3A+J1xyXG4gICAgYWRkICs9ICc8cD48c3Bhbj5BPC9wPjwvc3Bhbj4nXHJcbiAgICBhZGQgKz0gJzxwPlNlbGVjdHMgYWxsIGVsZW1lbnRzIG9mIHR5cGUgPHNwYW4+QTwvc3Bhbj4uIFR5cGUgcmVmZXJzIHRvIHRoZSB0eXBlIG9mIHRhZywgc28gPHNwYW4+Jmx0O2RpdiZndDwvc3Bhbj4sIDxzcGFuPiZsdDtwJmd0PC9zcGFuPjsgYW5kIDxzcGFuPiZsdDt1bCZndDwvc3Bhbj47IGFyZSBhbGwgZGlmZmVyZW50IGVsZW1lbnQgdHlwZXMuPC9wPidcclxuICAgIGFkZCArPSAnPGgzPkV4YW1wbGVzPC9oMz4nXHJcbiAgICBhZGQgKz0gJzxwPjxzcGFuPmRpdjwvc3Bhbj4gc2VsZWN0cyBhbGwgPHNwYW4+Jmx0O2RpdiZndDwvc3Bhbj47IGVsZW1lbnRzLjwvcD4nICAgXHJcbiAgICBhZGQgKz0gJzxocj4nXHJcbiAgICBhZGQgKz0gJzxwPjxzcGFuPnA8L3NwYW4+IHNlbGVjdHMgYWxsIDxzcGFuPiZsdDtwJmd0PC9zcGFuPjsgZWxlbWVudHMuJ1xyXG4gICAgbmF2UGFuLmlubmVySFRNTCA9IGFkZFxyXG4gICAgYWRkID0gJyB7J1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJyAvKiBTdHlsZXMgd291bGQgZ28gaGVyZS4gKi8nXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnIH0nXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICcgLyonXHJcbiAgICBhZGQgKz0gJyBUeXBlIGEgbnVtYmVyIHRvIHNraXAgdG8gYSdcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICcgbGV2ZWwuJ1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJyBFeCDihpIgXCI1XCIgZm9yIGxldmVsIDUnXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnICovJ1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBsZWZ0UGFuZWwuaW5uZXJIVE1MID0gYWRkIFxyXG4gICAgYWRkID0gJzxkaXYgY2xhc3M9XCJ0YWJsZVwiPjxwcmU+Jmx0O2Rpdi8mZ3Q7PC9wcmU+J1xyXG4gICAgYWRkICs9ICc8ZGl2IGNsYXNzPVwiYmVudG9cIiBpZD1cInNxdWFyZTF0XCI+PHByZT4gICZsdDtiZW50byAvJmd0PC9wcmU+PC9kaXY+J1xyXG4gICAgYWRkICs9ICc8ZGl2IGNsYXNzPVwiYmVudG9cIiBpZD1cImJlbnRvMVwiPjxwcmU+ICAmbHQ7cGxhdGUgLyZndDwvcHJlPjwvZGl2PidcclxuICAgIGFkZCArPSAnPGRpdiBjbGFzcz1cImJlbnRvXCIgaWQ9XCJzcXVhcmUydFwiPjxwcmU+ICAmbHQ7YmVudG8gLyZndDwvcHJlPjwvZGl2PidcclxuICAgIGFkZCArPSAnPHByZT4mbHQ7ZGl2IC8mZ3Q7PC9wcmU+PC9kaXY+J1xyXG4gICAgcmlnaHRQYW5lbC5pbm5lckhUTUwgPSBhZGRcclxuICAgIHRhc2toMS50ZXh0Q29udGVudCAgPSBcIlNlbGVjdCB0aGUgcGxhdGVzXCJcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZS1ib3gnKS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImJveC1vZi1pbWdcIj48L2Rpdj4nXHJcbiAgICBhZGQgPSBgPGRpdj48aW1nIGNsYXNzPVwic3F1YXJlXCIgaWQ9XCJzcXVhcmUxXCIgc3JjPSR7c3F1YXJlfT48L2Rpdj5gXHJcbiAgICBhZGQgKz1gPGRpdj48aW1nIGNsYXNzPVwicm91bmRcIiBpZD1cInJvdW5kMVwiIHNyYz0ke3JvdW5kfT48L2Rpdj5gXHJcbiAgICBhZGQgKz0gYDxkaXY+PGltZyBjbGFzcz1cInNxdWFyZVwiIGlkPVwic3F1YXJlMlwiIHNyYz0ke3NxdWFyZX0+PC9kaXY+YFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveC1vZi1pbWcnKS5pbm5lckhUTUwgPSBhZGRcclxuICAgIGxldCBsdmwyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15S2V5XCIpKTtcclxuICAgIGlmKGx2bDIubHZsMiA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2luZycpKS5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIlxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2luZycpKS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIlxyXG4gICAgfVxyXG4gICAgLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15S2V5XCIsSlNPTi5zdHJpbmdpZnkobHZscykpO1xyXG4gICAgZnVuY3Rpb24gYWRkTWFpblN0eWxlKCl7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm91bmRcIikpLnN0eWxlLmhlaWdodCA9IFwiNjAlXCJcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGltZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgYWRkTWFpblN0eWxlKClcclxuICAgIG1vdXNjb2xvcihcIiNzcXVhcmUxXCIsIFwiI3NxdWFyZTF0XCIpXHJcbiAgICBtb3VzY29sb3IoXCIjcm91bmQxXCIsIFwiI2JlbnRvMVwiKVxyXG4gICAgbW91c2NvbG9yKFwiI3NxdWFyZTJcIiwgXCIjc3F1YXJlMnRcIilcclxuICAgIFxyXG59IiwiXHJcbmltcG9ydCByb3VuZCBmcm9tICcuLi8uLi9hc3NldHMvcnIuc3ZnJ1xyXG5pbXBvcnQgc3F1YXJlIGZyb20gJy4uLy4uL2Fzc2V0cy9zcXVhcmUuc3ZnJ1xyXG5pbXBvcnQgc3BlY2lhbCBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2UucG5nJ1xyXG5pbXBvcnQgdGltZXIgZnJvbSAnLi9tb3ZpbmcnXHJcbmltcG9ydCBtb3VzY29sb3IgZnJvbSAnLi9tb3VzY29sb3InXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2szKCl7XHJcbiAgICBsZXQgdGFza2gxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKVxyXG4gICAgbGV0IG5hdlBhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtdGV4dC1ibG9jaycpXHJcbiAgICBsZXQgbGVmdFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlbHAtdGV4dGFyZWEnKVxyXG4gICAgbGV0IHJpZ2h0UGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVscC10ZXh0YXJlYS1yaWdodCcpXHJcbiAgICBsZXQgYWRkID0gJydcclxuICAgIGFkZCArPSAnPGgyPklEIFNlbGVjdG9yPC9oMj4nXHJcbiAgICBhZGQgKz0gJzxwPlNlbGVjdCBlbGVtZW50cyB3aXRoIGFuIElEPC9wPidcclxuICAgIGFkZCArPSAnPHA+PHNwYW4+I2lkPC9wPjwvc3Bhbj4nXHJcbiAgICBhZGQgKz0gJzxwPlNlbGVjdHMgdGhlIGVsZW1lbnQgd2l0aCBhIHNwZWNpZmljIDxzcGFuPmlkPC9zcGFuPi4gWW91IGNhbiBhbHNvIGNvbWJpbmUgdGhlIElEIHNlbGVjdG9yIHdpdGggdGhlIHR5cGUgc2VsZWN0b3IuPC9wPidcclxuICAgIGFkZCArPSAnPGgzPkV4YW1wbGVzPC9oMz4nXHJcbiAgICBhZGQgKz0gJzxwPjxzcGFuPiNjb29sPC9zcGFuPiBzZWxlY3RzIGFueSBlbGVtZW50IHdpdGg8c3Bhbj5pZD1cImNvb2xcIjwvc3Bhbj47PC9wPicgICBcclxuICAgIGFkZCArPSAnPGhyPidcclxuICAgIGFkZCArPSAnPHA+PHNwYW4+dWwjbG9uZzwvc3Bhbj4gc2VsZWN0cyA8c3Bhbj4mbHQ7dWwgaWQ9XCJsb25nXCImZ3Q8L3NwYW4+J1xyXG4gICAgbmF2UGFuLmlubmVySFRNTCA9IGFkZFxyXG4gICAgYWRkID0gJyB7J1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJyAvKiBTdHlsZXMgd291bGQgZ28gaGVyZS4gKi8nXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnIH0nXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICcgLyonXHJcbiAgICBhZGQgKz0gJyBUeXBlIGEgbnVtYmVyIHRvIHNraXAgdG8gYSdcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICcgbGV2ZWwuJ1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJyBFeCDihpIgXCI1XCIgZm9yIGxldmVsIDUnXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnICovJ1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBsZWZ0UGFuZWwuaW5uZXJIVE1MID0gYWRkIFxyXG4gICAgYWRkID0gJzxkaXYgY2xhc3M9XCJ0YWJsZVwiPjxwcmU+Jmx0O2RpdiBjbGFzcz1cInRhYmxlXCImZ3Q7PC9wcmU+JyBcclxuICAgIGFkZCArPSAnPGRpdiBjbGFzcz1cImJlbnRvXCIgaWQ9XCJiZW50bzFcIj48cHJlPiAgJmx0O3BsYXRlIGlkPVwiZmFuY3lcIiAvJmd0PC9wcmU+PC9kaXY+J1xyXG4gICAgYWRkICs9ICc8ZGl2IGNsYXNzPVwiYmVudG9cIiBpZD1cImJlbnRvMlwiPjxwcmU+ICAmbHQ7cGxhdGUgLyZndDwvcHJlPjwvZGl2PidcclxuICAgIGFkZCArPSAnPGRpdiBjbGFzcz1cImJlbnRvXCIgaWQ9XCJiZW50bzNcIj48cHJlPiAgJmx0O2JlbnRvIC8mZ3Q8L3ByZT48L2Rpdj4nXHJcbiAgICBhZGQgKz0gJzxwcmU+Jmx0O2RpdiAvJmd0OzwvcHJlPjwvZGl2PidcclxuICAgIHJpZ2h0UGFuZWwuaW5uZXJIVE1MID0gYWRkXHJcbiAgICB0YXNraDEudGV4dENvbnRlbnQgID0gXCJTZWxlY3QgdGhlIHBpY2tsZSBvbiB0aGUgZmFuY3kgcGxhdGVcIlxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlLWJveCcpLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiYm94LW9mLWltZ1wiPjwvZGl2PidcclxuICAgIGFkZCA9IGA8ZGl2IGNsYXNzPVwiZGl2MVwiPjxpbWcgY2xhc3M9XCJzcGVjaWFsXCIgaWQ9XCJzcGVjaWFsXCIgc3JjPSR7c3BlY2lhbH0+PC9kaXY+YFxyXG4gICAgYWRkICs9IGA8ZGl2IGNsYXNzPVwiZGl2MlwiPjxpbWcgY2xhc3M9XCJyb3VuZFwiIGlkPVwicm91bmQxXCIgc3JjPSR7cm91bmR9PjwvZGl2PmBcclxuICAgIGFkZCArPSBgPGRpdiBjbGFzcz1cImRpdjNcIj48aW1nIGNsYXNzPVwic3F1YXJlXCIgaWQ9XCJzcXVhcmUxXCIgc3JjPSR7c3F1YXJlfT48L2Rpdj5gXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm94LW9mLWltZycpLmlubmVySFRNTCA9IGFkZFxyXG4gICAgbGV0IGx2bDMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlLZXlcIikpO1xyXG4gICAgaWYobHZsMy5sdmwzID09PSB0cnVlKXtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNraW5nJykpLnN0eWxlLmNvbG9yID0gXCJncmVlblwiXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNraW5nJykpLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhZGRNYWluU3R5bGUoKXtcclxuICAgICAgICBsZXQgaSA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcGVjaWFsJyk7XHJcbiAgICAgICAgdGltZXIoaSk7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGl2MVwiKSkuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcblxyXG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpdjJcIikpLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpdjNcIikpLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JvdW5kMVwiKSkuc3R5bGUuaGVpZ2h0ID0gXCI2MCVcIjtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzcXVhcmUxXCIpKS5zdHlsZS5oZWlnaHQgPSBcIjYwJVwiO1xyXG4gICAgfVxyXG4gICAgYWRkTWFpblN0eWxlKClcclxuICAgIG1vdXNjb2xvcignI3NwZWNpYWwnLCAnI2JlbnRvMScpXHJcbiAgICBtb3VzY29sb3IoJyNyb3VuZDEnLCAnI2JlbnRvMicpXHJcbiAgICBtb3VzY29sb3IoJyNzcXVhcmUxJywgJyNiZW50bzMnKVxyXG5cclxuXHJcbiAgICBcclxufTtcclxuIiwiXHJcbmltcG9ydCByb3VuZCBmcm9tICcuLi8uLi9hc3NldHMvcnIuc3ZnJ1xyXG5pbXBvcnQgc3F1YXJlIGZyb20gJy4uLy4uL2Fzc2V0cy9zcXVhcmUuc3ZnJ1xyXG5pbXBvcnQgYXBwbGUgZnJvbSAnLi4vLi4vYXNzZXRzL2FwcGwucG5nJ1xyXG5pbXBvcnQgdGltZXJTbWFsbCBmcm9tICcuL3NtYWxsTW92aW5nJ1xyXG5pbXBvcnQgbW91c2NvbG9yIGZyb20gJy4vbW91c2NvbG9yJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrMygpe1xyXG4gICAgbGV0IHRhc2toMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJylcclxuICAgIGxldCBuYXZQYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXRleHQtYmxvY2snKVxyXG4gICAgbGV0IGxlZnRQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWxwLXRleHRhcmVhJylcclxuICAgIGxldCByaWdodFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlbHAtdGV4dGFyZWEtcmlnaHQnKVxyXG4gICAgbGV0IGFkZCA9ICcnXHJcbiAgICBhZGQgKz0gJzxoMj5EZXNjZW5kYW50IFNlbGVjdG9yPC9oMj4nXHJcbiAgICBhZGQgKz0gJzxwPlNlbGVjdCBhbiBlbGVtZW50IGluc2lkZSBhbm90aGVyIGVsZW1lbnQ8L3A+J1xyXG4gICAgYWRkICs9ICc8cD48c3Bhbj5BICBCPC9wPjwvc3Bhbj4nXHJcbiAgICBhZGQgKz0gJzxwPlNlbGVjdHMgYWxsIDxzcGFuPkI8L3NwYW4+IGluc2lkZSBvZjxzcGFuPkE8L3NwYW4+LjxzcGFuPkI8L3NwYW4+aXMgY2FsbGVkIGEgZGVzY2VuZGFudCBiZWNhdXNlIGl0IGlzIGluc2lkZSBvZiBhbm90aGVyIGVsZW1lbnQuPC9wPidcclxuICAgIGFkZCArPSAnPGgzPkV4YW1wbGVzPC9oMz4nXHJcbiAgICBhZGQgKz0gJzxwPjxzcGFuPiBzcCAgc3Ryb25nIDwvc3Bhbj4gc2VsZWN0cyBhbGwgPHNwYW4+Jmx0O3N0cm9uZyZndDwvc3Bhbj5lbGVtZW50cyB0aGF0IGFyZSBpbnNpZGUgb2YgYW55IDxzcGFuPiZsdHAmZ3Q8L3NwYW4+PC9wPicgICBcclxuICAgIGFkZCArPSAnPGhyPidcclxuICAgIGFkZCArPSAnPHA+PHNwYW4+I2ZhbmN5ICBzcGFuPC9zcGFuPiBzZWxlY3RzIGFueSA8c3Bhbj4mbHQ7c3BhbiZndDwvc3Bhbj5pZD1cImZhbmN5XCI8L3NwYW4+PC9wPidcclxuICAgIG5hdlBhbi5pbm5lckhUTUwgPSBhZGRcclxuICAgIGFkZCA9ICcgeydcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICcgLyogU3R5bGVzIHdvdWxkIGdvIGhlcmUuICovJ1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJyB9J1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnIC8qJ1xyXG4gICAgYWRkICs9ICcgVHlwZSBhIG51bWJlciB0byBza2lwIHRvIGEnXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnIGxldmVsLidcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICcgRXgg4oaSIFwiNVwiIGZvciBsZXZlbCA1J1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJyAqLydcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgbGVmdFBhbmVsLmlubmVySFRNTCA9IGFkZCBcclxuICAgIGFkZCA9ICc8ZGl2IGNsYXNzPVwidGFibGVcIj48cHJlPiZsdDtkaXYgY2xhc3M9XCJ0YWJsZVwiJmd0OzwvcHJlPicgXHJcbiAgICBhZGQgKz0gJzxkaXYgY2xhc3M9XCJzcXVhcmUtdGV4dFwiIGlkPVwic3F1YXJlLXRleHQxXCI+PHByZT4gICZsdDtiZW50byAvJmd0PC9wcmU+PC9kaXY+J1xyXG4gICAgYWRkICs9ICc8ZGl2IGNsYXNzPVwicm91bmQtdGV4dFwiIGlkPVwicm91bmQtdGV4dDFcIj48cHJlPiAgJmx0O3BsYXRlIC8mZ3Q8L3ByZT48L2Rpdj4nXHJcbiAgICBhZGQgKz0gJzxkaXYgY2xhc3M9XCJhcHBsZS10ZXh0XCIgaWQ9XCJhcHBsZS10ZXh0MlwiPjxwcmU+ICAmbHQ7YXBwbGUgLyZndDwvcHJlPjwvZGl2PidcclxuICAgIGFkZCArPSAnPHByZT4mbHQ7ZGl2IC8mZ3Q7PC9wcmU+PC9kaXY+J1xyXG4gICAgcmlnaHRQYW5lbC5pbm5lckhUTUwgPSBhZGRcclxuICAgIGFkZCA9IFwiPHByZT4gICZsdDtwbGF0ZSAvJmd0PC9wcmU+XCJcclxuICAgIGFkZCArPSc8ZGl2IGNsYXNzPVwiYXBwbGUtdGV4dFwiIGlkPVwiYXBwbGUtdGV4dDFcIj48cHJlPiAgICAmbHQ7YXBwbGUgLyZndDwvcHJlPjwvZGl2PidcclxuICAgIGFkZCArPVwiPHByZT4gICZsdDtwbGF0ZSAvJmd0PC9wcmU+XCJcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3VuZC10ZXh0JykuaW5uZXJIVE1MID0gYWRkXHJcbiAgICB0YXNraDEudGV4dENvbnRlbnQgID0gXCJTZWxlY3QgdGhlIGFwcGxlIG9uIHRoZSBwbGF0ZVwiXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGUtYm94JykuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJib3gtb2YtaW1nXCI+PC9kaXY+J1xyXG4gICAgYWRkID0gYDxkaXYgY2xhc3M9XCJkaXYxXCI+PGltZyBjbGFzcz1cInNxdWFyZVwiIGlkPVwic3F1YXJlMVwiIHNyYz0ke3NxdWFyZX0+PC9kaXY+YFxyXG4gICAgYWRkICs9IGA8ZGl2IGNsYXNzPVwiZGl2MlwiPjxpbWcgY2xhc3M9XCJyb3VuZFwiIGlkPVwicm91bmQxXCIgc3JjPSR7cm91bmR9PjxpbWcgY2xhc3M9XCJhcHBsZVwiIGlkPVwiYXBwbGUxXCIgc3JjPSR7YXBwbGV9PjwvZGl2PmBcclxuICAgIGFkZCArPSBgPGRpdiBjbGFzcz1cImRpdjNcIj48aW1nIGNsYXNzPVwiYXBwbGVcIiBpZD1cImFwcGxlMlwiIHNyYz0ke2FwcGxlfT48L2Rpdj5gXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm94LW9mLWltZycpLmlubmVySFRNTCA9IGFkZFxyXG4gICAgbGV0IGx2bDQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlLZXlcIikpO1xyXG4gICAgaWYobHZsNC5sdmw0ID09PSB0cnVlKXtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNraW5nJykpLnN0eWxlLmNvbG9yID0gXCJncmVlblwiXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNraW5nJykpLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhZGRNYWluU3R5bGUoKXsgXHJcbiAgICAgICAgdGltZXJTbWFsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwbGUxJykpO1xyXG4gICAgICAgIFxyXG4gICAgXHJcblxyXG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NxdWFyZTFcIikpLnN0eWxlLmhlaWdodCA9IFwiNjAlXCI7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm91bmQxXCIpKS5zdHlsZS5oZWlnaHQgPSBcIjYwJVwiO1xyXG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcGxlMlwiKSkuc3R5bGUuaGVpZ2h0ID0gXCI2MCVcIjtcclxuICAgIH1cclxuICAgIGFkZE1haW5TdHlsZSgpXHJcbiAgICBtb3VzY29sb3IoJyNzcXVhcmUxJywgJyNzcXVhcmUtdGV4dDEnKVxyXG4gICAgbW91c2NvbG9yKCcjYXBwbGUyJywgJyNhcHBsZS10ZXh0MicpXHJcbiAgICBtb3VzY29sb3IoJyNyb3VuZDEnLCAnI3JvdW5kLXRleHQxJylcclxuICAgIG1vdXNjb2xvcignI2FwcGxlMScsICcjYXBwbGUtdGV4dDEnKVxyXG5cclxuXHJcblxyXG59O1xyXG4gICAgIiwiXHJcbmltcG9ydCByb3VuZCBmcm9tICcuLi8uLi9hc3NldHMvcnIuc3ZnJ1xyXG5pbXBvcnQgc3F1YXJlIGZyb20gJy4uLy4uL2Fzc2V0cy9zcXVhcmUuc3ZnJ1xyXG5pbXBvcnQgc3JvdW5kIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZS5wbmcnXHJcbmltcG9ydCBvcmFuZ2UgZnJvbSAnLi4vLi4vYXNzZXRzL29yYW5nZS5wbmcnXHJcbmltcG9ydCBwaWNrbGUgZnJvbSAnLi4vLi4vYXNzZXRzL3BpY2tsZS5wbmcnXHJcbmltcG9ydCB0aW1lclNtYWxsIGZyb20gJy4vc21hbGxNb3ZpbmcnXHJcbmltcG9ydCBtb3VzY29sb3IgZnJvbSAnLi9tb3VzY29sb3InXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2szKCl7XHJcbiAgICBsZXQgdGFza2gxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKVxyXG4gICAgbGV0IG5hdlBhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtdGV4dC1ibG9jaycpXHJcbiAgICBsZXQgbGVmdFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlbHAtdGV4dGFyZWEnKVxyXG4gICAgbGV0IHJpZ2h0UGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVscC10ZXh0YXJlYS1yaWdodCcpXHJcbiAgICBsZXQgYWRkID0gJydcclxuICAgIGFkZCArPSAnPGgyPkNvbWJpbmUgdGhlIERlc2NlbmRhbnQgJiBJRCBTZWxlY3RvcnM8L2gyPidcclxuICAgIGFkZCArPSAnPHA+PHNwYW4+I2lkICBBPC9zcGFuPjwvcD4nXHJcbiAgICBhZGQgKz0gJzxwPllvdSBjYW4gY29tYmluZSBhbnkgc2VsZWN0b3Igd2l0aCB0aGUgZGVzY2VuZGVudCBzZWxlY3Rvci48L3A+J1xyXG4gICAgYWRkICs9ICc8aDM+RXhhbXBsZXM8L2gzPidcclxuICAgIGFkZCArPSAnPHA+PHNwYW4+I2Nvb2wgc3Bhbjwvc3Bhbj5zZWxlY3RzIGFsbDxzcGFuPiZsdHNwYW4mZ3Q8L3NwYW4+YXJlIGluc2lkZSBvZiBlbGVtZW50cyB3aXRoPHNwYW4+IGlkPVwiY29vbFwiPC9zcGFuPjwvcD4nICAgXHJcbiAgICBuYXZQYW4uaW5uZXJIVE1MID0gYWRkXHJcbiAgICB0YXNraDEudGV4dENvbnRlbnQgID0gXCJTZWxlY3QgdGhlIHBpY2tsZSBvbiB0aGUgZmFuY3kgcGxhdGVcIlxyXG4gICAgYWRkID0gJyB7J1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJyAvKiBTdHlsZXMgd291bGQgZ28gaGVyZS4gKi8nXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnIH0nXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICcgLyonXHJcbiAgICBhZGQgKz0gJyBUeXBlIGEgbnVtYmVyIHRvIHNraXAgdG8gYSdcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICcgbGV2ZWwuJ1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJyBFeCDihpIgXCI1XCIgZm9yIGxldmVsIDUnXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnICovJ1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBsZWZ0UGFuZWwuaW5uZXJIVE1MID0gYWRkIFxyXG4gICAgYWRkID0gJzxkaXYgY2xhc3M9XCJ0YWJsZVwiPjxwcmU+Jmx0O2RpdiBjbGFzcz1cInRhYmxlXCImZ3Q7PC9wcmU+JyBcclxuICAgIGFkZCArPSAnPGRpdiBjbGFzcz1cInNxdWFyZS10ZXh0XCIgaWQ9XCJzcXVhcmUtdGV4dDFcIj48cHJlPiAgJmx0O2JlbnRvIC8mZ3Q8L3ByZT48L2Rpdj4nXHJcbiAgICBhZGQgKz0gJzxkaXYgY2xhc3M9XCJyb3VuZC10ZXh0XCIgaWQ9XCJyb3VuZC10ZXh0MVwiPjxwcmU+ICAmbHQ7cGxhdGUgLyZndDwvcHJlPjwvZGl2PidcclxuICAgIGFkZCArPSAnPGRpdiBjbGFzcz1cInJvdW5kLXRleHRcIiBpZD1cInJvdW5kLXRleHQyXCI+PHByZT4gICZsdDtwbGF0ZSAvJmd0PC9wcmU+PC9kaXY+J1xyXG4gICAgYWRkICs9ICc8cHJlPiZsdDtkaXYgLyZndDs8L3ByZT48L2Rpdj4nXHJcbiAgICByaWdodFBhbmVsLmlubmVySFRNTCA9IGFkZFxyXG4gICAgYWRkID0gXCI8cHJlPiAgJmx0O2JlbnRvJmd0PC9wcmU+XCJcclxuICAgIGFkZCArPSc8ZGl2IGNsYXNzPVwib3JhbmdlLXRleHRcIiBpZD1cIm9yYW5nZS10ZXh0MVwiPjxwcmU+ICAgICZsdDtvcmFuZ2UgLyZndDwvcHJlPjwvZGl2PidcclxuICAgIGFkZCArPSBcIjxwcmU+ICAmbHQ7YmVudG8gLyZndDwvcHJlPlwiXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3F1YXJlLXRleHQxJykuaW5uZXJIVE1MID0gYWRkXHJcbiAgICBhZGQgPSAnPHByZT4gICZsdDtwbGF0ZSBpZD1cImZhbmN5XCImZ3Q8L3ByZT4nXHJcbiAgICBhZGQgKz0nPGRpdiBjbGFzcz1cInBpY2tsZS10ZXh0XCIgaWQ9XCJwaWNrbGUtdGV4dDFcIj48cHJlPiAgICAmbHQ7cGlja2xlIC8mZ3Q8L3ByZT48L2Rpdj4nXHJcbiAgICBhZGQgKz1cIjxwcmU+ICAmbHQ7cGxhdGUgLyZndDwvcHJlPlwiXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm91bmQtdGV4dDEnKS5pbm5lckhUTUwgPSBhZGRcclxuICAgIGFkZCA9ICc8cHJlPiAgJmx0O3BsYXRlIGlkPVwiZmFuY3lcIiZndDwvcHJlPidcclxuICAgIGFkZCArPSc8ZGl2IGNsYXNzPVwicGlja2xlLXRleHRcIiBpZD1cInBpY2tsZS10ZXh0MlwiPjxwcmU+ICAgICZsdDtwaWNrbGUgLyZndDwvcHJlPjwvZGl2PidcclxuICAgIGFkZCArPVwiPHByZT4gICZsdDtwbGF0ZSAvJmd0PC9wcmU+XCJcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3VuZC10ZXh0MicpLmlubmVySFRNTCA9IGFkZFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlLWJveCcpLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiYm94LW9mLWltZ1wiPjwvZGl2PidcclxuICAgIGFkZCA9IGA8ZGl2IGNsYXNzPVwiZGl2MVwiPjxpbWcgY2xhc3M9XCJzcXVhcmVcIiBpZD1cInNxdWFyZTFcIiBzcmM9JHtzcXVhcmV9PjxpbWcgaWQ9XCJvcmFuZ2UxXCIgc3JjPSR7b3JhbmdlfT48L2Rpdj5gXHJcbiAgICBhZGQgKz0gYDxkaXYgY2xhc3M9XCJkaXYyXCI+PGltZyBjbGFzcz1cInNyb3VuZFwiIGlkPVwic3JvdW5kMVwiIHNyYz0ke3Nyb3VuZH0+PGltZyBpZD1cInBpY2tsZTFcIiBzcmM9JHtwaWNrbGV9PjwvZGl2PmBcclxuICAgIGFkZCArPSBgPGRpdiBjbGFzcz1cImRpdjNcIj48aW1nIGNsYXNzPVwicm91bmRcIiBpZD1cInJvdW5kMVwiIHNyYz0ke3JvdW5kfT48aW1nIGlkPVwicGlja2xlMlwiIHNyYz0ke3BpY2tsZX0+PC9kaXY+YFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveC1vZi1pbWcnKS5pbm5lckhUTUwgPSBhZGRcclxuICAgIGxldCBsdmw1ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15S2V5XCIpKTtcclxuICAgIGlmKGx2bDUubHZsNSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2luZycpKS5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIlxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2luZycpKS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIlxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkTWFpblN0eWxlKCl7IFxyXG4gICAgICAgIHRpbWVyU21hbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BpY2tsZTEnKSk7XHJcblxyXG5cclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaWNrbGUyXCIpKS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaWNrbGUyXCIpKS5zdHlsZS5oZWlnaHQgPSBcIjIwJVwiO1xyXG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NxdWFyZTFcIikpLnN0eWxlLmhlaWdodCA9IFwiNjAlXCI7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JhbmdlMVwiKSkuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JhbmdlMVwiKSkuc3R5bGUuaGVpZ2h0ID0gXCIzMCVcIjtcclxuXHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3JvdW5kMVwiKSkuc3R5bGUuaGVpZ2h0ID0gXCI2MCVcIjtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb3VuZDFcIikpLnN0eWxlLmhlaWdodCA9IFwiNjAlXCI7XHJcblxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBhZGRNYWluU3R5bGUoKVxyXG4gICAgbW91c2NvbG9yKCcjc3F1YXJlMScsICcjc3F1YXJlLXRleHQxJylcclxuICAgIG1vdXNjb2xvcignI29yYW5nZTEnLCAnI29yYW5nZS10ZXh0MScpXHJcblxyXG4gICAgbW91c2NvbG9yKCcjc3JvdW5kMScsICcjcm91bmQtdGV4dDEnKVxyXG4gICAgbW91c2NvbG9yKCcjcGlja2xlMScsICcjcGlja2xlLXRleHQxJylcclxuXHJcbiAgICBtb3VzY29sb3IoJyNyb3VuZDEnLCAnI3JvdW5kLXRleHQyJylcclxuICAgIG1vdXNjb2xvcignI3BpY2tsZTInLCAnI3BpY2tsZS10ZXh0MicpXHJcblxyXG59OyAgIiwiXHJcbmltcG9ydCByb3VuZCBmcm9tICcuLi8uLi9hc3NldHMvcnIuc3ZnJ1xyXG5pbXBvcnQgYXBwbGUgZnJvbSAnLi4vLi4vYXNzZXRzL2FwcGwucG5nJ1xyXG5pbXBvcnQgdGltZXJTbWFsbCBmcm9tICcuL3NtYWxsTW92aW5nJ1xyXG5pbXBvcnQgbW91c2NvbG9yIGZyb20gJy4vbW91c2NvbG9yJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrNigpe1xyXG4gICAgbGV0IHRhc2toMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJylcclxuICAgIGxldCBuYXZQYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXRleHQtYmxvY2snKVxyXG4gICAgbGV0IGxlZnRQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWxwLXRleHRhcmVhJylcclxuICAgIGxldCByaWdodFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlbHAtdGV4dGFyZWEtcmlnaHQnKVxyXG4gICAgbGV0IGFkZCA9ICcnXHJcbiAgICBhZGQgKz0gJzxoMj5DbGFzcyBTZWxlY3RvcjwvaDI+J1xyXG4gICAgYWRkICs9ICc8cD5TZWxlY3QgZWxlbWVudHMgYnkgdGhlaXIgY2xhc3M8L3A+J1xyXG4gICAgYWRkICs9ICc8cD48c3Bhbj4uY2xhc3NuYW1lPC9wPjwvc3Bhbj4nXHJcbiAgICBhZGQgKz0gJzxwPlRoZSBjbGFzcyBzZWxlY3RvciBzZWxlY3RzIGFsbCBlbGVtZW50cyB3aXRoIHRoYXQgY2xhc3MgYXR0cmlidXRlLiBFbGVtZW50cyBjYW4gb25seSBoYXZlIG9uZSBJRCwgYnV0IG1hbnkgY2xhc3Nlcy48L3A+J1xyXG4gICAgYWRkICs9ICc8aDM+RXhhbXBsZXM8L2gzPidcclxuICAgIGFkZCArPSAnPHA+PHNwYW4+Lm5lYXRvPC9zcGFuPiBzZWxlY3RzIGFsbCBlbGVtZW50cyB3aXRoPHNwYW4+IGNsYXNzPVwibmVhdG9cIjwvc3Bhbj48L3A+JyAgIFxyXG4gICAgbmF2UGFuLmlubmVySFRNTCA9IGFkZFxyXG4gICAgYWRkID0gJyB7J1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJyAvKiBTdHlsZXMgd291bGQgZ28gaGVyZS4gKi8nXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnIH0nXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICcgLyonXHJcbiAgICBhZGQgKz0gJyBUeXBlIGEgbnVtYmVyIHRvIHNraXAgdG8gYSdcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICcgbGV2ZWwuJ1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJyBFeCDihpIgXCI1XCIgZm9yIGxldmVsIDUnXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnICovJ1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBsZWZ0UGFuZWwuaW5uZXJIVE1MID0gYWRkIFxyXG4gICAgYWRkID0gJzxkaXYgY2xhc3M9XCJ0YWJsZVwiPjxwcmU+Jmx0O2RpdiBjbGFzcz1cInRhYmxlXCImZ3Q7PC9wcmU+JyBcclxuICAgIGFkZCArPSAnPGRpdiBjbGFzcz1cImFwcGxlLXRleHRcIiBpZD1cImFwcGxlLXRleHQxXCI+PHByZT4gICZsdDthcHBsZSAvJmd0PC9wcmU+PC9kaXY+J1xyXG4gICAgYWRkICs9ICc8ZGl2IGNsYXNzPVwiYXBwbGUtdGV4dFwiIGlkPVwiYXBwbGUtc21hbGwxXCI+PHByZT4gICZsdDthcHBsZSBjbGFzcz1cInNtYWxsXCIgLyZndDwvcHJlPjwvZGl2PidcclxuICAgIGFkZCArPSAnPGRpdiBjbGFzcz1cInBsYXRlLXRleHRcIiBpZD1cInBsYXRlLXRleHQxXCI+PHByZT4gICZsdDtwbGF0ZSAvJmd0PC9wcmU+PC9kaXY+J1xyXG4gICAgYWRkICs9ICc8ZGl2IGNsYXNzPVwicGxhdGUtdGV4dFwiIGlkPVwicGxhdGUtdGV4dDJcIj48cHJlPiAgJmx0O3BsYXRlIC8mZ3Q8L3ByZT48L2Rpdj4nXHJcbiAgICBhZGQgKz0gJzxwcmU+Jmx0O2RpdiAvJmd0OzwvcHJlPjwvZGl2PidcclxuICAgIHJpZ2h0UGFuZWwuaW5uZXJIVE1MID0gYWRkXHJcbiAgICBhZGQgPSBcIjxwcmU+ICAmbHQ7cGxhdGUgJmd0PC9wcmU+XCJcclxuICAgIGFkZCArPSAnPGRpdiBjbGFzcz1cImFwcGxlLXRleHRcIiBpZD1cImFwcGxlLXNtYWxsMlwiPjxwcmU+ICAgICAmbHQ7YXBwbGUgY2xhc3M9XCJzbWFsbFwiIC8mZ3Q8L3ByZT48L2Rpdj4nXHJcbiAgICBhZGQgKz1cIjxwcmU+ICAmbHQ7cGxhdGUgLyZndDwvcHJlPlwiXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxhdGUtdGV4dDEnKS5pbm5lckhUTUwgPSBhZGRcclxuICAgIHRhc2toMS50ZXh0Q29udGVudCAgPSBcIlNlbGVjdCB0aGUgc21hbGwgYXBwbGVzXCJcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZS1ib3gnKS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImJveC1vZi1pbWdcIj48L2Rpdj4nXHJcbiAgICBhZGQgPSBgPGRpdiBjbGFzcz1cImRpdjFcIj48aW1nIGNsYXNzPVwiYXBwbGVcIiBpZD1cImFwcGxlMVwiIHNyYz0ke2FwcGxlfT48L2Rpdj5gXHJcbiAgICBhZGQgKz0gYDxkaXYgY2xhc3M9XCJkaXYyXCI+PGltZyBjbGFzcz1cImFwcGxlXCIgaWQ9XCJhcHBsZUxpdHRsZTFcIiBzcmM9JHthcHBsZX0+PC9kaXY+YFxyXG4gICAgYWRkICs9IGA8ZGl2IGNsYXNzPVwiZGl2M1wiPjxpbWcgY2xhc3M9XCJyb3VuZFwiIGlkPVwicm91bmQxXCIgc3JjPSR7cm91bmR9PjxpbWcgY2xhc3M9XCJhcHBsZVwiIGlkPVwiYXBwbGVMaXR0bGUyXCIgc3JjPSR7YXBwbGV9PjwvZGl2PmBcclxuICAgIGFkZCArPSBgPGRpdiBjbGFzcz1cImRpdjNcIj48aW1nIGNsYXNzPVwicm91bmRcIiBpZD1cInJvdW5kMlwiIHNyYz0ke3JvdW5kfT48L2Rpdj5gXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm94LW9mLWltZycpLmlubmVySFRNTCA9IGFkZFxyXG4gICAgbGV0IGx2bDYgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlLZXlcIikpO1xyXG4gICAgaWYobHZsNi5sdmw2ID09PSB0cnVlKXtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNraW5nJykpLnN0eWxlLmNvbG9yID0gXCJncmVlblwiXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNraW5nJykpLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkTWFpblN0eWxlKCl7IFxyXG4gICAgICAgIC8qIHRpbWVyTGl0dGxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHBsZUxpdHRsZTEnKSkgKi9cclxuICAgICAgICB0aW1lclNtYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHBsZUxpdHRsZTEnKSk7XHJcbiAgICAgICAgdGltZXJTbWFsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwbGVMaXR0bGUyJykpO1xyXG5cclxuICAgICAgICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwbGVMaXR0bGUxJ1wiKS5zdHlsZS5oZWlnaHQgPSBcIjYwJVwiXHJcblxyXG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcGxlMVwiKSkuc3R5bGUuaGVpZ2h0ID0gXCI2MCVcIjtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHBsZUxpdHRsZTFcIikpLnN0eWxlLmhlaWdodCA9IFwiNjAlXCI7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm91bmQxXCIpKS5zdHlsZS5oZWlnaHQgPSBcIjYwJVwiO1xyXG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcGxlTGl0dGxlMlwiKSkuc3R5bGUuaGVpZ2h0ID0gXCI2MCVcIjtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb3VuZDJcIikpLnN0eWxlLmhlaWdodCA9IFwiNjAlXCI7XHJcbiAgICB9XHJcbiAgICBhZGRNYWluU3R5bGUoKVxyXG4gICAgbW91c2NvbG9yKCcjYXBwbGUxJywgJyNhcHBsZS10ZXh0MScpXHJcbiAgICBtb3VzY29sb3IoJyNhcHBsZUxpdHRsZTEnLCAnI2FwcGxlLXNtYWxsMScpXHJcbiAgICBtb3VzY29sb3IoJyNyb3VuZDEnLCAnI3BsYXRlLXRleHQxJylcclxuICAgIG1vdXNjb2xvcignI2FwcGxlTGl0dGxlMicsICcjYXBwbGUtc21hbGwyJylcclxuICAgIG1vdXNjb2xvcignI3JvdW5kMicsICcjcGxhdGUtdGV4dDInKVxyXG4vKiAgICAgbW91c2NvbG9yKCcjc3F1YXJlMScsICcjc3F1YXJlLXRleHQxJylcclxuICAgIG1vdXNjb2xvcignI2FwcGxlMicsICcjYXBwbGUtdGV4dDInKVxyXG4gICBtb3VzY29sb3IoJyNyb3VuZDEnLCAnI3JvdW5kLXRleHQxJylcclxuICAgIG1vdXNjb2xvcignI2FwcGxlMScsICcjYXBwbGUtdGV4dDEnKSAqL1xyXG5cclxuXHJcblxyXG59O1xyXG4gICAgIiwiXHJcbmltcG9ydCByb3VuZCBmcm9tICcuLi8uLi9hc3NldHMvcnIuc3ZnJ1xyXG5pbXBvcnQgc3F1YXJlIGZyb20gJy4uLy4uL2Fzc2V0cy9zcXVhcmUuc3ZnJ1xyXG5pbXBvcnQgb3JhbmdlIGZyb20gJy4uLy4uL2Fzc2V0cy9vcmFuZ2UucG5nJ1xyXG5pbXBvcnQgYXBwbGUgZnJvbSAnLi4vLi4vYXNzZXRzL2FwcGwucG5nJ1xyXG5pbXBvcnQgdGltZXJTbWFsbCBmcm9tICcuL3NtYWxsTW92aW5nJ1xyXG5pbXBvcnQgbW91c2NvbG9yIGZyb20gJy4vbW91c2NvbG9yJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrNygpe1xyXG4gICAgbGV0IHRhc2toMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJylcclxuICAgIGxldCBuYXZQYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXRleHQtYmxvY2snKVxyXG4gICAgbGV0IGxlZnRQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWxwLXRleHRhcmVhJylcclxuICAgIGxldCByaWdodFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlbHAtdGV4dGFyZWEtcmlnaHQnKVxyXG4gICAgbGV0IGFkZCA9ICcnXHJcbiAgICBhZGQgKz0gJzxoMj5Db21iaW5lIHRoZSBDbGFzcyBTZWxlY3RvcjwvaDI+J1xyXG4gICAgYWRkICs9ICc8cD48c3Bhbj5BLmNsYXNzTmFtZTwvc3Bhbj48L3A+J1xyXG4gICAgYWRkICs9ICc8cD5Zb3UgY2FuIGNvbWJpbmUgdGhlIGNsYXNzIHNlbGVjdG9yIHdpdGggb3RoZXIgc2VsZWN0b3JzLCBsaWtlIHRoZSB0eXBlIHNlbGVjdG9yLjwvcD4nXHJcbiAgICBhZGQgKz0gJzxoMz5FeGFtcGxlczwvaDM+J1xyXG4gICAgYWRkICs9ICc8cD48c3Bhbj51bC5pbXBvcnRhbnQ8L3NwYW4+c2VsZWN0cyBhbGw8c3Bhbj4mbHQ7dWwgLyZndDwvc3Bhbj5lbGVtZW50cyB0aGF0IGhhdmU8c3Bhbj5jbGFzcz1cImltcG9ydGFudFwiPC9zcGFuPjwvcD4nIFxyXG4gICAgYWRkICs9ICc8aHI+JyAgXHJcbiAgICBhZGQgKz0gJzxwPjxzcGFuPiNiaWcud2lkZTwvc3Bhbj4gc2VsZWN0cyBhbGwgZWxlbWVudHMgd2l0aCA8c3Bhbj4gaWQ9XCJiaWdcIiA8L3NwYW4+IHRoYXQgYWxzbyBoYXZlIDxzcGFuPiBjbGFzcz1cIndpZGVcIjwvc3Bhbj48L3A+JyBcclxuICAgIG5hdlBhbi5pbm5lckhUTUwgPSBhZGRcclxuICAgIHRhc2toMS50ZXh0Q29udGVudCA9IFwiU2VsZWN0IHRoZSBzbWFsbCBvcmFuZ2VzXCJcclxuICAgIGFkZCA9ICcgeydcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICcgLyogU3R5bGVzIHdvdWxkIGdvIGhlcmUuICovJ1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJyB9J1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnIC8qJ1xyXG4gICAgYWRkICs9ICcgVHlwZSBhIG51bWJlciB0byBza2lwIHRvIGEnXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnIGxldmVsLidcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICcgRXgg4oaSIFwiNVwiIGZvciBsZXZlbCA1J1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJyAqLydcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgbGVmdFBhbmVsLmlubmVySFRNTCA9IGFkZCBcclxuICAgIGFkZCA9ICAnPGRpdiBjbGFzcz1cInRhYmxlXCI+PHByZT4mbHQ7ZGl2IGNsYXNzPVwidGFibGVcIiZndDs8L3ByZT4nIFxyXG4gICAgYWRkICs9ICc8ZGl2IGlkPVwidGV4dC1hcHBsZTFcIj48cHJlPiAgJmx0O2FwcGxlIC8mZ3Q8L3ByZT48L2Rpdj4nXHJcbiAgICBhZGQgKz0gJzxkaXYgaWQ9XCJ0ZXh0LWFwcGxlLXNtYWxsXCI+PHByZT4gICZsdDthcHBsZSBjbGFzcz1cInNtYWxsXCIgLyZndDwvcHJlPjwvZGl2PidcclxuICAgIGFkZCArPSAnPGRpdiBpZD1cInRleHQtYmVudG8xXCI+PC9kaXY+J1xyXG4gICAgYWRkICs9ICc8ZGl2IGlkPVwidGV4dC1wbGF0ZTFcIj48L2Rpdj4nXHJcbiAgICBhZGQgKz0gJzxkaXYgaWQ9XCJ0ZXh0LXBsYXRlMlwiPjwvZGl2PidcclxuICAgIGFkZCArPSAnPHByZT4mbHQ7ZGl2IC8mZ3Q7PC9wcmU+PC9kaXY+J1xyXG4gICAgcmlnaHRQYW5lbC5pbm5lckhUTUwgPSBhZGRcclxuICAgIGFkZCA9IFwiPHByZT4gICZsdDtiZW50byZndDwvcHJlPlwiXHJcbiAgICBhZGQgKz0nPGRpdiBpZD1cInRleHQtb3JhbmdlLXNtYWxsMVwiPjxwcmU+ICAgICZsdDtvcmFuZ2UgY2xhc3M9XCJzbWFsbFwiIC8mZ3Q8L3ByZT48L2Rpdj4nXHJcbiAgICBhZGQgKz0gXCI8cHJlPiAgJmx0O2JlbnRvIC8mZ3Q8L3ByZT5cIlxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHQtYmVudG8xJykuaW5uZXJIVE1MID0gYWRkXHJcbiAgICBhZGQgPSAnPHByZT4gICZsdDtwbGF0ZSZndDwvcHJlPidcclxuICAgIGFkZCArPSc8ZGl2IGlkPVwidGV4dC1vcmFuZ2UxXCI+PHByZT4gICAgJmx0O29yYW5nZSAvJmd0PC9wcmU+PC9kaXY+J1xyXG4gICAgYWRkICs9XCI8cHJlPiAgJmx0O3BsYXRlIC8mZ3Q8L3ByZT5cIlxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHQtcGxhdGUxJykuaW5uZXJIVE1MID0gYWRkXHJcbiAgICBhZGQgPSAnPHByZT4gICZsdDtwbGF0ZSZndDwvcHJlPidcclxuICAgIGFkZCArPSc8ZGl2IGlkPVwidGV4dC1vcmFuZ2Utc21hbGwyXCI+PHByZT4gICAgJmx0O29yYW5nZSBjbGFzcz1cInNtYWxsXCIgLyZndDwvcHJlPjwvZGl2PidcclxuICAgIGFkZCArPVwiPHByZT4gICZsdDtwbGF0ZSAvJmd0PC9wcmU+XCJcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0LXBsYXRlMicpLmlubmVySFRNTCA9IGFkZFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlLWJveCcpLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiYm94LW9mLWltZ1wiPjwvZGl2PidcclxuICAgIGFkZCA9ICBgPGRpdiBjbGFzcz1cImRpdjFcIj48aW1nIGlkPVwiYXBwbGUxXCIgc3JjPSR7YXBwbGV9PjwvZGl2PmBcclxuICAgIGFkZCArPSBgPGRpdiBjbGFzcz1cImRpdjJcIj48aW1nIGlkPVwiYXBwbGUyXCIgc3JjPSR7YXBwbGV9PjwvZGl2PmBcclxuICAgIGFkZCArPSBgPGRpdiBjbGFzcz1cImRpdjNcIj48aW1nIGlkPVwic3F1YXJlMVwiIHNyYz0ke3NxdWFyZX0+PGltZyBjbGFzcz1cIm9yYW5nZVwiIGlkPVwib3JhbmdlU21hbGwxXCIgc3JjPSR7b3JhbmdlfT48L2Rpdj5gXHJcbiAgICBhZGQgKz0gYDxkaXYgY2xhc3M9XCJkaXY0XCI+PGltZyBpZD1cInBsYXRlMVwiIHNyYz0ke3JvdW5kfT48aW1nIGNsYXNzPVwib3JhbmdlXCIgaWQ9XCJvcmFuZ2VTbWFsbDJcIiBzcmM9JHtvcmFuZ2V9PjwvZGl2PmBcclxuICAgIGFkZCArPSBgPGRpdiBjbGFzcz1cImRpdjVcIj48aW1nIGlkPVwicGxhdGUyXCIgc3JjPSR7cm91bmR9PjxpbWcgY2xhc3M9XCJvcmFuZ2VcIiBpZD1cIm9yYW5nZVNtYWxsM1wiIHNyYz0ke29yYW5nZX0+PC9kaXY+YFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveC1vZi1pbWcnKS5pbm5lckhUTUwgPSBhZGRcclxuICAgIGxldCBsdmw3ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15S2V5XCIpKTtcclxuICAgIGlmKGx2bDcubHZsNyA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2luZycpKS5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIlxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2luZycpKS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIlxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkTWFpblN0eWxlKCl7IFxyXG4gICAgICAgIHRpbWVyU21hbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29yYW5nZVNtYWxsMScpKTtcclxuICAgICAgICB0aW1lclNtYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcmFuZ2VTbWFsbDMnKSk7XHJcblxyXG5cclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHBsZTFcIikpLnN0eWxlLmhlaWdodCA9IFwiNjAlXCI7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwbGUyXCIpKS5zdHlsZS5oZWlnaHQgPSBcIjMwJVwiO1xyXG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NxdWFyZTFcIikpLnN0eWxlLmhlaWdodCA9IFwiNjAlXCI7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxhdGUxXCIpKS5zdHlsZS5oZWlnaHQgPSBcIjYwJVwiO1xyXG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXRlMlwiKSkuc3R5bGUuaGVpZ2h0ID0gXCI2MCVcIjtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcmFuZ2VTbWFsbDJcIikpLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29yYW5nZVNtYWxsMlwiKSkuc3R5bGUuaGVpZ2h0ID0gXCIzMCVcIjtcclxuICAgIH1cclxuICAgIGFkZE1haW5TdHlsZSgpXHJcbiAgICBtb3VzY29sb3IoJyNhcHBsZTEnLCAnI3RleHQtYXBwbGUxJylcclxuICAgIG1vdXNjb2xvcignI2FwcGxlMicsICcjdGV4dC1hcHBsZS1zbWFsbCcpXHJcbiAgICBtb3VzY29sb3IoJyNzcXVhcmUxJywgJyN0ZXh0LWJlbnRvMScpXHJcbiAgICBtb3VzY29sb3IoJyNvcmFuZ2VTbWFsbDEnLCAnI3RleHQtb3JhbmdlLXNtYWxsMScpXHJcbiAgICBtb3VzY29sb3IoJyNwbGF0ZTEnLCAnI3RleHQtcGxhdGUxJylcclxuICAgIG1vdXNjb2xvcignI29yYW5nZVNtYWxsMicsICcjdGV4dC1vcmFuZ2UxJylcclxuICAgIG1vdXNjb2xvcignI3BsYXRlMicsICcjdGV4dC1wbGF0ZTInKVxyXG4gICAgbW91c2NvbG9yKCcjb3JhbmdlU21hbGwzJywgJyN0ZXh0LW9yYW5nZS1zbWFsbDInKVxyXG5cclxufTsiLCJcclxuaW1wb3J0IHNxdWFyZSBmcm9tICcuLi8uLi9hc3NldHMvc3F1YXJlLnN2ZydcclxuaW1wb3J0IG9yYW5nZSBmcm9tICcuLi8uLi9hc3NldHMvb3JhbmdlLnBuZydcclxuaW1wb3J0IGFwcGxlIGZyb20gJy4uLy4uL2Fzc2V0cy9hcHBsLnBuZydcclxuaW1wb3J0IHRpbWVyU21hbGwgZnJvbSAnLi9zbWFsbE1vdmluZydcclxuaW1wb3J0IG1vdXNjb2xvciBmcm9tICcuL21vdXNjb2xvcidcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFzazcoKXtcclxuICAgIGxldCB0YXNraDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpXHJcbiAgICBsZXQgbmF2UGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi10ZXh0LWJsb2NrJylcclxuICAgIGxldCBsZWZ0UGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVscC10ZXh0YXJlYScpXHJcbiAgICBsZXQgcmlnaHRQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWxwLXRleHRhcmVhLXJpZ2h0JylcclxuICAgIGxldCBhZGQgPSAnJ1xyXG4gICAgYWRkICs9ICc8aDI+WW91IGNhbiBkbyBpdC4uLjwvaDI+J1xyXG4gICAgYWRkICs9ICc8cD48c3Bhbj5QdXQgeW91ciBiYWNrIGludG8gaXQhPC9zcGFuPjwvcD4nXHJcbiAgICBhZGQgKz0gJzxocj4nICBcclxuICAgIGFkZCArPSAnPHA+Q29tYmluZSB3aGF0IHlvdSBsZWFybmVkIGluIHRoZSBsYXN0IGZldyBsZXZlbHMgdG8gc29sdmUgdGhpcyBvbmUhPC9wPicgXHJcbiAgICBuYXZQYW4uaW5uZXJIVE1MID0gYWRkXHJcbiAgICBhZGQgPSAnIHsnXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnIC8qIFN0eWxlcyB3b3VsZCBnbyBoZXJlLiAqLydcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICcgfSdcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJyAvKidcclxuICAgIGFkZCArPSAnIFR5cGUgYSBudW1iZXIgdG8gc2tpcCB0byBhJ1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJyBsZXZlbC4nXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnIEV4IOKGkiBcIjVcIiBmb3IgbGV2ZWwgNSdcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICcgKi8nXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGxlZnRQYW5lbC5pbm5lckhUTUwgPSBhZGQgXHJcbiAgICBhZGQgPSAgJzxkaXYgY2xhc3M9XCJ0YWJsZVwiPjxwcmU+Jmx0O2RpdiBjbGFzcz1cInRhYmxlXCImZ3Q7PC9wcmU+JyBcclxuICAgIGFkZCArPSAnPGRpdiBpZD1cInRleHQtYmVudG8xXCI+PC9kaXY+J1xyXG4gICAgYWRkICs9ICc8ZGl2IGlkPVwidGV4dC1vcmFuZ2UxXCI+PHByZT4gICZsdDtvcmFuZ2UgY2xhc3M9XCJzbWFsbFwiIC8mZ3Q8L3ByZT48L2Rpdj4nXHJcbiAgICBhZGQgKz0gJzxkaXYgaWQ9XCJ0ZXh0LWJlbnRvMlwiPjwvZGl2PidcclxuICAgIGFkZCArPSAnPGRpdiBpZD1cInRleHQtYmVudG8zXCI+PC9kaXY+J1xyXG4gICAgYWRkICs9ICc8ZGl2IGlkPVwidGV4dC1iZW50bzRcIj48L2Rpdj4nXHJcbiAgICBhZGQgKz0gJzxwcmU+Jmx0O2RpdiAvJmd0OzwvcHJlPjwvZGl2PidcclxuICAgIHJpZ2h0UGFuZWwuaW5uZXJIVE1MID0gYWRkXHJcbiAgICB0YXNraDEudGV4dENvbnRlbnQgPSBcIlNlbGVjdCB0aGUgc21hbGwgb3JhbmdlcyBpbiB0aGUgYmVudG9zXCJcclxuICAgIGFkZCA9IFwiPHByZT4gICZsdDtiZW50byZndDwvcHJlPlwiXHJcbiAgICBhZGQgKz0nPGRpdiBpZD1cInRleHQtb3JhbmdlLWJpZzFcIj48cHJlPiAgICAmbHQ7b3JhbmdlIC8mZ3Q8L3ByZT48L2Rpdj4nXHJcbiAgICBhZGQgKz0gXCI8cHJlPiAgJmx0O2JlbnRvIC8mZ3Q8L3ByZT5cIlxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHQtYmVudG8xJykuaW5uZXJIVE1MID0gYWRkXHJcbiAgICBhZGQgPSAnPHByZT4gICZsdDtiZW50byZndDwvcHJlPidcclxuICAgIGFkZCArPSc8ZGl2IGlkPVwidGV4dC1vcmFuZ2UyXCI+PHByZT4gICAgJmx0O29yYW5nZSBjbGFzcz1cInNtYWxsXCIgLyZndDwvcHJlPjwvZGl2PidcclxuICAgIGFkZCArPVwiPHByZT4gICZsdDtiZW50byAvJmd0PC9wcmU+XCJcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0LWJlbnRvMicpLmlubmVySFRNTCA9IGFkZFxyXG4gICAgYWRkID0gJzxwcmU+ICAmbHQ7YmVudG8mZ3Q8L3ByZT4nXHJcbiAgICBhZGQgKz0nPGRpdiBpZD1cInRleHQtYXBwbGUxXCI+PHByZT4gICAgJmx0O2FwcGxlIGNsYXNzPVwic21hbGxcIiAvJmd0PC9wcmU+PC9kaXY+J1xyXG4gICAgYWRkICs9XCI8cHJlPiAgJmx0O2JlbnRvIC8mZ3Q8L3ByZT5cIlxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHQtYmVudG8zJykuaW5uZXJIVE1MID0gYWRkXHJcbiAgICBhZGQgPSBcIjxwcmU+ICAmbHQ7YmVudG8mZ3Q8L3ByZT5cIlxyXG4gICAgYWRkICs9JzxkaXYgaWQ9XCJ0ZXh0LW9yYW5nZTNcIj48cHJlPiAgICAmbHQ7b3JhbmdlIGNsYXNzPVwic21hbGxcIiAvJmd0PC9wcmU+PC9kaXY+J1xyXG4gICAgYWRkICs9IFwiPHByZT4gICZsdDtiZW50byAvJmd0PC9wcmU+XCJcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0LWJlbnRvNCcpLmlubmVySFRNTCA9IGFkZFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlLWJveCcpLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiYm94LW9mLWltZ1wiPjwvZGl2PidcclxuICAgIGFkZCA9ICBgPGRpdiBjbGFzcz1cImRpdjFcIj48aW1nIGlkPVwic3F1YXJlMVwiIHNyYz0ke3NxdWFyZX0+PGltZyBpZD1cIm9yYW5nZUJpZ1wiIHNyYz0ke29yYW5nZX0+PC9kaXY+YFxyXG4gICAgYWRkICs9IGA8ZGl2IGNsYXNzPVwiZGl2MlwiPjxpbWcgaWQ9XCJvcmFuZ2UxXCIgc3JjPSR7b3JhbmdlfT48L2Rpdj5gXHJcbiAgICBhZGQgKz0gYDxkaXYgY2xhc3M9XCJkaXYzXCI+PGltZyBpZD1cInNxdWFyZTJcIiBzcmM9JHtzcXVhcmV9PjxpbWcgaWQ9XCJvcmFuZ2UyXCIgc3JjPSR7b3JhbmdlfT48L2Rpdj5gXHJcbiAgICBhZGQgKz0gYDxkaXYgY2xhc3M9XCJkaXY0XCI+PGltZyBpZD1cInNxdWFyZTNcIiBzcmM9JHtzcXVhcmV9PjxpbWcgaWQ9XCJhcHBsZTFcIiBzcmM9JHthcHBsZX0+PC9kaXY+YFxyXG4gICAgYWRkICs9IGA8ZGl2IGNsYXNzPVwiZGl2NVwiPjxpbWcgaWQ9XCJzcXVhcmU0XCIgc3JjPSR7c3F1YXJlfT48aW1nIGlkPVwib3JhbmdlM1wiIHNyYz0ke29yYW5nZX0+PC9kaXY+YFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveC1vZi1pbWcnKS5pbm5lckhUTUwgPSBhZGRcclxuICAgIGxldCBsdmw4ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15S2V5XCIpKTtcclxuICAgIGlmKGx2bDgubHZsOCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2luZycpKS5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tpbmcnKSkuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRNYWluU3R5bGUoKXsgXHJcbiAgICAgICAgdGltZXJTbWFsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3JhbmdlMicpKTtcclxuICAgICAgICB0aW1lclNtYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcmFuZ2UzJykpO1xyXG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NxdWFyZTFcIikpLnN0eWxlLmhlaWdodCA9IFwiNjAlXCI7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JhbmdlQmlnXCIpKS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcmFuZ2VCaWdcIikpLnN0eWxlLmhlaWdodCA9IFwiNDUlXCI7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3JhbmdlMVwiKSkuc3R5bGUuaGVpZ2h0ID0gXCIzMCVcIjtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzcXVhcmUyXCIpKS5zdHlsZS5oZWlnaHQgPSBcIjYwJVwiO1xyXG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NxdWFyZTNcIikpLnN0eWxlLmhlaWdodCA9IFwiNjAlXCI7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwbGUxXCIpKS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHBsZTFcIikpLnN0eWxlLmxlZnQgPSBcIjM1JVwiIDtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHBsZTFcIikpLnN0eWxlLmhlaWdodCA9IFwiMzAlXCI7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3F1YXJlNFwiKSkuc3R5bGUuaGVpZ2h0ID0gXCI2MCVcIjtcclxuXHJcbiAgICB9XHJcbiAgICBhZGRNYWluU3R5bGUoKVxyXG4gICAgbW91c2NvbG9yKCcjc3F1YXJlMScsICcjdGV4dC1iZW50bzEnKVxyXG4gICAgbW91c2NvbG9yKCcjb3JhbmdlQmlnJywgJyN0ZXh0LW9yYW5nZS1iaWcxJylcclxuICAgIG1vdXNjb2xvcignI29yYW5nZTEnLCAnI3RleHQtb3JhbmdlMScpXHJcbiAgICBtb3VzY29sb3IoJyNzcXVhcmUyJywgJyN0ZXh0LWJlbnRvMicpXHJcbiAgICBtb3VzY29sb3IoJyNvcmFuZ2UyJywgJyN0ZXh0LW9yYW5nZTInKVxyXG4gICAgbW91c2NvbG9yKCcjc3F1YXJlMycsICcjdGV4dC1iZW50bzMnKVxyXG4gICAgbW91c2NvbG9yKCcjYXBwbGUxJywgJyN0ZXh0LWFwcGxlMScpXHJcbiAgICBtb3VzY29sb3IoJyNzcXVhcmU0JywgJyN0ZXh0LWJlbnRvNCcpXHJcbiAgICBtb3VzY29sb3IoJyNvcmFuZ2UzJywgJyN0ZXh0LW9yYW5nZTMnKVxyXG5cclxufTsiLCJcclxuaW1wb3J0IHJvdW5kIGZyb20gJy4uLy4uL2Fzc2V0cy9yci5zdmcnXHJcbmltcG9ydCBzcXVhcmUgZnJvbSAnLi4vLi4vYXNzZXRzL3NxdWFyZS5zdmcnXHJcbmltcG9ydCB0aW1lckxpdHRsZSBmcm9tICcuL2xpdHRsZU1vdmluZydcclxuaW1wb3J0IHBpY2tsZSBmcm9tICcuLi8uLi9hc3NldHMvcGlja2xlLnBuZydcclxuaW1wb3J0IHRpbWVyU21hbGwgZnJvbSAnLi9zbWFsbE1vdmluZydcclxuaW1wb3J0IG1vdXNjb2xvciBmcm9tICcuL21vdXNjb2xvcidcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFzazkoKXtcclxuICAgIGxldCB0YXNraDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpXHJcbiAgICBsZXQgbmF2UGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi10ZXh0LWJsb2NrJylcclxuICAgIGxldCBsZWZ0UGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVscC10ZXh0YXJlYScpXHJcbiAgICBsZXQgcmlnaHRQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWxwLXRleHRhcmVhLXJpZ2h0JylcclxuICAgIGxldCBhZGQgPSAnJ1xyXG4gICAgYWRkICs9ICc8aDI+Q29tbWEgQ29tYmluYXRvcjwvaDI+J1xyXG4gICAgYWRkICs9ICc8cD5Db21iaW5lLCBzZWxlY3RvcnMsIHdpdGguLi4gY29tbWFzITwvcD4nXHJcbiAgICBhZGQgKz0gJzxwPjxzcGFuPkEsIEI8L3NwYW4+J1xyXG4gICAgYWRkICs9ICc8cD5UaGFua3MgdG8gU2hhdG5lciB0ZWNobm9sb2d5LCB0aGlzIHNlbGVjdHMgYWxsIDxzcGFuPkE8L3NwYW4+YW5kPHNwYW4+Qjwvc3Bhbj5lbGVtZW50cy4gWW91IGNhbiBjb21iaW5lIGFueSBzZWxlY3RvcnMgdGhpcyB3YXksIGFuZCB5b3UgY2FuIHNwZWNpZnkgbW9yZSB0aGFuIHR3by48L3A+J1xyXG4gICAgYWRkICs9ICc8aDM+RXhhbXBsZXM8L2gzPidcclxuICAgIGFkZCArPSAnPHA+PHNwYW4+cCwgLmZ1bjwvc3Bhbj4gc2VsZWN0cyBhbGwgPHNwYW4+Jmx0O3AmZ3Q8L3NwYW4+IGVsZW1lbnRzIGFzIHdlbGwgYXMgYWxsIGVsZW1lbnRzIHdpdGggPHNwYW4+Y2xhc3M9XCJmdW5cIjwvc3Bhbj48L3A+JyAgIFxyXG4gICAgYWRkICs9ICc8aHI+J1xyXG4gICAgYWRkICs9ICc8cD48c3Bhbj5hLCBwLCBkaXY8L3NwYW4+IHNlbGVjdHMgYWxsIDxzcGFuPiZsdDthJmd0LCAmbHQ7cCZndDwvc3Bhbj4gYW5kIDxzcGFuPiZsdDtkaXYmZ3Q8L3NwYW4+ZWxlbWVudHM8L3A+JyBcclxuICAgIG5hdlBhbi5pbm5lckhUTUwgPSBhZGRcclxuICAgIHRhc2toMS50ZXh0Q29udGVudCA9IFwiU2VsZWN0IGFsbCB0aGUgcGxhdGVzIGFuZCBiZW50b3NcIlxyXG4gICAgYWRkID0gJyB7J1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJyAvKiBTdHlsZXMgd291bGQgZ28gaGVyZS4gKi8nXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnIH0nXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICcgLyonXHJcbiAgICBhZGQgKz0gJyBUeXBlIGEgbnVtYmVyIHRvIHNraXAgdG8gYSdcclxuICAgIGFkZCArPSAnXFxuJ1xyXG4gICAgYWRkICs9ICcgbGV2ZWwuJ1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBhZGQgKz0gJyBFeCDihpIgXCI1XCIgZm9yIGxldmVsIDUnXHJcbiAgICBhZGQgKz0gJ1xcbidcclxuICAgIGFkZCArPSAnICovJ1xyXG4gICAgYWRkICs9ICdcXG4nXHJcbiAgICBsZWZ0UGFuZWwuaW5uZXJIVE1MID0gYWRkIFxyXG4gICAgYWRkID0gICc8ZGl2IGNsYXNzPVwidGFibGVcIj48cHJlPiZsdDtkaXYgY2xhc3M9XCJ0YWJsZVwiJmd0OzwvcHJlPicgXHJcbiAgICBhZGQgKz0gJzxkaXYgY2xhc3M9XCJzbWFsbFwiIGlkPVwicGljazFcIj48cHJlPiAgJmx0O3BpY2tsZSBjbGFzcz1cInNtYWxsXCIgLyZndDs8L3ByZT48L2Rpdj4nXHJcbiAgICBhZGQgKz0gJzxkaXYgaWQ9XCJwaWNrMlwiPjxwcmU+ICAmbHQ7cGlja2xlJmd0OzwvcHJlPjwvZGl2PidcclxuICAgIGFkZCArPSAnPGRpdiBjbGFzcz1cInBsYXRlXCIgaWQ9XCJwbGF0ZTFcIj48L2Rpdj4nXHJcbiAgICBhZGQgKz0gJzxkaXYgY2xhc3M9XCJiZW50b1wiIGlkPVwiYmVudG8xXCI+PC9kaXY+J1xyXG4gICAgYWRkICs9ICc8ZGl2IGNsYXNzPVwicGxhdGVcIiBpZD1cInBsYXRlMlwiPjwvZGl2PicgICBcclxuICAgIGFkZCArPSAnPGRpdiBjbGFzcz1cInRleHQtcGlja2xlXCIgaWQ9XCJwaWNrNlwiPjxwcmU+ICAmbHQ7cGlja2xlIC8mZ3Q7PC9wcmU+PC9kaXY+J1xyXG4gICAgYWRkICs9ICc8ZGl2IGNsYXNzPVwic21hbGxcIiBpZD1cInBpY2s3XCI+PHByZT4gICZsdDtwaWNrbGUgY2xhc3M9XCJzbWFsbFwiIC8mZ3Q7PC9wcmU+PC9kaXY+J1xyXG4gICAgYWRkICs9ICc8cHJlPiZsdDtkaXYgLyZndDs8L3ByZT48L2Rpdj4nXHJcbiAgICByaWdodFBhbmVsLmlubmVySFRNTCA9IGFkZFxyXG4gICAgYWRkID0gXCI8cHJlPiAgJmx0O3BsYXRlJmd0PC9wcmU+XCJcclxuICAgIGFkZCArPSc8ZGl2IGlkPVwicGljazNcIj48cHJlPiAgICAmbHQ7cGlja2xlIC8mZ3Q8L3ByZT48L2Rpdj4nXHJcbiAgICBhZGQgKz0gXCI8cHJlPiAgJmx0O3BsYXRlIC8mZ3Q8L3ByZT5cIlxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXRlMScpLmlubmVySFRNTCA9IGFkZFxyXG4gICAgYWRkID0gJzxwcmU+ICAmbHQ7YmVudG8mZ3Q8L3ByZT4nXHJcbiAgICBhZGQgKz0nPGRpdiBpZD1cInBpY2s0XCI+PHByZT4gICAgJmx0O3BpY2tsZSAvJmd0PC9wcmU+PC9kaXY+J1xyXG4gICAgYWRkICs9XCI8cHJlPiAgJmx0O2JlbnRvIC8mZ3Q8L3ByZT5cIlxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JlbnRvMScpLmlubmVySFRNTCA9IGFkZFxyXG4gICAgYWRkID0gJzxwcmU+ICAmbHQ7cGxhdGUmZ3Q8L3ByZT4nXHJcbiAgICBhZGQgKz0nPGRpdiBpZD1cInBpY2s1XCI+PHByZT4gICAgJmx0O3BpY2tsZSAvXCImZ3Q8L3ByZT48L2Rpdj4nXHJcbiAgICBhZGQgKz1cIjxwcmU+ICAmbHQ7L3BsYXRlJmd0PC9wcmU+XCJcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF0ZTInKS5pbm5lckhUTUwgPSBhZGRcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZS1ib3gnKS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImJveC1vZi1pbWdcIj48L2Rpdj4nXHJcbiAgICBhZGQgPSAgYDxkaXYgY2xhc3M9XCJkaXYxXCI+PGltZyBpZD1cInBpY2tTbWFsMVwiIHNyYz0ke3BpY2tsZX0+PC9kaXY+YFxyXG4gICAgYWRkICs9IGA8ZGl2IGNsYXNzPVwiZGl2MlwiPjxpbWcgaWQ9XCJwaWNrQmlnMVwiIHNyYz0ke3BpY2tsZX0+PC9kaXY+YFxyXG4gICAgYWRkICs9IGA8ZGl2IGNsYXNzPVwiZGl2M1wiPjxpbWcgaWQ9XCJyb3VuZDFcIiBzcmM9JHtyb3VuZH0+PGltZyBpZD1cInBpY2tCaWcyXCIgc3JjPSR7cGlja2xlfT48L2Rpdj5gXHJcbiAgICBhZGQgKz0gYDxkaXYgY2xhc3M9XCJkaXY0XCI+PGltZyBpZD1cInNxdWFyZTFcIiBzcmM9JHtzcXVhcmV9PjxpbWcgaWQ9XCJwaWNrQmlnM1wiIHNyYz0ke3BpY2tsZX0+PC9kaXY+YFxyXG4gICAgYWRkICs9IGA8ZGl2IGNsYXNzPVwiZGl2NVwiPjxpbWcgaWQ9XCJyb3VuZDJcIiBzcmM9JHtyb3VuZH0+PGltZyBpZD1cInBpY2tCaWc0XCIgc3JjPSR7cGlja2xlfT48L2Rpdj5gXHJcbiAgICBhZGQgKz0gYDxkaXYgY2xhc3M9XCJkaXY2XCI+PGltZyBpZD1cInBpY2tCaWc1XCIgc3JjPSR7cGlja2xlfT48L2Rpdj5gXHJcbiAgICBhZGQgKz0gYDxkaXYgY2xhc3M9XCJkaXY3XCI+PGltZyBpZD1cInBpY2tTbWFsMlwiIHNyYz0ke3BpY2tsZX0+PC9kaXY+YFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveC1vZi1pbWcnKS5pbm5lckhUTUwgPSBhZGRcclxuICAgIGxldCBsdmw5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15S2V5XCIpKTtcclxuICAgIGlmKGx2bDkubHZsOSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2luZycpKS5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIlxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2luZycpKS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIlxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkTWFpblN0eWxlKCl7IFxyXG4gICAgICAgIHRpbWVyU21hbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BpY2tCaWcyJykpO1xyXG4gICAgICAgIHRpbWVyU21hbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BpY2tCaWczJykpO1xyXG4gICAgICAgIHRpbWVyU21hbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BpY2tCaWc0JykpO1xyXG4gICAgICAgIHRpbWVyTGl0dGxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3VuZDEnKSk7XHJcbiAgICAgICAgdGltZXJMaXR0bGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NxdWFyZTEnKSk7XHJcbiAgICAgICAgdGltZXJMaXR0bGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JvdW5kMicpKTtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXYxXCIpKS5zdHlsZS5tYXJnaW5SaWdodCAgPSBcIjVweFwiO1xyXG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BpY2tTbWFsMVwiKSkuc3R5bGUuaGVpZ2h0ID0gXCIxNSVcIjtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaWNrQmlnMVwiKSkuc3R5bGUuaGVpZ2h0ID0gXCIyNSVcIjtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaWNrQmlnNVwiKSkuc3R5bGUuaGVpZ2h0ID0gXCIyNSVcIjtcclxuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaWNrU21hbDJcIikpLnN0eWxlLmhlaWdodCA9IFwiMTUlXCI7XHJcblxyXG4gICAgfVxyXG4gICAgYWRkTWFpblN0eWxlKClcclxuICAgIG1vdXNjb2xvcignI3BpY2tTbWFsMScsICcjcGljazEnKVxyXG4gICAgbW91c2NvbG9yKCcjcGlja0JpZzEnLCAnI3BpY2syJylcclxuICAgIG1vdXNjb2xvcignI3JvdW5kMScsICcjcGxhdGUxJylcclxuICAgIG1vdXNjb2xvcignI3BpY2tCaWcyJywgJyNwaWNrMycpXHJcbiAgICBtb3VzY29sb3IoJyNzcXVhcmUxJywgJyNiZW50bzEnKVxyXG4gICAgbW91c2NvbG9yKCcjcGlja0JpZzMnLCAnI3BpY2s0JylcclxuICAgIG1vdXNjb2xvcignI3JvdW5kMicsICcjcGxhdGUyJylcclxuICAgIG1vdXNjb2xvcignI3BpY2tCaWc0JywgJyNwaWNrNScpXHJcbiAgICBtb3VzY29sb3IoJyNwaWNrQmlnNScsICcjcGljazYnKVxyXG4gICAgbW91c2NvbG9yKCcjcGlja1NtYWwyJywgJyNwaWNrNycpXHJcblxyXG59OyIsImltcG9ydCAnLi9iYXNlanMvbGluZS1udW1iZXInXHJcbmltcG9ydCAnLi9iYXNlanMvc2VsZWN0J1xyXG5pbXBvcnQgJy4vYmFzZWpzL2J1dHRvbnMtbGVmdC1yaWdodCdcclxuaW1wb3J0ICcuL2Jhc2Vqcy90YXNrMSdcclxuaW1wb3J0ICcuL2Jhc2Vqcy90YXNrMidcclxuaW1wb3J0ICcuL2Jhc2Vqcy9mb3JtJ1xyXG5pbXBvcnQgJy4vYmFzZWpzL21vdXNjb2xvcidcclxuaW1wb3J0ICcuL2Jhc2Vqcy9zbWFsbE1vdmluZydcclxuaW1wb3J0ICcuL2Jhc2Vqcy9tb2RhbCdcclxuaW1wb3J0ICAnLi9iYXNlanMvYi1oZWxwJ1xyXG5pbXBvcnQgJy4vYmFzZWpzL3Jlc2V0J1xyXG5pbXBvcnQgJy4vYmFzZWpzL3Jlc2V0MiciLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zYXNzL21haW4uc2NzcydcclxuaW1wb3J0ICcuL2pzL21haW4uanMnXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==