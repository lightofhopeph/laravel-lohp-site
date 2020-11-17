(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/components/_base sync .*\\.(js)$":
/*!*******************************************************************!*\
  !*** ./resources/js/components/_base sync nonrecursive .*\.(js)$ ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Button.js": "./resources/js/components/_base/Button.js",
	"./Form.js": "./resources/js/components/_base/Form.js",
	"./Input.js": "./resources/js/components/_base/Input.js",
	"./SearchBar.js": "./resources/js/components/_base/SearchBar.js",
	"./Table.js": "./resources/js/components/_base/Table.js",
	"./TextArea.js": "./resources/js/components/_base/TextArea.js",
	"./Tooltip.js": "./resources/js/components/_base/Tooltip.js",
	"./index.js": "./resources/js/components/_base/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/components/_base sync .*\\.(js)$";

/***/ }),

/***/ "./resources/js/components/_base/Button.js":
/*!*************************************************!*\
  !*** ./resources/js/components/_base/Button.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Button = function Button(_ref) {
  var className = _ref.className,
      children = _ref.children,
      onClick = _ref.onClick,
      _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? "primary" : _ref$styles,
      rest = _objectWithoutProperties(_ref, ["className", "children", "onClick", "styles"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({
    className: "button button-".concat(styles, " ").concat(className),
    onClick: onClick
  }, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./resources/js/components/_base/Form.js":
/*!***********************************************!*\
  !*** ./resources/js/components/_base/Form.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var pretty_checkbox_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pretty-checkbox-react */ "./node_modules/pretty-checkbox-react/dist-web/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-quill */ "./node_modules/react-quill/lib/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Input */ "./resources/js/components/_base/Input.js");
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextArea */ "./resources/js/components/_base/TextArea.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _helpers_knittygritty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/knittygritty */ "./resources/js/helpers/knittygritty.js");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Tooltip */ "./resources/js/components/_base/Tooltip.js");
/* harmony import */ var _store_profile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/profile */ "./resources/js/store/profile.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var Form = function Form(_ref) {
  var errors = _ref.errors,
      formFields = _ref.formFields,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data;

  var _profile = Object(_store_profile__WEBPACK_IMPORTED_MODULE_11__["default"])(),
      _profile2 = _slicedToArray(_profile, 2),
      profileState = _profile2[0],
      profileActions = _profile2[1];

  var Field = function Field(key) {
    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = _slicedToArray(_useState, 2),
        limitError = _useState2[0],
        setLimitError = _useState2[1];

    var type = formFields[key].type;
    var inputFile = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

    var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
        _useState4 = _slicedToArray(_useState3, 2),
        filename = _useState4[0],
        setFilename = _useState4[1];

    var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
        _useState6 = _slicedToArray(_useState5, 2),
        editorValue = _useState6[0],
        setEditorValue = _useState6[1];

    var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
        _useState8 = _slicedToArray(_useState7, 2),
        base64 = _useState8[0],
        setBase64 = _useState8[1];

    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      if (type === 'editor' && formFields[key].value) {
        setEditorValue(formFields[key].value);
      }
    }, [formFields[key].value]);

    switch (type) {
      case 'select':
        var handleDefaultValue = function handleDefaultValue() {
          var value = formFields[key].value;
          var selected = null;
          Object.keys(formFields[key].options).forEach(function (optionKey) {
            if (formFields[key].options[optionKey].value === value) {
              selected = formFields[key].options[optionKey];
            }
          });
          return selected;
        };

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_7__["default"], {
          isOptionSelected: true,
          isSearchable: false,
          name: key,
          classNamePrefix: "input-select",
          onChange: formFields[key].handleChange,
          className: "select-dropdown w-full",
          placeholder: formFields[key].placeholder,
          options: formFields[key].options,
          defaultValue: handleDefaultValue()
        });

      case 'file':
        var handleFile = function handleFile() {
          var name = '';

          if (inputFile.current.files.length) {
            var files = Array.from(inputFile.current.files);
            name = files[0].name;
          }

          setFilename(name);
        };

        var clearFile = function clearFile() {
          inputFile.current.type = '';
          inputFile.current.type = 'file';
          setFilename('');
        };

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "c-file-input js-file-input bg-gray-100 hover:bg-gray-200 ".concat(filename && 'has-file')
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "c-file-input__indicator"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "c-file-input__indicator__icon c-icon c-icon--attach"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
          className: "fa fa-paperclip"
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "cursor-pointer c-file-input__label js-file-input__label ".concat(filename && 'text-primary')
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, filename || 'No file choosen'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          ref: inputFile,
          type: "file",
          name: formFields[key].name || key,
          accept: formFields[key].accept,
          onChange: handleFile,
          className: "c-file-input__field js-file-input__field"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "c-file-input__remove js-file-input__remove",
          onClick: clearFile
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "c-file-input__remove__icon c-icon c-icon--remove-circle"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
          className: "fa fa-minus-circle"
        }))));

      case 'radio':
        var radioWrapperClass = formFields[key].classname || 'flex flex-col';
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
          className: radioWrapperClass
        }, Object.keys(formFields[key].options).map(function (optionKey) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pretty_checkbox_react__WEBPACK_IMPORTED_MODULE_3__["Radio"], _extends({
            key: optionKey,
            name: key,
            value: optionKey,
            inputProps: {
              defaultChecked: formFields[key].value === optionKey
            }
          }, formFields[key].methods, {
            color: "danger"
          }), formFields[key].options[optionKey]);
        }));

      case 'textarea':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TextArea__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: key,
          rows: 6,
          defaultValue: formFields[key].value || data[key] || "",
          placeholder: formFields[key].placeholder || ""
        }));

      case 'editor':
        var modules = {
          toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
            list: 'ordered'
          }, {
            list: 'bullet'
          }], [{
            script: 'sub'
          }, {
            script: 'super'
          }], [{
            indent: '-1'
          }, {
            indent: '+1'
          }], [{
            direction: 'rtl'
          }], [{
            header: [1, 2, 3, 4, 5, 6, false]
          }], [{
            color: []
          }, {
            background: []
          }], [{
            font: []
          }], [{
            align: []
          }], ['link', 'image']]
        };
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_quill__WEBPACK_IMPORTED_MODULE_4___default.a // theme={`snow`}
        , {
          className: "w-full h-full",
          modules: modules,
          value: editorValue,
          onChange: setEditorValue
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
          name: key,
          className: "hidden ",
          value: editorValue,
          onChange: function onChange() {
            return null;
          }
        }));

      case 'base64':
        var handleFileChange = function handleFileChange(e) {
          e.preventDefault();

          if (e.target.files.length > 0) {
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);

            reader.onload = function () {
              setBase64(reader.result);
            };

            reader.onerror = function (error) {
              console.log(error);
            }; //setFilename(e.target.files[0]["name"]);

          } else {//setFilename("");
            }
        };

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: ""
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "w-full cursor-pointer"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          id: key,
          type: "file",
          className: "hidden",
          name: key,
          accept: formFields[key].accept,
          onChange: handleFileChange
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          className: "w-64 h-48 border bg-center bg-cover",
          src: base64 ? base64 : formFields[key].value || data[key] || null
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "w-full text-center text-gray-700 px-2 text-xs italic"
        }, "Please select an image...")));

      case 'array':
        var handleRemove = /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, i) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    e.preventDefault();
                    e.stopPropagation();
                    profileActions.setStateImages(_toConsumableArray(profileState.state_images.filter(function (image, k) {
                      if (i !== k) {
                        return image;
                      }
                    })));

                    if (profileState.state_images.length > 8) {
                      setLimitError(true);
                    } else {
                      setLimitError(false);
                    }

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function handleRemove(_x, _x2) {
            return _ref2.apply(this, arguments);
          };
        }();

        var handleChange = /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
            var fmCount, onCount, imgs;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    fmCount = profileState.state_images.length;
                    onCount = e.target.files.length;

                    if (!(fmCount + onCount > 8)) {
                      _context2.next = 8;
                      break;
                    }

                    setLimitError(true);
                    e.target.value = null;
                    return _context2.abrupt("return");

                  case 8:
                    setLimitError(false);

                  case 9:
                    imgs = profileState.state_images;

                    _toConsumableArray(e.target.files).map(function (file) {
                      var reader = new FileReader();
                      reader.readAsDataURL(file);

                      reader.onload = function () {
                        // profileActions.setStateImages([
                        //     ...profileState.state_images.concat({
                        //         image: reader.result,
                        //         description: '',
                        //     }),
                        // ]);
                        imgs.push({
                          image: reader.result,
                          description: ''
                        });
                        profileActions.setStateImages(imgs);
                      };

                      reader.onerror = function (error) {
                        console.log(error);
                      };
                    });

                    e.target.value = null;

                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function handleChange(_x3) {
            return _ref3.apply(this, arguments);
          };
        }();

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: ""
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "w-full h-full flex flex-wrap justify-evenly ",
          style: {
            textAlign: 'center',
            marginBottom: '0px'
          }
        }, console.log('ac ', profileState.state_images), profileState.state_images.map(function (image, index) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            key: index,
            className: "rounded-sm border m-2 relative w-40 h-40 bg-cover bg-center",
            style: {
              backgroundImage: "url('".concat(image.image, "')")
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "absolute bg-palette-blue-light font-bold leading-none ml-1 mt-1 rounded-full text-white w-1/4"
          }, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_10__["default"], {
            title: "Remove this item"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            onClick: function onClick(e) {
              return handleRemove(e, index);
            },
            className: "absolute bottom-0 right-0 p-2 -mb-2 cursor-pointer"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
            className: "text-red-500 shadow-xl hover:font-bold hover:text-red-700",
            icon: ['fas', 'times']
          }))));
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "rounded-sm overflow-hidden  m-2 w-40 h-40 bg-cover bg-center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "w-40 h-40 bg-gray-100 hover:bg-gray-300 cursor-pointer relative flex justify-center items-center",
          onDragOver: function onDragOver(e) {
            e.preventDefault();
            e.stopPropagation();
          },
          onDragEnter: function onDragEnter(e) {
            e.preventDefault();
            e.stopPropagation();
          },
          onDragLeave: function onDragLeave(e) {
            e.preventDefault();
            e.stopPropagation();
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
          className: "text-2xl",
          icon: ['fas', 'cloud-upload-alt']
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "block text-base"
        }, "Click to add image")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "file",
          id: key,
          accept: "image/*",
          multiple: true,
          className: "hidden",
          name: key,
          onChange: function onChange(e) {
            return handleChange(e);
          }
        }))))), limitError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "px-1 text-red-400 tracking-widest  text-xs "
        }, "Please limit your photos to eight(8) items only."));

      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
          type: formFields[key].type || "text",
          step: "any",
          className: "\n                                ".concat(formFields[key]["class"], "\n                                ").concat(formFields[key].width || 'w-full', "\n                            "),
          name: key,
          autoComplete: "off",
          defaultValue: formFields[key].value || data[key] || "",
          placeholder: formFields[key].placeholder || "",
          minLength: formFields[key].minlength || "",
          maxLength: formFields[key].maxlength || ""
        }));
    }
  };

  return Object.keys(formFields).map(function (value, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mb-5 text-base flex",
      key: formFields[value].id ? "".concat(formFields[value].id).concat(key) : key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "mr-3 w-32 mt-2 capitalize"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "font-semibold text-sm"
    }, formFields[value].label || value.replace('_', ' ')), formFields[value].required && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "text-red-500"
    }, " *")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "w-full ml-3 "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flex"
    }, Field(value)), errors[value] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "text-red-500 text-sm"
    }, errors[value])));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./resources/js/components/_base/Input.js":
/*!************************************************!*\
  !*** ./resources/js/components/_base/Input.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Input = function Input(_ref) {
  var label = _ref.label,
      className = _ref.className,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ["label", "className", "onChange"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "relative w-full"
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block font-medium text-xs"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    className: "appearance-none border border-gray-400 rounded-sm px-3 py-2 w-full ".concat(className),
    onChange: onChange
  }, rest)));
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./resources/js/components/_base/SearchBar.js":
/*!****************************************************!*\
  !*** ./resources/js/components/_base/SearchBar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var SearchBar = function SearchBar(_ref) {
  var _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Enter search...' : _ref$placeholder,
      handleSearchChange = _ref.handleSearchChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full flex items-center relative text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "inline feather-icon ml-3 h-4 w-4 absolute left-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: "/assets/svg/feather-sprite.svg#search"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: function onChange(e) {
      return handleSearchChange(e);
    },
    className: "w-full appearance-none  bg-primary-400 h-full px-12 py-3 rounded-sm w-full placeholder-current outline-none font-light",
    type: "text",
    placeholder: placeholder
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./resources/js/components/_base/Table.js":
/*!************************************************!*\
  !*** ./resources/js/components/_base/Table.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _table_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table/Pagination */ "./resources/js/components/_base/table/Pagination.js");
/* harmony import */ var _table_PageSelectSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table/PageSelectSize */ "./resources/js/components/_base/table/PageSelectSize.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      query ", "($search_key: String, $input: ", ", $status: Int) {\n        ", "(\n          first: ", ",\n          page: ", "\n          search_key: $search_key\n          input: $input\n          status: $status\n          orderBy: [\n            { field: ", ", order: ", " }\n          ]\n        ) {\n          data {\n            ", "\n          }\n          paginatorInfo {\n            hasMorePages\n            lastPage\n            currentPage\n            total\n          }\n        }\n      }\n    "]);

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






var Table = function Table(_ref) {
  var _ref$dlimit = _ref.dlimit,
      dlimit = _ref$dlimit === void 0 ? 10 : _ref$dlimit,
      _ref$showLimit = _ref.showLimit,
      showLimit = _ref$showLimit === void 0 ? true : _ref$showLimit,
      className = _ref.className,
      _ref$search_key = _ref.search_key,
      search_key = _ref$search_key === void 0 ? null : _ref$search_key,
      _ref$category = _ref.category,
      category = _ref$category === void 0 ? {} : _ref$category,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? -1 : _ref$status,
      toggleRefetch = _ref.toggleRefetch,
      header = _ref.header,
      content = _ref.content,
      _ref$isTable = _ref.isTable,
      isTable = _ref$isTable === void 0 ? false : _ref$isTable,
      query = _ref.query,
      params = _ref.params,
      _ref$order = _ref.order,
      order = _ref$order === void 0 ? "CREATED_AT" : _ref$order,
      _ref$sort = _ref.sort,
      sort = _ref$sort === void 0 ? "ASC" : _ref$sort,
      _ref$inputType = _ref.inputType,
      inputType = _ref$inputType === void 0 ? 'PostCategoryList' : _ref$inputType,
      getData = _ref.getData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(dlimit),
      _useState2 = _slicedToArray(_useState, 2),
      limit = _useState2[0],
      setLimit = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState4 = _slicedToArray(_useState3, 2),
      currentPage = _useState4[0],
      setCurrentPage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState6 = _slicedToArray(_useState5, 2),
      lastPage = _useState6[0],
      setLastPage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState8 = _slicedToArray(_useState7, 2),
      total = _useState8[0],
      setTotal = _useState8[1];

  var GET_DATA = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject(), query, inputType, query, limit, currentPage, order, sort, params);

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(GET_DATA, {
    variables: {
      search_key: search_key,
      input: _objectSpread({}, category),
      status: status
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data,
      refetch = _useQuery.refetch;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    refetch();
    setCurrentPage(1);
  }, [toggleRefetch]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (data) {
      setTotal(data[query].paginatorInfo.total);
      setCurrentPage(data[query].paginatorInfo.currentPage);
      setLastPage(data[query].paginatorInfo.lastPage);
      getData(data[query].data);
    }
  }, [data]);

  var changeLimit = function changeLimit(value) {
    setCurrentPage(1);
    setLimit(value);
  };

  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "w-full flex items-center justify-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, " Loading items... "));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, !total ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block flex flex-col h-64 items-center justify-center text-base text-gray-400 w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block mt-2"
  }, "No results found")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "text-left w-full ".concat(className)
  }, isTable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, header, content)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-center relative w-full mt-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_table_Pagination__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onPageChange: setCurrentPage,
    currentPage: currentPage,
    lastPage: lastPage
  }), showLimit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_table_PageSelectSize__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: changeLimit
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./resources/js/components/_base/TextArea.js":
/*!***************************************************!*\
  !*** ./resources/js/components/_base/TextArea.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var TextArea = function TextArea(_ref) {
  var label = _ref.label,
      className = _ref.className,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ["label", "className", "onChange"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "relative w-full"
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "block font-medium text-xs"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", _extends({
    className: "appearance-none border border-gray-400 rounded-sm px-3 py-2 w-full ".concat(className),
    onChange: onChange
  }, rest)));
};

/* harmony default export */ __webpack_exports__["default"] = (TextArea);

/***/ }),

/***/ "./resources/js/components/_base/Tooltip.js":
/*!**************************************************!*\
  !*** ./resources/js/components/_base/Tooltip.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function arrowGenerator(color) {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.95em',
      width: '2em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: "transparent transparent ".concat(color, " transparent")
      }
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.95em',
      width: '2em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: "".concat(color, " transparent transparent transparent")
      }
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.95em',
      height: '2em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: "transparent ".concat(color, " transparent transparent")
      }
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: '-0.95em',
      height: '2em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: "transparent transparent transparent ".concat(color)
      }
    }
  };
}

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function () {
  return {
    arrow: {
      position: 'absolute',
      fontSize: 6,
      '&::before': {
        content: '""',
        margin: 'auto',
        display: 'block',
        width: 0,
        height: 0,
        borderStyle: 'solid'
      }
    },
    popper: arrowGenerator('#009EFF'),
    tooltip: {
      position: 'relative',
      backgroundColor: '#009EFF',
      fontSize: 12,
      padding: '4px 12px',
      borderRadius: 3,
      letterSpacing: 0.5,
      fontFamily: 'Basis Grotesque Pro, sans-serif',
      maxWidth: 180
    },
    tooltipPlacementLeft: {
      margin: '0 8px'
    },
    tooltipPlacementRight: {
      margin: '0 8px'
    },
    tooltipPlacementTop: {
      margin: '8px 0'
    },
    tooltipPlacementBottom: {
      margin: '8px 0'
    }
  };
});

var Tooltip = function Tooltip(_ref) {
  var rest = _extends({}, _ref);

  var _useStyles = useStyles(),
      arrow = _useStyles.arrow,
      classes = _objectWithoutProperties(_useStyles, ["arrow"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      arrowRef = _useState2[0],
      setArrowRef = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], _extends({
    classes: classes,
    PopperProps: {
      popperOptions: {
        modifiers: {
          arrow: {
            enabled: Boolean(arrowRef),
            element: arrowRef
          }
        }
      }
    }
  }, rest, {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, rest.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: arrow,
      ref: setArrowRef
    }))
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ }),

/***/ "./resources/js/components/_base/index.js":
/*!************************************************!*\
  !*** ./resources/js/components/_base/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireContext = __webpack_require__("./resources/js/components/_base sync .*\\.(js)$");

var components = {};
requireContext.keys().forEach(function (fileName) {
  if (fileName === './index.js') return;
  var name = fileName.replace(/(\.\/|\.js)/g, '');
  components[name] = requireContext(fileName)["default"];
});
module.exports = components;

/***/ }),

/***/ "./resources/js/components/_base/table/PageSelectSize.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/_base/table/PageSelectSize.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var PageSelectSize = function PageSelectSize(_ref) {
  var _onClick = _ref.onClick;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(10),
      _useState2 = _slicedToArray(_useState, 2),
      size = _useState2[0],
      setSize = _useState2[1];

  var pageSizeOptions = [10, 20, 50, 100, 200];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    name: "PageSizeSelect",
    className: "lg:absolute lg:right-0 flex items-center justify-center mt-6 text-xs lg:mt-0 text-gray-600"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "font-medium mr-2"
  }, "Items per page:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "flex items-center m-0"
  }, pageSizeOptions.map(function (value, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key,
      className: "page-size-select",
      onClick: function onClick() {
        setSize(value);

        _onClick(value);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "font-medium cursor-pointer ".concat(value === size ? 'text-primary-400' : 'text-gray-600')
    }, value), key !== pageSizeOptions.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mx-1"
    }, "\u2022"));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PageSelectSize);

/***/ }),

/***/ "./resources/js/components/_base/table/Pagination.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/_base/table/Pagination.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Pagination = function Pagination(_ref) {
  var currentPage = _ref.currentPage,
      lastPage = _ref.lastPage,
      onPageChange = _ref.onPageChange;

  var isFirstPage = function isFirstPage() {
    return currentPage === 1;
  };

  var isLastPage = function isLastPage() {
    return currentPage === lastPage;
  };

  var dspBtns = function dspBtns() {
    var n = lastPage;
    var i = currentPage;
    /* eslint-disable */

    if (n <= 9) return function (n) {
      var arr = Array(n);

      while (n) {
        arr[n - 1] = n--;
      }

      return arr;
    }(n);
    if (i <= 5) return [1, 2, 3, 4, 5, 6, 7, 0, n]; // 0 represents `···`

    if (i >= n - 4) return [1, 0, n - 6, n - 5, n - 4, n - 3, n - 2, n - 1, n];
    return [1, 0, i - 2, i - 1, i, i + 1, i + 2, 0, n];
    /* eslint-enable */
  };

  var handleClick = function handleClick(n) {
    onPageChange(n);
  };

  var turnPage = function turnPage(page) {
    onPageChange(page);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center mb-3 lg:mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "pagination",
    name: "Pagination"
  }, !isFirstPage() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "page-item",
    onClick: function onClick() {
      return turnPage(currentPage - 1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "page-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "feather-icon w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: "/assets/svg/feather-sprite.svg#chevron-left"
  })))), dspBtns().map(function (button, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i,
      className: "page-item ".concat(button === currentPage ? 'active' : '')
    }, button ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "page-link",
      onClick: function onClick() {
        return handleClick(button);
      }
    }, button) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "page-link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-ellipsis-h"
    })));
  }), !isLastPage() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "page-item",
    onClick: function onClick() {
      return turnPage(currentPage + 1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "page-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "feather-icon w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: "/assets/svg/feather-sprite.svg#chevron-right"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

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


/***/ })

}]);