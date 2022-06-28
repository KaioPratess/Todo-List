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
___CSS_LOADER_EXPORT___.push([module.id, "/* General */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n} \r\n\r\nbody {\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.page-structure {\r\n  display: grid;\r\n  grid-template-columns: 300px 4fr;\r\n  grid-template-areas: \r\n  \"header header\"\r\n  \"sidebar main\"\r\n  \"sidebar main\";\r\n  height: 100%;\r\n}\r\n\r\nsvg:not(.logo) {\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* Header */\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 81px;\r\n  padding: 0 30px;\r\n  grid-area: header;\r\n}\r\n\r\n.logo {\r\n  margin-left: 7px;\r\n}\r\n\r\n.header ul {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n/* Sidebar */\r\n.sidebar {\r\n  height: calc(100vh - 81px);\r\n  grid-area: sidebar;\r\n}\r\n\r\n/* Inbox */\r\n.inbox {\r\n  padding: 20px 0 30px 48px;\r\n  height: 156px;\r\n}\r\n\r\n.inbox-title, .done-title {\r\n  font-size: 3rem;\r\n  position: relative;\r\n}\r\n\r\n.page-structure.dark .inbox-title::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 10px;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\n.page-structure.light .inbox-title::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 10px;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\n.nav ul {\r\n  display: grid;\r\n  gap: 20px;\r\n}\r\n\r\n.nav ul li {\r\n  font-size: 1.125rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(1)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(2)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(3)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(1)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(2)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(3)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n\r\n.nav ul li::before {\r\n  width: 25px;\r\n  height: 25px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* Projects */\r\n.projects {\r\n  padding: 20px 0 0 48px;\r\n}\r\n\r\n.projects h2 {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.add-project {\r\n  font-size: 0.875rem;\r\n  cursor: pointer;\r\n  letter-spacing: 1px;\r\n  margin-top: 25px;\r\n}\r\n\r\n.page-structure.dark .add-project::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n  width: 15px;\r\n  height: 15px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n.page-structure.light .add-project::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n  width: 15px;\r\n  height: 15px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* Main */\r\n.main {\r\n  grid-area: main;\r\n}\r\n\r\n.head-sec {\r\n  display: grid;\r\n  align-items: center;\r\n  padding: 20px 70px;\r\n}\r\n\r\n.date {\r\n  text-align: center;\r\n  font-size: 3rem;\r\n}\r\n\r\n.date p {\r\n  font-size: 3rem;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.list-view {\r\n  padding: 30px 55px;\r\n  height: calc(100vh - 180px);\r\n  overflow: auto;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  cursor: pointer;\r\n  align-items: center;\r\n  padding: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.task-title {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  position: relative;\r\n}\r\n\r\n.checkbox {\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.checkbox + label {\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.checkbox + label::before {\r\n  content: '';\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: 3px;\r\n}\r\n\r\n.checkbox:checked + label::before {\r\n  content: 'ok';\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 4px;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.priority-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.priority-icon.low {\r\n  border: 2.5px solid yellow;\r\n}\r\n\r\n.priority-icon.moderate {\r\n  border: 2.5px solid orange;\r\n}\r\n\r\n.priority-icon.high {\r\n  border: 2.5px solid red;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* Add container */\r\n.add-creator-bg {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgba(0,0,0,.6);\r\n}\r\n\r\n.add-creator-container {\r\n  width: 810px;\r\n  height: 126px;\r\n  border-radius: 12px;\r\n  box-shadow:1px 1px 1px rgba(0, 0, 0, .4);\r\n}\r\n\r\n.creator-input {\r\n  width: 94%;\r\n  height: 34px;\r\n  justify-self: center;\r\n  margin: 20px 25px;\r\n  outline: none;\r\n  border-radius: 12px;\r\n  color: black;\r\n  padding: 0 10px;\r\n  border: none;\r\n}\r\n\r\n.creator-properties {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n}\r\n\r\n.creator-prop-input {\r\n  width: 234px;\r\n  height: 34px;\r\n  border-radius: 12px;\r\n  background-color: #fff;\r\n  margin-left: 25px;\r\n  color: black;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon {\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn {\r\n  color: black;\r\n  padding: 8px 16px;\r\n  white-space: nowrap;\r\n  border-radius: 12px;\r\n  cursor: pointer;\r\n  border: none;\r\n}\r\n\r\n.priority-select, .notes, .desc, .dateInput, .time, .projects-select {\r\n  width: 100%;\r\n  height: 34px;\r\n  border-radius: 12px;\r\n  background-color: #fff;\r\n  color: black;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.priority-select option, .projects-select option {\r\n  color: black;\r\n}\r\n\r\n.notes, .desc, .dateInput, .time {\r\n  padding: 10px;\r\n  resize: none;\r\n}\r\n\r\n/* project container */\r\n.project {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 200px;\r\n  padding: 10px;\r\n  margin: 15px 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.project-h1 {\r\n  font-size: 3rem;\r\n}\r\n\r\n.page-structure.dark .project:hover {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.page-structure.light .project:hover {\r\n  background-color: #F2BF58;\r\n}\r\n\r\n.date-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 35px 400px 35px;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  display: none;\r\n}\r\n\r\n.arrow-backward {\r\n  transform: rotate(180deg);\r\n}\r\n\r\n/* details container */\r\n.details-project-task {\r\n  display: none;\r\n}\r\n\r\n.title {\r\n  font-size: 3rem;\r\n}\r\n\r\n.details-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: 1fr;\r\n}\r\n\r\n.details-container input,\r\n.details-container textarea {\r\n  color: black;\r\n  outline: none;\r\n  border: none;\r\n  padding: 6px 8px;\r\n  resize: none;\r\n}\r\n\r\n.details-container select {\r\n  width: 185px;\r\n  padding: 5px 8px;\r\n  border: none;\r\n  outline: none;\r\n  margin-bottom: 20px;\r\n  color: black;\r\n}\r\n\r\n.details-container select option {\r\n  color: black;\r\n}\r\n\r\n.details-container input {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.details-container label {\r\n  margin-right: 8px;\r\n}\r\n\r\n.details-container div:nth-child(1) div:nth-child(2) label {\r\n  margin-right: 25px;\r\n}\r\n\r\n.detail-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.description,\r\n.deadline {\r\n  grid-column: 1;\r\n}\r\n\r\n.priority-div,\r\n.is-finished {\r\n  grid-column: 2;\r\n}\r\n\r\n.notes-div {\r\n  grid-column: 3;\r\n  display: flex;\r\n}\r\n\r\n.notes-div textarea {\r\n  height: 120px;\r\n}\r\n\r\n@media (prefers-color-scheme: light) {\r\n  * {\r\n    color: black;\r\n  }\r\n\r\n  svg {\r\n    fill: black;\r\n    stroke: black;\r\n    color: black;\r\n  }\r\n\r\n  .add-creator-container {\r\n    background-color: #FFC05A;\r\n  }\r\n\r\n  .header {\r\n    background-color: #FFC05A;\r\n  }\r\n\r\n  .sidebar {\r\n    background-color: #FFCE7E;\r\n  }\r\n\r\n  .head-sec {\r\n    background-color: #FFDA9E;\r\n  }\r\n\r\n  .main {\r\n    background-color: #FFFFFF;\r\n  }\r\n\r\n  .task:hover {\r\n    background-color: #121212;\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n  }\r\n\r\n  .creator-prop-input { \r\n    background-color: #FFCE7E;\r\n  }\r\n}\r\n\r\n.page-structure.light .header {\r\n  background-color: #FFC05A;\r\n}\r\n\r\n.page-structure.light .creator-prop-input {\r\n  background-color: #FFCE7E;\r\n}\r\n\r\n.page-structure.light *:not(.btn) {\r\n  fill: black;\r\n  stroke: black;\r\n  color: black;\r\n}\r\n\r\n.page-structure.light .sidebar {\r\n  background-color: #FFCE7E;\r\n}\r\n\r\n.page-structure.light .add-creator-container {\r\n  background-color: #F2BF58;\r\n}\r\n\r\n.page-structure.light .head-sec {\r\n  background-color: #FFDA9E;\r\n}\r\n\r\n.page-structure.light .main {\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n.page-structure.light .task:hover {\r\n  background-color: #FFDA9E;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  * {\r\n    color: white;\r\n  }\r\n\r\n  .add-creator-container {\r\n    background-color: #121212;\r\n  }\r\n\r\n  svg {\r\n    fill: white;\r\n    color: white;\r\n    stroke: white;\r\n  }\r\n\r\n  .header {\r\n    background-color: #0B0909;\r\n  }\r\n\r\n  .sidebar {\r\n    background-color: #0E0E0E;\r\n  }\r\n\r\n  .head-sec {\r\n    background-color: #121212;\r\n  }\r\n\r\n  .main {\r\n    background-color: #1A1A1A;\r\n  }\r\n\r\n  .task:hover {\r\n    background-color: #121212;\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n  }\r\n}\r\n\r\n.page-structure.dark .header {\r\n  background-color: #0B0909;\r\n}\r\n\r\n.page-structure.dark .creator-prop-input {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.page-structure.dark .sidebar {\r\n  background-color: #0E0E0E;\r\n}\r\n\r\n.page-structure.dark .add-creator-container {\r\n  background-color: #121212;\r\n}\r\n\r\n\r\n.page-structure.dark .head-sec {\r\n  background-color: #121212;\r\n}\r\n\r\n.page-structure.dark .main {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.page-structure.dark .task:hover {\r\n  background-color: #121212;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n.page-structure.dark * {\r\n  fill: white;\r\n}\r\n\r\n.sun, \r\n.moon {\r\n  display: none;\r\n}\r\n\r\n.sun.active,\r\n.moon.active {\r\n  display: block;\r\n}\r\n\r\n.checklist {\r\n  position: relative;\r\n  display: none;\r\n  padding: 60px 60px;\r\n  height: calc(100vh - 330px);\r\n  overflow: auto;\r\n}\r\n\r\n.checklist-btn {\r\n  color: black;\r\n  height: 50px;\r\n  width: 50px;\r\n  font-size: 3rem;\r\n  border-radius: 50%;\r\n  box-shadow: 1px 1px 2px #fff;\r\n  border: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  position: absolute;\r\n  right: 30px;\r\n  top: 20px;\r\n}\r\n\r\n.line-bg {\r\n  width: 80%;\r\n  position: absolute;\r\n}\r\n\r\n.line {\r\n  width: 100%;\r\n  height: 1px;\r\n  background-color: black;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* General */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n} \r\n\r\nbody {\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.page-structure {\r\n  display: grid;\r\n  grid-template-columns: 300px 4fr;\r\n  grid-template-areas: \r\n  \"header header\"\r\n  \"sidebar main\"\r\n  \"sidebar main\";\r\n  height: 100%;\r\n}\r\n\r\nsvg:not(.logo) {\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* Header */\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 81px;\r\n  padding: 0 30px;\r\n  grid-area: header;\r\n}\r\n\r\n.logo {\r\n  margin-left: 7px;\r\n}\r\n\r\n.header ul {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n/* Sidebar */\r\n.sidebar {\r\n  height: calc(100vh - 81px);\r\n  grid-area: sidebar;\r\n}\r\n\r\n/* Inbox */\r\n.inbox {\r\n  padding: 20px 0 30px 48px;\r\n  height: 156px;\r\n}\r\n\r\n.inbox-title, .done-title {\r\n  font-size: 3rem;\r\n  position: relative;\r\n}\r\n\r\n.page-structure.dark .inbox-title::before {\r\n  content: url(\"./img/inbox-white.svg\");\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 10px;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\n.page-structure.light .inbox-title::before {\r\n  content: url(\"./img/inbox-black.svg\");\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 10px;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\n.nav ul {\r\n  display: grid;\r\n  gap: 20px;\r\n}\r\n\r\n.nav ul li {\r\n  font-size: 1.125rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(1)::before {\r\n  content: url(\"./img/inbox-black.svg\");\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(2)::before {\r\n  content: url(\"./img/calendar-black.svg\");\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(3)::before {\r\n  content: url(\"./img/calendar-black.svg\");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(1)::before {\r\n  content: url(\"./img/inbox-white.svg\");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(2)::before {\r\n  content: url(\"./img/calendar-white.svg\");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(3)::before {\r\n  content: url(\"./img/calendar-white.svg\");\r\n}\r\n\r\n.nav ul li::before {\r\n  width: 25px;\r\n  height: 25px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* Projects */\r\n.projects {\r\n  padding: 20px 0 0 48px;\r\n}\r\n\r\n.projects h2 {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.add-project {\r\n  font-size: 0.875rem;\r\n  cursor: pointer;\r\n  letter-spacing: 1px;\r\n  margin-top: 25px;\r\n}\r\n\r\n.page-structure.dark .add-project::before {\r\n  content: url('./img/plus-white.svg');\r\n  width: 15px;\r\n  height: 15px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n.page-structure.light .add-project::before {\r\n  content: url('./img/plus-black.svg');\r\n  width: 15px;\r\n  height: 15px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* Main */\r\n.main {\r\n  grid-area: main;\r\n}\r\n\r\n.head-sec {\r\n  display: grid;\r\n  align-items: center;\r\n  padding: 20px 70px;\r\n}\r\n\r\n.date {\r\n  text-align: center;\r\n  font-size: 3rem;\r\n}\r\n\r\n.date p {\r\n  font-size: 3rem;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.list-view {\r\n  padding: 30px 55px;\r\n  height: calc(100vh - 180px);\r\n  overflow: auto;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  cursor: pointer;\r\n  align-items: center;\r\n  padding: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.task-title {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  position: relative;\r\n}\r\n\r\n.checkbox {\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.checkbox + label {\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.checkbox + label::before {\r\n  content: '';\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: 3px;\r\n}\r\n\r\n.checkbox:checked + label::before {\r\n  content: 'ok';\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 4px;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.priority-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.priority-icon.low {\r\n  border: 2.5px solid yellow;\r\n}\r\n\r\n.priority-icon.moderate {\r\n  border: 2.5px solid orange;\r\n}\r\n\r\n.priority-icon.high {\r\n  border: 2.5px solid red;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* Add container */\r\n.add-creator-bg {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgba(0,0,0,.6);\r\n}\r\n\r\n.add-creator-container {\r\n  width: 810px;\r\n  height: 126px;\r\n  border-radius: 12px;\r\n  box-shadow:1px 1px 1px rgba(0, 0, 0, .4);\r\n}\r\n\r\n.creator-input {\r\n  width: 94%;\r\n  height: 34px;\r\n  justify-self: center;\r\n  margin: 20px 25px;\r\n  outline: none;\r\n  border-radius: 12px;\r\n  color: black;\r\n  padding: 0 10px;\r\n  border: none;\r\n}\r\n\r\n.creator-properties {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n}\r\n\r\n.creator-prop-input {\r\n  width: 234px;\r\n  height: 34px;\r\n  border-radius: 12px;\r\n  background-color: #fff;\r\n  margin-left: 25px;\r\n  color: black;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon {\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn {\r\n  color: black;\r\n  padding: 8px 16px;\r\n  white-space: nowrap;\r\n  border-radius: 12px;\r\n  cursor: pointer;\r\n  border: none;\r\n}\r\n\r\n.priority-select, .notes, .desc, .dateInput, .time, .projects-select {\r\n  width: 100%;\r\n  height: 34px;\r\n  border-radius: 12px;\r\n  background-color: #fff;\r\n  color: black;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.priority-select option, .projects-select option {\r\n  color: black;\r\n}\r\n\r\n.notes, .desc, .dateInput, .time {\r\n  padding: 10px;\r\n  resize: none;\r\n}\r\n\r\n/* project container */\r\n.project {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 200px;\r\n  padding: 10px;\r\n  margin: 15px 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.project-h1 {\r\n  font-size: 3rem;\r\n}\r\n\r\n.page-structure.dark .project:hover {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.page-structure.light .project:hover {\r\n  background-color: #F2BF58;\r\n}\r\n\r\n.date-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 35px 400px 35px;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  display: none;\r\n}\r\n\r\n.arrow-backward {\r\n  transform: rotate(180deg);\r\n}\r\n\r\n/* details container */\r\n.details-project-task {\r\n  display: none;\r\n}\r\n\r\n.title {\r\n  font-size: 3rem;\r\n}\r\n\r\n.details-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: 1fr;\r\n}\r\n\r\n.details-container input,\r\n.details-container textarea {\r\n  color: black;\r\n  outline: none;\r\n  border: none;\r\n  padding: 6px 8px;\r\n  resize: none;\r\n}\r\n\r\n.details-container select {\r\n  width: 185px;\r\n  padding: 5px 8px;\r\n  border: none;\r\n  outline: none;\r\n  margin-bottom: 20px;\r\n  color: black;\r\n}\r\n\r\n.details-container select option {\r\n  color: black;\r\n}\r\n\r\n.details-container input {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.details-container label {\r\n  margin-right: 8px;\r\n}\r\n\r\n.details-container div:nth-child(1) div:nth-child(2) label {\r\n  margin-right: 25px;\r\n}\r\n\r\n.detail-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.description,\r\n.deadline {\r\n  grid-column: 1;\r\n}\r\n\r\n.priority-div,\r\n.is-finished {\r\n  grid-column: 2;\r\n}\r\n\r\n.notes-div {\r\n  grid-column: 3;\r\n  display: flex;\r\n}\r\n\r\n.notes-div textarea {\r\n  height: 120px;\r\n}\r\n\r\n@media (prefers-color-scheme: light) {\r\n  * {\r\n    color: black;\r\n  }\r\n\r\n  svg {\r\n    fill: black;\r\n    stroke: black;\r\n    color: black;\r\n  }\r\n\r\n  .add-creator-container {\r\n    background-color: #FFC05A;\r\n  }\r\n\r\n  .header {\r\n    background-color: #FFC05A;\r\n  }\r\n\r\n  .sidebar {\r\n    background-color: #FFCE7E;\r\n  }\r\n\r\n  .head-sec {\r\n    background-color: #FFDA9E;\r\n  }\r\n\r\n  .main {\r\n    background-color: #FFFFFF;\r\n  }\r\n\r\n  .task:hover {\r\n    background-color: #121212;\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n  }\r\n\r\n  .creator-prop-input { \r\n    background-color: #FFCE7E;\r\n  }\r\n}\r\n\r\n.page-structure.light .header {\r\n  background-color: #FFC05A;\r\n}\r\n\r\n.page-structure.light .creator-prop-input {\r\n  background-color: #FFCE7E;\r\n}\r\n\r\n.page-structure.light *:not(.btn) {\r\n  fill: black;\r\n  stroke: black;\r\n  color: black;\r\n}\r\n\r\n.page-structure.light .sidebar {\r\n  background-color: #FFCE7E;\r\n}\r\n\r\n.page-structure.light .add-creator-container {\r\n  background-color: #F2BF58;\r\n}\r\n\r\n.page-structure.light .head-sec {\r\n  background-color: #FFDA9E;\r\n}\r\n\r\n.page-structure.light .main {\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n.page-structure.light .task:hover {\r\n  background-color: #FFDA9E;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  * {\r\n    color: white;\r\n  }\r\n\r\n  .add-creator-container {\r\n    background-color: #121212;\r\n  }\r\n\r\n  svg {\r\n    fill: white;\r\n    color: white;\r\n    stroke: white;\r\n  }\r\n\r\n  .header {\r\n    background-color: #0B0909;\r\n  }\r\n\r\n  .sidebar {\r\n    background-color: #0E0E0E;\r\n  }\r\n\r\n  .head-sec {\r\n    background-color: #121212;\r\n  }\r\n\r\n  .main {\r\n    background-color: #1A1A1A;\r\n  }\r\n\r\n  .task:hover {\r\n    background-color: #121212;\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n  }\r\n}\r\n\r\n.page-structure.dark .header {\r\n  background-color: #0B0909;\r\n}\r\n\r\n.page-structure.dark .creator-prop-input {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.page-structure.dark .sidebar {\r\n  background-color: #0E0E0E;\r\n}\r\n\r\n.page-structure.dark .add-creator-container {\r\n  background-color: #121212;\r\n}\r\n\r\n\r\n.page-structure.dark .head-sec {\r\n  background-color: #121212;\r\n}\r\n\r\n.page-structure.dark .main {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.page-structure.dark .task:hover {\r\n  background-color: #121212;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n.page-structure.dark * {\r\n  fill: white;\r\n}\r\n\r\n.sun, \r\n.moon {\r\n  display: none;\r\n}\r\n\r\n.sun.active,\r\n.moon.active {\r\n  display: block;\r\n}\r\n\r\n.checklist {\r\n  position: relative;\r\n  display: none;\r\n  padding: 60px 60px;\r\n  height: calc(100vh - 330px);\r\n  overflow: auto;\r\n}\r\n\r\n.checklist-btn {\r\n  color: black;\r\n  height: 50px;\r\n  width: 50px;\r\n  font-size: 3rem;\r\n  border-radius: 50%;\r\n  box-shadow: 1px 1px 2px #fff;\r\n  border: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  position: absolute;\r\n  right: 30px;\r\n  top: 20px;\r\n}\r\n\r\n.line-bg {\r\n  width: 80%;\r\n  position: absolute;\r\n}\r\n\r\n.line {\r\n  width: 100%;\r\n  height: 1px;\r\n  background-color: black;\r\n}"],"sourceRoot":""}]);
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
        return task.dueDate === date && task.isComplete === false
      }
  
      function filterDate() {
        _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.tasksContainer.style.display = 'block';
        _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.checklistDiv.style.display = 'none';
        const date = _task_js__WEBPACK_IMPORTED_MODULE_0__["default"].tasks.filter(isDueDate);
        _creator_js__WEBPACK_IMPORTED_MODULE_5__["default"].creator.creatorBg.remove();
        if(date.length > 0) {
          _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.tasksContainer.textContent = '';
          for(let tasks of date) {
            _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].appendTasks(tasks.title, tasks.priority, tasks.project, _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.tasksContainer);
          } 
        } else {
            _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.tasksContainer.textContent = "You don't have any task for today."
        }
      }

      filterDate()
    })

  // filter array to find inbox tasks/ or tasks without projects
  function isInbox(task) {
    return task.project === 'Inbox' && task.isComplete === false
  }

  function filterInbox() {
    const inbox = _task_js__WEBPACK_IMPORTED_MODULE_0__["default"].tasks.filter(isInbox);
       _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.tasksContainer.style.display = 'block';
            _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.checklistDiv.style.display = 'none';
    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].appendInbox();
    if(inbox.length > 0) {
      _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.tasksContainer.textContent = '';
      for(let tasks of inbox) {
        _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].appendTasks(tasks.title, tasks.priority, tasks.project, _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.tasksContainer);
      } 
    } else {
        _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.tasksContainer.textContent = 'Your inbox is clean.'
    }
  }

  _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.inboxBtn.addEventListener('click', filterInbox);

  function isDone(task) {
    return task.isComplete === true;
  }

  function filterDoneTasks() {
    const done = _task_js__WEBPACK_IMPORTED_MODULE_0__["default"].tasks.filter(isDone);
    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].appendDone();
    if(done.length > 0) {
      _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.tasksContainer.textContent = '';
      for(let tasks of done) {
        _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].appendTasks(tasks.title, tasks.priority, tasks.project, _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.tasksContainer);
      } 
    } else {
        _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.tasksContainer.textContent = "You don't have any task finished";
    }
  }

  _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].select.doneBtn.addEventListener('click', filterDoneTasks)
  

  return {filterInbox}
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
  } else {
      creator.notes.src = _img_notes_white_svg__WEBPACK_IMPORTED_MODULE_0__;
      creator.desc.src = _img_description_white_svg__WEBPACK_IMPORTED_MODULE_1__;
      creator.project.src = _img_project_white_svg__WEBPACK_IMPORTED_MODULE_2__;
      creator.calendar.src = _img_calendar_white_svg__WEBPACK_IMPORTED_MODULE_3__;
      creator.priority.src = _img_flag_white_svg__WEBPACK_IMPORTED_MODULE_4__;
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

  creator.creatorProp.append(creator.creatorPropInput, creator.desc, creator.calendar, creator.priority,  creator.notes, creator.project, creator.cancelBtn, creator.addBtn);
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
        _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.dateWrapper.style.display = 'grid';
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
    doneBtn: document.querySelector('.done-btn'),
    projectsSec: document.querySelector('.projects'),
    projectList: document.querySelector('.project-list'),
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
    moon: document.querySelector('.moon'),
    bin: document.querySelector('.bin'),
    checklistBtn: document.querySelector('.checklist-btn'),
    checklistDiv: document.querySelector('.checklist'),
    creatorProp: document.querySelector('.creator-properties'),
  }

  function appendTasks(title, priority, project, append) {
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
    append.appendChild(wrapper);

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
    select.projectList.append(wrapper);
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

  function appendDone() {
    dom.select.tasksContainer.style.display = 'block';
    dom.select.checklistDiv.style.display = 'none';
    select.headSec.textContent = '';
    const doneTitle = document.createElement('h1');
          doneTitle.classList.add('done-title');
          doneTitle.textContent = 'Done';
    select.headSec.append(doneTitle);
  }

  select.themeChangeBtn.addEventListener('click', () => {
    select.pageStructure.classList.toggle('dark');
    select.pageStructure.classList.toggle('light');
    saveToLocalStorage();

    select.sun.classList.toggle('active');
    select.moon.classList.toggle('active');
  });

  function saveToLocalStorage() {
    localStorage.setItem('theme', select.pageStructure.classList[1]);
  }

  function retrieveFromLocalStorage() {
    const theme = localStorage.getItem('theme');
    if(theme !== null) {
      if(select.pageStructure.classList[1] === 'dark') {
        select.pageStructure.classList.replace('dark', theme);
      } else if(select.pageStructure.classList[1] === 'light') {
          select.pageStructure.classList.replace('light', theme);
      }
  }
  }

  window.addEventListener('load', () => {
    retrieveFromLocalStorage();
  })

  _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('openTask', _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].events, () => {
    select.descriptionInput.addEventListener('change', _task_js__WEBPACK_IMPORTED_MODULE_3__["default"].editDescription);
    select.deadlineInput.addEventListener('change', _task_js__WEBPACK_IMPORTED_MODULE_3__["default"].editDeadline);
    select.priorityInput.addEventListener('change', _task_js__WEBPACK_IMPORTED_MODULE_3__["default"].editPriority);
    select.notesInput.addEventListener('change', _task_js__WEBPACK_IMPORTED_MODULE_3__["default"].editNotes);
    select.isFinishedInput.addEventListener('change', _task_js__WEBPACK_IMPORTED_MODULE_3__["default"].checkFinish);
    select.bin.addEventListener('click', _task_js__WEBPACK_IMPORTED_MODULE_3__["default"].deleteTask);
  });

  _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('openProject', _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].events, () => {
    select.descriptionInput.addEventListener('change', _project_js__WEBPACK_IMPORTED_MODULE_2__["default"].editDescription);
    select.deadlineInput.addEventListener('change', _project_js__WEBPACK_IMPORTED_MODULE_2__["default"].editDeadline);
    select.priorityInput.addEventListener('change', _project_js__WEBPACK_IMPORTED_MODULE_2__["default"].editPriority);
    select.notesInput.addEventListener('change', _project_js__WEBPACK_IMPORTED_MODULE_2__["default"].editNotes);
    select.isFinishedInput.addEventListener('change', _project_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkFinish);
    select.bin.addEventListener('click', _project_js__WEBPACK_IMPORTED_MODULE_2__["default"].deleteProject);
  });

  function createLine(container) {
    const div = document.createElement('div');
          div.classList.add('line-bg');
    const line = document.createElement('div');
          line.classList.add('line');

    div.append(line);
    container.append(div);
  }

  return {
    select,
    appendTasks,
    appendProject,
    openProjectTask,
    appendInbox,
    appendDone,
    createLine
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
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date.js */ "./src/date.js");





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
      projects.push(newProject);
      _pubSub_js__WEBPACK_IMPORTED_MODULE_2__["default"].publish('projects', newProject);
      newProject = new Project;
      _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"].resetCreator();
      displayProject();
      removeEvents();
      saveToLocalStorage();
    } else {
      alert('Fill in the fields')
    }
  }

  function saveToLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  function retrieveFromLocalStorage() {
    const projectArray = JSON.parse(localStorage.getItem('projects'));
    if(projectArray !== null) {
    projectArray.forEach((p) => {
      projects.push(p);
      _pubSub_js__WEBPACK_IMPORTED_MODULE_2__["default"].publish('projects', p)
    })}
  }

  window.addEventListener('load', () => {
    retrieveFromLocalStorage();
    displayProject();
  })

  function displayProject() {
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.projectList.textContent = '';
  projects.forEach((project) => {
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendProject(project.title, project.dueDate);
  })
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
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.tasksContainer.style.display = 'block';
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.checklistDiv.style.display = 'none';
    projectWrappers.push(wrapper);

    projectWrappers.forEach((wrapper) => {
      wrapper.addEventListener('click', (event) => {
          projects.forEach((project) => {
          if(event.target.outerText == project.title) {
            _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].openProjectTask(project.title, project.description, project.dueDate, project.priority, project.notes, project.isComplete);
            _pubSub_js__WEBPACK_IMPORTED_MODULE_2__["default"].publish('openProject', '');
            project.tasks.forEach((task) => {
              _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].appendTasks(task.title, task.priority, task.project, _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.tasksContainer);
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
        saveToLocalStorage()
        console.log(projects)
      }
    })
  }


  function editDeadline() {
    projects.forEach((project) => {
      if(project.title === _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.title.textContent) {
        project.dueDate = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.deadlineInput.value;
        saveToLocalStorage()
        console.log(projects)
      }
    })
  }

  function editPriority() {
    projects.forEach((project) => {
      if(project.title === _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.title.textContent) {
        project.priority = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.priorityInput.value;
        saveToLocalStorage()
        console.log(projects)
      }
    })
  }

  function editNotes() {
    projects.forEach((project) => {
      if(project.title === _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.title.textContent) {
        project.notes = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.notesInput.value;
        saveToLocalStorage()
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
        saveToLocalStorage()
        console.log(projects)
      }
    })
  }

  function deleteProject() {
    projects.forEach((project) => {
      if(project.title === _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.title.textContent) {
        const index = projects.indexOf(project);
        projects.splice(index, 1);
      }
      const projectList = document.querySelectorAll('.project');
      projectList.forEach((p) => {
        if(p.firstChild.innerText === _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].select.title.textContent) {
          p.remove();
        }
        saveToLocalStorage()
        window.location.reload();
      })
    })
  }

  return {projects, removeEvents, Project, addProject, editDescription, editDeadline, editPriority, editNotes, checkFinish, deleteProject, saveToLocalStorage}
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
/* harmony import */ var _appHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appHandler.js */ "./src/appHandler.js");






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
      _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].projects.forEach((p) => {
        if(p.title == newTask.project) {
          p.tasks.push(newTask);
          _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveToLocalStorage();
          console.log(_project_js__WEBPACK_IMPORTED_MODULE_0__["default"].projects)
        }
      })
      saveToLocalStorage();
      _appHandler_js__WEBPACK_IMPORTED_MODULE_4__["default"].filterInbox();
      newTask = new Task;
      _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].resetCreator();
      _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].creator.creatorBg.remove();
      removeEvents();
    } else {
      alert('Fill in the fields')
    }
  }

  function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function retrieveFromLocalStorage() {
    const tasksArray = JSON.parse(localStorage.getItem('tasks'));
    if(tasksArray !== null) {
    tasksArray.forEach((task) => {
      tasks.push(task);
    })
  }
  }

  window.addEventListener('load', () => {
    retrieveFromLocalStorage();
    _appHandler_js__WEBPACK_IMPORTED_MODULE_4__["default"].filterInbox();
  })

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
            _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.tasksContainer.style.display = 'none';
            _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.checklistDiv.style.display = 'block';
            filterCheckList();
            _pubSub_js__WEBPACK_IMPORTED_MODULE_2__["default"].publish('openTask', '');
          }
        })
      })
    })
  });

  class Todo {
    constructor(title, priority) {
      this.title = title;
      this.priority = priority;
    }
  }

  let todo = new Todo;
  const p = document.createElement('p');

  function addTodo() {
    todo.priority = _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].priority.select.value;
    todo.title = _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].creator.input.value;
    tasks.forEach((task) => {
      if(_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.title.textContent === task.title) {
        task.checkList.push(todo);
      }
    });
    saveToLocalStorage();
    _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].appendTasks(todo.title, todo.priority, '', _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.checklistDiv);
    p.remove()
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].creator.cancelBtn.removeEventListener('click', cancelAdd);
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].creator.addBtn.removeEventListener('click', addTodo);
    todo = new Todo;
  }

  function filterCheckList() {
    tasks.forEach((task) => {
      if(_dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.title.textContent === task.title) {
        if(task.checkList.length > 0) {
          task.checkList.forEach((todo) => {
            _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].appendTasks(todo.title, todo.priority, '', _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.checklistDiv);
          });
          const todos = document.querySelectorAll('.checklist .task');
          todos.forEach((t)=> {
            t.addEventListener('click', () => {
              _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].createLine(t);
            })
          })
        } else {
            p.textContent = "You don't have any todo for this task"
            _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.checklistDiv.append(p)
        }
      }
    })
  }

  function addToChecklist() {
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].resetCreator();
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].appendCreator();
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].creator.project.remove();
    
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].creator.cancelBtn.addEventListener('click', cancelAdd);
    _creator_js__WEBPACK_IMPORTED_MODULE_3__["default"].creator.addBtn.addEventListener('click', addTodo);
  }

  _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.checklistBtn.addEventListener('click', addToChecklist);

  function editDescription() {
    tasks.forEach((task) => {
      if(task.title === _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.title.textContent) {
        task.description = _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.descriptionInput.value;
        saveToLocalStorage();
        console.log(tasks)
      }
    })
  }

  function editDeadline() {
    tasks.forEach((task) => {
      if(task.title === _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.title.textContent) {
        task.dueDate = _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.deadlineInput.value;
        saveToLocalStorage();
        console.log(tasks)
      }
    })
  }

  function editPriority() {
    tasks.forEach((task) => {
      if(task.title === _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.title.textContent) {
        task.priority = _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.priorityInput.value;
        saveToLocalStorage();
        console.log(tasks)
      }
    })
  }

  function editNotes() {
    tasks.forEach((task) => {
      if(task.title === _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.title.textContent) {
        task.notes = _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.notesInput.value;
        saveToLocalStorage();
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
        saveToLocalStorage();
        console.log(tasks)
      }
    })
  }

  function deleteTask() {
    tasks.forEach((task) => {
      if(task.title === _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.title.textContent) {
        const index = tasks.indexOf(task);
        tasks.splice(index, 1);
        saveToLocalStorage();
        window.location.reload();
      }
    })
  }

  _dom_js__WEBPACK_IMPORTED_MODULE_1__["default"].select.addTaskBtn.addEventListener('click', activateEvents);

  return{tasks, removeEvents, Task, addTask,  editDescription, editDeadline, editPriority, editNotes, checkFinish, deleteTask}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9B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RUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ007QUFDRDtBQUNMO0FBQ3BDO0FBQ0E7QUFDcUI7QUFDckI7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHViU3ViLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9pbmJveC13aGl0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9pbmJveC1ibGFjay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9jYWxlbmRhci1ibGFjay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltZy9jYWxlbmRhci13aGl0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9wbHVzLXdoaXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vaW1nL3BsdXMtYmxhY2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHZW5lcmFsICovXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufSBcXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggNGZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXHJcXG4gIFxcXCJzaWRlYmFyIG1haW5cXFwiXFxyXFxuICBcXFwic2lkZWJhciBtYWluXFxcIjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuc3ZnOm5vdCgubG9nbykge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEhlYWRlciAqL1xcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDgxcHg7XFxyXFxuICBwYWRkaW5nOiAwIDMwcHg7XFxyXFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTaWRlYmFyICovXFxyXFxuLnNpZGViYXIge1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODFweCk7XFxyXFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxyXFxufVxcclxcblxcclxcbi8qIEluYm94ICovXFxyXFxuLmluYm94IHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMCAzMHB4IDQ4cHg7XFxyXFxuICBoZWlnaHQ6IDE1NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5ib3gtdGl0bGUsIC5kb25lLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLmluYm94LXRpdGxlOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAuaW5ib3gtdGl0bGU6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHVsIGxpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAubmF2IHVsIGxpOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAubmF2IHVsIGxpOm50aC1jaGlsZCgyKTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAubmF2IHVsIGxpOm50aC1jaGlsZCgzKTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5uYXYgdWwgbGk6bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLm5hdiB1bCBsaTpudGgtY2hpbGQoMik6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAubmF2IHVsIGxpOm50aC1jaGlsZCgzKTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5uYXYgdWwgbGk6OmJlZm9yZSB7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIFByb2plY3RzICovXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMCAwIDQ4cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyBoMiB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdCB7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5hZGQtcHJvamVjdDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAuYWRkLXByb2plY3Q6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWluICovXFxyXFxuLm1haW4ge1xcclxcbiAgZ3JpZC1hcmVhOiBtYWluO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZC1zZWMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDcwcHg7XFxyXFxufVxcclxcblxcclxcbi5kYXRlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUgcCB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5saXN0LXZpZXcge1xcclxcbiAgcGFkZGluZzogMzBweCA1NXB4O1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTgwcHgpO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94ICsgbGFiZWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCArIGxhYmVsOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94OmNoZWNrZWQgKyBsYWJlbDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICdvayc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxyXFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaWNvbiB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWljb24ubG93IHtcXHJcXG4gIGJvcmRlcjogMi41cHggc29saWQgeWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaWNvbi5tb2RlcmF0ZSB7XFxyXFxuICBib3JkZXI6IDIuNXB4IHNvbGlkIG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWljb24uaGlnaCB7XFxyXFxuICBib3JkZXI6IDIuNXB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQWRkIGNvbnRhaW5lciAqL1xcclxcbi5hZGQtY3JlYXRvci1iZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNik7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY3JlYXRvci1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDgxMHB4O1xcclxcbiAgaGVpZ2h0OiAxMjZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBib3gtc2hhZG93OjFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRvci1pbnB1dCB7XFxyXFxuICB3aWR0aDogOTQlO1xcclxcbiAgaGVpZ2h0OiAzNHB4O1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDIwcHggMjVweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRvci1wcm9wZXJ0aWVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0b3ItcHJvcC1pbnB1dCB7XFxyXFxuICB3aWR0aDogMjM0cHg7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1zZWxlY3QsIC5ub3RlcywgLmRlc2MsIC5kYXRlSW5wdXQsIC50aW1lLCAucHJvamVjdHMtc2VsZWN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktc2VsZWN0IG9wdGlvbiwgLnByb2plY3RzLXNlbGVjdCBvcHRpb24ge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZXMsIC5kZXNjLCAuZGF0ZUlucHV0LCAudGltZSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwcm9qZWN0IGNvbnRhaW5lciAqL1xcclxcbi5wcm9qZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAxNXB4IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLnByb2plY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5wcm9qZWN0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkJGNTg7XFxyXFxufVxcclxcblxcclxcbi5kYXRlLXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzVweCA0MDBweCAzNXB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hcnJvdy1iYWNrd2FyZCB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBkZXRhaWxzIGNvbnRhaW5lciAqL1xcclxcbi5kZXRhaWxzLXByb2plY3QtdGFzayB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIGlucHV0LFxcclxcbi5kZXRhaWxzLWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogNnB4IDhweDtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIHNlbGVjdCB7XFxyXFxuICB3aWR0aDogMTg1cHg7XFxyXFxuICBwYWRkaW5nOiA1cHggOHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLWNvbnRhaW5lciBzZWxlY3Qgb3B0aW9uIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIGlucHV0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLWNvbnRhaW5lciBsYWJlbCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIGRpdjpudGgtY2hpbGQoMSkgZGl2Om50aC1jaGlsZCgyKSBsYWJlbCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWwtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLFxcclxcbi5kZWFkbGluZSB7XFxyXFxuICBncmlkLWNvbHVtbjogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWRpdixcXHJcXG4uaXMtZmluaXNoZWQge1xcclxcbiAgZ3JpZC1jb2x1bW46IDI7XFxyXFxufVxcclxcblxcclxcbi5ub3Rlcy1kaXYge1xcclxcbiAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZXMtZGl2IHRleHRhcmVhIHtcXHJcXG4gIGhlaWdodDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KSB7XFxyXFxuICAqIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcblxcclxcbiAgc3ZnIHtcXHJcXG4gICAgZmlsbDogYmxhY2s7XFxyXFxuICAgIHN0cm9rZTogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hZGQtY3JlYXRvci1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMDVBO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMwNUE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2lkZWJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkNFN0U7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZC1zZWMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEQTlFO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2s6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcclxcbiAgfVxcclxcblxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjODg4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzU1NTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jcmVhdG9yLXByb3AtaW5wdXQgeyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0U3RTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzA1QTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5jcmVhdG9yLXByb3AtaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0U3RTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0ICo6bm90KC5idG4pIHtcXHJcXG4gIGZpbGw6IGJsYWNrO1xcclxcbiAgc3Ryb2tlOiBibGFjaztcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5zaWRlYmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkNFN0U7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAuYWRkLWNyZWF0b3ItY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkJGNTg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAuaGVhZC1zZWMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREE5RTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5tYWluIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAudGFzazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEQTlFO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogIzg4ODtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxyXFxuICAqIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZC1jcmVhdG9yLWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzdmcge1xcclxcbiAgICBmaWxsOiB3aGl0ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBzdHJva2U6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQjA5MDk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2lkZWJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTBFMEU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZC1zZWMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhc2s6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcclxcbiAgfVxcclxcblxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjODg4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzU1NTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEIwOTA5O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAuY3JlYXRvci1wcm9wLWlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5zaWRlYmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRTBFMEU7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5hZGQtY3JlYXRvci1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLmhlYWQtc2VjIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5tYWluIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC50YXNrOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyazo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogIzg4ODtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcms6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM1NTU7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrICoge1xcclxcbiAgZmlsbDogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5zdW4sIFxcclxcbi5tb29uIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zdW4uYWN0aXZlLFxcclxcbi5tb29uLmFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbGlzdCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcGFkZGluZzogNjBweCA2MHB4O1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzMwcHgpO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jaGVja2xpc3QtYnRuIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggI2ZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMzBweDtcXHJcXG4gIHRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmUtYmcge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFlBQVk7QUFDWjtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDOzs7Z0JBR2M7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7OztBQUdBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQSxZQUFZO0FBQ1o7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCOztBQUVBLFVBQVU7QUFDVjtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFl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biAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn0gXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDRmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxyXFxuICBcXFwic2lkZWJhciBtYWluXFxcIlxcclxcbiAgXFxcInNpZGViYXIgbWFpblxcXCI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbnN2Zzpub3QoLmxvZ28pIHtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBIZWFkZXIgKi9cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA4MXB4O1xcclxcbiAgcGFkZGluZzogMCAzMHB4O1xcclxcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2lkZWJhciAqL1xcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDgxcHgpO1xcclxcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbmJveCAqL1xcclxcbi5pbmJveCB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDAgMzBweCA0OHB4O1xcclxcbiAgaGVpZ2h0OiAxNTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmluYm94LXRpdGxlLCAuZG9uZS10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5pbmJveC10aXRsZTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi9pbWcvaW5ib3gtd2hpdGUuc3ZnXFxcIik7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLmluYm94LXRpdGxlOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuL2ltZy9pbmJveC1ibGFjay5zdmdcXFwiKTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYgdWwge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB1bCBsaSB7XFxyXFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLm5hdiB1bCBsaTpudGgtY2hpbGQoMSk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vaW1nL2luYm94LWJsYWNrLnN2Z1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLm5hdiB1bCBsaTpudGgtY2hpbGQoMik6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vaW1nL2NhbGVuZGFyLWJsYWNrLnN2Z1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLm5hdiB1bCBsaTpudGgtY2hpbGQoMyk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vaW1nL2NhbGVuZGFyLWJsYWNrLnN2Z1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAubmF2IHVsIGxpOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi9pbWcvaW5ib3gtd2hpdGUuc3ZnXFxcIik7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5uYXYgdWwgbGk6bnRoLWNoaWxkKDIpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuL2ltZy9jYWxlbmRhci13aGl0ZS5zdmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLm5hdiB1bCBsaTpudGgtY2hpbGQoMyk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vaW1nL2NhbGVuZGFyLXdoaXRlLnN2Z1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHVsIGxpOjpiZWZvcmUge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQcm9qZWN0cyAqL1xcclxcbi5wcm9qZWN0cyB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDAgMCA0OHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMgaDIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3Qge1xcclxcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAuYWRkLXByb2plY3Q6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoJy4vaW1nL3BsdXMtd2hpdGUuc3ZnJyk7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAuYWRkLXByb2plY3Q6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoJy4vaW1nL3BsdXMtYmxhY2suc3ZnJyk7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gKi9cXHJcXG4ubWFpbiB7XFxyXFxuICBncmlkLWFyZWE6IG1haW47XFxyXFxufVxcclxcblxcclxcbi5oZWFkLXNlYyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHggNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZSBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtdmlldyB7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDU1cHg7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxODBweCk7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3ggKyBsYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94ICsgbGFiZWw6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3g6Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJ29rJztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDRweDtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1pY29uIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaWNvbi5sb3cge1xcclxcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1pY29uLm1vZGVyYXRlIHtcXHJcXG4gIGJvcmRlcjogMi41cHggc29saWQgb3JhbmdlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaWNvbi5oaWdoIHtcXHJcXG4gIGJvcmRlcjogMi41cHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBZGQgY29udGFpbmVyICovXFxyXFxuLmFkZC1jcmVhdG9yLWJnIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC42KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jcmVhdG9yLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogODEwcHg7XFxyXFxuICBoZWlnaHQ6IDEyNnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGJveC1zaGFkb3c6MXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAuNCk7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdG9yLWlucHV0IHtcXHJcXG4gIHdpZHRoOiA5NCU7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMjBweCAyNXB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdG9yLXByb3BlcnRpZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRvci1wcm9wLWlucHV0IHtcXHJcXG4gIHdpZHRoOiAyMzRweDtcXHJcXG4gIGhlaWdodDogMzRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LXNlbGVjdCwgLm5vdGVzLCAuZGVzYywgLmRhdGVJbnB1dCwgLnRpbWUsIC5wcm9qZWN0cy1zZWxlY3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1zZWxlY3Qgb3B0aW9uLCAucHJvamVjdHMtc2VsZWN0IG9wdGlvbiB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5ub3RlcywgLmRlc2MsIC5kYXRlSW5wdXQsIC50aW1lIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIHByb2plY3QgY29udGFpbmVyICovXFxyXFxuLnByb2plY3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW46IDE1cHggMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaDEge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAucHJvamVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLnByb2plY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyQkY1ODtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IDQwMHB4IDM1cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFycm93LWJhY2t3YXJkIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi8qIGRldGFpbHMgY29udGFpbmVyICovXFxyXFxuLmRldGFpbHMtcHJvamVjdC10YXNrIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgaW5wdXQsXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIHRleHRhcmVhIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA2cHggOHB4O1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgc2VsZWN0IHtcXHJcXG4gIHdpZHRoOiAxODVweDtcXHJcXG4gIHBhZGRpbmc6IDVweCA4cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIHNlbGVjdCBvcHRpb24ge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgaW5wdXQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIGxhYmVsIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgZGl2Om50aC1jaGlsZCgxKSBkaXY6bnRoLWNoaWxkKDIpIGxhYmVsIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24sXFxyXFxuLmRlYWRsaW5lIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktZGl2LFxcclxcbi5pcy1maW5pc2hlZCB7XFxyXFxuICBncmlkLWNvbHVtbjogMjtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGVzLWRpdiB7XFxyXFxuICBncmlkLWNvbHVtbjogMztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5ub3Rlcy1kaXYgdGV4dGFyZWEge1xcclxcbiAgaGVpZ2h0OiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpIHtcXHJcXG4gICoge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzdmcge1xcclxcbiAgICBmaWxsOiBibGFjaztcXHJcXG4gICAgc3Ryb2tlOiBibGFjaztcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZC1jcmVhdG9yLWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMwNUE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzA1QTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaWRlYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0U3RTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkLXNlYyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRBOUU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM4ODg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNyZWF0b3ItcHJvcC1pbnB1dCB7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDRTdFO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMDVBO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLmNyZWF0b3ItcHJvcC1pbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDRTdFO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgKjpub3QoLmJ0bikge1xcclxcbiAgZmlsbDogYmxhY2s7XFxyXFxuICBzdHJva2U6IGJsYWNrO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLnNpZGViYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0U3RTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5hZGQtY3JlYXRvci1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyQkY1ODtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5oZWFkLXNlYyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEQTlFO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLm1haW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC50YXNrOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkRBOUU7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjODg4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM1NTU7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXHJcXG4gICoge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkLWNyZWF0b3ItY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHN2ZyB7XFxyXFxuICAgIGZpbGw6IHdoaXRlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHN0cm9rZTogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBCMDkwOTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaWRlYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBFMEUwRTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkLXNlYyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM4ODg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwQjA5MDk7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5jcmVhdG9yLXByb3AtaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLnNpZGViYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBFMEUwRTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLmFkZC1jcmVhdG9yLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAuaGVhZC1zZWMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLm1haW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLnRhc2s6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcms6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjODg4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyazo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgKiB7XFxyXFxuICBmaWxsOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1biwgXFxyXFxuLm1vb24ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bi5hY3RpdmUsXFxyXFxuLm1vb24uYWN0aXZlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tsaXN0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA2MHB4IDYwcHg7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMzBweCk7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbGlzdC1idG4ge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAjZmZmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAzMHB4O1xcclxcbiAgdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGluZS1iZyB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgdGFzayBmcm9tICcuL3Rhc2suanMnO1xyXG5pbXBvcnQgcHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xyXG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vcHViU3ViLmpzJztcclxuaW1wb3J0IGRvbSBmcm9tICcuL2RvbS5qcyc7XHJcbmltcG9ydCBkYXRlIGZyb20gJy4vZGF0ZS5qcyc7XHJcbmltcG9ydCBjcmVhdG9yIGZyb20gJy4vY3JlYXRvci5qcyc7XHJcblxyXG5jb25zdCBhcHBIYW5kbGVyID0gKGZ1bmN0aW9uKCkge1xyXG4gIC8vIGZpbHRlciBhcnJheSBieSBkYXRlXHJcbiAgICBldmVudHMuc3Vic2NyaWJlKCdmdWxsRGF0ZScsIGV2ZW50cy5ldmVudHMsIChkYXRlKSA9PiB7XHJcbiAgICAgIGZ1bmN0aW9uIGlzRHVlRGF0ZSh0YXNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2suZHVlRGF0ZSA9PT0gZGF0ZSAmJiB0YXNrLmlzQ29tcGxldGUgPT09IGZhbHNlXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgZnVuY3Rpb24gZmlsdGVyRGF0ZSgpIHtcclxuICAgICAgICBkb20uc2VsZWN0LnRhc2tzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGRvbS5zZWxlY3QuY2hlY2tsaXN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRhc2sudGFza3MuZmlsdGVyKGlzRHVlRGF0ZSk7XHJcbiAgICAgICAgY3JlYXRvci5jcmVhdG9yLmNyZWF0b3JCZy5yZW1vdmUoKTtcclxuICAgICAgICBpZihkYXRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGRvbS5zZWxlY3QudGFza3NDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgIGZvcihsZXQgdGFza3Mgb2YgZGF0ZSkge1xyXG4gICAgICAgICAgICBkb20uYXBwZW5kVGFza3ModGFza3MudGl0bGUsIHRhc2tzLnByaW9yaXR5LCB0YXNrcy5wcm9qZWN0LCBkb20uc2VsZWN0LnRhc2tzQ29udGFpbmVyKTtcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9tLnNlbGVjdC50YXNrc0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiWW91IGRvbid0IGhhdmUgYW55IHRhc2sgZm9yIHRvZGF5LlwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmaWx0ZXJEYXRlKClcclxuICAgIH0pXHJcblxyXG4gIC8vIGZpbHRlciBhcnJheSB0byBmaW5kIGluYm94IHRhc2tzLyBvciB0YXNrcyB3aXRob3V0IHByb2plY3RzXHJcbiAgZnVuY3Rpb24gaXNJbmJveCh0YXNrKSB7XHJcbiAgICByZXR1cm4gdGFzay5wcm9qZWN0ID09PSAnSW5ib3gnICYmIHRhc2suaXNDb21wbGV0ZSA9PT0gZmFsc2VcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbHRlckluYm94KCkge1xyXG4gICAgY29uc3QgaW5ib3ggPSB0YXNrLnRhc2tzLmZpbHRlcihpc0luYm94KTtcclxuICAgICAgIGRvbS5zZWxlY3QudGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGRvbS5zZWxlY3QuY2hlY2tsaXN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBkb20uYXBwZW5kSW5ib3goKTtcclxuICAgIGlmKGluYm94Lmxlbmd0aCA+IDApIHtcclxuICAgICAgZG9tLnNlbGVjdC50YXNrc0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICBmb3IobGV0IHRhc2tzIG9mIGluYm94KSB7XHJcbiAgICAgICAgZG9tLmFwcGVuZFRhc2tzKHRhc2tzLnRpdGxlLCB0YXNrcy5wcmlvcml0eSwgdGFza3MucHJvamVjdCwgZG9tLnNlbGVjdC50YXNrc0NvbnRhaW5lcik7XHJcbiAgICAgIH0gXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvbS5zZWxlY3QudGFza3NDb250YWluZXIudGV4dENvbnRlbnQgPSAnWW91ciBpbmJveCBpcyBjbGVhbi4nXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb20uc2VsZWN0LmluYm94QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmlsdGVySW5ib3gpO1xyXG5cclxuICBmdW5jdGlvbiBpc0RvbmUodGFzaykge1xyXG4gICAgcmV0dXJuIHRhc2suaXNDb21wbGV0ZSA9PT0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbHRlckRvbmVUYXNrcygpIHtcclxuICAgIGNvbnN0IGRvbmUgPSB0YXNrLnRhc2tzLmZpbHRlcihpc0RvbmUpO1xyXG4gICAgZG9tLmFwcGVuZERvbmUoKTtcclxuICAgIGlmKGRvbmUubGVuZ3RoID4gMCkge1xyXG4gICAgICBkb20uc2VsZWN0LnRhc2tzQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIGZvcihsZXQgdGFza3Mgb2YgZG9uZSkge1xyXG4gICAgICAgIGRvbS5hcHBlbmRUYXNrcyh0YXNrcy50aXRsZSwgdGFza3MucHJpb3JpdHksIHRhc2tzLnByb2plY3QsIGRvbS5zZWxlY3QudGFza3NDb250YWluZXIpO1xyXG4gICAgICB9IFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb20uc2VsZWN0LnRhc2tzQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJZb3UgZG9uJ3QgaGF2ZSBhbnkgdGFzayBmaW5pc2hlZFwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9tLnNlbGVjdC5kb25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmlsdGVyRG9uZVRhc2tzKVxyXG4gIFxyXG5cclxuICByZXR1cm4ge2ZpbHRlckluYm94fVxyXG59KSgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBIYW5kbGVyOyIsImltcG9ydCBub3Rlc1doaXRlIGZyb20gJy4vaW1nL25vdGVzLXdoaXRlLnN2Zyc7XHJcbmltcG9ydCBkZXNjV2hpdGUgZnJvbSAnLi9pbWcvZGVzY3JpcHRpb24td2hpdGUuc3ZnJztcclxuaW1wb3J0IHByb2plY3RXaGl0ZSBmcm9tICcuL2ltZy9wcm9qZWN0LXdoaXRlLnN2Zyc7XHJcbmltcG9ydCBjYWxlbmRhcldoaXRlIGZyb20gJy4vaW1nL2NhbGVuZGFyLXdoaXRlLnN2Zyc7XHJcbmltcG9ydCBmbGFnV2hpdGUgZnJvbSAnLi9pbWcvZmxhZy13aGl0ZS5zdmcnO1xyXG5pbXBvcnQgY2hlY2tsaXN0V2hpdGUgZnJvbSAnLi9pbWcvY2hlY2tsaXN0LXdoaXRlLnN2Zyc7XHJcbmltcG9ydCBub3Rlc0JsYWNrIGZyb20gJy4vaW1nL25vdGVzLWJsYWNrLnN2Zyc7XHJcbmltcG9ydCBkZXNjQmxhY2sgZnJvbSAnLi9pbWcvZGVzY3JpcHRpb24tYmxhY2suc3ZnJztcclxuaW1wb3J0IHByb2plY3RCbGFjayBmcm9tICcuL2ltZy9wcm9qZWN0LWJsYWNrLnN2Zyc7XHJcbmltcG9ydCBjYWxlbmRhckJsYWNrIGZyb20gJy4vaW1nL2NhbGVuZGFyMi1ibGFjay5zdmcnO1xyXG5pbXBvcnQgZmxhZ0JsYWNrIGZyb20gJy4vaW1nL2ZsYWctYmxhY2suc3ZnJztcclxuaW1wb3J0IGNoZWNrbGlzdEJsYWNrIGZyb20gJy4vaW1nL2NoZWNrbGlzdC1ibGFjay5zdmcnO1xyXG5pbXBvcnQgZG9tIGZyb20gJy4vZG9tLmpzJztcclxuaW1wb3J0IGV2ZW50cyBmcm9tJy4vcHViU3ViLmpzJztcclxuXHJcbmNvbnN0IGNyZWF0b3IgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG5jb25zdCBjcmVhdG9yID0ge1xyXG4gIGNyZWF0b3JCZzogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgY3JlYXRvckNvbnRhaW5lcjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgaW5wdXQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JyksXHJcbiAgY3JlYXRvclByb3A6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gIGNyZWF0b3JQcm9wSW5wdXQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gIGNhbmNlbEJ0bjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcbiAgYWRkQnRuOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuICBub3RlczogbmV3IEltYWdlKCksXHJcbiAgZGVzYzogbmV3IEltYWdlKCksXHJcbiAgcHJvamVjdDogbmV3IEltYWdlKCksXHJcbiAgY2FsZW5kYXI6IG5ldyBJbWFnZSgpLFxyXG4gIHByaW9yaXR5OiBuZXcgSW1hZ2UoKSxcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kQ3JlYXRvciAoKSB7XHJcbiAgY3JlYXRvci5jcmVhdG9yQmcuY2xhc3NMaXN0LmFkZCgnYWRkLWNyZWF0b3ItYmcnKVxyXG5cclxuICBjcmVhdG9yLmNyZWF0b3JDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkLWNyZWF0b3ItY29udGFpbmVyJyk7XHJcblxyXG4gIGNyZWF0b3IuaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdjcmVhdG9yJyk7XHJcbiAgY3JlYXRvci5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY3JlYXRvcicpO1xyXG4gIGNyZWF0b3IuaW5wdXQuY2xhc3NMaXN0LmFkZCgnY3JlYXRvci1pbnB1dCcpO1xyXG5cclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wLmNsYXNzTGlzdC5hZGQoJ2NyZWF0b3ItcHJvcGVydGllcycpO1xyXG5cclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wSW5wdXQuY2xhc3NMaXN0LmFkZCgnY3JlYXRvci1wcm9wLWlucHV0Jyk7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gIGlmKGRvbS5zZWxlY3QucGFnZVN0cnVjdHVyZS5jbGFzc0xpc3QuY29udGFpbnMoJ2xpZ2h0JykpIHtcclxuICAgIGNyZWF0b3Iubm90ZXMuc3JjID0gbm90ZXNCbGFjaztcclxuICAgIGNyZWF0b3IuZGVzYy5zcmMgPSBkZXNjQmxhY2s7XHJcbiAgICBjcmVhdG9yLnByb2plY3Quc3JjID0gcHJvamVjdEJsYWNrO1xyXG4gICAgY3JlYXRvci5jYWxlbmRhci5zcmMgPSBjYWxlbmRhckJsYWNrO1xyXG4gICAgY3JlYXRvci5wcmlvcml0eS5zcmMgPSBmbGFnQmxhY2s7XHJcbiAgfSBlbHNlIHtcclxuICAgICAgY3JlYXRvci5ub3Rlcy5zcmMgPSBub3Rlc1doaXRlO1xyXG4gICAgICBjcmVhdG9yLmRlc2Muc3JjID0gZGVzY1doaXRlO1xyXG4gICAgICBjcmVhdG9yLnByb2plY3Quc3JjID0gcHJvamVjdFdoaXRlO1xyXG4gICAgICBjcmVhdG9yLmNhbGVuZGFyLnNyYyA9IGNhbGVuZGFyV2hpdGU7XHJcbiAgICAgIGNyZWF0b3IucHJpb3JpdHkuc3JjID0gZmxhZ1doaXRlO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRvci5jYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gIGNyZWF0b3IuY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgY3JlYXRvci5jYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgY3JlYXRvci5jYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsJyk7XHJcblxyXG4gIGNyZWF0b3IuYWRkQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICBjcmVhdG9yLmFkZEJ0bi50ZXh0Q29udGVudCA9ICdTYXZlJztcclxuICBjcmVhdG9yLmFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICBjcmVhdG9yLmFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQnKTtcclxuICBcclxuICBjcmVhdG9yLm5vdGVzLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuICBjcmVhdG9yLm5vdGVzLnNldEF0dHJpYnV0ZSgnYWx0JywgJ25vdGVzJyk7XHJcblxyXG4gIGNyZWF0b3IuZGVzYy5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XHJcbiAgY3JlYXRvci5kZXNjLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2Rlc2MnKTtcclxuXHJcbiAgY3JlYXRvci5wcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuICBjcmVhdG9yLnByb2plY3Quc2V0QXR0cmlidXRlKCdhbHQnLCAncHJvamVjdCcpO1xyXG5cclxuICBjcmVhdG9yLmNhbGVuZGFyLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuICBjcmVhdG9yLmNhbGVuZGFyLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2NhbGVuZGFyJyk7XHJcblxyXG4gIGNyZWF0b3IucHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG4gIGNyZWF0b3IucHJpb3JpdHkuc2V0QXR0cmlidXRlKCdhbHQnLCAncHJpb3JpdHknKTtcclxuXHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcC5hcHBlbmQoY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LCBjcmVhdG9yLmRlc2MsIGNyZWF0b3IuY2FsZW5kYXIsIGNyZWF0b3IucHJpb3JpdHksICBjcmVhdG9yLm5vdGVzLCBjcmVhdG9yLnByb2plY3QsIGNyZWF0b3IuY2FuY2VsQnRuLCBjcmVhdG9yLmFkZEJ0bik7XHJcbiAgY3JlYXRvci5jcmVhdG9yQ29udGFpbmVyLmFwcGVuZChjcmVhdG9yLmlucHV0LCBjcmVhdG9yLmNyZWF0b3JQcm9wKTtcclxuICBjcmVhdG9yLmNyZWF0b3JCZy5hcHBlbmQoY3JlYXRvci5jcmVhdG9yQ29udGFpbmVyKTtcclxuICBkb20uc2VsZWN0LnBhZ2VTdHJ1Y3R1cmUuYXBwZW5kKGNyZWF0b3IuY3JlYXRvckJnKTtcclxufVxyXG5cclxuY29uc3QgcHJpb3JpdHkgPSB7XHJcbiAgc2VsZWN0OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSxcclxuICBvcHQwOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSxcclxuICBvcHQxOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSxcclxuICBvcHQyOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSxcclxuICBvcHQzOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSxcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kUHJpb3JpdHkoKSB7XHJcbiAgcHJpb3JpdHkuc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LXNlbGVjdCcpO1xyXG4gIHByaW9yaXR5Lm9wdDAuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdwcmlvcml0eScpO1xyXG4gIHByaW9yaXR5Lm9wdDAuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xyXG4gIHByaW9yaXR5Lm9wdDAudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xyXG4gIHByaW9yaXR5Lm9wdDEuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcclxuICBwcmlvcml0eS5vcHQxLnRleHRDb250ZW50ID0gJ0xvdyc7XHJcbiAgcHJpb3JpdHkub3B0Mi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21vZGVyYXRlJyk7XHJcbiAgcHJpb3JpdHkub3B0Mi50ZXh0Q29udGVudCA9ICdNb2RlcmF0ZSc7XHJcbiAgcHJpb3JpdHkub3B0My5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcclxuICBwcmlvcml0eS5vcHQzLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xyXG5cclxuICBwcmlvcml0eS5zZWxlY3QuYXBwZW5kKHByaW9yaXR5Lm9wdDEsIHByaW9yaXR5Lm9wdDIsIHByaW9yaXR5Lm9wdDMsIHByaW9yaXR5Lm9wdDApO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC5hcHBlbmQocHJpb3JpdHkuc2VsZWN0KVxyXG59XHJcblxyXG5jb25zdCBwcm9qZWN0cyA9IHtcclxuICBzZWxlY3Q6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpLFxyXG4gIG9wdDA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpLFxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBlbmRQcm9qZWN0cygpIHtcclxuICBwcm9qZWN0cy5zZWxlY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtc2VsZWN0Jyk7XHJcbiAgcHJvamVjdHMub3B0MC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2luYm94Jyk7XHJcbiAgcHJvamVjdHMub3B0MC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcbiAgcHJvamVjdHMub3B0MC50ZXh0Q29udGVudCA9ICdJbmJveCc7XHJcblxyXG4gIHByb2plY3RzLnNlbGVjdC5hcHBlbmQocHJvamVjdHMub3B0MCk7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LmFwcGVuZChwcm9qZWN0cy5zZWxlY3QpXHJcbn1cclxuXHJcbmV2ZW50cy5zdWJzY3JpYmUoJ3Byb2plY3RzJywgZXZlbnRzLmV2ZW50cywgKHByb2plY3QpID0+IHtcclxuICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHByb2plY3QudGl0bGUpO1xyXG4gICAgICAgIG9wdC50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XHJcbiAgcHJvamVjdHMuc2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XHJcbn0pXHJcblxyXG5jb25zdCBub3RlcyA9IHtcclxuICB0ZXh0QXJlYTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBlbmROb3RlcygpIHtcclxuICBub3Rlcy50ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCdub3RlcycpO1xyXG4gIG5vdGVzLnRleHRBcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTm90ZXMuLi4nKTtcclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wSW5wdXQudGV4dENvbnRlbnQgPSAnJztcclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wSW5wdXQuYXBwZW5kKG5vdGVzLnRleHRBcmVhKTtcclxufVxyXG5cclxuY29uc3QgZGVzYyA9IHtcclxuICB0ZXh0QXJlYTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBlbmREZXNjKCkge1xyXG4gIGRlc2MudGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xyXG4gIGRlc2MudGV4dEFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbi4uLiAobWF4IDc1Y2gpJyk7XHJcbiAgZGVzYy50ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICc3NScpO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC5hcHBlbmQoZGVzYy50ZXh0QXJlYSk7XHJcbn1cclxuXHJcbmNvbnN0IGR1ZURhdGUgPSB7XHJcbiAgZGF0ZTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBlbmREdWVEYXRlKCkge1xyXG4gIGR1ZURhdGUuZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gIGR1ZURhdGUuZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUnKTtcclxuICBkdWVEYXRlLmRhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUnKTtcclxuICBkdWVEYXRlLmRhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZUlucHV0Jyk7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LmFwcGVuZChkdWVEYXRlLmRhdGUpO1xyXG59XHJcblxyXG5jb25zdCB0aW1lID0ge1xyXG4gIHRpbWU6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kVGltZSgpIHtcclxuICB0aW1lLnRpbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RpbWUnKTtcclxuICB0aW1lLnRpbWUuc2V0QXR0cmlidXRlKCdpZCcsICd0aW1lJyk7XHJcbiAgdGltZS50aW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aW1lJyk7XHJcbiAgdGltZS50aW1lLmNsYXNzTGlzdC5hZGQoJ3RpbWUnKTtcclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wSW5wdXQudGV4dENvbnRlbnQgPSAnJztcclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wSW5wdXQuYXBwZW5kKHRpbWUudGltZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Q3JlYXRvcigpIHtcclxuICBjcmVhdG9yLmlucHV0LnZhbHVlID0gJyc7XHJcbiAgZGVzYy50ZXh0QXJlYS52YWx1ZSA9ICcnO1xyXG4gIG5vdGVzLnRleHRBcmVhLnZhbHVlID0gJyc7XHJcbiAgZHVlRGF0ZS5kYXRlLnZhbHVlID0gJyc7XHJcbiAgdGltZS50aW1lLnZhbHVlID0gJyc7XHJcbiAgcHJpb3JpdHkuc2VsZWN0LnNlbGVjdGVkSW5kZXggPSBudWxsO1xyXG4gIHByb2plY3RzLnNlbGVjdC5zZWxlY3RlZEluZGV4ID0gbnVsbDtcclxufVxyXG5cclxuY3JlYXRvci5wcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFwcGVuZFByaW9yaXR5KTtcclxuY3JlYXRvci5ub3Rlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFwcGVuZE5vdGVzKTtcclxuY3JlYXRvci5kZXNjLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwZW5kRGVzYyk7XHJcbmNyZWF0b3IuY2FsZW5kYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBlbmREdWVEYXRlKTtcclxuY3JlYXRvci5wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwZW5kUHJvamVjdHMpO1xyXG5cclxucmV0dXJuIHtcclxuICBjcmVhdG9yLFxyXG4gIHByaW9yaXR5LFxyXG4gIGRlc2MsXHJcbiAgbm90ZXMsXHJcbiAgZHVlRGF0ZSxcclxuICB0aW1lLFxyXG4gIHJlc2V0Q3JlYXRvcixcclxuICBhcHBlbmRDcmVhdG9yLCBcclxuICBwcm9qZWN0c1xyXG59XHJcbn0pKClcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdG9yOyIsImltcG9ydCBkb20gZnJvbSAnLi9kb20uanMnO1xyXG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vcHViU3ViLmpzJztcclxuXHJcbmNvbnN0IGhhbmRsZURhdGVzID0gKGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IG1vbnRocyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgdG9kYXkgPSBkYXRlLmdldFVUQ0RhdGUoKTtcclxuICAgIGxldCBjdXJyZW50TW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XHJcbiAgICBsZXQgY3VycmVudFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XHJcbiAgICBsZXQgbW9udGggPSBtb250aHNbY3VycmVudE1vbnRoXTtcclxuICAgIGxldCBkYXRlU3RyaW5nO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZURheXMobW9udGgpIHtcclxuICAgICAgbGV0IG1heERheXM7XHJcblxyXG4gICAgICBpZiAobW9udGggPT09ICdGZWJydWFyeScpIHtcclxuICAgICAgICBtYXhEYXlzID0gMjg7XHJcbiAgICAgIH0gZWxzZSBpZihtb250aCA9PT0gJ0FwcmlsJyB8fCBtb250aCA9PT0gJ0p1bmUnIHx8IG1vbnRoID09PSAnU2VwdGVtYmVyJyB8fCBtb250aCA9PT0gJ05vdmVtYmVyJykge1xyXG4gICAgICAgIG1heERheXMgPSAzMFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1heERheXMgPSAzMVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHJldHVybiBtYXhEYXlzXHJcbiAgICB9XHJcblxyXG4gICAgZG9tLnNlbGVjdC5kYXRlLnRleHRDb250ZW50ID0gYCR7dG9kYXl9ICR7bW9udGh9ICR7Y3VycmVudFllYXJ9YDtcclxuICBcclxuICAgIGRvbS5zZWxlY3QuYXJyb3dCYWNrd2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYodG9kYXkgPCAyKSB7XHJcbiAgICAgICAgaWYoY3VycmVudE1vbnRoID09PSAwKSB7XHJcbiAgICAgICAgICAtLWN1cnJlbnRZZWFyO1xyXG4gICAgICAgICAgY3VycmVudE1vbnRoID0gMTE7XHJcbiAgICAgICAgICBtb250aCA9IG1vbnRoc1tjdXJyZW50TW9udGhdO1xyXG4gICAgICAgICAgY29uc3QgbWF4RGF5cyA9IGNhbGN1bGF0ZURheXMobW9udGgpO1xyXG4gICAgICAgICAgdG9kYXkgPSBtYXhEYXlzICsgMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcHJldmlvdXNNb250aCA9IC0tY3VycmVudE1vbnRoO1xyXG4gICAgICAgICAgICBtb250aCA9IG1vbnRoc1twcmV2aW91c01vbnRoXVxyXG4gICAgICAgICAgICBjb25zdCBtYXhEYXlzID0gY2FsY3VsYXRlRGF5cyhtb250aCk7XHJcbiAgICAgICAgICAgIHRvZGF5ID0gbWF4RGF5cyArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRvZGF5LS07XHJcbiAgICAgIGRvbS5zZWxlY3QuZGF0ZS50ZXh0Q29udGVudCA9IGAke3RvZGF5fSAke21vbnRofSAke2N1cnJlbnRZZWFyfWA7XHJcbiAgICAgIGRhdGVTdHJpbmcgPSBgJHtjdXJyZW50WWVhcn0tJHsoJzAnICsgKGN1cnJlbnRNb250aCsxKSkuc2xpY2UoLTIpfS0keygnMCcgKyB0b2RheSkuc2xpY2UoLTIpfWA7XHJcbiAgICAgIGV2ZW50cy5wdWJsaXNoKCdmdWxsRGF0ZScsIGRhdGVTdHJpbmcpO1xyXG4gICAgfSlcclxuXHJcbiAgICBkb20uc2VsZWN0LmFycm93Rm9yd2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgbWF4RGF5cyA9IGNhbGN1bGF0ZURheXMobW9udGgpO1xyXG4gICAgICBpZih0b2RheSA9PT0gbWF4RGF5cykge1xyXG4gICAgICAgIGlmKGN1cnJlbnRNb250aCA9PT0gMTEpIHtcclxuICAgICAgICAgICsrY3VycmVudFllYXI7XHJcbiAgICAgICAgICBjdXJyZW50TW9udGggPSAwO1xyXG4gICAgICAgICAgbW9udGggPSBtb250aHNbY3VycmVudE1vbnRoXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IG5leHRNb250aCA9ICsrY3VycmVudE1vbnRoO1xyXG4gICAgICAgICAgbW9udGggPSBtb250aHNbbmV4dE1vbnRoXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9kYXkgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRvZGF5Kys7XHJcbiAgICAgIGRvbS5zZWxlY3QuZGF0ZS50ZXh0Q29udGVudCA9IGAke3RvZGF5fSAke21vbnRofSAke2N1cnJlbnRZZWFyfWA7XHJcbiAgICAgIGRhdGVTdHJpbmcgPSBgJHtjdXJyZW50WWVhcn0tJHsoJzAnICsgKGN1cnJlbnRNb250aCsxKSkuc2xpY2UoLTIpfS0keygnMCcgKyB0b2RheSkuc2xpY2UoLTIpfWA7XHJcbiAgICAgIGV2ZW50cy5wdWJsaXNoKCdmdWxsRGF0ZScsIGRhdGVTdHJpbmcpO1xyXG4gICAgfSlcclxuXHJcbiAgICBkYXRlU3RyaW5nID0gYCR7Y3VycmVudFllYXJ9LSR7KCcwJyArIChjdXJyZW50TW9udGgrMSkpLnNsaWNlKC0yKX0tJHsoJzAnICsgdG9kYXkpLnNsaWNlKC0yKX1gO1xyXG4gICAgXHJcbiAgICBldmVudHMucHVibGlzaCgnZnVsbERhdGUnLCBkYXRlU3RyaW5nKTtcclxuXHJcbiAgICBldmVudHMuc3Vic2NyaWJlKCd0YXNrcycsIGV2ZW50cy5ldmVudHMsICgpID0+IHtcclxuICAgICAgZXZlbnRzLnB1Ymxpc2goJ2Z1bGxEYXRlJywgZGF0ZVN0cmluZyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb20uc2VsZWN0LnRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHRvZGF5ID0gZGF0ZS5nZXRVVENEYXRlKCk7XHJcbiAgICAgICAgY3VycmVudE1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xyXG4gICAgICAgIGN1cnJlbnRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xyXG4gICAgICAgIGRvbS5zZWxlY3QuZGF0ZS50ZXh0Q29udGVudCA9IGAke3RvZGF5fSAke21vbnRofSAke2N1cnJlbnRZZWFyfWA7XHJcbiAgICAgICAgZGF0ZVN0cmluZyA9IGAke2N1cnJlbnRZZWFyfS0keygnMCcgKyAoY3VycmVudE1vbnRoKzEpKS5zbGljZSgtMil9LSR7KCcwJyArIHRvZGF5KS5zbGljZSgtMil9YDtcclxuICAgICAgICBldmVudHMucHVibGlzaCgnZnVsbERhdGUnLCBkYXRlU3RyaW5nKTtcclxuICAgICAgICBkb20uc2VsZWN0LmhlYWRTZWMudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBkb20uc2VsZWN0LmRhdGVXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICAgICAgZG9tLnNlbGVjdC5oZWFkU2VjLmFwcGVuZChkb20uc2VsZWN0LmRhdGVXcmFwcGVyKTtcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVEYXRlczsiLCJpbXBvcnQgY3JlYXRvciBmcm9tICcuL2NyZWF0b3IuanMnO1xyXG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vcHViU3ViLmpzJztcclxuaW1wb3J0IHByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcclxuaW1wb3J0IHRhc2sgZnJvbSAnLi90YXNrLmpzJztcclxuXHJcbmNvbnN0IGRvbSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3Qgc2VsZWN0ID0ge1xyXG4gICAgcGFnZVN0cnVjdHVyZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2Utc3RydWN0dXJlJyksXHJcbiAgICBhZGRUYXNrQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKSxcclxuICAgIG5vdGlmaWNhdGlvbkJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGlmaWNhdGlvbicpLFxyXG4gICAgdGhlbWVDaGFuZ2VCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZScpLFxyXG4gICAgY29uZmlnQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlnJyksXHJcbiAgICBpbmJveEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LWJ0bicpLFxyXG4gICAgdG9kYXlCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheS1idG4nKSxcclxuICAgIGRvbmVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb25lLWJ0bicpLFxyXG4gICAgcHJvamVjdHNTZWM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpLFxyXG4gICAgcHJvamVjdExpc3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QnKSxcclxuICAgIGFkZFByb2plY3RCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpLFxyXG4gICAgdGFza3NDb250YWluZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKSxcclxuICAgIGhlYWRTZWM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkLXNlYycpLFxyXG4gICAgZGF0ZVdyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXdyYXBwZXInKSxcclxuICAgIGFycm93QmFja3dhcmQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1iYWNrd2FyZCcpLFxyXG4gICAgYXJyb3dGb3J3YXJkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctZm9yd2FyZCcpLFxyXG4gICAgZGF0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUnKSxcclxuICAgIGRldGFpbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLXByb2plY3QtdGFzaycpLFxyXG4gICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLFxyXG4gICAgZGVzY3JpcHRpb25JbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyksXHJcbiAgICBkZWFkbGluZUlucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVhZGxpbmUnKSxcclxuICAgIHByaW9yaXR5SW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLFxyXG4gICAgaXNGaW5pc2hlZElucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmluaXNoZWQnKSxcclxuICAgIG5vdGVzSW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlcycpLFxyXG4gICAgc3VuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VuJyksXHJcbiAgICBtb29uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vbicpLFxyXG4gICAgYmluOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmluJyksXHJcbiAgICBjaGVja2xpc3RCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2xpc3QtYnRuJyksXHJcbiAgICBjaGVja2xpc3REaXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2xpc3QnKSxcclxuICAgIGNyZWF0b3JQcm9wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRvci1wcm9wZXJ0aWVzJyksXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhcHBlbmRUYXNrcyh0aXRsZSwgcHJpb3JpdHksIHByb2plY3QsIGFwcGVuZCkge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xyXG5cclxuICAgIHBhcmEudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3Q7XHJcbiAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktaWNvbicsICdsb3cnKTtcclxuXHJcbiAgICBzd2l0Y2gocHJpb3JpdHkpIHtcclxuICAgICAgY2FzZSAnbW9kZXJhdGUnOlxyXG4gICAgICAgIGNpcmNsZS5jbGFzc0xpc3QuYWRkKCdtb2RlcmF0ZScpXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2hpZ2gnOlxyXG4gICAgICAgIGNpcmNsZS5jbGFzc0xpc3QuYWRkKCdoaWdoJylcclxuICAgIH1cclxuXHJcbiAgICB0YXNrVGl0bGUuYXBwZW5kKGNpcmNsZSwgcGFyYSk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZCh0YXNrVGl0bGUsIHByb2plY3RUaXRsZSk7XHJcbiAgICBhcHBlbmQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcblxyXG4gICAgZXZlbnRzLnB1Ymxpc2goJ3Rhc2tXcmFwcGVyJywgd3JhcHBlcik7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuY3JlYXRvckJnLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXBwZW5kUHJvamVjdCh0aXRsZSwgZHVlRGF0ZSkge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgZGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICBkZWFkbGluZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XHJcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcclxuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XHJcbiAgICBkZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlYWRsaW5lJyk7XHJcblxyXG4gICAgd3JhcHBlci5hcHBlbmQocHJvamVjdFRpdGxlLCBkZWFkbGluZSk7XHJcbiAgICBzZWxlY3QucHJvamVjdExpc3QuYXBwZW5kKHdyYXBwZXIpO1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmNyZWF0b3JCZy5yZW1vdmUoKTtcclxuXHJcbiAgICBldmVudHMucHVibGlzaCgnZ2V0V3JhcHBlcicsIHdyYXBwZXIpO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBvcGVuUHJvamVjdFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkZWFkbGluZSwgcHJpb3JpdHksIG5vdGVzLCBpc0NvbXBsZXRlKSB7XHJcbiAgICBzZWxlY3QuaGVhZFNlYy50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgc2VsZWN0LmRldGFpbHMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgc2VsZWN0LnRhc2tzQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gICAgc2VsZWN0LmRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBkZXNjcmlwdGlvbjtcclxuICAgIHNlbGVjdC5kZWFkbGluZUlucHV0LnZhbHVlID0gZGVhZGxpbmU7XHJcbiAgICBzZWxlY3QucHJpb3JpdHlJbnB1dC52YWx1ZSA9IHByaW9yaXR5O1xyXG4gICAgc2VsZWN0Lm5vdGVzSW5wdXQudmFsdWUgPSBub3RlcztcclxuICAgIHNlbGVjdC5pc0ZpbmlzaGVkSW5wdXQuY2hlY2tlZCA9IGlzQ29tcGxldGU7XHJcblxyXG4gICAgc2VsZWN0LnRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICBzZWxlY3QuaGVhZFNlYy5hcHBlbmQoc2VsZWN0LmRldGFpbHMpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXBwZW5kSW5ib3goKSB7XHJcbiAgICBzZWxlY3QuaGVhZFNlYy50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgY29uc3QgaW5ib3hUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgICBpbmJveFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2luYm94LXRpdGxlJyk7XHJcbiAgICAgICAgICBpbmJveFRpdGxlLnRleHRDb250ZW50ID0gJ0luYm94JztcclxuICAgIHNlbGVjdC5oZWFkU2VjLmFwcGVuZChpbmJveFRpdGxlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFwcGVuZERvbmUoKSB7XHJcbiAgICBkb20uc2VsZWN0LnRhc2tzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZG9tLnNlbGVjdC5jaGVja2xpc3REaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHNlbGVjdC5oZWFkU2VjLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBjb25zdCBkb25lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgICAgZG9uZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2RvbmUtdGl0bGUnKTtcclxuICAgICAgICAgIGRvbmVUaXRsZS50ZXh0Q29udGVudCA9ICdEb25lJztcclxuICAgIHNlbGVjdC5oZWFkU2VjLmFwcGVuZChkb25lVGl0bGUpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0LnRoZW1lQ2hhbmdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc2VsZWN0LnBhZ2VTdHJ1Y3R1cmUuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpO1xyXG4gICAgc2VsZWN0LnBhZ2VTdHJ1Y3R1cmUuY2xhc3NMaXN0LnRvZ2dsZSgnbGlnaHQnKTtcclxuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xyXG5cclxuICAgIHNlbGVjdC5zdW4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICBzZWxlY3QubW9vbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gc2F2ZVRvTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgc2VsZWN0LnBhZ2VTdHJ1Y3R1cmUuY2xhc3NMaXN0WzFdKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJldHJpZXZlRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgIGNvbnN0IHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XHJcbiAgICBpZih0aGVtZSAhPT0gbnVsbCkge1xyXG4gICAgICBpZihzZWxlY3QucGFnZVN0cnVjdHVyZS5jbGFzc0xpc3RbMV0gPT09ICdkYXJrJykge1xyXG4gICAgICAgIHNlbGVjdC5wYWdlU3RydWN0dXJlLmNsYXNzTGlzdC5yZXBsYWNlKCdkYXJrJywgdGhlbWUpO1xyXG4gICAgICB9IGVsc2UgaWYoc2VsZWN0LnBhZ2VTdHJ1Y3R1cmUuY2xhc3NMaXN0WzFdID09PSAnbGlnaHQnKSB7XHJcbiAgICAgICAgICBzZWxlY3QucGFnZVN0cnVjdHVyZS5jbGFzc0xpc3QucmVwbGFjZSgnbGlnaHQnLCB0aGVtZSk7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgfVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIHJldHJpZXZlRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gIH0pXHJcblxyXG4gIGV2ZW50cy5zdWJzY3JpYmUoJ29wZW5UYXNrJywgZXZlbnRzLmV2ZW50cywgKCkgPT4ge1xyXG4gICAgc2VsZWN0LmRlc2NyaXB0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGFzay5lZGl0RGVzY3JpcHRpb24pO1xyXG4gICAgc2VsZWN0LmRlYWRsaW5lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGFzay5lZGl0RGVhZGxpbmUpO1xyXG4gICAgc2VsZWN0LnByaW9yaXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGFzay5lZGl0UHJpb3JpdHkpO1xyXG4gICAgc2VsZWN0Lm5vdGVzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGFzay5lZGl0Tm90ZXMpO1xyXG4gICAgc2VsZWN0LmlzRmluaXNoZWRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0YXNrLmNoZWNrRmluaXNoKTtcclxuICAgIHNlbGVjdC5iaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YXNrLmRlbGV0ZVRhc2spO1xyXG4gIH0pO1xyXG5cclxuICBldmVudHMuc3Vic2NyaWJlKCdvcGVuUHJvamVjdCcsIGV2ZW50cy5ldmVudHMsICgpID0+IHtcclxuICAgIHNlbGVjdC5kZXNjcmlwdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHByb2plY3QuZWRpdERlc2NyaXB0aW9uKTtcclxuICAgIHNlbGVjdC5kZWFkbGluZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHByb2plY3QuZWRpdERlYWRsaW5lKTtcclxuICAgIHNlbGVjdC5wcmlvcml0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHByb2plY3QuZWRpdFByaW9yaXR5KTtcclxuICAgIHNlbGVjdC5ub3Rlc0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHByb2plY3QuZWRpdE5vdGVzKTtcclxuICAgIHNlbGVjdC5pc0ZpbmlzaGVkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgcHJvamVjdC5jaGVja0ZpbmlzaCk7XHJcbiAgICBzZWxlY3QuYmluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdC5kZWxldGVQcm9qZWN0KTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlTGluZShjb250YWluZXIpIHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2xpbmUtYmcnKTtcclxuICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgIGxpbmUuY2xhc3NMaXN0LmFkZCgnbGluZScpO1xyXG5cclxuICAgIGRpdi5hcHBlbmQobGluZSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKGRpdik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2VsZWN0LFxyXG4gICAgYXBwZW5kVGFza3MsXHJcbiAgICBhcHBlbmRQcm9qZWN0LFxyXG4gICAgb3BlblByb2plY3RUYXNrLFxyXG4gICAgYXBwZW5kSW5ib3gsXHJcbiAgICBhcHBlbmREb25lLFxyXG4gICAgY3JlYXRlTGluZVxyXG4gIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbTsiLCJpbXBvcnQgZG9tIGZyb20gJy4vZG9tLmpzJztcclxuaW1wb3J0IGNyZWF0b3IgZnJvbSAnLi9jcmVhdG9yLmpzJztcclxuaW1wb3J0IGV2ZW50cyBmcm9tICcuL3B1YlN1Yi5qcyc7XHJcbmltcG9ydCBkYXRlIGZyb20gJy4vZGF0ZS5qcyc7XHJcblxyXG5jb25zdCBoYW5kbGVQcm9qZWN0cyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHRpbWUsIHByaW9yaXR5LCBub3RlcywgLi4udGFza3MpIHtcclxuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gIGRlc2NyaXB0aW9uO1xyXG4gICAgICB0aGlzLmR1ZURhdGUgPSAgZHVlRGF0ZTtcclxuICAgICAgdGhpcy50aW1lID0gIHRpbWU7XHJcbiAgICAgIHRoaXMucHJpb3JpdHkgPSAgcHJpb3JpdHk7XHJcbiAgICAgIHRoaXMubm90ZXMgPSAgbm90ZXM7XHJcbiAgICAgIHRoaXMudGFza3MgPSAgdGFza3M7XHJcbiAgICAgIHRoaXMuaXNDb21wbGV0ZSA9ICBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2plY3RzID0gW107XHJcbiAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdDtcclxuXHJcbiAgZnVuY3Rpb24gc2V0VGl0bGUoKSB7XHJcbiAgICBuZXdQcm9qZWN0LnRpdGxlID0gY3JlYXRvci5jcmVhdG9yLmlucHV0LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICBuZXdQcm9qZWN0LmRlc2NyaXB0aW9uID0gY3JlYXRvci5kZXNjLnRleHRBcmVhLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0RGF0ZSgpIHtcclxuICAgIG5ld1Byb2plY3QuZHVlRGF0ZSA9IGNyZWF0b3IuZHVlRGF0ZS5kYXRlLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0VGltZSgpIHtcclxuICAgIG5ld1Byb2plY3QudGltZSA9IGNyZWF0b3IudGltZS50aW1lLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0Tm90ZXMoKSB7XHJcbiAgICBuZXdQcm9qZWN0Lm5vdGVzID0gY3JlYXRvci5ub3Rlcy50ZXh0QXJlYS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldFByaW9yaXR5KCkge1xyXG4gICAgbmV3UHJvamVjdC5wcmlvcml0eSA9IGNyZWF0b3IucHJpb3JpdHkuc2VsZWN0LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcclxuICAgIGlmKG5ld1Byb2plY3QudGl0bGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgICBldmVudHMucHVibGlzaCgncHJvamVjdHMnLCBuZXdQcm9qZWN0KTtcclxuICAgICAgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0O1xyXG4gICAgICBjcmVhdG9yLnJlc2V0Q3JlYXRvcigpO1xyXG4gICAgICBkaXNwbGF5UHJvamVjdCgpO1xyXG4gICAgICByZW1vdmVFdmVudHMoKTtcclxuICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydCgnRmlsbCBpbiB0aGUgZmllbGRzJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNhdmVUb0xvY2FsU3RvcmFnZSgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXRyaWV2ZUZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcclxuICAgIGlmKHByb2plY3RBcnJheSAhPT0gbnVsbCkge1xyXG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goKHApID0+IHtcclxuICAgICAgcHJvamVjdHMucHVzaChwKTtcclxuICAgICAgZXZlbnRzLnB1Ymxpc2goJ3Byb2plY3RzJywgcClcclxuICAgIH0pfVxyXG4gIH1cclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICByZXRyaWV2ZUZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICAgIGRpc3BsYXlQcm9qZWN0KCk7XHJcbiAgfSlcclxuXHJcbiAgZnVuY3Rpb24gZGlzcGxheVByb2plY3QoKSB7XHJcbiAgICBkb20uc2VsZWN0LnByb2plY3RMaXN0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgZG9tLmFwcGVuZFByb2plY3QocHJvamVjdC50aXRsZSwgcHJvamVjdC5kdWVEYXRlKTtcclxuICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2FuY2VsQWRkKCkge1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmNyZWF0b3JCZy5yZW1vdmUoKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5jYW5jZWxCdG4uY2xhc3NMaXN0LnJlbW92ZSgncHJvaicpXHJcbiAgICBjcmVhdG9yLnJlc2V0Q3JlYXRvcigpO1xyXG4gICAgcmVtb3ZlRXZlbnRzKCk7XHJcbiAgICBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3Q7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhY3RpdmF0ZUV2ZW50cygpIHtcclxuICAgIGNyZWF0b3IuYXBwZW5kQ3JlYXRvcigpO1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLnByb2plY3QucmVtb3ZlKCk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2onKVxyXG4gICAgY3JlYXRvci5jcmVhdG9yLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFRpdGxlKTtcclxuICAgIGNyZWF0b3IuZGVzYy50ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXREZXNjcmlwdGlvbik7XHJcbiAgICBjcmVhdG9yLmR1ZURhdGUuZGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXREYXRlKTtcclxuICAgIGNyZWF0b3IudGltZS50aW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFRpbWUpXHJcbiAgICBjcmVhdG9yLnByaW9yaXR5LnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRQcmlvcml0eSk7XHJcbiAgICBjcmVhdG9yLm5vdGVzLnRleHRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldE5vdGVzKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5jYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxBZGQpO1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlRXZlbnRzKCkge1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFRpdGxlKTtcclxuICAgIGNyZWF0b3IuZGVzYy50ZXh0QXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXREZXNjcmlwdGlvbik7XHJcbiAgICBjcmVhdG9yLmR1ZURhdGUuZGF0ZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXREYXRlKTtcclxuICAgIGNyZWF0b3IudGltZS50aW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFRpbWUpXHJcbiAgICBjcmVhdG9yLnByaW9yaXR5LnNlbGVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRQcmlvcml0eSk7XHJcbiAgICBjcmVhdG9yLm5vdGVzLnRleHRBcmVhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICBzZXROb3Rlcyk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuY2FuY2VsQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsQWRkKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5hZGRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0KTtcclxuICB9XHJcblxyXG4gIGRvbS5zZWxlY3QuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFjdGl2YXRlRXZlbnRzKTtcclxuXHJcbiAgLy8gZmlsdGVyIHRhc2tzIG9mIGEgc3BlY2lmaWMgcHJvamVjdFxyXG4gIGNvbnN0IHByb2plY3RXcmFwcGVycyA9IFtdO1xyXG5cclxuICBldmVudHMuc3Vic2NyaWJlKCdnZXRXcmFwcGVyJywgZXZlbnRzLmV2ZW50cywgKHdyYXBwZXIpID0+IHtcclxuICAgIGRvbS5zZWxlY3QudGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBkb20uc2VsZWN0LmNoZWNrbGlzdERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgcHJvamVjdFdyYXBwZXJzLnB1c2god3JhcHBlcik7XHJcblxyXG4gICAgcHJvamVjdFdyYXBwZXJzLmZvckVhY2goKHdyYXBwZXIpID0+IHtcclxuICAgICAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgaWYoZXZlbnQudGFyZ2V0Lm91dGVyVGV4dCA9PSBwcm9qZWN0LnRpdGxlKSB7XHJcbiAgICAgICAgICAgIGRvbS5vcGVuUHJvamVjdFRhc2socHJvamVjdC50aXRsZSwgcHJvamVjdC5kZXNjcmlwdGlvbiwgcHJvamVjdC5kdWVEYXRlLCBwcm9qZWN0LnByaW9yaXR5LCBwcm9qZWN0Lm5vdGVzLCBwcm9qZWN0LmlzQ29tcGxldGUpO1xyXG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgnb3BlblByb2plY3QnLCAnJyk7XHJcbiAgICAgICAgICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgIGRvbS5hcHBlbmRUYXNrcyh0YXNrLnRpdGxlLCB0YXNrLnByaW9yaXR5LCB0YXNrLnByb2plY3QsIGRvbS5zZWxlY3QudGFza3NDb250YWluZXIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBlZGl0RGVzY3JpcHRpb24oKSB7XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGlmKHByb2plY3QudGl0bGUgPT09IGRvbS5zZWxlY3QudGl0bGUudGV4dENvbnRlbnQpIHtcclxuICAgICAgICBwcm9qZWN0LmRlc2NyaXB0aW9uID0gZG9tLnNlbGVjdC5kZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gZWRpdERlYWRsaW5lKCkge1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBpZihwcm9qZWN0LnRpdGxlID09PSBkb20uc2VsZWN0LnRpdGxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgcHJvamVjdC5kdWVEYXRlID0gZG9tLnNlbGVjdC5kZWFkbGluZUlucHV0LnZhbHVlO1xyXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlZGl0UHJpb3JpdHkoKSB7XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGlmKHByb2plY3QudGl0bGUgPT09IGRvbS5zZWxlY3QudGl0bGUudGV4dENvbnRlbnQpIHtcclxuICAgICAgICBwcm9qZWN0LnByaW9yaXR5ID0gZG9tLnNlbGVjdC5wcmlvcml0eUlucHV0LnZhbHVlO1xyXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlZGl0Tm90ZXMoKSB7XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGlmKHByb2plY3QudGl0bGUgPT09IGRvbS5zZWxlY3QudGl0bGUudGV4dENvbnRlbnQpIHtcclxuICAgICAgICBwcm9qZWN0Lm5vdGVzID0gZG9tLnNlbGVjdC5ub3Rlc0lucHV0LnZhbHVlO1xyXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja0ZpbmlzaChldmVudCkge1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBpZihwcm9qZWN0LnRpdGxlID09PSBkb20uc2VsZWN0LnRpdGxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgIHByb2plY3QuaXNDb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcHJvamVjdC5pc0NvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBpZihwcm9qZWN0LnRpdGxlID09PSBkb20uc2VsZWN0LnRpdGxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xyXG4gICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xyXG4gICAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgICAgaWYocC5maXJzdENoaWxkLmlubmVyVGV4dCA9PT0gZG9tLnNlbGVjdC50aXRsZS50ZXh0Q29udGVudCkge1xyXG4gICAgICAgICAgcC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKClcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtwcm9qZWN0cywgcmVtb3ZlRXZlbnRzLCBQcm9qZWN0LCBhZGRQcm9qZWN0LCBlZGl0RGVzY3JpcHRpb24sIGVkaXREZWFkbGluZSwgZWRpdFByaW9yaXR5LCBlZGl0Tm90ZXMsIGNoZWNrRmluaXNoLCBkZWxldGVQcm9qZWN0LCBzYXZlVG9Mb2NhbFN0b3JhZ2V9XHJcbn0pKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZVByb2plY3RzOyIsIi8vIFB1YlN1YiBNb2R1bGVcclxuY29uc3QgZXZlbnRzID0gKGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0ICBldmVudHMgPSB7fTtcclxuXHJcbiAgY29uc3Qgc3Vic2NyaWJlID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgb2JqZWN0LCBjYWxsYmFjaykge1xyXG4gIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xyXG4gIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaCh7b2JqZWN0OiBvYmplY3QsIGNhbGxiYWNrOiBjYWxsYmFja30pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdW5zdWJzY3JpYmUgPSBmdW5jdGlvbihldmVudE5hbWUsIG9iamVjdCwgY2FsbGJhY2spIHtcclxuICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5sZW5ndGg7IGkrKykge1xyXG4gIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdW2ldLm9iamVjdCA9PT0gb2JqZWN0KSB7XHJcbiAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XHJcbiAgYnJlYWs7XHJcbiAgfVxyXG4gIH07XHJcbiAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcHVibGlzaCA9ICBmdW5jdGlvbiAoZXZlbnROYW1lLCBkYXRhKSB7XHJcbiAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcclxuICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goZnVuY3Rpb24oaW5zdGFuY2UpIHtcclxuICBpbnN0YW5jZS5jYWxsYmFjayhkYXRhKTtcclxuICB9KTtcclxuICB9XHJcbiAgfVxyXG5cclxucmV0dXJuIHtldmVudHMsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUsIHB1Ymxpc2h9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudHM7IiwiaW1wb3J0IHByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcclxuaW1wb3J0IGRvbSBmcm9tICcuL2RvbS5qcyc7XHJcbmltcG9ydCBldmVudHMgZnJvbSAnLi9wdWJTdWIuanMnO1xyXG5pbXBvcnQgY3JlYXRvciBmcm9tICcuL2NyZWF0b3IuanMnO1xyXG5pbXBvcnQgaGFuZGxlciBmcm9tICcuL2FwcEhhbmRsZXIuanMnO1xyXG5cclxuY29uc3QgaGFuZGxlVGFza3MgPSAoZnVuY3Rpb24oKSB7XHJcbiAgY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHRpbWUsIHByaW9yaXR5ID0gJ0xvdycsIG5vdGVzLCBwcm9qZWN0ID0gJ0luYm94JywgLi4uY2hlY2tMaXN0KSB7XHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9ICBkZXNjcmlwdGlvbjtcclxuICAgICAgdGhpcy5kdWVEYXRlID0gIGR1ZURhdGU7XHJcbiAgICAgIHRoaXMudGltZSA9ICB0aW1lO1xyXG4gICAgICB0aGlzLnByaW9yaXR5ID0gIHByaW9yaXR5O1xyXG4gICAgICB0aGlzLm5vdGVzID0gIG5vdGVzO1xyXG4gICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICB0aGlzLmNoZWNrTGlzdCA9IGNoZWNrTGlzdDtcclxuICAgICAgdGhpcy5pc0NvbXBsZXRlID0gIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdGFza3MgPSBbXTtcclxuICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrO1xyXG5cclxuICBmdW5jdGlvbiBzZXRUaXRsZSgpIHtcclxuICAgIG5ld1Rhc2sudGl0bGUgPSBjcmVhdG9yLmNyZWF0b3IuaW5wdXQudmFsdWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXREZXNjcmlwdGlvbigpIHtcclxuICAgIG5ld1Rhc2suZGVzY3JpcHRpb24gPSBjcmVhdG9yLmRlc2MudGV4dEFyZWEudmFsdWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXREYXRlKCkge1xyXG4gICAgbmV3VGFzay5kdWVEYXRlID0gY3JlYXRvci5kdWVEYXRlLmRhdGUudmFsdWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRUaW1lKCkge1xyXG4gICAgbmV3VGFzay50aW1lID0gY3JlYXRvci50aW1lLnRpbWUudmFsdWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXROb3RlcygpIHtcclxuICAgIG5ld1Rhc2subm90ZXMgPSBjcmVhdG9yLm5vdGVzLnRleHRBcmVhLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0UHJpb3JpdHkoKSB7XHJcbiAgICBuZXdUYXNrLnByaW9yaXR5ID0gY3JlYXRvci5wcmlvcml0eS5zZWxlY3QudmFsdWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRQcm9qZWN0KCkge1xyXG4gICAgbmV3VGFzay5wcm9qZWN0ID0gY3JlYXRvci5wcm9qZWN0cy5zZWxlY3QudmFsdWU7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGFkZFRhc2soKSB7XHJcbiAgICBpZihuZXdUYXNrLnRpdGxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGFza3MucHVzaChuZXdUYXNrKTtcclxuICAgICAgZXZlbnRzLnB1Ymxpc2goJ3Rhc2tzJywgdGFza3MpO1xyXG4gICAgICBwcm9qZWN0LnByb2plY3RzLmZvckVhY2goKHApID0+IHtcclxuICAgICAgICBpZihwLnRpdGxlID09IG5ld1Rhc2sucHJvamVjdCkge1xyXG4gICAgICAgICAgcC50YXNrcy5wdXNoKG5ld1Rhc2spO1xyXG4gICAgICAgICAgcHJvamVjdC5zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QucHJvamVjdHMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgaGFuZGxlci5maWx0ZXJJbmJveCgpO1xyXG4gICAgICBuZXdUYXNrID0gbmV3IFRhc2s7XHJcbiAgICAgIGNyZWF0b3IucmVzZXRDcmVhdG9yKCk7XHJcbiAgICAgIGNyZWF0b3IuY3JlYXRvci5jcmVhdG9yQmcucmVtb3ZlKCk7XHJcbiAgICAgIHJlbW92ZUV2ZW50cygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoJ0ZpbGwgaW4gdGhlIGZpZWxkcycpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzYXZlVG9Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmV0cmlldmVGcm9tTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgY29uc3QgdGFza3NBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xyXG4gICAgaWYodGFza3NBcnJheSAhPT0gbnVsbCkge1xyXG4gICAgdGFza3NBcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgIHRhc2tzLnB1c2godGFzayk7XHJcbiAgICB9KVxyXG4gIH1cclxuICB9XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgcmV0cmlldmVGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgICBoYW5kbGVyLmZpbHRlckluYm94KCk7XHJcbiAgfSlcclxuXHJcbiAgZnVuY3Rpb24gY2FuY2VsQWRkKCkge1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmNyZWF0b3JCZy5yZW1vdmUoKTtcclxuICAgIGNyZWF0b3IucmVzZXRDcmVhdG9yKCk7XHJcbiAgICByZW1vdmVFdmVudHMoKTtcclxuICAgIG5ld1Rhc2sgPSBuZXcgVGFzaztcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gYWN0aXZhdGVFdmVudHMoKSB7XHJcbiAgICBjcmVhdG9yLmFwcGVuZENyZWF0b3IoKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRUaXRsZSk7XHJcbiAgICBjcmVhdG9yLmRlc2MudGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0RGVzY3JpcHRpb24pO1xyXG4gICAgY3JlYXRvci5kdWVEYXRlLmRhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0RGF0ZSk7XHJcbiAgICBjcmVhdG9yLnRpbWUudGltZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRUaW1lKVxyXG4gICAgY3JlYXRvci5wcmlvcml0eS5zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0UHJpb3JpdHkpO1xyXG4gICAgY3JlYXRvci5wcm9qZWN0cy5zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0UHJvamVjdCk7XHJcbiAgICBjcmVhdG9yLm5vdGVzLnRleHRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldE5vdGVzKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5jYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxBZGQpO1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2spO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlRXZlbnRzKCkge1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFRpdGxlKTtcclxuICAgIGNyZWF0b3IuZGVzYy50ZXh0QXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXREZXNjcmlwdGlvbik7XHJcbiAgICBjcmVhdG9yLmR1ZURhdGUuZGF0ZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXREYXRlKTtcclxuICAgIGNyZWF0b3IudGltZS50aW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFRpbWUpXHJcbiAgICBjcmVhdG9yLnByaW9yaXR5LnNlbGVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRQcmlvcml0eSk7XHJcbiAgICBjcmVhdG9yLm5vdGVzLnRleHRBcmVhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICBzZXROb3Rlcyk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuY2FuY2VsQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsQWRkKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5hZGRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHdyYXBwZXJzID0gW107XHJcblxyXG4gIGV2ZW50cy5zdWJzY3JpYmUoJ3Rhc2tXcmFwcGVyJywgZXZlbnRzLmV2ZW50cywgKHdyYXBwZXIpID0+IHtcclxuICAgIHdyYXBwZXJzLnB1c2god3JhcHBlcik7XHJcbiAgICB3cmFwcGVycy5mb3JFYWNoKCh3cmFwcGVyKSA9PiB7XHJcbiAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICBpZihldmVudC50YXJnZXQub3V0ZXJUZXh0ID09PSB0YXNrLnRpdGxlKSB7XHJcbiAgICAgICAgICAgIGRvbS5zZWxlY3QudGFza3NDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgZG9tLm9wZW5Qcm9qZWN0VGFzayh0YXNrLnRpdGxlLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHksIHRhc2subm90ZXMpO1xyXG4gICAgICAgICAgICBkb20uc2VsZWN0LnRhc2tzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGRvbS5zZWxlY3QuY2hlY2tsaXN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBmaWx0ZXJDaGVja0xpc3QoKTtcclxuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ29wZW5UYXNrJywgJycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pO1xyXG5cclxuICBjbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBwcmlvcml0eSkge1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCB0b2RvID0gbmV3IFRvZG87XHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkVG9kbygpIHtcclxuICAgIHRvZG8ucHJpb3JpdHkgPSBjcmVhdG9yLnByaW9yaXR5LnNlbGVjdC52YWx1ZTtcclxuICAgIHRvZG8udGl0bGUgPSBjcmVhdG9yLmNyZWF0b3IuaW5wdXQudmFsdWU7XHJcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgIGlmKGRvbS5zZWxlY3QudGl0bGUudGV4dENvbnRlbnQgPT09IHRhc2sudGl0bGUpIHtcclxuICAgICAgICB0YXNrLmNoZWNrTGlzdC5wdXNoKHRvZG8pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgZG9tLmFwcGVuZFRhc2tzKHRvZG8udGl0bGUsIHRvZG8ucHJpb3JpdHksICcnLCBkb20uc2VsZWN0LmNoZWNrbGlzdERpdik7XHJcbiAgICBwLnJlbW92ZSgpXHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuY2FuY2VsQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsQWRkKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5hZGRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUb2RvKTtcclxuICAgIHRvZG8gPSBuZXcgVG9kbztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbHRlckNoZWNrTGlzdCgpIHtcclxuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgaWYoZG9tLnNlbGVjdC50aXRsZS50ZXh0Q29udGVudCA9PT0gdGFzay50aXRsZSkge1xyXG4gICAgICAgIGlmKHRhc2suY2hlY2tMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRhc2suY2hlY2tMaXN0LmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgICAgICAgICAgZG9tLmFwcGVuZFRhc2tzKHRvZG8udGl0bGUsIHRvZG8ucHJpb3JpdHksICcnLCBkb20uc2VsZWN0LmNoZWNrbGlzdERpdik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrbGlzdCAudGFzaycpO1xyXG4gICAgICAgICAgdG9kb3MuZm9yRWFjaCgodCk9PiB7XHJcbiAgICAgICAgICAgIHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZG9tLmNyZWF0ZUxpbmUodCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBcIllvdSBkb24ndCBoYXZlIGFueSB0b2RvIGZvciB0aGlzIHRhc2tcIlxyXG4gICAgICAgICAgICBkb20uc2VsZWN0LmNoZWNrbGlzdERpdi5hcHBlbmQocClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRUb0NoZWNrbGlzdCgpIHtcclxuICAgIGNyZWF0b3IucmVzZXRDcmVhdG9yKCk7XHJcbiAgICBjcmVhdG9yLmFwcGVuZENyZWF0b3IoKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5wcm9qZWN0LnJlbW92ZSgpO1xyXG4gICAgXHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsQWRkKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUb2RvKTtcclxuICB9XHJcblxyXG4gIGRvbS5zZWxlY3QuY2hlY2tsaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVG9DaGVja2xpc3QpO1xyXG5cclxuICBmdW5jdGlvbiBlZGl0RGVzY3JpcHRpb24oKSB7XHJcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgIGlmKHRhc2sudGl0bGUgPT09IGRvbS5zZWxlY3QudGl0bGUudGV4dENvbnRlbnQpIHtcclxuICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gZG9tLnNlbGVjdC5kZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZWRpdERlYWRsaW5lKCkge1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBpZih0YXNrLnRpdGxlID09PSBkb20uc2VsZWN0LnRpdGxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgdGFzay5kdWVEYXRlID0gZG9tLnNlbGVjdC5kZWFkbGluZUlucHV0LnZhbHVlO1xyXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZWRpdFByaW9yaXR5KCkge1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBpZih0YXNrLnRpdGxlID09PSBkb20uc2VsZWN0LnRpdGxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgdGFzay5wcmlvcml0eSA9IGRvbS5zZWxlY3QucHJpb3JpdHlJbnB1dC52YWx1ZTtcclxuICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVkaXROb3RlcygpIHtcclxuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgaWYodGFzay50aXRsZSA9PT0gZG9tLnNlbGVjdC50aXRsZS50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIHRhc2subm90ZXMgPSBkb20uc2VsZWN0Lm5vdGVzSW5wdXQudmFsdWU7XHJcbiAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFza3MpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja0ZpbmlzaChldmVudCkge1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBpZih0YXNrLnRpdGxlID09PSBkb20uc2VsZWN0LnRpdGxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgIHRhc2suaXNDb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlVGFzaygpIHtcclxuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgaWYodGFzay50aXRsZSA9PT0gZG9tLnNlbGVjdC50aXRsZS50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGFza3MuaW5kZXhPZih0YXNrKTtcclxuICAgICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGRvbS5zZWxlY3QuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFjdGl2YXRlRXZlbnRzKTtcclxuXHJcbiAgcmV0dXJue3Rhc2tzLCByZW1vdmVFdmVudHMsIFRhc2ssIGFkZFRhc2ssICBlZGl0RGVzY3JpcHRpb24sIGVkaXREZWFkbGluZSwgZWRpdFByaW9yaXR5LCBlZGl0Tm90ZXMsIGNoZWNrRmluaXNoLCBkZWxldGVUYXNrfVxyXG59KSgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVUYXNrcztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBoYW5kbGVUYXNrcyBmcm9tICcuL3Rhc2suanMnO1xyXG5pbXBvcnQgaGFuZGxlUHJvamVjdHMgZnJvbSAnLi9wcm9qZWN0LmpzJztcclxuaW1wb3J0IGFwcEhhbmRsZXIgZnJvbSAnLi9hcHBIYW5kbGVyLmpzJztcclxuaW1wb3J0IGhhbmRsZURhdGVzIGZyb20gJy4vZGF0ZS5qcyc7XHJcblxyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==