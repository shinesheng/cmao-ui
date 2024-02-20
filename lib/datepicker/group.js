"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _index = _interopRequireDefault(require("./index"));
var _row = _interopRequireDefault(require("../grid/row"));
var _col = _interopRequireDefault(require("../grid/col"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
 * 使用方法：
 * <DatepickerGroup
        name='startTime'
        value={'2018-02-02'}
        more='endTime'
        moreValue={'2018-01-01'}
        wtype='2'
        size="lg"
    />
 */
var Temp = function Temp(props) {
  (0, _react.useEffect)(function () {}, []);
  var phs = props.placeholder ? props.placeholder.split('|') : [];
  var cls = ['fp-datePicker-group'];
  if (props.className) {
    cls.push(props.className);
  }
  return /*#__PURE__*/_react["default"].createElement(_row["default"], {
    className: cls.join(' ')
  }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 11
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    ref: props.name,
    name: props.name,
    value: props.value
    // onChange={onDateChange}
    ,
    placeholder: phs[0],
    size: props.size,
    wtype: props.wtype,
    dateFmt: props.dateFmt,
    minDate: props.minDate,
    maxDate: props.maxDate
  })), props.more ? /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 1,
    className: "fp-datepicker-text"
  }, "\u2014") : null, props.more ? /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 11
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    ref: props.more,
    name: props.more,
    value: props.moreValue
    // onChange={onMoreDateChange}
    ,
    placeholder: phs[1],
    size: props.size,
    wtype: props.wtype,
    dateFmt: props.dateFmt,
    minDate: props.moreMinDate,
    maxDate: props.moreMaxDate
  })) : null);
};
var _default = exports["default"] = Temp;