"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _area = _interopRequireDefault(require("./area"));
var _store = _interopRequireDefault(require("./store/store.js"));
var _tool = _interopRequireDefault(require("./tool"));
var _index = _interopRequireDefault(require("../scroll/index"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Temp = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _useState = (0, _react.useState)(props.id),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 1),
    id = _useState2[0];
  var _useState3 = (0, _react.useState)(props.isPreview),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 1),
    isPreview = _useState4[0];
  var _useState5 = (0, _react.useState)(['startround', 'endround', 'stepnode', 'confluencenode', 'conditionnode', 'auditornode', 'childwfnode']),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 1),
    toolBtns = _useState6[0];
  var _useState7 = (0, _react.useState)({
      cursor: '选择指针',
      direct: '步骤连线',
      startround: '开始节点',
      endround: '结束节点',
      stepnode: '普通节点',
      confluencenode: '会签节点',
      conditionnode: '条件判断节点',
      auditornode: '传阅节点',
      childwfnode: '子流程节点'
    }),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 1),
    nodeRemarks = _useState8[0];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    style = _useState10[0],
    setStyle = _useState10[1];
  var areaRef = (0, _react.useRef)(null);
  var divRef = (0, _react.useRef)(null);

  // 将外部需要访问的属性和方法暴露出去
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      workflowGet: workflowGet,
      workflowSet: workflowSet
    };
  });
  (0, _react.useEffect)(function () {
    return function () {};
  }, []);

  //获取节点、线集合
  var workflowGet = function workflowGet() {
    var data = {
      nodes: areaRef.current.nodes,
      lines: areaRef.current.lines
    };
    return data;
  };

  //设置流程图
  var workflowSet = function workflowSet(name, op) {
    switch (name) {
      case 'updateNodeName':
        // $.lrworkflow.updateNodeName($workArea, op.nodeId);
        break;
      case 'updateLineName':
        // $.lrworkflow.updateLineName($workArea, op.lineId);
        break;
      case 'set':
        areaRef.current.setNodes([]);
        for (var i = 0, l = op.data.nodes.length; i < l; i++) {
          var node = op.data.nodes[i];
          areaRef.current.addNode(node, true);
        }
        areaRef.current.setLines([]);
        for (var j = 0, _l = op.data.lines.length; j < _l; j++) {
          var line = op.data.lines[j];
          areaRef.current.addLine(line);
        }
        break;
    }
  };
  var _onResize = function onResize() {};
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "lr-workflow",
    id: id,
    ref: divRef,
    style: style,
    onResize: function onResize() {
      _onResize();
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: _store["default"]
  }, !isPreview ? /*#__PURE__*/_react["default"].createElement(_tool["default"], {
    id: id,
    nodeRemarks: nodeRemarks,
    toolBtns: toolBtns
  }) : null, /*#__PURE__*/_react["default"].createElement(_index["default"], null, /*#__PURE__*/_react["default"].createElement(_area["default"], {
    id: id,
    nodeRemarks: nodeRemarks,
    ref: areaRef
  }))));
});
var _default = exports["default"] = Temp;