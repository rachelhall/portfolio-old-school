webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/movies/index.js":
/*!************************************!*\
  !*** ./components/movies/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ "./data.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! plyr */ "./node_modules/plyr/dist/plyr.min.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(plyr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./components/movies/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/movies/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Movies = function Movies() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    "class": "plyr__video-embed",
    id: "player",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("iframe", {
    src: _data__WEBPACK_IMPORTED_MODULE_1__["movies"][0].url,
    allowfullscreen: true,
    allowtransparency: true,
    allow: "autoplay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), __jsx("div", {
    className: "single-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("ul", {
    className: "singleItem-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_1__["movies"].map(function (item) {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("a", {
      href: item.url,
      target: "_blank",
      className: "singleItem-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, item.name));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Movies);

/***/ })

})
//# sourceMappingURL=index.js.ce408adc08054b8aa8a7.hot-update.js.map