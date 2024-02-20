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
var Temp = function Temp(props) {
  var formRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {}, []);
  var onPageChange = function onPageChange(e) {
    var pageObj = formRef.current.page;
    var page = pageObj.value;
    e.preventDefault();
    if (!page || !/^\d+$/.test(page)) {
      // pageObj.focus();

      return;
    }
    if (page < props.min) {
      page = props.min;
    } else if (page > props.max) {
      page = props.max;
    }
    props.onPageChange(page);
    // pageObj.value = '';
  };
  var cls = ['fp-page-form'];
  if (props.btnSize) {
    cls.push('fp-page-' + props.btnSize);
  }
  return /*#__PURE__*/_react["default"].createElement("form", {
    ref: formRef,
    className: cls.join(' '),
    onSubmit: onPageChange
  }, /*#__PURE__*/_react["default"].createElement("fieldset", null, /*#__PURE__*/_react["default"].createElement("span", null, "\u8DF3\u81F3"), /*#__PURE__*/_react["default"].createElement(_input["default"], {
    name: "page",
    autoComplete: "off",
    size: props.btnSize || ''
  }), /*#__PURE__*/_react["default"].createElement("span", null, "\u9875\xA0/\xA0\u5171\xA0", props.max, "\xA0\u9875\xA0\u5171\xA0", props.total, "\xA0\u6761\u8BB0\u5F55")));
};
var _default = exports["default"] = Temp;