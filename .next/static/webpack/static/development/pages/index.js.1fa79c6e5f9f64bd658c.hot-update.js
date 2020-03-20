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
/* harmony import */ var _components_singleIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/singleIcon */ "./components/singleIcon/index.js");
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/reusableWindow/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import windowData from "../../data"



var ReusableWindow = function ReusableWindow(_ref) {
  var closeWindow = _ref.closeWindow,
      title = _ref.title,
      bodyContent = _ref.bodyContent,
      background = _ref.background,
      header = _ref.header,
      windowOpen = _ref.windowOpen,
      zIndex = _ref.zIndex;
  var ctx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_singleIcon__WEBPACK_IMPORTED_MODULE_3__["IdCTX"]);
  console.log("ctx.id: ".concat(ctx.id));
  return __jsx("div", {
    className: "margin-container",
    style: {
      zIndex: "".concat(zIndex)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, windowOpen.includes("0id") ? // === `${title}open`
  __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    initial: {
      scale: 0
    },
    animate: {
      scale: 1
    },
    transition: {
      duration: 0.25
    },
    className: background ? "window ".concat(background, "-background") : "window",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, header ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("p", {
    className: "close-button",
    onClick: closeWindow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "\u2716"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, title)), __jsx("div", {
    className: "body-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, bodyContent.component)) : __jsx("div", {
    className: "body-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, bodyContent.component)) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ReusableWindow);

/***/ })

})
//# sourceMappingURL=index.js.1fa79c6e5f9f64bd658c.hot-update.js.map