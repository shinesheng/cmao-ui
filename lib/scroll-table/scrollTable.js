"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _tableFixedHead = _interopRequireDefault(require("./tableFixedHead"));
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
  var formatData = function formatData(data) {
    var leftData = {
      struct: [],
      stripe: data.stripe,
      data: data.data
    };
    var rightData = {
      struct: [],
      stripe: data.stripe,
      data: data.data
    };
    var width = 0;
    data.struct.map(function (item, index) {
      width += item.width || cellMinWidth;
      if (item.fixed == 'left') {
        leftData.struct.push(item);
      } else if (item.fixed == 'right') {
        rightData.struct.push(item);
      }
    });
    return {
      leftData: leftData,
      rightData: rightData,
      width: width
    };
  };
  var result = formatData(props.data);
  var _useState = (0, _react.useState)(),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 1),
    elem = _useState2[0];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    leftShadow = _useState4[0],
    setLeftShadow = _useState4[1];
  var _useState5 = (0, _react.useState)(true),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    rightShadow = _useState6[0],
    setRightShadow = _useState6[1];
  var _useState7 = (0, _react.useState)(result.leftData),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 1),
    leftData = _useState8[0];
  var _useState9 = (0, _react.useState)(result.rightData),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 1),
    rightData = _useState10[0];
  var _useState11 = (0, _react.useState)(result.width),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 1),
    tableWidth = _useState12[0];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    rowStyle = _useState14[0],
    setRowStyle = _useState14[1];
  var _useState15 = (0, _react.useState)(),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    shouldRender = _useState16[0],
    setShouldRender = _useState16[1];
  var contentTableRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    // 主表格更新后，重新计算高度，并且通过setState重新渲染左右表格
    if (shouldRender) {
      shouldRender = false;
      setShouldRender(false);
      getRowStyle();
    }
  }, []);

  // 处理左右table的阴影
  var onScroll = function onScroll(e) {
    var scrollLeft = e.target.scrollLeft;
    var flagL = false,
      flagR = true;
    if (scrollLeft > 0) {
      flagL = true;
    } else {
      flagL = false;
    }
    if (scrollLeft >= tableWidth - e.target.clientWidth) {
      flagR = false;
    } else {
      flagR = true;
    }
    setLeftShadow(flagL);
    setRightShadow(flagR);
  };

  // 计算content table每一行的高度，左右table每一行的高度保持跟content table行高一致
  var getRowStyle = function getRowStyle() {
    if (!contentTableRef) {
      return null;
    }
    elem = contentTableRef.current.getDOMNode();
    rowStyle = [];
    // $(this.elem).find('tr').each((index, item) => {
    //     rowStyle.push({ height: $(item).height() });
    // });

    setRowStyle((0, _toConsumableArray2["default"])(rowStyle));
  };
  var cellMinWidth = 80;
  var leftCls = ['fp-table-left-wrap'];
  var rightCls = ['fp-table-right-wrap'];
  if (leftShadow) {
    leftCls.push('left-shadow');
  }
  if (rightShadow) {
    rightCls.push('right-shadow');
  }
  var tableWrapWidth;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fp-table-scroll-wrap"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "fp-table-scroll-content",
    onScroll: onScroll
    // ref={o => {tableWrapWidth = $(o).width();}}
  }, /*#__PURE__*/_react["default"].createElement(_tableFixedHead["default"], {
    ref: contentTableRef,
    data: props.data,
    style: {
      width: tableWrapWidth
    },
    minWidth: cellMinWidth
  })), leftData.struct.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: leftCls.join(' ')
  }, /*#__PURE__*/_react["default"].createElement(_tableFixedHead["default"], {
    data: leftData,
    minWidth: cellMinWidth,
    rowStyle: rowStyle,
    isFixedLeft: true
  }), "  ") : null, rightData.struct.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: rightCls.join(' ')
  }, /*#__PURE__*/_react["default"].createElement(_tableFixedHead["default"], {
    data: rightData,
    minWidth: cellMinWidth,
    rowStyle: rowStyle,
    isFixedRight: true
  }), "  ") : null);
};
var _default = exports["default"] = Temp;