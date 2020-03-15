webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/reusableWindow/index.js":
/*!********************************************!*\
  !*** ./components/reusableWindow/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./components/reusableWindow/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/reusableWindow/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ReusableWindow = function ReusableWindow(_ref) {
  var closeWindow = _ref.closeWindow,
      title = _ref.title,
      bodyContent = _ref.bodyContent,
      windowOpen = _ref.windowOpen,
      changeWallpaper = _ref.changeWallpaper;
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
    __self: this
  }, windowOpen === "".concat(title, "open") ? __jsx("div", {
    className: "window",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("p", {
    className: "close-button",
    onClick: closeWindow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "\u2716"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, title)), __jsx("div", {
    className: "body-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, bodyContent.component)) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ReusableWindow);

/***/ })

})
//# sourceMappingURL=index.js.d93ed87781913bb5a729.hot-update.js.map