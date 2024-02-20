"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _items = _interopRequireDefault(require("./items"));
var _form = _interopRequireDefault(require("./form"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
 * 使用方法：
 * <Pagination page={this.state.currentPage}
        size={10}
        len={3}
        total={51}
        btnSize='sm'
        onPageChange={this.onPageChange}
    />
 *
 * page: 当前页
 * size: 每页数据总数
 * total: 数据总量
 * btnSize: 不设置时为default，可设置为sm, lg, 影响高度
 * onPageChange: 点击翻页的回调函数
 */
var Temp = function Temp(props) {
  (0, _react.useEffect)(function () {}, []);
  var onPageChange = function onPageChange(page) {
    props.onPageChange && props.onPageChange(page);
  };
  if (props.total === undefined) {
    window.console.error('total count is undefined');
    return null;
  }
  var cls = ['fp-pagination', props.className];
  var min = 1;
  var max = Math.ceil(props.total / props.size);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: cls.join(' ')
  }, /*#__PURE__*/_react["default"].createElement(_items["default"], {
    page: props.page,
    size: props.size,
    min: min,
    max: max,
    len: props.len,
    btnSize: props.btnSize,
    onPageChange: onPageChange
  }), /*#__PURE__*/_react["default"].createElement(_form["default"], {
    page: props.page,
    size: props.size,
    min: min,
    max: max,
    btnSize: props.btnSize,
    total: props.total,
    onPageChange: onPageChange
  }));
};
var _default = exports["default"] = Temp;