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
var _reactRedux = require("react-redux");
var _action = _interopRequireDefault(require("./store/action"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Temp = function Temp(props) {
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    toolBtns = _useState2[0],
    setToolBtns = _useState2[1];
  (0, _react.useEffect)(function () {
    var tempToolBtns = [{
      id: props.id + '_btn_cursor',
      type: 'cursor',
      className: 'lr-workflow-btndown'
    }, {
      id: props.id + '_btn_direct',
      type: 'direct',
      className: 'lr-workflow-btn'
    }];
    props.toolBtns.forEach(function (o) {
      //自定义按钮
      tempToolBtns.push({
        id: props.id + '_btn_' + o,
        type: o,
        className: 'lr-workflow-btn'
      });
    });
    props.changeCurrentBtn('cursor');
    setToolBtns(tempToolBtns);
    return function () {
      props.changeCurrentBtn('');
    };
  }, []);
  var switchToolBtn = function switchToolBtn(type) {
    props.changeCurrentBtn(type);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "lr-workflow-tool"
  }, toolBtns.map(function (o, i) {
    var _html = null;
    if (o.type == 'direct') {
      _html = /*#__PURE__*/_react["default"].createElement("span", null);
    }
    return /*#__PURE__*/_react["default"].createElement("a", {
      key: i,
      type: o.type,
      id: o.id,
      title: props.nodeRemarks[o.type],
      className: props.currentBtn == o.type ? 'lr-workflow-btndown' : 'lr-workflow-btn'
    }, /*#__PURE__*/_react["default"].createElement("b", {
      className: 'ico_' + o.type,
      onClick: function onClick() {
        switchToolBtn(o.type);
      }
    }), _html);
  }));
};
var mapStateToProps = function mapStateToProps(state) {
  return state;
};
var mapDispatchToProps = _objectSpread({}, _action["default"]);
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Temp);