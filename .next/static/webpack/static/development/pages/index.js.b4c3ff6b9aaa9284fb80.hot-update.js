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
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/home */ "./pages/home/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./components/singleIcon/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/singleIcon/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var SingleIcon = function SingleIcon(_ref) {
  var title = _ref.title,
      iconUrl = _ref.iconUrl,
      setWindowOpen = _ref.setWindowOpen,
      setZIndex = _ref.setZIndex,
      zIndex = _ref.zIndex,
      id = _ref.id;
  var ctx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_home__WEBPACK_IMPORTED_MODULE_1__["WindowCTX"]);

  var handleClickWindow = function handleClickWindow() {
    // ctx.setWindowOpen(true);
    console.log('icon was clicked');
    ctx.windowOpen.push(id);
    setWindowOpen();
    setZIndex(zIndex + 5);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "single-icon",
    onClick: handleClickWindow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("img", {
    src: iconUrl,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("p", {
    className: "icon-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, title)));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleIcon);

/***/ })

})
//# sourceMappingURL=index.js.b4c3ff6b9aaa9284fb80.hot-update.js.map