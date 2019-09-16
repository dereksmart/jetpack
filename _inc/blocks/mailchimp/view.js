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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./extensions/blocks/mailchimp/view.js":
/*!*********************************************!*\
  !*** ./extensions/blocks/mailchimp/view.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ \"@wordpress/dom-ready\");\n/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! email-validator */ \"./node_modules/email-validator/index.js\");\n/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _view_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.scss */ \"./extensions/blocks/mailchimp/view.scss\");\n/* harmony import */ var _view_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_view_scss__WEBPACK_IMPORTED_MODULE_2__);\n/**\n * External dependencies\n */\n\n/**\n * Internal dependencies\n */\n\n\n/**\n * Internal dependencies\n */\n\n\nvar blockClassName = 'wp-block-jetpack-mailchimp';\n\nfunction fetchSubscription(blogId, email) {\n  var url = 'https://public-api.wordpress.com/rest/v1.1/sites/' + encodeURIComponent(blogId) + '/email_follow/subscribe?email=' + encodeURIComponent(email);\n  return new Promise(function (resolve, reject) {\n    var xhr = new XMLHttpRequest();\n    xhr.open('GET', url);\n\n    xhr.onload = function () {\n      if (xhr.status === 200) {\n        var res = JSON.parse(xhr.responseText);\n        resolve(res);\n      } else {\n        var _res = JSON.parse(xhr.responseText);\n\n        reject(_res);\n      }\n    };\n\n    xhr.send();\n  });\n}\n\nfunction activateSubscription(block, blogId) {\n  var form = block.querySelector('form');\n  var errorClass = 'error';\n  var processingEl = block.querySelector('.' + blockClassName + '_processing');\n  var errorEl = block.querySelector('.' + blockClassName + '_error');\n  var successEl = block.querySelector('.' + blockClassName + '_success');\n  form.addEventListener('submit', function (e) {\n    e.preventDefault();\n    var emailField = form.querySelector('input');\n    emailField.classList.remove(errorClass);\n    var email = emailField.value;\n\n    if (!email_validator__WEBPACK_IMPORTED_MODULE_1___default.a.validate(email)) {\n      emailField.classList.add(errorClass);\n      return;\n    }\n\n    block.classList.add('is-processing');\n    processingEl.classList.add('is-visible');\n    fetchSubscription(blogId, email).then(function (response) {\n      processingEl.classList.remove('is-visible');\n\n      if (response.error && response.error !== 'member_exists') {\n        errorEl.classList.add('is-visible');\n      } else {\n        successEl.classList.add('is-visible');\n      }\n    }, function () {\n      processingEl.classList.remove('is-visible');\n      errorEl.classList.add('is-visible');\n    });\n  });\n}\n\nvar initializeMailchimpBlocks = function initializeMailchimpBlocks() {\n  var mailchimpBlocks = Array.from(document.querySelectorAll('.' + blockClassName));\n  mailchimpBlocks.forEach(function (block) {\n    var blog_id = block.getAttribute('data-blog-id');\n\n    try {\n      activateSubscription(block, blog_id);\n    } catch (err) {\n      if ('production' !== undefined) {\n        // eslint-disable-next-line no-console\n        console.error(err);\n      }\n    }\n  });\n};\n\nif (typeof window !== 'undefined') {\n  _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default()(initializeMailchimpBlocks);\n}\n\n//# sourceURL=webpack:///./extensions/blocks/mailchimp/view.js?");

/***/ }),

/***/ "./extensions/blocks/mailchimp/view.scss":
/*!***********************************************!*\
  !*** ./extensions/blocks/mailchimp/view.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./extensions/blocks/mailchimp/view.scss?");

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

/***/ "./node_modules/email-validator/index.js":
/*!***********************************************!*\
  !*** ./node_modules/email-validator/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar tester = /^[-!#$%&'*+\\/0-9=?A-Z^_a-z{|}~](\\.?[-!#$%&'*+\\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\\.?[a-zA-Z0-9])*\\.[a-zA-Z](-?[a-zA-Z0-9])+$/;\r\n// Thanks to:\r\n// http://fightingforalostcause.net/misc/2006/compare-email-regex.php\r\n// http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx\r\n// http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378\r\nexports.validate = function(email)\r\n{\r\n\tif (!email)\r\n\t\treturn false;\r\n\t\t\r\n\tif(email.length>254)\r\n\t\treturn false;\r\n\r\n\tvar valid = tester.test(email);\r\n\tif(!valid)\r\n\t\treturn false;\r\n\r\n\t// Further checking of some things regex can't handle\r\n\tvar parts = email.split(\"@\");\r\n\tif(parts[0].length>64)\r\n\t\treturn false;\r\n\r\n\tvar domainParts = parts[1].split(\".\");\r\n\tif(domainParts.some(function(part) { return part.length>63; }))\r\n\t\treturn false;\r\n\r\n\treturn true;\r\n}\n\n//# sourceURL=webpack:///./node_modules/email-validator/index.js?");

/***/ }),

/***/ 37:
/*!*********************************************************************!*\
  !*** multi ./extensions/view ./extensions/blocks/mailchimp/view.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/runner/work/jetpack/jetpack/extensions/view */\"./extensions/view.js\");\nmodule.exports = __webpack_require__(/*! /home/runner/work/jetpack/jetpack/extensions/blocks/mailchimp/view.js */\"./extensions/blocks/mailchimp/view.js\");\n\n\n//# sourceURL=webpack:///multi_./extensions/view_./extensions/blocks/mailchimp/view.js?");

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