"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _button = _interopRequireDefault(require("../button"));
var _this = void 0;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Temp = function Temp(props) {
  (0, _react.useEffect)(function () {}, []);
  var onPageChange = function onPageChange(page) {
    if (page < props.min || page > props.max) {
      return;
    }
    props.onPageChange(page);
  };
  var pages = function pages() {
    var i;
    var max;
    var len = props.len || 3;
    var min = props.page - Math.floor(len / 2);
    var arr = [];
    if (min + len - 1 > props.max) {
      min = props.max - len + 1;
    }
    if (min < props.min) {
      min = props.min;
    }
    for (i = min, max = min + len; i < max; i++) {
      if (i > props.max) {
        break;
      }
      arr.push(i);
    }
    return arr;
  };

  // var hasPrev = props.page <= props.min;
  // var hasNext = props.page >= props.max;
  var cls = ['fp-items'];
  if (props.btnSize) {
    cls.push('fp-items-' + props.btnSize);
  }
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: cls.join(' ')
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_button["default"], {
    className: "fp-page-control fp-prev",
    style: "default",
    size: props.btnSize || '',
    disabled: props.page <= props.min,
    onClick: function onClick() {
      onPageChange(props.page - 1);
    }
  })), pages().map(function (page, i) {
    var cls = [];
    if (page == props.page) {
      cls.push('fp-page-active');
    }
    return /*#__PURE__*/_react["default"].createElement("li", {
      className: cls.join(' '),
      key: i
    }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
      className: "fp-item",
      style: "default",
      text: page,
      size: props.btnSize || '',
      onClick: function onClick() {
        onPageChange(page);
      }
    }));
  }.bind(_this)), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_button["default"], {
    className: "fp-page-control fp-next",
    style: "default",
    size: props.btnSize || '',
    disabled: props.page >= props.max,
    onClick: function onClick() {
      onPageChange(props.page + 1);
    }
  })));
};
var _default = exports["default"] = Temp;