(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

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

/***/ "./resources/js/pages/portal/Blogs/index.js":
/*!**************************************************!*\
  !*** ./resources/js/pages/portal/Blogs/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/_base */ "./resources/js/components/_base/index.js");
/* harmony import */ var _components_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pretty_checkbox_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pretty-checkbox-react */ "./node_modules/pretty-checkbox-react/dist-web/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _helpers_knittygritty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../helpers/knittygritty */ "./resources/js/helpers/knittygritty.js");
/* harmony import */ var _graphql_BlogMutation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../graphql/BlogMutation */ "./resources/js/graphql/BlogMutation.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _store_profile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../store/profile */ "./resources/js/store/profile.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var Blogs = function Blogs() {
  var _profile = Object(_store_profile__WEBPACK_IMPORTED_MODULE_13__["default"])(),
      _profile2 = _slicedToArray(_profile, 2),
      profileState = _profile2[0],
      profileActions = _profile2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      blogs = _useState2[0],
      setBlogs = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      keyword = _useState4[0],
      setKeyword = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      toggleSearch = _useState6[0],
      setToggleSearch = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      cat = _useState8[0],
      setCat = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-1),
      _useState10 = _slicedToArray(_useState9, 2),
      status = _useState10[0],
      setStatus = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState12 = _slicedToArray(_useState11, 2),
      selected = _useState12[0],
      setSelected = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isDelete = _useState14[0],
      setIsDelete = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState16 = _slicedToArray(_useState15, 2),
      previewVisible = _useState16[0],
      setPreviewVisible = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState18 = _slicedToArray(_useState17, 2),
      data = _useState18[0],
      setData = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState20 = _slicedToArray(_useState19, 2),
      navVisible = _useState20[0],
      setNavVisible = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState22 = _slicedToArray(_useState21, 2),
      h = _useState22[0],
      setH = _useState22[1];

  var carousel = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_graphql_BlogMutation__WEBPACK_IMPORTED_MODULE_10__["DELETE_BLOGS"], {
    update: function update(cache) {
      cache.modify({
        fields: {
          blogs: function blogs() {}
        }
      });
    }
  }),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      mutation = _useMutation2[0],
      mutationResults = _useMutation2[1];

  var handleSC = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["debounce"])(function (k) {
    setKeyword(k);
    setToggleSearch(!toggleSearch);
  }, 800);

  var handleCategory = function handleCategory(evt) {
    var t = cat;

    if (evt.target.checked) {
      t.push(evt.target.value);
    } else {
      Object.keys(t).forEach(function (key) {
        if (t[key] === evt.target.value) {
          t.splice(key, 1);
        }
      });
    }

    setCat(t);
    setToggleSearch(!toggleSearch);
  };

  var category = [{
    label: 'How to',
    value: 'How to'
  }, {
    label: 'Inspiration',
    value: 'Inspiration'
  }, {
    label: 'Community',
    value: 'Community'
  }];

  var handleStatus = function handleStatus(evt) {
    var curStatus = status;

    if (evt.target.checked) {
      switch (evt.target.value) {
        case 'active':
          if (curStatus === 0) {
            setStatus(-1);
          } else {
            setStatus(1);
          }

          break;

        case 'inactive':
          if (curStatus === 1) {
            setStatus(-1);
          } else {
            setStatus(0);
          }

          break;
      }
    } else {
      switch (evt.target.value) {
        case 'active':
          if (curStatus === -1) {
            setStatus(0);
          } else {
            setStatus(-1);
          }

          break;

        case 'inactive':
          if (curStatus === -1) {
            setStatus(1);
          } else {
            setStatus(-1);
          }

          break;
      }
    }

    setToggleSearch(!toggleSearch);
  };

  var handleSelected = function handleSelected(id, e) {
    var row = _toConsumableArray(selected);

    var index = row.indexOf(id);
    index !== -1 ? row.splice(index, 1) : row.push(id);
    setSelected(row);
  };

  var handleDelete = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (selected.length) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _helpers_knittygritty__WEBPACK_IMPORTED_MODULE_9__["swal"].fire({
                icon: 'warning',
                title: 'Are you sure?',
                text: 'Selected items will be deleted.',
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonColor: 'hsl(349, 81%, 65%)',
                confirmButtonText: 'Confirm',
                focusConfirm: false,
                showLoaderOnConfirm: true,
                preConfirm: function preConfirm() {
                  mutation({
                    variables: {
                      ids: selected
                    }
                  });

                  if (mutationResults.error) {
                    _helpers_knittygritty__WEBPACK_IMPORTED_MODULE_9__["toast"].fire({
                      type: 'error',
                      title: 'Request failed. Please try again.'
                    });
                    return false;
                  }

                  return true;
                },
                allowOutsideClick: function allowOutsideClick() {
                  return !_helpers_knittygritty__WEBPACK_IMPORTED_MODULE_9__["swal"].isLoading();
                }
              }).then(function (result) {
                if (result.value) {
                  setSelected([]);
                  _helpers_knittygritty__WEBPACK_IMPORTED_MODULE_9__["toast"].fire({
                    type: 'info',
                    title: "Blog successfully deleted."
                  });
                }
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleDelete() {
      return _ref.apply(this, arguments);
    };
  }();

  var handlePreview = function handlePreview(a) {
    setData(a);
    setPreviewVisible(true);
  };

  var heightAdjustment = function heightAdjustment() {
    var page = document.getElementById('page').clientHeight;
    var footer = document.getElementById('footer').clientHeight;
    setH(page - footer - 90);
  };

  var BlogBody = function BlogBody() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: " flex flex-wrap"
    }, blogs.map(function (blog, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: blog.id,
        className: "w-48 h-64 border shadow-lg m-6 rounded-lg overflow-hidden"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "w-full relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "w-48 h-32",
        src: blog.featured_image
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        onClick: function onClick() {
          return handlePreview(blog);
        },
        className: "absolute right-0 bottom-0 text-white text-lg mr-2 cursor-pointer hover:text-gray-400"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: ['fas', 'eye']
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "w-full px-2 py-1 text-xs"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        className: "text-red-500",
        icon: ['fas', 'map-marker-alt']
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: " "
      }, " ", blog.blog_type, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "w-48"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        style: {
          fontSize: '0.80rem'
        },
        className: "w-48 px-2  block font-semibold leading-tight cursor-pointer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        className: "hover:text-primary-700 duration-300 transition-all text-gray-800",
        to: "/portal/blogs/".concat(blog.id)
      }, blog.title ? Object(_helpers_knittygritty__WEBPACK_IMPORTED_MODULE_9__["truncate"])(blog.title, 40) : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "w-48 px-2 "
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: " text-xs text-left leading-tight text-gray-700",
        style: {
          fontSize: '0.70rem'
        }
      }, blog.content ? Object(_helpers_knittygritty__WEBPACK_IMPORTED_MODULE_9__["silencedHtml"])(blog.content, 50) : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "w-full px-2 flex justify-between items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pretty_checkbox_react__WEBPACK_IMPORTED_MODULE_7__["Checkbox"], {
        checked: selected.indexOf(blog.id) !== -1,
        color: "danger-o",
        style: {
          fontSize: '0.70rem'
        },
        animation: "pulse",
        className: "",
        onChange: function onChange(e) {
          return handleSelected(blog.id, e);
        }
      })));
    }));
  };

  var BlogFilter = function BlogFilter() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "w-full"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "text-xl font-semibold"
    }, " Filter Blogs "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "pr-16 w-64"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_base__WEBPACK_IMPORTED_MODULE_2__["SearchBar"], {
      handleSearchChange: function handleSearchChange(e) {
        return handleSC(e.target.value);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mt-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, " Type: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ml-5"
    }, category.map(function (c, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: i,
        className: "flex items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        id: c.value,
        name: c.value,
        className: "mr-2 cursor-pointer",
        type: "checkbox",
        value: c.value,
        onChange: function onChange(e) {
          return handleCategory(e);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, c.label, " "));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mt-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, " Status "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ml-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flex items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "mr-2 cursor-pointer",
      type: "checkbox",
      value: "active",
      onChange: function onChange(e) {
        return handleStatus(e);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Active ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flex items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "mr-2 cursor-pointer",
      type: "checkbox",
      value: "inactive",
      onChange: function onChange(e) {
        return handleStatus(e);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Inactive "))))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "page",
    className: "w-full h-screen min-h-screen overflow-y-auto flex relative "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
    visible: previewVisible,
    centered: true,
    width: "70%",
    closable: false,
    footer: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_12__["Button"], {
      id: "footer",
      onClick: function onClick() {
        return setPreviewVisible(false);
      },
      key: "close"
    }, ' ', "Close")]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: function ref(body) {
      if (!body) return;
      heightAdjustment();
    },
    className: "bg-white overflow-y-auto",
    style: {
      height: "".concat(h, "px")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full h-64 bg-cover bg-center  ",
    style: {
      backgroundImage: "url('".concat(data.featured_image, "')")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full  "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: " text-center font-semibold text-lg my-10"
  }, data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: data.content
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "w-full bg-white shadow-container rounded-lg p-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-center justify-between mb-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "text-3xl font-bold"
  }, " Blogs "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/portal/blogs/add"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_base__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    styles: "secondary"
  }, "Add Blog")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_base__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "ml-4",
    styles: "secondary",
    onClick: handleDelete,
    disabled: !selected.length
  }, "Delete Blog"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-full flex justify-between "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-3/12 mr-10 "
  }, " ", BlogFilter(), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "w-9/12 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_base__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    query: "blogs",
    dlimit: 6,
    showLimit: false,
    sort: "DESC",
    isTable: false,
    search_key: keyword,
    category: {
      blog_type: cat
    },
    status: status,
    inputType: "BlogTypeInput",
    toggleRefetch: toggleSearch,
    getData: setBlogs,
    content: BlogBody(),
    params: "\n                                id\n                                title\n                                blog_type\n                                featured_image\n                                content\n                                is_active\n                                created_at\n                                updated_at\n                            "
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Blogs);

/***/ })

}]);