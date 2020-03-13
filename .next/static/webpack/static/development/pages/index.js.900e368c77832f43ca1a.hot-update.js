webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PreferencesIcon/index.js":
/*!*********************************************!*\
  !*** ./components/PreferencesIcon/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./components/PreferencesIcon/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/PreferencesIcon/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // styles




var PreferencesIcon = function PreferencesIcon(_ref) {
  var setWallpaper = _ref.setWallpaper,
      togglePreferencesOpen = _ref.togglePreferencesOpen,
      preferencesOpen = _ref.preferencesOpen;

  // const [preferencesOpen, togglePreferencesOpen] = useState(false);
  function handleClick() {
    togglePreferencesOpen(!preferencesOpen);
    console.log("the button was clicked");

    if (websitesOpen) {
      console.log("websites is open");
      toggleWebsitesOpen(!websitesOpen);
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "single-icon",
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("img", {
    src: "/icon/mac.png",
    alt: "preferences",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("p", {
    className: "icon-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "preferences")));
};

/* harmony default export */ __webpack_exports__["default"] = (PreferencesIcon);

/***/ })

})
//# sourceMappingURL=index.js.900e368c77832f43ca1a.hot-update.js.map