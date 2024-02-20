"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _index = _interopRequireDefault(require("../input/index"));
var _group = _interopRequireDefault(require("../input/group"));
var _index2 = _interopRequireDefault(require("../select/index"));
var _index3 = _interopRequireDefault(require("../datepicker/index"));
var _group2 = _interopRequireDefault(require("../datepicker/group"));
var _row = _interopRequireDefault(require("../grid/row"));
var _col = _interopRequireDefault(require("../grid/col"));
var _resetIcon = _interopRequireDefault(require("./images/reset-icon.png"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Temp = function Temp(props) {
  var types = ['Datepicker', 'Select', 'TextInput', 'DivNode'];
  var defaultLabelSpan = 8;
  (0, _react.useEffect)(function () {}, []);
  var inArray = function inArray(val, arr) {
    for (var i = 0, len = arr.length; i < len; i++) {
      if (val.toString() == arr[i].toString()) {
        return true;
      }
    }
    return false;
  };
  var renderLabel = function renderLabel() {
    if (!props.data.label) {
      return null;
    }
    return /*#__PURE__*/_react["default"].createElement("label", {
      className: "fp-control-label",
      htmlFor: props.data.name
    }, props.data.label);
  };
  var renderTextInput = function renderTextInput() {
    var data = props.data;
    data.labelSpan = data.labelSpan !== undefined ? data.labelSpan : defaultLabelSpan;
    if (data.more) {
      return /*#__PURE__*/_react["default"].createElement(_row["default"], {
        className: data.className
      }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
        span: data.labelSpan,
        className: "fp-query-label-col"
      }, renderLabel()), /*#__PURE__*/_react["default"].createElement(_col["default"], {
        span: 24 - data.labelSpan
      }, /*#__PURE__*/_react["default"].createElement(_group["default"], {
        name: data.name,
        value: data.value || "",
        more: data.more,
        moreValue: data.moreValue,
        placeholder: data.placeholder,
        options: data.options,
        size: data.size,
        wtype: data.wtype,
        dateFmt: data.dateFmt,
        onChange: data.onChange,
        onMoreChange: data.onMoreChange,
        dataType: data.dataType,
        moreDataType: data.moreDataType
      })));
    }
    return /*#__PURE__*/_react["default"].createElement(_row["default"], {
      className: data.className
    }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
      span: data.labelSpan,
      className: "fp-query-label-col"
    }, renderLabel()), /*#__PURE__*/_react["default"].createElement(_col["default"], {
      span: 24 - data.labelSpan
    }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
      className: "fp-query-input",
      name: data.name,
      value: data.value || "",
      disabled: data.disabled,
      readonly: data.readonly,
      onFocus: data.onFocus,
      onBlur: data.onBlur,
      onKeyDown: data.onKeyDown,
      onKeyPress: data.onKeyPress,
      onInput: data.onInput,
      onKeyUp: data.onKeyUp,
      onChange: data.onChange,
      placeholder: data.placeholder,
      size: data.size,
      wtype: data.wtype,
      dataType: data.dataType
    })));
  };
  var renderDivNode = function renderDivNode() {
    var data = props.data;
    data.labelSpan = data.labelSpan !== undefined ? data.labelSpan : defaultLabelSpan;
    return /*#__PURE__*/_react["default"].createElement(_row["default"], {
      className: data.className
    }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
      span: data.labelSpan,
      className: "fp-query-label-col "
    }, renderLabel()), /*#__PURE__*/_react["default"].createElement(_col["default"], {
      span: 24 - data.labelSpan,
      className: "area-input"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "fp-query-div-node",
      onClick: data.onClick
    }, data.value), data.value !== undefined && data.value !== '' && data.reset !== undefined ? /*#__PURE__*/_react["default"].createElement("img", {
      src: _resetIcon["default"],
      className: "area-reset",
      onClick: data.reset
    }) : null));
  };
  var renderSelect = function renderSelect() {
    var data = props.data;
    data.labelSpan = data.labelSpan !== undefined ? data.labelSpan : defaultLabelSpan;
    return /*#__PURE__*/_react["default"].createElement(_row["default"], {
      className: data.className
    }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
      span: data.labelSpan,
      className: "fp-query-label-col"
    }, renderLabel()), /*#__PURE__*/_react["default"].createElement(_col["default"], {
      span: 24 - data.labelSpan
    }, /*#__PURE__*/_react["default"].createElement(_index2["default"], {
      className: "fp-query-select",
      name: data.name,
      value: data.value,
      options: data.options,
      onChange: data.onChange,
      onFocus: data.onFocus,
      onBlur: data.onBlur,
      disabled: data.disabled,
      readonly: data.readonly,
      size: data.size,
      wtype: data.wtype,
      keyMap: data.keyMap,
      filterable: data.filterable
    })));
  };
  var renderDatepicker = function renderDatepicker() {
    var data = props.data;
    data.labelSpan = data.labelSpan !== undefined ? data.labelSpan : defaultLabelSpan;
    if (data.more) {
      return /*#__PURE__*/_react["default"].createElement(_row["default"], {
        className: data.className
      }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
        span: data.labelSpan,
        className: "fp-query-label-col"
      }, renderLabel()), /*#__PURE__*/_react["default"].createElement(_col["default"], {
        span: 24 - data.labelSpan
      }, /*#__PURE__*/_react["default"].createElement(_group2["default"], {
        name: data.name,
        value: data.value,
        more: data.more,
        moreValue: data.moreValue,
        onChange: data.onChange,
        onMoreChange: data.onMoreChange,
        placeholder: data.placeholder,
        options: data.options,
        size: data.size,
        wtype: data.wtype,
        dateFmt: data.dateFmt,
        minDate: data.minDate,
        maxDate: data.maxDate,
        moreMinDate: data.moreMinDate,
        moreMaxDate: data.moreMaxDate
      })));
    }
    return /*#__PURE__*/_react["default"].createElement(_row["default"], {
      className: data.className
    }, /*#__PURE__*/_react["default"].createElement(_col["default"], {
      span: data.labelSpan,
      className: "fp-query-label-col"
    }, renderLabel()), /*#__PURE__*/_react["default"].createElement(_col["default"], {
      span: 24 - data.labelSpan
    }, /*#__PURE__*/_react["default"].createElement(_index3["default"], {
      className: "fp-query-datepicker",
      name: data.name,
      value: data.value,
      onChange: data.onChange,
      placeholder: data.placeholder,
      size: data.size,
      wtype: data.wtype,
      dateFmt: data.dateFmt,
      minDate: data.minDate,
      maxDate: data.maxDate
    })));
  };
  var toCall = function toCall(type) {
    if (type == 'renderLabel') {
      return renderLabel();
    } else if (type == 'renderTextInput') {
      return renderTextInput();
    }
    // else if(type == 'renderDivNode'){
    //     return renderDivNode();
    // }
    // else if(type == 'renderSelect'){
    //     return renderSelect();
    // }
    // else if(type == 'renderDatepicker'){
    //     return renderDatepicker();
    // }
  };
  if (!props.data || !props.data.type || !inArray(props.data.type, types)) {
    return null;
  }
  return (
    // 'render' + props.data.type()
    toCall('render' + props.data.type)
  );
};
var _default = exports["default"] = Temp;