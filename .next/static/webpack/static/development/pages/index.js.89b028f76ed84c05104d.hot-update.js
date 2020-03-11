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
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/singleSite/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
var sites = [{
  name: "Mariela",
  url: "https://cocky-roentgen-cbc28d.netlify.com/"
}, {
  name: "Thomas Harbin Piano",
  url: "www.thomasharbinmusic.com"
}];
console.log(sites.map(function (site) {
  return site.name;
}));

var SingleSite = function SingleSite(_ref) {
  var sites = _ref.sites;
  return __jsx("div", {
    className: "single-site",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("ul", {
    className: "singleSite-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), sites.map, __jsx("a", {
    href: site.url,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, site.name));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleSite);

/***/ })

})
//# sourceMappingURL=index.js.89b028f76ed84c05104d.hot-update.js.map