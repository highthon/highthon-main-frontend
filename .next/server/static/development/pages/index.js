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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/user/highthon-main-frontend/components/Header.js";


function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    src: url(", ");\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    color:#00000;\n    text-decoration:none\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    width:100%;\n    height:100%;\n    float:left;\n    line-height:90px;\n    text-align:center;\n    list-style:none;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width:100%;\n    height:100%;\n    line-height:90px;\n    list-style:none;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width:100%;\n    height:100%;\n    display:flex;\n    justify-content: flex-end;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width:100%;\n    height:100%;\n    display:flex;\n    justify-content: flex-start;\n    padding-left: 5%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 90px;\n    display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2());
var MenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());
var LogoLi = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li(_templateObject4());
var MenuLi = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li(_templateObject5());
var MenuName = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a(_templateObject6());
var LogoImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img(_templateObject7(), function (props) {
  return props.src;
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoLi, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoImg, {
    src: "../static/images/logo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuLi, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "\uC18C\uAC1C"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuLi, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "\uAE30\uC0AC"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuLi, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/sponsor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "\uD6C4\uC6D0\uC0AC"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuLi, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/apply",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "\uC2E0\uCCAD\uD558\uAE30"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuLi, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/photo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "\uD589\uC0AC\uC0AC\uC9C4")))));
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
var _jsxFileName = "/Users/user/highthon-main-frontend/pages/index.js";


function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  width: 120px;\n  height: 33px;\n  border-radius: 5px;\n  background-color: #ffffff;\n  font-size:1rem;\n  color:#000000;\n  font-weight:#000000;\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  width: 120px;\n  height: 33px;\n  border-radius: 5px;\n  background-color: transparent;\n  font-size:1rem;\n  font-weight:lighter;\n  margin-right:5%;\n  color:#ffffff;\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n    width:100%;\n    display:flex;\n    justify-content:center;\n    margin-top:5%;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n    width:50%;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n    font-size:2rem;\n    text-align:center;\n    font-weight:lighter;\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n    font-size:1rem;\n    text-align:center;\n    font-weight:lighter;\n\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n    width:50%;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n    width:100%;\n    display:flex;\n    flex-direction:row;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n    width:100%;\n    margin-top:15%;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    font-size:1rem;\n    text-align:center;\n    font-weight:lighter;\n\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    width:100%;\n    text-align:center;\n    margin-top:17%;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    font-size:1.2rem;\n    text-align:center;"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    width:100%;\n    margin-top:20%;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    opacity:.6\n  width: 450px;\n  height: 600px;\n  background-color: #000000;\n  align-items:center;\n  justify-content:center;\n      z-index:100;\n\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    width : 45%;\n    display:flex;\n    margin-top:7%;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    width:100px;\n    height:100px;\n    background-color:skyblue;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    width:100%;\n    display:flex;\n    margin-top:28%;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\nwidth:100%;\n  font-weight:bolder;\n  font-size:3.5rem;  \n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\nwidth:70%;\n    font-size:1.5rem; \n    font-weight:lighter\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    width:100%;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    width : 100%;\n    display:flex;\n    margin-top:32%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin-left:15%;\n    width:55%;\n    display:flex;\n    flex-direction:column;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n   width: 100%;\n   display: flex;\n   flex-direction:row;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    z-index:100;\n    overflow: hidden;\n        color:#ffffff;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background-image: url('/static/images/back_trip.jpg');\n    background-size: cover;\n    background-position: center;\n    position:absolute;\n    top:0;\n    left:0;\n    z-index:-100;\n    width:100%;\n    height:100%;\n    overflow:hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Home = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var HomeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());
var TitlePicWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());
var TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5());
var TitleBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6());
var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject7());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject8());
var PicPreviewWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject9());
var PicPreviewBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject10());
var ModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject11());
var ModalBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject12());
var ModalHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject13());
var ModalHeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1(_templateObject14());
var ModalContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject15());
var ModalContentTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1(_templateObject16());
var ModalFooter = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject17());
var InfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject18());
var PersonInfo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject19());
var InfoTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2(_templateObject20());
var InfoContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2(_templateObject21());
var PayInfo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject22());
var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject23());
var InquiryBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject24());
var ApplyBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject25());
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HomeWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Home, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitlePicWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "\uACE0\uB4F1\uD559\uC0DD\uB4E4\uB9CC\uC758 \uD574\uCEE4\uD1A4,"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "HIGHTHON"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PicPreviewWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PicPreviewBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalHeaderTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "\uC81C5\uD68C HIGHTHON:TRIP")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalContentTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "\uC62C\uD574 \uACA8\uC6B8,", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }), "\uB2E4\uD568\uAED8 \uD558\uC774\uD1A4\uC73C\uB85C", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }), "TRIP\uC744 \uB5A0\uB098\uBCFC\uAE4C\uC694?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalFooter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PersonInfo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "\uCC38\uAC00\uC778\uC6D0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "80\uBA85")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PayInfo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "\uCC38\uAC00"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "5,000\uC6D0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InquiryBtn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "\uC2E0\uCCAD\uC870\uD68C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApplyBtn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "\uC2E0\uCCAD\uD558\uAE30")))))));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map