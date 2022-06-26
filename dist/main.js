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
___CSS_LOADER_EXPORT___.push([module.id, "/* General */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n} \r\n\r\nbody {\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.page-structure {\r\n  display: grid;\r\n  grid-template-columns: 300px 4fr;\r\n  grid-template-areas: \r\n  \"header header\"\r\n  \"sidebar main\"\r\n  \"sidebar main\";\r\n  height: 100%;\r\n}\r\n\r\nsvg:not(.logo) {\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* Header */\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 81px;\r\n  padding: 0 30px;\r\n  grid-area: header;\r\n}\r\n\r\n.logo {\r\n  margin-left: 7px;\r\n}\r\n\r\n.header ul {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n/* Sidebar */\r\n.sidebar {\r\n  height: calc(100vh - 81px);\r\n  grid-area: sidebar;\r\n}\r\n\r\n/* Inbox */\r\n.inbox {\r\n  padding: 20px 0 30px 48px;\r\n  height: 156px;\r\n}\r\n\r\n.inbox-title {\r\n  font-size: 3rem;\r\n  position: relative;\r\n}\r\n\r\n.page-structure.dark .inbox-title::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 10px;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\n.page-structure.light .inbox-title::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 10px;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\n.nav ul {\r\n  display: grid;\r\n  gap: 20px;\r\n}\r\n\r\n.nav ul li {\r\n  font-size: 1.125rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(1)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(2)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(3)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(1)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(2)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(3)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n\r\n.nav ul li::before {\r\n  width: 25px;\r\n  height: 25px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* Projects */\r\n.projects {\r\n  padding: 20px 0 0 48px;\r\n}\r\n\r\n.projects h2 {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.add-project {\r\n  font-size: 0.875rem;\r\n  cursor: pointer;\r\n  letter-spacing: 1px;\r\n  margin-top: 25px;\r\n}\r\n\r\n.page-structure.dark .add-project::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n  width: 15px;\r\n  height: 15px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n.page-structure.light .add-project::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n  width: 15px;\r\n  height: 15px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* Main */\r\n.main {\r\n  grid-area: main;\r\n}\r\n\r\n.head-sec {\r\n  display: grid;\r\n  align-items: center;\r\n  padding: 20px 70px;\r\n}\r\n\r\n.date {\r\n  text-align: center;\r\n  font-size: 3rem;\r\n}\r\n\r\n.date p {\r\n  font-size: 3rem;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.list-view {\r\n  padding: 30px 55px;\r\n  height: calc(100vh - 180px);\r\n  overflow: auto;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  cursor: pointer;\r\n  align-items: center;\r\n  padding: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.task-title {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  position: relative;\r\n}\r\n\r\n.checkbox {\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.checkbox + label {\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.checkbox + label::before {\r\n  content: '';\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: 3px;\r\n}\r\n\r\n.checkbox:checked + label::before {\r\n  content: 'ok';\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 4px;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.priority-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.priority-icon.low {\r\n  border: 2.5px solid yellow;\r\n}\r\n\r\n.priority-icon.moderate {\r\n  border: 2.5px solid orange;\r\n}\r\n\r\n.priority-icon.high {\r\n  border: 2.5px solid red;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* Add container */\r\n.add-creator-bg {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgba(0,0,0,.6);\r\n}\r\n\r\n.add-creator-container {\r\n  width: 810px;\r\n  height: 126px;\r\n  border-radius: 12px;\r\n  box-shadow:1px 1px 1px rgba(0, 0, 0, .4);\r\n}\r\n\r\n.creator-input {\r\n  width: 94%;\r\n  height: 34px;\r\n  justify-self: center;\r\n  margin: 20px 25px;\r\n  outline: none;\r\n  border-radius: 12px;\r\n  color: black;\r\n  padding: 0 10px;\r\n  border: none;\r\n}\r\n\r\n.creator-properties {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n}\r\n\r\n.creator-prop-input {\r\n  width: 234px;\r\n  height: 34px;\r\n  border-radius: 12px;\r\n  background-color: #fff;\r\n  margin-left: 25px;\r\n  color: black;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon {\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn {\r\n  color: black;\r\n  padding: 8px 16px;\r\n  white-space: nowrap;\r\n  border-radius: 12px;\r\n  cursor: pointer;\r\n  border: none;\r\n}\r\n\r\n.priority-select, .notes, .desc, .dateInput, .time, .projects-select {\r\n  width: 100%;\r\n  height: 34px;\r\n  border-radius: 12px;\r\n  background-color: #fff;\r\n  color: black;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.priority-select option, .projects-select option {\r\n  color: black;\r\n}\r\n\r\n.notes, .desc, .dateInput, .time {\r\n  padding: 10px;\r\n  resize: none;\r\n}\r\n\r\n/* project container */\r\n.project {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 200px;\r\n  padding: 10px;\r\n  margin: 15px 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.project-h1 {\r\n  font-size: 3rem;\r\n}\r\n\r\n.project:hover {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.date-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 35px 400px 35px;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n.arrow-backward {\r\n  transform: rotate(180deg);\r\n}\r\n\r\n/* details container */\r\n.details-project-task {\r\n  display: none;\r\n}\r\n\r\n.title {\r\n  font-size: 3rem;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.details-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: 1fr;\r\n}\r\n\r\n.details-container input,\r\n.details-container textarea {\r\n  color: black;\r\n  outline: none;\r\n  border: none;\r\n  padding: 6px 8px;\r\n  resize: none;\r\n}\r\n\r\n.details-container select {\r\n  width: 185px;\r\n  padding: 5px 8px;\r\n  border: none;\r\n  outline: none;\r\n  margin-bottom: 20px;\r\n  color: black;\r\n}\r\n\r\n.details-container select option {\r\n  color: black;\r\n}\r\n\r\n.details-container input {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.details-container label {\r\n  margin-right: 8px;\r\n}\r\n\r\n.details-container div:nth-child(1) div:nth-child(2) label {\r\n  margin-right: 25px;\r\n}\r\n\r\n.description,\r\n.deadline {\r\n  grid-column: 1;\r\n}\r\n\r\n.priority-div,\r\n.is-finished {\r\n  grid-column: 2;\r\n}\r\n\r\n.notes-div {\r\n  grid-column: 3;\r\n  display: flex;\r\n}\r\n\r\n.notes-div textarea {\r\n  height: 120px;\r\n}\r\n\r\n@media (prefers-color-scheme: light) {\r\n  * {\r\n    color: black;\r\n  }\r\n\r\n  svg {\r\n    fill: black;\r\n  }\r\n\r\n  .add-creator-container {\r\n    background-color: #FFC05A;\r\n  }\r\n\r\n  .header {\r\n    background-color: #FFC05A;\r\n  }\r\n\r\n  .sidebar {\r\n    background-color: #FFCE7E;\r\n  }\r\n\r\n  .head-sec {\r\n    background-color: #FFDA9E;\r\n  }\r\n\r\n  .main {\r\n    background-color: #FFFFFF;\r\n  }\r\n\r\n  .task:hover {\r\n    background-color: #121212;\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n  }\r\n\r\n  .creator-prop-input { \r\n    background-color: #FFCE7E;\r\n  }\r\n}\r\n\r\n.page-structure.light .header {\r\n  background-color: #FFC05A;\r\n}\r\n\r\n.page-structure.light .creator-prop-input {\r\n  background-color: #FFCE7E;\r\n}\r\n\r\n.page-structure.light *:not(.btn) {\r\n  fill: black;\r\n  color: black;\r\n}\r\n\r\n.page-structure.light .sidebar {\r\n  background-color: #FFCE7E;\r\n}\r\n\r\n.page-structure.light .add-creator-container {\r\n  background-color: #F2BF58;\r\n}\r\n\r\n.page-structure.light .head-sec {\r\n  background-color: #FFDA9E;\r\n}\r\n\r\n.page-structure.light .main {\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n.page-structure.light .task:hover {\r\n  background-color: #FFDA9E;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  * {\r\n    color: white;\r\n  }\r\n\r\n  .add-creator-container {\r\n    background-color: #121212;\r\n  }\r\n\r\n  svg {\r\n    fill: white;\r\n  }\r\n\r\n  .header {\r\n    background-color: #0B0909;\r\n  }\r\n\r\n  .sidebar {\r\n    background-color: #0E0E0E;\r\n  }\r\n\r\n  .head-sec {\r\n    background-color: #121212;\r\n  }\r\n\r\n  .main {\r\n    background-color: #1A1A1A;\r\n  }\r\n\r\n  .task:hover {\r\n    background-color: #121212;\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n  }\r\n}\r\n\r\n.page-structure.dark .header {\r\n  background-color: #0B0909;\r\n}\r\n\r\n.page-structure.dark .creator-prop-input {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.page-structure.dark .sidebar {\r\n  background-color: #0E0E0E;\r\n}\r\n\r\n.page-structure.dark .add-creator-container {\r\n  background-color: #121212;\r\n}\r\n\r\n\r\n.page-structure.dark .head-sec {\r\n  background-color: #121212;\r\n}\r\n\r\n.page-structure.dark .main {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.page-structure.dark .task:hover {\r\n  background-color: #121212;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n.page-structure.dark * {\r\n  color: white;\r\n  fill: white;\r\n}\r\n\r\n.sun, \r\n.moon {\r\n  display: none;\r\n}\r\n\r\n.sun.active,\r\n.moon.active {\r\n  display: block;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* General */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n} \r\n\r\nbody {\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.page-structure {\r\n  display: grid;\r\n  grid-template-columns: 300px 4fr;\r\n  grid-template-areas: \r\n  \"header header\"\r\n  \"sidebar main\"\r\n  \"sidebar main\";\r\n  height: 100%;\r\n}\r\n\r\nsvg:not(.logo) {\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* Header */\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 81px;\r\n  padding: 0 30px;\r\n  grid-area: header;\r\n}\r\n\r\n.logo {\r\n  margin-left: 7px;\r\n}\r\n\r\n.header ul {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n/* Sidebar */\r\n.sidebar {\r\n  height: calc(100vh - 81px);\r\n  grid-area: sidebar;\r\n}\r\n\r\n/* Inbox */\r\n.inbox {\r\n  padding: 20px 0 30px 48px;\r\n  height: 156px;\r\n}\r\n\r\n.inbox-title {\r\n  font-size: 3rem;\r\n  position: relative;\r\n}\r\n\r\n.page-structure.dark .inbox-title::before {\r\n  content: url(\"./img/inbox-white.svg\");\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 10px;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\n.page-structure.light .inbox-title::before {\r\n  content: url(\"./img/inbox-black.svg\");\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 10px;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\n.nav ul {\r\n  display: grid;\r\n  gap: 20px;\r\n}\r\n\r\n.nav ul li {\r\n  font-size: 1.125rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(1)::before {\r\n  content: url(\"./img/inbox-black.svg\");\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(2)::before {\r\n  content: url(\"./img/calendar-black.svg\");\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(3)::before {\r\n  content: url(\"./img/calendar-black.svg\");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(1)::before {\r\n  content: url(\"./img/inbox-white.svg\");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(2)::before {\r\n  content: url(\"./img/calendar-white.svg\");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(3)::before {\r\n  content: url(\"./img/calendar-white.svg\");\r\n}\r\n\r\n.nav ul li::before {\r\n  width: 25px;\r\n  height: 25px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* Projects */\r\n.projects {\r\n  padding: 20px 0 0 48px;\r\n}\r\n\r\n.projects h2 {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.add-project {\r\n  font-size: 0.875rem;\r\n  cursor: pointer;\r\n  letter-spacing: 1px;\r\n  margin-top: 25px;\r\n}\r\n\r\n.page-structure.dark .add-project::before {\r\n  content: url('./img/plus-white.svg');\r\n  width: 15px;\r\n  height: 15px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n.page-structure.light .add-project::before {\r\n  content: url('./img/plus-black.svg');\r\n  width: 15px;\r\n  height: 15px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* Main */\r\n.main {\r\n  grid-area: main;\r\n}\r\n\r\n.head-sec {\r\n  display: grid;\r\n  align-items: center;\r\n  padding: 20px 70px;\r\n}\r\n\r\n.date {\r\n  text-align: center;\r\n  font-size: 3rem;\r\n}\r\n\r\n.date p {\r\n  font-size: 3rem;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.list-view {\r\n  padding: 30px 55px;\r\n  height: calc(100vh - 180px);\r\n  overflow: auto;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  cursor: pointer;\r\n  align-items: center;\r\n  padding: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.task-title {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  position: relative;\r\n}\r\n\r\n.checkbox {\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.checkbox + label {\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.checkbox + label::before {\r\n  content: '';\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: 3px;\r\n}\r\n\r\n.checkbox:checked + label::before {\r\n  content: 'ok';\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 4px;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.priority-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.priority-icon.low {\r\n  border: 2.5px solid yellow;\r\n}\r\n\r\n.priority-icon.moderate {\r\n  border: 2.5px solid orange;\r\n}\r\n\r\n.priority-icon.high {\r\n  border: 2.5px solid red;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* Add container */\r\n.add-creator-bg {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgba(0,0,0,.6);\r\n}\r\n\r\n.add-creator-container {\r\n  width: 810px;\r\n  height: 126px;\r\n  border-radius: 12px;\r\n  box-shadow:1px 1px 1px rgba(0, 0, 0, .4);\r\n}\r\n\r\n.creator-input {\r\n  width: 94%;\r\n  height: 34px;\r\n  justify-self: center;\r\n  margin: 20px 25px;\r\n  outline: none;\r\n  border-radius: 12px;\r\n  color: black;\r\n  padding: 0 10px;\r\n  border: none;\r\n}\r\n\r\n.creator-properties {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n}\r\n\r\n.creator-prop-input {\r\n  width: 234px;\r\n  height: 34px;\r\n  border-radius: 12px;\r\n  background-color: #fff;\r\n  margin-left: 25px;\r\n  color: black;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon {\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn {\r\n  color: black;\r\n  padding: 8px 16px;\r\n  white-space: nowrap;\r\n  border-radius: 12px;\r\n  cursor: pointer;\r\n  border: none;\r\n}\r\n\r\n.priority-select, .notes, .desc, .dateInput, .time, .projects-select {\r\n  width: 100%;\r\n  height: 34px;\r\n  border-radius: 12px;\r\n  background-color: #fff;\r\n  color: black;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.priority-select option, .projects-select option {\r\n  color: black;\r\n}\r\n\r\n.notes, .desc, .dateInput, .time {\r\n  padding: 10px;\r\n  resize: none;\r\n}\r\n\r\n/* project container */\r\n.project {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 200px;\r\n  padding: 10px;\r\n  margin: 15px 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.project-h1 {\r\n  font-size: 3rem;\r\n}\r\n\r\n.project:hover {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.date-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 35px 400px 35px;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n.arrow-backward {\r\n  transform: rotate(180deg);\r\n}\r\n\r\n/* details container */\r\n.details-project-task {\r\n  display: none;\r\n}\r\n\r\n.title {\r\n  font-size: 3rem;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.details-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: 1fr;\r\n}\r\n\r\n.details-container input,\r\n.details-container textarea {\r\n  color: black;\r\n  outline: none;\r\n  border: none;\r\n  padding: 6px 8px;\r\n  resize: none;\r\n}\r\n\r\n.details-container select {\r\n  width: 185px;\r\n  padding: 5px 8px;\r\n  border: none;\r\n  outline: none;\r\n  margin-bottom: 20px;\r\n  color: black;\r\n}\r\n\r\n.details-container select option {\r\n  color: black;\r\n}\r\n\r\n.details-container input {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.details-container label {\r\n  margin-right: 8px;\r\n}\r\n\r\n.details-container div:nth-child(1) div:nth-child(2) label {\r\n  margin-right: 25px;\r\n}\r\n\r\n.description,\r\n.deadline {\r\n  grid-column: 1;\r\n}\r\n\r\n.priority-div,\r\n.is-finished {\r\n  grid-column: 2;\r\n}\r\n\r\n.notes-div {\r\n  grid-column: 3;\r\n  display: flex;\r\n}\r\n\r\n.notes-div textarea {\r\n  height: 120px;\r\n}\r\n\r\n@media (prefers-color-scheme: light) {\r\n  * {\r\n    color: black;\r\n  }\r\n\r\n  svg {\r\n    fill: black;\r\n  }\r\n\r\n  .add-creator-container {\r\n    background-color: #FFC05A;\r\n  }\r\n\r\n  .header {\r\n    background-color: #FFC05A;\r\n  }\r\n\r\n  .sidebar {\r\n    background-color: #FFCE7E;\r\n  }\r\n\r\n  .head-sec {\r\n    background-color: #FFDA9E;\r\n  }\r\n\r\n  .main {\r\n    background-color: #FFFFFF;\r\n  }\r\n\r\n  .task:hover {\r\n    background-color: #121212;\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n  }\r\n\r\n  .creator-prop-input { \r\n    background-color: #FFCE7E;\r\n  }\r\n}\r\n\r\n.page-structure.light .header {\r\n  background-color: #FFC05A;\r\n}\r\n\r\n.page-structure.light .creator-prop-input {\r\n  background-color: #FFCE7E;\r\n}\r\n\r\n.page-structure.light *:not(.btn) {\r\n  fill: black;\r\n  color: black;\r\n}\r\n\r\n.page-structure.light .sidebar {\r\n  background-color: #FFCE7E;\r\n}\r\n\r\n.page-structure.light .add-creator-container {\r\n  background-color: #F2BF58;\r\n}\r\n\r\n.page-structure.light .head-sec {\r\n  background-color: #FFDA9E;\r\n}\r\n\r\n.page-structure.light .main {\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n.page-structure.light .task:hover {\r\n  background-color: #FFDA9E;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  * {\r\n    color: white;\r\n  }\r\n\r\n  .add-creator-container {\r\n    background-color: #121212;\r\n  }\r\n\r\n  svg {\r\n    fill: white;\r\n  }\r\n\r\n  .header {\r\n    background-color: #0B0909;\r\n  }\r\n\r\n  .sidebar {\r\n    background-color: #0E0E0E;\r\n  }\r\n\r\n  .head-sec {\r\n    background-color: #121212;\r\n  }\r\n\r\n  .main {\r\n    background-color: #1A1A1A;\r\n  }\r\n\r\n  .task:hover {\r\n    background-color: #121212;\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n  }\r\n}\r\n\r\n.page-structure.dark .header {\r\n  background-color: #0B0909;\r\n}\r\n\r\n.page-structure.dark .creator-prop-input {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.page-structure.dark .sidebar {\r\n  background-color: #0E0E0E;\r\n}\r\n\r\n.page-structure.dark .add-creator-container {\r\n  background-color: #121212;\r\n}\r\n\r\n\r\n.page-structure.dark .head-sec {\r\n  background-color: #121212;\r\n}\r\n\r\n.page-structure.dark .main {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.page-structure.dark .task:hover {\r\n  background-color: #121212;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n.page-structure.dark * {\r\n  color: white;\r\n  fill: white;\r\n}\r\n\r\n.sun, \r\n.moon {\r\n  display: none;\r\n}\r\n\r\n.sun.active,\r\n.moon.active {\r\n  display: block;\r\n}"],"sourceRoot":""}]);
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

  // filter tasks of a specific project
  const projectWrappers = [];

  _pubSub_js__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('getWrapper', _pubSub_js__WEBPACK_IMPORTED_MODULE_2__["default"].events, (wrapper) => {
    projectWrappers.push(wrapper);

    projectWrappers.forEach((wrapper) => {
      wrapper.addEventListener('click', (event) => {
        _project_js__WEBPACK_IMPORTED_MODULE_1__["default"].projects.forEach((project) => {
          if(event.target.outerText == project.title) {
            _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.tasksContainer.textContent = '';
            _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].openProjectTask(project.title, project.description, project.dueDate, project.priority, project.notes);
            project.tasks.forEach((task) => {
              _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].appendTasks(task.title, task.priority, task.project);
            })
          }
        })
      })
    })
  });
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

  function openProjectTask(title, description, deadline, priority, notes) {
    select.headSec.textContent = '';
    select.details.style.display = 'block';

    select.descriptionInput.value = description;
    select.deadlineInput.value = deadline;
    select.priorityInput.value = priority;
    select.notesInput.textContent = notes;

    select.title.textContent = title;
    select.headSec.append(select.details);
  }

  function appendInbox() {
    select.headSec.textContent = '';
    const inboxTitle = document.createElement('h1');
          inboxTitle.classList.add('inbox-title');
          inboxTitle.textContent = 'Inbox';
    select.headSec.append(inboxTitle)
  }

  select.themeChangeBtn.addEventListener('click', () => {
    select.pageStructure.classList.toggle('dark');
    select.pageStructure.classList.toggle('light');

    select.sun.classList.toggle('active');
    select.moon.classList.toggle('active');
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
          _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.tasksContainer.textContent = '';
          if(event.target.outerText === task.title) {
            _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].openProjectTask(task.title, task.description, task.dueDate, task.priority, task.notes);
          }
        })
      })
    })
  })

  _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.addTaskBtn.addEventListener('click', activateEvents);

  return{tasks, removeEvents, Task, addTask}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0MscUJBQXFCLEtBQUssT0FBTyxxRkFBcUYsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsUUFBUSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFB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QUFzQztBQUN4QztBQUNBLFNBQVM7QUFDVCxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pIM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ007QUFDRDtBQUNMO0FBQ3BDO0FBQ0E7QUFDcUI7QUFDckI7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHViU3ViLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9pbmJveC13aGl0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9pbmJveC1ibGFjay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9jYWxlbmRhci1ibGFjay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltZy9jYWxlbmRhci13aGl0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9wbHVzLXdoaXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vaW1nL3BsdXMtYmxhY2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHZW5lcmFsICovXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufSBcXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggNGZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXHJcXG4gIFxcXCJzaWRlYmFyIG1haW5cXFwiXFxyXFxuICBcXFwic2lkZWJhciBtYWluXFxcIjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuc3ZnOm5vdCgubG9nbykge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEhlYWRlciAqL1xcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDgxcHg7XFxyXFxuICBwYWRkaW5nOiAwIDMwcHg7XFxyXFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTaWRlYmFyICovXFxyXFxuLnNpZGViYXIge1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODFweCk7XFxyXFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxyXFxufVxcclxcblxcclxcbi8qIEluYm94ICovXFxyXFxuLmluYm94IHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMCAzMHB4IDQ4cHg7XFxyXFxuICBoZWlnaHQ6IDE1NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5ib3gtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAuaW5ib3gtdGl0bGU6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5pbmJveC10aXRsZTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYgdWwgbGkge1xcclxcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5uYXYgdWwgbGk6bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5uYXYgdWwgbGk6bnRoLWNoaWxkKDIpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5uYXYgdWwgbGk6bnRoLWNoaWxkKDMpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLm5hdiB1bCBsaTpudGgtY2hpbGQoMSk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAubmF2IHVsIGxpOm50aC1jaGlsZCgyKTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5uYXYgdWwgbGk6bnRoLWNoaWxkKDMpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB1bCBsaTo6YmVmb3JlIHtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUHJvamVjdHMgKi9cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgcGFkZGluZzogMjBweCAwIDAgNDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLmFkZC1wcm9qZWN0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5hZGQtcHJvamVjdDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gKi9cXHJcXG4ubWFpbiB7XFxyXFxuICBncmlkLWFyZWE6IG1haW47XFxyXFxufVxcclxcblxcclxcbi5oZWFkLXNlYyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHggNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZSBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtdmlldyB7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDU1cHg7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxODBweCk7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3ggKyBsYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94ICsgbGFiZWw6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3g6Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJ29rJztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDRweDtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1pY29uIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaWNvbi5sb3cge1xcclxcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1pY29uLm1vZGVyYXRlIHtcXHJcXG4gIGJvcmRlcjogMi41cHggc29saWQgb3JhbmdlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaWNvbi5oaWdoIHtcXHJcXG4gIGJvcmRlcjogMi41cHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBZGQgY29udGFpbmVyICovXFxyXFxuLmFkZC1jcmVhdG9yLWJnIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC42KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jcmVhdG9yLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogODEwcHg7XFxyXFxuICBoZWlnaHQ6IDEyNnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGJveC1zaGFkb3c6MXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAuNCk7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdG9yLWlucHV0IHtcXHJcXG4gIHdpZHRoOiA5NCU7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMjBweCAyNXB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdG9yLXByb3BlcnRpZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRvci1wcm9wLWlucHV0IHtcXHJcXG4gIHdpZHRoOiAyMzRweDtcXHJcXG4gIGhlaWdodDogMzRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LXNlbGVjdCwgLm5vdGVzLCAuZGVzYywgLmRhdGVJbnB1dCwgLnRpbWUsIC5wcm9qZWN0cy1zZWxlY3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1zZWxlY3Qgb3B0aW9uLCAucHJvamVjdHMtc2VsZWN0IG9wdGlvbiB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5ub3RlcywgLmRlc2MsIC5kYXRlSW5wdXQsIC50aW1lIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIHByb2plY3QgY29udGFpbmVyICovXFxyXFxuLnByb2plY3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW46IDE1cHggMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaDEge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1cHggNDAwcHggMzVweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcnJvdy1iYWNrd2FyZCB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBkZXRhaWxzIGNvbnRhaW5lciAqL1xcclxcbi5kZXRhaWxzLXByb2plY3QtdGFzayB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLWNvbnRhaW5lciBpbnB1dCxcXHJcXG4uZGV0YWlscy1jb250YWluZXIgdGV4dGFyZWEge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLWNvbnRhaW5lciBzZWxlY3Qge1xcclxcbiAgd2lkdGg6IDE4NXB4O1xcclxcbiAgcGFkZGluZzogNXB4IDhweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgc2VsZWN0IG9wdGlvbiB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLWNvbnRhaW5lciBpbnB1dCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgbGFiZWwge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLWNvbnRhaW5lciBkaXY6bnRoLWNoaWxkKDEpIGRpdjpudGgtY2hpbGQoMikgbGFiZWwge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24sXFxyXFxuLmRlYWRsaW5lIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktZGl2LFxcclxcbi5pcy1maW5pc2hlZCB7XFxyXFxuICBncmlkLWNvbHVtbjogMjtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGVzLWRpdiB7XFxyXFxuICBncmlkLWNvbHVtbjogMztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5ub3Rlcy1kaXYgdGV4dGFyZWEge1xcclxcbiAgaGVpZ2h0OiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpIHtcXHJcXG4gICoge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzdmcge1xcclxcbiAgICBmaWxsOiBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hZGQtY3JlYXRvci1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMDVBO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMwNUE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2lkZWJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkNFN0U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZC1zZWMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEQTlFO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2s6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcclxcbiAgfVxcclxcblxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjODg4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzU1NTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jcmVhdG9yLXByb3AtaW5wdXQgeyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0U3RTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzA1QTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5jcmVhdG9yLXByb3AtaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0U3RTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0ICo6bm90KC5idG4pIHtcXHJcXG4gIGZpbGw6IGJsYWNrO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLnNpZGViYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0U3RTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5hZGQtY3JlYXRvci1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyQkY1ODtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5oZWFkLXNlYyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEQTlFO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLm1haW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC50YXNrOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkRBOUU7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjODg4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM1NTU7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXHJcXG4gICoge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkLWNyZWF0b3ItY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHN2ZyB7XFxyXFxuICAgIGZpbGw6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQjA5MDk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2lkZWJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTBFMEU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZC1zZWMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2s6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcclxcbiAgfVxcclxcblxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjODg4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzU1NTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEIwOTA5O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAuY3JlYXRvci1wcm9wLWlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5zaWRlYmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRTBFMEU7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5hZGQtY3JlYXRvci1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLmhlYWQtc2VjIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5tYWluIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC50YXNrOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyazo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogIzg4ODtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcms6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM1NTU7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrICoge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZmlsbDogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5zdW4sIFxcclxcbi5tb29uIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zdW4uYWN0aXZlLFxcclxcbi5tb29uLmFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxZQUFZO0FBQ1o7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQzs7O2dCQUdjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOzs7QUFHQSxXQUFXO0FBQ1g7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdEQUFxQztFQUNyQyxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGdEQUFxQztFQUNyQyxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdEQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGdEQUF3QztBQUMxQzs7QUFFQTtFQUNFLGdEQUF3QztBQUMxQzs7QUFFQTtFQUNF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OztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFHQTtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7OztBQUdBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHZW5lcmFsICovXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufSBcXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggNGZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXHJcXG4gIFxcXCJzaWRlYmFyIG1haW5cXFwiXFxyXFxuICBcXFwic2lkZWJhciBtYWluXFxcIjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuc3ZnOm5vdCgubG9nbykge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEhlYWRlciAqL1xcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDgxcHg7XFxyXFxuICBwYWRkaW5nOiAwIDMwcHg7XFxyXFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTaWRlYmFyICovXFxyXFxuLnNpZGViYXIge1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODFweCk7XFxyXFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxyXFxufVxcclxcblxcclxcbi8qIEluYm94ICovXFxyXFxuLmluYm94IHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMCAzMHB4IDQ4cHg7XFxyXFxuICBoZWlnaHQ6IDE1NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5ib3gtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAuaW5ib3gtdGl0bGU6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vaW1nL2luYm94LXdoaXRlLnN2Z1xcXCIpO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5pbmJveC10aXRsZTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi9pbWcvaW5ib3gtYmxhY2suc3ZnXFxcIik7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYgdWwgbGkge1xcclxcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5uYXYgdWwgbGk6bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuL2ltZy9pbmJveC1ibGFjay5zdmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5uYXYgdWwgbGk6bnRoLWNoaWxkKDIpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuL2ltZy9jYWxlbmRhci1ibGFjay5zdmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5uYXYgdWwgbGk6bnRoLWNoaWxkKDMpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuL2ltZy9jYWxlbmRhci1ibGFjay5zdmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLm5hdiB1bCBsaTpudGgtY2hpbGQoMSk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vaW1nL2luYm94LXdoaXRlLnN2Z1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAubmF2IHVsIGxpOm50aC1jaGlsZCgyKTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi9pbWcvY2FsZW5kYXItd2hpdGUuc3ZnXFxcIik7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5uYXYgdWwgbGk6bnRoLWNoaWxkKDMpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuL2ltZy9jYWxlbmRhci13aGl0ZS5zdmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB1bCBsaTo6YmVmb3JlIHtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUHJvamVjdHMgKi9cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgcGFkZGluZzogMjBweCAwIDAgNDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLmFkZC1wcm9qZWN0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKCcuL2ltZy9wbHVzLXdoaXRlLnN2ZycpO1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLmFkZC1wcm9qZWN0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKCcuL2ltZy9wbHVzLWJsYWNrLnN2ZycpO1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWluICovXFxyXFxuLm1haW4ge1xcclxcbiAgZ3JpZC1hcmVhOiBtYWluO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZC1zZWMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDcwcHg7XFxyXFxufVxcclxcblxcclxcbi5kYXRlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUgcCB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5saXN0LXZpZXcge1xcclxcbiAgcGFkZGluZzogMzBweCA1NXB4O1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTgwcHgpO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94ICsgbGFiZWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCArIGxhYmVsOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94OmNoZWNrZWQgKyBsYWJlbDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICdvayc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaWNvbiB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWljb24ubG93IHtcXHJcXG4gIGJvcmRlcjogMi41cHggc29saWQgeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaWNvbi5tb2RlcmF0ZSB7XFxyXFxuICBib3JkZXI6IDIuNXB4IHNvbGlkIG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWljb24uaGlnaCB7XFxyXFxuICBib3JkZXI6IDIuNXB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQWRkIGNvbnRhaW5lciAqL1xcclxcbi5hZGQtY3JlYXRvci1iZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNik7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY3JlYXRvci1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDgxMHB4O1xcclxcbiAgaGVpZ2h0OiAxMjZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBib3gtc2hhZG93OjFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRvci1pbnB1dCB7XFxyXFxuICB3aWR0aDogOTQlO1xcclxcbiAgaGVpZ2h0OiAzNHB4O1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDIwcHggMjVweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRvci1wcm9wZXJ0aWVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0b3ItcHJvcC1pbnB1dCB7XFxyXFxuICB3aWR0aDogMjM0cHg7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1zZWxlY3QsIC5ub3RlcywgLmRlc2MsIC5kYXRlSW5wdXQsIC50aW1lLCAucHJvamVjdHMtc2VsZWN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktc2VsZWN0IG9wdGlvbiwgLnByb2plY3RzLXNlbGVjdCBvcHRpb24ge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZXMsIC5kZXNjLCAuZGF0ZUlucHV0LCAudGltZSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwcm9qZWN0IGNvbnRhaW5lciAqL1xcclxcbi5wcm9qZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAxNXB4IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IDQwMHB4IDM1cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJyb3ctYmFja3dhcmQge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZGV0YWlscyBjb250YWluZXIgKi9cXHJcXG4uZGV0YWlscy1wcm9qZWN0LXRhc2sge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgaW5wdXQsXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIHRleHRhcmVhIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA2cHggOHB4O1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgc2VsZWN0IHtcXHJcXG4gIHdpZHRoOiAxODVweDtcXHJcXG4gIHBhZGRpbmc6IDVweCA4cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIHNlbGVjdCBvcHRpb24ge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgaW5wdXQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIGxhYmVsIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgZGl2Om50aC1jaGlsZCgxKSBkaXY6bnRoLWNoaWxkKDIpIGxhYmVsIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLFxcclxcbi5kZWFkbGluZSB7XFxyXFxuICBncmlkLWNvbHVtbjogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWRpdixcXHJcXG4uaXMtZmluaXNoZWQge1xcclxcbiAgZ3JpZC1jb2x1bW46IDI7XFxyXFxufVxcclxcblxcclxcbi5ub3Rlcy1kaXYge1xcclxcbiAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZXMtZGl2IHRleHRhcmVhIHtcXHJcXG4gIGhlaWdodDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KSB7XFxyXFxuICAqIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcblxcclxcbiAgc3ZnIHtcXHJcXG4gICAgZmlsbDogYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkLWNyZWF0b3ItY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzA1QTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMDVBO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNpZGViYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDRTdFO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWQtc2VjIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREE5RTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzg4ODtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM1NTU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY3JlYXRvci1wcm9wLWlucHV0IHsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkNFN0U7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMwNUE7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAuY3JlYXRvci1wcm9wLWlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkNFN0U7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAqOm5vdCguYnRuKSB7XFxyXFxuICBmaWxsOiBibGFjaztcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5zaWRlYmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkNFN0U7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAuYWRkLWNyZWF0b3ItY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkJGNTg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAuaGVhZC1zZWMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREE5RTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5tYWluIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAudGFzazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEQTlFO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogIzg4ODtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxyXFxuICAqIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZC1jcmVhdG9yLWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzdmcge1xcclxcbiAgICBmaWxsOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEIwOTA5O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNpZGViYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEUwRTBFO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWQtc2VjIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzg4ODtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM1NTU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBCMDkwOTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLmNyZWF0b3ItcHJvcC1pbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAuc2lkZWJhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEUwRTBFO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAuYWRkLWNyZWF0b3ItY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5oZWFkLXNlYyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAubWFpbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAudGFzazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyazo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcms6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM4ODg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAqIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZpbGw6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VuLCBcXHJcXG4ubW9vbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VuLmFjdGl2ZSxcXHJcXG4ubW9vbi5hY3RpdmUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgdGFzayBmcm9tICcuL3Rhc2suanMnO1xyXG5pbXBvcnQgcHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xyXG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vcHViU3ViLmpzJztcclxuaW1wb3J0IGRvbSBmcm9tICcuL2RvbS5qcyc7XHJcbmltcG9ydCBkYXRlIGZyb20gJy4vZGF0ZS5qcyc7XHJcbmltcG9ydCBjcmVhdG9yIGZyb20gJy4vY3JlYXRvci5qcyc7XHJcblxyXG5jb25zdCBhcHBIYW5kbGVyID0gKGZ1bmN0aW9uKCkge1xyXG4gIC8vIGZpbHRlciBhcnJheSBieSBkYXRlXHJcbiAgICBldmVudHMuc3Vic2NyaWJlKCdmdWxsRGF0ZScsIGV2ZW50cy5ldmVudHMsIChkYXRlKSA9PiB7XHJcbiAgICAgIGZ1bmN0aW9uIGlzRHVlRGF0ZSh0YXNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2suZHVlRGF0ZSA9PT0gZGF0ZVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGZ1bmN0aW9uIGZpbHRlckRhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRhc2sudGFza3MuZmlsdGVyKGlzRHVlRGF0ZSk7XHJcbiAgICAgICAgY3JlYXRvci5jcmVhdG9yLmNyZWF0b3JCZy5yZW1vdmUoKTtcclxuICAgICAgICBpZihkYXRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGRvbS5zZWxlY3QudGFza3NDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgIGZvcihsZXQgdGFza3Mgb2YgZGF0ZSkge1xyXG4gICAgICAgICAgICBkb20uYXBwZW5kVGFza3ModGFza3MudGl0bGUsIHRhc2tzLnByaW9yaXR5LCB0YXNrcy5wcm9qZWN0KTtcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9tLnNlbGVjdC50YXNrc0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiWW91IGRvbid0IGhhdmUgYW55IHRhc2sgZm9yIHRvZGF5LlwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmaWx0ZXJEYXRlKCk7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgLy8gZmlsdGVyIGFycmF5IHRvIGZpbmQgaW5ib3ggdGFza3MvIG9yIHRhc2tzIHdpdGhvdXQgcHJvamVjdHNcclxuICBmdW5jdGlvbiBpc0luYm94KHRhc2spIHtcclxuICAgIHJldHVybiB0YXNrLnByb2plY3QgPT09ICdJbmJveCdcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbHRlckluYm94KCkge1xyXG4gICAgY29uc3QgaW5ib3ggPSB0YXNrLnRhc2tzLmZpbHRlcihpc0luYm94KTtcclxuICAgIGRvbS5hcHBlbmRJbmJveCgpO1xyXG4gICAgaWYoaW5ib3gubGVuZ3RoID4gMCkge1xyXG4gICAgICBkb20uc2VsZWN0LnRhc2tzQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIGZvcihsZXQgdGFza3Mgb2YgaW5ib3gpIHtcclxuICAgICAgICBkb20uYXBwZW5kVGFza3ModGFza3MudGl0bGUsIHRhc2tzLnByaW9yaXR5LCB0YXNrcy5wcm9qZWN0KTtcclxuICAgICAgfSBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9tLnNlbGVjdC50YXNrc0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICdZb3VyIGluYm94IGlzIGNsZWFuLidcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvbS5zZWxlY3QuaW5ib3hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmaWx0ZXJJbmJveClcclxuXHJcbiAgLy8gZmlsdGVyIHRhc2tzIG9mIGEgc3BlY2lmaWMgcHJvamVjdFxyXG4gIGNvbnN0IHByb2plY3RXcmFwcGVycyA9IFtdO1xyXG5cclxuICBldmVudHMuc3Vic2NyaWJlKCdnZXRXcmFwcGVyJywgZXZlbnRzLmV2ZW50cywgKHdyYXBwZXIpID0+IHtcclxuICAgIHByb2plY3RXcmFwcGVycy5wdXNoKHdyYXBwZXIpO1xyXG5cclxuICAgIHByb2plY3RXcmFwcGVycy5mb3JFYWNoKCh3cmFwcGVyKSA9PiB7XHJcbiAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBwcm9qZWN0LnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICAgIGlmKGV2ZW50LnRhcmdldC5vdXRlclRleHQgPT0gcHJvamVjdC50aXRsZSkge1xyXG4gICAgICAgICAgICBkb20uc2VsZWN0LnRhc2tzQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIGRvbS5vcGVuUHJvamVjdFRhc2socHJvamVjdC50aXRsZSwgcHJvamVjdC5kZXNjcmlwdGlvbiwgcHJvamVjdC5kdWVEYXRlLCBwcm9qZWN0LnByaW9yaXR5LCBwcm9qZWN0Lm5vdGVzKTtcclxuICAgICAgICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgZG9tLmFwcGVuZFRhc2tzKHRhc2sudGl0bGUsIHRhc2sucHJpb3JpdHksIHRhc2sucHJvamVjdCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSk7XHJcbn0pKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcEhhbmRsZXI7IiwiaW1wb3J0IG5vdGVzV2hpdGUgZnJvbSAnLi9pbWcvbm90ZXMtd2hpdGUuc3ZnJztcclxuaW1wb3J0IGRlc2NXaGl0ZSBmcm9tICcuL2ltZy9kZXNjcmlwdGlvbi13aGl0ZS5zdmcnO1xyXG5pbXBvcnQgcHJvamVjdFdoaXRlIGZyb20gJy4vaW1nL3Byb2plY3Qtd2hpdGUuc3ZnJztcclxuaW1wb3J0IGNhbGVuZGFyV2hpdGUgZnJvbSAnLi9pbWcvY2FsZW5kYXItd2hpdGUuc3ZnJztcclxuaW1wb3J0IGZsYWdXaGl0ZSBmcm9tICcuL2ltZy9mbGFnLXdoaXRlLnN2Zyc7XHJcbmltcG9ydCBjaGVja2xpc3RXaGl0ZSBmcm9tICcuL2ltZy9jaGVja2xpc3Qtd2hpdGUuc3ZnJztcclxuaW1wb3J0IG5vdGVzQmxhY2sgZnJvbSAnLi9pbWcvbm90ZXMtYmxhY2suc3ZnJztcclxuaW1wb3J0IGRlc2NCbGFjayBmcm9tICcuL2ltZy9kZXNjcmlwdGlvbi1ibGFjay5zdmcnO1xyXG5pbXBvcnQgcHJvamVjdEJsYWNrIGZyb20gJy4vaW1nL3Byb2plY3QtYmxhY2suc3ZnJztcclxuaW1wb3J0IGNhbGVuZGFyQmxhY2sgZnJvbSAnLi9pbWcvY2FsZW5kYXIyLWJsYWNrLnN2Zyc7XHJcbmltcG9ydCBmbGFnQmxhY2sgZnJvbSAnLi9pbWcvZmxhZy1ibGFjay5zdmcnO1xyXG5pbXBvcnQgY2hlY2tsaXN0QmxhY2sgZnJvbSAnLi9pbWcvY2hlY2tsaXN0LWJsYWNrLnN2Zyc7XHJcbmltcG9ydCBkb20gZnJvbSAnLi9kb20uanMnO1xyXG5pbXBvcnQgZXZlbnRzIGZyb20nLi9wdWJTdWIuanMnO1xyXG5cclxuY29uc3QgY3JlYXRvciA9IChmdW5jdGlvbigpIHtcclxuXHJcbmNvbnN0IGNyZWF0b3IgPSB7XHJcbiAgY3JlYXRvckJnOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICBjcmVhdG9yQ29udGFpbmVyOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICBpbnB1dDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSxcclxuICBjcmVhdG9yUHJvcDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgY3JlYXRvclByb3BJbnB1dDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgY2FuY2VsQnRuOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuICBhZGRCdG46IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG4gIG5vdGVzOiBuZXcgSW1hZ2UoKSxcclxuICBkZXNjOiBuZXcgSW1hZ2UoKSxcclxuICBwcm9qZWN0OiBuZXcgSW1hZ2UoKSxcclxuICBjYWxlbmRhcjogbmV3IEltYWdlKCksXHJcbiAgcHJpb3JpdHk6IG5ldyBJbWFnZSgpLFxyXG4gIGNoZWNrbGlzdDogbmV3IEltYWdlKCksXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZENyZWF0b3IgKCkge1xyXG4gIGNyZWF0b3IuY3JlYXRvckJnLmNsYXNzTGlzdC5hZGQoJ2FkZC1jcmVhdG9yLWJnJylcclxuXHJcbiAgY3JlYXRvci5jcmVhdG9yQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZC1jcmVhdG9yLWNvbnRhaW5lcicpO1xyXG5cclxuICBjcmVhdG9yLmlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY3JlYXRvcicpO1xyXG4gIGNyZWF0b3IuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2NyZWF0b3InKTtcclxuICBjcmVhdG9yLmlucHV0LmNsYXNzTGlzdC5hZGQoJ2NyZWF0b3ItaW5wdXQnKTtcclxuXHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcC5jbGFzc0xpc3QuYWRkKCdjcmVhdG9yLXByb3BlcnRpZXMnKTtcclxuXHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LmNsYXNzTGlzdC5hZGQoJ2NyZWF0b3ItcHJvcC1pbnB1dCcpO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICBpZihkb20uc2VsZWN0LnBhZ2VTdHJ1Y3R1cmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaWdodCcpKSB7XHJcbiAgICBjcmVhdG9yLm5vdGVzLnNyYyA9IG5vdGVzQmxhY2s7XHJcbiAgICBjcmVhdG9yLmRlc2Muc3JjID0gZGVzY0JsYWNrO1xyXG4gICAgY3JlYXRvci5wcm9qZWN0LnNyYyA9IHByb2plY3RCbGFjaztcclxuICAgIGNyZWF0b3IuY2FsZW5kYXIuc3JjID0gY2FsZW5kYXJCbGFjaztcclxuICAgIGNyZWF0b3IucHJpb3JpdHkuc3JjID0gZmxhZ0JsYWNrO1xyXG4gICAgY3JlYXRvci5jaGVja2xpc3Quc3JjID0gY2hlY2tsaXN0QmxhY2s7XHJcbiAgfSBlbHNlIHtcclxuICAgICAgY3JlYXRvci5ub3Rlcy5zcmMgPSBub3Rlc1doaXRlO1xyXG4gICAgICBjcmVhdG9yLmRlc2Muc3JjID0gZGVzY1doaXRlO1xyXG4gICAgICBjcmVhdG9yLnByb2plY3Quc3JjID0gcHJvamVjdFdoaXRlO1xyXG4gICAgICBjcmVhdG9yLmNhbGVuZGFyLnNyYyA9IGNhbGVuZGFyV2hpdGU7XHJcbiAgICAgIGNyZWF0b3IucHJpb3JpdHkuc3JjID0gZmxhZ1doaXRlO1xyXG4gICAgICBjcmVhdG9yLmNoZWNrbGlzdC5zcmMgPSBjaGVja2xpc3RXaGl0ZTtcclxuICB9XHJcblxyXG4gIGNyZWF0b3IuY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICBjcmVhdG9yLmNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gIGNyZWF0b3IuY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG4gIGNyZWF0b3IuY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbCcpO1xyXG5cclxuICBjcmVhdG9yLmFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgY3JlYXRvci5hZGRCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSc7XHJcbiAgY3JlYXRvci5hZGRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgY3JlYXRvci5hZGRCdG4uY2xhc3NMaXN0LmFkZCgnYWRkJyk7XHJcbiAgXHJcbiAgY3JlYXRvci5ub3Rlcy5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XHJcbiAgY3JlYXRvci5ub3Rlcy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdub3RlcycpO1xyXG5cclxuICBjcmVhdG9yLmRlc2MuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG4gIGNyZWF0b3IuZGVzYy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdkZXNjJyk7XHJcblxyXG4gIGNyZWF0b3IucHJvamVjdC5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XHJcbiAgY3JlYXRvci5wcm9qZWN0LnNldEF0dHJpYnV0ZSgnYWx0JywgJ3Byb2plY3QnKTtcclxuXHJcbiAgY3JlYXRvci5jYWxlbmRhci5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XHJcbiAgY3JlYXRvci5jYWxlbmRhci5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdjYWxlbmRhcicpO1xyXG5cclxuICBjcmVhdG9yLnByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuICBjcmVhdG9yLnByaW9yaXR5LnNldEF0dHJpYnV0ZSgnYWx0JywgJ3ByaW9yaXR5Jyk7XHJcblxyXG4gIGNyZWF0b3IuY2hlY2tsaXN0LmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuICBjcmVhdG9yLmNoZWNrbGlzdC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdjaGVja2xpc3QnKTtcclxuXHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcC5hcHBlbmQoY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LCBjcmVhdG9yLmRlc2MsIGNyZWF0b3IuY2FsZW5kYXIsIGNyZWF0b3IucHJpb3JpdHksICBjcmVhdG9yLm5vdGVzLCBjcmVhdG9yLnByb2plY3QsIGNyZWF0b3IuY2hlY2tsaXN0LCBjcmVhdG9yLmNhbmNlbEJ0biwgY3JlYXRvci5hZGRCdG4pO1xyXG4gIGNyZWF0b3IuY3JlYXRvckNvbnRhaW5lci5hcHBlbmQoY3JlYXRvci5pbnB1dCwgY3JlYXRvci5jcmVhdG9yUHJvcCk7XHJcbiAgY3JlYXRvci5jcmVhdG9yQmcuYXBwZW5kKGNyZWF0b3IuY3JlYXRvckNvbnRhaW5lcik7XHJcbiAgZG9tLnNlbGVjdC5wYWdlU3RydWN0dXJlLmFwcGVuZChjcmVhdG9yLmNyZWF0b3JCZyk7XHJcbn1cclxuXHJcbmNvbnN0IHByaW9yaXR5ID0ge1xyXG4gIHNlbGVjdDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JyksXHJcbiAgb3B0MDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyksXHJcbiAgb3B0MTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyksXHJcbiAgb3B0MjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyksXHJcbiAgb3B0MzogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyksXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZFByaW9yaXR5KCkge1xyXG4gIHByaW9yaXR5LnNlbGVjdC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1zZWxlY3QnKTtcclxuICBwcmlvcml0eS5vcHQwLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAncHJpb3JpdHknKTtcclxuICBwcmlvcml0eS5vcHQwLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcclxuICBwcmlvcml0eS5vcHQwLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcclxuICBwcmlvcml0eS5vcHQxLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XHJcbiAgcHJpb3JpdHkub3B0MS50ZXh0Q29udGVudCA9ICdMb3cnO1xyXG4gIHByaW9yaXR5Lm9wdDIuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtb2RlcmF0ZScpO1xyXG4gIHByaW9yaXR5Lm9wdDIudGV4dENvbnRlbnQgPSAnTW9kZXJhdGUnO1xyXG4gIHByaW9yaXR5Lm9wdDMuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoJyk7XHJcbiAgcHJpb3JpdHkub3B0My50ZXh0Q29udGVudCA9ICdIaWdoJztcclxuXHJcbiAgcHJpb3JpdHkuc2VsZWN0LmFwcGVuZChwcmlvcml0eS5vcHQxLCBwcmlvcml0eS5vcHQyLCBwcmlvcml0eS5vcHQzLCBwcmlvcml0eS5vcHQwKTtcclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wSW5wdXQudGV4dENvbnRlbnQgPSAnJztcclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wSW5wdXQuYXBwZW5kKHByaW9yaXR5LnNlbGVjdClcclxufVxyXG5cclxuY29uc3QgcHJvamVjdHMgPSB7XHJcbiAgc2VsZWN0OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSxcclxuICBvcHQwOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSxcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kUHJvamVjdHMoKSB7XHJcbiAgcHJvamVjdHMuc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLXNlbGVjdCcpO1xyXG4gIHByb2plY3RzLm9wdDAuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdpbmJveCcpO1xyXG4gIHByb2plY3RzLm9wdDAuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xyXG4gIHByb2plY3RzLm9wdDAudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xyXG5cclxuICBwcm9qZWN0cy5zZWxlY3QuYXBwZW5kKHByb2plY3RzLm9wdDApO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC5hcHBlbmQocHJvamVjdHMuc2VsZWN0KVxyXG59XHJcblxyXG5ldmVudHMuc3Vic2NyaWJlKCdwcm9qZWN0cycsIGV2ZW50cy5ldmVudHMsIChwcm9qZWN0KSA9PiB7XHJcbiAgY29uc3Qgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcm9qZWN0LnRpdGxlKTtcclxuICAgICAgICBvcHQudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xyXG4gIHByb2plY3RzLnNlbGVjdC5hcHBlbmRDaGlsZChvcHQpO1xyXG59KVxyXG5cclxuXHJcbmNvbnN0IG5vdGVzID0ge1xyXG4gIHRleHRBcmVhOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZE5vdGVzKCkge1xyXG4gIG5vdGVzLnRleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ25vdGVzJyk7XHJcbiAgbm90ZXMudGV4dEFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOb3Rlcy4uLicpO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC5hcHBlbmQobm90ZXMudGV4dEFyZWEpO1xyXG59XHJcblxyXG5jb25zdCBkZXNjID0ge1xyXG4gIHRleHRBcmVhOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZERlc2MoKSB7XHJcbiAgZGVzYy50ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XHJcbiAgZGVzYy50ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uLi4uIChtYXggNzVjaCknKTtcclxuICBkZXNjLnRleHRBcmVhLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzc1Jyk7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LmFwcGVuZChkZXNjLnRleHRBcmVhKTtcclxufVxyXG5cclxuY29uc3QgZHVlRGF0ZSA9IHtcclxuICBkYXRlOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZER1ZURhdGUoKSB7XHJcbiAgZHVlRGF0ZS5kYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcbiAgZHVlRGF0ZS5kYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZScpO1xyXG4gIGR1ZURhdGUuZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGF0ZScpO1xyXG4gIGR1ZURhdGUuZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlSW5wdXQnKTtcclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wSW5wdXQudGV4dENvbnRlbnQgPSAnJztcclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wSW5wdXQuYXBwZW5kKGR1ZURhdGUuZGF0ZSk7XHJcbn1cclxuXHJcbmNvbnN0IHRpbWUgPSB7XHJcbiAgdGltZTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBlbmRUaW1lKCkge1xyXG4gIHRpbWUudGltZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGltZScpO1xyXG4gIHRpbWUudGltZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpbWUnKTtcclxuICB0aW1lLnRpbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpbWUnKTtcclxuICB0aW1lLnRpbWUuY2xhc3NMaXN0LmFkZCgndGltZScpO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC5hcHBlbmQodGltZS50aW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRDcmVhdG9yKCkge1xyXG4gIGNyZWF0b3IuaW5wdXQudmFsdWUgPSAnJztcclxuICBkZXNjLnRleHRBcmVhLnZhbHVlID0gJyc7XHJcbiAgbm90ZXMudGV4dEFyZWEudmFsdWUgPSAnJztcclxuICBkdWVEYXRlLmRhdGUudmFsdWUgPSAnJztcclxuICB0aW1lLnRpbWUudmFsdWUgPSAnJztcclxuICBwcmlvcml0eS5zZWxlY3Quc2VsZWN0ZWRJbmRleCA9IG51bGw7XHJcbiAgcHJvamVjdHMuc2VsZWN0LnNlbGVjdGVkSW5kZXggPSBudWxsO1xyXG59XHJcblxyXG5jcmVhdG9yLnByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwZW5kUHJpb3JpdHkpO1xyXG5jcmVhdG9yLm5vdGVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwZW5kTm90ZXMpO1xyXG5jcmVhdG9yLmRlc2MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBlbmREZXNjKTtcclxuY3JlYXRvci5jYWxlbmRhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFwcGVuZER1ZURhdGUpO1xyXG5jcmVhdG9yLnByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBlbmRQcm9qZWN0cyk7XHJcblxyXG5yZXR1cm4ge1xyXG4gIGNyZWF0b3IsXHJcbiAgcHJpb3JpdHksXHJcbiAgZGVzYyxcclxuICBub3RlcyxcclxuICBkdWVEYXRlLFxyXG4gIHRpbWUsXHJcbiAgcmVzZXRDcmVhdG9yLFxyXG4gIGFwcGVuZENyZWF0b3IsIFxyXG4gIHByb2plY3RzXHJcbn1cclxufSkoKVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0b3I7IiwiaW1wb3J0IGRvbSBmcm9tICcuL2RvbS5qcyc7XHJcbmltcG9ydCBldmVudHMgZnJvbSAnLi9wdWJTdWIuanMnO1xyXG5cclxuY29uc3QgaGFuZGxlRGF0ZXMgPSAoZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgbW9udGhzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGxldCB0b2RheSA9IGRhdGUuZ2V0VVRDRGF0ZSgpO1xyXG4gICAgbGV0IGN1cnJlbnRNb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcclxuICAgIGxldCBjdXJyZW50WWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcclxuICAgIGxldCBtb250aCA9IG1vbnRoc1tjdXJyZW50TW9udGhdO1xyXG4gICAgbGV0IGRhdGVTdHJpbmc7XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlRGF5cyhtb250aCkge1xyXG4gICAgICBsZXQgbWF4RGF5cztcclxuXHJcbiAgICAgIGlmIChtb250aCA9PT0gJ0ZlYnJ1YXJ5Jykge1xyXG4gICAgICAgIG1heERheXMgPSAyODtcclxuICAgICAgfSBlbHNlIGlmKG1vbnRoID09PSAnQXByaWwnIHx8IG1vbnRoID09PSAnSnVuZScgfHwgbW9udGggPT09ICdTZXB0ZW1iZXInIHx8IG1vbnRoID09PSAnTm92ZW1iZXInKSB7XHJcbiAgICAgICAgbWF4RGF5cyA9IDMwXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWF4RGF5cyA9IDMxXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgcmV0dXJuIG1heERheXNcclxuICAgIH1cclxuXHJcbiAgICBkb20uc2VsZWN0LmRhdGUudGV4dENvbnRlbnQgPSBgJHt0b2RheX0gJHttb250aH0gJHtjdXJyZW50WWVhcn1gO1xyXG4gIFxyXG4gICAgZG9tLnNlbGVjdC5hcnJvd0JhY2t3YXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZih0b2RheSA8IDIpIHtcclxuICAgICAgICBpZihjdXJyZW50TW9udGggPT09IDApIHtcclxuICAgICAgICAgIC0tY3VycmVudFllYXI7XHJcbiAgICAgICAgICBjdXJyZW50TW9udGggPSAxMTtcclxuICAgICAgICAgIG1vbnRoID0gbW9udGhzW2N1cnJlbnRNb250aF07XHJcbiAgICAgICAgICBjb25zdCBtYXhEYXlzID0gY2FsY3VsYXRlRGF5cyhtb250aCk7XHJcbiAgICAgICAgICB0b2RheSA9IG1heERheXMgKyAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBwcmV2aW91c01vbnRoID0gLS1jdXJyZW50TW9udGg7XHJcbiAgICAgICAgICAgIG1vbnRoID0gbW9udGhzW3ByZXZpb3VzTW9udGhdXHJcbiAgICAgICAgICAgIGNvbnN0IG1heERheXMgPSBjYWxjdWxhdGVEYXlzKG1vbnRoKTtcclxuICAgICAgICAgICAgdG9kYXkgPSBtYXhEYXlzICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdG9kYXktLTtcclxuICAgICAgZG9tLnNlbGVjdC5kYXRlLnRleHRDb250ZW50ID0gYCR7dG9kYXl9ICR7bW9udGh9ICR7Y3VycmVudFllYXJ9YDtcclxuICAgICAgZGF0ZVN0cmluZyA9IGAke2N1cnJlbnRZZWFyfS0keygnMCcgKyAoY3VycmVudE1vbnRoKzEpKS5zbGljZSgtMil9LSR7KCcwJyArIHRvZGF5KS5zbGljZSgtMil9YDtcclxuICAgICAgZXZlbnRzLnB1Ymxpc2goJ2Z1bGxEYXRlJywgZGF0ZVN0cmluZyk7XHJcbiAgICB9KVxyXG5cclxuICAgIGRvbS5zZWxlY3QuYXJyb3dGb3J3YXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBtYXhEYXlzID0gY2FsY3VsYXRlRGF5cyhtb250aCk7XHJcbiAgICAgIGlmKHRvZGF5ID09PSBtYXhEYXlzKSB7XHJcbiAgICAgICAgaWYoY3VycmVudE1vbnRoID09PSAxMSkge1xyXG4gICAgICAgICAgKytjdXJyZW50WWVhcjtcclxuICAgICAgICAgIGN1cnJlbnRNb250aCA9IDA7XHJcbiAgICAgICAgICBtb250aCA9IG1vbnRoc1tjdXJyZW50TW9udGhdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsZXQgbmV4dE1vbnRoID0gKytjdXJyZW50TW9udGg7XHJcbiAgICAgICAgICBtb250aCA9IG1vbnRoc1tuZXh0TW9udGhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b2RheSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgdG9kYXkrKztcclxuICAgICAgZG9tLnNlbGVjdC5kYXRlLnRleHRDb250ZW50ID0gYCR7dG9kYXl9ICR7bW9udGh9ICR7Y3VycmVudFllYXJ9YDtcclxuICAgICAgZGF0ZVN0cmluZyA9IGAke2N1cnJlbnRZZWFyfS0keygnMCcgKyAoY3VycmVudE1vbnRoKzEpKS5zbGljZSgtMil9LSR7KCcwJyArIHRvZGF5KS5zbGljZSgtMil9YDtcclxuICAgICAgZXZlbnRzLnB1Ymxpc2goJ2Z1bGxEYXRlJywgZGF0ZVN0cmluZyk7XHJcbiAgICB9KVxyXG5cclxuICAgIGRhdGVTdHJpbmcgPSBgJHtjdXJyZW50WWVhcn0tJHsoJzAnICsgKGN1cnJlbnRNb250aCsxKSkuc2xpY2UoLTIpfS0keygnMCcgKyB0b2RheSkuc2xpY2UoLTIpfWA7XHJcbiAgICBcclxuICAgIGV2ZW50cy5wdWJsaXNoKCdmdWxsRGF0ZScsIGRhdGVTdHJpbmcpO1xyXG5cclxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3Rhc2tzJywgZXZlbnRzLmV2ZW50cywgKCkgPT4ge1xyXG4gICAgICBldmVudHMucHVibGlzaCgnZnVsbERhdGUnLCBkYXRlU3RyaW5nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvbS5zZWxlY3QudG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRvZGF5ID0gZGF0ZS5nZXRVVENEYXRlKCk7XHJcbiAgICAgIGN1cnJlbnRNb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcclxuICAgICAgY3VycmVudFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XHJcbiAgICAgIGRvbS5zZWxlY3QuZGF0ZS50ZXh0Q29udGVudCA9IGAke3RvZGF5fSAke21vbnRofSAke2N1cnJlbnRZZWFyfWA7XHJcbiAgICAgIGRhdGVTdHJpbmcgPSBgJHtjdXJyZW50WWVhcn0tJHsoJzAnICsgKGN1cnJlbnRNb250aCsxKSkuc2xpY2UoLTIpfS0keygnMCcgKyB0b2RheSkuc2xpY2UoLTIpfWA7XHJcbiAgICAgIGV2ZW50cy5wdWJsaXNoKCdmdWxsRGF0ZScsIGRhdGVTdHJpbmcpO1xyXG4gICAgICBkb20uc2VsZWN0LmhlYWRTZWMudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgZG9tLnNlbGVjdC5oZWFkU2VjLmFwcGVuZChkb20uc2VsZWN0LmRhdGVXcmFwcGVyKTtcclxuICAgIH0pXHJcbiAgfSlcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZURhdGVzOyIsImltcG9ydCBjcmVhdG9yIGZyb20gJy4vY3JlYXRvci5qcyc7XHJcbmltcG9ydCBldmVudHMgZnJvbSAnLi9wdWJTdWIuanMnO1xyXG5cclxuY29uc3QgZG9tID0gKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBzZWxlY3QgPSB7XHJcbiAgICBwYWdlU3RydWN0dXJlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1zdHJ1Y3R1cmUnKSxcclxuICAgIGFkZFRhc2tCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpLFxyXG4gICAgbm90aWZpY2F0aW9uQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90aWZpY2F0aW9uJyksXHJcbiAgICB0aGVtZUNoYW5nZUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZW1lJyksXHJcbiAgICBjb25maWdCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maWcnKSxcclxuICAgIGluYm94QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtYnRuJyksXHJcbiAgICB0b2RheUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5LWJ0bicpLFxyXG4gICAgdXBjb21pbmdCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGNvbWluZy1idG4nKSxcclxuICAgIHByb2plY3RzU2VjOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKSxcclxuICAgIGFkZFByb2plY3RCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpLFxyXG4gICAgdGFza3NDb250YWluZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKSxcclxuICAgIGhlYWRTZWM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkLXNlYycpLFxyXG4gICAgZGF0ZVdyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXdyYXBwZXInKSxcclxuICAgIGFycm93QmFja3dhcmQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1iYWNrd2FyZCcpLFxyXG4gICAgYXJyb3dGb3J3YXJkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctZm9yd2FyZCcpLFxyXG4gICAgZGF0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUnKSxcclxuICAgIGRldGFpbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLXByb2plY3QtdGFzaycpLFxyXG4gICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLFxyXG4gICAgZGVzY3JpcHRpb25JbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyksXHJcbiAgICBkZWFkbGluZUlucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVhZGxpbmUnKSxcclxuICAgIHByaW9yaXR5SW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLFxyXG4gICAgaXNGaW5pc2hlZElucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmluaXNoZWQnKSxcclxuICAgIG5vdGVzSW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlcycpLFxyXG4gICAgc3VuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VuJyksXHJcbiAgICBtb29uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vbicpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhcHBlbmRUYXNrcyh0aXRsZSwgcHJpb3JpdHksIHByb2plY3QpIHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG4gICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcclxuXHJcbiAgICBwYXJhLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xyXG4gICAgY2lyY2xlLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWljb24nLCAnbG93Jyk7XHJcblxyXG4gICAgc3dpdGNoKHByaW9yaXR5KSB7XHJcbiAgICAgIGNhc2UgJ21vZGVyYXRlJzpcclxuICAgICAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZCgnbW9kZXJhdGUnKVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdoaWdoJzpcclxuICAgICAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZCgnaGlnaCcpXHJcbiAgICB9XHJcblxyXG4gICAgdGFza1RpdGxlLmFwcGVuZChjaXJjbGUsIHBhcmEpO1xyXG4gICAgd3JhcHBlci5hcHBlbmQodGFza1RpdGxlLCBwcm9qZWN0VGl0bGUpO1xyXG4gICAgc2VsZWN0LnRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG5cclxuICAgIGV2ZW50cy5wdWJsaXNoKCd0YXNrV3JhcHBlcicsIHdyYXBwZXIpO1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmNyZWF0b3JCZy5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFwcGVuZFByb2plY3QodGl0bGUsIGR1ZURhdGUpIHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IGRlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgZGVhZGxpbmUudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xyXG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XHJcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xyXG4gICAgZGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZWFkbGluZScpO1xyXG5cclxuICAgIHdyYXBwZXIuYXBwZW5kKHByb2plY3RUaXRsZSwgZGVhZGxpbmUpO1xyXG4gICAgc2VsZWN0LnByb2plY3RzU2VjLmluc2VydEJlZm9yZSh3cmFwcGVyLCBzZWxlY3QuYWRkUHJvamVjdEJ0bik7XHJcbiAgICBcclxuICAgIGNyZWF0b3IuY3JlYXRvci5jcmVhdG9yQmcucmVtb3ZlKCk7XHJcblxyXG4gICAgZXZlbnRzLnB1Ymxpc2goJ2dldFdyYXBwZXInLCB3cmFwcGVyKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5Qcm9qZWN0VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGRlYWRsaW5lLCBwcmlvcml0eSwgbm90ZXMpIHtcclxuICAgIHNlbGVjdC5oZWFkU2VjLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBzZWxlY3QuZGV0YWlscy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICBzZWxlY3QuZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IGRlc2NyaXB0aW9uO1xyXG4gICAgc2VsZWN0LmRlYWRsaW5lSW5wdXQudmFsdWUgPSBkZWFkbGluZTtcclxuICAgIHNlbGVjdC5wcmlvcml0eUlucHV0LnZhbHVlID0gcHJpb3JpdHk7XHJcbiAgICBzZWxlY3Qubm90ZXNJbnB1dC50ZXh0Q29udGVudCA9IG5vdGVzO1xyXG5cclxuICAgIHNlbGVjdC50aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgc2VsZWN0LmhlYWRTZWMuYXBwZW5kKHNlbGVjdC5kZXRhaWxzKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFwcGVuZEluYm94KCkge1xyXG4gICAgc2VsZWN0LmhlYWRTZWMudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGNvbnN0IGluYm94VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgICAgaW5ib3hUaXRsZS5jbGFzc0xpc3QuYWRkKCdpbmJveC10aXRsZScpO1xyXG4gICAgICAgICAgaW5ib3hUaXRsZS50ZXh0Q29udGVudCA9ICdJbmJveCc7XHJcbiAgICBzZWxlY3QuaGVhZFNlYy5hcHBlbmQoaW5ib3hUaXRsZSlcclxuICB9XHJcblxyXG4gIHNlbGVjdC50aGVtZUNoYW5nZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNlbGVjdC5wYWdlU3RydWN0dXJlLmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcclxuICAgIHNlbGVjdC5wYWdlU3RydWN0dXJlLmNsYXNzTGlzdC50b2dnbGUoJ2xpZ2h0Jyk7XHJcblxyXG4gICAgc2VsZWN0LnN1bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIHNlbGVjdC5tb29uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gIH0pXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZWxlY3QsXHJcbiAgICBhcHBlbmRUYXNrcyxcclxuICAgIGFwcGVuZFByb2plY3QsXHJcbiAgICBvcGVuUHJvamVjdFRhc2ssXHJcbiAgICBhcHBlbmRJbmJveCxcclxuICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb207IiwiaW1wb3J0IGRvbSBmcm9tICcuL2RvbS5qcyc7XHJcbmltcG9ydCBjcmVhdG9yIGZyb20gJy4vY3JlYXRvci5qcyc7XHJcbmltcG9ydCBldmVudHMgZnJvbSAnLi9wdWJTdWIuanMnO1xyXG5cclxuY29uc3QgaGFuZGxlUHJvamVjdHMgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCB0aW1lLCBwcmlvcml0eSwgbm90ZXMsIC4uLnRhc2tzKSB7XHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9ICBkZXNjcmlwdGlvbjtcclxuICAgICAgdGhpcy5kdWVEYXRlID0gIGR1ZURhdGU7XHJcbiAgICAgIHRoaXMudGltZSA9ICB0aW1lO1xyXG4gICAgICB0aGlzLnByaW9yaXR5ID0gIHByaW9yaXR5O1xyXG4gICAgICB0aGlzLm5vdGVzID0gIG5vdGVzO1xyXG4gICAgICB0aGlzLnRhc2tzID0gIHRhc2tzO1xyXG4gICAgICB0aGlzLmlzQ29tcGxldGUgPSAgZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG4gIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3Q7XHJcblxyXG4gIGZ1bmN0aW9uIHNldFRpdGxlKCkge1xyXG4gICAgbmV3UHJvamVjdC50aXRsZSA9IGNyZWF0b3IuY3JlYXRvci5pbnB1dC52YWx1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldERlc2NyaXB0aW9uKCkge1xyXG4gICAgbmV3UHJvamVjdC5kZXNjcmlwdGlvbiA9IGNyZWF0b3IuZGVzYy50ZXh0QXJlYS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldERhdGUoKSB7XHJcbiAgICBuZXdQcm9qZWN0LmR1ZURhdGUgPSBjcmVhdG9yLmR1ZURhdGUuZGF0ZS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldFRpbWUoKSB7XHJcbiAgICBuZXdQcm9qZWN0LnRpbWUgPSBjcmVhdG9yLnRpbWUudGltZS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldE5vdGVzKCkge1xyXG4gICAgbmV3UHJvamVjdC5ub3RlcyA9IGNyZWF0b3Iubm90ZXMudGV4dEFyZWEudmFsdWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRQcmlvcml0eSgpIHtcclxuICAgIG5ld1Byb2plY3QucHJpb3JpdHkgPSBjcmVhdG9yLnByaW9yaXR5LnNlbGVjdC52YWx1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcbiAgICBpZihuZXdQcm9qZWN0LnRpdGxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZG9tLmFwcGVuZFByb2plY3QobmV3UHJvamVjdC50aXRsZSwgbmV3UHJvamVjdC5kdWVEYXRlKTtcclxuICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICAgICAgZXZlbnRzLnB1Ymxpc2goJ3Byb2plY3RzJywgbmV3UHJvamVjdCk7XHJcbiAgICAgIG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdDtcclxuICAgICAgY3JlYXRvci5yZXNldENyZWF0b3IoKTtcclxuICAgICAgcmVtb3ZlRXZlbnRzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydCgnRmlsbCBpbiB0aGUgZmllbGRzJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhbmNlbEFkZCgpIHtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5jcmVhdG9yQmcucmVtb3ZlKCk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuY2FuY2VsQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2onKVxyXG4gICAgY3JlYXRvci5yZXNldENyZWF0b3IoKTtcclxuICAgIHJlbW92ZUV2ZW50cygpO1xyXG4gICAgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWN0aXZhdGVFdmVudHMoKSB7XHJcbiAgICBjcmVhdG9yLmFwcGVuZENyZWF0b3IoKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5wcm9qZWN0LnJlbW92ZSgpO1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qJylcclxuICAgIGNyZWF0b3IuY3JlYXRvci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRUaXRsZSk7XHJcbiAgICBjcmVhdG9yLmRlc2MudGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0RGVzY3JpcHRpb24pO1xyXG4gICAgY3JlYXRvci5kdWVEYXRlLmRhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0RGF0ZSk7XHJcbiAgICBjcmVhdG9yLnRpbWUudGltZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRUaW1lKVxyXG4gICAgY3JlYXRvci5wcmlvcml0eS5zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0UHJpb3JpdHkpO1xyXG4gICAgY3JlYXRvci5ub3Rlcy50ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXROb3Rlcyk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsQWRkKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUV2ZW50cygpIHtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRUaXRsZSk7XHJcbiAgICBjcmVhdG9yLmRlc2MudGV4dEFyZWEucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0RGVzY3JpcHRpb24pO1xyXG4gICAgY3JlYXRvci5kdWVEYXRlLmRhdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0RGF0ZSk7XHJcbiAgICBjcmVhdG9yLnRpbWUudGltZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRUaW1lKVxyXG4gICAgY3JlYXRvci5wcmlvcml0eS5zZWxlY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0UHJpb3JpdHkpO1xyXG4gICAgY3JlYXRvci5ub3Rlcy50ZXh0QXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAgc2V0Tm90ZXMpO1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmNhbmNlbEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEFkZCk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuYWRkQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdCk7XHJcbiAgfVxyXG5cclxuICBkb20uc2VsZWN0LmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhY3RpdmF0ZUV2ZW50cyk7XHJcblxyXG4gIHJldHVybiB7cHJvamVjdHMsIHJlbW92ZUV2ZW50cywgUHJvamVjdCwgYWRkUHJvamVjdH1cclxufSkoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlUHJvamVjdHM7IiwiLy8gUHViU3ViIE1vZHVsZVxyXG5jb25zdCBldmVudHMgPSAoZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgIGV2ZW50cyA9IHt9O1xyXG5cclxuICBjb25zdCBzdWJzY3JpYmUgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBvYmplY3QsIGNhbGxiYWNrKSB7XHJcbiAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XHJcbiAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKHtvYmplY3Q6IG9iamVjdCwgY2FsbGJhY2s6IGNhbGxiYWNrfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB1bnN1YnNjcmliZSA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgb2JqZWN0LCBjYWxsYmFjaykge1xyXG4gIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmxlbmd0aDsgaSsrKSB7XHJcbiAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV1baV0ub2JqZWN0ID09PSBvYmplY3QpIHtcclxuICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpLCAxKTtcclxuICBicmVhaztcclxuICB9XHJcbiAgfTtcclxuICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBwdWJsaXNoID0gIGZ1bmN0aW9uIChldmVudE5hbWUsIGRhdGEpIHtcclxuICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xyXG4gIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jdGlvbihpbnN0YW5jZSkge1xyXG4gIGluc3RhbmNlLmNhbGxiYWNrKGRhdGEpO1xyXG4gIH0pO1xyXG4gIH1cclxuICB9XHJcblxyXG5yZXR1cm4ge2V2ZW50cywgc3Vic2NyaWJlLCB1bnN1YnNjcmliZSwgcHVibGlzaH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV2ZW50czsiLCJpbXBvcnQgcHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xyXG5pbXBvcnQgZG9tIGZyb20gJy4vZG9tLmpzJztcclxuaW1wb3J0IGV2ZW50cyBmcm9tICcuL3B1YlN1Yi5qcyc7XHJcbmltcG9ydCBjcmVhdG9yIGZyb20gJy4vY3JlYXRvci5qcyc7XHJcblxyXG5jb25zdCBoYW5kbGVUYXNrcyA9IChmdW5jdGlvbigpIHtcclxuICBjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgdGltZSwgcHJpb3JpdHkgPSAnTG93Jywgbm90ZXMsIHByb2plY3QgPSAnSW5ib3gnLCAuLi5jaGVja0xpc3QpIHtcclxuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gIGRlc2NyaXB0aW9uO1xyXG4gICAgICB0aGlzLmR1ZURhdGUgPSAgZHVlRGF0ZTtcclxuICAgICAgdGhpcy50aW1lID0gIHRpbWU7XHJcbiAgICAgIHRoaXMucHJpb3JpdHkgPSAgcHJpb3JpdHk7XHJcbiAgICAgIHRoaXMubm90ZXMgPSAgbm90ZXM7XHJcbiAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgIHRoaXMuY2hlY2tMaXN0ID0gY2hlY2tMaXN0O1xyXG4gICAgICB0aGlzLmlzQ29tcGxldGUgPSAgZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCB0YXNrcyA9IFtdO1xyXG4gIGxldCBuZXdUYXNrID0gbmV3IFRhc2s7XHJcblxyXG4gIGZ1bmN0aW9uIHNldFRpdGxlKCkge1xyXG4gICAgbmV3VGFzay50aXRsZSA9IGNyZWF0b3IuY3JlYXRvci5pbnB1dC52YWx1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldERlc2NyaXB0aW9uKCkge1xyXG4gICAgbmV3VGFzay5kZXNjcmlwdGlvbiA9IGNyZWF0b3IuZGVzYy50ZXh0QXJlYS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldERhdGUoKSB7XHJcbiAgICBuZXdUYXNrLmR1ZURhdGUgPSBjcmVhdG9yLmR1ZURhdGUuZGF0ZS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldFRpbWUoKSB7XHJcbiAgICBuZXdUYXNrLnRpbWUgPSBjcmVhdG9yLnRpbWUudGltZS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldE5vdGVzKCkge1xyXG4gICAgbmV3VGFzay5ub3RlcyA9IGNyZWF0b3Iubm90ZXMudGV4dEFyZWEudmFsdWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRQcmlvcml0eSgpIHtcclxuICAgIG5ld1Rhc2sucHJpb3JpdHkgPSBjcmVhdG9yLnByaW9yaXR5LnNlbGVjdC52YWx1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldFByb2plY3QoKSB7XHJcbiAgICBuZXdUYXNrLnByb2plY3QgPSBjcmVhdG9yLnByb2plY3RzLnNlbGVjdC52YWx1ZTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gYWRkVGFzaygpIHtcclxuICAgIGlmKG5ld1Rhc2sudGl0bGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xyXG4gICAgICBldmVudHMucHVibGlzaCgndGFza3MnLCB0YXNrcyk7XHJcbiAgICAgIHByb2plY3QucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGlmKHByb2plY3QudGl0bGUgPT0gbmV3VGFzay5wcm9qZWN0KSB7XHJcbiAgICAgICAgICBwcm9qZWN0LnRhc2tzLnB1c2gobmV3VGFzaylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIG5ld1Rhc2sgPSBuZXcgVGFzaztcclxuICAgICAgY3JlYXRvci5yZXNldENyZWF0b3IoKTtcclxuICAgICAgY3JlYXRvci5jcmVhdG9yLmNyZWF0b3JCZy5yZW1vdmUoKTtcclxuICAgICAgcmVtb3ZlRXZlbnRzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydCgnRmlsbCBpbiB0aGUgZmllbGRzJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhbmNlbEFkZCgpIHtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5jcmVhdG9yQmcucmVtb3ZlKCk7XHJcbiAgICBjcmVhdG9yLnJlc2V0Q3JlYXRvcigpO1xyXG4gICAgcmVtb3ZlRXZlbnRzKCk7XHJcbiAgICBuZXdUYXNrID0gbmV3IFRhc2s7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGFjdGl2YXRlRXZlbnRzKCkge1xyXG4gICAgY3JlYXRvci5hcHBlbmRDcmVhdG9yKCk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0VGl0bGUpO1xyXG4gICAgY3JlYXRvci5kZXNjLnRleHRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldERlc2NyaXB0aW9uKTtcclxuICAgIGNyZWF0b3IuZHVlRGF0ZS5kYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldERhdGUpO1xyXG4gICAgY3JlYXRvci50aW1lLnRpbWUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0VGltZSlcclxuICAgIGNyZWF0b3IucHJpb3JpdHkuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFByaW9yaXR5KTtcclxuICAgIGNyZWF0b3IucHJvamVjdHMuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFByb2plY3QpO1xyXG4gICAgY3JlYXRvci5ub3Rlcy50ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXROb3Rlcyk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsQWRkKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUV2ZW50cygpIHtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRUaXRsZSk7XHJcbiAgICBjcmVhdG9yLmRlc2MudGV4dEFyZWEucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0RGVzY3JpcHRpb24pO1xyXG4gICAgY3JlYXRvci5kdWVEYXRlLmRhdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0RGF0ZSk7XHJcbiAgICBjcmVhdG9yLnRpbWUudGltZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRUaW1lKVxyXG4gICAgY3JlYXRvci5wcmlvcml0eS5zZWxlY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0UHJpb3JpdHkpO1xyXG4gICAgY3JlYXRvci5ub3Rlcy50ZXh0QXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAgc2V0Tm90ZXMpO1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmNhbmNlbEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEFkZCk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuYWRkQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFzayk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB3cmFwcGVycyA9IFtdO1xyXG5cclxuICBldmVudHMuc3Vic2NyaWJlKCd0YXNrV3JhcHBlcicsIGV2ZW50cy5ldmVudHMsICh3cmFwcGVyKSA9PiB7XHJcbiAgICB3cmFwcGVycy5wdXNoKHdyYXBwZXIpO1xyXG4gICAgd3JhcHBlcnMuZm9yRWFjaCgod3JhcHBlcikgPT4ge1xyXG4gICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgZG9tLnNlbGVjdC50YXNrc0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgaWYoZXZlbnQudGFyZ2V0Lm91dGVyVGV4dCA9PT0gdGFzay50aXRsZSkge1xyXG4gICAgICAgICAgICBkb20ub3BlblByb2plY3RUYXNrKHRhc2sudGl0bGUsIHRhc2suZGVzY3JpcHRpb24sIHRhc2suZHVlRGF0ZSwgdGFzay5wcmlvcml0eSwgdGFzay5ub3Rlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgZG9tLnNlbGVjdC5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWN0aXZhdGVFdmVudHMpO1xyXG5cclxuICByZXR1cm57dGFza3MsIHJlbW92ZUV2ZW50cywgVGFzaywgYWRkVGFza31cclxufSkoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlVGFza3M7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaGFuZGxlVGFza3MgZnJvbSAnLi90YXNrLmpzJztcclxuaW1wb3J0IGhhbmRsZVByb2plY3RzIGZyb20gJy4vcHJvamVjdC5qcyc7XHJcbmltcG9ydCBhcHBIYW5kbGVyIGZyb20gJy4vYXBwSGFuZGxlci5qcyc7XHJcbmltcG9ydCBoYW5kbGVEYXRlcyBmcm9tICcuL2RhdGUuanMnO1xyXG5cclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=