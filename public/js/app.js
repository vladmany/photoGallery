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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\resources\\js\\app.js: Unexpected token (21:7)\n\n\u001b[0m \u001b[90m 19 | \u001b[39m\u001b[33mVue\u001b[39m\u001b[33m.\u001b[39muse(\u001b[33mVCalendar\u001b[39m\u001b[33m,\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 20 | \u001b[39m    componentPrefix\u001b[33m:\u001b[39m \u001b[32m'vc'\u001b[39m\u001b[33m,\u001b[39m  \u001b[90m// Use <vc-calendar /> instead of <v-calendar />\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 21 | \u001b[39m    \u001b[33m...\u001b[39m\u001b[33m,\u001b[39m                \u001b[90m// ...other defaults\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 22 | \u001b[39m})\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 23 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 24 | \u001b[39mloadProgressBar()\u001b[0m\n    at Parser._raise (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:742:17)\n    at Parser.raiseWithData (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:735:17)\n    at Parser.raise (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:729:17)\n    at Parser.unexpected (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:8779:16)\n    at Parser.parseExprAtom (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:10074:20)\n    at Parser.parseExprSubscripts (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:9624:23)\n    at Parser.parseMaybeUnary (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:9604:21)\n    at Parser.parseExprOps (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:9474:23)\n    at Parser.parseMaybeConditional (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:9447:23)\n    at Parser.parseMaybeAssign (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:9402:21)\n    at Parser.parseSpread (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:9114:26)\n    at Parser.parseObjectMember (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:10453:19)\n    at Parser.parseObj (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:10396:25)\n    at Parser.parseExprAtom (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:10017:28)\n    at Parser.parseExprSubscripts (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:9624:23)\n    at Parser.parseMaybeUnary (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:9604:21)\n    at Parser.parseExprOps (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:9474:23)\n    at Parser.parseMaybeConditional (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:9447:23)\n    at Parser.parseMaybeAssign (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:9402:21)\n    at Parser.parseExprListItem (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:10740:18)\n    at Parser.parseCallExpressionArguments (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:9812:22)\n    at Parser.parseSubscript (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:9718:31)\n    at Parser.parseSubscripts (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:9647:19)\n    at Parser.parseExprSubscripts (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:9630:17)\n    at Parser.parseMaybeUnary (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:9604:21)\n    at Parser.parseExprOps (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:9474:23)\n    at Parser.parseMaybeConditional (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:9447:23)\n    at Parser.parseMaybeAssign (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:9402:21)\n    at Parser.parseExpression (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:9354:23)\n    at Parser.parseStatementContent (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:11233:23)\n    at Parser.parseStatement (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:11104:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:11679:25)\n    at Parser.parseBlockBody (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:11665:10)\n    at Parser.parseTopLevel (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:11035:10)\n    at Parser.parse (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:12671:10)\n    at parse (C:\\Users\\vladm\\Downloads\\OSPanel\\domains\\photoGallery\\node_modules\\@babel\\parser\\lib\\index.js:12722:38)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\vladm\Downloads\OSPanel\domains\photoGallery\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\Users\vladm\Downloads\OSPanel\domains\photoGallery\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });
