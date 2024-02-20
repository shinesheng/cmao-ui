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
 *  <Row gutter={24} className="row-wrap">
        <Col span={2}><div className='col'>col-2</div></Col>
        <Col span={6} offset={2}><div className='col'>col-6</div></Col>
        <Col span={6} ><div className='col'>col-6</div></Col>
        <Col span={6} ><div className='col'>col-6</div></Col>
    </Row>
    gutter: col之间的间隔
 */
var Temp = function Temp(props) {
  (0, _react.useEffect)(function () {}, []);
  var gutter = props.gutter;
  var rowStyle = {};
  var cls = ['fp-row-wrap'];
  if (props.className) {
    cls.push(props.className);
  }
  if (gutter) {
    rowStyle['marginLeft'] = -gutter / 2;
    rowStyle['marginRight'] = -gutter / 2;
  }
  var cols = _react["default"].Children.map(props.children, function (col) {
    if (!col) {
      return null;
    }
    if (col.props && gutter) {
      var style = col.props.style || {};
      style['paddingLeft'] = gutter / 2;
      style['paddingRight'] = gutter / 2;
      return /*#__PURE__*/_react["default"].cloneElement(col, {
        style: style
      });
    }
    return col;
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: cls.join(' '),
    style: rowStyle
  }, cols);
};
var _default = exports["default"] = Temp;