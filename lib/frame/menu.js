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
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    openId = _useState2[0],
    setOpenId = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    lock = _useState4[0],
    setLock = _useState4[1];
  // const location = useLocation();

  var handleMouseOver = function handleMouseOver(obj) {
    setLock(false);
    openId = obj.resourceId;
    setOpenId(openId);
  };
  var handleMouseOut = function handleMouseOut() {
    setLock(true);
    openId = '';
    setOpenId(openId);
  };
  var handClick = function handClick(obj, len, e) {
    e.preventDefault();
    if (!obj.children || len == 0) {
      if (obj.resUrl) {
        // if (location.pathname != obj.resUrl) {
        //     // history.push(obj.resUrl)
        // }
        // else {
        //     // window.location.href = obj.resUrl;
        //     // window.location.reload();
        // }
        if (props.clickCallback) {
          props.clickCallback(obj.resUrl);
        }
      }
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fp-menuWrap"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "fp-menu"
  }, props.data.map(function (o, i) {
    var css = ['fp-menuItem'];
    var subCss = ['fp-menuSecItems'];
    var secList = new Array();
    if (o.children) {
      o.children.forEach(function (item) {
        if (item.resType == '00' || item.resType == '01') {
          secList.push(item);
        }
      });
    }

    // 判断当前一级菜单是否选中，选中则增加高亮样式
    if (o.resourceId == props.activeId) {
      css.push('cur');
    }
    if (openId == o.resourceId) {
      css.push('cur');
      if (!lock) {
        subCss.push('fp-show');
      }
    }

    // 渲染二级菜单
    var secItems = secList.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
      className: subCss.join(' ')
    }, secList.map(function (k, i) {
      var cz = ['fp-menuSecItemsContent'];
      // 判断当前二级菜单是否选中
      if (k.resourceId == props.activeId) {
        // 给二级菜单增加高亮样式
        cz.push('fp-secCur');
      }
      // 判断是否是最后一个二级菜单，如果是，去除底部边框
      if (i == secList.length - 1) {
        // cz.push(c.last);
      }
      return /*#__PURE__*/_react["default"].createElement("a", {
        href: k.resUrl,
        className: cz.join(' '),
        key: i
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "fp-menuSecText"
      }, k.title));
    })) : '';
    // 渲染一级菜单，并将生成好的二级菜单插入
    return /*#__PURE__*/_react["default"].createElement("li", {
      className: css.join(' '),
      style: {
        width: '110px'
      },
      onMouseOver: function onMouseOver() {
        handleMouseOver(o);
      },
      onMouseLeave: function onMouseLeave() {
        handleMouseOut();
      },
      key: i
    }, /*#__PURE__*/_react["default"].createElement("a", {
      onClick: function onClick(e) {
        handClick(o, secList.length, e);
      },
      className: 'fp-menuContent' + (secList.length > 0 ? ' fp-menu-folder' : '')
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: 'fp-menuIcon ' + 'fp-menuIcon-' + (o.resIcon || 'default')
    }), /*#__PURE__*/_react["default"].createElement("span", {
      className: "fp-menuText"
    }, o.title)), secItems);
  })));
};
var _default = exports["default"] = Temp;