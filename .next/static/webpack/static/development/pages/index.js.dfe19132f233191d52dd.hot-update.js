webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/useMediaQuery.js":
/*!********************************!*\
  !*** ./utils/useMediaQuery.js ***!
  \********************************/
/*! exports provided: useMediaQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMediaQuery", function() { return useMediaQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useMediaQuery = function useMediaQuery(query) {
  if (window) {
    var _mediaMatch = window.matchMedia(query);

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_mediaMatch.matches),
        _matches = _useState[0],
        _setMatches = _useState[1];
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var handler = function handler(e) {
      return setMatches(e.matches);
    };

    mediaMatch.addListener(handler);
    return function () {
      return mediaMatch.removeListener(handler);
    };
  });
  return matches;
};

/***/ })

})
//# sourceMappingURL=index.js.dfe19132f233191d52dd.hot-update.js.map