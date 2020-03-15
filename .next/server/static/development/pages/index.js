module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Icons/index.js":
/*!***********************************!*\
  !*** ./components/Icons/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _singleIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../singleIcon */ "./components/singleIcon/index.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.js */ "./data.js");
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/Icons/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // components

 // data



const Icons = ({
  setWindowOpen
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, _data_js__WEBPACK_IMPORTED_MODULE_3__["default"].map(window => {
    return __jsx(_singleIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: window.title,
      iconUrl: window.icon,
      setWindowOpen: setWindowOpen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Icons);

/***/ }),

/***/ "./components/PreferencesWindow/index.js":
/*!***********************************************!*\
  !*** ./components/PreferencesWindow/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Wallpaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Wallpaper */ "./components/Wallpaper/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./components/PreferencesWindow/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/PreferencesWindow/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // components

 // styles



const PreferencesWindow = ({
  wallpaper,
  setWallpaper,
  handleClick,
  preferencesOpen // startDrag

}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, preferencesOpen ? __jsx("div", {
    className: "preferences-margin-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    drag: true,
    dragMomentum: false,
    dragConstraints: {
      left: -300,
      top: -50,
      bottom: 500,
      right: 300
    },
    className: "preferences-container websites-window",
    initial: {
      scale: 0
    },
    animate: {
      scale: 1
    },
    transition: {
      duration: 0.25
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("p", {
    className: "close-button",
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "\u2716"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Control Panel")), __jsx(_Wallpaper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    wallpaper: wallpaper,
    setWallpaper: setWallpaper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PreferencesWindow);

/***/ }),

/***/ "./components/PreferencesWindow/styles.scss":
/*!**************************************************!*\
  !*** ./components/PreferencesWindow/styles.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Wallpaper/index.js":
/*!***************************************!*\
  !*** ./components/Wallpaper/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/Wallpaper/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/Wallpaper/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // styles



const Wallpaper = ({
  wallpaper,
  setWallpaper,
  changeWallpaper
}) => {
  function setStars() {
    changeWallpaper('stars');
    setWallpaper("stars");
    console.log("stars was clicked");
  }

  function setGreen() {
    setWallpaper("green");
    console.log(wallpaper);
  }

  function setBlue() {
    setWallpaper("blue");
    console.log(wallpaper);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("div", {
    className: "wallpaper-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Select Wallpaper"), __jsx("div", {
    className: "wallpaper-choices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("button", {
    onClick: setGreen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("img", {
    src: "/icon/green-background.png",
    alt: "green background",
    className: wallpaper == 'green' ? `active-wallpaper` : ``,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })), __jsx("button", {
    onClick: setStars,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("img", {
    src: "/wallpaper/stars.png",
    alt: "stars background",
    className: wallpaper == 'stars' ? `active-wallpaper` : ``,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  })), __jsx("button", {
    onClick: setBlue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("img", {
    src: "/wallpaper/blue.png",
    alt: "stars background",
    className: wallpaper == 'stars' ? `active-wallpaper` : ``,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Wallpaper);

/***/ }),

/***/ "./components/Wallpaper/styles.scss":
/*!******************************************!*\
  !*** ./components/Wallpaper/styles.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/about/index.js":
/*!***********************************!*\
  !*** ./components/about/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/about/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const About = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Thomas Harbin: Front End Developer"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Favorites:"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "- React"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "- Next JS"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "- Vanilla JS"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "- Cosmic JS")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Thomas went from music teacher to tech. After years teaching university music classes, Thomas began revisiting a high school interest in web development and discovered the same type of creativity he loved about music abounded in the dev space."), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx("p", {
    "data-type": true,
    "data-type-min": "1",
    "data-type-max": "9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Outside of work, Thomas enjoys playing and recording music with friends and skateboarding/rollerblading."), __jsx("p", {
    "data-type": true,
    "data-type-min": "1",
    "data-type-max": "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Spending 15 years as a classical pianist taught Thomas the power of deep work and focused attention. Playing the piano is a lot more like coding than most people would think. It requires setting goals, working long, focused hours and self-evaluation. Classical pianists are good at identifying and learning new skills."), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/nav/index.js":
/*!*********************************!*\
  !*** ./components/nav/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/nav/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/nav/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Nav = () => {
  return __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("img", {
    src: "/icon/thomas.png",
    alt: "Thomas's face",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("a", {
    href: "resume.pdf",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Resume")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://github.com/thomasharbin",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Github")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/thomasharbin/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "LinkedIn")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("a", {
    href: "mailto:thharbin@gmail.com",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Contact"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/nav/styles.scss":
/*!************************************!*\
  !*** ./components/nav/styles.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/reusableWindow/index.js":
/*!********************************************!*\
  !*** ./components/reusableWindow/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./components/reusableWindow/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/reusableWindow/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ReusableWindow = ({
  closeWindow,
  title,
  bodyContent,
  windowOpen,
  changeWallpaper
}) => {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    initial: {
      scale: 0
    },
    animate: {
      scale: 1
    },
    transition: {
      duration: 0.25
    },
    className: "margin-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, windowOpen === `${title}open` ? __jsx("div", {
    className: "window",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("p", {
    className: "close-button",
    onClick: closeWindow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "\u2716"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, title)), __jsx("div", {
    className: "body-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, bodyContent.component)) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ReusableWindow);

/***/ }),

/***/ "./components/reusableWindow/styles.scss":
/*!***********************************************!*\
  !*** ./components/reusableWindow/styles.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/singleIcon/index.js":
/*!****************************************!*\
  !*** ./components/singleIcon/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/singleIcon/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/singleIcon/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SingleIcon = ({
  title,
  iconUrl,
  setWindowOpen
}) => {
  const handleClickWindow = () => {
    setWindowOpen(`${title}open`);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "single-icon",
    onClick: handleClickWindow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("img", {
    src: iconUrl,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("p", {
    className: "icon-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, title)));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleIcon);

/***/ }),

/***/ "./components/singleIcon/styles.scss":
/*!*******************************************!*\
  !*** ./components/singleIcon/styles.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/singleSite/index.js":
/*!****************************************!*\
  !*** ./components/singleSite/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/singleSite/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/singleSite/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// styles

const sites = [{
  name: "Bible Reading App",
  url: "https://bible-app.now.sh/"
}, {
  name: "Texas Leaguer Brewing",
  url: "https://txleaguer.com/  "
}, {
  name: "Mariela",
  url: "https://cocky-roentgen-cbc28d.netlify.com/"
}, {
  name: "Thomas Harbin Piano",
  url: "https://jolly-leavitt-2d8149.netlify.com/"
}, {
  name: "MIDI Synthesizer",
  url: "https://parcelsynth.netlify.com/"
}, {
  name: "List App",
  url: "https://the-list.netlify.com/"
}];

const SingleSite = () => {
  return __jsx("div", {
    className: "single-site",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("ul", {
    className: "singleSite-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, sites.map(site => {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }, __jsx("a", {
      href: site.url,
      target: "_blank",
      className: "singleSite-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }, site.name));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleSite);

/***/ }),

/***/ "./components/singleSite/styles.scss":
/*!*******************************************!*\
  !*** ./components/singleSite/styles.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/wallpaper/index.js":
/*!***************************************!*\
  !*** ./components/wallpaper/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/wallpaper/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/wallpaper/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // styles



const Wallpaper = ({
  wallpaper,
  setWallpaper,
  changeWallpaper
}) => {
  function setStars() {
    changeWallpaper('stars');
    setWallpaper("stars");
    console.log("stars was clicked");
  }

  function setGreen() {
    setWallpaper("green");
    console.log(wallpaper);
  }

  function setBlue() {
    setWallpaper("blue");
    console.log(wallpaper);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("div", {
    className: "wallpaper-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Select Wallpaper"), __jsx("div", {
    className: "wallpaper-choices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("button", {
    onClick: setGreen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("img", {
    src: "/icon/green-background.png",
    alt: "green background",
    className: wallpaper == 'green' ? `active-wallpaper` : ``,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })), __jsx("button", {
    onClick: setStars,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("img", {
    src: "/wallpaper/stars.png",
    alt: "stars background",
    className: wallpaper == 'stars' ? `active-wallpaper` : ``,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  })), __jsx("button", {
    onClick: setBlue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("img", {
    src: "/wallpaper/blue.png",
    alt: "stars background",
    className: wallpaper == 'stars' ? `active-wallpaper` : ``,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Wallpaper);

/***/ }),

/***/ "./components/wallpaper/styles.scss":
/*!******************************************!*\
  !*** ./components/wallpaper/styles.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/websitesWindow/index.js":
/*!********************************************!*\
  !*** ./components/websitesWindow/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _singleSite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../singleSite */ "./components/singleSite/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./components/websitesWindow/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/websitesWindow/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // components

 // styles



const WebsitesWindow = ({
  websitesOpen,
  handleClick,
  title
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, websitesOpen ? __jsx("div", {
    className: "websites-margin-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    drag: true,
    dragMomentum: false,
    dragConstraints: {
      left: -80,
      top: -50,
      bottom: 500,
      right: 300
    },
    initial: {
      scale: 0
    },
    animate: {
      scale: 1
    },
    transition: {
      duration: 0.25
    },
    className: "websites-window",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("p", {
    className: "close-button",
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "\u2716"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, title)), __jsx("div", {
    className: "singleSite-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(_singleSite__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  })))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WebsitesWindow);

/***/ }),

/***/ "./components/websitesWindow/styles.scss":
/*!***********************************************!*\
  !*** ./components/websitesWindow/styles.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_singleSite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/singleSite */ "./components/singleSite/index.js");
/* harmony import */ var _components_wallpaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/wallpaper */ "./components/wallpaper/index.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about */ "./components/about/index.js");
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/data.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const windowData = [{
  title: "About",
  icon: "/icon/thomas-icon.png",
  bodyContent: {
    component: __jsx(_components_about__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: undefined
    })
  }
}, {
  title: "Websites",
  icon: "/icon/folder.png",
  bodyContent: {
    component: __jsx(_components_singleSite__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: undefined
    }),
    props: "body props"
  }
}, {
  title: "Preferences",
  icon: "/icon/mac.png",
  bodyContent: {
    component: __jsx(_components_wallpaper__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }),
    props: ""
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (windowData);

/***/ }),

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/styles.scss */ "./pages/home/styles.scss");
/* harmony import */ var _home_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Icons */ "./components/Icons/index.js");
/* harmony import */ var _components_PreferencesWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PreferencesWindow */ "./components/PreferencesWindow/index.js");
/* harmony import */ var _components_websitesWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/websitesWindow */ "./components/websitesWindow/index.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/nav */ "./components/nav/index.js");
/* harmony import */ var _components_reusableWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/reusableWindow */ "./components/reusableWindow/index.js");
/* harmony import */ var _components_singleSite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/singleSite */ "./components/singleSite/index.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data.js */ "./data.js");
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/pages/home/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // styles

 //componenets






 // data



const Home = () => {
  const constraintsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const iconConstraints = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: canDrag,
    1: setCanDrag
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const mediaMatch = window.matchMedia("(min-width: 500px)");
    setCanDrag(mediaMatch.matches);
  }, []);
  const {
    0: wallpaper,
    1: setWallpaper
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("green");

  const changeWallpaper = newWallpaper => {
    setWallpaper(newWallpaper);
  };

  const {
    0: windowOpen,
    1: setWindowOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(`${_data_js__WEBPACK_IMPORTED_MODULE_9__["default"][0].title}open`);

  const closeWindow = () => {
    setWindowOpen(null);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    ref: constraintsRef,
    className: wallpaper === "stars" ? "entire-display stars" : wallpaper === "blue" ? "entire-display blue" : "entire-display",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }), _data_js__WEBPACK_IMPORTED_MODULE_9__["default"].map(window => {
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
      drag: true,
      dragMomentum: false,
      dragConstraints: {
        left: -300,
        top: -50,
        bottom: 500,
        right: 300
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: undefined
    }, __jsx(_components_reusableWindow__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: window.title,
      bodyContent: window.bodyContent,
      windowOpen: windowOpen,
      closeWindow: closeWindow,
      changeWallpaper: changeWallpaper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: undefined
    }));
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    className: "icons-container",
    ref: iconConstraints,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setWindowOpen: setWindowOpen,
    windowOpen: windowOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/home/styles.scss":
/*!********************************!*\
  !*** ./pages/home/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/home */ "./pages/home/index.js");


/* harmony default export */ __webpack_exports__["default"] = (_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/thomasharbin/Documents/GitHub/portfolio-old-school/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map