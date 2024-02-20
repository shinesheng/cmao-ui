"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _input = _interopRequireDefault(require("../input"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
 * 使用方法：
 * <Datepicker name="time"
    wtype="2"
    size='lg'
    value='2018-04-11 20:0:00'
    dateFmt={'yyyy-MM-dd HH:mm:ss'}
    onChange={this.dateChange}/>
 */
var Temp = function Temp(props) {
  (0, _react.useEffect)(function () {}, []);
  var datePicker = function datePicker(e) {};
  var clickIcon = function clickIcon() {
    // datePicker();
  };
  var cls = ['fp-datepicker', props.className];
  if (props.size) {
    cls.push('fp-datepicker-' + props.size);
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: cls.join(' ')
  }, /*#__PURE__*/_react["default"].createElement(_input["default"], {
    ref: props.name,
    name: props.name,
    value: props.value,
    onClick: datePicker
    // onKeyUp={valueChange}
    ,
    placeholder: props.placeholder,
    size: props.size,
    wtype: props.wtype,
    autoComplete: "off",
    disabled: props.disabled,
    readonly: props.readonly
  }), /*#__PURE__*/_react["default"].createElement("i", {
    onClick: clickIcon
  }));
};
var _default = exports["default"] = Temp;