module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./Logger.js":
/*!*******************!*\
  !*** ./Logger.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const path = __webpack_require__(/*! path */ "path");

const bunyan = __webpack_require__(/*! bunyan */ "bunyan");

const log = bunyan.createLogger({
  name: 'juejin-ssr',
  serializers: {
    req: reqSerializer
  },
  streams: [{
    type: 'rotating-file',
    path: path.join(path.resolve('./log'), "api.log"),
    period: '1d',
    // daily rotation
    count: 3 // keep 3 back copies

  }]
});

function reqSerializer(req) {
  return {
    method: req.method,
    url: req.url,
    headers: req.headers
  };
}

module.exports = log;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./pages/api/getRecommendedArticals.js":
/*!*********************************************!*\
  !*** ./pages/api/getRecommendedArticals.js ***!
  \*********************************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const Request = __webpack_require__(/*! ../../request */ "./request.js");

const Logger = __webpack_require__(/*! ../../Logger */ "./Logger.js");

const config = Request.getApiConfig();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const getRecommendedArticalsAPI = Request("JUEJIN", "getRecommendedArticals", null);
  const result = await getRecommendedArticalsAPI({
    method: "post",
    requestData: req.body
  });
  Logger.info("getRecommendedArticals Respnse => ", Request.formatResponse(result.data));
  res.json(result.data);
});

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

/***/ 5:
/*!***************************************************!*\
  !*** multi ./pages/api/getRecommendedArticals.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wangning/Desktop/ssr-juejin-next/pages/api/getRecommendedArticals.js */"./pages/api/getRecommendedArticals.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "bunyan":
/*!*************************!*\
  !*** external "bunyan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bunyan");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "json-beautify":
/*!********************************!*\
  !*** external "json-beautify" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("json-beautify");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=getRecommendedArticals.js.map