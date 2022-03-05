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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./components/images/green-leather-background.jpg */ "./src/components/images/green-leather-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./components/fonts/PR Viking.ttf */ "./src/components/fonts/PR Viking.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./components/fonts/Kiona-Regular.ttf */ "./src/components/fonts/Kiona-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./components/images/gold-texture.jpg */ "./src/components/images/gold-texture.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.background-cover {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  align-items: center;\n}\n\n#front-page-hand {\n  position: relative;\n  width: 500px;\n  margin-right: 86px;\n  margin-top: 57px;\n}\n\n@font-face {\n  font-family: \"Viking\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Kiona\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\n  font-style: normal;\n}\n\n.main-font-color {\n  color: #c3a343;\n  -webkit-text-fill-color: transparent;\n  background: -webkit-linear-gradient(transparent, transparent),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") repeat;\n  background: -o-linear-gradient(transparent, transparent);\n  -webkit-background-clip: text;\n}\n\n#bar-title {\n  font-size: 15em;\n  font-family: \"Viking\";\n  margin-bottom: 10px;\n  letter-spacing: 100px;\n}\n\n#cocktail-bar {\n  font-family: \"Kiona\";\n  font-size: 2.5em;\n  letter-spacing: 88px;\n}\n\n#nav-container {\n  width: 60%;\n  margin-top: 80px;\n}\n\n#nav-bar-wrapper {\n  font-size: 5em;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\nul {\n  list-style-type: none;\n}\n\n.nav-bar-options {\n  text-decoration: none;\n  font-family: \"Kiona\";\n  letter-spacing: 10npm tun px;\n}\n\n/*link hover effect*/\na:hover::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n\n  /* Adjust height and bottom values to work with selected font */\n  height: 0.1em;\n  bottom: 0.1em;\n\n  /* Create gradient */\n  background-image: linear-gradient(\n    to right,\n    transparent 0%,\n    rgba(218, 199, 140, 0.6) 30%,\n    rgba(218, 199, 140, 0.7) 50%,\n    rgba(218, 199, 140, 0.6) 70%,\n    transparent 100%\n  );\n\n  /* Set-up fade-in animation */\n  opacity: 0;\n  animation: fadeIn 400ms ease-out forwards;\n}\n\n/* Fade-in animation */\n@keyframes fadeIn {\n  100% {\n    opacity: 1;\n  }\n}\n\n/* MENU PAGE */\n\n.menu-banner {\n  background-color: rgb(13, 46, 13);\n  height: 733px;\n  display: flex;\n  flex-direction: row;\n}\n\n#flower {\n  width: 117%;\n  height: 172%;\n  flex: 1;\n}\n\n#heading-wrapper {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.page-heading {\n  display: block;\n  align-self: center;\n  font-family: \"Kiona\";\n  font-size: 15em;\n  color: #c3a343;\n}\n\n#drinks-container {\n  height: auto;\n  overflow: hidden;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 700px 700px;\n}\n\n.cocktail-box {\n  display: inline-block;\n  position: relative;\n  height: 100%;\n  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  transition: transform 0.2s ease-in-out;\n}\n\n.cocktail-box:hover {\n  transform: scale(1.1);\n}\n\n.drink-images {\n  object-position: center;\n  object-fit: cover;\n  max-width: 100%;\n  z-index: 1;\n  position: relative;\n}\n\n.drink-images:hover {\n  transform: scale(1.1);\n}\n\n#cocktail0 {\n  bottom: 79px;\n}\n\n#cocktail1 {\n  bottom: 269px;\n}\n\n#cocktail2 {\n  bottom: 224px;\n}\n\n#cocktail3 {\n  height: 100%;\n}\n\n#cocktail4 {\n  height: 100%;\n}\n\n#cocktail5 {\n  bottom: 261px;\n}\n\n.text-box {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: none;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  background-color: rgba(202, 181, 116, 0.8);\n  text-align: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 70px;\n  font-size: 2em;\n  line-height: 1.4em;\n  font-family: sans;\n}\n\n.text-headings {\n  font-family: \"Viking\";\n  font-size: 1.5em;\n  margin-bottom: 10px;\n  color: rgb(8, 31, 8);\n}\n\n.text-paragraphs {\n  color: rgb(8, 31, 8);\n  font-family: \"Kiona\";\n  font-weight: 600;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,WAAW;EACX,YAAY;EACZ;2CACyD;EACzD,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,+DAA+D;EAC/D,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,+DAAmE;EACnE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,oCAAoC;EACpC;kDACkD;EAClD,wDAAwD;EACxD,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,oBAAoB;EACpB,4BAA4B;AAC9B;;AAEA,oBAAoB;AACpB;EACE,WAAW;EACX,cAAc;EACd,WAAW;;EAEX,+DAA+D;EAC/D,aAAa;EACb,aAAa;;EAEb,oBAAoB;EACpB;;;;;;;GAOC;;EAED,6BAA6B;EAC7B,UAAU;EACV,yCAAyC;AAC3C;;AAEA,sBAAsB;AACtB;EACE;IACE,UAAU;EACZ;AACF;;AAEA,cAAc;;AAEd;EACE,iCAAiC;EACjC,aAAa;EACb,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,OAAO;AACT;;AAEA;EACE,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,qCAAqC;EACrC,+BAA+B;AACjC;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,2CAA2C;EAC3C,gBAAgB;EAChB,sCAAsC;AACxC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;EACjB,eAAe;EACf,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,MAAM;EACN,OAAO;EACP,UAAU;EACV,0CAA0C;EAC1C,kBAAkB;EAClB,uBAAuB;EACvB,sBAAsB;EACtB,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,gBAAgB;AAClB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.background-cover {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),\n    url(\"./components/images/green-leather-background.jpg\");\n  background-size: cover;\n  align-items: center;\n}\n\n#front-page-hand {\n  position: relative;\n  width: 500px;\n  margin-right: 86px;\n  margin-top: 57px;\n}\n\n@font-face {\n  font-family: \"Viking\";\n  src: url(\"./components/fonts/PR Viking.ttf\") format(\"truetype\");\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Kiona\";\n  src: url(\"./components/fonts/Kiona-Regular.ttf\") format(\"truetype\");\n  font-style: normal;\n}\n\n.main-font-color {\n  color: #c3a343;\n  -webkit-text-fill-color: transparent;\n  background: -webkit-linear-gradient(transparent, transparent),\n    url(./components/images/gold-texture.jpg) repeat;\n  background: -o-linear-gradient(transparent, transparent);\n  -webkit-background-clip: text;\n}\n\n#bar-title {\n  font-size: 15em;\n  font-family: \"Viking\";\n  margin-bottom: 10px;\n  letter-spacing: 100px;\n}\n\n#cocktail-bar {\n  font-family: \"Kiona\";\n  font-size: 2.5em;\n  letter-spacing: 88px;\n}\n\n#nav-container {\n  width: 60%;\n  margin-top: 80px;\n}\n\n#nav-bar-wrapper {\n  font-size: 5em;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\nul {\n  list-style-type: none;\n}\n\n.nav-bar-options {\n  text-decoration: none;\n  font-family: \"Kiona\";\n  letter-spacing: 10npm tun px;\n}\n\n/*link hover effect*/\na:hover::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n\n  /* Adjust height and bottom values to work with selected font */\n  height: 0.1em;\n  bottom: 0.1em;\n\n  /* Create gradient */\n  background-image: linear-gradient(\n    to right,\n    transparent 0%,\n    rgba(218, 199, 140, 0.6) 30%,\n    rgba(218, 199, 140, 0.7) 50%,\n    rgba(218, 199, 140, 0.6) 70%,\n    transparent 100%\n  );\n\n  /* Set-up fade-in animation */\n  opacity: 0;\n  animation: fadeIn 400ms ease-out forwards;\n}\n\n/* Fade-in animation */\n@keyframes fadeIn {\n  100% {\n    opacity: 1;\n  }\n}\n\n/* MENU PAGE */\n\n.menu-banner {\n  background-color: rgb(13, 46, 13);\n  height: 733px;\n  display: flex;\n  flex-direction: row;\n}\n\n#flower {\n  width: 117%;\n  height: 172%;\n  flex: 1;\n}\n\n#heading-wrapper {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.page-heading {\n  display: block;\n  align-self: center;\n  font-family: \"Kiona\";\n  font-size: 15em;\n  color: #c3a343;\n}\n\n#drinks-container {\n  height: auto;\n  overflow: hidden;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 700px 700px;\n}\n\n.cocktail-box {\n  display: inline-block;\n  position: relative;\n  height: 100%;\n  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  transition: transform 0.2s ease-in-out;\n}\n\n.cocktail-box:hover {\n  transform: scale(1.1);\n}\n\n.drink-images {\n  object-position: center;\n  object-fit: cover;\n  max-width: 100%;\n  z-index: 1;\n  position: relative;\n}\n\n.drink-images:hover {\n  transform: scale(1.1);\n}\n\n#cocktail0 {\n  bottom: 79px;\n}\n\n#cocktail1 {\n  bottom: 269px;\n}\n\n#cocktail2 {\n  bottom: 224px;\n}\n\n#cocktail3 {\n  height: 100%;\n}\n\n#cocktail4 {\n  height: 100%;\n}\n\n#cocktail5 {\n  bottom: 261px;\n}\n\n.text-box {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: none;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  background-color: rgba(202, 181, 116, 0.8);\n  text-align: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 70px;\n  font-size: 2em;\n  line-height: 1.4em;\n  font-family: sans;\n}\n\n.text-headings {\n  font-family: \"Viking\";\n  font-size: 1.5em;\n  margin-bottom: 10px;\n  color: rgb(8, 31, 8);\n}\n\n.text-paragraphs {\n  color: rgb(8, 31, 8);\n  font-family: \"Kiona\";\n  font-weight: 600;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/components/functions/cocktailTileHover.js":
/*!*******************************************************!*\
  !*** ./src/components/functions/cocktailTileHover.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const cocktailTileHover = () => {
  //hover effect for cocktail info on menu page
  let textBox = document.getElementsByClassName("text-box");
  const drinkContainerChildren =
    document.querySelector("#drinks-container").children;

  for (let i = 0; i < drinkContainerChildren.length; i++) {
    let drinkImages = drinkContainerChildren[i];
    drinkImages.addEventListener("mouseover", () => {
      textBox[i].style.display = "flex";
    });

    drinkImages.addEventListener("mouseout", () => {
      textBox[i].style.display = "none";
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cocktailTileHover);


/***/ }),

/***/ "./src/components/functions/render.js":
/*!********************************************!*\
  !*** ./src/components/functions/render.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// removes all content style attributes and removes children till only header remains as the sole children
const render = () => {
  const content = document.querySelector("#content");
  if (content.hasChildNodes()) {
    content.removeChild(content.childNodes[0]);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);


/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_hand_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/hand.svg */ "./src/components/images/hand.svg");


const createHome = () => {
  const pageContent = document.querySelector("#content");
  const greenLeatherCover = document.createElement("div");
  greenLeatherCover.className = "background-cover";
  pageContent.appendChild(greenLeatherCover);

  const mainTitle = document.createElement("h1");
  mainTitle.id = "bar-title";
  mainTitle.className = "main-font-color";
  mainTitle.textContent = "FABLE";
  greenLeatherCover.appendChild(mainTitle);

  const subTitle = document.createElement("h3");
  subTitle.id = "cocktail-bar";
  subTitle.className = "main-font-color";
  subTitle.textContent = "COCKTAIL BAR";
  greenLeatherCover.appendChild(subTitle);

  const handImage = new Image();
  handImage.id = "front-page-hand";
  handImage.src = _images_hand_svg__WEBPACK_IMPORTED_MODULE_0__;
  greenLeatherCover.appendChild(handImage);

  //nav bar at bottom of main
  const navItems = [
    { text: "MENU", id: "menu-link" },
    { text: "CONTACT", id: "contact-link" },
    { text: "ABOUT", id: "about-link" },
  ];

  const navElem = document.createElement("nav");
  const navList = document.createElement("ul");

  navElem.id = "nav-container";
  navList.id = "nav-bar-wrapper";

  navElem.appendChild(navList);

  for (let i = 0; i < navItems.length; i++) {
    const navItem = document.createElement("li");
    const navLink = document.createElement("a");

    navLink.className = "nav-bar-options main-font-color";

    //set properties on anchor
    navLink.textContent = navItems[i].text;
    navLink.id = navItems[i].id;

    //add anchor to listitem and listitem to list
    navItem.appendChild(navLink);
    navList.appendChild(navItem);
  }

  greenLeatherCover.appendChild(navElem);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);


/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_flowers_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/flowers.svg */ "./src/components/images/flowers.svg");
/* harmony import */ var _images_cocktail_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/cocktail-1.jpg */ "./src/components/images/cocktail-1.jpg");
/* harmony import */ var _images_cocktail_0_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/cocktail-0.jpg */ "./src/components/images/cocktail-0.jpg");
/* harmony import */ var _images_cocktail_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/cocktail-2.jpg */ "./src/components/images/cocktail-2.jpg");
/* harmony import */ var _images_cocktail_3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/cocktail-3.jpg */ "./src/components/images/cocktail-3.jpg");
/* harmony import */ var _images_cocktail_4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/cocktail-4.jpg */ "./src/components/images/cocktail-4.jpg");
/* harmony import */ var _images_cocktail_5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/cocktail-5.jpg */ "./src/components/images/cocktail-5.jpg");








const menu = () => {
  const images = [
    _images_cocktail_0_jpg__WEBPACK_IMPORTED_MODULE_2__,
    _images_cocktail_1_jpg__WEBPACK_IMPORTED_MODULE_1__,
    _images_cocktail_2_jpg__WEBPACK_IMPORTED_MODULE_3__,
    _images_cocktail_3_jpg__WEBPACK_IMPORTED_MODULE_4__,
    _images_cocktail_4_jpg__WEBPACK_IMPORTED_MODULE_5__,
    _images_cocktail_5_jpg__WEBPACK_IMPORTED_MODULE_6__,
  ];

  const content = document.querySelector("#content");

  const container = document.createElement("div");
  container.className = "menu-banner";
  content.appendChild(container);

  const headingWrapper = document.createElement("div");
  headingWrapper.id = "heading-wrapper";
  container.appendChild(headingWrapper);

  const heading = document.createElement("h2");
  heading.className = "page-heading main-font-color";
  heading.textContent = "MENU";
  headingWrapper.appendChild(heading);

  const flower = new Image();
  flower.id = "flower";
  flower.src = _images_flowers_svg__WEBPACK_IMPORTED_MODULE_0__;
  container.appendChild(flower);

  const drinksContainer = document.createElement("section");
  drinksContainer.id = "drinks-container";
  content.appendChild(drinksContainer);

  for (let i = 0; i < 6; ++i) {
    const cocktailBox = document.createElement("div");
    cocktailBox.className = "cocktail-box";

    const drinkImage = document.createElement("img");
    drinkImage.className = "drink-images";
    drinkImage.id = "cocktail" + i;
    drinkImage.src = images[i];

    const textBox = document.createElement("div");
    textBox.className = "text-box";

    const textHeading = document.createElement("h4");
    textHeading.className = "text-headings";
    textHeading.id = "text-heading-" + i;

    const textParagraph = document.createElement("p");
    textParagraph.className = "text-paragraphs";
    textParagraph.id = "text-paragraph-" + i;

    cocktailBox.appendChild(drinkImage);
    cocktailBox.appendChild(textBox);
    textBox.appendChild(textHeading);
    textBox.appendChild(textParagraph);
    drinksContainer.appendChild(cocktailBox);
  }

  document.getElementById("text-heading-0").textContent = "Vulcano Negroni";
  document.getElementById("text-paragraph-0").textContent =
    "Rum Santa Teresa 1796, Coconut, Campari, pandam leaves, beetroot vermouth, almond Nardini. Aperitif, bitter, earthy, aromatic. ";

  document.getElementById("text-heading-1").textContent = "Kriptonita";
  document.getElementById("text-paragraph-1").textContent =
    "Tanqueray Ten gin, riboflavin, electric liquor, grapefruit cordial, chocolate bitter and keffir lime essential oil. Electric, acid and sweet. ";

  document.getElementById("text-heading-2").textContent = "Tornado";
  document.getElementById("text-paragraph-2").textContent =
    "Grey Goose vodka, vermouth Mancino Ambrato, Italicus rosolio of bergamot, Pisco el Gobernador cordial of cava and goji, apple kombucha, pear and azahar flowers. Refreshing, floral, fruity, delicate ";

  document.getElementById("text-heading-3").textContent = "Great Gatsby";
  document.getElementById("text-paragraph-3").textContent =
    "Macallan 12DC whiskey, white trufflehoney, amaro, essence of lavender and smoked with vanilla and chocolate tobacco. Smoked. ";

  document.getElementById("text-heading-4").textContent = "The Cloud";
  document.getElementById("text-paragraph-4").textContent =
    "Ketel One vodka, Casamigos mezcal, hibiscus, Montenegro amaro, Mancino secco vermouth, birch syrup, Perrier and coffee cloud. Intense, smoky, refreshing, penetrating. ";

  document.getElementById("text-heading-5").textContent = "Brunch in the Moon";
  document.getElementById("text-paragraph-5").textContent =
    "Patrón Silver tequila, Vida del Maguey mezcal, oyster leaves, Port wine, tomato juice, raspberries and ponzu sauce. Spicy, tender, caramelized, sweet. ";
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/components/fonts/Kiona-Regular.ttf":
/*!************************************************!*\
  !*** ./src/components/fonts/Kiona-Regular.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "743f23a1f47a941862f5.ttf";

/***/ }),

/***/ "./src/components/fonts/PR Viking.ttf":
/*!********************************************!*\
  !*** ./src/components/fonts/PR Viking.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d0a8e494507a8c52481.ttf";

/***/ }),

/***/ "./src/components/images/cocktail-0.jpg":
/*!**********************************************!*\
  !*** ./src/components/images/cocktail-0.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09bbd050d30e31b55688.jpg";

/***/ }),

/***/ "./src/components/images/cocktail-1.jpg":
/*!**********************************************!*\
  !*** ./src/components/images/cocktail-1.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "74b046f4819ea5405d79.jpg";

/***/ }),

/***/ "./src/components/images/cocktail-2.jpg":
/*!**********************************************!*\
  !*** ./src/components/images/cocktail-2.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a8901838c70e6fb1826.jpg";

/***/ }),

/***/ "./src/components/images/cocktail-3.jpg":
/*!**********************************************!*\
  !*** ./src/components/images/cocktail-3.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76f05417d8ad713ccfcf.jpg";

/***/ }),

/***/ "./src/components/images/cocktail-4.jpg":
/*!**********************************************!*\
  !*** ./src/components/images/cocktail-4.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "012fa6eefea3867544df.jpg";

/***/ }),

/***/ "./src/components/images/cocktail-5.jpg":
/*!**********************************************!*\
  !*** ./src/components/images/cocktail-5.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa50dbc1e41fc8e3a806.jpg";

/***/ }),

/***/ "./src/components/images/flowers.svg":
/*!*******************************************!*\
  !*** ./src/components/images/flowers.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e122582d34bfd366780.svg";

/***/ }),

/***/ "./src/components/images/gold-texture.jpg":
/*!************************************************!*\
  !*** ./src/components/images/gold-texture.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21dd06e2efadaa9a8ed9.jpg";

/***/ }),

/***/ "./src/components/images/green-leather-background.jpg":
/*!************************************************************!*\
  !*** ./src/components/images/green-leather-background.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "108e3bb3e3bca168bb33.jpg";

/***/ }),

/***/ "./src/components/images/hand.svg":
/*!****************************************!*\
  !*** ./src/components/images/hand.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42906fdb863b5b481d56.svg";

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
/******/ 			"index": 0
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home */ "./src/components/home.js");
/* harmony import */ var _components_functions_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/functions/render */ "./src/components/functions/render.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu.js");
/* harmony import */ var _components_functions_cocktailTileHover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/functions/cocktailTileHover */ "./src/components/functions/cocktailTileHover.js");






(0,_components_home__WEBPACK_IMPORTED_MODULE_1__["default"])();

const menuButton = document.querySelector("#menu-link");
// const contactButton = document.querySelector("#contact-link");
// const aboutButton = document.querySelector("#about-link");

menuButton.addEventListener("click", () => {
  (0,_components_functions_render__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_components_menu__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_components_functions_cocktailTileHover__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5RnBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJxQjtBQUNzQjtBQUNRO0FBQ2Q7QUFDb0M7O0FBRXpFLDREQUFVOztBQUVWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsd0VBQU07QUFDUixFQUFFLDREQUFJO0FBQ04sRUFBRSxtRkFBaUI7QUFDbkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb2NrdGFpbFRpbGVIb3Zlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9mdW5jdGlvbnMvcmVuZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vY29tcG9uZW50cy9pbWFnZXMvZ3JlZW4tbGVhdGhlci1iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vY29tcG9uZW50cy9mb250cy9QUiBWaWtpbmcudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9jb21wb25lbnRzL2ZvbnRzL0tpb25hLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9jb21wb25lbnRzL2ltYWdlcy9nb2xkLXRleHR1cmUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmJhY2tncm91bmQtY292ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4zKSwgcmdiYSgwLCAwLCAwLCAwLjQpKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZnJvbnQtcGFnZS1oYW5kIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIG1hcmdpbi1yaWdodDogODZweDtcXG4gIG1hcmdpbi10b3A6IDU3cHg7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJWaWtpbmdcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIktpb25hXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi5tYWluLWZvbnQtY29sb3Ige1xcbiAgY29sb3I6ICNjM2EzNDM7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIHJlcGVhdDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQpO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxufVxcblxcbiNiYXItdGl0bGUge1xcbiAgZm9udC1zaXplOiAxNWVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJWaWtpbmdcXFwiO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxMDBweDtcXG59XFxuXFxuI2NvY2t0YWlsLWJhciB7XFxuICBmb250LWZhbWlseTogXFxcIktpb25hXFxcIjtcXG4gIGZvbnQtc2l6ZTogMi41ZW07XFxuICBsZXR0ZXItc3BhY2luZzogODhweDtcXG59XFxuXFxuI25hdi1jb250YWluZXIge1xcbiAgd2lkdGg6IDYwJTtcXG4gIG1hcmdpbi10b3A6IDgwcHg7XFxufVxcblxcbiNuYXYtYmFyLXdyYXBwZXIge1xcbiAgZm9udC1zaXplOiA1ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4ubmF2LWJhci1vcHRpb25zIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2lvbmFcXFwiO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEwbnBtIHR1biBweDtcXG59XFxuXFxuLypsaW5rIGhvdmVyIGVmZmVjdCovXFxuYTpob3Zlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgLyogQWRqdXN0IGhlaWdodCBhbmQgYm90dG9tIHZhbHVlcyB0byB3b3JrIHdpdGggc2VsZWN0ZWQgZm9udCAqL1xcbiAgaGVpZ2h0OiAwLjFlbTtcXG4gIGJvdHRvbTogMC4xZW07XFxuXFxuICAvKiBDcmVhdGUgZ3JhZGllbnQgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gcmlnaHQsXFxuICAgIHRyYW5zcGFyZW50IDAlLFxcbiAgICByZ2JhKDIxOCwgMTk5LCAxNDAsIDAuNikgMzAlLFxcbiAgICByZ2JhKDIxOCwgMTk5LCAxNDAsIDAuNykgNTAlLFxcbiAgICByZ2JhKDIxOCwgMTk5LCAxNDAsIDAuNikgNzAlLFxcbiAgICB0cmFuc3BhcmVudCAxMDAlXFxuICApO1xcblxcbiAgLyogU2V0LXVwIGZhZGUtaW4gYW5pbWF0aW9uICovXFxuICBvcGFjaXR5OiAwO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gNDAwbXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi8qIEZhZGUtaW4gYW5pbWF0aW9uICovXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi8qIE1FTlUgUEFHRSAqL1xcblxcbi5tZW51LWJhbm5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMsIDQ2LCAxMyk7XFxuICBoZWlnaHQ6IDczM3B4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbiNmbG93ZXIge1xcbiAgd2lkdGg6IDExNyU7XFxuICBoZWlnaHQ6IDE3MiU7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4jaGVhZGluZy13cmFwcGVyIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucGFnZS1oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLaW9uYVxcXCI7XFxuICBmb250LXNpemU6IDE1ZW07XFxuICBjb2xvcjogI2MzYTM0MztcXG59XFxuXFxuI2RyaW5rcy1jb250YWluZXIge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwMHB4IDcwMHB4O1xcbn1cXG5cXG4uY29ja3RhaWwtYm94IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jb2NrdGFpbC1ib3g6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4uZHJpbmstaW1hZ2VzIHtcXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZHJpbmstaW1hZ2VzOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuI2NvY2t0YWlsMCB7XFxuICBib3R0b206IDc5cHg7XFxufVxcblxcbiNjb2NrdGFpbDEge1xcbiAgYm90dG9tOiAyNjlweDtcXG59XFxuXFxuI2NvY2t0YWlsMiB7XFxuICBib3R0b206IDIyNHB4O1xcbn1cXG5cXG4jY29ja3RhaWwzIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvY2t0YWlsNCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNjb2NrdGFpbDUge1xcbiAgYm90dG9tOiAyNjFweDtcXG59XFxuXFxuLnRleHQtYm94IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDIsIDE4MSwgMTE2LCAwLjgpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNzBweDtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcbiAgZm9udC1mYW1pbHk6IHNhbnM7XFxufVxcblxcbi50ZXh0LWhlYWRpbmdzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVmlraW5nXFxcIjtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgY29sb3I6IHJnYig4LCAzMSwgOCk7XFxufVxcblxcbi50ZXh0LXBhcmFncmFwaHMge1xcbiAgY29sb3I6IHJnYig4LCAzMSwgOCk7XFxuICBmb250LWZhbWlseTogXFxcIktpb25hXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWjsyQ0FDeUQ7RUFDekQsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwrREFBK0Q7RUFDL0Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLCtEQUFtRTtFQUNuRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDO2tEQUNrRDtFQUNsRCx3REFBd0Q7RUFDeEQsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQiw0QkFBNEI7QUFDOUI7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXOztFQUVYLCtEQUErRDtFQUMvRCxhQUFhO0VBQ2IsYUFBYTs7RUFFYixvQkFBb0I7RUFDcEI7Ozs7Ozs7R0FPQzs7RUFFRCw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLHlDQUF5QztBQUMzQzs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87QUFDVDs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHFDQUFxQztFQUNyQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwyQ0FBMkM7RUFDM0MsZ0JBQWdCO0VBQ2hCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0VBQ1YsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5iYWNrZ3JvdW5kLWNvdmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwcHg7XFxuICBsZWZ0OiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMyksIHJnYmEoMCwgMCwgMCwgMC40KSksXFxuICAgIHVybChcXFwiLi9jb21wb25lbnRzL2ltYWdlcy9ncmVlbi1sZWF0aGVyLWJhY2tncm91bmQuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Zyb250LXBhZ2UtaGFuZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNTAwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDg2cHg7XFxuICBtYXJnaW4tdG9wOiA1N3B4O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVmlraW5nXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2NvbXBvbmVudHMvZm9udHMvUFIgVmlraW5nLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIktpb25hXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2NvbXBvbmVudHMvZm9udHMvS2lvbmEtUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi5tYWluLWZvbnQtY29sb3Ige1xcbiAgY29sb3I6ICNjM2EzNDM7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQpLFxcbiAgICB1cmwoLi9jb21wb25lbnRzL2ltYWdlcy9nb2xkLXRleHR1cmUuanBnKSByZXBlYXQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIHRyYW5zcGFyZW50KTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbn1cXG5cXG4jYmFyLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTVlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVmlraW5nXFxcIjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMTAwcHg7XFxufVxcblxcbiNjb2NrdGFpbC1iYXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLaW9uYVxcXCI7XFxuICBmb250LXNpemU6IDIuNWVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDg4cHg7XFxufVxcblxcbiNuYXYtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcbn1cXG5cXG4jbmF2LWJhci13cmFwcGVyIHtcXG4gIGZvbnQtc2l6ZTogNWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLm5hdi1iYXItb3B0aW9ucyB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIktpb25hXFxcIjtcXG4gIGxldHRlci1zcGFjaW5nOiAxMG5wbSB0dW4gcHg7XFxufVxcblxcbi8qbGluayBob3ZlciBlZmZlY3QqL1xcbmE6aG92ZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIC8qIEFkanVzdCBoZWlnaHQgYW5kIGJvdHRvbSB2YWx1ZXMgdG8gd29yayB3aXRoIHNlbGVjdGVkIGZvbnQgKi9cXG4gIGhlaWdodDogMC4xZW07XFxuICBib3R0b206IDAuMWVtO1xcblxcbiAgLyogQ3JlYXRlIGdyYWRpZW50ICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHJpZ2h0LFxcbiAgICB0cmFuc3BhcmVudCAwJSxcXG4gICAgcmdiYSgyMTgsIDE5OSwgMTQwLCAwLjYpIDMwJSxcXG4gICAgcmdiYSgyMTgsIDE5OSwgMTQwLCAwLjcpIDUwJSxcXG4gICAgcmdiYSgyMTgsIDE5OSwgMTQwLCAwLjYpIDcwJSxcXG4gICAgdHJhbnNwYXJlbnQgMTAwJVxcbiAgKTtcXG5cXG4gIC8qIFNldC11cCBmYWRlLWluIGFuaW1hdGlvbiAqL1xcbiAgb3BhY2l0eTogMDtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDQwMG1zIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG5cXG4vKiBGYWRlLWluIGFuaW1hdGlvbiAqL1xcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4vKiBNRU5VIFBBR0UgKi9cXG5cXG4ubWVudS1iYW5uZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzLCA0NiwgMTMpO1xcbiAgaGVpZ2h0OiA3MzNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4jZmxvd2VyIHtcXG4gIHdpZHRoOiAxMTclO1xcbiAgaGVpZ2h0OiAxNzIlO1xcbiAgZmxleDogMTtcXG59XFxuXFxuI2hlYWRpbmctd3JhcHBlciB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnBhZ2UtaGVhZGluZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2lvbmFcXFwiO1xcbiAgZm9udC1zaXplOiAxNWVtO1xcbiAgY29sb3I6ICNjM2EzNDM7XFxufVxcblxcbiNkcmlua3MtY29udGFpbmVyIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MDBweCA3MDBweDtcXG59XFxuXFxuLmNvY2t0YWlsLWJveCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY29ja3RhaWwtYm94OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmRyaW5rLWltYWdlcyB7XFxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRyaW5rLWltYWdlczpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbiNjb2NrdGFpbDAge1xcbiAgYm90dG9tOiA3OXB4O1xcbn1cXG5cXG4jY29ja3RhaWwxIHtcXG4gIGJvdHRvbTogMjY5cHg7XFxufVxcblxcbiNjb2NrdGFpbDIge1xcbiAgYm90dG9tOiAyMjRweDtcXG59XFxuXFxuI2NvY2t0YWlsMyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNjb2NrdGFpbDQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jY29ja3RhaWw1IHtcXG4gIGJvdHRvbTogMjYxcHg7XFxufVxcblxcbi50ZXh0LWJveCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAyLCAxODEsIDExNiwgMC44KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDcwcHg7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zO1xcbn1cXG5cXG4udGV4dC1oZWFkaW5ncyB7XFxuICBmb250LWZhbWlseTogXFxcIlZpa2luZ1xcXCI7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGNvbG9yOiByZ2IoOCwgMzEsIDgpO1xcbn1cXG5cXG4udGV4dC1wYXJhZ3JhcGhzIHtcXG4gIGNvbG9yOiByZ2IoOCwgMzEsIDgpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLaW9uYVxcXCI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29ja3RhaWxUaWxlSG92ZXIgPSAoKSA9PiB7XG4gIC8vaG92ZXIgZWZmZWN0IGZvciBjb2NrdGFpbCBpbmZvIG9uIG1lbnUgcGFnZVxuICBsZXQgdGV4dEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0ZXh0LWJveFwiKTtcbiAgY29uc3QgZHJpbmtDb250YWluZXJDaGlsZHJlbiA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcmlua3MtY29udGFpbmVyXCIpLmNoaWxkcmVuO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZHJpbmtDb250YWluZXJDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGxldCBkcmlua0ltYWdlcyA9IGRyaW5rQ29udGFpbmVyQ2hpbGRyZW5baV07XG4gICAgZHJpbmtJbWFnZXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICB0ZXh0Qm94W2ldLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9KTtcblxuICAgIGRyaW5rSW1hZ2VzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICB0ZXh0Qm94W2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ja3RhaWxUaWxlSG92ZXI7XG4iLCIvLyByZW1vdmVzIGFsbCBjb250ZW50IHN0eWxlIGF0dHJpYnV0ZXMgYW5kIHJlbW92ZXMgY2hpbGRyZW4gdGlsbCBvbmx5IGhlYWRlciByZW1haW5zIGFzIHRoZSBzb2xlIGNoaWxkcmVuXG5jb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGlmIChjb250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5jaGlsZE5vZGVzWzBdKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuIiwiaW1wb3J0IGhhbmQgZnJvbSBcIi4vaW1hZ2VzL2hhbmQuc3ZnXCI7XG5cbmNvbnN0IGNyZWF0ZUhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBncmVlbkxlYXRoZXJDb3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdyZWVuTGVhdGhlckNvdmVyLmNsYXNzTmFtZSA9IFwiYmFja2dyb3VuZC1jb3ZlclwiO1xuICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChncmVlbkxlYXRoZXJDb3Zlcik7XG5cbiAgY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBtYWluVGl0bGUuaWQgPSBcImJhci10aXRsZVwiO1xuICBtYWluVGl0bGUuY2xhc3NOYW1lID0gXCJtYWluLWZvbnQtY29sb3JcIjtcbiAgbWFpblRpdGxlLnRleHRDb250ZW50ID0gXCJGQUJMRVwiO1xuICBncmVlbkxlYXRoZXJDb3Zlci5hcHBlbmRDaGlsZChtYWluVGl0bGUpO1xuXG4gIGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBzdWJUaXRsZS5pZCA9IFwiY29ja3RhaWwtYmFyXCI7XG4gIHN1YlRpdGxlLmNsYXNzTmFtZSA9IFwibWFpbi1mb250LWNvbG9yXCI7XG4gIHN1YlRpdGxlLnRleHRDb250ZW50ID0gXCJDT0NLVEFJTCBCQVJcIjtcbiAgZ3JlZW5MZWF0aGVyQ292ZXIuYXBwZW5kQ2hpbGQoc3ViVGl0bGUpO1xuXG4gIGNvbnN0IGhhbmRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBoYW5kSW1hZ2UuaWQgPSBcImZyb250LXBhZ2UtaGFuZFwiO1xuICBoYW5kSW1hZ2Uuc3JjID0gaGFuZDtcbiAgZ3JlZW5MZWF0aGVyQ292ZXIuYXBwZW5kQ2hpbGQoaGFuZEltYWdlKTtcblxuICAvL25hdiBiYXIgYXQgYm90dG9tIG9mIG1haW5cbiAgY29uc3QgbmF2SXRlbXMgPSBbXG4gICAgeyB0ZXh0OiBcIk1FTlVcIiwgaWQ6IFwibWVudS1saW5rXCIgfSxcbiAgICB7IHRleHQ6IFwiQ09OVEFDVFwiLCBpZDogXCJjb250YWN0LWxpbmtcIiB9LFxuICAgIHsgdGV4dDogXCJBQk9VVFwiLCBpZDogXCJhYm91dC1saW5rXCIgfSxcbiAgXTtcblxuICBjb25zdCBuYXZFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICBuYXZFbGVtLmlkID0gXCJuYXYtY29udGFpbmVyXCI7XG4gIG5hdkxpc3QuaWQgPSBcIm5hdi1iYXItd3JhcHBlclwiO1xuXG4gIG5hdkVsZW0uYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5hdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgbmF2TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gICAgbmF2TGluay5jbGFzc05hbWUgPSBcIm5hdi1iYXItb3B0aW9ucyBtYWluLWZvbnQtY29sb3JcIjtcblxuICAgIC8vc2V0IHByb3BlcnRpZXMgb24gYW5jaG9yXG4gICAgbmF2TGluay50ZXh0Q29udGVudCA9IG5hdkl0ZW1zW2ldLnRleHQ7XG4gICAgbmF2TGluay5pZCA9IG5hdkl0ZW1zW2ldLmlkO1xuXG4gICAgLy9hZGQgYW5jaG9yIHRvIGxpc3RpdGVtIGFuZCBsaXN0aXRlbSB0byBsaXN0XG4gICAgbmF2SXRlbS5hcHBlbmRDaGlsZChuYXZMaW5rKTtcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKG5hdkl0ZW0pO1xuICB9XG5cbiAgZ3JlZW5MZWF0aGVyQ292ZXIuYXBwZW5kQ2hpbGQobmF2RWxlbSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lO1xuIiwiaW1wb3J0IGZsb3dlckltYWdlIGZyb20gXCIuL2ltYWdlcy9mbG93ZXJzLnN2Z1wiO1xuaW1wb3J0IGNvY2t0YWlsMSBmcm9tIFwiLi9pbWFnZXMvY29ja3RhaWwtMS5qcGdcIjtcbmltcG9ydCBjb2NrdGFpbDAgZnJvbSBcIi4vaW1hZ2VzL2NvY2t0YWlsLTAuanBnXCI7XG5pbXBvcnQgY29ja3RhaWwyIGZyb20gXCIuL2ltYWdlcy9jb2NrdGFpbC0yLmpwZ1wiO1xuaW1wb3J0IGNvY2t0YWlsMyBmcm9tIFwiLi9pbWFnZXMvY29ja3RhaWwtMy5qcGdcIjtcbmltcG9ydCBjb2NrdGFpbDQgZnJvbSBcIi4vaW1hZ2VzL2NvY2t0YWlsLTQuanBnXCI7XG5pbXBvcnQgY29ja3RhaWw1IGZyb20gXCIuL2ltYWdlcy9jb2NrdGFpbC01LmpwZ1wiO1xuXG5jb25zdCBtZW51ID0gKCkgPT4ge1xuICBjb25zdCBpbWFnZXMgPSBbXG4gICAgY29ja3RhaWwwLFxuICAgIGNvY2t0YWlsMSxcbiAgICBjb2NrdGFpbDIsXG4gICAgY29ja3RhaWwzLFxuICAgIGNvY2t0YWlsNCxcbiAgICBjb2NrdGFpbDUsXG4gIF07XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJtZW51LWJhbm5lclwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgaGVhZGluZ1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkaW5nV3JhcHBlci5pZCA9IFwiaGVhZGluZy13cmFwcGVyXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nV3JhcHBlcik7XG5cbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaGVhZGluZy5jbGFzc05hbWUgPSBcInBhZ2UtaGVhZGluZyBtYWluLWZvbnQtY29sb3JcIjtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xuICBoZWFkaW5nV3JhcHBlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICBjb25zdCBmbG93ZXIgPSBuZXcgSW1hZ2UoKTtcbiAgZmxvd2VyLmlkID0gXCJmbG93ZXJcIjtcbiAgZmxvd2VyLnNyYyA9IGZsb3dlckltYWdlO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmxvd2VyKTtcblxuICBjb25zdCBkcmlua3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgZHJpbmtzQ29udGFpbmVyLmlkID0gXCJkcmlua3MtY29udGFpbmVyXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZHJpbmtzQ29udGFpbmVyKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDY7ICsraSkge1xuICAgIGNvbnN0IGNvY2t0YWlsQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb2NrdGFpbEJveC5jbGFzc05hbWUgPSBcImNvY2t0YWlsLWJveFwiO1xuXG4gICAgY29uc3QgZHJpbmtJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZHJpbmtJbWFnZS5jbGFzc05hbWUgPSBcImRyaW5rLWltYWdlc1wiO1xuICAgIGRyaW5rSW1hZ2UuaWQgPSBcImNvY2t0YWlsXCIgKyBpO1xuICAgIGRyaW5rSW1hZ2Uuc3JjID0gaW1hZ2VzW2ldO1xuXG4gICAgY29uc3QgdGV4dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGV4dEJveC5jbGFzc05hbWUgPSBcInRleHQtYm94XCI7XG5cbiAgICBjb25zdCB0ZXh0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICB0ZXh0SGVhZGluZy5jbGFzc05hbWUgPSBcInRleHQtaGVhZGluZ3NcIjtcbiAgICB0ZXh0SGVhZGluZy5pZCA9IFwidGV4dC1oZWFkaW5nLVwiICsgaTtcblxuICAgIGNvbnN0IHRleHRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0ZXh0UGFyYWdyYXBoLmNsYXNzTmFtZSA9IFwidGV4dC1wYXJhZ3JhcGhzXCI7XG4gICAgdGV4dFBhcmFncmFwaC5pZCA9IFwidGV4dC1wYXJhZ3JhcGgtXCIgKyBpO1xuXG4gICAgY29ja3RhaWxCb3guYXBwZW5kQ2hpbGQoZHJpbmtJbWFnZSk7XG4gICAgY29ja3RhaWxCb3guYXBwZW5kQ2hpbGQodGV4dEJveCk7XG4gICAgdGV4dEJveC5hcHBlbmRDaGlsZCh0ZXh0SGVhZGluZyk7XG4gICAgdGV4dEJveC5hcHBlbmRDaGlsZCh0ZXh0UGFyYWdyYXBoKTtcbiAgICBkcmlua3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY29ja3RhaWxCb3gpO1xuICB9XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0LWhlYWRpbmctMFwiKS50ZXh0Q29udGVudCA9IFwiVnVsY2FubyBOZWdyb25pXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dC1wYXJhZ3JhcGgtMFwiKS50ZXh0Q29udGVudCA9XG4gICAgXCJSdW0gU2FudGEgVGVyZXNhIDE3OTYsIENvY29udXQsIENhbXBhcmksIHBhbmRhbSBsZWF2ZXMsIGJlZXRyb290IHZlcm1vdXRoLCBhbG1vbmQgTmFyZGluaS4gQXBlcml0aWYsIGJpdHRlciwgZWFydGh5LCBhcm9tYXRpYy4gXCI7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0LWhlYWRpbmctMVwiKS50ZXh0Q29udGVudCA9IFwiS3JpcHRvbml0YVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHQtcGFyYWdyYXBoLTFcIikudGV4dENvbnRlbnQgPVxuICAgIFwiVGFucXVlcmF5IFRlbiBnaW4sIHJpYm9mbGF2aW4sIGVsZWN0cmljIGxpcXVvciwgZ3JhcGVmcnVpdCBjb3JkaWFsLCBjaG9jb2xhdGUgYml0dGVyIGFuZCBrZWZmaXIgbGltZSBlc3NlbnRpYWwgb2lsLiBFbGVjdHJpYywgYWNpZCBhbmQgc3dlZXQuIFwiO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dC1oZWFkaW5nLTJcIikudGV4dENvbnRlbnQgPSBcIlRvcm5hZG9cIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0LXBhcmFncmFwaC0yXCIpLnRleHRDb250ZW50ID1cbiAgICBcIkdyZXkgR29vc2Ugdm9ka2EsIHZlcm1vdXRoIE1hbmNpbm8gQW1icmF0bywgSXRhbGljdXMgcm9zb2xpbyBvZiBiZXJnYW1vdCwgUGlzY28gZWwgR29iZXJuYWRvciBjb3JkaWFsIG9mIGNhdmEgYW5kIGdvamksIGFwcGxlIGtvbWJ1Y2hhLCBwZWFyIGFuZCBhemFoYXIgZmxvd2Vycy4gUmVmcmVzaGluZywgZmxvcmFsLCBmcnVpdHksIGRlbGljYXRlIFwiO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dC1oZWFkaW5nLTNcIikudGV4dENvbnRlbnQgPSBcIkdyZWF0IEdhdHNieVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHQtcGFyYWdyYXBoLTNcIikudGV4dENvbnRlbnQgPVxuICAgIFwiTWFjYWxsYW4gMTJEQyB3aGlza2V5LCB3aGl0ZSB0cnVmZmxlaG9uZXksIGFtYXJvLCBlc3NlbmNlIG9mIGxhdmVuZGVyIGFuZCBzbW9rZWQgd2l0aCB2YW5pbGxhIGFuZCBjaG9jb2xhdGUgdG9iYWNjby4gU21va2VkLiBcIjtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHQtaGVhZGluZy00XCIpLnRleHRDb250ZW50ID0gXCJUaGUgQ2xvdWRcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0LXBhcmFncmFwaC00XCIpLnRleHRDb250ZW50ID1cbiAgICBcIktldGVsIE9uZSB2b2RrYSwgQ2FzYW1pZ29zIG1lemNhbCwgaGliaXNjdXMsIE1vbnRlbmVncm8gYW1hcm8sIE1hbmNpbm8gc2VjY28gdmVybW91dGgsIGJpcmNoIHN5cnVwLCBQZXJyaWVyIGFuZCBjb2ZmZWUgY2xvdWQuIEludGVuc2UsIHNtb2t5LCByZWZyZXNoaW5nLCBwZW5ldHJhdGluZy4gXCI7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0LWhlYWRpbmctNVwiKS50ZXh0Q29udGVudCA9IFwiQnJ1bmNoIGluIHRoZSBNb29uXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dC1wYXJhZ3JhcGgtNVwiKS50ZXh0Q29udGVudCA9XG4gICAgXCJQYXRyw7NuIFNpbHZlciB0ZXF1aWxhLCBWaWRhIGRlbCBNYWd1ZXkgbWV6Y2FsLCBveXN0ZXIgbGVhdmVzLCBQb3J0IHdpbmUsIHRvbWF0byBqdWljZSwgcmFzcGJlcnJpZXMgYW5kIHBvbnp1IHNhdWNlLiBTcGljeSwgdGVuZGVyLCBjYXJhbWVsaXplZCwgc3dlZXQuIFwiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWVcIjtcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vY29tcG9uZW50cy9mdW5jdGlvbnMvcmVuZGVyXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi9jb21wb25lbnRzL21lbnVcIjtcbmltcG9ydCBjb2NrdGFpbFRpbGVIb3ZlciBmcm9tIFwiLi9jb21wb25lbnRzL2Z1bmN0aW9ucy9jb2NrdGFpbFRpbGVIb3ZlclwiO1xuXG5jcmVhdGVIb21lKCk7XG5cbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtbGlua1wiKTtcbi8vIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtbGlua1wiKTtcbi8vIGNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYm91dC1saW5rXCIpO1xuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHJlbmRlcigpO1xuICBtZW51KCk7XG4gIGNvY2t0YWlsVGlsZUhvdmVyKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==