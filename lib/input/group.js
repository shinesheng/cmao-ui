"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _index = _interopRequireDefault(require("./index"));
var _row = _interopRequireDefault(require("../grid/row"));
var _col = _interopRequireDefault(require("../grid/col"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Temp = function Temp(props) {
  var _useState = (0, _react.useState)(props.totalCols || 24),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 1),
    totalCols = _useState2[0];
  (0, _react.useEffect)(function () {}, []);
  var onChange = function onChange(value) {
    props.onChange && props.onChange(value);
  };
  var onMoreChange = function onMoreChange(value) {
    props.onMoreChange && props.onMoreChange(value);
  };
  var phs = props.placeholder ? props.placeholder.split('|') : [];
  return /*#__PURE__*/_react["default"].createElement(_row["default"], {
    className: "fp-input-group"
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 11
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    name: props.name,
    value: props.value,
    onChange: onChange,
    placeholder: phs[0],
    size: props.size,
    wtype: props.wtype,
    dataType: props.dataType
  })), props.more ? /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 1,
    className: "fp-input-more-text"
  }, "\u2014") : null, props.more ? /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 11
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    name: props.more,
    value: props.moreValue,
    onChange: onMoreChange,
    placeholder: phs[1],
    size: props.size,
    wtype: props.wtype,
    dataType: props.moreDataType
  })) : null);
};
var _default = exports["default"] = Temp;