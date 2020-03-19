webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/icons/index.js":
/*!***********************************!*\
  !*** ./components/icons/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _singleIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../singleIcon */ "./components/singleIcon/index.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.js */ "./data.js");
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/icons/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // components

 // data



var Icons = function Icons(_ref) {
  var setWindowOpen = _ref.setWindowOpen,
      setZIndex = _ref.setZIndex,
      zIndex = _ref.zIndex;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, _data_js__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (window, i) {
    return __jsx(_singleIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: window.title,
      iconUrl: window.icon // setWindowOpen={setWindowOpen}
      ,
      key: i,
      zIndex: zIndex,
      setZIndex: setZIndex,
      id: "".concat(i),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Icons);

/***/ })

})
//# sourceMappingURL=index.js.eb14649855f3b91fa626.hot-update.js.map