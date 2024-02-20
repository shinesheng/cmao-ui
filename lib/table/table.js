"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _this = void 0;
/**
 * 使用方法
 * <Table data={table}/>
 * table: {
    struct: [
        { title: '手机号码', key: function(d) {
            return <a>{d.phone}</a>;
        } },
        { title: '备注', key: 'remark' },
        { title: '更新时间', key: 'time' }
    ],
    data: [
        { phone: '13111111111', remark: '123', time: '2018-01-01' },
        { phone: '13122222222', remark: '456', time: '2018-02-02' },
        { phone: '13133333333', remark: '789', time: '2018-03-03' },
        { phone: '13144444444', remark: '000', time: '2018-04-04' }
    ],
    stripe: true,
    noBorder: false
}
 * 修改了隔行背景色的样式方式，增加stripe，true表示隔行高亮
 * 增加noBorder，true表示表格无边框
 */
var Temp = function Temp(props) {
  var cls = ['fp-table', 'fp-border'];
  //      let cls = ['ltable'];
  if (props.data.noBorder) {
    cls.push('fp-no-border');
  }
  if (props.className) {
    cls.push(props.className);
  }
  return /*#__PURE__*/_react["default"].createElement("table", {
    className: cls.join(' '),
    style: props.style
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, props.data.struct.map(function (o, i) {
    if (typeof o.title == 'function') {
      return /*#__PURE__*/_react["default"].createElement("th", {
        className: o.className || '',
        style: {
          width: o.width
        },
        key: i
      }, o.title.call(o, i));
    } else {
      return /*#__PURE__*/_react["default"].createElement("th", {
        className: o.className || '',
        style: {
          width: o.width
        },
        key: i
      }, o.title);
    }
  }))), /*#__PURE__*/_react["default"].createElement("tbody", null, props.data.data.length ? props.data.data.map(function (o, i) {
    var className;
    if (props.data.stripe) {
      className = i % 2 ? 'fp-stripe' : '';
    }
    return /*#__PURE__*/_react["default"].createElement("tr", {
      className: className,
      "data-index": i,
      key: i
    }, props.data.struct.map(function (p, e) {
      if (typeof p.key == 'function') {
        return /*#__PURE__*/_react["default"].createElement("td", {
          className: p.className || '',
          key: e
        }, p.key.call(_this, o, i, e, p));
      } else {
        return /*#__PURE__*/_react["default"].createElement("td", {
          className: p.className || '',
          key: e
        }, o[p.key]);
      }
    }));
  }) : /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    style: {
      textAlign: 'center'
    },
    colSpan: props.data.struct.length
  }, props.emptyText || '未查询到数据'))));
};
var _default = exports["default"] = Temp;