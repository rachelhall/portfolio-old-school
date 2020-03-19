webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: WindowCTX, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowCTX", function() { return WindowCTX; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _home_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/styles.scss */ "./pages/home/styles.scss");
/* harmony import */ var _home_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/icons */ "./components/icons/index.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/nav */ "./components/nav/index.js");
/* harmony import */ var _components_reusableWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/reusableWindow */ "./components/reusableWindow/index.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.js */ "./data.js");
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/pages/home/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // styles

 //componenets



 // data


var WindowCTX = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

var Home = function Home() {
  var constraintsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var iconConstraints = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      canDrag = _useState[0],
      setCanDrag = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(5),
      zIndex = _useState2[0],
      setZIndex = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var mediaMatch = window.matchMedia("(min-width: 500px)");
    setCanDrag(mediaMatch.matches);
  }, []);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("blue"),
      wallpaper = _useState3[0],
      setWallpaper = _useState3[1];

  var changeWallpaper = function changeWallpaper(newWallpaper) {
    setWallpaper(newWallpaper);
  };

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("\n  ".concat(_data_js__WEBPACK_IMPORTED_MODULE_6__["default"][0].title, "open")),
      windowOpen = _useState4[0],
      setWindowOpen = _useState4[1];

  var closeWindow = function closeWindow() {
    setWindowOpen(null);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(WindowCTX.Provider, {
    value: {
      changeWallpaper: changeWallpaper,
      setWindowOpen: setWindowOpen
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    ref: constraintsRef,
    className: wallpaper === "stars" ? "entire-display stars" : wallpaper === "green" ? "entire-display green" : wallpaper === "gray" ? "entire-display gray" : "entire-display",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), _data_js__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (window, i) {
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
      drag: true,
      dragMomentum: false,
      dragConstraints: {
        left: -300,
        top: -50,
        bottom: 500,
        right: 300
      },
      className: "window-container",
      key: "".concat(i, "2"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx(_components_reusableWindow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: window.title,
      header: window.header,
      bodyContent: window.bodyContent,
      background: window.background,
      windowOpen: windowOpen,
      closeWindow: closeWindow,
      changeWallpaper: changeWallpaper,
      key: "".concat(i, "23"),
      zIndex: zIndex,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }));
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    className: "icons-container",
    ref: iconConstraints,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_3__["default"] // setWindowOpen={setWindowOpen}
  // windowOpen={windowOpen}
  , {
    zIndex: zIndex,
    setZIndex: setZIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.f5a0ea65e204d06faf7d.hot-update.js.map