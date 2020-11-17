(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/helpers/knittygritty.js":
/*!**********************************************!*\
  !*** ./resources/js/helpers/knittygritty.js ***!
  \**********************************************/
/*! exports provided: truncate, silencedHtml, img2Base64, swal, toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "silencedHtml", function() { return silencedHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "img2Base64", function() { return img2Base64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swal", function() { return swal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toast", function() { return toast; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

var truncate = function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + '...' : str;
};
var silencedHtml = function silencedHtml(html, n) {
  return html.replace(/(<([^>]+)>)/gi, '').replace(/&nbsp;/g, ' ').substr(0, n);
};
var img2Base64 = function img2Base64(inputFile) {
  var reader = new FileReader();
  return new Promise(function (resolve, reject) {
    reader.onerror = function () {
      reject(new DOMException('Problem parsing input file.'));
    };

    reader.onload = function () {
      resolve(reader.result);
    };

    reader.readAsDataURL(inputFile);
  });
};
var swal = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a;
var toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.mixin({
  toast: true,
  position: 'top-right',
  showConfirmButton: false,
  timer: 3000
});


/***/ }),

/***/ "./resources/js/pages/main/home/index.js":
/*!***********************************************!*\
  !*** ./resources/js/pages/main/home/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sections_frontpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/frontpage */ "./resources/js/pages/main/home/sections/frontpage.js");
/* harmony import */ var _sections_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/services */ "./resources/js/pages/main/home/sections/services.js");
/* harmony import */ var _sections_cloudgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/cloudgrid */ "./resources/js/pages/main/home/sections/cloudgrid.js");
/* harmony import */ var _sections_patrons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/patrons */ "./resources/js/pages/main/home/sections/patrons.js");
/* harmony import */ var _sections_getinvolved__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/getinvolved */ "./resources/js/pages/main/home/sections/getinvolved.js");






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_frontpage__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_cloudgrid__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_services__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_patrons__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_getinvolved__WEBPACK_IMPORTED_MODULE_5__["default"], null));
});

/***/ }),

/***/ "./resources/js/pages/main/home/sections/cloudgrid.js":
/*!************************************************************!*\
  !*** ./resources/js/pages/main/home/sections/cloudgrid.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Cloudgrid = function Cloudgrid() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "cloudgrid",
    className: "pt-32 pb-4 w-full h-screen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-4xl lg:text-5xl uppercase font-bold",
    style: {
      fontFamily: 'Montserrat, sans-serif'
    }
  }, "Cloud Grid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: " italic",
    style: {
      fontFamily: 'Roboto Slab, serif'
    }
  }, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("q", null, ' ', "It is every man\u2019s obligation to put back into the world at least the equivalent of what he takes out of it..."), ' ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:flex lg:flex-wrap lg:justify-center"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:flex lg:flex-wrap lg:justify-center"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Cloudgrid);

/***/ }),

/***/ "./resources/js/pages/main/home/sections/frontpage.js":
/*!************************************************************!*\
  !*** ./resources/js/pages/main/home/sections/frontpage.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../store/profile */ "./resources/js/store/profile.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _helpers_knittygritty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/knittygritty */ "./resources/js/helpers/knittygritty.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        query activities {\n            activities(\n                first: 5\n                page: 1\n                orderBy: [{field: CREATED_AT, order: ASC}]\n            ) {\n                data {\n                    id\n                    title\n                    description\n                    location\n                    month\n                    year\n                    featured_image\n                    images {\n                        id\n                        description\n                        image\n                    }\n                    created_at\n                    updated_at\n                }\n                paginatorInfo {\n                    hasMorePages\n                    lastPage\n                    currentPage\n                    total\n                }\n            }\n        }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Frontpage = function Frontpage() {
  var _profile = Object(_store_profile__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      _profile2 = _slicedToArray(_profile, 2),
      profileState = _profile2[0],
      profileActions = _profile2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      activities = _useState2[0],
      setActivities = _useState2[1];

  var carousel = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var GET_ACTIVITIES = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(GET_ACTIVITIES, {
    fetchPolicy: 'no-cache',
    onCompleted: function onCompleted(data) {
      setActivities(data.activities.data);
    },
    onError: function onError(error) {
      console.log(error.message);
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data,
      refetch = _useQuery.refetch;

  var Thumbnails = function Thumbnails() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "w-full text-center"
    }, activities.length && activities.map(function (a, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: i,
        onClick: function onClick() {
          return carousel.current.goTo(i, false);
        },
        className: "inline-block border border-darkgray cursor-pointer transform hover:scale-105"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: a.featured_image,
        className: "w-24 h-30"
      }));
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: 'calc(-90px)'
    },
    className: "w-full h-screen " // style={{
    //     backgroundImage: `url("${profileState.profile.fp_image}")`,
    // }}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
    ref: carousel,
    autoplay: true
  }, activities.length && activities.map(function (a, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i,
      className: "w-screen h-screen relative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "w-screen h-screen  bg-cover bg-center",
      style: {
        backgroundImage: "url(\"".concat(a.featured_image, "\")")
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        backdropFilter: 'blur(8px'
      },
      className: "w-full absolute bottom-0 inset-x-0 mb-20 px-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-4xl text-gray-100 inline-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: ""
    }, Object(_helpers_knittygritty__WEBPACK_IMPORTED_MODULE_5__["truncate"])(a.title, 100))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-lg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      className: "text-red-500",
      icon: ['fas', 'map-marker-alt']
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-locyellow px-2 tracking-wider"
    }, a.location)))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Frontpage);

/***/ }),

/***/ "./resources/js/pages/main/home/sections/getinvolved.js":
/*!**************************************************************!*\
  !*** ./resources/js/pages/main/home/sections/getinvolved.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../store/profile */ "./resources/js/store/profile.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Getinvolved = function Getinvolved() {
  var _profile = Object(_store_profile__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      _profile2 = _slicedToArray(_profile, 2),
      profileState = _profile2[0],
      profileActions = _profile2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "getinvolved",
    className: "w-full "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-auto"
  }, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center pt-20 pb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-4xl lg:text-5xl uppercase font-bold",
    style: {
      fontFamily: 'Montserrat, sans-serif'
    }
  }, ' ', "Get Involved", ' ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "md:flex md:justify-center",
    style: {
      fontFamily: 'Roboto Slab, serif'
    }
  }, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border rounded m-10 py-2 pt-4 md:w-2/5 md:px-0 md:m-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/storage/getinvolved/joinus.jpg",
    className: " h-16"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Join Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-justify p-8"
  }, ' ', "Make a difference now for the lives of many. Be an instrument of hope for those individuals who need most of our help. Participate to become a steward for the environment in creating a brighter future for our children. Contact us:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-blue-500 font-bold"
  }, ' ', profileState.profile.email), ' '))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border rounded m-10 py-2 pt-4 md:w-2/5 md:px-0 md:m-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/storage/getinvolved/donate.jpg",
    className: " h-16"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Donate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-justify p-8"
  }, "Help build our cause. Help create a brighter future for our children's children. Make a donation today! A little help can go a long way. Contact us:", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-blue-500 font-bold"
  }, profileState.profile.email), ' '))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Getinvolved);

/***/ }),

/***/ "./resources/js/pages/main/home/sections/patrons.js":
/*!**********************************************************!*\
  !*** ./resources/js/pages/main/home/sections/patrons.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Patrons = function Patrons() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new antd_mobile__WEBPACK_IMPORTED_MODULE_2__["ListView"].DataSource({
    rowHasChanged: function rowHasChanged(row1, row2) {
      return row1 !== row2;
    }
  })),
      _useState2 = _slicedToArray(_useState, 2),
      sponsors = _useState2[0],
      setSponsors = _useState2[1];

  var items = [{
    src_img: '/storage/patrons/patron_fablab.jpg'
  }, {
    src_img: '/storage/patrons/patron_dti.jpg'
  }, {
    src_img: '/storage/patrons/patron_psbank.jpg'
  }, {
    src_img: '/storage/patrons/patron_pajo.jpg'
  }, {
    src_img: '/storage/patrons/aklanvhs.PNG'
  }, {
    src_img: '/storage/patrons/arch.PNG'
  }, {
    src_img: '/storage/patrons/ascom.PNG'
  }, {
    src_img: '/storage/patrons/cis.PNG'
  }, {
    src_img: '/storage/patrons/cristalec.PNG'
  }, {
    src_img: '/storage/patrons/fablabohol.PNG'
  }, {
    src_img: '/storage/patrons/gla.PNG'
  }, {
    src_img: '/storage/patrons/opcamp.PNG'
  }, {
    src_img: '/storage/patrons/rotaractcf.PNG'
  }, {
    src_img: '/storage/patrons/tag.PNG'
  }, {
    src_img: '/storage/patrons/univet.PNG'
  }, {
    src_img: '/storage/patrons/vriend.PNG'
  }, {
    src_img: '/storage/patrons/workplace.PNG'
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setSponsors(sponsors.cloneWithRows(items));
  }, []);

  var row = function row(r) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "w-auto block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex justify-center pt-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: r.src_img,
      className: " h-32"
    }))));
  };

  var rowBody = function rowBody(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex "
    }, props.children);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "patrons",
    className: "w-full pt-20 pb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " mx-auto "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center pt-20 pb-4 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-4xl lg:text-5xl uppercase font-bold",
    style: {
      fontFamily: 'Montserrat, sans-serif'
    }
  }, ' ', "Our Patrons")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " w-full bg-superlightgray flex flex-wrap justify-evenly p-5",
    style: {
      fontFamily: 'Roboto Slab, serif'
    }
  }, items.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: key,
      className: "w-auto m-4 shadow-xl"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex justify-center overflow-hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: item.src_img,
      className: " h-20 rounded-lg"
    }))));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Patrons);

/***/ }),

/***/ "./resources/js/pages/main/home/sections/services.js":
/*!***********************************************************!*\
  !*** ./resources/js/pages/main/home/sections/services.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Services = function Services() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "services",
    className: "pt-32 pb-4 w-full h-screen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-4xl lg:text-5xl uppercase font-bold",
    style: {
      fontFamily: 'Montserrat, sans-serif'
    }
  }, "Solar Night Lamps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: " italic",
    style: {
      fontFamily: 'Roboto Slab, serif'
    }
  }, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("q", null, ' ', "Because we care for the environment and for our children's children...", ' '), ' ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:flex lg:flex-wrap lg:justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border mx-auto rounded overflow-hidden my-8 bg-gray-100 sm:m-10 lg:w-2/5 xl:w-3/12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/storage/services/fablab2_s.jpg",
    className: "mx-auto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-bold ",
    style: {
      fontFamily: 'Montserrat, sans-serif'
    }
  }, ' ', "Workshops and awareness about the environment", ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-justify",
    style: {
      fontFamily: 'Roboto Slab, serif'
    }
  }, "Participate to become a steward for the environment in creating a brighter future for our children.", ' '))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border mx-auto rounded overflow-hidden my-8 bg-gray-100 sm:m-10 lg:w-2/5 xl:w-3/12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/storage/services/img3_s.jpg",
    className: "mx-auto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-bold",
    style: {
      fontFamily: 'Montserrat, sans-serif'
    }
  }, ' ', "Solar Lamp Program"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontFamily: 'Roboto Slab, serif'
    }
  }, "This project aims to provide a clean, safe, cheap and sustainable source of light for the communities in far-flung areas. Join us in our advocacy!", ' ')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:flex lg:flex-wrap lg:justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:px-0 lg:py-4 p-4 mx-auto sm:px-0 sm:m-10 lg:w-4/5 xl:9/12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-justify",
    style: {
      fontFamily: 'Roboto Slab, serif'
    }
  }, "We are fulfilled knowing that today as of March 2020, we have assembled and distributed", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-bold text-green-500"
  }, ' ', "2,033", ' '), ' ', "Solar Night Lamps in A Bottle to", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-bold text-green-500"
  }, ' ', "1,016", ' '), ' ', "family beneficiaries, recycled", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-bold text-green-500"
  }, ' ', "2,033", ' '), ' ', "PET Plastic Bottles and reduced C0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sub", null, "2"), ' ', "emissions from kersone (that's approximately 80,154 Kg of CO", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sub", null, "2"), "). Thank you to all those who shared their time and resources to make all of these possible.", ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "pt-4"
  }, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-bold",
    style: {
      fontFamily: 'Montserrat, sans-serif'
    }
  }, "These solar lamps are hitting 3 birds in 1 stone."), ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-decimal list-inside"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "text-justify",
    style: {
      fontFamily: 'Roboto Slab, serif'
    }
  }, ' ', "We are fighting against plastic pollution by utilizing used plastic bottles."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "text-justify",
    style: {
      fontFamily: 'Roboto Slab, serif'
    }
  }, "We are fighting against climate change by reducing our carbon footprint with the aid of renewable energy.", ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "text-justify",
    style: {
      fontFamily: 'Roboto Slab, serif'
    }
  }, ' ', "We are helping less privileged off grid communities to have a safe source of light at night time with the use of clean renewable energy."))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ })

}]);