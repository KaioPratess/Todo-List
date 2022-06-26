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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/inbox-white.svg */ "./src/img/inbox-white.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/inbox-black.svg */ "./src/img/inbox-black.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/calendar-black.svg */ "./src/img/calendar-black.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/calendar-white.svg */ "./src/img/calendar-white.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/plus-white.svg */ "./src/img/plus-white.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/plus-black.svg */ "./src/img/plus-black.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* General */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n} \r\n\r\nbody {\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.page-structure {\r\n  display: grid;\r\n  grid-template-columns: 300px 4fr;\r\n  grid-template-areas: \r\n  \"header header\"\r\n  \"sidebar main\"\r\n  \"sidebar main\";\r\n  height: 100%;\r\n}\r\n\r\nsvg:not(.logo) {\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* Header */\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 81px;\r\n  padding: 0 30px;\r\n  grid-area: header;\r\n}\r\n\r\n.logo {\r\n  margin-left: 7px;\r\n}\r\n\r\n.header ul {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n/* Sidebar */\r\n.sidebar {\r\n  height: calc(100vh - 81px);\r\n  grid-area: sidebar;\r\n}\r\n\r\n/* Inbox */\r\n.inbox {\r\n  padding: 20px 0 30px 48px;\r\n  height: 156px;\r\n}\r\n\r\n.inbox-title {\r\n  font-size: 3rem;\r\n  position: relative;\r\n}\r\n\r\n.page-structure.dark .inbox-title::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 10px;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\n.page-structure.light .inbox-title::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 10px;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\n.nav ul {\r\n  display: grid;\r\n  gap: 20px;\r\n}\r\n\r\n.nav ul li {\r\n  font-size: 1.125rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(1)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(2)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(3)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(1)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(2)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(3)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n\r\n.nav ul li::before {\r\n  width: 25px;\r\n  height: 25px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* Projects */\r\n.projects {\r\n  padding: 20px 0 0 48px;\r\n}\r\n\r\n.projects h2 {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.add-project {\r\n  font-size: 0.875rem;\r\n  cursor: pointer;\r\n  letter-spacing: 1px;\r\n  margin-top: 25px;\r\n}\r\n\r\n.page-structure.dark .add-project::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n  width: 15px;\r\n  height: 15px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n.page-structure.light .add-project::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n  width: 15px;\r\n  height: 15px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* Main */\r\n.main {\r\n  grid-area: main;\r\n}\r\n\r\n.head-sec {\r\n  display: grid;\r\n  align-items: center;\r\n  padding: 20px 70px;\r\n}\r\n\r\n.date {\r\n  text-align: center;\r\n  font-size: 3rem;\r\n}\r\n\r\n.date p {\r\n  font-size: 3rem;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.list-view {\r\n  padding: 30px 55px;\r\n  height: calc(100vh - 180px);\r\n  overflow: auto;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  cursor: pointer;\r\n  align-items: center;\r\n  padding: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.task-title {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  position: relative;\r\n}\r\n\r\n.checkbox {\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.checkbox + label {\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.checkbox + label::before {\r\n  content: '';\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: 3px;\r\n}\r\n\r\n.checkbox:checked + label::before {\r\n  content: 'ok';\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 4px;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.priority-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.priority-icon.low {\r\n  border: 2.5px solid yellow;\r\n}\r\n\r\n.priority-icon.moderate {\r\n  border: 2.5px solid orange;\r\n}\r\n\r\n.priority-icon.high {\r\n  border: 2.5px solid red;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* Add container */\r\n.add-creator-bg {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgba(0,0,0,.6);\r\n}\r\n\r\n.add-creator-container {\r\n  width: 810px;\r\n  height: 126px;\r\n  border-radius: 12px;\r\n  box-shadow:1px 1px 1px rgba(0, 0, 0, .4);\r\n}\r\n\r\n.creator-input {\r\n  width: 94%;\r\n  height: 34px;\r\n  justify-self: center;\r\n  margin: 20px 25px;\r\n  outline: none;\r\n  border-radius: 12px;\r\n  color: black;\r\n  padding: 0 10px;\r\n  border: none;\r\n}\r\n\r\n.creator-properties {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n}\r\n\r\n.creator-prop-input {\r\n  width: 234px;\r\n  height: 34px;\r\n  border-radius: 12px;\r\n  background-color: #fff;\r\n  margin-left: 25px;\r\n  color: black;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon {\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn {\r\n  color: black;\r\n  padding: 8px 16px;\r\n  white-space: nowrap;\r\n  border-radius: 12px;\r\n  cursor: pointer;\r\n  border: none;\r\n}\r\n\r\n.priority-select, .notes, .desc, .dateInput, .time, .projects-select {\r\n  width: 100%;\r\n  height: 34px;\r\n  border-radius: 12px;\r\n  background-color: #fff;\r\n  color: black;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.priority-select option, .projects-select option {\r\n  color: black;\r\n}\r\n\r\n.notes, .desc, .dateInput, .time {\r\n  padding: 10px;\r\n  resize: none;\r\n}\r\n\r\n/* project container */\r\n.project {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 200px;\r\n  padding: 10px;\r\n  margin: 15px 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.project-h1 {\r\n  font-size: 3rem;\r\n}\r\n\r\n.project:hover {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.date-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 35px 400px 35px;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n.arrow-backward {\r\n  transform: rotate(180deg);\r\n}\r\n\r\n/* details container */\r\n.details-project-task {\r\n  display: none;\r\n}\r\n\r\n.title {\r\n  font-size: 3rem;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.details-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: 1fr;\r\n}\r\n\r\n.details-container input,\r\n.details-container textarea {\r\n  color: black;\r\n  outline: none;\r\n  border: none;\r\n  padding: 6px 8px;\r\n  resize: none;\r\n}\r\n\r\n.details-container select {\r\n  width: 185px;\r\n  padding: 5px 8px;\r\n  border: none;\r\n  outline: none;\r\n  margin-bottom: 20px;\r\n  color: black;\r\n}\r\n\r\n.details-container select option {\r\n  color: black;\r\n}\r\n\r\n.details-container input {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.details-container label {\r\n  margin-right: 8px;\r\n}\r\n\r\n.details-container div:nth-child(1) div:nth-child(2) label {\r\n  margin-right: 25px;\r\n}\r\n\r\n.description,\r\n.deadline {\r\n  grid-column: 1;\r\n}\r\n\r\n.priority-div,\r\n.is-finished {\r\n  grid-column: 2;\r\n}\r\n\r\n.notes-div {\r\n  grid-column: 3;\r\n  display: flex;\r\n}\r\n\r\n.notes-div textarea {\r\n  height: 120px;\r\n}\r\n\r\n@media (prefers-color-scheme: light) {\r\n  * {\r\n    color: black;\r\n  }\r\n\r\n  svg {\r\n    fill: black;\r\n  }\r\n\r\n  .add-creator-container {\r\n    background-color: #FFC05A;\r\n  }\r\n\r\n  .header {\r\n    background-color: #FFC05A;\r\n  }\r\n\r\n  .sidebar {\r\n    background-color: #FFCE7E;\r\n  }\r\n\r\n  .head-sec {\r\n    background-color: #FFDA9E;\r\n  }\r\n\r\n  .main {\r\n    background-color: #FFFFFF;\r\n  }\r\n\r\n  .task:hover {\r\n    background-color: #121212;\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n  }\r\n\r\n  .creator-prop-input { \r\n    background-color: #FFCE7E;\r\n  }\r\n}\r\n\r\n.page-structure.light .header {\r\n  background-color: #FFC05A;\r\n}\r\n\r\n.page-structure.light .creator-prop-input {\r\n  background-color: #FFCE7E;\r\n}\r\n\r\n.page-structure.light *:not(.btn) {\r\n  fill: black;\r\n  color: black;\r\n}\r\n\r\n.page-structure.light .sidebar {\r\n  background-color: #FFCE7E;\r\n}\r\n\r\n.page-structure.light .add-creator-container {\r\n  background-color: #F2BF58;\r\n}\r\n\r\n.page-structure.light .head-sec {\r\n  background-color: #FFDA9E;\r\n}\r\n\r\n.page-structure.light .main {\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n.page-structure.light .task:hover {\r\n  background-color: #FFDA9E;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  * {\r\n    color: white;\r\n  }\r\n\r\n  .add-creator-container {\r\n    background-color: #121212;\r\n  }\r\n\r\n  svg {\r\n    fill: white;\r\n  }\r\n\r\n  .header {\r\n    background-color: #0B0909;\r\n  }\r\n\r\n  .sidebar {\r\n    background-color: #0E0E0E;\r\n  }\r\n\r\n  .head-sec {\r\n    background-color: #121212;\r\n  }\r\n\r\n  .main {\r\n    background-color: #1A1A1A;\r\n  }\r\n\r\n  .task:hover {\r\n    background-color: #121212;\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n  }\r\n}\r\n\r\n.page-structure.dark .header {\r\n  background-color: #0B0909;\r\n}\r\n\r\n.page-structure.dark .creator-prop-input {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.page-structure.dark .sidebar {\r\n  background-color: #0E0E0E;\r\n}\r\n\r\n.page-structure.dark .add-creator-container {\r\n  background-color: #121212;\r\n}\r\n\r\n\r\n.page-structure.dark .head-sec {\r\n  background-color: #121212;\r\n}\r\n\r\n.page-structure.dark .main {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.page-structure.dark .task:hover {\r\n  background-color: #121212;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n.page-structure.dark * {\r\n  fill: white;\r\n}\r\n\r\n.sun, \r\n.moon {\r\n  display: none;\r\n}\r\n\r\n.sun.active,\r\n.moon.active {\r\n  display: block;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* General */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n} \r\n\r\nbody {\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.page-structure {\r\n  display: grid;\r\n  grid-template-columns: 300px 4fr;\r\n  grid-template-areas: \r\n  \"header header\"\r\n  \"sidebar main\"\r\n  \"sidebar main\";\r\n  height: 100%;\r\n}\r\n\r\nsvg:not(.logo) {\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* Header */\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 81px;\r\n  padding: 0 30px;\r\n  grid-area: header;\r\n}\r\n\r\n.logo {\r\n  margin-left: 7px;\r\n}\r\n\r\n.header ul {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n/* Sidebar */\r\n.sidebar {\r\n  height: calc(100vh - 81px);\r\n  grid-area: sidebar;\r\n}\r\n\r\n/* Inbox */\r\n.inbox {\r\n  padding: 20px 0 30px 48px;\r\n  height: 156px;\r\n}\r\n\r\n.inbox-title {\r\n  font-size: 3rem;\r\n  position: relative;\r\n}\r\n\r\n.page-structure.dark .inbox-title::before {\r\n  content: url(\"./img/inbox-white.svg\");\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 10px;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\n.page-structure.light .inbox-title::before {\r\n  content: url(\"./img/inbox-black.svg\");\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 10px;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\n.nav ul {\r\n  display: grid;\r\n  gap: 20px;\r\n}\r\n\r\n.nav ul li {\r\n  font-size: 1.125rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(1)::before {\r\n  content: url(\"./img/inbox-black.svg\");\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(2)::before {\r\n  content: url(\"./img/calendar-black.svg\");\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(3)::before {\r\n  content: url(\"./img/calendar-black.svg\");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(1)::before {\r\n  content: url(\"./img/inbox-white.svg\");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(2)::before {\r\n  content: url(\"./img/calendar-white.svg\");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(3)::before {\r\n  content: url(\"./img/calendar-white.svg\");\r\n}\r\n\r\n.nav ul li::before {\r\n  width: 25px;\r\n  height: 25px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* Projects */\r\n.projects {\r\n  padding: 20px 0 0 48px;\r\n}\r\n\r\n.projects h2 {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.add-project {\r\n  font-size: 0.875rem;\r\n  cursor: pointer;\r\n  letter-spacing: 1px;\r\n  margin-top: 25px;\r\n}\r\n\r\n.page-structure.dark .add-project::before {\r\n  content: url('./img/plus-white.svg');\r\n  width: 15px;\r\n  height: 15px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n.page-structure.light .add-project::before {\r\n  content: url('./img/plus-black.svg');\r\n  width: 15px;\r\n  height: 15px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* Main */\r\n.main {\r\n  grid-area: main;\r\n}\r\n\r\n.head-sec {\r\n  display: grid;\r\n  align-items: center;\r\n  padding: 20px 70px;\r\n}\r\n\r\n.date {\r\n  text-align: center;\r\n  font-size: 3rem;\r\n}\r\n\r\n.date p {\r\n  font-size: 3rem;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.list-view {\r\n  padding: 30px 55px;\r\n  height: calc(100vh - 180px);\r\n  overflow: auto;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  cursor: pointer;\r\n  align-items: center;\r\n  padding: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.task-title {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  position: relative;\r\n}\r\n\r\n.checkbox {\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.checkbox + label {\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.checkbox + label::before {\r\n  content: '';\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: 3px;\r\n}\r\n\r\n.checkbox:checked + label::before {\r\n  content: 'ok';\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 4px;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.priority-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.priority-icon.low {\r\n  border: 2.5px solid yellow;\r\n}\r\n\r\n.priority-icon.moderate {\r\n  border: 2.5px solid orange;\r\n}\r\n\r\n.priority-icon.high {\r\n  border: 2.5px solid red;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* Add container */\r\n.add-creator-bg {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgba(0,0,0,.6);\r\n}\r\n\r\n.add-creator-container {\r\n  width: 810px;\r\n  height: 126px;\r\n  border-radius: 12px;\r\n  box-shadow:1px 1px 1px rgba(0, 0, 0, .4);\r\n}\r\n\r\n.creator-input {\r\n  width: 94%;\r\n  height: 34px;\r\n  justify-self: center;\r\n  margin: 20px 25px;\r\n  outline: none;\r\n  border-radius: 12px;\r\n  color: black;\r\n  padding: 0 10px;\r\n  border: none;\r\n}\r\n\r\n.creator-properties {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n}\r\n\r\n.creator-prop-input {\r\n  width: 234px;\r\n  height: 34px;\r\n  border-radius: 12px;\r\n  background-color: #fff;\r\n  margin-left: 25px;\r\n  color: black;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon {\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn {\r\n  color: black;\r\n  padding: 8px 16px;\r\n  white-space: nowrap;\r\n  border-radius: 12px;\r\n  cursor: pointer;\r\n  border: none;\r\n}\r\n\r\n.priority-select, .notes, .desc, .dateInput, .time, .projects-select {\r\n  width: 100%;\r\n  height: 34px;\r\n  border-radius: 12px;\r\n  background-color: #fff;\r\n  color: black;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.priority-select option, .projects-select option {\r\n  color: black;\r\n}\r\n\r\n.notes, .desc, .dateInput, .time {\r\n  padding: 10px;\r\n  resize: none;\r\n}\r\n\r\n/* project container */\r\n.project {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 200px;\r\n  padding: 10px;\r\n  margin: 15px 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.project-h1 {\r\n  font-size: 3rem;\r\n}\r\n\r\n.project:hover {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.date-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 35px 400px 35px;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n.arrow-backward {\r\n  transform: rotate(180deg);\r\n}\r\n\r\n/* details container */\r\n.details-project-task {\r\n  display: none;\r\n}\r\n\r\n.title {\r\n  font-size: 3rem;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.details-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: 1fr;\r\n}\r\n\r\n.details-container input,\r\n.details-container textarea {\r\n  color: black;\r\n  outline: none;\r\n  border: none;\r\n  padding: 6px 8px;\r\n  resize: none;\r\n}\r\n\r\n.details-container select {\r\n  width: 185px;\r\n  padding: 5px 8px;\r\n  border: none;\r\n  outline: none;\r\n  margin-bottom: 20px;\r\n  color: black;\r\n}\r\n\r\n.details-container select option {\r\n  color: black;\r\n}\r\n\r\n.details-container input {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.details-container label {\r\n  margin-right: 8px;\r\n}\r\n\r\n.details-container div:nth-child(1) div:nth-child(2) label {\r\n  margin-right: 25px;\r\n}\r\n\r\n.description,\r\n.deadline {\r\n  grid-column: 1;\r\n}\r\n\r\n.priority-div,\r\n.is-finished {\r\n  grid-column: 2;\r\n}\r\n\r\n.notes-div {\r\n  grid-column: 3;\r\n  display: flex;\r\n}\r\n\r\n.notes-div textarea {\r\n  height: 120px;\r\n}\r\n\r\n@media (prefers-color-scheme: light) {\r\n  * {\r\n    color: black;\r\n  }\r\n\r\n  svg {\r\n    fill: black;\r\n  }\r\n\r\n  .add-creator-container {\r\n    background-color: #FFC05A;\r\n  }\r\n\r\n  .header {\r\n    background-color: #FFC05A;\r\n  }\r\n\r\n  .sidebar {\r\n    background-color: #FFCE7E;\r\n  }\r\n\r\n  .head-sec {\r\n    background-color: #FFDA9E;\r\n  }\r\n\r\n  .main {\r\n    background-color: #FFFFFF;\r\n  }\r\n\r\n  .task:hover {\r\n    background-color: #121212;\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n  }\r\n\r\n  .creator-prop-input { \r\n    background-color: #FFCE7E;\r\n  }\r\n}\r\n\r\n.page-structure.light .header {\r\n  background-color: #FFC05A;\r\n}\r\n\r\n.page-structure.light .creator-prop-input {\r\n  background-color: #FFCE7E;\r\n}\r\n\r\n.page-structure.light *:not(.btn) {\r\n  fill: black;\r\n  color: black;\r\n}\r\n\r\n.page-structure.light .sidebar {\r\n  background-color: #FFCE7E;\r\n}\r\n\r\n.page-structure.light .add-creator-container {\r\n  background-color: #F2BF58;\r\n}\r\n\r\n.page-structure.light .head-sec {\r\n  background-color: #FFDA9E;\r\n}\r\n\r\n.page-structure.light .main {\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n.page-structure.light .task:hover {\r\n  background-color: #FFDA9E;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  * {\r\n    color: white;\r\n  }\r\n\r\n  .add-creator-container {\r\n    background-color: #121212;\r\n  }\r\n\r\n  svg {\r\n    fill: white;\r\n  }\r\n\r\n  .header {\r\n    background-color: #0B0909;\r\n  }\r\n\r\n  .sidebar {\r\n    background-color: #0E0E0E;\r\n  }\r\n\r\n  .head-sec {\r\n    background-color: #121212;\r\n  }\r\n\r\n  .main {\r\n    background-color: #1A1A1A;\r\n  }\r\n\r\n  .task:hover {\r\n    background-color: #121212;\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n  }\r\n}\r\n\r\n.page-structure.dark .header {\r\n  background-color: #0B0909;\r\n}\r\n\r\n.page-structure.dark .creator-prop-input {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.page-structure.dark .sidebar {\r\n  background-color: #0E0E0E;\r\n}\r\n\r\n.page-structure.dark .add-creator-container {\r\n  background-color: #121212;\r\n}\r\n\r\n\r\n.page-structure.dark .head-sec {\r\n  background-color: #121212;\r\n}\r\n\r\n.page-structure.dark .main {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.page-structure.dark .task:hover {\r\n  background-color: #121212;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n.page-structure.dark * {\r\n  fill: white;\r\n}\r\n\r\n.sun, \r\n.moon {\r\n  display: none;\r\n}\r\n\r\n.sun.active,\r\n.moon.active {\r\n  display: block;\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date.js */ "./src/date.js");
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./creator.js */ "./src/creator.js");







const appHandler = (function() {
  // filter array by date
    _pubSub_js__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('fullDate', _pubSub_js__WEBPACK_IMPORTED_MODULE_2__["default"].events, (date) => {
      function isDueDate(task) {
        return task.dueDate === date
      }
  
      function filterDate() {
        const date = _task_js__WEBPACK_IMPORTED_MODULE_0__["default"].tasks.filter(isDueDate);
        _creator_js__WEBPACK_IMPORTED_MODULE_5__["default"].creator.creatorBg.remove();
        if(date.length > 0) {
          _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.tasksContainer.textContent = '';
          for(let tasks of date) {
            _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].appendTasks(tasks.title, tasks.priority, tasks.project);
          } 
        } else {
            _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.tasksContainer.textContent = "You don't have any task for today."
        }
      }

      filterDate();
    })


  // filter array to find inbox tasks/ or tasks without projects
  function isInbox(task) {
    return task.project === 'Inbox'
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
})()

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
/* harmony import */ var _img_notes_white_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/notes-white.svg */ "./src/img/notes-white.svg");
/* harmony import */ var _img_description_white_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/description-white.svg */ "./src/img/description-white.svg");
/* harmony import */ var _img_project_white_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/project-white.svg */ "./src/img/project-white.svg");
/* harmony import */ var _img_calendar_white_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/calendar-white.svg */ "./src/img/calendar-white.svg");
/* harmony import */ var _img_flag_white_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/flag-white.svg */ "./src/img/flag-white.svg");
/* harmony import */ var _img_checklist_white_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/checklist-white.svg */ "./src/img/checklist-white.svg");
/* harmony import */ var _img_notes_black_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/notes-black.svg */ "./src/img/notes-black.svg");
/* harmony import */ var _img_description_black_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/description-black.svg */ "./src/img/description-black.svg");
/* harmony import */ var _img_project_black_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/project-black.svg */ "./src/img/project-black.svg");
/* harmony import */ var _img_calendar2_black_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/calendar2-black.svg */ "./src/img/calendar2-black.svg");
/* harmony import */ var _img_flag_black_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/flag-black.svg */ "./src/img/flag-black.svg");
/* harmony import */ var _img_checklist_black_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/checklist-black.svg */ "./src/img/checklist-black.svg");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _pubSub_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pubSub.js */ "./src/pubSub.js");















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
  creator.creatorPropInput.textContent = '';

  if(_dom_js__WEBPACK_IMPORTED_MODULE_12__["default"].select.pageStructure.classList.contains('light')) {
    creator.notes.src = _img_notes_black_svg__WEBPACK_IMPORTED_MODULE_6__;
    creator.desc.src = _img_description_black_svg__WEBPACK_IMPORTED_MODULE_7__;
    creator.project.src = _img_project_black_svg__WEBPACK_IMPORTED_MODULE_8__;
    creator.calendar.src = _img_calendar2_black_svg__WEBPACK_IMPORTED_MODULE_9__;
    creator.priority.src = _img_flag_black_svg__WEBPACK_IMPORTED_MODULE_10__;
    creator.checklist.src = _img_checklist_black_svg__WEBPACK_IMPORTED_MODULE_11__;
  } else {
      creator.notes.src = _img_notes_white_svg__WEBPACK_IMPORTED_MODULE_0__;
      creator.desc.src = _img_description_white_svg__WEBPACK_IMPORTED_MODULE_1__;
      creator.project.src = _img_project_white_svg__WEBPACK_IMPORTED_MODULE_2__;
      creator.calendar.src = _img_calendar_white_svg__WEBPACK_IMPORTED_MODULE_3__;
      creator.priority.src = _img_flag_white_svg__WEBPACK_IMPORTED_MODULE_4__;
      creator.checklist.src = _img_checklist_white_svg__WEBPACK_IMPORTED_MODULE_5__;
  }

  creator.cancelBtn.setAttribute('type', 'button');
  creator.cancelBtn.textContent = 'Cancel';
  creator.cancelBtn.classList.add('btn');
  creator.cancelBtn.classList.add('cancel');

  creator.addBtn.setAttribute('type', 'button');
  creator.addBtn.textContent = 'Save';
  creator.addBtn.classList.add('btn');
  creator.addBtn.classList.add('add');
  
  creator.notes.classList.add('icon');
  creator.notes.setAttribute('alt', 'notes');

  creator.desc.classList.add('icon');
  creator.desc.setAttribute('alt', 'desc');

  creator.project.classList.add('icon');
  creator.project.setAttribute('alt', 'project');

  creator.calendar.classList.add('icon');
  creator.calendar.setAttribute('alt', 'calendar');

  creator.priority.classList.add('icon');
  creator.priority.setAttribute('alt', 'priority');

  creator.checklist.classList.add('icon');
  creator.checklist.setAttribute('alt', 'checklist');

  creator.creatorProp.append(creator.creatorPropInput, creator.desc, creator.calendar, creator.priority,  creator.notes, creator.project, creator.checklist, creator.cancelBtn, creator.addBtn);
  creator.creatorContainer.append(creator.input, creator.creatorProp);
  creator.creatorBg.append(creator.creatorContainer);
  _dom_js__WEBPACK_IMPORTED_MODULE_12__["default"].select.pageStructure.append(creator.creatorBg);
}

const priority = {
  select: document.createElement('select'),
  opt0: document.createElement('option'),
  opt1: document.createElement('option'),
  opt2: document.createElement('option'),
  opt3: document.createElement('option'),
}

function appendPriority() {
  priority.select.classList.add('priority-select');
  priority.opt0.setAttribute('value', 'priority');
  priority.opt0.setAttribute('selected', 'selected');
  priority.opt0.textContent = 'Priority';
  priority.opt1.setAttribute('value', 'low');
  priority.opt1.textContent = 'Low';
  priority.opt2.setAttribute('value', 'moderate');
  priority.opt2.textContent = 'Moderate';
  priority.opt3.setAttribute('value', 'high');
  priority.opt3.textContent = 'High';

  priority.select.append(priority.opt1, priority.opt2, priority.opt3, priority.opt0);
  creator.creatorPropInput.textContent = '';
  creator.creatorPropInput.append(priority.select)
}

const projects = {
  select: document.createElement('select'),
  opt0: document.createElement('option'),
}

function appendProjects() {
  projects.select.classList.add('projects-select');
  projects.opt0.setAttribute('value', 'inbox');
  projects.opt0.setAttribute('selected', 'selected');
  projects.opt0.textContent = 'Inbox';

  projects.select.append(projects.opt0);
  creator.creatorPropInput.textContent = '';
  creator.creatorPropInput.append(projects.select)
}

_pubSub_js__WEBPACK_IMPORTED_MODULE_13__["default"].subscribe('projects', _pubSub_js__WEBPACK_IMPORTED_MODULE_13__["default"].events, (project) => {
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
  time.time.value = '';
  priority.select.selectedIndex = null;
  projects.select.selectedIndex = null;
}

creator.priority.addEventListener('click', appendPriority);
creator.notes.addEventListener('click', appendNotes);
creator.desc.addEventListener('click', appendDesc);
creator.calendar.addEventListener('click', appendDueDate);
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

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _pubSub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubSub.js */ "./src/pubSub.js");



const handleDates = (function() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November', 'December'];

  window.addEventListener('load', () => {
    const date = new Date();
    let today = date.getUTCDate();
    let currentMonth = date.getUTCMonth();
    let currentYear = date.getUTCFullYear();
    let month = months[currentMonth];
    let dateString;

    function calculateDays(month) {
      let maxDays;

      if (month === 'February') {
        maxDays = 28;
      } else if(month === 'April' || month === 'June' || month === 'September' || month === 'November') {
        maxDays = 30
      } else {
        maxDays = 31
      }
  
      return maxDays
    }

    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.date.textContent = `${today} ${month} ${currentYear}`;
  
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.arrowBackward.addEventListener('click', () => {
      if(today < 2) {
        if(currentMonth === 0) {
          --currentYear;
          currentMonth = 11;
          month = months[currentMonth];
          const maxDays = calculateDays(month);
          today = maxDays + 1;
        } else {
            let previousMonth = --currentMonth;
            month = months[previousMonth]
            const maxDays = calculateDays(month);
            today = maxDays + 1;
        }
      }
      today--;
      _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.date.textContent = `${today} ${month} ${currentYear}`;
      dateString = `${currentYear}-${('0' + (currentMonth+1)).slice(-2)}-${('0' + today).slice(-2)}`;
      _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].publish('fullDate', dateString);
    })

    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.arrowForward.addEventListener('click', () => {
      const maxDays = calculateDays(month);
      if(today === maxDays) {
        if(currentMonth === 11) {
          ++currentYear;
          currentMonth = 0;
          month = months[currentMonth];
        } else {
          let nextMonth = ++currentMonth;
          month = months[nextMonth];
        }
        today = 0;
      }
      today++;
      _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.date.textContent = `${today} ${month} ${currentYear}`;
      dateString = `${currentYear}-${('0' + (currentMonth+1)).slice(-2)}-${('0' + today).slice(-2)}`;
      _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].publish('fullDate', dateString);
    })

    dateString = `${currentYear}-${('0' + (currentMonth+1)).slice(-2)}-${('0' + today).slice(-2)}`;
    
    _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].publish('fullDate', dateString);

    _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('tasks', _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].events, () => {
      _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].publish('fullDate', dateString);
    });

    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.todayBtn.addEventListener('click', () => {
      today = date.getUTCDate();
      currentMonth = date.getUTCMonth();
      currentYear = date.getUTCFullYear();
      _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.date.textContent = `${today} ${month} ${currentYear}`;
      dateString = `${currentYear}-${('0' + (currentMonth+1)).slice(-2)}-${('0' + today).slice(-2)}`;
      _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].publish('fullDate', dateString);
      _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.headSec.textContent = '';
      _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.headSec.append(_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.dateWrapper);
    })
  })
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleDates);

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
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.js */ "./src/task.js");





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
    tasksContainer: document.querySelector('.tasks-container'),
    headSec: document.querySelector('.head-sec'),
    dateWrapper: document.querySelector('.date-wrapper'),
    arrowBackward: document.querySelector('.arrow-backward'),
    arrowForward: document.querySelector('.arrow-forward'),
    date: document.querySelector('.date'),
    details: document.querySelector('.details-project-task'),
    title: document.querySelector('.title'),
    descriptionInput: document.querySelector('#description'),
    deadlineInput: document.querySelector('#deadline'),
    priorityInput: document.querySelector('#priority'),
    isFinishedInput: document.querySelector('#finished'),
    notesInput: document.querySelector('#notes'),
    sun: document.querySelector('.sun'),
    moon: document.querySelector('.moon')
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

    _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].publish('taskWrapper', wrapper);
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

  function openProjectTask(title, description, deadline, priority, notes, isComplete) {
    select.headSec.textContent = '';
    select.details.style.display = 'block';

    select.tasksContainer.textContent = '';

    select.descriptionInput.value = description;
    select.deadlineInput.value = deadline;
    select.priorityInput.value = priority;
    select.notesInput.value = notes;
    select.isFinishedInput.checked = isComplete;

    select.title.textContent = title;
    select.headSec.append(select.details);
  }

  function appendInbox() {
    select.headSec.textContent = '';
    const inboxTitle = document.createElement('h1');
          inboxTitle.classList.add('inbox-title');
          inboxTitle.textContent = 'Inbox';
    select.headSec.append(inboxTitle);
  }

  select.themeChangeBtn.addEventListener('click', () => {
    select.pageStructure.classList.toggle('dark');
    select.pageStructure.classList.toggle('light');

    select.sun.classList.toggle('active');
    select.moon.classList.toggle('active');
  });

  _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('openTask', _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].events, () => {
    dom.select.descriptionInput.addEventListener('change', _task_js__WEBPACK_IMPORTED_MODULE_3__["default"].editDescription);
    dom.select.deadlineInput.addEventListener('change', _task_js__WEBPACK_IMPORTED_MODULE_3__["default"].editDeadline);
    dom.select.priorityInput.addEventListener('change', _task_js__WEBPACK_IMPORTED_MODULE_3__["default"].editPriority);
    dom.select.notesInput.addEventListener('change', _task_js__WEBPACK_IMPORTED_MODULE_3__["default"].editNotes);
    dom.select.isFinishedInput.addEventListener('change', _task_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkFinish);
  })

  _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('openProject', _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].events, () => {
    dom.select.descriptionInput.addEventListener('change', _project_js__WEBPACK_IMPORTED_MODULE_2__["default"].editDescription);
    dom.select.deadlineInput.addEventListener('change', _project_js__WEBPACK_IMPORTED_MODULE_2__["default"].editDeadline);
    dom.select.priorityInput.addEventListener('change', _project_js__WEBPACK_IMPORTED_MODULE_2__["default"].editPriority);
    dom.select.notesInput.addEventListener('change', _project_js__WEBPACK_IMPORTED_MODULE_2__["default"].editNotes);
    dom.select.isFinishedInput.addEventListener('change', _project_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkFinish);
  })
  

  return {
    select,
    appendTasks,
    appendProject,
    openProjectTask,
    appendInbox,
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

  // filter tasks of a specific project
  const projectWrappers = [];

  _pubSub_js__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('getWrapper', _pubSub_js__WEBPACK_IMPORTED_MODULE_2__["default"].events, (wrapper) => {
    projectWrappers.push(wrapper);

    projectWrappers.forEach((wrapper) => {
      wrapper.addEventListener('click', (event) => {
        projects.forEach((project) => {
          if(event.target.outerText == project.title) {
            _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].openProjectTask(project.title, project.description, project.dueDate, project.priority, project.notes, project.isComplete);
            _pubSub_js__WEBPACK_IMPORTED_MODULE_2__["default"].publish('openProject', '');
            project.tasks.forEach((task) => {
              _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendTasks(task.title, task.priority, task.project);
            })
          }
        })
      })
    })
  });

  function editDescription() {
    projects.forEach((project) => {
      if(project.title === _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.title.textContent) {
        project.description = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.descriptionInput.value;
        console.log(projects)
      }
    })
  }


  function editDeadline() {
    projects.forEach((project) => {
      if(project.title === _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.title.textContent) {
        project.dueDate = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.deadlineInput.value;
        console.log(projects)
      }
    })
  }

  function editPriority() {
    projects.forEach((project) => {
      if(project.title === _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.title.textContent) {
        project.priority = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.priorityInput.value;
        console.log(projects)
      }
    })
  }

  function editNotes() {
    projects.forEach((project) => {
      if(project.title === _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.title.textContent) {
        project.notes = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.notesInput.value;
        console.log(projects)
      }
    })
  }

  function checkFinish(event) {
    projects.forEach((project) => {
      if(project.title === _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.title.textContent) {
        if(event.target.checked === true) {
          project.isComplete = true;
        } else {
            project.isComplete = false;
        }
        console.log(projects)
      }
    })
  }

  return {projects, removeEvents, Project, addProject, editDescription, editDeadline, editPriority, editNotes, checkFinish}
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
    constructor(title, description, dueDate, time, priority = 'Low', notes, project = 'Inbox', ...checkList) {
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
      _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].projects.forEach((project) => {
        if(project.title == newTask.project) {
          project.tasks.push(newTask)
        }
      })
      newTask = new Task;
      _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].resetCreator();
      _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].creator.creatorBg.remove();
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

  const wrappers = [];

  _pubSub_js__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('taskWrapper', _pubSub_js__WEBPACK_IMPORTED_MODULE_2__["default"].events, (wrapper) => {
    wrappers.push(wrapper);
    wrappers.forEach((wrapper) => {
      wrapper.addEventListener('click', (event) => {
        tasks.forEach((task) => {
          if(event.target.outerText === task.title) {
            _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.tasksContainer.textContent = '';
            _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].openProjectTask(task.title, task.description, task.dueDate, task.priority, task.notes);
            _pubSub_js__WEBPACK_IMPORTED_MODULE_2__["default"].publish('openTask', '');
          }
        })
      })
    })
  });

  function editDescription() {
    tasks.forEach((task) => {
      if(task.title === _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.title.textContent) {
        task.description = _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.descriptionInput.value;
        console.log(tasks)
      }
    })
  }


  function editDeadline() {
    tasks.forEach((task) => {
      if(task.title === _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.title.textContent) {
        task.dueDate = _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.deadlineInput.value;
        console.log(tasks)
      }
    })
  }

  function editPriority() {
    tasks.forEach((task) => {
      if(task.title === _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.title.textContent) {
        task.priority = _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.priorityInput.value;
        console.log(tasks)
      }
    })
  }

  function editNotes() {
    tasks.forEach((task) => {
      if(task.title === _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.title.textContent) {
        task.notes = _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.notesInput.value;
        console.log(tasks)
      }
    })
  }

  function checkFinish(event) {
    tasks.forEach((task) => {
      if(task.title === _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.title.textContent) {
        if(event.target.checked === true) {
          task.isComplete = true;
        } else {
            task.isComplete = false;
        }
        console.log(tasks)
      }
    })
  }

  _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.addTaskBtn.addEventListener('click', activateEvents);

  return{tasks, removeEvents, Task, addTask,  editDescription, editDeadline, editPriority, editNotes, checkFinish}
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleTasks);


/***/ }),

/***/ "./src/img/calendar-black.svg":
/*!************************************!*\
  !*** ./src/img/calendar-black.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56722f0443fef1cde8d5.svg";

/***/ }),

/***/ "./src/img/calendar-white.svg":
/*!************************************!*\
  !*** ./src/img/calendar-white.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6bdb01c6bb2e9bfcaf3b.svg";

/***/ }),

/***/ "./src/img/calendar2-black.svg":
/*!*************************************!*\
  !*** ./src/img/calendar2-black.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6889ba7da30f6954f1e.svg";

/***/ }),

/***/ "./src/img/checklist-black.svg":
/*!*************************************!*\
  !*** ./src/img/checklist-black.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "246d832ce0bffbf2b848.svg";

/***/ }),

/***/ "./src/img/checklist-white.svg":
/*!*************************************!*\
  !*** ./src/img/checklist-white.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54394cde2ac6375cafff.svg";

/***/ }),

/***/ "./src/img/description-black.svg":
/*!***************************************!*\
  !*** ./src/img/description-black.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c3d3d6df40be1465467.svg";

/***/ }),

/***/ "./src/img/description-white.svg":
/*!***************************************!*\
  !*** ./src/img/description-white.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84a15aadfc45e41019d8.svg";

/***/ }),

/***/ "./src/img/flag-black.svg":
/*!********************************!*\
  !*** ./src/img/flag-black.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ac657012a32e0e1327d.svg";

/***/ }),

/***/ "./src/img/flag-white.svg":
/*!********************************!*\
  !*** ./src/img/flag-white.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d0c28833daaa35f3de8f.svg";

/***/ }),

/***/ "./src/img/inbox-black.svg":
/*!*********************************!*\
  !*** ./src/img/inbox-black.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45efe7af1037b8649c2c.svg";

/***/ }),

/***/ "./src/img/inbox-white.svg":
/*!*********************************!*\
  !*** ./src/img/inbox-white.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7754ba27b67ad82045f7.svg";

/***/ }),

/***/ "./src/img/notes-black.svg":
/*!*********************************!*\
  !*** ./src/img/notes-black.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7edffcb78707ba56465c.svg";

/***/ }),

/***/ "./src/img/notes-white.svg":
/*!*********************************!*\
  !*** ./src/img/notes-white.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "015b948b4c7549c5f402.svg";

/***/ }),

/***/ "./src/img/plus-black.svg":
/*!********************************!*\
  !*** ./src/img/plus-black.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e903d298adb8cdeea87.svg";

/***/ }),

/***/ "./src/img/plus-white.svg":
/*!********************************!*\
  !*** ./src/img/plus-white.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "169fda577e02ab4b95fc.svg";

/***/ }),

/***/ "./src/img/project-black.svg":
/*!***********************************!*\
  !*** ./src/img/project-black.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "376f8fead1006cae20c6.svg";

/***/ }),

/***/ "./src/img/project-white.svg":
/*!***********************************!*\
  !*** ./src/img/project-white.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4aad99f35aeefe7c8d0b.svg";

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
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date.js */ "./src/date.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");











})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUIsS0FBSyxPQUFPLHFGQUFxRixLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxRQUFRLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUs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V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQztBQUNNO0FBQ0Q7QUFDTDtBQUNwQztBQUNBO0FBQ3FCO0FBQ3JCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBIYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3B1YlN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvaW5ib3gtd2hpdGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvaW5ib3gtYmxhY2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWcvY2FsZW5kYXItYmxhY2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWcvY2FsZW5kYXItd2hpdGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pbWcvcGx1cy13aGl0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9wbHVzLWJsYWNrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogR2VuZXJhbCAqL1xcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn0gXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDRmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxyXFxuICBcXFwic2lkZWJhciBtYWluXFxcIlxcclxcbiAgXFxcInNpZGViYXIgbWFpblxcXCI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbnN2Zzpub3QoLmxvZ28pIHtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBIZWFkZXIgKi9cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA4MXB4O1xcclxcbiAgcGFkZGluZzogMCAzMHB4O1xcclxcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2lkZWJhciAqL1xcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDgxcHgpO1xcclxcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbmJveCAqL1xcclxcbi5pbmJveCB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDAgMzBweCA0OHB4O1xcclxcbiAgaGVpZ2h0OiAxNTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmluYm94LXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLmluYm94LXRpdGxlOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAuaW5ib3gtdGl0bGU6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHVsIGxpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAubmF2IHVsIGxpOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAubmF2IHVsIGxpOm50aC1jaGlsZCgyKTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAubmF2IHVsIGxpOm50aC1jaGlsZCgzKTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5uYXYgdWwgbGk6bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLm5hdiB1bCBsaTpudGgtY2hpbGQoMik6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAubmF2IHVsIGxpOm50aC1jaGlsZCgzKTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5uYXYgdWwgbGk6OmJlZm9yZSB7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIFByb2plY3RzICovXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMCAwIDQ4cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyBoMiB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdCB7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5hZGQtcHJvamVjdDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAuYWRkLXByb2plY3Q6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWluICovXFxyXFxuLm1haW4ge1xcclxcbiAgZ3JpZC1hcmVhOiBtYWluO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZC1zZWMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDcwcHg7XFxyXFxufVxcclxcblxcclxcbi5kYXRlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUgcCB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5saXN0LXZpZXcge1xcclxcbiAgcGFkZGluZzogMzBweCA1NXB4O1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTgwcHgpO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94ICsgbGFiZWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCArIGxhYmVsOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94OmNoZWNrZWQgKyBsYWJlbDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICdvayc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaWNvbiB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWljb24ubG93IHtcXHJcXG4gIGJvcmRlcjogMi41cHggc29saWQgeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaWNvbi5tb2RlcmF0ZSB7XFxyXFxuICBib3JkZXI6IDIuNXB4IHNvbGlkIG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWljb24uaGlnaCB7XFxyXFxuICBib3JkZXI6IDIuNXB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQWRkIGNvbnRhaW5lciAqL1xcclxcbi5hZGQtY3JlYXRvci1iZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNik7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY3JlYXRvci1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDgxMHB4O1xcclxcbiAgaGVpZ2h0OiAxMjZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBib3gtc2hhZG93OjFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRvci1pbnB1dCB7XFxyXFxuICB3aWR0aDogOTQlO1xcclxcbiAgaGVpZ2h0OiAzNHB4O1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDIwcHggMjVweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRvci1wcm9wZXJ0aWVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0b3ItcHJvcC1pbnB1dCB7XFxyXFxuICB3aWR0aDogMjM0cHg7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1zZWxlY3QsIC5ub3RlcywgLmRlc2MsIC5kYXRlSW5wdXQsIC50aW1lLCAucHJvamVjdHMtc2VsZWN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktc2VsZWN0IG9wdGlvbiwgLnByb2plY3RzLXNlbGVjdCBvcHRpb24ge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZXMsIC5kZXNjLCAuZGF0ZUlucHV0LCAudGltZSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwcm9qZWN0IGNvbnRhaW5lciAqL1xcclxcbi5wcm9qZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAxNXB4IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IDQwMHB4IDM1cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJyb3ctYmFja3dhcmQge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZGV0YWlscyBjb250YWluZXIgKi9cXHJcXG4uZGV0YWlscy1wcm9qZWN0LXRhc2sge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgaW5wdXQsXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIHRleHRhcmVhIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA2cHggOHB4O1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgc2VsZWN0IHtcXHJcXG4gIHdpZHRoOiAxODVweDtcXHJcXG4gIHBhZGRpbmc6IDVweCA4cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIHNlbGVjdCBvcHRpb24ge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgaW5wdXQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIGxhYmVsIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgZGl2Om50aC1jaGlsZCgxKSBkaXY6bnRoLWNoaWxkKDIpIGxhYmVsIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLFxcclxcbi5kZWFkbGluZSB7XFxyXFxuICBncmlkLWNvbHVtbjogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWRpdixcXHJcXG4uaXMtZmluaXNoZWQge1xcclxcbiAgZ3JpZC1jb2x1bW46IDI7XFxyXFxufVxcclxcblxcclxcbi5ub3Rlcy1kaXYge1xcclxcbiAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZXMtZGl2IHRleHRhcmVhIHtcXHJcXG4gIGhlaWdodDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KSB7XFxyXFxuICAqIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcblxcclxcbiAgc3ZnIHtcXHJcXG4gICAgZmlsbDogYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkLWNyZWF0b3ItY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzA1QTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMDVBO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNpZGViYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDRTdFO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWQtc2VjIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREE5RTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzg4ODtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM1NTU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY3JlYXRvci1wcm9wLWlucHV0IHsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkNFN0U7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMwNUE7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAuY3JlYXRvci1wcm9wLWlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkNFN0U7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAqOm5vdCguYnRuKSB7XFxyXFxuICBmaWxsOiBibGFjaztcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5zaWRlYmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkNFN0U7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAuYWRkLWNyZWF0b3ItY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkJGNTg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAuaGVhZC1zZWMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREE5RTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5tYWluIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAudGFzazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEQTlFO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogIzg4ODtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxyXFxuICAqIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZC1jcmVhdG9yLWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzdmcge1xcclxcbiAgICBmaWxsOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEIwOTA5O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNpZGViYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEUwRTBFO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWQtc2VjIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzg4ODtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM1NTU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBCMDkwOTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLmNyZWF0b3ItcHJvcC1pbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAuc2lkZWJhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEUwRTBFO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAuYWRkLWNyZWF0b3ItY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5oZWFkLXNlYyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAubWFpbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAudGFzazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyazo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcms6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM4ODg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAqIHtcXHJcXG4gIGZpbGw6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VuLCBcXHJcXG4ubW9vbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VuLmFjdGl2ZSxcXHJcXG4ubW9vbi5hY3RpdmUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsWUFBWTtBQUNaO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEM7OztnQkFHYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7O0FBR0EsV0FBVztBQUNYO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBLFlBQVk7QUFDWjtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7O0FBRUEsVUFBVTtBQUNWO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnREFBcUM7RUFDckMscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxnREFBcUM7RUFDckMscUJB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Q2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBR0E7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFHQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHZW5lcmFsICovXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufSBcXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggNGZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXHJcXG4gIFxcXCJzaWRlYmFyIG1haW5cXFwiXFxyXFxuICBcXFwic2lkZWJhciBtYWluXFxcIjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuc3ZnOm5vdCgubG9nbykge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEhlYWRlciAqL1xcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDgxcHg7XFxyXFxuICBwYWRkaW5nOiAwIDMwcHg7XFxyXFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTaWRlYmFyICovXFxyXFxuLnNpZGViYXIge1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODFweCk7XFxyXFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxyXFxufVxcclxcblxcclxcbi8qIEluYm94ICovXFxyXFxuLmluYm94IHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMCAzMHB4IDQ4cHg7XFxyXFxuICBoZWlnaHQ6IDE1NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5ib3gtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAuaW5ib3gtdGl0bGU6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vaW1nL2luYm94LXdoaXRlLnN2Z1xcXCIpO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5pbmJveC10aXRsZTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi9pbWcvaW5ib3gtYmxhY2suc3ZnXFxcIik7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYgdWwgbGkge1xcclxcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5uYXYgdWwgbGk6bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuL2ltZy9pbmJveC1ibGFjay5zdmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5uYXYgdWwgbGk6bnRoLWNoaWxkKDIpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuL2ltZy9jYWxlbmRhci1ibGFjay5zdmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5uYXYgdWwgbGk6bnRoLWNoaWxkKDMpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuL2ltZy9jYWxlbmRhci1ibGFjay5zdmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLm5hdiB1bCBsaTpudGgtY2hpbGQoMSk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vaW1nL2luYm94LXdoaXRlLnN2Z1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAubmF2IHVsIGxpOm50aC1jaGlsZCgyKTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi9pbWcvY2FsZW5kYXItd2hpdGUuc3ZnXFxcIik7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5uYXYgdWwgbGk6bnRoLWNoaWxkKDMpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuL2ltZy9jYWxlbmRhci13aGl0ZS5zdmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB1bCBsaTo6YmVmb3JlIHtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUHJvamVjdHMgKi9cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgcGFkZGluZzogMjBweCAwIDAgNDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLmFkZC1wcm9qZWN0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKCcuL2ltZy9wbHVzLXdoaXRlLnN2ZycpO1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLmFkZC1wcm9qZWN0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKCcuL2ltZy9wbHVzLWJsYWNrLnN2ZycpO1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWluICovXFxyXFxuLm1haW4ge1xcclxcbiAgZ3JpZC1hcmVhOiBtYWluO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZC1zZWMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDcwcHg7XFxyXFxufVxcclxcblxcclxcbi5kYXRlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUgcCB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5saXN0LXZpZXcge1xcclxcbiAgcGFkZGluZzogMzBweCA1NXB4O1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTgwcHgpO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94ICsgbGFiZWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCArIGxhYmVsOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94OmNoZWNrZWQgKyBsYWJlbDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICdvayc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaWNvbiB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWljb24ubG93IHtcXHJcXG4gIGJvcmRlcjogMi41cHggc29saWQgeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaWNvbi5tb2RlcmF0ZSB7XFxyXFxuICBib3JkZXI6IDIuNXB4IHNvbGlkIG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWljb24uaGlnaCB7XFxyXFxuICBib3JkZXI6IDIuNXB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQWRkIGNvbnRhaW5lciAqL1xcclxcbi5hZGQtY3JlYXRvci1iZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNik7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY3JlYXRvci1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDgxMHB4O1xcclxcbiAgaGVpZ2h0OiAxMjZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBib3gtc2hhZG93OjFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRvci1pbnB1dCB7XFxyXFxuICB3aWR0aDogOTQlO1xcclxcbiAgaGVpZ2h0OiAzNHB4O1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDIwcHggMjVweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRvci1wcm9wZXJ0aWVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0b3ItcHJvcC1pbnB1dCB7XFxyXFxuICB3aWR0aDogMjM0cHg7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1zZWxlY3QsIC5ub3RlcywgLmRlc2MsIC5kYXRlSW5wdXQsIC50aW1lLCAucHJvamVjdHMtc2VsZWN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktc2VsZWN0IG9wdGlvbiwgLnByb2plY3RzLXNlbGVjdCBvcHRpb24ge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZXMsIC5kZXNjLCAuZGF0ZUlucHV0LCAudGltZSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwcm9qZWN0IGNvbnRhaW5lciAqL1xcclxcbi5wcm9qZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAxNXB4IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IDQwMHB4IDM1cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJyb3ctYmFja3dhcmQge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZGV0YWlscyBjb250YWluZXIgKi9cXHJcXG4uZGV0YWlscy1wcm9qZWN0LXRhc2sge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgaW5wdXQsXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIHRleHRhcmVhIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA2cHggOHB4O1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgc2VsZWN0IHtcXHJcXG4gIHdpZHRoOiAxODVweDtcXHJcXG4gIHBhZGRpbmc6IDVweCA4cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIHNlbGVjdCBvcHRpb24ge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgaW5wdXQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIGxhYmVsIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgZGl2Om50aC1jaGlsZCgxKSBkaXY6bnRoLWNoaWxkKDIpIGxhYmVsIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLFxcclxcbi5kZWFkbGluZSB7XFxyXFxuICBncmlkLWNvbHVtbjogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWRpdixcXHJcXG4uaXMtZmluaXNoZWQge1xcclxcbiAgZ3JpZC1jb2x1bW46IDI7XFxyXFxufVxcclxcblxcclxcbi5ub3Rlcy1kaXYge1xcclxcbiAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZXMtZGl2IHRleHRhcmVhIHtcXHJcXG4gIGhlaWdodDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KSB7XFxyXFxuICAqIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcblxcclxcbiAgc3ZnIHtcXHJcXG4gICAgZmlsbDogYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkLWNyZWF0b3ItY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzA1QTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMDVBO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNpZGViYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDRTdFO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWQtc2VjIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREE5RTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzg4ODtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM1NTU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY3JlYXRvci1wcm9wLWlucHV0IHsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkNFN0U7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMwNUE7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAuY3JlYXRvci1wcm9wLWlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkNFN0U7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAqOm5vdCguYnRuKSB7XFxyXFxuICBmaWxsOiBibGFjaztcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5zaWRlYmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkNFN0U7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAuYWRkLWNyZWF0b3ItY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkJGNTg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAuaGVhZC1zZWMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREE5RTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5tYWluIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAudGFzazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEQTlFO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogIzg4ODtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxyXFxuICAqIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZC1jcmVhdG9yLWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzdmcge1xcclxcbiAgICBmaWxsOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEIwOTA5O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNpZGViYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEUwRTBFO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWQtc2VjIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzg4ODtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM1NTU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBCMDkwOTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLmNyZWF0b3ItcHJvcC1pbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAuc2lkZWJhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEUwRTBFO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAuYWRkLWNyZWF0b3ItY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5oZWFkLXNlYyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAubWFpbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAudGFzazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyazo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcms6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM4ODg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAqIHtcXHJcXG4gIGZpbGw6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VuLCBcXHJcXG4ubW9vbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VuLmFjdGl2ZSxcXHJcXG4ubW9vbi5hY3RpdmUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgdGFzayBmcm9tICcuL3Rhc2suanMnO1xyXG5pbXBvcnQgcHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xyXG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vcHViU3ViLmpzJztcclxuaW1wb3J0IGRvbSBmcm9tICcuL2RvbS5qcyc7XHJcbmltcG9ydCBkYXRlIGZyb20gJy4vZGF0ZS5qcyc7XHJcbmltcG9ydCBjcmVhdG9yIGZyb20gJy4vY3JlYXRvci5qcyc7XHJcblxyXG5jb25zdCBhcHBIYW5kbGVyID0gKGZ1bmN0aW9uKCkge1xyXG4gIC8vIGZpbHRlciBhcnJheSBieSBkYXRlXHJcbiAgICBldmVudHMuc3Vic2NyaWJlKCdmdWxsRGF0ZScsIGV2ZW50cy5ldmVudHMsIChkYXRlKSA9PiB7XHJcbiAgICAgIGZ1bmN0aW9uIGlzRHVlRGF0ZSh0YXNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2suZHVlRGF0ZSA9PT0gZGF0ZVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGZ1bmN0aW9uIGZpbHRlckRhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRhc2sudGFza3MuZmlsdGVyKGlzRHVlRGF0ZSk7XHJcbiAgICAgICAgY3JlYXRvci5jcmVhdG9yLmNyZWF0b3JCZy5yZW1vdmUoKTtcclxuICAgICAgICBpZihkYXRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGRvbS5zZWxlY3QudGFza3NDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgIGZvcihsZXQgdGFza3Mgb2YgZGF0ZSkge1xyXG4gICAgICAgICAgICBkb20uYXBwZW5kVGFza3ModGFza3MudGl0bGUsIHRhc2tzLnByaW9yaXR5LCB0YXNrcy5wcm9qZWN0KTtcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9tLnNlbGVjdC50YXNrc0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiWW91IGRvbid0IGhhdmUgYW55IHRhc2sgZm9yIHRvZGF5LlwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmaWx0ZXJEYXRlKCk7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgLy8gZmlsdGVyIGFycmF5IHRvIGZpbmQgaW5ib3ggdGFza3MvIG9yIHRhc2tzIHdpdGhvdXQgcHJvamVjdHNcclxuICBmdW5jdGlvbiBpc0luYm94KHRhc2spIHtcclxuICAgIHJldHVybiB0YXNrLnByb2plY3QgPT09ICdJbmJveCdcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbHRlckluYm94KCkge1xyXG4gICAgY29uc3QgaW5ib3ggPSB0YXNrLnRhc2tzLmZpbHRlcihpc0luYm94KTtcclxuICAgIGRvbS5hcHBlbmRJbmJveCgpO1xyXG4gICAgaWYoaW5ib3gubGVuZ3RoID4gMCkge1xyXG4gICAgICBkb20uc2VsZWN0LnRhc2tzQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIGZvcihsZXQgdGFza3Mgb2YgaW5ib3gpIHtcclxuICAgICAgICBkb20uYXBwZW5kVGFza3ModGFza3MudGl0bGUsIHRhc2tzLnByaW9yaXR5LCB0YXNrcy5wcm9qZWN0KTtcclxuICAgICAgfSBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9tLnNlbGVjdC50YXNrc0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICdZb3VyIGluYm94IGlzIGNsZWFuLidcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvbS5zZWxlY3QuaW5ib3hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmaWx0ZXJJbmJveClcclxufSkoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwSGFuZGxlcjsiLCJpbXBvcnQgbm90ZXNXaGl0ZSBmcm9tICcuL2ltZy9ub3Rlcy13aGl0ZS5zdmcnO1xyXG5pbXBvcnQgZGVzY1doaXRlIGZyb20gJy4vaW1nL2Rlc2NyaXB0aW9uLXdoaXRlLnN2Zyc7XHJcbmltcG9ydCBwcm9qZWN0V2hpdGUgZnJvbSAnLi9pbWcvcHJvamVjdC13aGl0ZS5zdmcnO1xyXG5pbXBvcnQgY2FsZW5kYXJXaGl0ZSBmcm9tICcuL2ltZy9jYWxlbmRhci13aGl0ZS5zdmcnO1xyXG5pbXBvcnQgZmxhZ1doaXRlIGZyb20gJy4vaW1nL2ZsYWctd2hpdGUuc3ZnJztcclxuaW1wb3J0IGNoZWNrbGlzdFdoaXRlIGZyb20gJy4vaW1nL2NoZWNrbGlzdC13aGl0ZS5zdmcnO1xyXG5pbXBvcnQgbm90ZXNCbGFjayBmcm9tICcuL2ltZy9ub3Rlcy1ibGFjay5zdmcnO1xyXG5pbXBvcnQgZGVzY0JsYWNrIGZyb20gJy4vaW1nL2Rlc2NyaXB0aW9uLWJsYWNrLnN2Zyc7XHJcbmltcG9ydCBwcm9qZWN0QmxhY2sgZnJvbSAnLi9pbWcvcHJvamVjdC1ibGFjay5zdmcnO1xyXG5pbXBvcnQgY2FsZW5kYXJCbGFjayBmcm9tICcuL2ltZy9jYWxlbmRhcjItYmxhY2suc3ZnJztcclxuaW1wb3J0IGZsYWdCbGFjayBmcm9tICcuL2ltZy9mbGFnLWJsYWNrLnN2Zyc7XHJcbmltcG9ydCBjaGVja2xpc3RCbGFjayBmcm9tICcuL2ltZy9jaGVja2xpc3QtYmxhY2suc3ZnJztcclxuaW1wb3J0IGRvbSBmcm9tICcuL2RvbS5qcyc7XHJcbmltcG9ydCBldmVudHMgZnJvbScuL3B1YlN1Yi5qcyc7XHJcblxyXG5jb25zdCBjcmVhdG9yID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuY29uc3QgY3JlYXRvciA9IHtcclxuICBjcmVhdG9yQmc6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gIGNyZWF0b3JDb250YWluZXI6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gIGlucHV0OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpLFxyXG4gIGNyZWF0b3JQcm9wOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICBjcmVhdG9yUHJvcElucHV0OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICBjYW5jZWxCdG46IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG4gIGFkZEJ0bjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcbiAgbm90ZXM6IG5ldyBJbWFnZSgpLFxyXG4gIGRlc2M6IG5ldyBJbWFnZSgpLFxyXG4gIHByb2plY3Q6IG5ldyBJbWFnZSgpLFxyXG4gIGNhbGVuZGFyOiBuZXcgSW1hZ2UoKSxcclxuICBwcmlvcml0eTogbmV3IEltYWdlKCksXHJcbiAgY2hlY2tsaXN0OiBuZXcgSW1hZ2UoKSxcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kQ3JlYXRvciAoKSB7XHJcbiAgY3JlYXRvci5jcmVhdG9yQmcuY2xhc3NMaXN0LmFkZCgnYWRkLWNyZWF0b3ItYmcnKVxyXG5cclxuICBjcmVhdG9yLmNyZWF0b3JDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkLWNyZWF0b3ItY29udGFpbmVyJyk7XHJcblxyXG4gIGNyZWF0b3IuaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdG9yJyk7XHJcbiAgY3JlYXRvci5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY3JlYXRvcicpO1xyXG4gIGNyZWF0b3IuaW5wdXQuY2xhc3NMaXN0LmFkZCgnY3JlYXRvci1pbnB1dCcpO1xyXG5cclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wLmNsYXNzTGlzdC5hZGQoJ2NyZWF0b3ItcHJvcGVydGllcycpO1xyXG5cclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wSW5wdXQuY2xhc3NMaXN0LmFkZCgnY3JlYXRvci1wcm9wLWlucHV0Jyk7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gIGlmKGRvbS5zZWxlY3QucGFnZVN0cnVjdHVyZS5jbGFzc0xpc3QuY29udGFpbnMoJ2xpZ2h0JykpIHtcclxuICAgIGNyZWF0b3Iubm90ZXMuc3JjID0gbm90ZXNCbGFjaztcclxuICAgIGNyZWF0b3IuZGVzYy5zcmMgPSBkZXNjQmxhY2s7XHJcbiAgICBjcmVhdG9yLnByb2plY3Quc3JjID0gcHJvamVjdEJsYWNrO1xyXG4gICAgY3JlYXRvci5jYWxlbmRhci5zcmMgPSBjYWxlbmRhckJsYWNrO1xyXG4gICAgY3JlYXRvci5wcmlvcml0eS5zcmMgPSBmbGFnQmxhY2s7XHJcbiAgICBjcmVhdG9yLmNoZWNrbGlzdC5zcmMgPSBjaGVja2xpc3RCbGFjaztcclxuICB9IGVsc2Uge1xyXG4gICAgICBjcmVhdG9yLm5vdGVzLnNyYyA9IG5vdGVzV2hpdGU7XHJcbiAgICAgIGNyZWF0b3IuZGVzYy5zcmMgPSBkZXNjV2hpdGU7XHJcbiAgICAgIGNyZWF0b3IucHJvamVjdC5zcmMgPSBwcm9qZWN0V2hpdGU7XHJcbiAgICAgIGNyZWF0b3IuY2FsZW5kYXIuc3JjID0gY2FsZW5kYXJXaGl0ZTtcclxuICAgICAgY3JlYXRvci5wcmlvcml0eS5zcmMgPSBmbGFnV2hpdGU7XHJcbiAgICAgIGNyZWF0b3IuY2hlY2tsaXN0LnNyYyA9IGNoZWNrbGlzdFdoaXRlO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRvci5jYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gIGNyZWF0b3IuY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgY3JlYXRvci5jYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgY3JlYXRvci5jYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsJyk7XHJcblxyXG4gIGNyZWF0b3IuYWRkQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICBjcmVhdG9yLmFkZEJ0bi50ZXh0Q29udGVudCA9ICdTYXZlJztcclxuICBjcmVhdG9yLmFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICBjcmVhdG9yLmFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQnKTtcclxuICBcclxuICBjcmVhdG9yLm5vdGVzLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuICBjcmVhdG9yLm5vdGVzLnNldEF0dHJpYnV0ZSgnYWx0JywgJ25vdGVzJyk7XHJcblxyXG4gIGNyZWF0b3IuZGVzYy5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XHJcbiAgY3JlYXRvci5kZXNjLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2Rlc2MnKTtcclxuXHJcbiAgY3JlYXRvci5wcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuICBjcmVhdG9yLnByb2plY3Quc2V0QXR0cmlidXRlKCdhbHQnLCAncHJvamVjdCcpO1xyXG5cclxuICBjcmVhdG9yLmNhbGVuZGFyLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuICBjcmVhdG9yLmNhbGVuZGFyLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2NhbGVuZGFyJyk7XHJcblxyXG4gIGNyZWF0b3IucHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG4gIGNyZWF0b3IucHJpb3JpdHkuc2V0QXR0cmlidXRlKCdhbHQnLCAncHJpb3JpdHknKTtcclxuXHJcbiAgY3JlYXRvci5jaGVja2xpc3QuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG4gIGNyZWF0b3IuY2hlY2tsaXN0LnNldEF0dHJpYnV0ZSgnYWx0JywgJ2NoZWNrbGlzdCcpO1xyXG5cclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wLmFwcGVuZChjcmVhdG9yLmNyZWF0b3JQcm9wSW5wdXQsIGNyZWF0b3IuZGVzYywgY3JlYXRvci5jYWxlbmRhciwgY3JlYXRvci5wcmlvcml0eSwgIGNyZWF0b3Iubm90ZXMsIGNyZWF0b3IucHJvamVjdCwgY3JlYXRvci5jaGVja2xpc3QsIGNyZWF0b3IuY2FuY2VsQnRuLCBjcmVhdG9yLmFkZEJ0bik7XHJcbiAgY3JlYXRvci5jcmVhdG9yQ29udGFpbmVyLmFwcGVuZChjcmVhdG9yLmlucHV0LCBjcmVhdG9yLmNyZWF0b3JQcm9wKTtcclxuICBjcmVhdG9yLmNyZWF0b3JCZy5hcHBlbmQoY3JlYXRvci5jcmVhdG9yQ29udGFpbmVyKTtcclxuICBkb20uc2VsZWN0LnBhZ2VTdHJ1Y3R1cmUuYXBwZW5kKGNyZWF0b3IuY3JlYXRvckJnKTtcclxufVxyXG5cclxuY29uc3QgcHJpb3JpdHkgPSB7XHJcbiAgc2VsZWN0OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSxcclxuICBvcHQwOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSxcclxuICBvcHQxOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSxcclxuICBvcHQyOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSxcclxuICBvcHQzOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSxcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kUHJpb3JpdHkoKSB7XHJcbiAgcHJpb3JpdHkuc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LXNlbGVjdCcpO1xyXG4gIHByaW9yaXR5Lm9wdDAuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdwcmlvcml0eScpO1xyXG4gIHByaW9yaXR5Lm9wdDAuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xyXG4gIHByaW9yaXR5Lm9wdDAudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xyXG4gIHByaW9yaXR5Lm9wdDEuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcclxuICBwcmlvcml0eS5vcHQxLnRleHRDb250ZW50ID0gJ0xvdyc7XHJcbiAgcHJpb3JpdHkub3B0Mi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21vZGVyYXRlJyk7XHJcbiAgcHJpb3JpdHkub3B0Mi50ZXh0Q29udGVudCA9ICdNb2RlcmF0ZSc7XHJcbiAgcHJpb3JpdHkub3B0My5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcclxuICBwcmlvcml0eS5vcHQzLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xyXG5cclxuICBwcmlvcml0eS5zZWxlY3QuYXBwZW5kKHByaW9yaXR5Lm9wdDEsIHByaW9yaXR5Lm9wdDIsIHByaW9yaXR5Lm9wdDMsIHByaW9yaXR5Lm9wdDApO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC5hcHBlbmQocHJpb3JpdHkuc2VsZWN0KVxyXG59XHJcblxyXG5jb25zdCBwcm9qZWN0cyA9IHtcclxuICBzZWxlY3Q6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpLFxyXG4gIG9wdDA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpLFxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBlbmRQcm9qZWN0cygpIHtcclxuICBwcm9qZWN0cy5zZWxlY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtc2VsZWN0Jyk7XHJcbiAgcHJvamVjdHMub3B0MC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2luYm94Jyk7XHJcbiAgcHJvamVjdHMub3B0MC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcbiAgcHJvamVjdHMub3B0MC50ZXh0Q29udGVudCA9ICdJbmJveCc7XHJcblxyXG4gIHByb2plY3RzLnNlbGVjdC5hcHBlbmQocHJvamVjdHMub3B0MCk7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LmFwcGVuZChwcm9qZWN0cy5zZWxlY3QpXHJcbn1cclxuXHJcbmV2ZW50cy5zdWJzY3JpYmUoJ3Byb2plY3RzJywgZXZlbnRzLmV2ZW50cywgKHByb2plY3QpID0+IHtcclxuICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHByb2plY3QudGl0bGUpO1xyXG4gICAgICAgIG9wdC50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XHJcbiAgcHJvamVjdHMuc2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XHJcbn0pXHJcblxyXG5cclxuY29uc3Qgbm90ZXMgPSB7XHJcbiAgdGV4dEFyZWE6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kTm90ZXMoKSB7XHJcbiAgbm90ZXMudGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgnbm90ZXMnKTtcclxuICBub3Rlcy50ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ05vdGVzLi4uJyk7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LmFwcGVuZChub3Rlcy50ZXh0QXJlYSk7XHJcbn1cclxuXHJcbmNvbnN0IGRlc2MgPSB7XHJcbiAgdGV4dEFyZWE6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kRGVzYygpIHtcclxuICBkZXNjLnRleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ2Rlc2MnKTtcclxuICBkZXNjLnRleHRBcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24uLi4gKG1heCA3NWNoKScpO1xyXG4gIGRlc2MudGV4dEFyZWEuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnNzUnKTtcclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wSW5wdXQudGV4dENvbnRlbnQgPSAnJztcclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wSW5wdXQuYXBwZW5kKGRlc2MudGV4dEFyZWEpO1xyXG59XHJcblxyXG5jb25zdCBkdWVEYXRlID0ge1xyXG4gIGRhdGU6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kRHVlRGF0ZSgpIHtcclxuICBkdWVEYXRlLmRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICBkdWVEYXRlLmRhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlJyk7XHJcbiAgZHVlRGF0ZS5kYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJyk7XHJcbiAgZHVlRGF0ZS5kYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGVJbnB1dCcpO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC5hcHBlbmQoZHVlRGF0ZS5kYXRlKTtcclxufVxyXG5cclxuY29uc3QgdGltZSA9IHtcclxuICB0aW1lOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZFRpbWUoKSB7XHJcbiAgdGltZS50aW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0aW1lJyk7XHJcbiAgdGltZS50aW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAndGltZScpO1xyXG4gIHRpbWUudGltZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGltZScpO1xyXG4gIHRpbWUudGltZS5jbGFzc0xpc3QuYWRkKCd0aW1lJyk7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LmFwcGVuZCh0aW1lLnRpbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldENyZWF0b3IoKSB7XHJcbiAgY3JlYXRvci5pbnB1dC52YWx1ZSA9ICcnO1xyXG4gIGRlc2MudGV4dEFyZWEudmFsdWUgPSAnJztcclxuICBub3Rlcy50ZXh0QXJlYS52YWx1ZSA9ICcnO1xyXG4gIGR1ZURhdGUuZGF0ZS52YWx1ZSA9ICcnO1xyXG4gIHRpbWUudGltZS52YWx1ZSA9ICcnO1xyXG4gIHByaW9yaXR5LnNlbGVjdC5zZWxlY3RlZEluZGV4ID0gbnVsbDtcclxuICBwcm9qZWN0cy5zZWxlY3Quc2VsZWN0ZWRJbmRleCA9IG51bGw7XHJcbn1cclxuXHJcbmNyZWF0b3IucHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBlbmRQcmlvcml0eSk7XHJcbmNyZWF0b3Iubm90ZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBlbmROb3Rlcyk7XHJcbmNyZWF0b3IuZGVzYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFwcGVuZERlc2MpO1xyXG5jcmVhdG9yLmNhbGVuZGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwZW5kRHVlRGF0ZSk7XHJcbmNyZWF0b3IucHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFwcGVuZFByb2plY3RzKTtcclxuXHJcbnJldHVybiB7XHJcbiAgY3JlYXRvcixcclxuICBwcmlvcml0eSxcclxuICBkZXNjLFxyXG4gIG5vdGVzLFxyXG4gIGR1ZURhdGUsXHJcbiAgdGltZSxcclxuICByZXNldENyZWF0b3IsXHJcbiAgYXBwZW5kQ3JlYXRvciwgXHJcbiAgcHJvamVjdHNcclxufVxyXG59KSgpXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRvcjsiLCJpbXBvcnQgZG9tIGZyb20gJy4vZG9tLmpzJztcclxuaW1wb3J0IGV2ZW50cyBmcm9tICcuL3B1YlN1Yi5qcyc7XHJcblxyXG5jb25zdCBoYW5kbGVEYXRlcyA9IChmdW5jdGlvbigpIHtcclxuICBjb25zdCBtb250aHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IHRvZGF5ID0gZGF0ZS5nZXRVVENEYXRlKCk7XHJcbiAgICBsZXQgY3VycmVudE1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xyXG4gICAgbGV0IGN1cnJlbnRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xyXG4gICAgbGV0IG1vbnRoID0gbW9udGhzW2N1cnJlbnRNb250aF07XHJcbiAgICBsZXQgZGF0ZVN0cmluZztcclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVEYXlzKG1vbnRoKSB7XHJcbiAgICAgIGxldCBtYXhEYXlzO1xyXG5cclxuICAgICAgaWYgKG1vbnRoID09PSAnRmVicnVhcnknKSB7XHJcbiAgICAgICAgbWF4RGF5cyA9IDI4O1xyXG4gICAgICB9IGVsc2UgaWYobW9udGggPT09ICdBcHJpbCcgfHwgbW9udGggPT09ICdKdW5lJyB8fCBtb250aCA9PT0gJ1NlcHRlbWJlcicgfHwgbW9udGggPT09ICdOb3ZlbWJlcicpIHtcclxuICAgICAgICBtYXhEYXlzID0gMzBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtYXhEYXlzID0gMzFcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICByZXR1cm4gbWF4RGF5c1xyXG4gICAgfVxyXG5cclxuICAgIGRvbS5zZWxlY3QuZGF0ZS50ZXh0Q29udGVudCA9IGAke3RvZGF5fSAke21vbnRofSAke2N1cnJlbnRZZWFyfWA7XHJcbiAgXHJcbiAgICBkb20uc2VsZWN0LmFycm93QmFja3dhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmKHRvZGF5IDwgMikge1xyXG4gICAgICAgIGlmKGN1cnJlbnRNb250aCA9PT0gMCkge1xyXG4gICAgICAgICAgLS1jdXJyZW50WWVhcjtcclxuICAgICAgICAgIGN1cnJlbnRNb250aCA9IDExO1xyXG4gICAgICAgICAgbW9udGggPSBtb250aHNbY3VycmVudE1vbnRoXTtcclxuICAgICAgICAgIGNvbnN0IG1heERheXMgPSBjYWxjdWxhdGVEYXlzKG1vbnRoKTtcclxuICAgICAgICAgIHRvZGF5ID0gbWF4RGF5cyArIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHByZXZpb3VzTW9udGggPSAtLWN1cnJlbnRNb250aDtcclxuICAgICAgICAgICAgbW9udGggPSBtb250aHNbcHJldmlvdXNNb250aF1cclxuICAgICAgICAgICAgY29uc3QgbWF4RGF5cyA9IGNhbGN1bGF0ZURheXMobW9udGgpO1xyXG4gICAgICAgICAgICB0b2RheSA9IG1heERheXMgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0b2RheS0tO1xyXG4gICAgICBkb20uc2VsZWN0LmRhdGUudGV4dENvbnRlbnQgPSBgJHt0b2RheX0gJHttb250aH0gJHtjdXJyZW50WWVhcn1gO1xyXG4gICAgICBkYXRlU3RyaW5nID0gYCR7Y3VycmVudFllYXJ9LSR7KCcwJyArIChjdXJyZW50TW9udGgrMSkpLnNsaWNlKC0yKX0tJHsoJzAnICsgdG9kYXkpLnNsaWNlKC0yKX1gO1xyXG4gICAgICBldmVudHMucHVibGlzaCgnZnVsbERhdGUnLCBkYXRlU3RyaW5nKTtcclxuICAgIH0pXHJcblxyXG4gICAgZG9tLnNlbGVjdC5hcnJvd0ZvcndhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1heERheXMgPSBjYWxjdWxhdGVEYXlzKG1vbnRoKTtcclxuICAgICAgaWYodG9kYXkgPT09IG1heERheXMpIHtcclxuICAgICAgICBpZihjdXJyZW50TW9udGggPT09IDExKSB7XHJcbiAgICAgICAgICArK2N1cnJlbnRZZWFyO1xyXG4gICAgICAgICAgY3VycmVudE1vbnRoID0gMDtcclxuICAgICAgICAgIG1vbnRoID0gbW9udGhzW2N1cnJlbnRNb250aF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBuZXh0TW9udGggPSArK2N1cnJlbnRNb250aDtcclxuICAgICAgICAgIG1vbnRoID0gbW9udGhzW25leHRNb250aF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvZGF5ID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0b2RheSsrO1xyXG4gICAgICBkb20uc2VsZWN0LmRhdGUudGV4dENvbnRlbnQgPSBgJHt0b2RheX0gJHttb250aH0gJHtjdXJyZW50WWVhcn1gO1xyXG4gICAgICBkYXRlU3RyaW5nID0gYCR7Y3VycmVudFllYXJ9LSR7KCcwJyArIChjdXJyZW50TW9udGgrMSkpLnNsaWNlKC0yKX0tJHsoJzAnICsgdG9kYXkpLnNsaWNlKC0yKX1gO1xyXG4gICAgICBldmVudHMucHVibGlzaCgnZnVsbERhdGUnLCBkYXRlU3RyaW5nKTtcclxuICAgIH0pXHJcblxyXG4gICAgZGF0ZVN0cmluZyA9IGAke2N1cnJlbnRZZWFyfS0keygnMCcgKyAoY3VycmVudE1vbnRoKzEpKS5zbGljZSgtMil9LSR7KCcwJyArIHRvZGF5KS5zbGljZSgtMil9YDtcclxuICAgIFxyXG4gICAgZXZlbnRzLnB1Ymxpc2goJ2Z1bGxEYXRlJywgZGF0ZVN0cmluZyk7XHJcblxyXG4gICAgZXZlbnRzLnN1YnNjcmliZSgndGFza3MnLCBldmVudHMuZXZlbnRzLCAoKSA9PiB7XHJcbiAgICAgIGV2ZW50cy5wdWJsaXNoKCdmdWxsRGF0ZScsIGRhdGVTdHJpbmcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9tLnNlbGVjdC50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdG9kYXkgPSBkYXRlLmdldFVUQ0RhdGUoKTtcclxuICAgICAgY3VycmVudE1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xyXG4gICAgICBjdXJyZW50WWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcclxuICAgICAgZG9tLnNlbGVjdC5kYXRlLnRleHRDb250ZW50ID0gYCR7dG9kYXl9ICR7bW9udGh9ICR7Y3VycmVudFllYXJ9YDtcclxuICAgICAgZGF0ZVN0cmluZyA9IGAke2N1cnJlbnRZZWFyfS0keygnMCcgKyAoY3VycmVudE1vbnRoKzEpKS5zbGljZSgtMil9LSR7KCcwJyArIHRvZGF5KS5zbGljZSgtMil9YDtcclxuICAgICAgZXZlbnRzLnB1Ymxpc2goJ2Z1bGxEYXRlJywgZGF0ZVN0cmluZyk7XHJcbiAgICAgIGRvbS5zZWxlY3QuaGVhZFNlYy50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICBkb20uc2VsZWN0LmhlYWRTZWMuYXBwZW5kKGRvbS5zZWxlY3QuZGF0ZVdyYXBwZXIpO1xyXG4gICAgfSlcclxuICB9KVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlRGF0ZXM7IiwiaW1wb3J0IGNyZWF0b3IgZnJvbSAnLi9jcmVhdG9yLmpzJztcclxuaW1wb3J0IGV2ZW50cyBmcm9tICcuL3B1YlN1Yi5qcyc7XHJcbmltcG9ydCBwcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XHJcbmltcG9ydCB0YXNrIGZyb20gJy4vdGFzay5qcyc7XHJcblxyXG5jb25zdCBkb20gPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHNlbGVjdCA9IHtcclxuICAgIHBhZ2VTdHJ1Y3R1cmU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLXN0cnVjdHVyZScpLFxyXG4gICAgYWRkVGFza0J0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJyksXHJcbiAgICBub3RpZmljYXRpb25CdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb24nKSxcclxuICAgIHRoZW1lQ2hhbmdlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWUnKSxcclxuICAgIGNvbmZpZ0J0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpZycpLFxyXG4gICAgaW5ib3hCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC1idG4nKSxcclxuICAgIHRvZGF5QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXktYnRuJyksXHJcbiAgICB1cGNvbWluZ0J0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwY29taW5nLWJ0bicpLFxyXG4gICAgcHJvamVjdHNTZWM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLFxyXG4gICAgYWRkUHJvamVjdEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0JyksXHJcbiAgICB0YXNrc0NvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNvbnRhaW5lcicpLFxyXG4gICAgaGVhZFNlYzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWQtc2VjJyksXHJcbiAgICBkYXRlV3JhcHBlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtd3JhcHBlcicpLFxyXG4gICAgYXJyb3dCYWNrd2FyZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LWJhY2t3YXJkJyksXHJcbiAgICBhcnJvd0ZvcndhcmQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1mb3J3YXJkJyksXHJcbiAgICBkYXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpLFxyXG4gICAgZGV0YWlsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHMtcHJvamVjdC10YXNrJyksXHJcbiAgICB0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyksXHJcbiAgICBkZXNjcmlwdGlvbklucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKSxcclxuICAgIGRlYWRsaW5lSW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWFkbGluZScpLFxyXG4gICAgcHJpb3JpdHlJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JyksXHJcbiAgICBpc0ZpbmlzaGVkSW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaW5pc2hlZCcpLFxyXG4gICAgbm90ZXNJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVzJyksXHJcbiAgICBzdW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW4nKSxcclxuICAgIG1vb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29uJylcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFwcGVuZFRhc2tzKHRpdGxlLCBwcmlvcml0eSwgcHJvamVjdCkge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xyXG5cclxuICAgIHBhcmEudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3Q7XHJcbiAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktaWNvbicsICdsb3cnKTtcclxuXHJcbiAgICBzd2l0Y2gocHJpb3JpdHkpIHtcclxuICAgICAgY2FzZSAnbW9kZXJhdGUnOlxyXG4gICAgICAgIGNpcmNsZS5jbGFzc0xpc3QuYWRkKCdtb2RlcmF0ZScpXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2hpZ2gnOlxyXG4gICAgICAgIGNpcmNsZS5jbGFzc0xpc3QuYWRkKCdoaWdoJylcclxuICAgIH1cclxuXHJcbiAgICB0YXNrVGl0bGUuYXBwZW5kKGNpcmNsZSwgcGFyYSk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZCh0YXNrVGl0bGUsIHByb2plY3RUaXRsZSk7XHJcbiAgICBzZWxlY3QudGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcblxyXG4gICAgZXZlbnRzLnB1Ymxpc2goJ3Rhc2tXcmFwcGVyJywgd3JhcHBlcik7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuY3JlYXRvckJnLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXBwZW5kUHJvamVjdCh0aXRsZSwgZHVlRGF0ZSkge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgZGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICBkZWFkbGluZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XHJcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcclxuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XHJcbiAgICBkZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlYWRsaW5lJyk7XHJcblxyXG4gICAgd3JhcHBlci5hcHBlbmQocHJvamVjdFRpdGxlLCBkZWFkbGluZSk7XHJcbiAgICBzZWxlY3QucHJvamVjdHNTZWMuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIHNlbGVjdC5hZGRQcm9qZWN0QnRuKTtcclxuICAgIFxyXG4gICAgY3JlYXRvci5jcmVhdG9yLmNyZWF0b3JCZy5yZW1vdmUoKTtcclxuXHJcbiAgICBldmVudHMucHVibGlzaCgnZ2V0V3JhcHBlcicsIHdyYXBwZXIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3BlblByb2plY3RUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGVhZGxpbmUsIHByaW9yaXR5LCBub3RlcywgaXNDb21wbGV0ZSkge1xyXG4gICAgc2VsZWN0LmhlYWRTZWMudGV4dENvbnRlbnQgPSAnJztcclxuICAgIHNlbGVjdC5kZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgIHNlbGVjdC50YXNrc0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgIHNlbGVjdC5kZXNjcmlwdGlvbklucHV0LnZhbHVlID0gZGVzY3JpcHRpb247XHJcbiAgICBzZWxlY3QuZGVhZGxpbmVJbnB1dC52YWx1ZSA9IGRlYWRsaW5lO1xyXG4gICAgc2VsZWN0LnByaW9yaXR5SW5wdXQudmFsdWUgPSBwcmlvcml0eTtcclxuICAgIHNlbGVjdC5ub3Rlc0lucHV0LnZhbHVlID0gbm90ZXM7XHJcbiAgICBzZWxlY3QuaXNGaW5pc2hlZElucHV0LmNoZWNrZWQgPSBpc0NvbXBsZXRlO1xyXG5cclxuICAgIHNlbGVjdC50aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgc2VsZWN0LmhlYWRTZWMuYXBwZW5kKHNlbGVjdC5kZXRhaWxzKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFwcGVuZEluYm94KCkge1xyXG4gICAgc2VsZWN0LmhlYWRTZWMudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGNvbnN0IGluYm94VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgICAgaW5ib3hUaXRsZS5jbGFzc0xpc3QuYWRkKCdpbmJveC10aXRsZScpO1xyXG4gICAgICAgICAgaW5ib3hUaXRsZS50ZXh0Q29udGVudCA9ICdJbmJveCc7XHJcbiAgICBzZWxlY3QuaGVhZFNlYy5hcHBlbmQoaW5ib3hUaXRsZSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3QudGhlbWVDaGFuZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBzZWxlY3QucGFnZVN0cnVjdHVyZS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJyk7XHJcbiAgICBzZWxlY3QucGFnZVN0cnVjdHVyZS5jbGFzc0xpc3QudG9nZ2xlKCdsaWdodCcpO1xyXG5cclxuICAgIHNlbGVjdC5zdW4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICBzZWxlY3QubW9vbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICB9KTtcclxuXHJcbiAgZXZlbnRzLnN1YnNjcmliZSgnb3BlblRhc2snLCBldmVudHMuZXZlbnRzLCAoKSA9PiB7XHJcbiAgICBkb20uc2VsZWN0LmRlc2NyaXB0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGFzay5lZGl0RGVzY3JpcHRpb24pO1xyXG4gICAgZG9tLnNlbGVjdC5kZWFkbGluZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRhc2suZWRpdERlYWRsaW5lKTtcclxuICAgIGRvbS5zZWxlY3QucHJpb3JpdHlJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0YXNrLmVkaXRQcmlvcml0eSk7XHJcbiAgICBkb20uc2VsZWN0Lm5vdGVzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGFzay5lZGl0Tm90ZXMpO1xyXG4gICAgZG9tLnNlbGVjdC5pc0ZpbmlzaGVkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGFzay5jaGVja0ZpbmlzaCk7XHJcbiAgfSlcclxuXHJcbiAgZXZlbnRzLnN1YnNjcmliZSgnb3BlblByb2plY3QnLCBldmVudHMuZXZlbnRzLCAoKSA9PiB7XHJcbiAgICBkb20uc2VsZWN0LmRlc2NyaXB0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgcHJvamVjdC5lZGl0RGVzY3JpcHRpb24pO1xyXG4gICAgZG9tLnNlbGVjdC5kZWFkbGluZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHByb2plY3QuZWRpdERlYWRsaW5lKTtcclxuICAgIGRvbS5zZWxlY3QucHJpb3JpdHlJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBwcm9qZWN0LmVkaXRQcmlvcml0eSk7XHJcbiAgICBkb20uc2VsZWN0Lm5vdGVzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgcHJvamVjdC5lZGl0Tm90ZXMpO1xyXG4gICAgZG9tLnNlbGVjdC5pc0ZpbmlzaGVkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgcHJvamVjdC5jaGVja0ZpbmlzaCk7XHJcbiAgfSlcclxuICBcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNlbGVjdCxcclxuICAgIGFwcGVuZFRhc2tzLFxyXG4gICAgYXBwZW5kUHJvamVjdCxcclxuICAgIG9wZW5Qcm9qZWN0VGFzayxcclxuICAgIGFwcGVuZEluYm94LFxyXG4gIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbTsiLCJpbXBvcnQgZG9tIGZyb20gJy4vZG9tLmpzJztcclxuaW1wb3J0IGNyZWF0b3IgZnJvbSAnLi9jcmVhdG9yLmpzJztcclxuaW1wb3J0IGV2ZW50cyBmcm9tICcuL3B1YlN1Yi5qcyc7XHJcblxyXG5jb25zdCBoYW5kbGVQcm9qZWN0cyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHRpbWUsIHByaW9yaXR5LCBub3RlcywgLi4udGFza3MpIHtcclxuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gIGRlc2NyaXB0aW9uO1xyXG4gICAgICB0aGlzLmR1ZURhdGUgPSAgZHVlRGF0ZTtcclxuICAgICAgdGhpcy50aW1lID0gIHRpbWU7XHJcbiAgICAgIHRoaXMucHJpb3JpdHkgPSAgcHJpb3JpdHk7XHJcbiAgICAgIHRoaXMubm90ZXMgPSAgbm90ZXM7XHJcbiAgICAgIHRoaXMudGFza3MgPSAgdGFza3M7XHJcbiAgICAgIHRoaXMuaXNDb21wbGV0ZSA9ICBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2plY3RzID0gW107XHJcbiAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdDtcclxuXHJcbiAgZnVuY3Rpb24gc2V0VGl0bGUoKSB7XHJcbiAgICBuZXdQcm9qZWN0LnRpdGxlID0gY3JlYXRvci5jcmVhdG9yLmlucHV0LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICBuZXdQcm9qZWN0LmRlc2NyaXB0aW9uID0gY3JlYXRvci5kZXNjLnRleHRBcmVhLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0RGF0ZSgpIHtcclxuICAgIG5ld1Byb2plY3QuZHVlRGF0ZSA9IGNyZWF0b3IuZHVlRGF0ZS5kYXRlLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0VGltZSgpIHtcclxuICAgIG5ld1Byb2plY3QudGltZSA9IGNyZWF0b3IudGltZS50aW1lLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0Tm90ZXMoKSB7XHJcbiAgICBuZXdQcm9qZWN0Lm5vdGVzID0gY3JlYXRvci5ub3Rlcy50ZXh0QXJlYS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldFByaW9yaXR5KCkge1xyXG4gICAgbmV3UHJvamVjdC5wcmlvcml0eSA9IGNyZWF0b3IucHJpb3JpdHkuc2VsZWN0LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcclxuICAgIGlmKG5ld1Byb2plY3QudGl0bGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBkb20uYXBwZW5kUHJvamVjdChuZXdQcm9qZWN0LnRpdGxlLCBuZXdQcm9qZWN0LmR1ZURhdGUpO1xyXG4gICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgICBldmVudHMucHVibGlzaCgncHJvamVjdHMnLCBuZXdQcm9qZWN0KTtcclxuICAgICAgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0O1xyXG4gICAgICBjcmVhdG9yLnJlc2V0Q3JlYXRvcigpO1xyXG4gICAgICByZW1vdmVFdmVudHMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KCdGaWxsIGluIHRoZSBmaWVsZHMnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2FuY2VsQWRkKCkge1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmNyZWF0b3JCZy5yZW1vdmUoKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5jYW5jZWxCdG4uY2xhc3NMaXN0LnJlbW92ZSgncHJvaicpXHJcbiAgICBjcmVhdG9yLnJlc2V0Q3JlYXRvcigpO1xyXG4gICAgcmVtb3ZlRXZlbnRzKCk7XHJcbiAgICBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3Q7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhY3RpdmF0ZUV2ZW50cygpIHtcclxuICAgIGNyZWF0b3IuYXBwZW5kQ3JlYXRvcigpO1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLnByb2plY3QucmVtb3ZlKCk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2onKVxyXG4gICAgY3JlYXRvci5jcmVhdG9yLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFRpdGxlKTtcclxuICAgIGNyZWF0b3IuZGVzYy50ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXREZXNjcmlwdGlvbik7XHJcbiAgICBjcmVhdG9yLmR1ZURhdGUuZGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXREYXRlKTtcclxuICAgIGNyZWF0b3IudGltZS50aW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFRpbWUpXHJcbiAgICBjcmVhdG9yLnByaW9yaXR5LnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRQcmlvcml0eSk7XHJcbiAgICBjcmVhdG9yLm5vdGVzLnRleHRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldE5vdGVzKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5jYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxBZGQpO1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlRXZlbnRzKCkge1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFRpdGxlKTtcclxuICAgIGNyZWF0b3IuZGVzYy50ZXh0QXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXREZXNjcmlwdGlvbik7XHJcbiAgICBjcmVhdG9yLmR1ZURhdGUuZGF0ZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXREYXRlKTtcclxuICAgIGNyZWF0b3IudGltZS50aW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFRpbWUpXHJcbiAgICBjcmVhdG9yLnByaW9yaXR5LnNlbGVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRQcmlvcml0eSk7XHJcbiAgICBjcmVhdG9yLm5vdGVzLnRleHRBcmVhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICBzZXROb3Rlcyk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuY2FuY2VsQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsQWRkKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5hZGRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0KTtcclxuICB9XHJcblxyXG4gIGRvbS5zZWxlY3QuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFjdGl2YXRlRXZlbnRzKTtcclxuXHJcbiAgLy8gZmlsdGVyIHRhc2tzIG9mIGEgc3BlY2lmaWMgcHJvamVjdFxyXG4gIGNvbnN0IHByb2plY3RXcmFwcGVycyA9IFtdO1xyXG5cclxuICBldmVudHMuc3Vic2NyaWJlKCdnZXRXcmFwcGVyJywgZXZlbnRzLmV2ZW50cywgKHdyYXBwZXIpID0+IHtcclxuICAgIHByb2plY3RXcmFwcGVycy5wdXNoKHdyYXBwZXIpO1xyXG5cclxuICAgIHByb2plY3RXcmFwcGVycy5mb3JFYWNoKCh3cmFwcGVyKSA9PiB7XHJcbiAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICBpZihldmVudC50YXJnZXQub3V0ZXJUZXh0ID09IHByb2plY3QudGl0bGUpIHtcclxuICAgICAgICAgICAgZG9tLm9wZW5Qcm9qZWN0VGFzayhwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LmRlc2NyaXB0aW9uLCBwcm9qZWN0LmR1ZURhdGUsIHByb2plY3QucHJpb3JpdHksIHByb2plY3Qubm90ZXMsIHByb2plY3QuaXNDb21wbGV0ZSk7XHJcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdvcGVuUHJvamVjdCcsICcnKTtcclxuICAgICAgICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgZG9tLmFwcGVuZFRhc2tzKHRhc2sudGl0bGUsIHRhc2sucHJpb3JpdHksIHRhc2sucHJvamVjdCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGVkaXREZXNjcmlwdGlvbigpIHtcclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgaWYocHJvamVjdC50aXRsZSA9PT0gZG9tLnNlbGVjdC50aXRsZS50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIHByb2plY3QuZGVzY3JpcHRpb24gPSBkb20uc2VsZWN0LmRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gZWRpdERlYWRsaW5lKCkge1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBpZihwcm9qZWN0LnRpdGxlID09PSBkb20uc2VsZWN0LnRpdGxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgcHJvamVjdC5kdWVEYXRlID0gZG9tLnNlbGVjdC5kZWFkbGluZUlucHV0LnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZWRpdFByaW9yaXR5KCkge1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBpZihwcm9qZWN0LnRpdGxlID09PSBkb20uc2VsZWN0LnRpdGxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgcHJvamVjdC5wcmlvcml0eSA9IGRvbS5zZWxlY3QucHJpb3JpdHlJbnB1dC52YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVkaXROb3RlcygpIHtcclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgaWYocHJvamVjdC50aXRsZSA9PT0gZG9tLnNlbGVjdC50aXRsZS50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIHByb2plY3Qubm90ZXMgPSBkb20uc2VsZWN0Lm5vdGVzSW5wdXQudmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja0ZpbmlzaChldmVudCkge1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBpZihwcm9qZWN0LnRpdGxlID09PSBkb20uc2VsZWN0LnRpdGxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgIHByb2plY3QuaXNDb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcHJvamVjdC5pc0NvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtwcm9qZWN0cywgcmVtb3ZlRXZlbnRzLCBQcm9qZWN0LCBhZGRQcm9qZWN0LCBlZGl0RGVzY3JpcHRpb24sIGVkaXREZWFkbGluZSwgZWRpdFByaW9yaXR5LCBlZGl0Tm90ZXMsIGNoZWNrRmluaXNofVxyXG59KSgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVQcm9qZWN0czsiLCIvLyBQdWJTdWIgTW9kdWxlXHJcbmNvbnN0IGV2ZW50cyA9IChmdW5jdGlvbigpIHtcclxuICBjb25zdCAgZXZlbnRzID0ge307XHJcblxyXG4gIGNvbnN0IHN1YnNjcmliZSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIG9iamVjdCwgY2FsbGJhY2spIHtcclxuICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcclxuICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goe29iamVjdDogb2JqZWN0LCBjYWxsYmFjazogY2FsbGJhY2t9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gZnVuY3Rpb24oZXZlbnROYW1lLCBvYmplY3QsIGNhbGxiYWNrKSB7XHJcbiAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcclxuICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXVtpXS5vYmplY3QgPT09IG9iamVjdCkge1xyXG4gIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xyXG4gIGJyZWFrO1xyXG4gIH1cclxuICB9O1xyXG4gIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHB1Ymxpc2ggPSAgZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGF0YSkge1xyXG4gIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XHJcbiAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmN0aW9uKGluc3RhbmNlKSB7XHJcbiAgaW5zdGFuY2UuY2FsbGJhY2soZGF0YSk7XHJcbiAgfSk7XHJcbiAgfVxyXG4gIH1cclxuXHJcbnJldHVybiB7ZXZlbnRzLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlLCBwdWJsaXNofVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzOyIsImltcG9ydCBwcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XHJcbmltcG9ydCBkb20gZnJvbSAnLi9kb20uanMnO1xyXG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vcHViU3ViLmpzJztcclxuaW1wb3J0IGNyZWF0b3IgZnJvbSAnLi9jcmVhdG9yLmpzJztcclxuXHJcbmNvbnN0IGhhbmRsZVRhc2tzID0gKGZ1bmN0aW9uKCkge1xyXG4gIGNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCB0aW1lLCBwcmlvcml0eSA9ICdMb3cnLCBub3RlcywgcHJvamVjdCA9ICdJbmJveCcsIC4uLmNoZWNrTGlzdCkge1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSAgZGVzY3JpcHRpb247XHJcbiAgICAgIHRoaXMuZHVlRGF0ZSA9ICBkdWVEYXRlO1xyXG4gICAgICB0aGlzLnRpbWUgPSAgdGltZTtcclxuICAgICAgdGhpcy5wcmlvcml0eSA9ICBwcmlvcml0eTtcclxuICAgICAgdGhpcy5ub3RlcyA9ICBub3RlcztcclxuICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcclxuICAgICAgdGhpcy5jaGVja0xpc3QgPSBjaGVja0xpc3Q7XHJcbiAgICAgIHRoaXMuaXNDb21wbGV0ZSA9ICBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHRhc2tzID0gW107XHJcbiAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzaztcclxuXHJcbiAgZnVuY3Rpb24gc2V0VGl0bGUoKSB7XHJcbiAgICBuZXdUYXNrLnRpdGxlID0gY3JlYXRvci5jcmVhdG9yLmlucHV0LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICBuZXdUYXNrLmRlc2NyaXB0aW9uID0gY3JlYXRvci5kZXNjLnRleHRBcmVhLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0RGF0ZSgpIHtcclxuICAgIG5ld1Rhc2suZHVlRGF0ZSA9IGNyZWF0b3IuZHVlRGF0ZS5kYXRlLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0VGltZSgpIHtcclxuICAgIG5ld1Rhc2sudGltZSA9IGNyZWF0b3IudGltZS50aW1lLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0Tm90ZXMoKSB7XHJcbiAgICBuZXdUYXNrLm5vdGVzID0gY3JlYXRvci5ub3Rlcy50ZXh0QXJlYS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldFByaW9yaXR5KCkge1xyXG4gICAgbmV3VGFzay5wcmlvcml0eSA9IGNyZWF0b3IucHJpb3JpdHkuc2VsZWN0LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0UHJvamVjdCgpIHtcclxuICAgIG5ld1Rhc2sucHJvamVjdCA9IGNyZWF0b3IucHJvamVjdHMuc2VsZWN0LnZhbHVlO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBhZGRUYXNrKCkge1xyXG4gICAgaWYobmV3VGFzay50aXRsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRhc2tzLnB1c2gobmV3VGFzayk7XHJcbiAgICAgIGV2ZW50cy5wdWJsaXNoKCd0YXNrcycsIHRhc2tzKTtcclxuICAgICAgcHJvamVjdC5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgaWYocHJvamVjdC50aXRsZSA9PSBuZXdUYXNrLnByb2plY3QpIHtcclxuICAgICAgICAgIHByb2plY3QudGFza3MucHVzaChuZXdUYXNrKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgbmV3VGFzayA9IG5ldyBUYXNrO1xyXG4gICAgICBjcmVhdG9yLnJlc2V0Q3JlYXRvcigpO1xyXG4gICAgICBjcmVhdG9yLmNyZWF0b3IuY3JlYXRvckJnLnJlbW92ZSgpO1xyXG4gICAgICByZW1vdmVFdmVudHMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KCdGaWxsIGluIHRoZSBmaWVsZHMnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2FuY2VsQWRkKCkge1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmNyZWF0b3JCZy5yZW1vdmUoKTtcclxuICAgIGNyZWF0b3IucmVzZXRDcmVhdG9yKCk7XHJcbiAgICByZW1vdmVFdmVudHMoKTtcclxuICAgIG5ld1Rhc2sgPSBuZXcgVGFzaztcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gYWN0aXZhdGVFdmVudHMoKSB7XHJcbiAgICBjcmVhdG9yLmFwcGVuZENyZWF0b3IoKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRUaXRsZSk7XHJcbiAgICBjcmVhdG9yLmRlc2MudGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0RGVzY3JpcHRpb24pO1xyXG4gICAgY3JlYXRvci5kdWVEYXRlLmRhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0RGF0ZSk7XHJcbiAgICBjcmVhdG9yLnRpbWUudGltZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRUaW1lKVxyXG4gICAgY3JlYXRvci5wcmlvcml0eS5zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0UHJpb3JpdHkpO1xyXG4gICAgY3JlYXRvci5wcm9qZWN0cy5zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0UHJvamVjdCk7XHJcbiAgICBjcmVhdG9yLm5vdGVzLnRleHRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldE5vdGVzKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5jYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxBZGQpO1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2spO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlRXZlbnRzKCkge1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFRpdGxlKTtcclxuICAgIGNyZWF0b3IuZGVzYy50ZXh0QXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXREZXNjcmlwdGlvbik7XHJcbiAgICBjcmVhdG9yLmR1ZURhdGUuZGF0ZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXREYXRlKTtcclxuICAgIGNyZWF0b3IudGltZS50aW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFRpbWUpXHJcbiAgICBjcmVhdG9yLnByaW9yaXR5LnNlbGVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRQcmlvcml0eSk7XHJcbiAgICBjcmVhdG9yLm5vdGVzLnRleHRBcmVhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICBzZXROb3Rlcyk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuY2FuY2VsQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsQWRkKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5hZGRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHdyYXBwZXJzID0gW107XHJcblxyXG4gIGV2ZW50cy5zdWJzY3JpYmUoJ3Rhc2tXcmFwcGVyJywgZXZlbnRzLmV2ZW50cywgKHdyYXBwZXIpID0+IHtcclxuICAgIHdyYXBwZXJzLnB1c2god3JhcHBlcik7XHJcbiAgICB3cmFwcGVycy5mb3JFYWNoKCh3cmFwcGVyKSA9PiB7XHJcbiAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICBpZihldmVudC50YXJnZXQub3V0ZXJUZXh0ID09PSB0YXNrLnRpdGxlKSB7XHJcbiAgICAgICAgICAgIGRvbS5zZWxlY3QudGFza3NDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgZG9tLm9wZW5Qcm9qZWN0VGFzayh0YXNrLnRpdGxlLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHksIHRhc2subm90ZXMpO1xyXG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgnb3BlblRhc2snLCAnJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGVkaXREZXNjcmlwdGlvbigpIHtcclxuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgaWYodGFzay50aXRsZSA9PT0gZG9tLnNlbGVjdC50aXRsZS50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBkb20uc2VsZWN0LmRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFza3MpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gZWRpdERlYWRsaW5lKCkge1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBpZih0YXNrLnRpdGxlID09PSBkb20uc2VsZWN0LnRpdGxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgdGFzay5kdWVEYXRlID0gZG9tLnNlbGVjdC5kZWFkbGluZUlucHV0LnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZWRpdFByaW9yaXR5KCkge1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBpZih0YXNrLnRpdGxlID09PSBkb20uc2VsZWN0LnRpdGxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgdGFzay5wcmlvcml0eSA9IGRvbS5zZWxlY3QucHJpb3JpdHlJbnB1dC52YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVkaXROb3RlcygpIHtcclxuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgaWYodGFzay50aXRsZSA9PT0gZG9tLnNlbGVjdC50aXRsZS50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIHRhc2subm90ZXMgPSBkb20uc2VsZWN0Lm5vdGVzSW5wdXQudmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFza3MpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja0ZpbmlzaChldmVudCkge1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBpZih0YXNrLnRpdGxlID09PSBkb20uc2VsZWN0LnRpdGxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgIHRhc2suaXNDb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZG9tLnNlbGVjdC5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWN0aXZhdGVFdmVudHMpO1xyXG5cclxuICByZXR1cm57dGFza3MsIHJlbW92ZUV2ZW50cywgVGFzaywgYWRkVGFzaywgIGVkaXREZXNjcmlwdGlvbiwgZWRpdERlYWRsaW5lLCBlZGl0UHJpb3JpdHksIGVkaXROb3RlcywgY2hlY2tGaW5pc2h9XHJcbn0pKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZVRhc2tzO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGhhbmRsZVRhc2tzIGZyb20gJy4vdGFzay5qcyc7XHJcbmltcG9ydCBoYW5kbGVQcm9qZWN0cyBmcm9tICcuL3Byb2plY3QuanMnO1xyXG5pbXBvcnQgYXBwSGFuZGxlciBmcm9tICcuL2FwcEhhbmRsZXIuanMnO1xyXG5pbXBvcnQgaGFuZGxlRGF0ZXMgZnJvbSAnLi9kYXRlLmpzJztcclxuXHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9