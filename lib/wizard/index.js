"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _index = _interopRequireDefault(require("../button/index"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
 * 步骤
 * @param props 
 * @returns 
 */
var Temp = function Temp(props) {
  var _useState = (0, _react.useState)(props.list),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    list = _useState2[0],
    setList = _useState2[1];
  var _useState3 = (0, _react.useState)(list.length),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    numSteps = _useState4[0],
    setNumSteps = _useState4[1]; //总步数
  var _useState5 = (0, _react.useState)(1),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    currentStep = _useState6[0],
    setCurrentStep = _useState6[1]; //当前步数

  //点击上一步按钮
  var prevClick = function prevClick() {
    var data = {
      direction: "next",
      currentStep: currentStep,
      newStep: currentStep - 1
    };
    if (props.onChange) {
      var res = props.onChange(data);
      if (!res) {
        return;
      }
    }
    if (currentStep > 1) {
      currentStep--;
    }
    setCurrentStep(currentStep);
  };

  //点击下一步按钮
  var nextClick = function nextClick() {
    var data = {
      direction: "next",
      currentStep: currentStep,
      newStep: currentStep + 1
    };
    if (props.onChange) {
      var res = props.onChange(data);
      if (!res) {
        return;
      }
    }
    if (currentStep < numSteps) {
      currentStep++;
    }
    setCurrentStep(currentStep);
  };

  //点击保存按钮
  var saveClick = function saveClick() {
    props.saveClick && props.saveClick();
  };
  (0, _react.useEffect)(function () {}, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "wizard-body"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "wizard-nav"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "steps"
  }, list.map(function (o, i) {
    var cls = [];
    if (i == currentStep - 1) {
      cls.push('active');
    }
    return /*#__PURE__*/_react["default"].createElement("li", {
      "data-target": '#step_' + i,
      key: i,
      className: cls.join(' ')
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "step"
    }, i + 1), o.name, /*#__PURE__*/_react["default"].createElement("span", {
      className: "chevron"
    }));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "wizard-content"
  }, list.map(function (o, i) {
    var cls = ['step-pane'];
    if (i == currentStep - 1) {
      cls.push('active');
    }
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: cls.join(' ')
    }, o.content);
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "wizard-footer"
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    onClick: function onClick() {
      prevClick();
    },
    disabled: currentStep == 1
  }, "\u4E0A\u4E00\u6B65"), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    onClick: function onClick() {
      nextClick();
    },
    disabled: currentStep == numSteps
  }, "\u4E0B\u4E00\u6B65"), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    onClick: function onClick() {
      saveClick();
    },
    disabled: currentStep != numSteps
  }, "\u4FDD\u5B58")));
};
var _default = exports["default"] = Temp;