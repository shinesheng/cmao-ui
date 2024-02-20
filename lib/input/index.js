"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
 * 使用方法:
 *  <Input size="sm" wtype='2' placeholder="small" disabled={true}/>
     size: 不设置时为默认值，可设置为sm,lg, 主要改变高度
     wtype: 宽度，不设置是为默认值，可设置为1和2，主要改变宽度和左右padding
     可添加disabled和readonly属性
 */
var ie = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.DOCUMENT_NODE || +RegExp['\x241'] : 0;
var Temp = function Temp(props) {
  (0, _react.useEffect)(function () {}, []);
  var onChange = function onChange(e) {
    var value = e.target.value;
    var dataType = props.dataType;
    if (dataType === 'money') {
      if (value !== '' && !('' + value).match(/((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/g)) {
        return;
      }
    } else if (dataType === 'amount') {
      if (value !== '' && !('' + value).match(/^([1-9]\d*)?$/g)) {
        return;
      }
    } else if (dataType === 'discount') {
      if (value !== '' && !('' + value).match(/^(0\.\d+|[1-9][0-9]|1)$/g)) {
        return;
      }
    } else if (dataType === 'hour') {
      if (value !== '' && !('' + value).match(/((^[1-9]\d*)|^0)(\.\d{0,1}){0,1}$/g)) {
        return;
      }
    } else if (dataType === 'no') {
      //职能输入 数字和 英文
      if (value !== '' && !('' + value).match(/^[0-9a-zA-Z]*$/g)) {
        return;
      }
    }
    props.onChange && props.onChange(e);
  };
  var onClick = function onClick(e) {
    props.onClick && props.onClick(e);
  };
  var onBlur = function onBlur(e) {
    props.onBlur && props.onBlur(e);
  };
  var cls = ['fp-form-input', props.className];
  if (props.size) {
    cls.push('fp-input-' + props.size);
  }
  if (props.wtype) {
    cls.push('fp-wtype-' + props.wtype);
  }
  return /*#__PURE__*/_react["default"].createElement("input", {
    className: cls.join(' '),
    style: props.style,
    type: props.type || 'text',
    id: props.name,
    name: props.name,
    disabled: props.disabled,
    readOnly: props.readonly,
    onFocus: props.onFocus,
    onBlur: onBlur,
    onKeyDown: props.onKeyDown,
    onKeyPress: props.onKeyPress,
    onInput: props.onInput,
    onKeyUp: props.onKeyUp,
    onChange: onChange,
    onClick: onClick,
    placeholder: props.placeholder
    // defaultValue={ie <= 9 ? props.placeholder : ''}
    ,
    autoComplete: props.autoComplete || 'off',
    value: props.value,
    datatype: props.dataType
  });
};
var _default = exports["default"] = Temp;