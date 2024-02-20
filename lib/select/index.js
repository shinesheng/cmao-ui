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
var _index = _interopRequireDefault(require("../input/index"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * 使用方法：
 * <Select options={[
 *     {name: 'apple', value: 1}
 * ]} size="lg" wtype='1' disabled={true}/>
 *
 * size: 高度控制，不设置时默认为default高度，可设置为sm, lg
 * wtype: 宽度控制，不设置时自适应，可设置为1，2
 * disabled 属性为不可操作
 * filterable : 是否输入过滤选项
 * keyMap: { // 选项的key, 默认是 name, value, children
 *      name: '',
 *      value:'',
 *      children: ''
 * }
 * val: 选择的值
 * showTree: 显示树形结构的数据
 * clearable: 可清除已经选择的值
 * position：'', style的定位属性，用于调整下拉面板显示的问题
 * height:'100px',定义下拉框的高度
 *
 * 事件：
 *  onChange: (value)
 */

var _body = document.body;
var ie = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.DOCUMENT_NODE || +RegExp['\x241'] : 0;
var Temp = function Temp(props) {
  var _useState = (0, _react.useState)(),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    showName = _useState2[0],
    setShowName = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    showOptions = _useState4[0],
    setShowOptions = _useState4[1];
  var _useState5 = (0, _react.useState)(),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 1),
    filterable = _useState6[0];
  var _useState7 = (0, _react.useState)(),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 1),
    placeholder = _useState8[0];
  var _useState9 = (0, _react.useState)(),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    show = _useState10[0],
    setShow = _useState10[1];
  var _useState11 = (0, _react.useState)({
      right: 0,
      left: 0
    }),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    pRect = _useState12[0],
    setpRect = _useState12[1];
  var _useState13 = (0, _react.useState)(),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    top = _useState14[0],
    setTop = _useState14[1];
  var _useState15 = (0, _react.useState)(),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 1),
    position = _useState16[0];
  var _useState17 = (0, _react.useState)(),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 1),
    totalOptions = _useState18[0];
  var _useState19 = (0, _react.useState)(),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 1),
    keyMap = _useState20[0];
  var _useState21 = (0, _react.useState)(),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    value = _useState22[0],
    setValue = _useState22[1];
  var selectInputRef = (0, _react.useRef)(null);
  var dropdownRef = (0, _react.useRef)(null);
  var inputItemRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {}, []);
  var onClick = function onClick(event) {
    var _selectInputRef$curre;
    if (props.disabled) return;
    if (ie <= 9) {
      if (showName === '请选择') {
        setShowName('');
      }
    }

    // let parent = ReactDom.findDOMNode(selectInputRef.current);
    // let dropDown = ReactDom.findDOMNode(this.refs['dropdown']);

    pRect = (_selectInputRef$curre = selectInputRef.current) === null || _selectInputRef$curre === void 0 ? void 0 : _selectInputRef$curre.getBoundingClientRect();
    var pHeight = pRect.bottom - pRect.top;
    show = !show;
    setShow(show);
    setpRect(pRect);
    if (show) {
      var _dropdownRef$current;
      var dRect = (_dropdownRef$current = dropdownRef.current) === null || _dropdownRef$current === void 0 ? void 0 : _dropdownRef$current.getBoundingClientRect();
      var pBottom = _body.clientHeight - pRect.bottom; // 输入框到页面底部的距离
      var dropDownHeight = dRect.bottom - dRect.top;
      top = 0;
      // 下拉面板需要放在输入框上面
      if (pBottom < dropDownHeight && pRect.top >= dropDownHeight) {
        top = -(dropDownHeight + 12);
      } else {
        top = pHeight;
      }
      setTop(top);
    }
  };
  var filterOption = function filterOption(e) {
    var keyword = e.target.value;
    showOptions = keyword ? totalOptions.filter(function (item) {
      return item[keyMap.name].match(keyword.replace(/\\/g, '\\\\'));
    }) : totalOptions;
    setShowName(keyword);
    setShowOptions(_objectSpread({}, showOptions));
  };
  var handleClickItem = function handleClickItem(item, event) {
    var _inputItemRef$current;
    // const { showMap, keyMap } = this.state;

    var newValue = item[keyMap.value];
    showName = item[keyMap.name];
    setShowName(showName);
    setValue(newValue);
    setShow(false);
    if (newValue != value) {
      props.onChange && props.onChange({
        target: {
          name: props.name,
          value: value
        } // 这里为了兼容之前的select设置值的入参格式，没有办法了~
      });
    }

    // ReactDom.findDOMNode(inputItemRef).focus();
    (_inputItemRef$current = inputItemRef.current) === null || _inputItemRef$current === void 0 || _inputItemRef$current.focus();
  };
  var renderOption = function renderOption(item, index) {
    // const { name, value } = keyMap;
    return /*#__PURE__*/_react["default"].createElement("li", {
      className: 'fp-select-dropdown-item',
      key: index
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "option-node" + (value == item[keyMap.value] ? ' selected' : ''),
      onClick: function onClick(e) {
        handleClickItem(item, e);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", null, item[keyMap.name])));
  };
  var className = props.className,
    size = props.size,
    wtype = props.wtype,
    disabled = props.disabled,
    name = props.name,
    height = props.height;
  var cls = ['fp-form-select', className];
  if (disabled) {
    cls.push('is-disabled');
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: cls.join(' '),
    ref: selectInputRef
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    ref: inputItemRef,
    value: showName,
    readonly: !filterable,
    size: size,
    wtype: wtype,
    name: name,
    disabled: disabled,
    onClick: onClick,
    onChange: filterOption,
    placeholder: placeholder
  }), /*#__PURE__*/_react["default"].createElement("i", {
    className: "fp-select-icon " + (show ? 'fp-up' : 'fp-down'),
    onClick: onClick
  }), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "fp-select-dropdown",
    ref: dropdownRef,
    style: {
      width: pRect.right ? pRect.right - pRect.left : 0,
      minWidth: 120,
      height: height ? height : 'auto',
      position: position,
      top: position === 'absolute' ? top : null,
      display: show ? 'block' : 'none'
    }
  }, showOptions.map(function (item, index) {
    return renderOption(item, index);
  })));
};
var _default = exports["default"] = Temp;