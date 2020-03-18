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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! plyr */ "./node_modules/plyr/dist/plyr.min.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(plyr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./components/movies/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data */ "./data.js");
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/movies/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // styles

 // data



var Movies = function Movies() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_data__WEBPACK_IMPORTED_MODULE_4__["movies"][0].id),
      videoId = _useState[0],
      setVideoId = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "videoplayer-container modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    "class": "plyr__video-embed modal-content",
    id: "player",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("iframe", {
    src: _data__WEBPACK_IMPORTED_MODULE_4__["movies"][0].url,
    allowfullscreen: true,
    allowtransparency: true,
    allow: "autoplay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))), __jsx("div", {
    className: "single-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("ul", {
    className: "singleItem-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_4__["movies"].map(function (item) {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("a", {
      href: item.url,
      target: "_blank",
      className: "singleItem-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, item.name));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Movies);

/***/ })

})
//# sourceMappingURL=index.js.a295a640d7d3b292d65c.hot-update.js.map