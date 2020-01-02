module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./API.js":
/*!****************!*\
  !*** ./API.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports) {

const BASE_EXT_URL = "https://extension-ms.juejin.im";
const BASE_XIAOCE_URL = "https://xiaoce-timeline-api-ms.juejin.im";
const GET_BANNER = `${BASE_EXT_URL}/extension/banner`;
const GET_LASTEST_XIAOCE = `${BASE_XIAOCE_URL}/v1/getNewestXiaoce`;
const GET_RECOMMENDED_ARTICLES = `${BASE_EXT_URL}/resources/gold`;
const GET_HIGHSCORE_GITHUB = `${BASE_EXT_URL}/resources/github`;
module.exports = {
  GET_BANNER,
  GET_LASTEST_XIAOCE,
  GET_RECOMMENDED_ARTICLES,
  GET_HIGHSCORE_GITHUB
};

/***/ }),

/***/ "./action/githubAction.js":
/*!********************************!*\
  !*** ./action/githubAction.js ***!
  \********************************/
/*! exports provided: GET_GITHUB_LIST, UPDATE_GITHUB_CONDS, refreshGithubList, updateGithubConds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_GITHUB_LIST", function() { return GET_GITHUB_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_GITHUB_CONDS", function() { return UPDATE_GITHUB_CONDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshGithubList", function() { return refreshGithubList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGithubConds", function() { return updateGithubConds; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);

//action type 
const GET_GITHUB_LIST = "GITHUB/GET_GITHUB_LIST";
const UPDATE_GITHUB_CONDS = "GITHUB/UPDATE_GITHUB_CONDS"; //action creator

const updateGithubList = githubList => ({
  type: GET_GITHUB_LIST,
  data: githubList
});

const updateGithubConds = githubParam => ({
  type: UPDATE_GITHUB_CONDS,
  data: githubParam
}); //异步请求


const refreshGithubList = () => {
  return (dispatch, getState, $axios) => {
    return $axios.get("/api/getHighscoreGithub").then(res => {
      const {
        data
      } = res.data;
      console.log("update list: ", data);
      dispatch(updateGithubList(list));
    }).then(null, err => {
      console.log("Error: ", err);
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve();
    });
  };
};



/***/ }),

/***/ "./action/goldAction.js":
/*!******************************!*\
  !*** ./action/goldAction.js ***!
  \******************************/
/*! exports provided: GET_GOLD_LIST, UPDATE_GOLD_CONDS, refreshGoldList, updateGoldConds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_GOLD_LIST", function() { return GET_GOLD_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_GOLD_CONDS", function() { return UPDATE_GOLD_CONDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshGoldList", function() { return refreshGoldList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGoldConds", function() { return updateGoldConds; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);

//action type 
const GET_GOLD_LIST = "GOLD/GET_GOLD_LIST";
const UPDATE_GOLD_CONDS = "GOLD/UPDATE_GOLD_CONDS"; //action creator

const updateGoldList = goldList => ({
  type: GET_GOLD_LIST,
  data: goldList
});

const updateGoldConds = goldParam => ({
  type: UPDATE_GOLD_CONDS,
  data: goldParam
}); //异步请求


const refreshGoldList = cb => {
  return (dispatch, getState, $axios) => {
    return $axios.get("/api/getRecommendedArticals").then(res => {
      const {
        data
      } = res.data;
      console.log("update list: ", data);
      cb(data);
      dispatch(updateGoldList(list));
    }).then(null, err => {
      console.log("Error: ", err);
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve();
    });
  };
};



/***/ }),

/***/ "./components/Body.js":
/*!****************************!*\
  !*** ./components/Body.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/wangning/Desktop/ssr-juejin-next/components/Body.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Body = props => {
  const column = comp => {
    if (comp && typeof comp === "string") {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: undefined
      }, comp);
    }

    if (comp && comp instanceof Object) {
      return comp;
    }

    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }, "This is invalid Component");
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3340027846" + " " + "main-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3340027846" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, column(props.leftCol)), __jsx("div", {
    className: "jsx-3340027846" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, column(props.rightCol))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3340027846",
    __self: undefined
  }, ".main-area{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;margin:1.8rem 1.2rem 0 1.8rem;overflow:hidden;}.source{position:relative;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.gold-source{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:33.97rem;}.other-source{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YW5nbmluZy9EZXNrdG9wL3Nzci1qdWVqaW4tbmV4dC9jb21wb25lbnRzL0JvZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJnQixBQUd1QyxBQU9JLEFBUUosQUFJQSxrQkFYTSxvQkFDUCxnQkFSQSxBQWVFLEFBSW5CLGVBSEEsMkNBUDBCLGdCQVJKLGtCQUNZLDhCQUNkLGNBT0QsRUFObkIsYUFPcUIscUZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy93YW5nbmluZy9EZXNrdG9wL3Nzci1qdWVqaW4tbmV4dC9jb21wb25lbnRzL0JvZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IEJvZHkgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgY29sdW1uID0gY29tcCA9PiB7XG4gICAgICAgIGlmKGNvbXAgJiYgdHlwZW9mIGNvbXAgPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2Pntjb21wfTwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoY29tcCAmJiBjb21wIGluc3RhbmNlb2YgT2JqZWN0KXtcbiAgICAgICAgICAgIHJldHVybiBjb21wO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5UaGlzIGlzIGludmFsaWQgQ29tcG9uZW50PC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1hcmVhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbihwcm9wcy5sZWZ0Q29sKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1uKHByb3BzLnJpZ2h0Q29sKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e1xuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgLm1haW4tYXJlYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuOHJlbSAxLjJyZW0gMCAxLjhyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zb3VyY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5nb2xkLXNvdXJjZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMy45N3JlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAub3RoZXItc291cmNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYCAgICAgICAgICAgIFxuICAgICAgICAgICAgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IEJvZHk7Il19 */\n/*@ sourceURL=/Users/wangning/Desktop/ssr-juejin-next/components/Body.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ }),

/***/ "./components/CommonLayout.js":
/*!************************************!*\
  !*** ./components/CommonLayout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Body */ "./components/Body.js");
var _jsxFileName = "/Users/wangning/Desktop/ssr-juejin-next/components/CommonLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Layout = props => {
  console.log(typeof props.leftCol, props.leftCol instanceof react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2503959104" + " " + "layoutStyle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx(_Body__WEBPACK_IMPORTED_MODULE_3__["default"], {
    leftCol: props.leftCol,
    rightCol: props.rightCol,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2503959104",
    __self: undefined
  }, ".layoutStyle{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:absolute;width:100%;height:100%;background-color:#eceff1;overflow:hidden;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YW5nbmluZy9EZXNrdG9wL3Nzci1qdWVqaW4tbmV4dC9jb21wb25lbnRzL0NvbW1vbkxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjb0IsQUFHMEMsQUFTUyxzQkFDMUIsb0RBVDBCLDhFQUNKLGtCQUNQLFdBQ0MsWUFDYSx5QkFDVCxnQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3dhbmduaW5nL0Rlc2t0b3Avc3NyLWp1ZWppbi1uZXh0L2NvbXBvbmVudHMvQ29tbW9uTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCBCb2R5IGZyb20gJy4vQm9keSdcblxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4ge1xuICAgIGNvbnNvbGUubG9nKHR5cGVvZiBwcm9wcy5sZWZ0Q29sLCBwcm9wcy5sZWZ0Q29sIGluc3RhbmNlb2YgUmVhY3QuQ29tcG9uZW50KVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFN0eWxlXCI+XG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxCb2R5IGxlZnRDb2w9e3Byb3BzLmxlZnRDb2x9IHJpZ2h0Q29sPXtwcm9wcy5yaWdodENvbH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAubGF5b3V0U3R5bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VmZjE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=/Users/wangning/Desktop/ssr-juejin-next/components/CommonLayout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/wangning/Desktop/ssr-juejin-next/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Logo = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
  className: "jsx-2063972611" + " " + "logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2063972611",
  __self: undefined
}, ".logo.jsx-2063972611{display:block;width:5rem;height:3rem;cursor:pointer;background-position:50%;background-repeat:no-repeat;background-size:contain;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCA2NCA0MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCAzLjcuMSAoMjgyMTUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPg0KICAgIDx0aXRsZT4wRTY2M0JBQi1CQ0IxLTQyNkItOUI1NC05MTlEQjk2NDkxRjQ8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4NCiAgICA8ZGVmcz48L2RlZnM+DQogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJqdWVqaW5fY2hyb21lX2V4dGVuc2lvbl9kZXNpZ25lciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyLjAwMDAwMCwgLTEyLjAwMDAwMCkiIGZpbGw9IiMwMDZDRkYiPg0KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyLjAwMDAwMCwgMTIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTUyLjExMDc1NjksMzQgTDU1LjQwNzc4NDEsMzQgTDU1LjY5MTI4NDEsMzQgTDU1LjY5MTI4NDEsMzQuMjgzNSBMNTUuNjkxMjg0MSwzNS41Nzc1ODc3IEw1NS42OTEyODQxLDM1Ljg2MTA4NzcgTDU1LjQwNzc4NDEsMzUuODYxMDg3NyBMMzcuMjgzNSwzNS44NjEwODc3IEwzNywzNS44NjEwODc3IEwzNywzNS41Nzc1ODc3IEwzNywzNC4yODM1IEwzNywzNCBMMzcuMjgzNSwzNCBMNDAuMDAyMDczLDM0IEwzOC4wNDgxODYyLDIyLjU4NjQ4ODkgTDM4LDIyLjMwNTAxMjIgTDM4LjI4MTgyMDEsMjIuMjU4ODc2NSBMMzkuNTg1NDI0OCwyMi4wNDU0NjgzIEwzOS44NjMxNjgyLDIyIEwzOS45MTA2NjAzLDIyLjI3NzQwNDUgTDQxLjkxNzU4NzUsMzQgTDQ1LDM0IEw0NSwxOS44NjEwODc3IEwzNi4yODM1LDE5Ljg2MTA4NzcgTDM2LDE5Ljg2MTA4NzcgTDM2LDE5LjU3NzU4NzcgTDM2LDE4LjI4MzUgTDM2LDE4IEwzNi4yODM1LDE4IEw0NSwxOCBMNDUsMTEuODYxMDg3NyBMMzkuMjgzNSwxMS44NjEwODc3IEwzOSwxMS44NjEwODc3IEwzOSwxMS41Nzc1ODc3IEwzOSwxMC4yODM1IEwzOSwxMCBMMzkuMjgzNSwxMCBMNTIuODQzMTE5MiwxMCBMNTMuMTI2NjE5MiwxMCBMNTMuMTI2NjE5MiwxMC4yODM1IEw1My4xMjY2MTkyLDExLjU3NzU4NzcgTDUzLjEyNjYxOTIsMTEuODYxMDg3NyBMNTIuODQzMTE5MiwxMS44NjEwODc3IEw0Ni44ODg2MzA3LDExLjg2MTA4NzcgTDQ2Ljg4ODYzMDcsMTggTDU2LjY3NjU5NywxOCBMNTYuOTYwMDk3LDE4IEw1Ni45NjAwOTcsMTguMjgzNSBMNTYuOTYwMDk3LDE5LjU3NzU4NzcgTDU2Ljk2MDA5NywxOS44NjEwODc3IEw1Ni42NzY1OTcsMTkuODYxMDg3NyBMNDYuODg4NjMwNywxOS44NjEwODc3IEw0Ni44ODg2MzA3LDM0IEw1MC4xOTUyNjI2LDM0IEw1Mi4yMDE0MjI5LDIyLjI3NzQyNTEgTDUyLjI0ODkwMDUsMjIgTDUyLjUyNjY2MTQsMjIuMDQ1NDcxMiBMNTMuODMwMjY2MSwyMi4yNTg4NzkzIEw1NC4xMTIwNjg1LDIyLjMwNTAxMjEgTDU0LjA2MzkwMzEsMjIuNTg2NDc0MSBMNTIuMTEwNzU2OSwzNCBaIE0yNS42NDQ1OTMxLDMzLjM5NDAwMyBMMjUuNjQ0NTkzMSwyNC4yODMxODQ1IEwyOS45ODUyNDM2LDI0LjI4MzE4NDUgTDMwLjI2ODc0MzYsMjQuMjgzMTg0NSBMMzAuMjY4NzQzNiwyMy45OTk2ODQ1IEwzMC4yNjg3NDM2LDE0LjcyMzY1MDkgTDMwLjI2ODc0MzYsMTQuNDQwMTUwOSBMMjkuOTg1MjQzNiwxNC40NDAxNTA5IEwyOC42NjM2MTMsMTQuNDQwMTUwOSBMMjguMzgwMTEzLDE0LjQ0MDE1MDkgTDI4LjM4MDExMywxNC43MjM2NTA5IEwyOC4zODAxMTMsMjIuNDIyMDk2OCBMMjUuNjQ0NTkzMSwyMi40MjIwOTY4IEwyNS42NDQ1OTMxLDE0LjE0MzE5NjMgTDI1LjY0NDU5MzEsMTMuODU5Njk2MyBMMjUuMzYxMDkzMSwxMy44NTk2OTYzIEwyNC4wMzk0NjI0LDEzLjg1OTY5NjMgTDIzLjc1NTk2MjQsMTMuODU5Njk2MyBMMjMuNzU1OTYyNCwxNC4xNDMxOTYzIEwyMy43NTU5NjI0LDIyLjQyMjA5NjggTDIxLjA2MzIxMzMsMjIuNDIyMDk2OCBMMjEuMDYzMjEzMywxNC43MjM2NTA5IEwyMS4wNjMyMTMzLDE0LjQ0MDE1MDkgTDIwLjc3OTcxMzMsMTQuNDQwMTUwOSBMMTkuNDU3MjYzMiwxNC40NDAxNTA5IEwxOS4xNzM3NjMyLDE0LjQ0MDE1MDkgTDE5LjE3Mzc2MzIsMTQuNzIzNjUwOSBMMTkuMTczNzYzMiwyMy45OTk2ODQ1IEwxOS4xNzM3NjMyLDI0LjI4MzE4NDUgTDE5LjQ1NzI2MzIsMjQuMjgzMTg0NSBMMjMuNzU1OTYyNCwyNC4yODMxODQ1IEwyMy43NTU5NjI0LDMzLjM5NDAwMyBMMjEuMDYzMjEzMywzMy4zOTQwMDMgTDIxLjA2MzIxMzMsMjUuODE3NTA0NyBMMjEuMDYzMjEzMywyNS41MzQwMDQ3IEwyMC43Nzk3MTMzLDI1LjUzNDAwNDcgTDE5LjQ1NzI2MzIsMjUuNTM0MDA0NyBMMTkuMTczNzYzMiwyNS41MzQwMDQ3IEwxOS4xNzM3NjMyLDI1LjgxNzUwNDcgTDE5LjE3Mzc2MzIsMzQuOTcxNTkwNyBMMTkuMTczNzYzMiwzNS4yNTUwOTA3IEwxOS40NTcyNjMyLDM1LjI1NTA5MDcgTDI5Ljk4NTI0MzYsMzUuMjU1MDkwNyBMMzAuMjY4NzQzNiwzNS4yNTUwOTA3IEwzMC4yNjg3NDM2LDM0Ljk3MTU5MDcgTDMwLjI2ODc0MzYsMjUuODE3NTA0NyBMMzAuMjY4NzQzNiwyNS41MzQwMDQ3IEwyOS45ODUyNDM2LDI1LjUzNDAwNDcgTDI4LjY2MzYxMywyNS41MzQwMDQ3IEwyOC4zODAxMTMsMjUuNTM0MDA0NyBMMjguMzgwMTEzLDI1LjgxNzUwNDcgTDI4LjM4MDExMywzMy4zOTQwMDMgTDI1LjY0NDU5MzEsMzMuMzk0MDAzIFogTTkuODc1MDcxNDQsMjQuMjg0MzgxMSBMOC41Mzk1NTMzMywyNS41OTUwMzM3IEw4LjM0MTQ2NjYxLDI1Ljc4OTQzMjMgTDguMTQyOTA0NjUsMjUuNTk1NTE5MSBMNy4yMDcxOTM0MiwyNC42ODE3MTUxIEw3LDI0LjQ3OTM3MjYgTDcuMjA2NzExMDQsMjQuMjc2NTM3MyBMOS44NzUwNzE0NCwyMS42NTgyMDc1IEw5Ljg3NTA3MTQ0LDEwLjc5NjE5MTEgTDcuODI3NTY4OTIsMTAuNzk2MTkxMSBMNy41NDQwNjg5MiwxMC43OTYxOTExIEw3LjU0NDA2ODkyLDEwLjUxMjY5MTEgTDcuNTQ0MDY4OTIsOS4yMTg2MDMzOSBMNy41NDQwNjg5Miw4LjkzNTEwMzM5IEw3LjgyNzU2ODkyLDguOTM1MTAzMzkgTDkuODc1MDcxNDQsOC45MzUxMDMzOSBMOS44NzUwNzE0NCw0LjI4Mzc0MDY5IEw5Ljg3NTA3MTQ0LDQuMDAwMjQwNjkgTDEwLjE1ODU3MTQsNC4wMDAyNDA2OSBMMTEuNDgxMDIxNSw0LjAwMDI0MDY5IEwxMS43NjQ1MjE1LDQuMDAwMjQwNjkgTDExLjc2NDUyMTUsNC4yODM3NDA2OSBMMTEuNzY0NTIxNSw4LjkzNTEwMzM5IEwxNC4yMDcxMjAzLDguOTM1MTAzMzkgTDE0LjQ5MDYyMDMsOC45MzUxMDMzOSBMMTQuNDkwNjIwMyw5LjIxODYwMzM5IEwxNC40OTA2MjAzLDEwLjUxMjY5MTEgTDE0LjQ5MDYyMDMsMTAuNzk2MTkxMSBMMTQuMjA3MTIwMywxMC43OTYxOTExIEwxMS43NjQ1MjE1LDEwLjc5NjE5MTEgTDExLjc2NDUyMTUsMTkuODA0MTgzOSBMMTMuMzQ3MDA4NywxOC4yNTEzNjc2IEwxMy41NDUxODIsMTguMDU2OTEgTDEzLjc0MzczMjcsMTguMjUwOTgyMSBMMTQuNjc4NjI0NiwxOS4xNjQ3ODYxIEwxNC44ODU2MjQ5LDE5LjM2NzExNzIgTDE0LjY3OTAzMTcsMTkuNTY5ODY0IEwxMS43NjQ1MjE1LDIyLjQzMDExIEwxMS43NjQ1MjE1LDI2LjQ1MDkwOTcgQzExLjc2NDUyMTUsMjguNTAzMzkxNyAxMS40NDYwNjA5LDMwLjQ2OTA5MzkgMTAuOTEyMjQ0NiwzMi4yODQ5NjQ4IEMxMC41ODQ2Mjk4LDMzLjM5OTQwNDUgMTAuMjU3MzAzLDM0LjIxMDgwMTkgMTAuMDAxMDk5NiwzNC43MzMxNzk5IEw5LjcxMTg2NDgzLDM1LjMxNDgzNzQgTDkuNTg3ODE1NTEsMzUuNTY0MzAzMyBMOS4zMzYyMjc2LDM1LjQ0NDYxNjIgTDguMTQ4OTcyMjgsMzQuODc5ODA2NiBMNy44ODkzNTEzMywzNC43NTYyOTc5IEw4LjAxNjQ4NzAzLDM0LjQ5ODQzMzcgTDguMzAzNzg0NTQsMzMuOTE1NzI1MiBDOC4zNDUxMDU4NywzMy44MzI3ODE4IDguNDQwMTIxMDMsMzMuNjE5ODE1MyA4LjU1MTM4MDQsMzMuMzQxNTkzMSBDOC43MzU5Mjc1LDMyLjg4MDEwMjkgOC45MjAzMDkzNSwzMi4zNTIyNTk5IDkuMDkyMTg0MDksMzEuNzY2OTE0MiBDOS41ODE3MzE0NywzMC4wOTk2ODU3IDkuODc1MDcxNDQsMjguMzA0NTkyNyA5Ljg3NTA3MTQ0LDI2LjQ1MDkwOTcgTDkuODc1MDcxNDQsMjQuMjg0MzgxMSBaIE0xNS45MTg5ODY4LDM1LjQyMDIwNjcgTDE1Ljk3NTkxNDYsMzUuMTQ0NjM1IEwxNi4xMDcwMTI1LDM0LjUxMDAyNjYgQzE2Ljg5NTIyODksMzAuNjk3MzE2OCAxNy4xOTA4NzY0LDIyLjQxOTQ1NTggMTcuMTU2NzQwMiwxMi4zMzg3NDY5IEwzMC43OTc0Nzc4LDEyLjMzODc0NjkgTDMwLjc5NzQ3NzgsNCBMMTUuNDU2NTY1Miw0IEwxNS4xNjY2Njk4LDQgTDE1LjE3MzEzNTcsNC4yODk4MjMyIEwxNS4xODc4ODQyLDQuOTUwOTA3MDYgQzE1LjIwMTc3NTcsNS41ODExMzMyMSAxNS4yMjQzOTA3LDYuOTc3NTIzNjQgMTUuMjQxMTUwMyw4LjY1NTUzMjE2IEMxNS4yNjg3NTE1LDExLjQxOTAwODYgMTUuMjc0MTE2MywxNC4yODMxNzAzIDE1LjI0ODE1MTIsMTcuMTAwNjE5NCBDMTUuMTc0MzYxMiwyNS4xMDc1MTA1IDE0Ljg2NjI2MzQsMzEuMTg1NzExMiAxNC4yNTU1MjA2LDM0LjEzODUxODIgTDE0LjEyNTE3MTUsMzQuNzcyNjY2NiBMMTQuMDY3NzIwNSwzNS4wNTIxNjYyIEwxNC4zNDc1ODY1LDM1LjEwNzgwNDkgTDE1LjY0Mjk5NzYsMzUuMzY1MzM4OCBMMTUuOTE4OTg2OCwzNS40MjAyMDY3IFogTTE3LjE1MTAwMDcsMTAuNDc3NjU5MiBMMTcuMDg5NTA3Nyw1Ljg2MTA4NzcyIEwyOC45MDg4NDcyLDUuODYxMDg3NzIgTDI4LjkwODg0NzIsMTAuNDc3NjU5MiBMMTcuMTUxMDAwNywxMC40Nzc2NTkyIFogTTU2LjM2MTIyNzMsMTIuNDE4ODgwMSBMNTYuNTUxODA5NiwxMi4yMTY5MzE3IEw1Ny40NDkwMTA4LDExLjI2NjIyMjUgTDU3LjY0NzY5MTYsMTEuMDU1NjkyNyBMNTcuNDMzMDYzMSwxMC44NjE0NDY5IEw0OS45MzI2MjQ3LDQuMDczMzAyOTUgTDQ5Ljc0MjM4OTUsNCBMNDEuOTA0Mzc0LDQgTDQxLjcxNDEyNzQsNC4wNzMzMTMyOSBMMzQuMjE0NTA4NCwxMC44NjE0NTcyIEwzNCwxMS4wNTU2MTU2IEwzNC4xOTg0ODMzLDExLjI2NjEyODUgTDM1LjA5NDg2NTIsMTIuMjE2ODM3NyBMMzUuMjg1NDMxNCwxMi40MTg5NTM2IEwzNS40OTEzODM1LDEyLjIzMjUzOTkgTDQyLjYxMTYzOCw1Ljg2MTA4NzcyIEw0OS4wMzU5MzI5LDUuODYxMDg3NzIgTDU2LjE1NTM2OCwxMi4yMzI1MjkgTDU2LjM2MTIyNzMsMTIuNDE4ODgwMSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YW5nbmluZy9EZXNrdG9wL3Nzci1qdWVqaW4tbmV4dC9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLZ0IsQUFHdUMsY0FDSCxXQUNDLFlBQ0csZUFDUyx3QkFDSSw0QkFDSix3QkFDNnRPLHF2T0FDenZPIiwiZmlsZSI6Ii9Vc2Vycy93YW5nbmluZy9EZXNrdG9wL3Nzci1qdWVqaW4tbmV4dC9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExvZ28gPSAoKSA9PiAoXG4gICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+PC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaUlITjBZVzVrWVd4dmJtVTlJbTV2SWo4K0RRbzhjM1puSUhkcFpIUm9QU0kyTkhCNElpQm9aV2xuYUhROUlqUXdjSGdpSUhacFpYZENiM2c5SWpBZ01DQTJOQ0EwTUNJZ2RtVnljMmx2YmowaU1TNHhJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklqNE5DaUFnSUNBOElTMHRJRWRsYm1WeVlYUnZjam9nYzJ0bGRHTm9kRzl2YkNBekxqY3VNU0FvTWpneU1UVXBJQzBnYUhSMGNEb3ZMM2QzZHk1aWIyaGxiV2xoYm1OdlpHbHVaeTVqYjIwdmMydGxkR05vSUMwdFBnMEtJQ0FnSUR4MGFYUnNaVDR3UlRZMk0wSkJRaTFDUTBJeExUUXlOa0l0T1VJMU5DMDVNVGxFUWprMk5Ea3hSalE4TDNScGRHeGxQZzBLSUNBZ0lEeGtaWE5qUGtOeVpXRjBaV1FnZDJsMGFDQnphMlYwWTJoMGIyOXNMand2WkdWell6NE5DaUFnSUNBOFpHVm1jejQ4TDJSbFpuTStEUW9nSUNBZ1BHY2dhV1E5SWxCaFoyVXRNU0lnYzNSeWIydGxQU0p1YjI1bElpQnpkSEp2YTJVdGQybGtkR2c5SWpFaUlHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0krRFFvZ0lDQWdJQ0FnSUR4bklHbGtQU0pxZFdWcWFXNWZZMmh5YjIxbFgyVjRkR1Z1YzJsdmJsOWtaWE5wWjI1bGNpSWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTFRJeUxqQXdNREF3TUN3Z0xURXlMakF3TURBd01Da2lJR1pwYkd3OUlpTXdNRFpEUmtZaVBnMEtJQ0FnSUNBZ0lDQWdJQ0FnUEdjZ2FXUTlJa2R5YjNWd0xUWWlJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RJeUxqQXdNREF3TUN3Z01USXVNREF3TURBd0tTSStEUW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVFV5TGpFeE1EYzFOamtzTXpRZ1REVTFMalF3TnpjNE5ERXNNelFnVERVMUxqWTVNVEk0TkRFc016UWdURFUxTGpZNU1USTROREVzTXpRdU1qZ3pOU0JNTlRVdU5qa3hNamcwTVN3ek5TNDFOemMxT0RjM0lFdzFOUzQyT1RFeU9EUXhMRE0xTGpnMk1UQTROemNnVERVMUxqUXdOemM0TkRFc016VXVPRFl4TURnM055Qk1NemN1TWpnek5Td3pOUzQ0TmpFd09EYzNJRXd6Tnl3ek5TNDROakV3T0RjM0lFd3pOeXd6TlM0MU56YzFPRGMzSUV3ek55d3pOQzR5T0RNMUlFd3pOeXd6TkNCTU16Y3VNamd6TlN3ek5DQk1OREF1TURBeU1EY3pMRE0wSUV3ek9DNHdORGd4T0RZeUxESXlMalU0TmpRNE9Ea2dURE00TERJeUxqTXdOVEF4TWpJZ1RETTRMakk0TVRneU1ERXNNakl1TWpVNE9EYzJOU0JNTXprdU5UZzFOREkwT0N3eU1pNHdORFUwTmpneklFd3pPUzQ0TmpNeE5qZ3lMREl5SUV3ek9TNDVNVEEyTmpBekxESXlMakkzTnpRd05EVWdURFF4TGpreE56VTROelVzTXpRZ1REUTFMRE0wSUV3ME5Td3hPUzQ0TmpFd09EYzNJRXd6Tmk0eU9ETTFMREU1TGpnMk1UQTROemNnVERNMkxERTVMamcyTVRBNE56Y2dURE0yTERFNUxqVTNOelU0TnpjZ1RETTJMREU0TGpJNE16VWdURE0yTERFNElFd3pOaTR5T0RNMUxERTRJRXcwTlN3eE9DQk1ORFVzTVRFdU9EWXhNRGczTnlCTU16a3VNamd6TlN3eE1TNDROakV3T0RjM0lFd3pPU3d4TVM0NE5qRXdPRGMzSUV3ek9Td3hNUzQxTnpjMU9EYzNJRXd6T1N3eE1DNHlPRE0xSUV3ek9Td3hNQ0JNTXprdU1qZ3pOU3d4TUNCTU5USXVPRFF6TVRFNU1pd3hNQ0JNTlRNdU1USTJOakU1TWl3eE1DQk1OVE11TVRJMk5qRTVNaXd4TUM0eU9ETTFJRXcxTXk0eE1qWTJNVGt5TERFeExqVTNOelU0TnpjZ1REVXpMakV5TmpZeE9USXNNVEV1T0RZeE1EZzNOeUJNTlRJdU9EUXpNVEU1TWl3eE1TNDROakV3T0RjM0lFdzBOaTQ0T0RnMk16QTNMREV4TGpnMk1UQTROemNnVERRMkxqZzRPRFl6TURjc01UZ2dURFUyTGpZM05qVTVOeXd4T0NCTU5UWXVPVFl3TURrM0xERTRJRXcxTmk0NU5qQXdPVGNzTVRndU1qZ3pOU0JNTlRZdU9UWXdNRGszTERFNUxqVTNOelU0TnpjZ1REVTJMamsyTURBNU55d3hPUzQ0TmpFd09EYzNJRXcxTmk0Mk56WTFPVGNzTVRrdU9EWXhNRGczTnlCTU5EWXVPRGc0TmpNd055d3hPUzQ0TmpFd09EYzNJRXcwTmk0NE9EZzJNekEzTERNMElFdzFNQzR4T1RVeU5qSTJMRE0wSUV3MU1pNHlNREUwTWpJNUxESXlMakkzTnpReU5URWdURFV5TGpJME9Ea3dNRFVzTWpJZ1REVXlMalV5TmpZMk1UUXNNakl1TURRMU5EY3hNaUJNTlRNdU9ETXdNalkyTVN3eU1pNHlOVGc0TnpreklFdzFOQzR4TVRJd05qZzFMREl5TGpNd05UQXhNakVnVERVMExqQTJNemt3TXpFc01qSXVOVGcyTkRjME1TQk1OVEl1TVRFd056VTJPU3d6TkNCYUlFMHlOUzQyTkRRMU9UTXhMRE16TGpNNU5EQXdNeUJNTWpVdU5qUTBOVGt6TVN3eU5DNHlPRE14T0RRMUlFd3lPUzQ1T0RVeU5ETTJMREkwTGpJNE16RTRORFVnVERNd0xqSTJPRGMwTXpZc01qUXVNamd6TVRnME5TQk1NekF1TWpZNE56UXpOaXd5TXk0NU9UazJPRFExSUV3ek1DNHlOamczTkRNMkxERTBMamN5TXpZMU1Ea2dURE13TGpJMk9EYzBNellzTVRRdU5EUXdNVFV3T1NCTU1qa3VPVGcxTWpRek5pd3hOQzQwTkRBeE5UQTVJRXd5T0M0Mk5qTTJNVE1zTVRRdU5EUXdNVFV3T1NCTU1qZ3VNemd3TVRFekxERTBMalEwTURFMU1Ea2dUREk0TGpNNE1ERXhNeXd4TkM0M01qTTJOVEE1SUV3eU9DNHpPREF4TVRNc01qSXVOREl5TURrMk9DQk1NalV1TmpRME5Ua3pNU3d5TWk0ME1qSXdPVFk0SUV3eU5TNDJORFExT1RNeExERTBMakUwTXpFNU5qTWdUREkxTGpZME5EVTVNekVzTVRNdU9EVTVOamsyTXlCTU1qVXVNell4TURrek1Td3hNeTQ0TlRrMk9UWXpJRXd5TkM0d016azBOakkwTERFekxqZzFPVFk1TmpNZ1RESXpMamMxTlRrMk1qUXNNVE11T0RVNU5qazJNeUJNTWpNdU56VTFPVFl5TkN3eE5DNHhORE14T1RZeklFd3lNeTQzTlRVNU5qSTBMREl5TGpReU1qQTVOamdnVERJeExqQTJNekl4TXpNc01qSXVOREl5TURrMk9DQk1NakV1TURZek1qRXpNeXd4TkM0M01qTTJOVEE1SUV3eU1TNHdOak15TVRNekxERTBMalEwTURFMU1Ea2dUREl3TGpjM09UY3hNek1zTVRRdU5EUXdNVFV3T1NCTU1Ua3VORFUzTWpZek1pd3hOQzQwTkRBeE5UQTVJRXd4T1M0eE56TTNOak15TERFMExqUTBNREUxTURrZ1RERTVMakUzTXpjMk16SXNNVFF1TnpJek5qVXdPU0JNTVRrdU1UY3pOell6TWl3eU15NDVPVGsyT0RRMUlFd3hPUzR4TnpNM05qTXlMREkwTGpJNE16RTRORFVnVERFNUxqUTFOekkyTXpJc01qUXVNamd6TVRnME5TQk1Nak11TnpVMU9UWXlOQ3d5TkM0eU9ETXhPRFExSUV3eU15NDNOVFU1TmpJMExETXpMak01TkRBd015Qk1NakV1TURZek1qRXpNeXd6TXk0ek9UUXdNRE1nVERJeExqQTJNekl4TXpNc01qVXVPREUzTlRBME55Qk1NakV1TURZek1qRXpNeXd5TlM0MU16UXdNRFEzSUV3eU1DNDNOemszTVRNekxESTFMalV6TkRBd05EY2dUREU1TGpRMU56STJNeklzTWpVdU5UTTBNREEwTnlCTU1Ua3VNVGN6TnpZek1pd3lOUzQxTXpRd01EUTNJRXd4T1M0eE56TTNOak15TERJMUxqZ3hOelV3TkRjZ1RERTVMakUzTXpjMk16SXNNelF1T1RjeE5Ua3dOeUJNTVRrdU1UY3pOell6TWl3ek5TNHlOVFV3T1RBM0lFd3hPUzQwTlRjeU5qTXlMRE0xTGpJMU5UQTVNRGNnVERJNUxqazROVEkwTXpZc016VXVNalUxTURrd055Qk1NekF1TWpZNE56UXpOaXd6TlM0eU5UVXdPVEEzSUV3ek1DNHlOamczTkRNMkxETTBMamszTVRVNU1EY2dURE13TGpJMk9EYzBNellzTWpVdU9ERTNOVEEwTnlCTU16QXVNalk0TnpRek5pd3lOUzQxTXpRd01EUTNJRXd5T1M0NU9EVXlORE0yTERJMUxqVXpOREF3TkRjZ1RESTRMalkyTXpZeE15d3lOUzQxTXpRd01EUTNJRXd5T0M0ek9EQXhNVE1zTWpVdU5UTTBNREEwTnlCTU1qZ3VNemd3TVRFekxESTFMamd4TnpVd05EY2dUREk0TGpNNE1ERXhNeXd6TXk0ek9UUXdNRE1nVERJMUxqWTBORFU1TXpFc016TXVNemswTURBeklGb2dUVGt1T0RjMU1EY3hORFFzTWpRdU1qZzBNemd4TVNCTU9DNDFNemsxTlRNek15d3lOUzQxT1RVd016TTNJRXc0TGpNME1UUTJOall4TERJMUxqYzRPVFF6TWpNZ1REZ3VNVFF5T1RBME5qVXNNalV1TlRrMU5URTVNU0JNTnk0eU1EY3hPVE0wTWl3eU5DNDJPREUzTVRVeElFdzNMREkwTGpRM09UTTNNallnVERjdU1qQTJOekV4TURRc01qUXVNamMyTlRNM015Qk1PUzQ0TnpVd056RTBOQ3d5TVM0Mk5UZ3lNRGMxSUV3NUxqZzNOVEEzTVRRMExERXdMamM1TmpFNU1URWdURGN1T0RJM05UWTRPVElzTVRBdU56azJNVGt4TVNCTU55NDFORFF3TmpnNU1pd3hNQzQzT1RZeE9URXhJRXczTGpVME5EQTJPRGt5TERFd0xqVXhNalk1TVRFZ1REY3VOVFEwTURZNE9USXNPUzR5TVRnMk1ETXpPU0JNTnk0MU5EUXdOamc1TWl3NExqa3pOVEV3TXpNNUlFdzNMamd5TnpVMk9Ea3lMRGd1T1RNMU1UQXpNemtnVERrdU9EYzFNRGN4TkRRc09DNDVNelV4TURNek9TQk1PUzQ0TnpVd056RTBOQ3cwTGpJNE16YzBNRFk1SUV3NUxqZzNOVEEzTVRRMExEUXVNREF3TWpRd05qa2dUREV3TGpFMU9EVTNNVFFzTkM0d01EQXlOREEyT1NCTU1URXVORGd4TURJeE5TdzBMakF3TURJME1EWTVJRXd4TVM0M05qUTFNakUxTERRdU1EQXdNalF3TmprZ1RERXhMamMyTkRVeU1UVXNOQzR5T0RNM05EQTJPU0JNTVRFdU56WTBOVEl4TlN3NExqa3pOVEV3TXpNNUlFd3hOQzR5TURjeE1qQXpMRGd1T1RNMU1UQXpNemtnVERFMExqUTVNRFl5TURNc09DNDVNelV4TURNek9TQk1NVFF1TkRrd05qSXdNeXc1TGpJeE9EWXdNek01SUV3eE5DNDBPVEEyTWpBekxERXdMalV4TWpZNU1URWdUREUwTGpRNU1EWXlNRE1zTVRBdU56azJNVGt4TVNCTU1UUXVNakEzTVRJd015d3hNQzQzT1RZeE9URXhJRXd4TVM0M05qUTFNakUxTERFd0xqYzVOakU1TVRFZ1RERXhMamMyTkRVeU1UVXNNVGt1T0RBME1UZ3pPU0JNTVRNdU16UTNNREE0Tnl3eE9DNHlOVEV6TmpjMklFd3hNeTQxTkRVeE9ESXNNVGd1TURVMk9URWdUREV6TGpjME16Y3pNamNzTVRndU1qVXdPVGd5TVNCTU1UUXVOamM0TmpJME5pd3hPUzR4TmpRM09EWXhJRXd4TkM0NE9EVTJNalE1TERFNUxqTTJOekV4TnpJZ1RERTBMalkzT1RBek1UY3NNVGt1TlRZNU9EWTBJRXd4TVM0M05qUTFNakUxTERJeUxqUXpNREV4SUV3eE1TNDNOalExTWpFMUxESTJMalExTURrd09UY2dRekV4TGpjMk5EVXlNVFVzTWpndU5UQXpNemt4TnlBeE1TNDBORFl3TmpBNUxETXdMalEyT1RBNU16a2dNVEF1T1RFeU1qUTBOaXd6TWk0eU9EUTVOalE0SUVNeE1DNDFPRFEyTWprNExETXpMak01T1RRd05EVWdNVEF1TWpVM016QXpMRE0wTGpJeE1EZ3dNVGtnTVRBdU1EQXhNRGs1Tml3ek5DNDNNek14TnprNUlFdzVMamN4TVRnMk5EZ3pMRE0xTGpNeE5EZ3pOelFnVERrdU5UZzNPREUxTlRFc016VXVOVFkwTXpBek15Qk1PUzR6TXpZeU1qYzJMRE0xTGpRME5EWXhOaklnVERndU1UUTRPVGN5TWpnc016UXVPRGM1T0RBMk5pQk1OeTQ0T0Rrek5URXpNeXd6TkM0M05UWXlPVGM1SUV3NExqQXhOalE0TnpBekxETTBMalE1T0RRek16Y2dURGd1TXpBek56ZzBOVFFzTXpNdU9URTFOekkxTWlCRE9DNHpORFV4TURVNE55d3pNeTQ0TXpJM09ERTRJRGd1TkRRd01USXhNRE1zTXpNdU5qRTVPREUxTXlBNExqVTFNVE00TURRc016TXVNelF4TlRrek1TQkRPQzQzTXpVNU1qYzFMRE15TGpnNE1ERXdNamtnT0M0NU1qQXpNRGt6TlN3ek1pNHpOVEl5TlRrNUlEa3VNRGt5TVRnME1Ea3NNekV1TnpZMk9URTBNaUJET1M0MU9ERTNNekUwTnl3ek1DNHdPVGsyT0RVM0lEa3VPRGMxTURjeE5EUXNNamd1TXpBME5Ua3lOeUE1TGpnM05UQTNNVFEwTERJMkxqUTFNRGt3T1RjZ1REa3VPRGMxTURjeE5EUXNNalF1TWpnME16Z3hNU0JhSUUweE5TNDVNVGc1T0RZNExETTFMalF5TURJd05qY2dUREUxTGprM05Ua3hORFlzTXpVdU1UUTBOak0xSUV3eE5pNHhNRGN3TVRJMUxETTBMalV4TURBeU5qWWdRekUyTGpnNU5USXlPRGtzTXpBdU5qazNNekUyT0NBeE55NHhPVEE0TnpZMExESXlMalF4T1RRMU5UZ2dNVGN1TVRVMk56UXdNaXd4TWk0ek16ZzNORFk1SUV3ek1DNDNPVGMwTnpjNExERXlMak16T0RjME5qa2dURE13TGpjNU56UTNOemdzTkNCTU1UVXVORFUyTlRZMU1pdzBJRXd4TlM0eE5qWTJOams0TERRZ1RERTFMakUzTXpFek5UY3NOQzR5T0RrNE1qTXlJRXd4TlM0eE9EYzRPRFF5TERRdU9UVXdPVEEzTURZZ1F6RTFMakl3TVRjM05UY3NOUzQxT0RFeE16TXlNU0F4TlM0eU1qUXpPVEEzTERZdU9UYzNOVEl6TmpRZ01UVXVNalF4TVRVd015dzRMalkxTlRVek1qRTJJRU14TlM0eU5qZzNOVEUxTERFeExqUXhPVEF3T0RZZ01UVXVNamMwTVRFMk15d3hOQzR5T0RNeE56QXpJREUxTGpJME9ERTFNVElzTVRjdU1UQXdOakU1TkNCRE1UVXVNVGMwTXpZeE1pd3lOUzR4TURjMU1UQTFJREUwTGpnMk5qSTJNelFzTXpFdU1UZzFOekV4TWlBeE5DNHlOVFUxTWpBMkxETTBMakV6T0RVeE9ESWdUREUwTGpFeU5URTNNVFVzTXpRdU56Y3lOalkyTmlCTU1UUXVNRFkzTnpJd05Td3pOUzR3TlRJeE5qWXlJRXd4TkM0ek5EYzFPRFkxTERNMUxqRXdOemd3TkRrZ1RERTFMalkwTWprNU56WXNNelV1TXpZMU16TTRPQ0JNTVRVdU9URTRPVGcyT0N3ek5TNDBNakF5TURZM0lGb2dUVEUzTGpFMU1UQXdNRGNzTVRBdU5EYzNOalU1TWlCTU1UY3VNRGc1TlRBM055dzFMamcyTVRBNE56Y3lJRXd5T0M0NU1EZzRORGN5TERVdU9EWXhNRGczTnpJZ1RESTRMamt3T0RnME56SXNNVEF1TkRjM05qVTVNaUJNTVRjdU1UVXhNREF3Tnl3eE1DNDBOemMyTlRreUlGb2dUVFUyTGpNMk1USXlOek1zTVRJdU5ERTRPRGd3TVNCTU5UWXVOVFV4T0RBNU5pd3hNaTR5TVRZNU16RTNJRXcxTnk0ME5Ea3dNVEE0TERFeExqSTJOakl5TWpVZ1REVTNMalkwTnpZNU1UWXNNVEV1TURVMU5qa3lOeUJNTlRjdU5ETXpNRFl6TVN3eE1DNDROakUwTkRZNUlFdzBPUzQ1TXpJMk1qUTNMRFF1TURjek16QXlPVFVnVERRNUxqYzBNak00T1RVc05DQk1OREV1T1RBME16YzBMRFFnVERReExqY3hOREV5TnpRc05DNHdOek16TVRNeU9TQk1NelF1TWpFME5UQTROQ3d4TUM0NE5qRTBOVGN5SUV3ek5Dd3hNUzR3TlRVMk1UVTJJRXd6TkM0eE9UZzBPRE16TERFeExqSTJOakV5T0RVZ1RETTFMakE1TkRnMk5USXNNVEl1TWpFMk9ETTNOeUJNTXpVdU1qZzFORE14TkN3eE1pNDBNVGc1TlRNMklFd3pOUzQwT1RFek9ETTFMREV5TGpJek1qVXpPVGtnVERReUxqWXhNVFl6T0N3MUxqZzJNVEE0TnpjeUlFdzBPUzR3TXpVNU16STVMRFV1T0RZeE1EZzNOeklnVERVMkxqRTFOVE0yT0N3eE1pNHlNekkxTWprZ1REVTJMak0yTVRJeU56TXNNVEl1TkRFNE9EZ3dNU0JhSWlCcFpEMGlRMjl0WW1sdVpXUXRVMmhoY0dVaVBqd3ZjR0YwYUQ0TkNpQWdJQ0FnSUNBZ0lDQWdJRHd2Wno0TkNpQWdJQ0FnSUNBZ1BDOW5QZzBLSUNBZ0lEd3ZaejROQ2p3dmMzWm5QZz09KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbik7XG5cbmNvbnN0IFNlYXJjaElucHV0ID0gKCkgPT4gKFxuICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwi5o6Y6YeR5pCc57Si77yM5aaC77yaSmF2Ye+8jOmYv+mHjOW3tOW3tO+8jOWJjeerr+mdouivlVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntcbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC5zZWFyY2gtaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMi4ycmVtIDAgMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc2VhcmNoLWlucHV0IGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlZGY0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYFxuICAgICAgICB9PC9zdHlsZT5cbiAgICA8Lz5cbik7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZCYXJcIj5cbiAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgIC5uYXZCYXIge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgMi41cmVtIDAgMS44cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQuNXJlbVwiO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=/Users/wangning/Desktop/ssr-juejin-next/components/Header.js */"));

const SearchInput = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
  className: "jsx-706859222" + " " + "search-input",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("input", {
  type: "search",
  placeholder: "\u6398\u91D1\u641C\u7D22\uFF0C\u5982\uFF1AJava\uFF0C\u963F\u91CC\u5DF4\u5DF4\uFF0C\u524D\u7AEF\u9762\u8BD5",
  className: "jsx-706859222",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "706859222",
  __self: undefined
}, ".search-input.jsx-706859222{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;margin:0 2.2rem 0 1rem;height:100%;padding:1rem 0;}.search-input.jsx-706859222 input.jsx-706859222{width:50%;font-size:1rem;line-height:1.5;padding:.5rem;border:1px solid #e6edf4;border-radius:2px;background-color:#f1f5fa;box-sizing:content-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YW5nbmluZy9EZXNrdG9wL3Nzci1qdWVqaW4tbmV4dC9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QlksQUFJdUMsQUFNSixVQUNLLGVBQ0MsZ0JBQ0YsYUFSUyxDQVNFLHNCQVJiLEdBU00sU0FSSCxTQVNVLE1BUjdCLG1CQVMyQix1QkFDM0IiLCJmaWxlIjoiL1VzZXJzL3dhbmduaW5nL0Rlc2t0b3Avc3NyLWp1ZWppbi1uZXh0L2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTG9nbyA9ICgpID0+IChcbiAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj48L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpSUhOMFlXNWtZV3h2Ym1VOUltNXZJajgrRFFvOGMzWm5JSGRwWkhSb1BTSTJOSEI0SWlCb1pXbG5hSFE5SWpRd2NIZ2lJSFpwWlhkQ2IzZzlJakFnTUNBMk5DQTBNQ0lnZG1WeWMybHZiajBpTVM0eElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWo0TkNpQWdJQ0E4SVMwdElFZGxibVZ5WVhSdmNqb2djMnRsZEdOb2RHOXZiQ0F6TGpjdU1TQW9Namd5TVRVcElDMGdhSFIwY0RvdkwzZDNkeTVpYjJobGJXbGhibU52WkdsdVp5NWpiMjB2YzJ0bGRHTm9JQzB0UGcwS0lDQWdJRHgwYVhSc1pUNHdSVFkyTTBKQlFpMUNRMEl4TFRReU5rSXRPVUkxTkMwNU1UbEVRamsyTkRreFJqUThMM1JwZEd4bFBnMEtJQ0FnSUR4a1pYTmpQa055WldGMFpXUWdkMmwwYUNCemEyVjBZMmgwYjI5c0xqd3ZaR1Z6WXo0TkNpQWdJQ0E4WkdWbWN6NDhMMlJsWm5NK0RRb2dJQ0FnUEdjZ2FXUTlJbEJoWjJVdE1TSWdjM1J5YjJ0bFBTSnViMjVsSWlCemRISnZhMlV0ZDJsa2RHZzlJakVpSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSStEUW9nSUNBZ0lDQWdJRHhuSUdsa1BTSnFkV1ZxYVc1ZlkyaHliMjFsWDJWNGRHVnVjMmx2Ymw5a1pYTnBaMjVsY2lJZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9MVEl5TGpBd01EQXdNQ3dnTFRFeUxqQXdNREF3TUNraUlHWnBiR3c5SWlNd01EWkRSa1lpUGcwS0lDQWdJQ0FnSUNBZ0lDQWdQR2NnYVdROUlrZHliM1Z3TFRZaUlIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLREl5TGpBd01EQXdNQ3dnTVRJdU1EQXdNREF3S1NJK0RRb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRUVXlMakV4TURjMU5qa3NNelFnVERVMUxqUXdOemM0TkRFc016UWdURFUxTGpZNU1USTROREVzTXpRZ1REVTFMalk1TVRJNE5ERXNNelF1TWpnek5TQk1OVFV1TmpreE1qZzBNU3d6TlM0MU56YzFPRGMzSUV3MU5TNDJPVEV5T0RReExETTFMamcyTVRBNE56Y2dURFUxTGpRd056YzROREVzTXpVdU9EWXhNRGczTnlCTU16Y3VNamd6TlN3ek5TNDROakV3T0RjM0lFd3pOeXd6TlM0NE5qRXdPRGMzSUV3ek55d3pOUzQxTnpjMU9EYzNJRXd6Tnl3ek5DNHlPRE0xSUV3ek55d3pOQ0JNTXpjdU1qZ3pOU3d6TkNCTU5EQXVNREF5TURjekxETTBJRXd6T0M0d05EZ3hPRFl5TERJeUxqVTROalE0T0RrZ1RETTRMREl5TGpNd05UQXhNaklnVERNNExqSTRNVGd5TURFc01qSXVNalU0T0RjMk5TQk1Nemt1TlRnMU5ESTBPQ3d5TWk0d05EVTBOamd6SUV3ek9TNDROak14TmpneUxESXlJRXd6T1M0NU1UQTJOakF6TERJeUxqSTNOelF3TkRVZ1REUXhMamt4TnpVNE56VXNNelFnVERRMUxETTBJRXcwTlN3eE9TNDROakV3T0RjM0lFd3pOaTR5T0RNMUxERTVMamcyTVRBNE56Y2dURE0yTERFNUxqZzJNVEE0TnpjZ1RETTJMREU1TGpVM056VTROemNnVERNMkxERTRMakk0TXpVZ1RETTJMREU0SUV3ek5pNHlPRE0xTERFNElFdzBOU3d4T0NCTU5EVXNNVEV1T0RZeE1EZzNOeUJNTXprdU1qZ3pOU3d4TVM0NE5qRXdPRGMzSUV3ek9Td3hNUzQ0TmpFd09EYzNJRXd6T1N3eE1TNDFOemMxT0RjM0lFd3pPU3d4TUM0eU9ETTFJRXd6T1N3eE1DQk1Nemt1TWpnek5Td3hNQ0JNTlRJdU9EUXpNVEU1TWl3eE1DQk1OVE11TVRJMk5qRTVNaXd4TUNCTU5UTXVNVEkyTmpFNU1pd3hNQzR5T0RNMUlFdzFNeTR4TWpZMk1Ua3lMREV4TGpVM056VTROemNnVERVekxqRXlOall4T1RJc01URXVPRFl4TURnM055Qk1OVEl1T0RRek1URTVNaXd4TVM0NE5qRXdPRGMzSUV3ME5pNDRPRGcyTXpBM0xERXhMamcyTVRBNE56Y2dURFEyTGpnNE9EWXpNRGNzTVRnZ1REVTJMalkzTmpVNU55d3hPQ0JNTlRZdU9UWXdNRGszTERFNElFdzFOaTQ1TmpBd09UY3NNVGd1TWpnek5TQk1OVFl1T1RZd01EazNMREU1TGpVM056VTROemNnVERVMkxqazJNREE1Tnl3eE9TNDROakV3T0RjM0lFdzFOaTQyTnpZMU9UY3NNVGt1T0RZeE1EZzNOeUJNTkRZdU9EZzROak13Tnl3eE9TNDROakV3T0RjM0lFdzBOaTQ0T0RnMk16QTNMRE0wSUV3MU1DNHhPVFV5TmpJMkxETTBJRXcxTWk0eU1ERTBNakk1TERJeUxqSTNOelF5TlRFZ1REVXlMakkwT0Rrd01EVXNNaklnVERVeUxqVXlOalkyTVRRc01qSXVNRFExTkRjeE1pQk1OVE11T0RNd01qWTJNU3d5TWk0eU5UZzROemt6SUV3MU5DNHhNVEl3TmpnMUxESXlMak13TlRBeE1qRWdURFUwTGpBMk16a3dNekVzTWpJdU5UZzJORGMwTVNCTU5USXVNVEV3TnpVMk9Td3pOQ0JhSUUweU5TNDJORFExT1RNeExETXpMak01TkRBd015Qk1NalV1TmpRME5Ua3pNU3d5TkM0eU9ETXhPRFExSUV3eU9TNDVPRFV5TkRNMkxESTBMakk0TXpFNE5EVWdURE13TGpJMk9EYzBNellzTWpRdU1qZ3pNVGcwTlNCTU16QXVNalk0TnpRek5pd3lNeTQ1T1RrMk9EUTFJRXd6TUM0eU5qZzNORE0yTERFMExqY3lNelkxTURrZ1RETXdMakkyT0RjME16WXNNVFF1TkRRd01UVXdPU0JNTWprdU9UZzFNalF6Tml3eE5DNDBOREF4TlRBNUlFd3lPQzQyTmpNMk1UTXNNVFF1TkRRd01UVXdPU0JNTWpndU16Z3dNVEV6TERFMExqUTBNREUxTURrZ1RESTRMak00TURFeE15d3hOQzQzTWpNMk5UQTVJRXd5T0M0ek9EQXhNVE1zTWpJdU5ESXlNRGsyT0NCTU1qVXVOalEwTlRrek1Td3lNaTQwTWpJd09UWTRJRXd5TlM0Mk5EUTFPVE14TERFMExqRTBNekU1TmpNZ1RESTFMalkwTkRVNU16RXNNVE11T0RVNU5qazJNeUJNTWpVdU16WXhNRGt6TVN3eE15NDROVGsyT1RZeklFd3lOQzR3TXprME5qSTBMREV6TGpnMU9UWTVOak1nVERJekxqYzFOVGsyTWpRc01UTXVPRFU1TmprMk15Qk1Nak11TnpVMU9UWXlOQ3d4TkM0eE5ETXhPVFl6SUV3eU15NDNOVFU1TmpJMExESXlMalF5TWpBNU5qZ2dUREl4TGpBMk16SXhNek1zTWpJdU5ESXlNRGsyT0NCTU1qRXVNRFl6TWpFek15d3hOQzQzTWpNMk5UQTVJRXd5TVM0d05qTXlNVE16TERFMExqUTBNREUxTURrZ1RESXdMamMzT1RjeE16TXNNVFF1TkRRd01UVXdPU0JNTVRrdU5EVTNNall6TWl3eE5DNDBOREF4TlRBNUlFd3hPUzR4TnpNM05qTXlMREUwTGpRME1ERTFNRGtnVERFNUxqRTNNemMyTXpJc01UUXVOekl6TmpVd09TQk1NVGt1TVRjek56WXpNaXd5TXk0NU9UazJPRFExSUV3eE9TNHhOek0zTmpNeUxESTBMakk0TXpFNE5EVWdUREU1TGpRMU56STJNeklzTWpRdU1qZ3pNVGcwTlNCTU1qTXVOelUxT1RZeU5Dd3lOQzR5T0RNeE9EUTFJRXd5TXk0M05UVTVOakkwTERNekxqTTVOREF3TXlCTU1qRXVNRFl6TWpFek15d3pNeTR6T1RRd01ETWdUREl4TGpBMk16SXhNek1zTWpVdU9ERTNOVEEwTnlCTU1qRXVNRFl6TWpFek15d3lOUzQxTXpRd01EUTNJRXd5TUM0M056azNNVE16TERJMUxqVXpOREF3TkRjZ1RERTVMalExTnpJMk16SXNNalV1TlRNME1EQTBOeUJNTVRrdU1UY3pOell6TWl3eU5TNDFNelF3TURRM0lFd3hPUzR4TnpNM05qTXlMREkxTGpneE56VXdORGNnVERFNUxqRTNNemMyTXpJc016UXVPVGN4TlRrd055Qk1NVGt1TVRjek56WXpNaXd6TlM0eU5UVXdPVEEzSUV3eE9TNDBOVGN5TmpNeUxETTFMakkxTlRBNU1EY2dUREk1TGprNE5USTBNellzTXpVdU1qVTFNRGt3TnlCTU16QXVNalk0TnpRek5pd3pOUzR5TlRVd09UQTNJRXd6TUM0eU5qZzNORE0yTERNMExqazNNVFU1TURjZ1RETXdMakkyT0RjME16WXNNalV1T0RFM05UQTBOeUJNTXpBdU1qWTROelF6Tml3eU5TNDFNelF3TURRM0lFd3lPUzQ1T0RVeU5ETTJMREkxTGpVek5EQXdORGNnVERJNExqWTJNell4TXl3eU5TNDFNelF3TURRM0lFd3lPQzR6T0RBeE1UTXNNalV1TlRNME1EQTBOeUJNTWpndU16Z3dNVEV6TERJMUxqZ3hOelV3TkRjZ1RESTRMak00TURFeE15d3pNeTR6T1RRd01ETWdUREkxTGpZME5EVTVNekVzTXpNdU16azBNREF6SUZvZ1RUa3VPRGMxTURjeE5EUXNNalF1TWpnME16Z3hNU0JNT0M0MU16azFOVE16TXl3eU5TNDFPVFV3TXpNM0lFdzRMak0wTVRRMk5qWXhMREkxTGpjNE9UUXpNak1nVERndU1UUXlPVEEwTmpVc01qVXVOVGsxTlRFNU1TQk1OeTR5TURjeE9UTTBNaXd5TkM0Mk9ERTNNVFV4SUV3M0xESTBMalEzT1RNM01qWWdURGN1TWpBMk56RXhNRFFzTWpRdU1qYzJOVE0zTXlCTU9TNDROelV3TnpFME5Dd3lNUzQyTlRneU1EYzFJRXc1TGpnM05UQTNNVFEwTERFd0xqYzVOakU1TVRFZ1REY3VPREkzTlRZNE9USXNNVEF1TnprMk1Ua3hNU0JNTnk0MU5EUXdOamc1TWl3eE1DNDNPVFl4T1RFeElFdzNMalUwTkRBMk9Ea3lMREV3TGpVeE1qWTVNVEVnVERjdU5UUTBNRFk0T1RJc09TNHlNVGcyTURNek9TQk1OeTQxTkRRd05qZzVNaXc0TGprek5URXdNek01SUV3M0xqZ3lOelUyT0RreUxEZ3VPVE0xTVRBek16a2dURGt1T0RjMU1EY3hORFFzT0M0NU16VXhNRE16T1NCTU9TNDROelV3TnpFME5DdzBMakk0TXpjME1EWTVJRXc1TGpnM05UQTNNVFEwTERRdU1EQXdNalF3TmprZ1RERXdMakUxT0RVM01UUXNOQzR3TURBeU5EQTJPU0JNTVRFdU5EZ3hNREl4TlN3MExqQXdNREkwTURZNUlFd3hNUzQzTmpRMU1qRTFMRFF1TURBd01qUXdOamtnVERFeExqYzJORFV5TVRVc05DNHlPRE0zTkRBMk9TQk1NVEV1TnpZME5USXhOU3c0TGprek5URXdNek01SUV3eE5DNHlNRGN4TWpBekxEZ3VPVE0xTVRBek16a2dUREUwTGpRNU1EWXlNRE1zT0M0NU16VXhNRE16T1NCTU1UUXVORGt3TmpJd015dzVMakl4T0RZd016TTVJRXd4TkM0ME9UQTJNakF6TERFd0xqVXhNalk1TVRFZ1RERTBMalE1TURZeU1ETXNNVEF1TnprMk1Ua3hNU0JNTVRRdU1qQTNNVEl3TXl3eE1DNDNPVFl4T1RFeElFd3hNUzQzTmpRMU1qRTFMREV3TGpjNU5qRTVNVEVnVERFeExqYzJORFV5TVRVc01Ua3VPREEwTVRnek9TQk1NVE11TXpRM01EQTROeXd4T0M0eU5URXpOamMySUV3eE15NDFORFV4T0RJc01UZ3VNRFUyT1RFZ1RERXpMamMwTXpjek1qY3NNVGd1TWpVd09UZ3lNU0JNTVRRdU5qYzROakkwTml3eE9TNHhOalEzT0RZeElFd3hOQzQ0T0RVMk1qUTVMREU1TGpNMk56RXhOeklnVERFMExqWTNPVEF6TVRjc01Ua3VOVFk1T0RZMElFd3hNUzQzTmpRMU1qRTFMREl5TGpRek1ERXhJRXd4TVM0M05qUTFNakUxTERJMkxqUTFNRGt3T1RjZ1F6RXhMamMyTkRVeU1UVXNNamd1TlRBek16a3hOeUF4TVM0ME5EWXdOakE1TERNd0xqUTJPVEE1TXprZ01UQXVPVEV5TWpRME5pd3pNaTR5T0RRNU5qUTRJRU14TUM0MU9EUTJNams0TERNekxqTTVPVFF3TkRVZ01UQXVNalUzTXpBekxETTBMakl4TURnd01Ua2dNVEF1TURBeE1EazVOaXd6TkM0M016TXhOems1SUV3NUxqY3hNVGcyTkRnekxETTFMak14TkRnek56UWdURGt1TlRnM09ERTFOVEVzTXpVdU5UWTBNekF6TXlCTU9TNHpNell5TWpjMkxETTFMalEwTkRZeE5qSWdURGd1TVRRNE9UY3lNamdzTXpRdU9EYzVPREEyTmlCTU55NDRPRGt6TlRFek15d3pOQzQzTlRZeU9UYzVJRXc0TGpBeE5qUTROekF6TERNMExqUTVPRFF6TXpjZ1REZ3VNekF6TnpnME5UUXNNek11T1RFMU56STFNaUJET0M0ek5EVXhNRFU0Tnl3ek15NDRNekkzT0RFNElEZ3VORFF3TVRJeE1ETXNNek11TmpFNU9ERTFNeUE0TGpVMU1UTTRNRFFzTXpNdU16UXhOVGt6TVNCRE9DNDNNelU1TWpjMUxETXlMamc0TURFd01qa2dPQzQ1TWpBek1Ea3pOU3d6TWk0ek5USXlOVGs1SURrdU1Ea3lNVGcwTURrc016RXVOelkyT1RFME1pQkRPUzQxT0RFM016RTBOeXd6TUM0d09UazJPRFUzSURrdU9EYzFNRGN4TkRRc01qZ3VNekEwTlRreU55QTVMamczTlRBM01UUTBMREkyTGpRMU1Ea3dPVGNnVERrdU9EYzFNRGN4TkRRc01qUXVNamcwTXpneE1TQmFJRTB4TlM0NU1UZzVPRFk0TERNMUxqUXlNREl3TmpjZ1RERTFMamszTlRreE5EWXNNelV1TVRRME5qTTFJRXd4Tmk0eE1EY3dNVEkxTERNMExqVXhNREF5TmpZZ1F6RTJMamc1TlRJeU9Ea3NNekF1TmprM016RTJPQ0F4Tnk0eE9UQTROelkwTERJeUxqUXhPVFExTlRnZ01UY3VNVFUyTnpRd01pd3hNaTR6TXpnM05EWTVJRXd6TUM0M09UYzBOemM0TERFeUxqTXpPRGMwTmprZ1RETXdMamM1TnpRM056Z3NOQ0JNTVRVdU5EVTJOVFkxTWl3MElFd3hOUzR4TmpZMk5qazRMRFFnVERFMUxqRTNNekV6TlRjc05DNHlPRGs0TWpNeUlFd3hOUzR4T0RjNE9EUXlMRFF1T1RVd09UQTNNRFlnUXpFMUxqSXdNVGMzTlRjc05TNDFPREV4TXpNeU1TQXhOUzR5TWpRek9UQTNMRFl1T1RjM05USXpOalFnTVRVdU1qUXhNVFV3TXl3NExqWTFOVFV6TWpFMklFTXhOUzR5TmpnM05URTFMREV4TGpReE9UQXdPRFlnTVRVdU1qYzBNVEUyTXl3eE5DNHlPRE14TnpBeklERTFMakkwT0RFMU1USXNNVGN1TVRBd05qRTVOQ0JETVRVdU1UYzBNell4TWl3eU5TNHhNRGMxTVRBMUlERTBMamcyTmpJMk16UXNNekV1TVRnMU56RXhNaUF4TkM0eU5UVTFNakEyTERNMExqRXpPRFV4T0RJZ1RERTBMakV5TlRFM01UVXNNelF1TnpjeU5qWTJOaUJNTVRRdU1EWTNOekl3TlN3ek5TNHdOVEl4TmpZeUlFd3hOQzR6TkRjMU9EWTFMRE0xTGpFd056Z3dORGtnVERFMUxqWTBNams1TnpZc016VXVNelkxTXpNNE9DQk1NVFV1T1RFNE9UZzJPQ3d6TlM0ME1qQXlNRFkzSUZvZ1RURTNMakUxTVRBd01EY3NNVEF1TkRjM05qVTVNaUJNTVRjdU1EZzVOVEEzTnl3MUxqZzJNVEE0TnpjeUlFd3lPQzQ1TURnNE5EY3lMRFV1T0RZeE1EZzNOeklnVERJNExqa3dPRGcwTnpJc01UQXVORGMzTmpVNU1pQk1NVGN1TVRVeE1EQXdOeXd4TUM0ME56YzJOVGt5SUZvZ1RUVTJMak0yTVRJeU56TXNNVEl1TkRFNE9EZ3dNU0JNTlRZdU5UVXhPREE1Tml3eE1pNHlNVFk1TXpFM0lFdzFOeTQwTkRrd01UQTRMREV4TGpJMk5qSXlNalVnVERVM0xqWTBOelk1TVRZc01URXVNRFUxTmpreU55Qk1OVGN1TkRNek1EWXpNU3d4TUM0NE5qRTBORFk1SUV3ME9TNDVNekkyTWpRM0xEUXVNRGN6TXpBeU9UVWdURFE1TGpjME1qTTRPVFVzTkNCTU5ERXVPVEEwTXpjMExEUWdURFF4TGpjeE5ERXlOelFzTkM0d056TXpNVE15T1NCTU16UXVNakUwTlRBNE5Dd3hNQzQ0TmpFME5UY3lJRXd6TkN3eE1TNHdOVFUyTVRVMklFd3pOQzR4T1RnME9ETXpMREV4TGpJMk5qRXlPRFVnVERNMUxqQTVORGcyTlRJc01USXVNakUyT0RNM055Qk1NelV1TWpnMU5ETXhOQ3d4TWk0ME1UZzVOVE0ySUV3ek5TNDBPVEV6T0RNMUxERXlMakl6TWpVek9Ua2dURFF5TGpZeE1UWXpPQ3cxTGpnMk1UQTROemN5SUV3ME9TNHdNelU1TXpJNUxEVXVPRFl4TURnM056SWdURFUyTGpFMU5UTTJPQ3d4TWk0eU16STFNamtnVERVMkxqTTJNVEl5TnpNc01USXVOREU0T0Rnd01TQmFJaUJwWkQwaVEyOXRZbWx1WldRdFUyaGhjR1VpUGp3dmNHRjBhRDROQ2lBZ0lDQWdJQ0FnSUNBZ0lEd3ZaejROQ2lBZ0lDQWdJQ0FnUEM5blBnMEtJQ0FnSUR3dlp6NE5Dand2YzNablBnPT0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvPlxuKTtcblxuY29uc3QgU2VhcmNoSW5wdXQgPSAoKSA9PiAoXG4gICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtaW5wdXRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCLmjpjph5HmkJzntKLvvIzlpoLvvJpKYXZh77yM6Zi/6YeM5be05be077yM5YmN56uv6Z2i6K+VXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e1xuICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyLjJyZW0gMCAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zZWFyY2gtaW5wdXQgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmVkZjQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWZhO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgXG4gICAgICAgIH08L3N0eWxlPlxuICAgIDwvPlxuKTtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdkJhclwiPlxuICAgICAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICAgICAgPFNlYXJjaElucHV0IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgLm5hdkJhciB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCAyLjVyZW0gMCAxLjhyZW1cIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNC41cmVtXCI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=/Users/wangning/Desktop/ssr-juejin-next/components/Header.js */"));

const Header = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1555450279" + " " + "navBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), __jsx(SearchInput, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1555450279",
    __self: undefined
  }, ".navBar{position:\"relative\", padding:\"0 2.5rem 0 1.8rem\" height:\"4.5rem\";background-color:#fff;z-index:500;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YW5nbmluZy9EZXNrdG9wL3Nzci1qdWVqaW4tbmV4dC9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRCtCLEFBS3FDLGlFQUNNLHNCQUNWLFlBQ0MsMEVBQ00sNkZBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy93YW5nbmluZy9EZXNrdG9wL3Nzci1qdWVqaW4tbmV4dC9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExvZ28gPSAoKSA9PiAoXG4gICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+PC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaUlITjBZVzVrWVd4dmJtVTlJbTV2SWo4K0RRbzhjM1puSUhkcFpIUm9QU0kyTkhCNElpQm9aV2xuYUhROUlqUXdjSGdpSUhacFpYZENiM2c5SWpBZ01DQTJOQ0EwTUNJZ2RtVnljMmx2YmowaU1TNHhJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklqNE5DaUFnSUNBOElTMHRJRWRsYm1WeVlYUnZjam9nYzJ0bGRHTm9kRzl2YkNBekxqY3VNU0FvTWpneU1UVXBJQzBnYUhSMGNEb3ZMM2QzZHk1aWIyaGxiV2xoYm1OdlpHbHVaeTVqYjIwdmMydGxkR05vSUMwdFBnMEtJQ0FnSUR4MGFYUnNaVDR3UlRZMk0wSkJRaTFDUTBJeExUUXlOa0l0T1VJMU5DMDVNVGxFUWprMk5Ea3hSalE4TDNScGRHeGxQZzBLSUNBZ0lEeGtaWE5qUGtOeVpXRjBaV1FnZDJsMGFDQnphMlYwWTJoMGIyOXNMand2WkdWell6NE5DaUFnSUNBOFpHVm1jejQ4TDJSbFpuTStEUW9nSUNBZ1BHY2dhV1E5SWxCaFoyVXRNU0lnYzNSeWIydGxQU0p1YjI1bElpQnpkSEp2YTJVdGQybGtkR2c5SWpFaUlHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0krRFFvZ0lDQWdJQ0FnSUR4bklHbGtQU0pxZFdWcWFXNWZZMmh5YjIxbFgyVjRkR1Z1YzJsdmJsOWtaWE5wWjI1bGNpSWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTFRJeUxqQXdNREF3TUN3Z0xURXlMakF3TURBd01Da2lJR1pwYkd3OUlpTXdNRFpEUmtZaVBnMEtJQ0FnSUNBZ0lDQWdJQ0FnUEdjZ2FXUTlJa2R5YjNWd0xUWWlJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RJeUxqQXdNREF3TUN3Z01USXVNREF3TURBd0tTSStEUW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVFV5TGpFeE1EYzFOamtzTXpRZ1REVTFMalF3TnpjNE5ERXNNelFnVERVMUxqWTVNVEk0TkRFc016UWdURFUxTGpZNU1USTROREVzTXpRdU1qZ3pOU0JNTlRVdU5qa3hNamcwTVN3ek5TNDFOemMxT0RjM0lFdzFOUzQyT1RFeU9EUXhMRE0xTGpnMk1UQTROemNnVERVMUxqUXdOemM0TkRFc016VXVPRFl4TURnM055Qk1NemN1TWpnek5Td3pOUzQ0TmpFd09EYzNJRXd6Tnl3ek5TNDROakV3T0RjM0lFd3pOeXd6TlM0MU56YzFPRGMzSUV3ek55d3pOQzR5T0RNMUlFd3pOeXd6TkNCTU16Y3VNamd6TlN3ek5DQk1OREF1TURBeU1EY3pMRE0wSUV3ek9DNHdORGd4T0RZeUxESXlMalU0TmpRNE9Ea2dURE00TERJeUxqTXdOVEF4TWpJZ1RETTRMakk0TVRneU1ERXNNakl1TWpVNE9EYzJOU0JNTXprdU5UZzFOREkwT0N3eU1pNHdORFUwTmpneklFd3pPUzQ0TmpNeE5qZ3lMREl5SUV3ek9TNDVNVEEyTmpBekxESXlMakkzTnpRd05EVWdURFF4TGpreE56VTROelVzTXpRZ1REUTFMRE0wSUV3ME5Td3hPUzQ0TmpFd09EYzNJRXd6Tmk0eU9ETTFMREU1TGpnMk1UQTROemNnVERNMkxERTVMamcyTVRBNE56Y2dURE0yTERFNUxqVTNOelU0TnpjZ1RETTJMREU0TGpJNE16VWdURE0yTERFNElFd3pOaTR5T0RNMUxERTRJRXcwTlN3eE9DQk1ORFVzTVRFdU9EWXhNRGczTnlCTU16a3VNamd6TlN3eE1TNDROakV3T0RjM0lFd3pPU3d4TVM0NE5qRXdPRGMzSUV3ek9Td3hNUzQxTnpjMU9EYzNJRXd6T1N3eE1DNHlPRE0xSUV3ek9Td3hNQ0JNTXprdU1qZ3pOU3d4TUNCTU5USXVPRFF6TVRFNU1pd3hNQ0JNTlRNdU1USTJOakU1TWl3eE1DQk1OVE11TVRJMk5qRTVNaXd4TUM0eU9ETTFJRXcxTXk0eE1qWTJNVGt5TERFeExqVTNOelU0TnpjZ1REVXpMakV5TmpZeE9USXNNVEV1T0RZeE1EZzNOeUJNTlRJdU9EUXpNVEU1TWl3eE1TNDROakV3T0RjM0lFdzBOaTQ0T0RnMk16QTNMREV4TGpnMk1UQTROemNnVERRMkxqZzRPRFl6TURjc01UZ2dURFUyTGpZM05qVTVOeXd4T0NCTU5UWXVPVFl3TURrM0xERTRJRXcxTmk0NU5qQXdPVGNzTVRndU1qZ3pOU0JNTlRZdU9UWXdNRGszTERFNUxqVTNOelU0TnpjZ1REVTJMamsyTURBNU55d3hPUzQ0TmpFd09EYzNJRXcxTmk0Mk56WTFPVGNzTVRrdU9EWXhNRGczTnlCTU5EWXVPRGc0TmpNd055d3hPUzQ0TmpFd09EYzNJRXcwTmk0NE9EZzJNekEzTERNMElFdzFNQzR4T1RVeU5qSTJMRE0wSUV3MU1pNHlNREUwTWpJNUxESXlMakkzTnpReU5URWdURFV5TGpJME9Ea3dNRFVzTWpJZ1REVXlMalV5TmpZMk1UUXNNakl1TURRMU5EY3hNaUJNTlRNdU9ETXdNalkyTVN3eU1pNHlOVGc0TnpreklFdzFOQzR4TVRJd05qZzFMREl5TGpNd05UQXhNakVnVERVMExqQTJNemt3TXpFc01qSXVOVGcyTkRjME1TQk1OVEl1TVRFd056VTJPU3d6TkNCYUlFMHlOUzQyTkRRMU9UTXhMRE16TGpNNU5EQXdNeUJNTWpVdU5qUTBOVGt6TVN3eU5DNHlPRE14T0RRMUlFd3lPUzQ1T0RVeU5ETTJMREkwTGpJNE16RTRORFVnVERNd0xqSTJPRGMwTXpZc01qUXVNamd6TVRnME5TQk1NekF1TWpZNE56UXpOaXd5TXk0NU9UazJPRFExSUV3ek1DNHlOamczTkRNMkxERTBMamN5TXpZMU1Ea2dURE13TGpJMk9EYzBNellzTVRRdU5EUXdNVFV3T1NCTU1qa3VPVGcxTWpRek5pd3hOQzQwTkRBeE5UQTVJRXd5T0M0Mk5qTTJNVE1zTVRRdU5EUXdNVFV3T1NCTU1qZ3VNemd3TVRFekxERTBMalEwTURFMU1Ea2dUREk0TGpNNE1ERXhNeXd4TkM0M01qTTJOVEE1SUV3eU9DNHpPREF4TVRNc01qSXVOREl5TURrMk9DQk1NalV1TmpRME5Ua3pNU3d5TWk0ME1qSXdPVFk0SUV3eU5TNDJORFExT1RNeExERTBMakUwTXpFNU5qTWdUREkxTGpZME5EVTVNekVzTVRNdU9EVTVOamsyTXlCTU1qVXVNell4TURrek1Td3hNeTQ0TlRrMk9UWXpJRXd5TkM0d016azBOakkwTERFekxqZzFPVFk1TmpNZ1RESXpMamMxTlRrMk1qUXNNVE11T0RVNU5qazJNeUJNTWpNdU56VTFPVFl5TkN3eE5DNHhORE14T1RZeklFd3lNeTQzTlRVNU5qSTBMREl5TGpReU1qQTVOamdnVERJeExqQTJNekl4TXpNc01qSXVOREl5TURrMk9DQk1NakV1TURZek1qRXpNeXd4TkM0M01qTTJOVEE1SUV3eU1TNHdOak15TVRNekxERTBMalEwTURFMU1Ea2dUREl3TGpjM09UY3hNek1zTVRRdU5EUXdNVFV3T1NCTU1Ua3VORFUzTWpZek1pd3hOQzQwTkRBeE5UQTVJRXd4T1M0eE56TTNOak15TERFMExqUTBNREUxTURrZ1RERTVMakUzTXpjMk16SXNNVFF1TnpJek5qVXdPU0JNTVRrdU1UY3pOell6TWl3eU15NDVPVGsyT0RRMUlFd3hPUzR4TnpNM05qTXlMREkwTGpJNE16RTRORFVnVERFNUxqUTFOekkyTXpJc01qUXVNamd6TVRnME5TQk1Nak11TnpVMU9UWXlOQ3d5TkM0eU9ETXhPRFExSUV3eU15NDNOVFU1TmpJMExETXpMak01TkRBd015Qk1NakV1TURZek1qRXpNeXd6TXk0ek9UUXdNRE1nVERJeExqQTJNekl4TXpNc01qVXVPREUzTlRBME55Qk1NakV1TURZek1qRXpNeXd5TlM0MU16UXdNRFEzSUV3eU1DNDNOemszTVRNekxESTFMalV6TkRBd05EY2dUREU1TGpRMU56STJNeklzTWpVdU5UTTBNREEwTnlCTU1Ua3VNVGN6TnpZek1pd3lOUzQxTXpRd01EUTNJRXd4T1M0eE56TTNOak15TERJMUxqZ3hOelV3TkRjZ1RERTVMakUzTXpjMk16SXNNelF1T1RjeE5Ua3dOeUJNTVRrdU1UY3pOell6TWl3ek5TNHlOVFV3T1RBM0lFd3hPUzQwTlRjeU5qTXlMRE0xTGpJMU5UQTVNRGNnVERJNUxqazROVEkwTXpZc016VXVNalUxTURrd055Qk1NekF1TWpZNE56UXpOaXd6TlM0eU5UVXdPVEEzSUV3ek1DNHlOamczTkRNMkxETTBMamszTVRVNU1EY2dURE13TGpJMk9EYzBNellzTWpVdU9ERTNOVEEwTnlCTU16QXVNalk0TnpRek5pd3lOUzQxTXpRd01EUTNJRXd5T1M0NU9EVXlORE0yTERJMUxqVXpOREF3TkRjZ1RESTRMalkyTXpZeE15d3lOUzQxTXpRd01EUTNJRXd5T0M0ek9EQXhNVE1zTWpVdU5UTTBNREEwTnlCTU1qZ3VNemd3TVRFekxESTFMamd4TnpVd05EY2dUREk0TGpNNE1ERXhNeXd6TXk0ek9UUXdNRE1nVERJMUxqWTBORFU1TXpFc016TXVNemswTURBeklGb2dUVGt1T0RjMU1EY3hORFFzTWpRdU1qZzBNemd4TVNCTU9DNDFNemsxTlRNek15d3lOUzQxT1RVd016TTNJRXc0TGpNME1UUTJOall4TERJMUxqYzRPVFF6TWpNZ1REZ3VNVFF5T1RBME5qVXNNalV1TlRrMU5URTVNU0JNTnk0eU1EY3hPVE0wTWl3eU5DNDJPREUzTVRVeElFdzNMREkwTGpRM09UTTNNallnVERjdU1qQTJOekV4TURRc01qUXVNamMyTlRNM015Qk1PUzQ0TnpVd056RTBOQ3d5TVM0Mk5UZ3lNRGMxSUV3NUxqZzNOVEEzTVRRMExERXdMamM1TmpFNU1URWdURGN1T0RJM05UWTRPVElzTVRBdU56azJNVGt4TVNCTU55NDFORFF3TmpnNU1pd3hNQzQzT1RZeE9URXhJRXczTGpVME5EQTJPRGt5TERFd0xqVXhNalk1TVRFZ1REY3VOVFEwTURZNE9USXNPUzR5TVRnMk1ETXpPU0JNTnk0MU5EUXdOamc1TWl3NExqa3pOVEV3TXpNNUlFdzNMamd5TnpVMk9Ea3lMRGd1T1RNMU1UQXpNemtnVERrdU9EYzFNRGN4TkRRc09DNDVNelV4TURNek9TQk1PUzQ0TnpVd056RTBOQ3cwTGpJNE16YzBNRFk1SUV3NUxqZzNOVEEzTVRRMExEUXVNREF3TWpRd05qa2dUREV3TGpFMU9EVTNNVFFzTkM0d01EQXlOREEyT1NCTU1URXVORGd4TURJeE5TdzBMakF3TURJME1EWTVJRXd4TVM0M05qUTFNakUxTERRdU1EQXdNalF3TmprZ1RERXhMamMyTkRVeU1UVXNOQzR5T0RNM05EQTJPU0JNTVRFdU56WTBOVEl4TlN3NExqa3pOVEV3TXpNNUlFd3hOQzR5TURjeE1qQXpMRGd1T1RNMU1UQXpNemtnVERFMExqUTVNRFl5TURNc09DNDVNelV4TURNek9TQk1NVFF1TkRrd05qSXdNeXc1TGpJeE9EWXdNek01SUV3eE5DNDBPVEEyTWpBekxERXdMalV4TWpZNU1URWdUREUwTGpRNU1EWXlNRE1zTVRBdU56azJNVGt4TVNCTU1UUXVNakEzTVRJd015d3hNQzQzT1RZeE9URXhJRXd4TVM0M05qUTFNakUxTERFd0xqYzVOakU1TVRFZ1RERXhMamMyTkRVeU1UVXNNVGt1T0RBME1UZ3pPU0JNTVRNdU16UTNNREE0Tnl3eE9DNHlOVEV6TmpjMklFd3hNeTQxTkRVeE9ESXNNVGd1TURVMk9URWdUREV6TGpjME16Y3pNamNzTVRndU1qVXdPVGd5TVNCTU1UUXVOamM0TmpJME5pd3hPUzR4TmpRM09EWXhJRXd4TkM0NE9EVTJNalE1TERFNUxqTTJOekV4TnpJZ1RERTBMalkzT1RBek1UY3NNVGt1TlRZNU9EWTBJRXd4TVM0M05qUTFNakUxTERJeUxqUXpNREV4SUV3eE1TNDNOalExTWpFMUxESTJMalExTURrd09UY2dRekV4TGpjMk5EVXlNVFVzTWpndU5UQXpNemt4TnlBeE1TNDBORFl3TmpBNUxETXdMalEyT1RBNU16a2dNVEF1T1RFeU1qUTBOaXd6TWk0eU9EUTVOalE0SUVNeE1DNDFPRFEyTWprNExETXpMak01T1RRd05EVWdNVEF1TWpVM016QXpMRE0wTGpJeE1EZ3dNVGtnTVRBdU1EQXhNRGs1Tml3ek5DNDNNek14TnprNUlFdzVMamN4TVRnMk5EZ3pMRE0xTGpNeE5EZ3pOelFnVERrdU5UZzNPREUxTlRFc016VXVOVFkwTXpBek15Qk1PUzR6TXpZeU1qYzJMRE0xTGpRME5EWXhOaklnVERndU1UUTRPVGN5TWpnc016UXVPRGM1T0RBMk5pQk1OeTQ0T0Rrek5URXpNeXd6TkM0M05UWXlPVGM1SUV3NExqQXhOalE0TnpBekxETTBMalE1T0RRek16Y2dURGd1TXpBek56ZzBOVFFzTXpNdU9URTFOekkxTWlCRE9DNHpORFV4TURVNE55d3pNeTQ0TXpJM09ERTRJRGd1TkRRd01USXhNRE1zTXpNdU5qRTVPREUxTXlBNExqVTFNVE00TURRc016TXVNelF4TlRrek1TQkRPQzQzTXpVNU1qYzFMRE15TGpnNE1ERXdNamtnT0M0NU1qQXpNRGt6TlN3ek1pNHpOVEl5TlRrNUlEa3VNRGt5TVRnME1Ea3NNekV1TnpZMk9URTBNaUJET1M0MU9ERTNNekUwTnl3ek1DNHdPVGsyT0RVM0lEa3VPRGMxTURjeE5EUXNNamd1TXpBME5Ua3lOeUE1TGpnM05UQTNNVFEwTERJMkxqUTFNRGt3T1RjZ1REa3VPRGMxTURjeE5EUXNNalF1TWpnME16Z3hNU0JhSUUweE5TNDVNVGc1T0RZNExETTFMalF5TURJd05qY2dUREUxTGprM05Ua3hORFlzTXpVdU1UUTBOak0xSUV3eE5pNHhNRGN3TVRJMUxETTBMalV4TURBeU5qWWdRekUyTGpnNU5USXlPRGtzTXpBdU5qazNNekUyT0NBeE55NHhPVEE0TnpZMExESXlMalF4T1RRMU5UZ2dNVGN1TVRVMk56UXdNaXd4TWk0ek16ZzNORFk1SUV3ek1DNDNPVGMwTnpjNExERXlMak16T0RjME5qa2dURE13TGpjNU56UTNOemdzTkNCTU1UVXVORFUyTlRZMU1pdzBJRXd4TlM0eE5qWTJOams0TERRZ1RERTFMakUzTXpFek5UY3NOQzR5T0RrNE1qTXlJRXd4TlM0eE9EYzRPRFF5TERRdU9UVXdPVEEzTURZZ1F6RTFMakl3TVRjM05UY3NOUzQxT0RFeE16TXlNU0F4TlM0eU1qUXpPVEEzTERZdU9UYzNOVEl6TmpRZ01UVXVNalF4TVRVd015dzRMalkxTlRVek1qRTJJRU14TlM0eU5qZzNOVEUxTERFeExqUXhPVEF3T0RZZ01UVXVNamMwTVRFMk15d3hOQzR5T0RNeE56QXpJREUxTGpJME9ERTFNVElzTVRjdU1UQXdOakU1TkNCRE1UVXVNVGMwTXpZeE1pd3lOUzR4TURjMU1UQTFJREUwTGpnMk5qSTJNelFzTXpFdU1UZzFOekV4TWlBeE5DNHlOVFUxTWpBMkxETTBMakV6T0RVeE9ESWdUREUwTGpFeU5URTNNVFVzTXpRdU56Y3lOalkyTmlCTU1UUXVNRFkzTnpJd05Td3pOUzR3TlRJeE5qWXlJRXd4TkM0ek5EYzFPRFkxTERNMUxqRXdOemd3TkRrZ1RERTFMalkwTWprNU56WXNNelV1TXpZMU16TTRPQ0JNTVRVdU9URTRPVGcyT0N3ek5TNDBNakF5TURZM0lGb2dUVEUzTGpFMU1UQXdNRGNzTVRBdU5EYzNOalU1TWlCTU1UY3VNRGc1TlRBM055dzFMamcyTVRBNE56Y3lJRXd5T0M0NU1EZzRORGN5TERVdU9EWXhNRGczTnpJZ1RESTRMamt3T0RnME56SXNNVEF1TkRjM05qVTVNaUJNTVRjdU1UVXhNREF3Tnl3eE1DNDBOemMyTlRreUlGb2dUVFUyTGpNMk1USXlOek1zTVRJdU5ERTRPRGd3TVNCTU5UWXVOVFV4T0RBNU5pd3hNaTR5TVRZNU16RTNJRXcxTnk0ME5Ea3dNVEE0TERFeExqSTJOakl5TWpVZ1REVTNMalkwTnpZNU1UWXNNVEV1TURVMU5qa3lOeUJNTlRjdU5ETXpNRFl6TVN3eE1DNDROakUwTkRZNUlFdzBPUzQ1TXpJMk1qUTNMRFF1TURjek16QXlPVFVnVERRNUxqYzBNak00T1RVc05DQk1OREV1T1RBME16YzBMRFFnVERReExqY3hOREV5TnpRc05DNHdOek16TVRNeU9TQk1NelF1TWpFME5UQTROQ3d4TUM0NE5qRTBOVGN5SUV3ek5Dd3hNUzR3TlRVMk1UVTJJRXd6TkM0eE9UZzBPRE16TERFeExqSTJOakV5T0RVZ1RETTFMakE1TkRnMk5USXNNVEl1TWpFMk9ETTNOeUJNTXpVdU1qZzFORE14TkN3eE1pNDBNVGc1TlRNMklFd3pOUzQwT1RFek9ETTFMREV5TGpJek1qVXpPVGtnVERReUxqWXhNVFl6T0N3MUxqZzJNVEE0TnpjeUlFdzBPUzR3TXpVNU16STVMRFV1T0RZeE1EZzNOeklnVERVMkxqRTFOVE0yT0N3eE1pNHlNekkxTWprZ1REVTJMak0yTVRJeU56TXNNVEl1TkRFNE9EZ3dNU0JhSWlCcFpEMGlRMjl0WW1sdVpXUXRVMmhoY0dVaVBqd3ZjR0YwYUQ0TkNpQWdJQ0FnSUNBZ0lDQWdJRHd2Wno0TkNpQWdJQ0FnSUNBZ1BDOW5QZzBLSUNBZ0lEd3ZaejROQ2p3dmMzWm5QZz09KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbik7XG5cbmNvbnN0IFNlYXJjaElucHV0ID0gKCkgPT4gKFxuICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwi5o6Y6YeR5pCc57Si77yM5aaC77yaSmF2Ye+8jOmYv+mHjOW3tOW3tO+8jOWJjeerr+mdouivlVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntcbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC5zZWFyY2gtaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMi4ycmVtIDAgMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc2VhcmNoLWlucHV0IGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlZGY0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYFxuICAgICAgICB9PC9zdHlsZT5cbiAgICA8Lz5cbik7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZCYXJcIj5cbiAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgIC5uYXZCYXIge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgMi41cmVtIDAgMS44cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQuNXJlbVwiO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=/Users/wangning/Desktop/ssr-juejin-next/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/LeftColumn.js":
/*!**********************************!*\
  !*** ./components/LeftColumn.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/select/style/css */ "./node_modules/antd/lib/select/style/css.js");
/* harmony import */ var antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_timeUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/timeUtil */ "./utils/timeUtil.js");
/* harmony import */ var _LoadMoreList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoadMoreList */ "./components/LoadMoreList.js");



var _jsxFileName = "/Users/wangning/Desktop/ssr-juejin-next/components/LeftColumn.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



const {
  Option
} = antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a;
const CATEGORY = [{
  id: "firstpage",
  label: "首页",
  active: 1
}, {
  id: "frontend",
  label: "前端",
  active: 0
}, {
  id: "backend",
  label: "后端",
  active: 0
}, {
  id: "android",
  Label: "安卓",
  active: 0
}, {
  id: "ios",
  Label: "苹果",
  active: 0
}];

const handleChange = () => {};

const CategorySelector = () => {
  return __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a, {
    defaultValue: "frontend",
    style: {
      width: 120
    },
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, CATEGORY.map(cate => {
    return __jsx(Option, {
      value: cate.id,
      key: cate.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: undefined
    }, cate.label);
  }));
};

const OrderSelector = props => {
  const handleOrderChange = e => {};

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    onMouseOver: handleOrderChange,
    className: "jsx-1205440681" + " " + "order-selector",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1205440681" + " " + "hottest active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "\u70ED\u95E8"), __jsx("div", {
    className: "jsx-1205440681" + " " + "latest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "\u6700\u65B0")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1205440681",
    __self: undefined
  }, ".order-selector.jsx-1205440681{margin-right:.8rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.hottest.jsx-1205440681,.latest.jsx-1205440681{display:inline-block;margin:0 .1rem;width:3.6rem;height:3.5rem;font-size:1.25rem;text-align:center;line-height:3.5rem;color:#646c7b;cursor:pointer;opacity:.3;}.active.jsx-1205440681{opacity:.8;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YW5nbmluZy9EZXNrdG9wL3Nzci1qdWVqaW4tbmV4dC9jb21wb25lbnRzL0xlZnRDb2x1bW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVvQixBQUdnRCxBQUtFLEFBWVYsV0FDZixRQWpCZ0IsRUFLRyxlQUNGLGFBQ0MsY0FDSSxrQkFDQSxZQVJDLE1BU0EsbUJBQ0wsY0FDQyxlQUNKLFdBQ2YsNEJBWkEiLCJmaWxlIjoiL1VzZXJzL3dhbmduaW5nL0Rlc2t0b3Avc3NyLWp1ZWppbi1uZXh0L2NvbXBvbmVudHMvTGVmdENvbHVtbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgVGltZVV0aWxzIGZyb20gJy4uL3V0aWxzL3RpbWVVdGlsJztcbmltcG9ydCBMb2FkTW9yZUxpc3QgZnJvbSAnLi9Mb2FkTW9yZUxpc3QnXG5cbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XG5cbmNvbnN0IENBVEVHT1JZID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IFwiZmlyc3RwYWdlXCIsXG4gICAgICAgIGxhYmVsOiBcIummlumhtVwiLFxuICAgICAgICBhY3RpdmU6IDFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFwiZnJvbnRlbmRcIixcbiAgICAgICAgbGFiZWw6IFwi5YmN56uvXCIsXG4gICAgICAgIGFjdGl2ZTogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCJiYWNrZW5kXCIsXG4gICAgICAgIGxhYmVsOiBcIuWQjuerr1wiLFxuICAgICAgICBhY3RpdmU6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFwiYW5kcm9pZFwiLFxuICAgICAgICBMYWJlbDogXCLlronljZNcIixcbiAgICAgICAgYWN0aXZlOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBcImlvc1wiLFxuICAgICAgICBMYWJlbDogXCLoi7nmnpxcIixcbiAgICAgICAgYWN0aXZlOiAwXG4gICAgfVxuXTtcblxuY29uc3QgaGFuZGxlQ2hhbmdlID0gKCkgPT4ge31cblxuY29uc3QgQ2F0ZWdvcnlTZWxlY3RvciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U2VsZWN0IGRlZmF1bHRWYWx1ZT1cImZyb250ZW5kXCIgc3R5bGU9e3sgd2lkdGg6IDEyMCB9fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBDQVRFR09SWS5tYXAoY2F0ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtjYXRlLmlkfSBrZXk9e2NhdGUuaWR9PntjYXRlLmxhYmVsfTwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgKVxufVxuXG5cblxuY29uc3QgT3JkZXJTZWxlY3RvciA9IHByb3BzID0+IHtcbiAgICBjb25zdCBoYW5kbGVPcmRlckNoYW5nZSA9IGUgPT4ge1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItc2VsZWN0b3JcIiBvbk1vdXNlT3Zlcj17aGFuZGxlT3JkZXJDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG90dGVzdCBhY3RpdmVcIj7ng63pl6g8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhdGVzdFwiPuacgOaWsDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgLm9yZGVyLXNlbGVjdG9yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC44cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmhvdHRlc3QsIC5sYXRlc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgLjFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMuNnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NDZjN2I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC4zO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5jb25zdCBHb2xkQXJ0aWNhbCA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7IHRpdGxlLCB1cmwsIGRhdGUsIGNvbGxlY3Rpb25Db3VudCwgdXNlciB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyBpc28gfSA9IGRhdGU7XG4gICAgY29uc3QgeyB1c2VybmFtZSB9ID0gdXNlcjtcbiAgICBjb25zdCBiYWRnZVRtcGwgPSBjb3VudCA9PiAoYOiHs+WwkeW3suaciSR7Y291bnR95Zac5qyiYCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJnb2xkSXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1Db250ZW50XCIgaHJlZj17dXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWRnZVwiIHRpdGxlPXtiYWRnZVRtcGwoY29sbGVjdGlvbkNvdW50KX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW50cnktaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGEtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZXRhLXRleHRcIiB0aXRsZT17bmV3IERhdGUoaXNvKS50b0xvY2FsZVN0cmluZygpfT57VGltZVV0aWxzLmZvcm1hdEN1c3RvbVRpbWUoaXNvKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWV0YS10ZXh0XCI+e3VzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmNvbnN0IExlZnRDb2x1bW4gPSAocHJvcHMpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdvbGQtc291cmNlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic291cmNlLW5hdmJhclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3VyY2Utc2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImljb24gc291cmNlLWljb25cIiBzcmM9XCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NE5DandoUkU5RFZGbFFSU0J6ZG1jZ1VGVkNURWxESUNJdEx5OVhNME12TDBSVVJDQlRWa2NnTVM0eEx5OUZUaUlnSW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTDBkeVlYQm9hV056TDFOV1J5OHhMakV2UkZSRUwzTjJaekV4TG1SMFpDSStEUW84SVMwdElFTnlaV0YwYjNJNklFTnZjbVZzUkZKQlZ5QllOeUF0TFQ0TkNqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWlCM2FXUjBhRDBpT0M0ek9EVTNiVzBpSUdobGFXZG9kRDBpT0M0eE9USXpiVzBpSUhabGNuTnBiMjQ5SWpFdU1TSWdjM1I1YkdVOUluTm9ZWEJsTFhKbGJtUmxjbWx1WnpwblpXOXRaWFJ5YVdOUWNtVmphWE5wYjI0N0lIUmxlSFF0Y21WdVpHVnlhVzVuT21kbGIyMWxkSEpwWTFCeVpXTnBjMmx2YmpzZ2FXMWhaMlV0Y21WdVpHVnlhVzVuT205d2RHbHRhWHBsVVhWaGJHbDBlVHNnWm1sc2JDMXlkV3hsT21WMlpXNXZaR1E3SUdOc2FYQXRjblZzWlRwbGRtVnViMlJrSWcwS2RtbGxkMEp2ZUQwaU1DQXdJRFV3T1NBME9UY2lEUW9nZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lQZzBLSUR4a1pXWnpQZzBLSUNBOGMzUjViR1VnZEhsd1pUMGlkR1Y0ZEM5amMzTWlQZzBLSUNBZ1BDRmJRMFJCVkVGYkRRb2dJQ0FnTG1acGJEQWdlMlpwYkd3Nkl6QXdOa05HUm4wTkNpQWdJQ0F1Wm1sc01TQjdabWxzYkRwM2FHbDBaWDBOQ2lBZ0lGMWRQZzBLSUNBOEwzTjBlV3hsUGcwS0lEd3ZaR1ZtY3o0TkNpQThaeUJwWkQwaTVadSs1YkdDWDNnd01ESXdYekVpUGcwS0lDQThiV1YwWVdSaGRHRWdhV1E5SWtOdmNtVnNRMjl5Y0VsRVh6QkRiM0psYkMxTVlYbGxjaUl2UGcwS0lDQThjbVZqZENCamJHRnpjejBpWm1sc01DSWdkMmxrZEdnOUlqVXdPU0lnYUdWcFoyaDBQU0kwT1RjaUx6NE5DaUFnUEhCaGRHZ2dhV1E5SWtacGJHd3RNUzFEYjNCNUlpQmpiR0Z6Y3owaVptbHNNU0lnWkQwaVRUSTROU0F4TXpoc0xUTXhJQzB5TkNBdE16TWdNalVnTFRJZ01pQXpOU0F5TnlBek5DQXRNamNnTFRNZ0xUTjZiVEV4T1NBNU5Xd3RNVFV3SURFeE5pQXRNVFV4SUMweE1UWWdMVEl5SURFM0lERTNNeUF4TXpRZ01UY3pJQzB4TXpRZ0xUSXpJQzB4TjNwdExURTFNQ0E1YkMwNE1pQXROak1nTFRJeklERTNJREV3TlNBNE1TQXhNRFFnTFRneElDMHlNaUF0TVRjZ0xUZ3lJRFl6ZWlJdlBnMEtJRHd2Wno0TkNqd3ZjM1puUGcwS1wiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiIHN0eWxlPXt7Y29sb3I6ICcjMDQ0YWFiJ319PuaOmOmHkTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWJveFwiPlxuICAgICAgICAgICAgICAgIDxDYXRlZ29yeVNlbGVjdG9yIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxPcmRlclNlbGVjdG9yIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExvYWRNb3JlTGlzdCB7Li4ucHJvcHN9Lz5cbiAgICAgICAgICAgIHsvKiA8dWw+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5hcnRpY2xlcy5tYXAoYXJ0aWNhbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEdvbGRBcnRpY2FsIHsuLi5hcnRpY2FsfSBrZXk9e2FydGljYWwuaWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAuZ29sZC1zb3VyY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMuOTdyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNvdXJjZS1uYXZiYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxLjJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjUwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuOHJlbSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuc291cmNlLXNlbGVjdG9yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLEdlbmV2YSxNaWNyb3NvZnQgWWFIZWksTWljcm9zb2Z0IEpoZW5nSGVpLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY0NmM3YjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuOHJlbSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMXJlbSAwIC40cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnNvdXJjZS1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyLjgzM3JlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMi44MzNyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcnktYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExlZnRDb2x1bW47XG4iXX0= */\n/*@ sourceURL=/Users/wangning/Desktop/ssr-juejin-next/components/LeftColumn.js */"));
};

const GoldArtical = props => {
  const {
    title,
    url,
    date,
    collectionCount,
    user
  } = props;
  const {
    iso
  } = date;
  const {
    username
  } = user;

  const badgeTmpl = count => `至少已有${count}喜欢`;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("li", {
    className: "goldItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx("a", {
    className: "itemContent",
    href: url,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx("div", {
    className: "badge",
    title: badgeTmpl(collectionCount),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }), __jsx("div", {
    className: "entry-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, title), __jsx("div", {
    className: "metalist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx("div", {
    className: "meta-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx("span", {
    className: "meta-text",
    title: new Date(iso).toLocaleString(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, _utils_timeUtil__WEBPACK_IMPORTED_MODULE_5__["default"].formatCustomTime(iso))), __jsx("div", {
    className: "meta-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx("span", {
    className: "meta-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, username)))))));
};

const LeftColumn = props => __jsx("div", {
  className: "jsx-3178973284" + " " + "gold-source",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3178973284" + " " + "source-navbar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3178973284" + " " + "source-selector",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124
  },
  __self: undefined
}, __jsx("img", {
  src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyBYNyAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iOC4zODU3bW0iIGhlaWdodD0iOC4xOTIzbW0iIHZlcnNpb249IjEuMSIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIg0Kdmlld0JveD0iMCAwIDUwOSA0OTciDQogeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KIDxkZWZzPg0KICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KICAgPCFbQ0RBVEFbDQogICAgLmZpbDAge2ZpbGw6IzAwNkNGRn0NCiAgICAuZmlsMSB7ZmlsbDp3aGl0ZX0NCiAgIF1dPg0KICA8L3N0eWxlPg0KIDwvZGVmcz4NCiA8ZyBpZD0i5Zu+5bGCX3gwMDIwXzEiPg0KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPg0KICA8cmVjdCBjbGFzcz0iZmlsMCIgd2lkdGg9IjUwOSIgaGVpZ2h0PSI0OTciLz4NCiAgPHBhdGggaWQ9IkZpbGwtMS1Db3B5IiBjbGFzcz0iZmlsMSIgZD0iTTI4NSAxMzhsLTMxIC0yNCAtMzMgMjUgLTIgMiAzNSAyNyAzNCAtMjcgLTMgLTN6bTExOSA5NWwtMTUwIDExNiAtMTUxIC0xMTYgLTIyIDE3IDE3MyAxMzQgMTczIC0xMzQgLTIzIC0xN3ptLTE1MCA5bC04MiAtNjMgLTIzIDE3IDEwNSA4MSAxMDQgLTgxIC0yMiAtMTcgLTgyIDYzeiIvPg0KIDwvZz4NCjwvc3ZnPg0K",
  className: "jsx-3178973284" + " " + "icon source-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125
  },
  __self: undefined
}), __jsx("div", {
  style: {
    color: '#044aab'
  },
  className: "jsx-3178973284" + " " + "title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126
  },
  __self: undefined
}, "\u6398\u91D1")), __jsx("div", {
  className: "jsx-3178973284" + " " + "category-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128
  },
  __self: undefined
}, __jsx(CategorySelector, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 129
  },
  __self: undefined
})), __jsx(OrderSelector, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 131
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-3178973284",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 133
  },
  __self: undefined
}, __jsx(_LoadMoreList__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134
  },
  __self: undefined
}))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
  id: "3178973284",
  __self: undefined
}, ".gold-source.jsx-3178973284{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:33.97rem;}.source-navbar.jsx-3178973284{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 0 1.2rem;min-height:3.5rem;background-color:#fff;border-radius:2px;z-index:250;margin-right:.8rem!important;}.source-selector.jsx-3178973284{position:relative;height:100%;font-size:1.35rem;font-family:Verdana,Geneva,Microsoft YaHei,Microsoft JhengHei,Helvetica Neue,sans-serif;color:#646c7b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:.8rem!important;}.icon.jsx-3178973284{margin:0 1rem 0 .4rem;}.source-icon.jsx-3178973284{width:2.833rem;height:2.833rem;border-radius:2px;}.category-box.jsx-3178973284{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93YW5nbmluZy9EZXNrdG9wL3Nzci1qdWVqaW4tbmV4dC9jb21wb25lbnRzL0xlZnRDb2x1bW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0pnQixBQUd1QyxBQUlELEFBV0ssQUFXSSxBQUlQLEFBTUgsZUFMSSxHQWZKLElBV2hCLFFBVnNCLENBZUEsaUJBZHNFLENBZTVGLEtBaENtQixlQUNuQixFQW1DQSxHQWhDdUIsOERBY0wsY0FDRCxpQkFkSyxrQkFDQSxrQkFDSSxxQkFhSCxDQVpELGtCQUNOLFlBQ2lCLDZCQUNqQyxpQ0FVaUMsNkJBQ2pDIiwiZmlsZSI6Ii9Vc2Vycy93YW5nbmluZy9EZXNrdG9wL3Nzci1qdWVqaW4tbmV4dC9jb21wb25lbnRzL0xlZnRDb2x1bW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFRpbWVVdGlscyBmcm9tICcuLi91dGlscy90aW1lVXRpbCc7XG5pbXBvcnQgTG9hZE1vcmVMaXN0IGZyb20gJy4vTG9hZE1vcmVMaXN0J1xuXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xuXG5jb25zdCBDQVRFR09SWSA9IFtcbiAgICB7XG4gICAgICAgIGlkOiBcImZpcnN0cGFnZVwiLFxuICAgICAgICBsYWJlbDogXCLpppbpobVcIixcbiAgICAgICAgYWN0aXZlOiAxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBcImZyb250ZW5kXCIsXG4gICAgICAgIGxhYmVsOiBcIuWJjeerr1wiLFxuICAgICAgICBhY3RpdmU6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFwiYmFja2VuZFwiLFxuICAgICAgICBsYWJlbDogXCLlkI7nq69cIixcbiAgICAgICAgYWN0aXZlOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBcImFuZHJvaWRcIixcbiAgICAgICAgTGFiZWw6IFwi5a6J5Y2TXCIsXG4gICAgICAgIGFjdGl2ZTogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCJpb3NcIixcbiAgICAgICAgTGFiZWw6IFwi6Iu55p6cXCIsXG4gICAgICAgIGFjdGl2ZTogMFxuICAgIH1cbl07XG5cbmNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpID0+IHt9XG5cbmNvbnN0IENhdGVnb3J5U2VsZWN0b3IgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNlbGVjdCBkZWZhdWx0VmFsdWU9XCJmcm9udGVuZFwiIHN0eWxlPXt7IHdpZHRoOiAxMjAgfX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ0FURUdPUlkubWFwKGNhdGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17Y2F0ZS5pZH0ga2V5PXtjYXRlLmlkfT57Y2F0ZS5sYWJlbH08L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvU2VsZWN0PlxuICAgIClcbn1cblxuXG5cbmNvbnN0IE9yZGVyU2VsZWN0b3IgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgaGFuZGxlT3JkZXJDaGFuZ2UgPSBlID0+IHtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLXNlbGVjdG9yXCIgb25Nb3VzZU92ZXI9e2hhbmRsZU9yZGVyQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdHRlc3QgYWN0aXZlXCI+54Ot6ZeoPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXRlc3RcIj7mnIDmlrA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vcmRlci1zZWxlY3RvciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5ob3R0ZXN0LCAubGF0ZXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIC4xcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzLjZyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMy41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjQ2YzdiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuMztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuY29uc3QgR29sZEFydGljYWwgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgeyB0aXRsZSwgdXJsLCBkYXRlLCBjb2xsZWN0aW9uQ291bnQsIHVzZXIgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgaXNvIH0gPSBkYXRlO1xuICAgIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHVzZXI7XG4gICAgY29uc3QgYmFkZ2VUbXBsID0gY291bnQgPT4gKGDoh7PlsJHlt7LmnIkke2NvdW50feWWnOasomApO1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZ29sZEl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtQ29udGVudFwiIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2VcIiB0aXRsZT17YmFkZ2VUbXBsKGNvbGxlY3Rpb25Db3VudCl9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVudHJ5LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWV0YS10ZXh0XCIgdGl0bGU9e25ldyBEYXRlKGlzbykudG9Mb2NhbGVTdHJpbmcoKX0+e1RpbWVVdGlscy5mb3JtYXRDdXN0b21UaW1lKGlzbyl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1ldGEtdGV4dFwiPnt1c2VybmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5jb25zdCBMZWZ0Q29sdW1uID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnb2xkLXNvdXJjZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvdXJjZS1uYXZiYXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic291cmNlLXNlbGVjdG9yXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpY29uIHNvdXJjZS1pY29uXCIgc3JjPVwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejROQ2p3aFJFOURWRmxRUlNCemRtY2dVRlZDVEVsRElDSXRMeTlYTTBNdkwwUlVSQ0JUVmtjZ01TNHhMeTlGVGlJZ0ltaDBkSEE2THk5M2QzY3Vkek11YjNKbkwwZHlZWEJvYVdOekwxTldSeTh4TGpFdlJGUkVMM04yWnpFeExtUjBaQ0krRFFvOElTMHRJRU55WldGMGIzSTZJRU52Y21Wc1JGSkJWeUJZTnlBdExUNE5Danh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElpQjNhV1IwYUQwaU9DNHpPRFUzYlcwaUlHaGxhV2RvZEQwaU9DNHhPVEl6YlcwaUlIWmxjbk5wYjI0OUlqRXVNU0lnYzNSNWJHVTlJbk5vWVhCbExYSmxibVJsY21sdVp6cG5aVzl0WlhSeWFXTlFjbVZqYVhOcGIyNDdJSFJsZUhRdGNtVnVaR1Z5YVc1bk9tZGxiMjFsZEhKcFkxQnlaV05wYzJsdmJqc2dhVzFoWjJVdGNtVnVaR1Z5YVc1bk9tOXdkR2x0YVhwbFVYVmhiR2wwZVRzZ1ptbHNiQzF5ZFd4bE9tVjJaVzV2WkdRN0lHTnNhWEF0Y25Wc1pUcGxkbVZ1YjJSa0lnMEtkbWxsZDBKdmVEMGlNQ0F3SURVd09TQTBPVGNpRFFvZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpUGcwS0lEeGtaV1p6UGcwS0lDQThjM1I1YkdVZ2RIbHdaVDBpZEdWNGRDOWpjM01pUGcwS0lDQWdQQ0ZiUTBSQlZFRmJEUW9nSUNBZ0xtWnBiREFnZTJacGJHdzZJekF3TmtOR1JuME5DaUFnSUNBdVptbHNNU0I3Wm1sc2JEcDNhR2wwWlgwTkNpQWdJRjFkUGcwS0lDQThMM04wZVd4bFBnMEtJRHd2WkdWbWN6NE5DaUE4WnlCcFpEMGk1WnUrNWJHQ1gzZ3dNREl3WHpFaVBnMEtJQ0E4YldWMFlXUmhkR0VnYVdROUlrTnZjbVZzUTI5eWNFbEVYekJEYjNKbGJDMU1ZWGxsY2lJdlBnMEtJQ0E4Y21WamRDQmpiR0Z6Y3owaVptbHNNQ0lnZDJsa2RHZzlJalV3T1NJZ2FHVnBaMmgwUFNJME9UY2lMejROQ2lBZ1BIQmhkR2dnYVdROUlrWnBiR3d0TVMxRGIzQjVJaUJqYkdGemN6MGlabWxzTVNJZ1pEMGlUVEk0TlNBeE16aHNMVE14SUMweU5DQXRNek1nTWpVZ0xUSWdNaUF6TlNBeU55QXpOQ0F0TWpjZ0xUTWdMVE42YlRFeE9TQTVOV3d0TVRVd0lERXhOaUF0TVRVeElDMHhNVFlnTFRJeUlERTNJREUzTXlBeE16UWdNVGN6SUMweE16UWdMVEl6SUMweE4zcHRMVEUxTUNBNWJDMDRNaUF0TmpNZ0xUSXpJREUzSURFd05TQTRNU0F4TURRZ0xUZ3hJQzB5TWlBdE1UY2dMVGd5SURZemVpSXZQZzBLSUR3dlp6NE5Dand2YzNablBnMEtcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIiBzdHlsZT17e2NvbG9yOiAnIzA0NGFhYid9fT7mjpjph5E8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlTZWxlY3RvciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8T3JkZXJTZWxlY3RvciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMb2FkTW9yZUxpc3Qgey4uLnByb3BzfS8+XG4gICAgICAgICAgICB7LyogPHVsPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuYXJ0aWNsZXMubWFwKGFydGljYWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxHb2xkQXJ0aWNhbCB7Li4uYXJ0aWNhbH0ga2V5PXthcnRpY2FsLmlkfS8+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgLmdvbGQtc291cmNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzLjk3cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zb3VyY2UtbmF2YmFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMS4ycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMy41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI1MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjhyZW0haW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnNvdXJjZS1zZWxlY3RvciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMzVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogVmVyZGFuYSxHZW5ldmEsTWljcm9zb2Z0IFlhSGVpLE1pY3Jvc29mdCBKaGVuZ0hlaSxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NDZjN2I7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjhyZW0haW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW0gMCAuNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5zb3VyY2UtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMi44MzNyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIuODMzcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5LWJveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMZWZ0Q29sdW1uO1xuIl19 */\n/*@ sourceURL=/Users/wangning/Desktop/ssr-juejin-next/components/LeftColumn.js */"));

/* harmony default export */ __webpack_exports__["default"] = (LeftColumn);

/***/ }),

/***/ "./components/LoadMoreList.js":
/*!************************************!*\
  !*** ./components/LoadMoreList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_skeleton_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/skeleton/style/css */ "./node_modules/antd/lib/skeleton/style/css.js");
/* harmony import */ var antd_lib_skeleton_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_skeleton_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/skeleton */ "antd/lib/skeleton");
/* harmony import */ var antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_list_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/list/style/css */ "./node_modules/antd/lib/list/style/css.js");
/* harmony import */ var antd_lib_list_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/list */ "antd/lib/list");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_avatar_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/avatar/style/css */ "./node_modules/antd/lib/avatar/style/css.js");
/* harmony import */ var antd_lib_avatar_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/avatar */ "antd/lib/avatar");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);








var _jsxFileName = "/Users/wangning/Desktop/ssr-juejin-next/components/LoadMoreList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;


const LoadMoreList = props => {
  const {
    0: initLoading,
    1: setInitLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(true);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(props.gold && props.gold.goldList || []);
  const {
    0: list,
    1: setList
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(props.gold && props.gold.goldList || []);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    if (props.csr) {
      props.refreshGoldList();
    } else {
      setInitLoading(true);
    }

    return () => {// clean func
    };
  }, []);

  onLoadMore = async () => {
    setLoading(true);
    setList(undefined.state.data.concat([...new Array(props.gold.limit)].map(() => ({
      loading: true,
      name: {}
    }))));
    props.updateGoldConds({
      "offset": ++props.offset
    });
    props.refreshGoldList();
  };

  return __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "demo-loadmore-list",
    loading: initLoading,
    itemLayout: "horizontal",
    loadMore: !initLoading && !loading ? __jsx("div", {
      style: {
        textAlign: 'center',
        marginTop: 12,
        height: 32,
        lineHeight: '32px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      onClick: undefined.onLoadMore,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }, "loading more")) : null,
    dataSource: list,
    renderItem: item => __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      actions: [__jsx("a", {
        key: "list-loadmore-edit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: undefined
      }, "edit"), __jsx("a", {
        key: "list-loadmore-more",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: undefined
      }, "more")],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: undefined
    }, __jsx(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
      avatar: true,
      title: false,
      loading: item.loading,
      active: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: undefined
    }, __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_3___default.a.Item.Meta, {
      avatar: __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_5___default.a, {
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: undefined
      }),
      title: __jsx("a", {
        href: "https://ant.design",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: undefined
      }, item.name.last),
      description: "Ant Design, a design language for background applications, is refined by Ant UED Team",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: undefined
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: undefined
    }, "content"))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LoadMoreList);

/***/ }),

/***/ "./components/RightColumn.js":
/*!***********************************!*\
  !*** ./components/RightColumn.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/wangning/Desktop/ssr-juejin-next/components/RightColumn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const RightColumn = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, "This is right column");

/* harmony default export */ __webpack_exports__["default"] = (RightColumn);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/antd/lib/avatar/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/avatar/style/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/button/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/button/style/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/list/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/list/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/select/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/select/style/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/skeleton/style/css.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/skeleton/style/css.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_CommonLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CommonLayout */ "./components/CommonLayout.js");
/* harmony import */ var _components_LeftColumn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LeftColumn */ "./components/LeftColumn.js");
/* harmony import */ var _components_RightColumn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/RightColumn */ "./components/RightColumn.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var _action_githubAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../action/githubAction */ "./action/githubAction.js");
/* harmony import */ var _action_goldAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../action/goldAction */ "./action/goldAction.js");


var _jsxFileName = "/Users/wangning/Desktop/ssr-juejin-next/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;











const Index = props => {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
    store: _store_store__WEBPACK_IMPORTED_MODULE_9__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(_components_CommonLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    leftCol: __jsx(_components_LeftColumn__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    })),
    rightCol: __jsx(_components_RightColumn__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }));
};

Index.getInitialProps = async () => {
  const res1 = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:3000/api/getRecommendedArticals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      "category": "ai",
      "order": "heat",
      "offset": 0,
      "limit": 30
    })
  });
  const article = await res1.json();
  const res2 = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:3000/api/getHighscoreGithub', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      "category": "trending",
      "period": "day",
      "lang": "css",
      "offset": 0,
      "limit": 30
    })
  });
  const github = await res2.json();
  return {
    articles: article.data,
    githubs: github.data
  };
};

const mapStateToProps = state => ({
  gold: state.gold,
  github: state.github,
  csr: false
});

const mapDispatchToProps = {
  refreshGoldList: _action_goldAction__WEBPACK_IMPORTED_MODULE_11__["refreshGoldList"],
  updateGoldConds: _action_goldAction__WEBPACK_IMPORTED_MODULE_11__["updateGoldConds"],
  refreshGithubList: _action_githubAction__WEBPACK_IMPORTED_MODULE_10__["refreshGithubList"],
  updateGithubConds: _action_githubAction__WEBPACK_IMPORTED_MODULE_10__["updateGithubConds"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Index));

/***/ }),

/***/ "./request.js":
/*!********************!*\
  !*** ./request.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _JSON$stringify = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");

const Axios = __webpack_require__(/*! axios */ "axios");

const Service = __webpack_require__(/*! ./service */ "./service/index.js");

const beautify = __webpack_require__(/*! json-beautify */ "json-beautify");

const axiosInstance = Axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
    'Referer': 'http://e.xitu.io/'
  }
});

const Request = function (serviceName, methodName, log) {
  console.log(Service[serviceName][methodName], methodName);
  return async function (params) {
    console.log(_JSON$stringify(params));
    const result = await Service[serviceName][methodName](axiosInstance, params, log);
    return result;
  };
};

Request.getApiConfig = () => {
  return {
    api: {
      bodyParser: {
        sizeLimit: '1mb'
      }
    }
  };
};

Request.formatResponse = res => {
  return beautify(res, null, 2, 100);
};

const clientAxios = Axios.create({
  baseURL: "/"
});

Request.getClientAxiosInstance = () => {
  return clientAxios;
};

module.exports = Request;

/***/ }),

/***/ "./service/index.js":
/*!**************************!*\
  !*** ./service/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const JuejinService = __webpack_require__(/*! ./juejin */ "./service/juejin/index.js");

module.exports = {
  "JUEJIN": JuejinService
};

/***/ }),

/***/ "./service/juejin/index.js":
/*!*********************************!*\
  !*** ./service/juejin/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const API = __webpack_require__(/*! ../../API */ "./API.js");

const defaultParams = {
  method: "get",
  requestData: null
};

const commonProcessFlow = async ($axios, url, method, requestData) => {
  let result = null;

  if (method === "get") {
    if (requestData) {
      result = await $axios[method](url, {
        params: requestData
      });
    } else {
      result = await $axios[method](url);
    }
  } else if (method === "post") {
    result = await $axios[method](url, requestData);
  }

  return result;
};

class JuejinService {
  async getBanner($axios, params = defaultParams, logger) {
    const method = params.method.toLocaleLowerCase();
    const requestData = params.requestData;
    return commonProcessFlow($axios, API.GET_BANNER, method, requestData);
  }

  async getLatestXiaoce($axios, params = defaultParams, logger) {
    const method = params.method.toLocaleLowerCase();
    const requestData = params.requestData;
    return commonProcessFlow($axios, API.GET_LASTEST_XIAOCE, method, requestData);
  }

  async getRecommendedArticals($axios, params = defaultParams, logger) {
    const method = params.method.toLocaleLowerCase();
    const requestData = params.requestData;
    return commonProcessFlow($axios, API.GET_RECOMMENDED_ARTICLES, method, requestData);
  }

  async getHighscoreGithub($axios, params = defaultParams, logger) {
    const method = params.method.toLocaleLowerCase();
    const requestData = params.requestData;
    return commonProcessFlow($axios, API.GET_HIGHSCORE_GITHUB, method, requestData);
  }

}

const juejinService = new JuejinService();
module.exports = juejinService;

/***/ }),

/***/ "./store/github.js":
/*!*************************!*\
  !*** ./store/github.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _action_githubAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../action/githubAction */ "./action/githubAction.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const defaultState = {
  "category": "trending",
  "period": "day",
  "lang": "css",
  "offset": 0,
  "limit": 30,
  githubList: []
};
/* harmony default export */ __webpack_exports__["default"] = ((state = defaultState, action) => {
  switch (action.type) {
    case _action_githubAction__WEBPACK_IMPORTED_MODULE_7__["GET_GITHUB_LIST"]:
      return _objectSpread({}, state, {
        githubList: action.data
      });

    case _action_githubAction__WEBPACK_IMPORTED_MODULE_7__["UPDATE_GITHUB_CONDS"]:
      return _objectSpread({}, state, {}, action.data);

    default:
      return state;
  }
});

/***/ }),

/***/ "./store/goldsource.js":
/*!*****************************!*\
  !*** ./store/goldsource.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _action_goldAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../action/goldAction */ "./action/goldAction.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const defaultState = {
  category: "firstpage",
  order: "heat",
  pageOffset: 0,
  pageLimit: 30,
  goldList: []
};
/* harmony default export */ __webpack_exports__["default"] = ((state = defaultState, action) => {
  switch (action.type) {
    case _action_goldAction__WEBPACK_IMPORTED_MODULE_7__["GET_GOLD_LIST"]:
      return _objectSpread({}, state, {
        goldList: action.data
      });

    case _action_goldAction__WEBPACK_IMPORTED_MODULE_7__["UPDATE_GOLD_CONDS"]:
      return _objectSpread({}, state, {}, action.data);

    default:
      return state;
  }
});

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const defaultState = {};
/* harmony default export */ __webpack_exports__["default"] = ((state = defaultState, action) => {
  return {};
});

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./github */ "./store/github.js");
/* harmony import */ var _goldsource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goldsource */ "./store/goldsource.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./store/index.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../request */ "./request.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_request__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_6__);







const clientAxios = _request__WEBPACK_IMPORTED_MODULE_4___default.a.getClientAxiosInstance();
const reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  index: _index__WEBPACK_IMPORTED_MODULE_3__["default"],
  gold: _goldsource__WEBPACK_IMPORTED_MODULE_2__["default"],
  github: _github__WEBPACK_IMPORTED_MODULE_1__["default"]
});
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducers, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_5___default.a.withExtraArgument(clientAxios), redux_logger__WEBPACK_IMPORTED_MODULE_6___default.a));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./utils/timeUtil.js":
/*!***************************!*\
  !*** ./utils/timeUtil.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const TIME_DESC = {
  getSecond: function (time) {
    const tmpl = sec => `${sec}秒前`;

    const boundary = [0, 59];
    const secTime = Math.floor(time / 1000);

    if (secTime >= boundary[0] && secTime <= boundary[1]) {
      return tmpl(secTime);
    }

    return -1;
  },
  getMinutes: function (time) {
    const tmpl = min => `${min}分钟前`;

    const boundary = [0, 59];
    const minTime = Math.floor(time / 60 * 1000);

    if (minTime >= boundary[0] && minTime <= boundary[1]) {
      return tmpl(minTime);
    }

    return -1;
  },
  getHours: function (time) {
    const tmpl = hour => `${hour}小时前`;

    const boundary = [0, 59];
    const hourTime = Math.floor(time / 60 * 60 * 1000);

    if (hourTime >= boundary[0] && hourTime <= boundary[1]) {
      return tmpl(hourTime);
    }

    return -1;
  },
  getDays: function (time) {
    const tmpl = day => `${day}天前`;

    const boundary = [1, 23];
    const dayTime = Math.floor(time / 24 * 60 * 60 * 1000);

    if (dayTime >= boundary[0] && dayTime <= boundary[1]) {
      return tmpl(dayTime);
    }

    return -1;
  },
  getMonths: function (time) {
    const tmpl = month => `${month}月前`;

    const boundary = [1, 11]; //the check of month need to be enhanced

    const monthTime = Math.floor(time / 31 * 24 * 60 * 60 * 1000);

    if (monthTime >= boundary[0] && monthTime <= boundary[1]) {
      return tmpl(monthTime);
    }

    return -1;
  },
  getYears: function (time) {
    const tmpl = year => `${year}年前`; //the check of year need to be enhanced


    const yearTime = Math.floor(time / 365 * 31 * 24 * 60 * 60 * 1000);
    return tmpl(yearTime);
  }
};

const formatCustomTime = function (timeStr) {
  try {
    const currTimestamp = new Date().getTime(),
          publishTimestamp = new Date(timeStr).getTime(),
          time = Math.floor(currTimestamp - publishTimestamp);
    let sec = -1,
        min = -1,
        hour = -1,
        day = -1,
        month = -1,
        year = -1;

    if ((sec = TIME_DESC.getSecond(time)) !== -1) {
      return sec;
    } else if ((min = TIME_DESC.getMinutes(time)) !== -1) {
      return min;
    } else if ((hour = TIME_DESC.getHours(time)) !== -1) {
      return hour;
    } else if ((day = TIME_DESC.getDays(time)) !== -1) {
      return day;
    } else if ((month = TIME_DESC.getMonths(time)) !== -1) {
      return month;
    } else {
      return TIME_DESC.getYears();
    }
  } catch (e) {
    return "Invalid Time";
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  formatCustomTime
});

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wangning/Desktop/ssr-juejin-next/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "antd/lib/avatar":
/*!**********************************!*\
  !*** external "antd/lib/avatar" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/list":
/*!********************************!*\
  !*** external "antd/lib/list" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/list");

/***/ }),

/***/ "antd/lib/select":
/*!**********************************!*\
  !*** external "antd/lib/select" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "antd/lib/skeleton":
/*!************************************!*\
  !*** external "antd/lib/skeleton" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/skeleton");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "json-beautify":
/*!********************************!*\
  !*** external "json-beautify" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("json-beautify");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map