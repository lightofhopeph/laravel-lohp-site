(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./resources/js/graphql/BlogMutation.js":
/*!**********************************************!*\
  !*** ./resources/js/graphql/BlogMutation.js ***!
  \**********************************************/
/*! exports provided: GET_BLOG, CREATE_BLOG, UPDATE_BLOG, DELETE_BLOGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_BLOG", function() { return GET_BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_BLOG", function() { return CREATE_BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BLOG", function() { return UPDATE_BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BLOGS", function() { return DELETE_BLOGS; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    mutation delete_blogs($ids: [ID]) {\n        delete_blogs(ids: $ids) {\n            status\n            message\n        }\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    mutation update_blog($input: BlogInput) {\n        update_blog(input: $input) {\n            id\n            title\n            blog_type\n            featured_image\n            content\n            is_active\n            created_at\n            updated_at\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    mutation create_blog($input: BlogInput) {\n        create_blog(input: $input) {\n            status\n            message\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    query get_blog($id: ID!) {\n        get_blog(id: $id) {\n            id\n            title\n            blog_type\n            featured_image\n            content\n            is_active\n            created_at\n            updated_at\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var GET_BLOG = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject());
var CREATE_BLOG = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject2());
var UPDATE_BLOG = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject3());
var DELETE_BLOGS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject4());

/***/ }),

/***/ "./resources/js/pages/portal/Blogs/_fields.js":
/*!****************************************************!*\
  !*** ./resources/js/pages/portal/Blogs/_fields.js ***!
  \****************************************************/
/*! exports provided: formFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formFields", function() { return formFields; });
var formFields = {
  title: {
    label: 'Title',
    required: true
  },
  blog_type: {
    label: 'Category',
    required: true,
    type: 'select',
    options: [{
      value: 'How to',
      label: 'How to'
    }, {
      value: 'Inspiration',
      label: 'Inspiration'
    }, {
      value: 'Community',
      label: 'Community'
    }]
  },
  featured_image: {
    label: 'Featured Image',
    accept: 'image/*',
    required: true,
    type: 'base64'
  },
  content: {
    type: 'editor',
    label: 'Content'
  }
};

/***/ }),

/***/ "./resources/js/pages/portal/Blogs/form.js":
/*!*************************************************!*\
  !*** ./resources/js/pages/portal/Blogs/form.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/_base */ "./resources/js/components/_base/index.js");
/* harmony import */ var _components_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_fields */ "./resources/js/pages/portal/Blogs/_fields.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _helpers_knittygritty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/knittygritty */ "./resources/js/helpers/knittygritty.js");
/* harmony import */ var _graphql_BlogMutation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../graphql/BlogMutation */ "./resources/js/graphql/BlogMutation.js");


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var BlogsAdminForm = function BlogsAdminForm() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
      type = _useParams.type;

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var form = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      errors = _useState2[0],
      setErrors = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      blog = _useState4[0],
      setBlog = _useState4[1];

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(_graphql_BlogMutation__WEBPACK_IMPORTED_MODULE_7__["GET_BLOG"], {
    variables: {
      id: type
    },
    onCompleted: function onCompleted(data) {
      var _data$get_blog = data.get_blog,
          __typename = _data$get_blog.__typename,
          rest = _objectWithoutProperties(_data$get_blog, ["__typename"]);

      setBlog(_objectSpread({}, rest));
    },
    skip: type === 'add'
  }),
      data = _useQuery.data;

  if (type !== "add") {
    Object.keys(_fields__WEBPACK_IMPORTED_MODULE_4__["formFields"]).forEach(function (key) {
      if (_fields__WEBPACK_IMPORTED_MODULE_4__["formFields"].hasOwnProperty(key)) {
        _fields__WEBPACK_IMPORTED_MODULE_4__["formFields"][key].value = blog[key];
        _fields__WEBPACK_IMPORTED_MODULE_4__["formFields"][key].id = blog.id;
      }
    });
  } else {
    Object.keys(_fields__WEBPACK_IMPORTED_MODULE_4__["formFields"]).forEach(function (key) {
      if (_fields__WEBPACK_IMPORTED_MODULE_4__["formFields"].hasOwnProperty(key)) {
        _fields__WEBPACK_IMPORTED_MODULE_4__["formFields"][key].value = '';
      }
    });
  }

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(type === 'add' ? _graphql_BlogMutation__WEBPACK_IMPORTED_MODULE_7__["CREATE_BLOG"] : _graphql_BlogMutation__WEBPACK_IMPORTED_MODULE_7__["UPDATE_BLOG"], {
    update: function update(cache) {
      if (type === 'add') {
        cache.modify({
          fields: {
            blogs: function blogs() {}
          }
        });
      }
    },
    onCompleted: function onCompleted() {
      _helpers_knittygritty__WEBPACK_IMPORTED_MODULE_6__["swal"].fire({
        icon: 'success',
        title: "Blog successfully ".concat(type === 'add' ? 'added' : 'updated', "."),
        text: 'Redirecting...',
        showConfirmButton: false,
        timer: 2000,
        onClose: function onClose() {
          history.push("/portal/blogs");
        }
      });
    },
    onError: function onError(error) {
      setErrors(error);
    }
  }),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      mutation = _useMutation2[0],
      mutationResults = _useMutation2[1];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(evt) {
      var payload, formData, _iterator, _step, key, variable;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              evt.preventDefault();
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

              if (!(key === 'featured_image')) {
                _context.next = 18;
                break;
              }

              if (!(formData.get(key).name !== '')) {
                _context.next = 15;
                break;
              }

              _context.next = 12;
              return Object(_helpers_knittygritty__WEBPACK_IMPORTED_MODULE_6__["img2Base64"])(formData.get(key));

            case 12:
              payload[key] = _context.sent;
              _context.next = 16;
              break;

            case 15:
              payload[key] = blog.featured_image;

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

              if (type !== 'add') {
                variable = _objectSpread({
                  id: type
                }, payload);
              }

              mutation({
                variables: {
                  input: variable
                }
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

  var handleCancel = function handleCancel(e) {
    e.preventDefault();
    Object.keys(_fields__WEBPACK_IMPORTED_MODULE_4__["formFields"]).forEach(function (key) {
      if (_fields__WEBPACK_IMPORTED_MODULE_4__["formFields"].hasOwnProperty(key)) {
        if (key === 'is_active') {
          _fields__WEBPACK_IMPORTED_MODULE_4__["formFields"][key].value = 0;
          return;
        }

        _fields__WEBPACK_IMPORTED_MODULE_4__["formFields"][key].value = "";
        _fields__WEBPACK_IMPORTED_MODULE_4__["formFields"][key].id = "";
      }
    });
    setBlog({});
    setErrors({});
    history.push("/portal/blogs");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "w-full h-screen min-h-screen overflow-y-auto bg-white shadow-container rounded-lg p-8 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "text-3xl font-bold mb-8"
  }, type === "add" ? "Add" : "Edit", " Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full flex items-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "w-full h-full mr-16",
    ref: form
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_base__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    errors: errors,
    formFields: _fields__WEBPACK_IMPORTED_MODULE_4__["formFields"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-center ml-32 mt-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_base__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: handleSubmit
  }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_base__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "ml-2",
    styles: "secondary",
    onClick: handleCancel
  }, "Cancel")))));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogsAdminForm);

/***/ })

}]);