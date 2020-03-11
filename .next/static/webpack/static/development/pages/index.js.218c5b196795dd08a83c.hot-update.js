webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/singleSite/index.js":
/*!****************************************!*\
  !*** ./components/singleSite/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/singleSite/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/singleSite/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// styles

var sites = [{
  name: "Mariela",
  url: "https://cocky-roentgen-cbc28d.netlify.com/"
}, {
  name: "Thomas Harbin Piano",
  url: "www.thomasharbinmusic.com"
}, {
  name: "MIDI Synthesizer",
  url: "https://parcelsynth.netlify.com/"
}]; // console.log(sites.map(site => site.name));

var SingleSite = function SingleSite() {
  console.log(sites);
  return __jsx("div", {
    className: "single-site",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("ul", {
    className: "singleSite-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, sites.map(function (site) {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("a", {
      href: site.url,
      target: "_blank",
      className: "singleSite-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, site.name));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleSite);

/***/ })

})
//# sourceMappingURL=index.js.218c5b196795dd08a83c.hot-update.js.map