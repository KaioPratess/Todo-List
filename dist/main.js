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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/inbox-svgrepo-com.svg */ "./src/img/inbox-svgrepo-com.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/calendar-svgrepo-com.svg */ "./src/img/calendar-svgrepo-com.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/plus-svgrepo-com.svg */ "./src/img/plus-svgrepo-com.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* General */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  color: white;\r\n} \r\n\r\nbody {\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.page-structure {\r\n  display: grid;\r\n  grid-template-columns: 300px 4fr;\r\n  grid-template-areas: \r\n  \"header header\"\r\n  \"sidebar main\"\r\n  \"sidebar main\";\r\n  height: 100%;\r\n}\r\n\r\nsvg:not(.logo) {\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\nsvg {\r\n  fill: white;\r\n}\r\n\r\n/* Header */\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #0B0909;\r\n  height: 81px;\r\n  padding: 0 30px;\r\n  grid-area: header;\r\n}\r\n\r\n.logo {\r\n  margin-left: 7px;\r\n}\r\n\r\n.header ul {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n/* Sidebar */\r\n.sidebar {\r\n  height: calc(100vh - 81px);\r\n  grid-area: sidebar;\r\n  background-color: #0E0E0E;\r\n}\r\n\r\n/* Inbox */\r\n.inbox {\r\n  padding: 20px 0 30px 48px;\r\n  height: 156px;\r\n}\r\n\r\n.inbox-title {\r\n  font-size: 3rem;\r\n  position: relative;\r\n}\r\n\r\n.inbox-title::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 10px;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\n.nav ul {\r\n  display: grid;\r\n  gap: 20px;\r\n}\r\n\r\n.nav ul li {\r\n  font-size: 1.125rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav ul li:nth-child(1)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n.nav ul li:nth-child(2)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n.nav ul li:nth-child(3)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n.nav ul li::before {\r\n  width: 25px;\r\n  height: 25px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* Projects */\r\n.projects {\r\n  padding: 20px 0 0 48px;\r\n}\r\n\r\n.projects h2 {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.add-project {\r\n  font-size: 0.875rem;\r\n  cursor: pointer;\r\n  letter-spacing: 1px;\r\n  margin-top: 25px;\r\n}\r\n\r\n.add-project::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  width: 15px;\r\n  height: 15px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* Main */\r\n.main {\r\n  grid-area: main;\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.head-sec {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10px 70px;\r\n  background-color: #121212;\r\n}\r\n\r\n.date {\r\n  text-align: center;\r\n}\r\n\r\n.date p {\r\n  font-size: 3rem;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.list-view {\r\n  padding: 30px 55px;\r\n  height: calc(100vh - 180px);\r\n  overflow: auto;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  cursor: pointer;\r\n  align-items: center;\r\n  padding: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.task-title {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  position: relative;\r\n}\r\n\r\n.checkbox {\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.checkbox + label {\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.checkbox + label::before {\r\n  content: '';\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: 3px;\r\n}\r\n\r\n.checkbox:checked + label::before {\r\n  content: 'ok';\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 4px;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.task:hover {\r\n  background-color: #121212;\r\n}\r\n\r\n.priority-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.priority-icon.low {\r\n  border: 2.5px solid yellow;\r\n}\r\n\r\n.priority-icon.moderate {\r\n  border: 2.5px solid orange;\r\n}\r\n\r\n.priority-icon.high {\r\n  border: 2.5px solid red;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n/* Add container */\r\n.add-creator-bg {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgba(0,0,0,.6);\r\n}\r\n\r\n.add-creator-container {\r\n  width: 810px;\r\n  height: 126px;\r\n  background-color: #121212;\r\n  border-radius: 12px;\r\n  box-shadow:1px 1px 1px rgba(0, 0, 0, .4);\r\n}\r\n\r\n.creator-input {\r\n  width: 94%;\r\n  height: 34px;\r\n  justify-self: center;\r\n  margin: 20px 25px;\r\n  outline: none;\r\n  border-radius: 12px;\r\n  color: black;\r\n  padding: 0 10px;\r\n  border: none;\r\n}\r\n\r\n.creator-properties {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n.creator-prop-input {\r\n  width: 234px;\r\n  height: 34px;\r\n  border-radius: 12px;\r\n  background-color: #fff;\r\n  margin-left: 25px;\r\n  color: black;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon {\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn {\r\n  color: black;\r\n  padding: 8px 16px;\r\n  white-space: nowrap;\r\n  border-radius: 12px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn.cancel {\r\n  margin-left: 30px;\r\n}\r\n\r\n.btn.cancel.proj {\r\n  margin-left: 75px;\r\n}\r\n\r\n.priority-select, .notes, .desc, .dateInput, .time, .projects-select {\r\n  width: 100%;\r\n  height: 34px;\r\n  border-radius: 12px;\r\n  background-color: #fff;\r\n  color: black;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.priority-select option, .projects-select option {\r\n  color: black;\r\n}\r\n\r\n.notes, .desc, .dateInput, .time {\r\n  padding: 10px;\r\n  resize: none;\r\n}\r\n\r\n/* project container */\r\n.project {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 200px;\r\n  padding: 10px;\r\n  margin: 15px 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.project-h1 {\r\n  font-size: 3rem;\r\n}\r\n\r\n.project:hover {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* General */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  color: white;\r\n} \r\n\r\nbody {\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.page-structure {\r\n  display: grid;\r\n  grid-template-columns: 300px 4fr;\r\n  grid-template-areas: \r\n  \"header header\"\r\n  \"sidebar main\"\r\n  \"sidebar main\";\r\n  height: 100%;\r\n}\r\n\r\nsvg:not(.logo) {\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\nsvg {\r\n  fill: white;\r\n}\r\n\r\n/* Header */\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #0B0909;\r\n  height: 81px;\r\n  padding: 0 30px;\r\n  grid-area: header;\r\n}\r\n\r\n.logo {\r\n  margin-left: 7px;\r\n}\r\n\r\n.header ul {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n/* Sidebar */\r\n.sidebar {\r\n  height: calc(100vh - 81px);\r\n  grid-area: sidebar;\r\n  background-color: #0E0E0E;\r\n}\r\n\r\n/* Inbox */\r\n.inbox {\r\n  padding: 20px 0 30px 48px;\r\n  height: 156px;\r\n}\r\n\r\n.inbox-title {\r\n  font-size: 3rem;\r\n  position: relative;\r\n}\r\n\r\n.inbox-title::before {\r\n  content: url(\"./img/inbox-svgrepo-com.svg\");\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 10px;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\n.nav ul {\r\n  display: grid;\r\n  gap: 20px;\r\n}\r\n\r\n.nav ul li {\r\n  font-size: 1.125rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav ul li:nth-child(1)::before {\r\n  content: url(\"./img/inbox-svgrepo-com.svg\");\r\n}\r\n\r\n.nav ul li:nth-child(2)::before {\r\n  content: url(\"./img/calendar-svgrepo-com.svg\");\r\n}\r\n\r\n.nav ul li:nth-child(3)::before {\r\n  content: url(\"./img/calendar-svgrepo-com.svg\");\r\n}\r\n\r\n.nav ul li::before {\r\n  width: 25px;\r\n  height: 25px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* Projects */\r\n.projects {\r\n  padding: 20px 0 0 48px;\r\n}\r\n\r\n.projects h2 {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.add-project {\r\n  font-size: 0.875rem;\r\n  cursor: pointer;\r\n  letter-spacing: 1px;\r\n  margin-top: 25px;\r\n}\r\n\r\n.add-project::before {\r\n  content: url('./img/plus-svgrepo-com.svg');\r\n  width: 15px;\r\n  height: 15px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* Main */\r\n.main {\r\n  grid-area: main;\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.head-sec {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10px 70px;\r\n  background-color: #121212;\r\n}\r\n\r\n.date {\r\n  text-align: center;\r\n}\r\n\r\n.date p {\r\n  font-size: 3rem;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.list-view {\r\n  padding: 30px 55px;\r\n  height: calc(100vh - 180px);\r\n  overflow: auto;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  cursor: pointer;\r\n  align-items: center;\r\n  padding: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.task-title {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  position: relative;\r\n}\r\n\r\n.checkbox {\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.checkbox + label {\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.checkbox + label::before {\r\n  content: '';\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: 3px;\r\n}\r\n\r\n.checkbox:checked + label::before {\r\n  content: 'ok';\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 4px;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.task:hover {\r\n  background-color: #121212;\r\n}\r\n\r\n.priority-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.priority-icon.low {\r\n  border: 2.5px solid yellow;\r\n}\r\n\r\n.priority-icon.moderate {\r\n  border: 2.5px solid orange;\r\n}\r\n\r\n.priority-icon.high {\r\n  border: 2.5px solid red;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n/* Add container */\r\n.add-creator-bg {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgba(0,0,0,.6);\r\n}\r\n\r\n.add-creator-container {\r\n  width: 810px;\r\n  height: 126px;\r\n  background-color: #121212;\r\n  border-radius: 12px;\r\n  box-shadow:1px 1px 1px rgba(0, 0, 0, .4);\r\n}\r\n\r\n.creator-input {\r\n  width: 94%;\r\n  height: 34px;\r\n  justify-self: center;\r\n  margin: 20px 25px;\r\n  outline: none;\r\n  border-radius: 12px;\r\n  color: black;\r\n  padding: 0 10px;\r\n  border: none;\r\n}\r\n\r\n.creator-properties {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n.creator-prop-input {\r\n  width: 234px;\r\n  height: 34px;\r\n  border-radius: 12px;\r\n  background-color: #fff;\r\n  margin-left: 25px;\r\n  color: black;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon {\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn {\r\n  color: black;\r\n  padding: 8px 16px;\r\n  white-space: nowrap;\r\n  border-radius: 12px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn.cancel {\r\n  margin-left: 30px;\r\n}\r\n\r\n.btn.cancel.proj {\r\n  margin-left: 75px;\r\n}\r\n\r\n.priority-select, .notes, .desc, .dateInput, .time, .projects-select {\r\n  width: 100%;\r\n  height: 34px;\r\n  border-radius: 12px;\r\n  background-color: #fff;\r\n  color: black;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.priority-select option, .projects-select option {\r\n  color: black;\r\n}\r\n\r\n.notes, .desc, .dateInput, .time {\r\n  padding: 10px;\r\n  resize: none;\r\n}\r\n\r\n/* project container */\r\n.project {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 200px;\r\n  padding: 10px;\r\n  margin: 15px 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.project-h1 {\r\n  font-size: 3rem;\r\n}\r\n\r\n.project:hover {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/appHandler.js":
/*!***************************!*\
  !*** ./src/appHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _pubSub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubSub.js */ "./src/pubSub.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");





const appHandler = (function() {
  // print the array in the container
  _pubSub_js__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('tasks', _pubSub_js__WEBPACK_IMPORTED_MODULE_2__["default"].events, (tasks) => {
    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.tasksContainer.textContent = '';
  for(let task of tasks) {
    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].appendTasks(task.title, task.priority, task.project);
    _project_js__WEBPACK_IMPORTED_MODULE_1__["default"].projects.forEach((project) => {
      if(project.title == task.project) {
        project.tasks.push(task)
      }
    })
  }
  })

  // filter array to find inbox tasks/ or tasks without projects
  function isInbox(task) {
    return task.project === 'inbox'
  }

  function filterInbox() {
    const inbox = _task_js__WEBPACK_IMPORTED_MODULE_0__["default"].tasks.filter(isInbox);
    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].appendInbox();
    if(inbox.length > 0) {
      _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.tasksContainer.textContent = '';
      for(let tasks of inbox) {
        _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].appendTasks(tasks.title, tasks.priority, tasks.project);
      } 
    } else {
        _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.tasksContainer.textContent = 'Your inbox is clean.'
    }
  }

  _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.inboxBtn.addEventListener('click', filterInbox)

  // filter array for tasks of a specific project
  const projectWrappers = [];

  _pubSub_js__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('getWrapper', _pubSub_js__WEBPACK_IMPORTED_MODULE_2__["default"].events, (wrapper) => {
    projectWrappers.push(wrapper);

    projectWrappers.forEach((wrapper) => {
      wrapper.addEventListener('click', (event) => {
        _project_js__WEBPACK_IMPORTED_MODULE_1__["default"].projects.forEach((project) => {
          if(event.target.outerText == project.title) {
            _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].openProject(project.title);
            console.log(project.tasks)
          }
        })
      })
    })

  })
  


})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appHandler);

/***/ }),

/***/ "./src/creator.js":
/*!************************!*\
  !*** ./src/creator.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_notes_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/notes-svgrepo-com.svg */ "./src/img/notes-svgrepo-com.svg");
/* harmony import */ var _img_text_description_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/text-description-svgrepo-com.svg */ "./src/img/text-description-svgrepo-com.svg");
/* harmony import */ var _img_project_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/project-svgrepo-com.svg */ "./src/img/project-svgrepo-com.svg");
/* harmony import */ var _img_next_calendar_page_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/next-calendar-page-svgrepo-com.svg */ "./src/img/next-calendar-page-svgrepo-com.svg");
/* harmony import */ var _img_flag_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/flag-svgrepo-com.svg */ "./src/img/flag-svgrepo-com.svg");
/* harmony import */ var _img_clock_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/clock-svgrepo-com.svg */ "./src/img/clock-svgrepo-com.svg");
/* harmony import */ var _img_checklist_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/checklist-svgrepo-com.svg */ "./src/img/checklist-svgrepo-com.svg");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _pubSub_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pubSub.js */ "./src/pubSub.js");











const creator = (function() {

const creator = {
  creatorBg: document.createElement('div'),
  creatorContainer: document.createElement('div'),
  input: document.createElement('input'),
  creatorProp: document.createElement('div'),
  creatorPropInput: document.createElement('div'),
  cancelBtn: document.createElement('button'),
  addBtn: document.createElement('button'),
  notes: new Image(),
  desc: new Image(),
  project: new Image(),
  calendar: new Image(),
  priority: new Image(),
  clock: new Image(),
  checklist: new Image(),
}

function appendCreator () {
  creator.creatorBg.classList.add('add-creator-bg')

  creator.creatorContainer.classList.add('add-creator-container');

  creator.input.setAttribute('id', 'creator');
  creator.input.setAttribute('name', 'creator');
  creator.input.classList.add('creator-input');

  creator.creatorProp.classList.add('creator-properties');

  creator.creatorPropInput.classList.add('creator-prop-input');
  creator.creatorPropInput.style.background = '#1A1A1A'
  creator.creatorPropInput.textContent = '';

  creator.cancelBtn.setAttribute('type', 'button');
  creator.cancelBtn.textContent = 'Cancel';
  creator.cancelBtn.classList.add('btn');
  creator.cancelBtn.classList.add('cancel');

  creator.addBtn.setAttribute('type', 'button');
  creator.addBtn.textContent = 'Save';
  creator.addBtn.classList.add('btn');
  creator.addBtn.classList.add('add');
  
  creator.notes.src = _img_notes_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__;
  creator.notes.classList.add('icon');
  creator.notes.setAttribute('alt', 'notes');

  creator.desc.src = _img_text_description_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__;
  creator.desc.classList.add('icon');
  creator.desc.setAttribute('alt', 'desc');

  creator.project.src = _img_project_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__;
  creator.project.classList.add('icon');
  creator.project.setAttribute('alt', 'project');

  creator.calendar.src = _img_next_calendar_page_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__;
  creator.calendar.classList.add('icon');
  creator.calendar.setAttribute('alt', 'calendar');

  creator.priority.src = _img_flag_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__;
  creator.priority.classList.add('icon');
  creator.priority.setAttribute('alt', 'priority');

  creator.clock.src = _img_clock_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__;
  creator.clock.classList.add('icon');
  creator.clock.setAttribute('alt', 'clock');

  creator.checklist.src = _img_checklist_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_6__;
  creator.checklist.classList.add('icon');
  creator.checklist.setAttribute('alt', 'checklist');

  creator.creatorProp.append(creator.creatorPropInput, creator.desc, creator.calendar,  creator.clock, creator.priority,  creator.notes, creator.project, creator.checklist, creator.cancelBtn, creator.addBtn);
  creator.creatorContainer.append(creator.input, creator.creatorProp);
  creator.creatorBg.append(creator.creatorContainer);
  _dom_js__WEBPACK_IMPORTED_MODULE_7__["default"].select.pageStructure.append(creator.creatorBg);
}

const priority = {
  select: document.createElement('select'),
  opt1: document.createElement('option'),
  opt2: document.createElement('option'),
  opt3: document.createElement('option'),
  opt0: document.createElement('option'),
}

function appendPriority() {
  priority.select.classList.add('priority-select');
  priority.opt0.setAttribute('value', 'priority');
  priority.opt0.setAttribute('selected', 'selected');
  priority.opt0.setAttribute('disabled', 'disabled');
  priority.opt0.textContent = 'Priority';
  priority.opt1.setAttribute('value', 'low');
  priority.opt1.textContent = 'Low';
  priority.opt2.setAttribute('value', 'moderate');
  priority.opt2.textContent = 'Moderate';
  priority.opt3.setAttribute('value', 'high');
  priority.opt3.textContent = 'High';

  priority.select.append(priority.opt0, priority.opt1, priority.opt2, priority.opt3);
  creator.creatorPropInput.textContent = '';
  creator.creatorPropInput.append(priority.select)
}

const projects = {
  select: document.createElement('select'),
  opt0: document.createElement('option'),
}

function appendProjects() {
  projects.select.classList.add('projects-select');
  projects.opt0.setAttribute('value', 'projects');
  projects.opt0.setAttribute('selected', 'selected');
  projects.opt0.setAttribute('disabled', 'disabled');
  projects.opt0.textContent = 'Projects';

  projects.select.append(projects.opt0);
  creator.creatorPropInput.textContent = '';
  creator.creatorPropInput.append(projects.select)
}

_pubSub_js__WEBPACK_IMPORTED_MODULE_8__["default"].subscribe('projects', _pubSub_js__WEBPACK_IMPORTED_MODULE_8__["default"].events, (project) => {
  const opt = document.createElement('option');
        opt.setAttribute('value', project.title);
        opt.textContent = project.title;
  projects.select.appendChild(opt);
})


const notes = {
  textArea: document.createElement('textarea')
}

function appendNotes() {
  notes.textArea.classList.add('notes');
  notes.textArea.setAttribute('placeholder', 'Notes...');
  creator.creatorPropInput.textContent = '';
  creator.creatorPropInput.append(notes.textArea);
}

const desc = {
  textArea: document.createElement('textarea')
}

function appendDesc() {
  desc.textArea.classList.add('desc');
  desc.textArea.setAttribute('placeholder', 'Description... (max 75ch)');
  desc.textArea.setAttribute('maxlength', '75');
  creator.creatorPropInput.textContent = '';
  creator.creatorPropInput.append(desc.textArea);
}

const dueDate = {
  date: document.createElement('input')
}

function appendDueDate() {
  dueDate.date.setAttribute('type', 'date');
  dueDate.date.setAttribute('id', 'date');
  dueDate.date.setAttribute('name', 'date');
  dueDate.date.classList.add('dateInput');
  creator.creatorPropInput.textContent = '';
  creator.creatorPropInput.append(dueDate.date);
}

const time = {
  time: document.createElement('input')
}

function appendTime() {
  time.time.setAttribute('type', 'time');
  time.time.setAttribute('id', 'time');
  time.time.setAttribute('name', 'time');
  time.time.classList.add('time');
  creator.creatorPropInput.textContent = '';
  creator.creatorPropInput.append(time.time);
}

function resetCreator() {
  creator.input.value = '';
  desc.textArea.value = '';
  notes.textArea.value = '';
  dueDate.date.value = '';
  priority.select.textContent = priority.opt0.value;
  time.time.value = '';
}

creator.priority.addEventListener('click', appendPriority);
creator.notes.addEventListener('click', appendNotes);
creator.desc.addEventListener('click', appendDesc);
creator.calendar.addEventListener('click', appendDueDate);
creator.clock.addEventListener('click', appendTime);
creator.project.addEventListener('click', appendProjects);

return {
  creator,
  priority,
  desc,
  notes,
  dueDate,
  time,
  resetCreator,
  appendCreator, 
  projects
}
})()


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (creator);

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creator.js */ "./src/creator.js");
/* harmony import */ var _pubSub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubSub.js */ "./src/pubSub.js");



const dom = (function () {
  const select = {
    pageStructure: document.querySelector('.page-structure'),
    addTaskBtn: document.querySelector('.add-task'),
    notificationBtn: document.querySelector('.notification'),
    themeChangeBtn: document.querySelector('.theme'),
    configBtn: document.querySelector('.config'),
    inboxBtn: document.querySelector('.inbox-btn'),
    todayBtn: document.querySelector('.today-btn'),
    upcomingBtn: document.querySelector('.upcoming-btn'),
    projectsSec: document.querySelector('.projects'),
    addProjectBtn: document.querySelector('.add-project'),
    arrowBackward: document.querySelector('.arrow-backward'),
    arrowForward: document.querySelector('.arrow-forward'),
    tasksContainer: document.querySelector('.tasks-container'),
    headSec: document.querySelector('.head-sec'),
    projectDiv: document.querySelectorAll('.project')
  }

  function appendTasks(title, priority, project) {
    const wrapper = document.createElement('div');
    const taskTitle = document.createElement('div');
    const para = document.createElement('p');
    const projectTitle = document.createElement('span');
    const circle = document.createElement('div');

    wrapper.classList.add('task');
    taskTitle.classList.add('task-title');

    para.textContent = title;
    projectTitle.textContent = project;
    circle.classList.add('priority-icon', 'low');

    switch(priority) {
      case 'moderate':
        circle.classList.add('moderate')
        break;
      case 'high':
        circle.classList.add('high')
    }

    taskTitle.append(circle, para);
    wrapper.append(taskTitle, projectTitle);
    select.tasksContainer.appendChild(wrapper);

    _creator_js__WEBPACK_IMPORTED_MODULE_0__["default"].creator.creatorBg.remove();
  }

  function appendProject(title, dueDate) {
    const wrapper = document.createElement('div');
    const projectTitle = document.createElement('p');
    const deadline = document.createElement('span');

    projectTitle.textContent = title;
    deadline.textContent = dueDate;
    wrapper.classList.add('project');
    projectTitle.classList.add('project-title');
    deadline.classList.add('project-deadline');

    wrapper.append(projectTitle, deadline);
    select.projectsSec.insertBefore(wrapper, select.addProjectBtn);
    
    _creator_js__WEBPACK_IMPORTED_MODULE_0__["default"].creator.creatorBg.remove();

    _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].publish('getWrapper', wrapper);
  }

  function openProject(title) {
    select.headSec.textContent = '';
    const projectTitle = document.createElement('h1');
          projectTitle.classList.add('project-h1');
          projectTitle.textContent = title;
    select.headSec.append(projectTitle)
  }

  function appendInbox() {
    select.headSec.textContent = '';
    const inboxTitle = document.createElement('h1');
          inboxTitle.classList.add('inbox-title');
          inboxTitle.textContent = 'Inbox';
    select.headSec.append(inboxTitle)
  }
  
  return {
    select,
    appendTasks,
    appendProject,
    openProject,
    appendInbox
  }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creator.js */ "./src/creator.js");
/* harmony import */ var _pubSub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubSub.js */ "./src/pubSub.js");




const handleProjects = (function () {
  class Project {
    constructor(title, description, dueDate, time, priority, notes, ...tasks) {
      this.title = title;
      this.description =  description;
      this.dueDate =  dueDate;
      this.time =  time;
      this.priority =  priority;
      this.notes =  notes;
      this.tasks =  tasks;
      this.isComplete =  false;
    }
  }

  const projects = [];
  let newProject = new Project;

  function setTitle() {
    newProject.title = _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].creator.input.value;
  }

  function setDescription() {
    newProject.description = _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].desc.textArea.value;
  }

  function setDate() {
    newProject.dueDate = _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].dueDate.date.value;
  }

  function setTime() {
    newProject.time = _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].time.time.value;
  }

  function setNotes() {
    newProject.notes = _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].notes.textArea.value;
  }

  function setPriority() {
    newProject.priority = _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].priority.select.value;
  }

  function addProject() {
    if(newProject.title !== undefined) {
      _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendProject(newProject.title, newProject.dueDate);
      projects.push(newProject);
      _pubSub_js__WEBPACK_IMPORTED_MODULE_2__["default"].publish('projects', newProject);
      newProject = new Project;
      _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].resetCreator();
      removeEvents();
    } else {
      alert('Fill in the fields')
    }
  }

  function cancelAdd() {
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].creator.creatorBg.remove();
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].creator.cancelBtn.classList.remove('proj')
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].resetCreator();
    removeEvents();
    newProject = new Project;
  }

  function activateEvents() {
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].appendCreator();
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].creator.project.remove();
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].creator.cancelBtn.classList.add('proj')
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].creator.input.addEventListener('change', setTitle);
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].desc.textArea.addEventListener('change', setDescription);
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].dueDate.date.addEventListener('change', setDate);
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].time.time.addEventListener('change', setTime)
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].priority.select.addEventListener('change', setPriority);
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].notes.textArea.addEventListener('change', setNotes);
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].creator.cancelBtn.addEventListener('click', cancelAdd);
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].creator.addBtn.addEventListener('click', addProject);
  }

  function removeEvents() {
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].creator.input.removeEventListener('change', setTitle);
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].desc.textArea.removeEventListener('change', setDescription);
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].dueDate.date.removeEventListener('change', setDate);
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].time.time.removeEventListener('change', setTime)
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].priority.select.removeEventListener('change', setPriority);
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].notes.textArea.removeEventListener('change',  setNotes);
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].creator.cancelBtn.removeEventListener('click', cancelAdd);
    _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].creator.addBtn.removeEventListener('click', addProject);
  }

  _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.addProjectBtn.addEventListener('click', activateEvents);

  return {projects, removeEvents, Project, addProject}
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleProjects);

/***/ }),

/***/ "./src/pubSub.js":
/*!***********************!*\
  !*** ./src/pubSub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// PubSub Module
const events = (function() {
  const  events = {};

  const subscribe = function (eventName, object, callback) {
  this.events[eventName] = this.events[eventName] || [];
  this.events[eventName].push({object: object, callback: callback});
  }

  const unsubscribe = function(eventName, object, callback) {
  if (this.events[eventName]) {
  for (var i = 0; i < this.events[eventName].length; i++) {
  if (this.events[eventName][i].object === object) {
  this.events[eventName].splice(i, 1);
  break;
  }
  };
  }
  }

  const publish =  function (eventName, data) {
  if (this.events[eventName]) {
  this.events[eventName].forEach(function(instance) {
  instance.callback(data);
  });
  }
  }

return {events, subscribe, unsubscribe, publish}
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _pubSub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubSub.js */ "./src/pubSub.js");
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./creator.js */ "./src/creator.js");





const handleTasks = (function() {
  class Task {
    constructor(title, description, dueDate, time, priority, notes, project = 'inbox', ...checkList) {
      this.title = title;
      this.description =  description;
      this.dueDate =  dueDate;
      this.time =  time;
      this.priority =  priority;
      this.notes =  notes;
      this.project = project;
      this.checkList = checkList;
      this.isComplete =  false;
    }
  }

  const tasks = [];
  let newTask = new Task;

  function setTitle() {
    newTask.title = _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].creator.input.value;
  }

  function setDescription() {
    newTask.description = _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].desc.textArea.value;
  }

  function setDate() {
    newTask.dueDate = _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].dueDate.date.value;
  }

  function setTime() {
    newTask.time = _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].time.time.value;
  }

  function setNotes() {
    newTask.notes = _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].notes.textArea.value;
  }

  function setPriority() {
    newTask.priority = _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].priority.select.value;
  }

  function setProject() {
    newTask.project = _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].projects.select.value;
  }
  
  function addTask() {
    if(newTask.title !== undefined) {
      tasks.push(newTask);
      _pubSub_js__WEBPACK_IMPORTED_MODULE_2__["default"].publish('tasks', tasks);
      newTask = new Task;
      _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].resetCreator();
      removeEvents();
    } else {
      alert('Fill in the fields')
    }
  }

  function cancelAdd() {
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].creator.creatorBg.remove();
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].resetCreator();
    removeEvents();
    newTask = new Task;
  }
  
  function activateEvents() {
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].appendCreator();
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].creator.input.addEventListener('change', setTitle);
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].desc.textArea.addEventListener('change', setDescription);
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].dueDate.date.addEventListener('change', setDate);
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].time.time.addEventListener('change', setTime)
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].priority.select.addEventListener('change', setPriority);
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].projects.select.addEventListener('change', setProject);
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].notes.textArea.addEventListener('change', setNotes);
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].creator.cancelBtn.addEventListener('click', cancelAdd);
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].creator.addBtn.addEventListener('click', addTask);
  }

  function removeEvents() {
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].creator.input.removeEventListener('change', setTitle);
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].desc.textArea.removeEventListener('change', setDescription);
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].dueDate.date.removeEventListener('change', setDate);
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].time.time.removeEventListener('change', setTime)
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].priority.select.removeEventListener('change', setPriority);
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].notes.textArea.removeEventListener('change',  setNotes);
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].creator.cancelBtn.removeEventListener('click', cancelAdd);
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].creator.addBtn.removeEventListener('click', addTask);
  }

  _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.addTaskBtn.addEventListener('click', activateEvents);

  return{tasks, removeEvents, Task, addTask}
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleTasks);


/***/ }),

/***/ "./src/img/calendar-svgrepo-com.svg":
/*!******************************************!*\
  !*** ./src/img/calendar-svgrepo-com.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83fdd11748ab200ed70c.svg";

/***/ }),

/***/ "./src/img/checklist-svgrepo-com.svg":
/*!*******************************************!*\
  !*** ./src/img/checklist-svgrepo-com.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54394cde2ac6375cafff.svg";

/***/ }),

/***/ "./src/img/clock-svgrepo-com.svg":
/*!***************************************!*\
  !*** ./src/img/clock-svgrepo-com.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c357425ff77135cffe35.svg";

/***/ }),

/***/ "./src/img/flag-svgrepo-com.svg":
/*!**************************************!*\
  !*** ./src/img/flag-svgrepo-com.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d0c28833daaa35f3de8f.svg";

/***/ }),

/***/ "./src/img/inbox-svgrepo-com.svg":
/*!***************************************!*\
  !*** ./src/img/inbox-svgrepo-com.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd93e11894ffcc070420.svg";

/***/ }),

/***/ "./src/img/next-calendar-page-svgrepo-com.svg":
/*!****************************************************!*\
  !*** ./src/img/next-calendar-page-svgrepo-com.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc930321d5127c2aa41c.svg";

/***/ }),

/***/ "./src/img/notes-svgrepo-com.svg":
/*!***************************************!*\
  !*** ./src/img/notes-svgrepo-com.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "015b948b4c7549c5f402.svg";

/***/ }),

/***/ "./src/img/plus-svgrepo-com.svg":
/*!**************************************!*\
  !*** ./src/img/plus-svgrepo-com.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "169fda577e02ab4b95fc.svg";

/***/ }),

/***/ "./src/img/project-svgrepo-com.svg":
/*!*****************************************!*\
  !*** ./src/img/project-svgrepo-com.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4aad99f35aeefe7c8d0b.svg";

/***/ }),

/***/ "./src/img/text-description-svgrepo-com.svg":
/*!**************************************************!*\
  !*** ./src/img/text-description-svgrepo-com.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84a15aadfc45e41019d8.svg";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 			"main": 0
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _appHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appHandler.js */ "./src/appHandler.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSw4Q0FBOEMsaUJBQWlCLGdCQUFnQiw2QkFBNkIsdUJBQXVCLG1CQUFtQixNQUFNLGNBQWMsbUJBQW1CLHVCQUF1QixLQUFLLHlCQUF5QixvQkFBb0IsdUNBQXVDLCtGQUErRixtQkFBbUIsS0FBSyx3QkFBd0Isa0JBQWtCLG1CQUFtQixzQkFBc0IsS0FBSyxhQUFhLGtCQUFrQixLQUFLLGlDQUFpQyxvQkFBb0IscUNBQXFDLDBCQUEwQixnQ0FBZ0MsbUJBQW1CLHNCQUFzQix3QkFBd0IsS0FBSyxlQUFlLHVCQUF1QixLQUFLLG9CQUFvQixvQkFBb0IsZ0JBQWdCLEtBQUssbUNBQW1DLGlDQUFpQyx5QkFBeUIsZ0NBQWdDLEtBQUssK0JBQStCLGdDQUFnQyxvQkFBb0IsS0FBSyxzQkFBc0Isc0JBQXNCLHlCQUF5QixLQUFLLDhCQUE4QixvREFBb0QsNEJBQTRCLGtCQUFrQixtQkFBbUIseUJBQXlCLHlCQUF5QixlQUFlLEtBQUssaUJBQWlCLG9CQUFvQixnQkFBZ0IsS0FBSyxvQkFBb0IsMEJBQTBCLHNCQUFzQixLQUFLLHlDQUF5QyxvREFBb0QsS0FBSyx5Q0FBeUMsdURBQXVELEtBQUsseUNBQXlDLHVEQUF1RCxLQUFLLDRCQUE0QixrQkFBa0IsbUJBQW1CLDRCQUE0Qiw2QkFBNkIseUJBQXlCLEtBQUsscUNBQXFDLDZCQUE2QixLQUFLLHNCQUFzQix3QkFBd0IsMEJBQTBCLEtBQUssc0JBQXNCLDBCQUEwQixzQkFBc0IsMEJBQTBCLHVCQUF1QixLQUFLLDhCQUE4QixpREFBaUQsa0JBQWtCLG1CQUFtQiw0QkFBNEIsNkJBQTZCLHlCQUF5QixLQUFLLDZCQUE2QixzQkFBc0IsZ0NBQWdDLEtBQUssbUJBQW1CLG9CQUFvQixxQ0FBcUMsMEJBQTBCLHlCQUF5QixnQ0FBZ0MsS0FBSyxlQUFlLHlCQUF5QixLQUFLLGlCQUFpQixzQkFBc0IseUJBQXlCLEtBQUssb0JBQW9CLHlCQUF5QixrQ0FBa0MscUJBQXFCLEtBQUssZUFBZSxvQkFBb0IscUNBQXFDLHNCQUFzQiwwQkFBMEIsb0JBQW9CLDBCQUEwQixLQUFLLHFCQUFxQixvQkFBb0IsMEJBQTBCLGdCQUFnQix5QkFBeUIsS0FBSyxtQkFBbUIseUJBQXlCLG9CQUFvQixLQUFLLDJCQUEyQixvQkFBb0IsMEJBQTBCLHlCQUF5QixLQUFLLG1DQUFtQyxrQkFBa0Isa0JBQWtCLG1CQUFtQix5QkFBeUIsNEJBQTRCLHlCQUF5QixnQkFBZ0IsS0FBSywyQ0FBMkMsb0JBQW9CLG9CQUFvQiwwQkFBMEIsdUJBQXVCLDBCQUEwQixLQUFLLHFCQUFxQixnQ0FBZ0MsS0FBSyx3QkFBd0Isa0JBQWtCLG1CQUFtQix5QkFBeUIsS0FBSyw0QkFBNEIsaUNBQWlDLEtBQUssaUNBQWlDLGlDQUFpQyxLQUFLLDZCQUE2Qiw4QkFBOEIsS0FBSyw2QkFBNkIsa0JBQWtCLEtBQUssbUNBQW1DLDBCQUEwQixLQUFLLG1DQUFtQyx1QkFBdUIsS0FBSyx5Q0FBeUMsdUJBQXVCLEtBQUssZ0RBQWdELHlCQUF5QixvQkFBb0IsOEJBQThCLDBCQUEwQixrQkFBa0Isb0JBQW9CLHVDQUF1QyxLQUFLLGdDQUFnQyxtQkFBbUIsb0JBQW9CLGdDQUFnQywwQkFBMEIsK0NBQStDLEtBQUssd0JBQXdCLGlCQUFpQixtQkFBbUIsMkJBQTJCLHdCQUF3QixvQkFBb0IsMEJBQTBCLG1CQUFtQixzQkFBc0IsbUJBQW1CLEtBQUssNkJBQTZCLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLEtBQUssNkJBQTZCLG1CQUFtQixtQkFBbUIsMEJBQTBCLDZCQUE2Qix3QkFBd0IsbUJBQW1CLG9CQUFvQiwwQkFBMEIsS0FBSyxlQUFlLGtCQUFrQixtQkFBbUIsc0JBQXNCLEtBQUssY0FBYyxtQkFBbUIsd0JBQXdCLDBCQUEwQiwwQkFBMEIsc0JBQXNCLEtBQUsscUJBQXFCLHdCQUF3QixLQUFLLDBCQUEwQix3QkFBd0IsS0FBSyw4RUFBOEUsa0JBQWtCLG1CQUFtQiwwQkFBMEIsNkJBQTZCLG1CQUFtQixtQkFBbUIsb0JBQW9CLEtBQUssMERBQTBELG1CQUFtQixLQUFLLDBDQUEwQyxvQkFBb0IsbUJBQW1CLEtBQUssNkNBQTZDLG9CQUFvQixxQ0FBcUMsbUJBQW1CLG9CQUFvQixxQkFBcUIsc0JBQXNCLEtBQUsscUJBQXFCLHNCQUFzQixLQUFLLHdCQUF3QixnQ0FBZ0MsS0FBSywyQkFBMkI7QUFDbm5lO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDZDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmNkI7QUFDTTtBQUNGO0FBQ047QUFDM0I7QUFDQTtBQUNBO0FBQ0EsRUFBRSw0REFBZ0IsVUFBVSx5REFBYTtBQUN6QyxJQUFJLGlGQUFxQztBQUN6QztBQUNBLElBQUksMkRBQWU7QUFDbkIsSUFBSSxvRUFBd0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZEQUFpQjtBQUNuQyxJQUFJLDJEQUFlO0FBQ25CO0FBQ0EsTUFBTSxpRkFBcUM7QUFDM0M7QUFDQSxRQUFRLDJEQUFlO0FBQ3ZCO0FBQ0EsTUFBTTtBQUNOLFFBQVEsaUZBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0ZBQW9DO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw0REFBZ0IsZUFBZSx5REFBYTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0VBQXdCO0FBQ2hDO0FBQ0EsWUFBWSwyREFBZTtBQUMzQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RDJCO0FBQ1U7QUFDTjtBQUNZO0FBQ2xCO0FBQ0U7QUFDUTtBQUNqQztBQUNLO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVEQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrRUFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseURBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9FQUFZO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzREFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdURBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDJEQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkVBQStCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUFnQixhQUFhLHlEQUFhO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7OztBQzNOYTtBQUNGO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0RUFBZ0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDRFQUFnQztBQUNwQztBQUNBLElBQUksMERBQWM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9GUztBQUNRO0FBQ0Y7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUVBQTJCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix1RUFBMkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNFQUEwQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUVBQXVCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3RUFBNEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlFQUE2QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQWlCO0FBQ3ZCO0FBQ0EsTUFBTSwwREFBYztBQUNwQjtBQUNBLE1BQU0sZ0VBQW9CO0FBQzFCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDRFQUFnQztBQUNwQyxJQUFJLHNGQUEwQztBQUM5QyxJQUFJLGdFQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBcUI7QUFDekIsSUFBSSwwRUFBOEI7QUFDbEMsSUFBSSxtRkFBdUM7QUFDM0MsSUFBSSxrRkFBc0M7QUFDMUMsSUFBSSxrRkFBc0M7QUFDMUMsSUFBSSxpRkFBcUM7QUFDekMsSUFBSSw4RUFBa0M7QUFDdEMsSUFBSSxvRkFBd0M7QUFDNUMsSUFBSSxtRkFBdUM7QUFDM0MsSUFBSSxzRkFBMEM7QUFDOUMsSUFBSSxtRkFBdUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxRkFBeUM7QUFDN0MsSUFBSSxxRkFBeUM7QUFDN0MsSUFBSSxvRkFBd0M7QUFDNUMsSUFBSSxpRkFBcUM7QUFDekMsSUFBSSx1RkFBMkM7QUFDL0MsSUFBSSxzRkFBMEM7QUFDOUMsSUFBSSx5RkFBNkM7QUFDakQsSUFBSSxzRkFBMEM7QUFDOUM7QUFDQTtBQUNBLEVBQUUscUZBQXlDO0FBQzNDO0FBQ0EsVUFBVTtBQUNWLENBQUM7QUFDRDtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FDaEc3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1DO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1DQUFtQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLENBQUM7QUFDRDtBQUNBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CZTtBQUNUO0FBQ007QUFDRTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVFQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsdUVBQTJCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzRUFBMEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1FQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0VBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5RUFBNkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlFQUE2QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwREFBYztBQUNwQjtBQUNBLE1BQU0sZ0VBQW9CO0FBQzFCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDRFQUFnQztBQUNwQyxJQUFJLGdFQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBcUI7QUFDekIsSUFBSSxrRkFBc0M7QUFDMUMsSUFBSSxrRkFBc0M7QUFDMUMsSUFBSSxpRkFBcUM7QUFDekMsSUFBSSw4RUFBa0M7QUFDdEMsSUFBSSxvRkFBd0M7QUFDNUMsSUFBSSxvRkFBd0M7QUFDNUMsSUFBSSxtRkFBdUM7QUFDM0MsSUFBSSxzRkFBMEM7QUFDOUMsSUFBSSxtRkFBdUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxRkFBeUM7QUFDN0MsSUFBSSxxRkFBeUM7QUFDN0MsSUFBSSxvRkFBd0M7QUFDNUMsSUFBSSxpRkFBcUM7QUFDekMsSUFBSSx1RkFBMkM7QUFDL0MsSUFBSSxzRkFBMEM7QUFDOUMsSUFBSSx5RkFBNkM7QUFDakQsSUFBSSxzRkFBMEM7QUFDOUM7QUFDQTtBQUNBLEVBQUUsa0ZBQXNDO0FBQ3hDO0FBQ0EsU0FBUztBQUNULENBQUM7QUFDRDtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuRzNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ007QUFDRjtBQUNuQjtBQUNyQjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wdWJTdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2luYm94LXN2Z3JlcG8tY29tLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL2NhbGVuZGFyLXN2Z3JlcG8tY29tLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nL3BsdXMtc3ZncmVwby1jb20uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHZW5lcmFsICovXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufSBcXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCA0ZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcclxcbiAgXFxcInNpZGViYXIgbWFpblxcXCJcXHJcXG4gIFxcXCJzaWRlYmFyIG1haW5cXFwiO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5zdmc6bm90KC5sb2dvKSB7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuc3ZnIHtcXHJcXG4gIGZpbGw6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgKi9cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBCMDkwOTtcXHJcXG4gIGhlaWdodDogODFweDtcXHJcXG4gIHBhZGRpbmc6IDAgMzBweDtcXHJcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBtYXJnaW4tbGVmdDogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIFNpZGViYXIgKi9cXHJcXG4uc2lkZWJhciB7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MXB4KTtcXHJcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRTBFMEU7XFxyXFxufVxcclxcblxcclxcbi8qIEluYm94ICovXFxyXFxuLmluYm94IHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMCAzMHB4IDQ4cHg7XFxyXFxuICBoZWlnaHQ6IDE1NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5ib3gtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5ib3gtdGl0bGU6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHVsIGxpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYgdWwgbGk6bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB1bCBsaTpudGgtY2hpbGQoMik6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHVsIGxpOm50aC1jaGlsZCgzKTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5uYXYgdWwgbGk6OmJlZm9yZSB7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIFByb2plY3RzICovXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMCAwIDQ4cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyBoMiB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdCB7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gKi9cXHJcXG4ubWFpbiB7XFxyXFxuICBncmlkLWFyZWE6IG1haW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZC1zZWMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDcwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYXRlIHAge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC12aWV3IHtcXHJcXG4gIHBhZGRpbmc6IDMwcHggNTVweDtcXHJcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE4MHB4KTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay10aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCArIGxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3ggKyBsYWJlbDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveDpjaGVja2VkICsgbGFiZWw6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnb2snO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogNHB4O1xcclxcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWljb24ge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1pY29uLmxvdyB7XFxyXFxuICBib3JkZXI6IDIuNXB4IHNvbGlkIHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWljb24ubW9kZXJhdGUge1xcclxcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1pY29uLmhpZ2gge1xcclxcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjODg4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM1NTU7XFxyXFxufVxcclxcblxcclxcbi8qIEFkZCBjb250YWluZXIgKi9cXHJcXG4uYWRkLWNyZWF0b3ItYmcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNyZWF0b3ItY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4MTBweDtcXHJcXG4gIGhlaWdodDogMTI2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGJveC1zaGFkb3c6MXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAuNCk7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdG9yLWlucHV0IHtcXHJcXG4gIHdpZHRoOiA5NCU7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMjBweCAyNXB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdG9yLXByb3BlcnRpZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdG9yLXByb3AtaW5wdXQge1xcclxcbiAgd2lkdGg6IDIzNHB4O1xcclxcbiAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4tbGVmdDogMjVweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwYWRkaW5nOiA4cHggMTZweDtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmNhbmNlbCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi5jYW5jZWwucHJvaiB7XFxyXFxuICBtYXJnaW4tbGVmdDogNzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LXNlbGVjdCwgLm5vdGVzLCAuZGVzYywgLmRhdGVJbnB1dCwgLnRpbWUsIC5wcm9qZWN0cy1zZWxlY3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1zZWxlY3Qgb3B0aW9uLCAucHJvamVjdHMtc2VsZWN0IG9wdGlvbiB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5ub3RlcywgLmRlc2MsIC5kYXRlSW5wdXQsIC50aW1lIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIHByb2plY3QgY29udGFpbmVyICovXFxyXFxuLnByb2plY3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW46IDE1cHggMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaDEge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFlBQVk7QUFDWjtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQzs7O2dCQUdjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUEsVUFBVTtBQUNWO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnREFBMkM7RUFDM0MscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnREFBMkM7QUFDN0M7O0FBRUE7RUFDRSxnREFBOEM7QUFDaEQ7O0FBRUE7RUFDRSxnREFBOEM7QUFDaEQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBLGFBQWE7QUFDYjtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnREFBMEM7RUFDMUMsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHZW5lcmFsICovXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufSBcXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCA0ZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcclxcbiAgXFxcInNpZGViYXIgbWFpblxcXCJcXHJcXG4gIFxcXCJzaWRlYmFyIG1haW5cXFwiO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5zdmc6bm90KC5sb2dvKSB7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuc3ZnIHtcXHJcXG4gIGZpbGw6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgKi9cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBCMDkwOTtcXHJcXG4gIGhlaWdodDogODFweDtcXHJcXG4gIHBhZGRpbmc6IDAgMzBweDtcXHJcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBtYXJnaW4tbGVmdDogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIFNpZGViYXIgKi9cXHJcXG4uc2lkZWJhciB7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MXB4KTtcXHJcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRTBFMEU7XFxyXFxufVxcclxcblxcclxcbi8qIEluYm94ICovXFxyXFxuLmluYm94IHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMCAzMHB4IDQ4cHg7XFxyXFxuICBoZWlnaHQ6IDE1NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5ib3gtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5ib3gtdGl0bGU6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vaW1nL2luYm94LXN2Z3JlcG8tY29tLnN2Z1xcXCIpO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHVsIGxpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYgdWwgbGk6bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuL2ltZy9pbmJveC1zdmdyZXBvLWNvbS5zdmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB1bCBsaTpudGgtY2hpbGQoMik6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vaW1nL2NhbGVuZGFyLXN2Z3JlcG8tY29tLnN2Z1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHVsIGxpOm50aC1jaGlsZCgzKTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi9pbWcvY2FsZW5kYXItc3ZncmVwby1jb20uc3ZnXFxcIik7XFxyXFxufVxcclxcblxcclxcbi5uYXYgdWwgbGk6OmJlZm9yZSB7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIFByb2plY3RzICovXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMCAwIDQ4cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyBoMiB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdCB7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybCgnLi9pbWcvcGx1cy1zdmdyZXBvLWNvbS5zdmcnKTtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiAqL1xcclxcbi5tYWluIHtcXHJcXG4gIGdyaWQtYXJlYTogbWFpbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XFxyXFxufVxcclxcblxcclxcbi5oZWFkLXNlYyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggNzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxufVxcclxcblxcclxcbi5kYXRlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUgcCB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5saXN0LXZpZXcge1xcclxcbiAgcGFkZGluZzogMzBweCA1NXB4O1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTgwcHgpO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94ICsgbGFiZWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCArIGxhYmVsOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94OmNoZWNrZWQgKyBsYWJlbDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICdvayc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaWNvbiB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWljb24ubG93IHtcXHJcXG4gIGJvcmRlcjogMi41cHggc29saWQgeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaWNvbi5tb2RlcmF0ZSB7XFxyXFxuICBib3JkZXI6IDIuNXB4IHNvbGlkIG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWljb24uaGlnaCB7XFxyXFxuICBib3JkZXI6IDIuNXB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM4ODg7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQWRkIGNvbnRhaW5lciAqL1xcclxcbi5hZGQtY3JlYXRvci1iZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNik7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY3JlYXRvci1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDgxMHB4O1xcclxcbiAgaGVpZ2h0OiAxMjZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYm94LXNoYWRvdzoxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIC40KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0b3ItaW5wdXQge1xcclxcbiAgd2lkdGg6IDk0JTtcXHJcXG4gIGhlaWdodDogMzRweDtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAyMHB4IDI1cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0b3ItcHJvcGVydGllcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0b3ItcHJvcC1pbnB1dCB7XFxyXFxuICB3aWR0aDogMjM0cHg7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG4uY2FuY2VsIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmNhbmNlbC5wcm9qIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktc2VsZWN0LCAubm90ZXMsIC5kZXNjLCAuZGF0ZUlucHV0LCAudGltZSwgLnByb2plY3RzLXNlbGVjdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LXNlbGVjdCBvcHRpb24sIC5wcm9qZWN0cy1zZWxlY3Qgb3B0aW9uIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGVzLCAuZGVzYywgLmRhdGVJbnB1dCwgLnRpbWUge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogcHJvamVjdCBjb250YWluZXIgKi9cXHJcXG4ucHJvamVjdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbjogMTVweCAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oMSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgdGFzayBmcm9tICcuL3Rhc2suanMnO1xyXG5pbXBvcnQgcHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xyXG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vcHViU3ViLmpzJztcclxuaW1wb3J0IGRvbSBmcm9tICcuL2RvbS5qcyc7XHJcblxyXG5jb25zdCBhcHBIYW5kbGVyID0gKGZ1bmN0aW9uKCkge1xyXG4gIC8vIHByaW50IHRoZSBhcnJheSBpbiB0aGUgY29udGFpbmVyXHJcbiAgZXZlbnRzLnN1YnNjcmliZSgndGFza3MnLCBldmVudHMuZXZlbnRzLCAodGFza3MpID0+IHtcclxuICAgIGRvbS5zZWxlY3QudGFza3NDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICBmb3IobGV0IHRhc2sgb2YgdGFza3MpIHtcclxuICAgIGRvbS5hcHBlbmRUYXNrcyh0YXNrLnRpdGxlLCB0YXNrLnByaW9yaXR5LCB0YXNrLnByb2plY3QpO1xyXG4gICAgcHJvamVjdC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGlmKHByb2plY3QudGl0bGUgPT0gdGFzay5wcm9qZWN0KSB7XHJcbiAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIH0pXHJcblxyXG4gIC8vIGZpbHRlciBhcnJheSB0byBmaW5kIGluYm94IHRhc2tzLyBvciB0YXNrcyB3aXRob3V0IHByb2plY3RzXHJcbiAgZnVuY3Rpb24gaXNJbmJveCh0YXNrKSB7XHJcbiAgICByZXR1cm4gdGFzay5wcm9qZWN0ID09PSAnaW5ib3gnXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaWx0ZXJJbmJveCgpIHtcclxuICAgIGNvbnN0IGluYm94ID0gdGFzay50YXNrcy5maWx0ZXIoaXNJbmJveCk7XHJcbiAgICBkb20uYXBwZW5kSW5ib3goKTtcclxuICAgIGlmKGluYm94Lmxlbmd0aCA+IDApIHtcclxuICAgICAgZG9tLnNlbGVjdC50YXNrc0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICBmb3IobGV0IHRhc2tzIG9mIGluYm94KSB7XHJcbiAgICAgICAgZG9tLmFwcGVuZFRhc2tzKHRhc2tzLnRpdGxlLCB0YXNrcy5wcmlvcml0eSwgdGFza3MucHJvamVjdCk7XHJcbiAgICAgIH0gXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvbS5zZWxlY3QudGFza3NDb250YWluZXIudGV4dENvbnRlbnQgPSAnWW91ciBpbmJveCBpcyBjbGVhbi4nXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb20uc2VsZWN0LmluYm94QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmlsdGVySW5ib3gpXHJcblxyXG4gIC8vIGZpbHRlciBhcnJheSBmb3IgdGFza3Mgb2YgYSBzcGVjaWZpYyBwcm9qZWN0XHJcbiAgY29uc3QgcHJvamVjdFdyYXBwZXJzID0gW107XHJcblxyXG4gIGV2ZW50cy5zdWJzY3JpYmUoJ2dldFdyYXBwZXInLCBldmVudHMuZXZlbnRzLCAod3JhcHBlcikgPT4ge1xyXG4gICAgcHJvamVjdFdyYXBwZXJzLnB1c2god3JhcHBlcik7XHJcblxyXG4gICAgcHJvamVjdFdyYXBwZXJzLmZvckVhY2goKHdyYXBwZXIpID0+IHtcclxuICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIHByb2plY3QucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgaWYoZXZlbnQudGFyZ2V0Lm91dGVyVGV4dCA9PSBwcm9qZWN0LnRpdGxlKSB7XHJcbiAgICAgICAgICAgIGRvbS5vcGVuUHJvamVjdChwcm9qZWN0LnRpdGxlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC50YXNrcylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgfSlcclxuICBcclxuXHJcblxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwSGFuZGxlcjsiLCJpbXBvcnQgbm90ZXNJY29uIGZyb20gJy4vaW1nL25vdGVzLXN2Z3JlcG8tY29tLnN2Zyc7XHJcbmltcG9ydCBkZXNjSWNvbiBmcm9tICcuL2ltZy90ZXh0LWRlc2NyaXB0aW9uLXN2Z3JlcG8tY29tLnN2Zyc7XHJcbmltcG9ydCBwcm9qZWN0SWNvbiBmcm9tICcuL2ltZy9wcm9qZWN0LXN2Z3JlcG8tY29tLnN2Zyc7XHJcbmltcG9ydCBjYWxlbmRhckljb24gZnJvbSAnLi9pbWcvbmV4dC1jYWxlbmRhci1wYWdlLXN2Z3JlcG8tY29tLnN2Zyc7XHJcbmltcG9ydCBmbGFnSWNvbiBmcm9tICcuL2ltZy9mbGFnLXN2Z3JlcG8tY29tLnN2Zyc7XHJcbmltcG9ydCBjbG9ja0ljb24gZnJvbSAnLi9pbWcvY2xvY2stc3ZncmVwby1jb20uc3ZnJztcclxuaW1wb3J0IGNoZWNrbGlzdEljb24gZnJvbSAnLi9pbWcvY2hlY2tsaXN0LXN2Z3JlcG8tY29tLnN2Zyc7XHJcbmltcG9ydCBkb20gZnJvbSAnLi9kb20uanMnO1xyXG5pbXBvcnQgZXZlbnRzIGZyb20nLi9wdWJTdWIuanMnO1xyXG5cclxuXHJcbmNvbnN0IGNyZWF0b3IgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG5jb25zdCBjcmVhdG9yID0ge1xyXG4gIGNyZWF0b3JCZzogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgY3JlYXRvckNvbnRhaW5lcjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgaW5wdXQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JyksXHJcbiAgY3JlYXRvclByb3A6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gIGNyZWF0b3JQcm9wSW5wdXQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gIGNhbmNlbEJ0bjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcbiAgYWRkQnRuOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuICBub3RlczogbmV3IEltYWdlKCksXHJcbiAgZGVzYzogbmV3IEltYWdlKCksXHJcbiAgcHJvamVjdDogbmV3IEltYWdlKCksXHJcbiAgY2FsZW5kYXI6IG5ldyBJbWFnZSgpLFxyXG4gIHByaW9yaXR5OiBuZXcgSW1hZ2UoKSxcclxuICBjbG9jazogbmV3IEltYWdlKCksXHJcbiAgY2hlY2tsaXN0OiBuZXcgSW1hZ2UoKSxcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kQ3JlYXRvciAoKSB7XHJcbiAgY3JlYXRvci5jcmVhdG9yQmcuY2xhc3NMaXN0LmFkZCgnYWRkLWNyZWF0b3ItYmcnKVxyXG5cclxuICBjcmVhdG9yLmNyZWF0b3JDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkLWNyZWF0b3ItY29udGFpbmVyJyk7XHJcblxyXG4gIGNyZWF0b3IuaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdG9yJyk7XHJcbiAgY3JlYXRvci5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY3JlYXRvcicpO1xyXG4gIGNyZWF0b3IuaW5wdXQuY2xhc3NMaXN0LmFkZCgnY3JlYXRvci1pbnB1dCcpO1xyXG5cclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wLmNsYXNzTGlzdC5hZGQoJ2NyZWF0b3ItcHJvcGVydGllcycpO1xyXG5cclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wSW5wdXQuY2xhc3NMaXN0LmFkZCgnY3JlYXRvci1wcm9wLWlucHV0Jyk7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LnN0eWxlLmJhY2tncm91bmQgPSAnIzFBMUExQSdcclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wSW5wdXQudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgY3JlYXRvci5jYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gIGNyZWF0b3IuY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgY3JlYXRvci5jYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgY3JlYXRvci5jYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsJyk7XHJcblxyXG4gIGNyZWF0b3IuYWRkQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICBjcmVhdG9yLmFkZEJ0bi50ZXh0Q29udGVudCA9ICdTYXZlJztcclxuICBjcmVhdG9yLmFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICBjcmVhdG9yLmFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQnKTtcclxuICBcclxuICBjcmVhdG9yLm5vdGVzLnNyYyA9IG5vdGVzSWNvbjtcclxuICBjcmVhdG9yLm5vdGVzLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuICBjcmVhdG9yLm5vdGVzLnNldEF0dHJpYnV0ZSgnYWx0JywgJ25vdGVzJyk7XHJcblxyXG4gIGNyZWF0b3IuZGVzYy5zcmMgPSBkZXNjSWNvbjtcclxuICBjcmVhdG9yLmRlc2MuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG4gIGNyZWF0b3IuZGVzYy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdkZXNjJyk7XHJcblxyXG4gIGNyZWF0b3IucHJvamVjdC5zcmMgPSBwcm9qZWN0SWNvbjtcclxuICBjcmVhdG9yLnByb2plY3QuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG4gIGNyZWF0b3IucHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdwcm9qZWN0Jyk7XHJcblxyXG4gIGNyZWF0b3IuY2FsZW5kYXIuc3JjID0gY2FsZW5kYXJJY29uO1xyXG4gIGNyZWF0b3IuY2FsZW5kYXIuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG4gIGNyZWF0b3IuY2FsZW5kYXIuc2V0QXR0cmlidXRlKCdhbHQnLCAnY2FsZW5kYXInKTtcclxuXHJcbiAgY3JlYXRvci5wcmlvcml0eS5zcmMgPSBmbGFnSWNvbjtcclxuICBjcmVhdG9yLnByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuICBjcmVhdG9yLnByaW9yaXR5LnNldEF0dHJpYnV0ZSgnYWx0JywgJ3ByaW9yaXR5Jyk7XHJcblxyXG4gIGNyZWF0b3IuY2xvY2suc3JjID0gY2xvY2tJY29uO1xyXG4gIGNyZWF0b3IuY2xvY2suY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG4gIGNyZWF0b3IuY2xvY2suc2V0QXR0cmlidXRlKCdhbHQnLCAnY2xvY2snKTtcclxuXHJcbiAgY3JlYXRvci5jaGVja2xpc3Quc3JjID0gY2hlY2tsaXN0SWNvbjtcclxuICBjcmVhdG9yLmNoZWNrbGlzdC5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XHJcbiAgY3JlYXRvci5jaGVja2xpc3Quc2V0QXR0cmlidXRlKCdhbHQnLCAnY2hlY2tsaXN0Jyk7XHJcblxyXG4gIGNyZWF0b3IuY3JlYXRvclByb3AuYXBwZW5kKGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dCwgY3JlYXRvci5kZXNjLCBjcmVhdG9yLmNhbGVuZGFyLCAgY3JlYXRvci5jbG9jaywgY3JlYXRvci5wcmlvcml0eSwgIGNyZWF0b3Iubm90ZXMsIGNyZWF0b3IucHJvamVjdCwgY3JlYXRvci5jaGVja2xpc3QsIGNyZWF0b3IuY2FuY2VsQnRuLCBjcmVhdG9yLmFkZEJ0bik7XHJcbiAgY3JlYXRvci5jcmVhdG9yQ29udGFpbmVyLmFwcGVuZChjcmVhdG9yLmlucHV0LCBjcmVhdG9yLmNyZWF0b3JQcm9wKTtcclxuICBjcmVhdG9yLmNyZWF0b3JCZy5hcHBlbmQoY3JlYXRvci5jcmVhdG9yQ29udGFpbmVyKTtcclxuICBkb20uc2VsZWN0LnBhZ2VTdHJ1Y3R1cmUuYXBwZW5kKGNyZWF0b3IuY3JlYXRvckJnKTtcclxufVxyXG5cclxuY29uc3QgcHJpb3JpdHkgPSB7XHJcbiAgc2VsZWN0OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSxcclxuICBvcHQxOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSxcclxuICBvcHQyOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSxcclxuICBvcHQzOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSxcclxuICBvcHQwOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSxcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kUHJpb3JpdHkoKSB7XHJcbiAgcHJpb3JpdHkuc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LXNlbGVjdCcpO1xyXG4gIHByaW9yaXR5Lm9wdDAuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdwcmlvcml0eScpO1xyXG4gIHByaW9yaXR5Lm9wdDAuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xyXG4gIHByaW9yaXR5Lm9wdDAuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gIHByaW9yaXR5Lm9wdDAudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xyXG4gIHByaW9yaXR5Lm9wdDEuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcclxuICBwcmlvcml0eS5vcHQxLnRleHRDb250ZW50ID0gJ0xvdyc7XHJcbiAgcHJpb3JpdHkub3B0Mi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21vZGVyYXRlJyk7XHJcbiAgcHJpb3JpdHkub3B0Mi50ZXh0Q29udGVudCA9ICdNb2RlcmF0ZSc7XHJcbiAgcHJpb3JpdHkub3B0My5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcclxuICBwcmlvcml0eS5vcHQzLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xyXG5cclxuICBwcmlvcml0eS5zZWxlY3QuYXBwZW5kKHByaW9yaXR5Lm9wdDAsIHByaW9yaXR5Lm9wdDEsIHByaW9yaXR5Lm9wdDIsIHByaW9yaXR5Lm9wdDMpO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC5hcHBlbmQocHJpb3JpdHkuc2VsZWN0KVxyXG59XHJcblxyXG5jb25zdCBwcm9qZWN0cyA9IHtcclxuICBzZWxlY3Q6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpLFxyXG4gIG9wdDA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpLFxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBlbmRQcm9qZWN0cygpIHtcclxuICBwcm9qZWN0cy5zZWxlY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtc2VsZWN0Jyk7XHJcbiAgcHJvamVjdHMub3B0MC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3Byb2plY3RzJyk7XHJcbiAgcHJvamVjdHMub3B0MC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcbiAgcHJvamVjdHMub3B0MC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgcHJvamVjdHMub3B0MC50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XHJcblxyXG4gIHByb2plY3RzLnNlbGVjdC5hcHBlbmQocHJvamVjdHMub3B0MCk7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LmFwcGVuZChwcm9qZWN0cy5zZWxlY3QpXHJcbn1cclxuXHJcbmV2ZW50cy5zdWJzY3JpYmUoJ3Byb2plY3RzJywgZXZlbnRzLmV2ZW50cywgKHByb2plY3QpID0+IHtcclxuICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHByb2plY3QudGl0bGUpO1xyXG4gICAgICAgIG9wdC50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XHJcbiAgcHJvamVjdHMuc2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XHJcbn0pXHJcblxyXG5cclxuY29uc3Qgbm90ZXMgPSB7XHJcbiAgdGV4dEFyZWE6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kTm90ZXMoKSB7XHJcbiAgbm90ZXMudGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgnbm90ZXMnKTtcclxuICBub3Rlcy50ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ05vdGVzLi4uJyk7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LmFwcGVuZChub3Rlcy50ZXh0QXJlYSk7XHJcbn1cclxuXHJcbmNvbnN0IGRlc2MgPSB7XHJcbiAgdGV4dEFyZWE6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kRGVzYygpIHtcclxuICBkZXNjLnRleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ2Rlc2MnKTtcclxuICBkZXNjLnRleHRBcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24uLi4gKG1heCA3NWNoKScpO1xyXG4gIGRlc2MudGV4dEFyZWEuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnNzUnKTtcclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wSW5wdXQudGV4dENvbnRlbnQgPSAnJztcclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wSW5wdXQuYXBwZW5kKGRlc2MudGV4dEFyZWEpO1xyXG59XHJcblxyXG5jb25zdCBkdWVEYXRlID0ge1xyXG4gIGRhdGU6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kRHVlRGF0ZSgpIHtcclxuICBkdWVEYXRlLmRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICBkdWVEYXRlLmRhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlJyk7XHJcbiAgZHVlRGF0ZS5kYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJyk7XHJcbiAgZHVlRGF0ZS5kYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGVJbnB1dCcpO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC5hcHBlbmQoZHVlRGF0ZS5kYXRlKTtcclxufVxyXG5cclxuY29uc3QgdGltZSA9IHtcclxuICB0aW1lOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZFRpbWUoKSB7XHJcbiAgdGltZS50aW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0aW1lJyk7XHJcbiAgdGltZS50aW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAndGltZScpO1xyXG4gIHRpbWUudGltZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGltZScpO1xyXG4gIHRpbWUudGltZS5jbGFzc0xpc3QuYWRkKCd0aW1lJyk7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LmFwcGVuZCh0aW1lLnRpbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldENyZWF0b3IoKSB7XHJcbiAgY3JlYXRvci5pbnB1dC52YWx1ZSA9ICcnO1xyXG4gIGRlc2MudGV4dEFyZWEudmFsdWUgPSAnJztcclxuICBub3Rlcy50ZXh0QXJlYS52YWx1ZSA9ICcnO1xyXG4gIGR1ZURhdGUuZGF0ZS52YWx1ZSA9ICcnO1xyXG4gIHByaW9yaXR5LnNlbGVjdC50ZXh0Q29udGVudCA9IHByaW9yaXR5Lm9wdDAudmFsdWU7XHJcbiAgdGltZS50aW1lLnZhbHVlID0gJyc7XHJcbn1cclxuXHJcbmNyZWF0b3IucHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBlbmRQcmlvcml0eSk7XHJcbmNyZWF0b3Iubm90ZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBlbmROb3Rlcyk7XHJcbmNyZWF0b3IuZGVzYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFwcGVuZERlc2MpO1xyXG5jcmVhdG9yLmNhbGVuZGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwZW5kRHVlRGF0ZSk7XHJcbmNyZWF0b3IuY2xvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBlbmRUaW1lKTtcclxuY3JlYXRvci5wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwZW5kUHJvamVjdHMpO1xyXG5cclxucmV0dXJuIHtcclxuICBjcmVhdG9yLFxyXG4gIHByaW9yaXR5LFxyXG4gIGRlc2MsXHJcbiAgbm90ZXMsXHJcbiAgZHVlRGF0ZSxcclxuICB0aW1lLFxyXG4gIHJlc2V0Q3JlYXRvcixcclxuICBhcHBlbmRDcmVhdG9yLCBcclxuICBwcm9qZWN0c1xyXG59XHJcbn0pKClcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdG9yOyIsImltcG9ydCBjcmVhdG9yIGZyb20gJy4vY3JlYXRvci5qcyc7XHJcbmltcG9ydCBldmVudHMgZnJvbSAnLi9wdWJTdWIuanMnO1xyXG5cclxuY29uc3QgZG9tID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBzZWxlY3QgPSB7XHJcbiAgICBwYWdlU3RydWN0dXJlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1zdHJ1Y3R1cmUnKSxcclxuICAgIGFkZFRhc2tCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpLFxyXG4gICAgbm90aWZpY2F0aW9uQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90aWZpY2F0aW9uJyksXHJcbiAgICB0aGVtZUNoYW5nZUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZW1lJyksXHJcbiAgICBjb25maWdCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maWcnKSxcclxuICAgIGluYm94QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtYnRuJyksXHJcbiAgICB0b2RheUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5LWJ0bicpLFxyXG4gICAgdXBjb21pbmdCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGNvbWluZy1idG4nKSxcclxuICAgIHByb2plY3RzU2VjOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKSxcclxuICAgIGFkZFByb2plY3RCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpLFxyXG4gICAgYXJyb3dCYWNrd2FyZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LWJhY2t3YXJkJyksXHJcbiAgICBhcnJvd0ZvcndhcmQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1mb3J3YXJkJyksXHJcbiAgICB0YXNrc0NvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNvbnRhaW5lcicpLFxyXG4gICAgaGVhZFNlYzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWQtc2VjJyksXHJcbiAgICBwcm9qZWN0RGl2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhcHBlbmRUYXNrcyh0aXRsZSwgcHJpb3JpdHksIHByb2plY3QpIHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG4gICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcclxuXHJcbiAgICBwYXJhLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xyXG4gICAgY2lyY2xlLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWljb24nLCAnbG93Jyk7XHJcblxyXG4gICAgc3dpdGNoKHByaW9yaXR5KSB7XHJcbiAgICAgIGNhc2UgJ21vZGVyYXRlJzpcclxuICAgICAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZCgnbW9kZXJhdGUnKVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdoaWdoJzpcclxuICAgICAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZCgnaGlnaCcpXHJcbiAgICB9XHJcblxyXG4gICAgdGFza1RpdGxlLmFwcGVuZChjaXJjbGUsIHBhcmEpO1xyXG4gICAgd3JhcHBlci5hcHBlbmQodGFza1RpdGxlLCBwcm9qZWN0VGl0bGUpO1xyXG4gICAgc2VsZWN0LnRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG5cclxuICAgIGNyZWF0b3IuY3JlYXRvci5jcmVhdG9yQmcucmVtb3ZlKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0KHRpdGxlLCBkdWVEYXRlKSB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBkZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgIGRlYWRsaW5lLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcclxuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xyXG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcclxuICAgIGRlYWRsaW5lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVhZGxpbmUnKTtcclxuXHJcbiAgICB3cmFwcGVyLmFwcGVuZChwcm9qZWN0VGl0bGUsIGRlYWRsaW5lKTtcclxuICAgIHNlbGVjdC5wcm9qZWN0c1NlYy5pbnNlcnRCZWZvcmUod3JhcHBlciwgc2VsZWN0LmFkZFByb2plY3RCdG4pO1xyXG4gICAgXHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuY3JlYXRvckJnLnJlbW92ZSgpO1xyXG5cclxuICAgIGV2ZW50cy5wdWJsaXNoKCdnZXRXcmFwcGVyJywgd3JhcHBlcik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvcGVuUHJvamVjdCh0aXRsZSkge1xyXG4gICAgc2VsZWN0LmhlYWRTZWMudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1oMScpO1xyXG4gICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICBzZWxlY3QuaGVhZFNlYy5hcHBlbmQocHJvamVjdFRpdGxlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXBwZW5kSW5ib3goKSB7XHJcbiAgICBzZWxlY3QuaGVhZFNlYy50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgY29uc3QgaW5ib3hUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgICBpbmJveFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2luYm94LXRpdGxlJyk7XHJcbiAgICAgICAgICBpbmJveFRpdGxlLnRleHRDb250ZW50ID0gJ0luYm94JztcclxuICAgIHNlbGVjdC5oZWFkU2VjLmFwcGVuZChpbmJveFRpdGxlKVxyXG4gIH1cclxuICBcclxuICByZXR1cm4ge1xyXG4gICAgc2VsZWN0LFxyXG4gICAgYXBwZW5kVGFza3MsXHJcbiAgICBhcHBlbmRQcm9qZWN0LFxyXG4gICAgb3BlblByb2plY3QsXHJcbiAgICBhcHBlbmRJbmJveFxyXG4gIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbTsiLCJpbXBvcnQgZG9tIGZyb20gJy4vZG9tLmpzJztcclxuaW1wb3J0IGNyZWF0b3IgZnJvbSAnLi9jcmVhdG9yLmpzJztcclxuaW1wb3J0IGV2ZW50cyBmcm9tICcuL3B1YlN1Yi5qcyc7XHJcblxyXG5jb25zdCBoYW5kbGVQcm9qZWN0cyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHRpbWUsIHByaW9yaXR5LCBub3RlcywgLi4udGFza3MpIHtcclxuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gIGRlc2NyaXB0aW9uO1xyXG4gICAgICB0aGlzLmR1ZURhdGUgPSAgZHVlRGF0ZTtcclxuICAgICAgdGhpcy50aW1lID0gIHRpbWU7XHJcbiAgICAgIHRoaXMucHJpb3JpdHkgPSAgcHJpb3JpdHk7XHJcbiAgICAgIHRoaXMubm90ZXMgPSAgbm90ZXM7XHJcbiAgICAgIHRoaXMudGFza3MgPSAgdGFza3M7XHJcbiAgICAgIHRoaXMuaXNDb21wbGV0ZSA9ICBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2plY3RzID0gW107XHJcbiAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdDtcclxuXHJcbiAgZnVuY3Rpb24gc2V0VGl0bGUoKSB7XHJcbiAgICBuZXdQcm9qZWN0LnRpdGxlID0gY3JlYXRvci5jcmVhdG9yLmlucHV0LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICBuZXdQcm9qZWN0LmRlc2NyaXB0aW9uID0gY3JlYXRvci5kZXNjLnRleHRBcmVhLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0RGF0ZSgpIHtcclxuICAgIG5ld1Byb2plY3QuZHVlRGF0ZSA9IGNyZWF0b3IuZHVlRGF0ZS5kYXRlLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0VGltZSgpIHtcclxuICAgIG5ld1Byb2plY3QudGltZSA9IGNyZWF0b3IudGltZS50aW1lLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0Tm90ZXMoKSB7XHJcbiAgICBuZXdQcm9qZWN0Lm5vdGVzID0gY3JlYXRvci5ub3Rlcy50ZXh0QXJlYS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldFByaW9yaXR5KCkge1xyXG4gICAgbmV3UHJvamVjdC5wcmlvcml0eSA9IGNyZWF0b3IucHJpb3JpdHkuc2VsZWN0LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcclxuICAgIGlmKG5ld1Byb2plY3QudGl0bGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBkb20uYXBwZW5kUHJvamVjdChuZXdQcm9qZWN0LnRpdGxlLCBuZXdQcm9qZWN0LmR1ZURhdGUpO1xyXG4gICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgICBldmVudHMucHVibGlzaCgncHJvamVjdHMnLCBuZXdQcm9qZWN0KTtcclxuICAgICAgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0O1xyXG4gICAgICBjcmVhdG9yLnJlc2V0Q3JlYXRvcigpO1xyXG4gICAgICByZW1vdmVFdmVudHMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KCdGaWxsIGluIHRoZSBmaWVsZHMnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2FuY2VsQWRkKCkge1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmNyZWF0b3JCZy5yZW1vdmUoKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5jYW5jZWxCdG4uY2xhc3NMaXN0LnJlbW92ZSgncHJvaicpXHJcbiAgICBjcmVhdG9yLnJlc2V0Q3JlYXRvcigpO1xyXG4gICAgcmVtb3ZlRXZlbnRzKCk7XHJcbiAgICBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3Q7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhY3RpdmF0ZUV2ZW50cygpIHtcclxuICAgIGNyZWF0b3IuYXBwZW5kQ3JlYXRvcigpO1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLnByb2plY3QucmVtb3ZlKCk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2onKVxyXG4gICAgY3JlYXRvci5jcmVhdG9yLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFRpdGxlKTtcclxuICAgIGNyZWF0b3IuZGVzYy50ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXREZXNjcmlwdGlvbik7XHJcbiAgICBjcmVhdG9yLmR1ZURhdGUuZGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXREYXRlKTtcclxuICAgIGNyZWF0b3IudGltZS50aW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFRpbWUpXHJcbiAgICBjcmVhdG9yLnByaW9yaXR5LnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRQcmlvcml0eSk7XHJcbiAgICBjcmVhdG9yLm5vdGVzLnRleHRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldE5vdGVzKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5jYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxBZGQpO1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlRXZlbnRzKCkge1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFRpdGxlKTtcclxuICAgIGNyZWF0b3IuZGVzYy50ZXh0QXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXREZXNjcmlwdGlvbik7XHJcbiAgICBjcmVhdG9yLmR1ZURhdGUuZGF0ZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXREYXRlKTtcclxuICAgIGNyZWF0b3IudGltZS50aW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFRpbWUpXHJcbiAgICBjcmVhdG9yLnByaW9yaXR5LnNlbGVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRQcmlvcml0eSk7XHJcbiAgICBjcmVhdG9yLm5vdGVzLnRleHRBcmVhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICBzZXROb3Rlcyk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuY2FuY2VsQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsQWRkKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5hZGRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0KTtcclxuICB9XHJcblxyXG4gIGRvbS5zZWxlY3QuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFjdGl2YXRlRXZlbnRzKTtcclxuXHJcbiAgcmV0dXJuIHtwcm9qZWN0cywgcmVtb3ZlRXZlbnRzLCBQcm9qZWN0LCBhZGRQcm9qZWN0fVxyXG59KSgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVQcm9qZWN0czsiLCIvLyBQdWJTdWIgTW9kdWxlXHJcbmNvbnN0IGV2ZW50cyA9IChmdW5jdGlvbigpIHtcclxuICBjb25zdCAgZXZlbnRzID0ge307XHJcblxyXG4gIGNvbnN0IHN1YnNjcmliZSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIG9iamVjdCwgY2FsbGJhY2spIHtcclxuICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcclxuICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goe29iamVjdDogb2JqZWN0LCBjYWxsYmFjazogY2FsbGJhY2t9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gZnVuY3Rpb24oZXZlbnROYW1lLCBvYmplY3QsIGNhbGxiYWNrKSB7XHJcbiAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcclxuICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXVtpXS5vYmplY3QgPT09IG9iamVjdCkge1xyXG4gIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xyXG4gIGJyZWFrO1xyXG4gIH1cclxuICB9O1xyXG4gIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHB1Ymxpc2ggPSAgZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGF0YSkge1xyXG4gIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XHJcbiAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmN0aW9uKGluc3RhbmNlKSB7XHJcbiAgaW5zdGFuY2UuY2FsbGJhY2soZGF0YSk7XHJcbiAgfSk7XHJcbiAgfVxyXG4gIH1cclxuXHJcbnJldHVybiB7ZXZlbnRzLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlLCBwdWJsaXNofVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzOyIsImltcG9ydCBwcm9qZWN0cyBmcm9tICcuL3Byb2plY3QuanMnO1xyXG5pbXBvcnQgZG9tIGZyb20gJy4vZG9tLmpzJztcclxuaW1wb3J0IGV2ZW50cyBmcm9tICcuL3B1YlN1Yi5qcyc7XHJcbmltcG9ydCBjcmVhdG9yIGZyb20gJy4vY3JlYXRvci5qcyc7XHJcblxyXG5jb25zdCBoYW5kbGVUYXNrcyA9IChmdW5jdGlvbigpIHtcclxuICBjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgdGltZSwgcHJpb3JpdHksIG5vdGVzLCBwcm9qZWN0ID0gJ2luYm94JywgLi4uY2hlY2tMaXN0KSB7XHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9ICBkZXNjcmlwdGlvbjtcclxuICAgICAgdGhpcy5kdWVEYXRlID0gIGR1ZURhdGU7XHJcbiAgICAgIHRoaXMudGltZSA9ICB0aW1lO1xyXG4gICAgICB0aGlzLnByaW9yaXR5ID0gIHByaW9yaXR5O1xyXG4gICAgICB0aGlzLm5vdGVzID0gIG5vdGVzO1xyXG4gICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICB0aGlzLmNoZWNrTGlzdCA9IGNoZWNrTGlzdDtcclxuICAgICAgdGhpcy5pc0NvbXBsZXRlID0gIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdGFza3MgPSBbXTtcclxuICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrO1xyXG5cclxuICBmdW5jdGlvbiBzZXRUaXRsZSgpIHtcclxuICAgIG5ld1Rhc2sudGl0bGUgPSBjcmVhdG9yLmNyZWF0b3IuaW5wdXQudmFsdWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXREZXNjcmlwdGlvbigpIHtcclxuICAgIG5ld1Rhc2suZGVzY3JpcHRpb24gPSBjcmVhdG9yLmRlc2MudGV4dEFyZWEudmFsdWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXREYXRlKCkge1xyXG4gICAgbmV3VGFzay5kdWVEYXRlID0gY3JlYXRvci5kdWVEYXRlLmRhdGUudmFsdWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRUaW1lKCkge1xyXG4gICAgbmV3VGFzay50aW1lID0gY3JlYXRvci50aW1lLnRpbWUudmFsdWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXROb3RlcygpIHtcclxuICAgIG5ld1Rhc2subm90ZXMgPSBjcmVhdG9yLm5vdGVzLnRleHRBcmVhLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0UHJpb3JpdHkoKSB7XHJcbiAgICBuZXdUYXNrLnByaW9yaXR5ID0gY3JlYXRvci5wcmlvcml0eS5zZWxlY3QudmFsdWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRQcm9qZWN0KCkge1xyXG4gICAgbmV3VGFzay5wcm9qZWN0ID0gY3JlYXRvci5wcm9qZWN0cy5zZWxlY3QudmFsdWU7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGFkZFRhc2soKSB7XHJcbiAgICBpZihuZXdUYXNrLnRpdGxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGFza3MucHVzaChuZXdUYXNrKTtcclxuICAgICAgZXZlbnRzLnB1Ymxpc2goJ3Rhc2tzJywgdGFza3MpO1xyXG4gICAgICBuZXdUYXNrID0gbmV3IFRhc2s7XHJcbiAgICAgIGNyZWF0b3IucmVzZXRDcmVhdG9yKCk7XHJcbiAgICAgIHJlbW92ZUV2ZW50cygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoJ0ZpbGwgaW4gdGhlIGZpZWxkcycpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjYW5jZWxBZGQoKSB7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuY3JlYXRvckJnLnJlbW92ZSgpO1xyXG4gICAgY3JlYXRvci5yZXNldENyZWF0b3IoKTtcclxuICAgIHJlbW92ZUV2ZW50cygpO1xyXG4gICAgbmV3VGFzayA9IG5ldyBUYXNrO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBhY3RpdmF0ZUV2ZW50cygpIHtcclxuICAgIGNyZWF0b3IuYXBwZW5kQ3JlYXRvcigpO1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFRpdGxlKTtcclxuICAgIGNyZWF0b3IuZGVzYy50ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXREZXNjcmlwdGlvbik7XHJcbiAgICBjcmVhdG9yLmR1ZURhdGUuZGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXREYXRlKTtcclxuICAgIGNyZWF0b3IudGltZS50aW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFRpbWUpXHJcbiAgICBjcmVhdG9yLnByaW9yaXR5LnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRQcmlvcml0eSk7XHJcbiAgICBjcmVhdG9yLnByb2plY3RzLnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRQcm9qZWN0KTtcclxuICAgIGNyZWF0b3Iubm90ZXMudGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0Tm90ZXMpO1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEFkZCk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFzayk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVFdmVudHMoKSB7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0VGl0bGUpO1xyXG4gICAgY3JlYXRvci5kZXNjLnRleHRBcmVhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldERlc2NyaXB0aW9uKTtcclxuICAgIGNyZWF0b3IuZHVlRGF0ZS5kYXRlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldERhdGUpO1xyXG4gICAgY3JlYXRvci50aW1lLnRpbWUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0VGltZSlcclxuICAgIGNyZWF0b3IucHJpb3JpdHkuc2VsZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFByaW9yaXR5KTtcclxuICAgIGNyZWF0b3Iubm90ZXMudGV4dEFyZWEucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgIHNldE5vdGVzKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5jYW5jZWxCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxBZGQpO1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmFkZEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2spO1xyXG4gIH1cclxuXHJcbiAgZG9tLnNlbGVjdC5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWN0aXZhdGVFdmVudHMpO1xyXG5cclxuICByZXR1cm57dGFza3MsIHJlbW92ZUV2ZW50cywgVGFzaywgYWRkVGFza31cclxufSkoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlVGFza3M7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaGFuZGxlVGFza3MgZnJvbSAnLi90YXNrLmpzJztcclxuaW1wb3J0IGhhbmRsZVByb2plY3RzIGZyb20gJy4vcHJvamVjdC5qcyc7XHJcbmltcG9ydCBhcHBIYW5kbGVyIGZyb20gJy4vYXBwSGFuZGxlci5qcydcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==