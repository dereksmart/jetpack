(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"map/view": 0
/******/ 	}
/******/ 	var isCssRtlEnabled = function() {
/******/ 		return document.dir === 'rtl';
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"map/view": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"vendors~map/mapbox-gl":"vendors~map/mapbox-gl"}[chunkId]||chunkId) + "." + {"vendors~map/mapbox-gl":"ec72947ffdbf4d101fbf"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"vendors~map/mapbox-gl":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = true && isCssRtlEnabled() ? "" + ({"vendors~map/mapbox-gl":"vendors~map/mapbox-gl"}[chunkId]||chunkId) + "." + {"vendors~map/mapbox-gl":"ec72947ffdbf4d101fbf"}[chunkId] + ".rtl.css" : "" + ({"vendors~map/mapbox-gl":"vendors~map/mapbox-gl"}[chunkId]||chunkId) + "." + {"vendors~map/mapbox-gl":"ec72947ffdbf4d101fbf"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.setAttribute("data-webpack", true);
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.request = request;
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./extensions/blocks/map/component.js":
/*!********************************************!*\
  !*** ./extensions/blocks/map/component.js ***!
  \********************************************/
/*! exports provided: Map, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Map\", function() { return Map; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _map_marker___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./map-marker/ */ \"./extensions/blocks/map/map-marker/index.js\");\n/* harmony import */ var _info_window___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./info-window/ */ \"./extensions/blocks/map/info-window/index.js\");\n/* harmony import */ var _mapbox_map_formatter___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mapbox-map-formatter/ */ \"./extensions/blocks/map/mapbox-map-formatter/index.js\");\n\n\n\n\n\n\n\n\n\n\n/**\n * External dependencies\n */\n\n\n\n\n/**\n * Internal dependencies\n */\n\n\n\n\nvar Map =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Map, _Component);\n\n  // Lifecycle\n  function Map() {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Map);\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Map).apply(this, arguments));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), \"onMarkerClick\", function (marker) {\n      var onMarkerClick = _this.props.onMarkerClick;\n\n      _this.setState({\n        activeMarker: marker\n      });\n\n      onMarkerClick();\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), \"onMapClick\", function () {\n      _this.setState({\n        activeMarker: null\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), \"clearCurrentMarker\", function () {\n      _this.setState({\n        activeMarker: null\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), \"updateActiveMarker\", function (updates) {\n      var points = _this.props.points;\n      var activeMarker = _this.state.activeMarker;\n      var index = activeMarker.props.index;\n      var newPoints = points.slice(0);\n      Object(lodash__WEBPACK_IMPORTED_MODULE_10__[\"assign\"])(newPoints[index], updates);\n\n      _this.props.onSetPoints(newPoints);\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), \"deleteActiveMarker\", function () {\n      var points = _this.props.points;\n      var activeMarker = _this.state.activeMarker;\n      var index = activeMarker.props.index;\n      var newPoints = points.slice(0);\n      newPoints.splice(index, 1);\n\n      _this.props.onSetPoints(newPoints);\n\n      _this.setState({\n        activeMarker: null\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), \"sizeMap\", function () {\n      var map = _this.state.map;\n      var mapEl = _this.mapRef.current;\n      var blockWidth = mapEl.offsetWidth;\n      var maxHeight = window.innerHeight * 0.8;\n      var blockHeight = Math.min(blockWidth * (3 / 4), maxHeight);\n      mapEl.style.height = blockHeight + 'px';\n      map.resize();\n\n      _this.setBoundsByMarkers();\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), \"setBoundsByMarkers\", function () {\n      var _this$props = _this.props,\n          zoom = _this$props.zoom,\n          points = _this$props.points,\n          onSetZoom = _this$props.onSetZoom;\n      var _this$state = _this.state,\n          map = _this$state.map,\n          activeMarker = _this$state.activeMarker,\n          mapboxgl = _this$state.mapboxgl,\n          zoomControl = _this$state.zoomControl,\n          boundsSetProgrammatically = _this$state.boundsSetProgrammatically;\n\n      if (!map) {\n        return;\n      } // If there are no points at all, there is no data to set bounds to. Abort the function.\n\n\n      if (!points.length) {\n        return;\n      } // If there is an open info window, resizing will probably move the info window which complicates interaction.\n\n\n      if (activeMarker) {\n        return;\n      }\n\n      var bounds = new mapboxgl.LngLatBounds();\n      points.forEach(function (point) {\n        bounds.extend([point.coordinates.longitude, point.coordinates.latitude]);\n      }); // If there are multiple points, zoom is determined by the area they cover, and zoom control is removed.\n\n      if (points.length > 1) {\n        map.fitBounds(bounds, {\n          padding: {\n            top: 40,\n            bottom: 40,\n            left: 20,\n            right: 20\n          }\n        });\n\n        _this.setState({\n          boundsSetProgrammatically: true\n        });\n\n        map.removeControl(zoomControl);\n        return;\n      } // If there is only one point, center map around it.\n\n\n      map.setCenter(bounds.getCenter()); // If the number of markers has just changed from > 1 to 1, set an arbitrary tight zoom, which feels like the original default.\n\n      if (boundsSetProgrammatically) {\n        var newZoom = 12;\n        map.setZoom(newZoom);\n        onSetZoom(newZoom);\n      } else {\n        // If there are one (or zero) points, and this is not a recent change, respect user's chosen zoom.\n        map.setZoom(parseInt(zoom, 10));\n      }\n\n      map.addControl(zoomControl);\n\n      _this.setState({\n        boundsSetProgrammatically: false\n      });\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), \"scriptsLoaded\", function () {\n      var _this$props2 = _this.props,\n          mapCenter = _this$props2.mapCenter,\n          points = _this$props2.points;\n\n      _this.setState({\n        loaded: true\n      }); // If the map has any points, skip geolocation and use what we have.\n\n\n      if (points.length > 0) {\n        _this.initMap(mapCenter);\n\n        return;\n      }\n\n      _this.initMap(mapCenter);\n    });\n\n    _this.state = {\n      map: null,\n      fit_to_bounds: false,\n      loaded: false,\n      mapboxgl: null\n    }; // Refs\n\n    _this.mapRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"createRef\"])(); // Debouncers\n\n    _this.debouncedSizeMap = Object(lodash__WEBPACK_IMPORTED_MODULE_10__[\"debounce\"])(_this.sizeMap, 250);\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Map, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$props3 = this.props,\n          points = _this$props3.points,\n          admin = _this$props3.admin,\n          children = _this$props3.children,\n          markerColor = _this$props3.markerColor;\n      var _this$state2 = this.state,\n          map = _this$state2.map,\n          activeMarker = _this$state2.activeMarker,\n          mapboxgl = _this$state2.mapboxgl;\n      var onMarkerClick = this.onMarkerClick,\n          deleteActiveMarker = this.deleteActiveMarker,\n          updateActiveMarker = this.updateActiveMarker;\n      var currentPoint = Object(lodash__WEBPACK_IMPORTED_MODULE_10__[\"get\"])(activeMarker, 'props.point') || {};\n      var title = currentPoint.title,\n          caption = currentPoint.caption;\n      var addPoint = _wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"Children\"].map(children, function (child) {\n        var tagName = Object(lodash__WEBPACK_IMPORTED_MODULE_10__[\"get\"])(child, 'props.tagName');\n\n        if ('AddPoint' === tagName) {\n          return child;\n        }\n      });\n      var mapMarkers = map && mapboxgl && points.map(function (point, index) {\n        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"])(_map_marker___WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n          key: index,\n          point: point,\n          index: index,\n          map: map,\n          mapboxgl: mapboxgl,\n          markerColor: markerColor,\n          onClick: onMarkerClick\n        });\n      });\n      var infoWindow = mapboxgl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"])(_info_window___WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n        activeMarker: activeMarker,\n        map: map,\n        mapboxgl: mapboxgl,\n        unsetActiveMarker: function unsetActiveMarker() {\n          return _this2.setState({\n            activeMarker: null\n          });\n        }\n      }, activeMarker && admin && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"Fragment\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__[\"TextControl\"], {\n        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__[\"__\"])('Marker Title', 'jetpack'),\n        value: title,\n        onChange: function onChange(value) {\n          return updateActiveMarker({\n            title: value\n          });\n        }\n      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__[\"TextareaControl\"], {\n        className: \"wp-block-jetpack-map__marker-caption\",\n        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__[\"__\"])('Marker Caption', 'jetpack'),\n        value: caption,\n        rows: \"2\",\n        tag: \"textarea\",\n        onChange: function onChange(value) {\n          return updateActiveMarker({\n            caption: value\n          });\n        }\n      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__[\"Button\"], {\n        onClick: deleteActiveMarker,\n        className: \"wp-block-jetpack-map__delete-btn\"\n      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__[\"Dashicon\"], {\n        icon: \"trash\",\n        size: \"15\"\n      }), \" \", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__[\"__\"])('Delete Marker', 'jetpack'))), activeMarker && !admin && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"Fragment\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"])(\"h3\", null, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"])(\"p\", null, caption)));\n      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"Fragment\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"])(\"div\", {\n        className: \"wp-block-jetpack-map__gm-container\",\n        ref: this.mapRef\n      }, mapMarkers), infoWindow, addPoint);\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var apiKey = this.props.apiKey;\n\n      if (apiKey) {\n        this.loadMapLibraries();\n      }\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      this.debouncedSizeMap.cancel();\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      var _this$props4 = this.props,\n          apiKey = _this$props4.apiKey,\n          children = _this$props4.children,\n          points = _this$props4.points,\n          mapStyle = _this$props4.mapStyle,\n          mapDetails = _this$props4.mapDetails;\n      var map = this.state.map;\n\n      if (apiKey && apiKey.length > 0 && apiKey !== prevProps.apiKey) {\n        this.loadMapLibraries();\n      } // If the user has just clicked to show the Add Point component, hide info window.\n      // AddPoint is the only possible child.\n\n\n      if (children !== prevProps.children && children !== false) {\n        this.clearCurrentMarker();\n      }\n\n      if (points !== prevProps.points) {\n        this.setBoundsByMarkers();\n      }\n\n      if (points.length !== prevProps.points.length) {\n        this.clearCurrentMarker();\n      }\n\n      if (mapStyle !== prevProps.mapStyle || mapDetails !== prevProps.mapDetails) {\n        map.setStyle(this.getMapStyle());\n      }\n    }\n    /* Event handling */\n\n  }, {\n    key: \"getMapStyle\",\n    value: function getMapStyle() {\n      var _this$props5 = this.props,\n          mapStyle = _this$props5.mapStyle,\n          mapDetails = _this$props5.mapDetails;\n      return Object(_mapbox_map_formatter___WEBPACK_IMPORTED_MODULE_14__[\"mapboxMapFormatter\"])(mapStyle, mapDetails);\n    }\n  }, {\n    key: \"getMapType\",\n    value: function getMapType() {\n      var mapStyle = this.props.mapStyle;\n\n      switch (mapStyle) {\n        case 'satellite':\n          return 'HYBRID';\n\n        case 'terrain':\n          return 'TERRAIN';\n\n        case 'black_and_white':\n        default:\n          return 'ROADMAP';\n      }\n    } // Script loading, browser geolocation\n\n  }, {\n    key: \"loadMapLibraries\",\n    value: function loadMapLibraries() {\n      var _this3 = this;\n\n      var apiKey = this.props.apiKey;\n      Promise.all([__webpack_require__.e(/*! import() | map/mapbox-gl */ \"vendors~map/mapbox-gl\").then(__webpack_require__.t.bind(null, /*! mapbox-gl */ \"./node_modules/mapbox-gl/dist/mapbox-gl.js\", 7)), __webpack_require__.e(/*! import() | map/mapbox-gl */ \"vendors~map/mapbox-gl\").then(__webpack_require__.t.bind(null, /*! mapbox-gl/dist/mapbox-gl.css */ \"./node_modules/mapbox-gl/dist/mapbox-gl.css\", 7))]).then(function (_ref) {\n        var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 1),\n            mapboxgl = _ref2[0].default;\n\n        mapboxgl.accessToken = apiKey;\n\n        _this3.setState({\n          mapboxgl: mapboxgl\n        }, _this3.scriptsLoaded);\n      });\n    }\n  }, {\n    key: \"initMap\",\n    value: function initMap(mapCenter) {\n      var _this4 = this;\n\n      var mapboxgl = this.state.mapboxgl;\n      var _this$props6 = this.props,\n          zoom = _this$props6.zoom,\n          onMapLoaded = _this$props6.onMapLoaded,\n          onError = _this$props6.onError,\n          admin = _this$props6.admin;\n      var map = null;\n\n      try {\n        map = new mapboxgl.Map({\n          container: this.mapRef.current,\n          style: this.getMapStyle(),\n          center: this.googlePoint2Mapbox(mapCenter),\n          zoom: parseInt(zoom, 10),\n          pitchWithRotate: false,\n          attributionControl: false,\n          dragRotate: false\n        });\n      } catch (e) {\n        onError('mapbox_error', e.message);\n        return;\n      }\n\n      map.on('error', function (e) {\n        onError('mapbox_error', e.error.message);\n      });\n      var zoomControl = new mapboxgl.NavigationControl({\n        showCompass: false,\n        showZoom: true\n      });\n      map.on('zoomend', function () {\n        _this4.props.onSetZoom(map.getZoom());\n      });\n      /* Listen for clicks on the Map background, which hides the current popup. */\n\n      map.getCanvas().addEventListener('click', this.onMapClick);\n      this.setState({\n        map: map,\n        zoomControl: zoomControl\n      }, function () {\n        _this4.debouncedSizeMap();\n\n        map.addControl(zoomControl);\n\n        if (!admin) {\n          map.addControl(new mapboxgl.FullscreenControl());\n        }\n\n        _this4.mapRef.current.addEventListener('alignmentChanged', _this4.debouncedSizeMap);\n\n        map.resize();\n        onMapLoaded();\n\n        _this4.setState({\n          loaded: true\n        });\n\n        window.addEventListener('resize', _this4.debouncedSizeMap);\n      });\n    }\n  }, {\n    key: \"googlePoint2Mapbox\",\n    value: function googlePoint2Mapbox(google_point) {\n      var mapCenter = [google_point.longitude ? google_point.longitude : 0, google_point.latitude ? google_point.latitude : 0];\n      return mapCenter;\n    }\n  }]);\n\n  return Map;\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\nMap.defaultProps = {\n  points: [],\n  mapStyle: 'default',\n  zoom: 13,\n  onSetZoom: function onSetZoom() {},\n  onMapLoaded: function onMapLoaded() {},\n  onMarkerClick: function onMarkerClick() {},\n  onError: function onError() {},\n  markerColor: 'red',\n  apiKey: null,\n  mapCenter: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\n//# sourceURL=webpack:///./extensions/blocks/map/component.js?");

/***/ }),

/***/ "./extensions/blocks/map/info-window/index.js":
/*!****************************************************!*\
  !*** ./extensions/blocks/map/info-window/index.js ***!
  \****************************************************/
/*! exports provided: InfoWindow, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InfoWindow\", function() { return InfoWindow; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n/**\n * External dependencies\n */\n\nvar InfoWindow =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(InfoWindow, _Component);\n\n  function InfoWindow() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InfoWindow);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(InfoWindow)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"closeClick\", function () {\n      _this.props.unsetActiveMarker();\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InfoWindow, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var mapboxgl = this.props.mapboxgl;\n      this.el = document.createElement('DIV');\n      this.infowindow = new mapboxgl.Popup({\n        closeButton: true,\n        closeOnClick: false,\n        offset: {\n          left: [0, 0],\n          top: [0, 5],\n          right: [0, 0],\n          bottom: [0, -40]\n        }\n      });\n      this.infowindow.setDOMContent(this.el);\n      this.infowindow.on('close', this.closeClick);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      if (this.props.activeMarker !== prevProps.activeMarker) {\n        this.props.activeMarker ? this.openWindow() : this.closeWindow();\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      // Use React portal to render components directly into the Mapbox info window.\n      return this.el ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__[\"createPortal\"])(this.props.children, this.el) : null;\n    }\n  }, {\n    key: \"openWindow\",\n    value: function openWindow() {\n      var _this$props = this.props,\n          map = _this$props.map,\n          activeMarker = _this$props.activeMarker;\n      this.infowindow.setLngLat(activeMarker.getPoint()).addTo(map);\n    }\n  }, {\n    key: \"closeWindow\",\n    value: function closeWindow() {\n      this.infowindow.remove();\n    }\n  }]);\n\n  return InfoWindow;\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\nInfoWindow.defaultProps = {\n  unsetActiveMarker: function unsetActiveMarker() {},\n  activeMarker: null,\n  map: null,\n  mapboxgl: null\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (InfoWindow);\n\n//# sourceURL=webpack:///./extensions/blocks/map/info-window/index.js?");

/***/ }),

/***/ "./extensions/blocks/map/map-marker/index.js":
/*!***************************************************!*\
  !*** ./extensions/blocks/map/map-marker/index.js ***!
  \***************************************************/
/*! exports provided: MapMarker, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MapMarker\", function() { return MapMarker; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ \"./extensions/blocks/map/map-marker/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n/**\n * External dependencies\n */\n\n/**\n * Internal dependencies\n */\n\n\nvar MapMarker =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(MapMarker, _Component);\n\n  function MapMarker() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MapMarker);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(MapMarker)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"handleClick\", function () {\n      var onClick = _this.props.onClick;\n      onClick(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"getPoint\", function () {\n      var point = _this.props.point;\n      return [point.coordinates.longitude, point.coordinates.latitude];\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MapMarker, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.renderMarker();\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      if (this.marker) {\n        this.marker.remove();\n      }\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      this.renderMarker();\n    }\n  }, {\n    key: \"renderMarker\",\n    value: function renderMarker() {\n      var _this$props = this.props,\n          map = _this$props.map,\n          point = _this$props.point,\n          mapboxgl = _this$props.mapboxgl,\n          markerColor = _this$props.markerColor;\n      var handleClick = this.handleClick;\n      var mapboxPoint = [point.coordinates.longitude, point.coordinates.latitude];\n      var el = this.marker ? this.marker.getElement() : document.createElement('div');\n\n      if (this.marker) {\n        this.marker.setLngLat(mapboxPoint);\n      } else {\n        el.className = 'wp-block-jetpack-map-marker';\n        this.marker = new mapboxgl.Marker(el).setLngLat(mapboxPoint).setOffset([0, -19]).addTo(map);\n        this.marker.getElement().addEventListener('click', handleClick);\n      }\n\n      el.innerHTML = '<?xml version=\"1.0\" encoding=\"UTF-8\"?><svg version=\"1.1\" viewBox=\"0 0 32 38\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g fill-rule=\"evenodd\"><path id=\"d\" d=\"m16 38s16-11.308 16-22-7.1634-16-16-16-16 5.3076-16 16 16 22 16 22z\" fill=\"' + markerColor + '\" mask=\"url(#c)\"/></g></svg>';\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return null;\n    }\n  }]);\n\n  return MapMarker;\n}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\nMapMarker.defaultProps = {\n  point: {},\n  map: null,\n  markerColor: '#000000',\n  mapboxgl: null,\n  onClick: function onClick() {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapMarker);\n\n//# sourceURL=webpack:///./extensions/blocks/map/map-marker/index.js?");

/***/ }),

/***/ "./extensions/blocks/map/map-marker/style.scss":
/*!*****************************************************!*\
  !*** ./extensions/blocks/map/map-marker/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./extensions/blocks/map/map-marker/style.scss?");

/***/ }),

/***/ "./extensions/blocks/map/mapbox-map-formatter/index.js":
/*!*************************************************************!*\
  !*** ./extensions/blocks/map/mapbox-map-formatter/index.js ***!
  \*************************************************************/
/*! exports provided: mapboxMapFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapboxMapFormatter\", function() { return mapboxMapFormatter; });\nfunction mapboxMapFormatter(mapStyle, mapDetails) {\n  var style_urls = {\n    default: {\n      details: 'mapbox://styles/automattic/cjolkhmez0qdd2ro82dwog1in',\n      no_details: 'mapbox://styles/automattic/cjolkci3905d82soef4zlmkdo'\n    },\n    black_and_white: {\n      details: 'mapbox://styles/automattic/cjolkixvv0ty42spgt2k4j434',\n      no_details: 'mapbox://styles/automattic/cjolkgc540tvj2spgzzoq37k4'\n    },\n    satellite: {\n      details: 'mapbox://styles/mapbox/satellite-streets-v10',\n      no_details: 'mapbox://styles/mapbox/satellite-v9'\n    },\n    terrain: {\n      details: 'mapbox://styles/automattic/cjolkf8p405fh2soet2rdt96b',\n      no_details: 'mapbox://styles/automattic/cjolke6fz12ys2rpbpvgl12ha'\n    }\n  };\n  var style_url = style_urls[mapStyle][mapDetails ? 'details' : 'no_details'];\n  return style_url;\n}\n\n//# sourceURL=webpack:///./extensions/blocks/map/mapbox-map-formatter/index.js?");

/***/ }),

/***/ "./extensions/blocks/map/settings.js":
/*!*******************************************!*\
  !*** ./extensions/blocks/map/settings.js ***!
  \*******************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n\n// Disable forbidden <svg> etc. so that frontend component does not depend on @wordpress/component\n\n/* eslint-disable react/forbid-elements */\n\n/**\n * External dependencies\n */\n\nvar settings = {\n  name: 'map',\n  prefix: 'jetpack',\n  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Map', 'jetpack'),\n  icon:\n  /* Do not use SVG components from @wordpress/component to avoid frontend bloat */\n  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    width: \"24\",\n    height: \"24\",\n    viewBox: \"0 0 24 24\",\n    role: \"img\",\n    \"aria-hidden\": \"true\",\n    focusable: \"false\"\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"path\", {\n    fill: \"none\",\n    d: \"M0 0h24v24H0V0z\"\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"path\", {\n    d: \"M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z\"\n  })),\n  category: 'jetpack',\n  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"_x\"])('map', 'block search term', 'jetpack'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"_x\"])('location', 'block search term', 'jetpack'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"_x\"])('navigation', 'block search term', 'jetpack')],\n  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Add an interactive map showing one or more locations.', 'jetpack'),\n  attributes: {\n    align: {\n      type: 'string'\n    },\n    points: {\n      type: 'array',\n      default: []\n    },\n    mapStyle: {\n      type: 'string',\n      default: 'default'\n    },\n    mapDetails: {\n      type: 'boolean',\n      default: true\n    },\n    zoom: {\n      type: 'integer',\n      default: 13\n    },\n    mapCenter: {\n      type: 'object',\n      default: {\n        longitude: -122.41941550000001,\n        latitude: 37.7749295\n      }\n    },\n    markerColor: {\n      type: 'string',\n      default: 'red'\n    }\n  },\n  supports: {\n    html: false\n  },\n  mapStyleOptions: [{\n    value: 'default',\n    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Basic', 'jetpack')\n  }, {\n    value: 'black_and_white',\n    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Black and white', 'jetpack')\n  }, {\n    value: 'satellite',\n    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Satellite', 'jetpack')\n  }, {\n    value: 'terrain',\n    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__[\"__\"])('Terrain', 'jetpack')\n  }],\n  validAlignments: ['center', 'wide', 'full'],\n  markerIcon:\n  /* Do not use SVG components from @wordpress/component to avoid frontend bloat */\n  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"svg\", {\n    width: \"14\",\n    height: \"20\",\n    viewBox: \"0 0 14 20\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n    id: \"Page-1\",\n    fill: \"none\",\n    fillRule: \"evenodd\"\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"g\", {\n    id: \"outline-add_location-24px\",\n    transform: \"translate(-5 -2)\"\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"polygon\", {\n    id: \"Shape\",\n    points: \"0 0 24 0 24 24 0 24\"\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"path\", {\n    d: \"M12,2 C8.14,2 5,5.14 5,9 C5,14.25 12,22 12,22 C12,22 19,14.25 19,9 C19,5.14 15.86,2 12,2 Z M7,9 C7,6.24 9.24,4 12,4 C14.76,4 17,6.24 17,9 C17,11.88 14.12,16.19 12,18.88 C9.92,16.21 7,11.85 7,9 Z M13,6 L11,6 L11,8 L9,8 L9,10 L11,10 L11,12 L13,12 L13,10 L15,10 L15,8 L13,8 L13,6 Z\",\n    id: \"Shape\",\n    fill: \"#000\",\n    fillRule: \"nonzero\"\n  }))))\n};\n\n//# sourceURL=webpack:///./extensions/blocks/map/settings.js?");

/***/ }),

/***/ "./extensions/blocks/map/style.scss":
/*!******************************************!*\
  !*** ./extensions/blocks/map/style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./extensions/blocks/map/style.scss?");

/***/ }),

/***/ "./extensions/blocks/map/view.js":
/*!***************************************!*\
  !*** ./extensions/blocks/map/view.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./extensions/blocks/map/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component.js */ \"./extensions/blocks/map/component.js\");\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.js */ \"./extensions/blocks/map/settings.js\");\n/* harmony import */ var _shared_frontend_management_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/frontend-management.js */ \"./extensions/shared/frontend-management.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/**\n * Internal dependencies\n */\n\n\n\n\ntypeof window !== 'undefined' && window.addEventListener('load', function () {\n  var frontendManagement = new _shared_frontend_management_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](); // Add apiKey to attibutes so FrontendManagement knows about it.\n  // It is dynamically being added on the php side.\n  // So that it can be updated accross all the map blocks at the same time.\n\n  var apiKey = {\n    type: 'string',\n    default: ''\n  };\n  frontendManagement.blockIterator(document, [{\n    component: _component_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    options: {\n      settings: _objectSpread({}, _settings_js__WEBPACK_IMPORTED_MODULE_3__[\"settings\"], {\n        attributes: _objectSpread({}, _settings_js__WEBPACK_IMPORTED_MODULE_3__[\"settings\"].attributes, {\n          apiKey: apiKey\n        })\n      })\n    }\n  }]);\n});\n\n//# sourceURL=webpack:///./extensions/blocks/map/view.js?");

/***/ }),

/***/ "./extensions/shared/frontend-management.js":
/*!**************************************************!*\
  !*** ./extensions/shared/frontend-management.js ***!
  \**************************************************/
/*! exports provided: FrontendManagement, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FrontendManagement\", function() { return FrontendManagement; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n/**\n * External dependencies\n */\n\n\nvar FrontendManagement =\n/*#__PURE__*/\nfunction () {\n  function FrontendManagement() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, FrontendManagement);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(FrontendManagement, [{\n    key: \"blockIterator\",\n    value: function blockIterator(rootNode, blocks) {\n      var _this = this;\n\n      blocks.forEach(function (block) {\n        _this.initializeFrontendReactBlocks(block.component, block.options, rootNode);\n      });\n    }\n  }, {\n    key: \"initializeFrontendReactBlocks\",\n    value: function initializeFrontendReactBlocks(component) {\n      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var rootNode = arguments.length > 2 ? arguments[2] : undefined;\n      var _options$settings = options.settings,\n          attributes = _options$settings.attributes,\n          name = _options$settings.name,\n          prefix = _options$settings.prefix;\n      var selector = options.selector;\n      var fullName = prefix && prefix.length ? \"\".concat(prefix, \"/\").concat(name) : name;\n      var blockClass = \".wp-block-\".concat(fullName.replace('/', '-'));\n      var blockNodeList = rootNode.querySelectorAll(blockClass);\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = blockNodeList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var node = _step.value;\n          var data = this.extractAttributesFromContainer(node, attributes);\n          Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"assign\"])(data, options.props);\n          var children = this.extractChildrenFromContainer(node);\n          var el = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])(component, data, children);\n          Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"render\"])(el, selector ? node.querySelector(selector) : node);\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return != null) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"extractAttributesFromContainer\",\n    value: function extractAttributesFromContainer(node, attributes) {\n      var data = {};\n\n      for (var name in attributes) {\n        var attribute = attributes[name];\n        var dataAttributeName = 'data-' + Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"kebabCase\"])(name);\n        data[name] = node.getAttribute(dataAttributeName);\n\n        if (attribute.type === 'boolean') {\n          data[name] = data[name] === 'false' ? false : !!data[name];\n        }\n\n        if (attribute.type === 'array' || attribute.type === 'object') {\n          try {\n            data[name] = JSON.parse(data[name]);\n          } catch (e) {\n            // console.log( 'Error decoding JSON data for field ' + name, e);\n            data[name] = null;\n          }\n        }\n      }\n\n      return data;\n    }\n  }, {\n    key: \"extractChildrenFromContainer\",\n    value: function extractChildrenFromContainer(node) {\n      var children = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(node.childNodes);\n\n      return children.map(function (child) {\n        var attr = {};\n\n        for (var i = 0; i < child.attributes.length; i++) {\n          var attribute = child.attributes[i];\n          attr[attribute.nodeName] = attribute.nodeValue;\n        }\n\n        attr.dangerouslySetInnerHTML = {\n          __html: child.innerHTML\n        };\n        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])(child.tagName.toLowerCase(), attr);\n      });\n    }\n  }]);\n\n  return FrontendManagement;\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (FrontendManagement);\n\n//# sourceURL=webpack:///./extensions/shared/frontend-management.js?");

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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }\n\n    return arr2;\n  }\n}\n\nmodule.exports = _arrayWithoutHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nmodule.exports = _assertThisInitialized;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nmodule.exports = _getPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ \"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\n\nmodule.exports = _inherits;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArrayLimit(arr, i) {\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\n\nmodule.exports = _nonIterableSpread;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return assertThisInitialized(self);\n}\n\nmodule.exports = _possibleConstructorReturn;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nmodule.exports = _setPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/nonIterableRest.js\");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof2(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ 39:
/*!***************************************************************!*\
  !*** multi ./extensions/view ./extensions/blocks/map/view.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/runner/work/jetpack/jetpack/extensions/view */\"./extensions/view.js\");\nmodule.exports = __webpack_require__(/*! /home/runner/work/jetpack/jetpack/extensions/blocks/map/view.js */\"./extensions/blocks/map/view.js\");\n\n\n//# sourceURL=webpack:///multi_./extensions/view_./extensions/blocks/map/view.js?");

/***/ }),

/***/ "@wordpress/components":
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp.components;\n\n//# sourceURL=webpack:///external_%22wp.components%22?");

/***/ }),

/***/ "@wordpress/element":
/*!*****************************!*\
  !*** external "wp.element" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp.element;\n\n//# sourceURL=webpack:///external_%22wp.element%22?");

/***/ }),

/***/ "@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp.i18n;\n\n//# sourceURL=webpack:///external_%22wp.i18n%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = lodash;\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ })

/******/ })));