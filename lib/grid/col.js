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
/**
 * 使用方法:
 *  <Row gutter={24} className="row-wrap">
        <Col span={2}><div className='col'>col-2</div></Col>
        <Col span={6} offset={2}><div className='col'>col-6</div></Col>
        <Col span={6} ><div className='col'>col-6</div></Col>
        <Col span={6} ><div className='col'>col-6</div></Col>
    </Row>
    gutter: col之间的间隔
 */
var Temp = function Temp(props) {
  var _useState = (0, _react.useState)(props.totalCols || 24),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 1),
    totalCols = _useState2[0];
  (0, _react.useEffect)(function () {}, []);
  var cls = ['fp-col', 'fp-col-' + (props.span || totalCols)];
  if (props.className) {
    cls.push(props.className);
  }
  if (props.offset) {
    cls.push('fp-offset-' + props.offset);
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: cls.join(' '),
    style: props.style
  }, props.children);
};
var _default = exports["default"] = Temp;