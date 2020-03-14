webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _home_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/styles.scss */ "./pages/home/styles.scss");
/* harmony import */ var _home_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/useMediaQuery */ "./utils/useMediaQuery.js");
/* harmony import */ var _components_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/window */ "./components/window/index.js");
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Icons */ "./components/Icons/index.js");
/* harmony import */ var _components_PreferencesWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PreferencesWindow */ "./components/PreferencesWindow/index.js");
/* harmony import */ var _components_websitesWindow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/websitesWindow */ "./components/websitesWindow/index.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/nav */ "./components/nav/index.js");
/* harmony import */ var _components_reusableWindow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/reusableWindow */ "./components/reusableWindow/index.js");
/* harmony import */ var _components_singleSite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/singleSite */ "./components/singleSite/index.js");
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/pages/home/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // utils

 //componenets









var Home = function Home() {
  var constraintsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var iconConstraints = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      canDrag = _useState[0],
      setCanDrag = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var mediaMatch = window.matchMedia("(min-width: 500px)");
    setCanDrag(mediaMatch.matches);
  }, []);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("green"),
      wallpaper = _useState2[0],
      setWallpaper = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      preferencesOpen = _useState3[0],
      togglePreferencesOpen = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      websitesOpen = _useState4[0],
      toggleWebsitesOpen = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      windowOpen = _useState5[0],
      toggleWindowOpen = _useState5[1];

  var handleClickPreferences = function handleClickPreferences() {
    togglePreferencesOpen(!preferencesOpen);
  };

  var handleClickWebsites = function handleClickWebsites() {
    toggleWebsitesOpen(!websitesOpen);
  };

  var handleClickWindow = function handleClickWindow() {
    toggleWindowOpen(!windowOpen);
  };

  var windowData = [{
    title: "Websites"
  }, {
    title: "Preferences"
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    ref: constraintsRef,
    className: wallpaper === "stars" ? "entire-display stars" : wallpaper === "blue" ? "entire-display blue" : "entire-display",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx(_components_PreferencesWindow__WEBPACK_IMPORTED_MODULE_7__["default"], {
    preferencesOpen: preferencesOpen,
    handleClick: handleClickPreferences,
    setWallpaper: setWallpaper,
    wallpaper: wallpaper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx(_components_websitesWindow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    websitesOpen: websitesOpen,
    handleClick: handleClickWebsites,
    title: windowData[0].title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    className: "icons-container",
    ref: iconConstraints,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    togglePreferencesOpen: togglePreferencesOpen,
    preferencesOpen: preferencesOpen,
    toggleWebsitesOpen: toggleWebsitesOpen,
    websitesOpen: websitesOpen,
    toggleWindowOpen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx(_components_reusableWindow__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: windowData[0].title,
    bodyContent: __jsx(_components_singleSite__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }),
    toggleWindowOpen: toggleWindowOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.3122e15ef6695ea3e0d8.hot-update.js.map