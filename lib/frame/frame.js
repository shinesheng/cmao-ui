"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _head = _interopRequireDefault(require("./head"));
var _menu = _interopRequireDefault(require("./menu"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Frame = function Frame(props) {
  var _useState = (0, _react.useState)(props.menu.items),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    menu = _useState2[0],
    setMenu = _useState2[1];
  (0, _react.useEffect)(function () {
    if (props.menu.items) {
      menu = props.menu.items;
      setMenu(props.menu.items);
    }
    return function () {};
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fp-page"
  }, /*#__PURE__*/_react["default"].createElement(_head["default"], {
    menu: menu
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "fp-body clearfix"
  }, /*#__PURE__*/_react["default"].createElement(_menu["default"], {
    data: props.menu.items,
    activeId: props.menu.activeId,
    clickCallback: props.clickCallback
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "fp-container",
    id: "J_container"
  }, props.view)));
};
var _default = exports["default"] = Frame;