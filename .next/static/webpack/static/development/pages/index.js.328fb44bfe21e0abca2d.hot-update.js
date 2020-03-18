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
  var player = new plyr__WEBPACK_IMPORTED_MODULE_2__["Plyr"]("#player", {
    captions: {
      active: true
    }
  }); // Expose player so it can be used from the console

  window.player = player;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    "class": "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    id: "player",
    "data-plyr-provider": "vimeo",
    "data-plyr-embed-id": "76979871",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("div", {
    className: "single-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("ul", {
    className: "singleItem-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_1__["movies"].map(function (item) {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("a", {
      href: item.url,
      target: "_blank",
      className: "singleItem-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, item.name));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Movies);

/***/ })

})
//# sourceMappingURL=index.js.328fb44bfe21e0abca2d.hot-update.js.map