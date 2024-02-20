"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _row = _interopRequireDefault(require("../grid/row"));
var _col = _interopRequireDefault(require("../grid/col"));
var _context = require("./context");
var _excluded = ["children", "rules"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Temp = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var children = props.children,
    rules = props.rules,
    otherPorps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var _useContext = (0, _react.useContext)(_context.FormContext),
    formData = _useContext.formData,
    formTitle = _useContext.formTitle,
    formValidMsg = _useContext.formValidMsg,
    changeForm = _useContext.changeForm,
    initValid = _useContext.initValid;
  (0, _react.useEffect)(function () {
    var data = {};
    data[props.name] = null;
    changeForm && changeForm(data);
    formTitle[props.name] = props.title;
  }, []);
  var onChange = function onChange(e) {
    var data = {};
    Object.assign(data, formData);
    data[props.name] = e.target.value;
    changeForm && changeForm(data);
    //变更时，去除错误信息框
    formValidMsg[props.name] = '';
  };
  if (props.isValid) {
    //写入校验规则到form实例
    initValid(props.name, props.rules);
  }
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_row["default"], null, /*#__PURE__*/_react["default"].createElement(_col["default"], {
    span: 24,
    className: "cmao-form-item"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-item-title"
  }, props.title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-control"
  }, _react["default"].Children.map(children, function (child) {
    var cls = {};
    if (formValidMsg[props.name]) {
      cls = {
        className: 'cmao-field-error'
      };
    }
    return /*#__PURE__*/_react["default"].cloneElement(child, _objectSpread(_objectSpread(_objectSpread({}, otherPorps), cls), {
      onChange: onChange,
      value: formData[props.name] || ''
    }));
  }), formValidMsg[props.name] ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "cmao-field-error-info",
    title: formValidMsg[props.name]
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-info-circle"
  })) : null))));
});
var _default = exports["default"] = Temp;