"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
Object.defineProperty(exports, "useForm", {
  enumerable: true,
  get: function get() {
    return _useForm3["default"];
  }
});
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
require("font-awesome/css/font-awesome.min.css");
var _prompt = _interopRequireWildcard(require("../dialog/prompt"));
var _context = require("./context");
var _useForm3 = _interopRequireDefault(require("./hooks/useForm"));
var _validator = require("./validator");
var _excluded = ["children", "form", "name"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Temp = function Temp(props) {
  var children = props.children,
    form = props.form,
    name = props.name,
    otherPorps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var _useState = (0, _react.useState)({}),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    formValidMsg = _useState4[0],
    setFormValidMsg = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    formTitle = _useState6[0],
    setFormTitle = _useState6[1];
  var _useForm = (0, _useForm3["default"])(form),
    _useForm2 = (0, _slicedToArray2["default"])(_useForm, 1),
    wrapForm = _useForm2[0];
  var lll = {};
  for (var i = 0; i < _react["default"].Children.count(props.children); i++) {
    lll[i] = _react["default"].useRef();
  }
  (0, _react.useEffect)(function () {}, []);
  var changeForm = function changeForm(data) {
    Object.assign(formData, data);
    setFormData(_objectSpread({}, formData));
    wrapForm.data = formData;
  };

  /**表单校验 */
  var valid = function valid() {
    (0, _prompt.clearPrompt)();
    var validateflag = true;
    for (var key in formData) {
      //想要读取每个子元素中的校验方法
      var rule = form.getFieldValid(key);
      if (!rule) {
        continue;
      }
      var errormsg = form.getValidErrorMsg(key);
      if (errormsg) {
        validateflag = false;
        continue;
      }
      var checkexpession = rule.checkExpession;
      var checkfn = _validator.validator['is' + checkexpession];
      if (!checkexpession || !checkfn) {
        continue;
      }
      var value = null;
      value = formData[key];
      var r = {
        code: true,
        msg: ''
      };
      if (checkexpession == 'LenNum' || checkexpession == 'LenNumOrNull' || checkexpession == 'LenStr' || checkexpession == 'LenStrOrNull') {
        var len = rule.length;
        r = checkfn(value, len);
      } else {
        r = checkfn(value);
      }
      if (!r.code) {
        validateflag = false;
        formValidMsg[key] = r.msg;
        setFormValidMsg(_objectSpread({}, formValidMsg));
        _prompt["default"].error('表单信息输入有误，请检查！ ' + formTitle[key] + r.msg);
      }
    }
    return validateflag;
  };

  //赋予form实例的校验方法
  wrapForm.checkRule = function () {
    return valid();
  };
  wrapForm.setData = function (data) {
    changeForm(data);
  };
  var formContextValue = (0, _react.useMemo)(function () {
    return {
      formData: formData,
      formTitle: formTitle,
      formValidMsg: formValidMsg,
      changeForm: changeForm,
      initValid: wrapForm.initValid
    };
  }, [formData, formTitle, formValidMsg, changeForm]);
  var childNum = 0;
  return /*#__PURE__*/_react["default"].createElement(_context.FormContext.Provider, {
    value: formContextValue
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "cmao-panel"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "panel-heading"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "panel-title"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "lrlg"
  }, props.name))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "panel-body"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "cmao-form-wrap"
  }, props.children))));
};
var _default = exports["default"] = Temp;