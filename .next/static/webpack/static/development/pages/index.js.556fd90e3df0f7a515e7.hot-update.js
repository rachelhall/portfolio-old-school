webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/singleIcon/index.js":
/*!****************************************!*\
  !*** ./components/singleIcon/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/singleIcon/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SingleIcon = function SingleIcon(_ref) {
  var title = _ref.title,
      iconUrl = _ref.iconUrl,
      toggleWindowOpen = _ref.toggleWindowOpen;
  console.log(title);

  var handleClickWindow = function handleClickWindow() {
    toggleWindowOpen("".concat(title, "open"));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "single-icon",
    onClick: handleClickWindow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("img", {
    src: iconUrl,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("p", {
    className: "icon-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, title)));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleIcon);

/***/ })

})
//# sourceMappingURL=index.js.556fd90e3df0f7a515e7.hot-update.js.map