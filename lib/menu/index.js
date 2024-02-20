"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
require("font-awesome/css/font-awesome.min.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Temp = function Temp(props) {
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    openId = _useState2[0],
    setOpenId = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    openObj = _useState4[0],
    setOpenObj = _useState4[1];
  var handleMouseOver = function handleMouseOver(obj) {
    // openId = obj.resourceId;
    // setOpenId(openId)
  };
  var handleMouseOut = function handleMouseOut() {
    // openId = '';
    // setOpenId(openId)
  };

  //节点点击
  var handClick = function handClick(obj, len, e) {
    e.preventDefault();
    if (props.clickCallback) {
      props.clickCallback(obj);
    }
    openObj[obj.resourceId] = !openObj[obj.resourceId];
    setOpenObj(_objectSpread({}, openObj));
  };

  /**递归菜单返回子节点html */
  var getChildItem = function getChildItem(id, childArray) {
    var subCss = {
      display: 'none'
    };
    if (openObj[id]) {
      subCss = {
        display: 'block'
      };
    }
    var _html = childArray.length > 0 ? /*#__PURE__*/_react["default"].createElement("ul", {
      style: subCss,
      className: "secondItem"
    }, childArray.map(function (o, i) {
      var secondModules = o.children || [];
      var css = ['cmao-menu-item'];

      // 判断当前菜单是否选中，选中则增加高亮样式
      if (o.resourceId == props.activeId) {
        css.push('cmao-menu-item-select');
      }
      if (openObj[o.resourceId]) {
        css.push('open');
      }
      var secItems = getChildItem(o.resourceId, o.children);
      return /*#__PURE__*/_react["default"].createElement("li", {
        // onClick={(e) => { handClick2(o, 0, e) }}
        key: i
      }, /*#__PURE__*/_react["default"].createElement("a", {
        className: css.join(' '),
        onClick: function onClick(e) {
          handClick(o, o.children, e);
        }
      }, /*#__PURE__*/_react["default"].createElement("i", null), /*#__PURE__*/_react["default"].createElement("span", null, o.title), secondModules.length > 0 ? /*#__PURE__*/_react["default"].createElement("span", {
        className: "cmao-menu-item-arrow"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-angle-left"
      })) : null), secItems);
    })) : null;
    return _html;
  };
  var width = 200;
  if (props.width) {
    width = props.width;
  }
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "cmao-menu",
    style: {
      width: width
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "cmao-menu-wrap"
  }, /*#__PURE__*/_react["default"].createElement("ul", null, props.data.map(function (o, i) {
    // 第一级菜单
    var secondModules = o.children || [];
    var css = ['cmao-menu-item'];
    // 判断当前一级菜单是否选中，选中则增加高亮样式
    if (o.resourceId == props.activeId) {
      css.push('cmao-menu-item-select');
    }
    if (openId == o.resourceId) {
      css.push('cmao-menu-item-select');
    }
    if (openObj[o.resourceId]) {
      css.push('open');
    }

    //渲染二级菜单
    var secItems = getChildItem(o.resourceId, secondModules);
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: i
    }, /*#__PURE__*/_react["default"].createElement("a", {
      id: o.resourceId,
      className: css.join(' '),
      onClick: function onClick(e) {
        handClick(o, secondModules.length, e);
      }
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fa fa-desktop cmao-menu-item-icon",
      style: {
        color: '#fff'
      }
    }), /*#__PURE__*/_react["default"].createElement("span", null, o.title), secondModules.length > 0 ? /*#__PURE__*/_react["default"].createElement("span", {
      className: "cmao-menu-item-arrow"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fa fa-angle-left"
    })) : null), secItems);
  })))));
};
var _default = exports["default"] = Temp;