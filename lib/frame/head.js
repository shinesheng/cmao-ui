"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Temp = function Temp(props) {
  var _useState = (0, _react.useState)(props.menu),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 1),
    menu = _useState2[0];
  var mouseover = function mouseover(e) {
    var down = e.currentTarget.querySelector('.fp-sub-menu');
    if (down) {
      down.style.display = 'block';
    }
  };
  var mouseout = function mouseout(e) {
    var down = e.currentTarget.querySelector('.fp-sub-menu');
    if (down) {
      down.style.display = 'none';
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fp-head"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "fp-head-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "fp-headLogo"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "ttt", /*#__PURE__*/_react["default"].createElement("i", null))), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "fp-head-menu"
  }, menu.map(function (item, index) {
    if (item.resType !== '00' && item.resType !== '01') {
      return null;
    }
    var showList = [];
    if (item.children) {
      showList = item.children.filter(function (o) {
        return o && o.resType == '00' || o.resType == '01';
      });
    }
    return /*#__PURE__*/_react["default"].createElement("li", {
      className: "fp-head-menu-item",
      onMouseOver: function onMouseOver(e) {
        mouseover(e);
      },
      onMouseOut: function onMouseOut(e) {
        mouseout(e);
      },
      key: index
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: showList.length > 0 ? 'javascript:;' : item.resUrl,
      className: 'fp-menu-link'
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "fp-menu-icon-" + item.resIcon + (item.resourceId == props.activeId ? ' fp-menu-cur' : '')
    }, item.resourceId == "/resourceId/mine.html" && props.userName ? props.userName.length > 5 ? props.userName.substr(0, 5) + '...' : props.userName : item.title), showList.length > 0 ? /*#__PURE__*/_react["default"].createElement("i", null) : null), showList.length > 0 ? /*#__PURE__*/_react["default"].createElement("ul", {
      className: "fp-sub-menu"
    }, item.children.map(function (ele, i) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: i
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: ele.resUrl
      }, ele.title));
    }), item.resourceId == "/resourceId/mine.html" ? /*#__PURE__*/_react["default"].createElement("li", {
      className: "fp-loginOut-btn"
    }, /*#__PURE__*/_react["default"].createElement("a", {
      onClick: function onClick() {
        props.logoutClick();
      }
    }, "\u9000\u51FA")) : null) : null);
  }))));
};
var _default = exports["default"] = Temp;