webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/wallpaper/index.js":
/*!***************************************!*\
  !*** ./components/wallpaper/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/wallpaper/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/home */ "./pages/home/index.js");
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/wallpaper/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // styles




var Wallpaper = function Wallpaper(_ref) {
  var wallpaper = _ref.wallpaper;
  var ctx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_home__WEBPACK_IMPORTED_MODULE_2__["WindowCTX"]);

  function setStars() {
    ctx.changeWallpaper('stars');
  }

  function setGreen() {
    ctx.changeWallpaper("green");
  }

  function setBlue() {
    ctx.changeWallpaper("blue");
  }

  function setGray() {
    ctx.changeWallpaper("gray");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "wallpaper-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Select Wallpaper"), __jsx("div", {
    className: "wallpaper-choices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("button", {
    onClick: setGreen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("img", {
    src: "/wallpaper/green.png",
    alt: "green background",
    className: wallpaper == 'green' ? "active-wallpaper" : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx("button", {
    onClick: setStars,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("img", {
    src: "/wallpaper/stars.png",
    alt: "stars background",
    className: wallpaper == 'stars' ? "active-wallpaper" : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx("button", {
    onClick: setBlue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("img", {
    src: "/wallpaper/blue.png",
    alt: "stars background",
    className: wallpaper == 'blue' ? "active-wallpaper" : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx("button", {
    onClick: setGray,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("img", {
    src: "/wallpaper/gray.png",
    alt: "stars background",
    className: wallpaper == 'gray' ? "active-wallpaper" : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Wallpaper);

/***/ })

})
//# sourceMappingURL=index.js.a67614be2eb8b6d7bab8.hot-update.js.map