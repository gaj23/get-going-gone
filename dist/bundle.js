/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans&family=Yusei+Magic&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dark-light-mode {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  width: 6vw;\n  border-radius: 100%;\n  margin: 2%; }\n  .dark-light-mode > img {\n    width: 100%;\n    padding: 5%;\n    border-radius: 100%;\n    background-color: #fff; }\n  .dark-light-mode :hover {\n    background-color: #EFEFEF; }\n\n.go-home {\n  border: none;\n  background-color: transparent;\n  cursor: pointer; }\n  .go-home > img {\n    width: 20%; }\n  .go-home :hover {\n    background-color: #ffdfd8; }\n\n.go-to {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  width: 15vw;\n  margin: 4vw; }\n  .go-to > img {\n    width: 100%;\n    border-radius: 100%;\n    padding: 5%;\n    background-color: #fd4c55; }\n  .go-to :hover {\n    background-color: #ffdfd8; }\n\n.make-booking {\n  width: 88%;\n  margin: 3%;\n  border: 5px solid #fd4c55;\n  border-radius: 3%;\n  cursor: pointer; }\n  .make-booking :hover {\n    background-color: #ffdfd8; }\n\nh1 {\n  font-family: \"Yusei Magic\", sans-serif;\n  font-size: 5rem;\n  text-align: center;\n  width: 100%; }\n\nh2 {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 4rem; }\n\n.total > h2 {\n  padding: 2%; }\n\nspan {\n  font-family: \"Yusei Magic\", sans-serif; }\n\narticle > div > h2 {\n  font-family: \"Yusei Magic\", sans-serif;\n  font-size: 5rem;\n  text-align: right;\n  margin-bottom: 5%; }\n\nh3 {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 3rem; }\n\nbutton > h1 {\n  margin: 0;\n  padding: 2%;\n  text-decoration: underline #00c0f9; }\n\n.pending-trips {\n  margin-top: 5%;\n  flex-direction: column;\n  text-align: center; }\n\nh4 {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 2.8rem; }\n\nh5 {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 2.4rem; }\n\n.dark-mode-on {\n  background: #000;\n  color: #fff; }\n\n.dark-mode-on .trips {\n  border: 2px solid #fff; }\n  .dark-mode-on .trips img {\n    border: 2px solid #fff; }\n\n.dark-mode-on .make-booking {\n  color: #000;\n  background: #00d4c5; }\n  .dark-mode-on .make-booking :hover {\n    background-color: #abede8; }\n  .dark-mode-on .make-booking h1 {\n    text-decoration: underline #fd4c55; }\n\n.dark-mode-on .post-booking:disabled {\n  border: #000;\n  color: #000; }\n\n.detailed-view {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center; }\n\n.trips {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  border: 2px solid #000;\n  margin: 5%;\n  padding: 2%;\n  text-align: center; }\n  .trips h3 {\n    width: 100%;\n    margin: 5%; }\n  .trips h4 {\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 1.5rem; }\n\n.trip-card {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%; }\n  .trip-card img {\n    width: 98%;\n    margin: 1%; }\n  .trip-card h3 {\n    margin: 1%;\n    font-family: \"Yusei Magic\", sans-serif; }\n  .trip-card h4 {\n    font-size: 2rem; }\n\n.booking {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  width: 95%;\n  margin: 2%; }\n  .booking h2 {\n    margin: 2%;\n    font-family: \"Yusei Magic\", sans-serif;\n    text-decoration: 4px underline #00c0f9; }\n  .booking form {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    width: 98%;\n    font-size: 2.4rem;\n    padding: 2%; }\n  .booking ul {\n    width: 88%;\n    margin-right: 2%; }\n  .booking li {\n    padding: 3%;\n    font-size: 2.6rem;\n    font-family: \"Open Sans\", sans-serif;\n    list-style-type: none; }\n  .booking select, .booking input {\n    margin: 3%;\n    padding: 1%;\n    font-size: 1.8rem;\n    font-family: \"Open Sans\", sans-serif;\n    border: 1px solid black; }\n  .booking .estimate, .booking .post-booking {\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n    width: 60%;\n    margin: 3%;\n    padding: 2%;\n    font-size: 2.5rem;\n    border: 4px solid #fd4c55; }\n    .booking .estimate :hover, .booking .post-booking :hover {\n      background-color: #abede8; }\n  .booking .trip-estimate {\n    text-align: center;\n    width: 75%; }\n  .booking h4, .booking h5, .booking p {\n    font-family: \"Open Sans\", sans-serif; }\n  .booking p {\n    font-size: 1rem; }\n\n.login-display {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center; }\n  .login-display form {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    margin: 5%;\n    font-size: 3.2rem;\n    font-family: \"Open Sans\", sans-serif; }\n  .login-display div {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    margin: 3%; }\n  .login-display input {\n    margin: 2%;\n    padding: 2%;\n    width: 66%;\n    font-size: 3rem;\n    text-align: center;\n    border-bottom: 1px solid; }\n  .login-display button {\n    font-size: 3.5rem;\n    width: 50%;\n    padding: 2%;\n    margin: 5%;\n    cursor: pointer; }\n    .login-display button :hover {\n      background-color: #abede8; }\n  .login-display article {\n    width: 70%;\n    text-align: center;\n    border: 2px solid #00c0f9;\n    padding: 2%;\n    margin: 1%; }\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\n.dark-mode-container {\n  flex-direction: row-reverse; }\n\nbody > div {\n  display: flex;\n  flex-direction: column; }\n\nheader {\n  display: flex;\n  flex-direction: column; }\n\n.total {\n  text-align: center; }\n\n.dashboard article {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.past-trips div {\n  margin-left: 11vw; }\n\nfooter {\n  display: flex;\n  justify-content: center; }\n\n.hidden {\n  display: none !important; }\n", "",{"version":3,"sources":["webpack://./src/css/_buttons.scss","webpack://./src/css/_mixins.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_text.scss","webpack://./src/css/_darkMode.scss","webpack://./src/css/_detailed-displays.scss","webpack://./src/css/_booking.scss","webpack://./src/css/_login.scss","webpack://./src/css/base.scss"],"names":[],"mappings":"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","sourcesContent":["@import 'mixins', 'variables';\n\n.dark-light-mode {\n  @include base-button;\n  width: 6vw;\n  border-radius: 100%;\n  margin: 2%;\n\n  >img {\n    width: 100%;\n    padding: 5%;\n    border-radius: 100%;\n    background-color: #fff;\n  }\n\n  :hover {\n    background-color: #EFEFEF;\n  }\n\n}\n\n.go-home {\n  @include base-button;\n\n  >img {\n    width: 20%\n  }\n\n  :hover {\n    background-color: $hover-red;\n  }\n}\n\n.go-to {\n  @include base-button;\n  width: 15vw;\n  margin: 4vw;\n\n  >img {\n    width: 100%;\n    border-radius: 100%;\n    padding: 5%;\n    background-color: $main-red;\n  }\n\n  :hover{\n    background-color: $hover-red;\n  }\n}\n\n.make-booking {\n  width: 88%;\n  margin: 3%;\n  border: 5px solid $main-red;\n  border-radius: 3%;\n  cursor: pointer;\n\n  :hover{\n    background-color: $hover-red;\n  }\n}\n","@mixin base-button {\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n}\n\n@mixin base-flex {\n  display: flex;\n  justify-content: center;\n}\n\n@mixin column-flex {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n","$main-font: \"Yusei Magic\", sans-serif;\n$text-font: \"Open Sans\", sans-serif;\n$main-red: rgb(253, 76, 85);\n$main-blue: rgb(0,192,249);\n$dark-teal: rgb(0,212,197);\n$hover-teal: rgb(171, 237, 232);\n$hover-red: rgb(255, 223, 216);\n","@import 'variables';\n\nh1 {\n  font-family: $main-font;\n  font-size: 5rem;\n  text-align: center;\n  width: 100%;\n}\n\nh2 {\n  font-family: $text-font;\n  font-size: 4rem;\n}\n\n.total>h2 {\n  padding: 2%;\n}\n\nspan {\n  font-family: $main-font;\n}\n\narticle>div>h2{\n  font-family: $main-font;\n  font-size: 5rem;\n  text-align: right;\n  margin-bottom: 5%\n}\n\nh3 {\n  font-family: $text-font;\n  font-size: 3rem;\n}\n\nbutton>h1 {\n  margin: 0;\n  padding: 2%;\n  text-decoration: underline $main-blue;\n}\n\n.pending-trips {\n  margin-top: 5%;\n  flex-direction: column;\n  text-align: center;\n}\n\nh4 {\n  font-family: $text-font;\n  font-size: 2.8rem;\n}\n\nh5 {\n  font-family: $text-font;\n  font-size: 2.4rem;\n}\n","@import 'variables';\n\n.dark-mode-on {\n  background: #000;\n  color: #fff;\n}\n\n.dark-mode-on .trips {\n  border: 2px solid #fff;\n\n  img {\n    border: 2px solid #fff;\n  }\n}\n\n.dark-mode-on .make-booking {\n  color: #000;\n  background: $dark-teal;\n\n  :hover {\n    background-color: $hover-teal;\n  }\n\n  h1 {\n    text-decoration: underline $main-red;\n  }\n}\n\n.dark-mode-on .post-booking:disabled {\n    border: #000;\n    color: #000;\n}\n","@import 'mixins', 'variables';\n\n.detailed-view {\n  @include column-flex;\n  align-items: center;\n}\n\n// Default View for get, going gone\n.trips {\n  @include column-flex;\n  border: 2px solid #000;\n  margin: 5%;\n  padding: 2%;\n  text-align: center;\n\n  h3 {\n    width: 100%;\n    margin: 5%;\n  }\n\n  h4 {\n    font-family: $text-font;\n    font-size: 1.5rem;\n  }\n}\n\n// domUpdates view for get, going, gone\n\n.trip-card{\n  @include base-flex;\n  flex-direction: column;\n  width: 100%;\n\n  img {\n    width:98%;\n    margin: 1%;\n  }\n\n  h3 {\n    margin: 1%;\n    font-family: $main-font;\n  }\n\n  h4 {\n    font-size: 2rem;\n  }\n}\n","@import 'mixins', 'variables';\n\n.booking {\n  @include column-flex;\n  align-items: center;\n  width: 95%;\n  margin: 2%;\n\n  h2 {\n    margin: 2%;\n    font-family: $main-font;\n    text-decoration: 4px underline $main-blue;\n  }\n\n  form {\n    @include column-flex;\n    align-items: center;\n    width: 98%;\n    font-size: 2.4rem;\n    padding: 2%;\n  }\n\n  ul{\n    width: 88%;\n    margin-right: 2%;\n  }\n\n  li {\n    padding: 3%;\n    font-size: 2.6rem;\n    font-family: $text-font;\n    list-style-type: none;\n  }\n\n  select, input {\n    margin: 3%;\n    padding: 1%;\n    font-size: 1.8rem;\n    font-family: $text-font;\n    border: 1px solid black;\n  }\n\n  .estimate {\n    @include base-button;\n    width: 60%;\n    margin: 3%;\n    padding: 2%;\n    font-size: 2.5rem;\n    border: 4px solid $main-red;\n\n    :hover {\n      background-color: $hover-teal;\n    }\n  }\n\n  .post-booking {\n    @extend .estimate;\n  }\n\n  .trip-estimate {\n    text-align: center;\n    width: 75%;\n  }\n\n  h4, h5, p {\n    font-family: $text-font;\n  }\n\n  p {\n    font-size: 1rem;\n  }\n}\n","@import 'mixins', 'variables';\n\n.login-display {\n  @include column-flex;\n  align-items: center;\n\n  form {\n    @include column-flex;\n    align-items: center;\n    margin: 5%;\n    font-size: 3.2rem;\n    font-family: $text-font;\n  }\n\n  div {\n    @include column-flex;\n    align-items: center;\n    margin: 3%;\n  }\n\n  input {\n    margin: 2%;\n    padding: 2%;\n    width: 66%;\n    font-size: 3rem;\n    text-align: center;\n    border-bottom: 1px solid;\n  }\n\n  button {\n    font-size: 3.5rem;\n    width: 50%;\n    padding: 2%;\n    margin: 5%;\n    cursor: pointer;\n\n    :hover {\n      background-color: $hover-teal;\n    }\n  }\n\n  article {\n    width: 70%;\n    text-align: center;\n    border: 2px solid $main-blue;\n    padding: 2%;\n    margin: 1%;\n  }\n\n}\n","@import 'buttons', 'mixins', 'text', 'variables', 'darkMode', 'detailed-displays', 'booking', 'login';\n\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Yusei+Magic&display=swap');\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.dark-mode-container {\n  flex-direction: row-reverse;\n}\n\nbody>div {\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n}\n\n.total {\n  text-align: center;\n}\n\n.dashboard article {\n  @include base-flex;\n  align-items: center;\n}\n\n.past-trips div {\n  margin-left: 11vw;\n}\n\nfooter {\n  @include base-flex;\n}\n\n.hidden {\n  display: none!important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/luxon/build/cjs-browser/luxon.js":
/*!*******************************************************!*\
  !*** ./node_modules/luxon/build/cjs-browser/luxon.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o) {
  var i = 0;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  i = o[Symbol.iterator]();
  return i.next.bind(i);
}

// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
var LuxonError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(LuxonError, _Error);

  function LuxonError() {
    return _Error.apply(this, arguments) || this;
  }

  return LuxonError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * @private
 */


var InvalidDateTimeError = /*#__PURE__*/function (_LuxonError) {
  _inheritsLoose(InvalidDateTimeError, _LuxonError);

  function InvalidDateTimeError(reason) {
    return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
  }

  return InvalidDateTimeError;
}(LuxonError);
/**
 * @private
 */

var InvalidIntervalError = /*#__PURE__*/function (_LuxonError2) {
  _inheritsLoose(InvalidIntervalError, _LuxonError2);

  function InvalidIntervalError(reason) {
    return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
  }

  return InvalidIntervalError;
}(LuxonError);
/**
 * @private
 */

var InvalidDurationError = /*#__PURE__*/function (_LuxonError3) {
  _inheritsLoose(InvalidDurationError, _LuxonError3);

  function InvalidDurationError(reason) {
    return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
  }

  return InvalidDurationError;
}(LuxonError);
/**
 * @private
 */

var ConflictingSpecificationError = /*#__PURE__*/function (_LuxonError4) {
  _inheritsLoose(ConflictingSpecificationError, _LuxonError4);

  function ConflictingSpecificationError() {
    return _LuxonError4.apply(this, arguments) || this;
  }

  return ConflictingSpecificationError;
}(LuxonError);
/**
 * @private
 */

var InvalidUnitError = /*#__PURE__*/function (_LuxonError5) {
  _inheritsLoose(InvalidUnitError, _LuxonError5);

  function InvalidUnitError(unit) {
    return _LuxonError5.call(this, "Invalid unit " + unit) || this;
  }

  return InvalidUnitError;
}(LuxonError);
/**
 * @private
 */

var InvalidArgumentError = /*#__PURE__*/function (_LuxonError6) {
  _inheritsLoose(InvalidArgumentError, _LuxonError6);

  function InvalidArgumentError() {
    return _LuxonError6.apply(this, arguments) || this;
  }

  return InvalidArgumentError;
}(LuxonError);
/**
 * @private
 */

var ZoneIsAbstractError = /*#__PURE__*/function (_LuxonError7) {
  _inheritsLoose(ZoneIsAbstractError, _LuxonError7);

  function ZoneIsAbstractError() {
    return _LuxonError7.call(this, "Zone is an abstract class") || this;
  }

  return ZoneIsAbstractError;
}(LuxonError);

/**
 * @private
 */
var n = "numeric",
    s = "short",
    l = "long";
var DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
var DATE_MED = {
  year: n,
  month: s,
  day: n
};
var DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s
};
var DATE_FULL = {
  year: n,
  month: l,
  day: n
};
var DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
var TIME_SIMPLE = {
  hour: n,
  minute: n
};
var TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n
};
var TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
var TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23', always 24-hour.
 */

var TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23 EDT', always 24-hour.
 */

var TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hour12: false,
  timeZoneName: s
};
/**
 * {@link toLocaleString}; format like '09:30:23 Eastern Daylight Time', always 24-hour.
 */

var TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hour12: false,
  timeZoneName: l
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n
};
var DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s
};
var DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l
};
var DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};

/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/
/**
 * @private
 */
// TYPES

function isUndefined(o) {
  return typeof o === "undefined";
}
function isNumber(o) {
  return typeof o === "number";
}
function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
  return typeof o === "string";
}
function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
} // CAPABILITIES

function hasIntl() {
  try {
    return typeof Intl !== "undefined" && Intl.DateTimeFormat;
  } catch (e) {
    return false;
  }
}
function hasFormatToParts() {
  return !isUndefined(Intl.DateTimeFormat.prototype.formatToParts);
}
function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
} // OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }

  return arr.reduce(function (best, next) {
    var pair = [by(next), next];

    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce(function (a, k) {
    a[k] = obj[k];
    return a;
  }, {});
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
} // NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
} // x % n but takes the sign of n instead of x

function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}
function padStart(input, n) {
  if (n === void 0) {
    n = 2;
  }

  if (input.toString().length < n) {
    return ("0".repeat(n) + input).slice(-n);
  } else {
    return input.toString();
  }
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseInt(string, 10);
  }
}
function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return undefined;
  } else {
    var f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}
function roundTo(number, digits, towardZero) {
  if (towardZero === void 0) {
    towardZero = false;
  }

  var factor = Math.pow(10, digits),
      rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
} // DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  var modMonth = floorMod(month - 1, 12) + 1,
      modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
} // covert a calendar object to a local timestamp (epoch, but with the offset baked in)

function objToLocalTS(obj) {
  var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond); // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that

  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  return +d;
}
function weeksInWeekYear(weekYear) {
  var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7,
      last = weekYear - 1,
      p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > 60 ? 1900 + year : 2000 + year;
} // PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
  if (timeZone === void 0) {
    timeZone = null;
  }

  var date = new Date(ts),
      intlOpts = {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  var modified = Object.assign({
    timeZoneName: offsetFormat
  }, intlOpts),
      intl = hasIntl();

  if (intl && hasFormatToParts()) {
    var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function (m) {
      return m.type.toLowerCase() === "timezonename";
    });
    return parsed ? parsed.value : null;
  } else if (intl) {
    // this probably doesn't work for all locales
    var without = new Intl.DateTimeFormat(locale, intlOpts).format(date),
        included = new Intl.DateTimeFormat(locale, modified).format(date),
        diffed = included.substring(without.length),
        trimmed = diffed.replace(/^[, \u200e]+/, "");
    return trimmed;
  } else {
    return null;
  }
} // signedOffset('-5', '30') -> -330

function signedOffset(offHourStr, offMinuteStr) {
  var offHour = parseInt(offHourStr, 10); // don't || this because we want to preserve -0

  if (Number.isNaN(offHour)) {
    offHour = 0;
  }

  var offMin = parseInt(offMinuteStr, 10) || 0,
      offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
} // COERCION

function asNumber(value) {
  var numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new InvalidArgumentError("Invalid unit value " + value);
  return numericValue;
}
function normalizeObject(obj, normalizer, nonUnitKeys) {
  var normalized = {};

  for (var u in obj) {
    if (hasOwnProperty(obj, u)) {
      if (nonUnitKeys.indexOf(u) >= 0) continue;
      var v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }

  return normalized;
}
function formatOffset(offset, format) {
  var hours = Math.trunc(Math.abs(offset / 60)),
      minutes = Math.trunc(Math.abs(offset % 60)),
      sign = offset >= 0 ? "+" : "-";

  switch (format) {
    case "short":
      return "" + sign + padStart(hours, 2) + ":" + padStart(minutes, 2);

    case "narrow":
      return "" + sign + hours + (minutes > 0 ? ":" + minutes : "");

    case "techie":
      return "" + sign + padStart(hours, 2) + padStart(minutes, 2);

    default:
      throw new RangeError("Value format " + format + " is out of range for property format");
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}
var ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;

function stringify(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}
/**
 * @private
 */


var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return monthsNarrow;

    case "short":
      return monthsShort;

    case "long":
      return monthsLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    default:
      return null;
  }
}
var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return weekdaysNarrow;

    case "short":
      return weekdaysShort;

    case "long":
      return weekdaysLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];

    default:
      return null;
  }
}
var meridiems = ["AM", "PM"];
var erasLong = ["Before Christ", "Anno Domini"];
var erasShort = ["BC", "AD"];
var erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return erasNarrow;

    case "short":
      return erasShort;

    case "long":
      return erasLong;

    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric, narrow) {
  if (numeric === void 0) {
    numeric = "always";
  }

  if (narrow === void 0) {
    narrow = false;
  }

  var units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  var lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

  if (numeric === "auto" && lastable) {
    var isDay = unit === "days";

    switch (count) {
      case 1:
        return isDay ? "tomorrow" : "next " + units[unit][0];

      case -1:
        return isDay ? "yesterday" : "last " + units[unit][0];

      case 0:
        return isDay ? "today" : "this " + units[unit][0];

    }
  }

  var isInPast = Object.is(count, -0) || count < 0,
      fmtValue = Math.abs(count),
      singular = fmtValue === 1,
      lilUnits = units[unit],
      fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
}
function formatString(knownFormat) {
  // these all have the offsets removed because we don't have access to them
  // without all the intl stuff this is backfilling
  var filtered = pick(knownFormat, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]),
      key = stringify(filtered),
      dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";

  switch (key) {
    case stringify(DATE_SHORT):
      return "M/d/yyyy";

    case stringify(DATE_MED):
      return "LLL d, yyyy";

    case stringify(DATE_MED_WITH_WEEKDAY):
      return "EEE, LLL d, yyyy";

    case stringify(DATE_FULL):
      return "LLLL d, yyyy";

    case stringify(DATE_HUGE):
      return "EEEE, LLLL d, yyyy";

    case stringify(TIME_SIMPLE):
      return "h:mm a";

    case stringify(TIME_WITH_SECONDS):
      return "h:mm:ss a";

    case stringify(TIME_WITH_SHORT_OFFSET):
      return "h:mm a";

    case stringify(TIME_WITH_LONG_OFFSET):
      return "h:mm a";

    case stringify(TIME_24_SIMPLE):
      return "HH:mm";

    case stringify(TIME_24_WITH_SECONDS):
      return "HH:mm:ss";

    case stringify(TIME_24_WITH_SHORT_OFFSET):
      return "HH:mm";

    case stringify(TIME_24_WITH_LONG_OFFSET):
      return "HH:mm";

    case stringify(DATETIME_SHORT):
      return "M/d/yyyy, h:mm a";

    case stringify(DATETIME_MED):
      return "LLL d, yyyy, h:mm a";

    case stringify(DATETIME_FULL):
      return "LLLL d, yyyy, h:mm a";

    case stringify(DATETIME_HUGE):
      return dateTimeHuge;

    case stringify(DATETIME_SHORT_WITH_SECONDS):
      return "M/d/yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_SECONDS):
      return "LLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_WEEKDAY):
      return "EEE, d LLL yyyy, h:mm a";

    case stringify(DATETIME_FULL_WITH_SECONDS):
      return "LLLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_HUGE_WITH_SECONDS):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";

    default:
      return dateTimeHuge;
  }
}

function stringifyTokens(splits, tokenToString) {
  var s = "";

  for (var _iterator = _createForOfIteratorHelperLoose(splits), _step; !(_step = _iterator()).done;) {
    var token = _step.value;

    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }

  return s;
}

var _macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
/**
 * @private
 */

var Formatter = /*#__PURE__*/function () {
  Formatter.create = function create(locale, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new Formatter(locale, opts);
  };

  Formatter.parseFormat = function parseFormat(fmt) {
    var current = null,
        currentFull = "",
        bracketed = false;
    var splits = [];

    for (var i = 0; i < fmt.length; i++) {
      var c = fmt.charAt(i);

      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({
            literal: bracketed,
            val: currentFull
          });
        }

        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({
            literal: false,
            val: currentFull
          });
        }

        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({
        literal: bracketed,
        val: currentFull
      });
    }

    return splits;
  };

  Formatter.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
    return _macroTokenToFormatOpts[token];
  };

  function Formatter(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  var _proto = Formatter.prototype;

  _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }

    var df = this.systemLoc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTime = function formatDateTime(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.formatToParts();
  };

  _proto.resolvedOptions = function resolvedOptions(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.resolvedOptions();
  };

  _proto.num = function num(n, p) {
    if (p === void 0) {
      p = 0;
    }

    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return padStart(n, p);
    }

    var opts = Object.assign({}, this.opts);

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  };

  _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
    var _this = this;

    var knownEnglish = this.loc.listingMode() === "en",
        useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && hasFormatToParts(),
        string = function string(opts, extract) {
      return _this.loc.extract(dt, opts, extract);
    },
        formatOffset = function formatOffset(opts) {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return "Z";
      }

      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
    },
        meridiem = function meridiem() {
      return knownEnglish ? meridiemForDateTime(dt) : string({
        hour: "numeric",
        hour12: true
      }, "dayperiod");
    },
        month = function month(length, standalone) {
      return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
        month: length
      } : {
        month: length,
        day: "numeric"
      }, "month");
    },
        weekday = function weekday(length, standalone) {
      return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
        weekday: length
      } : {
        weekday: length,
        month: "long",
        day: "numeric"
      }, "weekday");
    },
        maybeMacro = function maybeMacro(token) {
      var formatOpts = Formatter.macroTokenToFormatOpts(token);

      if (formatOpts) {
        return _this.formatWithSystemDefault(dt, formatOpts);
      } else {
        return token;
      }
    },
        era = function era(length) {
      return knownEnglish ? eraForDateTime(dt, length) : string({
        era: length
      }, "era");
    },
        tokenToString = function tokenToString(token) {
      // Where possible: http://cldr.unicode.org/translation/date-time#TOC-Stand-Alone-vs.-Format-Styles
      switch (token) {
        // ms
        case "S":
          return _this.num(dt.millisecond);

        case "u": // falls through

        case "SSS":
          return _this.num(dt.millisecond, 3);
        // seconds

        case "s":
          return _this.num(dt.second);

        case "ss":
          return _this.num(dt.second, 2);
        // minutes

        case "m":
          return _this.num(dt.minute);

        case "mm":
          return _this.num(dt.minute, 2);
        // hours

        case "h":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);

        case "hh":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);

        case "H":
          return _this.num(dt.hour);

        case "HH":
          return _this.num(dt.hour, 2);
        // offset

        case "Z":
          // like +6
          return formatOffset({
            format: "narrow",
            allowZ: _this.opts.allowZ
          });

        case "ZZ":
          // like +06:00
          return formatOffset({
            format: "short",
            allowZ: _this.opts.allowZ
          });

        case "ZZZ":
          // like +0600
          return formatOffset({
            format: "techie",
            allowZ: _this.opts.allowZ
          });

        case "ZZZZ":
          // like EST
          return dt.zone.offsetName(dt.ts, {
            format: "short",
            locale: _this.loc.locale
          });

        case "ZZZZZ":
          // like Eastern Standard Time
          return dt.zone.offsetName(dt.ts, {
            format: "long",
            locale: _this.loc.locale
          });
        // zone

        case "z":
          // like America/New_York
          return dt.zoneName;
        // meridiems

        case "a":
          return meridiem();
        // dates

        case "d":
          return useDateTimeFormatter ? string({
            day: "numeric"
          }, "day") : _this.num(dt.day);

        case "dd":
          return useDateTimeFormatter ? string({
            day: "2-digit"
          }, "day") : _this.num(dt.day, 2);
        // weekdays - standalone

        case "c":
          // like 1
          return _this.num(dt.weekday);

        case "ccc":
          // like 'Tues'
          return weekday("short", true);

        case "cccc":
          // like 'Tuesday'
          return weekday("long", true);

        case "ccccc":
          // like 'T'
          return weekday("narrow", true);
        // weekdays - format

        case "E":
          // like 1
          return _this.num(dt.weekday);

        case "EEE":
          // like 'Tues'
          return weekday("short", false);

        case "EEEE":
          // like 'Tuesday'
          return weekday("long", false);

        case "EEEEE":
          // like 'T'
          return weekday("narrow", false);
        // months - standalone

        case "L":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric",
            day: "numeric"
          }, "month") : _this.num(dt.month);

        case "LL":
          // like 01, doesn't seem to work
          return useDateTimeFormatter ? string({
            month: "2-digit",
            day: "numeric"
          }, "month") : _this.num(dt.month, 2);

        case "LLL":
          // like Jan
          return month("short", true);

        case "LLLL":
          // like January
          return month("long", true);

        case "LLLLL":
          // like J
          return month("narrow", true);
        // months - format

        case "M":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric"
          }, "month") : _this.num(dt.month);

        case "MM":
          // like 01
          return useDateTimeFormatter ? string({
            month: "2-digit"
          }, "month") : _this.num(dt.month, 2);

        case "MMM":
          // like Jan
          return month("short", false);

        case "MMMM":
          // like January
          return month("long", false);

        case "MMMMM":
          // like J
          return month("narrow", false);
        // years

        case "y":
          // like 2014
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year);

        case "yy":
          // like 14
          return useDateTimeFormatter ? string({
            year: "2-digit"
          }, "year") : _this.num(dt.year.toString().slice(-2), 2);

        case "yyyy":
          // like 0012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 4);

        case "yyyyyy":
          // like 000012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 6);
        // eras

        case "G":
          // like AD
          return era("short");

        case "GG":
          // like Anno Domini
          return era("long");

        case "GGGGG":
          return era("narrow");

        case "kk":
          return _this.num(dt.weekYear.toString().slice(-2), 2);

        case "kkkk":
          return _this.num(dt.weekYear, 4);

        case "W":
          return _this.num(dt.weekNumber);

        case "WW":
          return _this.num(dt.weekNumber, 2);

        case "o":
          return _this.num(dt.ordinal);

        case "ooo":
          return _this.num(dt.ordinal, 3);

        case "q":
          // like 1
          return _this.num(dt.quarter);

        case "qq":
          // like 01
          return _this.num(dt.quarter, 2);

        case "X":
          return _this.num(Math.floor(dt.ts / 1000));

        case "x":
          return _this.num(dt.ts);

        default:
          return maybeMacro(token);
      }
    };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  };

  _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
    var _this2 = this;

    var tokenToField = function tokenToField(token) {
      switch (token[0]) {
        case "S":
          return "millisecond";

        case "s":
          return "second";

        case "m":
          return "minute";

        case "h":
          return "hour";

        case "d":
          return "day";

        case "M":
          return "month";

        case "y":
          return "year";

        default:
          return null;
      }
    },
        tokenToString = function tokenToString(lildur) {
      return function (token) {
        var mapped = tokenToField(token);

        if (mapped) {
          return _this2.num(lildur.get(mapped), token.length);
        } else {
          return token;
        }
      };
    },
        tokens = Formatter.parseFormat(fmt),
        realTokens = tokens.reduce(function (found, _ref) {
      var literal = _ref.literal,
          val = _ref.val;
      return literal ? found : found.concat(val);
    }, []),
        collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function (t) {
      return t;
    }));

    return stringifyTokens(tokens, tokenToString(collapsed));
  };

  return Formatter;
}();

var Invalid = /*#__PURE__*/function () {
  function Invalid(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  var _proto = Invalid.prototype;

  _proto.toMessage = function toMessage() {
    if (this.explanation) {
      return this.reason + ": " + this.explanation;
    } else {
      return this.reason;
    }
  };

  return Invalid;
}();

/**
 * @interface
 */

var Zone = /*#__PURE__*/function () {
  function Zone() {}

  var _proto = Zone.prototype;

  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  _proto.offsetName = function offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  ;

  _proto.formatOffset = function formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  ;

  _proto.offset = function offset(ts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(otherZone) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  ;

  _createClass(Zone, [{
    key: "type",

    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */

  }, {
    key: "name",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */

  }, {
    key: "universal",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }, {
    key: "isValid",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }]);

  return Zone;
}();

var singleton = null;
/**
 * Represents the local zone for this Javascript environment.
 * @implements {Zone}
 */

var LocalZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(LocalZone, _Zone);

  function LocalZone() {
    return _Zone.apply(this, arguments) || this;
  }

  var _proto = LocalZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "local";
  }
  /** @override **/
  ;

  _createClass(LocalZone, [{
    key: "type",

    /** @override **/
    get: function get() {
      return "local";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      if (hasIntl()) {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone;
      } else return "local";
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }], [{
    key: "instance",

    /**
     * Get a singleton instance of the local zone
     * @return {LocalZone}
     */
    get: function get() {
      if (singleton === null) {
        singleton = new LocalZone();
      }

      return singleton;
    }
  }]);

  return LocalZone;
}(Zone);

var matchingRegex = RegExp("^" + ianaRegex.source + "$");
var dtfCache = {};

function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  return dtfCache[zone];
}

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, ""),
      parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted),
      fMonth = parsed[1],
      fDay = parsed[2],
      fYear = parsed[3],
      fHour = parsed[4],
      fMinute = parsed[5],
      fSecond = parsed[6];
  return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date),
      filled = [];

  for (var i = 0; i < formatted.length; i++) {
    var _formatted$i = formatted[i],
        type = _formatted$i.type,
        value = _formatted$i.value,
        pos = typeToPos[type];

    if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }

  return filled;
}

var ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */

var IANAZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(IANAZone, _Zone);

  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  IANAZone.create = function create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }

    return ianaZoneCache[name];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  ;

  IANAZone.resetCache = function resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Fantasia/Castle") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidSpecifier = function isValidSpecifier(s) {
    return !!(s && s.match(matchingRegex));
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidZone = function isValidZone(zone) {
    try {
      new Intl.DateTimeFormat("en-US", {
        timeZone: zone
      }).format();
      return true;
    } catch (e) {
      return false;
    }
  } // Etc/GMT+8 -> -480

  /** @ignore */
  ;

  IANAZone.parseGMTOffset = function parseGMTOffset(specifier) {
    if (specifier) {
      var match = specifier.match(/^Etc\/GMT([+-]\d{1,2})$/i);

      if (match) {
        return -60 * parseInt(match[1]);
      }
    }

    return null;
  };

  function IANAZone(name) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.zoneName = name;
    /** @private **/

    _this.valid = IANAZone.isValidZone(name);
    return _this;
  }
  /** @override **/


  var _proto = IANAZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale, this.name);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    var date = new Date(ts),
        dtf = makeDTF(this.name),
        _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date),
        year = _ref2[0],
        month = _ref2[1],
        day = _ref2[2],
        hour = _ref2[3],
        minute = _ref2[4],
        second = _ref2[5],
        adjustedHour = hour === 24 ? 0 : hour;

    var asUTC = objToLocalTS({
      year: year,
      month: month,
      day: day,
      hour: adjustedHour,
      minute: minute,
      second: second,
      millisecond: 0
    });
    var asTS = +date;
    var over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return (asUTC - asTS) / (60 * 1000);
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }
  /** @override **/
  ;

  _createClass(IANAZone, [{
    key: "type",
    get: function get() {
      return "iana";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return this.valid;
    }
  }]);

  return IANAZone;
}(Zone);

var singleton$1 = null;
/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */

var FixedOffsetZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(FixedOffsetZone, _Zone);

  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  FixedOffsetZone.instance = function instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  ;

  FixedOffsetZone.parseSpecifier = function parseSpecifier(s) {
    if (s) {
      var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);

      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }

    return null;
  };

  _createClass(FixedOffsetZone, null, [{
    key: "utcInstance",

    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    get: function get() {
      if (singleton$1 === null) {
        singleton$1 = new FixedOffsetZone(0);
      }

      return singleton$1;
    }
  }]);

  function FixedOffsetZone(offset) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.fixed = offset;
    return _this;
  }
  /** @override **/


  var _proto = FixedOffsetZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return this.name;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.fixed, format);
  }
  /** @override **/
  ;

  /** @override **/
  _proto.offset = function offset() {
    return this.fixed;
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }
  /** @override **/
  ;

  _createClass(FixedOffsetZone, [{
    key: "type",
    get: function get() {
      return "fixed";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
    }
  }, {
    key: "universal",
    get: function get() {
      return true;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }]);

  return FixedOffsetZone;
}(Zone);

/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */

var InvalidZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(InvalidZone, _Zone);

  function InvalidZone(zoneName) {
    var _this;

    _this = _Zone.call(this) || this;
    /**  @private */

    _this.zoneName = zoneName;
    return _this;
  }
  /** @override **/


  var _proto = InvalidZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return null;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset() {
    return "";
  }
  /** @override **/
  ;

  _proto.offset = function offset() {
    return NaN;
  }
  /** @override **/
  ;

  _proto.equals = function equals() {
    return false;
  }
  /** @override **/
  ;

  _createClass(InvalidZone, [{
    key: "type",
    get: function get() {
      return "invalid";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return false;
    }
  }]);

  return InvalidZone;
}(Zone);

/**
 * @private
 */
function normalizeZone(input, defaultZone) {
  var offset;

  if (isUndefined(input) || input === null) {
    return defaultZone;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    var lowered = input.toLowerCase();
    if (lowered === "local") return defaultZone;else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;else if ((offset = IANAZone.parseGMTOffset(input)) != null) {
      // handle Etc/GMT-4, which V8 chokes on
      return FixedOffsetZone.instance(offset);
    } else if (IANAZone.isValidSpecifier(lowered)) return IANAZone.create(input);else return FixedOffsetZone.parseSpecifier(lowered) || new InvalidZone(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new InvalidZone(input);
  }
}

var now = function now() {
  return Date.now();
},
    defaultZone = null,
    // not setting this directly to LocalZone.instance bc loading order issues
defaultLocale = null,
    defaultNumberingSystem = null,
    defaultOutputCalendar = null,
    throwOnInvalid = false;
/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */


var Settings = /*#__PURE__*/function () {
  function Settings() {}

  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  Settings.resetCaches = function resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  };

  _createClass(Settings, null, [{
    key: "now",

    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    get: function get() {
      return now;
    }
    /**
     * Set the callback for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     * @type {function}
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
     */
    ,
    set: function set(n) {
      now = n;
    }
    /**
     * Get the default time zone to create DateTimes in.
     * @type {string}
     */

  }, {
    key: "defaultZoneName",
    get: function get() {
      return Settings.defaultZone.name;
    }
    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(z) {
      if (!z) {
        defaultZone = null;
      } else {
        defaultZone = normalizeZone(z);
      }
    }
    /**
     * Get the default time zone object to create DateTimes in. Does not affect existing instances.
     * @type {Zone}
     */

  }, {
    key: "defaultZone",
    get: function get() {
      return defaultZone || LocalZone.instance;
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultLocale",
    get: function get() {
      return defaultLocale;
    }
    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(locale) {
      defaultLocale = locale;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultNumberingSystem",
    get: function get() {
      return defaultNumberingSystem;
    }
    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(numberingSystem) {
      defaultNumberingSystem = numberingSystem;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultOutputCalendar",
    get: function get() {
      return defaultOutputCalendar;
    }
    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(outputCalendar) {
      defaultOutputCalendar = outputCalendar;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */

  }, {
    key: "throwOnInvalid",
    get: function get() {
      return throwOnInvalid;
    }
    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    ,
    set: function set(t) {
      throwOnInvalid = t;
    }
  }]);

  return Settings;
}();

var intlDTCache = {};

function getCachedDTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var dtf = intlDTCache[key];

  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }

  return dtf;
}

var intlNumCache = {};

function getCachedINF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var inf = intlNumCache[key];

  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }

  return inf;
}

var intlRelCache = {};

function getCachedRTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var _opts = opts,
      base = _opts.base,
      cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, ["base"]); // exclude `base` from the options


  var key = JSON.stringify([locString, cacheKeyOpts]);
  var inf = intlRelCache[key];

  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }

  return inf;
}

var sysLocaleCache = null;

function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else if (hasIntl()) {
    var computedSys = new Intl.DateTimeFormat().resolvedOptions().locale; // node sometimes defaults to "und". Override that because that is dumb

    sysLocaleCache = !computedSys || computedSys === "und" ? "en-US" : computedSys;
    return sysLocaleCache;
  } else {
    sysLocaleCache = "en-US";
    return sysLocaleCache;
  }
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:
  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u
  var uIndex = localeStr.indexOf("-u-");

  if (uIndex === -1) {
    return [localeStr];
  } else {
    var options;
    var smaller = localeStr.substring(0, uIndex);

    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }

    var _options = options,
        numberingSystem = _options.numberingSystem,
        calendar = _options.calendar; // return the smaller one so that we can append the calendar and numbering overrides to it

    return [smaller, numberingSystem, calendar];
  }
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (hasIntl()) {
    if (outputCalendar || numberingSystem) {
      localeStr += "-u";

      if (outputCalendar) {
        localeStr += "-ca-" + outputCalendar;
      }

      if (numberingSystem) {
        localeStr += "-nu-" + numberingSystem;
      }

      return localeStr;
    } else {
      return localeStr;
    }
  } else {
    return [];
  }
}

function mapMonths(f) {
  var ms = [];

  for (var i = 1; i <= 12; i++) {
    var dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }

  return ms;
}

function mapWeekdays(f) {
  var ms = [];

  for (var i = 1; i <= 7; i++) {
    var dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }

  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  var mode = loc.listingMode(defaultOK);

  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || hasIntl() && new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}
/**
 * @private
 */


var PolyNumberFormatter = /*#__PURE__*/function () {
  function PolyNumberFormatter(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    if (!forceSimple && hasIntl()) {
      var intlOpts = {
        useGrouping: false
      };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }

  var _proto = PolyNumberFormatter.prototype;

  _proto.format = function format(i) {
    if (this.inf) {
      var fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      // to match the browser's numberformatter defaults
      var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);

      return padStart(_fixed, this.padTo);
    }
  };

  return PolyNumberFormatter;
}();
/**
 * @private
 */


var PolyDateFormatter = /*#__PURE__*/function () {
  function PolyDateFormatter(dt, intl, opts) {
    this.opts = opts;
    this.hasIntl = hasIntl();
    var z;

    if (dt.zone.universal && this.hasIntl) {
      // Chromium doesn't support fixed-offset zones like Etc/GMT+8 in its formatter,
      // See https://bugs.chromium.org/p/chromium/issues/detail?id=364374.
      // So we have to make do. Two cases:
      // 1. The format options tell us to show the zone. We can't do that, so the best
      // we can do is format the date in UTC.
      // 2. The format options don't tell us to show the zone. Then we can adjust them
      // the time and tell the formatter to show it to us in UTC, so that the time is right
      // and the bad zone doesn't show up.
      // We can clean all this up when Chrome fixes this.
      z = "UTC";

      if (opts.timeZoneName) {
        this.dt = dt;
      } else {
        this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
      }
    } else if (dt.zone.type === "local") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    if (this.hasIntl) {
      var intlOpts = Object.assign({}, this.opts);

      if (z) {
        intlOpts.timeZone = z;
      }

      this.dtf = getCachedDTF(intl, intlOpts);
    }
  }

  var _proto2 = PolyDateFormatter.prototype;

  _proto2.format = function format() {
    if (this.hasIntl) {
      return this.dtf.format(this.dt.toJSDate());
    } else {
      var tokenFormat = formatString(this.opts),
          loc = Locale.create("en-US");
      return Formatter.create(loc).formatDateTimeFromString(this.dt, tokenFormat);
    }
  };

  _proto2.formatToParts = function formatToParts() {
    if (this.hasIntl && hasFormatToParts()) {
      return this.dtf.formatToParts(this.dt.toJSDate());
    } else {
      // This is kind of a cop out. We actually could do this for English. However, we couldn't do it for intl strings
      // and IMO it's too weird to have an uncanny valley like that
      return [];
    }
  };

  _proto2.resolvedOptions = function resolvedOptions() {
    if (this.hasIntl) {
      return this.dtf.resolvedOptions();
    } else {
      return {
        locale: "en-US",
        numberingSystem: "latn",
        outputCalendar: "gregory"
      };
    }
  };

  return PolyDateFormatter;
}();
/**
 * @private
 */


var PolyRelFormatter = /*#__PURE__*/function () {
  function PolyRelFormatter(intl, isEnglish, opts) {
    this.opts = Object.assign({
      style: "long"
    }, opts);

    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }

  var _proto3 = PolyRelFormatter.prototype;

  _proto3.format = function format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  };

  _proto3.formatToParts = function formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  };

  return PolyRelFormatter;
}();
/**
 * @private
 */


var Locale = /*#__PURE__*/function () {
  Locale.fromOpts = function fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  };

  Locale.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
    if (defaultToEN === void 0) {
      defaultToEN = false;
    }

    var specifiedLocale = locale || Settings.defaultLocale,
        // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
    localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale()),
        numberingSystemR = numberingSystem || Settings.defaultNumberingSystem,
        outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  };

  Locale.resetCache = function resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  };

  Locale.fromObject = function fromObject(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        outputCalendar = _ref.outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar);
  };

  function Locale(locale, numbering, outputCalendar, specifiedLocale) {
    var _parseLocaleString = parseLocaleString(locale),
        parsedLocale = _parseLocaleString[0],
        parsedNumberingSystem = _parseLocaleString[1],
        parsedOutputCalendar = _parseLocaleString[2];

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = {
      format: {},
      standalone: {}
    };
    this.monthsCache = {
      format: {},
      standalone: {}
    };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  var _proto4 = Locale.prototype;

  _proto4.listingMode = function listingMode(defaultOK) {
    if (defaultOK === void 0) {
      defaultOK = true;
    }

    var intl = hasIntl(),
        hasFTP = intl && hasFormatToParts(),
        isActuallyEn = this.isEnglish(),
        hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");

    if (!hasFTP && !(isActuallyEn && hasNoWeirdness) && !defaultOK) {
      return "error";
    } else if (!hasFTP || isActuallyEn && hasNoWeirdness) {
      return "en";
    } else {
      return "intl";
    }
  };

  _proto4.clone = function clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    }
  };

  _proto4.redefaultToEN = function redefaultToEN(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(Object.assign({}, alts, {
      defaultToEN: true
    }));
  };

  _proto4.redefaultToSystem = function redefaultToSystem(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(Object.assign({}, alts, {
      defaultToEN: false
    }));
  };

  _proto4.months = function months$1(length, format, defaultOK) {
    var _this = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, months, function () {
      var intl = format ? {
        month: length,
        day: "numeric"
      } : {
        month: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this.monthsCache[formatStr][length]) {
        _this.monthsCache[formatStr][length] = mapMonths(function (dt) {
          return _this.extract(dt, intl, "month");
        });
      }

      return _this.monthsCache[formatStr][length];
    });
  };

  _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
    var _this2 = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, weekdays, function () {
      var intl = format ? {
        weekday: length,
        year: "numeric",
        month: "long",
        day: "numeric"
      } : {
        weekday: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this2.weekdaysCache[formatStr][length]) {
        _this2.weekdaysCache[formatStr][length] = mapWeekdays(function (dt) {
          return _this2.extract(dt, intl, "weekday");
        });
      }

      return _this2.weekdaysCache[formatStr][length];
    });
  };

  _proto4.meridiems = function meridiems$1(defaultOK) {
    var _this3 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, undefined, defaultOK, function () {
      return meridiems;
    }, function () {
      // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
      // for AM and PM. This is probably wrong, but it's makes parsing way easier.
      if (!_this3.meridiemCache) {
        var intl = {
          hour: "numeric",
          hour12: true
        };
        _this3.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(function (dt) {
          return _this3.extract(dt, intl, "dayperiod");
        });
      }

      return _this3.meridiemCache;
    });
  };

  _proto4.eras = function eras$1(length, defaultOK) {
    var _this4 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, eras, function () {
      var intl = {
        era: length
      }; // This is utter bullshit. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.

      if (!_this4.eraCache[length]) {
        _this4.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(function (dt) {
          return _this4.extract(dt, intl, "era");
        });
      }

      return _this4.eraCache[length];
    });
  };

  _proto4.extract = function extract(dt, intlOpts, field) {
    var df = this.dtFormatter(dt, intlOpts),
        results = df.formatToParts(),
        matching = results.find(function (m) {
      return m.type.toLowerCase() === field;
    });
    return matching ? matching.value : null;
  };

  _proto4.numberFormatter = function numberFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  };

  _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
    if (intlOpts === void 0) {
      intlOpts = {};
    }

    return new PolyDateFormatter(dt, this.intl, intlOpts);
  };

  _proto4.relFormatter = function relFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  };

  _proto4.isEnglish = function isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || hasIntl() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  };

  _proto4.equals = function equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  };

  _createClass(Locale, [{
    key: "fastNumbers",
    get: function get() {
      if (this.fastNumbersCached == null) {
        this.fastNumbersCached = supportsFastNumbers(this);
      }

      return this.fastNumbersCached;
    }
  }]);

  return Locale;
}();

/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

function combineRegexes() {
  for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
    regexes[_key] = arguments[_key];
  }

  var full = regexes.reduce(function (f, r) {
    return f + r.source;
  }, "");
  return RegExp("^" + full + "$");
}

function combineExtractors() {
  for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    extractors[_key2] = arguments[_key2];
  }

  return function (m) {
    return extractors.reduce(function (_ref, ex) {
      var mergedVals = _ref[0],
          mergedZone = _ref[1],
          cursor = _ref[2];

      var _ex = ex(m, cursor),
          val = _ex[0],
          zone = _ex[1],
          next = _ex[2];

      return [Object.assign(mergedVals, val), mergedZone || zone, next];
    }, [{}, null, 1]).slice(0, 2);
  };
}

function parse(s) {
  if (s == null) {
    return [null, null];
  }

  for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    patterns[_key3 - 1] = arguments[_key3];
  }

  for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
    var _patterns$_i = _patterns[_i],
        regex = _patterns$_i[0],
        extractor = _patterns$_i[1];
    var m = regex.exec(s);

    if (m) {
      return extractor(m);
    }
  }

  return [null, null];
}

function simpleParse() {
  for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    keys[_key4] = arguments[_key4];
  }

  return function (match, cursor) {
    var ret = {};
    var i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match[cursor + i]);
    }

    return [ret, null, cursor + i];
  };
} // ISO and SQL parsing


var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
    isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
    isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + offsetRegex.source + "?"),
    isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?"),
    isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
    isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
    isoOrdinalRegex = /(\d{4})-?(\d{3})/,
    extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"),
    extractISOOrdinalData = simpleParse("year", "ordinal"),
    sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/,
    // dumbed-down version of the ISO one
sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?"),
    sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");

function int(match, pos, fallback) {
  var m = match[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}

function extractISOYmd(match, cursor) {
  var item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  var item = {
    hour: int(match, cursor, 0),
    minute: int(match, cursor + 1, 0),
    second: int(match, cursor + 2, 0),
    millisecond: parseMillis(match[cursor + 3])
  };
  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  var local = !match[cursor] && !match[cursor + 1],
      fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]),
      zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  var zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
} // ISO duration parsing


var isoDuration = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;

function extractISODuration(match) {
  var s = match[0],
      yearStr = match[1],
      monthStr = match[2],
      weekStr = match[3],
      dayStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      millisecondsStr = match[8];
  var hasNegativePrefix = s[0] === "-";

  var maybeNegate = function maybeNegate(num) {
    return num && hasNegativePrefix ? -num : num;
  };

  return [{
    years: maybeNegate(parseInteger(yearStr)),
    months: maybeNegate(parseInteger(monthStr)),
    weeks: maybeNegate(parseInteger(weekStr)),
    days: maybeNegate(parseInteger(dayStr)),
    hours: maybeNegate(parseInteger(hourStr)),
    minutes: maybeNegate(parseInteger(minuteStr)),
    seconds: maybeNegate(parseInteger(secondStr)),
    milliseconds: maybeNegate(parseMillis(millisecondsStr))
  }];
} // These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that


var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr) result.second = parseInteger(secondStr);

  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
} // RFC 2822/5322


var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      obsOffset = match[8],
      milOffset = match[9],
      offHourStr = match[10],
      offMinuteStr = match[11],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  var offset;

  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = signedOffset(offHourStr, offMinuteStr);
  }

  return [result, new FixedOffsetZone(offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
} // http date


var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

function extractASCII(match) {
  var weekdayStr = match[1],
      monthStr = match[2],
      dayStr = match[3],
      hourStr = match[4],
      minuteStr = match[5],
      secondStr = match[6],
      yearStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
var extractISOOrdinalDataAndTime = combineExtractors(extractISOOrdinalData, extractISOTime);
var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
/**
 * @private
 */

function parseISODate(s) {
  return parse(s, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDataAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
}
function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s) {
  return parse(s, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}
function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}
var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
var extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s) {
  return parse(s, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
}

var INVALID = "Invalid Duration"; // unit conversion constants

var lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1000
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1000
  },
  hours: {
    minutes: 60,
    seconds: 60 * 60,
    milliseconds: 60 * 60 * 1000
  },
  minutes: {
    seconds: 60,
    milliseconds: 60 * 1000
  },
  seconds: {
    milliseconds: 1000
  }
},
    casualMatrix = Object.assign({
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1000
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix),
    daysInYearAccurate = 146097.0 / 400,
    daysInMonthAccurate = 146097.0 / 4800,
    accurateMatrix = Object.assign({
  years: {
    quarters: 4,
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix); // units ordered by size

var orderedUnits = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
var reverseUnits = orderedUnits.slice(0).reverse(); // clone really means "create another instance just like this one, but with these changes"

function clone(dur, alts, clear) {
  if (clear === void 0) {
    clear = false;
  }

  // deep merge for vals
  var conf = {
    values: clear ? alts.values : Object.assign({}, dur.values, alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
} // NB: mutates parameters


function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  var conv = matrix[toUnit][fromUnit],
      raw = fromMap[fromUnit] / conv,
      sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
      // ok, so this is wild, but see the matrix in the tests
  added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
} // NB: mutates parameters


function normalizeValues(matrix, vals) {
  reverseUnits.reduce(function (previous, current) {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }

      return current;
    } else {
      return previous;
    }
  }, null);
}
/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime.plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration.years}, {@link Duration.months}, {@link Duration.weeks}, {@link Duration.days}, {@link Duration.hours}, {@link Duration.minutes}, {@link Duration.seconds}, {@link Duration.milliseconds} accessors.
 * * **Configuration** See  {@link Duration.locale} and {@link Duration.numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration.plus}, {@link Duration.minus}, {@link Duration.normalize}, {@link Duration.set}, {@link Duration.reconfigure}, {@link Duration.shiftTo}, and {@link Duration.negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration.as}, {@link Duration.toISO}, {@link Duration.toFormat}, and {@link Duration.toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */


var Duration = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Duration(config) {
    var accurate = config.conversionAccuracy === "longterm" || false;
    /**
     * @access private
     */

    this.values = config.values;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.matrix = accurate ? accurateMatrix : casualMatrix;
    /**
     * @access private
     */

    this.isLuxonDuration = true;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */


  Duration.fromMillis = function fromMillis(count, opts) {
    return Duration.fromObject(Object.assign({
      milliseconds: count
    }, opts));
  }
  /**
   * Create a Duration from a Javascript object with keys like 'years' and 'hours.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {string} [obj.locale='en-US'] - the locale to use
   * @param {string} obj.numberingSystem - the numbering system to use
   * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  Duration.fromObject = function fromObject(obj) {
    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
    }

    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit, ["locale", "numberingSystem", "conversionAccuracy", "zone" // a bit of debt; it's super inconvenient internally not to be able to blindly pass this
      ]),
      loc: Locale.fromObject(obj),
      conversionAccuracy: obj.conversionAccuracy
    });
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  ;

  Duration.fromISO = function fromISO(text, opts) {
    var _parseISODuration = parseISODuration(text),
        parsed = _parseISODuration[0];

    if (parsed) {
      var obj = Object.assign(parsed, opts);
      return Duration.fromObject(obj);
    } else {
      return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    }
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  ;

  Duration.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({
        invalid: invalid
      });
    }
  }
  /**
   * @private
   */
  ;

  Duration.normalizeUnit = function normalizeUnit(unit) {
    var normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Duration.isDuration = function isDuration(o) {
    return o && o.isLuxonDuration || false;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  ;

  var _proto = Duration.prototype;

  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * The duration will be converted to the set of units in the format string using {@link Duration.shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    // reverse-compat since 1.2; we always round down now, never up, and we do it by default
    var fmtOpts = Object.assign({}, opts, {
      floor: opts.round !== false && opts.floor !== false
    });
    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID;
  }
  /**
   * Returns a Javascript object with this Duration's values.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};
    var base = Object.assign({}, this.values);

    if (opts.includeConfig) {
      base.conversionAccuracy = this.conversionAccuracy;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;
    var s = "P";
    if (this.years !== 0) s += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s += this.weeks + "W";
    if (this.days !== 0) s += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
    if (this.hours !== 0) s += this.hours + "H";
    if (this.minutes !== 0) s += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0) // this will handle "floating point madness" by removing extra decimal places
      // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
      s += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
    if (s === "P") s += "T0S";
    return s;
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.toISO();
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.as("milliseconds");
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration),
        result = {};

    for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits), _step; !(_step = _iterator()).done;) {
      var k = _step.value;

      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone(this, {
      values: result
    }, true);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return this.plus(dur.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  ;

  _proto.mapUnits = function mapUnits(fn) {
    if (!this.isValid) return this;
    var result = {};

    for (var _i = 0, _Object$keys = Object.keys(this.values); _i < _Object$keys.length; _i++) {
      var k = _Object$keys[_i];
      result[k] = asNumber(fn(this.values[k], k));
    }

    return clone(this, {
      values: result
    }, true);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).years //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).months //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).days //=> 3
   * @return {number}
   */
  ;

  _proto.get = function get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var mixed = Object.assign(this.values, normalizeObject(values, Duration.normalizeUnit, []));
    return clone(this, {
      values: mixed
    });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        conversionAccuracy = _ref.conversionAccuracy;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem
    }),
        opts = {
      loc: loc
    };

    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }

    return clone(this, opts);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  ;

  _proto.as = function as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  ;

  _proto.normalize = function normalize() {
    if (!this.isValid) return this;
    var vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone(this, {
      values: vals
    }, true);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  ;

  _proto.shiftTo = function shiftTo() {
    for (var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++) {
      units[_key] = arguments[_key];
    }

    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map(function (u) {
      return Duration.normalizeUnit(u);
    });
    var built = {},
        accumulated = {},
        vals = this.toObject();
    var lastUnit;

    for (var _iterator2 = _createForOfIteratorHelperLoose(orderedUnits), _step2; !(_step2 = _iterator2()).done;) {
      var k = _step2.value;

      if (units.indexOf(k) >= 0) {
        lastUnit = k;
        var own = 0; // anything we haven't boiled down yet should get boiled to this unit

        for (var ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        } // plus anything that's already in this unit


        if (isNumber(vals[k])) {
          own += vals[k];
        }

        var i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = own - i; // we'd like to absorb these fractions in another unit
        // plus anything further down the chain that should be rolled up in to this

        for (var down in vals) {
          if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        } // otherwise, keep it in the wings to boil it later

      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    } // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty


    for (var key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }

    return clone(this, {
      values: built
    }, true).normalize();
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  ;

  _proto.negate = function negate() {
    if (!this.isValid) return this;
    var negated = {};

    for (var _i2 = 0, _Object$keys2 = Object.keys(this.values); _i2 < _Object$keys2.length; _i2++) {
      var k = _Object$keys2[_i2];
      negated[k] = -this.values[k];
    }

    return clone(this, {
      values: negated
    }, true);
  }
  /**
   * Get the years.
   * @type {number}
   */
  ;

  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    for (var _iterator3 = _createForOfIteratorHelperLoose(orderedUnits), _step3; !(_step3 = _iterator3()).done;) {
      var u = _step3.value;

      if (this.values[u] !== other.values[u]) {
        return false;
      }
    }

    return true;
  };

  _createClass(Duration, [{
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: "years",
    get: function get() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */

  }, {
    key: "quarters",
    get: function get() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */

  }, {
    key: "months",
    get: function get() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */

  }, {
    key: "weeks",
    get: function get() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */

  }, {
    key: "days",
    get: function get() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */

  }, {
    key: "hours",
    get: function get() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */

  }, {
    key: "minutes",
    get: function get() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */

  }, {
    key: "seconds",
    get: function get() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */

  }, {
    key: "milliseconds",
    get: function get() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Duration;
}();
function friendlyDuration(durationish) {
  if (isNumber(durationish)) {
    return Duration.fromMillis(durationish);
  } else if (Duration.isDuration(durationish)) {
    return durationish;
  } else if (typeof durationish === "object") {
    return Duration.fromObject(durationish);
  } else {
    throw new InvalidArgumentError("Unknown duration argument " + durationish + " of type " + typeof durationish);
  }
}

var INVALID$1 = "Invalid Interval"; // checks if the start is equal to or before the end

function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
  } else {
    return null;
  }
}
/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link fromDateTimes}, {@link after}, {@link before}, or {@link fromISO}.
 * * **Accessors** Use {@link start} and {@link end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link count}, {@link length}, {@link hasSame}, {@link contains}, {@link isAfter}, or {@link isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link set}, {@link splitAt}, {@link splitBy}, {@link divideEqually}, {@link merge}, {@link xor}, {@link union}, {@link intersection}, or {@link difference}.
 * * **Comparison** To compare this Interval to another one, use {@link equals}, {@link overlaps}, {@link abutsStart}, {@link abutsEnd}, {@link engulfs}.
 * * **Output** To convert the Interval into other representations, see {@link toString}, {@link toISO}, {@link toISODate}, {@link toISOTime}, {@link toFormat}, and {@link toDuration}.
 */


var Interval = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Interval(config) {
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */

    this.e = config.end;
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.isLuxonInterval = true;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */


  Interval.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({
        invalid: invalid
      });
    }
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  ;

  Interval.fromDateTimes = function fromDateTimes(start, end) {
    var builtStart = friendlyDateTime(start),
        builtEnd = friendlyDateTime(end);
    var validateError = validateStartEnd(builtStart, builtEnd);

    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd
      });
    } else {
      return validateError;
    }
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.after = function after(start, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.before = function before(end, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime.fromISO} and optionally {@link Duration.fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  ;

  Interval.fromISO = function fromISO(text, opts) {
    var _split = (text || "").split("/", 2),
        s = _split[0],
        e = _split[1];

    if (s && e) {
      var start, startIsValid;

      try {
        start = DateTime.fromISO(s, opts);
        startIsValid = start.isValid;
      } catch (e) {
        startIsValid = false;
      }

      var end, endIsValid;

      try {
        end = DateTime.fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e) {
        endIsValid = false;
      }

      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (startIsValid) {
        var dur = Duration.fromISO(e, opts);

        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (endIsValid) {
        var _dur = Duration.fromISO(s, opts);

        if (_dur.isValid) {
          return Interval.before(end, _dur);
        }
      }
    }

    return Interval.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Interval.isInterval = function isInterval(o) {
    return o && o.isLuxonInterval || false;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  ;

  var _proto = Interval.prototype;

  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  _proto.length = function length(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  ;

  _proto.count = function count(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (!this.isValid) return NaN;
    var start = this.start.startOf(unit),
        end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  ;

  _proto.isEmpty = function isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isAfter = function isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isBefore = function isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.contains = function contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  ;

  _proto.set = function set(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        start = _ref.start,
        end = _ref.end;

    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...[DateTime]} dateTimes - the unit of time to count.
   * @return {[Interval]}
   */
  ;

  _proto.splitAt = function splitAt() {
    var _this = this;

    if (!this.isValid) return [];

    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    var sorted = dateTimes.map(friendlyDateTime).filter(function (d) {
      return _this.contains(d);
    }).sort(),
        results = [];
    var s = this.s,
        i = 0;

    while (s < this.e) {
      var added = sorted[i] || this.e,
          next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {[Interval]}
   */
  ;

  _proto.splitBy = function splitBy(duration) {
    var dur = friendlyDuration(duration);

    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }

    var s = this.s,
        added,
        next;
    var results = [];

    while (s < this.e) {
      added = s.plus(dur);
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
    }

    return results;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {[Interval]}
   */
  ;

  _proto.divideEqually = function divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.overlaps = function overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsStart = function abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsEnd = function abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.engulfs = function engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.intersection = function intersection(other) {
    if (!this.isValid) return this;
    var s = this.s > other.s ? this.s : other.s,
        e = this.e < other.e ? this.e : other.e;

    if (s > e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.union = function union(other) {
    if (!this.isValid) return this;
    var s = this.s < other.s ? this.s : other.s,
        e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  ;

  Interval.merge = function merge(intervals) {
    var _intervals$sort$reduc = intervals.sort(function (a, b) {
      return a.s - b.s;
    }).reduce(function (_ref2, item) {
      var sofar = _ref2[0],
          current = _ref2[1];

      if (!current) {
        return [sofar, item];
      } else if (current.overlaps(item) || current.abutsStart(item)) {
        return [sofar, current.union(item)];
      } else {
        return [sofar.concat([current]), item];
      }
    }, [[], null]),
        found = _intervals$sort$reduc[0],
        final = _intervals$sort$reduc[1];

    if (final) {
      found.push(final);
    }

    return found;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  ;

  Interval.xor = function xor(intervals) {
    var _Array$prototype;

    var start = null,
        currentCount = 0;

    var results = [],
        ends = intervals.map(function (i) {
      return [{
        time: i.s,
        type: "s"
      }, {
        time: i.e,
        type: "e"
      }];
    }),
        flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends),
        arr = flattened.sort(function (a, b) {
      return a.time - b.time;
    });

    for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;) {
      var i = _step.value;
      currentCount += i.type === "s" ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {[Interval]}
   */
  ;

  _proto.difference = function difference() {
    var _this2 = this;

    for (var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      intervals[_key2] = arguments[_key2];
    }

    return Interval.xor([this].concat(intervals)).map(function (i) {
      return _this2.intersection(i);
    }).filter(function (i) {
      return i && !i.isEmpty();
    });
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    if (!this.isValid) return INVALID$1;
    return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISO(opts) + "/" + this.e.toISO(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate() {
    if (!this.isValid) return INVALID$1;
    return this.s.toISODate() + "/" + this.e.toISODate();
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime.toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(dateFormat, _temp2) {
    var _ref3 = _temp2 === void 0 ? {} : _temp2,
        _ref3$separator = _ref3.separator,
        separator = _ref3$separator === void 0 ? " – " : _ref3$separator;

    if (!this.isValid) return INVALID$1;
    return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  ;

  _proto.toDuration = function toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }

    return this.e.diff(this.s, unit, opts);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  ;

  _proto.mapEndpoints = function mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  };

  _createClass(Interval, [{
    key: "start",
    get: function get() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */

  }, {
    key: "end",
    get: function get() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Interval;
}();

/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */

var Info = /*#__PURE__*/function () {
  function Info() {}

  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  Info.hasDST = function hasDST(zone) {
    if (zone === void 0) {
      zone = Settings.defaultZone;
    }

    var proto = DateTime.local().setZone(zone).set({
      month: 12
    });
    return !zone.universal && proto.offset !== proto.set({
      month: 6
    }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  ;

  Info.isValidIANAZone = function isValidIANAZone(zone) {
    return IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone.isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  ;

  Info.normalizeZone = function normalizeZone$1(input) {
    return normalizeZone(input, Settings.defaultZone);
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {[string]}
   */
  ;

  Info.months = function months(length, _temp) {
    if (length === void 0) {
      length = "long";
    }

    var _ref = _temp === void 0 ? {} : _temp,
        _ref$locale = _ref.locale,
        locale = _ref$locale === void 0 ? null : _ref$locale,
        _ref$numberingSystem = _ref.numberingSystem,
        numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem,
        _ref$outputCalendar = _ref.outputCalendar,
        outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {[string]}
   */
  ;

  Info.monthsFormat = function monthsFormat(length, _temp2) {
    if (length === void 0) {
      length = "long";
    }

    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$locale = _ref2.locale,
        locale = _ref2$locale === void 0 ? null : _ref2$locale,
        _ref2$numberingSystem = _ref2.numberingSystem,
        numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem,
        _ref2$outputCalendar = _ref2.outputCalendar,
        outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length, true);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {[string]}
   */
  ;

  Info.weekdays = function weekdays(length, _temp3) {
    if (length === void 0) {
      length = "long";
    }

    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        _ref3$locale = _ref3.locale,
        locale = _ref3$locale === void 0 ? null : _ref3$locale,
        _ref3$numberingSystem = _ref3.numberingSystem,
        numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link weekdays}
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @return {[string]}
   */
  ;

  Info.weekdaysFormat = function weekdaysFormat(length, _temp4) {
    if (length === void 0) {
      length = "long";
    }

    var _ref4 = _temp4 === void 0 ? {} : _temp4,
        _ref4$locale = _ref4.locale,
        locale = _ref4$locale === void 0 ? null : _ref4$locale,
        _ref4$numberingSystem = _ref4.numberingSystem,
        numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length, true);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {[string]}
   */
  ;

  Info.meridiems = function meridiems(_temp5) {
    var _ref5 = _temp5 === void 0 ? {} : _temp5,
        _ref5$locale = _ref5.locale,
        locale = _ref5$locale === void 0 ? null : _ref5$locale;

    return Locale.create(locale).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {[string]}
   */
  ;

  Info.eras = function eras(length, _temp6) {
    if (length === void 0) {
      length = "short";
    }

    var _ref6 = _temp6 === void 0 ? {} : _temp6,
        _ref6$locale = _ref6.locale,
        locale = _ref6$locale === void 0 ? null : _ref6$locale;

    return Locale.create(locale, null, "gregory").eras(length);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, timezone support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `zones`: whether this environment supports IANA timezones
   * * `intlTokens`: whether this environment supports internationalized token-based formatting/parsing
   * * `intl`: whether this environment supports general internationalization
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { intl: true, intlTokens: false, zones: true, relative: false }
   * @return {Object}
   */
  ;

  Info.features = function features() {
    var intl = false,
        intlTokens = false,
        zones = false,
        relative = false;

    if (hasIntl()) {
      intl = true;
      intlTokens = hasFormatToParts();
      relative = hasRelative();

      try {
        zones = new Intl.DateTimeFormat("en", {
          timeZone: "America/New_York"
        }).resolvedOptions().timeZone === "America/New_York";
      } catch (e) {
        zones = false;
      }
    }

    return {
      intl: intl,
      intlTokens: intlTokens,
      zones: zones,
      relative: relative
    };
  };

  return Info;
}();

function dayDiff(earlier, later) {
  var utcDayStart = function utcDayStart(dt) {
    return dt.toUTC(0, {
      keepLocalTime: true
    }).startOf("day").valueOf();
  },
      ms = utcDayStart(later) - utcDayStart(earlier);

  return Math.floor(Duration.fromMillis(ms).as("days"));
}

function highOrderDiffs(cursor, later, units) {
  var differs = [["years", function (a, b) {
    return b.year - a.year;
  }], ["months", function (a, b) {
    return b.month - a.month + (b.year - a.year) * 12;
  }], ["weeks", function (a, b) {
    var days = dayDiff(a, b);
    return (days - days % 7) / 7;
  }], ["days", dayDiff]];
  var results = {};
  var lowestOrder, highWater;

  for (var _i = 0, _differs = differs; _i < _differs.length; _i++) {
    var _differs$_i = _differs[_i],
        unit = _differs$_i[0],
        differ = _differs$_i[1];

    if (units.indexOf(unit) >= 0) {
      var _cursor$plus;

      lowestOrder = unit;
      var delta = differ(cursor, later);
      highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));

      if (highWater > later) {
        var _cursor$plus2;

        cursor = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[unit] = delta - 1, _cursor$plus2));
        delta -= 1;
      } else {
        cursor = highWater;
      }

      results[unit] = delta;
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

function _diff (earlier, later, units, opts) {
  var _highOrderDiffs = highOrderDiffs(earlier, later, units),
      cursor = _highOrderDiffs[0],
      results = _highOrderDiffs[1],
      highWater = _highOrderDiffs[2],
      lowestOrder = _highOrderDiffs[3];

  var remainingMillis = later - cursor;
  var lowerOrderUnits = units.filter(function (u) {
    return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0;
  });

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      var _cursor$plus3;

      highWater = cursor.plus((_cursor$plus3 = {}, _cursor$plus3[lowestOrder] = 1, _cursor$plus3));
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  var duration = Duration.fromObject(Object.assign(results, opts));

  if (lowerOrderUnits.length > 0) {
    var _Duration$fromMillis;

    return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}

var numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
};
var numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}; // eslint-disable-next-line

var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  var value = parseInt(str, 10);

  if (isNaN(value)) {
    value = "";

    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);

      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (var key in numberingSystemsUTF16) {
          var _numberingSystemsUTF = numberingSystemsUTF16[key],
              min = _numberingSystemsUTF[0],
              max = _numberingSystemsUTF[1];

          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }

    return parseInt(value, 10);
  } else {
    return value;
  }
}
function digitRegex(_ref, append) {
  var numberingSystem = _ref.numberingSystem;

  if (append === void 0) {
    append = "";
  }

  return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
}

var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

function intUnit(regex, post) {
  if (post === void 0) {
    post = function post(i) {
      return i;
    };
  }

  return {
    regex: regex,
    deser: function deser(_ref) {
      var s = _ref[0];
      return post(parseDigits(s));
    }
  };
}

var NBSP = String.fromCharCode(160);
var spaceOrNBSP = "( |" + NBSP + ")";
var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");

function fixListRegex(s) {
  // make dots optional and also make them literal
  // make space and non breakable space characters interchangeable
  return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}

function stripInsensitivities(s) {
  return s.replace(/\./g, "") // ignore dots that were made optional
  .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
  .toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: function deser(_ref2) {
        var s = _ref2[0];
        return strings.findIndex(function (i) {
          return stripInsensitivities(s) === stripInsensitivities(i);
        }) + startIndex;
      }
    };
  }
}

function offset(regex, groups) {
  return {
    regex: regex,
    deser: function deser(_ref3) {
      var h = _ref3[1],
          m = _ref3[2];
      return signedOffset(h, m);
    },
    groups: groups
  };
}

function simple(regex) {
  return {
    regex: regex,
    deser: function deser(_ref4) {
      var s = _ref4[0];
      return s;
    }
  };
}

function escapeToken(value) {
  // eslint-disable-next-line no-useless-escape
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}

function unitForToken(token, loc) {
  var one = digitRegex(loc),
      two = digitRegex(loc, "{2}"),
      three = digitRegex(loc, "{3}"),
      four = digitRegex(loc, "{4}"),
      six = digitRegex(loc, "{6}"),
      oneOrTwo = digitRegex(loc, "{1,2}"),
      oneToThree = digitRegex(loc, "{1,3}"),
      oneToSix = digitRegex(loc, "{1,6}"),
      oneToNine = digitRegex(loc, "{1,9}"),
      twoToFour = digitRegex(loc, "{2,4}"),
      fourToSix = digitRegex(loc, "{4,6}"),
      literal = function literal(t) {
    return {
      regex: RegExp(escapeToken(t.val)),
      deser: function deser(_ref5) {
        var s = _ref5[0];
        return s;
      },
      literal: true
    };
  },
      unitate = function unitate(t) {
    if (token.literal) {
      return literal(t);
    }

    switch (t.val) {
      // era
      case "G":
        return oneOf(loc.eras("short", false), 0);

      case "GG":
        return oneOf(loc.eras("long", false), 0);
      // years

      case "y":
        return intUnit(oneToSix);

      case "yy":
        return intUnit(twoToFour, untruncateYear);

      case "yyyy":
        return intUnit(four);

      case "yyyyy":
        return intUnit(fourToSix);

      case "yyyyyy":
        return intUnit(six);
      // months

      case "M":
        return intUnit(oneOrTwo);

      case "MM":
        return intUnit(two);

      case "MMM":
        return oneOf(loc.months("short", true, false), 1);

      case "MMMM":
        return oneOf(loc.months("long", true, false), 1);

      case "L":
        return intUnit(oneOrTwo);

      case "LL":
        return intUnit(two);

      case "LLL":
        return oneOf(loc.months("short", false, false), 1);

      case "LLLL":
        return oneOf(loc.months("long", false, false), 1);
      // dates

      case "d":
        return intUnit(oneOrTwo);

      case "dd":
        return intUnit(two);
      // ordinals

      case "o":
        return intUnit(oneToThree);

      case "ooo":
        return intUnit(three);
      // time

      case "HH":
        return intUnit(two);

      case "H":
        return intUnit(oneOrTwo);

      case "hh":
        return intUnit(two);

      case "h":
        return intUnit(oneOrTwo);

      case "mm":
        return intUnit(two);

      case "m":
        return intUnit(oneOrTwo);

      case "q":
        return intUnit(oneOrTwo);

      case "qq":
        return intUnit(two);

      case "s":
        return intUnit(oneOrTwo);

      case "ss":
        return intUnit(two);

      case "S":
        return intUnit(oneToThree);

      case "SSS":
        return intUnit(three);

      case "u":
        return simple(oneToNine);
      // meridiem

      case "a":
        return oneOf(loc.meridiems(), 0);
      // weekYear (k)

      case "kkkk":
        return intUnit(four);

      case "kk":
        return intUnit(twoToFour, untruncateYear);
      // weekNumber (W)

      case "W":
        return intUnit(oneOrTwo);

      case "WW":
        return intUnit(two);
      // weekdays

      case "E":
      case "c":
        return intUnit(one);

      case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);

      case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);

      case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);

      case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);
      // offset/zone

      case "Z":
      case "ZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);

      case "ZZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are

      case "z":
        return simple(/[a-z_+-/]{1,256}?/i);

      default:
        return literal(t);
    }
  };

  var unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}

var partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};

function tokenForPart(part, locale, formatOpts) {
  var type = part.type,
      value = part.value;

  if (type === "literal") {
    return {
      literal: true,
      val: value
    };
  }

  var style = formatOpts[type];
  var val = partTypeStyleToTokenVal[type];

  if (typeof val === "object") {
    val = val[style];
  }

  if (val) {
    return {
      literal: false,
      val: val
    };
  }

  return undefined;
}

function buildRegex(units) {
  var re = units.map(function (u) {
    return u.regex;
  }).reduce(function (f, r) {
    return f + "(" + r.source + ")";
  }, "");
  return ["^" + re + "$", units];
}

function match(input, regex, handlers) {
  var matches = input.match(regex);

  if (matches) {
    var all = {};
    var matchIndex = 1;

    for (var i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        var h = handlers[i],
            groups = h.groups ? h.groups + 1 : 1;

        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }

        matchIndex += groups;
      }
    }

    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  var toField = function toField(token) {
    switch (token) {
      case "S":
        return "millisecond";

      case "s":
        return "second";

      case "m":
        return "minute";

      case "h":
      case "H":
        return "hour";

      case "d":
        return "day";

      case "o":
        return "ordinal";

      case "L":
      case "M":
        return "month";

      case "y":
        return "year";

      case "E":
      case "c":
        return "weekday";

      case "W":
        return "weekNumber";

      case "k":
        return "weekYear";

      case "q":
        return "quarter";

      default:
        return null;
    }
  };

  var zone;

  if (!isUndefined(matches.Z)) {
    zone = new FixedOffsetZone(matches.Z);
  } else if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  } else {
    zone = null;
  }

  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }

  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }

  var vals = Object.keys(matches).reduce(function (r, k) {
    var f = toField(k);

    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});
  return [vals, zone];
}

var dummyDateTimeCache = null;

function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }

  return dummyDateTimeCache;
}

function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }

  var formatOpts = Formatter.macroTokenToFormatOpts(token.val);

  if (!formatOpts) {
    return token;
  }

  var formatter = Formatter.create(locale, formatOpts);
  var parts = formatter.formatDateTimeParts(getDummyDateTime());
  var tokens = parts.map(function (p) {
    return tokenForPart(p, locale, formatOpts);
  });

  if (tokens.includes(undefined)) {
    return token;
  }

  return tokens;
}

function expandMacroTokens(tokens, locale) {
  var _Array$prototype;

  return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function (t) {
    return maybeExpandMacroToken(t, locale);
  }));
}
/**
 * @private
 */


function explainFromTokens(locale, input, format) {
  var tokens = expandMacroTokens(Formatter.parseFormat(format), locale),
      units = tokens.map(function (t) {
    return unitForToken(t, locale);
  }),
      disqualifyingUnit = units.find(function (t) {
    return t.invalidReason;
  });

  if (disqualifyingUnit) {
    return {
      input: input,
      tokens: tokens,
      invalidReason: disqualifyingUnit.invalidReason
    };
  } else {
    var _buildRegex = buildRegex(units),
        regexString = _buildRegex[0],
        handlers = _buildRegex[1],
        regex = RegExp(regexString, "i"),
        _match = match(input, regex, handlers),
        rawMatches = _match[0],
        matches = _match[1],
        _ref6 = matches ? dateTimeFromMatches(matches) : [null, null],
        result = _ref6[0],
        zone = _ref6[1];

    if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
      throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
    }

    return {
      input: input,
      tokens: tokens,
      regex: regex,
      rawMatches: rawMatches,
      matches: matches,
      result: result,
      zone: zone
    };
  }
}
function parseFromTokens(locale, input, format) {
  var _explainFromTokens = explainFromTokens(locale, input, format),
      result = _explainFromTokens.result,
      zone = _explainFromTokens.zone,
      invalidReason = _explainFromTokens.invalidReason;

  return [result, zone, invalidReason];
}

var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
}

function dayOfWeek(year, month, day) {
  var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  var table = isLeapYear(year) ? leapLadder : nonLeapLadder,
      month0 = table.findIndex(function (i) {
    return i < ordinal;
  }),
      day = ordinal - table[month0];
  return {
    month: month0 + 1,
    day: day
  };
}
/**
 * @private
 */


function gregorianToWeek(gregObj) {
  var year = gregObj.year,
      month = gregObj.month,
      day = gregObj.day,
      ordinal = computeOrdinal(year, month, day),
      weekday = dayOfWeek(year, month, day);
  var weekNumber = Math.floor((ordinal - weekday + 10) / 7),
      weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return Object.assign({
    weekYear: weekYear,
    weekNumber: weekNumber,
    weekday: weekday
  }, timeObject(gregObj));
}
function weekToGregorian(weekData) {
  var weekYear = weekData.weekYear,
      weekNumber = weekData.weekNumber,
      weekday = weekData.weekday,
      weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
      yearInDays = daysInYear(weekYear);
  var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
      year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }

  var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal.month,
      day = _uncomputeOrdinal.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
  var year = gregData.year,
      month = gregData.month,
      day = gregData.day,
      ordinal = computeOrdinal(year, month, day);
  return Object.assign({
    year: year,
    ordinal: ordinal
  }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
  var year = ordinalData.year,
      ordinal = ordinalData.ordinal,
      _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal2.month,
      day = _uncomputeOrdinal2.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(ordinalData));
}
function hasInvalidWeekData(obj) {
  var validYear = isInteger(obj.weekYear),
      validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)),
      validWeekday = integerBetween(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}
function hasInvalidOrdinalData(obj) {
  var validYear = isInteger(obj.year),
      validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}
function hasInvalidGregorianData(obj) {
  var validYear = isInteger(obj.year),
      validMonth = integerBetween(obj.month, 1, 12),
      validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}
function hasInvalidTimeData(obj) {
  var hour = obj.hour,
      minute = obj.minute,
      second = obj.second,
      millisecond = obj.millisecond;
  var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0,
      validMinute = integerBetween(minute, 0, 59),
      validSecond = integerBetween(second, 0, 59),
      validMillisecond = integerBetween(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}

var INVALID$2 = "Invalid DateTime";
var MAX_DATE = 8.64e15;

function unsupportedZone(zone) {
  return new Invalid("unsupported zone", "the zone \"" + zone.name + "\" is not supported");
} // we cache week data on the DT object and this intermediates the cache


function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }

  return dt.weekData;
} // clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties


function clone$1(inst, alts) {
  var current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime(Object.assign({}, current, alts, {
    old: current
  }));
} // find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)


function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - o * 60 * 1000; // Test whether the zone matches the offset for this ts

  var o2 = tz.offset(utcGuess); // If so, offset didn't change and we're done

  if (o === o2) {
    return [utcGuess, o];
  } // If not, change the ts by the difference in the offset


  utcGuess -= (o2 - o) * 60 * 1000; // If that gives us the local time we want, we're done

  var o3 = tz.offset(utcGuess);

  if (o2 === o3) {
    return [utcGuess, o2];
  } // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time


  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
} // convert an epoch timestamp into a calendar object with the given offset


function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;
  var d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
} // convert a calendar object to a epoch timestamp


function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
} // create a new DT instance by adding a duration, adjusting for DSTs


function adjustTime(inst, dur) {
  var oPre = inst.o,
      year = inst.c.year + Math.trunc(dur.years),
      month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3,
      c = Object.assign({}, inst.c, {
    year: year,
    month: month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
  }),
      millisToAdd = Duration.fromObject({
    years: dur.years - Math.trunc(dur.years),
    quarters: dur.quarters - Math.trunc(dur.quarters),
    months: dur.months - Math.trunc(dur.months),
    weeks: dur.weeks - Math.trunc(dur.weeks),
    days: dur.days - Math.trunc(dur.days),
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"),
      localTS = objToLocalTS(c);

  var _fixOffset = fixOffset(localTS, oPre, inst.zone),
      ts = _fixOffset[0],
      o = _fixOffset[1];

  if (millisToAdd !== 0) {
    ts += millisToAdd; // that could have changed the offset by going over a DST, but we want to keep the ts the same

    o = inst.zone.offset(ts);
  }

  return {
    ts: ts,
    o: o
  };
} // helper useful in turning the results of parsing into real dates
// by handling the zone options


function parseDataToDateTime(parsed, parsedZone, opts, format, text) {
  var setZone = opts.setZone,
      zone = opts.zone;

  if (parsed && Object.keys(parsed).length !== 0) {
    var interpretationZone = parsedZone || zone,
        inst = DateTime.fromObject(Object.assign(parsed, opts, {
      zone: interpretationZone,
      // setZone is a valid option in the calling methods, but not in fromObject
      setZone: undefined
    }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(new Invalid("unparsable", "the input \"" + text + "\" can't be parsed as " + format));
  }
} // if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details


function toTechFormat(dt, format, allowZ) {
  if (allowZ === void 0) {
    allowZ = true;
  }

  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ: allowZ,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
} // technical time formats (e.g. the time part of ISO 8601), take some options
// and this commonizes their handling


function toTechTimeFormat(dt, _ref) {
  var _ref$suppressSeconds = _ref.suppressSeconds,
      suppressSeconds = _ref$suppressSeconds === void 0 ? false : _ref$suppressSeconds,
      _ref$suppressMillisec = _ref.suppressMilliseconds,
      suppressMilliseconds = _ref$suppressMillisec === void 0 ? false : _ref$suppressMillisec,
      includeOffset = _ref.includeOffset,
      _ref$includeZone = _ref.includeZone,
      includeZone = _ref$includeZone === void 0 ? false : _ref$includeZone,
      _ref$spaceZone = _ref.spaceZone,
      spaceZone = _ref$spaceZone === void 0 ? false : _ref$spaceZone,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? "extended" : _ref$format;
  var fmt = format === "basic" ? "HHmm" : "HH:mm";

  if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
    fmt += format === "basic" ? "ss" : ":ss";

    if (!suppressMilliseconds || dt.millisecond !== 0) {
      fmt += ".SSS";
    }
  }

  if ((includeZone || includeOffset) && spaceZone) {
    fmt += " ";
  }

  if (includeZone) {
    fmt += "z";
  } else if (includeOffset) {
    fmt += format === "basic" ? "ZZZ" : "ZZ";
  }

  return toTechFormat(dt, fmt);
} // defaults for unspecified units in the supported calendars


var defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}; // Units in the supported calendars, sorted by bigness

var orderedUnits$1 = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
    orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"]; // standardize case and plurality in units

function normalizeUnit(unit) {
  var normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized) throw new InvalidUnitError(unit);
  return normalized;
} // this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.


function quickDT(obj, zone) {
  // assume we have the higher-order units
  for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits$1), _step; !(_step = _iterator()).done;) {
    var u = _step.value;

    if (isUndefined(obj[u])) {
      obj[u] = defaultUnitValues[u];
    }
  }

  var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);

  if (invalid) {
    return DateTime.invalid(invalid);
  }

  var tsNow = Settings.now(),
      offsetProvis = zone.offset(tsNow),
      _objToTS = objToTS(obj, offsetProvis, zone),
      ts = _objToTS[0],
      o = _objToTS[1];

  return new DateTime({
    ts: ts,
    zone: zone,
    o: o
  });
}

function diffRelative(start, end, opts) {
  var round = isUndefined(opts.round) ? true : opts.round,
      format = function format(c, unit) {
    c = roundTo(c, round || opts.calendary ? 0 : 2, true);
    var formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c, unit);
  },
      differ = function differ(unit) {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } else return 0;
    } else {
      return end.diff(start, unit).get(unit);
    }
  };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  for (var _iterator2 = _createForOfIteratorHelperLoose(opts.units), _step2; !(_step2 = _iterator2()).done;) {
    var unit = _step2.value;
    var count = differ(unit);

    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }

  return format(0, opts.units[opts.units.length - 1]);
}
/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link local}, {@link utc}, and (most flexibly) {@link fromObject}. To create one from a standard string format, use {@link fromISO}, {@link fromHTTP}, and {@link fromRFC2822}. To create one from a custom string format, use {@link fromFormat}. To create one from a native JS date, use {@link fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link toObject}), use the {@link year}, {@link month},
 * {@link day}, {@link hour}, {@link minute}, {@link second}, {@link millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link weekYear}, {@link weekNumber}, and {@link weekday} accessors.
 * * **Configuration** See the {@link locale} and {@link numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link set}, {@link reconfigure}, {@link setZone}, {@link setLocale}, {@link plus}, {@link minus}, {@link endOf}, {@link startOf}, {@link toUTC}, and {@link toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link toRelative}, {@link toRelativeCalendar}, {@link toJSON}, {@link toISO}, {@link toHTTP}, {@link toObject}, {@link toRFC2822}, {@link toString}, {@link toLocaleString}, {@link toFormat}, {@link toMillis} and {@link toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */


var DateTime = /*#__PURE__*/function () {
  /**
   * @access private
   */
  function DateTime(config) {
    var zone = config.zone || Settings.defaultZone;
    var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */

    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    var c = null,
        o = null;

    if (!invalid) {
      var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

      if (unchanged) {
        var _ref2 = [config.old.c, config.old.o];
        c = _ref2[0];
        o = _ref2[1];
      } else {
        var ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }
    /**
     * @access private
     */


    this._zone = zone;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.invalid = invalid;
    /**
     * @access private
     */

    this.weekData = null;
    /**
     * @access private
     */

    this.c = c;
    /**
     * @access private
     */

    this.o = o;
    /**
     * @access private
     */

    this.isLuxonDateTime = true;
  } // CONSTRUCT

  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                            //~> now
   * @example DateTime.local(2017)                        //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                     //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12)                 //~> 2017-03-12T00:00:00
   * @example DateTime.local(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */


  DateTime.local = function local(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({
        ts: Settings.now()
      });
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, Settings.defaultZone);
    }
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.utc()                            //~> now
   * @example DateTime.utc(2017)                        //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                     //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                 //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765Z
   * @return {DateTime}
   */
  ;

  DateTime.utc = function utc(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({
        ts: Settings.now(),
        zone: FixedOffsetZone.utcInstance
      });
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, FixedOffsetZone.utcInstance);
    }
  }
  /**
   * Create a DateTime from a Javascript Date object. Uses the default zone.
   * @param {Date} date - a Javascript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  ;

  DateTime.fromJSDate = function fromJSDate(date, options) {
    if (options === void 0) {
      options = {};
    }

    var ts = isDate(date) ? date.valueOf() : NaN;

    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }

    var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    return new DateTime({
      ts: ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options)
    });
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromMillis = function fromMillis(milliseconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError("fromMillis requires a numerical input, but received a " + typeof milliseconds + " with value " + milliseconds);
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromSeconds = function fromSeconds(seconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a Javascript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {string|Zone} [obj.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [obj.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} obj.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} obj.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  ;

  DateTime.fromObject = function fromObject(obj) {
    var zoneToUse = normalizeZone(obj.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    var tsNow = Settings.now(),
        offsetProvis = zoneToUse.offset(tsNow),
        normalized = normalizeObject(obj, normalizeUnit, ["zone", "locale", "outputCalendar", "numberingSystem"]),
        containsOrdinal = !isUndefined(normalized.ordinal),
        containsGregorYear = !isUndefined(normalized.year),
        containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
        containsGregor = containsGregorYear || containsGregorMD,
        definiteWeekDef = normalized.weekYear || normalized.weekNumber,
        loc = Locale.fromObject(obj); // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor; // configure ourselves to deal with gregorian dates or week stuff

    var units,
        defaultValues,
        objNow = tsToObj(tsNow, offsetProvis);

    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits$1;
      defaultValues = defaultUnitValues;
    } // set default values for missing stuff


    var foundFirst = false;

    for (var _iterator3 = _createForOfIteratorHelperLoose(units), _step3; !(_step3 = _iterator3()).done;) {
      var u = _step3.value;
      var v = normalized[u];

      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    } // make sure the values we have are in range


    var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized),
        invalid = higherOrderInvalid || hasInvalidTimeData(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    } // compute the actual time


    var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized,
        _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse),
        tsFinal = _objToTS2[0],
        offsetFinal = _objToTS2[1],
        inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc: loc
    }); // gregorian data + weekday serves only to validate


    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
    }

    return inst;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  ;

  DateTime.fromISO = function fromISO(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseISODate = parseISODate(text),
        vals = _parseISODate[0],
        parsedZone = _parseISODate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  ;

  DateTime.fromRFC2822 = function fromRFC2822(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseRFC2822Date = parseRFC2822Date(text),
        vals = _parseRFC2822Date[0],
        parsedZone = _parseRFC2822Date[1];

    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  ;

  DateTime.fromHTTP = function fromHTTP(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseHTTPDate = parseHTTPDate(text),
        vals = _parseHTTPDate[0],
        parsedZone = _parseHTTPDate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromFormat = function fromFormat(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }

    var _opts = opts,
        _opts$locale = _opts.locale,
        locale = _opts$locale === void 0 ? null : _opts$locale,
        _opts$numberingSystem = _opts.numberingSystem,
        numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    }),
        _parseFromTokens = parseFromTokens(localeToUse, text, fmt),
        vals = _parseFromTokens[0],
        parsedZone = _parseFromTokens[1],
        invalid = _parseFromTokens[2];

    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text);
    }
  }
  /**
   * @deprecated use fromFormat instead
   */
  ;

  DateTime.fromString = function fromString(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return DateTime.fromFormat(text, fmt, opts);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  ;

  DateTime.fromSQL = function fromSQL(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseSQL = parseSQL(text),
        vals = _parseSQL[0],
        parsedZone = _parseSQL[1];

    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  ;

  DateTime.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({
        invalid: invalid
      });
    }
  }
  /**
   * Check if an object is a DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  DateTime.isDateTime = function isDateTime(o) {
    return o && o.isLuxonDateTime || false;
  } // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  ;

  var _proto = DateTime.prototype;

  _proto.get = function get(unit) {
    return this[unit];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  ;

  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  _proto.resolvedLocaleOpts = function resolvedLocaleOpts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this),
        locale = _Formatter$create$res.locale,
        numberingSystem = _Formatter$create$res.numberingSystem,
        calendar = _Formatter$create$res.calendar;

    return {
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: calendar
    };
  } // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  ;

  _proto.toUTC = function toUTC(offset, opts) {
    if (offset === void 0) {
      offset = 0;
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.setZone(FixedOffsetZone.instance(offset), opts);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  ;

  _proto.toLocal = function toLocal() {
    return this.setZone(Settings.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link plus}. You may wish to use {@link toLocal} and {@link toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  ;

  _proto.setZone = function setZone(zone, _temp) {
    var _ref3 = _temp === void 0 ? {} : _temp,
        _ref3$keepLocalTime = _ref3.keepLocalTime,
        keepLocalTime = _ref3$keepLocalTime === void 0 ? false : _ref3$keepLocalTime,
        _ref3$keepCalendarTim = _ref3.keepCalendarTime,
        keepCalendarTime = _ref3$keepCalendarTim === void 0 ? false : _ref3$keepCalendarTim;

    zone = normalizeZone(zone, Settings.defaultZone);

    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      var newTS = this.ts;

      if (keepLocalTime || keepCalendarTime) {
        var offsetGuess = zone.offset(this.ts);
        var asObj = this.toObject();

        var _objToTS3 = objToTS(asObj, offsetGuess, zone);

        newTS = _objToTS3[0];
      }

      return clone$1(this, {
        ts: newTS,
        zone: zone
      });
    }
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp2) {
    var _ref4 = _temp2 === void 0 ? {} : _temp2,
        locale = _ref4.locale,
        numberingSystem = _ref4.numberingSystem,
        outputCalendar = _ref4.outputCalendar;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: outputCalendar
    });
    return clone$1(this, {
      loc: loc
    });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  ;

  _proto.setLocale = function setLocale(locale) {
    return this.reconfigure({
      locale: locale
    });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link reconfigure} and {@link setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var normalized = normalizeObject(values, normalizeUnit, []),
        settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday);
    var mixed;

    if (settingWeekStuff) {
      mixed = weekToGregorian(Object.assign(gregorianToWeek(this.c), normalized));
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian(Object.assign(gregorianToOrdinal(this.c), normalized));
    } else {
      mixed = Object.assign(this.toObject(), normalized); // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month

      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }

    var _objToTS4 = objToTS(mixed, this.o, this.zone),
        ts = _objToTS4[0],
        o = _objToTS4[1];

    return clone$1(this, {
      ts: ts,
      o: o
    });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.local().plus(123) //~> in 123 milliseconds
   * @example DateTime.local().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.local().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.local().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.local().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.local().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return clone$1(this, adjustTime(this, dur));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
  */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration).negate();
    return clone$1(this, adjustTime(this, dur));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  ;

  _proto.startOf = function startOf(unit) {
    if (!this.isValid) return this;
    var o = {},
        normalizedUnit = Duration.normalizeUnit(unit);

    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through

      case "quarters":
      case "months":
        o.day = 1;
      // falls through

      case "weeks":
      case "days":
        o.hour = 0;
      // falls through

      case "hours":
        o.minute = 0;
      // falls through

      case "minutes":
        o.second = 0;
      // falls through

      case "seconds":
        o.millisecond = 0;
        break;
      // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }

    if (normalizedUnit === "quarters") {
      var q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'month', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  ;

  _proto.endOf = function endOf(unit) {
    var _this$plus;

    return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
  } // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options
   * @example DateTime.local().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.local().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.local().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.local().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID$2;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param opts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @example DateTime.local().toLocaleString(); //=> 4/20/2017
   * @example DateTime.local().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.local().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
   * @example DateTime.local().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.local().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.local().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.local().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.local().toLocaleString({ hour: '2-digit', minute: '2-digit', hour12: false }); //=> '11:32'
   * @return {string}
   */
  ;

  _proto.toLocaleString = function toLocaleString(opts) {
    if (opts === void 0) {
      opts = DATE_SHORT;
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTime(this) : INVALID$2;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.local().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  ;

  _proto.toLocaleParts = function toLocaleParts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.local().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.local().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.local().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toISODate(opts) + "T" + this.toISOTime(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate(_temp3) {
    var _ref5 = _temp3 === void 0 ? {} : _temp3,
        _ref5$format = _ref5.format,
        format = _ref5$format === void 0 ? "extended" : _ref5$format;

    var fmt = format === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";

    if (this.year > 9999) {
      fmt = "+" + fmt;
    }

    return toTechFormat(this, fmt);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  ;

  _proto.toISOWeekDate = function toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(_temp4) {
    var _ref6 = _temp4 === void 0 ? {} : _temp4,
        _ref6$suppressMillise = _ref6.suppressMilliseconds,
        suppressMilliseconds = _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise,
        _ref6$suppressSeconds = _ref6.suppressSeconds,
        suppressSeconds = _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds,
        _ref6$includeOffset = _ref6.includeOffset,
        includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset,
        _ref6$format = _ref6.format,
        format = _ref6$format === void 0 ? "extended" : _ref6$format;

    return toTechTimeFormat(this, {
      suppressSeconds: suppressSeconds,
      suppressMilliseconds: suppressMilliseconds,
      includeOffset: includeOffset,
      format: format
    });
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime, always in UTC
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  ;

  _proto.toRFC2822 = function toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  ;

  _proto.toHTTP = function toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  ;

  _proto.toSQLDate = function toSQLDate() {
    return toTechFormat(this, "yyyy-MM-dd");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.local().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.local().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.local().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQLTime = function toSQLTime(_temp5) {
    var _ref7 = _temp5 === void 0 ? {} : _temp5,
        _ref7$includeOffset = _ref7.includeOffset,
        includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset,
        _ref7$includeZone = _ref7.includeZone,
        includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone;

    return toTechTimeFormat(this, {
      includeOffset: includeOffset,
      includeZone: includeZone,
      spaceZone: true
    });
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQL = function toSQL(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toSQLDate() + " " + this.toSQLTime(opts);
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.isValid ? this.toISO() : INVALID$2;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link toMillis}
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toMillis = function toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toSeconds = function toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toBSON = function toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a Javascript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.local().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};
    var base = Object.assign({}, this.c);

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns a Javascript Date equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toJSDate = function toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  } // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  ;

  _proto.diff = function diff(otherDateTime, unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid(this.invalid || otherDateTime.invalid, "created by diffing an invalid DateTime");
    }

    var durOpts = Object.assign({
      locale: this.locale,
      numberingSystem: this.numberingSystem
    }, opts);

    var units = maybeArray(unit).map(Duration.normalizeUnit),
        otherIsLater = otherDateTime.valueOf() > this.valueOf(),
        earlier = otherIsLater ? this : otherDateTime,
        later = otherIsLater ? otherDateTime : this,
        diffed = _diff(earlier, later, units, durOpts);

    return otherIsLater ? diffed.negate() : diffed;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  _proto.diffNow = function diffNow(unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.diff(DateTime.local(), unit, opts);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  ;

  _proto.until = function until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.local().hasSame(otherDT, 'day'); //~> true if both the same calendar day
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;

    if (unit === "millisecond") {
      return this.valueOf() === otherDateTime.valueOf();
    } else {
      var inputMs = otherDateTime.valueOf();
      return this.startOf(unit) <= inputMs && inputMs <= this.endOf(unit);
    }
  }
  /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.local()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {boolean} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.local().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.local().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.local().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.local().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.local().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.local().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  ;

  _proto.toRelative = function toRelative(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    var base = options.base || DateTime.fromObject({
      zone: this.zone
    }),
        padding = options.padding ? this < base ? -options.padding : options.padding : 0;
    return diffRelative(base, this.plus(padding), Object.assign(options, {
      numeric: "always",
      units: ["years", "months", "days", "hours", "minutes", "seconds"]
    }));
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.local()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.local().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.local().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.local().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.local().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  ;

  _proto.toRelativeCalendar = function toRelativeCalendar(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    return diffRelative(options.base || DateTime.fromObject({
      zone: this.zone
    }), this, Object.assign(options, {
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true
    }));
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  ;

  DateTime.min = function min() {
    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  ;

  DateTime.max = function max() {
    for (var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      dateTimes[_key2] = arguments[_key2];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.max);
  } // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  ;

  DateTime.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$locale = _options.locale,
        locale = _options$locale === void 0 ? null : _options$locale,
        _options$numberingSys = _options.numberingSystem,
        numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    });
    return explainFromTokens(localeToUse, text, fmt);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  ;

  DateTime.fromStringExplain = function fromStringExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    return DateTime.fromFormatExplain(text, fmt, options);
  } // FORMAT PRESETS

  /**
   * {@link toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  ;

  _createClass(DateTime, [{
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "outputCalendar",
    get: function get() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */

  }, {
    key: "zone",
    get: function get() {
      return this._zone;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */

  }, {
    key: "zoneName",
    get: function get() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */

  }, {
    key: "year",
    get: function get() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */

  }, {
    key: "quarter",
    get: function get() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */

  }, {
    key: "month",
    get: function get() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */

  }, {
    key: "day",
    get: function get() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */

  }, {
    key: "hour",
    get: function get() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */

  }, {
    key: "minute",
    get: function get() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */

  }, {
    key: "second",
    get: function get() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */

  }, {
    key: "millisecond",
    get: function get() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekYear //=> 2015
     * @type {number}
     */

  }, {
    key: "weekYear",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */

  }, {
    key: "weekNumber",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */

  }, {
    key: "weekday",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }
    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */

  }, {
    key: "ordinal",
    get: function get() {
      return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */

  }, {
    key: "monthShort",
    get: function get() {
      return this.isValid ? Info.months("short", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */

  }, {
    key: "monthLong",
    get: function get() {
      return this.isValid ? Info.months("long", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */

  }, {
    key: "weekdayShort",
    get: function get() {
      return this.isValid ? Info.weekdays("short", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */

  }, {
    key: "weekdayLong",
    get: function get() {
      return this.isValid ? Info.weekdays("long", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.local().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */

  }, {
    key: "offset",
    get: function get() {
      return this.isValid ? +this.o : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameShort",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "short",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameLong",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "long",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */

  }, {
    key: "isOffsetFixed",
    get: function get() {
      return this.isValid ? this.zone.universal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */

  }, {
    key: "isInDST",
    get: function get() {
      if (this.isOffsetFixed) {
        return false;
      } else {
        return this.offset > this.set({
          month: 1
        }).offset || this.offset > this.set({
          month: 5
        }).offset;
      }
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */

  }, {
    key: "isInLeapYear",
    get: function get() {
      return isLeapYear(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */

  }, {
    key: "daysInMonth",
    get: function get() {
      return daysInMonth(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */

  }, {
    key: "daysInYear",
    get: function get() {
      return this.isValid ? daysInYear(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */

  }, {
    key: "weeksInWeekYear",
    get: function get() {
      return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
    }
  }], [{
    key: "DATE_SHORT",
    get: function get() {
      return DATE_SHORT;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_MED",
    get: function get() {
      return DATE_MED;
    }
    /**
     * {@link toLocaleString} format like 'Fri, Oct 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_MED_WITH_WEEKDAY",
    get: function get() {
      return DATE_MED_WITH_WEEKDAY;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_FULL",
    get: function get() {
      return DATE_FULL;
    }
    /**
     * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_HUGE",
    get: function get() {
      return DATE_HUGE;
    }
    /**
     * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_SIMPLE",
    get: function get() {
      return TIME_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SECONDS",
    get: function get() {
      return TIME_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_SIMPLE",
    get: function get() {
      return TIME_24_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SECONDS",
    get: function get() {
      return TIME_24_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_24_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_24_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT",
    get: function get() {
      return DATETIME_SHORT;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT_WITH_SECONDS",
    get: function get() {
      return DATETIME_SHORT_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED",
    get: function get() {
      return DATETIME_MED;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_SECONDS",
    get: function get() {
      return DATETIME_MED_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_WEEKDAY",
    get: function get() {
      return DATETIME_MED_WITH_WEEKDAY;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL",
    get: function get() {
      return DATETIME_FULL;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL_WITH_SECONDS",
    get: function get() {
      return DATETIME_FULL_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE",
    get: function get() {
      return DATETIME_HUGE;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE_WITH_SECONDS",
    get: function get() {
      return DATETIME_HUGE_WITH_SECONDS;
    }
  }]);

  return DateTime;
}();
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
  }
}

exports.DateTime = DateTime;
exports.Duration = Duration;
exports.FixedOffsetZone = FixedOffsetZone;
exports.IANAZone = IANAZone;
exports.Info = Info;
exports.Interval = Interval;
exports.InvalidZone = InvalidZone;
exports.LocalZone = LocalZone;
exports.Settings = Settings;
exports.Zone = Zone;
//# sourceMappingURL=luxon.js.map


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Traveler.js":
/*!*************************!*\
  !*** ./src/Traveler.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_0__);


class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
  }

  filterMyTrips(tripsData) {
    return tripsData.filter(trip => trip.userID === this.id);
  }

  findTotalExpense(tripsData, destinationsData) {
    return this.findExpenses(tripsData, destinationsData);
  }

  findTotalYearExpense(year, tripsData, destinationsData) {
    return this.filterMyTrips(tripsData).reduce((acc, trip) => {
      if (parseInt(trip.date.split('/')[0]) === year) {
        destinationsData.find(destination => {
          if (trip.destinationID === destination.id) {
            const subtotal = ((trip.travelers * destination.estimatedFlightCostPerPerson) + (trip.duration * destination.estimatedLodgingCostPerDay));
            acc += (subtotal * .1) + subtotal;
          }
        })
      }
      return acc;
    }, 0)
  }

  //Would like to refactor findTotalYearExpense to encorpreate findExpenses (and cut down redundancy), but problem of 'trip' needed to be defined.
  findExpenses(tripsData, destinationsData) {
    return this.filterMyTrips(tripsData).reduce((acc, trip) => {
      destinationsData.find(destination => {
        if (trip.destinationID === destination.id) {
          const subtotal = ((trip.travelers * destination.estimatedFlightCostPerPerson) + (trip.duration * destination.estimatedLodgingCostPerDay));
          acc += (subtotal * .1) + subtotal;
        }
      })
      return acc;
    }, 0)
  }
  separateApprovedTrips(tripsData) {
    return this.filterMyTrips(tripsData).reduce((acc, trip) => {
      if (!acc.approved && !acc.pending) {
        acc.approved = [];
        acc.pending = [];
      }

      if (trip.status === 'approved') {
        acc.approved.push(trip);
      } else {
        acc.pending.push(trip);
      }
      return acc;
    }, {})
  }

  separateTripTimings(tripsData) {
    return this.filterMyTrips(tripsData).reduce((acc, trip) => {
      const currentDate = luxon__WEBPACK_IMPORTED_MODULE_0__["DateTime"].local();
      const splitDate = trip.date.split('/');
      const parsedDate = splitDate.map(num => parseInt(num));
      const startDate = luxon__WEBPACK_IMPORTED_MODULE_0__["DateTime"].local(parsedDate[0], parsedDate[1], parsedDate[2]);
      const endDate = startDate.plus({
        days: trip.duration
      })
      //refactor above into another function if possible;
      if (!acc.past && !acc.future && !acc.present) {
        acc.past = [];
        acc.planned = [];
        acc.current = [];
      }
      if (endDate < currentDate) {
        acc.past.push(trip);
      } else if (startDate > currentDate) {
        acc.planned.push(trip);
      } else if (startDate < currentDate && endDate > currentDate) {
        acc.current.push(trip);
      }
      return acc;
    }, {})
  }
}



/* harmony default export */ __webpack_exports__["default"] = (Traveler);

/***/ }),

/***/ "./src/Trip.js":
/*!*********************!*\
  !*** ./src/Trip.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Trip {
  constructor(tripObj, tripsData) {
    this.id = tripObj.id || tripsData.length + 1;
    this.userID = tripObj.userID;
    this.destinationID = tripObj.destinationID;
    this.travelers = tripObj.travelers;
    this.date = tripObj.date;
    this.duration = tripObj.duration;
    this.status = tripObj.status;
    this.suggestedActivities = tripObj.suggestedActivities || [];
    this.costEstimate = 0;
  }

  estimateCost(destinationsData) {
    const destination = destinationsData.find(destination => destination.id === this.destinationID);
    const subtotal = ((this.duration * destination.estimatedLodgingCostPerDay) + (this.travelers * destination.estimatedFlightCostPerPerson));
    this.costEstimate = subtotal + (subtotal * .10);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Trip);

/***/ }),

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getData = (url) => {
  return fetch(url)
    .then(response => response.json())
    .catch(err => console.log(`Apologizes, we getting the following: ${err}`))
}

const apiCalls = {
  getTravelersData: () => {
    return getData('http://localhost:3001/api/v1/travelers');
  },

  getTripsData: () => {
    return getData('http://localhost:3001/api/v1/trips');
  },

  getDestinationsData: () => {
    return getData('http://localhost:3001/api/v1/destinations');
  },

  postNewTrip: (newTrip) => {
    return fetch('http://localhost:3001/api/v1/trips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTrip),
      })
      .then(data => data.json())
      .then((data) => {
        return data
      })
      .catch(err => console.log(`Apologizes, we're getting an error: ${err}`))
  }
}


/* harmony default export */ __webpack_exports__["default"] = (apiCalls);

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const domUpdates = {
  sendWarning() {
    const warningArea = document.querySelector('.warning-js')
    this.manageClassList('remove', 'hidden', warningArea);
  },

  greetTraveler(traveler) {
    document.querySelector('.user-js').innerText = traveler.name.split(' ')[0];
  },

  updateTravelerStats(traveler, tripsData, destinationsData) {
    document.querySelector('.total-places-js').innerText = traveler.filterMyTrips(tripsData).length;
    document.querySelector('.total-price-js').innerText = Math.round(traveler.findTotalExpense(tripsData, destinationsData));
    this.evaluatePendingTrips(traveler, tripsData);
  },

  evaluatePendingTrips(traveler, tripsData) {
    let pendingTrips = traveler.separateApprovedTrips(tripsData).pending.length;
    if (pendingTrips === undefined) {
      pendingTrips = 0;
    }
    document.querySelector('.pending-js').innerText = pendingTrips;
  },

  manageClassList(action, className, element) {
    if (action === 'add' && element) {
      element.classList.add(className);
    } else if (action === 'remove' && element) {
      element.classList.remove(className);
    }
  },

  populateDetails(timing, user, tripsData, destinationsData) {
    let tripsArea;
    if (timing === 'current') {
      tripsArea = document.querySelector('.detailed-current-trips-js .trips-js');
    } else if (timing === 'planned') {
      tripsArea = document.querySelector('.detailed-planned-trips-js .trips-js');
    } else if (timing === 'past') {
      tripsArea = document.querySelector('.detailed-past-trips-js .trips-js');
    }
    if (user.separateTripTimings(tripsData)[timing].length) {
      tripsArea.innerHTML = '';
      user.separateTripTimings(tripsData)[timing].forEach(trip => {
        destinationsData.forEach(destination => {
          if (destination.id === trip.destinationID) {
            tripsArea.innerHTML += `<article class="trip-card"><h3>${destination.destination}</h3>
            <img src=${destination.image} alt=${destination.alt}>
            <h4>date: ${trip.date}</h4>
            <h4>days: ${trip.duration}</h4>
            <h4>travelers: ${trip.travelers}</h4>
            </article>`
          }
        })
      })
    }
  },

  checkInputFields() {
    document.querySelector('.trip-estimate-js').innerHTML = `<h5>Please fill in all fields to view accurate estimate.</h5>`
  },

  displayEstimate(price) {
    document.querySelector('.trip-estimate-js').innerHTML = `<h3>Trip Estimate:</h3>
    <div>
      <h4>$${price.costEstimate}</h4>
    </div>
    <p>*10% travel agency use fee included</p>`
  },

  alertSuccessfulRequest(destination) {
    document.querySelector('.trip-estimate-js').innerHTML = `<h5>Success! Your trip to ${destination.destination} is under review and is listed under pending trips.</h5>`
  },

  toggleDarkModeUpdates() {
    document.querySelector('body').classList.toggle('dark-mode-on');
    document.querySelector('.trips-js').classList.toggle('dark-mode-on');
    document.querySelector('.estimate-js').classList.toggle('dark-mode-on');
    document.querySelector('.post-booking-js').classList.toggle('dark-mode-on');
    this.toggleLogoDarkMode();
  },

  toggleLogoDarkMode() {
    const logo = document.querySelector('.logo-js')
    logo.classList.toggle('dark-mode-on');
    if (logo.classList.contains('dark-mode-on')) {
      logo.src = './images/invertedCompass.png';
    } else {
      logo.src = './images/redBlueCompass.png';
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);

/***/ }),

/***/ "./src/images/arrow.png":
/*!******************************!*\
  !*** ./src/images/arrow.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/arrow.png");

/***/ }),

/***/ "./src/images/invertedCompass.png":
/*!****************************************!*\
  !*** ./src/images/invertedCompass.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/invertedCompass.png");

/***/ }),

/***/ "./src/images/lightDarkMode.png":
/*!**************************************!*\
  !*** ./src/images/lightDarkMode.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/lightDarkMode.png");

/***/ }),

/***/ "./src/images/redBlueCompass.png":
/*!***************************************!*\
  !*** ./src/images/redBlueCompass.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/redBlueCompass.png");

/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _images_lightDarkMode_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/lightDarkMode.png */ "./src/images/lightDarkMode.png");
/* harmony import */ var _images_redBlueCompass_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/redBlueCompass.png */ "./src/images/redBlueCompass.png");
/* harmony import */ var _images_invertedCompass_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/invertedCompass.png */ "./src/images/invertedCompass.png");
/* harmony import */ var _images_arrow_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/arrow.png */ "./src/images/arrow.png");
/* harmony import */ var _Traveler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Traveler */ "./src/Traveler.js");
/* harmony import */ var _Trip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Trip */ "./src/Trip.js");
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apiCalls */ "./src/apiCalls.js");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");













// ** Login **
const loginSection = document.querySelector('.login-display-js')
const loginForm = document.querySelector('.login-form-js');
loginForm.addEventListener('submit', getTraveler);

// ** Button Query Selectors **
const darkLightModeButton = document.querySelector('.dark-light-mode-js');
const homeButton = document.querySelector('.go-home-js');
const currentTripsButton = document.querySelector('.go-to-current-js');
const plannedTripsButton = document.querySelector('.go-to-planned-js');
const pastTripsButton = document.querySelector('.go-to-past-js')
const makeBookingButton = document.querySelector('.make-booking-js');
const bookingEstimateButton = document.querySelector('.estimate-js');
const postBookingButton = document.querySelector('.post-booking-js');

// ** Display Query Selectors **
const homeDisplay = document.querySelector('.dashboard-js');
const currentDisplay = document.querySelector('.detailed-current-trips-js');
const plannedDisplay = document.querySelector('.detailed-planned-trips-js');
const pastDisplay = document.querySelector('.detailed-past-trips-js');

// ** Booking Form **
const bookingDisplay = document.querySelector('.booking-js');
const postBookingForm = document.querySelector('.booking-form-js');
const estimateDisplay = document.querySelector('.trip-estimate-js');

// ** Event Listeners **
darkLightModeButton.addEventListener('click', toggleDarkMode);
homeButton.addEventListener('click', showHome);
currentTripsButton.addEventListener('click', showCurrentDetails);
plannedTripsButton.addEventListener('click', showPlannedDetails);
pastTripsButton.addEventListener('click', showPastDetails);
makeBookingButton.addEventListener('click', showBookingDetails);
bookingEstimateButton.addEventListener('click', displayBookingResults);
postBookingButton.addEventListener('click', postBooking);


window.traveler, window.trip;
window.travelers = [];
window.trips = [];
window.destinations = [];

window.onload = Promise.all([_apiCalls__WEBPACK_IMPORTED_MODULE_7__["default"].getTravelersData(), _apiCalls__WEBPACK_IMPORTED_MODULE_7__["default"].getTripsData(), _apiCalls__WEBPACK_IMPORTED_MODULE_7__["default"].getDestinationsData()])
  .then(data => {
    data[0].travelers.forEach(traveler => window.travelers.push(traveler))
    data[1].trips.forEach(trip => window.trips.push(trip))
    data[2].destinations.forEach(destination => window.destinations.push(destination))
  })

// ** Log In **

function getTraveler() {
  event.preventDefault();
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const inputs = [username, password]
  if (inputs.every(input => input !== '') && username.startsWith('traveler') && username.split('traveler')[1] !== '' && password === "travel2020") {
    const userNum = username.split('traveler');
    const num = parseInt(userNum[1]);
    const userTraveler = window.travelers.find(traveler => traveler.id === num);
    getData(userTraveler);
  } else {
    loginForm.reset();
    _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].sendWarning();
  }
}

function getData(user) {
  window.traveler = new _Traveler__WEBPACK_IMPORTED_MODULE_5__["default"](user);
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].manageClassList('add', 'hidden', loginSection);
  const mainView = document.querySelector('.main-view-js');
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].manageClassList('remove', 'hidden', mainView);
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].manageClassList('remove', 'hidden', homeDisplay);
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].manageClassList('remove', 'hidden', makeBookingButton);
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].greetTraveler(window.traveler);
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].updateTravelerStats(window.traveler, window.trips, window.destinations);
}

// ** Make A Booking **

function displayBookingResults() {
  const goingTo = findDestination();
  const startDate = (document.querySelector('#start').value).replace('-', '/').replace('-', '/');
  const lengthOfTrip = document.querySelector('#duration').value;
  const numOfTravelers = document.querySelector('#travelers').value;
  const tripDetails = [goingTo, startDate, lengthOfTrip, numOfTravelers];
  if (tripDetails.some(element => element === undefined)) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].manageClassList('remove', 'hidden', estimateDisplay);
    _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].checkInputFields(tripDetails);
  } else {
    collectTripDetails(goingTo, startDate, lengthOfTrip, numOfTravelers);
  }
}

function collectTripDetails(goingTo, startDate, lengthOfTrip, numOfTravelers) {
  window.trip = new _Trip__WEBPACK_IMPORTED_MODULE_6__["default"]({
    userID: window.traveler.id,
    destinationID: goingTo.id,
    travelers: numOfTravelers,
    date: startDate,
    duration: lengthOfTrip,
    status: "pending"
  }, window.trips);
  window.trip.estimateCost(window.destinations);
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].manageClassList('remove', 'hidden', estimateDisplay);
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].displayEstimate(window.trip);
  postBookingButton.disabled = false;
}

function postBooking() {
  event.preventDefault();
  const choice = findDestination();
  _apiCalls__WEBPACK_IMPORTED_MODULE_7__["default"].postNewTrip(window.trip).then(response => {
    window.trips.push(response.newTrip)
  })
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].alertSuccessfulRequest(choice);
}

function findDestination() {
  const possibleDestination = document.querySelector('#where').value;
  const chosenDestination = window.destinations.find(destination => destination.destination.includes(possibleDestination));
  return chosenDestination;
}

// ** Manage Displays **

function showHome() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].updateTravelerStats(window.traveler, window.trips, window.destinations);
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].manageClassList('remove', 'hidden', homeDisplay);
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].manageClassList('remove', 'hidden', makeBookingButton);
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].manageClassList('add', 'hidden', estimateDisplay);
  postBookingForm.reset();
  hideDetailedDisplays();
}

function showCurrentDetails() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].manageClassList('add', 'hidden', homeDisplay);
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].manageClassList('remove', 'hidden', currentDisplay);
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].populateDetails('current', window.traveler, window.trips, window.destinations);
}

function showPlannedDetails() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].manageClassList('add', 'hidden', homeDisplay);
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].manageClassList('remove', 'hidden', plannedDisplay);
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].populateDetails('planned', window.traveler, window.trips, window.destinations);
}

function showPastDetails() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].manageClassList('add', 'hidden', homeDisplay);
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].manageClassList('remove', 'hidden', pastDisplay);
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].populateDetails('past', window.traveler, window.trips, window.destinations);
}

function showBookingDetails() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].manageClassList('add', 'hidden', homeDisplay);
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].manageClassList('add', 'hidden', makeBookingButton);
  hideDetailedDisplays();
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].manageClassList('remove', 'hidden', bookingDisplay);
}

function hideDetailedDisplays() {
  const detailedDisplays = [currentDisplay, plannedDisplay, pastDisplay, bookingDisplay];
  detailedDisplays.forEach(display => {
    if (!display.classList.contains('hidden')) {
      _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].manageClassList('add', 'hidden', display);
    }
  })
}

function toggleDarkMode() {
  darkLightModeButton.classList.toggle('dark-mode-on');
  makeBookingButton.classList.toggle('dark-mode-on');
  _domUpdates__WEBPACK_IMPORTED_MODULE_8__["default"].toggleDarkModeUpdates();
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHV4b24vYnVpbGQvY2pzLWJyb3dzZXIvbHV4b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9UcmF2ZWxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQ2FsbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3M/MTEwNyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Fycm93LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2ludmVydGVkQ29tcGFzcy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9saWdodERhcmtNb2RlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3JlZEJsdWVDb21wYXNzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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QUFFakQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzQkFBc0I7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNCQUFzQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzQkFBc0I7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0JBQXNCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNCQUFzQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSx3R0FBd0csdUVBQXVFOztBQUUvSztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSx5Q0FBeUM7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsTUFBTSxpQkFBaUIsTUFBTSxlQUFlLE1BQU07O0FBRS9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzRUFBc0UsNkJBQTZCO0FBQ25HOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGdCQUFnQjtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDREQUE0RDtBQUM1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUFzRDtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUFzRDtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUFzRDtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FB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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsSUFBSSxTQUFTLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxnREFBZ0Qsb0ZBQW9GO0FBQ3BJO0FBQ0E7QUFDQSxLQUFLLDRFQUE0RTtBQUNqRixHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9FQUFvRTs7O0FBR3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gseUVBQXlFOztBQUV6RTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDO0FBQ3RDO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQztBQUN0QztBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGLHdCQUF3QjtBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0VBQXdFLGFBQWE7QUFDckY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEUsZUFBZTtBQUM3RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLLEtBQUs7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdHQUFnRyxlQUFlO0FBQy9HO0FBQ0E7O0FBRUEsd0NBQXdDLHVCQUF1QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0VBQXdFLGVBQWU7QUFDdkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQSwrREFBK0QsS0FBSztBQUNwRTtBQUNBO0FBQ0EsMkJBQTJCLEVBQUUsSUFBSSxFQUFFO0FBQ25DLHdCQUF3QixFQUFFO0FBQzFCLDJCQUEyQixFQUFFLE9BQU8sRUFBRTtBQUN0QztBQUNBO0FBQ0EsdUJBQXVCLEVBQUU7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQzs7O0FBR0QsbUNBQW1DLElBQUksYUFBYSxJQUFJLGFBQWEsSUFBSSxhQUFhLElBQUksaUJBQWlCLElBQUksYUFBYSxJQUFJLGFBQWEsS0FBSyxjQUFjLElBQUk7O0FBRXBLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0QseURBQXlELElBQUksMERBQTBELElBQUk7O0FBRTNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0QsNEdBQTRHLEVBQUU7QUFDOUc7QUFDQSxrSUFBa0ksRUFBRTs7QUFFcEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNB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LGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLFNBQVM7QUFDdEIsYUFBYSxTQUFTO0FBQ3RCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDRFQUE0RSxhQUFhO0FBQ3pGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixjQUFj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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsTUFBTTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FB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QWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQixhQUFhLE9BQU87QUFDcEIsYUFBYSxZQUFZO0FBQ3pCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFlBQVk7QUFDekIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFlBQVk7QUFDekIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BC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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcG1RYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7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QSxvQkFBb0IsNkNBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRSxtREFBVTtBQUNaLEVBQUUsbURBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaURBQVE7QUFDVjtBQUNBLEdBQUc7QUFDSCxFQUFFLG1EQUFVO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEVBQUUsbURBQVU7QUFDWixFQUFFLG1EQUFVO0FBQ1osRUFBRSxtREFBVTtBQUNaLEVBQUUsbURBQVU7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG1EQUFVO0FBQ1osRUFBRSxtREFBVTtBQUNaLEVBQUUsbURBQVU7QUFDWjs7QUFFQTtBQUNBLEVBQUUsbURBQVU7QUFDWixFQUFFLG1EQUFVO0FBQ1osRUFBRSxtREFBVTtBQUNaOztBQUVBO0FBQ0EsRUFBRSxtREFBVTtBQUNaLEVBQUUsbURBQVU7QUFDWixFQUFFLG1EQUFVO0FBQ1o7O0FBRUE7QUFDQSxFQUFFLG1EQUFVO0FBQ1osRUFBRSxtREFBVTtBQUNaO0FBQ0EsRUFBRSxtREFBVTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBVTtBQUNoQjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1EQUFVO0FBQ1osQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zY3JpcHRzLmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMmZmFtaWx5PVl1c2VpK01hZ2ljJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5kYXJrLWxpZ2h0LW1vZGUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogNnZ3O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIG1hcmdpbjogMiU7IH1cXG4gIC5kYXJrLWxpZ2h0LW1vZGUgPiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG4gIC5kYXJrLWxpZ2h0LW1vZGUgOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUZFRjsgfVxcblxcbi5nby1ob21lIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuZ28taG9tZSA+IGltZyB7XFxuICAgIHdpZHRoOiAyMCU7IH1cXG4gIC5nby1ob21lIDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRmZDg7IH1cXG5cXG4uZ28tdG8ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTV2dztcXG4gIG1hcmdpbjogNHZ3OyB9XFxuICAuZ28tdG8gPiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZDRjNTU7IH1cXG4gIC5nby10byA6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZmQ4OyB9XFxuXFxuLm1ha2UtYm9va2luZyB7XFxuICB3aWR0aDogODglO1xcbiAgbWFyZ2luOiAzJTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICNmZDRjNTU7XFxuICBib3JkZXItcmFkaXVzOiAzJTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLm1ha2UtYm9va2luZyA6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZmQ4OyB9XFxuXFxuaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJZdXNlaSBNYWdpY1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbmgyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNHJlbTsgfVxcblxcbi50b3RhbCA+IGgyIHtcXG4gIHBhZGRpbmc6IDIlOyB9XFxuXFxuc3BhbiB7XFxuICBmb250LWZhbWlseTogXFxcIll1c2VpIE1hZ2ljXFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbmFydGljbGUgPiBkaXYgPiBoMiB7XFxuICBmb250LWZhbWlseTogXFxcIll1c2VpIE1hZ2ljXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgbWFyZ2luLWJvdHRvbTogNSU7IH1cXG5cXG5oMyB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDNyZW07IH1cXG5cXG5idXR0b24gPiBoMSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAyJTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICMwMGMwZjk7IH1cXG5cXG4ucGVuZGluZy10cmlwcyB7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG5oNCB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIuOHJlbTsgfVxcblxcbmg1IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMi40cmVtOyB9XFxuXFxuLmRhcmstbW9kZS1vbiB7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uZGFyay1tb2RlLW9uIC50cmlwcyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmOyB9XFxuICAuZGFyay1tb2RlLW9uIC50cmlwcyBpbWcge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmOyB9XFxuXFxuLmRhcmstbW9kZS1vbiAubWFrZS1ib29raW5nIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZDogIzAwZDRjNTsgfVxcbiAgLmRhcmstbW9kZS1vbiAubWFrZS1ib29raW5nIDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYmVkZTg7IH1cXG4gIC5kYXJrLW1vZGUtb24gLm1ha2UtYm9va2luZyBoMSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICNmZDRjNTU7IH1cXG5cXG4uZGFyay1tb2RlLW9uIC5wb3N0LWJvb2tpbmc6ZGlzYWJsZWQge1xcbiAgYm9yZGVyOiAjMDAwO1xcbiAgY29sb3I6ICMwMDA7IH1cXG5cXG4uZGV0YWlsZWQtdmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi50cmlwcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG4gIG1hcmdpbjogNSU7XFxuICBwYWRkaW5nOiAyJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLnRyaXBzIGgzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogNSU7IH1cXG4gIC50cmlwcyBoNCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07IH1cXG5cXG4udHJpcC1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLnRyaXAtY2FyZCBpbWcge1xcbiAgICB3aWR0aDogOTglO1xcbiAgICBtYXJnaW46IDElOyB9XFxuICAudHJpcC1jYXJkIGgzIHtcXG4gICAgbWFyZ2luOiAxJTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJZdXNlaSBNYWdpY1xcXCIsIHNhbnMtc2VyaWY7IH1cXG4gIC50cmlwLWNhcmQgaDQge1xcbiAgICBmb250LXNpemU6IDJyZW07IH1cXG5cXG4uYm9va2luZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXJnaW46IDIlOyB9XFxuICAuYm9va2luZyBoMiB7XFxuICAgIG1hcmdpbjogMiU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiWXVzZWkgTWFnaWNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IDRweCB1bmRlcmxpbmUgIzAwYzBmOTsgfVxcbiAgLmJvb2tpbmcgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogOTglO1xcbiAgICBmb250LXNpemU6IDIuNHJlbTtcXG4gICAgcGFkZGluZzogMiU7IH1cXG4gIC5ib29raW5nIHVsIHtcXG4gICAgd2lkdGg6IDg4JTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTsgfVxcbiAgLmJvb2tpbmcgbGkge1xcbiAgICBwYWRkaW5nOiAzJTtcXG4gICAgZm9udC1zaXplOiAyLjZyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxuICAuYm9va2luZyBzZWxlY3QsIC5ib29raW5nIGlucHV0IHtcXG4gICAgbWFyZ2luOiAzJTtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyB9XFxuICAuYm9va2luZyAuZXN0aW1hdGUsIC5ib29raW5nIC5wb3N0LWJvb2tpbmcge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIG1hcmdpbjogMyU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2ZkNGM1NTsgfVxcbiAgICAuYm9va2luZyAuZXN0aW1hdGUgOmhvdmVyLCAuYm9va2luZyAucG9zdC1ib29raW5nIDpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FiZWRlODsgfVxcbiAgLmJvb2tpbmcgLnRyaXAtZXN0aW1hdGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3NSU7IH1cXG4gIC5ib29raW5nIGg0LCAuYm9va2luZyBoNSwgLmJvb2tpbmcgcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjsgfVxcbiAgLmJvb2tpbmcgcCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTsgfVxcblxcbi5sb2dpbi1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAubG9naW4tZGlzcGxheSBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNSU7XFxuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xcbiAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7IH1cXG4gIC5sb2dpbi1kaXNwbGF5IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDMlOyB9XFxuICAubG9naW4tZGlzcGxheSBpbnB1dCB7XFxuICAgIG1hcmdpbjogMiU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICB3aWR0aDogNjYlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkOyB9XFxuICAubG9naW4tZGlzcGxheSBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIG1hcmdpbjogNSU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAubG9naW4tZGlzcGxheSBidXR0b24gOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJlZGU4OyB9XFxuICAubG9naW4tZGlzcGxheSBhcnRpY2xlIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBjMGY5O1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgbWFyZ2luOiAxJTsgfVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uZGFyay1tb2RlLWNvbnRhaW5lciB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7IH1cXG5cXG5ib2R5ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuLnRvdGFsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5kYXNoYm9hcmQgYXJ0aWNsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLnBhc3QtdHJpcHMgZGl2IHtcXG4gIG1hcmdpbi1sZWZ0OiAxMXZ3OyB9XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9fYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3RleHQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fZGFya01vZGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fZGV0YWlsZWQtZGlzcGxheXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fYm9va2luZy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19sb2dpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Jhc2Uuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtF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LHVCQUF1QjtFT3NCdkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VQOUJFLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QU9pQ3pCO0VBQ0Usd0JBQXVCLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnbWl4aW5zJywgJ3ZhcmlhYmxlcyc7XFxuXFxuLmRhcmstbGlnaHQtbW9kZSB7XFxuICBAaW5jbHVkZSBiYXNlLWJ1dHRvbjtcXG4gIHdpZHRoOiA2dnc7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgbWFyZ2luOiAyJTtcXG5cXG4gID5pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB9XFxuXFxuICA6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkVGO1xcbiAgfVxcblxcbn1cXG5cXG4uZ28taG9tZSB7XFxuICBAaW5jbHVkZSBiYXNlLWJ1dHRvbjtcXG5cXG4gID5pbWcge1xcbiAgICB3aWR0aDogMjAlXFxuICB9XFxuXFxuICA6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaG92ZXItcmVkO1xcbiAgfVxcbn1cXG5cXG4uZ28tdG8ge1xcbiAgQGluY2x1ZGUgYmFzZS1idXR0b247XFxuICB3aWR0aDogMTV2dztcXG4gIG1hcmdpbjogNHZ3O1xcblxcbiAgPmltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tcmVkO1xcbiAgfVxcblxcbiAgOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaG92ZXItcmVkO1xcbiAgfVxcbn1cXG5cXG4ubWFrZS1ib29raW5nIHtcXG4gIHdpZHRoOiA4OCU7XFxuICBtYXJnaW46IDMlO1xcbiAgYm9yZGVyOiA1cHggc29saWQgJG1haW4tcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogMyU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICA6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRob3Zlci1yZWQ7XFxuICB9XFxufVxcblwiLFwiQG1peGluIGJhc2UtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWl4aW4gYmFzZS1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuQG1peGluIGNvbHVtbi1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblwiLFwiJG1haW4tZm9udDogXFxcIll1c2VpIE1hZ2ljXFxcIiwgc2Fucy1zZXJpZjtcXG4kdGV4dC1mb250OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4kbWFpbi1yZWQ6IHJnYigyNTMsIDc2LCA4NSk7XFxuJG1haW4tYmx1ZTogcmdiKDAsMTkyLDI0OSk7XFxuJGRhcmstdGVhbDogcmdiKDAsMjEyLDE5Nyk7XFxuJGhvdmVyLXRlYWw6IHJnYigxNzEsIDIzNywgMjMyKTtcXG4kaG92ZXItcmVkOiByZ2IoMjU1LCAyMjMsIDIxNik7XFxuXCIsXCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiAkbWFpbi1mb250O1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtZmFtaWx5OiAkdGV4dC1mb250O1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4udG90YWw+aDIge1xcbiAgcGFkZGluZzogMiU7XFxufVxcblxcbnNwYW4ge1xcbiAgZm9udC1mYW1pbHk6ICRtYWluLWZvbnQ7XFxufVxcblxcbmFydGljbGU+ZGl2Pmgye1xcbiAgZm9udC1mYW1pbHk6ICRtYWluLWZvbnQ7XFxuICBmb250LXNpemU6IDVyZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIG1hcmdpbi1ib3R0b206IDUlXFxufVxcblxcbmgzIHtcXG4gIGZvbnQtZmFtaWx5OiAkdGV4dC1mb250O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG5idXR0b24+aDEge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMiU7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAkbWFpbi1ibHVlO1xcbn1cXG5cXG4ucGVuZGluZy10cmlwcyB7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmg0IHtcXG4gIGZvbnQtZmFtaWx5OiAkdGV4dC1mb250O1xcbiAgZm9udC1zaXplOiAyLjhyZW07XFxufVxcblxcbmg1IHtcXG4gIGZvbnQtZmFtaWx5OiAkdGV4dC1mb250O1xcbiAgZm9udC1zaXplOiAyLjRyZW07XFxufVxcblwiLFwiQGltcG9ydCAndmFyaWFibGVzJztcXG5cXG4uZGFyay1tb2RlLW9uIHtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmRhcmstbW9kZS1vbiAudHJpcHMge1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG5cXG4gIGltZyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICB9XFxufVxcblxcbi5kYXJrLW1vZGUtb24gLm1ha2UtYm9va2luZyB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGJhY2tncm91bmQ6ICRkYXJrLXRlYWw7XFxuXFxuICA6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaG92ZXItdGVhbDtcXG4gIH1cXG5cXG4gIGgxIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgJG1haW4tcmVkO1xcbiAgfVxcbn1cXG5cXG4uZGFyay1tb2RlLW9uIC5wb3N0LWJvb2tpbmc6ZGlzYWJsZWQge1xcbiAgICBib3JkZXI6ICMwMDA7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG5cIixcIkBpbXBvcnQgJ21peGlucycsICd2YXJpYWJsZXMnO1xcblxcbi5kZXRhaWxlZC12aWV3IHtcXG4gIEBpbmNsdWRlIGNvbHVtbi1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLy8gRGVmYXVsdCBWaWV3IGZvciBnZXQsIGdvaW5nIGdvbmVcXG4udHJpcHMge1xcbiAgQGluY2x1ZGUgY29sdW1uLWZsZXg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbiAgbWFyZ2luOiA1JTtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgaDMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiA1JTtcXG4gIH1cXG5cXG4gIGg0IHtcXG4gICAgZm9udC1mYW1pbHk6ICR0ZXh0LWZvbnQ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbn1cXG5cXG4vLyBkb21VcGRhdGVzIHZpZXcgZm9yIGdldCwgZ29pbmcsIGdvbmVcXG5cXG4udHJpcC1jYXJke1xcbiAgQGluY2x1ZGUgYmFzZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgaW1nIHtcXG4gICAgd2lkdGg6OTglO1xcbiAgICBtYXJnaW46IDElO1xcbiAgfVxcblxcbiAgaDMge1xcbiAgICBtYXJnaW46IDElO1xcbiAgICBmb250LWZhbWlseTogJG1haW4tZm9udDtcXG4gIH1cXG5cXG4gIGg0IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ21peGlucycsICd2YXJpYWJsZXMnO1xcblxcbi5ib29raW5nIHtcXG4gIEBpbmNsdWRlIGNvbHVtbi1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXJnaW46IDIlO1xcblxcbiAgaDIge1xcbiAgICBtYXJnaW46IDIlO1xcbiAgICBmb250LWZhbWlseTogJG1haW4tZm9udDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiA0cHggdW5kZXJsaW5lICRtYWluLWJsdWU7XFxuICB9XFxuXFxuICBmb3JtIHtcXG4gICAgQGluY2x1ZGUgY29sdW1uLWZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5OCU7XFxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gIH1cXG5cXG4gIHVse1xcbiAgICB3aWR0aDogODglO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xcbiAgfVxcblxcbiAgbGkge1xcbiAgICBwYWRkaW5nOiAzJTtcXG4gICAgZm9udC1zaXplOiAyLjZyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAkdGV4dC1mb250O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB9XFxuXFxuICBzZWxlY3QsIGlucHV0IHtcXG4gICAgbWFyZ2luOiAzJTtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBmb250LWZhbWlseTogJHRleHQtZm9udDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB9XFxuXFxuICAuZXN0aW1hdGUge1xcbiAgICBAaW5jbHVkZSBiYXNlLWJ1dHRvbjtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgbWFyZ2luOiAzJTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCAkbWFpbi1yZWQ7XFxuXFxuICAgIDpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhvdmVyLXRlYWw7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5wb3N0LWJvb2tpbmcge1xcbiAgICBAZXh0ZW5kIC5lc3RpbWF0ZTtcXG4gIH1cXG5cXG4gIC50cmlwLWVzdGltYXRlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgfVxcblxcbiAgaDQsIGg1LCBwIHtcXG4gICAgZm9udC1mYW1pbHk6ICR0ZXh0LWZvbnQ7XFxuICB9XFxuXFxuICBwIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ21peGlucycsICd2YXJpYWJsZXMnO1xcblxcbi5sb2dpbi1kaXNwbGF5IHtcXG4gIEBpbmNsdWRlIGNvbHVtbi1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvcm0ge1xcbiAgICBAaW5jbHVkZSBjb2x1bW4tZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiA1JTtcXG4gICAgZm9udC1zaXplOiAzLjJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAkdGV4dC1mb250O1xcbiAgfVxcblxcbiAgZGl2IHtcXG4gICAgQGluY2x1ZGUgY29sdW1uLWZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMyU7XFxuICB9XFxuXFxuICBpbnB1dCB7XFxuICAgIG1hcmdpbjogMiU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICB3aWR0aDogNjYlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcbiAgfVxcblxcbiAgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBtYXJnaW46IDUlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIDpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhvdmVyLXRlYWw7XFxuICAgIH1cXG4gIH1cXG5cXG4gIGFydGljbGUge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRtYWluLWJsdWU7XFxuICAgIHBhZGRpbmc6IDIlO1xcbiAgICBtYXJnaW46IDElO1xcbiAgfVxcblxcbn1cXG5cIixcIkBpbXBvcnQgJ2J1dHRvbnMnLCAnbWl4aW5zJywgJ3RleHQnLCAndmFyaWFibGVzJywgJ2RhcmtNb2RlJywgJ2RldGFpbGVkLWRpc3BsYXlzJywgJ2Jvb2tpbmcnLCAnbG9naW4nO1xcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FucyZmYW1pbHk9WXVzZWkrTWFnaWMmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmRhcmstbW9kZS1jb250YWluZXIge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbn1cXG5cXG5ib2R5PmRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG90YWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGFzaGJvYXJkIGFydGljbGUge1xcbiAgQGluY2x1ZGUgYmFzZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBhc3QtdHJpcHMgZGl2IHtcXG4gIG1hcmdpbi1sZWZ0OiAxMXZ3O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgQGluY2x1ZGUgYmFzZS1mbGV4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gIH0gZWxzZSB7XG4gICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikge1xuICByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG5cbiAgX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzO1xuXG4gICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuXG4gICAgICBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBXcmFwcGVyKCkge1xuICAgICAgcmV0dXJuIF9jb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogV3JhcHBlcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgfTtcblxuICByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShvKSB7XG4gIHZhciBpID0gMDtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4ge1xuICAgICAgICBkb25lOiB0cnVlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiBvW2krK11cbiAgICAgIH07XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gIH1cblxuICBpID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7XG4gIHJldHVybiBpLm5leHQuYmluZChpKTtcbn1cblxuLy8gdGhlc2UgYXJlbid0IHJlYWxseSBwcml2YXRlLCBidXQgbm9yIGFyZSB0aGV5IHJlYWxseSB1c2VmdWwgdG8gZG9jdW1lbnRcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgTHV4b25FcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Vycm9yKSB7XG4gIF9pbmhlcml0c0xvb3NlKEx1eG9uRXJyb3IsIF9FcnJvcik7XG5cbiAgZnVuY3Rpb24gTHV4b25FcnJvcigpIHtcbiAgICByZXR1cm4gX0Vycm9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHJldHVybiBMdXhvbkVycm9yO1xufSggLyojX19QVVJFX18qL193cmFwTmF0aXZlU3VwZXIoRXJyb3IpKTtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5cbnZhciBJbnZhbGlkRGF0ZVRpbWVFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0x1eG9uRXJyb3IpIHtcbiAgX2luaGVyaXRzTG9vc2UoSW52YWxpZERhdGVUaW1lRXJyb3IsIF9MdXhvbkVycm9yKTtcblxuICBmdW5jdGlvbiBJbnZhbGlkRGF0ZVRpbWVFcnJvcihyZWFzb24pIHtcbiAgICByZXR1cm4gX0x1eG9uRXJyb3IuY2FsbCh0aGlzLCBcIkludmFsaWQgRGF0ZVRpbWU6IFwiICsgcmVhc29uLnRvTWVzc2FnZSgpKSB8fCB0aGlzO1xuICB9XG5cbiAgcmV0dXJuIEludmFsaWREYXRlVGltZUVycm9yO1xufShMdXhvbkVycm9yKTtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgSW52YWxpZEludGVydmFsRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9MdXhvbkVycm9yMikge1xuICBfaW5oZXJpdHNMb29zZShJbnZhbGlkSW50ZXJ2YWxFcnJvciwgX0x1eG9uRXJyb3IyKTtcblxuICBmdW5jdGlvbiBJbnZhbGlkSW50ZXJ2YWxFcnJvcihyZWFzb24pIHtcbiAgICByZXR1cm4gX0x1eG9uRXJyb3IyLmNhbGwodGhpcywgXCJJbnZhbGlkIEludGVydmFsOiBcIiArIHJlYXNvbi50b01lc3NhZ2UoKSkgfHwgdGhpcztcbiAgfVxuXG4gIHJldHVybiBJbnZhbGlkSW50ZXJ2YWxFcnJvcjtcbn0oTHV4b25FcnJvcik7XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIEludmFsaWREdXJhdGlvbkVycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTHV4b25FcnJvcjMpIHtcbiAgX2luaGVyaXRzTG9vc2UoSW52YWxpZER1cmF0aW9uRXJyb3IsIF9MdXhvbkVycm9yMyk7XG5cbiAgZnVuY3Rpb24gSW52YWxpZER1cmF0aW9uRXJyb3IocmVhc29uKSB7XG4gICAgcmV0dXJuIF9MdXhvbkVycm9yMy5jYWxsKHRoaXMsIFwiSW52YWxpZCBEdXJhdGlvbjogXCIgKyByZWFzb24udG9NZXNzYWdlKCkpIHx8IHRoaXM7XG4gIH1cblxuICByZXR1cm4gSW52YWxpZER1cmF0aW9uRXJyb3I7XG59KEx1eG9uRXJyb3IpO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0x1eG9uRXJyb3I0KSB7XG4gIF9pbmhlcml0c0xvb3NlKENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yLCBfTHV4b25FcnJvcjQpO1xuXG4gIGZ1bmN0aW9uIENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKCkge1xuICAgIHJldHVybiBfTHV4b25FcnJvcjQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgcmV0dXJuIENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yO1xufShMdXhvbkVycm9yKTtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgSW52YWxpZFVuaXRFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0x1eG9uRXJyb3I1KSB7XG4gIF9pbmhlcml0c0xvb3NlKEludmFsaWRVbml0RXJyb3IsIF9MdXhvbkVycm9yNSk7XG5cbiAgZnVuY3Rpb24gSW52YWxpZFVuaXRFcnJvcih1bml0KSB7XG4gICAgcmV0dXJuIF9MdXhvbkVycm9yNS5jYWxsKHRoaXMsIFwiSW52YWxpZCB1bml0IFwiICsgdW5pdCkgfHwgdGhpcztcbiAgfVxuXG4gIHJldHVybiBJbnZhbGlkVW5pdEVycm9yO1xufShMdXhvbkVycm9yKTtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgSW52YWxpZEFyZ3VtZW50RXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9MdXhvbkVycm9yNikge1xuICBfaW5oZXJpdHNMb29zZShJbnZhbGlkQXJndW1lbnRFcnJvciwgX0x1eG9uRXJyb3I2KTtcblxuICBmdW5jdGlvbiBJbnZhbGlkQXJndW1lbnRFcnJvcigpIHtcbiAgICByZXR1cm4gX0x1eG9uRXJyb3I2LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHJldHVybiBJbnZhbGlkQXJndW1lbnRFcnJvcjtcbn0oTHV4b25FcnJvcik7XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIFpvbmVJc0Fic3RyYWN0RXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9MdXhvbkVycm9yNykge1xuICBfaW5oZXJpdHNMb29zZShab25lSXNBYnN0cmFjdEVycm9yLCBfTHV4b25FcnJvcjcpO1xuXG4gIGZ1bmN0aW9uIFpvbmVJc0Fic3RyYWN0RXJyb3IoKSB7XG4gICAgcmV0dXJuIF9MdXhvbkVycm9yNy5jYWxsKHRoaXMsIFwiWm9uZSBpcyBhbiBhYnN0cmFjdCBjbGFzc1wiKSB8fCB0aGlzO1xuICB9XG5cbiAgcmV0dXJuIFpvbmVJc0Fic3RyYWN0RXJyb3I7XG59KEx1eG9uRXJyb3IpO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBuID0gXCJudW1lcmljXCIsXG4gICAgcyA9IFwic2hvcnRcIixcbiAgICBsID0gXCJsb25nXCI7XG52YXIgREFURV9TSE9SVCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IG4sXG4gIGRheTogblxufTtcbnZhciBEQVRFX01FRCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogblxufTtcbnZhciBEQVRFX01FRF9XSVRIX1dFRUtEQVkgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBzLFxuICBkYXk6IG4sXG4gIHdlZWtkYXk6IHNcbn07XG52YXIgREFURV9GVUxMID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuXG59O1xudmFyIERBVEVfSFVHRSA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgd2Vla2RheTogbFxufTtcbnZhciBUSU1FX1NJTVBMRSA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuXG59O1xudmFyIFRJTUVfV0lUSF9TRUNPTkRTID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogblxufTtcbnZhciBUSU1FX1dJVEhfU0hPUlRfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBzXG59O1xudmFyIFRJTUVfV0lUSF9MT05HX09GRlNFVCA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIHRpbWVab25lTmFtZTogbFxufTtcbnZhciBUSU1FXzI0X1NJTVBMRSA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBob3VyMTI6IGZhbHNlXG59O1xuLyoqXG4gKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9OyBmb3JtYXQgbGlrZSAnMDk6MzA6MjMnLCBhbHdheXMgMjQtaG91ci5cbiAqL1xuXG52YXIgVElNRV8yNF9XSVRIX1NFQ09ORFMgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICBob3VyMTI6IGZhbHNlXG59O1xuLyoqXG4gKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9OyBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgRURUJywgYWx3YXlzIDI0LWhvdXIuXG4gKi9cblxudmFyIFRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICBob3VyMTI6IGZhbHNlLFxuICB0aW1lWm9uZU5hbWU6IHNcbn07XG4vKipcbiAqIHtAbGluayB0b0xvY2FsZVN0cmluZ307IGZvcm1hdCBsaWtlICcwOTozMDoyMyBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLCBhbHdheXMgMjQtaG91ci5cbiAqL1xuXG52YXIgVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgaG91cjEyOiBmYWxzZSxcbiAgdGltZVpvbmVOYW1lOiBsXG59O1xuLyoqXG4gKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9OyBmb3JtYXQgbGlrZSAnMTAvMTQvMTk4MywgOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICovXG5cbnZhciBEQVRFVElNRV9TSE9SVCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IG4sXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuXG59O1xuLyoqXG4gKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9OyBmb3JtYXQgbGlrZSAnMTAvMTQvMTk4MywgOTozMDozMyBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICovXG5cbnZhciBEQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBuLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuXG59O1xudmFyIERBVEVUSU1FX01FRCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuXG59O1xudmFyIERBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBzLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuXG59O1xudmFyIERBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVkgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBzLFxuICBkYXk6IG4sXG4gIHdlZWtkYXk6IHMsXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogblxufTtcbnZhciBEQVRFVElNRV9GVUxMID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHRpbWVab25lTmFtZTogc1xufTtcbnZhciBEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUyA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIHRpbWVab25lTmFtZTogc1xufTtcbnZhciBEQVRFVElNRV9IVUdFID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBsLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHRpbWVab25lTmFtZTogbFxufTtcbnZhciBEQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUyA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgd2Vla2RheTogbCxcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIHRpbWVab25lTmFtZTogbFxufTtcblxuLypcbiAgVGhpcyBpcyBqdXN0IGEganVuayBkcmF3ZXIsIGNvbnRhaW5pbmcgYW55dGhpbmcgdXNlZCBhY3Jvc3MgbXVsdGlwbGUgY2xhc3Nlcy5cbiAgQmVjYXVzZSBMdXhvbiBpcyBzbWFsbChpc2gpLCB0aGlzIHNob3VsZCBzdGF5IHNtYWxsIGFuZCB3ZSB3b24ndCB3b3JyeSBhYm91dCBzcGxpdHRpbmdcbiAgaXQgdXAgaW50bywgc2F5LCBwYXJzaW5nVXRpbC5qcyBhbmQgYmFzaWNVdGlsLmpzIGFuZCBzbyBvbi4gQnV0IHRoZXkgYXJlIGRpdmlkZWQgdXAgYnkgZmVhdHVyZSBhcmVhLlxuKi9cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuLy8gVFlQRVNcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09IFwidW5kZWZpbmVkXCI7XG59XG5mdW5jdGlvbiBpc051bWJlcihvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gXCJudW1iZXJcIjtcbn1cbmZ1bmN0aW9uIGlzSW50ZWdlcihvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gXCJudW1iZXJcIiAmJiBvICUgMSA9PT0gMDtcbn1cbmZ1bmN0aW9uIGlzU3RyaW5nKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSBcInN0cmluZ1wiO1xufVxuZnVuY3Rpb24gaXNEYXRlKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gXCJbb2JqZWN0IERhdGVdXCI7XG59IC8vIENBUEFCSUxJVElFU1xuXG5mdW5jdGlvbiBoYXNJbnRsKCkge1xuICB0cnkge1xuICAgIHJldHVybiB0eXBlb2YgSW50bCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJbnRsLkRhdGVUaW1lRm9ybWF0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5mdW5jdGlvbiBoYXNGb3JtYXRUb1BhcnRzKCkge1xuICByZXR1cm4gIWlzVW5kZWZpbmVkKEludGwuRGF0ZVRpbWVGb3JtYXQucHJvdG90eXBlLmZvcm1hdFRvUGFydHMpO1xufVxuZnVuY3Rpb24gaGFzUmVsYXRpdmUoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHR5cGVvZiBJbnRsICE9PSBcInVuZGVmaW5lZFwiICYmICEhSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0gLy8gT0JKRUNUUyBBTkQgQVJSQVlTXG5cbmZ1bmN0aW9uIG1heWJlQXJyYXkodGhpbmcpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpbmcpID8gdGhpbmcgOiBbdGhpbmddO1xufVxuZnVuY3Rpb24gYmVzdEJ5KGFyciwgYnksIGNvbXBhcmUpIHtcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24gKGJlc3QsIG5leHQpIHtcbiAgICB2YXIgcGFpciA9IFtieShuZXh0KSwgbmV4dF07XG5cbiAgICBpZiAoIWJlc3QpIHtcbiAgICAgIHJldHVybiBwYWlyO1xuICAgIH0gZWxzZSBpZiAoY29tcGFyZShiZXN0WzBdLCBwYWlyWzBdKSA9PT0gYmVzdFswXSkge1xuICAgICAgcmV0dXJuIGJlc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwYWlyO1xuICAgIH1cbiAgfSwgbnVsbClbMV07XG59XG5mdW5jdGlvbiBwaWNrKG9iaiwga2V5cykge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGspIHtcbiAgICBhW2tdID0gb2JqW2tdO1xuICAgIHJldHVybiBhO1xuICB9LCB7fSk7XG59XG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufSAvLyBOVU1CRVJTIEFORCBTVFJJTkdTXG5cbmZ1bmN0aW9uIGludGVnZXJCZXR3ZWVuKHRoaW5nLCBib3R0b20sIHRvcCkge1xuICByZXR1cm4gaXNJbnRlZ2VyKHRoaW5nKSAmJiB0aGluZyA+PSBib3R0b20gJiYgdGhpbmcgPD0gdG9wO1xufSAvLyB4ICUgbiBidXQgdGFrZXMgdGhlIHNpZ24gb2YgbiBpbnN0ZWFkIG9mIHhcblxuZnVuY3Rpb24gZmxvb3JNb2QoeCwgbikge1xuICByZXR1cm4geCAtIG4gKiBNYXRoLmZsb29yKHggLyBuKTtcbn1cbmZ1bmN0aW9uIHBhZFN0YXJ0KGlucHV0LCBuKSB7XG4gIGlmIChuID09PSB2b2lkIDApIHtcbiAgICBuID0gMjtcbiAgfVxuXG4gIGlmIChpbnB1dC50b1N0cmluZygpLmxlbmd0aCA8IG4pIHtcbiAgICByZXR1cm4gKFwiMFwiLnJlcGVhdChuKSArIGlucHV0KS5zbGljZSgtbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGlucHV0LnRvU3RyaW5nKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHBhcnNlSW50ZWdlcihzdHJpbmcpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHN0cmluZykgfHwgc3RyaW5nID09PSBudWxsIHx8IHN0cmluZyA9PT0gXCJcIikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHN0cmluZywgMTApO1xuICB9XG59XG5mdW5jdGlvbiBwYXJzZU1pbGxpcyhmcmFjdGlvbikge1xuICAvLyBSZXR1cm4gdW5kZWZpbmVkIChpbnN0ZWFkIG9mIDApIGluIHRoZXNlIGNhc2VzLCB3aGVyZSBmcmFjdGlvbiBpcyBub3Qgc2V0XG4gIGlmIChpc1VuZGVmaW5lZChmcmFjdGlvbikgfHwgZnJhY3Rpb24gPT09IG51bGwgfHwgZnJhY3Rpb24gPT09IFwiXCIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2Uge1xuICAgIHZhciBmID0gcGFyc2VGbG9hdChcIjAuXCIgKyBmcmFjdGlvbikgKiAxMDAwO1xuICAgIHJldHVybiBNYXRoLmZsb29yKGYpO1xuICB9XG59XG5mdW5jdGlvbiByb3VuZFRvKG51bWJlciwgZGlnaXRzLCB0b3dhcmRaZXJvKSB7XG4gIGlmICh0b3dhcmRaZXJvID09PSB2b2lkIDApIHtcbiAgICB0b3dhcmRaZXJvID0gZmFsc2U7XG4gIH1cblxuICB2YXIgZmFjdG9yID0gTWF0aC5wb3coMTAsIGRpZ2l0cyksXG4gICAgICByb3VuZGVyID0gdG93YXJkWmVybyA/IE1hdGgudHJ1bmMgOiBNYXRoLnJvdW5kO1xuICByZXR1cm4gcm91bmRlcihudW1iZXIgKiBmYWN0b3IpIC8gZmFjdG9yO1xufSAvLyBEQVRFIEJBU0lDU1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFyKHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0ID09PSAwICYmICh5ZWFyICUgMTAwICE9PSAwIHx8IHllYXIgJSA0MDAgPT09IDApO1xufVxuZnVuY3Rpb24gZGF5c0luWWVhcih5ZWFyKSB7XG4gIHJldHVybiBpc0xlYXBZZWFyKHllYXIpID8gMzY2IDogMzY1O1xufVxuZnVuY3Rpb24gZGF5c0luTW9udGgoeWVhciwgbW9udGgpIHtcbiAgdmFyIG1vZE1vbnRoID0gZmxvb3JNb2QobW9udGggLSAxLCAxMikgKyAxLFxuICAgICAgbW9kWWVhciA9IHllYXIgKyAobW9udGggLSBtb2RNb250aCkgLyAxMjtcblxuICBpZiAobW9kTW9udGggPT09IDIpIHtcbiAgICByZXR1cm4gaXNMZWFwWWVhcihtb2RZZWFyKSA/IDI5IDogMjg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdW21vZE1vbnRoIC0gMV07XG4gIH1cbn0gLy8gY292ZXJ0IGEgY2FsZW5kYXIgb2JqZWN0IHRvIGEgbG9jYWwgdGltZXN0YW1wIChlcG9jaCwgYnV0IHdpdGggdGhlIG9mZnNldCBiYWtlZCBpbilcblxuZnVuY3Rpb24gb2JqVG9Mb2NhbFRTKG9iaikge1xuICB2YXIgZCA9IERhdGUuVVRDKG9iai55ZWFyLCBvYmoubW9udGggLSAxLCBvYmouZGF5LCBvYmouaG91ciwgb2JqLm1pbnV0ZSwgb2JqLnNlY29uZCwgb2JqLm1pbGxpc2Vjb25kKTsgLy8gZm9yIGxlZ2FjeSByZWFzb25zLCB5ZWFycyBiZXR3ZWVuIDAgYW5kIDk5IGFyZSBpbnRlcnByZXRlZCBhcyAxOVhYOyByZXZlcnQgdGhhdFxuXG4gIGlmIChvYmoueWVhciA8IDEwMCAmJiBvYmoueWVhciA+PSAwKSB7XG4gICAgZCA9IG5ldyBEYXRlKGQpO1xuICAgIGQuc2V0VVRDRnVsbFllYXIoZC5nZXRVVENGdWxsWWVhcigpIC0gMTkwMCk7XG4gIH1cblxuICByZXR1cm4gK2Q7XG59XG5mdW5jdGlvbiB3ZWVrc0luV2Vla1llYXIod2Vla1llYXIpIHtcbiAgdmFyIHAxID0gKHdlZWtZZWFyICsgTWF0aC5mbG9vcih3ZWVrWWVhciAvIDQpIC0gTWF0aC5mbG9vcih3ZWVrWWVhciAvIDEwMCkgKyBNYXRoLmZsb29yKHdlZWtZZWFyIC8gNDAwKSkgJSA3LFxuICAgICAgbGFzdCA9IHdlZWtZZWFyIC0gMSxcbiAgICAgIHAyID0gKGxhc3QgKyBNYXRoLmZsb29yKGxhc3QgLyA0KSAtIE1hdGguZmxvb3IobGFzdCAvIDEwMCkgKyBNYXRoLmZsb29yKGxhc3QgLyA0MDApKSAlIDc7XG4gIHJldHVybiBwMSA9PT0gNCB8fCBwMiA9PT0gMyA/IDUzIDogNTI7XG59XG5mdW5jdGlvbiB1bnRydW5jYXRlWWVhcih5ZWFyKSB7XG4gIGlmICh5ZWFyID4gOTkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHJldHVybiB5ZWFyID4gNjAgPyAxOTAwICsgeWVhciA6IDIwMDAgKyB5ZWFyO1xufSAvLyBQQVJTSU5HXG5cbmZ1bmN0aW9uIHBhcnNlWm9uZUluZm8odHMsIG9mZnNldEZvcm1hdCwgbG9jYWxlLCB0aW1lWm9uZSkge1xuICBpZiAodGltZVpvbmUgPT09IHZvaWQgMCkge1xuICAgIHRpbWVab25lID0gbnVsbDtcbiAgfVxuXG4gIHZhciBkYXRlID0gbmV3IERhdGUodHMpLFxuICAgICAgaW50bE9wdHMgPSB7XG4gICAgaG91cjEyOiBmYWxzZSxcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICBtb250aDogXCIyLWRpZ2l0XCIsXG4gICAgZGF5OiBcIjItZGlnaXRcIixcbiAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICBtaW51dGU6IFwiMi1kaWdpdFwiXG4gIH07XG5cbiAgaWYgKHRpbWVab25lKSB7XG4gICAgaW50bE9wdHMudGltZVpvbmUgPSB0aW1lWm9uZTtcbiAgfVxuXG4gIHZhciBtb2RpZmllZCA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHRpbWVab25lTmFtZTogb2Zmc2V0Rm9ybWF0XG4gIH0sIGludGxPcHRzKSxcbiAgICAgIGludGwgPSBoYXNJbnRsKCk7XG5cbiAgaWYgKGludGwgJiYgaGFzRm9ybWF0VG9QYXJ0cygpKSB7XG4gICAgdmFyIHBhcnNlZCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgbW9kaWZpZWQpLmZvcm1hdFRvUGFydHMoZGF0ZSkuZmluZChmdW5jdGlvbiAobSkge1xuICAgICAgcmV0dXJuIG0udHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInRpbWV6b25lbmFtZVwiO1xuICAgIH0pO1xuICAgIHJldHVybiBwYXJzZWQgPyBwYXJzZWQudmFsdWUgOiBudWxsO1xuICB9IGVsc2UgaWYgKGludGwpIHtcbiAgICAvLyB0aGlzIHByb2JhYmx5IGRvZXNuJ3Qgd29yayBmb3IgYWxsIGxvY2FsZXNcbiAgICB2YXIgd2l0aG91dCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgaW50bE9wdHMpLmZvcm1hdChkYXRlKSxcbiAgICAgICAgaW5jbHVkZWQgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIG1vZGlmaWVkKS5mb3JtYXQoZGF0ZSksXG4gICAgICAgIGRpZmZlZCA9IGluY2x1ZGVkLnN1YnN0cmluZyh3aXRob3V0Lmxlbmd0aCksXG4gICAgICAgIHRyaW1tZWQgPSBkaWZmZWQucmVwbGFjZSgvXlssIFxcdTIwMGVdKy8sIFwiXCIpO1xuICAgIHJldHVybiB0cmltbWVkO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59IC8vIHNpZ25lZE9mZnNldCgnLTUnLCAnMzAnKSAtPiAtMzMwXG5cbmZ1bmN0aW9uIHNpZ25lZE9mZnNldChvZmZIb3VyU3RyLCBvZmZNaW51dGVTdHIpIHtcbiAgdmFyIG9mZkhvdXIgPSBwYXJzZUludChvZmZIb3VyU3RyLCAxMCk7IC8vIGRvbid0IHx8IHRoaXMgYmVjYXVzZSB3ZSB3YW50IHRvIHByZXNlcnZlIC0wXG5cbiAgaWYgKE51bWJlci5pc05hTihvZmZIb3VyKSkge1xuICAgIG9mZkhvdXIgPSAwO1xuICB9XG5cbiAgdmFyIG9mZk1pbiA9IHBhcnNlSW50KG9mZk1pbnV0ZVN0ciwgMTApIHx8IDAsXG4gICAgICBvZmZNaW5TaWduZWQgPSBvZmZIb3VyIDwgMCB8fCBPYmplY3QuaXMob2ZmSG91ciwgLTApID8gLW9mZk1pbiA6IG9mZk1pbjtcbiAgcmV0dXJuIG9mZkhvdXIgKiA2MCArIG9mZk1pblNpZ25lZDtcbn0gLy8gQ09FUkNJT05cblxuZnVuY3Rpb24gYXNOdW1iZXIodmFsdWUpIHtcbiAgdmFyIG51bWVyaWNWYWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiIHx8IHZhbHVlID09PSBcIlwiIHx8IE51bWJlci5pc05hTihudW1lcmljVmFsdWUpKSB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJJbnZhbGlkIHVuaXQgdmFsdWUgXCIgKyB2YWx1ZSk7XG4gIHJldHVybiBudW1lcmljVmFsdWU7XG59XG5mdW5jdGlvbiBub3JtYWxpemVPYmplY3Qob2JqLCBub3JtYWxpemVyLCBub25Vbml0S2V5cykge1xuICB2YXIgbm9ybWFsaXplZCA9IHt9O1xuXG4gIGZvciAodmFyIHUgaW4gb2JqKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KG9iaiwgdSkpIHtcbiAgICAgIGlmIChub25Vbml0S2V5cy5pbmRleE9mKHUpID49IDApIGNvbnRpbnVlO1xuICAgICAgdmFyIHYgPSBvYmpbdV07XG4gICAgICBpZiAodiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgbm9ybWFsaXplZFtub3JtYWxpemVyKHUpXSA9IGFzTnVtYmVyKHYpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub3JtYWxpemVkO1xufVxuZnVuY3Rpb24gZm9ybWF0T2Zmc2V0KG9mZnNldCwgZm9ybWF0KSB7XG4gIHZhciBob3VycyA9IE1hdGgudHJ1bmMoTWF0aC5hYnMob2Zmc2V0IC8gNjApKSxcbiAgICAgIG1pbnV0ZXMgPSBNYXRoLnRydW5jKE1hdGguYWJzKG9mZnNldCAlIDYwKSksXG4gICAgICBzaWduID0gb2Zmc2V0ID49IDAgPyBcIitcIiA6IFwiLVwiO1xuXG4gIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgY2FzZSBcInNob3J0XCI6XG4gICAgICByZXR1cm4gXCJcIiArIHNpZ24gKyBwYWRTdGFydChob3VycywgMikgKyBcIjpcIiArIHBhZFN0YXJ0KG1pbnV0ZXMsIDIpO1xuXG4gICAgY2FzZSBcIm5hcnJvd1wiOlxuICAgICAgcmV0dXJuIFwiXCIgKyBzaWduICsgaG91cnMgKyAobWludXRlcyA+IDAgPyBcIjpcIiArIG1pbnV0ZXMgOiBcIlwiKTtcblxuICAgIGNhc2UgXCJ0ZWNoaWVcIjpcbiAgICAgIHJldHVybiBcIlwiICsgc2lnbiArIHBhZFN0YXJ0KGhvdXJzLCAyKSArIHBhZFN0YXJ0KG1pbnV0ZXMsIDIpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVmFsdWUgZm9ybWF0IFwiICsgZm9ybWF0ICsgXCIgaXMgb3V0IG9mIHJhbmdlIGZvciBwcm9wZXJ0eSBmb3JtYXRcIik7XG4gIH1cbn1cbmZ1bmN0aW9uIHRpbWVPYmplY3Qob2JqKSB7XG4gIHJldHVybiBwaWNrKG9iaiwgW1wiaG91clwiLCBcIm1pbnV0ZVwiLCBcInNlY29uZFwiLCBcIm1pbGxpc2Vjb25kXCJdKTtcbn1cbnZhciBpYW5hUmVnZXggPSAvW0EtWmEtel8rLV17MSwyNTZ9KDo/XFwvW0EtWmEtel8rLV17MSwyNTZ9KFxcL1tBLVphLXpfKy1dezEsMjU2fSk/KT8vO1xuXG5mdW5jdGlvbiBzdHJpbmdpZnkob2JqKSB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmosIE9iamVjdC5rZXlzKG9iaikuc29ydCgpKTtcbn1cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5cbnZhciBtb250aHNMb25nID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl07XG52YXIgbW9udGhzU2hvcnQgPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl07XG52YXIgbW9udGhzTmFycm93ID0gW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdO1xuZnVuY3Rpb24gbW9udGhzKGxlbmd0aCkge1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgXCJuYXJyb3dcIjpcbiAgICAgIHJldHVybiBtb250aHNOYXJyb3c7XG5cbiAgICBjYXNlIFwic2hvcnRcIjpcbiAgICAgIHJldHVybiBtb250aHNTaG9ydDtcblxuICAgIGNhc2UgXCJsb25nXCI6XG4gICAgICByZXR1cm4gbW9udGhzTG9uZztcblxuICAgIGNhc2UgXCJudW1lcmljXCI6XG4gICAgICByZXR1cm4gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIiwgXCIxMVwiLCBcIjEyXCJdO1xuXG4gICAgY2FzZSBcIjItZGlnaXRcIjpcbiAgICAgIHJldHVybiBbXCIwMVwiLCBcIjAyXCIsIFwiMDNcIiwgXCIwNFwiLCBcIjA1XCIsIFwiMDZcIiwgXCIwN1wiLCBcIjA4XCIsIFwiMDlcIiwgXCIxMFwiLCBcIjExXCIsIFwiMTJcIl07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbnZhciB3ZWVrZGF5c0xvbmcgPSBbXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiLCBcIlN1bmRheVwiXTtcbnZhciB3ZWVrZGF5c1Nob3J0ID0gW1wiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCIsIFwiU3VuXCJdO1xudmFyIHdlZWtkYXlzTmFycm93ID0gW1wiTVwiLCBcIlRcIiwgXCJXXCIsIFwiVFwiLCBcIkZcIiwgXCJTXCIsIFwiU1wiXTtcbmZ1bmN0aW9uIHdlZWtkYXlzKGxlbmd0aCkge1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgXCJuYXJyb3dcIjpcbiAgICAgIHJldHVybiB3ZWVrZGF5c05hcnJvdztcblxuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIHdlZWtkYXlzU2hvcnQ7XG5cbiAgICBjYXNlIFwibG9uZ1wiOlxuICAgICAgcmV0dXJuIHdlZWtkYXlzTG9uZztcblxuICAgIGNhc2UgXCJudW1lcmljXCI6XG4gICAgICByZXR1cm4gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiXTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxudmFyIG1lcmlkaWVtcyA9IFtcIkFNXCIsIFwiUE1cIl07XG52YXIgZXJhc0xvbmcgPSBbXCJCZWZvcmUgQ2hyaXN0XCIsIFwiQW5ubyBEb21pbmlcIl07XG52YXIgZXJhc1Nob3J0ID0gW1wiQkNcIiwgXCJBRFwiXTtcbnZhciBlcmFzTmFycm93ID0gW1wiQlwiLCBcIkFcIl07XG5mdW5jdGlvbiBlcmFzKGxlbmd0aCkge1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgXCJuYXJyb3dcIjpcbiAgICAgIHJldHVybiBlcmFzTmFycm93O1xuXG4gICAgY2FzZSBcInNob3J0XCI6XG4gICAgICByZXR1cm4gZXJhc1Nob3J0O1xuXG4gICAgY2FzZSBcImxvbmdcIjpcbiAgICAgIHJldHVybiBlcmFzTG9uZztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuZnVuY3Rpb24gbWVyaWRpZW1Gb3JEYXRlVGltZShkdCkge1xuICByZXR1cm4gbWVyaWRpZW1zW2R0LmhvdXIgPCAxMiA/IDAgOiAxXTtcbn1cbmZ1bmN0aW9uIHdlZWtkYXlGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7XG4gIHJldHVybiB3ZWVrZGF5cyhsZW5ndGgpW2R0LndlZWtkYXkgLSAxXTtcbn1cbmZ1bmN0aW9uIG1vbnRoRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkge1xuICByZXR1cm4gbW9udGhzKGxlbmd0aClbZHQubW9udGggLSAxXTtcbn1cbmZ1bmN0aW9uIGVyYUZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGVyYXMobGVuZ3RoKVtkdC55ZWFyIDwgMCA/IDAgOiAxXTtcbn1cbmZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlVGltZSh1bml0LCBjb3VudCwgbnVtZXJpYywgbmFycm93KSB7XG4gIGlmIChudW1lcmljID09PSB2b2lkIDApIHtcbiAgICBudW1lcmljID0gXCJhbHdheXNcIjtcbiAgfVxuXG4gIGlmIChuYXJyb3cgPT09IHZvaWQgMCkge1xuICAgIG5hcnJvdyA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIHVuaXRzID0ge1xuICAgIHllYXJzOiBbXCJ5ZWFyXCIsIFwieXIuXCJdLFxuICAgIHF1YXJ0ZXJzOiBbXCJxdWFydGVyXCIsIFwicXRyLlwiXSxcbiAgICBtb250aHM6IFtcIm1vbnRoXCIsIFwibW8uXCJdLFxuICAgIHdlZWtzOiBbXCJ3ZWVrXCIsIFwid2suXCJdLFxuICAgIGRheXM6IFtcImRheVwiLCBcImRheVwiLCBcImRheXNcIl0sXG4gICAgaG91cnM6IFtcImhvdXJcIiwgXCJoci5cIl0sXG4gICAgbWludXRlczogW1wibWludXRlXCIsIFwibWluLlwiXSxcbiAgICBzZWNvbmRzOiBbXCJzZWNvbmRcIiwgXCJzZWMuXCJdXG4gIH07XG4gIHZhciBsYXN0YWJsZSA9IFtcImhvdXJzXCIsIFwibWludXRlc1wiLCBcInNlY29uZHNcIl0uaW5kZXhPZih1bml0KSA9PT0gLTE7XG5cbiAgaWYgKG51bWVyaWMgPT09IFwiYXV0b1wiICYmIGxhc3RhYmxlKSB7XG4gICAgdmFyIGlzRGF5ID0gdW5pdCA9PT0gXCJkYXlzXCI7XG5cbiAgICBzd2l0Y2ggKGNvdW50KSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBpc0RheSA/IFwidG9tb3Jyb3dcIiA6IFwibmV4dCBcIiArIHVuaXRzW3VuaXRdWzBdO1xuXG4gICAgICBjYXNlIC0xOlxuICAgICAgICByZXR1cm4gaXNEYXkgPyBcInllc3RlcmRheVwiIDogXCJsYXN0IFwiICsgdW5pdHNbdW5pdF1bMF07XG5cbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIGlzRGF5ID8gXCJ0b2RheVwiIDogXCJ0aGlzIFwiICsgdW5pdHNbdW5pdF1bMF07XG5cbiAgICB9XG4gIH1cblxuICB2YXIgaXNJblBhc3QgPSBPYmplY3QuaXMoY291bnQsIC0wKSB8fCBjb3VudCA8IDAsXG4gICAgICBmbXRWYWx1ZSA9IE1hdGguYWJzKGNvdW50KSxcbiAgICAgIHNpbmd1bGFyID0gZm10VmFsdWUgPT09IDEsXG4gICAgICBsaWxVbml0cyA9IHVuaXRzW3VuaXRdLFxuICAgICAgZm10VW5pdCA9IG5hcnJvdyA/IHNpbmd1bGFyID8gbGlsVW5pdHNbMV0gOiBsaWxVbml0c1syXSB8fCBsaWxVbml0c1sxXSA6IHNpbmd1bGFyID8gdW5pdHNbdW5pdF1bMF0gOiB1bml0O1xuICByZXR1cm4gaXNJblBhc3QgPyBmbXRWYWx1ZSArIFwiIFwiICsgZm10VW5pdCArIFwiIGFnb1wiIDogXCJpbiBcIiArIGZtdFZhbHVlICsgXCIgXCIgKyBmbXRVbml0O1xufVxuZnVuY3Rpb24gZm9ybWF0U3RyaW5nKGtub3duRm9ybWF0KSB7XG4gIC8vIHRoZXNlIGFsbCBoYXZlIHRoZSBvZmZzZXRzIHJlbW92ZWQgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIGFjY2VzcyB0byB0aGVtXG4gIC8vIHdpdGhvdXQgYWxsIHRoZSBpbnRsIHN0dWZmIHRoaXMgaXMgYmFja2ZpbGxpbmdcbiAgdmFyIGZpbHRlcmVkID0gcGljayhrbm93bkZvcm1hdCwgW1wid2Vla2RheVwiLCBcImVyYVwiLCBcInllYXJcIiwgXCJtb250aFwiLCBcImRheVwiLCBcImhvdXJcIiwgXCJtaW51dGVcIiwgXCJzZWNvbmRcIiwgXCJ0aW1lWm9uZU5hbWVcIiwgXCJob3VyMTJcIl0pLFxuICAgICAga2V5ID0gc3RyaW5naWZ5KGZpbHRlcmVkKSxcbiAgICAgIGRhdGVUaW1lSHVnZSA9IFwiRUVFRSwgTExMTCBkLCB5eXl5LCBoOm1tIGFcIjtcblxuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2Ugc3RyaW5naWZ5KERBVEVfU0hPUlQpOlxuICAgICAgcmV0dXJuIFwiTS9kL3l5eXlcIjtcblxuICAgIGNhc2Ugc3RyaW5naWZ5KERBVEVfTUVEKTpcbiAgICAgIHJldHVybiBcIkxMTCBkLCB5eXl5XCI7XG5cbiAgICBjYXNlIHN0cmluZ2lmeShEQVRFX01FRF9XSVRIX1dFRUtEQVkpOlxuICAgICAgcmV0dXJuIFwiRUVFLCBMTEwgZCwgeXl5eVwiO1xuXG4gICAgY2FzZSBzdHJpbmdpZnkoREFURV9GVUxMKTpcbiAgICAgIHJldHVybiBcIkxMTEwgZCwgeXl5eVwiO1xuXG4gICAgY2FzZSBzdHJpbmdpZnkoREFURV9IVUdFKTpcbiAgICAgIHJldHVybiBcIkVFRUUsIExMTEwgZCwgeXl5eVwiO1xuXG4gICAgY2FzZSBzdHJpbmdpZnkoVElNRV9TSU1QTEUpOlxuICAgICAgcmV0dXJuIFwiaDptbSBhXCI7XG5cbiAgICBjYXNlIHN0cmluZ2lmeShUSU1FX1dJVEhfU0VDT05EUyk6XG4gICAgICByZXR1cm4gXCJoOm1tOnNzIGFcIjtcblxuICAgIGNhc2Ugc3RyaW5naWZ5KFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQpOlxuICAgICAgcmV0dXJuIFwiaDptbSBhXCI7XG5cbiAgICBjYXNlIHN0cmluZ2lmeShUSU1FX1dJVEhfTE9OR19PRkZTRVQpOlxuICAgICAgcmV0dXJuIFwiaDptbSBhXCI7XG5cbiAgICBjYXNlIHN0cmluZ2lmeShUSU1FXzI0X1NJTVBMRSk6XG4gICAgICByZXR1cm4gXCJISDptbVwiO1xuXG4gICAgY2FzZSBzdHJpbmdpZnkoVElNRV8yNF9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuIFwiSEg6bW06c3NcIjtcblxuICAgIGNhc2Ugc3RyaW5naWZ5KFRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQpOlxuICAgICAgcmV0dXJuIFwiSEg6bW1cIjtcblxuICAgIGNhc2Ugc3RyaW5naWZ5KFRJTUVfMjRfV0lUSF9MT05HX09GRlNFVCk6XG4gICAgICByZXR1cm4gXCJISDptbVwiO1xuXG4gICAgY2FzZSBzdHJpbmdpZnkoREFURVRJTUVfU0hPUlQpOlxuICAgICAgcmV0dXJuIFwiTS9kL3l5eXksIGg6bW0gYVwiO1xuXG4gICAgY2FzZSBzdHJpbmdpZnkoREFURVRJTUVfTUVEKTpcbiAgICAgIHJldHVybiBcIkxMTCBkLCB5eXl5LCBoOm1tIGFcIjtcblxuICAgIGNhc2Ugc3RyaW5naWZ5KERBVEVUSU1FX0ZVTEwpOlxuICAgICAgcmV0dXJuIFwiTExMTCBkLCB5eXl5LCBoOm1tIGFcIjtcblxuICAgIGNhc2Ugc3RyaW5naWZ5KERBVEVUSU1FX0hVR0UpOlxuICAgICAgcmV0dXJuIGRhdGVUaW1lSHVnZTtcblxuICAgIGNhc2Ugc3RyaW5naWZ5KERBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUyk6XG4gICAgICByZXR1cm4gXCJNL2QveXl5eSwgaDptbTpzcyBhXCI7XG5cbiAgICBjYXNlIHN0cmluZ2lmeShEQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTKTpcbiAgICAgIHJldHVybiBcIkxMTCBkLCB5eXl5LCBoOm1tOnNzIGFcIjtcblxuICAgIGNhc2Ugc3RyaW5naWZ5KERBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVkpOlxuICAgICAgcmV0dXJuIFwiRUVFLCBkIExMTCB5eXl5LCBoOm1tIGFcIjtcblxuICAgIGNhc2Ugc3RyaW5naWZ5KERBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTKTpcbiAgICAgIHJldHVybiBcIkxMTEwgZCwgeXl5eSwgaDptbTpzcyBhXCI7XG5cbiAgICBjYXNlIHN0cmluZ2lmeShEQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUyk6XG4gICAgICByZXR1cm4gXCJFRUVFLCBMTExMIGQsIHl5eXksIGg6bW06c3MgYVwiO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkYXRlVGltZUh1Z2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VG9rZW5zKHNwbGl0cywgdG9rZW5Ub1N0cmluZykge1xuICB2YXIgcyA9IFwiXCI7XG5cbiAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShzcGxpdHMpLCBfc3RlcDsgIShfc3RlcCA9IF9pdGVyYXRvcigpKS5kb25lOykge1xuICAgIHZhciB0b2tlbiA9IF9zdGVwLnZhbHVlO1xuXG4gICAgaWYgKHRva2VuLmxpdGVyYWwpIHtcbiAgICAgIHMgKz0gdG9rZW4udmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICBzICs9IHRva2VuVG9TdHJpbmcodG9rZW4udmFsKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcztcbn1cblxudmFyIF9tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzID0ge1xuICBEOiBEQVRFX1NIT1JULFxuICBERDogREFURV9NRUQsXG4gIERERDogREFURV9GVUxMLFxuICBEREREOiBEQVRFX0hVR0UsXG4gIHQ6IFRJTUVfU0lNUExFLFxuICB0dDogVElNRV9XSVRIX1NFQ09ORFMsXG4gIHR0dDogVElNRV9XSVRIX1NIT1JUX09GRlNFVCxcbiAgdHR0dDogVElNRV9XSVRIX0xPTkdfT0ZGU0VULFxuICBUOiBUSU1FXzI0X1NJTVBMRSxcbiAgVFQ6IFRJTUVfMjRfV0lUSF9TRUNPTkRTLFxuICBUVFQ6IFRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQsXG4gIFRUVFQ6IFRJTUVfMjRfV0lUSF9MT05HX09GRlNFVCxcbiAgZjogREFURVRJTUVfU0hPUlQsXG4gIGZmOiBEQVRFVElNRV9NRUQsXG4gIGZmZjogREFURVRJTUVfRlVMTCxcbiAgZmZmZjogREFURVRJTUVfSFVHRSxcbiAgRjogREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTLFxuICBGRjogREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUyxcbiAgRkZGOiBEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUyxcbiAgRkZGRjogREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFNcbn07XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIEZvcm1hdHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIEZvcm1hdHRlci5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUobG9jYWxlLCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRm9ybWF0dGVyKGxvY2FsZSwgb3B0cyk7XG4gIH07XG5cbiAgRm9ybWF0dGVyLnBhcnNlRm9ybWF0ID0gZnVuY3Rpb24gcGFyc2VGb3JtYXQoZm10KSB7XG4gICAgdmFyIGN1cnJlbnQgPSBudWxsLFxuICAgICAgICBjdXJyZW50RnVsbCA9IFwiXCIsXG4gICAgICAgIGJyYWNrZXRlZCA9IGZhbHNlO1xuICAgIHZhciBzcGxpdHMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm10Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYyA9IGZtdC5jaGFyQXQoaSk7XG5cbiAgICAgIGlmIChjID09PSBcIidcIikge1xuICAgICAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwbGl0cy5wdXNoKHtcbiAgICAgICAgICAgIGxpdGVyYWw6IGJyYWNrZXRlZCxcbiAgICAgICAgICAgIHZhbDogY3VycmVudEZ1bGxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnQgPSBudWxsO1xuICAgICAgICBjdXJyZW50RnVsbCA9IFwiXCI7XG4gICAgICAgIGJyYWNrZXRlZCA9ICFicmFja2V0ZWQ7XG4gICAgICB9IGVsc2UgaWYgKGJyYWNrZXRlZCkge1xuICAgICAgICBjdXJyZW50RnVsbCArPSBjO1xuICAgICAgfSBlbHNlIGlmIChjID09PSBjdXJyZW50KSB7XG4gICAgICAgIGN1cnJlbnRGdWxsICs9IGM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwbGl0cy5wdXNoKHtcbiAgICAgICAgICAgIGxpdGVyYWw6IGZhbHNlLFxuICAgICAgICAgICAgdmFsOiBjdXJyZW50RnVsbFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudEZ1bGwgPSBjO1xuICAgICAgICBjdXJyZW50ID0gYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xuICAgICAgc3BsaXRzLnB1c2goe1xuICAgICAgICBsaXRlcmFsOiBicmFja2V0ZWQsXG4gICAgICAgIHZhbDogY3VycmVudEZ1bGxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzcGxpdHM7XG4gIH07XG5cbiAgRm9ybWF0dGVyLm1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHMgPSBmdW5jdGlvbiBtYWNyb1Rva2VuVG9Gb3JtYXRPcHRzKHRva2VuKSB7XG4gICAgcmV0dXJuIF9tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzW3Rva2VuXTtcbiAgfTtcblxuICBmdW5jdGlvbiBGb3JtYXR0ZXIobG9jYWxlLCBmb3JtYXRPcHRzKSB7XG4gICAgdGhpcy5vcHRzID0gZm9ybWF0T3B0cztcbiAgICB0aGlzLmxvYyA9IGxvY2FsZTtcbiAgICB0aGlzLnN5c3RlbUxvYyA9IG51bGw7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRm9ybWF0dGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZm9ybWF0V2l0aFN5c3RlbURlZmF1bHQgPSBmdW5jdGlvbiBmb3JtYXRXaXRoU3lzdGVtRGVmYXVsdChkdCwgb3B0cykge1xuICAgIGlmICh0aGlzLnN5c3RlbUxvYyA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zeXN0ZW1Mb2MgPSB0aGlzLmxvYy5yZWRlZmF1bHRUb1N5c3RlbSgpO1xuICAgIH1cblxuICAgIHZhciBkZiA9IHRoaXMuc3lzdGVtTG9jLmR0Rm9ybWF0dGVyKGR0LCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdHMsIG9wdHMpKTtcbiAgICByZXR1cm4gZGYuZm9ybWF0KCk7XG4gIH07XG5cbiAgX3Byb3RvLmZvcm1hdERhdGVUaW1lID0gZnVuY3Rpb24gZm9ybWF0RGF0ZVRpbWUoZHQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgdmFyIGRmID0gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoZHQsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0cywgb3B0cykpO1xuICAgIHJldHVybiBkZi5mb3JtYXQoKTtcbiAgfTtcblxuICBfcHJvdG8uZm9ybWF0RGF0ZVRpbWVQYXJ0cyA9IGZ1bmN0aW9uIGZvcm1hdERhdGVUaW1lUGFydHMoZHQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgdmFyIGRmID0gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoZHQsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0cywgb3B0cykpO1xuICAgIHJldHVybiBkZi5mb3JtYXRUb1BhcnRzKCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlc29sdmVkT3B0aW9ucyA9IGZ1bmN0aW9uIHJlc29sdmVkT3B0aW9ucyhkdCwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgZGYgPSB0aGlzLmxvYy5kdEZvcm1hdHRlcihkdCwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRzLCBvcHRzKSk7XG4gICAgcmV0dXJuIGRmLnJlc29sdmVkT3B0aW9ucygpO1xuICB9O1xuXG4gIF9wcm90by5udW0gPSBmdW5jdGlvbiBudW0obiwgcCkge1xuICAgIGlmIChwID09PSB2b2lkIDApIHtcbiAgICAgIHAgPSAwO1xuICAgIH1cblxuICAgIC8vIHdlIGdldCBzb21lIHBlcmYgb3V0IG9mIGRvaW5nIHRoaXMgaGVyZSwgYW5ub3lpbmdseVxuICAgIGlmICh0aGlzLm9wdHMuZm9yY2VTaW1wbGUpIHtcbiAgICAgIHJldHVybiBwYWRTdGFydChuLCBwKTtcbiAgICB9XG5cbiAgICB2YXIgb3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0cyk7XG5cbiAgICBpZiAocCA+IDApIHtcbiAgICAgIG9wdHMucGFkVG8gPSBwO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmxvYy5udW1iZXJGb3JtYXR0ZXIob3B0cykuZm9ybWF0KG4pO1xuICB9O1xuXG4gIF9wcm90by5mb3JtYXREYXRlVGltZUZyb21TdHJpbmcgPSBmdW5jdGlvbiBmb3JtYXREYXRlVGltZUZyb21TdHJpbmcoZHQsIGZtdCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIga25vd25FbmdsaXNoID0gdGhpcy5sb2MubGlzdGluZ01vZGUoKSA9PT0gXCJlblwiLFxuICAgICAgICB1c2VEYXRlVGltZUZvcm1hdHRlciA9IHRoaXMubG9jLm91dHB1dENhbGVuZGFyICYmIHRoaXMubG9jLm91dHB1dENhbGVuZGFyICE9PSBcImdyZWdvcnlcIiAmJiBoYXNGb3JtYXRUb1BhcnRzKCksXG4gICAgICAgIHN0cmluZyA9IGZ1bmN0aW9uIHN0cmluZyhvcHRzLCBleHRyYWN0KSB7XG4gICAgICByZXR1cm4gX3RoaXMubG9jLmV4dHJhY3QoZHQsIG9wdHMsIGV4dHJhY3QpO1xuICAgIH0sXG4gICAgICAgIGZvcm1hdE9mZnNldCA9IGZ1bmN0aW9uIGZvcm1hdE9mZnNldChvcHRzKSB7XG4gICAgICBpZiAoZHQuaXNPZmZzZXRGaXhlZCAmJiBkdC5vZmZzZXQgPT09IDAgJiYgb3B0cy5hbGxvd1opIHtcbiAgICAgICAgcmV0dXJuIFwiWlwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZHQuaXNWYWxpZCA/IGR0LnpvbmUuZm9ybWF0T2Zmc2V0KGR0LnRzLCBvcHRzLmZvcm1hdCkgOiBcIlwiO1xuICAgIH0sXG4gICAgICAgIG1lcmlkaWVtID0gZnVuY3Rpb24gbWVyaWRpZW0oKSB7XG4gICAgICByZXR1cm4ga25vd25FbmdsaXNoID8gbWVyaWRpZW1Gb3JEYXRlVGltZShkdCkgOiBzdHJpbmcoe1xuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgaG91cjEyOiB0cnVlXG4gICAgICB9LCBcImRheXBlcmlvZFwiKTtcbiAgICB9LFxuICAgICAgICBtb250aCA9IGZ1bmN0aW9uIG1vbnRoKGxlbmd0aCwgc3RhbmRhbG9uZSkge1xuICAgICAgcmV0dXJuIGtub3duRW5nbGlzaCA/IG1vbnRoRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkgOiBzdHJpbmcoc3RhbmRhbG9uZSA/IHtcbiAgICAgICAgbW9udGg6IGxlbmd0aFxuICAgICAgfSA6IHtcbiAgICAgICAgbW9udGg6IGxlbmd0aCxcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIlxuICAgICAgfSwgXCJtb250aFwiKTtcbiAgICB9LFxuICAgICAgICB3ZWVrZGF5ID0gZnVuY3Rpb24gd2Vla2RheShsZW5ndGgsIHN0YW5kYWxvbmUpIHtcbiAgICAgIHJldHVybiBrbm93bkVuZ2xpc2ggPyB3ZWVrZGF5Rm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkgOiBzdHJpbmcoc3RhbmRhbG9uZSA/IHtcbiAgICAgICAgd2Vla2RheTogbGVuZ3RoXG4gICAgICB9IDoge1xuICAgICAgICB3ZWVrZGF5OiBsZW5ndGgsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIlxuICAgICAgfSwgXCJ3ZWVrZGF5XCIpO1xuICAgIH0sXG4gICAgICAgIG1heWJlTWFjcm8gPSBmdW5jdGlvbiBtYXliZU1hY3JvKHRva2VuKSB7XG4gICAgICB2YXIgZm9ybWF0T3B0cyA9IEZvcm1hdHRlci5tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzKHRva2VuKTtcblxuICAgICAgaWYgKGZvcm1hdE9wdHMpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmZvcm1hdFdpdGhTeXN0ZW1EZWZhdWx0KGR0LCBmb3JtYXRPcHRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgIH1cbiAgICB9LFxuICAgICAgICBlcmEgPSBmdW5jdGlvbiBlcmEobGVuZ3RoKSB7XG4gICAgICByZXR1cm4ga25vd25FbmdsaXNoID8gZXJhRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkgOiBzdHJpbmcoe1xuICAgICAgICBlcmE6IGxlbmd0aFxuICAgICAgfSwgXCJlcmFcIik7XG4gICAgfSxcbiAgICAgICAgdG9rZW5Ub1N0cmluZyA9IGZ1bmN0aW9uIHRva2VuVG9TdHJpbmcodG9rZW4pIHtcbiAgICAgIC8vIFdoZXJlIHBvc3NpYmxlOiBodHRwOi8vY2xkci51bmljb2RlLm9yZy90cmFuc2xhdGlvbi9kYXRlLXRpbWUjVE9DLVN0YW5kLUFsb25lLXZzLi1Gb3JtYXQtU3R5bGVzXG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIC8vIG1zXG4gICAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5taWxsaXNlY29uZCk7XG5cbiAgICAgICAgY2FzZSBcInVcIjogLy8gZmFsbHMgdGhyb3VnaFxuXG4gICAgICAgIGNhc2UgXCJTU1NcIjpcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0Lm1pbGxpc2Vjb25kLCAzKTtcbiAgICAgICAgLy8gc2Vjb25kc1xuXG4gICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5zZWNvbmQpO1xuXG4gICAgICAgIGNhc2UgXCJzc1wiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQuc2Vjb25kLCAyKTtcbiAgICAgICAgLy8gbWludXRlc1xuXG4gICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5taW51dGUpO1xuXG4gICAgICAgIGNhc2UgXCJtbVwiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQubWludXRlLCAyKTtcbiAgICAgICAgLy8gaG91cnNcblxuICAgICAgICBjYXNlIFwiaFwiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQuaG91ciAlIDEyID09PSAwID8gMTIgOiBkdC5ob3VyICUgMTIpO1xuXG4gICAgICAgIGNhc2UgXCJoaFwiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQuaG91ciAlIDEyID09PSAwID8gMTIgOiBkdC5ob3VyICUgMTIsIDIpO1xuXG4gICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5ob3VyKTtcblxuICAgICAgICBjYXNlIFwiSEhcIjpcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LmhvdXIsIDIpO1xuICAgICAgICAvLyBvZmZzZXRcblxuICAgICAgICBjYXNlIFwiWlwiOlxuICAgICAgICAgIC8vIGxpa2UgKzZcbiAgICAgICAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHtcbiAgICAgICAgICAgIGZvcm1hdDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgIGFsbG93WjogX3RoaXMub3B0cy5hbGxvd1pcbiAgICAgICAgICB9KTtcblxuICAgICAgICBjYXNlIFwiWlpcIjpcbiAgICAgICAgICAvLyBsaWtlICswNjowMFxuICAgICAgICAgIHJldHVybiBmb3JtYXRPZmZzZXQoe1xuICAgICAgICAgICAgZm9ybWF0OiBcInNob3J0XCIsXG4gICAgICAgICAgICBhbGxvd1o6IF90aGlzLm9wdHMuYWxsb3daXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgY2FzZSBcIlpaWlwiOlxuICAgICAgICAgIC8vIGxpa2UgKzA2MDBcbiAgICAgICAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHtcbiAgICAgICAgICAgIGZvcm1hdDogXCJ0ZWNoaWVcIixcbiAgICAgICAgICAgIGFsbG93WjogX3RoaXMub3B0cy5hbGxvd1pcbiAgICAgICAgICB9KTtcblxuICAgICAgICBjYXNlIFwiWlpaWlwiOlxuICAgICAgICAgIC8vIGxpa2UgRVNUXG4gICAgICAgICAgcmV0dXJuIGR0LnpvbmUub2Zmc2V0TmFtZShkdC50cywge1xuICAgICAgICAgICAgZm9ybWF0OiBcInNob3J0XCIsXG4gICAgICAgICAgICBsb2NhbGU6IF90aGlzLmxvYy5sb2NhbGVcbiAgICAgICAgICB9KTtcblxuICAgICAgICBjYXNlIFwiWlpaWlpcIjpcbiAgICAgICAgICAvLyBsaWtlIEVhc3Rlcm4gU3RhbmRhcmQgVGltZVxuICAgICAgICAgIHJldHVybiBkdC56b25lLm9mZnNldE5hbWUoZHQudHMsIHtcbiAgICAgICAgICAgIGZvcm1hdDogXCJsb25nXCIsXG4gICAgICAgICAgICBsb2NhbGU6IF90aGlzLmxvYy5sb2NhbGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gem9uZVxuXG4gICAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICAgICAgLy8gbGlrZSBBbWVyaWNhL05ld19Zb3JrXG4gICAgICAgICAgcmV0dXJuIGR0LnpvbmVOYW1lO1xuICAgICAgICAvLyBtZXJpZGllbXNcblxuICAgICAgICBjYXNlIFwiYVwiOlxuICAgICAgICAgIHJldHVybiBtZXJpZGllbSgpO1xuICAgICAgICAvLyBkYXRlc1xuXG4gICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHtcbiAgICAgICAgICAgIGRheTogXCJudW1lcmljXCJcbiAgICAgICAgICB9LCBcImRheVwiKSA6IF90aGlzLm51bShkdC5kYXkpO1xuXG4gICAgICAgIGNhc2UgXCJkZFwiOlxuICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7XG4gICAgICAgICAgICBkYXk6IFwiMi1kaWdpdFwiXG4gICAgICAgICAgfSwgXCJkYXlcIikgOiBfdGhpcy5udW0oZHQuZGF5LCAyKTtcbiAgICAgICAgLy8gd2Vla2RheXMgLSBzdGFuZGFsb25lXG5cbiAgICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LndlZWtkYXkpO1xuXG4gICAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgICAvLyBsaWtlICdUdWVzJ1xuICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwic2hvcnRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgY2FzZSBcImNjY2NcIjpcbiAgICAgICAgICAvLyBsaWtlICdUdWVzZGF5J1xuICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibG9uZ1wiLCB0cnVlKTtcblxuICAgICAgICBjYXNlIFwiY2NjY2NcIjpcbiAgICAgICAgICAvLyBsaWtlICdUJ1xuICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibmFycm93XCIsIHRydWUpO1xuICAgICAgICAvLyB3ZWVrZGF5cyAtIGZvcm1hdFxuXG4gICAgICAgIGNhc2UgXCJFXCI6XG4gICAgICAgICAgLy8gbGlrZSAxXG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC53ZWVrZGF5KTtcblxuICAgICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgICAgLy8gbGlrZSAnVHVlcydcbiAgICAgICAgICByZXR1cm4gd2Vla2RheShcInNob3J0XCIsIGZhbHNlKTtcblxuICAgICAgICBjYXNlIFwiRUVFRVwiOlxuICAgICAgICAgIC8vIGxpa2UgJ1R1ZXNkYXknXG4gICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJsb25nXCIsIGZhbHNlKTtcblxuICAgICAgICBjYXNlIFwiRUVFRUVcIjpcbiAgICAgICAgICAvLyBsaWtlICdUJ1xuICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibmFycm93XCIsIGZhbHNlKTtcbiAgICAgICAgLy8gbW9udGhzIC0gc3RhbmRhbG9uZVxuXG4gICAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgICAgLy8gbGlrZSAxXG4gICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHtcbiAgICAgICAgICAgIG1vbnRoOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgIGRheTogXCJudW1lcmljXCJcbiAgICAgICAgICB9LCBcIm1vbnRoXCIpIDogX3RoaXMubnVtKGR0Lm1vbnRoKTtcblxuICAgICAgICBjYXNlIFwiTExcIjpcbiAgICAgICAgICAvLyBsaWtlIDAxLCBkb2Vzbid0IHNlZW0gdG8gd29ya1xuICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7XG4gICAgICAgICAgICBtb250aDogXCIyLWRpZ2l0XCIsXG4gICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiXG4gICAgICAgICAgfSwgXCJtb250aFwiKSA6IF90aGlzLm51bShkdC5tb250aCwgMik7XG5cbiAgICAgICAgY2FzZSBcIkxMTFwiOlxuICAgICAgICAgIC8vIGxpa2UgSmFuXG4gICAgICAgICAgcmV0dXJuIG1vbnRoKFwic2hvcnRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgICAgICAvLyBsaWtlIEphbnVhcnlcbiAgICAgICAgICByZXR1cm4gbW9udGgoXCJsb25nXCIsIHRydWUpO1xuXG4gICAgICAgIGNhc2UgXCJMTExMTFwiOlxuICAgICAgICAgIC8vIGxpa2UgSlxuICAgICAgICAgIHJldHVybiBtb250aChcIm5hcnJvd1wiLCB0cnVlKTtcbiAgICAgICAgLy8gbW9udGhzIC0gZm9ybWF0XG5cbiAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoe1xuICAgICAgICAgICAgbW9udGg6IFwibnVtZXJpY1wiXG4gICAgICAgICAgfSwgXCJtb250aFwiKSA6IF90aGlzLm51bShkdC5tb250aCk7XG5cbiAgICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgICAgLy8gbGlrZSAwMVxuICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7XG4gICAgICAgICAgICBtb250aDogXCIyLWRpZ2l0XCJcbiAgICAgICAgICB9LCBcIm1vbnRoXCIpIDogX3RoaXMubnVtKGR0Lm1vbnRoLCAyKTtcblxuICAgICAgICBjYXNlIFwiTU1NXCI6XG4gICAgICAgICAgLy8gbGlrZSBKYW5cbiAgICAgICAgICByZXR1cm4gbW9udGgoXCJzaG9ydFwiLCBmYWxzZSk7XG5cbiAgICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgICAgICAvLyBsaWtlIEphbnVhcnlcbiAgICAgICAgICByZXR1cm4gbW9udGgoXCJsb25nXCIsIGZhbHNlKTtcblxuICAgICAgICBjYXNlIFwiTU1NTU1cIjpcbiAgICAgICAgICAvLyBsaWtlIEpcbiAgICAgICAgICByZXR1cm4gbW9udGgoXCJuYXJyb3dcIiwgZmFsc2UpO1xuICAgICAgICAvLyB5ZWFyc1xuXG4gICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgLy8gbGlrZSAyMDE0XG4gICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHtcbiAgICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wiXG4gICAgICAgICAgfSwgXCJ5ZWFyXCIpIDogX3RoaXMubnVtKGR0LnllYXIpO1xuXG4gICAgICAgIGNhc2UgXCJ5eVwiOlxuICAgICAgICAgIC8vIGxpa2UgMTRcbiAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoe1xuICAgICAgICAgICAgeWVhcjogXCIyLWRpZ2l0XCJcbiAgICAgICAgICB9LCBcInllYXJcIikgOiBfdGhpcy5udW0oZHQueWVhci50b1N0cmluZygpLnNsaWNlKC0yKSwgMik7XG5cbiAgICAgICAgY2FzZSBcInl5eXlcIjpcbiAgICAgICAgICAvLyBsaWtlIDAwMTJcbiAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoe1xuICAgICAgICAgICAgeWVhcjogXCJudW1lcmljXCJcbiAgICAgICAgICB9LCBcInllYXJcIikgOiBfdGhpcy5udW0oZHQueWVhciwgNCk7XG5cbiAgICAgICAgY2FzZSBcInl5eXl5eVwiOlxuICAgICAgICAgIC8vIGxpa2UgMDAwMDEyXG4gICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHtcbiAgICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wiXG4gICAgICAgICAgfSwgXCJ5ZWFyXCIpIDogX3RoaXMubnVtKGR0LnllYXIsIDYpO1xuICAgICAgICAvLyBlcmFzXG5cbiAgICAgICAgY2FzZSBcIkdcIjpcbiAgICAgICAgICAvLyBsaWtlIEFEXG4gICAgICAgICAgcmV0dXJuIGVyYShcInNob3J0XCIpO1xuXG4gICAgICAgIGNhc2UgXCJHR1wiOlxuICAgICAgICAgIC8vIGxpa2UgQW5ubyBEb21pbmlcbiAgICAgICAgICByZXR1cm4gZXJhKFwibG9uZ1wiKTtcblxuICAgICAgICBjYXNlIFwiR0dHR0dcIjpcbiAgICAgICAgICByZXR1cm4gZXJhKFwibmFycm93XCIpO1xuXG4gICAgICAgIGNhc2UgXCJra1wiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQud2Vla1llYXIudG9TdHJpbmcoKS5zbGljZSgtMiksIDIpO1xuXG4gICAgICAgIGNhc2UgXCJra2trXCI6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC53ZWVrWWVhciwgNCk7XG5cbiAgICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LndlZWtOdW1iZXIpO1xuXG4gICAgICAgIGNhc2UgXCJXV1wiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQud2Vla051bWJlciwgMik7XG5cbiAgICAgICAgY2FzZSBcIm9cIjpcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0Lm9yZGluYWwpO1xuXG4gICAgICAgIGNhc2UgXCJvb29cIjpcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0Lm9yZGluYWwsIDMpO1xuXG4gICAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgICAgLy8gbGlrZSAxXG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5xdWFydGVyKTtcblxuICAgICAgICBjYXNlIFwicXFcIjpcbiAgICAgICAgICAvLyBsaWtlIDAxXG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5xdWFydGVyLCAyKTtcblxuICAgICAgICBjYXNlIFwiWFwiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oTWF0aC5mbG9vcihkdC50cyAvIDEwMDApKTtcblxuICAgICAgICBjYXNlIFwieFwiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQudHMpO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1heWJlTWFjcm8odG9rZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gc3RyaW5naWZ5VG9rZW5zKEZvcm1hdHRlci5wYXJzZUZvcm1hdChmbXQpLCB0b2tlblRvU3RyaW5nKTtcbiAgfTtcblxuICBfcHJvdG8uZm9ybWF0RHVyYXRpb25Gcm9tU3RyaW5nID0gZnVuY3Rpb24gZm9ybWF0RHVyYXRpb25Gcm9tU3RyaW5nKGR1ciwgZm10KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgdG9rZW5Ub0ZpZWxkID0gZnVuY3Rpb24gdG9rZW5Ub0ZpZWxkKHRva2VuKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuWzBdKSB7XG4gICAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgICAgcmV0dXJuIFwibWlsbGlzZWNvbmRcIjtcblxuICAgICAgICBjYXNlIFwic1wiOlxuICAgICAgICAgIHJldHVybiBcInNlY29uZFwiO1xuXG4gICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgcmV0dXJuIFwibWludXRlXCI7XG5cbiAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICByZXR1cm4gXCJob3VyXCI7XG5cbiAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICByZXR1cm4gXCJkYXlcIjtcblxuICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgIHJldHVybiBcIm1vbnRoXCI7XG5cbiAgICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgICByZXR1cm4gXCJ5ZWFyXCI7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgICAgICB0b2tlblRvU3RyaW5nID0gZnVuY3Rpb24gdG9rZW5Ub1N0cmluZyhsaWxkdXIpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgdmFyIG1hcHBlZCA9IHRva2VuVG9GaWVsZCh0b2tlbik7XG5cbiAgICAgICAgaWYgKG1hcHBlZCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIubnVtKGxpbGR1ci5nZXQobWFwcGVkKSwgdG9rZW4ubGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICAgICAgdG9rZW5zID0gRm9ybWF0dGVyLnBhcnNlRm9ybWF0KGZtdCksXG4gICAgICAgIHJlYWxUb2tlbnMgPSB0b2tlbnMucmVkdWNlKGZ1bmN0aW9uIChmb3VuZCwgX3JlZikge1xuICAgICAgdmFyIGxpdGVyYWwgPSBfcmVmLmxpdGVyYWwsXG4gICAgICAgICAgdmFsID0gX3JlZi52YWw7XG4gICAgICByZXR1cm4gbGl0ZXJhbCA/IGZvdW5kIDogZm91bmQuY29uY2F0KHZhbCk7XG4gICAgfSwgW10pLFxuICAgICAgICBjb2xsYXBzZWQgPSBkdXIuc2hpZnRUby5hcHBseShkdXIsIHJlYWxUb2tlbnMubWFwKHRva2VuVG9GaWVsZCkuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdDtcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gc3RyaW5naWZ5VG9rZW5zKHRva2VucywgdG9rZW5Ub1N0cmluZyhjb2xsYXBzZWQpKTtcbiAgfTtcblxuICByZXR1cm4gRm9ybWF0dGVyO1xufSgpO1xuXG52YXIgSW52YWxpZCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbikge1xuICAgIHRoaXMucmVhc29uID0gcmVhc29uO1xuICAgIHRoaXMuZXhwbGFuYXRpb24gPSBleHBsYW5hdGlvbjtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBJbnZhbGlkLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9NZXNzYWdlID0gZnVuY3Rpb24gdG9NZXNzYWdlKCkge1xuICAgIGlmICh0aGlzLmV4cGxhbmF0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFzb24gKyBcIjogXCIgKyB0aGlzLmV4cGxhbmF0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFzb247XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBJbnZhbGlkO1xufSgpO1xuXG4vKipcbiAqIEBpbnRlcmZhY2VcbiAqL1xuXG52YXIgWm9uZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFpvbmUoKSB7fVxuXG4gIHZhciBfcHJvdG8gPSBab25lLnByb3RvdHlwZTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0J3MgY29tbW9uIG5hbWUgKHN1Y2ggYXMgRVNUKSBhdCB0aGUgc3BlY2lmaWVkIHRpbWVzdGFtcFxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRzIC0gRXBvY2ggbWlsbGlzZWNvbmRzIGZvciB3aGljaCB0byBnZXQgdGhlIG5hbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBPcHRpb25zIHRvIGFmZmVjdCB0aGUgZm9ybWF0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLmZvcm1hdCAtIFdoYXQgc3R5bGUgb2Ygb2Zmc2V0IHRvIHJldHVybi4gQWNjZXB0cyAnbG9uZycgb3IgJ3Nob3J0Jy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubG9jYWxlIC0gV2hhdCBsb2NhbGUgdG8gcmV0dXJuIHRoZSBvZmZzZXQgbmFtZSBpbi5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgX3Byb3RvLm9mZnNldE5hbWUgPSBmdW5jdGlvbiBvZmZzZXROYW1lKHRzLCBvcHRzKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0J3MgdmFsdWUgYXMgYSBzdHJpbmdcbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cyAtIEVwb2NoIG1pbGxpc2Vjb25kcyBmb3Igd2hpY2ggdG8gZ2V0IHRoZSBvZmZzZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdCAtIFdoYXQgc3R5bGUgb2Ygb2Zmc2V0IHRvIHJldHVybi5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdHMgJ25hcnJvdycsICdzaG9ydCcsIG9yICd0ZWNoaWUnLiBSZXR1cm5pbmcgJys2JywgJyswNjowMCcsIG9yICcrMDYwMCcgcmVzcGVjdGl2ZWx5XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZm9ybWF0T2Zmc2V0ID0gZnVuY3Rpb24gZm9ybWF0T2Zmc2V0KHRzLCBmb3JtYXQpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG9mZnNldCBpbiBtaW51dGVzIGZvciB0aGlzIHpvbmUgYXQgdGhlIHNwZWNpZmllZCB0aW1lc3RhbXAuXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gdHMgLSBFcG9jaCBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHRvIGNvbXB1dGUgdGhlIG9mZnNldFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9mZnNldCA9IGZ1bmN0aW9uIG9mZnNldCh0cykge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgWm9uZSBpcyBlcXVhbCB0byBhbm90aGVyIHpvbmVcbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7Wm9uZX0gb3RoZXJab25lIC0gdGhlIHpvbmUgdG8gY29tcGFyZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBab25lIGlzIHZhbGlkLlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX2NyZWF0ZUNsYXNzKFpvbmUsIFt7XG4gICAga2V5OiBcInR5cGVcIixcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHpvbmVcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyB6b25lLlxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJuYW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIG9mZnNldCBpcyBrbm93biB0byBiZSBmaXhlZCBmb3IgdGhlIHdob2xlIHllYXIuXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bml2ZXJzYWxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzVmFsaWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFpvbmU7XG59KCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBsb2NhbCB6b25lIGZvciB0aGlzIEphdmFzY3JpcHQgZW52aXJvbm1lbnQuXG4gKiBAaW1wbGVtZW50cyB7Wm9uZX1cbiAqL1xuXG52YXIgTG9jYWxab25lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfWm9uZSkge1xuICBfaW5oZXJpdHNMb29zZShMb2NhbFpvbmUsIF9ab25lKTtcblxuICBmdW5jdGlvbiBMb2NhbFpvbmUoKSB7XG4gICAgcmV0dXJuIF9ab25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBMb2NhbFpvbmUucHJvdG90eXBlO1xuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIF9wcm90by5vZmZzZXROYW1lID0gZnVuY3Rpb24gb2Zmc2V0TmFtZSh0cywgX3JlZikge1xuICAgIHZhciBmb3JtYXQgPSBfcmVmLmZvcm1hdCxcbiAgICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGU7XG4gICAgcmV0dXJuIHBhcnNlWm9uZUluZm8odHMsIGZvcm1hdCwgbG9jYWxlKTtcbiAgfVxuICAvKiogQG92ZXJyaWRlICoqL1xuICA7XG5cbiAgX3Byb3RvLmZvcm1hdE9mZnNldCA9IGZ1bmN0aW9uIGZvcm1hdE9mZnNldCQxKHRzLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMub2Zmc2V0KHRzKSwgZm9ybWF0KTtcbiAgfVxuICAvKiogQG92ZXJyaWRlICoqL1xuICA7XG5cbiAgX3Byb3RvLm9mZnNldCA9IGZ1bmN0aW9uIG9mZnNldCh0cykge1xuICAgIHJldHVybiAtbmV3IERhdGUodHMpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gIH1cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgO1xuXG4gIF9wcm90by5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcImxvY2FsXCI7XG4gIH1cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgO1xuXG4gIF9jcmVhdGVDbGFzcyhMb2NhbFpvbmUsIFt7XG4gICAga2V5OiBcInR5cGVcIixcblxuICAgIC8qKiBAb3ZlcnJpZGUgKiovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJsb2NhbFwiO1xuICAgIH1cbiAgICAvKiogQG92ZXJyaWRlICoqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibmFtZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKGhhc0ludGwoKSkge1xuICAgICAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZTtcbiAgICAgIH0gZWxzZSByZXR1cm4gXCJsb2NhbFwiO1xuICAgIH1cbiAgICAvKiogQG92ZXJyaWRlICoqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5pdmVyc2FsXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzVmFsaWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImluc3RhbmNlXCIsXG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIGxvY2FsIHpvbmVcbiAgICAgKiBAcmV0dXJuIHtMb2NhbFpvbmV9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAoc2luZ2xldG9uID09PSBudWxsKSB7XG4gICAgICAgIHNpbmdsZXRvbiA9IG5ldyBMb2NhbFpvbmUoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNpbmdsZXRvbjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTG9jYWxab25lO1xufShab25lKTtcblxudmFyIG1hdGNoaW5nUmVnZXggPSBSZWdFeHAoXCJeXCIgKyBpYW5hUmVnZXguc291cmNlICsgXCIkXCIpO1xudmFyIGR0ZkNhY2hlID0ge307XG5cbmZ1bmN0aW9uIG1ha2VEVEYoem9uZSkge1xuICBpZiAoIWR0ZkNhY2hlW3pvbmVdKSB7XG4gICAgZHRmQ2FjaGVbem9uZV0gPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLVVTXCIsIHtcbiAgICAgIGhvdXIxMjogZmFsc2UsXG4gICAgICB0aW1lWm9uZTogem9uZSxcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgbW9udGg6IFwiMi1kaWdpdFwiLFxuICAgICAgZGF5OiBcIjItZGlnaXRcIixcbiAgICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxuICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIHNlY29uZDogXCIyLWRpZ2l0XCJcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBkdGZDYWNoZVt6b25lXTtcbn1cblxudmFyIHR5cGVUb1BvcyA9IHtcbiAgeWVhcjogMCxcbiAgbW9udGg6IDEsXG4gIGRheTogMixcbiAgaG91cjogMyxcbiAgbWludXRlOiA0LFxuICBzZWNvbmQ6IDVcbn07XG5cbmZ1bmN0aW9uIGhhY2t5T2Zmc2V0KGR0ZiwgZGF0ZSkge1xuICB2YXIgZm9ybWF0dGVkID0gZHRmLmZvcm1hdChkYXRlKS5yZXBsYWNlKC9cXHUyMDBFL2csIFwiXCIpLFxuICAgICAgcGFyc2VkID0gLyhcXGQrKVxcLyhcXGQrKVxcLyhcXGQrKSw/IChcXGQrKTooXFxkKyk6KFxcZCspLy5leGVjKGZvcm1hdHRlZCksXG4gICAgICBmTW9udGggPSBwYXJzZWRbMV0sXG4gICAgICBmRGF5ID0gcGFyc2VkWzJdLFxuICAgICAgZlllYXIgPSBwYXJzZWRbM10sXG4gICAgICBmSG91ciA9IHBhcnNlZFs0XSxcbiAgICAgIGZNaW51dGUgPSBwYXJzZWRbNV0sXG4gICAgICBmU2Vjb25kID0gcGFyc2VkWzZdO1xuICByZXR1cm4gW2ZZZWFyLCBmTW9udGgsIGZEYXksIGZIb3VyLCBmTWludXRlLCBmU2Vjb25kXTtcbn1cblxuZnVuY3Rpb24gcGFydHNPZmZzZXQoZHRmLCBkYXRlKSB7XG4gIHZhciBmb3JtYXR0ZWQgPSBkdGYuZm9ybWF0VG9QYXJ0cyhkYXRlKSxcbiAgICAgIGZpbGxlZCA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZm9ybWF0dGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIF9mb3JtYXR0ZWQkaSA9IGZvcm1hdHRlZFtpXSxcbiAgICAgICAgdHlwZSA9IF9mb3JtYXR0ZWQkaS50eXBlLFxuICAgICAgICB2YWx1ZSA9IF9mb3JtYXR0ZWQkaS52YWx1ZSxcbiAgICAgICAgcG9zID0gdHlwZVRvUG9zW3R5cGVdO1xuXG4gICAgaWYgKCFpc1VuZGVmaW5lZChwb3MpKSB7XG4gICAgICBmaWxsZWRbcG9zXSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbGxlZDtcbn1cblxudmFyIGlhbmFab25lQ2FjaGUgPSB7fTtcbi8qKlxuICogQSB6b25lIGlkZW50aWZpZWQgYnkgYW4gSUFOQSBpZGVudGlmaWVyLCBsaWtlIEFtZXJpY2EvTmV3X1lvcmtcbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG5cbnZhciBJQU5BWm9uZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1pvbmUpIHtcbiAgX2luaGVyaXRzTG9vc2UoSUFOQVpvbmUsIF9ab25lKTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBab25lIG5hbWVcbiAgICogQHJldHVybiB7SUFOQVpvbmV9XG4gICAqL1xuICBJQU5BWm9uZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUobmFtZSkge1xuICAgIGlmICghaWFuYVpvbmVDYWNoZVtuYW1lXSkge1xuICAgICAgaWFuYVpvbmVDYWNoZVtuYW1lXSA9IG5ldyBJQU5BWm9uZShuYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaWFuYVpvbmVDYWNoZVtuYW1lXTtcbiAgfVxuICAvKipcbiAgICogUmVzZXQgbG9jYWwgY2FjaGVzLiBTaG91bGQgb25seSBiZSBuZWNlc3NhcnkgaW4gdGVzdGluZyBzY2VuYXJpb3MuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICA7XG5cbiAgSUFOQVpvbmUucmVzZXRDYWNoZSA9IGZ1bmN0aW9uIHJlc2V0Q2FjaGUoKSB7XG4gICAgaWFuYVpvbmVDYWNoZSA9IHt9O1xuICAgIGR0ZkNhY2hlID0ge307XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgc3RyaW5nIGlzIGEgdmFsaWQgc3BlY2lmaWVyLiBUaGlzIG9ubHkgY2hlY2tzIHRoZSBzdHJpbmcncyBmb3JtYXQsIG5vdCB0aGF0IHRoZSBzcGVjaWZpZXIgaWRlbnRpZmllcyBhIGtub3duIHpvbmU7IHNlZSBpc1ZhbGlkWm9uZSBmb3IgdGhhdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHMgLSBUaGUgc3RyaW5nIHRvIGNoZWNrIHZhbGlkaXR5IG9uXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIoXCJBbWVyaWNhL05ld19Zb3JrXCIpIC8vPT4gdHJ1ZVxuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkU3BlY2lmaWVyKFwiRmFudGFzaWEvQ2FzdGxlXCIpIC8vPT4gdHJ1ZVxuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkU3BlY2lmaWVyKFwiU3BvcnR+fmJsb3JwXCIpIC8vPT4gZmFsc2VcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBJQU5BWm9uZS5pc1ZhbGlkU3BlY2lmaWVyID0gZnVuY3Rpb24gaXNWYWxpZFNwZWNpZmllcihzKSB7XG4gICAgcmV0dXJuICEhKHMgJiYgcy5tYXRjaChtYXRjaGluZ1JlZ2V4KSk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgc3RyaW5nIGlkZW50aWZpZXMgYSByZWFsIHpvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHpvbmUgLSBUaGUgc3RyaW5nIHRvIGNoZWNrXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRab25lKFwiQW1lcmljYS9OZXdfWW9ya1wiKSAvLz0+IHRydWVcbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFpvbmUoXCJGYW50YXNpYS9DYXN0bGVcIikgLy89PiBmYWxzZVxuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShcIlNwb3J0fn5ibG9ycFwiKSAvLz0+IGZhbHNlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgSUFOQVpvbmUuaXNWYWxpZFpvbmUgPSBmdW5jdGlvbiBpc1ZhbGlkWm9uZSh6b25lKSB7XG4gICAgdHJ5IHtcbiAgICAgIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tVVNcIiwge1xuICAgICAgICB0aW1lWm9uZTogem9uZVxuICAgICAgfSkuZm9ybWF0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IC8vIEV0Yy9HTVQrOCAtPiAtNDgwXG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgO1xuXG4gIElBTkFab25lLnBhcnNlR01UT2Zmc2V0ID0gZnVuY3Rpb24gcGFyc2VHTVRPZmZzZXQoc3BlY2lmaWVyKSB7XG4gICAgaWYgKHNwZWNpZmllcikge1xuICAgICAgdmFyIG1hdGNoID0gc3BlY2lmaWVyLm1hdGNoKC9eRXRjXFwvR01UKFsrLV1cXGR7MSwyfSkkL2kpO1xuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIC02MCAqIHBhcnNlSW50KG1hdGNoWzFdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBmdW5jdGlvbiBJQU5BWm9uZShuYW1lKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfWm9uZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgLyoqIEBwcml2YXRlICoqL1xuXG4gICAgX3RoaXMuem9uZU5hbWUgPSBuYW1lO1xuICAgIC8qKiBAcHJpdmF0ZSAqKi9cblxuICAgIF90aGlzLnZhbGlkID0gSUFOQVpvbmUuaXNWYWxpZFpvbmUobmFtZSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG5cblxuICB2YXIgX3Byb3RvID0gSUFOQVpvbmUucHJvdG90eXBlO1xuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIF9wcm90by5vZmZzZXROYW1lID0gZnVuY3Rpb24gb2Zmc2V0TmFtZSh0cywgX3JlZikge1xuICAgIHZhciBmb3JtYXQgPSBfcmVmLmZvcm1hdCxcbiAgICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGU7XG4gICAgcmV0dXJuIHBhcnNlWm9uZUluZm8odHMsIGZvcm1hdCwgbG9jYWxlLCB0aGlzLm5hbWUpO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIDtcblxuICBfcHJvdG8uZm9ybWF0T2Zmc2V0ID0gZnVuY3Rpb24gZm9ybWF0T2Zmc2V0JDEodHMsIGZvcm1hdCkge1xuICAgIHJldHVybiBmb3JtYXRPZmZzZXQodGhpcy5vZmZzZXQodHMpLCBmb3JtYXQpO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIDtcblxuICBfcHJvdG8ub2Zmc2V0ID0gZnVuY3Rpb24gb2Zmc2V0KHRzKSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh0cyksXG4gICAgICAgIGR0ZiA9IG1ha2VEVEYodGhpcy5uYW1lKSxcbiAgICAgICAgX3JlZjIgPSBkdGYuZm9ybWF0VG9QYXJ0cyA/IHBhcnRzT2Zmc2V0KGR0ZiwgZGF0ZSkgOiBoYWNreU9mZnNldChkdGYsIGRhdGUpLFxuICAgICAgICB5ZWFyID0gX3JlZjJbMF0sXG4gICAgICAgIG1vbnRoID0gX3JlZjJbMV0sXG4gICAgICAgIGRheSA9IF9yZWYyWzJdLFxuICAgICAgICBob3VyID0gX3JlZjJbM10sXG4gICAgICAgIG1pbnV0ZSA9IF9yZWYyWzRdLFxuICAgICAgICBzZWNvbmQgPSBfcmVmMls1XSxcbiAgICAgICAgYWRqdXN0ZWRIb3VyID0gaG91ciA9PT0gMjQgPyAwIDogaG91cjtcblxuICAgIHZhciBhc1VUQyA9IG9ialRvTG9jYWxUUyh7XG4gICAgICB5ZWFyOiB5ZWFyLFxuICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgZGF5OiBkYXksXG4gICAgICBob3VyOiBhZGp1c3RlZEhvdXIsXG4gICAgICBtaW51dGU6IG1pbnV0ZSxcbiAgICAgIHNlY29uZDogc2Vjb25kLFxuICAgICAgbWlsbGlzZWNvbmQ6IDBcbiAgICB9KTtcbiAgICB2YXIgYXNUUyA9ICtkYXRlO1xuICAgIHZhciBvdmVyID0gYXNUUyAlIDEwMDA7XG4gICAgYXNUUyAtPSBvdmVyID49IDAgPyBvdmVyIDogMTAwMCArIG92ZXI7XG4gICAgcmV0dXJuIChhc1VUQyAtIGFzVFMpIC8gKDYwICogMTAwMCk7XG4gIH1cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgO1xuXG4gIF9wcm90by5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcImlhbmFcIiAmJiBvdGhlclpvbmUubmFtZSA9PT0gdGhpcy5uYW1lO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIDtcblxuICBfY3JlYXRlQ2xhc3MoSUFOQVpvbmUsIFt7XG4gICAga2V5OiBcInR5cGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBcImlhbmFcIjtcbiAgICB9XG4gICAgLyoqIEBvdmVycmlkZSAqKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnpvbmVOYW1lO1xuICAgIH1cbiAgICAvKiogQG92ZXJyaWRlICoqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5pdmVyc2FsXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzVmFsaWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJQU5BWm9uZTtcbn0oWm9uZSk7XG5cbnZhciBzaW5nbGV0b24kMSA9IG51bGw7XG4vKipcbiAqIEEgem9uZSB3aXRoIGEgZml4ZWQgb2Zmc2V0IChtZWFuaW5nIG5vIERTVClcbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG5cbnZhciBGaXhlZE9mZnNldFpvbmUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9ab25lKSB7XG4gIF9pbmhlcml0c0xvb3NlKEZpeGVkT2Zmc2V0Wm9uZSwgX1pvbmUpO1xuXG4gIC8qKlxuICAgKiBHZXQgYW4gaW5zdGFuY2Ugd2l0aCBhIHNwZWNpZmllZCBvZmZzZXRcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCAtIFRoZSBvZmZzZXQgaW4gbWludXRlc1xuICAgKiBAcmV0dXJuIHtGaXhlZE9mZnNldFpvbmV9XG4gICAqL1xuICBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2UgPSBmdW5jdGlvbiBpbnN0YW5jZShvZmZzZXQpIHtcbiAgICByZXR1cm4gb2Zmc2V0ID09PSAwID8gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlIDogbmV3IEZpeGVkT2Zmc2V0Wm9uZShvZmZzZXQpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgYW4gaW5zdGFuY2Ugb2YgRml4ZWRPZmZzZXRab25lIGZyb20gYSBVVEMgb2Zmc2V0IHN0cmluZywgbGlrZSBcIlVUQys2XCJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHMgLSBUaGUgb2Zmc2V0IHN0cmluZyB0byBwYXJzZVxuICAgKiBAZXhhbXBsZSBGaXhlZE9mZnNldFpvbmUucGFyc2VTcGVjaWZpZXIoXCJVVEMrNlwiKVxuICAgKiBAZXhhbXBsZSBGaXhlZE9mZnNldFpvbmUucGFyc2VTcGVjaWZpZXIoXCJVVEMrMDZcIilcbiAgICogQGV4YW1wbGUgRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKFwiVVRDLTY6MDBcIilcbiAgICogQHJldHVybiB7Rml4ZWRPZmZzZXRab25lfVxuICAgKi9cbiAgO1xuXG4gIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllciA9IGZ1bmN0aW9uIHBhcnNlU3BlY2lmaWVyKHMpIHtcbiAgICBpZiAocykge1xuICAgICAgdmFyIHIgPSBzLm1hdGNoKC9edXRjKD86KFsrLV1cXGR7MSwyfSkoPzo6KFxcZHsyfSkpPyk/JC9pKTtcblxuICAgICAgaWYgKHIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGaXhlZE9mZnNldFpvbmUoc2lnbmVkT2Zmc2V0KHJbMV0sIHJbMl0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoRml4ZWRPZmZzZXRab25lLCBudWxsLCBbe1xuICAgIGtleTogXCJ1dGNJbnN0YW5jZVwiLFxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgc2luZ2xldG9uIGluc3RhbmNlIG9mIFVUQ1xuICAgICAqIEByZXR1cm4ge0ZpeGVkT2Zmc2V0Wm9uZX1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmIChzaW5nbGV0b24kMSA9PT0gbnVsbCkge1xuICAgICAgICBzaW5nbGV0b24kMSA9IG5ldyBGaXhlZE9mZnNldFpvbmUoMCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzaW5nbGV0b24kMTtcbiAgICB9XG4gIH1dKTtcblxuICBmdW5jdGlvbiBGaXhlZE9mZnNldFpvbmUob2Zmc2V0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfWm9uZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgLyoqIEBwcml2YXRlICoqL1xuXG4gICAgX3RoaXMuZml4ZWQgPSBvZmZzZXQ7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG5cblxuICB2YXIgX3Byb3RvID0gRml4ZWRPZmZzZXRab25lLnByb3RvdHlwZTtcblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBfcHJvdG8ub2Zmc2V0TmFtZSA9IGZ1bmN0aW9uIG9mZnNldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICAvKiogQG92ZXJyaWRlICoqL1xuICA7XG5cbiAgX3Byb3RvLmZvcm1hdE9mZnNldCA9IGZ1bmN0aW9uIGZvcm1hdE9mZnNldCQxKHRzLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMuZml4ZWQsIGZvcm1hdCk7XG4gIH1cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgO1xuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIF9wcm90by5vZmZzZXQgPSBmdW5jdGlvbiBvZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4ZWQ7XG4gIH1cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgO1xuXG4gIF9wcm90by5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcImZpeGVkXCIgJiYgb3RoZXJab25lLmZpeGVkID09PSB0aGlzLmZpeGVkO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIDtcblxuICBfY3JlYXRlQ2xhc3MoRml4ZWRPZmZzZXRab25lLCBbe1xuICAgIGtleTogXCJ0eXBlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJmaXhlZFwiO1xuICAgIH1cbiAgICAvKiogQG92ZXJyaWRlICoqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibmFtZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZml4ZWQgPT09IDAgPyBcIlVUQ1wiIDogXCJVVENcIiArIGZvcm1hdE9mZnNldCh0aGlzLmZpeGVkLCBcIm5hcnJvd1wiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5pdmVyc2FsXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNWYWxpZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZTtcbn0oWm9uZSk7XG5cbi8qKlxuICogQSB6b25lIHRoYXQgZmFpbGVkIHRvIHBhcnNlLiBZb3Ugc2hvdWxkIG5ldmVyIG5lZWQgdG8gaW5zdGFudGlhdGUgdGhpcy5cbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG5cbnZhciBJbnZhbGlkWm9uZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1pvbmUpIHtcbiAgX2luaGVyaXRzTG9vc2UoSW52YWxpZFpvbmUsIF9ab25lKTtcblxuICBmdW5jdGlvbiBJbnZhbGlkWm9uZSh6b25lTmFtZSkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1pvbmUuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIC8qKiAgQHByaXZhdGUgKi9cblxuICAgIF90aGlzLnpvbmVOYW1lID0gem9uZU5hbWU7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG5cblxuICB2YXIgX3Byb3RvID0gSW52YWxpZFpvbmUucHJvdG90eXBlO1xuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIF9wcm90by5vZmZzZXROYW1lID0gZnVuY3Rpb24gb2Zmc2V0TmFtZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvKiogQG92ZXJyaWRlICoqL1xuICA7XG5cbiAgX3Byb3RvLmZvcm1hdE9mZnNldCA9IGZ1bmN0aW9uIGZvcm1hdE9mZnNldCgpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICAvKiogQG92ZXJyaWRlICoqL1xuICA7XG5cbiAgX3Byb3RvLm9mZnNldCA9IGZ1bmN0aW9uIG9mZnNldCgpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIDtcblxuICBfcHJvdG8uZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvKiogQG92ZXJyaWRlICoqL1xuICA7XG5cbiAgX2NyZWF0ZUNsYXNzKEludmFsaWRab25lLCBbe1xuICAgIGtleTogXCJ0eXBlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJpbnZhbGlkXCI7XG4gICAgfVxuICAgIC8qKiBAb3ZlcnJpZGUgKiovXG5cbiAgfSwge1xuICAgIGtleTogXCJuYW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy56b25lTmFtZTtcbiAgICB9XG4gICAgLyoqIEBvdmVycmlkZSAqKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVuaXZlcnNhbFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1ZhbGlkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEludmFsaWRab25lO1xufShab25lKTtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVab25lKGlucHV0LCBkZWZhdWx0Wm9uZSkge1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChpc1VuZGVmaW5lZChpbnB1dCkgfHwgaW5wdXQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZGVmYXVsdFpvbmU7XG4gIH0gZWxzZSBpZiAoaW5wdXQgaW5zdGFuY2VvZiBab25lKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xuICAgIHZhciBsb3dlcmVkID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAobG93ZXJlZCA9PT0gXCJsb2NhbFwiKSByZXR1cm4gZGVmYXVsdFpvbmU7ZWxzZSBpZiAobG93ZXJlZCA9PT0gXCJ1dGNcIiB8fCBsb3dlcmVkID09PSBcImdtdFwiKSByZXR1cm4gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlO2Vsc2UgaWYgKChvZmZzZXQgPSBJQU5BWm9uZS5wYXJzZUdNVE9mZnNldChpbnB1dCkpICE9IG51bGwpIHtcbiAgICAgIC8vIGhhbmRsZSBFdGMvR01ULTQsIHdoaWNoIFY4IGNob2tlcyBvblxuICAgICAgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZShvZmZzZXQpO1xuICAgIH0gZWxzZSBpZiAoSUFOQVpvbmUuaXNWYWxpZFNwZWNpZmllcihsb3dlcmVkKSkgcmV0dXJuIElBTkFab25lLmNyZWF0ZShpbnB1dCk7ZWxzZSByZXR1cm4gRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKGxvd2VyZWQpIHx8IG5ldyBJbnZhbGlkWm9uZShpbnB1dCk7XG4gIH0gZWxzZSBpZiAoaXNOdW1iZXIoaW5wdXQpKSB7XG4gICAgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZShpbnB1dCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSBcIm9iamVjdFwiICYmIGlucHV0Lm9mZnNldCAmJiB0eXBlb2YgaW5wdXQub2Zmc2V0ID09PSBcIm51bWJlclwiKSB7XG4gICAgLy8gVGhpcyBpcyBkdW1iLCBidXQgdGhlIGluc3RhbmNlb2YgY2hlY2sgYWJvdmUgZG9lc24ndCBzZWVtIHRvIHJlYWxseSB3b3JrXG4gICAgLy8gc28gd2UncmUgZHVjayBjaGVja2luZyBpdFxuICAgIHJldHVybiBpbnB1dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEludmFsaWRab25lKGlucHV0KTtcbiAgfVxufVxuXG52YXIgbm93ID0gZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gRGF0ZS5ub3coKTtcbn0sXG4gICAgZGVmYXVsdFpvbmUgPSBudWxsLFxuICAgIC8vIG5vdCBzZXR0aW5nIHRoaXMgZGlyZWN0bHkgdG8gTG9jYWxab25lLmluc3RhbmNlIGJjIGxvYWRpbmcgb3JkZXIgaXNzdWVzXG5kZWZhdWx0TG9jYWxlID0gbnVsbCxcbiAgICBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtID0gbnVsbCxcbiAgICBkZWZhdWx0T3V0cHV0Q2FsZW5kYXIgPSBudWxsLFxuICAgIHRocm93T25JbnZhbGlkID0gZmFsc2U7XG4vKipcbiAqIFNldHRpbmdzIGNvbnRhaW5zIHN0YXRpYyBnZXR0ZXJzIGFuZCBzZXR0ZXJzIHRoYXQgY29udHJvbCBMdXhvbidzIG92ZXJhbGwgYmVoYXZpb3IuIEx1eG9uIGlzIGEgc2ltcGxlIGxpYnJhcnkgd2l0aCBmZXcgb3B0aW9ucywgYnV0IHRoZSBvbmVzIGl0IGRvZXMgaGF2ZSBsaXZlIGhlcmUuXG4gKi9cblxuXG52YXIgU2V0dGluZ3MgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTZXR0aW5ncygpIHt9XG5cbiAgLyoqXG4gICAqIFJlc2V0IEx1eG9uJ3MgZ2xvYmFsIGNhY2hlcy4gU2hvdWxkIG9ubHkgYmUgbmVjZXNzYXJ5IGluIHRlc3Rpbmcgc2NlbmFyaW9zLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgU2V0dGluZ3MucmVzZXRDYWNoZXMgPSBmdW5jdGlvbiByZXNldENhY2hlcygpIHtcbiAgICBMb2NhbGUucmVzZXRDYWNoZSgpO1xuICAgIElBTkFab25lLnJlc2V0Q2FjaGUoKTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoU2V0dGluZ3MsIG51bGwsIFt7XG4gICAga2V5OiBcIm5vd1wiLFxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjYWxsYmFjayBmb3IgcmV0dXJuaW5nIHRoZSBjdXJyZW50IHRpbWVzdGFtcC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gbm93O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGNhbGxiYWNrIGZvciByZXR1cm5pbmcgdGhlIGN1cnJlbnQgdGltZXN0YW1wLlxuICAgICAqIFRoZSBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgbnVtYmVyLCB3aGljaCB3aWxsIGJlIGludGVycHJldGVkIGFzIGFuIEVwb2NoIG1pbGxpc2Vjb25kIGNvdW50XG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBleGFtcGxlIFNldHRpbmdzLm5vdyA9ICgpID0+IERhdGUubm93KCkgKyAzMDAwIC8vIHByZXRlbmQgaXQgaXMgMyBzZWNvbmRzIGluIHRoZSBmdXR1cmVcbiAgICAgKiBAZXhhbXBsZSBTZXR0aW5ncy5ub3cgPSAoKSA9PiAwIC8vIGFsd2F5cyBwcmV0ZW5kIGl0J3MgSmFuIDEsIDE5NzAgYXQgbWlkbmlnaHQgaW4gVVRDIHRpbWVcbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobikge1xuICAgICAgbm93ID0gbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkZWZhdWx0IHRpbWUgem9uZSB0byBjcmVhdGUgRGF0ZVRpbWVzIGluLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZWZhdWx0Wm9uZU5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBTZXR0aW5ncy5kZWZhdWx0Wm9uZS5uYW1lO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGRlZmF1bHQgdGltZSB6b25lIHRvIGNyZWF0ZSBEYXRlVGltZXMgaW4uIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoeikge1xuICAgICAgaWYgKCF6KSB7XG4gICAgICAgIGRlZmF1bHRab25lID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmF1bHRab25lID0gbm9ybWFsaXplWm9uZSh6KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkZWZhdWx0IHRpbWUgem9uZSBvYmplY3QgdG8gY3JlYXRlIERhdGVUaW1lcyBpbi4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICAgKiBAdHlwZSB7Wm9uZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlZmF1bHRab25lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFpvbmUgfHwgTG9jYWxab25lLmluc3RhbmNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRlZmF1bHQgbG9jYWxlIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGVmYXVsdExvY2FsZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRMb2NhbGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgZGVmYXVsdCBsb2NhbGUgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KGxvY2FsZSkge1xuICAgICAgZGVmYXVsdExvY2FsZSA9IGxvY2FsZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkZWZhdWx0IG51bWJlcmluZyBzeXN0ZW0gdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZWZhdWx0TnVtYmVyaW5nU3lzdGVtXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdE51bWJlcmluZ1N5c3RlbTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBkZWZhdWx0IG51bWJlcmluZyBzeXN0ZW0gdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG51bWJlcmluZ1N5c3RlbSkge1xuICAgICAgZGVmYXVsdE51bWJlcmluZ1N5c3RlbSA9IG51bWJlcmluZ1N5c3RlbTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkZWZhdWx0IG91dHB1dCBjYWxlbmRhciB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlZmF1bHRPdXRwdXRDYWxlbmRhclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRPdXRwdXRDYWxlbmRhcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBkZWZhdWx0IG91dHB1dCBjYWxlbmRhciB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQob3V0cHV0Q2FsZW5kYXIpIHtcbiAgICAgIGRlZmF1bHRPdXRwdXRDYWxlbmRhciA9IG91dHB1dENhbGVuZGFyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgd2hldGhlciBMdXhvbiB3aWxsIHRocm93IHdoZW4gaXQgZW5jb3VudGVycyBpbnZhbGlkIERhdGVUaW1lcywgRHVyYXRpb25zLCBvciBJbnRlcnZhbHNcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInRocm93T25JbnZhbGlkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhyb3dPbkludmFsaWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB3aGV0aGVyIEx1eG9uIHdpbGwgdGhyb3cgd2hlbiBpdCBlbmNvdW50ZXJzIGludmFsaWQgRGF0ZVRpbWVzLCBEdXJhdGlvbnMsIG9yIEludGVydmFsc1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0KSB7XG4gICAgICB0aHJvd09uSW52YWxpZCA9IHQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNldHRpbmdzO1xufSgpO1xuXG52YXIgaW50bERUQ2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q2FjaGVkRFRGKGxvY1N0cmluZywgb3B0cykge1xuICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0cyA9IHt9O1xuICB9XG5cbiAgdmFyIGtleSA9IEpTT04uc3RyaW5naWZ5KFtsb2NTdHJpbmcsIG9wdHNdKTtcbiAgdmFyIGR0ZiA9IGludGxEVENhY2hlW2tleV07XG5cbiAgaWYgKCFkdGYpIHtcbiAgICBkdGYgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xuICAgIGludGxEVENhY2hlW2tleV0gPSBkdGY7XG4gIH1cblxuICByZXR1cm4gZHRmO1xufVxuXG52YXIgaW50bE51bUNhY2hlID0ge307XG5cbmZ1bmN0aW9uIGdldENhY2hlZElORihsb2NTdHJpbmcsIG9wdHMpIHtcbiAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuXG4gIHZhciBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBvcHRzXSk7XG4gIHZhciBpbmYgPSBpbnRsTnVtQ2FjaGVba2V5XTtcblxuICBpZiAoIWluZikge1xuICAgIGluZiA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xuICAgIGludGxOdW1DYWNoZVtrZXldID0gaW5mO1xuICB9XG5cbiAgcmV0dXJuIGluZjtcbn1cblxudmFyIGludGxSZWxDYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDYWNoZWRSVEYobG9jU3RyaW5nLCBvcHRzKSB7XG4gIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICBvcHRzID0ge307XG4gIH1cblxuICB2YXIgX29wdHMgPSBvcHRzLFxuICAgICAgYmFzZSA9IF9vcHRzLmJhc2UsXG4gICAgICBjYWNoZUtleU9wdHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfb3B0cywgW1wiYmFzZVwiXSk7IC8vIGV4Y2x1ZGUgYGJhc2VgIGZyb20gdGhlIG9wdGlvbnNcblxuXG4gIHZhciBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBjYWNoZUtleU9wdHNdKTtcbiAgdmFyIGluZiA9IGludGxSZWxDYWNoZVtrZXldO1xuXG4gIGlmICghaW5mKSB7XG4gICAgaW5mID0gbmV3IEludGwuUmVsYXRpdmVUaW1lRm9ybWF0KGxvY1N0cmluZywgb3B0cyk7XG4gICAgaW50bFJlbENhY2hlW2tleV0gPSBpbmY7XG4gIH1cblxuICByZXR1cm4gaW5mO1xufVxuXG52YXIgc3lzTG9jYWxlQ2FjaGUgPSBudWxsO1xuXG5mdW5jdGlvbiBzeXN0ZW1Mb2NhbGUoKSB7XG4gIGlmIChzeXNMb2NhbGVDYWNoZSkge1xuICAgIHJldHVybiBzeXNMb2NhbGVDYWNoZTtcbiAgfSBlbHNlIGlmIChoYXNJbnRsKCkpIHtcbiAgICB2YXIgY29tcHV0ZWRTeXMgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLmxvY2FsZTsgLy8gbm9kZSBzb21ldGltZXMgZGVmYXVsdHMgdG8gXCJ1bmRcIi4gT3ZlcnJpZGUgdGhhdCBiZWNhdXNlIHRoYXQgaXMgZHVtYlxuXG4gICAgc3lzTG9jYWxlQ2FjaGUgPSAhY29tcHV0ZWRTeXMgfHwgY29tcHV0ZWRTeXMgPT09IFwidW5kXCIgPyBcImVuLVVTXCIgOiBjb21wdXRlZFN5cztcbiAgICByZXR1cm4gc3lzTG9jYWxlQ2FjaGU7XG4gIH0gZWxzZSB7XG4gICAgc3lzTG9jYWxlQ2FjaGUgPSBcImVuLVVTXCI7XG4gICAgcmV0dXJuIHN5c0xvY2FsZUNhY2hlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlTG9jYWxlU3RyaW5nKGxvY2FsZVN0cikge1xuICAvLyBJIHJlYWxseSB3YW50IHRvIGF2b2lkIHdyaXRpbmcgYSBCQ1AgNDcgcGFyc2VyXG4gIC8vIHNlZSwgZS5nLiBodHRwczovL2dpdGh1Yi5jb20vd29vb3JtL2JjcC00N1xuICAvLyBJbnN0ZWFkLCB3ZSdsbCBkbyB0aGlzOlxuICAvLyBhKSBpZiB0aGUgc3RyaW5nIGhhcyBubyAtdSBleHRlbnNpb25zLCBqdXN0IGxlYXZlIGl0IGFsb25lXG4gIC8vIGIpIGlmIGl0IGRvZXMsIHVzZSBJbnRsIHRvIHJlc29sdmUgZXZlcnl0aGluZ1xuICAvLyBjKSBpZiBJbnRsIGZhaWxzLCB0cnkgYWdhaW4gd2l0aG91dCB0aGUgLXVcbiAgdmFyIHVJbmRleCA9IGxvY2FsZVN0ci5pbmRleE9mKFwiLXUtXCIpO1xuXG4gIGlmICh1SW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIFtsb2NhbGVTdHJdO1xuICB9IGVsc2Uge1xuICAgIHZhciBvcHRpb25zO1xuICAgIHZhciBzbWFsbGVyID0gbG9jYWxlU3RyLnN1YnN0cmluZygwLCB1SW5kZXgpO1xuXG4gICAgdHJ5IHtcbiAgICAgIG9wdGlvbnMgPSBnZXRDYWNoZWREVEYobG9jYWxlU3RyKS5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvcHRpb25zID0gZ2V0Q2FjaGVkRFRGKHNtYWxsZXIpLnJlc29sdmVkT3B0aW9ucygpO1xuICAgIH1cblxuICAgIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9vcHRpb25zLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgY2FsZW5kYXIgPSBfb3B0aW9ucy5jYWxlbmRhcjsgLy8gcmV0dXJuIHRoZSBzbWFsbGVyIG9uZSBzbyB0aGF0IHdlIGNhbiBhcHBlbmQgdGhlIGNhbGVuZGFyIGFuZCBudW1iZXJpbmcgb3ZlcnJpZGVzIHRvIGl0XG5cbiAgICByZXR1cm4gW3NtYWxsZXIsIG51bWJlcmluZ1N5c3RlbSwgY2FsZW5kYXJdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludGxDb25maWdTdHJpbmcobG9jYWxlU3RyLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKSB7XG4gIGlmIChoYXNJbnRsKCkpIHtcbiAgICBpZiAob3V0cHV0Q2FsZW5kYXIgfHwgbnVtYmVyaW5nU3lzdGVtKSB7XG4gICAgICBsb2NhbGVTdHIgKz0gXCItdVwiO1xuXG4gICAgICBpZiAob3V0cHV0Q2FsZW5kYXIpIHtcbiAgICAgICAgbG9jYWxlU3RyICs9IFwiLWNhLVwiICsgb3V0cHV0Q2FsZW5kYXI7XG4gICAgICB9XG5cbiAgICAgIGlmIChudW1iZXJpbmdTeXN0ZW0pIHtcbiAgICAgICAgbG9jYWxlU3RyICs9IFwiLW51LVwiICsgbnVtYmVyaW5nU3lzdGVtO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbG9jYWxlU3RyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbG9jYWxlU3RyO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwTW9udGhzKGYpIHtcbiAgdmFyIG1zID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPD0gMTI7IGkrKykge1xuICAgIHZhciBkdCA9IERhdGVUaW1lLnV0YygyMDE2LCBpLCAxKTtcbiAgICBtcy5wdXNoKGYoZHQpKTtcbiAgfVxuXG4gIHJldHVybiBtcztcbn1cblxuZnVuY3Rpb24gbWFwV2Vla2RheXMoZikge1xuICB2YXIgbXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICB2YXIgZHQgPSBEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzICsgaSk7XG4gICAgbXMucHVzaChmKGR0KSk7XG4gIH1cblxuICByZXR1cm4gbXM7XG59XG5cbmZ1bmN0aW9uIGxpc3RTdHVmZihsb2MsIGxlbmd0aCwgZGVmYXVsdE9LLCBlbmdsaXNoRm4sIGludGxGbikge1xuICB2YXIgbW9kZSA9IGxvYy5saXN0aW5nTW9kZShkZWZhdWx0T0spO1xuXG4gIGlmIChtb2RlID09PSBcImVycm9yXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIGlmIChtb2RlID09PSBcImVuXCIpIHtcbiAgICByZXR1cm4gZW5nbGlzaEZuKGxlbmd0aCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGludGxGbihsZW5ndGgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1cHBvcnRzRmFzdE51bWJlcnMobG9jKSB7XG4gIGlmIChsb2MubnVtYmVyaW5nU3lzdGVtICYmIGxvYy5udW1iZXJpbmdTeXN0ZW0gIT09IFwibGF0blwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsb2MubnVtYmVyaW5nU3lzdGVtID09PSBcImxhdG5cIiB8fCAhbG9jLmxvY2FsZSB8fCBsb2MubG9jYWxlLnN0YXJ0c1dpdGgoXCJlblwiKSB8fCBoYXNJbnRsKCkgJiYgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jLmludGwpLnJlc29sdmVkT3B0aW9ucygpLm51bWJlcmluZ1N5c3RlbSA9PT0gXCJsYXRuXCI7XG4gIH1cbn1cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5cbnZhciBQb2x5TnVtYmVyRm9ybWF0dGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUG9seU51bWJlckZvcm1hdHRlcihpbnRsLCBmb3JjZVNpbXBsZSwgb3B0cykge1xuICAgIHRoaXMucGFkVG8gPSBvcHRzLnBhZFRvIHx8IDA7XG4gICAgdGhpcy5mbG9vciA9IG9wdHMuZmxvb3IgfHwgZmFsc2U7XG5cbiAgICBpZiAoIWZvcmNlU2ltcGxlICYmIGhhc0ludGwoKSkge1xuICAgICAgdmFyIGludGxPcHRzID0ge1xuICAgICAgICB1c2VHcm91cGluZzogZmFsc2VcbiAgICAgIH07XG4gICAgICBpZiAob3B0cy5wYWRUbyA+IDApIGludGxPcHRzLm1pbmltdW1JbnRlZ2VyRGlnaXRzID0gb3B0cy5wYWRUbztcbiAgICAgIHRoaXMuaW5mID0gZ2V0Q2FjaGVkSU5GKGludGwsIGludGxPcHRzKTtcbiAgICB9XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUG9seU51bWJlckZvcm1hdHRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmZvcm1hdCA9IGZ1bmN0aW9uIGZvcm1hdChpKSB7XG4gICAgaWYgKHRoaXMuaW5mKSB7XG4gICAgICB2YXIgZml4ZWQgPSB0aGlzLmZsb29yID8gTWF0aC5mbG9vcihpKSA6IGk7XG4gICAgICByZXR1cm4gdGhpcy5pbmYuZm9ybWF0KGZpeGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdG8gbWF0Y2ggdGhlIGJyb3dzZXIncyBudW1iZXJmb3JtYXR0ZXIgZGVmYXVsdHNcbiAgICAgIHZhciBfZml4ZWQgPSB0aGlzLmZsb29yID8gTWF0aC5mbG9vcihpKSA6IHJvdW5kVG8oaSwgMyk7XG5cbiAgICAgIHJldHVybiBwYWRTdGFydChfZml4ZWQsIHRoaXMucGFkVG8pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gUG9seU51bWJlckZvcm1hdHRlcjtcbn0oKTtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5cbnZhciBQb2x5RGF0ZUZvcm1hdHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBvbHlEYXRlRm9ybWF0dGVyKGR0LCBpbnRsLCBvcHRzKSB7XG4gICAgdGhpcy5vcHRzID0gb3B0cztcbiAgICB0aGlzLmhhc0ludGwgPSBoYXNJbnRsKCk7XG4gICAgdmFyIHo7XG5cbiAgICBpZiAoZHQuem9uZS51bml2ZXJzYWwgJiYgdGhpcy5oYXNJbnRsKSB7XG4gICAgICAvLyBDaHJvbWl1bSBkb2Vzbid0IHN1cHBvcnQgZml4ZWQtb2Zmc2V0IHpvbmVzIGxpa2UgRXRjL0dNVCs4IGluIGl0cyBmb3JtYXR0ZXIsXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MzY0Mzc0LlxuICAgICAgLy8gU28gd2UgaGF2ZSB0byBtYWtlIGRvLiBUd28gY2FzZXM6XG4gICAgICAvLyAxLiBUaGUgZm9ybWF0IG9wdGlvbnMgdGVsbCB1cyB0byBzaG93IHRoZSB6b25lLiBXZSBjYW4ndCBkbyB0aGF0LCBzbyB0aGUgYmVzdFxuICAgICAgLy8gd2UgY2FuIGRvIGlzIGZvcm1hdCB0aGUgZGF0ZSBpbiBVVEMuXG4gICAgICAvLyAyLiBUaGUgZm9ybWF0IG9wdGlvbnMgZG9uJ3QgdGVsbCB1cyB0byBzaG93IHRoZSB6b25lLiBUaGVuIHdlIGNhbiBhZGp1c3QgdGhlbVxuICAgICAgLy8gdGhlIHRpbWUgYW5kIHRlbGwgdGhlIGZvcm1hdHRlciB0byBzaG93IGl0IHRvIHVzIGluIFVUQywgc28gdGhhdCB0aGUgdGltZSBpcyByaWdodFxuICAgICAgLy8gYW5kIHRoZSBiYWQgem9uZSBkb2Vzbid0IHNob3cgdXAuXG4gICAgICAvLyBXZSBjYW4gY2xlYW4gYWxsIHRoaXMgdXAgd2hlbiBDaHJvbWUgZml4ZXMgdGhpcy5cbiAgICAgIHogPSBcIlVUQ1wiO1xuXG4gICAgICBpZiAob3B0cy50aW1lWm9uZU5hbWUpIHtcbiAgICAgICAgdGhpcy5kdCA9IGR0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kdCA9IGR0Lm9mZnNldCA9PT0gMCA/IGR0IDogRGF0ZVRpbWUuZnJvbU1pbGxpcyhkdC50cyArIGR0Lm9mZnNldCAqIDYwICogMTAwMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkdC56b25lLnR5cGUgPT09IFwibG9jYWxcIikge1xuICAgICAgdGhpcy5kdCA9IGR0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmR0ID0gZHQ7XG4gICAgICB6ID0gZHQuem9uZS5uYW1lO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0ludGwpIHtcbiAgICAgIHZhciBpbnRsT3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0cyk7XG5cbiAgICAgIGlmICh6KSB7XG4gICAgICAgIGludGxPcHRzLnRpbWVab25lID0gejtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kdGYgPSBnZXRDYWNoZWREVEYoaW50bCwgaW50bE9wdHMpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfcHJvdG8yID0gUG9seURhdGVGb3JtYXR0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90bzIuZm9ybWF0ID0gZnVuY3Rpb24gZm9ybWF0KCkge1xuICAgIGlmICh0aGlzLmhhc0ludGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmR0Zi5mb3JtYXQodGhpcy5kdC50b0pTRGF0ZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRva2VuRm9ybWF0ID0gZm9ybWF0U3RyaW5nKHRoaXMub3B0cyksXG4gICAgICAgICAgbG9jID0gTG9jYWxlLmNyZWF0ZShcImVuLVVTXCIpO1xuICAgICAgcmV0dXJuIEZvcm1hdHRlci5jcmVhdGUobG9jKS5mb3JtYXREYXRlVGltZUZyb21TdHJpbmcodGhpcy5kdCwgdG9rZW5Gb3JtYXQpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8yLmZvcm1hdFRvUGFydHMgPSBmdW5jdGlvbiBmb3JtYXRUb1BhcnRzKCkge1xuICAgIGlmICh0aGlzLmhhc0ludGwgJiYgaGFzRm9ybWF0VG9QYXJ0cygpKSB7XG4gICAgICByZXR1cm4gdGhpcy5kdGYuZm9ybWF0VG9QYXJ0cyh0aGlzLmR0LnRvSlNEYXRlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGlzIGlzIGtpbmQgb2YgYSBjb3Agb3V0LiBXZSBhY3R1YWxseSBjb3VsZCBkbyB0aGlzIGZvciBFbmdsaXNoLiBIb3dldmVyLCB3ZSBjb3VsZG4ndCBkbyBpdCBmb3IgaW50bCBzdHJpbmdzXG4gICAgICAvLyBhbmQgSU1PIGl0J3MgdG9vIHdlaXJkIHRvIGhhdmUgYW4gdW5jYW5ueSB2YWxsZXkgbGlrZSB0aGF0XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzIucmVzb2x2ZWRPcHRpb25zID0gZnVuY3Rpb24gcmVzb2x2ZWRPcHRpb25zKCkge1xuICAgIGlmICh0aGlzLmhhc0ludGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmR0Zi5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9jYWxlOiBcImVuLVVTXCIsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbTogXCJsYXRuXCIsXG4gICAgICAgIG91dHB1dENhbGVuZGFyOiBcImdyZWdvcnlcIlxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFBvbHlEYXRlRm9ybWF0dGVyO1xufSgpO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cblxudmFyIFBvbHlSZWxGb3JtYXR0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQb2x5UmVsRm9ybWF0dGVyKGludGwsIGlzRW5nbGlzaCwgb3B0cykge1xuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgc3R5bGU6IFwibG9uZ1wiXG4gICAgfSwgb3B0cyk7XG5cbiAgICBpZiAoIWlzRW5nbGlzaCAmJiBoYXNSZWxhdGl2ZSgpKSB7XG4gICAgICB0aGlzLnJ0ZiA9IGdldENhY2hlZFJURihpbnRsLCBvcHRzKTtcbiAgICB9XG4gIH1cblxuICB2YXIgX3Byb3RvMyA9IFBvbHlSZWxGb3JtYXR0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90bzMuZm9ybWF0ID0gZnVuY3Rpb24gZm9ybWF0KGNvdW50LCB1bml0KSB7XG4gICAgaWYgKHRoaXMucnRmKSB7XG4gICAgICByZXR1cm4gdGhpcy5ydGYuZm9ybWF0KGNvdW50LCB1bml0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlVGltZSh1bml0LCBjb3VudCwgdGhpcy5vcHRzLm51bWVyaWMsIHRoaXMub3B0cy5zdHlsZSAhPT0gXCJsb25nXCIpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8zLmZvcm1hdFRvUGFydHMgPSBmdW5jdGlvbiBmb3JtYXRUb1BhcnRzKGNvdW50LCB1bml0KSB7XG4gICAgaWYgKHRoaXMucnRmKSB7XG4gICAgICByZXR1cm4gdGhpcy5ydGYuZm9ybWF0VG9QYXJ0cyhjb3VudCwgdW5pdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFBvbHlSZWxGb3JtYXR0ZXI7XG59KCk7XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuXG52YXIgTG9jYWxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgTG9jYWxlLmZyb21PcHRzID0gZnVuY3Rpb24gZnJvbU9wdHMob3B0cykge1xuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKG9wdHMubG9jYWxlLCBvcHRzLm51bWJlcmluZ1N5c3RlbSwgb3B0cy5vdXRwdXRDYWxlbmRhciwgb3B0cy5kZWZhdWx0VG9FTik7XG4gIH07XG5cbiAgTG9jYWxlLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIsIGRlZmF1bHRUb0VOKSB7XG4gICAgaWYgKGRlZmF1bHRUb0VOID09PSB2b2lkIDApIHtcbiAgICAgIGRlZmF1bHRUb0VOID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHNwZWNpZmllZExvY2FsZSA9IGxvY2FsZSB8fCBTZXR0aW5ncy5kZWZhdWx0TG9jYWxlLFxuICAgICAgICAvLyB0aGUgc3lzdGVtIGxvY2FsZSBpcyB1c2VmdWwgZm9yIGh1bWFuIHJlYWRhYmxlIHN0cmluZ3MgYnV0IGFubm95aW5nIGZvciBwYXJzaW5nL2Zvcm1hdHRpbmcga25vd24gZm9ybWF0c1xuICAgIGxvY2FsZVIgPSBzcGVjaWZpZWRMb2NhbGUgfHwgKGRlZmF1bHRUb0VOID8gXCJlbi1VU1wiIDogc3lzdGVtTG9jYWxlKCkpLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW1SID0gbnVtYmVyaW5nU3lzdGVtIHx8IFNldHRpbmdzLmRlZmF1bHROdW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIG91dHB1dENhbGVuZGFyUiA9IG91dHB1dENhbGVuZGFyIHx8IFNldHRpbmdzLmRlZmF1bHRPdXRwdXRDYWxlbmRhcjtcbiAgICByZXR1cm4gbmV3IExvY2FsZShsb2NhbGVSLCBudW1iZXJpbmdTeXN0ZW1SLCBvdXRwdXRDYWxlbmRhclIsIHNwZWNpZmllZExvY2FsZSk7XG4gIH07XG5cbiAgTG9jYWxlLnJlc2V0Q2FjaGUgPSBmdW5jdGlvbiByZXNldENhY2hlKCkge1xuICAgIHN5c0xvY2FsZUNhY2hlID0gbnVsbDtcbiAgICBpbnRsRFRDYWNoZSA9IHt9O1xuICAgIGludGxOdW1DYWNoZSA9IHt9O1xuICAgIGludGxSZWxDYWNoZSA9IHt9O1xuICB9O1xuXG4gIExvY2FsZS5mcm9tT2JqZWN0ID0gZnVuY3Rpb24gZnJvbU9iamVjdChfdGVtcCkge1xuICAgIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICAgIGxvY2FsZSA9IF9yZWYubG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfcmVmLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgb3V0cHV0Q2FsZW5kYXIgPSBfcmVmLm91dHB1dENhbGVuZGFyO1xuXG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKTtcbiAgfTtcblxuICBmdW5jdGlvbiBMb2NhbGUobG9jYWxlLCBudW1iZXJpbmcsIG91dHB1dENhbGVuZGFyLCBzcGVjaWZpZWRMb2NhbGUpIHtcbiAgICB2YXIgX3BhcnNlTG9jYWxlU3RyaW5nID0gcGFyc2VMb2NhbGVTdHJpbmcobG9jYWxlKSxcbiAgICAgICAgcGFyc2VkTG9jYWxlID0gX3BhcnNlTG9jYWxlU3RyaW5nWzBdLFxuICAgICAgICBwYXJzZWROdW1iZXJpbmdTeXN0ZW0gPSBfcGFyc2VMb2NhbGVTdHJpbmdbMV0sXG4gICAgICAgIHBhcnNlZE91dHB1dENhbGVuZGFyID0gX3BhcnNlTG9jYWxlU3RyaW5nWzJdO1xuXG4gICAgdGhpcy5sb2NhbGUgPSBwYXJzZWRMb2NhbGU7XG4gICAgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPSBudW1iZXJpbmcgfHwgcGFyc2VkTnVtYmVyaW5nU3lzdGVtIHx8IG51bGw7XG4gICAgdGhpcy5vdXRwdXRDYWxlbmRhciA9IG91dHB1dENhbGVuZGFyIHx8IHBhcnNlZE91dHB1dENhbGVuZGFyIHx8IG51bGw7XG4gICAgdGhpcy5pbnRsID0gaW50bENvbmZpZ1N0cmluZyh0aGlzLmxvY2FsZSwgdGhpcy5udW1iZXJpbmdTeXN0ZW0sIHRoaXMub3V0cHV0Q2FsZW5kYXIpO1xuICAgIHRoaXMud2Vla2RheXNDYWNoZSA9IHtcbiAgICAgIGZvcm1hdDoge30sXG4gICAgICBzdGFuZGFsb25lOiB7fVxuICAgIH07XG4gICAgdGhpcy5tb250aHNDYWNoZSA9IHtcbiAgICAgIGZvcm1hdDoge30sXG4gICAgICBzdGFuZGFsb25lOiB7fVxuICAgIH07XG4gICAgdGhpcy5tZXJpZGllbUNhY2hlID0gbnVsbDtcbiAgICB0aGlzLmVyYUNhY2hlID0ge307XG4gICAgdGhpcy5zcGVjaWZpZWRMb2NhbGUgPSBzcGVjaWZpZWRMb2NhbGU7XG4gICAgdGhpcy5mYXN0TnVtYmVyc0NhY2hlZCA9IG51bGw7XG4gIH1cblxuICB2YXIgX3Byb3RvNCA9IExvY2FsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvNC5saXN0aW5nTW9kZSA9IGZ1bmN0aW9uIGxpc3RpbmdNb2RlKGRlZmF1bHRPSykge1xuICAgIGlmIChkZWZhdWx0T0sgPT09IHZvaWQgMCkge1xuICAgICAgZGVmYXVsdE9LID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgaW50bCA9IGhhc0ludGwoKSxcbiAgICAgICAgaGFzRlRQID0gaW50bCAmJiBoYXNGb3JtYXRUb1BhcnRzKCksXG4gICAgICAgIGlzQWN0dWFsbHlFbiA9IHRoaXMuaXNFbmdsaXNoKCksXG4gICAgICAgIGhhc05vV2VpcmRuZXNzID0gKHRoaXMubnVtYmVyaW5nU3lzdGVtID09PSBudWxsIHx8IHRoaXMubnVtYmVyaW5nU3lzdGVtID09PSBcImxhdG5cIikgJiYgKHRoaXMub3V0cHV0Q2FsZW5kYXIgPT09IG51bGwgfHwgdGhpcy5vdXRwdXRDYWxlbmRhciA9PT0gXCJncmVnb3J5XCIpO1xuXG4gICAgaWYgKCFoYXNGVFAgJiYgIShpc0FjdHVhbGx5RW4gJiYgaGFzTm9XZWlyZG5lc3MpICYmICFkZWZhdWx0T0spIHtcbiAgICAgIHJldHVybiBcImVycm9yXCI7XG4gICAgfSBlbHNlIGlmICghaGFzRlRQIHx8IGlzQWN0dWFsbHlFbiAmJiBoYXNOb1dlaXJkbmVzcykge1xuICAgICAgcmV0dXJuIFwiZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiaW50bFwiO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG80LmNsb25lID0gZnVuY3Rpb24gY2xvbmUoYWx0cykge1xuICAgIGlmICghYWx0cyB8fCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhbHRzKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShhbHRzLmxvY2FsZSB8fCB0aGlzLnNwZWNpZmllZExvY2FsZSwgYWx0cy5udW1iZXJpbmdTeXN0ZW0gfHwgdGhpcy5udW1iZXJpbmdTeXN0ZW0sIGFsdHMub3V0cHV0Q2FsZW5kYXIgfHwgdGhpcy5vdXRwdXRDYWxlbmRhciwgYWx0cy5kZWZhdWx0VG9FTiB8fCBmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzQucmVkZWZhdWx0VG9FTiA9IGZ1bmN0aW9uIHJlZGVmYXVsdFRvRU4oYWx0cykge1xuICAgIGlmIChhbHRzID09PSB2b2lkIDApIHtcbiAgICAgIGFsdHMgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jbG9uZShPYmplY3QuYXNzaWduKHt9LCBhbHRzLCB7XG4gICAgICBkZWZhdWx0VG9FTjogdHJ1ZVxuICAgIH0pKTtcbiAgfTtcblxuICBfcHJvdG80LnJlZGVmYXVsdFRvU3lzdGVtID0gZnVuY3Rpb24gcmVkZWZhdWx0VG9TeXN0ZW0oYWx0cykge1xuICAgIGlmIChhbHRzID09PSB2b2lkIDApIHtcbiAgICAgIGFsdHMgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jbG9uZShPYmplY3QuYXNzaWduKHt9LCBhbHRzLCB7XG4gICAgICBkZWZhdWx0VG9FTjogZmFsc2VcbiAgICB9KSk7XG4gIH07XG5cbiAgX3Byb3RvNC5tb250aHMgPSBmdW5jdGlvbiBtb250aHMkMShsZW5ndGgsIGZvcm1hdCwgZGVmYXVsdE9LKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkge1xuICAgICAgZm9ybWF0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGRlZmF1bHRPSyA9PT0gdm9pZCAwKSB7XG4gICAgICBkZWZhdWx0T0sgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBkZWZhdWx0T0ssIG1vbnRocywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGludGwgPSBmb3JtYXQgPyB7XG4gICAgICAgIG1vbnRoOiBsZW5ndGgsXG4gICAgICAgIGRheTogXCJudW1lcmljXCJcbiAgICAgIH0gOiB7XG4gICAgICAgIG1vbnRoOiBsZW5ndGhcbiAgICAgIH0sXG4gICAgICAgICAgZm9ybWF0U3RyID0gZm9ybWF0ID8gXCJmb3JtYXRcIiA6IFwic3RhbmRhbG9uZVwiO1xuXG4gICAgICBpZiAoIV90aGlzLm1vbnRoc0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSkge1xuICAgICAgICBfdGhpcy5tb250aHNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0gPSBtYXBNb250aHMoZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmV4dHJhY3QoZHQsIGludGwsIFwibW9udGhcIik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMubW9udGhzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90bzQud2Vla2RheXMgPSBmdW5jdGlvbiB3ZWVrZGF5cyQxKGxlbmd0aCwgZm9ybWF0LCBkZWZhdWx0T0spIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkge1xuICAgICAgZm9ybWF0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGRlZmF1bHRPSyA9PT0gdm9pZCAwKSB7XG4gICAgICBkZWZhdWx0T0sgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBkZWZhdWx0T0ssIHdlZWtkYXlzLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW50bCA9IGZvcm1hdCA/IHtcbiAgICAgICAgd2Vla2RheTogbGVuZ3RoLFxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiXG4gICAgICB9IDoge1xuICAgICAgICB3ZWVrZGF5OiBsZW5ndGhcbiAgICAgIH0sXG4gICAgICAgICAgZm9ybWF0U3RyID0gZm9ybWF0ID8gXCJmb3JtYXRcIiA6IFwic3RhbmRhbG9uZVwiO1xuXG4gICAgICBpZiAoIV90aGlzMi53ZWVrZGF5c0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSkge1xuICAgICAgICBfdGhpczIud2Vla2RheXNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0gPSBtYXBXZWVrZGF5cyhmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLmV4dHJhY3QoZHQsIGludGwsIFwid2Vla2RheVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpczIud2Vla2RheXNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF07XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvNC5tZXJpZGllbXMgPSBmdW5jdGlvbiBtZXJpZGllbXMkMShkZWZhdWx0T0spIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIGlmIChkZWZhdWx0T0sgPT09IHZvaWQgMCkge1xuICAgICAgZGVmYXVsdE9LID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIHVuZGVmaW5lZCwgZGVmYXVsdE9LLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbWVyaWRpZW1zO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEluIHRoZW9yeSB0aGVyZSBjb3VsZCBiZSBhcmliaXRyYXJ5IGRheSBwZXJpb2RzLiBXZSdyZSBnb25uYSBhc3N1bWUgdGhlcmUgYXJlIGV4YWN0bHkgdHdvXG4gICAgICAvLyBmb3IgQU0gYW5kIFBNLiBUaGlzIGlzIHByb2JhYmx5IHdyb25nLCBidXQgaXQncyBtYWtlcyBwYXJzaW5nIHdheSBlYXNpZXIuXG4gICAgICBpZiAoIV90aGlzMy5tZXJpZGllbUNhY2hlKSB7XG4gICAgICAgIHZhciBpbnRsID0ge1xuICAgICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICAgIGhvdXIxMjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBfdGhpczMubWVyaWRpZW1DYWNoZSA9IFtEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzLCA5KSwgRGF0ZVRpbWUudXRjKDIwMTYsIDExLCAxMywgMTkpXS5tYXAoZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5leHRyYWN0KGR0LCBpbnRsLCBcImRheXBlcmlvZFwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpczMubWVyaWRpZW1DYWNoZTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG80LmVyYXMgPSBmdW5jdGlvbiBlcmFzJDEobGVuZ3RoLCBkZWZhdWx0T0spIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIGlmIChkZWZhdWx0T0sgPT09IHZvaWQgMCkge1xuICAgICAgZGVmYXVsdE9LID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIGxlbmd0aCwgZGVmYXVsdE9LLCBlcmFzLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW50bCA9IHtcbiAgICAgICAgZXJhOiBsZW5ndGhcbiAgICAgIH07IC8vIFRoaXMgaXMgdXR0ZXIgYnVsbHNoaXQuIERpZmZlcmVudCBjYWxlbmRhcnMgYXJlIGdvaW5nIHRvIGRlZmluZSBlcmFzIHRvdGFsbHkgZGlmZmVyZW50bHkuIFdoYXQgSSBuZWVkIGlzIHRoZSBtaW5pbXVtIHNldCBvZiBkYXRlc1xuICAgICAgLy8gdG8gZGVmaW5pdGVseSBlbnVtZXJhdGUgdGhlbS5cblxuICAgICAgaWYgKCFfdGhpczQuZXJhQ2FjaGVbbGVuZ3RoXSkge1xuICAgICAgICBfdGhpczQuZXJhQ2FjaGVbbGVuZ3RoXSA9IFtEYXRlVGltZS51dGMoLTQwLCAxLCAxKSwgRGF0ZVRpbWUudXRjKDIwMTcsIDEsIDEpXS5tYXAoZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5leHRyYWN0KGR0LCBpbnRsLCBcImVyYVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpczQuZXJhQ2FjaGVbbGVuZ3RoXTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG80LmV4dHJhY3QgPSBmdW5jdGlvbiBleHRyYWN0KGR0LCBpbnRsT3B0cywgZmllbGQpIHtcbiAgICB2YXIgZGYgPSB0aGlzLmR0Rm9ybWF0dGVyKGR0LCBpbnRsT3B0cyksXG4gICAgICAgIHJlc3VsdHMgPSBkZi5mb3JtYXRUb1BhcnRzKCksXG4gICAgICAgIG1hdGNoaW5nID0gcmVzdWx0cy5maW5kKGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gbS50eXBlLnRvTG93ZXJDYXNlKCkgPT09IGZpZWxkO1xuICAgIH0pO1xuICAgIHJldHVybiBtYXRjaGluZyA/IG1hdGNoaW5nLnZhbHVlIDogbnVsbDtcbiAgfTtcblxuICBfcHJvdG80Lm51bWJlckZvcm1hdHRlciA9IGZ1bmN0aW9uIG51bWJlckZvcm1hdHRlcihvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIC8vIHRoaXMgZm9yY2VzaW1wbGUgb3B0aW9uIGlzIG5ldmVyIHVzZWQgKHRoZSBvbmx5IGNhbGxlciBzaG9ydC1jaXJjdWl0cyBvbiBpdCwgYnV0IGl0IHNlZW1zIHNhZmVyIHRvIGxlYXZlKVxuICAgIC8vIChpbiBjb250cmFzdCwgdGhlIHJlc3Qgb2YgdGhlIGNvbmRpdGlvbiBpcyB1c2VkIGhlYXZpbHkpXG4gICAgcmV0dXJuIG5ldyBQb2x5TnVtYmVyRm9ybWF0dGVyKHRoaXMuaW50bCwgb3B0cy5mb3JjZVNpbXBsZSB8fCB0aGlzLmZhc3ROdW1iZXJzLCBvcHRzKTtcbiAgfTtcblxuICBfcHJvdG80LmR0Rm9ybWF0dGVyID0gZnVuY3Rpb24gZHRGb3JtYXR0ZXIoZHQsIGludGxPcHRzKSB7XG4gICAgaWYgKGludGxPcHRzID09PSB2b2lkIDApIHtcbiAgICAgIGludGxPcHRzID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQb2x5RGF0ZUZvcm1hdHRlcihkdCwgdGhpcy5pbnRsLCBpbnRsT3B0cyk7XG4gIH07XG5cbiAgX3Byb3RvNC5yZWxGb3JtYXR0ZXIgPSBmdW5jdGlvbiByZWxGb3JtYXR0ZXIob3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFBvbHlSZWxGb3JtYXR0ZXIodGhpcy5pbnRsLCB0aGlzLmlzRW5nbGlzaCgpLCBvcHRzKTtcbiAgfTtcblxuICBfcHJvdG80LmlzRW5nbGlzaCA9IGZ1bmN0aW9uIGlzRW5nbGlzaCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGUgPT09IFwiZW5cIiB8fCB0aGlzLmxvY2FsZS50b0xvd2VyQ2FzZSgpID09PSBcImVuLXVzXCIgfHwgaGFzSW50bCgpICYmIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMuaW50bCkucmVzb2x2ZWRPcHRpb25zKCkubG9jYWxlLnN0YXJ0c1dpdGgoXCJlbi11c1wiKTtcbiAgfTtcblxuICBfcHJvdG80LmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZSA9PT0gb3RoZXIubG9jYWxlICYmIHRoaXMubnVtYmVyaW5nU3lzdGVtID09PSBvdGhlci5udW1iZXJpbmdTeXN0ZW0gJiYgdGhpcy5vdXRwdXRDYWxlbmRhciA9PT0gb3RoZXIub3V0cHV0Q2FsZW5kYXI7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKExvY2FsZSwgW3tcbiAgICBrZXk6IFwiZmFzdE51bWJlcnNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICh0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5mYXN0TnVtYmVyc0NhY2hlZCA9IHN1cHBvcnRzRmFzdE51bWJlcnModGhpcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMb2NhbGU7XG59KCk7XG5cbi8qXG4gKiBUaGlzIGZpbGUgaGFuZGxlcyBwYXJzaW5nIGZvciB3ZWxsLXNwZWNpZmllZCBmb3JtYXRzLiBIZXJlJ3MgaG93IGl0IHdvcmtzOlxuICogVHdvIHRoaW5ncyBnbyBpbnRvIHBhcnNpbmc6IGEgcmVnZXggdG8gbWF0Y2ggd2l0aCBhbmQgYW4gZXh0cmFjdG9yIHRvIHRha2UgYXBhcnQgdGhlIGdyb3VwcyBpbiB0aGUgbWF0Y2guXG4gKiBBbiBleHRyYWN0b3IgaXMganVzdCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSByZWdleCBtYXRjaCBhcnJheSBhbmQgcmV0dXJucyBhIHsgeWVhcjogLi4uLCBtb250aDogLi4uIH0gb2JqZWN0XG4gKiBwYXJzZSgpIGRvZXMgdGhlIHdvcmsgb2YgZXhlY3V0aW5nIHRoZSByZWdleCBhbmQgYXBwbHlpbmcgdGhlIGV4dHJhY3Rvci4gSXQgdGFrZXMgbXVsdGlwbGUgcmVnZXgvZXh0cmFjdG9yIHBhaXJzIHRvIHRyeSBpbiBzZXF1ZW5jZS5cbiAqIEV4dHJhY3RvcnMgY2FuIHRha2UgYSBcImN1cnNvclwiIHJlcHJlc2VudGluZyB0aGUgb2Zmc2V0IGluIHRoZSBtYXRjaCB0byBsb29rIGF0LiBUaGlzIG1ha2VzIGl0IGVhc3kgdG8gY29tYmluZSBleHRyYWN0b3JzLlxuICogY29tYmluZUV4dHJhY3RvcnMoKSBkb2VzIHRoZSB3b3JrIG9mIGNvbWJpbmluZyB0aGVtLCBrZWVwaW5nIHRyYWNrIG9mIHRoZSBjdXJzb3IgdGhyb3VnaCBtdWx0aXBsZSBleHRyYWN0aW9ucy5cbiAqIFNvbWUgZXh0cmFjdGlvbnMgYXJlIHN1cGVyIGR1bWIgYW5kIHNpbXBsZVBhcnNlIGFuZCBmcm9tU3RyaW5ncyBoZWxwIERSWSB0aGVtLlxuICovXG5cbmZ1bmN0aW9uIGNvbWJpbmVSZWdleGVzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVnZXhlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICByZWdleGVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGZ1bGwgPSByZWdleGVzLnJlZHVjZShmdW5jdGlvbiAoZiwgcikge1xuICAgIHJldHVybiBmICsgci5zb3VyY2U7XG4gIH0sIFwiXCIpO1xuICByZXR1cm4gUmVnRXhwKFwiXlwiICsgZnVsbCArIFwiJFwiKTtcbn1cblxuZnVuY3Rpb24gY29tYmluZUV4dHJhY3RvcnMoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgZXh0cmFjdG9ycyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGV4dHJhY3RvcnNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAobSkge1xuICAgIHJldHVybiBleHRyYWN0b3JzLnJlZHVjZShmdW5jdGlvbiAoX3JlZiwgZXgpIHtcbiAgICAgIHZhciBtZXJnZWRWYWxzID0gX3JlZlswXSxcbiAgICAgICAgICBtZXJnZWRab25lID0gX3JlZlsxXSxcbiAgICAgICAgICBjdXJzb3IgPSBfcmVmWzJdO1xuXG4gICAgICB2YXIgX2V4ID0gZXgobSwgY3Vyc29yKSxcbiAgICAgICAgICB2YWwgPSBfZXhbMF0sXG4gICAgICAgICAgem9uZSA9IF9leFsxXSxcbiAgICAgICAgICBuZXh0ID0gX2V4WzJdO1xuXG4gICAgICByZXR1cm4gW09iamVjdC5hc3NpZ24obWVyZ2VkVmFscywgdmFsKSwgbWVyZ2VkWm9uZSB8fCB6b25lLCBuZXh0XTtcbiAgICB9LCBbe30sIG51bGwsIDFdKS5zbGljZSgwLCAyKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2Uocykge1xuICBpZiAocyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtudWxsLCBudWxsXTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgcGF0dGVybnMgPSBuZXcgQXJyYXkoX2xlbjMgPiAxID8gX2xlbjMgLSAxIDogMCksIF9rZXkzID0gMTsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIHBhdHRlcm5zW19rZXkzIC0gMV0gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgZm9yICh2YXIgX2kgPSAwLCBfcGF0dGVybnMgPSBwYXR0ZXJuczsgX2kgPCBfcGF0dGVybnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIF9wYXR0ZXJucyRfaSA9IF9wYXR0ZXJuc1tfaV0sXG4gICAgICAgIHJlZ2V4ID0gX3BhdHRlcm5zJF9pWzBdLFxuICAgICAgICBleHRyYWN0b3IgPSBfcGF0dGVybnMkX2lbMV07XG4gICAgdmFyIG0gPSByZWdleC5leGVjKHMpO1xuXG4gICAgaWYgKG0pIHtcbiAgICAgIHJldHVybiBleHRyYWN0b3IobSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFtudWxsLCBudWxsXTtcbn1cblxuZnVuY3Rpb24gc2ltcGxlUGFyc2UoKSB7XG4gIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwga2V5cyA9IG5ldyBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgIGtleXNbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAobWF0Y2gsIGN1cnNvcikge1xuICAgIHZhciByZXQgPSB7fTtcbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXRba2V5c1tpXV0gPSBwYXJzZUludGVnZXIobWF0Y2hbY3Vyc29yICsgaV0pO1xuICAgIH1cblxuICAgIHJldHVybiBbcmV0LCBudWxsLCBjdXJzb3IgKyBpXTtcbiAgfTtcbn0gLy8gSVNPIGFuZCBTUUwgcGFyc2luZ1xuXG5cbnZhciBvZmZzZXRSZWdleCA9IC8oPzooWil8KFsrLV1cXGRcXGQpKD86Oj8oXFxkXFxkKSk/KS8sXG4gICAgaXNvVGltZUJhc2VSZWdleCA9IC8oXFxkXFxkKSg/Ojo/KFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86Wy4sXShcXGR7MSwzMH0pKT8pPyk/LyxcbiAgICBpc29UaW1lUmVnZXggPSBSZWdFeHAoXCJcIiArIGlzb1RpbWVCYXNlUmVnZXguc291cmNlICsgb2Zmc2V0UmVnZXguc291cmNlICsgXCI/XCIpLFxuICAgIGlzb1RpbWVFeHRlbnNpb25SZWdleCA9IFJlZ0V4cChcIig/OlRcIiArIGlzb1RpbWVSZWdleC5zb3VyY2UgKyBcIik/XCIpLFxuICAgIGlzb1ltZFJlZ2V4ID0gLyhbKy1dXFxkezZ9fFxcZHs0fSkoPzotPyhcXGRcXGQpKD86LT8oXFxkXFxkKSk/KT8vLFxuICAgIGlzb1dlZWtSZWdleCA9IC8oXFxkezR9KS0/VyhcXGRcXGQpKD86LT8oXFxkKSk/LyxcbiAgICBpc29PcmRpbmFsUmVnZXggPSAvKFxcZHs0fSktPyhcXGR7M30pLyxcbiAgICBleHRyYWN0SVNPV2Vla0RhdGEgPSBzaW1wbGVQYXJzZShcIndlZWtZZWFyXCIsIFwid2Vla051bWJlclwiLCBcIndlZWtEYXlcIiksXG4gICAgZXh0cmFjdElTT09yZGluYWxEYXRhID0gc2ltcGxlUGFyc2UoXCJ5ZWFyXCIsIFwib3JkaW5hbFwiKSxcbiAgICBzcWxZbWRSZWdleCA9IC8oXFxkezR9KS0oXFxkXFxkKS0oXFxkXFxkKS8sXG4gICAgLy8gZHVtYmVkLWRvd24gdmVyc2lvbiBvZiB0aGUgSVNPIG9uZVxuc3FsVGltZVJlZ2V4ID0gUmVnRXhwKGlzb1RpbWVCYXNlUmVnZXguc291cmNlICsgXCIgPyg/OlwiICsgb2Zmc2V0UmVnZXguc291cmNlICsgXCJ8KFwiICsgaWFuYVJlZ2V4LnNvdXJjZSArIFwiKSk/XCIpLFxuICAgIHNxbFRpbWVFeHRlbnNpb25SZWdleCA9IFJlZ0V4cChcIig/OiBcIiArIHNxbFRpbWVSZWdleC5zb3VyY2UgKyBcIik/XCIpO1xuXG5mdW5jdGlvbiBpbnQobWF0Y2gsIHBvcywgZmFsbGJhY2spIHtcbiAgdmFyIG0gPSBtYXRjaFtwb3NdO1xuICByZXR1cm4gaXNVbmRlZmluZWQobSkgPyBmYWxsYmFjayA6IHBhcnNlSW50ZWdlcihtKTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdElTT1ltZChtYXRjaCwgY3Vyc29yKSB7XG4gIHZhciBpdGVtID0ge1xuICAgIHllYXI6IGludChtYXRjaCwgY3Vyc29yKSxcbiAgICBtb250aDogaW50KG1hdGNoLCBjdXJzb3IgKyAxLCAxKSxcbiAgICBkYXk6IGludChtYXRjaCwgY3Vyc29yICsgMiwgMSlcbiAgfTtcbiAgcmV0dXJuIFtpdGVtLCBudWxsLCBjdXJzb3IgKyAzXTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdElTT1RpbWUobWF0Y2gsIGN1cnNvcikge1xuICB2YXIgaXRlbSA9IHtcbiAgICBob3VyOiBpbnQobWF0Y2gsIGN1cnNvciwgMCksXG4gICAgbWludXRlOiBpbnQobWF0Y2gsIGN1cnNvciArIDEsIDApLFxuICAgIHNlY29uZDogaW50KG1hdGNoLCBjdXJzb3IgKyAyLCAwKSxcbiAgICBtaWxsaXNlY29uZDogcGFyc2VNaWxsaXMobWF0Y2hbY3Vyc29yICsgM10pXG4gIH07XG4gIHJldHVybiBbaXRlbSwgbnVsbCwgY3Vyc29yICsgNF07XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RJU09PZmZzZXQobWF0Y2gsIGN1cnNvcikge1xuICB2YXIgbG9jYWwgPSAhbWF0Y2hbY3Vyc29yXSAmJiAhbWF0Y2hbY3Vyc29yICsgMV0sXG4gICAgICBmdWxsT2Zmc2V0ID0gc2lnbmVkT2Zmc2V0KG1hdGNoW2N1cnNvciArIDFdLCBtYXRjaFtjdXJzb3IgKyAyXSksXG4gICAgICB6b25lID0gbG9jYWwgPyBudWxsIDogRml4ZWRPZmZzZXRab25lLmluc3RhbmNlKGZ1bGxPZmZzZXQpO1xuICByZXR1cm4gW3t9LCB6b25lLCBjdXJzb3IgKyAzXTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdElBTkFab25lKG1hdGNoLCBjdXJzb3IpIHtcbiAgdmFyIHpvbmUgPSBtYXRjaFtjdXJzb3JdID8gSUFOQVpvbmUuY3JlYXRlKG1hdGNoW2N1cnNvcl0pIDogbnVsbDtcbiAgcmV0dXJuIFt7fSwgem9uZSwgY3Vyc29yICsgMV07XG59IC8vIElTTyBkdXJhdGlvbiBwYXJzaW5nXG5cblxudmFyIGlzb0R1cmF0aW9uID0gL14tP1AoPzooPzooLT9cXGR7MSw5fSlZKT8oPzooLT9cXGR7MSw5fSlNKT8oPzooLT9cXGR7MSw5fSlXKT8oPzooLT9cXGR7MSw5fSlEKT8oPzpUKD86KC0/XFxkezEsOX0pSCk/KD86KC0/XFxkezEsOX0pTSk/KD86KC0/XFxkezEsMjB9KSg/OlsuLF0oLT9cXGR7MSw5fSkpP1MpPyk/KSQvO1xuXG5mdW5jdGlvbiBleHRyYWN0SVNPRHVyYXRpb24obWF0Y2gpIHtcbiAgdmFyIHMgPSBtYXRjaFswXSxcbiAgICAgIHllYXJTdHIgPSBtYXRjaFsxXSxcbiAgICAgIG1vbnRoU3RyID0gbWF0Y2hbMl0sXG4gICAgICB3ZWVrU3RyID0gbWF0Y2hbM10sXG4gICAgICBkYXlTdHIgPSBtYXRjaFs0XSxcbiAgICAgIGhvdXJTdHIgPSBtYXRjaFs1XSxcbiAgICAgIG1pbnV0ZVN0ciA9IG1hdGNoWzZdLFxuICAgICAgc2Vjb25kU3RyID0gbWF0Y2hbN10sXG4gICAgICBtaWxsaXNlY29uZHNTdHIgPSBtYXRjaFs4XTtcbiAgdmFyIGhhc05lZ2F0aXZlUHJlZml4ID0gc1swXSA9PT0gXCItXCI7XG5cbiAgdmFyIG1heWJlTmVnYXRlID0gZnVuY3Rpb24gbWF5YmVOZWdhdGUobnVtKSB7XG4gICAgcmV0dXJuIG51bSAmJiBoYXNOZWdhdGl2ZVByZWZpeCA/IC1udW0gOiBudW07XG4gIH07XG5cbiAgcmV0dXJuIFt7XG4gICAgeWVhcnM6IG1heWJlTmVnYXRlKHBhcnNlSW50ZWdlcih5ZWFyU3RyKSksXG4gICAgbW9udGhzOiBtYXliZU5lZ2F0ZShwYXJzZUludGVnZXIobW9udGhTdHIpKSxcbiAgICB3ZWVrczogbWF5YmVOZWdhdGUocGFyc2VJbnRlZ2VyKHdlZWtTdHIpKSxcbiAgICBkYXlzOiBtYXliZU5lZ2F0ZShwYXJzZUludGVnZXIoZGF5U3RyKSksXG4gICAgaG91cnM6IG1heWJlTmVnYXRlKHBhcnNlSW50ZWdlcihob3VyU3RyKSksXG4gICAgbWludXRlczogbWF5YmVOZWdhdGUocGFyc2VJbnRlZ2VyKG1pbnV0ZVN0cikpLFxuICAgIHNlY29uZHM6IG1heWJlTmVnYXRlKHBhcnNlSW50ZWdlcihzZWNvbmRTdHIpKSxcbiAgICBtaWxsaXNlY29uZHM6IG1heWJlTmVnYXRlKHBhcnNlTWlsbGlzKG1pbGxpc2Vjb25kc1N0cikpXG4gIH1dO1xufSAvLyBUaGVzZSBhcmUgYSBsaXR0bGUgYnJhaW5kZWFkLiBFRFQgKnNob3VsZCogdGVsbCB1cyB0aGF0IHdlJ3JlIGluLCBzYXksIEFtZXJpY2EvTmV3X1lvcmtcbi8vIGFuZCBub3QganVzdCB0aGF0IHdlJ3JlIGluIC0yNDAgKnJpZ2h0IG5vdyouIEJ1dCBzaW5jZSBJIGRvbid0IHRoaW5rIHRoZXNlIGFyZSB1c2VkIHRoYXQgb2Z0ZW5cbi8vIEknbSBqdXN0IGdvaW5nIHRvIGlnbm9yZSB0aGF0XG5cblxudmFyIG9ic09mZnNldHMgPSB7XG4gIEdNVDogMCxcbiAgRURUOiAtNCAqIDYwLFxuICBFU1Q6IC01ICogNjAsXG4gIENEVDogLTUgKiA2MCxcbiAgQ1NUOiAtNiAqIDYwLFxuICBNRFQ6IC02ICogNjAsXG4gIE1TVDogLTcgKiA2MCxcbiAgUERUOiAtNyAqIDYwLFxuICBQU1Q6IC04ICogNjBcbn07XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKSB7XG4gIHZhciByZXN1bHQgPSB7XG4gICAgeWVhcjogeWVhclN0ci5sZW5ndGggPT09IDIgPyB1bnRydW5jYXRlWWVhcihwYXJzZUludGVnZXIoeWVhclN0cikpIDogcGFyc2VJbnRlZ2VyKHllYXJTdHIpLFxuICAgIG1vbnRoOiBtb250aHNTaG9ydC5pbmRleE9mKG1vbnRoU3RyKSArIDEsXG4gICAgZGF5OiBwYXJzZUludGVnZXIoZGF5U3RyKSxcbiAgICBob3VyOiBwYXJzZUludGVnZXIoaG91clN0ciksXG4gICAgbWludXRlOiBwYXJzZUludGVnZXIobWludXRlU3RyKVxuICB9O1xuICBpZiAoc2Vjb25kU3RyKSByZXN1bHQuc2Vjb25kID0gcGFyc2VJbnRlZ2VyKHNlY29uZFN0cik7XG5cbiAgaWYgKHdlZWtkYXlTdHIpIHtcbiAgICByZXN1bHQud2Vla2RheSA9IHdlZWtkYXlTdHIubGVuZ3RoID4gMyA/IHdlZWtkYXlzTG9uZy5pbmRleE9mKHdlZWtkYXlTdHIpICsgMSA6IHdlZWtkYXlzU2hvcnQuaW5kZXhPZih3ZWVrZGF5U3RyKSArIDE7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufSAvLyBSRkMgMjgyMi81MzIyXG5cblxudmFyIHJmYzI4MjIgPSAvXig/OihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pLFxccyk/KFxcZHsxLDJ9KVxccyhKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYylcXHMoXFxkezIsNH0pXFxzKFxcZFxcZCk6KFxcZFxcZCkoPzo6KFxcZFxcZCkpP1xccyg/OihVVHxHTVR8W0VDTVBdW1NEXVQpfChbWnpdKXwoPzooWystXVxcZFxcZCkoXFxkXFxkKSkpJC87XG5cbmZ1bmN0aW9uIGV4dHJhY3RSRkMyODIyKG1hdGNoKSB7XG4gIHZhciB3ZWVrZGF5U3RyID0gbWF0Y2hbMV0sXG4gICAgICBkYXlTdHIgPSBtYXRjaFsyXSxcbiAgICAgIG1vbnRoU3RyID0gbWF0Y2hbM10sXG4gICAgICB5ZWFyU3RyID0gbWF0Y2hbNF0sXG4gICAgICBob3VyU3RyID0gbWF0Y2hbNV0sXG4gICAgICBtaW51dGVTdHIgPSBtYXRjaFs2XSxcbiAgICAgIHNlY29uZFN0ciA9IG1hdGNoWzddLFxuICAgICAgb2JzT2Zmc2V0ID0gbWF0Y2hbOF0sXG4gICAgICBtaWxPZmZzZXQgPSBtYXRjaFs5XSxcbiAgICAgIG9mZkhvdXJTdHIgPSBtYXRjaFsxMF0sXG4gICAgICBvZmZNaW51dGVTdHIgPSBtYXRjaFsxMV0sXG4gICAgICByZXN1bHQgPSBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cik7XG4gIHZhciBvZmZzZXQ7XG5cbiAgaWYgKG9ic09mZnNldCkge1xuICAgIG9mZnNldCA9IG9ic09mZnNldHNbb2JzT2Zmc2V0XTtcbiAgfSBlbHNlIGlmIChtaWxPZmZzZXQpIHtcbiAgICBvZmZzZXQgPSAwO1xuICB9IGVsc2Uge1xuICAgIG9mZnNldCA9IHNpZ25lZE9mZnNldChvZmZIb3VyU3RyLCBvZmZNaW51dGVTdHIpO1xuICB9XG5cbiAgcmV0dXJuIFtyZXN1bHQsIG5ldyBGaXhlZE9mZnNldFpvbmUob2Zmc2V0KV07XG59XG5cbmZ1bmN0aW9uIHByZXByb2Nlc3NSRkMyODIyKHMpIHtcbiAgLy8gUmVtb3ZlIGNvbW1lbnRzIGFuZCBmb2xkaW5nIHdoaXRlc3BhY2UgYW5kIHJlcGxhY2UgbXVsdGlwbGUtc3BhY2VzIHdpdGggYSBzaW5nbGUgc3BhY2VcbiAgcmV0dXJuIHMucmVwbGFjZSgvXFwoW14pXSpcXCl8W1xcblxcdF0vZywgXCIgXCIpLnJlcGxhY2UoLyhcXHNcXHMrKS9nLCBcIiBcIikudHJpbSgpO1xufSAvLyBodHRwIGRhdGVcblxuXG52YXIgcmZjMTEyMyA9IC9eKE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1biksIChcXGRcXGQpIChKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYykgKFxcZHs0fSkgKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkgR01UJC8sXG4gICAgcmZjODUwID0gL14oTW9uZGF5fFR1ZXNkYXl8V2Vkc2RheXxUaHVyc2RheXxGcmlkYXl8U2F0dXJkYXl8U3VuZGF5KSwgKFxcZFxcZCktKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKS0oXFxkXFxkKSAoXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKSBHTVQkLyxcbiAgICBhc2NpaSA9IC9eKE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1bikgKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKSAoIFxcZHxcXGRcXGQpIChcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpIChcXGR7NH0pJC87XG5cbmZ1bmN0aW9uIGV4dHJhY3RSRkMxMTIzT3I4NTAobWF0Y2gpIHtcbiAgdmFyIHdlZWtkYXlTdHIgPSBtYXRjaFsxXSxcbiAgICAgIGRheVN0ciA9IG1hdGNoWzJdLFxuICAgICAgbW9udGhTdHIgPSBtYXRjaFszXSxcbiAgICAgIHllYXJTdHIgPSBtYXRjaFs0XSxcbiAgICAgIGhvdXJTdHIgPSBtYXRjaFs1XSxcbiAgICAgIG1pbnV0ZVN0ciA9IG1hdGNoWzZdLFxuICAgICAgc2Vjb25kU3RyID0gbWF0Y2hbN10sXG4gICAgICByZXN1bHQgPSBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cik7XG4gIHJldHVybiBbcmVzdWx0LCBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2VdO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0QVNDSUkobWF0Y2gpIHtcbiAgdmFyIHdlZWtkYXlTdHIgPSBtYXRjaFsxXSxcbiAgICAgIG1vbnRoU3RyID0gbWF0Y2hbMl0sXG4gICAgICBkYXlTdHIgPSBtYXRjaFszXSxcbiAgICAgIGhvdXJTdHIgPSBtYXRjaFs0XSxcbiAgICAgIG1pbnV0ZVN0ciA9IG1hdGNoWzVdLFxuICAgICAgc2Vjb25kU3RyID0gbWF0Y2hbNl0sXG4gICAgICB5ZWFyU3RyID0gbWF0Y2hbN10sXG4gICAgICByZXN1bHQgPSBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cik7XG4gIHJldHVybiBbcmVzdWx0LCBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2VdO1xufVxuXG52YXIgaXNvWW1kV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb1ltZFJlZ2V4LCBpc29UaW1lRXh0ZW5zaW9uUmVnZXgpO1xudmFyIGlzb1dlZWtXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvV2Vla1JlZ2V4LCBpc29UaW1lRXh0ZW5zaW9uUmVnZXgpO1xudmFyIGlzb09yZGluYWxXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvT3JkaW5hbFJlZ2V4LCBpc29UaW1lRXh0ZW5zaW9uUmVnZXgpO1xudmFyIGlzb1RpbWVDb21iaW5lZFJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvVGltZVJlZ2V4KTtcbnZhciBleHRyYWN0SVNPWW1kVGltZUFuZE9mZnNldCA9IGNvbWJpbmVFeHRyYWN0b3JzKGV4dHJhY3RJU09ZbWQsIGV4dHJhY3RJU09UaW1lLCBleHRyYWN0SVNPT2Zmc2V0KTtcbnZhciBleHRyYWN0SVNPV2Vla1RpbWVBbmRPZmZzZXQgPSBjb21iaW5lRXh0cmFjdG9ycyhleHRyYWN0SVNPV2Vla0RhdGEsIGV4dHJhY3RJU09UaW1lLCBleHRyYWN0SVNPT2Zmc2V0KTtcbnZhciBleHRyYWN0SVNPT3JkaW5hbERhdGFBbmRUaW1lID0gY29tYmluZUV4dHJhY3RvcnMoZXh0cmFjdElTT09yZGluYWxEYXRhLCBleHRyYWN0SVNPVGltZSk7XG52YXIgZXh0cmFjdElTT1RpbWVBbmRPZmZzZXQgPSBjb21iaW5lRXh0cmFjdG9ycyhleHRyYWN0SVNPVGltZSwgZXh0cmFjdElTT09mZnNldCk7XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VJU09EYXRlKHMpIHtcbiAgcmV0dXJuIHBhcnNlKHMsIFtpc29ZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPWW1kVGltZUFuZE9mZnNldF0sIFtpc29XZWVrV2l0aFRpbWVFeHRlbnNpb25SZWdleCwgZXh0cmFjdElTT1dlZWtUaW1lQW5kT2Zmc2V0XSwgW2lzb09yZGluYWxXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPT3JkaW5hbERhdGFBbmRUaW1lXSwgW2lzb1RpbWVDb21iaW5lZFJlZ2V4LCBleHRyYWN0SVNPVGltZUFuZE9mZnNldF0pO1xufVxuZnVuY3Rpb24gcGFyc2VSRkMyODIyRGF0ZShzKSB7XG4gIHJldHVybiBwYXJzZShwcmVwcm9jZXNzUkZDMjgyMihzKSwgW3JmYzI4MjIsIGV4dHJhY3RSRkMyODIyXSk7XG59XG5mdW5jdGlvbiBwYXJzZUhUVFBEYXRlKHMpIHtcbiAgcmV0dXJuIHBhcnNlKHMsIFtyZmMxMTIzLCBleHRyYWN0UkZDMTEyM09yODUwXSwgW3JmYzg1MCwgZXh0cmFjdFJGQzExMjNPcjg1MF0sIFthc2NpaSwgZXh0cmFjdEFTQ0lJXSk7XG59XG5mdW5jdGlvbiBwYXJzZUlTT0R1cmF0aW9uKHMpIHtcbiAgcmV0dXJuIHBhcnNlKHMsIFtpc29EdXJhdGlvbiwgZXh0cmFjdElTT0R1cmF0aW9uXSk7XG59XG52YXIgc3FsWW1kV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKHNxbFltZFJlZ2V4LCBzcWxUaW1lRXh0ZW5zaW9uUmVnZXgpO1xudmFyIHNxbFRpbWVDb21iaW5lZFJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoc3FsVGltZVJlZ2V4KTtcbnZhciBleHRyYWN0SVNPWW1kVGltZU9mZnNldEFuZElBTkFab25lID0gY29tYmluZUV4dHJhY3RvcnMoZXh0cmFjdElTT1ltZCwgZXh0cmFjdElTT1RpbWUsIGV4dHJhY3RJU09PZmZzZXQsIGV4dHJhY3RJQU5BWm9uZSk7XG52YXIgZXh0cmFjdElTT1RpbWVPZmZzZXRBbmRJQU5BWm9uZSA9IGNvbWJpbmVFeHRyYWN0b3JzKGV4dHJhY3RJU09UaW1lLCBleHRyYWN0SVNPT2Zmc2V0LCBleHRyYWN0SUFOQVpvbmUpO1xuZnVuY3Rpb24gcGFyc2VTUUwocykge1xuICByZXR1cm4gcGFyc2UocywgW3NxbFltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXgsIGV4dHJhY3RJU09ZbWRUaW1lT2Zmc2V0QW5kSUFOQVpvbmVdLCBbc3FsVGltZUNvbWJpbmVkUmVnZXgsIGV4dHJhY3RJU09UaW1lT2Zmc2V0QW5kSUFOQVpvbmVdKTtcbn1cblxudmFyIElOVkFMSUQgPSBcIkludmFsaWQgRHVyYXRpb25cIjsgLy8gdW5pdCBjb252ZXJzaW9uIGNvbnN0YW50c1xuXG52YXIgbG93T3JkZXJNYXRyaXggPSB7XG4gIHdlZWtzOiB7XG4gICAgZGF5czogNyxcbiAgICBob3VyczogNyAqIDI0LFxuICAgIG1pbnV0ZXM6IDcgKiAyNCAqIDYwLFxuICAgIHNlY29uZHM6IDcgKiAyNCAqIDYwICogNjAsXG4gICAgbWlsbGlzZWNvbmRzOiA3ICogMjQgKiA2MCAqIDYwICogMTAwMFxuICB9LFxuICBkYXlzOiB7XG4gICAgaG91cnM6IDI0LFxuICAgIG1pbnV0ZXM6IDI0ICogNjAsXG4gICAgc2Vjb25kczogMjQgKiA2MCAqIDYwLFxuICAgIG1pbGxpc2Vjb25kczogMjQgKiA2MCAqIDYwICogMTAwMFxuICB9LFxuICBob3Vyczoge1xuICAgIG1pbnV0ZXM6IDYwLFxuICAgIHNlY29uZHM6IDYwICogNjAsXG4gICAgbWlsbGlzZWNvbmRzOiA2MCAqIDYwICogMTAwMFxuICB9LFxuICBtaW51dGVzOiB7XG4gICAgc2Vjb25kczogNjAsXG4gICAgbWlsbGlzZWNvbmRzOiA2MCAqIDEwMDBcbiAgfSxcbiAgc2Vjb25kczoge1xuICAgIG1pbGxpc2Vjb25kczogMTAwMFxuICB9XG59LFxuICAgIGNhc3VhbE1hdHJpeCA9IE9iamVjdC5hc3NpZ24oe1xuICB5ZWFyczoge1xuICAgIHF1YXJ0ZXJzOiA0LFxuICAgIG1vbnRoczogMTIsXG4gICAgd2Vla3M6IDUyLFxuICAgIGRheXM6IDM2NSxcbiAgICBob3VyczogMzY1ICogMjQsXG4gICAgbWludXRlczogMzY1ICogMjQgKiA2MCxcbiAgICBzZWNvbmRzOiAzNjUgKiAyNCAqIDYwICogNjAsXG4gICAgbWlsbGlzZWNvbmRzOiAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gIH0sXG4gIHF1YXJ0ZXJzOiB7XG4gICAgbW9udGhzOiAzLFxuICAgIHdlZWtzOiAxMyxcbiAgICBkYXlzOiA5MSxcbiAgICBob3VyczogOTEgKiAyNCxcbiAgICBtaW51dGVzOiA5MSAqIDI0ICogNjAsXG4gICAgc2Vjb25kczogOTEgKiAyNCAqIDYwICogNjAsXG4gICAgbWlsbGlzZWNvbmRzOiA5MSAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgfSxcbiAgbW9udGhzOiB7XG4gICAgd2Vla3M6IDQsXG4gICAgZGF5czogMzAsXG4gICAgaG91cnM6IDMwICogMjQsXG4gICAgbWludXRlczogMzAgKiAyNCAqIDYwLFxuICAgIHNlY29uZHM6IDMwICogMjQgKiA2MCAqIDYwLFxuICAgIG1pbGxpc2Vjb25kczogMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gIH1cbn0sIGxvd09yZGVyTWF0cml4KSxcbiAgICBkYXlzSW5ZZWFyQWNjdXJhdGUgPSAxNDYwOTcuMCAvIDQwMCxcbiAgICBkYXlzSW5Nb250aEFjY3VyYXRlID0gMTQ2MDk3LjAgLyA0ODAwLFxuICAgIGFjY3VyYXRlTWF0cml4ID0gT2JqZWN0LmFzc2lnbih7XG4gIHllYXJzOiB7XG4gICAgcXVhcnRlcnM6IDQsXG4gICAgbW9udGhzOiAxMixcbiAgICB3ZWVrczogZGF5c0luWWVhckFjY3VyYXRlIC8gNyxcbiAgICBkYXlzOiBkYXlzSW5ZZWFyQWNjdXJhdGUsXG4gICAgaG91cnM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0LFxuICAgIG1pbnV0ZXM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAsXG4gICAgc2Vjb25kczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwLFxuICAgIG1pbGxpc2Vjb25kczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwICogMTAwMFxuICB9LFxuICBxdWFydGVyczoge1xuICAgIG1vbnRoczogMyxcbiAgICB3ZWVrczogZGF5c0luWWVhckFjY3VyYXRlIC8gMjgsXG4gICAgZGF5czogZGF5c0luWWVhckFjY3VyYXRlIC8gNCxcbiAgICBob3VyczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgLyA0LFxuICAgIG1pbnV0ZXM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgLyA0LFxuICAgIHNlY29uZHM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAvIDQsXG4gICAgbWlsbGlzZWNvbmRzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjAgKiAxMDAwIC8gNFxuICB9LFxuICBtb250aHM6IHtcbiAgICB3ZWVrczogZGF5c0luTW9udGhBY2N1cmF0ZSAvIDcsXG4gICAgZGF5czogZGF5c0luTW9udGhBY2N1cmF0ZSxcbiAgICBob3VyczogZGF5c0luTW9udGhBY2N1cmF0ZSAqIDI0LFxuICAgIG1pbnV0ZXM6IGRheXNJbk1vbnRoQWNjdXJhdGUgKiAyNCAqIDYwLFxuICAgIHNlY29uZHM6IGRheXNJbk1vbnRoQWNjdXJhdGUgKiAyNCAqIDYwICogNjAsXG4gICAgbWlsbGlzZWNvbmRzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCAqIDYwICogMTAwMFxuICB9XG59LCBsb3dPcmRlck1hdHJpeCk7IC8vIHVuaXRzIG9yZGVyZWQgYnkgc2l6ZVxuXG52YXIgb3JkZXJlZFVuaXRzID0gW1wieWVhcnNcIiwgXCJxdWFydGVyc1wiLCBcIm1vbnRoc1wiLCBcIndlZWtzXCIsIFwiZGF5c1wiLCBcImhvdXJzXCIsIFwibWludXRlc1wiLCBcInNlY29uZHNcIiwgXCJtaWxsaXNlY29uZHNcIl07XG52YXIgcmV2ZXJzZVVuaXRzID0gb3JkZXJlZFVuaXRzLnNsaWNlKDApLnJldmVyc2UoKTsgLy8gY2xvbmUgcmVhbGx5IG1lYW5zIFwiY3JlYXRlIGFub3RoZXIgaW5zdGFuY2UganVzdCBsaWtlIHRoaXMgb25lLCBidXQgd2l0aCB0aGVzZSBjaGFuZ2VzXCJcblxuZnVuY3Rpb24gY2xvbmUoZHVyLCBhbHRzLCBjbGVhcikge1xuICBpZiAoY2xlYXIgPT09IHZvaWQgMCkge1xuICAgIGNsZWFyID0gZmFsc2U7XG4gIH1cblxuICAvLyBkZWVwIG1lcmdlIGZvciB2YWxzXG4gIHZhciBjb25mID0ge1xuICAgIHZhbHVlczogY2xlYXIgPyBhbHRzLnZhbHVlcyA6IE9iamVjdC5hc3NpZ24oe30sIGR1ci52YWx1ZXMsIGFsdHMudmFsdWVzIHx8IHt9KSxcbiAgICBsb2M6IGR1ci5sb2MuY2xvbmUoYWx0cy5sb2MpLFxuICAgIGNvbnZlcnNpb25BY2N1cmFjeTogYWx0cy5jb252ZXJzaW9uQWNjdXJhY3kgfHwgZHVyLmNvbnZlcnNpb25BY2N1cmFjeVxuICB9O1xuICByZXR1cm4gbmV3IER1cmF0aW9uKGNvbmYpO1xufVxuXG5mdW5jdGlvbiBhbnRpVHJ1bmMobikge1xuICByZXR1cm4gbiA8IDAgPyBNYXRoLmZsb29yKG4pIDogTWF0aC5jZWlsKG4pO1xufSAvLyBOQjogbXV0YXRlcyBwYXJhbWV0ZXJzXG5cblxuZnVuY3Rpb24gY29udmVydChtYXRyaXgsIGZyb21NYXAsIGZyb21Vbml0LCB0b01hcCwgdG9Vbml0KSB7XG4gIHZhciBjb252ID0gbWF0cml4W3RvVW5pdF1bZnJvbVVuaXRdLFxuICAgICAgcmF3ID0gZnJvbU1hcFtmcm9tVW5pdF0gLyBjb252LFxuICAgICAgc2FtZVNpZ24gPSBNYXRoLnNpZ24ocmF3KSA9PT0gTWF0aC5zaWduKHRvTWFwW3RvVW5pdF0pLFxuICAgICAgLy8gb2ssIHNvIHRoaXMgaXMgd2lsZCwgYnV0IHNlZSB0aGUgbWF0cml4IGluIHRoZSB0ZXN0c1xuICBhZGRlZCA9ICFzYW1lU2lnbiAmJiB0b01hcFt0b1VuaXRdICE9PSAwICYmIE1hdGguYWJzKHJhdykgPD0gMSA/IGFudGlUcnVuYyhyYXcpIDogTWF0aC50cnVuYyhyYXcpO1xuICB0b01hcFt0b1VuaXRdICs9IGFkZGVkO1xuICBmcm9tTWFwW2Zyb21Vbml0XSAtPSBhZGRlZCAqIGNvbnY7XG59IC8vIE5COiBtdXRhdGVzIHBhcmFtZXRlcnNcblxuXG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZXMobWF0cml4LCB2YWxzKSB7XG4gIHJldmVyc2VVbml0cy5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzLCBjdXJyZW50KSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh2YWxzW2N1cnJlbnRdKSkge1xuICAgICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAgIGNvbnZlcnQobWF0cml4LCB2YWxzLCBwcmV2aW91cywgdmFscywgY3VycmVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjdXJyZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJldmlvdXM7XG4gICAgfVxuICB9LCBudWxsKTtcbn1cbi8qKlxuICogQSBEdXJhdGlvbiBvYmplY3QgcmVwcmVzZW50cyBhIHBlcmlvZCBvZiB0aW1lLCBsaWtlIFwiMiBtb250aHNcIiBvciBcIjEgZGF5LCAxIGhvdXJcIi4gQ29uY2VwdHVhbGx5LCBpdCdzIGp1c3QgYSBtYXAgb2YgdW5pdHMgdG8gdGhlaXIgcXVhbnRpdGllcywgYWNjb21wYW5pZWQgYnkgc29tZSBhZGRpdGlvbmFsIGNvbmZpZ3VyYXRpb24gYW5kIG1ldGhvZHMgZm9yIGNyZWF0aW5nLCBwYXJzaW5nLCBpbnRlcnJvZ2F0aW5nLCB0cmFuc2Zvcm1pbmcsIGFuZCBmb3JtYXR0aW5nIHRoZW0uIFRoZXkgY2FuIGJlIHVzZWQgb24gdGhlaXIgb3duIG9yIGluIGNvbmp1bmN0aW9uIHdpdGggb3RoZXIgTHV4b24gdHlwZXM7IGZvciBleGFtcGxlLCB5b3UgY2FuIHVzZSB7QGxpbmsgRGF0ZVRpbWUucGx1c30gdG8gYWRkIGEgRHVyYXRpb24gb2JqZWN0IHRvIGEgRGF0ZVRpbWUsIHByb2R1Y2luZyBhbm90aGVyIERhdGVUaW1lLlxuICpcbiAqIEhlcmUgaXMgYSBicmllZiBvdmVydmlldyBvZiBjb21tb25seSB1c2VkIG1ldGhvZHMgYW5kIGdldHRlcnMgaW4gRHVyYXRpb246XG4gKlxuICogKiAqKkNyZWF0aW9uKiogVG8gY3JlYXRlIGEgRHVyYXRpb24sIHVzZSB7QGxpbmsgRHVyYXRpb24uZnJvbU1pbGxpc30sIHtAbGluayBEdXJhdGlvbi5mcm9tT2JqZWN0fSwgb3Ige0BsaW5rIER1cmF0aW9uLmZyb21JU099LlxuICogKiAqKlVuaXQgdmFsdWVzKiogU2VlIHRoZSB7QGxpbmsgRHVyYXRpb24ueWVhcnN9LCB7QGxpbmsgRHVyYXRpb24ubW9udGhzfSwge0BsaW5rIER1cmF0aW9uLndlZWtzfSwge0BsaW5rIER1cmF0aW9uLmRheXN9LCB7QGxpbmsgRHVyYXRpb24uaG91cnN9LCB7QGxpbmsgRHVyYXRpb24ubWludXRlc30sIHtAbGluayBEdXJhdGlvbi5zZWNvbmRzfSwge0BsaW5rIER1cmF0aW9uLm1pbGxpc2Vjb25kc30gYWNjZXNzb3JzLlxuICogKiAqKkNvbmZpZ3VyYXRpb24qKiBTZWUgIHtAbGluayBEdXJhdGlvbi5sb2NhbGV9IGFuZCB7QGxpbmsgRHVyYXRpb24ubnVtYmVyaW5nU3lzdGVtfSBhY2Nlc3NvcnMuXG4gKiAqICoqVHJhbnNmb3JtYXRpb24qKiBUbyBjcmVhdGUgbmV3IER1cmF0aW9ucyBvdXQgb2Ygb2xkIG9uZXMgdXNlIHtAbGluayBEdXJhdGlvbi5wbHVzfSwge0BsaW5rIER1cmF0aW9uLm1pbnVzfSwge0BsaW5rIER1cmF0aW9uLm5vcm1hbGl6ZX0sIHtAbGluayBEdXJhdGlvbi5zZXR9LCB7QGxpbmsgRHVyYXRpb24ucmVjb25maWd1cmV9LCB7QGxpbmsgRHVyYXRpb24uc2hpZnRUb30sIGFuZCB7QGxpbmsgRHVyYXRpb24ubmVnYXRlfS5cbiAqICogKipPdXRwdXQqKiBUbyBjb252ZXJ0IHRoZSBEdXJhdGlvbiBpbnRvIG90aGVyIHJlcHJlc2VudGF0aW9ucywgc2VlIHtAbGluayBEdXJhdGlvbi5hc30sIHtAbGluayBEdXJhdGlvbi50b0lTT30sIHtAbGluayBEdXJhdGlvbi50b0Zvcm1hdH0sIGFuZCB7QGxpbmsgRHVyYXRpb24udG9KU09OfVxuICpcbiAqIFRoZXJlJ3MgYXJlIG1vcmUgbWV0aG9kcyBkb2N1bWVudGVkIGJlbG93LiBJbiBhZGRpdGlvbiwgZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gc3VidGxlciB0b3BpY3MgbGlrZSBpbnRlcm5hdGlvbmFsaXphdGlvbiBhbmQgdmFsaWRpdHksIHNlZSB0aGUgZXh0ZXJuYWwgZG9jdW1lbnRhdGlvbi5cbiAqL1xuXG5cbnZhciBEdXJhdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gRHVyYXRpb24oY29uZmlnKSB7XG4gICAgdmFyIGFjY3VyYXRlID0gY29uZmlnLmNvbnZlcnNpb25BY2N1cmFjeSA9PT0gXCJsb25ndGVybVwiIHx8IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuXG4gICAgdGhpcy52YWx1ZXMgPSBjb25maWcudmFsdWVzO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuXG4gICAgdGhpcy5sb2MgPSBjb25maWcubG9jIHx8IExvY2FsZS5jcmVhdGUoKTtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cblxuICAgIHRoaXMuY29udmVyc2lvbkFjY3VyYWN5ID0gYWNjdXJhdGUgPyBcImxvbmd0ZXJtXCIgOiBcImNhc3VhbFwiO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuXG4gICAgdGhpcy5pbnZhbGlkID0gY29uZmlnLmludmFsaWQgfHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cblxuICAgIHRoaXMubWF0cml4ID0gYWNjdXJhdGUgPyBhY2N1cmF0ZU1hdHJpeCA6IGNhc3VhbE1hdHJpeDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cblxuICAgIHRoaXMuaXNMdXhvbkR1cmF0aW9uID0gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIER1cmF0aW9uIGZyb20gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gY291bnQgb2YgbWlsbGlzZWNvbmRzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyBmb3IgcGFyc2luZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG5cblxuICBEdXJhdGlvbi5mcm9tTWlsbGlzID0gZnVuY3Rpb24gZnJvbU1pbGxpcyhjb3VudCwgb3B0cykge1xuICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KE9iamVjdC5hc3NpZ24oe1xuICAgICAgbWlsbGlzZWNvbmRzOiBjb3VudFxuICAgIH0sIG9wdHMpKTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBhIEphdmFzY3JpcHQgb2JqZWN0IHdpdGgga2V5cyBsaWtlICd5ZWFycycgYW5kICdob3Vycy5cbiAgICogSWYgdGhpcyBvYmplY3QgaXMgZW1wdHkgdGhlbiBhIHplcm8gbWlsbGlzZWNvbmRzIGR1cmF0aW9uIGlzIHJldHVybmVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gdGhlIG9iamVjdCB0byBjcmVhdGUgdGhlIERhdGVUaW1lIGZyb21cbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai55ZWFyc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnF1YXJ0ZXJzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubW9udGhzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla3NcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5kYXlzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouaG91cnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taW51dGVzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouc2Vjb25kc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbGxpc2Vjb25kc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29iai5sb2NhbGU9J2VuLVVTJ10gLSB0aGUgbG9jYWxlIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29iai5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIDtcblxuICBEdXJhdGlvbi5mcm9tT2JqZWN0ID0gZnVuY3Rpb24gZnJvbU9iamVjdChvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIikge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwiRHVyYXRpb24uZnJvbU9iamVjdDogYXJndW1lbnQgZXhwZWN0ZWQgdG8gYmUgYW4gb2JqZWN0LCBnb3QgXCIgKyAob2JqID09PSBudWxsID8gXCJudWxsXCIgOiB0eXBlb2Ygb2JqKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEdXJhdGlvbih7XG4gICAgICB2YWx1ZXM6IG5vcm1hbGl6ZU9iamVjdChvYmosIER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQsIFtcImxvY2FsZVwiLCBcIm51bWJlcmluZ1N5c3RlbVwiLCBcImNvbnZlcnNpb25BY2N1cmFjeVwiLCBcInpvbmVcIiAvLyBhIGJpdCBvZiBkZWJ0OyBpdCdzIHN1cGVyIGluY29udmVuaWVudCBpbnRlcm5hbGx5IG5vdCB0byBiZSBhYmxlIHRvIGJsaW5kbHkgcGFzcyB0aGlzXG4gICAgICBdKSxcbiAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob2JqKSxcbiAgICAgIGNvbnZlcnNpb25BY2N1cmFjeTogb2JqLmNvbnZlcnNpb25BY2N1cmFjeVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEdXJhdGlvbiBmcm9tIGFuIElTTyA4NjAxIGR1cmF0aW9uIHN0cmluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0ZXh0IHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyBmb3IgcGFyc2luZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI0R1cmF0aW9uc1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPKCdQM1k2TTFXNERUMTJIMzBNNVMnKS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogMywgbW9udGhzOiA2LCB3ZWVrczogMSwgZGF5czogNCwgaG91cnM6IDEyLCBtaW51dGVzOiAzMCwgc2Vjb25kczogNSB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU08oJ1BUMjNIJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDIzIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTTygnUDVZM00nKS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogNSwgbW9udGhzOiAzIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICA7XG5cbiAgRHVyYXRpb24uZnJvbUlTTyA9IGZ1bmN0aW9uIGZyb21JU08odGV4dCwgb3B0cykge1xuICAgIHZhciBfcGFyc2VJU09EdXJhdGlvbiA9IHBhcnNlSVNPRHVyYXRpb24odGV4dCksXG4gICAgICAgIHBhcnNlZCA9IF9wYXJzZUlTT0R1cmF0aW9uWzBdO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgdmFyIG9iaiA9IE9iamVjdC5hc3NpZ24ocGFyc2VkLCBvcHRzKTtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKFwidW5wYXJzYWJsZVwiLCBcInRoZSBpbnB1dCBcXFwiXCIgKyB0ZXh0ICsgXCJcXFwiIGNhbid0IGJlIHBhcnNlZCBhcyBJU08gODYwMVwiKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBpbnZhbGlkIER1cmF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIC0gc2ltcGxlIHN0cmluZyBvZiB3aHkgdGhpcyBkYXRldGltZSBpcyBpbnZhbGlkLiBTaG91bGQgbm90IGNvbnRhaW4gcGFyYW1ldGVycyBvciBhbnl0aGluZyBlbHNlIGRhdGEtZGVwZW5kZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwbGFuYXRpb249bnVsbF0gLSBsb25nZXIgZXhwbGFuYXRpb24sIG1heSBpbmNsdWRlIHBhcmFtZXRlcnMgYW5kIG90aGVyIHVzZWZ1bCBkZWJ1Z2dpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICA7XG5cbiAgRHVyYXRpb24uaW52YWxpZCA9IGZ1bmN0aW9uIGludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbikge1xuICAgIGlmIChleHBsYW5hdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICBleHBsYW5hdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCFyZWFzb24pIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm5lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgRHVyYXRpb24gaXMgaW52YWxpZFwiKTtcbiAgICB9XG5cbiAgICB2YXIgaW52YWxpZCA9IHJlYXNvbiBpbnN0YW5jZW9mIEludmFsaWQgPyByZWFzb24gOiBuZXcgSW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKTtcblxuICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWREdXJhdGlvbkVycm9yKGludmFsaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IER1cmF0aW9uKHtcbiAgICAgICAgaW52YWxpZDogaW52YWxpZFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgO1xuXG4gIER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQgPSBmdW5jdGlvbiBub3JtYWxpemVVbml0KHVuaXQpIHtcbiAgICB2YXIgbm9ybWFsaXplZCA9IHtcbiAgICAgIHllYXI6IFwieWVhcnNcIixcbiAgICAgIHllYXJzOiBcInllYXJzXCIsXG4gICAgICBxdWFydGVyOiBcInF1YXJ0ZXJzXCIsXG4gICAgICBxdWFydGVyczogXCJxdWFydGVyc1wiLFxuICAgICAgbW9udGg6IFwibW9udGhzXCIsXG4gICAgICBtb250aHM6IFwibW9udGhzXCIsXG4gICAgICB3ZWVrOiBcIndlZWtzXCIsXG4gICAgICB3ZWVrczogXCJ3ZWVrc1wiLFxuICAgICAgZGF5OiBcImRheXNcIixcbiAgICAgIGRheXM6IFwiZGF5c1wiLFxuICAgICAgaG91cjogXCJob3Vyc1wiLFxuICAgICAgaG91cnM6IFwiaG91cnNcIixcbiAgICAgIG1pbnV0ZTogXCJtaW51dGVzXCIsXG4gICAgICBtaW51dGVzOiBcIm1pbnV0ZXNcIixcbiAgICAgIHNlY29uZDogXCJzZWNvbmRzXCIsXG4gICAgICBzZWNvbmRzOiBcInNlY29uZHNcIixcbiAgICAgIG1pbGxpc2Vjb25kOiBcIm1pbGxpc2Vjb25kc1wiLFxuICAgICAgbWlsbGlzZWNvbmRzOiBcIm1pbGxpc2Vjb25kc1wiXG4gICAgfVt1bml0ID8gdW5pdC50b0xvd2VyQ2FzZSgpIDogdW5pdF07XG4gICAgaWYgKCFub3JtYWxpemVkKSB0aHJvdyBuZXcgSW52YWxpZFVuaXRFcnJvcih1bml0KTtcbiAgICByZXR1cm4gbm9ybWFsaXplZDtcbiAgfVxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGEgRHVyYXRpb24uIFdvcmtzIGFjcm9zcyBjb250ZXh0IGJvdW5kYXJpZXNcbiAgICogQHBhcmFtIHtvYmplY3R9IG9cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBEdXJhdGlvbi5pc0R1cmF0aW9uID0gZnVuY3Rpb24gaXNEdXJhdGlvbihvKSB7XG4gICAgcmV0dXJuIG8gJiYgby5pc0x1eG9uRHVyYXRpb24gfHwgZmFsc2U7XG4gIH1cbiAgLyoqXG4gICAqIEdldCAgdGhlIGxvY2FsZSBvZiBhIER1cmF0aW9uLCBzdWNoICdlbi1HQidcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIDtcblxuICB2YXIgX3Byb3RvID0gRHVyYXRpb24ucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24gZm9ybWF0dGVkIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGZvcm1hdCBzdHJpbmcuIFlvdSBtYXkgdXNlIHRoZXNlIHRva2VuczpcbiAgICogKiBgU2AgZm9yIG1pbGxpc2Vjb25kc1xuICAgKiAqIGBzYCBmb3Igc2Vjb25kc1xuICAgKiAqIGBtYCBmb3IgbWludXRlc1xuICAgKiAqIGBoYCBmb3IgaG91cnNcbiAgICogKiBgZGAgZm9yIGRheXNcbiAgICogKiBgTWAgZm9yIG1vbnRoc1xuICAgKiAqIGB5YCBmb3IgeWVhcnNcbiAgICogTm90ZXM6XG4gICAqICogQWRkIHBhZGRpbmcgYnkgcmVwZWF0aW5nIHRoZSB0b2tlbiwgZS5nLiBcInl5XCIgcGFkcyB0aGUgeWVhcnMgdG8gdHdvIGRpZ2l0cywgXCJoaGhoXCIgcGFkcyB0aGUgaG91cnMgb3V0IHRvIGZvdXIgZGlnaXRzXG4gICAqICogVGhlIGR1cmF0aW9uIHdpbGwgYmUgY29udmVydGVkIHRvIHRoZSBzZXQgb2YgdW5pdHMgaW4gdGhlIGZvcm1hdCBzdHJpbmcgdXNpbmcge0BsaW5rIER1cmF0aW9uLnNoaWZ0VG99IGFuZCB0aGUgRHVyYXRpb25zJ3MgY29udmVyc2lvbiBhY2N1cmFjeSBzZXR0aW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuZmxvb3I9dHJ1ZV0gLSBmbG9vciBudW1lcmljYWwgdmFsdWVzXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b0Zvcm1hdChcInkgZCBzXCIpIC8vPT4gXCIxIDYgMlwiXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b0Zvcm1hdChcInl5IGRkIHNzc1wiKSAvLz0+IFwiMDEgMDYgMDAyXCJcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvRm9ybWF0KFwiTSBTXCIpIC8vPT4gXCIxMiA1MTg0MDIwMDBcIlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBfcHJvdG8udG9Gb3JtYXQgPSBmdW5jdGlvbiB0b0Zvcm1hdChmbXQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgLy8gcmV2ZXJzZS1jb21wYXQgc2luY2UgMS4yOyB3ZSBhbHdheXMgcm91bmQgZG93biBub3csIG5ldmVyIHVwLCBhbmQgd2UgZG8gaXQgYnkgZGVmYXVsdFxuICAgIHZhciBmbXRPcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0cywge1xuICAgICAgZmxvb3I6IG9wdHMucm91bmQgIT09IGZhbHNlICYmIG9wdHMuZmxvb3IgIT09IGZhbHNlXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MsIGZtdE9wdHMpLmZvcm1hdER1cmF0aW9uRnJvbVN0cmluZyh0aGlzLCBmbXQpIDogSU5WQUxJRDtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIEphdmFzY3JpcHQgb2JqZWN0IHdpdGggdGhpcyBEdXJhdGlvbidzIHZhbHVlcy5cbiAgICogQHBhcmFtIG9wdHMgLSBvcHRpb25zIGZvciBnZW5lcmF0aW5nIHRoZSBvYmplY3RcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlQ29uZmlnPWZhbHNlXSAtIGluY2x1ZGUgY29uZmlndXJhdGlvbiBhdHRyaWJ1dGVzIGluIHRoZSBvdXRwdXRcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b09iamVjdCA9IGZ1bmN0aW9uIHRvT2JqZWN0KG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB7fTtcbiAgICB2YXIgYmFzZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudmFsdWVzKTtcblxuICAgIGlmIChvcHRzLmluY2x1ZGVDb25maWcpIHtcbiAgICAgIGJhc2UuY29udmVyc2lvbkFjY3VyYWN5ID0gdGhpcy5jb252ZXJzaW9uQWNjdXJhY3k7XG4gICAgICBiYXNlLm51bWJlcmluZ1N5c3RlbSA9IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbTtcbiAgICAgIGJhc2UubG9jYWxlID0gdGhpcy5sb2MubG9jYWxlO1xuICAgIH1cblxuICAgIHJldHVybiBiYXNlO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbi5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNEdXJhdGlvbnNcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAzLCBzZWNvbmRzOiA0NSB9KS50b0lTTygpIC8vPT4gJ1AzWVQ0NVMnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtb250aHM6IDQsIHNlY29uZHM6IDQ1IH0pLnRvSVNPKCkgLy89PiAnUDRNVDQ1UydcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1vbnRoczogNSB9KS50b0lTTygpIC8vPT4gJ1A1TSdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1pbnV0ZXM6IDUgfSkudG9JU08oKSAvLz0+ICdQVDVNJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbWlsbGlzZWNvbmRzOiA2IH0pLnRvSVNPKCkgLy89PiAnUFQwLjAwNlMnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9JU08gPSBmdW5jdGlvbiB0b0lTTygpIHtcbiAgICAvLyB3ZSBjb3VsZCB1c2UgdGhlIGZvcm1hdHRlciwgYnV0IHRoaXMgaXMgYW4gZWFzaWVyIHdheSB0byBnZXQgdGhlIG1pbmltdW0gc3RyaW5nXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBudWxsO1xuICAgIHZhciBzID0gXCJQXCI7XG4gICAgaWYgKHRoaXMueWVhcnMgIT09IDApIHMgKz0gdGhpcy55ZWFycyArIFwiWVwiO1xuICAgIGlmICh0aGlzLm1vbnRocyAhPT0gMCB8fCB0aGlzLnF1YXJ0ZXJzICE9PSAwKSBzICs9IHRoaXMubW9udGhzICsgdGhpcy5xdWFydGVycyAqIDMgKyBcIk1cIjtcbiAgICBpZiAodGhpcy53ZWVrcyAhPT0gMCkgcyArPSB0aGlzLndlZWtzICsgXCJXXCI7XG4gICAgaWYgKHRoaXMuZGF5cyAhPT0gMCkgcyArPSB0aGlzLmRheXMgKyBcIkRcIjtcbiAgICBpZiAodGhpcy5ob3VycyAhPT0gMCB8fCB0aGlzLm1pbnV0ZXMgIT09IDAgfHwgdGhpcy5zZWNvbmRzICE9PSAwIHx8IHRoaXMubWlsbGlzZWNvbmRzICE9PSAwKSBzICs9IFwiVFwiO1xuICAgIGlmICh0aGlzLmhvdXJzICE9PSAwKSBzICs9IHRoaXMuaG91cnMgKyBcIkhcIjtcbiAgICBpZiAodGhpcy5taW51dGVzICE9PSAwKSBzICs9IHRoaXMubWludXRlcyArIFwiTVwiO1xuICAgIGlmICh0aGlzLnNlY29uZHMgIT09IDAgfHwgdGhpcy5taWxsaXNlY29uZHMgIT09IDApIC8vIHRoaXMgd2lsbCBoYW5kbGUgXCJmbG9hdGluZyBwb2ludCBtYWRuZXNzXCIgYnkgcmVtb3ZpbmcgZXh0cmEgZGVjaW1hbCBwbGFjZXNcbiAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU4ODAwNC9pcy1mbG9hdGluZy1wb2ludC1tYXRoLWJyb2tlblxuICAgICAgcyArPSByb3VuZFRvKHRoaXMuc2Vjb25kcyArIHRoaXMubWlsbGlzZWNvbmRzIC8gMTAwMCwgMykgKyBcIlNcIjtcbiAgICBpZiAocyA9PT0gXCJQXCIpIHMgKz0gXCJUMFNcIjtcbiAgICByZXR1cm4gcztcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gSlNPTi5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9JU08oKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gZGVidWdnaW5nLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9JU08oKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhbiBtaWxsaXNlY29uZHMgdmFsdWUgb2YgdGhpcyBEdXJhdGlvbi5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by52YWx1ZU9mID0gZnVuY3Rpb24gdmFsdWVPZigpIHtcbiAgICByZXR1cm4gdGhpcy5hcyhcIm1pbGxpc2Vjb25kc1wiKTtcbiAgfVxuICAvKipcbiAgICogTWFrZSB0aGlzIER1cmF0aW9uIGxvbmdlciBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIGFkZC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnBsdXMgPSBmdW5jdGlvbiBwbHVzKGR1cmF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHZhciBkdXIgPSBmcmllbmRseUR1cmF0aW9uKGR1cmF0aW9uKSxcbiAgICAgICAgcmVzdWx0ID0ge307XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKG9yZGVyZWRVbml0cyksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgayA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkoZHVyLnZhbHVlcywgaykgfHwgaGFzT3duUHJvcGVydHkodGhpcy52YWx1ZXMsIGspKSB7XG4gICAgICAgIHJlc3VsdFtrXSA9IGR1ci5nZXQoaykgKyB0aGlzLmdldChrKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmUodGhpcywge1xuICAgICAgdmFsdWVzOiByZXN1bHRcbiAgICB9LCB0cnVlKTtcbiAgfVxuICAvKipcbiAgICogTWFrZSB0aGlzIER1cmF0aW9uIHNob3J0ZXIgYnkgdGhlIHNwZWNpZmllZCBhbW91bnQuIFJldHVybiBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBzdWJ0cmFjdC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm1pbnVzID0gZnVuY3Rpb24gbWludXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIGR1ciA9IGZyaWVuZGx5RHVyYXRpb24oZHVyYXRpb24pO1xuICAgIHJldHVybiB0aGlzLnBsdXMoZHVyLm5lZ2F0ZSgpKTtcbiAgfVxuICAvKipcbiAgICogU2NhbGUgdGhpcyBEdXJhdGlvbiBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggdW5pdC4gQXJpdHkgaXMgMSBvciAyOiB0aGUgdmFsdWUgb2YgdGhlIHVuaXQgYW5kLCBvcHRpb25hbGx5LCB0aGUgdW5pdCBuYW1lLiBNdXN0IHJldHVybiBhIG51bWJlci5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBtaW51dGVzOiAzMCB9KS5tYXBVbml0KHggPT4geCAqIDIpIC8vPT4geyBob3VyczogMiwgbWludXRlczogNjAgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIG1pbnV0ZXM6IDMwIH0pLm1hcFVuaXQoKHgsIHUpID0+IHUgPT09IFwiaG91clwiID8geCAqIDIgOiB4KSAvLz0+IHsgaG91cnM6IDIsIG1pbnV0ZXM6IDMwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm1hcFVuaXRzID0gZnVuY3Rpb24gbWFwVW5pdHMoZm4pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfT2JqZWN0JGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnZhbHVlcyk7IF9pIDwgX09iamVjdCRrZXlzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGsgPSBfT2JqZWN0JGtleXNbX2ldO1xuICAgICAgcmVzdWx0W2tdID0gYXNOdW1iZXIoZm4odGhpcy52YWx1ZXNba10sIGspKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmUodGhpcywge1xuICAgICAgdmFsdWVzOiByZXN1bHRcbiAgICB9LCB0cnVlKTtcbiAgfVxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvZiB1bml0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIGEgdW5pdCBzdWNoIGFzICdtaW51dGUnIG9yICdkYXknXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAyLCBkYXlzOiAzfSkueWVhcnMgLy89PiAyXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAyLCBkYXlzOiAzfSkubW9udGhzIC8vPT4gMFxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMiwgZGF5czogM30pLmRheXMgLy89PiAzXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZ2V0ID0gZnVuY3Rpb24gZ2V0KHVuaXQpIHtcbiAgICByZXR1cm4gdGhpc1tEdXJhdGlvbi5ub3JtYWxpemVVbml0KHVuaXQpXTtcbiAgfVxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgdmFsdWVzIG9mIHNwZWNpZmllZCB1bml0cy4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSBhIG1hcHBpbmcgb2YgdW5pdHMgdG8gbnVtYmVyc1xuICAgKiBAZXhhbXBsZSBkdXIuc2V0KHsgeWVhcnM6IDIwMTcgfSlcbiAgICogQGV4YW1wbGUgZHVyLnNldCh7IGhvdXJzOiA4LCBtaW51dGVzOiAzMCB9KVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2V0ID0gZnVuY3Rpb24gc2V0KHZhbHVlcykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgbWl4ZWQgPSBPYmplY3QuYXNzaWduKHRoaXMudmFsdWVzLCBub3JtYWxpemVPYmplY3QodmFsdWVzLCBEdXJhdGlvbi5ub3JtYWxpemVVbml0LCBbXSkpO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7XG4gICAgICB2YWx1ZXM6IG1peGVkXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIGxvY2FsZSBhbmQvb3IgbnVtYmVyaW5nU3lzdGVtLiAgUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxuICAgKiBAZXhhbXBsZSBkdXIucmVjb25maWd1cmUoeyBsb2NhbGU6ICdlbi1HQicgfSlcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlY29uZmlndXJlID0gZnVuY3Rpb24gcmVjb25maWd1cmUoX3RlbXApIHtcbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBsb2NhbGUgPSBfcmVmLmxvY2FsZSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX3JlZi5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIGNvbnZlcnNpb25BY2N1cmFjeSA9IF9yZWYuY29udmVyc2lvbkFjY3VyYWN5O1xuXG4gICAgdmFyIGxvYyA9IHRoaXMubG9jLmNsb25lKHtcbiAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgbnVtYmVyaW5nU3lzdGVtOiBudW1iZXJpbmdTeXN0ZW1cbiAgICB9KSxcbiAgICAgICAgb3B0cyA9IHtcbiAgICAgIGxvYzogbG9jXG4gICAgfTtcblxuICAgIGlmIChjb252ZXJzaW9uQWNjdXJhY3kpIHtcbiAgICAgIG9wdHMuY29udmVyc2lvbkFjY3VyYWN5ID0gY29udmVyc2lvbkFjY3VyYWN5O1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZSh0aGlzLCBvcHRzKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsZW5ndGggb2YgdGhlIGR1cmF0aW9uIGluIHRoZSBzcGVjaWZpZWQgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBhIHVuaXQgc3VjaCBhcyAnbWludXRlcycgb3IgJ2RheXMnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAxfSkuYXMoJ2RheXMnKSAvLz0+IDM2NVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMX0pLmFzKCdtb250aHMnKSAvLz0+IDEyXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe2hvdXJzOiA2MH0pLmFzKCdkYXlzJykgLy89PiAyLjVcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5hcyA9IGZ1bmN0aW9uIGFzKHVuaXQpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5zaGlmdFRvKHVuaXQpLmdldCh1bml0KSA6IE5hTjtcbiAgfVxuICAvKipcbiAgICogUmVkdWNlIHRoaXMgRHVyYXRpb24gdG8gaXRzIGNhbm9uaWNhbCByZXByZXNlbnRhdGlvbiBpbiBpdHMgY3VycmVudCB1bml0cy5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAyLCBkYXlzOiA1MDAwIH0pLm5vcm1hbGl6ZSgpLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAxNSwgZGF5czogMjU1IH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMiwgbWludXRlczogLTQ1IH0pLm5vcm1hbGl6ZSgpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMTUgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ubm9ybWFsaXplID0gZnVuY3Rpb24gbm9ybWFsaXplKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgdmFscyA9IHRoaXMudG9PYmplY3QoKTtcbiAgICBub3JtYWxpemVWYWx1ZXModGhpcy5tYXRyaXgsIHZhbHMpO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7XG4gICAgICB2YWx1ZXM6IHZhbHNcbiAgICB9LCB0cnVlKTtcbiAgfVxuICAvKipcbiAgICogQ29udmVydCB0aGlzIER1cmF0aW9uIGludG8gaXRzIHJlcHJlc2VudGF0aW9uIGluIGEgZGlmZmVyZW50IHNldCBvZiB1bml0cy5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBzZWNvbmRzOiAzMCB9KS5zaGlmdFRvKCdtaW51dGVzJywgJ21pbGxpc2Vjb25kcycpLnRvT2JqZWN0KCkgLy89PiB7IG1pbnV0ZXM6IDYwLCBtaWxsaXNlY29uZHM6IDMwMDAwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNoaWZ0VG8gPSBmdW5jdGlvbiBzaGlmdFRvKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB1bml0cyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIHVuaXRzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcblxuICAgIGlmICh1bml0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHVuaXRzID0gdW5pdHMubWFwKGZ1bmN0aW9uICh1KSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24ubm9ybWFsaXplVW5pdCh1KTtcbiAgICB9KTtcbiAgICB2YXIgYnVpbHQgPSB7fSxcbiAgICAgICAgYWNjdW11bGF0ZWQgPSB7fSxcbiAgICAgICAgdmFscyA9IHRoaXMudG9PYmplY3QoKTtcbiAgICB2YXIgbGFzdFVuaXQ7XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShvcmRlcmVkVW5pdHMpLCBfc3RlcDI7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMigpKS5kb25lOykge1xuICAgICAgdmFyIGsgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgIGlmICh1bml0cy5pbmRleE9mKGspID49IDApIHtcbiAgICAgICAgbGFzdFVuaXQgPSBrO1xuICAgICAgICB2YXIgb3duID0gMDsgLy8gYW55dGhpbmcgd2UgaGF2ZW4ndCBib2lsZWQgZG93biB5ZXQgc2hvdWxkIGdldCBib2lsZWQgdG8gdGhpcyB1bml0XG5cbiAgICAgICAgZm9yICh2YXIgYWsgaW4gYWNjdW11bGF0ZWQpIHtcbiAgICAgICAgICBvd24gKz0gdGhpcy5tYXRyaXhbYWtdW2tdICogYWNjdW11bGF0ZWRbYWtdO1xuICAgICAgICAgIGFjY3VtdWxhdGVkW2FrXSA9IDA7XG4gICAgICAgIH0gLy8gcGx1cyBhbnl0aGluZyB0aGF0J3MgYWxyZWFkeSBpbiB0aGlzIHVuaXRcblxuXG4gICAgICAgIGlmIChpc051bWJlcih2YWxzW2tdKSkge1xuICAgICAgICAgIG93biArPSB2YWxzW2tdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGkgPSBNYXRoLnRydW5jKG93bik7XG4gICAgICAgIGJ1aWx0W2tdID0gaTtcbiAgICAgICAgYWNjdW11bGF0ZWRba10gPSBvd24gLSBpOyAvLyB3ZSdkIGxpa2UgdG8gYWJzb3JiIHRoZXNlIGZyYWN0aW9ucyBpbiBhbm90aGVyIHVuaXRcbiAgICAgICAgLy8gcGx1cyBhbnl0aGluZyBmdXJ0aGVyIGRvd24gdGhlIGNoYWluIHRoYXQgc2hvdWxkIGJlIHJvbGxlZCB1cCBpbiB0byB0aGlzXG5cbiAgICAgICAgZm9yICh2YXIgZG93biBpbiB2YWxzKSB7XG4gICAgICAgICAgaWYgKG9yZGVyZWRVbml0cy5pbmRleE9mKGRvd24pID4gb3JkZXJlZFVuaXRzLmluZGV4T2YoaykpIHtcbiAgICAgICAgICAgIGNvbnZlcnQodGhpcy5tYXRyaXgsIHZhbHMsIGRvd24sIGJ1aWx0LCBrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gb3RoZXJ3aXNlLCBrZWVwIGl0IGluIHRoZSB3aW5ncyB0byBib2lsIGl0IGxhdGVyXG5cbiAgICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIodmFsc1trXSkpIHtcbiAgICAgICAgYWNjdW11bGF0ZWRba10gPSB2YWxzW2tdO1xuICAgICAgfVxuICAgIH0gLy8gYW55dGhpbmcgbGVmdG92ZXIgYmVjb21lcyB0aGUgZGVjaW1hbCBmb3IgdGhlIGxhc3QgdW5pdFxuICAgIC8vIGxhc3RVbml0IG11c3QgYmUgZGVmaW5lZCBzaW5jZSB1bml0cyBpcyBub3QgZW1wdHlcblxuXG4gICAgZm9yICh2YXIga2V5IGluIGFjY3VtdWxhdGVkKSB7XG4gICAgICBpZiAoYWNjdW11bGF0ZWRba2V5XSAhPT0gMCkge1xuICAgICAgICBidWlsdFtsYXN0VW5pdF0gKz0ga2V5ID09PSBsYXN0VW5pdCA/IGFjY3VtdWxhdGVkW2tleV0gOiBhY2N1bXVsYXRlZFtrZXldIC8gdGhpcy5tYXRyaXhbbGFzdFVuaXRdW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHtcbiAgICAgIHZhbHVlczogYnVpbHRcbiAgICB9LCB0cnVlKS5ub3JtYWxpemUoKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHRoZSBuZWdhdGl2ZSBvZiB0aGlzIER1cmF0aW9uLlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIHNlY29uZHM6IDMwIH0pLm5lZ2F0ZSgpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAtMSwgc2Vjb25kczogLTMwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm5lZ2F0ZSA9IGZ1bmN0aW9uIG5lZ2F0ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIG5lZ2F0ZWQgPSB7fTtcblxuICAgIGZvciAodmFyIF9pMiA9IDAsIF9PYmplY3Qka2V5czIgPSBPYmplY3Qua2V5cyh0aGlzLnZhbHVlcyk7IF9pMiA8IF9PYmplY3Qka2V5czIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGsgPSBfT2JqZWN0JGtleXMyW19pMl07XG4gICAgICBuZWdhdGVkW2tdID0gLXRoaXMudmFsdWVzW2tdO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7XG4gICAgICB2YWx1ZXM6IG5lZ2F0ZWRcbiAgICB9LCB0cnVlKTtcbiAgfVxuICAvKipcbiAgICogR2V0IHRoZSB5ZWFycy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIDtcblxuICAvKipcbiAgICogRXF1YWxpdHkgY2hlY2tcbiAgICogVHdvIER1cmF0aW9ucyBhcmUgZXF1YWwgaWZmIHRoZXkgaGF2ZSB0aGUgc2FtZSB1bml0cyBhbmQgdGhlIHNhbWUgdmFsdWVzIGZvciBlYWNoIHVuaXQuXG4gICAqIEBwYXJhbSB7RHVyYXRpb259IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBfcHJvdG8uZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubG9jLmVxdWFscyhvdGhlci5sb2MpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2Uob3JkZXJlZFVuaXRzKSwgX3N0ZXAzOyAhKF9zdGVwMyA9IF9pdGVyYXRvcjMoKSkuZG9uZTspIHtcbiAgICAgIHZhciB1ID0gX3N0ZXAzLnZhbHVlO1xuXG4gICAgICBpZiAodGhpcy52YWx1ZXNbdV0gIT09IG90aGVyLnZhbHVlc1t1XSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKER1cmF0aW9uLCBbe1xuICAgIGtleTogXCJsb2NhbGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5sb2NhbGUgOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG51bWJlcmluZyBzeXN0ZW0gb2YgYSBEdXJhdGlvbiwgc3VjaCAnYmVuZycuIFRoZSBudW1iZXJpbmcgc3lzdGVtIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEdXJhdGlvblxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlcmluZ1N5c3RlbVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbSA6IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInllYXJzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMueWVhcnMgfHwgMCA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBxdWFydGVycy5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicXVhcnRlcnNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5xdWFydGVycyB8fCAwIDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1vbnRocy5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibW9udGhzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMubW9udGhzIHx8IDAgOiBOYU47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgd2Vla3NcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwid2Vla3NcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy53ZWVrcyB8fCAwIDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRheXMuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRheXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5kYXlzIHx8IDAgOiBOYU47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaG91cnMuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImhvdXJzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMuaG91cnMgfHwgMCA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtaW51dGVzLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtaW51dGVzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMubWludXRlcyB8fCAwIDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHNlY29uZHMuXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2Vjb25kc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLnNlY29uZHMgfHwgMCA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtaWxsaXNlY29uZHMuXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWlsbGlzZWNvbmRzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMubWlsbGlzZWNvbmRzIHx8IDAgOiBOYU47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgRHVyYXRpb24gaXMgaW52YWxpZC4gSW52YWxpZCBkdXJhdGlvbnMgYXJlIHJldHVybmVkIGJ5IGRpZmYgb3BlcmF0aW9uc1xuICAgICAqIG9uIGludmFsaWQgRGF0ZVRpbWVzIG9yIEludGVydmFscy5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNWYWxpZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZCA9PT0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBlcnJvciBjb2RlIGlmIHRoaXMgRHVyYXRpb24gYmVjYW1lIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIER1cmF0aW9uIGlzIHZhbGlkXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW52YWxpZFJlYXNvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5yZWFzb24gOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGV4cGxhbmF0aW9uIG9mIHdoeSB0aGlzIER1cmF0aW9uIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEdXJhdGlvbiBpcyB2YWxpZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpbnZhbGlkRXhwbGFuYXRpb25cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQuZXhwbGFuYXRpb24gOiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEdXJhdGlvbjtcbn0oKTtcbmZ1bmN0aW9uIGZyaWVuZGx5RHVyYXRpb24oZHVyYXRpb25pc2gpIHtcbiAgaWYgKGlzTnVtYmVyKGR1cmF0aW9uaXNoKSkge1xuICAgIHJldHVybiBEdXJhdGlvbi5mcm9tTWlsbGlzKGR1cmF0aW9uaXNoKTtcbiAgfSBlbHNlIGlmIChEdXJhdGlvbi5pc0R1cmF0aW9uKGR1cmF0aW9uaXNoKSkge1xuICAgIHJldHVybiBkdXJhdGlvbmlzaDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZHVyYXRpb25pc2ggPT09IFwib2JqZWN0XCIpIHtcbiAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChkdXJhdGlvbmlzaCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwiVW5rbm93biBkdXJhdGlvbiBhcmd1bWVudCBcIiArIGR1cmF0aW9uaXNoICsgXCIgb2YgdHlwZSBcIiArIHR5cGVvZiBkdXJhdGlvbmlzaCk7XG4gIH1cbn1cblxudmFyIElOVkFMSUQkMSA9IFwiSW52YWxpZCBJbnRlcnZhbFwiOyAvLyBjaGVja3MgaWYgdGhlIHN0YXJ0IGlzIGVxdWFsIHRvIG9yIGJlZm9yZSB0aGUgZW5kXG5cbmZ1bmN0aW9uIHZhbGlkYXRlU3RhcnRFbmQoc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0IHx8ICFzdGFydC5pc1ZhbGlkKSB7XG4gICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoXCJtaXNzaW5nIG9yIGludmFsaWQgc3RhcnRcIik7XG4gIH0gZWxzZSBpZiAoIWVuZCB8fCAhZW5kLmlzVmFsaWQpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcIm1pc3Npbmcgb3IgaW52YWxpZCBlbmRcIik7XG4gIH0gZWxzZSBpZiAoZW5kIDwgc3RhcnQpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcImVuZCBiZWZvcmUgc3RhcnRcIiwgXCJUaGUgZW5kIG9mIGFuIGludGVydmFsIG11c3QgYmUgYWZ0ZXIgaXRzIHN0YXJ0LCBidXQgeW91IGhhZCBzdGFydD1cIiArIHN0YXJ0LnRvSVNPKCkgKyBcIiBhbmQgZW5kPVwiICsgZW5kLnRvSVNPKCkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4vKipcbiAqIEFuIEludGVydmFsIG9iamVjdCByZXByZXNlbnRzIGEgaGFsZi1vcGVuIGludGVydmFsIG9mIHRpbWUsIHdoZXJlIGVhY2ggZW5kcG9pbnQgaXMgYSB7QGxpbmsgRGF0ZVRpbWV9LiBDb25jZXB0dWFsbHksIGl0J3MgYSBjb250YWluZXIgZm9yIHRob3NlIHR3byBlbmRwb2ludHMsIGFjY29tcGFuaWVkIGJ5IG1ldGhvZHMgZm9yIGNyZWF0aW5nLCBwYXJzaW5nLCBpbnRlcnJvZ2F0aW5nLCBjb21wYXJpbmcsIHRyYW5zZm9ybWluZywgYW5kIGZvcm1hdHRpbmcgdGhlbS5cbiAqXG4gKiBIZXJlIGlzIGEgYnJpZWYgb3ZlcnZpZXcgb2YgdGhlIG1vc3QgY29tbW9ubHkgdXNlZCBtZXRob2RzIGFuZCBnZXR0ZXJzIGluIEludGVydmFsOlxuICpcbiAqICogKipDcmVhdGlvbioqIFRvIGNyZWF0ZSBhbiBJbnRlcnZhbCwgdXNlIHtAbGluayBmcm9tRGF0ZVRpbWVzfSwge0BsaW5rIGFmdGVyfSwge0BsaW5rIGJlZm9yZX0sIG9yIHtAbGluayBmcm9tSVNPfS5cbiAqICogKipBY2Nlc3NvcnMqKiBVc2Uge0BsaW5rIHN0YXJ0fSBhbmQge0BsaW5rIGVuZH0gdG8gZ2V0IHRoZSBzdGFydCBhbmQgZW5kLlxuICogKiAqKkludGVycm9nYXRpb24qKiBUbyBhbmFseXplIHRoZSBJbnRlcnZhbCwgdXNlIHtAbGluayBjb3VudH0sIHtAbGluayBsZW5ndGh9LCB7QGxpbmsgaGFzU2FtZX0sIHtAbGluayBjb250YWluc30sIHtAbGluayBpc0FmdGVyfSwgb3Ige0BsaW5rIGlzQmVmb3JlfS5cbiAqICogKipUcmFuc2Zvcm1hdGlvbioqIFRvIGNyZWF0ZSBvdGhlciBJbnRlcnZhbHMgb3V0IG9mIHRoaXMgb25lLCB1c2Uge0BsaW5rIHNldH0sIHtAbGluayBzcGxpdEF0fSwge0BsaW5rIHNwbGl0Qnl9LCB7QGxpbmsgZGl2aWRlRXF1YWxseX0sIHtAbGluayBtZXJnZX0sIHtAbGluayB4b3J9LCB7QGxpbmsgdW5pb259LCB7QGxpbmsgaW50ZXJzZWN0aW9ufSwgb3Ige0BsaW5rIGRpZmZlcmVuY2V9LlxuICogKiAqKkNvbXBhcmlzb24qKiBUbyBjb21wYXJlIHRoaXMgSW50ZXJ2YWwgdG8gYW5vdGhlciBvbmUsIHVzZSB7QGxpbmsgZXF1YWxzfSwge0BsaW5rIG92ZXJsYXBzfSwge0BsaW5rIGFidXRzU3RhcnR9LCB7QGxpbmsgYWJ1dHNFbmR9LCB7QGxpbmsgZW5ndWxmc30uXG4gKiAqICoqT3V0cHV0KiogVG8gY29udmVydCB0aGUgSW50ZXJ2YWwgaW50byBvdGhlciByZXByZXNlbnRhdGlvbnMsIHNlZSB7QGxpbmsgdG9TdHJpbmd9LCB7QGxpbmsgdG9JU099LCB7QGxpbmsgdG9JU09EYXRlfSwge0BsaW5rIHRvSVNPVGltZX0sIHtAbGluayB0b0Zvcm1hdH0sIGFuZCB7QGxpbmsgdG9EdXJhdGlvbn0uXG4gKi9cblxuXG52YXIgSW50ZXJ2YWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIEludGVydmFsKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucyA9IGNvbmZpZy5zdGFydDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cblxuICAgIHRoaXMuZSA9IGNvbmZpZy5lbmQ7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG5cbiAgICB0aGlzLmludmFsaWQgPSBjb25maWcuaW52YWxpZCB8fCBudWxsO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuXG4gICAgdGhpcy5pc0x1eG9uSW50ZXJ2YWwgPSB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gaW52YWxpZCBJbnRlcnZhbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiAtIHNpbXBsZSBzdHJpbmcgb2Ygd2h5IHRoaXMgSW50ZXJ2YWwgaXMgaW52YWxpZC4gU2hvdWxkIG5vdCBjb250YWluIHBhcmFtZXRlcnMgb3IgYW55dGhpbmcgZWxzZSBkYXRhLWRlcGVuZGVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2V4cGxhbmF0aW9uPW51bGxdIC0gbG9uZ2VyIGV4cGxhbmF0aW9uLCBtYXkgaW5jbHVkZSBwYXJhbWV0ZXJzIGFuZCBvdGhlciB1c2VmdWwgZGVidWdnaW5nIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cblxuXG4gIEludGVydmFsLmludmFsaWQgPSBmdW5jdGlvbiBpbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pIHtcbiAgICBpZiAoZXhwbGFuYXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgZXhwbGFuYXRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIGlmICghcmVhc29uKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJuZWVkIHRvIHNwZWNpZnkgYSByZWFzb24gdGhlIEludGVydmFsIGlzIGludmFsaWRcIik7XG4gICAgfVxuXG4gICAgdmFyIGludmFsaWQgPSByZWFzb24gaW5zdGFuY2VvZiBJbnZhbGlkID8gcmVhc29uIDogbmV3IEludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbik7XG5cbiAgICBpZiAoU2V0dGluZ3MudGhyb3dPbkludmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkSW50ZXJ2YWxFcnJvcihpbnZhbGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBJbnRlcnZhbCh7XG4gICAgICAgIGludmFsaWQ6IGludmFsaWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYSBzdGFydCBEYXRlVGltZSBhbmQgYW4gZW5kIERhdGVUaW1lLiBJbmNsdXNpdmUgb2YgdGhlIHN0YXJ0IGJ1dCBub3QgdGhlIGVuZC5cbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gc3RhcnRcbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gZW5kXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgO1xuXG4gIEludGVydmFsLmZyb21EYXRlVGltZXMgPSBmdW5jdGlvbiBmcm9tRGF0ZVRpbWVzKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgYnVpbHRTdGFydCA9IGZyaWVuZGx5RGF0ZVRpbWUoc3RhcnQpLFxuICAgICAgICBidWlsdEVuZCA9IGZyaWVuZGx5RGF0ZVRpbWUoZW5kKTtcbiAgICB2YXIgdmFsaWRhdGVFcnJvciA9IHZhbGlkYXRlU3RhcnRFbmQoYnVpbHRTdGFydCwgYnVpbHRFbmQpO1xuXG4gICAgaWYgKHZhbGlkYXRlRXJyb3IgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5ldyBJbnRlcnZhbCh7XG4gICAgICAgIHN0YXJ0OiBidWlsdFN0YXJ0LFxuICAgICAgICBlbmQ6IGJ1aWx0RW5kXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlRXJyb3I7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhIHN0YXJ0IERhdGVUaW1lIGFuZCBhIER1cmF0aW9uIHRvIGV4dGVuZCB0by5cbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gc3RhcnRcbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIHRoZSBsZW5ndGggb2YgdGhlIEludGVydmFsLlxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIDtcblxuICBJbnRlcnZhbC5hZnRlciA9IGZ1bmN0aW9uIGFmdGVyKHN0YXJ0LCBkdXJhdGlvbikge1xuICAgIHZhciBkdXIgPSBmcmllbmRseUR1cmF0aW9uKGR1cmF0aW9uKSxcbiAgICAgICAgZHQgPSBmcmllbmRseURhdGVUaW1lKHN0YXJ0KTtcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdCwgZHQucGx1cyhkdXIpKTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYW4gZW5kIERhdGVUaW1lIGFuZCBhIER1cmF0aW9uIHRvIGV4dGVuZCBiYWNrd2FyZHMgdG8uXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV8RGF0ZXxPYmplY3R9IGVuZFxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gdGhlIGxlbmd0aCBvZiB0aGUgSW50ZXJ2YWwuXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgO1xuXG4gIEludGVydmFsLmJlZm9yZSA9IGZ1bmN0aW9uIGJlZm9yZShlbmQsIGR1cmF0aW9uKSB7XG4gICAgdmFyIGR1ciA9IGZyaWVuZGx5RHVyYXRpb24oZHVyYXRpb24pLFxuICAgICAgICBkdCA9IGZyaWVuZGx5RGF0ZVRpbWUoZW5kKTtcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdC5taW51cyhkdXIpLCBkdCk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBJbnRlcnZhbCBmcm9tIGFuIElTTyA4NjAxIHN0cmluZy5cbiAgICogQWNjZXB0cyBgPHN0YXJ0Pi88ZW5kPmAsIGA8c3RhcnQ+LzxkdXJhdGlvbj5gLCBhbmQgYDxkdXJhdGlvbj4vPGVuZD5gIGZvcm1hdHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIElTTyBzdHJpbmcgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzXSAtIG9wdGlvbnMgdG8gcGFzcyB7QGxpbmsgRGF0ZVRpbWUuZnJvbUlTT30gYW5kIG9wdGlvbmFsbHkge0BsaW5rIER1cmF0aW9uLmZyb21JU099XG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICA7XG5cbiAgSW50ZXJ2YWwuZnJvbUlTTyA9IGZ1bmN0aW9uIGZyb21JU08odGV4dCwgb3B0cykge1xuICAgIHZhciBfc3BsaXQgPSAodGV4dCB8fCBcIlwiKS5zcGxpdChcIi9cIiwgMiksXG4gICAgICAgIHMgPSBfc3BsaXRbMF0sXG4gICAgICAgIGUgPSBfc3BsaXRbMV07XG5cbiAgICBpZiAocyAmJiBlKSB7XG4gICAgICB2YXIgc3RhcnQsIHN0YXJ0SXNWYWxpZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgc3RhcnQgPSBEYXRlVGltZS5mcm9tSVNPKHMsIG9wdHMpO1xuICAgICAgICBzdGFydElzVmFsaWQgPSBzdGFydC5pc1ZhbGlkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzdGFydElzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGVuZCwgZW5kSXNWYWxpZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZW5kID0gRGF0ZVRpbWUuZnJvbUlTTyhlLCBvcHRzKTtcbiAgICAgICAgZW5kSXNWYWxpZCA9IGVuZC5pc1ZhbGlkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBlbmRJc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydElzVmFsaWQgJiYgZW5kSXNWYWxpZCkge1xuICAgICAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzdGFydCwgZW5kKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXJ0SXNWYWxpZCkge1xuICAgICAgICB2YXIgZHVyID0gRHVyYXRpb24uZnJvbUlTTyhlLCBvcHRzKTtcblxuICAgICAgICBpZiAoZHVyLmlzVmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4gSW50ZXJ2YWwuYWZ0ZXIoc3RhcnQsIGR1cik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kSXNWYWxpZCkge1xuICAgICAgICB2YXIgX2R1ciA9IER1cmF0aW9uLmZyb21JU08ocywgb3B0cyk7XG5cbiAgICAgICAgaWYgKF9kdXIuaXNWYWxpZCkge1xuICAgICAgICAgIHJldHVybiBJbnRlcnZhbC5iZWZvcmUoZW5kLCBfZHVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbnRlcnZhbC5pbnZhbGlkKFwidW5wYXJzYWJsZVwiLCBcInRoZSBpbnB1dCBcXFwiXCIgKyB0ZXh0ICsgXCJcXFwiIGNhbid0IGJlIHBhcnNlZCBhcyBJU08gODYwMVwiKTtcbiAgfVxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGFuIEludGVydmFsLiBXb3JrcyBhY3Jvc3MgY29udGV4dCBib3VuZGFyaWVzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgSW50ZXJ2YWwuaXNJbnRlcnZhbCA9IGZ1bmN0aW9uIGlzSW50ZXJ2YWwobykge1xuICAgIHJldHVybiBvICYmIG8uaXNMdXhvbkludGVydmFsIHx8IGZhbHNlO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzdGFydCBvZiB0aGUgSW50ZXJ2YWxcbiAgICogQHR5cGUge0RhdGVUaW1lfVxuICAgKi9cbiAgO1xuXG4gIHZhciBfcHJvdG8gPSBJbnRlcnZhbC5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgSW50ZXJ2YWwgaW4gdGhlIHNwZWNpZmllZCB1bml0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIHRoZSB1bml0IChzdWNoIGFzICdob3Vycycgb3IgJ2RheXMnKSB0byByZXR1cm4gdGhlIGxlbmd0aCBpbi5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgX3Byb3RvLmxlbmd0aCA9IGZ1bmN0aW9uIGxlbmd0aCh1bml0KSB7XG4gICAgaWYgKHVuaXQgPT09IHZvaWQgMCkge1xuICAgICAgdW5pdCA9IFwibWlsbGlzZWNvbmRzXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudG9EdXJhdGlvbi5hcHBseSh0aGlzLCBbdW5pdF0pLmdldCh1bml0KSA6IE5hTjtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY291bnQgb2YgbWludXRlcywgaG91cnMsIGRheXMsIG1vbnRocywgb3IgeWVhcnMgaW5jbHVkZWQgaW4gdGhlIEludGVydmFsLCBldmVuIGluIHBhcnQuXG4gICAqIFVubGlrZSB7QGxpbmsgbGVuZ3RofSB0aGlzIGNvdW50cyBzZWN0aW9ucyBvZiB0aGUgY2FsZW5kYXIsIG5vdCBwZXJpb2RzIG9mIHRpbWUsIGUuZy4gc3BlY2lmeWluZyAnZGF5J1xuICAgKiBhc2tzICd3aGF0IGRhdGVzIGFyZSBpbmNsdWRlZCBpbiB0aGlzIGludGVydmFsPycsIG5vdCAnaG93IG1hbnkgZGF5cyBsb25nIGlzIHRoaXMgaW50ZXJ2YWw/J1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW3VuaXQ9J21pbGxpc2Vjb25kcyddIC0gdGhlIHVuaXQgb2YgdGltZSB0byBjb3VudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5jb3VudCA9IGZ1bmN0aW9uIGNvdW50KHVuaXQpIHtcbiAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgICB1bml0ID0gXCJtaWxsaXNlY29uZHNcIjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIE5hTjtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLnN0YXJ0LnN0YXJ0T2YodW5pdCksXG4gICAgICAgIGVuZCA9IHRoaXMuZW5kLnN0YXJ0T2YodW5pdCk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZW5kLmRpZmYoc3RhcnQsIHVuaXQpLmdldCh1bml0KSkgKyAxO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGFuZCBlbmQgYXJlIGJvdGggaW4gdGhlIHNhbWUgdW5pdCBvZiB0aW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgb2YgdGltZSB0byBjaGVjayBzYW1lbmVzcyBvblxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5oYXNTYW1lID0gZnVuY3Rpb24gaGFzU2FtZSh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuaXNFbXB0eSgpIHx8IHRoaXMuZS5taW51cygxKS5oYXNTYW1lKHRoaXMucywgdW5pdCkgOiBmYWxzZTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBoYXMgdGhlIHNhbWUgc3RhcnQgYW5kIGVuZCBEYXRlVGltZXMuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmlzRW1wdHkgPSBmdW5jdGlvbiBpc0VtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLnMudmFsdWVPZigpID09PSB0aGlzLmUudmFsdWVPZigpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3Mgc3RhcnQgaXMgYWZ0ZXIgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaXNBZnRlciA9IGZ1bmN0aW9uIGlzQWZ0ZXIoZGF0ZVRpbWUpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0aGlzLnMgPiBkYXRlVGltZTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIGVuZCBpcyBiZWZvcmUgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaXNCZWZvcmUgPSBmdW5jdGlvbiBpc0JlZm9yZShkYXRlVGltZSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXMuZSA8PSBkYXRlVGltZTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBjb250YWlucyB0aGUgc3BlY2lmaWVkIERhdGVUaW1lLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBkYXRlVGltZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5jb250YWlucyA9IGZ1bmN0aW9uIGNvbnRhaW5zKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zIDw9IGRhdGVUaW1lICYmIHRoaXMuZSA+IGRhdGVUaW1lO1xuICB9XG4gIC8qKlxuICAgKiBcIlNldHNcIiB0aGUgc3RhcnQgYW5kL29yIGVuZCBkYXRlcy4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIEludGVydmFsLlxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzIC0gdGhlIHZhbHVlcyB0byBzZXRcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gdmFsdWVzLnN0YXJ0IC0gdGhlIHN0YXJ0aW5nIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IHZhbHVlcy5lbmQgLSB0aGUgZW5kaW5nIERhdGVUaW1lXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXQgPSBmdW5jdGlvbiBzZXQoX3RlbXApIHtcbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBzdGFydCA9IF9yZWYuc3RhcnQsXG4gICAgICAgIGVuZCA9IF9yZWYuZW5kO1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHN0YXJ0IHx8IHRoaXMucywgZW5kIHx8IHRoaXMuZSk7XG4gIH1cbiAgLyoqXG4gICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgYXQgZWFjaCBvZiB0aGUgc3BlY2lmaWVkIERhdGVUaW1lc1xuICAgKiBAcGFyYW0gey4uLltEYXRlVGltZV19IGRhdGVUaW1lcyAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY291bnQuXG4gICAqIEByZXR1cm4ge1tJbnRlcnZhbF19XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNwbGl0QXQgPSBmdW5jdGlvbiBzcGxpdEF0KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIFtdO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRhdGVUaW1lcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGRhdGVUaW1lc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgc29ydGVkID0gZGF0ZVRpbWVzLm1hcChmcmllbmRseURhdGVUaW1lKS5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5jb250YWlucyhkKTtcbiAgICB9KS5zb3J0KCksXG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICB2YXIgcyA9IHRoaXMucyxcbiAgICAgICAgaSA9IDA7XG5cbiAgICB3aGlsZSAocyA8IHRoaXMuZSkge1xuICAgICAgdmFyIGFkZGVkID0gc29ydGVkW2ldIHx8IHRoaXMuZSxcbiAgICAgICAgICBuZXh0ID0gK2FkZGVkID4gK3RoaXMuZSA/IHRoaXMuZSA6IGFkZGVkO1xuICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMocywgbmV4dCkpO1xuICAgICAgcyA9IG5leHQ7XG4gICAgICBpICs9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cbiAgLyoqXG4gICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgaW50byBzbWFsbGVyIEludGVydmFscywgZWFjaCBvZiB0aGUgc3BlY2lmaWVkIGxlbmd0aC5cbiAgICogTGVmdCBvdmVyIHRpbWUgaXMgZ3JvdXBlZCBpbnRvIGEgc21hbGxlciBpbnRlcnZhbFxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGxlbmd0aCBvZiBlYWNoIHJlc3VsdGluZyBpbnRlcnZhbC5cbiAgICogQHJldHVybiB7W0ludGVydmFsXX1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc3BsaXRCeSA9IGZ1bmN0aW9uIHNwbGl0QnkoZHVyYXRpb24pIHtcbiAgICB2YXIgZHVyID0gZnJpZW5kbHlEdXJhdGlvbihkdXJhdGlvbik7XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCB8fCAhZHVyLmlzVmFsaWQgfHwgZHVyLmFzKFwibWlsbGlzZWNvbmRzXCIpID09PSAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgdmFyIHMgPSB0aGlzLnMsXG4gICAgICAgIGFkZGVkLFxuICAgICAgICBuZXh0O1xuICAgIHZhciByZXN1bHRzID0gW107XG5cbiAgICB3aGlsZSAocyA8IHRoaXMuZSkge1xuICAgICAgYWRkZWQgPSBzLnBsdXMoZHVyKTtcbiAgICAgIG5leHQgPSArYWRkZWQgPiArdGhpcy5lID8gdGhpcy5lIDogYWRkZWQ7XG4gICAgICByZXN1bHRzLnB1c2goSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBuZXh0KSk7XG4gICAgICBzID0gbmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuICAvKipcbiAgICogU3BsaXQgdGhpcyBJbnRlcnZhbCBpbnRvIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHNtYWxsZXIgaW50ZXJ2YWxzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyT2ZQYXJ0cyAtIFRoZSBudW1iZXIgb2YgSW50ZXJ2YWxzIHRvIGRpdmlkZSB0aGUgSW50ZXJ2YWwgaW50by5cbiAgICogQHJldHVybiB7W0ludGVydmFsXX1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZGl2aWRlRXF1YWxseSA9IGZ1bmN0aW9uIGRpdmlkZUVxdWFsbHkobnVtYmVyT2ZQYXJ0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gW107XG4gICAgcmV0dXJuIHRoaXMuc3BsaXRCeSh0aGlzLmxlbmd0aCgpIC8gbnVtYmVyT2ZQYXJ0cykuc2xpY2UoMCwgbnVtYmVyT2ZQYXJ0cyk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgb3ZlcmxhcHMgd2l0aCB0aGUgc3BlY2lmaWVkIEludGVydmFsXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm92ZXJsYXBzID0gZnVuY3Rpb24gb3ZlcmxhcHMob3RoZXIpIHtcbiAgICByZXR1cm4gdGhpcy5lID4gb3RoZXIucyAmJiB0aGlzLnMgPCBvdGhlci5lO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGFkamFjZW50IHRvIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwncyBzdGFydC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWJ1dHNTdGFydCA9IGZ1bmN0aW9uIGFidXRzU3RhcnQob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiArdGhpcy5lID09PSArb3RoZXIucztcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGlzIGFkamFjZW50IHRvIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwncyBlbmQuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmFidXRzRW5kID0gZnVuY3Rpb24gYWJ1dHNFbmQob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiArb3RoZXIuZSA9PT0gK3RoaXMucztcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBlbmd1bGZzIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmVuZ3VsZnMgPSBmdW5jdGlvbiBlbmd1bGZzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zIDw9IG90aGVyLnMgJiYgdGhpcy5lID49IG90aGVyLmU7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgaGFzIHRoZSBzYW1lIHN0YXJ0IGFuZCBlbmQgYXMgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zLmVxdWFscyhvdGhlci5zKSAmJiB0aGlzLmUuZXF1YWxzKG90aGVyLmUpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgcmVwcmVzZW50aW5nIHRoZSBpbnRlcnNlY3Rpb24gb2YgdGhpcyBJbnRlcnZhbCBhbmQgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgcmVzdWx0aW5nIEludGVydmFsIGhhcyB0aGUgbWF4aW11bSBzdGFydCB0aW1lIGFuZCB0aGUgbWluaW11bSBlbmQgdGltZSBvZiB0aGUgdHdvIEludGVydmFscy5cbiAgICogUmV0dXJucyBudWxsIGlmIHRoZSBpbnRlcnNlY3Rpb24gaXMgZW1wdHksIG1lYW5pbmcsIHRoZSBpbnRlcnZhbHMgZG9uJ3QgaW50ZXJzZWN0LlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW50ZXJzZWN0aW9uID0gZnVuY3Rpb24gaW50ZXJzZWN0aW9uKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHZhciBzID0gdGhpcy5zID4gb3RoZXIucyA/IHRoaXMucyA6IG90aGVyLnMsXG4gICAgICAgIGUgPSB0aGlzLmUgPCBvdGhlci5lID8gdGhpcy5lIDogb3RoZXIuZTtcblxuICAgIGlmIChzID4gZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIGUpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGFuIEludGVydmFsIHJlcHJlc2VudGluZyB0aGUgdW5pb24gb2YgdGhpcyBJbnRlcnZhbCBhbmQgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgcmVzdWx0aW5nIEludGVydmFsIGhhcyB0aGUgbWluaW11bSBzdGFydCB0aW1lIGFuZCB0aGUgbWF4aW11bSBlbmQgdGltZSBvZiB0aGUgdHdvIEludGVydmFscy5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVuaW9uID0gZnVuY3Rpb24gdW5pb24ob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIHMgPSB0aGlzLnMgPCBvdGhlci5zID8gdGhpcy5zIDogb3RoZXIucyxcbiAgICAgICAgZSA9IHRoaXMuZSA+IG90aGVyLmUgPyB0aGlzLmUgOiBvdGhlci5lO1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIGUpO1xuICB9XG4gIC8qKlxuICAgKiBNZXJnZSBhbiBhcnJheSBvZiBJbnRlcnZhbHMgaW50byBhIGVxdWl2YWxlbnQgbWluaW1hbCBzZXQgb2YgSW50ZXJ2YWxzLlxuICAgKiBDb21iaW5lcyBvdmVybGFwcGluZyBhbmQgYWRqYWNlbnQgSW50ZXJ2YWxzLlxuICAgKiBAcGFyYW0ge1tJbnRlcnZhbF19IGludGVydmFsc1xuICAgKiBAcmV0dXJuIHtbSW50ZXJ2YWxdfVxuICAgKi9cbiAgO1xuXG4gIEludGVydmFsLm1lcmdlID0gZnVuY3Rpb24gbWVyZ2UoaW50ZXJ2YWxzKSB7XG4gICAgdmFyIF9pbnRlcnZhbHMkc29ydCRyZWR1YyA9IGludGVydmFscy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYS5zIC0gYi5zO1xuICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoX3JlZjIsIGl0ZW0pIHtcbiAgICAgIHZhciBzb2ZhciA9IF9yZWYyWzBdLFxuICAgICAgICAgIGN1cnJlbnQgPSBfcmVmMlsxXTtcblxuICAgICAgaWYgKCFjdXJyZW50KSB7XG4gICAgICAgIHJldHVybiBbc29mYXIsIGl0ZW1dO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50Lm92ZXJsYXBzKGl0ZW0pIHx8IGN1cnJlbnQuYWJ1dHNTdGFydChpdGVtKSkge1xuICAgICAgICByZXR1cm4gW3NvZmFyLCBjdXJyZW50LnVuaW9uKGl0ZW0pXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbc29mYXIuY29uY2F0KFtjdXJyZW50XSksIGl0ZW1dO1xuICAgICAgfVxuICAgIH0sIFtbXSwgbnVsbF0pLFxuICAgICAgICBmb3VuZCA9IF9pbnRlcnZhbHMkc29ydCRyZWR1Y1swXSxcbiAgICAgICAgZmluYWwgPSBfaW50ZXJ2YWxzJHNvcnQkcmVkdWNbMV07XG5cbiAgICBpZiAoZmluYWwpIHtcbiAgICAgIGZvdW5kLnB1c2goZmluYWwpO1xuICAgIH1cblxuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIEludGVydmFscyByZXByZXNlbnRpbmcgdGhlIHNwYW5zIG9mIHRpbWUgdGhhdCBvbmx5IGFwcGVhciBpbiBvbmUgb2YgdGhlIHNwZWNpZmllZCBJbnRlcnZhbHMuXG4gICAqIEBwYXJhbSB7W0ludGVydmFsXX0gaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge1tJbnRlcnZhbF19XG4gICAqL1xuICA7XG5cbiAgSW50ZXJ2YWwueG9yID0gZnVuY3Rpb24geG9yKGludGVydmFscykge1xuICAgIHZhciBfQXJyYXkkcHJvdG90eXBlO1xuXG4gICAgdmFyIHN0YXJ0ID0gbnVsbCxcbiAgICAgICAgY3VycmVudENvdW50ID0gMDtcblxuICAgIHZhciByZXN1bHRzID0gW10sXG4gICAgICAgIGVuZHMgPSBpbnRlcnZhbHMubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gW3tcbiAgICAgICAgdGltZTogaS5zLFxuICAgICAgICB0eXBlOiBcInNcIlxuICAgICAgfSwge1xuICAgICAgICB0aW1lOiBpLmUsXG4gICAgICAgIHR5cGU6IFwiZVwiXG4gICAgICB9XTtcbiAgICB9KSxcbiAgICAgICAgZmxhdHRlbmVkID0gKF9BcnJheSRwcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGUpLmNvbmNhdC5hcHBseShfQXJyYXkkcHJvdG90eXBlLCBlbmRzKSxcbiAgICAgICAgYXJyID0gZmxhdHRlbmVkLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhLnRpbWUgLSBiLnRpbWU7XG4gICAgfSk7XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKGFyciksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgaSA9IF9zdGVwLnZhbHVlO1xuICAgICAgY3VycmVudENvdW50ICs9IGkudHlwZSA9PT0gXCJzXCIgPyAxIDogLTE7XG5cbiAgICAgIGlmIChjdXJyZW50Q291bnQgPT09IDEpIHtcbiAgICAgICAgc3RhcnQgPSBpLnRpbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhcnQgJiYgK3N0YXJ0ICE9PSAraS50aW1lKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMoc3RhcnQsIGkudGltZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhcnQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbnRlcnZhbC5tZXJnZShyZXN1bHRzKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGFuIEludGVydmFsIHJlcHJlc2VudGluZyB0aGUgc3BhbiBvZiB0aW1lIGluIHRoaXMgSW50ZXJ2YWwgdGhhdCBkb2Vzbid0IG92ZXJsYXAgd2l0aCBhbnkgb2YgdGhlIHNwZWNpZmllZCBJbnRlcnZhbHMuXG4gICAqIEBwYXJhbSB7Li4uSW50ZXJ2YWx9IGludGVydmFsc1xuICAgKiBAcmV0dXJuIHtbSW50ZXJ2YWxdfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kaWZmZXJlbmNlID0gZnVuY3Rpb24gZGlmZmVyZW5jZSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgaW50ZXJ2YWxzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBpbnRlcnZhbHNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gSW50ZXJ2YWwueG9yKFt0aGlzXS5jb25jYXQoaW50ZXJ2YWxzKSkubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLmludGVyc2VjdGlvbihpKTtcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBpICYmICFpLmlzRW1wdHkoKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIEludGVydmFsIGFwcHJvcHJpYXRlIGZvciBkZWJ1Z2dpbmcuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcbiAgICByZXR1cm4gXCJbXCIgKyB0aGlzLnMudG9JU08oKSArIFwiIFxcdTIwMTMgXCIgKyB0aGlzLmUudG9JU08oKSArIFwiKVwiO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbC5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIFRoZSBzYW1lIG9wdGlvbnMgYXMge0BsaW5rIERhdGVUaW1lLnRvSVNPfVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvSVNPID0gZnVuY3Rpb24gdG9JU08ob3B0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRCQxO1xuICAgIHJldHVybiB0aGlzLnMudG9JU08ob3B0cykgKyBcIi9cIiArIHRoaXMuZS50b0lTTyhvcHRzKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGRhdGUgb2YgdGhpcyBJbnRlcnZhbC5cbiAgICogVGhlIHRpbWUgY29tcG9uZW50cyBhcmUgaWdub3JlZC5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvSVNPRGF0ZSA9IGZ1bmN0aW9uIHRvSVNPRGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcbiAgICByZXR1cm4gdGhpcy5zLnRvSVNPRGF0ZSgpICsgXCIvXCIgKyB0aGlzLmUudG9JU09EYXRlKCk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aW1lIG9mIHRoaXMgSW50ZXJ2YWwuXG4gICAqIFRoZSBkYXRlIGNvbXBvbmVudHMgYXJlIGlnbm9yZWQuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBUaGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBEYXRlVGltZS50b0lTT31cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0lTT1RpbWUgPSBmdW5jdGlvbiB0b0lTT1RpbWUob3B0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRCQxO1xuICAgIHJldHVybiB0aGlzLnMudG9JU09UaW1lKG9wdHMpICsgXCIvXCIgKyB0aGlzLmUudG9JU09UaW1lKG9wdHMpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgSW50ZXJ2YWwgZm9ybWF0dGVkIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGZvcm1hdCBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlRm9ybWF0IC0gdGhlIGZvcm1hdCBzdHJpbmcuIFRoaXMgc3RyaW5nIGZvcm1hdHMgdGhlIHN0YXJ0IGFuZCBlbmQgdGltZS4gU2VlIHtAbGluayBEYXRlVGltZS50b0Zvcm1hdH0gZm9yIGRldGFpbHMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuc2VwYXJhdG9yID0gICcg4oCTICddIC0gYSBzZXBhcmF0b3IgdG8gcGxhY2UgYmV0d2VlbiB0aGUgc3RhcnQgYW5kIGVuZCByZXByZXNlbnRhdGlvbnNcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0Zvcm1hdCA9IGZ1bmN0aW9uIHRvRm9ybWF0KGRhdGVGb3JtYXQsIF90ZW1wMikge1xuICAgIHZhciBfcmVmMyA9IF90ZW1wMiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDIsXG4gICAgICAgIF9yZWYzJHNlcGFyYXRvciA9IF9yZWYzLnNlcGFyYXRvcixcbiAgICAgICAgc2VwYXJhdG9yID0gX3JlZjMkc2VwYXJhdG9yID09PSB2b2lkIDAgPyBcIiDigJMgXCIgOiBfcmVmMyRzZXBhcmF0b3I7XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcbiAgICByZXR1cm4gXCJcIiArIHRoaXMucy50b0Zvcm1hdChkYXRlRm9ybWF0KSArIHNlcGFyYXRvciArIHRoaXMuZS50b0Zvcm1hdChkYXRlRm9ybWF0KTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGEgRHVyYXRpb24gcmVwcmVzZW50aW5nIHRoZSB0aW1lIHNwYW5uZWQgYnkgdGhpcyBpbnRlcnZhbC5cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIGNyZWF0aW9uIG9mIHRoZSBEdXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbigpLnRvT2JqZWN0KCkgLy89PiB7IG1pbGxpc2Vjb25kczogODg0ODkyNTcgfVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKCdkYXlzJykudG9PYmplY3QoKSAvLz0+IHsgZGF5czogMS4wMjQxODEyMTUyNzc3Nzc4IH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbihbJ2hvdXJzJywgJ21pbnV0ZXMnXSkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDI0LCBtaW51dGVzOiAzNC44MjA5NSB9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oWydob3VycycsICdtaW51dGVzJywgJ3NlY29uZHMnXSkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDI0LCBtaW51dGVzOiAzNCwgc2Vjb25kczogNDkuMjU3IH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbignc2Vjb25kcycpLnRvT2JqZWN0KCkgLy89PiB7IHNlY29uZHM6IDg4NDg5LjI1NyB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0R1cmF0aW9uID0gZnVuY3Rpb24gdG9EdXJhdGlvbih1bml0LCBvcHRzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKHRoaXMuaW52YWxpZFJlYXNvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZS5kaWZmKHRoaXMucywgdW5pdCwgb3B0cyk7XG4gIH1cbiAgLyoqXG4gICAqIFJ1biBtYXBGbiBvbiB0aGUgaW50ZXJ2YWwgc3RhcnQgYW5kIGVuZCwgcmV0dXJuaW5nIGEgbmV3IEludGVydmFsIGZyb20gdGhlIHJlc3VsdGluZyBEYXRlVGltZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWFwRm5cbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLm1hcEVuZHBvaW50cyhlbmRwb2ludCA9PiBlbmRwb2ludC50b1VUQygpKVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS5tYXBFbmRwb2ludHMoZW5kcG9pbnQgPT4gZW5kcG9pbnQucGx1cyh7IGhvdXJzOiAyIH0pKVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5tYXBFbmRwb2ludHMgPSBmdW5jdGlvbiBtYXBFbmRwb2ludHMobWFwRm4pIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhtYXBGbih0aGlzLnMpLCBtYXBGbih0aGlzLmUpKTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoSW50ZXJ2YWwsIFt7XG4gICAga2V5OiBcInN0YXJ0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5zIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZW5kIG9mIHRoZSBJbnRlcnZhbFxuICAgICAqIEB0eXBlIHtEYXRlVGltZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImVuZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuZSA6IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGF0IGxlYXN0IGl0cyBzdGFydCwgbWVhbmluZyB0aGF0IHRoZSBJbnRlcnZhbCBpc24ndCAnYmFja3dhcmRzJy5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzVmFsaWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludmFsaWRSZWFzb24gPT09IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gZXJyb3IgY29kZSBpZiB0aGlzIEludGVydmFsIGlzIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIEludGVydmFsIGlzIHZhbGlkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImludmFsaWRSZWFzb25cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQucmVhc29uIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBJbnRlcnZhbCBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgSW50ZXJ2YWwgaXMgdmFsaWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW52YWxpZEV4cGxhbmF0aW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLmV4cGxhbmF0aW9uIDogbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSW50ZXJ2YWw7XG59KCk7XG5cbi8qKlxuICogVGhlIEluZm8gY2xhc3MgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgZm9yIHJldHJpZXZpbmcgZ2VuZXJhbCB0aW1lIGFuZCBkYXRlIHJlbGF0ZWQgZGF0YS4gRm9yIGV4YW1wbGUsIGl0IGhhcyBtZXRob2RzIGZvciBmaW5kaW5nIG91dCBpZiBhIHRpbWUgem9uZSBoYXMgYSBEU1QsIGZvciBsaXN0aW5nIHRoZSBtb250aHMgaW4gYW55IHN1cHBvcnRlZCBsb2NhbGUsIGFuZCBmb3IgZGlzY292ZXJpbmcgd2hpY2ggb2YgTHV4b24gZmVhdHVyZXMgYXJlIGF2YWlsYWJsZSBpbiB0aGUgY3VycmVudCBlbnZpcm9ubWVudC5cbiAqL1xuXG52YXIgSW5mbyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEluZm8oKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGUgc3BlY2lmaWVkIHpvbmUgY29udGFpbnMgYSBEU1QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFt6b25lPSdsb2NhbCddIC0gWm9uZSB0byBjaGVjay4gRGVmYXVsdHMgdG8gdGhlIGVudmlyb25tZW50J3MgbG9jYWwgem9uZS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEluZm8uaGFzRFNUID0gZnVuY3Rpb24gaGFzRFNUKHpvbmUpIHtcbiAgICBpZiAoem9uZSA9PT0gdm9pZCAwKSB7XG4gICAgICB6b25lID0gU2V0dGluZ3MuZGVmYXVsdFpvbmU7XG4gICAgfVxuXG4gICAgdmFyIHByb3RvID0gRGF0ZVRpbWUubG9jYWwoKS5zZXRab25lKHpvbmUpLnNldCh7XG4gICAgICBtb250aDogMTJcbiAgICB9KTtcbiAgICByZXR1cm4gIXpvbmUudW5pdmVyc2FsICYmIHByb3RvLm9mZnNldCAhPT0gcHJvdG8uc2V0KHtcbiAgICAgIG1vbnRoOiA2XG4gICAgfSkub2Zmc2V0O1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGUgc3BlY2lmaWVkIHpvbmUgaXMgYSB2YWxpZCBJQU5BIHNwZWNpZmllci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHpvbmUgLSBab25lIHRvIGNoZWNrXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgSW5mby5pc1ZhbGlkSUFOQVpvbmUgPSBmdW5jdGlvbiBpc1ZhbGlkSUFOQVpvbmUoem9uZSkge1xuICAgIHJldHVybiBJQU5BWm9uZS5pc1ZhbGlkU3BlY2lmaWVyKHpvbmUpICYmIElBTkFab25lLmlzVmFsaWRab25lKHpvbmUpO1xuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgaW5wdXQgaW50byBhIHtAbGluayBab25lfSBpbnN0YW5jZS5cbiAgICpcbiAgICogKiBJZiBgaW5wdXRgIGlzIGFscmVhZHkgYSBab25lIGluc3RhbmNlLCBpdCBpcyByZXR1cm5lZCB1bmNoYW5nZWQuXG4gICAqICogSWYgYGlucHV0YCBpcyBhIHN0cmluZyBjb250YWluaW5nIGEgdmFsaWQgdGltZSB6b25lIG5hbWUsIGEgWm9uZSBpbnN0YW5jZVxuICAgKiAgIHdpdGggdGhhdCBuYW1lIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dGAgaXMgYSBzdHJpbmcgdGhhdCBkb2Vzbid0IHJlZmVyIHRvIGEga25vd24gdGltZSB6b25lLCBhIFpvbmVcbiAgICogICBpbnN0YW5jZSB3aXRoIHtAbGluayBab25lLmlzVmFsaWR9ID09IGZhbHNlIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dCBpcyBhIG51bWJlciwgYSBab25lIGluc3RhbmNlIHdpdGggdGhlIHNwZWNpZmllZCBmaXhlZCBvZmZzZXRcbiAgICogICBpbiBtaW51dGVzIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dGAgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLCB0aGUgZGVmYXVsdCB6b25lIGlzIHJldHVybmVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfG51bWJlcn0gW2lucHV0XSAtIHRoZSB2YWx1ZSB0byBiZSBjb252ZXJ0ZWRcbiAgICogQHJldHVybiB7Wm9uZX1cbiAgICovXG4gIDtcblxuICBJbmZvLm5vcm1hbGl6ZVpvbmUgPSBmdW5jdGlvbiBub3JtYWxpemVab25lJDEoaW5wdXQpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplWm9uZShpbnB1dCwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2Ygc3RhbmRhbG9uZSBtb250aCBuYW1lcy5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJudW1lcmljXCIsIFwiMi1kaWdpdFwiLCBcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm91dHB1dENhbGVuZGFyPSdncmVnb3J5J10gLSB0aGUgY2FsZW5kYXJcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoKVswXSAvLz0+ICdKYW51YXJ5J1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnc2hvcnQnKVswXSAvLz0+ICdKYW4nXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdudW1lcmljJylbMF0gLy89PiAnMSdcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ3Nob3J0JywgeyBsb2NhbGU6ICdmci1DQScgfSApWzBdIC8vPT4gJ2phbnYuJ1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnbnVtZXJpYycsIHsgbG9jYWxlOiAnYXInIH0pWzBdIC8vPT4gJ9mhJ1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnbG9uZycsIHsgb3V0cHV0Q2FsZW5kYXI6ICdpc2xhbWljJyB9KVswXSAvLz0+ICdSYWJpyrsgSSdcbiAgICogQHJldHVybiB7W3N0cmluZ119XG4gICAqL1xuICA7XG5cbiAgSW5mby5tb250aHMgPSBmdW5jdGlvbiBtb250aHMobGVuZ3RoLCBfdGVtcCkge1xuICAgIGlmIChsZW5ndGggPT09IHZvaWQgMCkge1xuICAgICAgbGVuZ3RoID0gXCJsb25nXCI7XG4gICAgfVxuXG4gICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgX3JlZiRsb2NhbGUgPSBfcmVmLmxvY2FsZSxcbiAgICAgICAgbG9jYWxlID0gX3JlZiRsb2NhbGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJGxvY2FsZSxcbiAgICAgICAgX3JlZiRudW1iZXJpbmdTeXN0ZW0gPSBfcmVmLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX3JlZiRudW1iZXJpbmdTeXN0ZW0gPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJG51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgX3JlZiRvdXRwdXRDYWxlbmRhciA9IF9yZWYub3V0cHV0Q2FsZW5kYXIsXG4gICAgICAgIG91dHB1dENhbGVuZGFyID0gX3JlZiRvdXRwdXRDYWxlbmRhciA9PT0gdm9pZCAwID8gXCJncmVnb3J5XCIgOiBfcmVmJG91dHB1dENhbGVuZGFyO1xuXG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKS5tb250aHMobGVuZ3RoKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIGZvcm1hdCBtb250aCBuYW1lcy5cbiAgICogRm9ybWF0IG1vbnRocyBkaWZmZXIgZnJvbSBzdGFuZGFsb25lIG1vbnRocyBpbiB0aGF0IHRoZXkncmUgbWVhbnQgdG8gYXBwZWFyIG5leHQgdG8gdGhlIGRheSBvZiB0aGUgbW9udGguIEluIHNvbWUgbGFuZ3VhZ2VzLCB0aGF0XG4gICAqIGNoYW5nZXMgdGhlIHN0cmluZy5cbiAgICogU2VlIHtAbGluayBtb250aHN9XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBtb250aCByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcIm51bWVyaWNcIiwgXCIyLWRpZ2l0XCIsIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMub3V0cHV0Q2FsZW5kYXI9J2dyZWdvcnknXSAtIHRoZSBjYWxlbmRhclxuICAgKiBAcmV0dXJuIHtbc3RyaW5nXX1cbiAgICovXG4gIDtcblxuICBJbmZvLm1vbnRoc0Zvcm1hdCA9IGZ1bmN0aW9uIG1vbnRoc0Zvcm1hdChsZW5ndGgsIF90ZW1wMikge1xuICAgIGlmIChsZW5ndGggPT09IHZvaWQgMCkge1xuICAgICAgbGVuZ3RoID0gXCJsb25nXCI7XG4gICAgfVxuXG4gICAgdmFyIF9yZWYyID0gX3RlbXAyID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMixcbiAgICAgICAgX3JlZjIkbG9jYWxlID0gX3JlZjIubG9jYWxlLFxuICAgICAgICBsb2NhbGUgPSBfcmVmMiRsb2NhbGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMiRsb2NhbGUsXG4gICAgICAgIF9yZWYyJG51bWJlcmluZ1N5c3RlbSA9IF9yZWYyLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX3JlZjIkbnVtYmVyaW5nU3lzdGVtID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjIkbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBfcmVmMiRvdXRwdXRDYWxlbmRhciA9IF9yZWYyLm91dHB1dENhbGVuZGFyLFxuICAgICAgICBvdXRwdXRDYWxlbmRhciA9IF9yZWYyJG91dHB1dENhbGVuZGFyID09PSB2b2lkIDAgPyBcImdyZWdvcnlcIiA6IF9yZWYyJG91dHB1dENhbGVuZGFyO1xuXG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKS5tb250aHMobGVuZ3RoLCB0cnVlKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIHN0YW5kYWxvbmUgd2VlayBuYW1lcy5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgd2Vla2RheSByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoKVswXSAvLz0+ICdNb25kYXknXG4gICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoJ3Nob3J0JylbMF0gLy89PiAnTW9uJ1xuICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKCdzaG9ydCcsIHsgbG9jYWxlOiAnZnItQ0EnIH0pWzBdIC8vPT4gJ2x1bi4nXG4gICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoJ3Nob3J0JywgeyBsb2NhbGU6ICdhcicgfSlbMF0gLy89PiAn2KfZhNin2KvZhtmK2YYnXG4gICAqIEByZXR1cm4ge1tzdHJpbmddfVxuICAgKi9cbiAgO1xuXG4gIEluZm8ud2Vla2RheXMgPSBmdW5jdGlvbiB3ZWVrZGF5cyhsZW5ndGgsIF90ZW1wMykge1xuICAgIGlmIChsZW5ndGggPT09IHZvaWQgMCkge1xuICAgICAgbGVuZ3RoID0gXCJsb25nXCI7XG4gICAgfVxuXG4gICAgdmFyIF9yZWYzID0gX3RlbXAzID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMyxcbiAgICAgICAgX3JlZjMkbG9jYWxlID0gX3JlZjMubG9jYWxlLFxuICAgICAgICBsb2NhbGUgPSBfcmVmMyRsb2NhbGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMyRsb2NhbGUsXG4gICAgICAgIF9yZWYzJG51bWJlcmluZ1N5c3RlbSA9IF9yZWYzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX3JlZjMkbnVtYmVyaW5nU3lzdGVtID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjMkbnVtYmVyaW5nU3lzdGVtO1xuXG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG51bGwpLndlZWtkYXlzKGxlbmd0aCk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBmb3JtYXQgd2VlayBuYW1lcy5cbiAgICogRm9ybWF0IHdlZWtkYXlzIGRpZmZlciBmcm9tIHN0YW5kYWxvbmUgd2Vla2RheXMgaW4gdGhhdCB0aGV5J3JlIG1lYW50IHRvIGFwcGVhciBuZXh0IHRvIG1vcmUgZGF0ZSBpbmZvcm1hdGlvbi4gSW4gc29tZSBsYW5ndWFnZXMsIHRoYXRcbiAgICogY2hhbmdlcyB0aGUgc3RyaW5nLlxuICAgKiBTZWUge0BsaW5rIHdlZWtkYXlzfVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgd2Vla2RheSByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT1udWxsXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHJldHVybiB7W3N0cmluZ119XG4gICAqL1xuICA7XG5cbiAgSW5mby53ZWVrZGF5c0Zvcm1hdCA9IGZ1bmN0aW9uIHdlZWtkYXlzRm9ybWF0KGxlbmd0aCwgX3RlbXA0KSB7XG4gICAgaWYgKGxlbmd0aCA9PT0gdm9pZCAwKSB7XG4gICAgICBsZW5ndGggPSBcImxvbmdcIjtcbiAgICB9XG5cbiAgICB2YXIgX3JlZjQgPSBfdGVtcDQgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA0LFxuICAgICAgICBfcmVmNCRsb2NhbGUgPSBfcmVmNC5sb2NhbGUsXG4gICAgICAgIGxvY2FsZSA9IF9yZWY0JGxvY2FsZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWY0JGxvY2FsZSxcbiAgICAgICAgX3JlZjQkbnVtYmVyaW5nU3lzdGVtID0gX3JlZjQubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfcmVmNCRudW1iZXJpbmdTeXN0ZW0gPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmNCRudW1iZXJpbmdTeXN0ZW07XG5cbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgbnVsbCkud2Vla2RheXMobGVuZ3RoLCB0cnVlKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIG1lcmlkaWVtcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBleGFtcGxlIEluZm8ubWVyaWRpZW1zKCkgLy89PiBbICdBTScsICdQTScgXVxuICAgKiBAZXhhbXBsZSBJbmZvLm1lcmlkaWVtcyh7IGxvY2FsZTogJ215JyB9KSAvLz0+IFsgJ+GAlOGAtuGAlOGAgOGAuicsICfhgIrhgJThgLEnIF1cbiAgICogQHJldHVybiB7W3N0cmluZ119XG4gICAqL1xuICA7XG5cbiAgSW5mby5tZXJpZGllbXMgPSBmdW5jdGlvbiBtZXJpZGllbXMoX3RlbXA1KSB7XG4gICAgdmFyIF9yZWY1ID0gX3RlbXA1ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNSxcbiAgICAgICAgX3JlZjUkbG9jYWxlID0gX3JlZjUubG9jYWxlLFxuICAgICAgICBsb2NhbGUgPSBfcmVmNSRsb2NhbGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmNSRsb2NhbGU7XG5cbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShsb2NhbGUpLm1lcmlkaWVtcygpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgZXJhcywgc3VjaCBhcyBbJ0JDJywgJ0FEJ10uIFRoZSBsb2NhbGUgY2FuIGJlIHNwZWNpZmllZCwgYnV0IHRoZSBjYWxlbmRhciBzeXN0ZW0gaXMgYWx3YXlzIEdyZWdvcmlhbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J3Nob3J0J10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBlcmEgcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJzaG9ydFwiIG9yIFwibG9uZ1wiLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQGV4YW1wbGUgSW5mby5lcmFzKCkgLy89PiBbICdCQycsICdBRCcgXVxuICAgKiBAZXhhbXBsZSBJbmZvLmVyYXMoJ2xvbmcnKSAvLz0+IFsgJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknIF1cbiAgICogQGV4YW1wbGUgSW5mby5lcmFzKCdsb25nJywgeyBsb2NhbGU6ICdmcicgfSkgLy89PiBbICdhdmFudCBKw6lzdXMtQ2hyaXN0JywgJ2FwcsOocyBKw6lzdXMtQ2hyaXN0JyBdXG4gICAqIEByZXR1cm4ge1tzdHJpbmddfVxuICAgKi9cbiAgO1xuXG4gIEluZm8uZXJhcyA9IGZ1bmN0aW9uIGVyYXMobGVuZ3RoLCBfdGVtcDYpIHtcbiAgICBpZiAobGVuZ3RoID09PSB2b2lkIDApIHtcbiAgICAgIGxlbmd0aCA9IFwic2hvcnRcIjtcbiAgICB9XG5cbiAgICB2YXIgX3JlZjYgPSBfdGVtcDYgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA2LFxuICAgICAgICBfcmVmNiRsb2NhbGUgPSBfcmVmNi5sb2NhbGUsXG4gICAgICAgIGxvY2FsZSA9IF9yZWY2JGxvY2FsZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWY2JGxvY2FsZTtcblxuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVsbCwgXCJncmVnb3J5XCIpLmVyYXMobGVuZ3RoKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHRoZSBzZXQgb2YgYXZhaWxhYmxlIGZlYXR1cmVzIGluIHRoaXMgZW52aXJvbm1lbnQuXG4gICAqIFNvbWUgZmVhdHVyZXMgb2YgTHV4b24gYXJlIG5vdCBhdmFpbGFibGUgaW4gYWxsIGVudmlyb25tZW50cy4gRm9yIGV4YW1wbGUsIG9uIG9sZGVyIGJyb3dzZXJzLCB0aW1lem9uZSBzdXBwb3J0IGlzIG5vdCBhdmFpbGFibGUuIFVzZSB0aGlzIGZ1bmN0aW9uIHRvIGZpZ3VyZSBvdXQgaWYgdGhhdCdzIHRoZSBjYXNlLlxuICAgKiBLZXlzOlxuICAgKiAqIGB6b25lc2A6IHdoZXRoZXIgdGhpcyBlbnZpcm9ubWVudCBzdXBwb3J0cyBJQU5BIHRpbWV6b25lc1xuICAgKiAqIGBpbnRsVG9rZW5zYDogd2hldGhlciB0aGlzIGVudmlyb25tZW50IHN1cHBvcnRzIGludGVybmF0aW9uYWxpemVkIHRva2VuLWJhc2VkIGZvcm1hdHRpbmcvcGFyc2luZ1xuICAgKiAqIGBpbnRsYDogd2hldGhlciB0aGlzIGVudmlyb25tZW50IHN1cHBvcnRzIGdlbmVyYWwgaW50ZXJuYXRpb25hbGl6YXRpb25cbiAgICogKiBgcmVsYXRpdmVgOiB3aGV0aGVyIHRoaXMgZW52aXJvbm1lbnQgc3VwcG9ydHMgcmVsYXRpdmUgdGltZSBmb3JtYXR0aW5nXG4gICAqIEBleGFtcGxlIEluZm8uZmVhdHVyZXMoKSAvLz0+IHsgaW50bDogdHJ1ZSwgaW50bFRva2VuczogZmFsc2UsIHpvbmVzOiB0cnVlLCByZWxhdGl2ZTogZmFsc2UgfVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICA7XG5cbiAgSW5mby5mZWF0dXJlcyA9IGZ1bmN0aW9uIGZlYXR1cmVzKCkge1xuICAgIHZhciBpbnRsID0gZmFsc2UsXG4gICAgICAgIGludGxUb2tlbnMgPSBmYWxzZSxcbiAgICAgICAgem9uZXMgPSBmYWxzZSxcbiAgICAgICAgcmVsYXRpdmUgPSBmYWxzZTtcblxuICAgIGlmIChoYXNJbnRsKCkpIHtcbiAgICAgIGludGwgPSB0cnVlO1xuICAgICAgaW50bFRva2VucyA9IGhhc0Zvcm1hdFRvUGFydHMoKTtcbiAgICAgIHJlbGF0aXZlID0gaGFzUmVsYXRpdmUoKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgem9uZXMgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuXCIsIHtcbiAgICAgICAgICB0aW1lWm9uZTogXCJBbWVyaWNhL05ld19Zb3JrXCJcbiAgICAgICAgfSkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmUgPT09IFwiQW1lcmljYS9OZXdfWW9ya1wiO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB6b25lcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBpbnRsOiBpbnRsLFxuICAgICAgaW50bFRva2VuczogaW50bFRva2VucyxcbiAgICAgIHpvbmVzOiB6b25lcyxcbiAgICAgIHJlbGF0aXZlOiByZWxhdGl2ZVxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIEluZm87XG59KCk7XG5cbmZ1bmN0aW9uIGRheURpZmYoZWFybGllciwgbGF0ZXIpIHtcbiAgdmFyIHV0Y0RheVN0YXJ0ID0gZnVuY3Rpb24gdXRjRGF5U3RhcnQoZHQpIHtcbiAgICByZXR1cm4gZHQudG9VVEMoMCwge1xuICAgICAga2VlcExvY2FsVGltZTogdHJ1ZVxuICAgIH0pLnN0YXJ0T2YoXCJkYXlcIikudmFsdWVPZigpO1xuICB9LFxuICAgICAgbXMgPSB1dGNEYXlTdGFydChsYXRlcikgLSB1dGNEYXlTdGFydChlYXJsaWVyKTtcblxuICByZXR1cm4gTWF0aC5mbG9vcihEdXJhdGlvbi5mcm9tTWlsbGlzKG1zKS5hcyhcImRheXNcIikpO1xufVxuXG5mdW5jdGlvbiBoaWdoT3JkZXJEaWZmcyhjdXJzb3IsIGxhdGVyLCB1bml0cykge1xuICB2YXIgZGlmZmVycyA9IFtbXCJ5ZWFyc1wiLCBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBiLnllYXIgLSBhLnllYXI7XG4gIH1dLCBbXCJtb250aHNcIiwgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYi5tb250aCAtIGEubW9udGggKyAoYi55ZWFyIC0gYS55ZWFyKSAqIDEyO1xuICB9XSwgW1wid2Vla3NcIiwgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICB2YXIgZGF5cyA9IGRheURpZmYoYSwgYik7XG4gICAgcmV0dXJuIChkYXlzIC0gZGF5cyAlIDcpIC8gNztcbiAgfV0sIFtcImRheXNcIiwgZGF5RGlmZl1dO1xuICB2YXIgcmVzdWx0cyA9IHt9O1xuICB2YXIgbG93ZXN0T3JkZXIsIGhpZ2hXYXRlcjtcblxuICBmb3IgKHZhciBfaSA9IDAsIF9kaWZmZXJzID0gZGlmZmVyczsgX2kgPCBfZGlmZmVycy5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgX2RpZmZlcnMkX2kgPSBfZGlmZmVyc1tfaV0sXG4gICAgICAgIHVuaXQgPSBfZGlmZmVycyRfaVswXSxcbiAgICAgICAgZGlmZmVyID0gX2RpZmZlcnMkX2lbMV07XG5cbiAgICBpZiAodW5pdHMuaW5kZXhPZih1bml0KSA+PSAwKSB7XG4gICAgICB2YXIgX2N1cnNvciRwbHVzO1xuXG4gICAgICBsb3dlc3RPcmRlciA9IHVuaXQ7XG4gICAgICB2YXIgZGVsdGEgPSBkaWZmZXIoY3Vyc29yLCBsYXRlcik7XG4gICAgICBoaWdoV2F0ZXIgPSBjdXJzb3IucGx1cygoX2N1cnNvciRwbHVzID0ge30sIF9jdXJzb3IkcGx1c1t1bml0XSA9IGRlbHRhLCBfY3Vyc29yJHBsdXMpKTtcblxuICAgICAgaWYgKGhpZ2hXYXRlciA+IGxhdGVyKSB7XG4gICAgICAgIHZhciBfY3Vyc29yJHBsdXMyO1xuXG4gICAgICAgIGN1cnNvciA9IGN1cnNvci5wbHVzKChfY3Vyc29yJHBsdXMyID0ge30sIF9jdXJzb3IkcGx1czJbdW5pdF0gPSBkZWx0YSAtIDEsIF9jdXJzb3IkcGx1czIpKTtcbiAgICAgICAgZGVsdGEgLT0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnNvciA9IGhpZ2hXYXRlcjtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0c1t1bml0XSA9IGRlbHRhO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbY3Vyc29yLCByZXN1bHRzLCBoaWdoV2F0ZXIsIGxvd2VzdE9yZGVyXTtcbn1cblxuZnVuY3Rpb24gX2RpZmYgKGVhcmxpZXIsIGxhdGVyLCB1bml0cywgb3B0cykge1xuICB2YXIgX2hpZ2hPcmRlckRpZmZzID0gaGlnaE9yZGVyRGlmZnMoZWFybGllciwgbGF0ZXIsIHVuaXRzKSxcbiAgICAgIGN1cnNvciA9IF9oaWdoT3JkZXJEaWZmc1swXSxcbiAgICAgIHJlc3VsdHMgPSBfaGlnaE9yZGVyRGlmZnNbMV0sXG4gICAgICBoaWdoV2F0ZXIgPSBfaGlnaE9yZGVyRGlmZnNbMl0sXG4gICAgICBsb3dlc3RPcmRlciA9IF9oaWdoT3JkZXJEaWZmc1szXTtcblxuICB2YXIgcmVtYWluaW5nTWlsbGlzID0gbGF0ZXIgLSBjdXJzb3I7XG4gIHZhciBsb3dlck9yZGVyVW5pdHMgPSB1bml0cy5maWx0ZXIoZnVuY3Rpb24gKHUpIHtcbiAgICByZXR1cm4gW1wiaG91cnNcIiwgXCJtaW51dGVzXCIsIFwic2Vjb25kc1wiLCBcIm1pbGxpc2Vjb25kc1wiXS5pbmRleE9mKHUpID49IDA7XG4gIH0pO1xuXG4gIGlmIChsb3dlck9yZGVyVW5pdHMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGhpZ2hXYXRlciA8IGxhdGVyKSB7XG4gICAgICB2YXIgX2N1cnNvciRwbHVzMztcblxuICAgICAgaGlnaFdhdGVyID0gY3Vyc29yLnBsdXMoKF9jdXJzb3IkcGx1czMgPSB7fSwgX2N1cnNvciRwbHVzM1tsb3dlc3RPcmRlcl0gPSAxLCBfY3Vyc29yJHBsdXMzKSk7XG4gICAgfVxuXG4gICAgaWYgKGhpZ2hXYXRlciAhPT0gY3Vyc29yKSB7XG4gICAgICByZXN1bHRzW2xvd2VzdE9yZGVyXSA9IChyZXN1bHRzW2xvd2VzdE9yZGVyXSB8fCAwKSArIHJlbWFpbmluZ01pbGxpcyAvIChoaWdoV2F0ZXIgLSBjdXJzb3IpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBkdXJhdGlvbiA9IER1cmF0aW9uLmZyb21PYmplY3QoT2JqZWN0LmFzc2lnbihyZXN1bHRzLCBvcHRzKSk7XG5cbiAgaWYgKGxvd2VyT3JkZXJVbml0cy5sZW5ndGggPiAwKSB7XG4gICAgdmFyIF9EdXJhdGlvbiRmcm9tTWlsbGlzO1xuXG4gICAgcmV0dXJuIChfRHVyYXRpb24kZnJvbU1pbGxpcyA9IER1cmF0aW9uLmZyb21NaWxsaXMocmVtYWluaW5nTWlsbGlzLCBvcHRzKSkuc2hpZnRUby5hcHBseShfRHVyYXRpb24kZnJvbU1pbGxpcywgbG93ZXJPcmRlclVuaXRzKS5wbHVzKGR1cmF0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZHVyYXRpb247XG4gIH1cbn1cblxudmFyIG51bWJlcmluZ1N5c3RlbXMgPSB7XG4gIGFyYWI6IFwiW1xcdTA2NjAtXFx1MDY2OV1cIixcbiAgYXJhYmV4dDogXCJbXFx1MDZGMC1cXHUwNkY5XVwiLFxuICBiYWxpOiBcIltcXHUxQjUwLVxcdTFCNTldXCIsXG4gIGJlbmc6IFwiW1xcdTA5RTYtXFx1MDlFRl1cIixcbiAgZGV2YTogXCJbXFx1MDk2Ni1cXHUwOTZGXVwiLFxuICBmdWxsd2lkZTogXCJbXFx1RkYxMC1cXHVGRjE5XVwiLFxuICBndWpyOiBcIltcXHUwQUU2LVxcdTBBRUZdXCIsXG4gIGhhbmlkZWM6IFwiW+OAh3zkuIB85LqMfOS4iXzlm5t85LqUfOWFrXzkuIN85YWrfOS5nV1cIixcbiAga2htcjogXCJbXFx1MTdFMC1cXHUxN0U5XVwiLFxuICBrbmRhOiBcIltcXHUwQ0U2LVxcdTBDRUZdXCIsXG4gIGxhb286IFwiW1xcdTBFRDAtXFx1MEVEOV1cIixcbiAgbGltYjogXCJbXFx1MTk0Ni1cXHUxOTRGXVwiLFxuICBtbHltOiBcIltcXHUwRDY2LVxcdTBENkZdXCIsXG4gIG1vbmc6IFwiW1xcdTE4MTAtXFx1MTgxOV1cIixcbiAgbXltcjogXCJbXFx1MTA0MC1cXHUxMDQ5XVwiLFxuICBvcnlhOiBcIltcXHUwQjY2LVxcdTBCNkZdXCIsXG4gIHRhbWxkZWM6IFwiW1xcdTBCRTYtXFx1MEJFRl1cIixcbiAgdGVsdTogXCJbXFx1MEM2Ni1cXHUwQzZGXVwiLFxuICB0aGFpOiBcIltcXHUwRTUwLVxcdTBFNTldXCIsXG4gIHRpYnQ6IFwiW1xcdTBGMjAtXFx1MEYyOV1cIixcbiAgbGF0bjogXCJcXFxcZFwiXG59O1xudmFyIG51bWJlcmluZ1N5c3RlbXNVVEYxNiA9IHtcbiAgYXJhYjogWzE2MzIsIDE2NDFdLFxuICBhcmFiZXh0OiBbMTc3NiwgMTc4NV0sXG4gIGJhbGk6IFs2OTkyLCA3MDAxXSxcbiAgYmVuZzogWzI1MzQsIDI1NDNdLFxuICBkZXZhOiBbMjQwNiwgMjQxNV0sXG4gIGZ1bGx3aWRlOiBbNjUyOTYsIDY1MzAzXSxcbiAgZ3VqcjogWzI3OTAsIDI3OTldLFxuICBraG1yOiBbNjExMiwgNjEyMV0sXG4gIGtuZGE6IFszMzAyLCAzMzExXSxcbiAgbGFvbzogWzM3OTIsIDM4MDFdLFxuICBsaW1iOiBbNjQ3MCwgNjQ3OV0sXG4gIG1seW06IFszNDMwLCAzNDM5XSxcbiAgbW9uZzogWzYxNjAsIDYxNjldLFxuICBteW1yOiBbNDE2MCwgNDE2OV0sXG4gIG9yeWE6IFsyOTE4LCAyOTI3XSxcbiAgdGFtbGRlYzogWzMwNDYsIDMwNTVdLFxuICB0ZWx1OiBbMzE3NCwgMzE4M10sXG4gIHRoYWk6IFszNjY0LCAzNjczXSxcbiAgdGlidDogWzM4NzIsIDM4ODFdXG59OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxudmFyIGhhbmlkZWNDaGFycyA9IG51bWJlcmluZ1N5c3RlbXMuaGFuaWRlYy5yZXBsYWNlKC9bXFxbfFxcXV0vZywgXCJcIikuc3BsaXQoXCJcIik7XG5mdW5jdGlvbiBwYXJzZURpZ2l0cyhzdHIpIHtcbiAgdmFyIHZhbHVlID0gcGFyc2VJbnQoc3RyLCAxMCk7XG5cbiAgaWYgKGlzTmFOKHZhbHVlKSkge1xuICAgIHZhbHVlID0gXCJcIjtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuXG4gICAgICBpZiAoc3RyW2ldLnNlYXJjaChudW1iZXJpbmdTeXN0ZW1zLmhhbmlkZWMpICE9PSAtMSkge1xuICAgICAgICB2YWx1ZSArPSBoYW5pZGVjQ2hhcnMuaW5kZXhPZihzdHJbaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG51bWJlcmluZ1N5c3RlbXNVVEYxNikge1xuICAgICAgICAgIHZhciBfbnVtYmVyaW5nU3lzdGVtc1VURiA9IG51bWJlcmluZ1N5c3RlbXNVVEYxNltrZXldLFxuICAgICAgICAgICAgICBtaW4gPSBfbnVtYmVyaW5nU3lzdGVtc1VURlswXSxcbiAgICAgICAgICAgICAgbWF4ID0gX251bWJlcmluZ1N5c3RlbXNVVEZbMV07XG5cbiAgICAgICAgICBpZiAoY29kZSA+PSBtaW4gJiYgY29kZSA8PSBtYXgpIHtcbiAgICAgICAgICAgIHZhbHVlICs9IGNvZGUgLSBtaW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG5mdW5jdGlvbiBkaWdpdFJlZ2V4KF9yZWYsIGFwcGVuZCkge1xuICB2YXIgbnVtYmVyaW5nU3lzdGVtID0gX3JlZi5udW1iZXJpbmdTeXN0ZW07XG5cbiAgaWYgKGFwcGVuZCA9PT0gdm9pZCAwKSB7XG4gICAgYXBwZW5kID0gXCJcIjtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVnRXhwKFwiXCIgKyBudW1iZXJpbmdTeXN0ZW1zW251bWJlcmluZ1N5c3RlbSB8fCBcImxhdG5cIl0gKyBhcHBlbmQpO1xufVxuXG52YXIgTUlTU0lOR19GVFAgPSBcIm1pc3NpbmcgSW50bC5EYXRlVGltZUZvcm1hdC5mb3JtYXRUb1BhcnRzIHN1cHBvcnRcIjtcblxuZnVuY3Rpb24gaW50VW5pdChyZWdleCwgcG9zdCkge1xuICBpZiAocG9zdCA9PT0gdm9pZCAwKSB7XG4gICAgcG9zdCA9IGZ1bmN0aW9uIHBvc3QoaSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVnZXg6IHJlZ2V4LFxuICAgIGRlc2VyOiBmdW5jdGlvbiBkZXNlcihfcmVmKSB7XG4gICAgICB2YXIgcyA9IF9yZWZbMF07XG4gICAgICByZXR1cm4gcG9zdChwYXJzZURpZ2l0cyhzKSk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgTkJTUCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTYwKTtcbnZhciBzcGFjZU9yTkJTUCA9IFwiKCB8XCIgKyBOQlNQICsgXCIpXCI7XG52YXIgc3BhY2VPck5CU1BSZWdFeHAgPSBuZXcgUmVnRXhwKHNwYWNlT3JOQlNQLCBcImdcIik7XG5cbmZ1bmN0aW9uIGZpeExpc3RSZWdleChzKSB7XG4gIC8vIG1ha2UgZG90cyBvcHRpb25hbCBhbmQgYWxzbyBtYWtlIHRoZW0gbGl0ZXJhbFxuICAvLyBtYWtlIHNwYWNlIGFuZCBub24gYnJlYWthYmxlIHNwYWNlIGNoYXJhY3RlcnMgaW50ZXJjaGFuZ2VhYmxlXG4gIHJldHVybiBzLnJlcGxhY2UoL1xcLi9nLCBcIlxcXFwuP1wiKS5yZXBsYWNlKHNwYWNlT3JOQlNQUmVnRXhwLCBzcGFjZU9yTkJTUCk7XG59XG5cbmZ1bmN0aW9uIHN0cmlwSW5zZW5zaXRpdml0aWVzKHMpIHtcbiAgcmV0dXJuIHMucmVwbGFjZSgvXFwuL2csIFwiXCIpIC8vIGlnbm9yZSBkb3RzIHRoYXQgd2VyZSBtYWRlIG9wdGlvbmFsXG4gIC5yZXBsYWNlKHNwYWNlT3JOQlNQUmVnRXhwLCBcIiBcIikgLy8gaW50ZXJjaGFuZ2Ugc3BhY2UgYW5kIG5ic3BcbiAgLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIG9uZU9mKHN0cmluZ3MsIHN0YXJ0SW5kZXgpIHtcbiAgaWYgKHN0cmluZ3MgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVnZXg6IFJlZ0V4cChzdHJpbmdzLm1hcChmaXhMaXN0UmVnZXgpLmpvaW4oXCJ8XCIpKSxcbiAgICAgIGRlc2VyOiBmdW5jdGlvbiBkZXNlcihfcmVmMikge1xuICAgICAgICB2YXIgcyA9IF9yZWYyWzBdO1xuICAgICAgICByZXR1cm4gc3RyaW5ncy5maW5kSW5kZXgoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICByZXR1cm4gc3RyaXBJbnNlbnNpdGl2aXRpZXMocykgPT09IHN0cmlwSW5zZW5zaXRpdml0aWVzKGkpO1xuICAgICAgICB9KSArIHN0YXJ0SW5kZXg7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvZmZzZXQocmVnZXgsIGdyb3Vwcykge1xuICByZXR1cm4ge1xuICAgIHJlZ2V4OiByZWdleCxcbiAgICBkZXNlcjogZnVuY3Rpb24gZGVzZXIoX3JlZjMpIHtcbiAgICAgIHZhciBoID0gX3JlZjNbMV0sXG4gICAgICAgICAgbSA9IF9yZWYzWzJdO1xuICAgICAgcmV0dXJuIHNpZ25lZE9mZnNldChoLCBtKTtcbiAgICB9LFxuICAgIGdyb3VwczogZ3JvdXBzXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNpbXBsZShyZWdleCkge1xuICByZXR1cm4ge1xuICAgIHJlZ2V4OiByZWdleCxcbiAgICBkZXNlcjogZnVuY3Rpb24gZGVzZXIoX3JlZjQpIHtcbiAgICAgIHZhciBzID0gX3JlZjRbMF07XG4gICAgICByZXR1cm4gcztcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVzY2FwZVRva2VuKHZhbHVlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICByZXR1cm4gdmFsdWUucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csIFwiXFxcXCQmXCIpO1xufVxuXG5mdW5jdGlvbiB1bml0Rm9yVG9rZW4odG9rZW4sIGxvYykge1xuICB2YXIgb25lID0gZGlnaXRSZWdleChsb2MpLFxuICAgICAgdHdvID0gZGlnaXRSZWdleChsb2MsIFwiezJ9XCIpLFxuICAgICAgdGhyZWUgPSBkaWdpdFJlZ2V4KGxvYywgXCJ7M31cIiksXG4gICAgICBmb3VyID0gZGlnaXRSZWdleChsb2MsIFwiezR9XCIpLFxuICAgICAgc2l4ID0gZGlnaXRSZWdleChsb2MsIFwiezZ9XCIpLFxuICAgICAgb25lT3JUd28gPSBkaWdpdFJlZ2V4KGxvYywgXCJ7MSwyfVwiKSxcbiAgICAgIG9uZVRvVGhyZWUgPSBkaWdpdFJlZ2V4KGxvYywgXCJ7MSwzfVwiKSxcbiAgICAgIG9uZVRvU2l4ID0gZGlnaXRSZWdleChsb2MsIFwiezEsNn1cIiksXG4gICAgICBvbmVUb05pbmUgPSBkaWdpdFJlZ2V4KGxvYywgXCJ7MSw5fVwiKSxcbiAgICAgIHR3b1RvRm91ciA9IGRpZ2l0UmVnZXgobG9jLCBcInsyLDR9XCIpLFxuICAgICAgZm91clRvU2l4ID0gZGlnaXRSZWdleChsb2MsIFwiezQsNn1cIiksXG4gICAgICBsaXRlcmFsID0gZnVuY3Rpb24gbGl0ZXJhbCh0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZ2V4OiBSZWdFeHAoZXNjYXBlVG9rZW4odC52YWwpKSxcbiAgICAgIGRlc2VyOiBmdW5jdGlvbiBkZXNlcihfcmVmNSkge1xuICAgICAgICB2YXIgcyA9IF9yZWY1WzBdO1xuICAgICAgICByZXR1cm4gcztcbiAgICAgIH0sXG4gICAgICBsaXRlcmFsOiB0cnVlXG4gICAgfTtcbiAgfSxcbiAgICAgIHVuaXRhdGUgPSBmdW5jdGlvbiB1bml0YXRlKHQpIHtcbiAgICBpZiAodG9rZW4ubGl0ZXJhbCkge1xuICAgICAgcmV0dXJuIGxpdGVyYWwodCk7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0LnZhbCkge1xuICAgICAgLy8gZXJhXG4gICAgICBjYXNlIFwiR1wiOlxuICAgICAgICByZXR1cm4gb25lT2YobG9jLmVyYXMoXCJzaG9ydFwiLCBmYWxzZSksIDApO1xuXG4gICAgICBjYXNlIFwiR0dcIjpcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5lcmFzKFwibG9uZ1wiLCBmYWxzZSksIDApO1xuICAgICAgLy8geWVhcnNcblxuICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9TaXgpO1xuXG4gICAgICBjYXNlIFwieXlcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvVG9Gb3VyLCB1bnRydW5jYXRlWWVhcik7XG5cbiAgICAgIGNhc2UgXCJ5eXl5XCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KGZvdXIpO1xuXG4gICAgICBjYXNlIFwieXl5eXlcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQoZm91clRvU2l4KTtcblxuICAgICAgY2FzZSBcInl5eXl5eVwiOlxuICAgICAgICByZXR1cm4gaW50VW5pdChzaXgpO1xuICAgICAgLy8gbW9udGhzXG5cbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcblxuICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG5cbiAgICAgIGNhc2UgXCJNTU1cIjpcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoXCJzaG9ydFwiLCB0cnVlLCBmYWxzZSksIDEpO1xuXG4gICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocyhcImxvbmdcIiwgdHJ1ZSwgZmFsc2UpLCAxKTtcblxuICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuXG4gICAgICBjYXNlIFwiTExcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcblxuICAgICAgY2FzZSBcIkxMTFwiOlxuICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocyhcInNob3J0XCIsIGZhbHNlLCBmYWxzZSksIDEpO1xuXG4gICAgICBjYXNlIFwiTExMTFwiOlxuICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocyhcImxvbmdcIiwgZmFsc2UsIGZhbHNlKSwgMSk7XG4gICAgICAvLyBkYXRlc1xuXG4gICAgICBjYXNlIFwiZFwiOlxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG5cbiAgICAgIGNhc2UgXCJkZFwiOlxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgLy8gb3JkaW5hbHNcblxuICAgICAgY2FzZSBcIm9cIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9UaHJlZSk7XG5cbiAgICAgIGNhc2UgXCJvb29cIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodGhyZWUpO1xuICAgICAgLy8gdGltZVxuXG4gICAgICBjYXNlIFwiSEhcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcblxuICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuXG4gICAgICBjYXNlIFwiaGhcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcblxuICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuXG4gICAgICBjYXNlIFwibW1cIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcblxuICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuXG4gICAgICBjYXNlIFwicVwiOlxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG5cbiAgICAgIGNhc2UgXCJxcVwiOlxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuXG4gICAgICBjYXNlIFwic1wiOlxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG5cbiAgICAgIGNhc2UgXCJzc1wiOlxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuXG4gICAgICBjYXNlIFwiU1wiOlxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVUb1RocmVlKTtcblxuICAgICAgY2FzZSBcIlNTU1wiOlxuICAgICAgICByZXR1cm4gaW50VW5pdCh0aHJlZSk7XG5cbiAgICAgIGNhc2UgXCJ1XCI6XG4gICAgICAgIHJldHVybiBzaW1wbGUob25lVG9OaW5lKTtcbiAgICAgIC8vIG1lcmlkaWVtXG5cbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgIHJldHVybiBvbmVPZihsb2MubWVyaWRpZW1zKCksIDApO1xuICAgICAgLy8gd2Vla1llYXIgKGspXG5cbiAgICAgIGNhc2UgXCJra2trXCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KGZvdXIpO1xuXG4gICAgICBjYXNlIFwia2tcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvVG9Gb3VyLCB1bnRydW5jYXRlWWVhcik7XG4gICAgICAvLyB3ZWVrTnVtYmVyIChXKVxuXG4gICAgICBjYXNlIFwiV1wiOlxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG5cbiAgICAgIGNhc2UgXCJXV1wiOlxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgLy8gd2Vla2RheXNcblxuICAgICAgY2FzZSBcIkVcIjpcbiAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZSk7XG5cbiAgICAgIGNhc2UgXCJFRUVcIjpcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cyhcInNob3J0XCIsIGZhbHNlLCBmYWxzZSksIDEpO1xuXG4gICAgICBjYXNlIFwiRUVFRVwiOlxuICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKFwibG9uZ1wiLCBmYWxzZSwgZmFsc2UpLCAxKTtcblxuICAgICAgY2FzZSBcImNjY1wiOlxuICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKFwic2hvcnRcIiwgdHJ1ZSwgZmFsc2UpLCAxKTtcblxuICAgICAgY2FzZSBcImNjY2NcIjpcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cyhcImxvbmdcIiwgdHJ1ZSwgZmFsc2UpLCAxKTtcbiAgICAgIC8vIG9mZnNldC96b25lXG5cbiAgICAgIGNhc2UgXCJaXCI6XG4gICAgICBjYXNlIFwiWlpcIjpcbiAgICAgICAgcmV0dXJuIG9mZnNldChuZXcgUmVnRXhwKFwiKFsrLV1cIiArIG9uZU9yVHdvLnNvdXJjZSArIFwiKSg/OjooXCIgKyB0d28uc291cmNlICsgXCIpKT9cIiksIDIpO1xuXG4gICAgICBjYXNlIFwiWlpaXCI6XG4gICAgICAgIHJldHVybiBvZmZzZXQobmV3IFJlZ0V4cChcIihbKy1dXCIgKyBvbmVPclR3by5zb3VyY2UgKyBcIikoXCIgKyB0d28uc291cmNlICsgXCIpP1wiKSwgMik7XG4gICAgICAvLyB3ZSBkb24ndCBzdXBwb3J0IFpaWlogKFBTVCkgb3IgWlpaWlogKFBhY2lmaWMgU3RhbmRhcmQgVGltZSkgaW4gcGFyc2luZ1xuICAgICAgLy8gYmVjYXVzZSB3ZSBkb24ndCBoYXZlIGFueSB3YXkgdG8gZmlndXJlIG91dCB3aGF0IHRoZXkgYXJlXG5cbiAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICAgIHJldHVybiBzaW1wbGUoL1thLXpfKy0vXXsxLDI1Nn0/L2kpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbGl0ZXJhbCh0KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHVuaXQgPSB1bml0YXRlKHRva2VuKSB8fCB7XG4gICAgaW52YWxpZFJlYXNvbjogTUlTU0lOR19GVFBcbiAgfTtcbiAgdW5pdC50b2tlbiA9IHRva2VuO1xuICByZXR1cm4gdW5pdDtcbn1cblxudmFyIHBhcnRUeXBlU3R5bGVUb1Rva2VuVmFsID0ge1xuICB5ZWFyOiB7XG4gICAgXCIyLWRpZ2l0XCI6IFwieXlcIixcbiAgICBudW1lcmljOiBcInl5eXl5XCJcbiAgfSxcbiAgbW9udGg6IHtcbiAgICBudW1lcmljOiBcIk1cIixcbiAgICBcIjItZGlnaXRcIjogXCJNTVwiLFxuICAgIHNob3J0OiBcIk1NTVwiLFxuICAgIGxvbmc6IFwiTU1NTVwiXG4gIH0sXG4gIGRheToge1xuICAgIG51bWVyaWM6IFwiZFwiLFxuICAgIFwiMi1kaWdpdFwiOiBcImRkXCJcbiAgfSxcbiAgd2Vla2RheToge1xuICAgIHNob3J0OiBcIkVFRVwiLFxuICAgIGxvbmc6IFwiRUVFRVwiXG4gIH0sXG4gIGRheXBlcmlvZDogXCJhXCIsXG4gIGRheVBlcmlvZDogXCJhXCIsXG4gIGhvdXI6IHtcbiAgICBudW1lcmljOiBcImhcIixcbiAgICBcIjItZGlnaXRcIjogXCJoaFwiXG4gIH0sXG4gIG1pbnV0ZToge1xuICAgIG51bWVyaWM6IFwibVwiLFxuICAgIFwiMi1kaWdpdFwiOiBcIm1tXCJcbiAgfSxcbiAgc2Vjb25kOiB7XG4gICAgbnVtZXJpYzogXCJzXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwic3NcIlxuICB9XG59O1xuXG5mdW5jdGlvbiB0b2tlbkZvclBhcnQocGFydCwgbG9jYWxlLCBmb3JtYXRPcHRzKSB7XG4gIHZhciB0eXBlID0gcGFydC50eXBlLFxuICAgICAgdmFsdWUgPSBwYXJ0LnZhbHVlO1xuXG4gIGlmICh0eXBlID09PSBcImxpdGVyYWxcIikge1xuICAgIHJldHVybiB7XG4gICAgICBsaXRlcmFsOiB0cnVlLFxuICAgICAgdmFsOiB2YWx1ZVxuICAgIH07XG4gIH1cblxuICB2YXIgc3R5bGUgPSBmb3JtYXRPcHRzW3R5cGVdO1xuICB2YXIgdmFsID0gcGFydFR5cGVTdHlsZVRvVG9rZW5WYWxbdHlwZV07XG5cbiAgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpIHtcbiAgICB2YWwgPSB2YWxbc3R5bGVdO1xuICB9XG5cbiAgaWYgKHZhbCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaXRlcmFsOiBmYWxzZSxcbiAgICAgIHZhbDogdmFsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUmVnZXgodW5pdHMpIHtcbiAgdmFyIHJlID0gdW5pdHMubWFwKGZ1bmN0aW9uICh1KSB7XG4gICAgcmV0dXJuIHUucmVnZXg7XG4gIH0pLnJlZHVjZShmdW5jdGlvbiAoZiwgcikge1xuICAgIHJldHVybiBmICsgXCIoXCIgKyByLnNvdXJjZSArIFwiKVwiO1xuICB9LCBcIlwiKTtcbiAgcmV0dXJuIFtcIl5cIiArIHJlICsgXCIkXCIsIHVuaXRzXTtcbn1cblxuZnVuY3Rpb24gbWF0Y2goaW5wdXQsIHJlZ2V4LCBoYW5kbGVycykge1xuICB2YXIgbWF0Y2hlcyA9IGlucHV0Lm1hdGNoKHJlZ2V4KTtcblxuICBpZiAobWF0Y2hlcykge1xuICAgIHZhciBhbGwgPSB7fTtcbiAgICB2YXIgbWF0Y2hJbmRleCA9IDE7XG5cbiAgICBmb3IgKHZhciBpIGluIGhhbmRsZXJzKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkoaGFuZGxlcnMsIGkpKSB7XG4gICAgICAgIHZhciBoID0gaGFuZGxlcnNbaV0sXG4gICAgICAgICAgICBncm91cHMgPSBoLmdyb3VwcyA/IGguZ3JvdXBzICsgMSA6IDE7XG5cbiAgICAgICAgaWYgKCFoLmxpdGVyYWwgJiYgaC50b2tlbikge1xuICAgICAgICAgIGFsbFtoLnRva2VuLnZhbFswXV0gPSBoLmRlc2VyKG1hdGNoZXMuc2xpY2UobWF0Y2hJbmRleCwgbWF0Y2hJbmRleCArIGdyb3VwcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0Y2hJbmRleCArPSBncm91cHM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFttYXRjaGVzLCBhbGxdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbbWF0Y2hlcywge31dO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRhdGVUaW1lRnJvbU1hdGNoZXMobWF0Y2hlcykge1xuICB2YXIgdG9GaWVsZCA9IGZ1bmN0aW9uIHRvRmllbGQodG9rZW4pIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiU1wiOlxuICAgICAgICByZXR1cm4gXCJtaWxsaXNlY29uZFwiO1xuXG4gICAgICBjYXNlIFwic1wiOlxuICAgICAgICByZXR1cm4gXCJzZWNvbmRcIjtcblxuICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgcmV0dXJuIFwibWludXRlXCI7XG5cbiAgICAgIGNhc2UgXCJoXCI6XG4gICAgICBjYXNlIFwiSFwiOlxuICAgICAgICByZXR1cm4gXCJob3VyXCI7XG5cbiAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgIHJldHVybiBcImRheVwiO1xuXG4gICAgICBjYXNlIFwib1wiOlxuICAgICAgICByZXR1cm4gXCJvcmRpbmFsXCI7XG5cbiAgICAgIGNhc2UgXCJMXCI6XG4gICAgICBjYXNlIFwiTVwiOlxuICAgICAgICByZXR1cm4gXCJtb250aFwiO1xuXG4gICAgICBjYXNlIFwieVwiOlxuICAgICAgICByZXR1cm4gXCJ5ZWFyXCI7XG5cbiAgICAgIGNhc2UgXCJFXCI6XG4gICAgICBjYXNlIFwiY1wiOlxuICAgICAgICByZXR1cm4gXCJ3ZWVrZGF5XCI7XG5cbiAgICAgIGNhc2UgXCJXXCI6XG4gICAgICAgIHJldHVybiBcIndlZWtOdW1iZXJcIjtcblxuICAgICAgY2FzZSBcImtcIjpcbiAgICAgICAgcmV0dXJuIFwid2Vla1llYXJcIjtcblxuICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgcmV0dXJuIFwicXVhcnRlclwiO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHpvbmU7XG5cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLlopKSB7XG4gICAgem9uZSA9IG5ldyBGaXhlZE9mZnNldFpvbmUobWF0Y2hlcy5aKTtcbiAgfSBlbHNlIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy56KSkge1xuICAgIHpvbmUgPSBJQU5BWm9uZS5jcmVhdGUobWF0Y2hlcy56KTtcbiAgfSBlbHNlIHtcbiAgICB6b25lID0gbnVsbDtcbiAgfVxuXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5xKSkge1xuICAgIG1hdGNoZXMuTSA9IChtYXRjaGVzLnEgLSAxKSAqIDMgKyAxO1xuICB9XG5cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLmgpKSB7XG4gICAgaWYgKG1hdGNoZXMuaCA8IDEyICYmIG1hdGNoZXMuYSA9PT0gMSkge1xuICAgICAgbWF0Y2hlcy5oICs9IDEyO1xuICAgIH0gZWxzZSBpZiAobWF0Y2hlcy5oID09PSAxMiAmJiBtYXRjaGVzLmEgPT09IDApIHtcbiAgICAgIG1hdGNoZXMuaCA9IDA7XG4gICAgfVxuICB9XG5cbiAgaWYgKG1hdGNoZXMuRyA9PT0gMCAmJiBtYXRjaGVzLnkpIHtcbiAgICBtYXRjaGVzLnkgPSAtbWF0Y2hlcy55O1xuICB9XG5cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLnUpKSB7XG4gICAgbWF0Y2hlcy5TID0gcGFyc2VNaWxsaXMobWF0Y2hlcy51KTtcbiAgfVxuXG4gIHZhciB2YWxzID0gT2JqZWN0LmtleXMobWF0Y2hlcykucmVkdWNlKGZ1bmN0aW9uIChyLCBrKSB7XG4gICAgdmFyIGYgPSB0b0ZpZWxkKGspO1xuXG4gICAgaWYgKGYpIHtcbiAgICAgIHJbZl0gPSBtYXRjaGVzW2tdO1xuICAgIH1cblxuICAgIHJldHVybiByO1xuICB9LCB7fSk7XG4gIHJldHVybiBbdmFscywgem9uZV07XG59XG5cbnZhciBkdW1teURhdGVUaW1lQ2FjaGUgPSBudWxsO1xuXG5mdW5jdGlvbiBnZXREdW1teURhdGVUaW1lKCkge1xuICBpZiAoIWR1bW15RGF0ZVRpbWVDYWNoZSkge1xuICAgIGR1bW15RGF0ZVRpbWVDYWNoZSA9IERhdGVUaW1lLmZyb21NaWxsaXMoMTU1NTU1NTU1NTU1NSk7XG4gIH1cblxuICByZXR1cm4gZHVtbXlEYXRlVGltZUNhY2hlO1xufVxuXG5mdW5jdGlvbiBtYXliZUV4cGFuZE1hY3JvVG9rZW4odG9rZW4sIGxvY2FsZSkge1xuICBpZiAodG9rZW4ubGl0ZXJhbCkge1xuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHZhciBmb3JtYXRPcHRzID0gRm9ybWF0dGVyLm1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHModG9rZW4udmFsKTtcblxuICBpZiAoIWZvcm1hdE9wdHMpIHtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICB2YXIgZm9ybWF0dGVyID0gRm9ybWF0dGVyLmNyZWF0ZShsb2NhbGUsIGZvcm1hdE9wdHMpO1xuICB2YXIgcGFydHMgPSBmb3JtYXR0ZXIuZm9ybWF0RGF0ZVRpbWVQYXJ0cyhnZXREdW1teURhdGVUaW1lKCkpO1xuICB2YXIgdG9rZW5zID0gcGFydHMubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHRva2VuRm9yUGFydChwLCBsb2NhbGUsIGZvcm1hdE9wdHMpO1xuICB9KTtcblxuICBpZiAodG9rZW5zLmluY2x1ZGVzKHVuZGVmaW5lZCkpIHtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5mdW5jdGlvbiBleHBhbmRNYWNyb1Rva2Vucyh0b2tlbnMsIGxvY2FsZSkge1xuICB2YXIgX0FycmF5JHByb3RvdHlwZTtcblxuICByZXR1cm4gKF9BcnJheSRwcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGUpLmNvbmNhdC5hcHBseShfQXJyYXkkcHJvdG90eXBlLCB0b2tlbnMubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIG1heWJlRXhwYW5kTWFjcm9Ub2tlbih0LCBsb2NhbGUpO1xuICB9KSk7XG59XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBleHBsYWluRnJvbVRva2Vucyhsb2NhbGUsIGlucHV0LCBmb3JtYXQpIHtcbiAgdmFyIHRva2VucyA9IGV4cGFuZE1hY3JvVG9rZW5zKEZvcm1hdHRlci5wYXJzZUZvcm1hdChmb3JtYXQpLCBsb2NhbGUpLFxuICAgICAgdW5pdHMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIHVuaXRGb3JUb2tlbih0LCBsb2NhbGUpO1xuICB9KSxcbiAgICAgIGRpc3F1YWxpZnlpbmdVbml0ID0gdW5pdHMuZmluZChmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB0LmludmFsaWRSZWFzb247XG4gIH0pO1xuXG4gIGlmIChkaXNxdWFsaWZ5aW5nVW5pdCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnB1dDogaW5wdXQsXG4gICAgICB0b2tlbnM6IHRva2VucyxcbiAgICAgIGludmFsaWRSZWFzb246IGRpc3F1YWxpZnlpbmdVbml0LmludmFsaWRSZWFzb25cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHZhciBfYnVpbGRSZWdleCA9IGJ1aWxkUmVnZXgodW5pdHMpLFxuICAgICAgICByZWdleFN0cmluZyA9IF9idWlsZFJlZ2V4WzBdLFxuICAgICAgICBoYW5kbGVycyA9IF9idWlsZFJlZ2V4WzFdLFxuICAgICAgICByZWdleCA9IFJlZ0V4cChyZWdleFN0cmluZywgXCJpXCIpLFxuICAgICAgICBfbWF0Y2ggPSBtYXRjaChpbnB1dCwgcmVnZXgsIGhhbmRsZXJzKSxcbiAgICAgICAgcmF3TWF0Y2hlcyA9IF9tYXRjaFswXSxcbiAgICAgICAgbWF0Y2hlcyA9IF9tYXRjaFsxXSxcbiAgICAgICAgX3JlZjYgPSBtYXRjaGVzID8gZGF0ZVRpbWVGcm9tTWF0Y2hlcyhtYXRjaGVzKSA6IFtudWxsLCBudWxsXSxcbiAgICAgICAgcmVzdWx0ID0gX3JlZjZbMF0sXG4gICAgICAgIHpvbmUgPSBfcmVmNlsxXTtcblxuICAgIGlmIChoYXNPd25Qcm9wZXJ0eShtYXRjaGVzLCBcImFcIikgJiYgaGFzT3duUHJvcGVydHkobWF0Y2hlcywgXCJIXCIpKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXCJDYW4ndCBpbmNsdWRlIG1lcmlkaWVtIHdoZW4gc3BlY2lmeWluZyAyNC1ob3VyIGZvcm1hdFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaW5wdXQ6IGlucHV0LFxuICAgICAgdG9rZW5zOiB0b2tlbnMsXG4gICAgICByZWdleDogcmVnZXgsXG4gICAgICByYXdNYXRjaGVzOiByYXdNYXRjaGVzLFxuICAgICAgbWF0Y2hlczogbWF0Y2hlcyxcbiAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgem9uZTogem9uZVxuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIHBhcnNlRnJvbVRva2Vucyhsb2NhbGUsIGlucHV0LCBmb3JtYXQpIHtcbiAgdmFyIF9leHBsYWluRnJvbVRva2VucyA9IGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCksXG4gICAgICByZXN1bHQgPSBfZXhwbGFpbkZyb21Ub2tlbnMucmVzdWx0LFxuICAgICAgem9uZSA9IF9leHBsYWluRnJvbVRva2Vucy56b25lLFxuICAgICAgaW52YWxpZFJlYXNvbiA9IF9leHBsYWluRnJvbVRva2Vucy5pbnZhbGlkUmVhc29uO1xuXG4gIHJldHVybiBbcmVzdWx0LCB6b25lLCBpbnZhbGlkUmVhc29uXTtcbn1cblxudmFyIG5vbkxlYXBMYWRkZXIgPSBbMCwgMzEsIDU5LCA5MCwgMTIwLCAxNTEsIDE4MSwgMjEyLCAyNDMsIDI3MywgMzA0LCAzMzRdLFxuICAgIGxlYXBMYWRkZXIgPSBbMCwgMzEsIDYwLCA5MSwgMTIxLCAxNTIsIDE4MiwgMjEzLCAyNDQsIDI3NCwgMzA1LCAzMzVdO1xuXG5mdW5jdGlvbiB1bml0T3V0T2ZSYW5nZSh1bml0LCB2YWx1ZSkge1xuICByZXR1cm4gbmV3IEludmFsaWQoXCJ1bml0IG91dCBvZiByYW5nZVwiLCBcInlvdSBzcGVjaWZpZWQgXCIgKyB2YWx1ZSArIFwiIChvZiB0eXBlIFwiICsgdHlwZW9mIHZhbHVlICsgXCIpIGFzIGEgXCIgKyB1bml0ICsgXCIsIHdoaWNoIGlzIGludmFsaWRcIik7XG59XG5cbmZ1bmN0aW9uIGRheU9mV2Vlayh5ZWFyLCBtb250aCwgZGF5KSB7XG4gIHZhciBqcyA9IG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoIC0gMSwgZGF5KSkuZ2V0VVRDRGF5KCk7XG4gIHJldHVybiBqcyA9PT0gMCA/IDcgOiBqcztcbn1cblxuZnVuY3Rpb24gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSkge1xuICByZXR1cm4gZGF5ICsgKGlzTGVhcFllYXIoeWVhcikgPyBsZWFwTGFkZGVyIDogbm9uTGVhcExhZGRlcilbbW9udGggLSAxXTtcbn1cblxuZnVuY3Rpb24gdW5jb21wdXRlT3JkaW5hbCh5ZWFyLCBvcmRpbmFsKSB7XG4gIHZhciB0YWJsZSA9IGlzTGVhcFllYXIoeWVhcikgPyBsZWFwTGFkZGVyIDogbm9uTGVhcExhZGRlcixcbiAgICAgIG1vbnRoMCA9IHRhYmxlLmZpbmRJbmRleChmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpIDwgb3JkaW5hbDtcbiAgfSksXG4gICAgICBkYXkgPSBvcmRpbmFsIC0gdGFibGVbbW9udGgwXTtcbiAgcmV0dXJuIHtcbiAgICBtb250aDogbW9udGgwICsgMSxcbiAgICBkYXk6IGRheVxuICB9O1xufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gZ3JlZ29yaWFuVG9XZWVrKGdyZWdPYmopIHtcbiAgdmFyIHllYXIgPSBncmVnT2JqLnllYXIsXG4gICAgICBtb250aCA9IGdyZWdPYmoubW9udGgsXG4gICAgICBkYXkgPSBncmVnT2JqLmRheSxcbiAgICAgIG9yZGluYWwgPSBjb21wdXRlT3JkaW5hbCh5ZWFyLCBtb250aCwgZGF5KSxcbiAgICAgIHdlZWtkYXkgPSBkYXlPZldlZWsoeWVhciwgbW9udGgsIGRheSk7XG4gIHZhciB3ZWVrTnVtYmVyID0gTWF0aC5mbG9vcigob3JkaW5hbCAtIHdlZWtkYXkgKyAxMCkgLyA3KSxcbiAgICAgIHdlZWtZZWFyO1xuXG4gIGlmICh3ZWVrTnVtYmVyIDwgMSkge1xuICAgIHdlZWtZZWFyID0geWVhciAtIDE7XG4gICAgd2Vla051bWJlciA9IHdlZWtzSW5XZWVrWWVhcih3ZWVrWWVhcik7XG4gIH0gZWxzZSBpZiAod2Vla051bWJlciA+IHdlZWtzSW5XZWVrWWVhcih5ZWFyKSkge1xuICAgIHdlZWtZZWFyID0geWVhciArIDE7XG4gICAgd2Vla051bWJlciA9IDE7XG4gIH0gZWxzZSB7XG4gICAgd2Vla1llYXIgPSB5ZWFyO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xuICAgIHdlZWtZZWFyOiB3ZWVrWWVhcixcbiAgICB3ZWVrTnVtYmVyOiB3ZWVrTnVtYmVyLFxuICAgIHdlZWtkYXk6IHdlZWtkYXlcbiAgfSwgdGltZU9iamVjdChncmVnT2JqKSk7XG59XG5mdW5jdGlvbiB3ZWVrVG9HcmVnb3JpYW4od2Vla0RhdGEpIHtcbiAgdmFyIHdlZWtZZWFyID0gd2Vla0RhdGEud2Vla1llYXIsXG4gICAgICB3ZWVrTnVtYmVyID0gd2Vla0RhdGEud2Vla051bWJlcixcbiAgICAgIHdlZWtkYXkgPSB3ZWVrRGF0YS53ZWVrZGF5LFxuICAgICAgd2Vla2RheU9mSmFuNCA9IGRheU9mV2Vlayh3ZWVrWWVhciwgMSwgNCksXG4gICAgICB5ZWFySW5EYXlzID0gZGF5c0luWWVhcih3ZWVrWWVhcik7XG4gIHZhciBvcmRpbmFsID0gd2Vla051bWJlciAqIDcgKyB3ZWVrZGF5IC0gd2Vla2RheU9mSmFuNCAtIDMsXG4gICAgICB5ZWFyO1xuXG4gIGlmIChvcmRpbmFsIDwgMSkge1xuICAgIHllYXIgPSB3ZWVrWWVhciAtIDE7XG4gICAgb3JkaW5hbCArPSBkYXlzSW5ZZWFyKHllYXIpO1xuICB9IGVsc2UgaWYgKG9yZGluYWwgPiB5ZWFySW5EYXlzKSB7XG4gICAgeWVhciA9IHdlZWtZZWFyICsgMTtcbiAgICBvcmRpbmFsIC09IGRheXNJblllYXIod2Vla1llYXIpO1xuICB9IGVsc2Uge1xuICAgIHllYXIgPSB3ZWVrWWVhcjtcbiAgfVxuXG4gIHZhciBfdW5jb21wdXRlT3JkaW5hbCA9IHVuY29tcHV0ZU9yZGluYWwoeWVhciwgb3JkaW5hbCksXG4gICAgICBtb250aCA9IF91bmNvbXB1dGVPcmRpbmFsLm1vbnRoLFxuICAgICAgZGF5ID0gX3VuY29tcHV0ZU9yZGluYWwuZGF5O1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHtcbiAgICB5ZWFyOiB5ZWFyLFxuICAgIG1vbnRoOiBtb250aCxcbiAgICBkYXk6IGRheVxuICB9LCB0aW1lT2JqZWN0KHdlZWtEYXRhKSk7XG59XG5mdW5jdGlvbiBncmVnb3JpYW5Ub09yZGluYWwoZ3JlZ0RhdGEpIHtcbiAgdmFyIHllYXIgPSBncmVnRGF0YS55ZWFyLFxuICAgICAgbW9udGggPSBncmVnRGF0YS5tb250aCxcbiAgICAgIGRheSA9IGdyZWdEYXRhLmRheSxcbiAgICAgIG9yZGluYWwgPSBjb21wdXRlT3JkaW5hbCh5ZWFyLCBtb250aCwgZGF5KTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xuICAgIHllYXI6IHllYXIsXG4gICAgb3JkaW5hbDogb3JkaW5hbFxuICB9LCB0aW1lT2JqZWN0KGdyZWdEYXRhKSk7XG59XG5mdW5jdGlvbiBvcmRpbmFsVG9HcmVnb3JpYW4ob3JkaW5hbERhdGEpIHtcbiAgdmFyIHllYXIgPSBvcmRpbmFsRGF0YS55ZWFyLFxuICAgICAgb3JkaW5hbCA9IG9yZGluYWxEYXRhLm9yZGluYWwsXG4gICAgICBfdW5jb21wdXRlT3JkaW5hbDIgPSB1bmNvbXB1dGVPcmRpbmFsKHllYXIsIG9yZGluYWwpLFxuICAgICAgbW9udGggPSBfdW5jb21wdXRlT3JkaW5hbDIubW9udGgsXG4gICAgICBkYXkgPSBfdW5jb21wdXRlT3JkaW5hbDIuZGF5O1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHtcbiAgICB5ZWFyOiB5ZWFyLFxuICAgIG1vbnRoOiBtb250aCxcbiAgICBkYXk6IGRheVxuICB9LCB0aW1lT2JqZWN0KG9yZGluYWxEYXRhKSk7XG59XG5mdW5jdGlvbiBoYXNJbnZhbGlkV2Vla0RhdGEob2JqKSB7XG4gIHZhciB2YWxpZFllYXIgPSBpc0ludGVnZXIob2JqLndlZWtZZWFyKSxcbiAgICAgIHZhbGlkV2VlayA9IGludGVnZXJCZXR3ZWVuKG9iai53ZWVrTnVtYmVyLCAxLCB3ZWVrc0luV2Vla1llYXIob2JqLndlZWtZZWFyKSksXG4gICAgICB2YWxpZFdlZWtkYXkgPSBpbnRlZ2VyQmV0d2VlbihvYmoud2Vla2RheSwgMSwgNyk7XG5cbiAgaWYgKCF2YWxpZFllYXIpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ3ZWVrWWVhclwiLCBvYmoud2Vla1llYXIpO1xuICB9IGVsc2UgaWYgKCF2YWxpZFdlZWspIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ3ZWVrXCIsIG9iai53ZWVrKTtcbiAgfSBlbHNlIGlmICghdmFsaWRXZWVrZGF5KSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwid2Vla2RheVwiLCBvYmoud2Vla2RheSk7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBoYXNJbnZhbGlkT3JkaW5hbERhdGEob2JqKSB7XG4gIHZhciB2YWxpZFllYXIgPSBpc0ludGVnZXIob2JqLnllYXIpLFxuICAgICAgdmFsaWRPcmRpbmFsID0gaW50ZWdlckJldHdlZW4ob2JqLm9yZGluYWwsIDEsIGRheXNJblllYXIob2JqLnllYXIpKTtcblxuICBpZiAoIXZhbGlkWWVhcikge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcInllYXJcIiwgb2JqLnllYXIpO1xuICB9IGVsc2UgaWYgKCF2YWxpZE9yZGluYWwpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJvcmRpbmFsXCIsIG9iai5vcmRpbmFsKTtcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhKG9iaikge1xuICB2YXIgdmFsaWRZZWFyID0gaXNJbnRlZ2VyKG9iai55ZWFyKSxcbiAgICAgIHZhbGlkTW9udGggPSBpbnRlZ2VyQmV0d2VlbihvYmoubW9udGgsIDEsIDEyKSxcbiAgICAgIHZhbGlkRGF5ID0gaW50ZWdlckJldHdlZW4ob2JqLmRheSwgMSwgZGF5c0luTW9udGgob2JqLnllYXIsIG9iai5tb250aCkpO1xuXG4gIGlmICghdmFsaWRZZWFyKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwieWVhclwiLCBvYmoueWVhcik7XG4gIH0gZWxzZSBpZiAoIXZhbGlkTW9udGgpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJtb250aFwiLCBvYmoubW9udGgpO1xuICB9IGVsc2UgaWYgKCF2YWxpZERheSkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcImRheVwiLCBvYmouZGF5KTtcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGhhc0ludmFsaWRUaW1lRGF0YShvYmopIHtcbiAgdmFyIGhvdXIgPSBvYmouaG91cixcbiAgICAgIG1pbnV0ZSA9IG9iai5taW51dGUsXG4gICAgICBzZWNvbmQgPSBvYmouc2Vjb25kLFxuICAgICAgbWlsbGlzZWNvbmQgPSBvYmoubWlsbGlzZWNvbmQ7XG4gIHZhciB2YWxpZEhvdXIgPSBpbnRlZ2VyQmV0d2Vlbihob3VyLCAwLCAyMykgfHwgaG91ciA9PT0gMjQgJiYgbWludXRlID09PSAwICYmIHNlY29uZCA9PT0gMCAmJiBtaWxsaXNlY29uZCA9PT0gMCxcbiAgICAgIHZhbGlkTWludXRlID0gaW50ZWdlckJldHdlZW4obWludXRlLCAwLCA1OSksXG4gICAgICB2YWxpZFNlY29uZCA9IGludGVnZXJCZXR3ZWVuKHNlY29uZCwgMCwgNTkpLFxuICAgICAgdmFsaWRNaWxsaXNlY29uZCA9IGludGVnZXJCZXR3ZWVuKG1pbGxpc2Vjb25kLCAwLCA5OTkpO1xuXG4gIGlmICghdmFsaWRIb3VyKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwiaG91clwiLCBob3VyKTtcbiAgfSBlbHNlIGlmICghdmFsaWRNaW51dGUpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJtaW51dGVcIiwgbWludXRlKTtcbiAgfSBlbHNlIGlmICghdmFsaWRTZWNvbmQpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJzZWNvbmRcIiwgc2Vjb25kKTtcbiAgfSBlbHNlIGlmICghdmFsaWRNaWxsaXNlY29uZCkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIm1pbGxpc2Vjb25kXCIsIG1pbGxpc2Vjb25kKTtcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcbn1cblxudmFyIElOVkFMSUQkMiA9IFwiSW52YWxpZCBEYXRlVGltZVwiO1xudmFyIE1BWF9EQVRFID0gOC42NGUxNTtcblxuZnVuY3Rpb24gdW5zdXBwb3J0ZWRab25lKHpvbmUpIHtcbiAgcmV0dXJuIG5ldyBJbnZhbGlkKFwidW5zdXBwb3J0ZWQgem9uZVwiLCBcInRoZSB6b25lIFxcXCJcIiArIHpvbmUubmFtZSArIFwiXFxcIiBpcyBub3Qgc3VwcG9ydGVkXCIpO1xufSAvLyB3ZSBjYWNoZSB3ZWVrIGRhdGEgb24gdGhlIERUIG9iamVjdCBhbmQgdGhpcyBpbnRlcm1lZGlhdGVzIHRoZSBjYWNoZVxuXG5cbmZ1bmN0aW9uIHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEoZHQpIHtcbiAgaWYgKGR0LndlZWtEYXRhID09PSBudWxsKSB7XG4gICAgZHQud2Vla0RhdGEgPSBncmVnb3JpYW5Ub1dlZWsoZHQuYyk7XG4gIH1cblxuICByZXR1cm4gZHQud2Vla0RhdGE7XG59IC8vIGNsb25lIHJlYWxseSBtZWFucywgXCJtYWtlIGEgbmV3IG9iamVjdCB3aXRoIHRoZXNlIG1vZGlmaWNhdGlvbnNcIi4gYWxsIFwic2V0dGVyc1wiIHJlYWxseSB1c2UgdGhpc1xuLy8gdG8gY3JlYXRlIGEgbmV3IG9iamVjdCB3aGlsZSBvbmx5IGNoYW5naW5nIHNvbWUgb2YgdGhlIHByb3BlcnRpZXNcblxuXG5mdW5jdGlvbiBjbG9uZSQxKGluc3QsIGFsdHMpIHtcbiAgdmFyIGN1cnJlbnQgPSB7XG4gICAgdHM6IGluc3QudHMsXG4gICAgem9uZTogaW5zdC56b25lLFxuICAgIGM6IGluc3QuYyxcbiAgICBvOiBpbnN0Lm8sXG4gICAgbG9jOiBpbnN0LmxvYyxcbiAgICBpbnZhbGlkOiBpbnN0LmludmFsaWRcbiAgfTtcbiAgcmV0dXJuIG5ldyBEYXRlVGltZShPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50LCBhbHRzLCB7XG4gICAgb2xkOiBjdXJyZW50XG4gIH0pKTtcbn0gLy8gZmluZCB0aGUgcmlnaHQgb2Zmc2V0IGEgZ2l2ZW4gbG9jYWwgdGltZS4gVGhlIG8gaW5wdXQgaXMgb3VyIGd1ZXNzLCB3aGljaCBkZXRlcm1pbmVzIHdoaWNoXG4vLyBvZmZzZXQgd2UnbGwgcGljayBpbiBhbWJpZ3VvdXMgY2FzZXMgKGUuZy4gdGhlcmUgYXJlIHR3byAzIEFNcyBiL2MgRmFsbGJhY2sgRFNUKVxuXG5cbmZ1bmN0aW9uIGZpeE9mZnNldChsb2NhbFRTLCBvLCB0eikge1xuICAvLyBPdXIgVVRDIHRpbWUgaXMganVzdCBhIGd1ZXNzIGJlY2F1c2Ugb3VyIG9mZnNldCBpcyBqdXN0IGEgZ3Vlc3NcbiAgdmFyIHV0Y0d1ZXNzID0gbG9jYWxUUyAtIG8gKiA2MCAqIDEwMDA7IC8vIFRlc3Qgd2hldGhlciB0aGUgem9uZSBtYXRjaGVzIHRoZSBvZmZzZXQgZm9yIHRoaXMgdHNcblxuICB2YXIgbzIgPSB0ei5vZmZzZXQodXRjR3Vlc3MpOyAvLyBJZiBzbywgb2Zmc2V0IGRpZG4ndCBjaGFuZ2UgYW5kIHdlJ3JlIGRvbmVcblxuICBpZiAobyA9PT0gbzIpIHtcbiAgICByZXR1cm4gW3V0Y0d1ZXNzLCBvXTtcbiAgfSAvLyBJZiBub3QsIGNoYW5nZSB0aGUgdHMgYnkgdGhlIGRpZmZlcmVuY2UgaW4gdGhlIG9mZnNldFxuXG5cbiAgdXRjR3Vlc3MgLT0gKG8yIC0gbykgKiA2MCAqIDEwMDA7IC8vIElmIHRoYXQgZ2l2ZXMgdXMgdGhlIGxvY2FsIHRpbWUgd2Ugd2FudCwgd2UncmUgZG9uZVxuXG4gIHZhciBvMyA9IHR6Lm9mZnNldCh1dGNHdWVzcyk7XG5cbiAgaWYgKG8yID09PSBvMykge1xuICAgIHJldHVybiBbdXRjR3Vlc3MsIG8yXTtcbiAgfSAvLyBJZiBpdCdzIGRpZmZlcmVudCwgd2UncmUgaW4gYSBob2xlIHRpbWUuIFRoZSBvZmZzZXQgaGFzIGNoYW5nZWQsIGJ1dCB0aGUgd2UgZG9uJ3QgYWRqdXN0IHRoZSB0aW1lXG5cblxuICByZXR1cm4gW2xvY2FsVFMgLSBNYXRoLm1pbihvMiwgbzMpICogNjAgKiAxMDAwLCBNYXRoLm1heChvMiwgbzMpXTtcbn0gLy8gY29udmVydCBhbiBlcG9jaCB0aW1lc3RhbXAgaW50byBhIGNhbGVuZGFyIG9iamVjdCB3aXRoIHRoZSBnaXZlbiBvZmZzZXRcblxuXG5mdW5jdGlvbiB0c1RvT2JqKHRzLCBvZmZzZXQpIHtcbiAgdHMgKz0gb2Zmc2V0ICogNjAgKiAxMDAwO1xuICB2YXIgZCA9IG5ldyBEYXRlKHRzKTtcbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBkLmdldFVUQ0Z1bGxZZWFyKCksXG4gICAgbW9udGg6IGQuZ2V0VVRDTW9udGgoKSArIDEsXG4gICAgZGF5OiBkLmdldFVUQ0RhdGUoKSxcbiAgICBob3VyOiBkLmdldFVUQ0hvdXJzKCksXG4gICAgbWludXRlOiBkLmdldFVUQ01pbnV0ZXMoKSxcbiAgICBzZWNvbmQ6IGQuZ2V0VVRDU2Vjb25kcygpLFxuICAgIG1pbGxpc2Vjb25kOiBkLmdldFVUQ01pbGxpc2Vjb25kcygpXG4gIH07XG59IC8vIGNvbnZlcnQgYSBjYWxlbmRhciBvYmplY3QgdG8gYSBlcG9jaCB0aW1lc3RhbXBcblxuXG5mdW5jdGlvbiBvYmpUb1RTKG9iaiwgb2Zmc2V0LCB6b25lKSB7XG4gIHJldHVybiBmaXhPZmZzZXQob2JqVG9Mb2NhbFRTKG9iaiksIG9mZnNldCwgem9uZSk7XG59IC8vIGNyZWF0ZSBhIG5ldyBEVCBpbnN0YW5jZSBieSBhZGRpbmcgYSBkdXJhdGlvbiwgYWRqdXN0aW5nIGZvciBEU1RzXG5cblxuZnVuY3Rpb24gYWRqdXN0VGltZShpbnN0LCBkdXIpIHtcbiAgdmFyIG9QcmUgPSBpbnN0Lm8sXG4gICAgICB5ZWFyID0gaW5zdC5jLnllYXIgKyBNYXRoLnRydW5jKGR1ci55ZWFycyksXG4gICAgICBtb250aCA9IGluc3QuYy5tb250aCArIE1hdGgudHJ1bmMoZHVyLm1vbnRocykgKyBNYXRoLnRydW5jKGR1ci5xdWFydGVycykgKiAzLFxuICAgICAgYyA9IE9iamVjdC5hc3NpZ24oe30sIGluc3QuYywge1xuICAgIHllYXI6IHllYXIsXG4gICAgbW9udGg6IG1vbnRoLFxuICAgIGRheTogTWF0aC5taW4oaW5zdC5jLmRheSwgZGF5c0luTW9udGgoeWVhciwgbW9udGgpKSArIE1hdGgudHJ1bmMoZHVyLmRheXMpICsgTWF0aC50cnVuYyhkdXIud2Vla3MpICogN1xuICB9KSxcbiAgICAgIG1pbGxpc1RvQWRkID0gRHVyYXRpb24uZnJvbU9iamVjdCh7XG4gICAgeWVhcnM6IGR1ci55ZWFycyAtIE1hdGgudHJ1bmMoZHVyLnllYXJzKSxcbiAgICBxdWFydGVyczogZHVyLnF1YXJ0ZXJzIC0gTWF0aC50cnVuYyhkdXIucXVhcnRlcnMpLFxuICAgIG1vbnRoczogZHVyLm1vbnRocyAtIE1hdGgudHJ1bmMoZHVyLm1vbnRocyksXG4gICAgd2Vla3M6IGR1ci53ZWVrcyAtIE1hdGgudHJ1bmMoZHVyLndlZWtzKSxcbiAgICBkYXlzOiBkdXIuZGF5cyAtIE1hdGgudHJ1bmMoZHVyLmRheXMpLFxuICAgIGhvdXJzOiBkdXIuaG91cnMsXG4gICAgbWludXRlczogZHVyLm1pbnV0ZXMsXG4gICAgc2Vjb25kczogZHVyLnNlY29uZHMsXG4gICAgbWlsbGlzZWNvbmRzOiBkdXIubWlsbGlzZWNvbmRzXG4gIH0pLmFzKFwibWlsbGlzZWNvbmRzXCIpLFxuICAgICAgbG9jYWxUUyA9IG9ialRvTG9jYWxUUyhjKTtcblxuICB2YXIgX2ZpeE9mZnNldCA9IGZpeE9mZnNldChsb2NhbFRTLCBvUHJlLCBpbnN0LnpvbmUpLFxuICAgICAgdHMgPSBfZml4T2Zmc2V0WzBdLFxuICAgICAgbyA9IF9maXhPZmZzZXRbMV07XG5cbiAgaWYgKG1pbGxpc1RvQWRkICE9PSAwKSB7XG4gICAgdHMgKz0gbWlsbGlzVG9BZGQ7IC8vIHRoYXQgY291bGQgaGF2ZSBjaGFuZ2VkIHRoZSBvZmZzZXQgYnkgZ29pbmcgb3ZlciBhIERTVCwgYnV0IHdlIHdhbnQgdG8ga2VlcCB0aGUgdHMgdGhlIHNhbWVcblxuICAgIG8gPSBpbnN0LnpvbmUub2Zmc2V0KHRzKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHM6IHRzLFxuICAgIG86IG9cbiAgfTtcbn0gLy8gaGVscGVyIHVzZWZ1bCBpbiB0dXJuaW5nIHRoZSByZXN1bHRzIG9mIHBhcnNpbmcgaW50byByZWFsIGRhdGVzXG4vLyBieSBoYW5kbGluZyB0aGUgem9uZSBvcHRpb25zXG5cblxuZnVuY3Rpb24gcGFyc2VEYXRhVG9EYXRlVGltZShwYXJzZWQsIHBhcnNlZFpvbmUsIG9wdHMsIGZvcm1hdCwgdGV4dCkge1xuICB2YXIgc2V0Wm9uZSA9IG9wdHMuc2V0Wm9uZSxcbiAgICAgIHpvbmUgPSBvcHRzLnpvbmU7XG5cbiAgaWYgKHBhcnNlZCAmJiBPYmplY3Qua2V5cyhwYXJzZWQpLmxlbmd0aCAhPT0gMCkge1xuICAgIHZhciBpbnRlcnByZXRhdGlvblpvbmUgPSBwYXJzZWRab25lIHx8IHpvbmUsXG4gICAgICAgIGluc3QgPSBEYXRlVGltZS5mcm9tT2JqZWN0KE9iamVjdC5hc3NpZ24ocGFyc2VkLCBvcHRzLCB7XG4gICAgICB6b25lOiBpbnRlcnByZXRhdGlvblpvbmUsXG4gICAgICAvLyBzZXRab25lIGlzIGEgdmFsaWQgb3B0aW9uIGluIHRoZSBjYWxsaW5nIG1ldGhvZHMsIGJ1dCBub3QgaW4gZnJvbU9iamVjdFxuICAgICAgc2V0Wm9uZTogdW5kZWZpbmVkXG4gICAgfSkpO1xuICAgIHJldHVybiBzZXRab25lID8gaW5zdCA6IGluc3Quc2V0Wm9uZSh6b25lKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChuZXcgSW52YWxpZChcInVucGFyc2FibGVcIiwgXCJ0aGUgaW5wdXQgXFxcIlwiICsgdGV4dCArIFwiXFxcIiBjYW4ndCBiZSBwYXJzZWQgYXMgXCIgKyBmb3JtYXQpKTtcbiAgfVxufSAvLyBpZiB5b3Ugd2FudCB0byBvdXRwdXQgYSB0ZWNobmljYWwgZm9ybWF0IChlLmcuIFJGQyAyODIyKSwgdGhpcyBoZWxwZXJcbi8vIGhlbHBzIGhhbmRsZSB0aGUgZGV0YWlsc1xuXG5cbmZ1bmN0aW9uIHRvVGVjaEZvcm1hdChkdCwgZm9ybWF0LCBhbGxvd1opIHtcbiAgaWYgKGFsbG93WiA9PT0gdm9pZCAwKSB7XG4gICAgYWxsb3daID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBkdC5pc1ZhbGlkID8gRm9ybWF0dGVyLmNyZWF0ZShMb2NhbGUuY3JlYXRlKFwiZW4tVVNcIiksIHtcbiAgICBhbGxvd1o6IGFsbG93WixcbiAgICBmb3JjZVNpbXBsZTogdHJ1ZVxuICB9KS5mb3JtYXREYXRlVGltZUZyb21TdHJpbmcoZHQsIGZvcm1hdCkgOiBudWxsO1xufSAvLyB0ZWNobmljYWwgdGltZSBmb3JtYXRzIChlLmcuIHRoZSB0aW1lIHBhcnQgb2YgSVNPIDg2MDEpLCB0YWtlIHNvbWUgb3B0aW9uc1xuLy8gYW5kIHRoaXMgY29tbW9uaXplcyB0aGVpciBoYW5kbGluZ1xuXG5cbmZ1bmN0aW9uIHRvVGVjaFRpbWVGb3JtYXQoZHQsIF9yZWYpIHtcbiAgdmFyIF9yZWYkc3VwcHJlc3NTZWNvbmRzID0gX3JlZi5zdXBwcmVzc1NlY29uZHMsXG4gICAgICBzdXBwcmVzc1NlY29uZHMgPSBfcmVmJHN1cHByZXNzU2Vjb25kcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJHN1cHByZXNzU2Vjb25kcyxcbiAgICAgIF9yZWYkc3VwcHJlc3NNaWxsaXNlYyA9IF9yZWYuc3VwcHJlc3NNaWxsaXNlY29uZHMsXG4gICAgICBzdXBwcmVzc01pbGxpc2Vjb25kcyA9IF9yZWYkc3VwcHJlc3NNaWxsaXNlYyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJHN1cHByZXNzTWlsbGlzZWMsXG4gICAgICBpbmNsdWRlT2Zmc2V0ID0gX3JlZi5pbmNsdWRlT2Zmc2V0LFxuICAgICAgX3JlZiRpbmNsdWRlWm9uZSA9IF9yZWYuaW5jbHVkZVpvbmUsXG4gICAgICBpbmNsdWRlWm9uZSA9IF9yZWYkaW5jbHVkZVpvbmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRpbmNsdWRlWm9uZSxcbiAgICAgIF9yZWYkc3BhY2Vab25lID0gX3JlZi5zcGFjZVpvbmUsXG4gICAgICBzcGFjZVpvbmUgPSBfcmVmJHNwYWNlWm9uZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJHNwYWNlWm9uZSxcbiAgICAgIF9yZWYkZm9ybWF0ID0gX3JlZi5mb3JtYXQsXG4gICAgICBmb3JtYXQgPSBfcmVmJGZvcm1hdCA9PT0gdm9pZCAwID8gXCJleHRlbmRlZFwiIDogX3JlZiRmb3JtYXQ7XG4gIHZhciBmbXQgPSBmb3JtYXQgPT09IFwiYmFzaWNcIiA/IFwiSEhtbVwiIDogXCJISDptbVwiO1xuXG4gIGlmICghc3VwcHJlc3NTZWNvbmRzIHx8IGR0LnNlY29uZCAhPT0gMCB8fCBkdC5taWxsaXNlY29uZCAhPT0gMCkge1xuICAgIGZtdCArPSBmb3JtYXQgPT09IFwiYmFzaWNcIiA/IFwic3NcIiA6IFwiOnNzXCI7XG5cbiAgICBpZiAoIXN1cHByZXNzTWlsbGlzZWNvbmRzIHx8IGR0Lm1pbGxpc2Vjb25kICE9PSAwKSB7XG4gICAgICBmbXQgKz0gXCIuU1NTXCI7XG4gICAgfVxuICB9XG5cbiAgaWYgKChpbmNsdWRlWm9uZSB8fCBpbmNsdWRlT2Zmc2V0KSAmJiBzcGFjZVpvbmUpIHtcbiAgICBmbXQgKz0gXCIgXCI7XG4gIH1cblxuICBpZiAoaW5jbHVkZVpvbmUpIHtcbiAgICBmbXQgKz0gXCJ6XCI7XG4gIH0gZWxzZSBpZiAoaW5jbHVkZU9mZnNldCkge1xuICAgIGZtdCArPSBmb3JtYXQgPT09IFwiYmFzaWNcIiA/IFwiWlpaXCIgOiBcIlpaXCI7XG4gIH1cblxuICByZXR1cm4gdG9UZWNoRm9ybWF0KGR0LCBmbXQpO1xufSAvLyBkZWZhdWx0cyBmb3IgdW5zcGVjaWZpZWQgdW5pdHMgaW4gdGhlIHN1cHBvcnRlZCBjYWxlbmRhcnNcblxuXG52YXIgZGVmYXVsdFVuaXRWYWx1ZXMgPSB7XG4gIG1vbnRoOiAxLFxuICBkYXk6IDEsXG4gIGhvdXI6IDAsXG4gIG1pbnV0ZTogMCxcbiAgc2Vjb25kOiAwLFxuICBtaWxsaXNlY29uZDogMFxufSxcbiAgICBkZWZhdWx0V2Vla1VuaXRWYWx1ZXMgPSB7XG4gIHdlZWtOdW1iZXI6IDEsXG4gIHdlZWtkYXk6IDEsXG4gIGhvdXI6IDAsXG4gIG1pbnV0ZTogMCxcbiAgc2Vjb25kOiAwLFxuICBtaWxsaXNlY29uZDogMFxufSxcbiAgICBkZWZhdWx0T3JkaW5hbFVuaXRWYWx1ZXMgPSB7XG4gIG9yZGluYWw6IDEsXG4gIGhvdXI6IDAsXG4gIG1pbnV0ZTogMCxcbiAgc2Vjb25kOiAwLFxuICBtaWxsaXNlY29uZDogMFxufTsgLy8gVW5pdHMgaW4gdGhlIHN1cHBvcnRlZCBjYWxlbmRhcnMsIHNvcnRlZCBieSBiaWduZXNzXG5cbnZhciBvcmRlcmVkVW5pdHMkMSA9IFtcInllYXJcIiwgXCJtb250aFwiLCBcImRheVwiLCBcImhvdXJcIiwgXCJtaW51dGVcIiwgXCJzZWNvbmRcIiwgXCJtaWxsaXNlY29uZFwiXSxcbiAgICBvcmRlcmVkV2Vla1VuaXRzID0gW1wid2Vla1llYXJcIiwgXCJ3ZWVrTnVtYmVyXCIsIFwid2Vla2RheVwiLCBcImhvdXJcIiwgXCJtaW51dGVcIiwgXCJzZWNvbmRcIiwgXCJtaWxsaXNlY29uZFwiXSxcbiAgICBvcmRlcmVkT3JkaW5hbFVuaXRzID0gW1wieWVhclwiLCBcIm9yZGluYWxcIiwgXCJob3VyXCIsIFwibWludXRlXCIsIFwic2Vjb25kXCIsIFwibWlsbGlzZWNvbmRcIl07IC8vIHN0YW5kYXJkaXplIGNhc2UgYW5kIHBsdXJhbGl0eSBpbiB1bml0c1xuXG5mdW5jdGlvbiBub3JtYWxpemVVbml0KHVuaXQpIHtcbiAgdmFyIG5vcm1hbGl6ZWQgPSB7XG4gICAgeWVhcjogXCJ5ZWFyXCIsXG4gICAgeWVhcnM6IFwieWVhclwiLFxuICAgIG1vbnRoOiBcIm1vbnRoXCIsXG4gICAgbW9udGhzOiBcIm1vbnRoXCIsXG4gICAgZGF5OiBcImRheVwiLFxuICAgIGRheXM6IFwiZGF5XCIsXG4gICAgaG91cjogXCJob3VyXCIsXG4gICAgaG91cnM6IFwiaG91clwiLFxuICAgIG1pbnV0ZTogXCJtaW51dGVcIixcbiAgICBtaW51dGVzOiBcIm1pbnV0ZVwiLFxuICAgIHF1YXJ0ZXI6IFwicXVhcnRlclwiLFxuICAgIHF1YXJ0ZXJzOiBcInF1YXJ0ZXJcIixcbiAgICBzZWNvbmQ6IFwic2Vjb25kXCIsXG4gICAgc2Vjb25kczogXCJzZWNvbmRcIixcbiAgICBtaWxsaXNlY29uZDogXCJtaWxsaXNlY29uZFwiLFxuICAgIG1pbGxpc2Vjb25kczogXCJtaWxsaXNlY29uZFwiLFxuICAgIHdlZWtkYXk6IFwid2Vla2RheVwiLFxuICAgIHdlZWtkYXlzOiBcIndlZWtkYXlcIixcbiAgICB3ZWVrbnVtYmVyOiBcIndlZWtOdW1iZXJcIixcbiAgICB3ZWVrc251bWJlcjogXCJ3ZWVrTnVtYmVyXCIsXG4gICAgd2Vla251bWJlcnM6IFwid2Vla051bWJlclwiLFxuICAgIHdlZWt5ZWFyOiBcIndlZWtZZWFyXCIsXG4gICAgd2Vla3llYXJzOiBcIndlZWtZZWFyXCIsXG4gICAgb3JkaW5hbDogXCJvcmRpbmFsXCJcbiAgfVt1bml0LnRvTG93ZXJDYXNlKCldO1xuICBpZiAoIW5vcm1hbGl6ZWQpIHRocm93IG5ldyBJbnZhbGlkVW5pdEVycm9yKHVuaXQpO1xuICByZXR1cm4gbm9ybWFsaXplZDtcbn0gLy8gdGhpcyBpcyBhIGR1bWJlZCBkb3duIHZlcnNpb24gb2YgZnJvbU9iamVjdCgpIHRoYXQgcnVucyBhYm91dCA2MCUgZmFzdGVyXG4vLyBidXQgZG9lc24ndCBkbyBhbnkgdmFsaWRhdGlvbiwgbWFrZXMgYSBidW5jaCBvZiBhc3N1bXB0aW9ucyBhYm91dCB3aGF0IHVuaXRzXG4vLyBhcmUgcHJlc2VudCwgYW5kIHNvIG9uLlxuXG5cbmZ1bmN0aW9uIHF1aWNrRFQob2JqLCB6b25lKSB7XG4gIC8vIGFzc3VtZSB3ZSBoYXZlIHRoZSBoaWdoZXItb3JkZXIgdW5pdHNcbiAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShvcmRlcmVkVW5pdHMkMSksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yKCkpLmRvbmU7KSB7XG4gICAgdmFyIHUgPSBfc3RlcC52YWx1ZTtcblxuICAgIGlmIChpc1VuZGVmaW5lZChvYmpbdV0pKSB7XG4gICAgICBvYmpbdV0gPSBkZWZhdWx0VW5pdFZhbHVlc1t1XTtcbiAgICB9XG4gIH1cblxuICB2YXIgaW52YWxpZCA9IGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhKG9iaikgfHwgaGFzSW52YWxpZFRpbWVEYXRhKG9iaik7XG5cbiAgaWYgKGludmFsaWQpIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChpbnZhbGlkKTtcbiAgfVxuXG4gIHZhciB0c05vdyA9IFNldHRpbmdzLm5vdygpLFxuICAgICAgb2Zmc2V0UHJvdmlzID0gem9uZS5vZmZzZXQodHNOb3cpLFxuICAgICAgX29ialRvVFMgPSBvYmpUb1RTKG9iaiwgb2Zmc2V0UHJvdmlzLCB6b25lKSxcbiAgICAgIHRzID0gX29ialRvVFNbMF0sXG4gICAgICBvID0gX29ialRvVFNbMV07XG5cbiAgcmV0dXJuIG5ldyBEYXRlVGltZSh7XG4gICAgdHM6IHRzLFxuICAgIHpvbmU6IHpvbmUsXG4gICAgbzogb1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGlmZlJlbGF0aXZlKHN0YXJ0LCBlbmQsIG9wdHMpIHtcbiAgdmFyIHJvdW5kID0gaXNVbmRlZmluZWQob3B0cy5yb3VuZCkgPyB0cnVlIDogb3B0cy5yb3VuZCxcbiAgICAgIGZvcm1hdCA9IGZ1bmN0aW9uIGZvcm1hdChjLCB1bml0KSB7XG4gICAgYyA9IHJvdW5kVG8oYywgcm91bmQgfHwgb3B0cy5jYWxlbmRhcnkgPyAwIDogMiwgdHJ1ZSk7XG4gICAgdmFyIGZvcm1hdHRlciA9IGVuZC5sb2MuY2xvbmUob3B0cykucmVsRm9ybWF0dGVyKG9wdHMpO1xuICAgIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KGMsIHVuaXQpO1xuICB9LFxuICAgICAgZGlmZmVyID0gZnVuY3Rpb24gZGlmZmVyKHVuaXQpIHtcbiAgICBpZiAob3B0cy5jYWxlbmRhcnkpIHtcbiAgICAgIGlmICghZW5kLmhhc1NhbWUoc3RhcnQsIHVuaXQpKSB7XG4gICAgICAgIHJldHVybiBlbmQuc3RhcnRPZih1bml0KS5kaWZmKHN0YXJ0LnN0YXJ0T2YodW5pdCksIHVuaXQpLmdldCh1bml0KTtcbiAgICAgIH0gZWxzZSByZXR1cm4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVuZC5kaWZmKHN0YXJ0LCB1bml0KS5nZXQodW5pdCk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChvcHRzLnVuaXQpIHtcbiAgICByZXR1cm4gZm9ybWF0KGRpZmZlcihvcHRzLnVuaXQpLCBvcHRzLnVuaXQpO1xuICB9XG5cbiAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2Uob3B0cy51bml0cyksIF9zdGVwMjsgIShfc3RlcDIgPSBfaXRlcmF0b3IyKCkpLmRvbmU7KSB7XG4gICAgdmFyIHVuaXQgPSBfc3RlcDIudmFsdWU7XG4gICAgdmFyIGNvdW50ID0gZGlmZmVyKHVuaXQpO1xuXG4gICAgaWYgKE1hdGguYWJzKGNvdW50KSA+PSAxKSB7XG4gICAgICByZXR1cm4gZm9ybWF0KGNvdW50LCB1bml0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0KDAsIG9wdHMudW5pdHNbb3B0cy51bml0cy5sZW5ndGggLSAxXSk7XG59XG4vKipcbiAqIEEgRGF0ZVRpbWUgaXMgYW4gaW1tdXRhYmxlIGRhdGEgc3RydWN0dXJlIHJlcHJlc2VudGluZyBhIHNwZWNpZmljIGRhdGUgYW5kIHRpbWUgYW5kIGFjY29tcGFueWluZyBtZXRob2RzLiBJdCBjb250YWlucyBjbGFzcyBhbmQgaW5zdGFuY2UgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIHBhcnNpbmcsIGludGVycm9nYXRpbmcsIHRyYW5zZm9ybWluZywgYW5kIGZvcm1hdHRpbmcgdGhlbS5cbiAqXG4gKiBBIERhdGVUaW1lIGNvbXByaXNlcyBvZjpcbiAqICogQSB0aW1lc3RhbXAuIEVhY2ggRGF0ZVRpbWUgaW5zdGFuY2UgcmVmZXJzIHRvIGEgc3BlY2lmaWMgbWlsbGlzZWNvbmQgb2YgdGhlIFVuaXggZXBvY2guXG4gKiAqIEEgdGltZSB6b25lLiBFYWNoIGluc3RhbmNlIGlzIGNvbnNpZGVyZWQgaW4gdGhlIGNvbnRleHQgb2YgYSBzcGVjaWZpYyB6b25lIChieSBkZWZhdWx0IHRoZSBsb2NhbCBzeXN0ZW0ncyB6b25lKS5cbiAqICogQ29uZmlndXJhdGlvbiBwcm9wZXJ0aWVzIHRoYXQgZWZmZWN0IGhvdyBvdXRwdXQgc3RyaW5ncyBhcmUgZm9ybWF0dGVkLCBzdWNoIGFzIGBsb2NhbGVgLCBgbnVtYmVyaW5nU3lzdGVtYCwgYW5kIGBvdXRwdXRDYWxlbmRhcmAuXG4gKlxuICogSGVyZSBpcyBhIGJyaWVmIG92ZXJ2aWV3IG9mIHRoZSBtb3N0IGNvbW1vbmx5IHVzZWQgZnVuY3Rpb25hbGl0eSBpdCBwcm92aWRlczpcbiAqXG4gKiAqICoqQ3JlYXRpb24qKjogVG8gY3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBpdHMgY29tcG9uZW50cywgdXNlIG9uZSBvZiBpdHMgZmFjdG9yeSBjbGFzcyBtZXRob2RzOiB7QGxpbmsgbG9jYWx9LCB7QGxpbmsgdXRjfSwgYW5kIChtb3N0IGZsZXhpYmx5KSB7QGxpbmsgZnJvbU9iamVjdH0uIFRvIGNyZWF0ZSBvbmUgZnJvbSBhIHN0YW5kYXJkIHN0cmluZyBmb3JtYXQsIHVzZSB7QGxpbmsgZnJvbUlTT30sIHtAbGluayBmcm9tSFRUUH0sIGFuZCB7QGxpbmsgZnJvbVJGQzI4MjJ9LiBUbyBjcmVhdGUgb25lIGZyb20gYSBjdXN0b20gc3RyaW5nIGZvcm1hdCwgdXNlIHtAbGluayBmcm9tRm9ybWF0fS4gVG8gY3JlYXRlIG9uZSBmcm9tIGEgbmF0aXZlIEpTIGRhdGUsIHVzZSB7QGxpbmsgZnJvbUpTRGF0ZX0uXG4gKiAqICoqR3JlZ29yaWFuIGNhbGVuZGFyIGFuZCB0aW1lKio6IFRvIGV4YW1pbmUgdGhlIEdyZWdvcmlhbiBwcm9wZXJ0aWVzIG9mIGEgRGF0ZVRpbWUgaW5kaXZpZHVhbGx5IChpLmUgYXMgb3Bwb3NlZCB0byBjb2xsZWN0aXZlbHkgdGhyb3VnaCB7QGxpbmsgdG9PYmplY3R9KSwgdXNlIHRoZSB7QGxpbmsgeWVhcn0sIHtAbGluayBtb250aH0sXG4gKiB7QGxpbmsgZGF5fSwge0BsaW5rIGhvdXJ9LCB7QGxpbmsgbWludXRlfSwge0BsaW5rIHNlY29uZH0sIHtAbGluayBtaWxsaXNlY29uZH0gYWNjZXNzb3JzLlxuICogKiAqKldlZWsgY2FsZW5kYXIqKjogRm9yIElTTyB3ZWVrIGNhbGVuZGFyIGF0dHJpYnV0ZXMsIHNlZSB0aGUge0BsaW5rIHdlZWtZZWFyfSwge0BsaW5rIHdlZWtOdW1iZXJ9LCBhbmQge0BsaW5rIHdlZWtkYXl9IGFjY2Vzc29ycy5cbiAqICogKipDb25maWd1cmF0aW9uKiogU2VlIHRoZSB7QGxpbmsgbG9jYWxlfSBhbmQge0BsaW5rIG51bWJlcmluZ1N5c3RlbX0gYWNjZXNzb3JzLlxuICogKiAqKlRyYW5zZm9ybWF0aW9uKio6IFRvIHRyYW5zZm9ybSB0aGUgRGF0ZVRpbWUgaW50byBvdGhlciBEYXRlVGltZXMsIHVzZSB7QGxpbmsgc2V0fSwge0BsaW5rIHJlY29uZmlndXJlfSwge0BsaW5rIHNldFpvbmV9LCB7QGxpbmsgc2V0TG9jYWxlfSwge0BsaW5rIHBsdXN9LCB7QGxpbmsgbWludXN9LCB7QGxpbmsgZW5kT2Z9LCB7QGxpbmsgc3RhcnRPZn0sIHtAbGluayB0b1VUQ30sIGFuZCB7QGxpbmsgdG9Mb2NhbH0uXG4gKiAqICoqT3V0cHV0Kio6IFRvIGNvbnZlcnQgdGhlIERhdGVUaW1lIHRvIG90aGVyIHJlcHJlc2VudGF0aW9ucywgdXNlIHRoZSB7QGxpbmsgdG9SZWxhdGl2ZX0sIHtAbGluayB0b1JlbGF0aXZlQ2FsZW5kYXJ9LCB7QGxpbmsgdG9KU09OfSwge0BsaW5rIHRvSVNPfSwge0BsaW5rIHRvSFRUUH0sIHtAbGluayB0b09iamVjdH0sIHtAbGluayB0b1JGQzI4MjJ9LCB7QGxpbmsgdG9TdHJpbmd9LCB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9LCB7QGxpbmsgdG9Gb3JtYXR9LCB7QGxpbmsgdG9NaWxsaXN9IGFuZCB7QGxpbmsgdG9KU0RhdGV9LlxuICpcbiAqIFRoZXJlJ3MgcGxlbnR5IG90aGVycyBkb2N1bWVudGVkIGJlbG93LiBJbiBhZGRpdGlvbiwgZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gc3VidGxlciB0b3BpY3MgbGlrZSBpbnRlcm5hdGlvbmFsaXphdGlvbiwgdGltZSB6b25lcywgYWx0ZXJuYXRpdmUgY2FsZW5kYXJzLCB2YWxpZGl0eSwgYW5kIHNvIG9uLCBzZWUgdGhlIGV4dGVybmFsIGRvY3VtZW50YXRpb24uXG4gKi9cblxuXG52YXIgRGF0ZVRpbWUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBEYXRlVGltZShjb25maWcpIHtcbiAgICB2YXIgem9uZSA9IGNvbmZpZy56b25lIHx8IFNldHRpbmdzLmRlZmF1bHRab25lO1xuICAgIHZhciBpbnZhbGlkID0gY29uZmlnLmludmFsaWQgfHwgKE51bWJlci5pc05hTihjb25maWcudHMpID8gbmV3IEludmFsaWQoXCJpbnZhbGlkIGlucHV0XCIpIDogbnVsbCkgfHwgKCF6b25lLmlzVmFsaWQgPyB1bnN1cHBvcnRlZFpvbmUoem9uZSkgOiBudWxsKTtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cblxuICAgIHRoaXMudHMgPSBpc1VuZGVmaW5lZChjb25maWcudHMpID8gU2V0dGluZ3Mubm93KCkgOiBjb25maWcudHM7XG4gICAgdmFyIGMgPSBudWxsLFxuICAgICAgICBvID0gbnVsbDtcblxuICAgIGlmICghaW52YWxpZCkge1xuICAgICAgdmFyIHVuY2hhbmdlZCA9IGNvbmZpZy5vbGQgJiYgY29uZmlnLm9sZC50cyA9PT0gdGhpcy50cyAmJiBjb25maWcub2xkLnpvbmUuZXF1YWxzKHpvbmUpO1xuXG4gICAgICBpZiAodW5jaGFuZ2VkKSB7XG4gICAgICAgIHZhciBfcmVmMiA9IFtjb25maWcub2xkLmMsIGNvbmZpZy5vbGQub107XG4gICAgICAgIGMgPSBfcmVmMlswXTtcbiAgICAgICAgbyA9IF9yZWYyWzFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG90ID0gem9uZS5vZmZzZXQodGhpcy50cyk7XG4gICAgICAgIGMgPSB0c1RvT2JqKHRoaXMudHMsIG90KTtcbiAgICAgICAgaW52YWxpZCA9IE51bWJlci5pc05hTihjLnllYXIpID8gbmV3IEludmFsaWQoXCJpbnZhbGlkIGlucHV0XCIpIDogbnVsbDtcbiAgICAgICAgYyA9IGludmFsaWQgPyBudWxsIDogYztcbiAgICAgICAgbyA9IGludmFsaWQgPyBudWxsIDogb3Q7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuXG5cbiAgICB0aGlzLl96b25lID0gem9uZTtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cblxuICAgIHRoaXMubG9jID0gY29uZmlnLmxvYyB8fCBMb2NhbGUuY3JlYXRlKCk7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG5cbiAgICB0aGlzLmludmFsaWQgPSBpbnZhbGlkO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuXG4gICAgdGhpcy53ZWVrRGF0YSA9IG51bGw7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG5cbiAgICB0aGlzLmMgPSBjO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuXG4gICAgdGhpcy5vID0gbztcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cblxuICAgIHRoaXMuaXNMdXhvbkRhdGVUaW1lID0gdHJ1ZTtcbiAgfSAvLyBDT05TVFJVQ1RcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbG9jYWwgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt5ZWFyXSAtIFRoZSBjYWxlbmRhciB5ZWFyLiBJZiBvbWl0dGVkIChhcyBpbiwgY2FsbCBgbG9jYWwoKWAgd2l0aCBubyBhcmd1bWVudHMpLCB0aGUgY3VycmVudCB0aW1lIHdpbGwgYmUgdXNlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW21vbnRoPTFdIC0gVGhlIG1vbnRoLCAxLWluZGV4ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkYXk9MV0gLSBUaGUgZGF5IG9mIHRoZSBtb250aFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2hvdXI9MF0gLSBUaGUgaG91ciBvZiB0aGUgZGF5LCBpbiAyNC1ob3VyIHRpbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttaW51dGU9MF0gLSBUaGUgbWludXRlIG9mIHRoZSBob3VyLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtzZWNvbmQ9MF0gLSBUaGUgc2Vjb25kIG9mIHRoZSBtaW51dGUsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxuICAgKiBAcGFyYW0ge251bWJlcn0gW21pbGxpc2Vjb25kPTBdIC0gVGhlIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA5OTlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IG5vd1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3KSAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMS0wMVQwMDowMDowMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzKSAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0wMVQwMDowMDowMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMikgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwMDowMDowMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSkgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTowMDowMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgNDUpICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NTowMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgNDUsIDEwKSAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgNDUsIDEwLCA3NjUpIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMC43NjVcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuXG5cbiAgRGF0ZVRpbWUubG9jYWwgPSBmdW5jdGlvbiBsb2NhbCh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmQpIHtcbiAgICBpZiAoaXNVbmRlZmluZWQoeWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xuICAgICAgICB0czogU2V0dGluZ3Mubm93KClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcXVpY2tEVCh7XG4gICAgICAgIHllYXI6IHllYXIsXG4gICAgICAgIG1vbnRoOiBtb250aCxcbiAgICAgICAgZGF5OiBkYXksXG4gICAgICAgIGhvdXI6IGhvdXIsXG4gICAgICAgIG1pbnV0ZTogbWludXRlLFxuICAgICAgICBzZWNvbmQ6IHNlY29uZCxcbiAgICAgICAgbWlsbGlzZWNvbmQ6IG1pbGxpc2Vjb25kXG4gICAgICB9LCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBpbiBVVENcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt5ZWFyXSAtIFRoZSBjYWxlbmRhciB5ZWFyLiBJZiBvbWl0dGVkIChhcyBpbiwgY2FsbCBgdXRjKClgIHdpdGggbm8gYXJndW1lbnRzKSwgdGhlIGN1cnJlbnQgdGltZSB3aWxsIGJlIHVzZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttb250aD0xXSAtIFRoZSBtb250aCwgMS1pbmRleGVkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGF5PTFdIC0gVGhlIGRheSBvZiB0aGUgbW9udGhcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtob3VyPTBdIC0gVGhlIGhvdXIgb2YgdGhlIGRheSwgaW4gMjQtaG91ciB0aW1lXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWludXRlPTBdIC0gVGhlIG1pbnV0ZSBvZiB0aGUgaG91ciwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbc2Vjb25kPTBdIC0gVGhlIHNlY29uZCBvZiB0aGUgbWludXRlLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttaWxsaXNlY29uZD0wXSAtIFRoZSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgOTk5XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gbm93XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3KSAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMS0wMVQwMDowMDowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMpICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTAxVDAwOjAwOjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIpICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDA6MDA6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSkgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTowMDowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1LCA0NSkgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1LCAxMCkgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUsIDEwLCA3NjUpIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMC43NjVaXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgO1xuXG4gIERhdGVUaW1lLnV0YyA9IGZ1bmN0aW9uIHV0Yyh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmQpIHtcbiAgICBpZiAoaXNVbmRlZmluZWQoeWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xuICAgICAgICB0czogU2V0dGluZ3Mubm93KCksXG4gICAgICAgIHpvbmU6IEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBxdWlja0RUKHtcbiAgICAgICAgeWVhcjogeWVhcixcbiAgICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgICBkYXk6IGRheSxcbiAgICAgICAgaG91cjogaG91cixcbiAgICAgICAgbWludXRlOiBtaW51dGUsXG4gICAgICAgIHNlY29uZDogc2Vjb25kLFxuICAgICAgICBtaWxsaXNlY29uZDogbWlsbGlzZWNvbmRcbiAgICAgIH0sIEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgSmF2YXNjcmlwdCBEYXRlIG9iamVjdC4gVXNlcyB0aGUgZGVmYXVsdCB6b25lLlxuICAgKiBAcGFyYW0ge0RhdGV9IGRhdGUgLSBhIEphdmFzY3JpcHQgRGF0ZSBvYmplY3RcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0aW9ucy56b25lPSdsb2NhbCddIC0gdGhlIHpvbmUgdG8gcGxhY2UgdGhlIERhdGVUaW1lIGludG9cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICA7XG5cbiAgRGF0ZVRpbWUuZnJvbUpTRGF0ZSA9IGZ1bmN0aW9uIGZyb21KU0RhdGUoZGF0ZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgdHMgPSBpc0RhdGUoZGF0ZSkgPyBkYXRlLnZhbHVlT2YoKSA6IE5hTjtcblxuICAgIGlmIChOdW1iZXIuaXNOYU4odHMpKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChcImludmFsaWQgaW5wdXRcIik7XG4gICAgfVxuXG4gICAgdmFyIHpvbmVUb1VzZSA9IG5vcm1hbGl6ZVpvbmUob3B0aW9ucy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XG5cbiAgICBpZiAoIXpvbmVUb1VzZS5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCh1bnN1cHBvcnRlZFpvbmUoem9uZVRvVXNlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7XG4gICAgICB0czogdHMsXG4gICAgICB6b25lOiB6b25lVG9Vc2UsXG4gICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdGlvbnMpXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIHRoZSBlcG9jaCAobWVhbmluZyBzaW5jZSAxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLiBVc2VzIHRoZSBkZWZhdWx0IHpvbmUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtaWxsaXNlY29uZHMgLSBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMgc2luY2UgMTk3MCBVVENcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0aW9ucy56b25lPSdsb2NhbCddIC0gdGhlIHpvbmUgdG8gcGxhY2UgdGhlIERhdGVUaW1lIGludG9cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmxvY2FsZV0gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICA7XG5cbiAgRGF0ZVRpbWUuZnJvbU1pbGxpcyA9IGZ1bmN0aW9uIGZyb21NaWxsaXMobWlsbGlzZWNvbmRzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghaXNOdW1iZXIobWlsbGlzZWNvbmRzKSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwiZnJvbU1pbGxpcyByZXF1aXJlcyBhIG51bWVyaWNhbCBpbnB1dCwgYnV0IHJlY2VpdmVkIGEgXCIgKyB0eXBlb2YgbWlsbGlzZWNvbmRzICsgXCIgd2l0aCB2YWx1ZSBcIiArIG1pbGxpc2Vjb25kcyk7XG4gICAgfSBlbHNlIGlmIChtaWxsaXNlY29uZHMgPCAtTUFYX0RBVEUgfHwgbWlsbGlzZWNvbmRzID4gTUFYX0RBVEUpIHtcbiAgICAgIC8vIHRoaXMgaXNuJ3QgcGVyZmVjdCBiZWNhdXNlIGJlY2F1c2Ugd2UgY2FuIHN0aWxsIGVuZCB1cCBvdXQgb2YgcmFuZ2UgYmVjYXVzZSBvZiBhZGRpdGlvbmFsIHNoaWZ0aW5nLCBidXQgaXQncyBhIHN0YXJ0XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChcIlRpbWVzdGFtcCBvdXQgb2YgcmFuZ2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xuICAgICAgICB0czogbWlsbGlzZWNvbmRzLFxuICAgICAgICB6b25lOiBub3JtYWxpemVab25lKG9wdGlvbnMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpLFxuICAgICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdGlvbnMpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBudW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSB0aGUgZXBvY2ggKG1lYW5pbmcgc2luY2UgMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS4gVXNlcyB0aGUgZGVmYXVsdCB6b25lLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Vjb25kcyAtIGEgbnVtYmVyIG9mIHNlY29uZHMgc2luY2UgMTk3MCBVVENcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0aW9ucy56b25lPSdsb2NhbCddIC0gdGhlIHpvbmUgdG8gcGxhY2UgdGhlIERhdGVUaW1lIGludG9cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmxvY2FsZV0gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICA7XG5cbiAgRGF0ZVRpbWUuZnJvbVNlY29uZHMgPSBmdW5jdGlvbiBmcm9tU2Vjb25kcyhzZWNvbmRzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghaXNOdW1iZXIoc2Vjb25kcykpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcImZyb21TZWNvbmRzIHJlcXVpcmVzIGEgbnVtZXJpY2FsIGlucHV0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgICAgdHM6IHNlY29uZHMgKiAxMDAwLFxuICAgICAgICB6b25lOiBub3JtYWxpemVab25lKG9wdGlvbnMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpLFxuICAgICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdGlvbnMpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBKYXZhc2NyaXB0IG9iamVjdCB3aXRoIGtleXMgbGlrZSAneWVhcicgYW5kICdob3VyJyB3aXRoIHJlYXNvbmFibGUgZGVmYXVsdHMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGNyZWF0ZSB0aGUgRGF0ZVRpbWUgZnJvbVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnllYXIgLSBhIHllYXIsIHN1Y2ggYXMgMTk4N1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1vbnRoIC0gYSBtb250aCwgMS0xMlxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmRheSAtIGEgZGF5IG9mIHRoZSBtb250aCwgMS0zMSwgZGVwZW5kaW5nIG9uIHRoZSBtb250aFxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm9yZGluYWwgLSBkYXkgb2YgdGhlIHllYXIsIDEtMzY1IG9yIDM2NlxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtZZWFyIC0gYW4gSVNPIHdlZWsgeWVhclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtOdW1iZXIgLSBhbiBJU08gd2VlayBudW1iZXIsIGJldHdlZW4gMSBhbmQgNTIgb3IgNTMsIGRlcGVuZGluZyBvbiB0aGUgeWVhclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtkYXkgLSBhbiBJU08gd2Vla2RheSwgMS03LCB3aGVyZSAxIGlzIE1vbmRheSBhbmQgNyBpcyBTdW5kYXlcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5ob3VyIC0gaG91ciBvZiB0aGUgZGF5LCAwLTIzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWludXRlIC0gbWludXRlIG9mIHRoZSBob3VyLCAwLTU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouc2Vjb25kIC0gc2Vjb25kIG9mIHRoZSBtaW51dGUsIDAtNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taWxsaXNlY29uZCAtIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQsIDAtOTk5XG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvYmouem9uZT0nbG9jYWwnXSAtIGludGVycHJldCB0aGUgbnVtYmVycyBpbiB0aGUgY29udGV4dCBvZiBhIHBhcnRpY3VsYXIgem9uZS4gQ2FuIHRha2UgYW55IHZhbHVlIHRha2VuIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byBzZXRab25lKClcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvYmoubG9jYWxlPSdzeXN0ZW0ncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvYmoub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvYmoubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IHllYXI6IDE5ODIsIG1vbnRoOiA1LCBkYXk6IDI1fSkudG9JU09EYXRlKCkgLy89PiAnMTk4Mi0wNS0yNSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IHllYXI6IDE5ODIgfSkudG9JU09EYXRlKCkgLy89PiAnMTk4Mi0wMS0wMSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IGhvdXI6IDEwLCBtaW51dGU6IDI2LCBzZWNvbmQ6IDYgfSkgLy9+PiB0b2RheSBhdCAxMDoyNjowNlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiwgem9uZTogJ3V0YycgfSksXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2LCB6b25lOiAnbG9jYWwnIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2LCB6b25lOiAnQW1lcmljYS9OZXdfWW9yaycgfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IHdlZWtZZWFyOiAyMDE2LCB3ZWVrTnVtYmVyOiAyLCB3ZWVrZGF5OiAzIH0pLnRvSVNPRGF0ZSgpIC8vPT4gJzIwMTYtMDEtMTMnXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgO1xuXG4gIERhdGVUaW1lLmZyb21PYmplY3QgPSBmdW5jdGlvbiBmcm9tT2JqZWN0KG9iaikge1xuICAgIHZhciB6b25lVG9Vc2UgPSBub3JtYWxpemVab25lKG9iai56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XG5cbiAgICBpZiAoIXpvbmVUb1VzZS5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCh1bnN1cHBvcnRlZFpvbmUoem9uZVRvVXNlKSk7XG4gICAgfVxuXG4gICAgdmFyIHRzTm93ID0gU2V0dGluZ3Mubm93KCksXG4gICAgICAgIG9mZnNldFByb3ZpcyA9IHpvbmVUb1VzZS5vZmZzZXQodHNOb3cpLFxuICAgICAgICBub3JtYWxpemVkID0gbm9ybWFsaXplT2JqZWN0KG9iaiwgbm9ybWFsaXplVW5pdCwgW1wiem9uZVwiLCBcImxvY2FsZVwiLCBcIm91dHB1dENhbGVuZGFyXCIsIFwibnVtYmVyaW5nU3lzdGVtXCJdKSxcbiAgICAgICAgY29udGFpbnNPcmRpbmFsID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQub3JkaW5hbCksXG4gICAgICAgIGNvbnRhaW5zR3JlZ29yWWVhciA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLnllYXIpLFxuICAgICAgICBjb250YWluc0dyZWdvck1EID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQubW9udGgpIHx8ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLmRheSksXG4gICAgICAgIGNvbnRhaW5zR3JlZ29yID0gY29udGFpbnNHcmVnb3JZZWFyIHx8IGNvbnRhaW5zR3JlZ29yTUQsXG4gICAgICAgIGRlZmluaXRlV2Vla0RlZiA9IG5vcm1hbGl6ZWQud2Vla1llYXIgfHwgbm9ybWFsaXplZC53ZWVrTnVtYmVyLFxuICAgICAgICBsb2MgPSBMb2NhbGUuZnJvbU9iamVjdChvYmopOyAvLyBjYXNlczpcbiAgICAvLyBqdXN0IGEgd2Vla2RheSAtPiB0aGlzIHdlZWsncyBpbnN0YW5jZSBvZiB0aGF0IHdlZWtkYXksIG5vIHdvcnJpZXNcbiAgICAvLyAoZ3JlZ29yaWFuIGRhdGEgb3Igb3JkaW5hbCkgKyAod2Vla1llYXIgb3Igd2Vla051bWJlcikgLT4gZXJyb3JcbiAgICAvLyAoZ3JlZ29yaWFuIG1vbnRoIG9yIGRheSkgKyBvcmRpbmFsIC0+IGVycm9yXG4gICAgLy8gb3RoZXJ3aXNlIGp1c3QgdXNlIHdlZWtzIG9yIG9yZGluYWxzIG9yIGdyZWdvcmlhbiwgZGVwZW5kaW5nIG9uIHdoYXQncyBzcGVjaWZpZWRcblxuICAgIGlmICgoY29udGFpbnNHcmVnb3IgfHwgY29udGFpbnNPcmRpbmFsKSAmJiBkZWZpbml0ZVdlZWtEZWYpIHtcbiAgICAgIHRocm93IG5ldyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcihcIkNhbid0IG1peCB3ZWVrWWVhci93ZWVrTnVtYmVyIHVuaXRzIHdpdGggeWVhci9tb250aC9kYXkgb3Igb3JkaW5hbHNcIik7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRhaW5zR3JlZ29yTUQgJiYgY29udGFpbnNPcmRpbmFsKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXCJDYW4ndCBtaXggb3JkaW5hbCBkYXRlcyB3aXRoIG1vbnRoL2RheVwiKTtcbiAgICB9XG5cbiAgICB2YXIgdXNlV2Vla0RhdGEgPSBkZWZpbml0ZVdlZWtEZWYgfHwgbm9ybWFsaXplZC53ZWVrZGF5ICYmICFjb250YWluc0dyZWdvcjsgLy8gY29uZmlndXJlIG91cnNlbHZlcyB0byBkZWFsIHdpdGggZ3JlZ29yaWFuIGRhdGVzIG9yIHdlZWsgc3R1ZmZcblxuICAgIHZhciB1bml0cyxcbiAgICAgICAgZGVmYXVsdFZhbHVlcyxcbiAgICAgICAgb2JqTm93ID0gdHNUb09iaih0c05vdywgb2Zmc2V0UHJvdmlzKTtcblxuICAgIGlmICh1c2VXZWVrRGF0YSkge1xuICAgICAgdW5pdHMgPSBvcmRlcmVkV2Vla1VuaXRzO1xuICAgICAgZGVmYXVsdFZhbHVlcyA9IGRlZmF1bHRXZWVrVW5pdFZhbHVlcztcbiAgICAgIG9iak5vdyA9IGdyZWdvcmlhblRvV2VlayhvYmpOb3cpO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbnNPcmRpbmFsKSB7XG4gICAgICB1bml0cyA9IG9yZGVyZWRPcmRpbmFsVW5pdHM7XG4gICAgICBkZWZhdWx0VmFsdWVzID0gZGVmYXVsdE9yZGluYWxVbml0VmFsdWVzO1xuICAgICAgb2JqTm93ID0gZ3JlZ29yaWFuVG9PcmRpbmFsKG9iak5vdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuaXRzID0gb3JkZXJlZFVuaXRzJDE7XG4gICAgICBkZWZhdWx0VmFsdWVzID0gZGVmYXVsdFVuaXRWYWx1ZXM7XG4gICAgfSAvLyBzZXQgZGVmYXVsdCB2YWx1ZXMgZm9yIG1pc3Npbmcgc3R1ZmZcblxuXG4gICAgdmFyIGZvdW5kRmlyc3QgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKHVuaXRzKSwgX3N0ZXAzOyAhKF9zdGVwMyA9IF9pdGVyYXRvcjMoKSkuZG9uZTspIHtcbiAgICAgIHZhciB1ID0gX3N0ZXAzLnZhbHVlO1xuICAgICAgdmFyIHYgPSBub3JtYWxpemVkW3VdO1xuXG4gICAgICBpZiAoIWlzVW5kZWZpbmVkKHYpKSB7XG4gICAgICAgIGZvdW5kRmlyc3QgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChmb3VuZEZpcnN0KSB7XG4gICAgICAgIG5vcm1hbGl6ZWRbdV0gPSBkZWZhdWx0VmFsdWVzW3VdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9ybWFsaXplZFt1XSA9IG9iak5vd1t1XTtcbiAgICAgIH1cbiAgICB9IC8vIG1ha2Ugc3VyZSB0aGUgdmFsdWVzIHdlIGhhdmUgYXJlIGluIHJhbmdlXG5cblxuICAgIHZhciBoaWdoZXJPcmRlckludmFsaWQgPSB1c2VXZWVrRGF0YSA/IGhhc0ludmFsaWRXZWVrRGF0YShub3JtYWxpemVkKSA6IGNvbnRhaW5zT3JkaW5hbCA/IGhhc0ludmFsaWRPcmRpbmFsRGF0YShub3JtYWxpemVkKSA6IGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhKG5vcm1hbGl6ZWQpLFxuICAgICAgICBpbnZhbGlkID0gaGlnaGVyT3JkZXJJbnZhbGlkIHx8IGhhc0ludmFsaWRUaW1lRGF0YShub3JtYWxpemVkKTtcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChpbnZhbGlkKTtcbiAgICB9IC8vIGNvbXB1dGUgdGhlIGFjdHVhbCB0aW1lXG5cblxuICAgIHZhciBncmVnb3JpYW4gPSB1c2VXZWVrRGF0YSA/IHdlZWtUb0dyZWdvcmlhbihub3JtYWxpemVkKSA6IGNvbnRhaW5zT3JkaW5hbCA/IG9yZGluYWxUb0dyZWdvcmlhbihub3JtYWxpemVkKSA6IG5vcm1hbGl6ZWQsXG4gICAgICAgIF9vYmpUb1RTMiA9IG9ialRvVFMoZ3JlZ29yaWFuLCBvZmZzZXRQcm92aXMsIHpvbmVUb1VzZSksXG4gICAgICAgIHRzRmluYWwgPSBfb2JqVG9UUzJbMF0sXG4gICAgICAgIG9mZnNldEZpbmFsID0gX29ialRvVFMyWzFdLFxuICAgICAgICBpbnN0ID0gbmV3IERhdGVUaW1lKHtcbiAgICAgIHRzOiB0c0ZpbmFsLFxuICAgICAgem9uZTogem9uZVRvVXNlLFxuICAgICAgbzogb2Zmc2V0RmluYWwsXG4gICAgICBsb2M6IGxvY1xuICAgIH0pOyAvLyBncmVnb3JpYW4gZGF0YSArIHdlZWtkYXkgc2VydmVzIG9ubHkgdG8gdmFsaWRhdGVcblxuXG4gICAgaWYgKG5vcm1hbGl6ZWQud2Vla2RheSAmJiBjb250YWluc0dyZWdvciAmJiBvYmoud2Vla2RheSAhPT0gaW5zdC53ZWVrZGF5KSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChcIm1pc21hdGNoZWQgd2Vla2RheVwiLCBcInlvdSBjYW4ndCBzcGVjaWZ5IGJvdGggYSB3ZWVrZGF5IG9mIFwiICsgbm9ybWFsaXplZC53ZWVrZGF5ICsgXCIgYW5kIGEgZGF0ZSBvZiBcIiArIGluc3QudG9JU08oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3Q7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gSVNPIDg2MDEgc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIElTTyBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIHVzZSB0aGlzIHpvbmUgaWYgbm8gb2Zmc2V0IGlzIHNwZWNpZmllZCBpbiB0aGUgaW5wdXQgc3RyaW5nIGl0c2VsZi4gV2lsbCBhbHNvIGNvbnZlcnQgdGhlIHRpbWUgdG8gdGhpcyB6b25lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgZml4ZWQtb2Zmc2V0IHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMrMDY6MDAnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMyswNjowMCcsIHtzZXRab25lOiB0cnVlfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMnLCB7em9uZTogJ3V0Yyd9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LVcwNS00JylcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICA7XG5cbiAgRGF0ZVRpbWUuZnJvbUlTTyA9IGZ1bmN0aW9uIGZyb21JU08odGV4dCwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgX3BhcnNlSVNPRGF0ZSA9IHBhcnNlSVNPRGF0ZSh0ZXh0KSxcbiAgICAgICAgdmFscyA9IF9wYXJzZUlTT0RhdGVbMF0sXG4gICAgICAgIHBhcnNlZFpvbmUgPSBfcGFyc2VJU09EYXRlWzFdO1xuXG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgXCJJU08gODYwMVwiLCB0ZXh0KTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBSRkMgMjgyMiBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgUkZDIDI4MjIgc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSBjb252ZXJ0IHRoZSB0aW1lIHRvIHRoaXMgem9uZS4gU2luY2UgdGhlIG9mZnNldCBpcyBhbHdheXMgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCB0aGlzIGhhcyBubyBlZmZlY3Qgb24gdGhlIGludGVycHJldGF0aW9uIG9mIHN0cmluZywgbWVyZWx5IHRoZSB6b25lIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaXMgZXhwcmVzc2VkIGluLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCBhIGZpeGVkLW9mZnNldCB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdzeXN0ZW0ncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tUkZDMjgyMignMjUgTm92IDIwMTYgMTM6MjM6MTIgR01UJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVJGQzI4MjIoJ0ZyaSwgMjUgTm92IDIwMTYgMTM6MjM6MTIgKzA2MDAnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tUkZDMjgyMignMjUgTm92IDIwMTYgMTM6MjMgWicpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgO1xuXG4gIERhdGVUaW1lLmZyb21SRkMyODIyID0gZnVuY3Rpb24gZnJvbVJGQzI4MjIodGV4dCwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgX3BhcnNlUkZDMjgyMkRhdGUgPSBwYXJzZVJGQzI4MjJEYXRlKHRleHQpLFxuICAgICAgICB2YWxzID0gX3BhcnNlUkZDMjgyMkRhdGVbMF0sXG4gICAgICAgIHBhcnNlZFpvbmUgPSBfcGFyc2VSRkMyODIyRGF0ZVsxXTtcblxuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsIFwiUkZDIDI4MjJcIiwgdGV4dCk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gSFRUUCBoZWFkZXIgZGF0ZVxuICAgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9Qcm90b2NvbHMvcmZjMjYxNi9yZmMyNjE2LXNlYzMuaHRtbCNzZWMzLjMuMVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBIVFRQIGhlYWRlciBkYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSBjb252ZXJ0IHRoZSB0aW1lIHRvIHRoaXMgem9uZS4gU2luY2UgSFRUUCBkYXRlcyBhcmUgYWx3YXlzIGluIFVUQywgdGhpcyBoYXMgbm8gZWZmZWN0IG9uIHRoZSBpbnRlcnByZXRhdGlvbiBvZiBzdHJpbmcsIG1lcmVseSB0aGUgem9uZSB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGlzIGV4cHJlc3NlZCBpbi5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggdGhlIGZpeGVkLW9mZnNldCB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nLiBGb3IgSFRUUCBkYXRlcywgdGhpcyBpcyBhbHdheXMgVVRDLCBzbyB0aGlzIG9wdGlvbiBpcyBlcXVpdmFsZW50IHRvIHNldHRpbmcgdGhlIGB6b25lYCBvcHRpb24gdG8gJ3V0YycsIGJ1dCB0aGlzIG9wdGlvbiBpcyBpbmNsdWRlZCBmb3IgY29uc2lzdGVuY3kgd2l0aCBzaW1pbGFyIG1ldGhvZHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21IVFRQKCdTdW4sIDA2IE5vdiAxOTk0IDA4OjQ5OjM3IEdNVCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21IVFRQKCdTdW5kYXksIDA2LU5vdi05NCAwODo0OTozNyBHTVQnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSFRUUCgnU3VuIE5vdiAgNiAwODo0OTozNyAxOTk0JylcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICA7XG5cbiAgRGF0ZVRpbWUuZnJvbUhUVFAgPSBmdW5jdGlvbiBmcm9tSFRUUCh0ZXh0LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIHZhciBfcGFyc2VIVFRQRGF0ZSA9IHBhcnNlSFRUUERhdGUodGV4dCksXG4gICAgICAgIHZhbHMgPSBfcGFyc2VIVFRQRGF0ZVswXSxcbiAgICAgICAgcGFyc2VkWm9uZSA9IF9wYXJzZUhUVFBEYXRlWzFdO1xuXG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgXCJIVFRQXCIsIG9wdHMpO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIGlucHV0IHN0cmluZyBhbmQgZm9ybWF0IHN0cmluZy5cbiAgICogRGVmYXVsdHMgdG8gZW4tVVMgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZCwgcmVnYXJkbGVzcyBvZiB0aGUgc3lzdGVtJ3MgbG9jYWxlLlxuICAgKiBAc2VlIGh0dHBzOi8vbW9tZW50LmdpdGh1Yi5pby9sdXhvbi9kb2NzL21hbnVhbC9wYXJzaW5nLmh0bWwjdGFibGUtb2YtdG9rZW5zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIHN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCB0aGUgc3RyaW5nIGlzIGV4cGVjdGVkIHRvIGJlIGluIChzZWUgdGhlIGxpbmsgYmVsb3cgZm9yIHRoZSBmb3JtYXRzKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gdXNlIHRoaXMgem9uZSBpZiBubyBvZmZzZXQgaXMgc3BlY2lmaWVkIGluIHRoZSBpbnB1dCBzdHJpbmcgaXRzZWxmLiBXaWxsIGFsc28gY29udmVydCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyB6b25lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIGEgbG9jYWxlIHN0cmluZyB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSBEYXRlVGltZSB0byB0aGlzIGxvY2FsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgdG8gdGhpcyBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBEYXRlVGltZS5mcm9tRm9ybWF0ID0gZnVuY3Rpb24gZnJvbUZvcm1hdCh0ZXh0LCBmbXQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgaWYgKGlzVW5kZWZpbmVkKHRleHQpIHx8IGlzVW5kZWZpbmVkKGZtdCkpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcImZyb21Gb3JtYXQgcmVxdWlyZXMgYW4gaW5wdXQgc3RyaW5nIGFuZCBhIGZvcm1hdFwiKTtcbiAgICB9XG5cbiAgICB2YXIgX29wdHMgPSBvcHRzLFxuICAgICAgICBfb3B0cyRsb2NhbGUgPSBfb3B0cy5sb2NhbGUsXG4gICAgICAgIGxvY2FsZSA9IF9vcHRzJGxvY2FsZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9vcHRzJGxvY2FsZSxcbiAgICAgICAgX29wdHMkbnVtYmVyaW5nU3lzdGVtID0gX29wdHMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfb3B0cyRudW1iZXJpbmdTeXN0ZW0gPT09IHZvaWQgMCA/IG51bGwgOiBfb3B0cyRudW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIGxvY2FsZVRvVXNlID0gTG9jYWxlLmZyb21PcHRzKHtcbiAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgbnVtYmVyaW5nU3lzdGVtOiBudW1iZXJpbmdTeXN0ZW0sXG4gICAgICBkZWZhdWx0VG9FTjogdHJ1ZVxuICAgIH0pLFxuICAgICAgICBfcGFyc2VGcm9tVG9rZW5zID0gcGFyc2VGcm9tVG9rZW5zKGxvY2FsZVRvVXNlLCB0ZXh0LCBmbXQpLFxuICAgICAgICB2YWxzID0gX3BhcnNlRnJvbVRva2Vuc1swXSxcbiAgICAgICAgcGFyc2VkWm9uZSA9IF9wYXJzZUZyb21Ub2tlbnNbMV0sXG4gICAgICAgIGludmFsaWQgPSBfcGFyc2VGcm9tVG9rZW5zWzJdO1xuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKGludmFsaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBcImZvcm1hdCBcIiArIGZtdCwgdGV4dCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgZnJvbUZvcm1hdCBpbnN0ZWFkXG4gICAqL1xuICA7XG5cbiAgRGF0ZVRpbWUuZnJvbVN0cmluZyA9IGZ1bmN0aW9uIGZyb21TdHJpbmcodGV4dCwgZm10LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiBEYXRlVGltZS5mcm9tRm9ybWF0KHRleHQsIGZtdCwgb3B0cyk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBTUUwgZGF0ZSwgdGltZSwgb3IgZGF0ZXRpbWVcbiAgICogRGVmYXVsdHMgdG8gZW4tVVMgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZCwgcmVnYXJkbGVzcyBvZiB0aGUgc3lzdGVtJ3MgbG9jYWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIHN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gdXNlIHRoaXMgem9uZSBpZiBubyBvZmZzZXQgaXMgc3BlY2lmaWVkIGluIHRoZSBpbnB1dCBzdHJpbmcgaXRzZWxmLiBXaWxsIGFsc28gY29udmVydCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyB6b25lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIGEgbG9jYWxlIHN0cmluZyB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSBEYXRlVGltZSB0byB0aGlzIGxvY2FsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgdG8gdGhpcyBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1JylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDIrMDY6MDAnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MiBBbWVyaWNhL0xvc19BbmdlbGVzJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDIgQW1lcmljYS9Mb3NfQW5nZWxlcycsIHsgc2V0Wm9uZTogdHJ1ZSB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MicsIHsgem9uZTogJ0FtZXJpY2EvTG9zX0FuZ2VsZXMnIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzA5OjEyOjM0LjM0MicpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgO1xuXG4gIERhdGVUaW1lLmZyb21TUUwgPSBmdW5jdGlvbiBmcm9tU1FMKHRleHQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgdmFyIF9wYXJzZVNRTCA9IHBhcnNlU1FMKHRleHQpLFxuICAgICAgICB2YWxzID0gX3BhcnNlU1FMWzBdLFxuICAgICAgICBwYXJzZWRab25lID0gX3BhcnNlU1FMWzFdO1xuXG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgXCJTUUxcIiwgdGV4dCk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBpbnZhbGlkIERhdGVUaW1lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIC0gc2ltcGxlIHN0cmluZyBvZiB3aHkgdGhpcyBEYXRlVGltZSBpcyBpbnZhbGlkLiBTaG91bGQgbm90IGNvbnRhaW4gcGFyYW1ldGVycyBvciBhbnl0aGluZyBlbHNlIGRhdGEtZGVwZW5kZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwbGFuYXRpb249bnVsbF0gLSBsb25nZXIgZXhwbGFuYXRpb24sIG1heSBpbmNsdWRlIHBhcmFtZXRlcnMgYW5kIG90aGVyIHVzZWZ1bCBkZWJ1Z2dpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICA7XG5cbiAgRGF0ZVRpbWUuaW52YWxpZCA9IGZ1bmN0aW9uIGludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbikge1xuICAgIGlmIChleHBsYW5hdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICBleHBsYW5hdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCFyZWFzb24pIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm5lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgRGF0ZVRpbWUgaXMgaW52YWxpZFwiKTtcbiAgICB9XG5cbiAgICB2YXIgaW52YWxpZCA9IHJlYXNvbiBpbnN0YW5jZW9mIEludmFsaWQgPyByZWFzb24gOiBuZXcgSW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKTtcblxuICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWREYXRlVGltZUVycm9yKGludmFsaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgICAgaW52YWxpZDogaW52YWxpZFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgYSBEYXRlVGltZS4gV29ya3MgYWNyb3NzIGNvbnRleHQgYm91bmRhcmllc1xuICAgKiBAcGFyYW0ge29iamVjdH0gb1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgO1xuXG4gIERhdGVUaW1lLmlzRGF0ZVRpbWUgPSBmdW5jdGlvbiBpc0RhdGVUaW1lKG8pIHtcbiAgICByZXR1cm4gbyAmJiBvLmlzTHV4b25EYXRlVGltZSB8fCBmYWxzZTtcbiAgfSAvLyBJTkZPXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb2YgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBhIHVuaXQgc3VjaCBhcyAnbWludXRlJyBvciAnZGF5J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA3LCA0KS5nZXQoJ21vbnRoJyk7IC8vPT4gN1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA3LCA0KS5nZXQoJ2RheScpOyAvLz0+IDRcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgO1xuXG4gIHZhciBfcHJvdG8gPSBEYXRlVGltZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldCA9IGZ1bmN0aW9uIGdldCh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXNbdW5pdF07XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgRGF0ZVRpbWUgaXMgdmFsaWQuIEludmFsaWQgRGF0ZVRpbWVzIG9jY3VyIHdoZW46XG4gICAqICogVGhlIERhdGVUaW1lIHdhcyBjcmVhdGVkIGZyb20gaW52YWxpZCBjYWxlbmRhciBpbmZvcm1hdGlvbiwgc3VjaCBhcyB0aGUgMTN0aCBtb250aCBvciBGZWJydWFyeSAzMFxuICAgKiAqIFRoZSBEYXRlVGltZSB3YXMgY3JlYXRlZCBieSBhbiBvcGVyYXRpb24gb24gYW5vdGhlciBpbnZhbGlkIGRhdGVcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlc29sdmVkIEludGwgb3B0aW9ucyBmb3IgdGhpcyBEYXRlVGltZS5cbiAgICogVGhpcyBpcyB1c2VmdWwgaW4gdW5kZXJzdGFuZGluZyB0aGUgYmVoYXZpb3Igb2YgZm9ybWF0dGluZyBtZXRob2RzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gdGhlIHNhbWUgb3B0aW9ucyBhcyB0b0xvY2FsZVN0cmluZ1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBfcHJvdG8ucmVzb2x2ZWRMb2NhbGVPcHRzID0gZnVuY3Rpb24gcmVzb2x2ZWRMb2NhbGVPcHRzKG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgdmFyIF9Gb3JtYXR0ZXIkY3JlYXRlJHJlcyA9IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MuY2xvbmUob3B0cyksIG9wdHMpLnJlc29sdmVkT3B0aW9ucyh0aGlzKSxcbiAgICAgICAgbG9jYWxlID0gX0Zvcm1hdHRlciRjcmVhdGUkcmVzLmxvY2FsZSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX0Zvcm1hdHRlciRjcmVhdGUkcmVzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgY2FsZW5kYXIgPSBfRm9ybWF0dGVyJGNyZWF0ZSRyZXMuY2FsZW5kYXI7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IG51bWJlcmluZ1N5c3RlbSxcbiAgICAgIG91dHB1dENhbGVuZGFyOiBjYWxlbmRhclxuICAgIH07XG4gIH0gLy8gVFJBTlNGT1JNXG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIERhdGVUaW1lJ3Mgem9uZSB0byBVVEMuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICpcbiAgICogRXF1aXZhbGVudCB0byB7QGxpbmsgc2V0Wm9uZX0oJ3V0YycpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbb2Zmc2V0PTBdIC0gb3B0aW9uYWxseSwgYW4gb2Zmc2V0IGZyb20gVVRDIGluIG1pbnV0ZXNcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzPXt9XSAtIG9wdGlvbnMgdG8gcGFzcyB0byBgc2V0Wm9uZSgpYFxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9VVEMgPSBmdW5jdGlvbiB0b1VUQyhvZmZzZXQsIG9wdHMpIHtcbiAgICBpZiAob2Zmc2V0ID09PSB2b2lkIDApIHtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNldFpvbmUoRml4ZWRPZmZzZXRab25lLmluc3RhbmNlKG9mZnNldCksIG9wdHMpO1xuICB9XG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBEYXRlVGltZSdzIHpvbmUgdG8gdGhlIGhvc3QncyBsb2NhbCB6b25lLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqXG4gICAqIEVxdWl2YWxlbnQgdG8gYHNldFpvbmUoJ2xvY2FsJylgXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0xvY2FsID0gZnVuY3Rpb24gdG9Mb2NhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRab25lKFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgfVxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgRGF0ZVRpbWUncyB6b25lIHRvIHNwZWNpZmllZCB6b25lLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIHRoZSBzZXR0ZXIga2VlcHMgdGhlIHVuZGVybHlpbmcgdGltZSB0aGUgc2FtZSAoYXMgaW4sIHRoZSBzYW1lIHRpbWVzdGFtcCksIGJ1dCB0aGUgbmV3IGluc3RhbmNlIHdpbGwgcmVwb3J0IGRpZmZlcmVudCBsb2NhbCB0aW1lcyBhbmQgY29uc2lkZXIgRFNUcyB3aGVuIG1ha2luZyBjb21wdXRhdGlvbnMsIGFzIHdpdGgge0BsaW5rIHBsdXN9LiBZb3UgbWF5IHdpc2ggdG8gdXNlIHtAbGluayB0b0xvY2FsfSBhbmQge0BsaW5rIHRvVVRDfSB3aGljaCBwcm92aWRlIHNpbXBsZSBjb252ZW5pZW5jZSB3cmFwcGVycyBmb3IgY29tbW9ubHkgdXNlZCB6b25lcy5cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW3pvbmU9J2xvY2FsJ10gLSBhIHpvbmUgaWRlbnRpZmllci4gQXMgYSBzdHJpbmcsIHRoYXQgY2FuIGJlIGFueSBJQU5BIHpvbmUgc3VwcG9ydGVkIGJ5IHRoZSBob3N0IGVudmlyb25tZW50LCBvciBhIGZpeGVkLW9mZnNldCBuYW1lIG9mIHRoZSBmb3JtICdVVEMrMycsIG9yIHRoZSBzdHJpbmdzICdsb2NhbCcgb3IgJ3V0YycuIFlvdSBtYXkgYWxzbyBzdXBwbHkgYW4gaW5zdGFuY2Ugb2YgYSB7QGxpbmsgWm9uZX0gY2xhc3MuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmtlZXBMb2NhbFRpbWU9ZmFsc2VdIC0gSWYgdHJ1ZSwgYWRqdXN0IHRoZSB1bmRlcmx5aW5nIHRpbWUgc28gdGhhdCB0aGUgbG9jYWwgdGltZSBzdGF5cyB0aGUgc2FtZSwgYnV0IGluIHRoZSB0YXJnZXQgem9uZS4gWW91IHNob3VsZCByYXJlbHkgbmVlZCB0aGlzLlxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2V0Wm9uZSA9IGZ1bmN0aW9uIHNldFpvbmUoem9uZSwgX3RlbXApIHtcbiAgICB2YXIgX3JlZjMgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgX3JlZjMka2VlcExvY2FsVGltZSA9IF9yZWYzLmtlZXBMb2NhbFRpbWUsXG4gICAgICAgIGtlZXBMb2NhbFRpbWUgPSBfcmVmMyRrZWVwTG9jYWxUaW1lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYzJGtlZXBMb2NhbFRpbWUsXG4gICAgICAgIF9yZWYzJGtlZXBDYWxlbmRhclRpbSA9IF9yZWYzLmtlZXBDYWxlbmRhclRpbWUsXG4gICAgICAgIGtlZXBDYWxlbmRhclRpbWUgPSBfcmVmMyRrZWVwQ2FsZW5kYXJUaW0gPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjMka2VlcENhbGVuZGFyVGltO1xuXG4gICAgem9uZSA9IG5vcm1hbGl6ZVpvbmUoem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuXG4gICAgaWYgKHpvbmUuZXF1YWxzKHRoaXMuem9uZSkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSBpZiAoIXpvbmUuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQodW5zdXBwb3J0ZWRab25lKHpvbmUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG5ld1RTID0gdGhpcy50cztcblxuICAgICAgaWYgKGtlZXBMb2NhbFRpbWUgfHwga2VlcENhbGVuZGFyVGltZSkge1xuICAgICAgICB2YXIgb2Zmc2V0R3Vlc3MgPSB6b25lLm9mZnNldCh0aGlzLnRzKTtcbiAgICAgICAgdmFyIGFzT2JqID0gdGhpcy50b09iamVjdCgpO1xuXG4gICAgICAgIHZhciBfb2JqVG9UUzMgPSBvYmpUb1RTKGFzT2JqLCBvZmZzZXRHdWVzcywgem9uZSk7XG5cbiAgICAgICAgbmV3VFMgPSBfb2JqVG9UUzNbMF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIHtcbiAgICAgICAgdHM6IG5ld1RTLFxuICAgICAgICB6b25lOiB6b25lXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvciBvdXRwdXRDYWxlbmRhci4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyAtIHRoZSBwcm9wZXJ0aWVzIHRvIHNldFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkucmVjb25maWd1cmUoeyBsb2NhbGU6ICdlbi1HQicgfSlcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlY29uZmlndXJlID0gZnVuY3Rpb24gcmVjb25maWd1cmUoX3RlbXAyKSB7XG4gICAgdmFyIF9yZWY0ID0gX3RlbXAyID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMixcbiAgICAgICAgbG9jYWxlID0gX3JlZjQubG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfcmVmNC5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIG91dHB1dENhbGVuZGFyID0gX3JlZjQub3V0cHV0Q2FsZW5kYXI7XG5cbiAgICB2YXIgbG9jID0gdGhpcy5sb2MuY2xvbmUoe1xuICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IG51bWJlcmluZ1N5c3RlbSxcbiAgICAgIG91dHB1dENhbGVuZGFyOiBvdXRwdXRDYWxlbmRhclxuICAgIH0pO1xuICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIHtcbiAgICAgIGxvYzogbG9jXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIGxvY2FsZS4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKiBKdXN0IGEgY29udmVuaWVudCBhbGlhcyBmb3IgcmVjb25maWd1cmUoeyBsb2NhbGUgfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnNldExvY2FsZSgnZW4tR0InKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2V0TG9jYWxlID0gZnVuY3Rpb24gc2V0TG9jYWxlKGxvY2FsZSkge1xuICAgIHJldHVybiB0aGlzLnJlY29uZmlndXJlKHtcbiAgICAgIGxvY2FsZTogbG9jYWxlXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIHZhbHVlcyBvZiBzcGVjaWZpZWQgdW5pdHMuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICogWW91IGNhbiBvbmx5IHNldCB1bml0cyB3aXRoIHRoaXMgbWV0aG9kOyBmb3IgXCJzZXR0aW5nXCIgbWV0YWRhdGEsIHNlZSB7QGxpbmsgcmVjb25maWd1cmV9IGFuZCB7QGxpbmsgc2V0Wm9uZX0uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSBhIG1hcHBpbmcgb2YgdW5pdHMgdG8gbnVtYmVyc1xuICAgKiBAZXhhbXBsZSBkdC5zZXQoeyB5ZWFyOiAyMDE3IH0pXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IGhvdXI6IDgsIG1pbnV0ZTogMzAgfSlcbiAgICogQGV4YW1wbGUgZHQuc2V0KHsgd2Vla2RheTogNSB9KVxuICAgKiBAZXhhbXBsZSBkdC5zZXQoeyB5ZWFyOiAyMDA1LCBvcmRpbmFsOiAyMzQgfSlcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNldCA9IGZ1bmN0aW9uIHNldCh2YWx1ZXMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIG5vcm1hbGl6ZWQgPSBub3JtYWxpemVPYmplY3QodmFsdWVzLCBub3JtYWxpemVVbml0LCBbXSksXG4gICAgICAgIHNldHRpbmdXZWVrU3R1ZmYgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC53ZWVrWWVhcikgfHwgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQud2Vla051bWJlcikgfHwgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQud2Vla2RheSk7XG4gICAgdmFyIG1peGVkO1xuXG4gICAgaWYgKHNldHRpbmdXZWVrU3R1ZmYpIHtcbiAgICAgIG1peGVkID0gd2Vla1RvR3JlZ29yaWFuKE9iamVjdC5hc3NpZ24oZ3JlZ29yaWFuVG9XZWVrKHRoaXMuYyksIG5vcm1hbGl6ZWQpKTtcbiAgICB9IGVsc2UgaWYgKCFpc1VuZGVmaW5lZChub3JtYWxpemVkLm9yZGluYWwpKSB7XG4gICAgICBtaXhlZCA9IG9yZGluYWxUb0dyZWdvcmlhbihPYmplY3QuYXNzaWduKGdyZWdvcmlhblRvT3JkaW5hbCh0aGlzLmMpLCBub3JtYWxpemVkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1peGVkID0gT2JqZWN0LmFzc2lnbih0aGlzLnRvT2JqZWN0KCksIG5vcm1hbGl6ZWQpOyAvLyBpZiB3ZSBkaWRuJ3Qgc2V0IHRoZSBkYXkgYnV0IHdlIGVuZGVkIHVwIG9uIGFuIG92ZXJmbG93IGRhdGUsXG4gICAgICAvLyB1c2UgdGhlIGxhc3QgZGF5IG9mIHRoZSByaWdodCBtb250aFxuXG4gICAgICBpZiAoaXNVbmRlZmluZWQobm9ybWFsaXplZC5kYXkpKSB7XG4gICAgICAgIG1peGVkLmRheSA9IE1hdGgubWluKGRheXNJbk1vbnRoKG1peGVkLnllYXIsIG1peGVkLm1vbnRoKSwgbWl4ZWQuZGF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgX29ialRvVFM0ID0gb2JqVG9UUyhtaXhlZCwgdGhpcy5vLCB0aGlzLnpvbmUpLFxuICAgICAgICB0cyA9IF9vYmpUb1RTNFswXSxcbiAgICAgICAgbyA9IF9vYmpUb1RTNFsxXTtcblxuICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIHtcbiAgICAgIHRzOiB0cyxcbiAgICAgIG86IG9cbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQWRkIGEgcGVyaW9kIG9mIHRpbWUgdG8gdGhpcyBEYXRlVGltZSBhbmQgcmV0dXJuIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWVcbiAgICpcbiAgICogQWRkaW5nIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBvciBtaWxsaXNlY29uZHMgaW5jcmVhc2VzIHRoZSB0aW1lc3RhbXAgYnkgdGhlIHJpZ2h0IG51bWJlciBvZiBtaWxsaXNlY29uZHMuIEFkZGluZyBkYXlzLCBtb250aHMsIG9yIHllYXJzIHNoaWZ0cyB0aGUgY2FsZW5kYXIsIGFjY291bnRpbmcgZm9yIERTVHMgYW5kIGxlYXAgeWVhcnMgYWxvbmcgdGhlIHdheS4gVGh1cywgYGR0LnBsdXMoeyBob3VyczogMjQgfSlgIG1heSByZXN1bHQgaW4gYSBkaWZmZXJlbnQgdGltZSB0aGFuIGBkdC5wbHVzKHsgZGF5czogMSB9KWAgaWYgdGhlcmUncyBhIERTVCBzaGlmdCBpbiBiZXR3ZWVuLlxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBhZGQuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkucGx1cygxMjMpIC8vfj4gaW4gMTIzIG1pbGxpc2Vjb25kc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnBsdXMoeyBtaW51dGVzOiAxNSB9KSAvL34+IGluIDE1IG1pbnV0ZXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5wbHVzKHsgZGF5czogMSB9KSAvL34+IHRoaXMgdGltZSB0b21vcnJvd1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnBsdXMoeyBkYXlzOiAtMSB9KSAvL34+IHRoaXMgdGltZSB5ZXN0ZXJkYXlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5wbHVzKHsgaG91cnM6IDMsIG1pbnV0ZXM6IDEzIH0pIC8vfj4gaW4gMyBociwgMTMgbWluXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkucGx1cyhEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDMsIG1pbnV0ZXM6IDEzIH0pKSAvL34+IGluIDMgaHIsIDEzIG1pblxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucGx1cyA9IGZ1bmN0aW9uIHBsdXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIGR1ciA9IGZyaWVuZGx5RHVyYXRpb24oZHVyYXRpb24pO1xuICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIGFkanVzdFRpbWUodGhpcywgZHVyKSk7XG4gIH1cbiAgLyoqXG4gICAqIFN1YnRyYWN0IGEgcGVyaW9kIG9mIHRpbWUgdG8gdGhpcyBEYXRlVGltZSBhbmQgcmV0dXJuIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWVcbiAgICogU2VlIHtAbGluayBwbHVzfVxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBzdWJ0cmFjdC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcbiAgIEByZXR1cm4ge0RhdGVUaW1lfVxuICAqL1xuICA7XG5cbiAgX3Byb3RvLm1pbnVzID0gZnVuY3Rpb24gbWludXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIGR1ciA9IGZyaWVuZGx5RHVyYXRpb24oZHVyYXRpb24pLm5lZ2F0ZSgpO1xuICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIGFkanVzdFRpbWUodGhpcywgZHVyKSk7XG4gIH1cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhpcyBEYXRlVGltZSB0byB0aGUgYmVnaW5uaW5nIG9mIGEgdW5pdCBvZiB0aW1lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIFRoZSB1bml0IHRvIGdvIHRvIHRoZSBiZWdpbm5pbmcgb2YuIENhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcsIG9yICdtaWxsaXNlY29uZCcuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLnN0YXJ0T2YoJ21vbnRoJykudG9JU09EYXRlKCk7IC8vPT4gJzIwMTQtMDMtMDEnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLnN0YXJ0T2YoJ3llYXInKS50b0lTT0RhdGUoKTsgLy89PiAnMjAxNC0wMS0wMSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMywgNSwgMzApLnN0YXJ0T2YoJ2RheScpLnRvSVNPVGltZSgpOyAvLz0+ICcwMDowMC4wMDAtMDU6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5zdGFydE9mKCdob3VyJykudG9JU09UaW1lKCk7IC8vPT4gJzA1OjAwOjAwLjAwMC0wNTowMCdcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnN0YXJ0T2YgPSBmdW5jdGlvbiBzdGFydE9mKHVuaXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIG8gPSB7fSxcbiAgICAgICAgbm9ybWFsaXplZFVuaXQgPSBEdXJhdGlvbi5ub3JtYWxpemVVbml0KHVuaXQpO1xuXG4gICAgc3dpdGNoIChub3JtYWxpemVkVW5pdCkge1xuICAgICAgY2FzZSBcInllYXJzXCI6XG4gICAgICAgIG8ubW9udGggPSAxO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuXG4gICAgICBjYXNlIFwicXVhcnRlcnNcIjpcbiAgICAgIGNhc2UgXCJtb250aHNcIjpcbiAgICAgICAgby5kYXkgPSAxO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuXG4gICAgICBjYXNlIFwid2Vla3NcIjpcbiAgICAgIGNhc2UgXCJkYXlzXCI6XG4gICAgICAgIG8uaG91ciA9IDA7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG5cbiAgICAgIGNhc2UgXCJob3Vyc1wiOlxuICAgICAgICBvLm1pbnV0ZSA9IDA7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG5cbiAgICAgIGNhc2UgXCJtaW51dGVzXCI6XG4gICAgICAgIG8uc2Vjb25kID0gMDtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcblxuICAgICAgY2FzZSBcInNlY29uZHNcIjpcbiAgICAgICAgby5taWxsaXNlY29uZCA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gbm8gZGVmYXVsdCwgaW52YWxpZCB1bml0cyB0aHJvdyBpbiBub3JtYWxpemVVbml0KClcbiAgICB9XG5cbiAgICBpZiAobm9ybWFsaXplZFVuaXQgPT09IFwid2Vla3NcIikge1xuICAgICAgby53ZWVrZGF5ID0gMTtcbiAgICB9XG5cbiAgICBpZiAobm9ybWFsaXplZFVuaXQgPT09IFwicXVhcnRlcnNcIikge1xuICAgICAgdmFyIHEgPSBNYXRoLmNlaWwodGhpcy5tb250aCAvIDMpO1xuICAgICAgby5tb250aCA9IChxIC0gMSkgKiAzICsgMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zZXQobyk7XG4gIH1cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhpcyBEYXRlVGltZSB0byB0aGUgZW5kIChtZWFuaW5nIHRoZSBsYXN0IG1pbGxpc2Vjb25kKSBvZiBhIHVuaXQgb2YgdGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIFRoZSB1bml0IHRvIGdvIHRvIHRoZSBlbmQgb2YuIENhbiBiZSAneWVhcicsICdtb250aCcsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJywgb3IgJ21pbGxpc2Vjb25kJy5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuZW5kT2YoJ21vbnRoJykudG9JU08oKTsgLy89PiAnMjAxNC0wMy0zMVQyMzo1OTo1OS45OTktMDU6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLmVuZE9mKCd5ZWFyJykudG9JU08oKTsgLy89PiAnMjAxNC0xMi0zMVQyMzo1OTo1OS45OTktMDU6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5lbmRPZignZGF5JykudG9JU08oKTsgLy89PiAnMjAxNC0wMy0wM1QyMzo1OTo1OS45OTktMDU6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5lbmRPZignaG91cicpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMDMtMDNUMDU6NTk6NTkuOTk5LTA1OjAwJ1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZW5kT2YgPSBmdW5jdGlvbiBlbmRPZih1bml0KSB7XG4gICAgdmFyIF90aGlzJHBsdXM7XG5cbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5wbHVzKChfdGhpcyRwbHVzID0ge30sIF90aGlzJHBsdXNbdW5pdF0gPSAxLCBfdGhpcyRwbHVzKSkuc3RhcnRPZih1bml0KS5taW51cygxKSA6IHRoaXM7XG4gIH0gLy8gT1VUUFVUXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgZm9ybWF0IHN0cmluZy5cbiAgICogKipZb3UgbWF5IG5vdCB3YW50IHRoaXMuKiogU2VlIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9yIGEgbW9yZSBmbGV4aWJsZSBmb3JtYXR0aW5nIHRvb2wuIEZvciBhIHRhYmxlIG9mIHRva2VucyBhbmQgdGhlaXIgaW50ZXJwcmV0YXRpb25zLCBzZWUgW2hlcmVdKGh0dHBzOi8vbW9tZW50LmdpdGh1Yi5pby9sdXhvbi9kb2NzL21hbnVhbC9mb3JtYXR0aW5nLmh0bWwjdGFibGUtb2YtdG9rZW5zKS5cbiAgICogRGVmYXVsdHMgdG8gZW4tVVMgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZCwgcmVnYXJkbGVzcyBvZiB0aGUgc3lzdGVtJ3MgbG9jYWxlLlxuICAgKiBAc2VlIGh0dHBzOi8vbW9tZW50LmdpdGh1Yi5pby9sdXhvbi9kb2NzL21hbnVhbC9mb3JtYXR0aW5nLmh0bWwjdGFibGUtb2YtdG9rZW5zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdHMgdG8gb3ZlcnJpZGUgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnRvRm9ybWF0KCd5eXl5IExMTCBkZCcpIC8vPT4gJzIwMTcgQXByIDIyJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnNldExvY2FsZSgnZnInKS50b0Zvcm1hdCgneXl5eSBMTEwgZGQnKSAvLz0+ICcyMDE3IGF2ci4gMjInXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9Gb3JtYXQoJ3l5eXkgTExMIGRkJywgeyBsb2NhbGU6IFwiZnJcIiB9KSAvLz0+ICcyMDE3IGF2ci4gMjInXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9Gb3JtYXQoXCJISCAnaG91cnMgYW5kJyBtbSAnbWludXRlcydcIikgLy89PiAnMjAgaG91cnMgYW5kIDU1IG1pbnV0ZXMnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9Gb3JtYXQgPSBmdW5jdGlvbiB0b0Zvcm1hdChmbXQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MucmVkZWZhdWx0VG9FTihvcHRzKSkuZm9ybWF0RGF0ZVRpbWVGcm9tU3RyaW5nKHRoaXMsIGZtdCkgOiBJTlZBTElEJDI7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2NhbGl6ZWQgc3RyaW5nIHJlcHJlc2VudGluZyB0aGlzIGRhdGUuIEFjY2VwdHMgdGhlIHNhbWUgb3B0aW9ucyBhcyB0aGUgSW50bC5EYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBhbmQgYW55IHByZXNldHMgZGVmaW5lZCBieSBMdXhvbiwgc3VjaCBhcyBgRGF0ZVRpbWUuREFURV9GVUxMYCBvciBgRGF0ZVRpbWUuVElNRV9TSU1QTEVgLlxuICAgKiBUaGUgZXhhY3QgYmVoYXZpb3Igb2YgdGhpcyBtZXRob2QgaXMgYnJvd3Nlci1zcGVjaWZpYywgYnV0IGluIGdlbmVyYWwgaXQgd2lsbCByZXR1cm4gYW4gYXBwcm9wcmlhdGUgcmVwcmVzZW50YXRpb25cbiAgICogb2YgdGhlIERhdGVUaW1lIGluIHRoZSBhc3NpZ25lZCBsb2NhbGUuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XG4gICAqIEBwYXJhbSBvcHRzIHtPYmplY3R9IC0gSW50bC5EYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBvcHRpb25zIGFuZCBjb25maWd1cmF0aW9uIG9wdGlvbnNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b0xvY2FsZVN0cmluZygpOyAvLz0+IDQvMjAvMjAxN1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnNldExvY2FsZSgnZW4tZ2InKS50b0xvY2FsZVN0cmluZygpOyAvLz0+ICcyMC8wNC8yMDE3J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnRvTG9jYWxlU3RyaW5nKHsgbG9jYWxlOiAnZW4tZ2InIH0pOyAvLz0+ICcyMC8wNC8yMDE3J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVfRlVMTCk7IC8vPT4gJ0FwcmlsIDIwLCAyMDE3J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLlRJTUVfU0lNUExFKTsgLy89PiAnMTE6MzIgQU0nXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURVRJTUVfU0hPUlQpOyAvLz0+ICc0LzIwLzIwMTcsIDExOjMyIEFNJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnRvTG9jYWxlU3RyaW5nKHsgd2Vla2RheTogJ2xvbmcnLCBtb250aDogJ2xvbmcnLCBkYXk6ICcyLWRpZ2l0JyB9KTsgLy89PiAnVGh1cnNkYXksIEFwcmlsIDIwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnRvTG9jYWxlU3RyaW5nKHsgd2Vla2RheTogJ3Nob3J0JywgbW9udGg6ICdzaG9ydCcsIGRheTogJzItZGlnaXQnLCBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pOyAvLz0+ICdUaHUsIEFwciAyMCwgMTE6MjcgQU0nXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9Mb2NhbGVTdHJpbmcoeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnLCBob3VyMTI6IGZhbHNlIH0pOyAvLz0+ICcxMTozMidcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0xvY2FsZVN0cmluZyA9IGZ1bmN0aW9uIHRvTG9jYWxlU3RyaW5nKG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0gREFURV9TSE9SVDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYy5jbG9uZShvcHRzKSwgb3B0cykuZm9ybWF0RGF0ZVRpbWUodGhpcykgOiBJTlZBTElEJDI7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgZm9ybWF0IFwicGFydHNcIiwgbWVhbmluZyBpbmRpdmlkdWFsIHRva2VucyBhbG9uZyB3aXRoIG1ldGFkYXRhLiBUaGlzIGlzIGFsbG93cyBjYWxsZXJzIHRvIHBvc3QtcHJvY2VzcyBpbmRpdmlkdWFsIHNlY3Rpb25zIG9mIHRoZSBmb3JtYXR0ZWQgb3V0cHV0LlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdC9mb3JtYXRUb1BhcnRzXG4gICAqIEBwYXJhbSBvcHRzIHtPYmplY3R9IC0gSW50bC5EYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBvcHRpb25zLCBzYW1lIGFzIGB0b0xvY2FsZVN0cmluZ2AuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9Mb2NhbGVQYXJ0cygpOyAvLz0+IFtcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdkYXknLCB2YWx1ZTogJzI1JyB9LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ2xpdGVyYWwnLCB2YWx1ZTogJy8nIH0sXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnbW9udGgnLCB2YWx1ZTogJzA1JyB9LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ2xpdGVyYWwnLCB2YWx1ZTogJy8nIH0sXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAneWVhcicsIHZhbHVlOiAnMTk4MicgfVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiBdXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvTG9jYWxlUGFydHMgPSBmdW5jdGlvbiB0b0xvY2FsZVBhcnRzKG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MuY2xvbmUob3B0cyksIG9wdHMpLmZvcm1hdERhdGVUaW1lUGFydHModGhpcykgOiBbXTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzU2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIHNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MiwgNSwgMjUpLnRvSVNPKCkgLy89PiAnMTk4Mi0wNS0yNVQwMDowMDowMC4wMDBaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnRvSVNPKCkgLy89PiAnMjAxNy0wNC0yMlQyMDo0NzowNS4zMzUtMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9JU08oeyBpbmNsdWRlT2Zmc2V0OiBmYWxzZSB9KSAvLz0+ICcyMDE3LTA0LTIyVDIwOjQ3OjA1LjMzNSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b0lTTyh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcyMDE3MDQyMlQyMDQ3MDUuMzM1LTA0MDAnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9JU08gPSBmdW5jdGlvbiB0b0lTTyhvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50b0lTT0RhdGUob3B0cykgKyBcIlRcIiArIHRoaXMudG9JU09UaW1lKG9wdHMpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSdzIGRhdGUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuZm9ybWF0PSdleHRlbmRlZCddIC0gY2hvb3NlIGJldHdlZW4gdGhlIGJhc2ljIGFuZCBleHRlbmRlZCBmb3JtYXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDE5ODIsIDUsIDI1KS50b0lTT0RhdGUoKSAvLz0+ICcxOTgyLTA1LTI1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MiwgNSwgMjUpLnRvSVNPRGF0ZSh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcxOTgyMDUyNSdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0lTT0RhdGUgPSBmdW5jdGlvbiB0b0lTT0RhdGUoX3RlbXAzKSB7XG4gICAgdmFyIF9yZWY1ID0gX3RlbXAzID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMyxcbiAgICAgICAgX3JlZjUkZm9ybWF0ID0gX3JlZjUuZm9ybWF0LFxuICAgICAgICBmb3JtYXQgPSBfcmVmNSRmb3JtYXQgPT09IHZvaWQgMCA/IFwiZXh0ZW5kZWRcIiA6IF9yZWY1JGZvcm1hdDtcblxuICAgIHZhciBmbXQgPSBmb3JtYXQgPT09IFwiYmFzaWNcIiA/IFwieXl5eU1NZGRcIiA6IFwieXl5eS1NTS1kZFwiO1xuXG4gICAgaWYgKHRoaXMueWVhciA+IDk5OTkpIHtcbiAgICAgIGZtdCA9IFwiK1wiICsgZm10O1xuICAgIH1cblxuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcywgZm10KTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUncyB3ZWVrIGRhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDE5ODIsIDUsIDI1KS50b0lTT1dlZWtEYXRlKCkgLy89PiAnMTk4Mi1XMjEtMidcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0lTT1dlZWtEYXRlID0gZnVuY3Rpb24gdG9JU09XZWVrRGF0ZSgpIHtcbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMsIFwia2tray0nVydXVy1jXCIpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSdzIHRpbWUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzTWlsbGlzZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc1NlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuZm9ybWF0PSdleHRlbmRlZCddIC0gY2hvb3NlIGJldHdlZW4gdGhlIGJhc2ljIGFuZCBleHRlbmRlZCBmb3JtYXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuc2V0KHsgaG91cjogNywgbWludXRlOiAzNCB9KS50b0lTT1RpbWUoKSAvLz0+ICcwNzozNDoxOS4zNjFaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0LCBzZWNvbmRzOiAwLCBtaWxsaXNlY29uZHM6IDAgfSkudG9JU09UaW1lKHsgc3VwcHJlc3NTZWNvbmRzOiB0cnVlIH0pIC8vPT4gJzA3OjM0WidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuc2V0KHsgaG91cjogNywgbWludXRlOiAzNCB9KS50b0lTT1RpbWUoeyBmb3JtYXQ6ICdiYXNpYycgfSkgLy89PiAnMDczNDE5LjM2MVonXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9JU09UaW1lID0gZnVuY3Rpb24gdG9JU09UaW1lKF90ZW1wNCkge1xuICAgIHZhciBfcmVmNiA9IF90ZW1wNCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDQsXG4gICAgICAgIF9yZWY2JHN1cHByZXNzTWlsbGlzZSA9IF9yZWY2LnN1cHByZXNzTWlsbGlzZWNvbmRzLFxuICAgICAgICBzdXBwcmVzc01pbGxpc2Vjb25kcyA9IF9yZWY2JHN1cHByZXNzTWlsbGlzZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmNiRzdXBwcmVzc01pbGxpc2UsXG4gICAgICAgIF9yZWY2JHN1cHByZXNzU2Vjb25kcyA9IF9yZWY2LnN1cHByZXNzU2Vjb25kcyxcbiAgICAgICAgc3VwcHJlc3NTZWNvbmRzID0gX3JlZjYkc3VwcHJlc3NTZWNvbmRzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWY2JHN1cHByZXNzU2Vjb25kcyxcbiAgICAgICAgX3JlZjYkaW5jbHVkZU9mZnNldCA9IF9yZWY2LmluY2x1ZGVPZmZzZXQsXG4gICAgICAgIGluY2x1ZGVPZmZzZXQgPSBfcmVmNiRpbmNsdWRlT2Zmc2V0ID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZjYkaW5jbHVkZU9mZnNldCxcbiAgICAgICAgX3JlZjYkZm9ybWF0ID0gX3JlZjYuZm9ybWF0LFxuICAgICAgICBmb3JtYXQgPSBfcmVmNiRmb3JtYXQgPT09IHZvaWQgMCA/IFwiZXh0ZW5kZWRcIiA6IF9yZWY2JGZvcm1hdDtcblxuICAgIHJldHVybiB0b1RlY2hUaW1lRm9ybWF0KHRoaXMsIHtcbiAgICAgIHN1cHByZXNzU2Vjb25kczogc3VwcHJlc3NTZWNvbmRzLFxuICAgICAgc3VwcHJlc3NNaWxsaXNlY29uZHM6IHN1cHByZXNzTWlsbGlzZWNvbmRzLFxuICAgICAgaW5jbHVkZU9mZnNldDogaW5jbHVkZU9mZnNldCxcbiAgICAgIGZvcm1hdDogZm9ybWF0XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gUkZDIDI4MjItY29tcGF0aWJsZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSwgYWx3YXlzIGluIFVUQ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvUkZDMjgyMigpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgKzAwMDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1JGQzI4MjIoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDAwOjAwOjAwIC0wNDAwJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvUkZDMjgyMiA9IGZ1bmN0aW9uIHRvUkZDMjgyMigpIHtcbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMsIFwiRUVFLCBkZCBMTEwgeXl5eSBISDptbTpzcyBaWlpcIiwgZmFsc2UpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBIVFRQIGhlYWRlcnMuXG4gICAqIFNwZWNpZmljYWxseSwgdGhlIHN0cmluZyBjb25mb3JtcyB0byBSRkMgMTEyMy5cbiAgICogQHNlZSBodHRwczovL3d3dy53My5vcmcvUHJvdG9jb2xzL3JmYzI2MTYvcmZjMjYxNi1zZWMzLmh0bWwjc2VjMy4zLjFcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b0hUVFAoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDAwOjAwOjAwIEdNVCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzLCAxOSkudG9IVFRQKCkgLy89PiAnU3VuLCAxMyBKdWwgMjAxNCAxOTowMDowMCBHTVQnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9IVFRQID0gZnVuY3Rpb24gdG9IVFRQKCkge1xuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcy50b1VUQygpLCBcIkVFRSwgZGQgTExMIHl5eXkgSEg6bW06c3MgJ0dNVCdcIik7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIFNRTCBEYXRlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMykudG9TUUxEYXRlKCkgLy89PiAnMjAxNC0wNy0xMydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1NRTERhdGUgPSBmdW5jdGlvbiB0b1NRTERhdGUoKSB7XG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCBcInl5eXktTU0tZGRcIik7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIFNRTCBUaW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVab25lPWZhbHNlXSAtIGluY2x1ZGUgdGhlIHpvbmUsIHN1Y2ggYXMgJ0FtZXJpY2EvTmV3X1lvcmsnLiBPdmVycmlkZXMgaW5jbHVkZU9mZnNldC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS50b1NRTCgpIC8vPT4gJzA1OjE1OjE2LjM0NSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b1NRTCgpIC8vPT4gJzA1OjE1OjE2LjM0NSAtMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9TUUwoeyBpbmNsdWRlT2Zmc2V0OiBmYWxzZSB9KSAvLz0+ICcwNToxNToxNi4zNDUnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9TUUwoeyBpbmNsdWRlWm9uZTogZmFsc2UgfSkgLy89PiAnMDU6MTU6MTYuMzQ1IEFtZXJpY2EvTmV3X1lvcmsnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9TUUxUaW1lID0gZnVuY3Rpb24gdG9TUUxUaW1lKF90ZW1wNSkge1xuICAgIHZhciBfcmVmNyA9IF90ZW1wNSA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDUsXG4gICAgICAgIF9yZWY3JGluY2x1ZGVPZmZzZXQgPSBfcmVmNy5pbmNsdWRlT2Zmc2V0LFxuICAgICAgICBpbmNsdWRlT2Zmc2V0ID0gX3JlZjckaW5jbHVkZU9mZnNldCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWY3JGluY2x1ZGVPZmZzZXQsXG4gICAgICAgIF9yZWY3JGluY2x1ZGVab25lID0gX3JlZjcuaW5jbHVkZVpvbmUsXG4gICAgICAgIGluY2x1ZGVab25lID0gX3JlZjckaW5jbHVkZVpvbmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjckaW5jbHVkZVpvbmU7XG5cbiAgICByZXR1cm4gdG9UZWNoVGltZUZvcm1hdCh0aGlzLCB7XG4gICAgICBpbmNsdWRlT2Zmc2V0OiBpbmNsdWRlT2Zmc2V0LFxuICAgICAgaW5jbHVkZVpvbmU6IGluY2x1ZGVab25lLFxuICAgICAgc3BhY2Vab25lOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIFNRTCBEYXRlVGltZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlWm9uZT1mYWxzZV0gLSBpbmNsdWRlIHRoZSB6b25lLCBzdWNoIGFzICdBbWVyaWNhL05ld19Zb3JrJy4gT3ZlcnJpZGVzIGluY2x1ZGVPZmZzZXQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldD10cnVlXSAtIGluY2x1ZGUgdGhlIG9mZnNldCwgc3VjaCBhcyAnWicgb3IgJy0wNDowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b1NRTCgpIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwIFonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1NRTCgpIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwIC0wNDowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvU1FMKHsgaW5jbHVkZU9mZnNldDogZmFsc2UgfSkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1NRTCh7IGluY2x1ZGVab25lOiB0cnVlIH0pIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwIEFtZXJpY2EvTmV3X1lvcmsnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9TUUwgPSBmdW5jdGlvbiB0b1NRTChvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50b1NRTERhdGUoKSArIFwiIFwiICsgdGhpcy50b1NRTFRpbWUob3B0cyk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgZGVidWdnaW5nXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50b0lTTygpIDogSU5WQUxJRCQyO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlcG9jaCBtaWxsaXNlY29uZHMgb2YgdGhpcyBEYXRlVGltZS4gQWxpYXMgb2Yge0BsaW5rIHRvTWlsbGlzfVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnZhbHVlT2YgPSBmdW5jdGlvbiB2YWx1ZU9mKCkge1xuICAgIHJldHVybiB0aGlzLnRvTWlsbGlzKCk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVwb2NoIG1pbGxpc2Vjb25kcyBvZiB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvTWlsbGlzID0gZnVuY3Rpb24gdG9NaWxsaXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudHMgOiBOYU47XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVwb2NoIHNlY29uZHMgb2YgdGhpcyBEYXRlVGltZS5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1NlY29uZHMgPSBmdW5jdGlvbiB0b1NlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudHMgLyAxMDAwIDogTmFOO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBKU09OLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b0lTTygpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgQlNPTiBzZXJpYWxpemFibGUgZXF1aXZhbGVudCB0byB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtEYXRlfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0JTT04gPSBmdW5jdGlvbiB0b0JTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9KU0RhdGUoKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIEphdmFzY3JpcHQgb2JqZWN0IHdpdGggdGhpcyBEYXRlVGltZSdzIHllYXIsIG1vbnRoLCBkYXksIGFuZCBzbyBvbi5cbiAgICogQHBhcmFtIG9wdHMgLSBvcHRpb25zIGZvciBnZW5lcmF0aW5nIHRoZSBvYmplY3RcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlQ29uZmlnPWZhbHNlXSAtIGluY2x1ZGUgY29uZmlndXJhdGlvbiBhdHRyaWJ1dGVzIGluIHRoZSBvdXRwdXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b09iamVjdCgpIC8vPT4geyB5ZWFyOiAyMDE3LCBtb250aDogNCwgZGF5OiAyMiwgaG91cjogMjAsIG1pbnV0ZTogNDksIHNlY29uZDogNDIsIG1pbGxpc2Vjb25kOiAyNjggfVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvT2JqZWN0ID0gZnVuY3Rpb24gdG9PYmplY3Qob3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHt9O1xuICAgIHZhciBiYXNlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jKTtcblxuICAgIGlmIChvcHRzLmluY2x1ZGVDb25maWcpIHtcbiAgICAgIGJhc2Uub3V0cHV0Q2FsZW5kYXIgPSB0aGlzLm91dHB1dENhbGVuZGFyO1xuICAgICAgYmFzZS5udW1iZXJpbmdTeXN0ZW0gPSB0aGlzLmxvYy5udW1iZXJpbmdTeXN0ZW07XG4gICAgICBiYXNlLmxvY2FsZSA9IHRoaXMubG9jLmxvY2FsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIEphdmFzY3JpcHQgRGF0ZSBlcXVpdmFsZW50IHRvIHRoaXMgRGF0ZVRpbWUuXG4gICAqIEByZXR1cm4ge0RhdGV9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvSlNEYXRlID0gZnVuY3Rpb24gdG9KU0RhdGUoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuaXNWYWxpZCA/IHRoaXMudHMgOiBOYU4pO1xuICB9IC8vIENPTVBBUkVcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIERhdGVUaW1lcyBhcyBhIER1cmF0aW9uLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlckRhdGVUaW1lIC0gdGhlIERhdGVUaW1lIHRvIGNvbXBhcmUgdGhpcyBvbmUgdG9cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgYXJyYXkgb2YgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIGNyZWF0aW9uIG9mIHRoZSBEdXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQGV4YW1wbGVcbiAgICogdmFyIGkxID0gRGF0ZVRpbWUuZnJvbUlTTygnMTk4Mi0wNS0yNVQwOTo0NScpLFxuICAgKiAgICAgaTIgPSBEYXRlVGltZS5mcm9tSVNPKCcxOTgzLTEwLTE0VDEwOjMwJyk7XG4gICAqIGkyLmRpZmYoaTEpLnRvT2JqZWN0KCkgLy89PiB7IG1pbGxpc2Vjb25kczogNDM4MDc1MDAwMDAgfVxuICAgKiBpMi5kaWZmKGkxLCAnaG91cnMnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTIxNjguNzUgfVxuICAgKiBpMi5kaWZmKGkxLCBbJ21vbnRocycsICdkYXlzJ10pLnRvT2JqZWN0KCkgLy89PiB7IG1vbnRoczogMTYsIGRheXM6IDE5LjAzMTI1IH1cbiAgICogaTIuZGlmZihpMSwgWydtb250aHMnLCAnZGF5cycsICdob3VycyddKS50b09iamVjdCgpIC8vPT4geyBtb250aHM6IDE2LCBkYXlzOiAxOSwgaG91cnM6IDAuNzUgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZGlmZiA9IGZ1bmN0aW9uIGRpZmYob3RoZXJEYXRlVGltZSwgdW5pdCwgb3B0cykge1xuICAgIGlmICh1bml0ID09PSB2b2lkIDApIHtcbiAgICAgIHVuaXQgPSBcIm1pbGxpc2Vjb25kc1wiO1xuICAgIH1cblxuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCB8fCAhb3RoZXJEYXRlVGltZS5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZCh0aGlzLmludmFsaWQgfHwgb3RoZXJEYXRlVGltZS5pbnZhbGlkLCBcImNyZWF0ZWQgYnkgZGlmZmluZyBhbiBpbnZhbGlkIERhdGVUaW1lXCIpO1xuICAgIH1cblxuICAgIHZhciBkdXJPcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbVxuICAgIH0sIG9wdHMpO1xuXG4gICAgdmFyIHVuaXRzID0gbWF5YmVBcnJheSh1bml0KS5tYXAoRHVyYXRpb24ubm9ybWFsaXplVW5pdCksXG4gICAgICAgIG90aGVySXNMYXRlciA9IG90aGVyRGF0ZVRpbWUudmFsdWVPZigpID4gdGhpcy52YWx1ZU9mKCksXG4gICAgICAgIGVhcmxpZXIgPSBvdGhlcklzTGF0ZXIgPyB0aGlzIDogb3RoZXJEYXRlVGltZSxcbiAgICAgICAgbGF0ZXIgPSBvdGhlcklzTGF0ZXIgPyBvdGhlckRhdGVUaW1lIDogdGhpcyxcbiAgICAgICAgZGlmZmVkID0gX2RpZmYoZWFybGllciwgbGF0ZXIsIHVuaXRzLCBkdXJPcHRzKTtcblxuICAgIHJldHVybiBvdGhlcklzTGF0ZXIgPyBkaWZmZWQubmVnYXRlKCkgOiBkaWZmZWQ7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoaXMgRGF0ZVRpbWUgYW5kIHJpZ2h0IG5vdy5cbiAgICogU2VlIHtAbGluayBkaWZmfVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3VuaXQ9WydtaWxsaXNlY29uZHMnXV0gLSB0aGUgdW5pdCBvciB1bml0cyB1bml0cyAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gaW5jbHVkZSBpbiB0aGUgZHVyYXRpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBjcmVhdGlvbiBvZiB0aGUgRHVyYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kaWZmTm93ID0gZnVuY3Rpb24gZGlmZk5vdyh1bml0LCBvcHRzKSB7XG4gICAgaWYgKHVuaXQgPT09IHZvaWQgMCkge1xuICAgICAgdW5pdCA9IFwibWlsbGlzZWNvbmRzXCI7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRpZmYoRGF0ZVRpbWUubG9jYWwoKSwgdW5pdCwgb3B0cyk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiBhbiBJbnRlcnZhbCBzcGFubmluZyBiZXR3ZWVuIHRoaXMgRGF0ZVRpbWUgYW5kIGFub3RoZXIgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZSAtIHRoZSBvdGhlciBlbmQgcG9pbnQgb2YgdGhlIEludGVydmFsXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by51bnRpbCA9IGZ1bmN0aW9uIHVudGlsKG90aGVyRGF0ZVRpbWUpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyh0aGlzLCBvdGhlckRhdGVUaW1lKSA6IHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgRGF0ZVRpbWUgaXMgaW4gdGhlIHNhbWUgdW5pdCBvZiB0aW1lIGFzIGFub3RoZXIgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZSAtIHRoZSBvdGhlciBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY2hlY2sgc2FtZW5lc3Mgb25cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5oYXNTYW1lKG90aGVyRFQsICdkYXknKTsgLy9+PiB0cnVlIGlmIGJvdGggdGhlIHNhbWUgY2FsZW5kYXIgZGF5XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmhhc1NhbWUgPSBmdW5jdGlvbiBoYXNTYW1lKG90aGVyRGF0ZVRpbWUsIHVuaXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHVuaXQgPT09IFwibWlsbGlzZWNvbmRcIikge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpID09PSBvdGhlckRhdGVUaW1lLnZhbHVlT2YoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGlucHV0TXMgPSBvdGhlckRhdGVUaW1lLnZhbHVlT2YoKTtcbiAgICAgIHJldHVybiB0aGlzLnN0YXJ0T2YodW5pdCkgPD0gaW5wdXRNcyAmJiBpbnB1dE1zIDw9IHRoaXMuZW5kT2YodW5pdCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBFcXVhbGl0eSBjaGVja1xuICAgKiBUd28gRGF0ZVRpbWVzIGFyZSBlcXVhbCBpZmYgdGhleSByZXByZXNlbnQgdGhlIHNhbWUgbWlsbGlzZWNvbmQsIGhhdmUgdGhlIHNhbWUgem9uZSBhbmQgbG9jYXRpb24sIGFuZCBhcmUgYm90aCB2YWxpZC5cbiAgICogVG8gY29tcGFyZSBqdXN0IHRoZSBtaWxsaXNlY29uZCB2YWx1ZXMsIHVzZSBgK2R0MSA9PT0gK2R0MmAuXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IG90aGVyIC0gdGhlIG90aGVyIERhdGVUaW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgJiYgb3RoZXIuaXNWYWxpZCAmJiB0aGlzLnZhbHVlT2YoKSA9PT0gb3RoZXIudmFsdWVPZigpICYmIHRoaXMuem9uZS5lcXVhbHMob3RoZXIuem9uZSkgJiYgdGhpcy5sb2MuZXF1YWxzKG90aGVyLmxvYyk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB0aGlzIHRpbWUgcmVsYXRpdmUgdG8gbm93LCBzdWNoIGFzIFwiaW4gdHdvIGRheXNcIi4gQ2FuIG9ubHkgaW50ZXJuYXRpb25hbGl6ZSBpZiB5b3VyXG4gICAqIHBsYXRmb3JtIHN1cHBvcnRzIEludGwuUmVsYXRpdmVUaW1lRm9ybWF0LiBSb3VuZHMgZG93biBieSBkZWZhdWx0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIG91dHB1dFxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBbb3B0aW9ucy5iYXNlPURhdGVUaW1lLmxvY2FsKCldIC0gdGhlIERhdGVUaW1lIHRvIHVzZSBhcyB0aGUgYmFzaXMgdG8gd2hpY2ggdGhpcyB0aW1lIGlzIGNvbXBhcmVkLiBEZWZhdWx0cyB0byBub3cuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5zdHlsZT1cImxvbmdcIl0gLSB0aGUgc3R5bGUgb2YgdW5pdHMsIG11c3QgYmUgXCJsb25nXCIsIFwic2hvcnRcIiwgb3IgXCJuYXJyb3dcIlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy51bml0IC0gdXNlIGEgc3BlY2lmaWMgdW5pdDsgaWYgb21pdHRlZCwgdGhlIG1ldGhvZCB3aWxsIHBpY2sgdGhlIHVuaXQuIFVzZSBvbmUgb2YgXCJ5ZWFyc1wiLCBcInF1YXJ0ZXJzXCIsIFwibW9udGhzXCIsIFwid2Vla3NcIiwgXCJkYXlzXCIsIFwiaG91cnNcIiwgXCJtaW51dGVzXCIsIG9yIFwic2Vjb25kc1wiXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucm91bmQ9dHJ1ZV0gLSB3aGV0aGVyIHRvIHJvdW5kIHRoZSBudW1iZXJzIGluIHRoZSBvdXRwdXQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucGFkZGluZz0wXSAtIHBhZGRpbmcgaW4gbWlsbGlzZWNvbmRzLiBUaGlzIGFsbG93cyB5b3UgdG8gcm91bmQgdXAgdGhlIHJlc3VsdCBpZiBpdCBmaXRzIGluc2lkZSB0aGUgdGhyZXNob2xkLiBEb24ndCB1c2UgaW4gY29tYmluYXRpb24gd2l0aCB7cm91bmQ6IGZhbHNlfSBiZWNhdXNlIHRoZSBkZWNpbWFsIG91dHB1dCB3aWxsIGluY2x1ZGUgdGhlIHBhZGRpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmxvY2FsZSAtIG92ZXJyaWRlIHRoZSBsb2NhbGUgb2YgdGhpcyBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSBvdmVycmlkZSB0aGUgbnVtYmVyaW5nU3lzdGVtIG9mIHRoaXMgRGF0ZVRpbWUuIFRoZSBJbnRsIHN5c3RlbSBtYXkgY2hvb3NlIG5vdCB0byBob25vciB0aGlzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZSgpIC8vPT4gXCJpbiAxIGRheVwiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkuc2V0TG9jYWxlKFwiZXNcIikudG9SZWxhdGl2ZSh7IGRheXM6IDEgfSkgLy89PiBcImRlbnRybyBkZSAxIGTDrWFcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmUoeyBsb2NhbGU6IFwiZnJcIiB9KSAvLz0+IFwiZGFucyAyMyBoZXVyZXNcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLm1pbnVzKHsgZGF5czogMiB9KS50b1JlbGF0aXZlKCkgLy89PiBcIjIgZGF5cyBhZ29cIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLm1pbnVzKHsgZGF5czogMiB9KS50b1JlbGF0aXZlKHsgdW5pdDogXCJob3Vyc1wiIH0pIC8vPT4gXCI0OCBob3VycyBhZ29cIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLm1pbnVzKHsgaG91cnM6IDM2IH0pLnRvUmVsYXRpdmUoeyByb3VuZDogZmFsc2UgfSkgLy89PiBcIjEuNSBkYXlzIGFnb1wiXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvUmVsYXRpdmUgPSBmdW5jdGlvbiB0b1JlbGF0aXZlKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBudWxsO1xuICAgIHZhciBiYXNlID0gb3B0aW9ucy5iYXNlIHx8IERhdGVUaW1lLmZyb21PYmplY3Qoe1xuICAgICAgem9uZTogdGhpcy56b25lXG4gICAgfSksXG4gICAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcgPyB0aGlzIDwgYmFzZSA/IC1vcHRpb25zLnBhZGRpbmcgOiBvcHRpb25zLnBhZGRpbmcgOiAwO1xuICAgIHJldHVybiBkaWZmUmVsYXRpdmUoYmFzZSwgdGhpcy5wbHVzKHBhZGRpbmcpLCBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtcbiAgICAgIG51bWVyaWM6IFwiYWx3YXlzXCIsXG4gICAgICB1bml0czogW1wieWVhcnNcIiwgXCJtb250aHNcIiwgXCJkYXlzXCIsIFwiaG91cnNcIiwgXCJtaW51dGVzXCIsIFwic2Vjb25kc1wiXVxuICAgIH0pKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIGRhdGUgcmVsYXRpdmUgdG8gdG9kYXksIHN1Y2ggYXMgXCJ5ZXN0ZXJkYXlcIiBvciBcIm5leHQgbW9udGhcIi5cbiAgICogT25seSBpbnRlcm5hdGlvbmFsaXplcyBvbiBwbGF0Zm9ybXMgdGhhdCBzdXBwb3J0cyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBvdXRwdXRcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gW29wdGlvbnMuYmFzZT1EYXRlVGltZS5sb2NhbCgpXSAtIHRoZSBEYXRlVGltZSB0byB1c2UgYXMgdGhlIGJhc2lzIHRvIHdoaWNoIHRoaXMgdGltZSBpcyBjb21wYXJlZC4gRGVmYXVsdHMgdG8gbm93LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5sb2NhbGUgLSBvdmVycmlkZSB0aGUgbG9jYWxlIG9mIHRoaXMgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudW5pdCAtIHVzZSBhIHNwZWNpZmljIHVuaXQ7IGlmIG9taXR0ZWQsIHRoZSBtZXRob2Qgd2lsbCBwaWNrIHRoZSB1bml0LiBVc2Ugb25lIG9mIFwieWVhcnNcIiwgXCJxdWFydGVyc1wiLCBcIm1vbnRoc1wiLCBcIndlZWtzXCIsIG9yIFwiZGF5c1wiXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIG92ZXJyaWRlIHRoZSBudW1iZXJpbmdTeXN0ZW0gb2YgdGhpcyBEYXRlVGltZS4gVGhlIEludGwgc3lzdGVtIG1heSBjaG9vc2Ugbm90IHRvIGhvbm9yIHRoaXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlQ2FsZW5kYXIoKSAvLz0+IFwidG9tb3Jyb3dcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnNldExvY2FsZShcImVzXCIpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmUoKSAvLz0+IFwiXCJtYcOxYW5hXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlQ2FsZW5kYXIoeyBsb2NhbGU6IFwiZnJcIiB9KSAvLz0+IFwiZGVtYWluXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5taW51cyh7IGRheXM6IDIgfSkudG9SZWxhdGl2ZUNhbGVuZGFyKCkgLy89PiBcIjIgZGF5cyBhZ29cIlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1JlbGF0aXZlQ2FsZW5kYXIgPSBmdW5jdGlvbiB0b1JlbGF0aXZlQ2FsZW5kYXIob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGRpZmZSZWxhdGl2ZShvcHRpb25zLmJhc2UgfHwgRGF0ZVRpbWUuZnJvbU9iamVjdCh7XG4gICAgICB6b25lOiB0aGlzLnpvbmVcbiAgICB9KSwgdGhpcywgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICBudW1lcmljOiBcImF1dG9cIixcbiAgICAgIHVuaXRzOiBbXCJ5ZWFyc1wiLCBcIm1vbnRoc1wiLCBcImRheXNcIl0sXG4gICAgICBjYWxlbmRhcnk6IHRydWVcbiAgICB9KSk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbWluIG9mIHNldmVyYWwgZGF0ZSB0aW1lc1xuICAgKiBAcGFyYW0gey4uLkRhdGVUaW1lfSBkYXRlVGltZXMgLSB0aGUgRGF0ZVRpbWVzIGZyb20gd2hpY2ggdG8gY2hvb3NlIHRoZSBtaW5pbXVtXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfSB0aGUgbWluIERhdGVUaW1lLCBvciB1bmRlZmluZWQgaWYgY2FsbGVkIHdpdGggbm8gYXJndW1lbnRcbiAgICovXG4gIDtcblxuICBEYXRlVGltZS5taW4gPSBmdW5jdGlvbiBtaW4oKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRhdGVUaW1lcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGRhdGVUaW1lc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGVUaW1lcy5ldmVyeShEYXRlVGltZS5pc0RhdGVUaW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwibWluIHJlcXVpcmVzIGFsbCBhcmd1bWVudHMgYmUgRGF0ZVRpbWVzXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBiZXN0QnkoZGF0ZVRpbWVzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIGkudmFsdWVPZigpO1xuICAgIH0sIE1hdGgubWluKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHRoZSBtYXggb2Ygc2V2ZXJhbCBkYXRlIHRpbWVzXG4gICAqIEBwYXJhbSB7Li4uRGF0ZVRpbWV9IGRhdGVUaW1lcyAtIHRoZSBEYXRlVGltZXMgZnJvbSB3aGljaCB0byBjaG9vc2UgdGhlIG1heGltdW1cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9IHRoZSBtYXggRGF0ZVRpbWUsIG9yIHVuZGVmaW5lZCBpZiBjYWxsZWQgd2l0aCBubyBhcmd1bWVudFxuICAgKi9cbiAgO1xuXG4gIERhdGVUaW1lLm1heCA9IGZ1bmN0aW9uIG1heCgpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRhdGVUaW1lcyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgZGF0ZVRpbWVzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgaWYgKCFkYXRlVGltZXMuZXZlcnkoRGF0ZVRpbWUuaXNEYXRlVGltZSkpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm1heCByZXF1aXJlcyBhbGwgYXJndW1lbnRzIGJlIERhdGVUaW1lc1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmVzdEJ5KGRhdGVUaW1lcywgZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBpLnZhbHVlT2YoKTtcbiAgICB9LCBNYXRoLm1heCk7XG4gIH0gLy8gTUlTQ1xuXG4gIC8qKlxuICAgKiBFeHBsYWluIGhvdyBhIHN0cmluZyB3b3VsZCBiZSBwYXJzZWQgYnkgZnJvbUZvcm1hdCgpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIHN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCB0aGUgc3RyaW5nIGlzIGV4cGVjdGVkIHRvIGJlIGluIChzZWUgZGVzY3JpcHRpb24pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0YWtlbiBieSBmcm9tRm9ybWF0KClcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgO1xuXG4gIERhdGVUaW1lLmZyb21Gb3JtYXRFeHBsYWluID0gZnVuY3Rpb24gZnJvbUZvcm1hdEV4cGxhaW4odGV4dCwgZm10LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICAgIF9vcHRpb25zJGxvY2FsZSA9IF9vcHRpb25zLmxvY2FsZSxcbiAgICAgICAgbG9jYWxlID0gX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyBudWxsIDogX29wdGlvbnMkbG9jYWxlLFxuICAgICAgICBfb3B0aW9ucyRudW1iZXJpbmdTeXMgPSBfb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9vcHRpb25zJG51bWJlcmluZ1N5cyA9PT0gdm9pZCAwID8gbnVsbCA6IF9vcHRpb25zJG51bWJlcmluZ1N5cyxcbiAgICAgICAgbG9jYWxlVG9Vc2UgPSBMb2NhbGUuZnJvbU9wdHMoe1xuICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IG51bWJlcmluZ1N5c3RlbSxcbiAgICAgIGRlZmF1bHRUb0VOOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZVRvVXNlLCB0ZXh0LCBmbXQpO1xuICB9XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgZnJvbUZvcm1hdEV4cGxhaW4gaW5zdGVhZFxuICAgKi9cbiAgO1xuXG4gIERhdGVUaW1lLmZyb21TdHJpbmdFeHBsYWluID0gZnVuY3Rpb24gZnJvbVN0cmluZ0V4cGxhaW4odGV4dCwgZm10LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiBEYXRlVGltZS5mcm9tRm9ybWF0RXhwbGFpbih0ZXh0LCBmbXQsIG9wdGlvbnMpO1xuICB9IC8vIEZPUk1BVCBQUkVTRVRTXG5cbiAgLyoqXG4gICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgMTAvMTQvMTk4M1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgO1xuXG4gIF9jcmVhdGVDbGFzcyhEYXRlVGltZSwgW3tcbiAgICBrZXk6IFwiaXNWYWxpZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZCA9PT0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBlcnJvciBjb2RlIGlmIHRoaXMgRGF0ZVRpbWUgaXMgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRGF0ZVRpbWUgaXMgdmFsaWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW52YWxpZFJlYXNvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5yZWFzb24gOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGV4cGxhbmF0aW9uIG9mIHdoeSB0aGlzIERhdGVUaW1lIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEYXRlVGltZSBpcyB2YWxpZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpbnZhbGlkRXhwbGFuYXRpb25cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQuZXhwbGFuYXRpb24gOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxvY2FsZSBvZiBhIERhdGVUaW1lLCBzdWNoICdlbi1HQicuIFRoZSBsb2NhbGUgaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIERhdGVUaW1lXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibG9jYWxlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2MubG9jYWxlIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBudW1iZXJpbmcgc3lzdGVtIG9mIGEgRGF0ZVRpbWUsIHN1Y2ggJ2JlbmcnLiBUaGUgbnVtYmVyaW5nIHN5c3RlbSBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRGF0ZVRpbWVcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJudW1iZXJpbmdTeXN0ZW1cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5udW1iZXJpbmdTeXN0ZW0gOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG91dHB1dCBjYWxlbmRhciBvZiBhIERhdGVUaW1lLCBzdWNoICdpc2xhbWljJy4gVGhlIG91dHB1dCBjYWxlbmRhciBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRGF0ZVRpbWVcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvdXRwdXRDYWxlbmRhclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLm91dHB1dENhbGVuZGFyIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB0aW1lIHpvbmUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgRGF0ZVRpbWUuXG4gICAgICogQHR5cGUge1pvbmV9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ6b25lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fem9uZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBuYW1lIG9mIHRoZSB0aW1lIHpvbmUuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInpvbmVOYW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy56b25lLm5hbWUgOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHllYXJcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkueWVhciAvLz0+IDIwMTdcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwieWVhclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy55ZWFyIDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHF1YXJ0ZXJcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkucXVhcnRlciAvLz0+IDJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicXVhcnRlclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IE1hdGguY2VpbCh0aGlzLmMubW9udGggLyAzKSA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtb250aCAoMS0xMikuXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLm1vbnRoIC8vPT4gNVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtb250aFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5tb250aCA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkYXkgb2YgdGhlIG1vbnRoICgxLTMwaXNoKS5cbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkuZGF5IC8vPT4gMjVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF5XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLmRheSA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBob3VyIG9mIHRoZSBkYXkgKDAtMjMpLlxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5KS5ob3VyIC8vPT4gOVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJob3VyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLmhvdXIgOiBOYU47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbWludXRlIG9mIHRoZSBob3VyICgwLTU5KS5cbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSwgOSwgMzApLm1pbnV0ZSAvLz0+IDMwXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1pbnV0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5taW51dGUgOiBOYU47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc2Vjb25kIG9mIHRoZSBtaW51dGUgKDAtNTkpLlxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5LCAzMCwgNTIpLnNlY29uZCAvLz0+IDUyXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNlY29uZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5zZWNvbmQgOiBOYU47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCAoMC05OTkpLlxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5LCAzMCwgNTIsIDY1NCkubWlsbGlzZWNvbmQgLy89PiA2NTRcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWlsbGlzZWNvbmRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMubWlsbGlzZWNvbmQgOiBOYU47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgd2VlayB5ZWFyXG4gICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMTEsIDMxKS53ZWVrWWVhciAvLz0+IDIwMTVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwid2Vla1llYXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKHRoaXMpLndlZWtZZWFyIDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHdlZWsgbnVtYmVyIG9mIHRoZSB3ZWVrIHllYXIgKDEtNTJpc2gpLlxuICAgICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS53ZWVrTnVtYmVyIC8vPT4gMjFcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwid2Vla051bWJlclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEodGhpcykud2Vla051bWJlciA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICogMSBpcyBNb25kYXkgYW5kIDcgaXMgU3VuZGF5XG4gICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMTEsIDMxKS53ZWVrZGF5IC8vPT4gNFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ3ZWVrZGF5XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gcG9zc2libHlDYWNoZWRXZWVrRGF0YSh0aGlzKS53ZWVrZGF5IDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG9yZGluYWwgKG1lYW5pbmcgdGhlIGRheSBvZiB0aGUgeWVhcilcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkub3JkaW5hbCAvLz0+IDE0NVxuICAgICAqIEB0eXBlIHtudW1iZXJ8RGF0ZVRpbWV9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvcmRpbmFsXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gZ3JlZ29yaWFuVG9PcmRpbmFsKHRoaXMuYykub3JkaW5hbCA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBzaG9ydCBtb250aCBuYW1lLCBzdWNoIGFzICdPY3QnLlxuICAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDEwLCAzMCkubW9udGhTaG9ydCAvLz0+IE9jdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtb250aFNob3J0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby5tb250aHMoXCJzaG9ydFwiLCB7XG4gICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGVcbiAgICAgIH0pW3RoaXMubW9udGggLSAxXSA6IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaHVtYW4gcmVhZGFibGUgbG9uZyBtb250aCBuYW1lLCBzdWNoIGFzICdPY3RvYmVyJy5cbiAgICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLm1vbnRoTG9uZyAvLz0+IE9jdG9iZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibW9udGhMb25nXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby5tb250aHMoXCJsb25nXCIsIHtcbiAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZVxuICAgICAgfSlbdGhpcy5tb250aCAtIDFdIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBzaG9ydCB3ZWVrZGF5LCBzdWNoIGFzICdNb24nLlxuICAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDEwLCAzMCkud2Vla2RheVNob3J0IC8vPT4gTW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIndlZWtkYXlTaG9ydFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ud2Vla2RheXMoXCJzaG9ydFwiLCB7XG4gICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGVcbiAgICAgIH0pW3RoaXMud2Vla2RheSAtIDFdIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBsb25nIHdlZWtkYXksIHN1Y2ggYXMgJ01vbmRheScuXG4gICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS53ZWVrZGF5TG9uZyAvLz0+IE1vbmRheVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ3ZWVrZGF5TG9uZ1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ud2Vla2RheXMoXCJsb25nXCIsIHtcbiAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZVxuICAgICAgfSlbdGhpcy53ZWVrZGF5IC0gMV0gOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIFVUQyBvZmZzZXQgb2YgdGhpcyBEYXRlVGltZSBpbiBtaW51dGVzXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5vZmZzZXQgLy89PiAtMjQwXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkub2Zmc2V0IC8vPT4gMFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvZmZzZXRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyArdGhpcy5vIDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHNob3J0IGh1bWFuIG5hbWUgZm9yIHRoZSB6b25lJ3MgY3VycmVudCBvZmZzZXQsIGZvciBleGFtcGxlIFwiRVNUXCIgb3IgXCJFRFRcIi5cbiAgICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib2Zmc2V0TmFtZVNob3J0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5pc1ZhbGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnpvbmUub2Zmc2V0TmFtZSh0aGlzLnRzLCB7XG4gICAgICAgICAgZm9ybWF0OiBcInNob3J0XCIsXG4gICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxvbmcgaHVtYW4gbmFtZSBmb3IgdGhlIHpvbmUncyBjdXJyZW50IG9mZnNldCwgZm9yIGV4YW1wbGUgXCJFYXN0ZXJuIFN0YW5kYXJkIFRpbWVcIiBvciBcIkVhc3Rlcm4gRGF5bGlnaHQgVGltZVwiLlxuICAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvZmZzZXROYW1lTG9uZ1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHRoaXMuaXNWYWxpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy56b25lLm9mZnNldE5hbWUodGhpcy50cywge1xuICAgICAgICAgIGZvcm1hdDogXCJsb25nXCIsXG4gICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgd2hldGhlciB0aGlzIHpvbmUncyBvZmZzZXQgZXZlciBjaGFuZ2VzLCBhcyBpbiBhIERTVC5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzT2Zmc2V0Rml4ZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnpvbmUudW5pdmVyc2FsIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHdoZXRoZXIgdGhlIERhdGVUaW1lIGlzIGluIGEgRFNULlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNJbkRTVFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHRoaXMuaXNPZmZzZXRGaXhlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQgPiB0aGlzLnNldCh7XG4gICAgICAgICAgbW9udGg6IDFcbiAgICAgICAgfSkub2Zmc2V0IHx8IHRoaXMub2Zmc2V0ID4gdGhpcy5zZXQoe1xuICAgICAgICAgIG1vbnRoOiA1XG4gICAgICAgIH0pLm9mZnNldDtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgRGF0ZVRpbWUgaXMgaW4gYSBsZWFwIHllYXIsIGZhbHNlIG90aGVyd2lzZVxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYpLmlzSW5MZWFwWWVhciAvLz0+IHRydWVcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDEzKS5pc0luTGVhcFllYXIgLy89PiBmYWxzZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNJbkxlYXBZZWFyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gaXNMZWFwWWVhcih0aGlzLnllYXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZGF5cyBpbiB0aGlzIERhdGVUaW1lJ3MgbW9udGhcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE2LCAyKS5kYXlzSW5Nb250aCAvLz0+IDI5XG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNiwgMykuZGF5c0luTW9udGggLy89PiAzMVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkYXlzSW5Nb250aFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGRheXNJbk1vbnRoKHRoaXMueWVhciwgdGhpcy5tb250aCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBkYXlzIGluIHRoaXMgRGF0ZVRpbWUncyB5ZWFyXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNikuZGF5c0luWWVhciAvLz0+IDM2NlxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTMpLmRheXNJblllYXIgLy89PiAzNjVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF5c0luWWVhclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IGRheXNJblllYXIodGhpcy55ZWFyKSA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIHdlZWtzIGluIHRoaXMgRGF0ZVRpbWUncyB5ZWFyXG4gICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAwNCkud2Vla3NJbldlZWtZZWFyIC8vPT4gNTNcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDEzKS53ZWVrc0luV2Vla1llYXIgLy89PiA1MlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ3ZWVrc0luV2Vla1llYXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB3ZWVrc0luV2Vla1llYXIodGhpcy53ZWVrWWVhcikgOiBOYU47XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiREFURV9TSE9SVFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVfU0hPUlQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MydcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURV9NRURcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFX01FRDtcbiAgICB9XG4gICAgLyoqXG4gICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnRnJpLCBPY3QgMTQsIDE5ODMnXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIkRBVEVfTUVEX1dJVEhfV0VFS0RBWVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVfTUVEX1dJVEhfV0VFS0RBWTtcbiAgICB9XG4gICAgLyoqXG4gICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0b2JlciAxNCwgMTk4MydcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURV9GVUxMXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURV9GVUxMO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdUdWVzZGF5LCBPY3RvYmVyIDE0LCAxOTgzJ1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJEQVRFX0hVR0VcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFX0hVR0U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIlRJTUVfU0lNUExFXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gVElNRV9TSU1QTEU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIlRJTUVfV0lUSF9TRUNPTkRTXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gVElNRV9XSVRIX1NFQ09ORFM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEFNIEVEVCcuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJUSU1FX1dJVEhfU0hPUlRfT0ZGU0VUXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gVElNRV9XSVRIX1NIT1JUX09GRlNFVDtcbiAgICB9XG4gICAgLyoqXG4gICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0gRWFzdGVybiBEYXlsaWdodCBUaW1lJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIlRJTUVfV0lUSF9MT05HX09GRlNFVFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFRJTUVfV0lUSF9MT05HX09GRlNFVDtcbiAgICB9XG4gICAgLyoqXG4gICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzAnLCBhbHdheXMgMjQtaG91ci5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiVElNRV8yNF9TSU1QTEVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBUSU1FXzI0X1NJTVBMRTtcbiAgICB9XG4gICAgLyoqXG4gICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMnLCBhbHdheXMgMjQtaG91ci5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiVElNRV8yNF9XSVRIX1NFQ09ORFNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBUSU1FXzI0X1dJVEhfU0VDT05EUztcbiAgICB9XG4gICAgLyoqXG4gICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgRURUJywgYWx3YXlzIDI0LWhvdXIuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIlRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLCBhbHdheXMgMjQtaG91ci5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcxMC8xNC8xOTgzLCA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIkRBVEVUSU1FX1NIT1JUXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURVRJTUVfU0hPUlQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzEwLzE0LzE5ODMsIDk6MzA6MzMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3QgMTQsIDE5ODMsIDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURVRJTUVfTUVEXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURVRJTUVfTUVEO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3QgMTQsIDE5ODMsIDk6MzA6MzMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURVRJTUVfTUVEX1dJVEhfU0VDT05EU1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaSwgMTQgT2N0IDE5ODMsIDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURVRJTUVfTUVEX1dJVEhfV0VFS0RBWVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdG9iZXIgMTQsIDE5ODMsIDk6MzAgQU0gRURUJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIkRBVEVUSU1FX0ZVTExcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFVElNRV9GVUxMO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3RvYmVyIDE0LCAxOTgzLCA5OjMwOjMzIEFNIEVEVCcuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EU1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmlkYXksIE9jdG9iZXIgMTQsIDE5ODMsIDk6MzAgQU0gRWFzdGVybiBEYXlsaWdodCBUaW1lJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIkRBVEVUSU1FX0hVR0VcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFVElNRV9IVUdFO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmlkYXksIE9jdG9iZXIgMTQsIDE5ODMsIDk6MzA6MzMgQU0gRWFzdGVybiBEYXlsaWdodCBUaW1lJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIkRBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERhdGVUaW1lO1xufSgpO1xuZnVuY3Rpb24gZnJpZW5kbHlEYXRlVGltZShkYXRlVGltZWlzaCkge1xuICBpZiAoRGF0ZVRpbWUuaXNEYXRlVGltZShkYXRlVGltZWlzaCkpIHtcbiAgICByZXR1cm4gZGF0ZVRpbWVpc2g7XG4gIH0gZWxzZSBpZiAoZGF0ZVRpbWVpc2ggJiYgZGF0ZVRpbWVpc2gudmFsdWVPZiAmJiBpc051bWJlcihkYXRlVGltZWlzaC52YWx1ZU9mKCkpKSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21KU0RhdGUoZGF0ZVRpbWVpc2gpO1xuICB9IGVsc2UgaWYgKGRhdGVUaW1laXNoICYmIHR5cGVvZiBkYXRlVGltZWlzaCA9PT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBEYXRlVGltZS5mcm9tT2JqZWN0KGRhdGVUaW1laXNoKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJVbmtub3duIGRhdGV0aW1lIGFyZ3VtZW50OiBcIiArIGRhdGVUaW1laXNoICsgXCIsIG9mIHR5cGUgXCIgKyB0eXBlb2YgZGF0ZVRpbWVpc2gpO1xuICB9XG59XG5cbmV4cG9ydHMuRGF0ZVRpbWUgPSBEYXRlVGltZTtcbmV4cG9ydHMuRHVyYXRpb24gPSBEdXJhdGlvbjtcbmV4cG9ydHMuRml4ZWRPZmZzZXRab25lID0gRml4ZWRPZmZzZXRab25lO1xuZXhwb3J0cy5JQU5BWm9uZSA9IElBTkFab25lO1xuZXhwb3J0cy5JbmZvID0gSW5mbztcbmV4cG9ydHMuSW50ZXJ2YWwgPSBJbnRlcnZhbDtcbmV4cG9ydHMuSW52YWxpZFpvbmUgPSBJbnZhbGlkWm9uZTtcbmV4cG9ydHMuTG9jYWxab25lID0gTG9jYWxab25lO1xuZXhwb3J0cy5TZXR0aW5ncyA9IFNldHRpbmdzO1xuZXhwb3J0cy5ab25lID0gWm9uZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWx1eG9uLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQge1xuICBEYXRlVGltZVxufSBmcm9tICdsdXhvbic7XG5cbmNsYXNzIFRyYXZlbGVyIHtcbiAgY29uc3RydWN0b3IodHJhdmVsZXIpIHtcbiAgICB0aGlzLmlkID0gdHJhdmVsZXIuaWQ7XG4gICAgdGhpcy5uYW1lID0gdHJhdmVsZXIubmFtZTtcbiAgICB0aGlzLnRyYXZlbGVyVHlwZSA9IHRyYXZlbGVyLnRyYXZlbGVyVHlwZTtcbiAgfVxuXG4gIGZpbHRlck15VHJpcHModHJpcHNEYXRhKSB7XG4gICAgcmV0dXJuIHRyaXBzRGF0YS5maWx0ZXIodHJpcCA9PiB0cmlwLnVzZXJJRCA9PT0gdGhpcy5pZCk7XG4gIH1cblxuICBmaW5kVG90YWxFeHBlbnNlKHRyaXBzRGF0YSwgZGVzdGluYXRpb25zRGF0YSkge1xuICAgIHJldHVybiB0aGlzLmZpbmRFeHBlbnNlcyh0cmlwc0RhdGEsIGRlc3RpbmF0aW9uc0RhdGEpO1xuICB9XG5cbiAgZmluZFRvdGFsWWVhckV4cGVuc2UoeWVhciwgdHJpcHNEYXRhLCBkZXN0aW5hdGlvbnNEYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyTXlUcmlwcyh0cmlwc0RhdGEpLnJlZHVjZSgoYWNjLCB0cmlwKSA9PiB7XG4gICAgICBpZiAocGFyc2VJbnQodHJpcC5kYXRlLnNwbGl0KCcvJylbMF0pID09PSB5ZWFyKSB7XG4gICAgICAgIGRlc3RpbmF0aW9uc0RhdGEuZmluZChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICAgICAgaWYgKHRyaXAuZGVzdGluYXRpb25JRCA9PT0gZGVzdGluYXRpb24uaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnRvdGFsID0gKCh0cmlwLnRyYXZlbGVycyAqIGRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24pICsgKHRyaXAuZHVyYXRpb24gKiBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSkpO1xuICAgICAgICAgICAgYWNjICs9IChzdWJ0b3RhbCAqIC4xKSArIHN1YnRvdGFsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMClcbiAgfVxuXG4gIC8vV291bGQgbGlrZSB0byByZWZhY3RvciBmaW5kVG90YWxZZWFyRXhwZW5zZSB0byBlbmNvcnByZWF0ZSBmaW5kRXhwZW5zZXMgKGFuZCBjdXQgZG93biByZWR1bmRhbmN5KSwgYnV0IHByb2JsZW0gb2YgJ3RyaXAnIG5lZWRlZCB0byBiZSBkZWZpbmVkLlxuICBmaW5kRXhwZW5zZXModHJpcHNEYXRhLCBkZXN0aW5hdGlvbnNEYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyTXlUcmlwcyh0cmlwc0RhdGEpLnJlZHVjZSgoYWNjLCB0cmlwKSA9PiB7XG4gICAgICBkZXN0aW5hdGlvbnNEYXRhLmZpbmQoZGVzdGluYXRpb24gPT4ge1xuICAgICAgICBpZiAodHJpcC5kZXN0aW5hdGlvbklEID09PSBkZXN0aW5hdGlvbi5pZCkge1xuICAgICAgICAgIGNvbnN0IHN1YnRvdGFsID0gKCh0cmlwLnRyYXZlbGVycyAqIGRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24pICsgKHRyaXAuZHVyYXRpb24gKiBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSkpO1xuICAgICAgICAgIGFjYyArPSAoc3VidG90YWwgKiAuMSkgKyBzdWJ0b3RhbDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMClcbiAgfVxuICBzZXBhcmF0ZUFwcHJvdmVkVHJpcHModHJpcHNEYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyTXlUcmlwcyh0cmlwc0RhdGEpLnJlZHVjZSgoYWNjLCB0cmlwKSA9PiB7XG4gICAgICBpZiAoIWFjYy5hcHByb3ZlZCAmJiAhYWNjLnBlbmRpbmcpIHtcbiAgICAgICAgYWNjLmFwcHJvdmVkID0gW107XG4gICAgICAgIGFjYy5wZW5kaW5nID0gW107XG4gICAgICB9XG5cbiAgICAgIGlmICh0cmlwLnN0YXR1cyA9PT0gJ2FwcHJvdmVkJykge1xuICAgICAgICBhY2MuYXBwcm92ZWQucHVzaCh0cmlwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjYy5wZW5kaW5nLnB1c2godHJpcCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KVxuICB9XG5cbiAgc2VwYXJhdGVUcmlwVGltaW5ncyh0cmlwc0RhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJNeVRyaXBzKHRyaXBzRGF0YSkucmVkdWNlKChhY2MsIHRyaXApID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gRGF0ZVRpbWUubG9jYWwoKTtcbiAgICAgIGNvbnN0IHNwbGl0RGF0ZSA9IHRyaXAuZGF0ZS5zcGxpdCgnLycpO1xuICAgICAgY29uc3QgcGFyc2VkRGF0ZSA9IHNwbGl0RGF0ZS5tYXAobnVtID0+IHBhcnNlSW50KG51bSkpO1xuICAgICAgY29uc3Qgc3RhcnREYXRlID0gRGF0ZVRpbWUubG9jYWwocGFyc2VkRGF0ZVswXSwgcGFyc2VkRGF0ZVsxXSwgcGFyc2VkRGF0ZVsyXSk7XG4gICAgICBjb25zdCBlbmREYXRlID0gc3RhcnREYXRlLnBsdXMoe1xuICAgICAgICBkYXlzOiB0cmlwLmR1cmF0aW9uXG4gICAgICB9KVxuICAgICAgLy9yZWZhY3RvciBhYm92ZSBpbnRvIGFub3RoZXIgZnVuY3Rpb24gaWYgcG9zc2libGU7XG4gICAgICBpZiAoIWFjYy5wYXN0ICYmICFhY2MuZnV0dXJlICYmICFhY2MucHJlc2VudCkge1xuICAgICAgICBhY2MucGFzdCA9IFtdO1xuICAgICAgICBhY2MucGxhbm5lZCA9IFtdO1xuICAgICAgICBhY2MuY3VycmVudCA9IFtdO1xuICAgICAgfVxuICAgICAgaWYgKGVuZERhdGUgPCBjdXJyZW50RGF0ZSkge1xuICAgICAgICBhY2MucGFzdC5wdXNoKHRyaXApO1xuICAgICAgfSBlbHNlIGlmIChzdGFydERhdGUgPiBjdXJyZW50RGF0ZSkge1xuICAgICAgICBhY2MucGxhbm5lZC5wdXNoKHRyaXApO1xuICAgICAgfSBlbHNlIGlmIChzdGFydERhdGUgPCBjdXJyZW50RGF0ZSAmJiBlbmREYXRlID4gY3VycmVudERhdGUpIHtcbiAgICAgICAgYWNjLmN1cnJlbnQucHVzaCh0cmlwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pXG4gIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbGVyOyIsImNsYXNzIFRyaXAge1xuICBjb25zdHJ1Y3Rvcih0cmlwT2JqLCB0cmlwc0RhdGEpIHtcbiAgICB0aGlzLmlkID0gdHJpcE9iai5pZCB8fCB0cmlwc0RhdGEubGVuZ3RoICsgMTtcbiAgICB0aGlzLnVzZXJJRCA9IHRyaXBPYmoudXNlcklEO1xuICAgIHRoaXMuZGVzdGluYXRpb25JRCA9IHRyaXBPYmouZGVzdGluYXRpb25JRDtcbiAgICB0aGlzLnRyYXZlbGVycyA9IHRyaXBPYmoudHJhdmVsZXJzO1xuICAgIHRoaXMuZGF0ZSA9IHRyaXBPYmouZGF0ZTtcbiAgICB0aGlzLmR1cmF0aW9uID0gdHJpcE9iai5kdXJhdGlvbjtcbiAgICB0aGlzLnN0YXR1cyA9IHRyaXBPYmouc3RhdHVzO1xuICAgIHRoaXMuc3VnZ2VzdGVkQWN0aXZpdGllcyA9IHRyaXBPYmouc3VnZ2VzdGVkQWN0aXZpdGllcyB8fCBbXTtcbiAgICB0aGlzLmNvc3RFc3RpbWF0ZSA9IDA7XG4gIH1cblxuICBlc3RpbWF0ZUNvc3QoZGVzdGluYXRpb25zRGF0YSkge1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gZGVzdGluYXRpb25zRGF0YS5maW5kKGRlc3RpbmF0aW9uID0+IGRlc3RpbmF0aW9uLmlkID09PSB0aGlzLmRlc3RpbmF0aW9uSUQpO1xuICAgIGNvbnN0IHN1YnRvdGFsID0gKCh0aGlzLmR1cmF0aW9uICogZGVzdGluYXRpb24uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkpICsgKHRoaXMudHJhdmVsZXJzICogZGVzdGluYXRpb24uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbikpO1xuICAgIHRoaXMuY29zdEVzdGltYXRlID0gc3VidG90YWwgKyAoc3VidG90YWwgKiAuMTApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXA7IiwiY29uc3QgZ2V0RGF0YSA9ICh1cmwpID0+IHtcbiAgcmV0dXJuIGZldGNoKHVybClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhgQXBvbG9naXplcywgd2UgZ2V0dGluZyB0aGUgZm9sbG93aW5nOiAke2Vycn1gKSlcbn1cblxuY29uc3QgYXBpQ2FsbHMgPSB7XG4gIGdldFRyYXZlbGVyc0RhdGE6ICgpID0+IHtcbiAgICByZXR1cm4gZ2V0RGF0YSgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmF2ZWxlcnMnKTtcbiAgfSxcblxuICBnZXRUcmlwc0RhdGE6ICgpID0+IHtcbiAgICByZXR1cm4gZ2V0RGF0YSgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwcycpO1xuICB9LFxuXG4gIGdldERlc3RpbmF0aW9uc0RhdGE6ICgpID0+IHtcbiAgICByZXR1cm4gZ2V0RGF0YSgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9kZXN0aW5hdGlvbnMnKTtcbiAgfSxcblxuICBwb3N0TmV3VHJpcDogKG5ld1RyaXApID0+IHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHMnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdUcmlwKSxcbiAgICAgIH0pXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGBBcG9sb2dpemVzLCB3ZSdyZSBnZXR0aW5nIGFuIGVycm9yOiAke2Vycn1gKSlcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGFwaUNhbGxzOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2Uuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImNvbnN0IGRvbVVwZGF0ZXMgPSB7XG4gIHNlbmRXYXJuaW5nKCkge1xuICAgIGNvbnN0IHdhcm5pbmdBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndhcm5pbmctanMnKVxuICAgIHRoaXMubWFuYWdlQ2xhc3NMaXN0KCdyZW1vdmUnLCAnaGlkZGVuJywgd2FybmluZ0FyZWEpO1xuICB9LFxuXG4gIGdyZWV0VHJhdmVsZXIodHJhdmVsZXIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1qcycpLmlubmVyVGV4dCA9IHRyYXZlbGVyLm5hbWUuc3BsaXQoJyAnKVswXTtcbiAgfSxcblxuICB1cGRhdGVUcmF2ZWxlclN0YXRzKHRyYXZlbGVyLCB0cmlwc0RhdGEsIGRlc3RpbmF0aW9uc0RhdGEpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWwtcGxhY2VzLWpzJykuaW5uZXJUZXh0ID0gdHJhdmVsZXIuZmlsdGVyTXlUcmlwcyh0cmlwc0RhdGEpLmxlbmd0aDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWwtcHJpY2UtanMnKS5pbm5lclRleHQgPSBNYXRoLnJvdW5kKHRyYXZlbGVyLmZpbmRUb3RhbEV4cGVuc2UodHJpcHNEYXRhLCBkZXN0aW5hdGlvbnNEYXRhKSk7XG4gICAgdGhpcy5ldmFsdWF0ZVBlbmRpbmdUcmlwcyh0cmF2ZWxlciwgdHJpcHNEYXRhKTtcbiAgfSxcblxuICBldmFsdWF0ZVBlbmRpbmdUcmlwcyh0cmF2ZWxlciwgdHJpcHNEYXRhKSB7XG4gICAgbGV0IHBlbmRpbmdUcmlwcyA9IHRyYXZlbGVyLnNlcGFyYXRlQXBwcm92ZWRUcmlwcyh0cmlwc0RhdGEpLnBlbmRpbmcubGVuZ3RoO1xuICAgIGlmIChwZW5kaW5nVHJpcHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcGVuZGluZ1RyaXBzID0gMDtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlbmRpbmctanMnKS5pbm5lclRleHQgPSBwZW5kaW5nVHJpcHM7XG4gIH0sXG5cbiAgbWFuYWdlQ2xhc3NMaXN0KGFjdGlvbiwgY2xhc3NOYW1lLCBlbGVtZW50KSB7XG4gICAgaWYgKGFjdGlvbiA9PT0gJ2FkZCcgJiYgZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdyZW1vdmUnICYmIGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH1cbiAgfSxcblxuICBwb3B1bGF0ZURldGFpbHModGltaW5nLCB1c2VyLCB0cmlwc0RhdGEsIGRlc3RpbmF0aW9uc0RhdGEpIHtcbiAgICBsZXQgdHJpcHNBcmVhO1xuICAgIGlmICh0aW1pbmcgPT09ICdjdXJyZW50Jykge1xuICAgICAgdHJpcHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbGVkLWN1cnJlbnQtdHJpcHMtanMgLnRyaXBzLWpzJyk7XG4gICAgfSBlbHNlIGlmICh0aW1pbmcgPT09ICdwbGFubmVkJykge1xuICAgICAgdHJpcHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbGVkLXBsYW5uZWQtdHJpcHMtanMgLnRyaXBzLWpzJyk7XG4gICAgfSBlbHNlIGlmICh0aW1pbmcgPT09ICdwYXN0Jykge1xuICAgICAgdHJpcHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbGVkLXBhc3QtdHJpcHMtanMgLnRyaXBzLWpzJyk7XG4gICAgfVxuICAgIGlmICh1c2VyLnNlcGFyYXRlVHJpcFRpbWluZ3ModHJpcHNEYXRhKVt0aW1pbmddLmxlbmd0aCkge1xuICAgICAgdHJpcHNBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgICAgdXNlci5zZXBhcmF0ZVRyaXBUaW1pbmdzKHRyaXBzRGF0YSlbdGltaW5nXS5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgICBkZXN0aW5hdGlvbnNEYXRhLmZvckVhY2goZGVzdGluYXRpb24gPT4ge1xuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5pZCA9PT0gdHJpcC5kZXN0aW5hdGlvbklEKSB7XG4gICAgICAgICAgICB0cmlwc0FyZWEuaW5uZXJIVE1MICs9IGA8YXJ0aWNsZSBjbGFzcz1cInRyaXAtY2FyZFwiPjxoMz4ke2Rlc3RpbmF0aW9uLmRlc3RpbmF0aW9ufTwvaDM+XG4gICAgICAgICAgICA8aW1nIHNyYz0ke2Rlc3RpbmF0aW9uLmltYWdlfSBhbHQ9JHtkZXN0aW5hdGlvbi5hbHR9PlxuICAgICAgICAgICAgPGg0PmRhdGU6ICR7dHJpcC5kYXRlfTwvaDQ+XG4gICAgICAgICAgICA8aDQ+ZGF5czogJHt0cmlwLmR1cmF0aW9ufTwvaDQ+XG4gICAgICAgICAgICA8aDQ+dHJhdmVsZXJzOiAke3RyaXAudHJhdmVsZXJzfTwvaDQ+XG4gICAgICAgICAgICA8L2FydGljbGU+YFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIGNoZWNrSW5wdXRGaWVsZHMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyaXAtZXN0aW1hdGUtanMnKS5pbm5lckhUTUwgPSBgPGg1PlBsZWFzZSBmaWxsIGluIGFsbCBmaWVsZHMgdG8gdmlldyBhY2N1cmF0ZSBlc3RpbWF0ZS48L2g1PmBcbiAgfSxcblxuICBkaXNwbGF5RXN0aW1hdGUocHJpY2UpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpcC1lc3RpbWF0ZS1qcycpLmlubmVySFRNTCA9IGA8aDM+VHJpcCBFc3RpbWF0ZTo8L2gzPlxuICAgIDxkaXY+XG4gICAgICA8aDQ+JCR7cHJpY2UuY29zdEVzdGltYXRlfTwvaDQ+XG4gICAgPC9kaXY+XG4gICAgPHA+KjEwJSB0cmF2ZWwgYWdlbmN5IHVzZSBmZWUgaW5jbHVkZWQ8L3A+YFxuICB9LFxuXG4gIGFsZXJ0U3VjY2Vzc2Z1bFJlcXVlc3QoZGVzdGluYXRpb24pIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpcC1lc3RpbWF0ZS1qcycpLmlubmVySFRNTCA9IGA8aDU+U3VjY2VzcyEgWW91ciB0cmlwIHRvICR7ZGVzdGluYXRpb24uZGVzdGluYXRpb259IGlzIHVuZGVyIHJldmlldyBhbmQgaXMgbGlzdGVkIHVuZGVyIHBlbmRpbmcgdHJpcHMuPC9oNT5gXG4gIH0sXG5cbiAgdG9nZ2xlRGFya01vZGVVcGRhdGVzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrLW1vZGUtb24nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpcHMtanMnKS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrLW1vZGUtb24nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXN0aW1hdGUtanMnKS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrLW1vZGUtb24nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdC1ib29raW5nLWpzJykuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyay1tb2RlLW9uJyk7XG4gICAgdGhpcy50b2dnbGVMb2dvRGFya01vZGUoKTtcbiAgfSxcblxuICB0b2dnbGVMb2dvRGFya01vZGUoKSB7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvLWpzJylcbiAgICBsb2dvLmNsYXNzTGlzdC50b2dnbGUoJ2RhcmstbW9kZS1vbicpO1xuICAgIGlmIChsb2dvLmNsYXNzTGlzdC5jb250YWlucygnZGFyay1tb2RlLW9uJykpIHtcbiAgICAgIGxvZ28uc3JjID0gJy4vaW1hZ2VzL2ludmVydGVkQ29tcGFzcy5wbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2dvLnNyYyA9ICcuL2ltYWdlcy9yZWRCbHVlQ29tcGFzcy5wbmcnO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21VcGRhdGVzOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2Fycm93LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2ludmVydGVkQ29tcGFzcy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9saWdodERhcmtNb2RlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3JlZEJsdWVDb21wYXNzLnBuZ1wiOyIsImltcG9ydCAnLi9jc3MvYmFzZS5zY3NzJztcblxuaW1wb3J0ICcuL2ltYWdlcy9saWdodERhcmtNb2RlLnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3JlZEJsdWVDb21wYXNzLnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2ludmVydGVkQ29tcGFzcy5wbmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9hcnJvdy5wbmcnO1xuXG5cbmltcG9ydCBUcmF2ZWxlciBmcm9tICcuL1RyYXZlbGVyJztcbmltcG9ydCBUcmlwIGZyb20gJy4vVHJpcCc7XG5pbXBvcnQgYXBpQ2FsbHMgZnJvbSAnLi9hcGlDYWxscyc7XG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL2RvbVVwZGF0ZXMnO1xuXG4vLyAqKiBMb2dpbiAqKlxuY29uc3QgbG9naW5TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWRpc3BsYXktanMnKVxuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWZvcm0tanMnKTtcbmxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBnZXRUcmF2ZWxlcik7XG5cbi8vICoqIEJ1dHRvbiBRdWVyeSBTZWxlY3RvcnMgKipcbmNvbnN0IGRhcmtMaWdodE1vZGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFyay1saWdodC1tb2RlLWpzJyk7XG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvLWhvbWUtanMnKTtcbmNvbnN0IGN1cnJlbnRUcmlwc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nby10by1jdXJyZW50LWpzJyk7XG5jb25zdCBwbGFubmVkVHJpcHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ28tdG8tcGxhbm5lZC1qcycpO1xuY29uc3QgcGFzdFRyaXBzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvLXRvLXBhc3QtanMnKVxuY29uc3QgbWFrZUJvb2tpbmdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFrZS1ib29raW5nLWpzJyk7XG5jb25zdCBib29raW5nRXN0aW1hdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXN0aW1hdGUtanMnKTtcbmNvbnN0IHBvc3RCb29raW5nQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3QtYm9va2luZy1qcycpO1xuXG4vLyAqKiBEaXNwbGF5IFF1ZXJ5IFNlbGVjdG9ycyAqKlxuY29uc3QgaG9tZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFzaGJvYXJkLWpzJyk7XG5jb25zdCBjdXJyZW50RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxlZC1jdXJyZW50LXRyaXBzLWpzJyk7XG5jb25zdCBwbGFubmVkRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxlZC1wbGFubmVkLXRyaXBzLWpzJyk7XG5jb25zdCBwYXN0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxlZC1wYXN0LXRyaXBzLWpzJyk7XG5cbi8vICoqIEJvb2tpbmcgRm9ybSAqKlxuY29uc3QgYm9va2luZ0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9va2luZy1qcycpO1xuY29uc3QgcG9zdEJvb2tpbmdGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2tpbmctZm9ybS1qcycpO1xuY29uc3QgZXN0aW1hdGVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyaXAtZXN0aW1hdGUtanMnKTtcblxuLy8gKiogRXZlbnQgTGlzdGVuZXJzICoqXG5kYXJrTGlnaHRNb2RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlRGFya01vZGUpO1xuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dIb21lKTtcbmN1cnJlbnRUcmlwc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dDdXJyZW50RGV0YWlscyk7XG5wbGFubmVkVHJpcHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93UGxhbm5lZERldGFpbHMpO1xucGFzdFRyaXBzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1Bhc3REZXRhaWxzKTtcbm1ha2VCb29raW5nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0Jvb2tpbmdEZXRhaWxzKTtcbmJvb2tpbmdFc3RpbWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlCb29raW5nUmVzdWx0cyk7XG5wb3N0Qm9va2luZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBvc3RCb29raW5nKTtcblxuXG53aW5kb3cudHJhdmVsZXIsIHdpbmRvdy50cmlwO1xud2luZG93LnRyYXZlbGVycyA9IFtdO1xud2luZG93LnRyaXBzID0gW107XG53aW5kb3cuZGVzdGluYXRpb25zID0gW107XG5cbndpbmRvdy5vbmxvYWQgPSBQcm9taXNlLmFsbChbYXBpQ2FsbHMuZ2V0VHJhdmVsZXJzRGF0YSgpLCBhcGlDYWxscy5nZXRUcmlwc0RhdGEoKSwgYXBpQ2FsbHMuZ2V0RGVzdGluYXRpb25zRGF0YSgpXSlcbiAgLnRoZW4oZGF0YSA9PiB7XG4gICAgZGF0YVswXS50cmF2ZWxlcnMuZm9yRWFjaCh0cmF2ZWxlciA9PiB3aW5kb3cudHJhdmVsZXJzLnB1c2godHJhdmVsZXIpKVxuICAgIGRhdGFbMV0udHJpcHMuZm9yRWFjaCh0cmlwID0+IHdpbmRvdy50cmlwcy5wdXNoKHRyaXApKVxuICAgIGRhdGFbMl0uZGVzdGluYXRpb25zLmZvckVhY2goZGVzdGluYXRpb24gPT4gd2luZG93LmRlc3RpbmF0aW9ucy5wdXNoKGRlc3RpbmF0aW9uKSlcbiAgfSlcblxuLy8gKiogTG9nIEluICoqXG5cbmZ1bmN0aW9uIGdldFRyYXZlbGVyKCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VybmFtZScpLnZhbHVlO1xuICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZCcpLnZhbHVlO1xuICBjb25zdCBpbnB1dHMgPSBbdXNlcm5hbWUsIHBhc3N3b3JkXVxuICBpZiAoaW5wdXRzLmV2ZXJ5KGlucHV0ID0+IGlucHV0ICE9PSAnJykgJiYgdXNlcm5hbWUuc3RhcnRzV2l0aCgndHJhdmVsZXInKSAmJiB1c2VybmFtZS5zcGxpdCgndHJhdmVsZXInKVsxXSAhPT0gJycgJiYgcGFzc3dvcmQgPT09IFwidHJhdmVsMjAyMFwiKSB7XG4gICAgY29uc3QgdXNlck51bSA9IHVzZXJuYW1lLnNwbGl0KCd0cmF2ZWxlcicpO1xuICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KHVzZXJOdW1bMV0pO1xuICAgIGNvbnN0IHVzZXJUcmF2ZWxlciA9IHdpbmRvdy50cmF2ZWxlcnMuZmluZCh0cmF2ZWxlciA9PiB0cmF2ZWxlci5pZCA9PT0gbnVtKTtcbiAgICBnZXREYXRhKHVzZXJUcmF2ZWxlcik7XG4gIH0gZWxzZSB7XG4gICAgbG9naW5Gb3JtLnJlc2V0KCk7XG4gICAgZG9tVXBkYXRlcy5zZW5kV2FybmluZygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERhdGEodXNlcikge1xuICB3aW5kb3cudHJhdmVsZXIgPSBuZXcgVHJhdmVsZXIodXNlcik7XG4gIGRvbVVwZGF0ZXMubWFuYWdlQ2xhc3NMaXN0KCdhZGQnLCAnaGlkZGVuJywgbG9naW5TZWN0aW9uKTtcbiAgY29uc3QgbWFpblZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi12aWV3LWpzJyk7XG4gIGRvbVVwZGF0ZXMubWFuYWdlQ2xhc3NMaXN0KCdyZW1vdmUnLCAnaGlkZGVuJywgbWFpblZpZXcpO1xuICBkb21VcGRhdGVzLm1hbmFnZUNsYXNzTGlzdCgncmVtb3ZlJywgJ2hpZGRlbicsIGhvbWVEaXNwbGF5KTtcbiAgZG9tVXBkYXRlcy5tYW5hZ2VDbGFzc0xpc3QoJ3JlbW92ZScsICdoaWRkZW4nLCBtYWtlQm9va2luZ0J1dHRvbik7XG4gIGRvbVVwZGF0ZXMuZ3JlZXRUcmF2ZWxlcih3aW5kb3cudHJhdmVsZXIpO1xuICBkb21VcGRhdGVzLnVwZGF0ZVRyYXZlbGVyU3RhdHMod2luZG93LnRyYXZlbGVyLCB3aW5kb3cudHJpcHMsIHdpbmRvdy5kZXN0aW5hdGlvbnMpO1xufVxuXG4vLyAqKiBNYWtlIEEgQm9va2luZyAqKlxuXG5mdW5jdGlvbiBkaXNwbGF5Qm9va2luZ1Jlc3VsdHMoKSB7XG4gIGNvbnN0IGdvaW5nVG8gPSBmaW5kRGVzdGluYXRpb24oKTtcbiAgY29uc3Qgc3RhcnREYXRlID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydCcpLnZhbHVlKS5yZXBsYWNlKCctJywgJy8nKS5yZXBsYWNlKCctJywgJy8nKTtcbiAgY29uc3QgbGVuZ3RoT2ZUcmlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1cmF0aW9uJykudmFsdWU7XG4gIGNvbnN0IG51bU9mVHJhdmVsZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyYXZlbGVycycpLnZhbHVlO1xuICBjb25zdCB0cmlwRGV0YWlscyA9IFtnb2luZ1RvLCBzdGFydERhdGUsIGxlbmd0aE9mVHJpcCwgbnVtT2ZUcmF2ZWxlcnNdO1xuICBpZiAodHJpcERldGFpbHMuc29tZShlbGVtZW50ID0+IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkpIHtcbiAgICBkb21VcGRhdGVzLm1hbmFnZUNsYXNzTGlzdCgncmVtb3ZlJywgJ2hpZGRlbicsIGVzdGltYXRlRGlzcGxheSk7XG4gICAgZG9tVXBkYXRlcy5jaGVja0lucHV0RmllbGRzKHRyaXBEZXRhaWxzKTtcbiAgfSBlbHNlIHtcbiAgICBjb2xsZWN0VHJpcERldGFpbHMoZ29pbmdUbywgc3RhcnREYXRlLCBsZW5ndGhPZlRyaXAsIG51bU9mVHJhdmVsZXJzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb2xsZWN0VHJpcERldGFpbHMoZ29pbmdUbywgc3RhcnREYXRlLCBsZW5ndGhPZlRyaXAsIG51bU9mVHJhdmVsZXJzKSB7XG4gIHdpbmRvdy50cmlwID0gbmV3IFRyaXAoe1xuICAgIHVzZXJJRDogd2luZG93LnRyYXZlbGVyLmlkLFxuICAgIGRlc3RpbmF0aW9uSUQ6IGdvaW5nVG8uaWQsXG4gICAgdHJhdmVsZXJzOiBudW1PZlRyYXZlbGVycyxcbiAgICBkYXRlOiBzdGFydERhdGUsXG4gICAgZHVyYXRpb246IGxlbmd0aE9mVHJpcCxcbiAgICBzdGF0dXM6IFwicGVuZGluZ1wiXG4gIH0sIHdpbmRvdy50cmlwcyk7XG4gIHdpbmRvdy50cmlwLmVzdGltYXRlQ29zdCh3aW5kb3cuZGVzdGluYXRpb25zKTtcbiAgZG9tVXBkYXRlcy5tYW5hZ2VDbGFzc0xpc3QoJ3JlbW92ZScsICdoaWRkZW4nLCBlc3RpbWF0ZURpc3BsYXkpO1xuICBkb21VcGRhdGVzLmRpc3BsYXlFc3RpbWF0ZSh3aW5kb3cudHJpcCk7XG4gIHBvc3RCb29raW5nQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHBvc3RCb29raW5nKCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBjaG9pY2UgPSBmaW5kRGVzdGluYXRpb24oKTtcbiAgYXBpQ2FsbHMucG9zdE5ld1RyaXAod2luZG93LnRyaXApLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIHdpbmRvdy50cmlwcy5wdXNoKHJlc3BvbnNlLm5ld1RyaXApXG4gIH0pXG4gIGRvbVVwZGF0ZXMuYWxlcnRTdWNjZXNzZnVsUmVxdWVzdChjaG9pY2UpO1xufVxuXG5mdW5jdGlvbiBmaW5kRGVzdGluYXRpb24oKSB7XG4gIGNvbnN0IHBvc3NpYmxlRGVzdGluYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2hlcmUnKS52YWx1ZTtcbiAgY29uc3QgY2hvc2VuRGVzdGluYXRpb24gPSB3aW5kb3cuZGVzdGluYXRpb25zLmZpbmQoZGVzdGluYXRpb24gPT4gZGVzdGluYXRpb24uZGVzdGluYXRpb24uaW5jbHVkZXMocG9zc2libGVEZXN0aW5hdGlvbikpO1xuICByZXR1cm4gY2hvc2VuRGVzdGluYXRpb247XG59XG5cbi8vICoqIE1hbmFnZSBEaXNwbGF5cyAqKlxuXG5mdW5jdGlvbiBzaG93SG9tZSgpIHtcbiAgZG9tVXBkYXRlcy51cGRhdGVUcmF2ZWxlclN0YXRzKHdpbmRvdy50cmF2ZWxlciwgd2luZG93LnRyaXBzLCB3aW5kb3cuZGVzdGluYXRpb25zKTtcbiAgZG9tVXBkYXRlcy5tYW5hZ2VDbGFzc0xpc3QoJ3JlbW92ZScsICdoaWRkZW4nLCBob21lRGlzcGxheSk7XG4gIGRvbVVwZGF0ZXMubWFuYWdlQ2xhc3NMaXN0KCdyZW1vdmUnLCAnaGlkZGVuJywgbWFrZUJvb2tpbmdCdXR0b24pO1xuICBkb21VcGRhdGVzLm1hbmFnZUNsYXNzTGlzdCgnYWRkJywgJ2hpZGRlbicsIGVzdGltYXRlRGlzcGxheSk7XG4gIHBvc3RCb29raW5nRm9ybS5yZXNldCgpO1xuICBoaWRlRGV0YWlsZWREaXNwbGF5cygpO1xufVxuXG5mdW5jdGlvbiBzaG93Q3VycmVudERldGFpbHMoKSB7XG4gIGRvbVVwZGF0ZXMubWFuYWdlQ2xhc3NMaXN0KCdhZGQnLCAnaGlkZGVuJywgaG9tZURpc3BsYXkpO1xuICBkb21VcGRhdGVzLm1hbmFnZUNsYXNzTGlzdCgncmVtb3ZlJywgJ2hpZGRlbicsIGN1cnJlbnREaXNwbGF5KTtcbiAgZG9tVXBkYXRlcy5wb3B1bGF0ZURldGFpbHMoJ2N1cnJlbnQnLCB3aW5kb3cudHJhdmVsZXIsIHdpbmRvdy50cmlwcywgd2luZG93LmRlc3RpbmF0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHNob3dQbGFubmVkRGV0YWlscygpIHtcbiAgZG9tVXBkYXRlcy5tYW5hZ2VDbGFzc0xpc3QoJ2FkZCcsICdoaWRkZW4nLCBob21lRGlzcGxheSk7XG4gIGRvbVVwZGF0ZXMubWFuYWdlQ2xhc3NMaXN0KCdyZW1vdmUnLCAnaGlkZGVuJywgcGxhbm5lZERpc3BsYXkpO1xuICBkb21VcGRhdGVzLnBvcHVsYXRlRGV0YWlscygncGxhbm5lZCcsIHdpbmRvdy50cmF2ZWxlciwgd2luZG93LnRyaXBzLCB3aW5kb3cuZGVzdGluYXRpb25zKTtcbn1cblxuZnVuY3Rpb24gc2hvd1Bhc3REZXRhaWxzKCkge1xuICBkb21VcGRhdGVzLm1hbmFnZUNsYXNzTGlzdCgnYWRkJywgJ2hpZGRlbicsIGhvbWVEaXNwbGF5KTtcbiAgZG9tVXBkYXRlcy5tYW5hZ2VDbGFzc0xpc3QoJ3JlbW92ZScsICdoaWRkZW4nLCBwYXN0RGlzcGxheSk7XG4gIGRvbVVwZGF0ZXMucG9wdWxhdGVEZXRhaWxzKCdwYXN0Jywgd2luZG93LnRyYXZlbGVyLCB3aW5kb3cudHJpcHMsIHdpbmRvdy5kZXN0aW5hdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBzaG93Qm9va2luZ0RldGFpbHMoKSB7XG4gIGRvbVVwZGF0ZXMubWFuYWdlQ2xhc3NMaXN0KCdhZGQnLCAnaGlkZGVuJywgaG9tZURpc3BsYXkpO1xuICBkb21VcGRhdGVzLm1hbmFnZUNsYXNzTGlzdCgnYWRkJywgJ2hpZGRlbicsIG1ha2VCb29raW5nQnV0dG9uKTtcbiAgaGlkZURldGFpbGVkRGlzcGxheXMoKTtcbiAgZG9tVXBkYXRlcy5tYW5hZ2VDbGFzc0xpc3QoJ3JlbW92ZScsICdoaWRkZW4nLCBib29raW5nRGlzcGxheSk7XG59XG5cbmZ1bmN0aW9uIGhpZGVEZXRhaWxlZERpc3BsYXlzKCkge1xuICBjb25zdCBkZXRhaWxlZERpc3BsYXlzID0gW2N1cnJlbnREaXNwbGF5LCBwbGFubmVkRGlzcGxheSwgcGFzdERpc3BsYXksIGJvb2tpbmdEaXNwbGF5XTtcbiAgZGV0YWlsZWREaXNwbGF5cy5mb3JFYWNoKGRpc3BsYXkgPT4ge1xuICAgIGlmICghZGlzcGxheS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICBkb21VcGRhdGVzLm1hbmFnZUNsYXNzTGlzdCgnYWRkJywgJ2hpZGRlbicsIGRpc3BsYXkpO1xuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRGFya01vZGUoKSB7XG4gIGRhcmtMaWdodE1vZGVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnZGFyay1tb2RlLW9uJyk7XG4gIG1ha2VCb29raW5nQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2RhcmstbW9kZS1vbicpO1xuICBkb21VcGRhdGVzLnRvZ2dsZURhcmtNb2RlVXBkYXRlcygpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=