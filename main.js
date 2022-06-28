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
___CSS_LOADER_EXPORT___.push([module.id, "/* General */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n} \r\n\r\nbody {\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.page-structure {\r\n  display: grid;\r\n  grid-template-columns: 300px 4fr;\r\n  grid-template-areas: \r\n  \"header header\"\r\n  \"sidebar main\"\r\n  \"sidebar main\";\r\n  height: 100%;\r\n}\r\n\r\nsvg:not(.logo) {\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* Header */\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 81px;\r\n  padding: 0 30px;\r\n  grid-area: header;\r\n}\r\n\r\n.logo {\r\n  margin-left: 7px;\r\n}\r\n\r\n.header ul {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n/* Sidebar */\r\n.sidebar {\r\n  height: calc(100vh - 81px);\r\n  grid-area: sidebar;\r\n}\r\n\r\n/* Inbox */\r\n.inbox {\r\n  padding: 20px 0 30px 48px;\r\n  height: 156px;\r\n}\r\n\r\n.inbox-title, .done-title {\r\n  font-size: 3rem;\r\n  position: relative;\r\n}\r\n\r\n.page-structure.dark .inbox-title::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 10px;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\n.page-structure.light .inbox-title::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 10px;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\n.nav ul {\r\n  display: grid;\r\n  gap: 20px;\r\n}\r\n\r\n.nav ul li {\r\n  font-size: 1.125rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(1)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(2)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(3)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(1)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(2)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(3)::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n\r\n.nav ul li::before {\r\n  width: 25px;\r\n  height: 25px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* Projects */\r\n.projects {\r\n  padding: 20px 0 0 48px;\r\n}\r\n\r\n.projects h2 {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.add-project {\r\n  font-size: 0.875rem;\r\n  cursor: pointer;\r\n  letter-spacing: 1px;\r\n  margin-top: 25px;\r\n}\r\n\r\n.page-structure.dark .add-project::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n  width: 15px;\r\n  height: 15px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n.page-structure.light .add-project::before {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n  width: 15px;\r\n  height: 15px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* Main */\r\n.main {\r\n  grid-area: main;\r\n}\r\n\r\n.head-sec {\r\n  display: grid;\r\n  align-items: center;\r\n  padding: 20px 70px;\r\n}\r\n\r\n.date {\r\n  text-align: center;\r\n  font-size: 3rem;\r\n}\r\n\r\n.date p {\r\n  font-size: 3rem;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.list-view {\r\n  padding: 30px 55px;\r\n  height: calc(100vh - 180px);\r\n  overflow: auto;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  cursor: pointer;\r\n  align-items: center;\r\n  padding: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.task-title {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  position: relative;\r\n}\r\n\r\n.checkbox {\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.checkbox + label {\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.checkbox + label::before {\r\n  content: '';\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: 3px;\r\n}\r\n\r\n.checkbox:checked + label::before {\r\n  content: 'ok';\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 4px;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.priority-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.priority-icon.low {\r\n  border: 2.5px solid yellow;\r\n}\r\n\r\n.priority-icon.moderate {\r\n  border: 2.5px solid orange;\r\n}\r\n\r\n.priority-icon.high {\r\n  border: 2.5px solid red;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* Add container */\r\n.add-creator-bg {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgba(0,0,0,.6);\r\n}\r\n\r\n.add-creator-container {\r\n  width: 810px;\r\n  height: 126px;\r\n  border-radius: 12px;\r\n  box-shadow:1px 1px 1px rgba(0, 0, 0, .4);\r\n}\r\n\r\n.creator-input {\r\n  width: 94%;\r\n  height: 34px;\r\n  justify-self: center;\r\n  margin: 20px 25px;\r\n  outline: none;\r\n  border-radius: 12px;\r\n  color: black;\r\n  padding: 0 10px;\r\n  border: none;\r\n}\r\n\r\n.creator-properties {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n}\r\n\r\n.creator-prop-input {\r\n  width: 234px;\r\n  height: 34px;\r\n  border-radius: 12px;\r\n  background-color: #fff;\r\n  margin-left: 25px;\r\n  color: black;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon {\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn {\r\n  color: black;\r\n  padding: 8px 16px;\r\n  white-space: nowrap;\r\n  border-radius: 12px;\r\n  cursor: pointer;\r\n  border: none;\r\n}\r\n\r\n.priority-select, .notes, .desc, .dateInput, .time, .projects-select {\r\n  width: 100%;\r\n  height: 34px;\r\n  border-radius: 12px;\r\n  background-color: #fff;\r\n  color: black;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.priority-select option, .projects-select option {\r\n  color: black;\r\n}\r\n\r\n.notes, .desc, .dateInput, .time {\r\n  padding: 10px;\r\n  resize: none;\r\n}\r\n\r\n/* project container */\r\n.project {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 200px;\r\n  padding: 10px;\r\n  margin: 15px 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.project-h1 {\r\n  font-size: 3rem;\r\n}\r\n\r\n.page-structure.dark .project:hover {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.page-structure.light .project:hover {\r\n  background-color: #F2BF58;\r\n}\r\n\r\n.date-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 35px 400px 35px;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  display: none;\r\n}\r\n\r\n.arrow-backward {\r\n  transform: rotate(180deg);\r\n}\r\n\r\n/* details container */\r\n.details-project-task {\r\n  display: none;\r\n}\r\n\r\n.title {\r\n  font-size: 3rem;\r\n}\r\n\r\n.details-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: 1fr;\r\n}\r\n\r\n.details-container input,\r\n.details-container textarea {\r\n  color: black;\r\n  outline: none;\r\n  border: none;\r\n  padding: 6px 8px;\r\n  resize: none;\r\n}\r\n\r\n.details-container select {\r\n  width: 185px;\r\n  padding: 5px 8px;\r\n  border: none;\r\n  outline: none;\r\n  margin-bottom: 20px;\r\n  color: black;\r\n}\r\n\r\n.details-container select option {\r\n  color: black;\r\n}\r\n\r\n.details-container input {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.details-container label {\r\n  margin-right: 8px;\r\n}\r\n\r\n.details-container div:nth-child(1) div:nth-child(2) label {\r\n  margin-right: 25px;\r\n}\r\n\r\n.detail-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.description,\r\n.deadline {\r\n  grid-column: 1;\r\n}\r\n\r\n.priority-div,\r\n.is-finished {\r\n  grid-column: 2;\r\n}\r\n\r\n.notes-div {\r\n  grid-column: 3;\r\n  display: flex;\r\n}\r\n\r\n.notes-div textarea {\r\n  height: 120px;\r\n}\r\n\r\n@media (prefers-color-scheme: light) {\r\n  * {\r\n    color: black;\r\n  }\r\n\r\n  svg {\r\n    fill: black;\r\n    stroke: black;\r\n    color: black;\r\n  }\r\n\r\n  .add-creator-container {\r\n    background-color: #FFC05A;\r\n  }\r\n\r\n  .header {\r\n    background-color: #FFC05A;\r\n  }\r\n\r\n  .sidebar {\r\n    background-color: #FFCE7E;\r\n  }\r\n\r\n  .head-sec {\r\n    background-color: #FFDA9E;\r\n  }\r\n\r\n  .main {\r\n    background-color: #FFFFFF;\r\n  }\r\n\r\n  .task:hover {\r\n    background-color: #121212;\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n  }\r\n\r\n  .creator-prop-input { \r\n    background-color: #FFCE7E;\r\n  }\r\n}\r\n\r\n.page-structure.light .header {\r\n  background-color: #FFC05A;\r\n}\r\n\r\n.page-structure.light .creator-prop-input {\r\n  background-color: #FFCE7E;\r\n}\r\n\r\n.page-structure.light *:not(.btn) {\r\n  fill: black;\r\n  stroke: black;\r\n  color: black;\r\n}\r\n\r\n.page-structure.light .sidebar {\r\n  background-color: #FFCE7E;\r\n}\r\n\r\n.page-structure.light .add-creator-container {\r\n  background-color: #F2BF58;\r\n}\r\n\r\n.page-structure.light .head-sec {\r\n  background-color: #FFDA9E;\r\n}\r\n\r\n.page-structure.light .main {\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n.page-structure.light .task:hover {\r\n  background-color: #FFDA9E;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  * {\r\n    color: white;\r\n  }\r\n\r\n  .add-creator-container {\r\n    background-color: #121212;\r\n  }\r\n\r\n  svg {\r\n    fill: white;\r\n    color: white;\r\n    stroke: white;\r\n  }\r\n\r\n  .header {\r\n    background-color: #0B0909;\r\n  }\r\n\r\n  .sidebar {\r\n    background-color: #0E0E0E;\r\n  }\r\n\r\n  .head-sec {\r\n    background-color: #121212;\r\n  }\r\n\r\n  .main {\r\n    background-color: #1A1A1A;\r\n  }\r\n\r\n  .task:hover {\r\n    background-color: #121212;\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n  }\r\n}\r\n\r\n.page-structure.dark .header {\r\n  background-color: #0B0909;\r\n}\r\n\r\n.page-structure.dark .creator-prop-input {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.page-structure.dark .sidebar {\r\n  background-color: #0E0E0E;\r\n}\r\n\r\n.page-structure.dark .add-creator-container {\r\n  background-color: #121212;\r\n}\r\n\r\n\r\n.page-structure.dark .head-sec {\r\n  background-color: #121212;\r\n}\r\n\r\n.page-structure.dark .main {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.page-structure.dark .task:hover {\r\n  background-color: #121212;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n.page-structure.dark * {\r\n  fill: white;\r\n}\r\n\r\n.sun, \r\n.moon {\r\n  display: none;\r\n}\r\n\r\n.sun.active,\r\n.moon.active {\r\n  display: block;\r\n}\r\n\r\n.checklist {\r\n  position: relative;\r\n  display: none;\r\n  padding: 60px 60px;\r\n  height: calc(100vh - 330px);\r\n  overflow: auto;\r\n}\r\n\r\n.checklist-btn {\r\n  color: black;\r\n  height: 50px;\r\n  width: 50px;\r\n  font-size: 3rem;\r\n  border-radius: 50%;\r\n  box-shadow: 1px 1px 2px #fff;\r\n  border: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  position: absolute;\r\n  right: 30px;\r\n  top: 20px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* General */\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n} \r\n\r\nbody {\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.page-structure {\r\n  display: grid;\r\n  grid-template-columns: 300px 4fr;\r\n  grid-template-areas: \r\n  \"header header\"\r\n  \"sidebar main\"\r\n  \"sidebar main\";\r\n  height: 100%;\r\n}\r\n\r\nsvg:not(.logo) {\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/* Header */\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 81px;\r\n  padding: 0 30px;\r\n  grid-area: header;\r\n}\r\n\r\n.logo {\r\n  margin-left: 7px;\r\n}\r\n\r\n.header ul {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n/* Sidebar */\r\n.sidebar {\r\n  height: calc(100vh - 81px);\r\n  grid-area: sidebar;\r\n}\r\n\r\n/* Inbox */\r\n.inbox {\r\n  padding: 20px 0 30px 48px;\r\n  height: 156px;\r\n}\r\n\r\n.inbox-title, .done-title {\r\n  font-size: 3rem;\r\n  position: relative;\r\n}\r\n\r\n.page-structure.dark .inbox-title::before {\r\n  content: url(\"./img/inbox-white.svg\");\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 10px;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\n.page-structure.light .inbox-title::before {\r\n  content: url(\"./img/inbox-black.svg\");\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 10px;\r\n  position: relative;\r\n  top: 3px;\r\n}\r\n\r\n.nav ul {\r\n  display: grid;\r\n  gap: 20px;\r\n}\r\n\r\n.nav ul li {\r\n  font-size: 1.125rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(1)::before {\r\n  content: url(\"./img/inbox-black.svg\");\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(2)::before {\r\n  content: url(\"./img/calendar-black.svg\");\r\n}\r\n\r\n.page-structure.light .nav ul li:nth-child(3)::before {\r\n  content: url(\"./img/calendar-black.svg\");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(1)::before {\r\n  content: url(\"./img/inbox-white.svg\");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(2)::before {\r\n  content: url(\"./img/calendar-white.svg\");\r\n}\r\n\r\n.page-structure.dark .nav ul li:nth-child(3)::before {\r\n  content: url(\"./img/calendar-white.svg\");\r\n}\r\n\r\n.nav ul li::before {\r\n  width: 25px;\r\n  height: 25px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* Projects */\r\n.projects {\r\n  padding: 20px 0 0 48px;\r\n}\r\n\r\n.projects h2 {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.add-project {\r\n  font-size: 0.875rem;\r\n  cursor: pointer;\r\n  letter-spacing: 1px;\r\n  margin-top: 25px;\r\n}\r\n\r\n.page-structure.dark .add-project::before {\r\n  content: url('./img/plus-white.svg');\r\n  width: 15px;\r\n  height: 15px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n.page-structure.light .add-project::before {\r\n  content: url('./img/plus-black.svg');\r\n  width: 15px;\r\n  height: 15px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* Main */\r\n.main {\r\n  grid-area: main;\r\n}\r\n\r\n.head-sec {\r\n  display: grid;\r\n  align-items: center;\r\n  padding: 20px 70px;\r\n}\r\n\r\n.date {\r\n  text-align: center;\r\n  font-size: 3rem;\r\n}\r\n\r\n.date p {\r\n  font-size: 3rem;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.list-view {\r\n  padding: 30px 55px;\r\n  height: calc(100vh - 180px);\r\n  overflow: auto;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  cursor: pointer;\r\n  align-items: center;\r\n  padding: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.task-title {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  position: relative;\r\n}\r\n\r\n.checkbox {\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.checkbox + label {\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.checkbox + label::before {\r\n  content: '';\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: 3px;\r\n}\r\n\r\n.checkbox:checked + label::before {\r\n  content: 'ok';\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 4px;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.priority-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.priority-icon.low {\r\n  border: 2.5px solid yellow;\r\n}\r\n\r\n.priority-icon.moderate {\r\n  border: 2.5px solid orange;\r\n}\r\n\r\n.priority-icon.high {\r\n  border: 2.5px solid red;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* Add container */\r\n.add-creator-bg {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgba(0,0,0,.6);\r\n}\r\n\r\n.add-creator-container {\r\n  width: 810px;\r\n  height: 126px;\r\n  border-radius: 12px;\r\n  box-shadow:1px 1px 1px rgba(0, 0, 0, .4);\r\n}\r\n\r\n.creator-input {\r\n  width: 94%;\r\n  height: 34px;\r\n  justify-self: center;\r\n  margin: 20px 25px;\r\n  outline: none;\r\n  border-radius: 12px;\r\n  color: black;\r\n  padding: 0 10px;\r\n  border: none;\r\n}\r\n\r\n.creator-properties {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n}\r\n\r\n.creator-prop-input {\r\n  width: 234px;\r\n  height: 34px;\r\n  border-radius: 12px;\r\n  background-color: #fff;\r\n  margin-left: 25px;\r\n  color: black;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.icon {\r\n  width: 25px;\r\n  height: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn {\r\n  color: black;\r\n  padding: 8px 16px;\r\n  white-space: nowrap;\r\n  border-radius: 12px;\r\n  cursor: pointer;\r\n  border: none;\r\n}\r\n\r\n.priority-select, .notes, .desc, .dateInput, .time, .projects-select {\r\n  width: 100%;\r\n  height: 34px;\r\n  border-radius: 12px;\r\n  background-color: #fff;\r\n  color: black;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.priority-select option, .projects-select option {\r\n  color: black;\r\n}\r\n\r\n.notes, .desc, .dateInput, .time {\r\n  padding: 10px;\r\n  resize: none;\r\n}\r\n\r\n/* project container */\r\n.project {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 200px;\r\n  padding: 10px;\r\n  margin: 15px 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.project-h1 {\r\n  font-size: 3rem;\r\n}\r\n\r\n.page-structure.dark .project:hover {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.page-structure.light .project:hover {\r\n  background-color: #F2BF58;\r\n}\r\n\r\n.date-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 35px 400px 35px;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  display: none;\r\n}\r\n\r\n.arrow-backward {\r\n  transform: rotate(180deg);\r\n}\r\n\r\n/* details container */\r\n.details-project-task {\r\n  display: none;\r\n}\r\n\r\n.title {\r\n  font-size: 3rem;\r\n}\r\n\r\n.details-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: 1fr;\r\n}\r\n\r\n.details-container input,\r\n.details-container textarea {\r\n  color: black;\r\n  outline: none;\r\n  border: none;\r\n  padding: 6px 8px;\r\n  resize: none;\r\n}\r\n\r\n.details-container select {\r\n  width: 185px;\r\n  padding: 5px 8px;\r\n  border: none;\r\n  outline: none;\r\n  margin-bottom: 20px;\r\n  color: black;\r\n}\r\n\r\n.details-container select option {\r\n  color: black;\r\n}\r\n\r\n.details-container input {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.details-container label {\r\n  margin-right: 8px;\r\n}\r\n\r\n.details-container div:nth-child(1) div:nth-child(2) label {\r\n  margin-right: 25px;\r\n}\r\n\r\n.detail-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.description,\r\n.deadline {\r\n  grid-column: 1;\r\n}\r\n\r\n.priority-div,\r\n.is-finished {\r\n  grid-column: 2;\r\n}\r\n\r\n.notes-div {\r\n  grid-column: 3;\r\n  display: flex;\r\n}\r\n\r\n.notes-div textarea {\r\n  height: 120px;\r\n}\r\n\r\n@media (prefers-color-scheme: light) {\r\n  * {\r\n    color: black;\r\n  }\r\n\r\n  svg {\r\n    fill: black;\r\n    stroke: black;\r\n    color: black;\r\n  }\r\n\r\n  .add-creator-container {\r\n    background-color: #FFC05A;\r\n  }\r\n\r\n  .header {\r\n    background-color: #FFC05A;\r\n  }\r\n\r\n  .sidebar {\r\n    background-color: #FFCE7E;\r\n  }\r\n\r\n  .head-sec {\r\n    background-color: #FFDA9E;\r\n  }\r\n\r\n  .main {\r\n    background-color: #FFFFFF;\r\n  }\r\n\r\n  .task:hover {\r\n    background-color: #121212;\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n  }\r\n\r\n  .creator-prop-input { \r\n    background-color: #FFCE7E;\r\n  }\r\n}\r\n\r\n.page-structure.light .header {\r\n  background-color: #FFC05A;\r\n}\r\n\r\n.page-structure.light .creator-prop-input {\r\n  background-color: #FFCE7E;\r\n}\r\n\r\n.page-structure.light *:not(.btn) {\r\n  fill: black;\r\n  stroke: black;\r\n  color: black;\r\n}\r\n\r\n.page-structure.light .sidebar {\r\n  background-color: #FFCE7E;\r\n}\r\n\r\n.page-structure.light .add-creator-container {\r\n  background-color: #F2BF58;\r\n}\r\n\r\n.page-structure.light .head-sec {\r\n  background-color: #FFDA9E;\r\n}\r\n\r\n.page-structure.light .main {\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n.page-structure.light .task:hover {\r\n  background-color: #FFDA9E;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n}\r\n\r\n.page-structure.light::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  * {\r\n    color: white;\r\n  }\r\n\r\n  .add-creator-container {\r\n    background-color: #121212;\r\n  }\r\n\r\n  svg {\r\n    fill: white;\r\n    color: white;\r\n    stroke: white;\r\n  }\r\n\r\n  .header {\r\n    background-color: #0B0909;\r\n  }\r\n\r\n  .sidebar {\r\n    background-color: #0E0E0E;\r\n  }\r\n\r\n  .head-sec {\r\n    background-color: #121212;\r\n  }\r\n\r\n  .main {\r\n    background-color: #1A1A1A;\r\n  }\r\n\r\n  .task:hover {\r\n    background-color: #121212;\r\n  }\r\n\r\n  ::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n  }\r\n  \r\n  ::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n  }\r\n}\r\n\r\n.page-structure.dark .header {\r\n  background-color: #0B0909;\r\n}\r\n\r\n.page-structure.dark .creator-prop-input {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.page-structure.dark .sidebar {\r\n  background-color: #0E0E0E;\r\n}\r\n\r\n.page-structure.dark .add-creator-container {\r\n  background-color: #121212;\r\n}\r\n\r\n\r\n.page-structure.dark .head-sec {\r\n  background-color: #121212;\r\n}\r\n\r\n.page-structure.dark .main {\r\n  background-color: #1A1A1A;\r\n}\r\n\r\n.page-structure.dark .task:hover {\r\n  background-color: #121212;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n}\r\n\r\n.page-structure.dark::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n.page-structure.dark * {\r\n  fill: white;\r\n}\r\n\r\n.sun, \r\n.moon {\r\n  display: none;\r\n}\r\n\r\n.sun.active,\r\n.moon.active {\r\n  display: block;\r\n}\r\n\r\n.checklist {\r\n  position: relative;\r\n  display: none;\r\n  padding: 60px 60px;\r\n  height: calc(100vh - 330px);\r\n  overflow: auto;\r\n}\r\n\r\n.checklist-btn {\r\n  color: black;\r\n  height: 50px;\r\n  width: 50px;\r\n  font-size: 3rem;\r\n  border-radius: 50%;\r\n  box-shadow: 1px 1px 2px #fff;\r\n  border: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  position: absolute;\r\n  right: 30px;\r\n  top: 20px;\r\n}"],"sourceRoot":""}]);
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

  return {
    select,
    appendTasks,
    appendProject,
    openProjectTask,
    appendInbox,
    appendDone
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
          // todos.forEach((t)=> {
          //   t.addEventListener('click', () => {
          //     console.log(t)
          //   })
          // })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVIQUF3QztBQUNwRiw0Q0FBNEMsdUhBQXdDO0FBQ3BGLDRDQUE0Qyw2SEFBMkM7QUFDdkYsNENBQTRDLDZIQUEyQztBQUN2Riw0Q0FBNEMscUhBQXVDO0FBQ25GLDRDQUE0QyxxSEFBdUM7QUFDbkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLDhEQUE4RCxpQkFBaUIsZ0JBQWdCLDZCQUE2Qix1QkFBdUIsTUFBTSxjQUFjLG1CQUFtQix1QkFBdUIsS0FBSyxXQUFXLDRCQUE0QixLQUFLLHlCQUF5QixvQkFBb0IsdUNBQXVDLCtGQUErRixtQkFBbUIsS0FBSyx3QkFBd0Isa0JBQWtCLG1CQUFtQixzQkFBc0IsS0FBSyxxQ0FBcUMsb0JBQW9CLHFDQUFxQywwQkFBMEIsbUJBQW1CLHNCQUFzQix3QkFBd0IsS0FBSyxlQUFlLHVCQUF1QixLQUFLLG9CQUFvQixvQkFBb0IsZ0JBQWdCLEtBQUssbUNBQW1DLGlDQUFpQyx5QkFBeUIsS0FBSywrQkFBK0IsZ0NBQWdDLG9CQUFvQixLQUFLLG1DQUFtQyxzQkFBc0IseUJBQXlCLEtBQUssbURBQW1ELCtEQUErRCw0QkFBNEIsa0JBQWtCLG1CQUFtQix5QkFBeUIseUJBQXlCLGVBQWUsS0FBSyxvREFBb0QsK0RBQStELDRCQUE0QixrQkFBa0IsbUJBQW1CLHlCQUF5Qix5QkFBeUIsZUFBZSxLQUFLLGlCQUFpQixvQkFBb0IsZ0JBQWdCLEtBQUssb0JBQW9CLDBCQUEwQixzQkFBc0IsS0FBSywrREFBK0QsK0RBQStELEtBQUssK0RBQStELCtEQUErRCxLQUFLLCtEQUErRCwrREFBK0QsS0FBSyw4REFBOEQsK0RBQStELEtBQUssOERBQThELCtEQUErRCxLQUFLLDhEQUE4RCwrREFBK0QsS0FBSyw0QkFBNEIsa0JBQWtCLG1CQUFtQiw0QkFBNEIsNkJBQTZCLHlCQUF5QixLQUFLLHFDQUFxQyw2QkFBNkIsS0FBSyxzQkFBc0Isd0JBQXdCLDBCQUEwQixLQUFLLHNCQUFzQiwwQkFBMEIsc0JBQXNCLDBCQUEwQix1QkFBdUIsS0FBSyxtREFBbUQsK0RBQStELGtCQUFrQixtQkFBbUIsNEJBQTRCLDZCQUE2Qix5QkFBeUIsS0FBSyxvREFBb0QsK0RBQStELGtCQUFrQixtQkFBbUIsNEJBQTRCLDZCQUE2Qix5QkFBeUIsS0FBSyw2QkFBNkIsc0JBQXNCLEtBQUssbUJBQW1CLG9CQUFvQiwwQkFBMEIseUJBQXlCLEtBQUssZUFBZSx5QkFBeUIsc0JBQXNCLEtBQUssaUJBQWlCLHNCQUFzQix5QkFBeUIsS0FBSyxvQkFBb0IseUJBQXlCLGtDQUFrQyxxQkFBcUIsS0FBSyxlQUFlLG9CQUFvQixxQ0FBcUMsc0JBQXNCLDBCQUEwQixvQkFBb0IsMEJBQTBCLEtBQUsscUJBQXFCLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLHlCQUF5QixLQUFLLG1CQUFtQix5QkFBeUIsb0JBQW9CLEtBQUssMkJBQTJCLG9CQUFvQiwwQkFBMEIseUJBQXlCLEtBQUssbUNBQW1DLGtCQUFrQixrQkFBa0IsbUJBQW1CLHlCQUF5Qiw0QkFBNEIseUJBQXlCLGdCQUFnQixLQUFLLDJDQUEyQyxvQkFBb0Isb0JBQW9CLDBCQUEwQix1QkFBdUIsMEJBQTBCLEtBQUssd0JBQXdCLGtCQUFrQixtQkFBbUIseUJBQXlCLEtBQUssNEJBQTRCLGlDQUFpQyxLQUFLLGlDQUFpQyxpQ0FBaUMsS0FBSyw2QkFBNkIsOEJBQThCLEtBQUssNkJBQTZCLGtCQUFrQixLQUFLLGdEQUFnRCx5QkFBeUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsa0JBQWtCLG9CQUFvQix1Q0FBdUMsS0FBSyxnQ0FBZ0MsbUJBQW1CLG9CQUFvQiwwQkFBMEIsK0NBQStDLEtBQUssd0JBQXdCLGlCQUFpQixtQkFBbUIsMkJBQTJCLHdCQUF3QixvQkFBb0IsMEJBQTBCLG1CQUFtQixzQkFBc0IsbUJBQW1CLEtBQUssNkJBQTZCLG9CQUFvQiwwQkFBMEIsb0NBQW9DLGtCQUFrQixLQUFLLDZCQUE2QixtQkFBbUIsbUJBQW1CLDBCQUEwQiw2QkFBNkIsd0JBQXdCLG1CQUFtQixvQkFBb0IsMEJBQTBCLEtBQUssZUFBZSxrQkFBa0IsbUJBQW1CLHNCQUFzQixLQUFLLGNBQWMsbUJBQW1CLHdCQUF3QiwwQkFBMEIsMEJBQTBCLHNCQUFzQixtQkFBbUIsS0FBSyw4RUFBOEUsa0JBQWtCLG1CQUFtQiwwQkFBMEIsNkJBQTZCLG1CQUFtQixtQkFBbUIsb0JBQW9CLEtBQUssMERBQTBELG1CQUFtQixLQUFLLDBDQUEwQyxvQkFBb0IsbUJBQW1CLEtBQUssNkNBQTZDLG9CQUFvQixxQ0FBcUMsbUJBQW1CLG9CQUFvQixxQkFBcUIsc0JBQXNCLEtBQUsscUJBQXFCLHNCQUFzQixLQUFLLDZDQUE2QyxnQ0FBZ0MsS0FBSyw4Q0FBOEMsZ0NBQWdDLEtBQUssdUJBQXVCLG9CQUFvQiw2Q0FBNkMscUNBQXFDLDBCQUEwQixnQkFBZ0Isb0JBQW9CLEtBQUsseUJBQXlCLGdDQUFnQyxLQUFLLDBEQUEwRCxvQkFBb0IsS0FBSyxnQkFBZ0Isc0JBQXNCLEtBQUssNEJBQTRCLG9CQUFvQiw0Q0FBNEMsOEJBQThCLEtBQUssa0VBQWtFLG1CQUFtQixvQkFBb0IsbUJBQW1CLHVCQUF1QixtQkFBbUIsS0FBSyxtQ0FBbUMsbUJBQW1CLHVCQUF1QixtQkFBbUIsb0JBQW9CLDBCQUEwQixtQkFBbUIsS0FBSywwQ0FBMEMsbUJBQW1CLEtBQUssa0NBQWtDLDBCQUEwQixLQUFLLGtDQUFrQyx3QkFBd0IsS0FBSyxvRUFBb0UseUJBQXlCLEtBQUssd0JBQXdCLG9CQUFvQiwwQkFBMEIscUNBQXFDLDBCQUEwQixLQUFLLG9DQUFvQyxxQkFBcUIsS0FBSyx3Q0FBd0MscUJBQXFCLEtBQUssb0JBQW9CLHFCQUFxQixvQkFBb0IsS0FBSyw2QkFBNkIsb0JBQW9CLEtBQUssOENBQThDLFNBQVMscUJBQXFCLE9BQU8sZUFBZSxvQkFBb0Isc0JBQXNCLHFCQUFxQixPQUFPLGtDQUFrQyxrQ0FBa0MsT0FBTyxtQkFBbUIsa0NBQWtDLE9BQU8sb0JBQW9CLGtDQUFrQyxPQUFPLHFCQUFxQixrQ0FBa0MsT0FBTyxpQkFBaUIsa0NBQWtDLE9BQU8sdUJBQXVCLGtDQUFrQyxPQUFPLHFDQUFxQyw0QkFBNEIsT0FBTyx1Q0FBdUMseUJBQXlCLE9BQU8sNkNBQTZDLHlCQUF5QixPQUFPLGdDQUFnQyxrQ0FBa0MsT0FBTyxLQUFLLHVDQUF1QyxnQ0FBZ0MsS0FBSyxtREFBbUQsZ0NBQWdDLEtBQUssMkNBQTJDLGtCQUFrQixvQkFBb0IsbUJBQW1CLEtBQUssd0NBQXdDLGdDQUFnQyxLQUFLLHNEQUFzRCxnQ0FBZ0MsS0FBSyx5Q0FBeUMsZ0NBQWdDLEtBQUsscUNBQXFDLGdDQUFnQyxLQUFLLDJDQUEyQyxnQ0FBZ0MsS0FBSyx3REFBd0QsMEJBQTBCLEtBQUssd0RBQXdELHVCQUF1QixLQUFLLDhEQUE4RCx1QkFBdUIsS0FBSyxpREFBaUQsU0FBUyxxQkFBcUIsT0FBTyxrQ0FBa0Msa0NBQWtDLE9BQU8sZUFBZSxvQkFBb0IscUJBQXFCLHNCQUFzQixPQUFPLG1CQUFtQixrQ0FBa0MsT0FBTyxvQkFBb0Isa0NBQWtDLE9BQU8scUJBQXFCLGtDQUFrQyxPQUFPLGlCQUFpQixrQ0FBa0MsT0FBTyx1QkFBdUIsa0NBQWtDLE9BQU8scUNBQXFDLDRCQUE0QixPQUFPLHVDQUF1Qyx5QkFBeUIsT0FBTyw2Q0FBNkMseUJBQXlCLE9BQU8sS0FBSyxzQ0FBc0MsZ0NBQWdDLEtBQUssa0RBQWtELGdDQUFnQyxLQUFLLHVDQUF1QyxnQ0FBZ0MsS0FBSyxxREFBcUQsZ0NBQWdDLEtBQUssNENBQTRDLGdDQUFnQyxLQUFLLG9DQUFvQyxnQ0FBZ0MsS0FBSywwQ0FBMEMsZ0NBQWdDLEtBQUssdURBQXVELDBCQUEwQixLQUFLLHVEQUF1RCx1QkFBdUIsS0FBSyw2REFBNkQsdUJBQXVCLEtBQUssZ0NBQWdDLGtCQUFrQixLQUFLLHlCQUF5QixvQkFBb0IsS0FBSyxzQ0FBc0MscUJBQXFCLEtBQUssb0JBQW9CLHlCQUF5QixvQkFBb0IseUJBQXlCLGtDQUFrQyxxQkFBcUIsS0FBSyx3QkFBd0IsbUJBQW1CLG1CQUFtQixrQkFBa0Isc0JBQXNCLHlCQUF5QixtQ0FBbUMsbUJBQW1CLG9CQUFvQiwwQkFBMEIsOEJBQThCLHNCQUFzQix5QkFBeUIsa0JBQWtCLGdCQUFnQixLQUFLLE9BQU8scUZBQXFGLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFFBQVEsVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxVQUFVLEtBQUssWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFL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RUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL1EzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBb0M7QUFDTTtBQUNEO0FBQ0w7QUFDcEM7QUFDQTtBQUNxQjtBQUNyQjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wdWJTdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2luYm94LXdoaXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL2luYm94LWJsYWNrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nL2NhbGVuZGFyLWJsYWNrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1nL2NhbGVuZGFyLXdoaXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaW1nL3BsdXMtd2hpdGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9pbWcvcGx1cy1ibGFjay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdlbmVyYWwgKi9cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59IFxcclxcblxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCA0ZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcclxcbiAgXFxcInNpZGViYXIgbWFpblxcXCJcXHJcXG4gIFxcXCJzaWRlYmFyIG1haW5cXFwiO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5zdmc6bm90KC5sb2dvKSB7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogSGVhZGVyICovXFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogODFweDtcXHJcXG4gIHBhZGRpbmc6IDAgMzBweDtcXHJcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBtYXJnaW4tbGVmdDogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIFNpZGViYXIgKi9cXHJcXG4uc2lkZWJhciB7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MXB4KTtcXHJcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogSW5ib3ggKi9cXHJcXG4uaW5ib3gge1xcclxcbiAgcGFkZGluZzogMjBweCAwIDMwcHggNDhweDtcXHJcXG4gIGhlaWdodDogMTU2cHg7XFxyXFxufVxcclxcblxcclxcbi5pbmJveC10aXRsZSwgLmRvbmUtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAuaW5ib3gtdGl0bGU6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5pbmJveC10aXRsZTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYgdWwgbGkge1xcclxcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5uYXYgdWwgbGk6bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5uYXYgdWwgbGk6bnRoLWNoaWxkKDIpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5uYXYgdWwgbGk6bnRoLWNoaWxkKDMpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLm5hdiB1bCBsaTpudGgtY2hpbGQoMSk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAubmF2IHVsIGxpOm50aC1jaGlsZCgyKTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5uYXYgdWwgbGk6bnRoLWNoaWxkKDMpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB1bCBsaTo6YmVmb3JlIHtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUHJvamVjdHMgKi9cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgcGFkZGluZzogMjBweCAwIDAgNDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLmFkZC1wcm9qZWN0OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5hZGQtcHJvamVjdDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gKi9cXHJcXG4ubWFpbiB7XFxyXFxuICBncmlkLWFyZWE6IG1haW47XFxyXFxufVxcclxcblxcclxcbi5oZWFkLXNlYyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHggNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZSBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtdmlldyB7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDU1cHg7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxODBweCk7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3ggKyBsYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94ICsgbGFiZWw6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3g6Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJ29rJztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDRweDtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1pY29uIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaWNvbi5sb3cge1xcclxcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1pY29uLm1vZGVyYXRlIHtcXHJcXG4gIGJvcmRlcjogMi41cHggc29saWQgb3JhbmdlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaWNvbi5oaWdoIHtcXHJcXG4gIGJvcmRlcjogMi41cHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBZGQgY29udGFpbmVyICovXFxyXFxuLmFkZC1jcmVhdG9yLWJnIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC42KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jcmVhdG9yLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogODEwcHg7XFxyXFxuICBoZWlnaHQ6IDEyNnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGJveC1zaGFkb3c6MXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAuNCk7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdG9yLWlucHV0IHtcXHJcXG4gIHdpZHRoOiA5NCU7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMjBweCAyNXB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdG9yLXByb3BlcnRpZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRvci1wcm9wLWlucHV0IHtcXHJcXG4gIHdpZHRoOiAyMzRweDtcXHJcXG4gIGhlaWdodDogMzRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LXNlbGVjdCwgLm5vdGVzLCAuZGVzYywgLmRhdGVJbnB1dCwgLnRpbWUsIC5wcm9qZWN0cy1zZWxlY3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1zZWxlY3Qgb3B0aW9uLCAucHJvamVjdHMtc2VsZWN0IG9wdGlvbiB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5ub3RlcywgLmRlc2MsIC5kYXRlSW5wdXQsIC50aW1lIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIHByb2plY3QgY29udGFpbmVyICovXFxyXFxuLnByb2plY3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW46IDE1cHggMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaDEge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAucHJvamVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLnByb2plY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyQkY1ODtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IDQwMHB4IDM1cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFycm93LWJhY2t3YXJkIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi8qIGRldGFpbHMgY29udGFpbmVyICovXFxyXFxuLmRldGFpbHMtcHJvamVjdC10YXNrIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgaW5wdXQsXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIHRleHRhcmVhIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA2cHggOHB4O1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgc2VsZWN0IHtcXHJcXG4gIHdpZHRoOiAxODVweDtcXHJcXG4gIHBhZGRpbmc6IDVweCA4cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIHNlbGVjdCBvcHRpb24ge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgaW5wdXQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIGxhYmVsIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgZGl2Om50aC1jaGlsZCgxKSBkaXY6bnRoLWNoaWxkKDIpIGxhYmVsIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24sXFxyXFxuLmRlYWRsaW5lIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktZGl2LFxcclxcbi5pcy1maW5pc2hlZCB7XFxyXFxuICBncmlkLWNvbHVtbjogMjtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGVzLWRpdiB7XFxyXFxuICBncmlkLWNvbHVtbjogMztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5ub3Rlcy1kaXYgdGV4dGFyZWEge1xcclxcbiAgaGVpZ2h0OiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpIHtcXHJcXG4gICoge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzdmcge1xcclxcbiAgICBmaWxsOiBibGFjaztcXHJcXG4gICAgc3Ryb2tlOiBibGFjaztcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZC1jcmVhdG9yLWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMwNUE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzA1QTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaWRlYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0U3RTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkLXNlYyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRBOUU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM4ODg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNyZWF0b3ItcHJvcC1pbnB1dCB7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDRTdFO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMDVBO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLmNyZWF0b3ItcHJvcC1pbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDRTdFO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgKjpub3QoLmJ0bikge1xcclxcbiAgZmlsbDogYmxhY2s7XFxyXFxuICBzdHJva2U6IGJsYWNrO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLnNpZGViYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0U3RTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5hZGQtY3JlYXRvci1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyQkY1ODtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5oZWFkLXNlYyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEQTlFO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLm1haW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC50YXNrOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkRBOUU7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjODg4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM1NTU7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXHJcXG4gICoge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkLWNyZWF0b3ItY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHN2ZyB7XFxyXFxuICAgIGZpbGw6IHdoaXRlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHN0cm9rZTogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBCMDkwOTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaWRlYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBFMEUwRTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkLXNlYyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM4ODg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwQjA5MDk7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5jcmVhdG9yLXByb3AtaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLnNpZGViYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBFMEUwRTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLmFkZC1jcmVhdG9yLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAuaGVhZC1zZWMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLm1haW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLnRhc2s6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcms6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjODg4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyazo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgKiB7XFxyXFxuICBmaWxsOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1biwgXFxyXFxuLm1vb24ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bi5hY3RpdmUsXFxyXFxuLm1vb24uYWN0aXZlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tsaXN0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA2MHB4IDYwcHg7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMzBweCk7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbGlzdC1idG4ge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAjZmZmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAzMHB4O1xcclxcbiAgdG9wOiAyMHB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJd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O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR2VuZXJhbCAqL1xcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn0gXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDRmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxyXFxuICBcXFwic2lkZWJhciBtYWluXFxcIlxcclxcbiAgXFxcInNpZGViYXIgbWFpblxcXCI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbnN2Zzpub3QoLmxvZ28pIHtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBIZWFkZXIgKi9cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA4MXB4O1xcclxcbiAgcGFkZGluZzogMCAzMHB4O1xcclxcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2lkZWJhciAqL1xcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDgxcHgpO1xcclxcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbmJveCAqL1xcclxcbi5pbmJveCB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDAgMzBweCA0OHB4O1xcclxcbiAgaGVpZ2h0OiAxNTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmluYm94LXRpdGxlLCAuZG9uZS10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5pbmJveC10aXRsZTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi9pbWcvaW5ib3gtd2hpdGUuc3ZnXFxcIik7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLmluYm94LXRpdGxlOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuL2ltZy9pbmJveC1ibGFjay5zdmdcXFwiKTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYgdWwge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB1bCBsaSB7XFxyXFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLm5hdiB1bCBsaTpudGgtY2hpbGQoMSk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vaW1nL2luYm94LWJsYWNrLnN2Z1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLm5hdiB1bCBsaTpudGgtY2hpbGQoMik6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vaW1nL2NhbGVuZGFyLWJsYWNrLnN2Z1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLm5hdiB1bCBsaTpudGgtY2hpbGQoMyk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vaW1nL2NhbGVuZGFyLWJsYWNrLnN2Z1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAubmF2IHVsIGxpOm50aC1jaGlsZCgxKTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcXFwiLi9pbWcvaW5ib3gtd2hpdGUuc3ZnXFxcIik7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5uYXYgdWwgbGk6bnRoLWNoaWxkKDIpOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuL2ltZy9jYWxlbmRhci13aGl0ZS5zdmdcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLm5hdiB1bCBsaTpudGgtY2hpbGQoMyk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vaW1nL2NhbGVuZGFyLXdoaXRlLnN2Z1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHVsIGxpOjpiZWZvcmUge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQcm9qZWN0cyAqL1xcclxcbi5wcm9qZWN0cyB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDAgMCA0OHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMgaDIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3Qge1xcclxcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAuYWRkLXByb2plY3Q6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoJy4vaW1nL3BsdXMtd2hpdGUuc3ZnJyk7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodCAuYWRkLXByb2plY3Q6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiB1cmwoJy4vaW1nL3BsdXMtYmxhY2suc3ZnJyk7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gKi9cXHJcXG4ubWFpbiB7XFxyXFxuICBncmlkLWFyZWE6IG1haW47XFxyXFxufVxcclxcblxcclxcbi5oZWFkLXNlYyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHggNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZSBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtdmlldyB7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDU1cHg7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxODBweCk7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3ggKyBsYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94ICsgbGFiZWw6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3g6Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJ29rJztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDRweDtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1pY29uIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaWNvbi5sb3cge1xcclxcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1pY29uLm1vZGVyYXRlIHtcXHJcXG4gIGJvcmRlcjogMi41cHggc29saWQgb3JhbmdlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaWNvbi5oaWdoIHtcXHJcXG4gIGJvcmRlcjogMi41cHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBZGQgY29udGFpbmVyICovXFxyXFxuLmFkZC1jcmVhdG9yLWJnIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC42KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jcmVhdG9yLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogODEwcHg7XFxyXFxuICBoZWlnaHQ6IDEyNnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGJveC1zaGFkb3c6MXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAuNCk7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdG9yLWlucHV0IHtcXHJcXG4gIHdpZHRoOiA5NCU7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMjBweCAyNXB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdG9yLXByb3BlcnRpZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRvci1wcm9wLWlucHV0IHtcXHJcXG4gIHdpZHRoOiAyMzRweDtcXHJcXG4gIGhlaWdodDogMzRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LXNlbGVjdCwgLm5vdGVzLCAuZGVzYywgLmRhdGVJbnB1dCwgLnRpbWUsIC5wcm9qZWN0cy1zZWxlY3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1zZWxlY3Qgb3B0aW9uLCAucHJvamVjdHMtc2VsZWN0IG9wdGlvbiB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5ub3RlcywgLmRlc2MsIC5kYXRlSW5wdXQsIC50aW1lIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIHByb2plY3QgY29udGFpbmVyICovXFxyXFxuLnByb2plY3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW46IDE1cHggMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaDEge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAucHJvamVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUExQTFBO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLnByb2plY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyQkY1ODtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IDQwMHB4IDM1cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFycm93LWJhY2t3YXJkIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi8qIGRldGFpbHMgY29udGFpbmVyICovXFxyXFxuLmRldGFpbHMtcHJvamVjdC10YXNrIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgaW5wdXQsXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIHRleHRhcmVhIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA2cHggOHB4O1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgc2VsZWN0IHtcXHJcXG4gIHdpZHRoOiAxODVweDtcXHJcXG4gIHBhZGRpbmc6IDVweCA4cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIHNlbGVjdCBvcHRpb24ge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgaW5wdXQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIGxhYmVsIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIgZGl2Om50aC1jaGlsZCgxKSBkaXY6bnRoLWNoaWxkKDIpIGxhYmVsIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24sXFxyXFxuLmRlYWRsaW5lIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktZGl2LFxcclxcbi5pcy1maW5pc2hlZCB7XFxyXFxuICBncmlkLWNvbHVtbjogMjtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdGVzLWRpdiB7XFxyXFxuICBncmlkLWNvbHVtbjogMztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5ub3Rlcy1kaXYgdGV4dGFyZWEge1xcclxcbiAgaGVpZ2h0OiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpIHtcXHJcXG4gICoge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzdmcge1xcclxcbiAgICBmaWxsOiBibGFjaztcXHJcXG4gICAgc3Ryb2tlOiBibGFjaztcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZC1jcmVhdG9yLWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMwNUE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzA1QTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaWRlYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0U3RTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkLXNlYyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRBOUU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM4ODg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNyZWF0b3ItcHJvcC1pbnB1dCB7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDRTdFO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMDVBO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLmNyZWF0b3ItcHJvcC1pbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDRTdFO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgKjpub3QoLmJ0bikge1xcclxcbiAgZmlsbDogYmxhY2s7XFxyXFxuICBzdHJva2U6IGJsYWNrO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLnNpZGViYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0U3RTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5hZGQtY3JlYXRvci1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyQkY1ODtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC5oZWFkLXNlYyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEQTlFO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQgLm1haW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0IC50YXNrOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkRBOUU7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5saWdodDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmxpZ2h0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjODg4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUubGlnaHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM1NTU7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXHJcXG4gICoge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkLWNyZWF0b3ItY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHN2ZyB7XFxyXFxuICAgIGZpbGw6IHdoaXRlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHN0cm9rZTogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBCMDkwOTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaWRlYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBFMEUwRTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkLXNlYyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFzazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM4ODg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwQjA5MDk7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrIC5jcmVhdG9yLXByb3AtaW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLnNpZGViYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBFMEUwRTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLmFkZC1jcmVhdG9yLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyayAuaGVhZC1zZWMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLm1haW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgLnRhc2s6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcms6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLXN0cnVjdHVyZS5kYXJrOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjODg4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1zdHJ1Y3R1cmUuZGFyazo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Utc3RydWN0dXJlLmRhcmsgKiB7XFxyXFxuICBmaWxsOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1biwgXFxyXFxuLm1vb24ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bi5hY3RpdmUsXFxyXFxuLm1vb24uYWN0aXZlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tsaXN0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA2MHB4IDYwcHg7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMzBweCk7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbGlzdC1idG4ge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAjZmZmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAzMHB4O1xcclxcbiAgdG9wOiAyMHB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHRhc2sgZnJvbSAnLi90YXNrLmpzJztcclxuaW1wb3J0IHByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcclxuaW1wb3J0IGV2ZW50cyBmcm9tICcuL3B1YlN1Yi5qcyc7XHJcbmltcG9ydCBkb20gZnJvbSAnLi9kb20uanMnO1xyXG5pbXBvcnQgZGF0ZSBmcm9tICcuL2RhdGUuanMnO1xyXG5pbXBvcnQgY3JlYXRvciBmcm9tICcuL2NyZWF0b3IuanMnO1xyXG5cclxuY29uc3QgYXBwSGFuZGxlciA9IChmdW5jdGlvbigpIHtcclxuICAvLyBmaWx0ZXIgYXJyYXkgYnkgZGF0ZVxyXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnZnVsbERhdGUnLCBldmVudHMuZXZlbnRzLCAoZGF0ZSkgPT4ge1xyXG4gICAgICBmdW5jdGlvbiBpc0R1ZURhdGUodGFzaykge1xyXG4gICAgICAgIHJldHVybiB0YXNrLmR1ZURhdGUgPT09IGRhdGUgJiYgdGFzay5pc0NvbXBsZXRlID09PSBmYWxzZVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGZ1bmN0aW9uIGZpbHRlckRhdGUoKSB7XHJcbiAgICAgICAgZG9tLnNlbGVjdC50YXNrc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBkb20uc2VsZWN0LmNoZWNrbGlzdERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSB0YXNrLnRhc2tzLmZpbHRlcihpc0R1ZURhdGUpO1xyXG4gICAgICAgIGNyZWF0b3IuY3JlYXRvci5jcmVhdG9yQmcucmVtb3ZlKCk7XHJcbiAgICAgICAgaWYoZGF0ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBkb20uc2VsZWN0LnRhc2tzQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICBmb3IobGV0IHRhc2tzIG9mIGRhdGUpIHtcclxuICAgICAgICAgICAgZG9tLmFwcGVuZFRhc2tzKHRhc2tzLnRpdGxlLCB0YXNrcy5wcmlvcml0eSwgdGFza3MucHJvamVjdCwgZG9tLnNlbGVjdC50YXNrc0NvbnRhaW5lcik7XHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvbS5zZWxlY3QudGFza3NDb250YWluZXIudGV4dENvbnRlbnQgPSBcIllvdSBkb24ndCBoYXZlIGFueSB0YXNrIGZvciB0b2RheS5cIlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZmlsdGVyRGF0ZSgpXHJcbiAgICB9KVxyXG5cclxuICAvLyBmaWx0ZXIgYXJyYXkgdG8gZmluZCBpbmJveCB0YXNrcy8gb3IgdGFza3Mgd2l0aG91dCBwcm9qZWN0c1xyXG4gIGZ1bmN0aW9uIGlzSW5ib3godGFzaykge1xyXG4gICAgcmV0dXJuIHRhc2sucHJvamVjdCA9PT0gJ0luYm94JyAmJiB0YXNrLmlzQ29tcGxldGUgPT09IGZhbHNlXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaWx0ZXJJbmJveCgpIHtcclxuICAgIGNvbnN0IGluYm94ID0gdGFzay50YXNrcy5maWx0ZXIoaXNJbmJveCk7XHJcbiAgICAgICBkb20uc2VsZWN0LnRhc2tzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBkb20uc2VsZWN0LmNoZWNrbGlzdERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZG9tLmFwcGVuZEluYm94KCk7XHJcbiAgICBpZihpbmJveC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGRvbS5zZWxlY3QudGFza3NDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgZm9yKGxldCB0YXNrcyBvZiBpbmJveCkge1xyXG4gICAgICAgIGRvbS5hcHBlbmRUYXNrcyh0YXNrcy50aXRsZSwgdGFza3MucHJpb3JpdHksIHRhc2tzLnByb2plY3QsIGRvbS5zZWxlY3QudGFza3NDb250YWluZXIpO1xyXG4gICAgICB9IFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb20uc2VsZWN0LnRhc2tzQ29udGFpbmVyLnRleHRDb250ZW50ID0gJ1lvdXIgaW5ib3ggaXMgY2xlYW4uJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9tLnNlbGVjdC5pbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZpbHRlckluYm94KTtcclxuXHJcbiAgZnVuY3Rpb24gaXNEb25lKHRhc2spIHtcclxuICAgIHJldHVybiB0YXNrLmlzQ29tcGxldGUgPT09IHRydWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaWx0ZXJEb25lVGFza3MoKSB7XHJcbiAgICBjb25zdCBkb25lID0gdGFzay50YXNrcy5maWx0ZXIoaXNEb25lKTtcclxuICAgIGRvbS5hcHBlbmREb25lKCk7XHJcbiAgICBpZihkb25lLmxlbmd0aCA+IDApIHtcclxuICAgICAgZG9tLnNlbGVjdC50YXNrc0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICBmb3IobGV0IHRhc2tzIG9mIGRvbmUpIHtcclxuICAgICAgICBkb20uYXBwZW5kVGFza3ModGFza3MudGl0bGUsIHRhc2tzLnByaW9yaXR5LCB0YXNrcy5wcm9qZWN0LCBkb20uc2VsZWN0LnRhc2tzQ29udGFpbmVyKTtcclxuICAgICAgfSBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9tLnNlbGVjdC50YXNrc0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiWW91IGRvbid0IGhhdmUgYW55IHRhc2sgZmluaXNoZWRcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvbS5zZWxlY3QuZG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZpbHRlckRvbmVUYXNrcylcclxuICBcclxuXHJcbiAgcmV0dXJuIHtmaWx0ZXJJbmJveH1cclxufSkoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwSGFuZGxlcjsiLCJpbXBvcnQgbm90ZXNXaGl0ZSBmcm9tICcuL2ltZy9ub3Rlcy13aGl0ZS5zdmcnO1xyXG5pbXBvcnQgZGVzY1doaXRlIGZyb20gJy4vaW1nL2Rlc2NyaXB0aW9uLXdoaXRlLnN2Zyc7XHJcbmltcG9ydCBwcm9qZWN0V2hpdGUgZnJvbSAnLi9pbWcvcHJvamVjdC13aGl0ZS5zdmcnO1xyXG5pbXBvcnQgY2FsZW5kYXJXaGl0ZSBmcm9tICcuL2ltZy9jYWxlbmRhci13aGl0ZS5zdmcnO1xyXG5pbXBvcnQgZmxhZ1doaXRlIGZyb20gJy4vaW1nL2ZsYWctd2hpdGUuc3ZnJztcclxuaW1wb3J0IGNoZWNrbGlzdFdoaXRlIGZyb20gJy4vaW1nL2NoZWNrbGlzdC13aGl0ZS5zdmcnO1xyXG5pbXBvcnQgbm90ZXNCbGFjayBmcm9tICcuL2ltZy9ub3Rlcy1ibGFjay5zdmcnO1xyXG5pbXBvcnQgZGVzY0JsYWNrIGZyb20gJy4vaW1nL2Rlc2NyaXB0aW9uLWJsYWNrLnN2Zyc7XHJcbmltcG9ydCBwcm9qZWN0QmxhY2sgZnJvbSAnLi9pbWcvcHJvamVjdC1ibGFjay5zdmcnO1xyXG5pbXBvcnQgY2FsZW5kYXJCbGFjayBmcm9tICcuL2ltZy9jYWxlbmRhcjItYmxhY2suc3ZnJztcclxuaW1wb3J0IGZsYWdCbGFjayBmcm9tICcuL2ltZy9mbGFnLWJsYWNrLnN2Zyc7XHJcbmltcG9ydCBjaGVja2xpc3RCbGFjayBmcm9tICcuL2ltZy9jaGVja2xpc3QtYmxhY2suc3ZnJztcclxuaW1wb3J0IGRvbSBmcm9tICcuL2RvbS5qcyc7XHJcbmltcG9ydCBldmVudHMgZnJvbScuL3B1YlN1Yi5qcyc7XHJcblxyXG5jb25zdCBjcmVhdG9yID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuY29uc3QgY3JlYXRvciA9IHtcclxuICBjcmVhdG9yQmc6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gIGNyZWF0b3JDb250YWluZXI6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gIGlucHV0OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpLFxyXG4gIGNyZWF0b3JQcm9wOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICBjcmVhdG9yUHJvcElucHV0OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICBjYW5jZWxCdG46IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG4gIGFkZEJ0bjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcbiAgbm90ZXM6IG5ldyBJbWFnZSgpLFxyXG4gIGRlc2M6IG5ldyBJbWFnZSgpLFxyXG4gIHByb2plY3Q6IG5ldyBJbWFnZSgpLFxyXG4gIGNhbGVuZGFyOiBuZXcgSW1hZ2UoKSxcclxuICBwcmlvcml0eTogbmV3IEltYWdlKCksXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZENyZWF0b3IgKCkge1xyXG4gIGNyZWF0b3IuY3JlYXRvckJnLmNsYXNzTGlzdC5hZGQoJ2FkZC1jcmVhdG9yLWJnJylcclxuXHJcbiAgY3JlYXRvci5jcmVhdG9yQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZC1jcmVhdG9yLWNvbnRhaW5lcicpO1xyXG5cclxuICBjcmVhdG9yLmlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY3JlYXRvcicpO1xyXG4gIGNyZWF0b3IuaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2NyZWF0b3InKTtcclxuICBjcmVhdG9yLmlucHV0LmNsYXNzTGlzdC5hZGQoJ2NyZWF0b3ItaW5wdXQnKTtcclxuXHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcC5jbGFzc0xpc3QuYWRkKCdjcmVhdG9yLXByb3BlcnRpZXMnKTtcclxuXHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LmNsYXNzTGlzdC5hZGQoJ2NyZWF0b3ItcHJvcC1pbnB1dCcpO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICBpZihkb20uc2VsZWN0LnBhZ2VTdHJ1Y3R1cmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaWdodCcpKSB7XHJcbiAgICBjcmVhdG9yLm5vdGVzLnNyYyA9IG5vdGVzQmxhY2s7XHJcbiAgICBjcmVhdG9yLmRlc2Muc3JjID0gZGVzY0JsYWNrO1xyXG4gICAgY3JlYXRvci5wcm9qZWN0LnNyYyA9IHByb2plY3RCbGFjaztcclxuICAgIGNyZWF0b3IuY2FsZW5kYXIuc3JjID0gY2FsZW5kYXJCbGFjaztcclxuICAgIGNyZWF0b3IucHJpb3JpdHkuc3JjID0gZmxhZ0JsYWNrO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAgIGNyZWF0b3Iubm90ZXMuc3JjID0gbm90ZXNXaGl0ZTtcclxuICAgICAgY3JlYXRvci5kZXNjLnNyYyA9IGRlc2NXaGl0ZTtcclxuICAgICAgY3JlYXRvci5wcm9qZWN0LnNyYyA9IHByb2plY3RXaGl0ZTtcclxuICAgICAgY3JlYXRvci5jYWxlbmRhci5zcmMgPSBjYWxlbmRhcldoaXRlO1xyXG4gICAgICBjcmVhdG9yLnByaW9yaXR5LnNyYyA9IGZsYWdXaGl0ZTtcclxuICB9XHJcblxyXG4gIGNyZWF0b3IuY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICBjcmVhdG9yLmNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gIGNyZWF0b3IuY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG4gIGNyZWF0b3IuY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbCcpO1xyXG5cclxuICBjcmVhdG9yLmFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgY3JlYXRvci5hZGRCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSc7XHJcbiAgY3JlYXRvci5hZGRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgY3JlYXRvci5hZGRCdG4uY2xhc3NMaXN0LmFkZCgnYWRkJyk7XHJcbiAgXHJcbiAgY3JlYXRvci5ub3Rlcy5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XHJcbiAgY3JlYXRvci5ub3Rlcy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdub3RlcycpO1xyXG5cclxuICBjcmVhdG9yLmRlc2MuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG4gIGNyZWF0b3IuZGVzYy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdkZXNjJyk7XHJcblxyXG4gIGNyZWF0b3IucHJvamVjdC5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XHJcbiAgY3JlYXRvci5wcm9qZWN0LnNldEF0dHJpYnV0ZSgnYWx0JywgJ3Byb2plY3QnKTtcclxuXHJcbiAgY3JlYXRvci5jYWxlbmRhci5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XHJcbiAgY3JlYXRvci5jYWxlbmRhci5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdjYWxlbmRhcicpO1xyXG5cclxuICBjcmVhdG9yLnByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuICBjcmVhdG9yLnByaW9yaXR5LnNldEF0dHJpYnV0ZSgnYWx0JywgJ3ByaW9yaXR5Jyk7XHJcblxyXG4gIGNyZWF0b3IuY3JlYXRvclByb3AuYXBwZW5kKGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dCwgY3JlYXRvci5kZXNjLCBjcmVhdG9yLmNhbGVuZGFyLCBjcmVhdG9yLnByaW9yaXR5LCAgY3JlYXRvci5ub3RlcywgY3JlYXRvci5wcm9qZWN0LCBjcmVhdG9yLmNhbmNlbEJ0biwgY3JlYXRvci5hZGRCdG4pO1xyXG4gIGNyZWF0b3IuY3JlYXRvckNvbnRhaW5lci5hcHBlbmQoY3JlYXRvci5pbnB1dCwgY3JlYXRvci5jcmVhdG9yUHJvcCk7XHJcbiAgY3JlYXRvci5jcmVhdG9yQmcuYXBwZW5kKGNyZWF0b3IuY3JlYXRvckNvbnRhaW5lcik7XHJcbiAgZG9tLnNlbGVjdC5wYWdlU3RydWN0dXJlLmFwcGVuZChjcmVhdG9yLmNyZWF0b3JCZyk7XHJcbn1cclxuXHJcbmNvbnN0IHByaW9yaXR5ID0ge1xyXG4gIHNlbGVjdDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JyksXHJcbiAgb3B0MDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyksXHJcbiAgb3B0MTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyksXHJcbiAgb3B0MjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyksXHJcbiAgb3B0MzogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyksXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZFByaW9yaXR5KCkge1xyXG4gIHByaW9yaXR5LnNlbGVjdC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1zZWxlY3QnKTtcclxuICBwcmlvcml0eS5vcHQwLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAncHJpb3JpdHknKTtcclxuICBwcmlvcml0eS5vcHQwLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcclxuICBwcmlvcml0eS5vcHQwLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcclxuICBwcmlvcml0eS5vcHQxLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XHJcbiAgcHJpb3JpdHkub3B0MS50ZXh0Q29udGVudCA9ICdMb3cnO1xyXG4gIHByaW9yaXR5Lm9wdDIuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtb2RlcmF0ZScpO1xyXG4gIHByaW9yaXR5Lm9wdDIudGV4dENvbnRlbnQgPSAnTW9kZXJhdGUnO1xyXG4gIHByaW9yaXR5Lm9wdDMuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoJyk7XHJcbiAgcHJpb3JpdHkub3B0My50ZXh0Q29udGVudCA9ICdIaWdoJztcclxuXHJcbiAgcHJpb3JpdHkuc2VsZWN0LmFwcGVuZChwcmlvcml0eS5vcHQxLCBwcmlvcml0eS5vcHQyLCBwcmlvcml0eS5vcHQzLCBwcmlvcml0eS5vcHQwKTtcclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wSW5wdXQudGV4dENvbnRlbnQgPSAnJztcclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wSW5wdXQuYXBwZW5kKHByaW9yaXR5LnNlbGVjdClcclxufVxyXG5cclxuY29uc3QgcHJvamVjdHMgPSB7XHJcbiAgc2VsZWN0OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSxcclxuICBvcHQwOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSxcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kUHJvamVjdHMoKSB7XHJcbiAgcHJvamVjdHMuc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLXNlbGVjdCcpO1xyXG4gIHByb2plY3RzLm9wdDAuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdpbmJveCcpO1xyXG4gIHByb2plY3RzLm9wdDAuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xyXG4gIHByb2plY3RzLm9wdDAudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xyXG5cclxuICBwcm9qZWN0cy5zZWxlY3QuYXBwZW5kKHByb2plY3RzLm9wdDApO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC5hcHBlbmQocHJvamVjdHMuc2VsZWN0KVxyXG59XHJcblxyXG5ldmVudHMuc3Vic2NyaWJlKCdwcm9qZWN0cycsIGV2ZW50cy5ldmVudHMsIChwcm9qZWN0KSA9PiB7XHJcbiAgY29uc3Qgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcm9qZWN0LnRpdGxlKTtcclxuICAgICAgICBvcHQudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xyXG4gIHByb2plY3RzLnNlbGVjdC5hcHBlbmRDaGlsZChvcHQpO1xyXG59KVxyXG5cclxuY29uc3Qgbm90ZXMgPSB7XHJcbiAgdGV4dEFyZWE6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kTm90ZXMoKSB7XHJcbiAgbm90ZXMudGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgnbm90ZXMnKTtcclxuICBub3Rlcy50ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ05vdGVzLi4uJyk7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LmFwcGVuZChub3Rlcy50ZXh0QXJlYSk7XHJcbn1cclxuXHJcbmNvbnN0IGRlc2MgPSB7XHJcbiAgdGV4dEFyZWE6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kRGVzYygpIHtcclxuICBkZXNjLnRleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ2Rlc2MnKTtcclxuICBkZXNjLnRleHRBcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24uLi4gKG1heCA3NWNoKScpO1xyXG4gIGRlc2MudGV4dEFyZWEuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnNzUnKTtcclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wSW5wdXQudGV4dENvbnRlbnQgPSAnJztcclxuICBjcmVhdG9yLmNyZWF0b3JQcm9wSW5wdXQuYXBwZW5kKGRlc2MudGV4dEFyZWEpO1xyXG59XHJcblxyXG5jb25zdCBkdWVEYXRlID0ge1xyXG4gIGRhdGU6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kRHVlRGF0ZSgpIHtcclxuICBkdWVEYXRlLmRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICBkdWVEYXRlLmRhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlJyk7XHJcbiAgZHVlRGF0ZS5kYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJyk7XHJcbiAgZHVlRGF0ZS5kYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGVJbnB1dCcpO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGNyZWF0b3IuY3JlYXRvclByb3BJbnB1dC5hcHBlbmQoZHVlRGF0ZS5kYXRlKTtcclxufVxyXG5cclxuY29uc3QgdGltZSA9IHtcclxuICB0aW1lOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZFRpbWUoKSB7XHJcbiAgdGltZS50aW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0aW1lJyk7XHJcbiAgdGltZS50aW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAndGltZScpO1xyXG4gIHRpbWUudGltZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGltZScpO1xyXG4gIHRpbWUudGltZS5jbGFzc0xpc3QuYWRkKCd0aW1lJyk7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgY3JlYXRvci5jcmVhdG9yUHJvcElucHV0LmFwcGVuZCh0aW1lLnRpbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldENyZWF0b3IoKSB7XHJcbiAgY3JlYXRvci5pbnB1dC52YWx1ZSA9ICcnO1xyXG4gIGRlc2MudGV4dEFyZWEudmFsdWUgPSAnJztcclxuICBub3Rlcy50ZXh0QXJlYS52YWx1ZSA9ICcnO1xyXG4gIGR1ZURhdGUuZGF0ZS52YWx1ZSA9ICcnO1xyXG4gIHRpbWUudGltZS52YWx1ZSA9ICcnO1xyXG4gIHByaW9yaXR5LnNlbGVjdC5zZWxlY3RlZEluZGV4ID0gbnVsbDtcclxuICBwcm9qZWN0cy5zZWxlY3Quc2VsZWN0ZWRJbmRleCA9IG51bGw7XHJcbn1cclxuXHJcbmNyZWF0b3IucHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBlbmRQcmlvcml0eSk7XHJcbmNyZWF0b3Iubm90ZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBlbmROb3Rlcyk7XHJcbmNyZWF0b3IuZGVzYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFwcGVuZERlc2MpO1xyXG5jcmVhdG9yLmNhbGVuZGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwZW5kRHVlRGF0ZSk7XHJcbmNyZWF0b3IucHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFwcGVuZFByb2plY3RzKTtcclxuXHJcbnJldHVybiB7XHJcbiAgY3JlYXRvcixcclxuICBwcmlvcml0eSxcclxuICBkZXNjLFxyXG4gIG5vdGVzLFxyXG4gIGR1ZURhdGUsXHJcbiAgdGltZSxcclxuICByZXNldENyZWF0b3IsXHJcbiAgYXBwZW5kQ3JlYXRvciwgXHJcbiAgcHJvamVjdHNcclxufVxyXG59KSgpXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRvcjsiLCJpbXBvcnQgZG9tIGZyb20gJy4vZG9tLmpzJztcclxuaW1wb3J0IGV2ZW50cyBmcm9tICcuL3B1YlN1Yi5qcyc7XHJcblxyXG5jb25zdCBoYW5kbGVEYXRlcyA9IChmdW5jdGlvbigpIHtcclxuICBjb25zdCBtb250aHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IHRvZGF5ID0gZGF0ZS5nZXRVVENEYXRlKCk7XHJcbiAgICBsZXQgY3VycmVudE1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xyXG4gICAgbGV0IGN1cnJlbnRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xyXG4gICAgbGV0IG1vbnRoID0gbW9udGhzW2N1cnJlbnRNb250aF07XHJcbiAgICBsZXQgZGF0ZVN0cmluZztcclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVEYXlzKG1vbnRoKSB7XHJcbiAgICAgIGxldCBtYXhEYXlzO1xyXG5cclxuICAgICAgaWYgKG1vbnRoID09PSAnRmVicnVhcnknKSB7XHJcbiAgICAgICAgbWF4RGF5cyA9IDI4O1xyXG4gICAgICB9IGVsc2UgaWYobW9udGggPT09ICdBcHJpbCcgfHwgbW9udGggPT09ICdKdW5lJyB8fCBtb250aCA9PT0gJ1NlcHRlbWJlcicgfHwgbW9udGggPT09ICdOb3ZlbWJlcicpIHtcclxuICAgICAgICBtYXhEYXlzID0gMzBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtYXhEYXlzID0gMzFcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICByZXR1cm4gbWF4RGF5c1xyXG4gICAgfVxyXG5cclxuICAgIGRvbS5zZWxlY3QuZGF0ZS50ZXh0Q29udGVudCA9IGAke3RvZGF5fSAke21vbnRofSAke2N1cnJlbnRZZWFyfWA7XHJcbiAgXHJcbiAgICBkb20uc2VsZWN0LmFycm93QmFja3dhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmKHRvZGF5IDwgMikge1xyXG4gICAgICAgIGlmKGN1cnJlbnRNb250aCA9PT0gMCkge1xyXG4gICAgICAgICAgLS1jdXJyZW50WWVhcjtcclxuICAgICAgICAgIGN1cnJlbnRNb250aCA9IDExO1xyXG4gICAgICAgICAgbW9udGggPSBtb250aHNbY3VycmVudE1vbnRoXTtcclxuICAgICAgICAgIGNvbnN0IG1heERheXMgPSBjYWxjdWxhdGVEYXlzKG1vbnRoKTtcclxuICAgICAgICAgIHRvZGF5ID0gbWF4RGF5cyArIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHByZXZpb3VzTW9udGggPSAtLWN1cnJlbnRNb250aDtcclxuICAgICAgICAgICAgbW9udGggPSBtb250aHNbcHJldmlvdXNNb250aF1cclxuICAgICAgICAgICAgY29uc3QgbWF4RGF5cyA9IGNhbGN1bGF0ZURheXMobW9udGgpO1xyXG4gICAgICAgICAgICB0b2RheSA9IG1heERheXMgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0b2RheS0tO1xyXG4gICAgICBkb20uc2VsZWN0LmRhdGUudGV4dENvbnRlbnQgPSBgJHt0b2RheX0gJHttb250aH0gJHtjdXJyZW50WWVhcn1gO1xyXG4gICAgICBkYXRlU3RyaW5nID0gYCR7Y3VycmVudFllYXJ9LSR7KCcwJyArIChjdXJyZW50TW9udGgrMSkpLnNsaWNlKC0yKX0tJHsoJzAnICsgdG9kYXkpLnNsaWNlKC0yKX1gO1xyXG4gICAgICBldmVudHMucHVibGlzaCgnZnVsbERhdGUnLCBkYXRlU3RyaW5nKTtcclxuICAgIH0pXHJcblxyXG4gICAgZG9tLnNlbGVjdC5hcnJvd0ZvcndhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1heERheXMgPSBjYWxjdWxhdGVEYXlzKG1vbnRoKTtcclxuICAgICAgaWYodG9kYXkgPT09IG1heERheXMpIHtcclxuICAgICAgICBpZihjdXJyZW50TW9udGggPT09IDExKSB7XHJcbiAgICAgICAgICArK2N1cnJlbnRZZWFyO1xyXG4gICAgICAgICAgY3VycmVudE1vbnRoID0gMDtcclxuICAgICAgICAgIG1vbnRoID0gbW9udGhzW2N1cnJlbnRNb250aF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBuZXh0TW9udGggPSArK2N1cnJlbnRNb250aDtcclxuICAgICAgICAgIG1vbnRoID0gbW9udGhzW25leHRNb250aF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvZGF5ID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0b2RheSsrO1xyXG4gICAgICBkb20uc2VsZWN0LmRhdGUudGV4dENvbnRlbnQgPSBgJHt0b2RheX0gJHttb250aH0gJHtjdXJyZW50WWVhcn1gO1xyXG4gICAgICBkYXRlU3RyaW5nID0gYCR7Y3VycmVudFllYXJ9LSR7KCcwJyArIChjdXJyZW50TW9udGgrMSkpLnNsaWNlKC0yKX0tJHsoJzAnICsgdG9kYXkpLnNsaWNlKC0yKX1gO1xyXG4gICAgICBldmVudHMucHVibGlzaCgnZnVsbERhdGUnLCBkYXRlU3RyaW5nKTtcclxuICAgIH0pXHJcblxyXG4gICAgZGF0ZVN0cmluZyA9IGAke2N1cnJlbnRZZWFyfS0keygnMCcgKyAoY3VycmVudE1vbnRoKzEpKS5zbGljZSgtMil9LSR7KCcwJyArIHRvZGF5KS5zbGljZSgtMil9YDtcclxuICAgIFxyXG4gICAgZXZlbnRzLnB1Ymxpc2goJ2Z1bGxEYXRlJywgZGF0ZVN0cmluZyk7XHJcblxyXG4gICAgZXZlbnRzLnN1YnNjcmliZSgndGFza3MnLCBldmVudHMuZXZlbnRzLCAoKSA9PiB7XHJcbiAgICAgIGV2ZW50cy5wdWJsaXNoKCdmdWxsRGF0ZScsIGRhdGVTdHJpbmcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9tLnNlbGVjdC50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0b2RheSA9IGRhdGUuZ2V0VVRDRGF0ZSgpO1xyXG4gICAgICAgIGN1cnJlbnRNb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcclxuICAgICAgICBjdXJyZW50WWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcclxuICAgICAgICBkb20uc2VsZWN0LmRhdGUudGV4dENvbnRlbnQgPSBgJHt0b2RheX0gJHttb250aH0gJHtjdXJyZW50WWVhcn1gO1xyXG4gICAgICAgIGRhdGVTdHJpbmcgPSBgJHtjdXJyZW50WWVhcn0tJHsoJzAnICsgKGN1cnJlbnRNb250aCsxKSkuc2xpY2UoLTIpfS0keygnMCcgKyB0b2RheSkuc2xpY2UoLTIpfWA7XHJcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2Z1bGxEYXRlJywgZGF0ZVN0cmluZyk7XHJcbiAgICAgICAgZG9tLnNlbGVjdC5oZWFkU2VjLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgZG9tLnNlbGVjdC5kYXRlV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgICAgIGRvbS5zZWxlY3QuaGVhZFNlYy5hcHBlbmQoZG9tLnNlbGVjdC5kYXRlV3JhcHBlcik7XHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlRGF0ZXM7IiwiaW1wb3J0IGNyZWF0b3IgZnJvbSAnLi9jcmVhdG9yLmpzJztcclxuaW1wb3J0IGV2ZW50cyBmcm9tICcuL3B1YlN1Yi5qcyc7XHJcbmltcG9ydCBwcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XHJcbmltcG9ydCB0YXNrIGZyb20gJy4vdGFzay5qcyc7XHJcblxyXG5jb25zdCBkb20gPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHNlbGVjdCA9IHtcclxuICAgIHBhZ2VTdHJ1Y3R1cmU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLXN0cnVjdHVyZScpLFxyXG4gICAgYWRkVGFza0J0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJyksXHJcbiAgICBub3RpZmljYXRpb25CdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb24nKSxcclxuICAgIHRoZW1lQ2hhbmdlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWUnKSxcclxuICAgIGNvbmZpZ0J0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpZycpLFxyXG4gICAgaW5ib3hCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC1idG4nKSxcclxuICAgIHRvZGF5QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXktYnRuJyksXHJcbiAgICBkb25lQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9uZS1idG4nKSxcclxuICAgIHByb2plY3RzU2VjOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKSxcclxuICAgIHByb2plY3RMaXN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saXN0JyksXHJcbiAgICBhZGRQcm9qZWN0QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKSxcclxuICAgIHRhc2tzQ29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtY29udGFpbmVyJyksXHJcbiAgICBoZWFkU2VjOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZC1zZWMnKSxcclxuICAgIGRhdGVXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS13cmFwcGVyJyksXHJcbiAgICBhcnJvd0JhY2t3YXJkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctYmFja3dhcmQnKSxcclxuICAgIGFycm93Rm9yd2FyZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LWZvcndhcmQnKSxcclxuICAgIGRhdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyksXHJcbiAgICBkZXRhaWxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscy1wcm9qZWN0LXRhc2snKSxcclxuICAgIHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKSxcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLFxyXG4gICAgZGVhZGxpbmVJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlYWRsaW5lJyksXHJcbiAgICBwcmlvcml0eUlucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKSxcclxuICAgIGlzRmluaXNoZWRJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbmlzaGVkJyksXHJcbiAgICBub3Rlc0lucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZXMnKSxcclxuICAgIHN1bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bicpLFxyXG4gICAgbW9vbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb24nKSxcclxuICAgIGJpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJpbicpLFxyXG4gICAgY2hlY2tsaXN0QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tsaXN0LWJ0bicpLFxyXG4gICAgY2hlY2tsaXN0RGl2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tsaXN0JyksXHJcbiAgICBjcmVhdG9yUHJvcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0b3ItcHJvcGVydGllcycpLFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXBwZW5kVGFza3ModGl0bGUsIHByaW9yaXR5LCBwcm9qZWN0LCBhcHBlbmQpIHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG4gICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcclxuXHJcbiAgICBwYXJhLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xyXG4gICAgY2lyY2xlLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWljb24nLCAnbG93Jyk7XHJcblxyXG4gICAgc3dpdGNoKHByaW9yaXR5KSB7XHJcbiAgICAgIGNhc2UgJ21vZGVyYXRlJzpcclxuICAgICAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZCgnbW9kZXJhdGUnKVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdoaWdoJzpcclxuICAgICAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZCgnaGlnaCcpXHJcbiAgICB9XHJcblxyXG4gICAgdGFza1RpdGxlLmFwcGVuZChjaXJjbGUsIHBhcmEpO1xyXG4gICAgd3JhcHBlci5hcHBlbmQodGFza1RpdGxlLCBwcm9qZWN0VGl0bGUpO1xyXG4gICAgYXBwZW5kLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG5cclxuICAgIGV2ZW50cy5wdWJsaXNoKCd0YXNrV3JhcHBlcicsIHdyYXBwZXIpO1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmNyZWF0b3JCZy5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFwcGVuZFByb2plY3QodGl0bGUsIGR1ZURhdGUpIHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IGRlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgZGVhZGxpbmUudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xyXG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XHJcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xyXG4gICAgZGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZWFkbGluZScpO1xyXG5cclxuICAgIHdyYXBwZXIuYXBwZW5kKHByb2plY3RUaXRsZSwgZGVhZGxpbmUpO1xyXG4gICAgc2VsZWN0LnByb2plY3RMaXN0LmFwcGVuZCh3cmFwcGVyKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5jcmVhdG9yQmcucmVtb3ZlKCk7XHJcblxyXG4gICAgZXZlbnRzLnB1Ymxpc2goJ2dldFdyYXBwZXInLCB3cmFwcGVyKTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gb3BlblByb2plY3RUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGVhZGxpbmUsIHByaW9yaXR5LCBub3RlcywgaXNDb21wbGV0ZSkge1xyXG4gICAgc2VsZWN0LmhlYWRTZWMudGV4dENvbnRlbnQgPSAnJztcclxuICAgIHNlbGVjdC5kZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgIHNlbGVjdC50YXNrc0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgIHNlbGVjdC5kZXNjcmlwdGlvbklucHV0LnZhbHVlID0gZGVzY3JpcHRpb247XHJcbiAgICBzZWxlY3QuZGVhZGxpbmVJbnB1dC52YWx1ZSA9IGRlYWRsaW5lO1xyXG4gICAgc2VsZWN0LnByaW9yaXR5SW5wdXQudmFsdWUgPSBwcmlvcml0eTtcclxuICAgIHNlbGVjdC5ub3Rlc0lucHV0LnZhbHVlID0gbm90ZXM7XHJcbiAgICBzZWxlY3QuaXNGaW5pc2hlZElucHV0LmNoZWNrZWQgPSBpc0NvbXBsZXRlO1xyXG5cclxuICAgIHNlbGVjdC50aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgc2VsZWN0LmhlYWRTZWMuYXBwZW5kKHNlbGVjdC5kZXRhaWxzKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFwcGVuZEluYm94KCkge1xyXG4gICAgc2VsZWN0LmhlYWRTZWMudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGNvbnN0IGluYm94VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgICAgaW5ib3hUaXRsZS5jbGFzc0xpc3QuYWRkKCdpbmJveC10aXRsZScpO1xyXG4gICAgICAgICAgaW5ib3hUaXRsZS50ZXh0Q29udGVudCA9ICdJbmJveCc7XHJcbiAgICBzZWxlY3QuaGVhZFNlYy5hcHBlbmQoaW5ib3hUaXRsZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhcHBlbmREb25lKCkge1xyXG4gICAgZG9tLnNlbGVjdC50YXNrc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGRvbS5zZWxlY3QuY2hlY2tsaXN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBzZWxlY3QuaGVhZFNlYy50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgY29uc3QgZG9uZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICAgIGRvbmVUaXRsZS5jbGFzc0xpc3QuYWRkKCdkb25lLXRpdGxlJyk7XHJcbiAgICAgICAgICBkb25lVGl0bGUudGV4dENvbnRlbnQgPSAnRG9uZSc7XHJcbiAgICBzZWxlY3QuaGVhZFNlYy5hcHBlbmQoZG9uZVRpdGxlKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdC50aGVtZUNoYW5nZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNlbGVjdC5wYWdlU3RydWN0dXJlLmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcclxuICAgIHNlbGVjdC5wYWdlU3RydWN0dXJlLmNsYXNzTGlzdC50b2dnbGUoJ2xpZ2h0Jyk7XHJcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcclxuXHJcbiAgICBzZWxlY3Quc3VuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgc2VsZWN0Lm1vb24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHNhdmVUb0xvY2FsU3RvcmFnZSgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIHNlbGVjdC5wYWdlU3RydWN0dXJlLmNsYXNzTGlzdFsxXSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXRyaWV2ZUZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBjb25zdCB0aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpO1xyXG4gICAgaWYodGhlbWUgIT09IG51bGwpIHtcclxuICAgICAgaWYoc2VsZWN0LnBhZ2VTdHJ1Y3R1cmUuY2xhc3NMaXN0WzFdID09PSAnZGFyaycpIHtcclxuICAgICAgICBzZWxlY3QucGFnZVN0cnVjdHVyZS5jbGFzc0xpc3QucmVwbGFjZSgnZGFyaycsIHRoZW1lKTtcclxuICAgICAgfSBlbHNlIGlmKHNlbGVjdC5wYWdlU3RydWN0dXJlLmNsYXNzTGlzdFsxXSA9PT0gJ2xpZ2h0Jykge1xyXG4gICAgICAgICAgc2VsZWN0LnBhZ2VTdHJ1Y3R1cmUuY2xhc3NMaXN0LnJlcGxhY2UoJ2xpZ2h0JywgdGhlbWUpO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIH1cclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICByZXRyaWV2ZUZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICB9KVxyXG5cclxuICBldmVudHMuc3Vic2NyaWJlKCdvcGVuVGFzaycsIGV2ZW50cy5ldmVudHMsICgpID0+IHtcclxuICAgIHNlbGVjdC5kZXNjcmlwdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRhc2suZWRpdERlc2NyaXB0aW9uKTtcclxuICAgIHNlbGVjdC5kZWFkbGluZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRhc2suZWRpdERlYWRsaW5lKTtcclxuICAgIHNlbGVjdC5wcmlvcml0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRhc2suZWRpdFByaW9yaXR5KTtcclxuICAgIHNlbGVjdC5ub3Rlc0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRhc2suZWRpdE5vdGVzKTtcclxuICAgIHNlbGVjdC5pc0ZpbmlzaGVkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGFzay5jaGVja0ZpbmlzaCk7XHJcbiAgICBzZWxlY3QuYmluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFzay5kZWxldGVUYXNrKTtcclxuICB9KTtcclxuXHJcbiAgZXZlbnRzLnN1YnNjcmliZSgnb3BlblByb2plY3QnLCBldmVudHMuZXZlbnRzLCAoKSA9PiB7XHJcbiAgICBzZWxlY3QuZGVzY3JpcHRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBwcm9qZWN0LmVkaXREZXNjcmlwdGlvbik7XHJcbiAgICBzZWxlY3QuZGVhZGxpbmVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBwcm9qZWN0LmVkaXREZWFkbGluZSk7XHJcbiAgICBzZWxlY3QucHJpb3JpdHlJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBwcm9qZWN0LmVkaXRQcmlvcml0eSk7XHJcbiAgICBzZWxlY3Qubm90ZXNJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBwcm9qZWN0LmVkaXROb3Rlcyk7XHJcbiAgICBzZWxlY3QuaXNGaW5pc2hlZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHByb2plY3QuY2hlY2tGaW5pc2gpO1xyXG4gICAgc2VsZWN0LmJpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3QuZGVsZXRlUHJvamVjdCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZWxlY3QsXHJcbiAgICBhcHBlbmRUYXNrcyxcclxuICAgIGFwcGVuZFByb2plY3QsXHJcbiAgICBvcGVuUHJvamVjdFRhc2ssXHJcbiAgICBhcHBlbmRJbmJveCxcclxuICAgIGFwcGVuZERvbmVcclxuICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkb207IiwiaW1wb3J0IGRvbSBmcm9tICcuL2RvbS5qcyc7XHJcbmltcG9ydCBjcmVhdG9yIGZyb20gJy4vY3JlYXRvci5qcyc7XHJcbmltcG9ydCBldmVudHMgZnJvbSAnLi9wdWJTdWIuanMnO1xyXG5pbXBvcnQgZGF0ZSBmcm9tICcuL2RhdGUuanMnO1xyXG5cclxuY29uc3QgaGFuZGxlUHJvamVjdHMgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCB0aW1lLCBwcmlvcml0eSwgbm90ZXMsIC4uLnRhc2tzKSB7XHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9ICBkZXNjcmlwdGlvbjtcclxuICAgICAgdGhpcy5kdWVEYXRlID0gIGR1ZURhdGU7XHJcbiAgICAgIHRoaXMudGltZSA9ICB0aW1lO1xyXG4gICAgICB0aGlzLnByaW9yaXR5ID0gIHByaW9yaXR5O1xyXG4gICAgICB0aGlzLm5vdGVzID0gIG5vdGVzO1xyXG4gICAgICB0aGlzLnRhc2tzID0gIHRhc2tzO1xyXG4gICAgICB0aGlzLmlzQ29tcGxldGUgPSAgZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xyXG4gIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3Q7XHJcblxyXG4gIGZ1bmN0aW9uIHNldFRpdGxlKCkge1xyXG4gICAgbmV3UHJvamVjdC50aXRsZSA9IGNyZWF0b3IuY3JlYXRvci5pbnB1dC52YWx1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldERlc2NyaXB0aW9uKCkge1xyXG4gICAgbmV3UHJvamVjdC5kZXNjcmlwdGlvbiA9IGNyZWF0b3IuZGVzYy50ZXh0QXJlYS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldERhdGUoKSB7XHJcbiAgICBuZXdQcm9qZWN0LmR1ZURhdGUgPSBjcmVhdG9yLmR1ZURhdGUuZGF0ZS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldFRpbWUoKSB7XHJcbiAgICBuZXdQcm9qZWN0LnRpbWUgPSBjcmVhdG9yLnRpbWUudGltZS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldE5vdGVzKCkge1xyXG4gICAgbmV3UHJvamVjdC5ub3RlcyA9IGNyZWF0b3Iubm90ZXMudGV4dEFyZWEudmFsdWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRQcmlvcml0eSgpIHtcclxuICAgIG5ld1Byb2plY3QucHJpb3JpdHkgPSBjcmVhdG9yLnByaW9yaXR5LnNlbGVjdC52YWx1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcbiAgICBpZihuZXdQcm9qZWN0LnRpdGxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICAgICAgZXZlbnRzLnB1Ymxpc2goJ3Byb2plY3RzJywgbmV3UHJvamVjdCk7XHJcbiAgICAgIG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdDtcclxuICAgICAgY3JlYXRvci5yZXNldENyZWF0b3IoKTtcclxuICAgICAgZGlzcGxheVByb2plY3QoKTtcclxuICAgICAgcmVtb3ZlRXZlbnRzKCk7XHJcbiAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoJ0ZpbGwgaW4gdGhlIGZpZWxkcycpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzYXZlVG9Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmV0cmlldmVGcm9tTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgY29uc3QgcHJvamVjdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XHJcbiAgICBpZihwcm9qZWN0QXJyYXkgIT09IG51bGwpIHtcclxuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgIHByb2plY3RzLnB1c2gocCk7XHJcbiAgICAgIGV2ZW50cy5wdWJsaXNoKCdwcm9qZWN0cycsIHApXHJcbiAgICB9KX1cclxuICB9XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgcmV0cmlldmVGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgICBkaXNwbGF5UHJvamVjdCgpO1xyXG4gIH0pXHJcblxyXG4gIGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KCkge1xyXG4gICAgZG9tLnNlbGVjdC5wcm9qZWN0TGlzdC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIGRvbS5hcHBlbmRQcm9qZWN0KHByb2plY3QudGl0bGUsIHByb2plY3QuZHVlRGF0ZSk7XHJcbiAgfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhbmNlbEFkZCgpIHtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5jcmVhdG9yQmcucmVtb3ZlKCk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuY2FuY2VsQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2onKVxyXG4gICAgY3JlYXRvci5yZXNldENyZWF0b3IoKTtcclxuICAgIHJlbW92ZUV2ZW50cygpO1xyXG4gICAgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWN0aXZhdGVFdmVudHMoKSB7XHJcbiAgICBjcmVhdG9yLmFwcGVuZENyZWF0b3IoKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5wcm9qZWN0LnJlbW92ZSgpO1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qJylcclxuICAgIGNyZWF0b3IuY3JlYXRvci5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRUaXRsZSk7XHJcbiAgICBjcmVhdG9yLmRlc2MudGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0RGVzY3JpcHRpb24pO1xyXG4gICAgY3JlYXRvci5kdWVEYXRlLmRhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0RGF0ZSk7XHJcbiAgICBjcmVhdG9yLnRpbWUudGltZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRUaW1lKVxyXG4gICAgY3JlYXRvci5wcmlvcml0eS5zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0UHJpb3JpdHkpO1xyXG4gICAgY3JlYXRvci5ub3Rlcy50ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXROb3Rlcyk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsQWRkKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUV2ZW50cygpIHtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRUaXRsZSk7XHJcbiAgICBjcmVhdG9yLmRlc2MudGV4dEFyZWEucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0RGVzY3JpcHRpb24pO1xyXG4gICAgY3JlYXRvci5kdWVEYXRlLmRhdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0RGF0ZSk7XHJcbiAgICBjcmVhdG9yLnRpbWUudGltZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRUaW1lKVxyXG4gICAgY3JlYXRvci5wcmlvcml0eS5zZWxlY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0UHJpb3JpdHkpO1xyXG4gICAgY3JlYXRvci5ub3Rlcy50ZXh0QXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAgc2V0Tm90ZXMpO1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmNhbmNlbEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEFkZCk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuYWRkQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdCk7XHJcbiAgfVxyXG5cclxuICBkb20uc2VsZWN0LmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhY3RpdmF0ZUV2ZW50cyk7XHJcblxyXG4gIC8vIGZpbHRlciB0YXNrcyBvZiBhIHNwZWNpZmljIHByb2plY3RcclxuICBjb25zdCBwcm9qZWN0V3JhcHBlcnMgPSBbXTtcclxuXHJcbiAgZXZlbnRzLnN1YnNjcmliZSgnZ2V0V3JhcHBlcicsIGV2ZW50cy5ldmVudHMsICh3cmFwcGVyKSA9PiB7XHJcbiAgICBkb20uc2VsZWN0LnRhc2tzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZG9tLnNlbGVjdC5jaGVja2xpc3REaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHByb2plY3RXcmFwcGVycy5wdXNoKHdyYXBwZXIpO1xyXG5cclxuICAgIHByb2plY3RXcmFwcGVycy5mb3JFYWNoKCh3cmFwcGVyKSA9PiB7XHJcbiAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICAgIGlmKGV2ZW50LnRhcmdldC5vdXRlclRleHQgPT0gcHJvamVjdC50aXRsZSkge1xyXG4gICAgICAgICAgICBkb20ub3BlblByb2plY3RUYXNrKHByb2plY3QudGl0bGUsIHByb2plY3QuZGVzY3JpcHRpb24sIHByb2plY3QuZHVlRGF0ZSwgcHJvamVjdC5wcmlvcml0eSwgcHJvamVjdC5ub3RlcywgcHJvamVjdC5pc0NvbXBsZXRlKTtcclxuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ29wZW5Qcm9qZWN0JywgJycpO1xyXG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICAgICAgICBkb20uYXBwZW5kVGFza3ModGFzay50aXRsZSwgdGFzay5wcmlvcml0eSwgdGFzay5wcm9qZWN0LCBkb20uc2VsZWN0LnRhc2tzQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gZWRpdERlc2NyaXB0aW9uKCkge1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBpZihwcm9qZWN0LnRpdGxlID09PSBkb20uc2VsZWN0LnRpdGxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgcHJvamVjdC5kZXNjcmlwdGlvbiA9IGRvbS5zZWxlY3QuZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcclxuICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIGZ1bmN0aW9uIGVkaXREZWFkbGluZSgpIHtcclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgaWYocHJvamVjdC50aXRsZSA9PT0gZG9tLnNlbGVjdC50aXRsZS50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIHByb2plY3QuZHVlRGF0ZSA9IGRvbS5zZWxlY3QuZGVhZGxpbmVJbnB1dC52YWx1ZTtcclxuICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZWRpdFByaW9yaXR5KCkge1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBpZihwcm9qZWN0LnRpdGxlID09PSBkb20uc2VsZWN0LnRpdGxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgcHJvamVjdC5wcmlvcml0eSA9IGRvbS5zZWxlY3QucHJpb3JpdHlJbnB1dC52YWx1ZTtcclxuICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZWRpdE5vdGVzKCkge1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBpZihwcm9qZWN0LnRpdGxlID09PSBkb20uc2VsZWN0LnRpdGxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgcHJvamVjdC5ub3RlcyA9IGRvbS5zZWxlY3Qubm90ZXNJbnB1dC52YWx1ZTtcclxuICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tGaW5pc2goZXZlbnQpIHtcclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgaWYocHJvamVjdC50aXRsZSA9PT0gZG9tLnNlbGVjdC50aXRsZS50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBwcm9qZWN0LmlzQ29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHByb2plY3QuaXNDb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgaWYocHJvamVjdC50aXRsZSA9PT0gZG9tLnNlbGVjdC50aXRsZS50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcclxuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcclxuICAgICAgcHJvamVjdExpc3QuZm9yRWFjaCgocCkgPT4ge1xyXG4gICAgICAgIGlmKHAuZmlyc3RDaGlsZC5pbm5lclRleHQgPT09IGRvbS5zZWxlY3QudGl0bGUudGV4dENvbnRlbnQpIHtcclxuICAgICAgICAgIHAucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiB7cHJvamVjdHMsIHJlbW92ZUV2ZW50cywgUHJvamVjdCwgYWRkUHJvamVjdCwgZWRpdERlc2NyaXB0aW9uLCBlZGl0RGVhZGxpbmUsIGVkaXRQcmlvcml0eSwgZWRpdE5vdGVzLCBjaGVja0ZpbmlzaCwgZGVsZXRlUHJvamVjdCwgc2F2ZVRvTG9jYWxTdG9yYWdlfVxyXG59KSgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVQcm9qZWN0czsiLCIvLyBQdWJTdWIgTW9kdWxlXHJcbmNvbnN0IGV2ZW50cyA9IChmdW5jdGlvbigpIHtcclxuICBjb25zdCAgZXZlbnRzID0ge307XHJcblxyXG4gIGNvbnN0IHN1YnNjcmliZSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIG9iamVjdCwgY2FsbGJhY2spIHtcclxuICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcclxuICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goe29iamVjdDogb2JqZWN0LCBjYWxsYmFjazogY2FsbGJhY2t9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gZnVuY3Rpb24oZXZlbnROYW1lLCBvYmplY3QsIGNhbGxiYWNrKSB7XHJcbiAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcclxuICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXVtpXS5vYmplY3QgPT09IG9iamVjdCkge1xyXG4gIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xyXG4gIGJyZWFrO1xyXG4gIH1cclxuICB9O1xyXG4gIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHB1Ymxpc2ggPSAgZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGF0YSkge1xyXG4gIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XHJcbiAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmN0aW9uKGluc3RhbmNlKSB7XHJcbiAgaW5zdGFuY2UuY2FsbGJhY2soZGF0YSk7XHJcbiAgfSk7XHJcbiAgfVxyXG4gIH1cclxuXHJcbnJldHVybiB7ZXZlbnRzLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlLCBwdWJsaXNofVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzOyIsImltcG9ydCBwcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XHJcbmltcG9ydCBkb20gZnJvbSAnLi9kb20uanMnO1xyXG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vcHViU3ViLmpzJztcclxuaW1wb3J0IGNyZWF0b3IgZnJvbSAnLi9jcmVhdG9yLmpzJztcclxuaW1wb3J0IGhhbmRsZXIgZnJvbSAnLi9hcHBIYW5kbGVyLmpzJztcclxuXHJcbmNvbnN0IGhhbmRsZVRhc2tzID0gKGZ1bmN0aW9uKCkge1xyXG4gIGNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCB0aW1lLCBwcmlvcml0eSA9ICdMb3cnLCBub3RlcywgcHJvamVjdCA9ICdJbmJveCcsIC4uLmNoZWNrTGlzdCkge1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSAgZGVzY3JpcHRpb247XHJcbiAgICAgIHRoaXMuZHVlRGF0ZSA9ICBkdWVEYXRlO1xyXG4gICAgICB0aGlzLnRpbWUgPSAgdGltZTtcclxuICAgICAgdGhpcy5wcmlvcml0eSA9ICBwcmlvcml0eTtcclxuICAgICAgdGhpcy5ub3RlcyA9ICBub3RlcztcclxuICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcclxuICAgICAgdGhpcy5jaGVja0xpc3QgPSBjaGVja0xpc3Q7XHJcbiAgICAgIHRoaXMuaXNDb21wbGV0ZSA9ICBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHRhc2tzID0gW107XHJcbiAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzaztcclxuXHJcbiAgZnVuY3Rpb24gc2V0VGl0bGUoKSB7XHJcbiAgICBuZXdUYXNrLnRpdGxlID0gY3JlYXRvci5jcmVhdG9yLmlucHV0LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICBuZXdUYXNrLmRlc2NyaXB0aW9uID0gY3JlYXRvci5kZXNjLnRleHRBcmVhLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0RGF0ZSgpIHtcclxuICAgIG5ld1Rhc2suZHVlRGF0ZSA9IGNyZWF0b3IuZHVlRGF0ZS5kYXRlLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0VGltZSgpIHtcclxuICAgIG5ld1Rhc2sudGltZSA9IGNyZWF0b3IudGltZS50aW1lLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0Tm90ZXMoKSB7XHJcbiAgICBuZXdUYXNrLm5vdGVzID0gY3JlYXRvci5ub3Rlcy50ZXh0QXJlYS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldFByaW9yaXR5KCkge1xyXG4gICAgbmV3VGFzay5wcmlvcml0eSA9IGNyZWF0b3IucHJpb3JpdHkuc2VsZWN0LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0UHJvamVjdCgpIHtcclxuICAgIG5ld1Rhc2sucHJvamVjdCA9IGNyZWF0b3IucHJvamVjdHMuc2VsZWN0LnZhbHVlO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBhZGRUYXNrKCkge1xyXG4gICAgaWYobmV3VGFzay50aXRsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRhc2tzLnB1c2gobmV3VGFzayk7XHJcbiAgICAgIGV2ZW50cy5wdWJsaXNoKCd0YXNrcycsIHRhc2tzKTtcclxuICAgICAgcHJvamVjdC5wcm9qZWN0cy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgICAgaWYocC50aXRsZSA9PSBuZXdUYXNrLnByb2plY3QpIHtcclxuICAgICAgICAgIHAudGFza3MucHVzaChuZXdUYXNrKTtcclxuICAgICAgICAgIHByb2plY3Quc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnByb2plY3RzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgIGhhbmRsZXIuZmlsdGVySW5ib3goKTtcclxuICAgICAgbmV3VGFzayA9IG5ldyBUYXNrO1xyXG4gICAgICBjcmVhdG9yLnJlc2V0Q3JlYXRvcigpO1xyXG4gICAgICBjcmVhdG9yLmNyZWF0b3IuY3JlYXRvckJnLnJlbW92ZSgpO1xyXG4gICAgICByZW1vdmVFdmVudHMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KCdGaWxsIGluIHRoZSBmaWVsZHMnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2F2ZVRvTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJldHJpZXZlRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgIGNvbnN0IHRhc2tzQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcclxuICAgIGlmKHRhc2tzQXJyYXkgIT09IG51bGwpIHtcclxuICAgIHRhc2tzQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICB0YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgfSlcclxuICB9XHJcbiAgfVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIHJldHJpZXZlRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgaGFuZGxlci5maWx0ZXJJbmJveCgpO1xyXG4gIH0pXHJcblxyXG4gIGZ1bmN0aW9uIGNhbmNlbEFkZCgpIHtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5jcmVhdG9yQmcucmVtb3ZlKCk7XHJcbiAgICBjcmVhdG9yLnJlc2V0Q3JlYXRvcigpO1xyXG4gICAgcmVtb3ZlRXZlbnRzKCk7XHJcbiAgICBuZXdUYXNrID0gbmV3IFRhc2s7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGFjdGl2YXRlRXZlbnRzKCkge1xyXG4gICAgY3JlYXRvci5hcHBlbmRDcmVhdG9yKCk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0VGl0bGUpO1xyXG4gICAgY3JlYXRvci5kZXNjLnRleHRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldERlc2NyaXB0aW9uKTtcclxuICAgIGNyZWF0b3IuZHVlRGF0ZS5kYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldERhdGUpO1xyXG4gICAgY3JlYXRvci50aW1lLnRpbWUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0VGltZSlcclxuICAgIGNyZWF0b3IucHJpb3JpdHkuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFByaW9yaXR5KTtcclxuICAgIGNyZWF0b3IucHJvamVjdHMuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldFByb2plY3QpO1xyXG4gICAgY3JlYXRvci5ub3Rlcy50ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXROb3Rlcyk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsQWRkKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUV2ZW50cygpIHtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRUaXRsZSk7XHJcbiAgICBjcmVhdG9yLmRlc2MudGV4dEFyZWEucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0RGVzY3JpcHRpb24pO1xyXG4gICAgY3JlYXRvci5kdWVEYXRlLmRhdGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0RGF0ZSk7XHJcbiAgICBjcmVhdG9yLnRpbWUudGltZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRUaW1lKVxyXG4gICAgY3JlYXRvci5wcmlvcml0eS5zZWxlY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0UHJpb3JpdHkpO1xyXG4gICAgY3JlYXRvci5ub3Rlcy50ZXh0QXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAgc2V0Tm90ZXMpO1xyXG4gICAgY3JlYXRvci5jcmVhdG9yLmNhbmNlbEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEFkZCk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuYWRkQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFzayk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB3cmFwcGVycyA9IFtdO1xyXG5cclxuICBldmVudHMuc3Vic2NyaWJlKCd0YXNrV3JhcHBlcicsIGV2ZW50cy5ldmVudHMsICh3cmFwcGVyKSA9PiB7XHJcbiAgICB3cmFwcGVycy5wdXNoKHdyYXBwZXIpO1xyXG4gICAgd3JhcHBlcnMuZm9yRWFjaCgod3JhcHBlcikgPT4ge1xyXG4gICAgICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgaWYoZXZlbnQudGFyZ2V0Lm91dGVyVGV4dCA9PT0gdGFzay50aXRsZSkge1xyXG4gICAgICAgICAgICBkb20uc2VsZWN0LnRhc2tzQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIGRvbS5vcGVuUHJvamVjdFRhc2sodGFzay50aXRsZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5LCB0YXNrLm5vdGVzKTtcclxuICAgICAgICAgICAgZG9tLnNlbGVjdC50YXNrc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBkb20uc2VsZWN0LmNoZWNrbGlzdERpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgZmlsdGVyQ2hlY2tMaXN0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdvcGVuVGFzaycsICcnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KTtcclxuXHJcbiAgY2xhc3MgVG9kbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgcHJpb3JpdHkpIHtcclxuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgdG9kbyA9IG5ldyBUb2RvO1xyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFRvZG8oKSB7XHJcbiAgICB0b2RvLnByaW9yaXR5ID0gY3JlYXRvci5wcmlvcml0eS5zZWxlY3QudmFsdWU7XHJcbiAgICB0b2RvLnRpdGxlID0gY3JlYXRvci5jcmVhdG9yLmlucHV0LnZhbHVlO1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBpZihkb20uc2VsZWN0LnRpdGxlLnRleHRDb250ZW50ID09PSB0YXNrLnRpdGxlKSB7XHJcbiAgICAgICAgdGFzay5jaGVja0xpc3QucHVzaCh0b2RvKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgIGRvbS5hcHBlbmRUYXNrcyh0b2RvLnRpdGxlLCB0b2RvLnByaW9yaXR5LCAnJywgZG9tLnNlbGVjdC5jaGVja2xpc3REaXYpO1xyXG4gICAgcC5yZW1vdmUoKVxyXG4gICAgY3JlYXRvci5jcmVhdG9yLmNhbmNlbEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEFkZCk7XHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuYWRkQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVG9kbyk7XHJcbiAgICB0b2RvID0gbmV3IFRvZG87XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaWx0ZXJDaGVja0xpc3QoKSB7XHJcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgIGlmKGRvbS5zZWxlY3QudGl0bGUudGV4dENvbnRlbnQgPT09IHRhc2sudGl0bGUpIHtcclxuICAgICAgICBpZih0YXNrLmNoZWNrTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0YXNrLmNoZWNrTGlzdC5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgICAgIGRvbS5hcHBlbmRUYXNrcyh0b2RvLnRpdGxlLCB0b2RvLnByaW9yaXR5LCAnJywgZG9tLnNlbGVjdC5jaGVja2xpc3REaXYpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2xpc3QgLnRhc2snKTtcclxuICAgICAgICAgIC8vIHRvZG9zLmZvckVhY2goKHQpPT4ge1xyXG4gICAgICAgICAgLy8gICB0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHQpXHJcbiAgICAgICAgICAvLyAgIH0pXHJcbiAgICAgICAgICAvLyB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBcIllvdSBkb24ndCBoYXZlIGFueSB0b2RvIGZvciB0aGlzIHRhc2tcIlxyXG4gICAgICAgICAgICBkb20uc2VsZWN0LmNoZWNrbGlzdERpdi5hcHBlbmQocClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRUb0NoZWNrbGlzdCgpIHtcclxuICAgIGNyZWF0b3IucmVzZXRDcmVhdG9yKCk7XHJcbiAgICBjcmVhdG9yLmFwcGVuZENyZWF0b3IoKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5wcm9qZWN0LnJlbW92ZSgpO1xyXG4gICAgXHJcbiAgICBjcmVhdG9yLmNyZWF0b3IuY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsQWRkKTtcclxuICAgIGNyZWF0b3IuY3JlYXRvci5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUb2RvKTtcclxuICB9XHJcblxyXG4gIGRvbS5zZWxlY3QuY2hlY2tsaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVG9DaGVja2xpc3QpO1xyXG5cclxuICBmdW5jdGlvbiBlZGl0RGVzY3JpcHRpb24oKSB7XHJcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgIGlmKHRhc2sudGl0bGUgPT09IGRvbS5zZWxlY3QudGl0bGUudGV4dENvbnRlbnQpIHtcclxuICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gZG9tLnNlbGVjdC5kZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZWRpdERlYWRsaW5lKCkge1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBpZih0YXNrLnRpdGxlID09PSBkb20uc2VsZWN0LnRpdGxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgdGFzay5kdWVEYXRlID0gZG9tLnNlbGVjdC5kZWFkbGluZUlucHV0LnZhbHVlO1xyXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZWRpdFByaW9yaXR5KCkge1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBpZih0YXNrLnRpdGxlID09PSBkb20uc2VsZWN0LnRpdGxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgdGFzay5wcmlvcml0eSA9IGRvbS5zZWxlY3QucHJpb3JpdHlJbnB1dC52YWx1ZTtcclxuICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVkaXROb3RlcygpIHtcclxuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgaWYodGFzay50aXRsZSA9PT0gZG9tLnNlbGVjdC50aXRsZS50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIHRhc2subm90ZXMgPSBkb20uc2VsZWN0Lm5vdGVzSW5wdXQudmFsdWU7XHJcbiAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFza3MpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja0ZpbmlzaChldmVudCkge1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICBpZih0YXNrLnRpdGxlID09PSBkb20uc2VsZWN0LnRpdGxlLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgIHRhc2suaXNDb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlVGFzaygpIHtcclxuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgaWYodGFzay50aXRsZSA9PT0gZG9tLnNlbGVjdC50aXRsZS50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGFza3MuaW5kZXhPZih0YXNrKTtcclxuICAgICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGRvbS5zZWxlY3QuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFjdGl2YXRlRXZlbnRzKTtcclxuXHJcbiAgcmV0dXJue3Rhc2tzLCByZW1vdmVFdmVudHMsIFRhc2ssIGFkZFRhc2ssICBlZGl0RGVzY3JpcHRpb24sIGVkaXREZWFkbGluZSwgZWRpdFByaW9yaXR5LCBlZGl0Tm90ZXMsIGNoZWNrRmluaXNoLCBkZWxldGVUYXNrfVxyXG59KSgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVUYXNrcztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBoYW5kbGVUYXNrcyBmcm9tICcuL3Rhc2suanMnO1xyXG5pbXBvcnQgaGFuZGxlUHJvamVjdHMgZnJvbSAnLi9wcm9qZWN0LmpzJztcclxuaW1wb3J0IGFwcEhhbmRsZXIgZnJvbSAnLi9hcHBIYW5kbGVyLmpzJztcclxuaW1wb3J0IGhhbmRsZURhdGVzIGZyb20gJy4vZGF0ZS5qcyc7XHJcblxyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==