"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _this = void 0;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
 * <TableFixedHead data={this.state.table} initHeight={200}/>
 * table: {
    struct: [
        { title: '手机号码', key: function(d) {
            return <a>{d.phone}</a>;
        }, width: 200 },            // 一定要给宽度，否则不对齐
        { title: '备注', key: 'remark', width: 200 },  
        { title: '更新时间', key: 'time' }
    ],
    data: [
        { phone: '13111111111', remark: '123', time: '2018-01-01' },
        { phone: '13122222222', remark: '456', time: '2018-02-02' },
        { phone: '13133333333', remark: '789', time: '2018-03-03' },
        { phone: '13144444444', remark: '000', time: '2018-04-04' }
    ],
    stripe: true
 *
 * 注：列的宽度和不能大于表格的宽度，最后一列可以不设置宽度
 */
var Temp = function Temp(props) {
  var _useState = (0, _react.useState)(),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 1),
    leftShadow = _useState2[0];
  var _useState3 = (0, _react.useState)(),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 1),
    rightShadow = _useState4[0];
  (0, _react.useEffect)(function () {}, []);
  var cls = ['fp-table-fixed-head'];
  var data = props.data;
  var rowStyle = props.rowStyle;
  var style = {};
  var colGroups = [];
  data.struct.map(function (o, i) {
    colGroups.push( /*#__PURE__*/_react["default"].createElement("col", {
      width: o.width || props.minWidth
    }));
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: cls.join(' '),
    style: props.style || {}
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "fp-table fp-head-table"
  }, /*#__PURE__*/_react["default"].createElement("colgroup", null, colGroups), /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", {
    style: rowStyle && rowStyle[0] ? rowStyle[0] : {}
  }, data.struct.map(function (o, i) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      className: o.className || ''
    }, typeof o.title === 'function' ? o.title.call(_this, o, i) : o.title);
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "fp-table-content-wrap",
    style: {
      height: props.initHeight,
      overflowY: props.initHeight ? 'auto' : 'visible'
    }
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "fp-table fp-table-fixed-head-body"
  }, /*#__PURE__*/_react["default"].createElement("colgroup", null, colGroups), /*#__PURE__*/_react["default"].createElement("tbody", null, data.data.length ? data.data.map(function (o, i) {
    var cls = [];
    if (props.data.stripe && i % 2) {
      cls.push('fp-stripe');
    }
    if (i == data.data.length - 1) {
      cls.push('fp-table-last-tr');
    }
    return /*#__PURE__*/_react["default"].createElement("tr", {
      className: cls.join(' '),
      "data-index": i,
      style: rowStyle && rowStyle[i + 1] ? rowStyle[i + 1] : {}
    }, data.struct.map(function (p, index) {
      return /*#__PURE__*/_react["default"].createElement("td", {
        className: p.className || ''
      }, typeof p.key == 'function' ? p.key.call(o, i, index, p) : o[p.key]);
    }));
  }.bind(_this)) : /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    colSpan: data.struct.length,
    style: {
      width: '100%',
      borderBottom: 0
    }
  }, props.isFixedLeft || props.isFixedRight ? '-' : props.emptyText || '未查询到数据'))))));
};
var _default = exports["default"] = Temp;