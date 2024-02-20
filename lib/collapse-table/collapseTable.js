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
 * 使用方法
 * <CollapseTable data={this.state.tableCollapse} />
 * tableCollapse: {
    struct: [
        { title: '', key: 'collapse', width: 80 },
        { title: '姓名', key: 'name', width: 200 },
        { title: '手机号码', key: 'phone', width: 200 }
    ],
    data: [
        {
            name: 'hello1',
            phone: '18768112222',
            subData: (d, i) => {
                return <div className="table-inner-wrap">
                    我是嵌套的内容
                </div>
            }
        },
    ],
    showSubData: false
}
 * struct增加一列，key为collapse
 * data子项中，有subData则有嵌套内容，subData为一个函数
 * showSubData为默认嵌套内容是否全部展开，true为全展开，false为全隐藏，不传为全隐藏
 * <ListView tableCollapse={true}/>
 */
var Temp = function Temp(props) {
  var _useState = (0, _react.useState)(),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    showSubDataArr = _useState2[0],
    setShowSubDataArr = _useState2[1];
  (0, _react.useEffect)(function () {
    var data = props.data;
    var showSubDataArr = [];
    for (var i = 0; i < data.data.length; i++) {
      if (data.showSubData) {
        showSubDataArr.push(true);
      } else {
        showSubDataArr.push(false);
      }
    }
    setShowSubDataArr([].concat(showSubDataArr));
  }, []);
  var toggleRow = function toggleRow(i) {
    showSubDataArr[i] = !showSubDataArr[i];
    setShowSubDataArr(showSubDataArr[i]);
  };
  var tableWrapWidth;
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
    className: "fp-table-scroll-wrap"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "fp-table-scroll-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
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
    if (data.stripe && i % 2) {
      cls.push('fp-stripe');
    }
    if (i == data.data.length - 1 && !o.subData) {
      cls.push('fp-table-last-tr');
    }
    var subCls = [];
    if (data.showSubData) {
      subCls.push('fp-subTable-show');
    } else {
      subCls.push('fp-subTable-hide');
    }
    var iconCls = ['fp-icon'];
    if (showSubDataArr[i]) {
      iconCls.push('fp-icon-expand');
    } else {
      iconCls.push('fp-icon-collapse');
    }
    var subData = {
      struct: data.subStruct,
      data: o.subData
    };
    return [/*#__PURE__*/_react["default"].createElement("tr", {
      className: cls.join(' '),
      "data-index": i
    }, data.struct.map(function (p, index) {
      if (p.key === 'collapse' && o.subData) {
        return /*#__PURE__*/_react["default"].createElement("td", {
          className: p.className || ''
        }, /*#__PURE__*/_react["default"].createElement("span", {
          onClick: function onClick() {
            toggleRow(i);
          },
          className: iconCls.join(' ')
        }));
      }
      return /*#__PURE__*/_react["default"].createElement("td", {
        className: p.className || ''
      }, typeof p.key == 'function' ? p.key.call(o, i, index, p) : o[p.key]);
    })), /*#__PURE__*/_react["default"].createElement("tr", {
      className: subCls.join(' '),
      style: {
        height: showSubDataArr[i] ? 'auto' : 0
      }
    }, showSubDataArr[i] && o.subData ? /*#__PURE__*/_react["default"].createElement("td", {
      colSpan: data.struct.length
    }, o.subData.call(o, i)) : null)];
  }.bind(_this)) : /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    colSpan: data.struct.length,
    style: {
      width: '100%',
      borderBottom: 0
    }
  }, props.emptyText || '未查询到数据'))))))));
};
var _default = exports["default"] = Temp;