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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/gameboard.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/gameboard.scss ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".gameboard {\\n  width: 100%;\\n  height: 100%;\\n  display: grid;\\n  grid-template-columns: repeat(11, 1fr);\\n  grid-template-rows: repeat(11, 1fr);\\n}\\n.gameboard .gameboard-markup {\\n  width: 100%;\\n  height: 100%;\\n  color: #98C1D9;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.gameboard .gameboard-grid {\\n  width: 100%;\\n  height: 100%;\\n  grid-column: 2/12;\\n  grid-row: 2/12;\\n  border: 1px solid #3D5A80;\\n  display: grid;\\n  grid-template-columns: repeat(10, 1fr);\\n  grid-template-rows: repeat(10, 1fr);\\n}\\n.gameboard .gameboard-grid .gameboard-grid-cell {\\n  border: 1px solid #3D5A80;\\n  transition: background-color 0.2s ease-in;\\n}\\n.gameboard .gameboard-grid .gameboard-grid-cell.hit {\\n  background-color: #98C1D9;\\n}\\n.gameboard .gameboard-grid .gameboard-grid-cell.hit:hover {\\n  outline: none;\\n  cursor: default;\\n}\\n.gameboard .gameboard-grid .gameboard-grid-cell.hit.ship {\\n  background-color: #EE6C4D;\\n}\\n.gameboard .gameboard-grid .gameboard-grid-cell:hover {\\n  border: 2px solid #3D5A80;\\n  outline: 2px solid #3D5A80;\\n  cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/gameboard.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Chivo+Mono:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml, button, input {\\n  font-family: \\\"Chivo Mono\\\", monospace;\\n  color: #293241;\\n}\\n\\nbody {\\n  background-color: #FFFFFF;\\n}\\n\\nmain {\\n  margin: 0 auto;\\n  margin-top: 32px;\\n  width: max-content;\\n  display: grid;\\n  grid-template-rows: max-content max-content;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-areas: \\\"title title\\\" \\\"player1 player2\\\";\\n  gap: 32px 128px;\\n  justify-items: center;\\n}\\nmain .title {\\n  grid-area: title;\\n  font-size: 5rem;\\n  font-family: \\\"Black Ops One\\\", cursive;\\n  text-transform: uppercase;\\n}\\nmain .player-side {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 16px;\\n  align-items: center;\\n}\\nmain .player-side .player-name {\\n  padding-left: 42px;\\n  font-size: 1.6rem;\\n}\\nmain .player-side .gameboard-container {\\n  width: 462px;\\n  height: 462px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/gameboard.scss":
/*!***********************************!*\
  !*** ./src/styles/gameboard.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gameboard_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./gameboard.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/gameboard.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gameboard_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gameboard_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gameboard_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gameboard_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/gameboard.scss?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/gameUI.js":
/*!*******************************!*\
  !*** ./src/scripts/gameUI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameUI)\n/* harmony export */ });\n/* harmony import */ var _styles_gameboard_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/gameboard.scss */ \"./src/styles/gameboard.scss\");\n\r\n\r\n\r\n\r\nfunction GameUI(game) {\r\n\tconst _gameState = game;\r\n\r\n\tconst _playerOneGrid = makeGameboardGrid(_gameState.playerOne.gameboard, _takePlayerTwoTurn);\r\n\tconst _playerTwoGrid = makeGameboardGrid(_gameState.playerTwo.gameboard, _takePlayerOneTurn);\r\n\r\n\tconst _playerOneGameboard = makeGameboard(_playerOneGrid);\r\n\tconst _playerTwoGameboard = makeGameboard(_playerTwoGrid);\r\n\r\n\tfunction _takePlayerOneTurn(row, col) {\r\n\t\tif (_gameState.activePlayer === _gameState.playerOne) {\r\n\t\t\ttry {\r\n\t\t\t\t_gameState.takeTurn([row, col]);\r\n\t\t\t\t_updateGrid(_playerTwoGrid, _gameState.playerTwo.gameboard);\r\n\t\t\t} catch (error) {\r\n\t\t\t\tconsole.error(error);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tfunction _takePlayerTwoTurn(row, col) {\r\n\t\tif (_gameState.activePlayer === _gameState.playerTwo) {\r\n\t\t\ttry {\r\n\t\t\t\t_gameState.takeTurn([row, col]);\r\n\t\t\t\t_updateGrid(_playerOneGrid, _gameState.playerOne.gameboard);\r\n\t\t\t} catch (error) {\r\n\t\t\t\tconsole.error(error);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tfunction _updateGrid(grid, gameboard) {\r\n\t\tconst cells = grid.childNodes;\r\n\t\tfor (let row = 0; row < 10; ++row) {\r\n\t\t\tfor (let col = 0; col < 10; ++col) {\r\n\t\t\t\tconst cell = cells[row * 10 + col];\r\n\t\t\t\tif (gameboard.getCell([row, col]).isHit) {\r\n\t\t\t\t\tcell.classList.add('hit');\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\treturn {\r\n\t\tget playerOneGameboard() {\r\n\t\t\treturn _playerOneGameboard;\r\n\t\t},\r\n\r\n\t\tget playerTwoGameboard() {\r\n\t\t\treturn _playerTwoGameboard;\r\n\t\t},\r\n\r\n\t\tget playerOneName() {\r\n\t\t\treturn _gameState.playerOne.name;\r\n\t\t},\r\n\r\n\t\tget playerTwoName() {\r\n\t\t\treturn _gameState.playerTwo.name;\r\n\t\t},\r\n\t};\r\n}\r\n\r\nfunction makeGameboard(grid) {\r\n\tconst gameboard = document.createElement('div');\r\n\tgameboard.classList.add('gameboard');\r\n\r\n\tconst aCharCode = 'a'.charCodeAt(0);\r\n\tfor (let col = 0; col < 10; ++col) {\r\n\t\tconst markupElement = document.createElement('span');\r\n\t\tmarkupElement.textContent = String.fromCharCode(aCharCode + col);\r\n\t\tmarkupElement.classList.add('gameboard-markup');\r\n\t\tmarkupElement.style.gridRow = 1;\r\n\t\tmarkupElement.style.gridColumn = `${col + 2}`;\r\n\t\tgameboard.appendChild(markupElement);\r\n\t}\r\n\tfor (let row = 0; row < 10; ++row) {\r\n\t\tconst markupElement = document.createElement('span');\r\n\t\tmarkupElement.textContent = `${row + 1}`;\r\n\t\tmarkupElement.classList.add('gameboard-markup');\r\n\t\tmarkupElement.style.gridColumn = 1;\r\n\t\tmarkupElement.style.gridRow = `${row + 2}`;\r\n\t\tgameboard.appendChild(markupElement);\r\n\t}\r\n\r\n\tgameboard.appendChild(grid);\r\n\r\n\treturn gameboard;\r\n}\r\n\r\nfunction makeGameboardGrid(playerGameboard, onclickCallback) {\r\n\tconst grid = document.createElement('div');\r\n\tgrid.classList.add('gameboard-grid');\r\n\r\n\tfor (let row = 0; row < 10; ++row) {\r\n\t\tfor (let col = 0; col < 10; ++col) {\r\n\t\t\tconst cell = document.createElement('div');\r\n\t\t\tcell.classList.add('gameboard-grid-cell');\r\n\t\t\tif (playerGameboard.getCell([row, col]).ship != null) {\r\n\t\t\t\tcell.classList.add('ship');\r\n\t\t\t}\r\n\t\t\tcell.style.gridRow = row + 1;\r\n\t\t\tcell.style.gridColumn = col + 1;\r\n\r\n\t\t\tcell.addEventListener('click', () => {\r\n\t\t\t\tonclickCallback(row, col);\r\n\t\t\t});\r\n\r\n\t\t\tgrid.appendChild(cell);\r\n\t\t}\r\n\t}\r\n\r\n\treturn grid;\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/scripts/gameUI.js?");

/***/ }),

/***/ "./src/scripts/game/game.js":
/*!**********************************!*\
  !*** ./src/scripts/game/game.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\nfunction Game(player1, player2) {\r\n\tconst _playerOne = player1;\r\n\tconst _playerTwo = player2;\r\n\tlet _playerOneTurn = true;\r\n\r\n\tfunction takeTurn(coords) {\r\n\t\tlet switchPlayers;\r\n\r\n\t\ttry {\r\n\t\t\tconst isHit = (_playerOneTurn ? _playerTwo : _playerOne).gameboard.receiveAttack(coords);\r\n\t\t\tswitchPlayers = !isHit;\r\n\t\t} catch (error) {\r\n\t\t\tswitchPlayers = false;\r\n\t\t} finally {\r\n\t\t\tif (switchPlayers) {\r\n\t\t\t\t_playerOneTurn = !_playerOneTurn;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\treturn {\r\n\t\tget playerOne() {\r\n\t\t\treturn _playerOne;\r\n\t\t},\r\n\r\n\t\tget playerTwo() {\r\n\t\t\treturn _playerTwo;\r\n\t\t},\r\n\r\n\t\tget activePlayer() {\r\n\t\t\treturn _playerOneTurn ? _playerOne : _playerTwo;\r\n\t\t},\r\n\r\n\t\tget isGameOver() {\r\n\t\t\treturn _playerOne.gameboard.isGameOver || _playerTwo.gameboard.isGameOver;\r\n\t\t},\r\n\r\n\t\ttakeTurn,\r\n\t};\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/scripts/game/game.js?");

/***/ }),

/***/ "./src/scripts/game/gameboard.js":
/*!***************************************!*\
  !*** ./src/scripts/game/gameboard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/scripts/game/ship.js\");\n\r\n\r\nconst MAX_COORDINATE = 9;\r\n\r\nfunction Gameboard() {\r\n\tconst grid = _makeGrid();\r\n\tlet shipsAlive = 0;\r\n\r\n\tfunction placeShip(coords, size, orientation) {\r\n\t\t_validateCoordinates(coords);\r\n\t\t_validateOrientation(orientation);\r\n\r\n\t\tconst cells = _getShipCells(coords, size, orientation);\r\n\t\t_validateShipCells(cells);\r\n\r\n\t\tconst ship = new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](size);\r\n\r\n\t\tfor (let [row, col] of cells) {\r\n\t\t\tgrid[row][col].ship = ship;\r\n\t\t}\r\n\r\n\t\tshipsAlive++;\r\n\t}\r\n\r\n\tfunction getCell(coords) {\r\n\t\t_validateCoordinates(coords);\r\n\r\n\t\treturn {\r\n\t\t\tget ship() {\r\n\t\t\t\treturn grid[coords[0]][coords[1]].ship;\r\n\t\t\t},\r\n\r\n\t\t\tget isHit() {\r\n\t\t\t\treturn grid[coords[0]][coords[1]].isHit;\r\n\t\t\t},\r\n\t\t};\r\n\t}\r\n\r\n\tfunction receiveAttack(coords) {\r\n\t\t_validateCoordinates(coords);\r\n\t\tlet [row, col] = coords;\r\n\r\n\t\tif (grid[row][col].isHit) {\r\n\t\t\tthrow Error(`Coordinates ${coords} have already been attacked`);\r\n\t\t}\r\n\r\n\t\tgrid[row][col].isHit = true;\r\n\r\n\t\tif (grid[row][col].ship) {\r\n\t\t\tconst ship = grid[row][col].ship;\r\n\t\t\tship.hit();\r\n\t\t\tif (!ship.isAlive) {\r\n\t\t\t\t_killShip(ship);\r\n\t\t\t}\r\n\t\t\treturn true;\r\n\t\t}\r\n\r\n\t\treturn false;\r\n\t}\r\n\r\n\tfunction _killShip(ship) {\r\n\t\tshipsAlive--;\r\n\t\tfor (let i = 0; i <= MAX_COORDINATE; ++i) {\r\n\t\t\tfor (let j = 0; j <= MAX_COORDINATE; ++j) {\r\n\t\t\t\tif (grid[i][j].ship === ship) {\r\n\t\t\t\t\t_hitSurrounding(i, j);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tfunction _hitSurrounding(row, col) {\r\n\t\tfor (let i = row - 1; i <= row + 1; ++i) {\r\n\t\t\tfor (let j = col - 1; j <= col + 1; ++j) {\r\n\t\t\t\tif (i >= 0 && i <= MAX_COORDINATE && j >= 0 && j <= MAX_COORDINATE) {\r\n\t\t\t\t\tgrid[i][j].isHit = true;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tfunction _makeGrid() {\r\n\t\tconst grid = [];\r\n\t\tfor (let i = 0; i <= MAX_COORDINATE; ++i) {\r\n\t\t\tgrid.push([]);\r\n\t\t\tfor (let j = 0; j <= MAX_COORDINATE; ++j) {\r\n\t\t\t\tgrid[i].push({ ship: null, isHit: false });\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn grid;\r\n\t}\r\n\r\n\tfunction _getShipCells(coords, size, orientation) {\r\n\t\tconst cells = [coords];\r\n\r\n\t\tif (orientation === 'horizontal') {\r\n\t\t\tfor (let i = 1; i < size; ++i) {\r\n\t\t\t\tcells.push([coords[0], coords[1] + i]);\r\n\t\t\t}\r\n\t\t}\r\n\t\tif (orientation === 'vertical') {\r\n\t\t\tfor (let i = 1; i < size; ++i) {\r\n\t\t\t\tcells.push([coords[0] + i, coords[1]]);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tif (cells[cells.length - 1][0] > MAX_COORDINATE || cells[cells.length - 1][1] > MAX_COORDINATE) {\r\n\t\t\tthrow Error(\r\n\t\t\t\t`Ship with coordinates ${coords}, size ${size} and ${orientation} orientation does not fit on the gameboard`\r\n\t\t\t);\r\n\t\t}\r\n\r\n\t\treturn cells;\r\n\t}\r\n\r\n\tfunction _validateOrientation(orientation) {\r\n\t\tif (orientation != 'horizontal' && orientation != 'vertical') {\r\n\t\t\tthrow Error(\r\n\t\t\t\t`Invalid ship orientation: ${orientation}. Orientation must be string 'horizontal' or 'vertical'`\r\n\t\t\t);\r\n\t\t}\r\n\t}\r\n\r\n\tfunction _validateCoordinates(coords) {\r\n\t\tif (\r\n\t\t\t!coords ||\r\n\t\t\t!(coords instanceof Array) ||\r\n\t\t\tcoords.length != 2 ||\r\n\t\t\t!Number.isInteger(coords[0]) ||\r\n\t\t\t!Number.isInteger(coords[1])\r\n\t\t) {\r\n\t\t\tthrow Error('Grid coordinates must be passed as array containing two integer elements');\r\n\t\t}\r\n\r\n\t\tif (coords[0] < 0 || coords[1] < 0 || coords[0] > MAX_COORDINATE || coords[1] > MAX_COORDINATE) {\r\n\t\t\tthrow Error(\r\n\t\t\t\t`Invalid grid coordinates: ${coords}. Coordinates must be non-negative integer not greater than ${MAX_COORDINATE}`\r\n\t\t\t);\r\n\t\t}\r\n\t}\r\n\r\n\tfunction _validateShipCells(cells) {\r\n\t\tfor (let coords of cells) {\r\n\t\t\tif (!_checkSurrounding(coords)) {\r\n\t\t\t\tthrow Error(`Cannot place ship cell at coordinates ${coords}`);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tfunction _checkSurrounding(coords) {\r\n\t\tconst [row, col] = coords;\r\n\t\tfor (let i = row - 1; i <= row + 1; ++i) {\r\n\t\t\tfor (let j = col - 1; j <= col + 1; ++j) {\r\n\t\t\t\tif (i >= 0 && i <= MAX_COORDINATE && j >= 0 && j <= MAX_COORDINATE && grid[i][j].ship != null) {\r\n\t\t\t\t\treturn false;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn true;\r\n\t}\r\n\r\n\treturn {\r\n\t\tget isGameOver() {\r\n\t\t\treturn shipsAlive == 0;\r\n\t\t},\r\n\r\n\t\tplaceShip,\r\n\t\tgetCell,\r\n\t\treceiveAttack,\r\n\t};\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/scripts/game/gameboard.js?");

/***/ }),

/***/ "./src/scripts/game/player.js":
/*!************************************!*\
  !*** ./src/scripts/game/player.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/scripts/game/gameboard.js\");\n\r\n\r\nconst MAX_NAME_LENGTH = 32;\r\n\r\nfunction Player(name) {\r\n\t_validateName(name);\r\n\tconst _name = name;\r\n\tconst _gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n\tfunction _validateName(name) {\r\n\t\tif (!name || typeof name != 'string' || name.length > MAX_NAME_LENGTH) {\r\n\t\t\tthrow Error(\r\n\t\t\t\t`Inavlid player name: ${name}. Player name must be string not longer than ${MAX_NAME_LENGTH} charachters`\r\n\t\t\t);\r\n\t\t}\r\n\t}\r\n\treturn {\r\n\t\tget name() {\r\n\t\t\treturn _name;\r\n\t\t},\r\n\r\n\t\tget gameboard() {\r\n\t\t\treturn _gameboard;\r\n\t\t},\r\n\t};\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/scripts/game/player.js?");

/***/ }),

/***/ "./src/scripts/game/ship.js":
/*!**********************************!*\
  !*** ./src/scripts/game/ship.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nfunction Ship(shipSize) {\r\n\tif (!Number.isInteger(shipSize) || shipSize <= 0) {\r\n\t\tthrow Error('Ivalid argument: ship size must be a positive number');\r\n\t}\r\n\r\n\tlet _size = shipSize;\r\n\tlet _hp = shipSize;\r\n\r\n\treturn {\r\n\t\tget size() {\r\n\t\t\treturn _size;\r\n\t\t},\r\n\t\tget isAlive() {\r\n\t\t\treturn _hp > 0;\r\n\t\t},\r\n\t\thit() {\r\n\t\t\tif (_hp > 0) {\r\n\t\t\t\t_hp -= 1;\r\n\t\t\t}\r\n\t\t},\r\n\t};\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/scripts/game/ship.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _gameUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameUI.js */ \"./src/scripts/gameUI.js\");\n/* harmony import */ var _game_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/player.js */ \"./src/scripts/game/player.js\");\n/* harmony import */ var _game_game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game.js */ \"./src/scripts/game/game.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst playerOneGameboardContainer = document.getElementById('player-one-gameboard-container');\r\nconst playerTwoGameboardContainer = document.getElementById('player-two-gameboard-container');\r\n\r\nconst player1 = new _game_player_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Alice');\r\nconst player2 = new _game_player_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Bob');\r\nplayer1.gameboard.placeShip([3, 3], 3, 'horizontal');\r\nplayer2.gameboard.placeShip([2, 4], 4, 'vertical');\r\n\r\nconst game = new _game_game_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](player1, player2);\r\nconst gameUI = new _gameUI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game);\r\n\r\nplayerOneGameboardContainer.appendChild(gameUI.playerOneGameboard);\r\nplayerTwoGameboardContainer.appendChild(gameUI.playerTwoGameboard);\r\n\n\n//# sourceURL=webpack://battleship/./src/scripts/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;