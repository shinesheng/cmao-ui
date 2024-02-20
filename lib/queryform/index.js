"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _row = _interopRequireDefault(require("../grid/row"));
var _col = _interopRequireDefault(require("../grid/col"));
var _formItem = _interopRequireDefault(require("./formItem"));
var _index = _interopRequireDefault(require("../button/index"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Temp = function Temp(props) {
  (0, _react.useEffect)(function () {}, []);
  var groups = props.groups;
  var cls = ['fp-query-form'];
  if (props.className) {
    cls.push(props.className);
  }
  if (!props.groups) {
    console.error('groups is undefined');
    return null;
  }
  var totalSpan = 0;
  var len = groups.length;
  var itemSpan = 0;
  groups[len - 1].map(function (item, index) {
    itemSpan = item.span ? item.span : 24 / props.col || 8;
    totalSpan += itemSpan;
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: cls.join(' ')
  }, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: props.onSubmit
  }, /*#__PURE__*/_react["default"].createElement("fieldset", null, groups.map(function (row, index) {
    return /*#__PURE__*/_react["default"].createElement(_row["default"], {
      gutter: props.gutter || 0,
      className: "fp-query-row",
      key: index
    }, row.map(function (item, index2) {
      return /*#__PURE__*/_react["default"].createElement(_col["default"], {
        span: item.span ? item.span : 24 / props.col || 8,
        key: index2
      }, /*#__PURE__*/_react["default"].createElement(_formItem["default"], {
        data: item
      }));
    }), totalSpan < 24 && index == groups.length - 1 ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "fp-query-btn-warp"
    }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
      text: "\u67E5 \u8BE2",
      style: "primary",
      type: "submit",
      className: "fp-query-btn"
    }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
      text: "\u91CD\u7F6E",
      style: "default",
      className: "fp-query-btn",
      onClick: props.onReset
    })) : null);
  }), totalSpan >= 24 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "fp-query-btn-warp"
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    text: "\u67E5 \u8BE2",
    style: "primary",
    type: "submit",
    className: "fp-query-btn"
  }), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    text: "\u91CD\u7F6E",
    style: "default",
    className: "fp-query-btn",
    onClick: props.onReset
  })) : null)));
};
var _default = exports["default"] = Temp;