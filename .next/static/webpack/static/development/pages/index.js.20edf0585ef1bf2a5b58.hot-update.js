webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Preferences/index.js":
/*!*****************************************!*\
  !*** ./components/Preferences/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _Wallpaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Wallpaper */ "./components/Wallpaper/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./components/Preferences/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/Preferences/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // components

 // styles




var Preferences = function Preferences(_ref) {
  var setWallpaper = _ref.setWallpaper;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      preferencesOpen = _useState[0],
      togglePreferencesOpen = _useState[1];

  function handleClick() {
    togglePreferencesOpen(!preferencesOpen);
    console.log("the button was clicked");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, ".preferences", preferencesOpen ? __jsx("div", {
    className: "margin-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
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
      lineNumber: 20
    },
    __self: this
  }, __jsx("p", {
    className: "close-button",
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "\u2716"), __jsx(_Wallpaper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setWallpaper: setWallpaper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))) : __jsx("div", {
    className: "single-icon",
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("img", {
    src: "/icon/mac.png",
    alt: "preferences",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("p", {
    className: "icon-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "preferences")));
};

/* harmony default export */ __webpack_exports__["default"] = (Preferences);

/***/ })

})
//# sourceMappingURL=index.js.20edf0585ef1bf2a5b58.hot-update.js.map