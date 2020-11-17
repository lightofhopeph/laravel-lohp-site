(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./resources/js/components/main/Blogs.js":
/*!***********************************************!*\
  !*** ./resources/js/components/main/Blogs.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd-mobile */ "./node_modules/antd-mobile/es/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _components_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/_base */ "./resources/js/components/_base/index.js");
/* harmony import */ var _components_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_knittygritty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/knittygritty */ "./resources/js/helpers/knittygritty.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _store_profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/profile */ "./resources/js/store/profile.js");
/* harmony import */ var _components_main_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/main/Footer */ "./resources/js/components/main/Footer.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    query blogs(\n      $search_key: String \n      $input: BlogTypeInput\n    ) {\n      blogs(\n        first: ", "\n        page: ", "\n        search_key: $search_key\n        input: $input\n        orderBy: [{ field: CREATED_AT, order: ASC }]\n      ) {\n        data {\n            title\n            blog_type\n            featured_image\n            content\n            is_active\n            created_at\n            updated_at\n        }\n        paginatorInfo {\n          hasMorePages\n          lastPage\n          currentPage\n          total\n        }\n      }\n    }\n  "]);

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













var Blogs = function Blogs() {
  var _React$createElement;

  var _profile = Object(_store_profile__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      _profile2 = _slicedToArray(_profile, 2),
      profileState = _profile2[0],
      profileActions = _profile2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(10),
      _useState2 = _slicedToArray(_useState, 2),
      limit = _useState2[0],
      setLimit = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      keyword = _useState4[0],
      setKeyword = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      cat = _useState6[0],
      setCat = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState8 = _slicedToArray(_useState7, 2),
      currentPage = _useState8[0],
      setCurrentPage = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState10 = _slicedToArray(_useState9, 2),
      totalResults = _useState10[0],
      setTotalResults = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState12 = _slicedToArray(_useState11, 2),
      newSearch = _useState12[0],
      setNewSearch = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState14 = _slicedToArray(_useState13, 2),
      searchResults = _useState14[0],
      setSearchResults = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new antd_mobile__WEBPACK_IMPORTED_MODULE_1__["ListView"].DataSource({
    rowHasChanged: function rowHasChanged(row1, row2) {
      return row1 !== row2;
    }
  })),
      _useState16 = _slicedToArray(_useState15, 2),
      blogs = _useState16[0],
      setBlogs = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState18 = _slicedToArray(_useState17, 2),
      previewVisible = _useState18[0],
      setPreviewVisible = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState20 = _slicedToArray(_useState19, 2),
      blog = _useState20[0],
      setBlog = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState22 = _slicedToArray(_useState21, 2),
      h = _useState22[0],
      setH = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(moment__WEBPACK_IMPORTED_MODULE_5___default()().year()),
      _useState24 = _slicedToArray(_useState23, 2),
      baseYear = _useState24[0],
      setBaseYear = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState26 = _slicedToArray(_useState25, 2),
      year = _useState26[0],
      setYear = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState28 = _slicedToArray(_useState27, 2),
      month = _useState28[0],
      setMonth = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(12),
      _useState30 = _slicedToArray(_useState29, 2),
      mIndex = _useState30[0],
      setMIndex = _useState30[1];

  var listview = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var GET_BLOGS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject(), limit, currentPage);

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_BLOGS, {
    variables: {
      search_key: keyword,
      input: {
        blog_type: cat,
        year: year,
        month: month
      }
    },
    fetchPolicy: 'no-cache'
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data,
      refetch = _useQuery.refetch;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (data) {
      if (newSearch) {
        setSearchResults(data['blogs'].data);
        var dataSource = blogs.cloneWithRows(data['blogs'].data);
        setBlogs(dataSource);
        setCurrentPage(0);
      } else {
        var updatedData = [].concat(_toConsumableArray(searchResults), _toConsumableArray(data['blogs'].data));
        setSearchResults(updatedData);
        setBlogs(blogs.cloneWithRows(updatedData));
      }

      setTotalResults(data['blogs'].paginatorInfo.total);
      setNewSearch(true);
    }
  }, [data]);
  var category = [{
    label: 'How to',
    value: 'How to'
  }, {
    label: 'Inspiration',
    value: 'Inspiration'
  }, {
    label: 'Community',
    value: 'Community'
  }, {
    label: 'All',
    value: ''
  }];
  var years = [{
    label: baseYear,
    value: baseYear
  }, {
    label: baseYear - 1,
    value: baseYear - 1
  }, {
    label: baseYear - 2,
    value: baseYear - 2
  }, {
    label: baseYear - 3,
    value: baseYear - 3
  }, {
    label: baseYear - 4,
    value: baseYear - 4
  }, {
    label: baseYear - 5,
    value: baseYear - 5
  }, {
    label: 'All',
    value: ''
  }];
  var months = [{
    label: 'January',
    value: 1,
    index: 0
  }, {
    label: 'February',
    value: 2,
    index: 1
  }, {
    label: 'March',
    value: 3,
    index: 2
  }, {
    label: 'April',
    value: 4,
    index: 3
  }, {
    label: 'May',
    value: 5,
    index: 4
  }, {
    label: 'June',
    value: 6,
    index: 5
  }, {
    label: 'July',
    value: 7,
    index: 6
  }, {
    label: 'August',
    value: 8,
    index: 7
  }, {
    label: 'September',
    value: 9,
    index: 8
  }, {
    label: 'October',
    value: 10,
    index: 11
  }, {
    label: 'November',
    value: 11,
    index: 10
  }, {
    label: 'December',
    value: 12,
    index: 11
  }, {
    label: 'All',
    value: '',
    index: 12
  }];
  var handleSC = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["debounce"])(function (k) {
    setKeyword(k);
  }, 800);

  var handlePreview = function handlePreview(a) {
    setBlog(a);
    setPreviewVisible(true);
  };

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
  };

  var _onEndReached = function onEndReached() {
    setNewSearch(false);
    setCurrentPage(currentPage + 1);
  };

  var heightAdjustment = function heightAdjustment() {
    var page = document.getElementById('page').clientHeight;
    var footer = document.getElementById('footer').clientHeight;
    setH(page - footer - 90);
  };

  var row = function row(r) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "w-full flex justify-center items-center mb-16 mt-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: '100%'
      },
      className: "flex justify-start items-center bg-white "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: '15.0rem',
        width: '20.0rem'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: '15.0rem',
        width: '20.0rem',
        backgroundImage: "url('".concat(r.featured_image, "')")
      },
      className: "bg-cover bg-center"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: '15.0rem'
      },
      className: " ml-8 pr-4 pb-1 flex flex-col justify-between items-start"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-menugreen uppercase tracking-wider font-semibold"
    }, ' ', r.blog_type, ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-2xl font-semibold text-darkgray"
    }, ' ', Object(_helpers_knittygritty__WEBPACK_IMPORTED_MODULE_4__["truncate"])(r.title, 50)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: " text-left text-darkgray "
    }, ' ', moment__WEBPACK_IMPORTED_MODULE_5___default()(r.created_at, 'YYYY-MM-DD hh:mm:ss').format('MM/D/YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        fontSize: '1.0rem'
      },
      className: " text-darkgray text-justify"
    }, ' ', Object(_helpers_knittygritty__WEBPACK_IMPORTED_MODULE_4__["silencedHtml"])(r.content, 300), "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "border cursor-pointer px-1 border-lightgray hover:bg-gray-200",
      onClick: function onClick() {
        return handlePreview(r);
      }
    }, "Read More", ' '))));
  };

  var BlogFilter = function BlogFilter() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "w-full"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "text-xl font-semibold"
    }, " Filter Blogs "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pr-16 w-64"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_base__WEBPACK_IMPORTED_MODULE_3__["SearchBar"], {
      handleSearchChange: function handleSearchChange(e) {
        return handleSC(e.target.value);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mt-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, " Type: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ml-5"
    }, category.map(function (c, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: i,
        className: "flex items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: c.value,
        name: c.value,
        className: "mr-2 cursor-pointer",
        type: "checkbox",
        value: c.value,
        onChange: function onChange(e) {
          return handleCategory(e);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, c.label, " "));
    })))));
  };

  var BodyBlogs = function BodyBlogs(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.children);
  };

  var CatMenu = function CatMenu() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bg-white border shadow-lg"
    }, category.map(function (c, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: i,
        className: "tracking-widest cursor-pointer hover:bg-gray-300 px-4 py-1",
        onClick: function onClick() {
          if (c.label === 'All') {
            setCat([]);
          } else {
            setCat([c.value]);
          }
        }
      }, c.label);
    }));
  };

  var YearMenu = function YearMenu() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bg-white border shadow-lg"
    }, years.map(function (y, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: i,
        className: "tracking-widest cursor-pointer hover:bg-gray-300 px-4 py-1",
        onClick: function onClick() {
          if (y.label === 'All') {
            setYear('');
          } else {
            setYear(y.value);
          }
        }
      }, y.label);
    }));
  };

  var MonthMenu = function MonthMenu() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bg-white border shadow-lg"
    }, months.map(function (m, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: i,
        className: "tracking-widest cursor-pointer hover:bg-gray-300 px-4 py-1",
        onClick: function onClick() {
          if (m.label === 'All') {
            setMonth();
            setMIndex(i);
          } else {
            setMonth(m.value);
            setMIndex(i);
          }
        }
      }, m.label);
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    visible: previewVisible,
    centered: true,
    width: "75%",
    closable: false,
    footer: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      id: "footer",
      onClick: function onClick() {
        return setPreviewVisible(false);
      },
      key: "close"
    }, ' ', "Close")]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: function ref(body) {
      if (!body) return; //  heightAdjustment();
    },
    className: "bg-white overflow-y-auto" // style={{height: `${h}px`}}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full bg-darkgray flex justify-center bg-cover bg-center  ",
    style: {
      backgroundImage: "url(".concat(blog.featured_image, ")"),
      height: '20rem'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full  "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " text-left font-semibold text-3xl mt-12"
  }, blog.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " text-left text-lg italic mb-16"
  }, ' ', moment__WEBPACK_IMPORTED_MODULE_5___default()(blog.created_at, 'YYYY-MM-DD hh:mm:ss').format('MM/D/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: blog.content
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "w-full h-full bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full  border-t-2 border-b-2 border-superlightgray mb-5 flex items-center justify start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], {
    overlay: function overlay() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(YearMenu, null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-center cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " text-darkgray tracking-widest uppercase"
  }, "year: ", year === '' ? 'All' : year), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["DownOutlined"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-5"
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], {
    overlay: function overlay() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MonthMenu, null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-center cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " text-darkgray tracking-widest uppercase"
  }, "month:", ' ', month === '' ? 'All' : months[mIndex]['label']), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["DownOutlined"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-5"
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], {
    overlay: function overlay() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CatMenu, null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center justify-center cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " text-darkgray tracking-widest uppercase"
  }, "Category: ", Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(cat) ? 'All' : cat[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["DownOutlined"], null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full h-full "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_mobile__WEBPACK_IMPORTED_MODULE_1__["ListView"], (_React$createElement = {
    ref: listview,
    key: 1,
    dataSource: blogs,
    style: {
      height: document.documentElement.clientHeight - 80,
      border: 'none'
    },
    renderFooter: function renderFooter() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: 30,
          textAlign: 'center'
        }
      }, loading ? 'Loading...' : '');
    },
    renderBodyComponent: function renderBodyComponent() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BodyBlogs, null);
    },
    renderRow: row
  }, _defineProperty(_React$createElement, "renderFooter", function renderFooter() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "-mb-3 -mx-16"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_main_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], null));
  }), _defineProperty(_React$createElement, "useBodyScroll", false), _defineProperty(_React$createElement, "scrollRenderAheadDistance", 50), _defineProperty(_React$createElement, "useBodyScroll", true), _defineProperty(_React$createElement, "onEndReached", function onEndReached() {
    if (totalResults > 10) {
      _onEndReached();
    }
  }), _defineProperty(_React$createElement, "pageSize", 10), _React$createElement)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Blogs);

/***/ }),

/***/ "./resources/js/pages/main/BlogsPage.js":
/*!**********************************************!*\
  !*** ./resources/js/pages/main/BlogsPage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_main_Blogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/main/Blogs */ "./resources/js/components/main/Blogs.js");
/* harmony import */ var _store_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/profile */ "./resources/js/store/profile.js");
/* harmony import */ var _components_main_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/main/Footer */ "./resources/js/components/main/Footer.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var BlogsPage = function BlogsPage() {
  var _profile = Object(_store_profile__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      _profile2 = _slicedToArray(_profile, 2),
      profileState = _profile2[0],
      profileActions = _profile2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full relative bg-gray-400 h-auto bg-cover bg-center",
    style: {
      backgroundImage: "url(".concat(profileState.profile.blog_image, ")"),
      imageRendering: '-webkit-optimize-contrast',
      height: '50%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "absolute w-2/5 h-full right-0 flex flex-col justify-center items-center font-normal text-lightgray font-hairline italic text-2xl ",
    style: {
      fontFamily: 'Poppins'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("q", null, "A simple sunbeam is enough,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "pl-12"
  }, "to drive away many shadows.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full text-left text-3xl  my-12 text-darkgray font-semibold tracking-wider",
    style: {
      fontFamily: 'Montserrat, sans-serif'
    }
  }, ' ', "Blogs", ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_main_Blogs__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogsPage);

/***/ })

}]);