(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./resources/js/pages/portal/Profile/_fields.js":
/*!******************************************************!*\
  !*** ./resources/js/pages/portal/Profile/_fields.js ***!
  \******************************************************/
/*! exports provided: formFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formFields", function() { return formFields; });
var formFields = {
  name: {
    label: 'Name',
    required: false
  },
  motto: {
    label: 'Motto',
    required: false
  },
  contact_number: {
    label: 'Contact Number',
    required: false
  },
  email: {
    label: 'Email',
    required: false
  },
  street_address: {
    label: 'Street Address',
    required: false
  },
  city: {
    label: 'City',
    required: false
  },
  zip: {
    label: 'Zip',
    required: false
  },
  country: {
    label: 'Country',
    required: false
  },
  facebook: {
    label: 'Facebook',
    required: false
  },
  instagram: {
    label: 'Instagram',
    required: false
  },
  linkedin: {
    label: 'LinkedIn',
    required: false
  },
  twitter: {
    label: 'Twitter',
    required: false
  },
  logo: {
    label: 'Logo',
    accept: 'image/*',
    required: false,
    type: 'base64'
  },
  fp_image: {
    label: 'FrontPage Image',
    accept: 'image/*',
    required: false,
    type: 'base64'
  },
  act_image: {
    label: 'Activities Featured Image',
    accept: 'image/*',
    required: false,
    type: 'base64'
  },
  blog_image: {
    label: 'Blogs Featured Image',
    accept: 'image/*',
    required: false,
    type: 'base64'
  }
};

/***/ }),

/***/ "./resources/js/pages/portal/Profile/index.js":
/*!****************************************************!*\
  !*** ./resources/js/pages/portal/Profile/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/profile */ "./resources/js/store/profile.js");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_fields */ "./resources/js/pages/portal/Profile/_fields.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _components_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/_base */ "./resources/js/components/_base/index.js");
/* harmony import */ var _components_base__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_base__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _graphql_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../graphql/index */ "./resources/js/graphql/index.js");
/* harmony import */ var _helpers_knittygritty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/knittygritty */ "./resources/js/helpers/knittygritty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var WebsiteProfile = function WebsiteProfile() {
  var _profile = Object(_store_profile__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      _profile2 = _slicedToArray(_profile, 2),
      profileState = _profile2[0],
      profileActions = _profile2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      errors = _useState2[0],
      setErrors = _useState2[1];

  var form = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_graphql_index__WEBPACK_IMPORTED_MODULE_6__["UPDATE_PROFILE"], {
    onCompleted: function onCompleted(data) {
      profileActions.getProfile();
      _helpers_knittygritty__WEBPACK_IMPORTED_MODULE_7__["swal"].fire({
        icon: 'success',
        title: "Profile successfully updated.",
        showConfirmButton: false,
        timer: 1000
      });
    },
    onError: function onError(error) {
      console.log(error.message);
    }
  }),
      _useMutation2 = _slicedToArray(_useMutation, 3),
      mutation = _useMutation2[0],
      isUpdating = _useMutation2[1].loading,
      mutationResults = _useMutation2[2];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var payload, formData, _iterator, _step, key, variable;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              payload = {};
              formData = new FormData(form.current);
              _iterator = _createForOfIteratorHelper(formData.keys());
              _context.prev = 4;

              _iterator.s();

            case 6:
              if ((_step = _iterator.n()).done) {
                _context.next = 21;
                break;
              }

              key = _step.value;

              if (!(key === 'fp_image' || key === 'logo' || key === 'act_image' || key === 'blog_image')) {
                _context.next = 18;
                break;
              }

              if (!(formData.get(key).name !== '')) {
                _context.next = 15;
                break;
              }

              _context.next = 12;
              return Object(_helpers_knittygritty__WEBPACK_IMPORTED_MODULE_7__["img2Base64"])(formData.get(key));

            case 12:
              payload[key] = _context.sent;
              _context.next = 16;
              break;

            case 15:
              payload[key] = profileState.profile[key];

            case 16:
              _context.next = 19;
              break;

            case 18:
              payload[key] = formData.get(key);

            case 19:
              _context.next = 6;
              break;

            case 21:
              _context.next = 26;
              break;

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](4);

              _iterator.e(_context.t0);

            case 26:
              _context.prev = 26;

              _iterator.f();

              return _context.finish(26);

            case 29:
              variable = _objectSpread({}, payload);
              variable = _objectSpread({}, payload);
              mutation({
                variables: variable
              });

            case 32:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 23, 26, 29]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  if (!profileState.profile) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "w-full flex justify-center items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, " Loading... "));
  }

  Object.keys(_fields__WEBPACK_IMPORTED_MODULE_3__["formFields"]).forEach(function (key) {
    if (_fields__WEBPACK_IMPORTED_MODULE_3__["formFields"].hasOwnProperty(key)) {
      _fields__WEBPACK_IMPORTED_MODULE_3__["formFields"][key].value = profileState.profile[key];
      _fields__WEBPACK_IMPORTED_MODULE_3__["formFields"][key].id = profileState.profile.id;
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "w-full h-screen min-h-screen overflow-y-auto bg-white  p-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "text-3xl font-bold mb-8 "
  }, "Website Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full flex items-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "w-full mr-16",
    ref: form
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_base__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    errors: errors,
    formFields: _fields__WEBPACK_IMPORTED_MODULE_3__["formFields"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-center ml-32 mt-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    disabled: isUpdating,
    className: "px-16 py-2 rounded-full text-white bg-green-500",
    onClick: handleSubmit
  }, "Save")))));
};

/* harmony default export */ __webpack_exports__["default"] = (WebsiteProfile);

/***/ })

}]);