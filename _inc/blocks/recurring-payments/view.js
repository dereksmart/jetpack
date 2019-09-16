(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./extensions/blocks/recurring-payments/view.js":
/*!******************************************************!*\
  !*** ./extensions/blocks/recurring-payments/view.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ \"@wordpress/dom-ready\");\n/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _view_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.scss */ \"./extensions/blocks/recurring-payments/view.scss\");\n/* harmony import */ var _view_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_view_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* global tb_show, tb_remove */\n\n/**\n * External dependencies\n */\n\n/**\n * Internal dependencies\n */\n\n\nvar name = 'recurring-payments';\nvar blockClassName = 'wp-block-jetpack-' + name;\n/**\n * Since \"close\" button is inside our checkout iframe, in order to close it, it has to pass a message to higher scope to close the modal.\n *\n * @param {event} eventFromIframe - message event that gets emmited in the checkout iframe.\n * @listens message\n */\n\nfunction handleIframeResult(eventFromIframe) {\n  if (eventFromIframe.origin === 'https://subscribe.wordpress.com' && eventFromIframe.data) {\n    var data = JSON.parse(eventFromIframe.data);\n\n    if (data && data.action === 'close') {\n      window.removeEventListener('message', handleIframeResult);\n      tb_remove();\n    }\n  }\n}\n\nfunction activateSubscription(block, blogId, planId, lang) {\n  block.addEventListener('click', function () {\n    window.scrollTo(0, 0);\n    tb_show(null, 'https://subscribe.wordpress.com/memberships/?blog=' + blogId + '&plan=' + planId + '&lang=' + lang + '&display=alternate' + 'TB_iframe=true', null);\n    window.addEventListener('message', handleIframeResult, false);\n    var tbWindow = document.querySelector('#TB_window');\n    tbWindow.classList.add('jetpack-memberships-modal');\n  });\n}\n\nvar initializeMembershipButtonBlocks = function initializeMembershipButtonBlocks() {\n  var membershipButtonBlocks = Array.prototype.slice.call(document.querySelectorAll('.' + blockClassName));\n  membershipButtonBlocks.forEach(function (block) {\n    var blogId = block.getAttribute('data-blog-id');\n    var planId = block.getAttribute('data-plan-id');\n    var lang = block.getAttribute('data-lang');\n\n    try {\n      activateSubscription(block, blogId, planId, lang);\n    } catch (err) {\n      // eslint-disable-next-line no-console\n      console.error('Problem activating Recurring Payments ' + planId, err);\n    }\n  });\n};\n\nif (typeof window !== 'undefined') {\n  _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default()(initializeMembershipButtonBlocks);\n}\n\n//# sourceURL=webpack:///./extensions/blocks/recurring-payments/view.js?");

/***/ }),

/***/ "./extensions/blocks/recurring-payments/view.scss":
/*!********************************************************!*\
  !*** ./extensions/blocks/recurring-payments/view.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./extensions/blocks/recurring-payments/view.scss?");

/***/ }),

/***/ "./extensions/shared/public-path.js":
/*!******************************************!*\
  !*** ./extensions/shared/public-path.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* exported __webpack_public_path__ */\n\n/* global __webpack_public_path__ */\n\n/**\n * Dynamically set WebPack's publicPath so that split assets can be found.\n * @see https://webpack.js.org/guides/public-path/#on-the-fly\n */\nif (typeof window === 'object' && window.Jetpack_Block_Assets_Base_Url) {\n  // eslint-disable-next-line no-global-assign\n  __webpack_require__.p = window.Jetpack_Block_Assets_Base_Url;\n}\n\n//# sourceURL=webpack:///./extensions/shared/public-path.js?");

/***/ }),

/***/ "./extensions/view.js":
/*!****************************!*\
  !*** ./extensions/view.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_public_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/public-path */ \"./extensions/shared/public-path.js\");\n/* harmony import */ var _shared_public_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shared_public_path__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Internal dependencies\n */\n\n\n//# sourceURL=webpack:///./extensions/view.js?");

/***/ }),

/***/ 40:
/*!******************************************************************************!*\
  !*** multi ./extensions/view ./extensions/blocks/recurring-payments/view.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/runner/work/jetpack/jetpack/extensions/view */\"./extensions/view.js\");\nmodule.exports = __webpack_require__(/*! /home/runner/work/jetpack/jetpack/extensions/blocks/recurring-payments/view.js */\"./extensions/blocks/recurring-payments/view.js\");\n\n\n//# sourceURL=webpack:///multi_./extensions/view_./extensions/blocks/recurring-payments/view.js?");

/***/ }),

/***/ "@wordpress/dom-ready":
/*!******************************!*\
  !*** external "wp.domReady" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp.domReady;\n\n//# sourceURL=webpack:///external_%22wp.domReady%22?");

/***/ })

/******/ })));