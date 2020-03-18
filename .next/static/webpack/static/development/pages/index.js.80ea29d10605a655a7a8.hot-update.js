webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/movieModal/index.js":
/*!****************************************!*\
  !*** ./components/movieModal/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/movieModal/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var MovieModal = function MovieModal(_ref) {
  var toggleModalOpen = _ref.toggleModalOpen,
      videoId = _ref.videoId,
      setVideoId = _ref.setVideoId;
  return __jsx("div", {
    className: "videoplayer-container modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("div", {
    "class": "modal-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("span", {
    "class": "close-btn",
    onClick: toggleModalOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "\xD7")), __jsx("div", {
    "class": "plyr__video-embed modal-content",
    id: "player",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("iframe", {
    src: videoId,
    allowfullscreen: true,
    allowtransparency: true,
    allow: "autoplay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MovieModal);

/***/ })

})
//# sourceMappingURL=index.js.80ea29d10605a655a7a8.hot-update.js.map