webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/websitesWindow/index.js":
/*!********************************************!*\
  !*** ./components/websitesWindow/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _singleSite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../singleSite */ "./components/singleSite/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./components/websitesWindow/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/websitesWindow/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // components

 // styles



var WebsitesWindow = function WebsitesWindow(_ref) {
  var websitesOpen = _ref.websitesOpen,
      handleClick = _ref.handleClick;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "websites-window",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), websitesOpen ? __jsx("div", {
    className: "margin-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    drag: true,
    dragMomentum: false,
    dragConstraints: {
      left: -80,
      top: -50,
      bottom: 500,
      right: 300
    },
    initial: {
      scale: 0
    },
    animate: {
      scale: 1
    },
    transition: {
      duration: 0.25
    },
    className: "websites-window",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("p", {
    className: "close-button",
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "\u2716"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Websites")), __jsx("div", {
    className: "singleSite-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_singleSite__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WebsitesWindow);

/***/ })

})
//# sourceMappingURL=index.js.5afc27aee04f036139f1.hot-update.js.map