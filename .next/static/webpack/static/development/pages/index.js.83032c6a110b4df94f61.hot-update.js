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
/* harmony import */ var react_resizable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-resizable */ "./node_modules/react-resizable/index.js");
/* harmony import */ var react_resizable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_resizable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./components/reusableWindow/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_singleIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/singleIcon */ "./components/singleIcon/index.js");
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/reusableWindow/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import windowData from "../../data"



var ReusableWindow = function ReusableWindow(_ref) {
  var closeWindow = _ref.closeWindow,
      title = _ref.title,
      bodyContent = _ref.bodyContent,
      windowOpen = _ref.windowOpen,
      background = _ref.background,
      header = _ref.header,
      zIndex = _ref.zIndex;
  var ctx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(idCTX);
  var windowRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // const [windowOpen, setWindowOpen] = useState(false
  //   `${windowData[0].title}open`
  //   );

  return __jsx("div", {
    className: "margin-container",
    ref: windowRef,
    style: {
      zIndex: "".concat(zIndex)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, windowOpen.includes(ctx.id) // === `${title}open` 
  ? __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
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
      lineNumber: 32
    },
    __self: this
  }, header ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("p", {
    className: "close-button",
    onClick: closeWindow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "\u2716"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, title)), __jsx("div", {
    className: "body-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, bodyContent.component)) : __jsx("div", {
    className: "body-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, bodyContent.component)) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ReusableWindow);

/***/ }),

/***/ "./components/singleIcon/index.js":
/*!****************************************!*\
  !*** ./components/singleIcon/index.js ***!
  \****************************************/
/*! exports provided: IdCTX, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdCTX", function() { return IdCTX; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/home */ "./pages/home/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./components/singleIcon/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/thomasharbin/Documents/GitHub/portfolio-old-school/components/singleIcon/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var IdCTX = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

var SingleIcon = function SingleIcon(_ref) {
  var title = _ref.title,
      iconUrl = _ref.iconUrl,
      setZIndex = _ref.setZIndex,
      zIndex = _ref.zIndex,
      id = _ref.id;
  var ctx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_home__WEBPACK_IMPORTED_MODULE_1__["WindowCTX"]);

  var handleClickWindow = function handleClickWindow() {
    // ctx.setWindowOpen(true);
    console.log("icon was clicked");
    ctx.windowOpen.push(id);
    ctx.setWindowOpen(ctx.windowOpen);
    setZIndex(zIndex + 5);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(IdCTX.provider, {
    value: {
      id: id
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "single-icon",
    onClick: handleClickWindow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("img", {
    src: iconUrl,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("p", {
    className: "icon-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, title))));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleIcon);

/***/ })

})
//# sourceMappingURL=index.js.83032c6a110b4df94f61.hot-update.js.map