"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Temp = function Temp(props) {
  (0, _react.useEffect)(function () {}, []);
  var onActiveChange = function onActiveChange(index) {
    index != props.active && props.onChange(index);
  };
  var cls = ['fp-tabPage', props.className];
  var nav = props.nav || [];
  var width = props.width || 80;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: cls.join(' ')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "fp-tabpage-nav tClear"
  }, nav.map(function (item, index, arr) {
    var cls = ['fp-tab-item-wrap'];
    if (index == props.active) {
      cls.push('fp-tab-active');
    }
    if (index == nav.length - 1) {
      cls.push('fp-last-item');
    }
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: cls.join(' '),
      key: index
    }, /*#__PURE__*/_react["default"].createElement("strong", {
      onClick: function onClick() {
        onActiveChange(index);
      },
      style: {
        width: width
      }
    }, item));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "fp-tabPage-box"
  }, _react["default"].Children.map(props.children, function (child, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: index == props.active ? '' : 'fp-tab-isHidden'
    }, child);
  })));
};
var _default = exports["default"] = Temp;