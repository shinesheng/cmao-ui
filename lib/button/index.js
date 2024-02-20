"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
/**
 * 使用方法
 * <Button text="submit" style="primary" size="lg" disabled={true} type="link"/>
 *
 * style: primary, red, 默认default样式
 * size: sm, lg, 默认default
 */

var Button = function Button(props) {
  var cls = ['fp-btn', props.className];
  if (props.noRadius) {
    cls.push('fp-btn-no-radius');
  }
  if (props.style) {
    cls.push('fp-btn-' + props.style);
  }
  if (props.size) {
    cls.push('fp-btn-' + props.size);
  }
  if (props.icon) {
    cls.push('fp-btn-icon-' + props.icon);
  }
  if (props.type == 'link') {
    return /*#__PURE__*/_react["default"].createElement("a", {
      className: cls.join(' '),
      href: props.href || null,
      target: props.target,
      onClick: props.onClick
    }, props.text, props.children);
  }
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: cls.join(' '),
    type: props.type || 'button',
    disabled: props.disabled,
    onClick: props.onClick
  }, props.text, props.children);
};
var _default = exports["default"] = Button;