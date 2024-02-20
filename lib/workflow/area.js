"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _action = _interopRequireDefault(require("./store/action"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// interface Line$line {
//     // path?: { stroke: string; markerEnd: string; d?: string; };
//     path?: any;
//     hi?: any;
//     text?: any;
//     from?: string;
//     to?: string;
// }

//
var Temp = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    focusId = _useState2[0],
    setFocusId = _useState2[1]; //选中要素的id
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    focusType = _useState4[0],
    setFocusType = _useState4[1]; //选中要素的type（node或line）
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    hasStartround = _useState6[0],
    setHasStartround = _useState6[1]; //是否存在开始节点
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    hasEndround = _useState8[0],
    setHasEndround = _useState8[1]; //是否存在结束节点
  var _useState9 = (0, _react.useState)([]),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    nodes = _useState10[0],
    setNodes = _useState10[1]; //存放用于显示的node节点
  var _useState11 = (0, _react.useState)({
      isShow: false,
      name: ''
    }),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    ghost = _useState12[0],
    setGhost = _useState12[1]; //存放拖动虚影对象
  var _useState13 = (0, _react.useState)({
      x: 0,
      y: 0
    }),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    lineStart = _useState14[0],
    setLineStart = _useState14[1]; //
  var _useState15 = (0, _react.useState)([]),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    lines = _useState16[0],
    setLines = _useState16[1]; //存放线 存放样式
  // let [polys, setPolys] = useState([]);                   //存放折线
  var _useState17 = (0, _react.useState)({
      css: {
        display: 'none'
      }
    }),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    lineMove = _useState18[0],
    setLineMove = _useState18[1];
  var _useState19 = (0, _react.useState)({
      css: {
        display: 'none'
      }
    }),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    lineOper = _useState20[0],
    setLineOper = _useState20[1];
  var $workArea = (0, _react.useRef)(null); //创建一个容器
  var $linemover = (0, _react.useRef)(null); //创建一个容器

  // 将外部需要访问的属性和方法暴露出去
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      nodes: nodes,
      lines: lines,
      setNodes: setNodes,
      setLines: setLines,
      addNode: addNode,
      addLine: addLine
    };
  });
  var newGuid = function newGuid() {
    var guid = '';
    for (var i = 1; i <= 32; i++) {
      var n = Math.floor(Math.random() * 16.0).toString(16);
      guid += n;
      if (i == 8 || i == 12 || i == 16 || i == 20) guid += '-';
    }
    return guid;
  };

  //点击画布区域
  var clickWorkArea = function clickWorkArea(eee) {
    var dfop = props;
    if (!dfop.isPreview) {
      var e = eee || window.event;
      var type = dfop.currentBtn;
      if (type == 'cursor') {
        var n = e.target.tagName;
        if (n == 'svg' || n == 'DIV') {
          blurItem();
        }
        return;
      } else if (type == 'direct') {
        return;
      }
      var X, Y;
      var ev = mousePosition(e),
        t = getElCoordinate(e.currentTarget);
      X = ev.x - t.left;
      Y = ev.y - t.top;
      var name = dfop.nodeRemarks[type];
      if (type == 'startround') {
        name = '开始';
        if (hasStartround) {
          console.log('只能有一个开始节点');
          return false;
        }
      }
      if (type == 'endround') {
        name = '结束';
        if (hasEndround) {
          console.log('只能有一个结束节点');
          return false;
        }
      }
      addNode({
        id: newGuid(),
        name: name,
        left: X,
        top: Y,
        type: type
      }, false);
    }
    setNodes((0, _toConsumableArray2["default"])(nodes));
  };

  //划线时用的绑定
  var workAreaMouseMove = function workAreaMouseMove(e) {
    var dfop = props;
    if (dfop.isPreview) {
      return;
    }
    if (dfop.currentBtn != 'direct') return;
    if (!lineStart) return;
    var ev = mousePosition(e),
      t = getElCoordinate(e.currentTarget);
    var X, Y;
    X = ev.x - t.left;
    Y = ev.y - t.top;
    var line = null;
    lines.forEach(function (o) {
      //
      if (o.id == 'lr_workflow_tmp_line') {
        line = o.$line;
      }
    });
    if (!line) return;
    line.hi.d = 'M ' + lineStart.x + ' ' + lineStart.y + ' L ' + X + ' ' + Y;
    line.path.d = 'M ' + lineStart.x + ' ' + lineStart.y + ' L ' + X + ' ' + Y;
    if (line.path.markerEnd == 'url(#arrow2)') {
      line.path.markerEnd = 'url(#arrow3)';
    } else {
      line.path.markerEnd = 'url(#arrow3)';
    }
    setLines((0, _toConsumableArray2["default"])(lines));
    console.log('workAreaMouseMove');
  };
  var workAreaMouseup = function workAreaMouseup() {
    var dfop = props;
    if (dfop.isPreview) {
      return;
    }
    if (dfop.currentBtn != 'direct') return;
    setLineStart(null);
    if (lines.length > 0) {
      var line;
      var num = 0;
      lines.forEach(function (o, i) {
        //
        if (o.id == 'lr_workflow_tmp_line') {
          line = o;
          num = i;
        }
      });
      if (line) {
        lines.splice(num, 1);
      }
    }
    setLines((0, _toConsumableArray2["default"])(lines));
    console.log('workAreaMouseup', lines);
  };
  var gClick = function gClick(id) {
    focusItem(id, 'line');
  };
  var linemoverMousedown = function linemoverMousedown(e) {
    if (e.button == 2) return false;
    var lm = $linemover.current;
    // lm.css({ "background-color": "#333" });
    // var $workArea = e.data.$workArea;
    if (!lineMove.css) {
      lineMove.css = {};
    }
    var newCss = {
      backgroundColor: '#333'
    };
    Object.assign(newCss, lineMove.css);
    newCss.backgroundColor = '#333';
    lineMove.css = newCss;
    var ev = mousePosition(e),
      t = getElCoordinate($workArea.current);
    var X, Y;
    X = ev.x - t.left;
    Y = ev.y - t.top;
    var vX = X - lm.offsetLeft,
      vY = Y - lm.offsetTop;
    var isMove = false;
    document.onmousemove = function (e) {
      if (!e) e = window.event;
      var ev = mousePosition(e);
      X = ev.x - t.left;
      Y = ev.y - t.top;
      var type = lineMove.data ? lineMove.data.type : '';
      if (type == 'lr') {
        X = X - vX;
        if (X < 0) X = 0;else if (X > 5000) X = 5000;
        // lm.css({ left: X + "px" });
        var _newCss = {
          left: X + 'px'
        };
        console.log(_newCss);
        Object.assign(_newCss, lineMove.css);
        _newCss.left = X + 'px';
        lineMove.css = _newCss;
      } else if (type == 'tb') {
        Y = Y - vY;
        if (Y < 0) Y = 0;else if (Y > 5000) Y = 5000;
        // lm.css({ top: Y + "px" });
        if (!lineMove.css) {
          lineMove.css = {};
        }
        var newCss2 = {
          top: Y + 'px'
        };
        Object.assign(newCss2, lineMove.css);
        newCss2.top = Y + 'px';
        lineMove.css = newCss2;
      }
      isMove = true;
      setLineMove(_objectSpread({}, lineMove));
      console.log('linemoverMousedown-onmousemove');
    };
    document.onmouseup = function () {
      var lineId = lineMove.data.tid;
      if (isMove) {
        var type = lineMove.data ? lineMove.data.type : '';
        if (type == 'lr') setLineM(lineId, lm.offsetLeft + 3);else if (type == 'tb') setLineM(lineId, lm.offsetTop + 3);
      }
      var newCss = {
        backgroundColor: 'transparent'
      };
      Object.assign(newCss, lineMove.css);
      newCss.backgroundColor = 'transparent';
      lineMove.css = newCss;
      var tid = lineMove.data.tid;
      if (focusId == tid) {
        focusItem(tid, 'line');
      }
      document.onmousemove = null;
      document.onmouseup = null;
      setLineMove(_objectSpread({}, lineMove));
      console.log(lineMove.css);
      console.log(lineOper.css);
      console.log('linemoverMousedown-onmouseup');
    };
    console.log('linemoverMousedown');
  };
  var lineoperClick = function lineoperClick(e) {
    if (!e) e = window.event;
    if (e.target.tagName != 'A' && e.target.tagName != 'B') return;
    var id = lineOper.tid;
    var type = e.target.className;
    if (type == 'x') {
      delLine(id);
      lineOper.css = {
        display: 'none'
      };
      setLineOper(_objectSpread({}, lineOper));
    } else {
      setLineType(id, type);
    }
  };

  //添加节点
  var addNode = function addNode(node, isold) {
    var auditor = '';
    var $node = {
      isShowNodeico: true,
      css: {},
      isShowNodeclose: false,
      className: [],
      //node节点class
      bClassName: '' //node节点下b标签的class
    };
    Object.assign($node, node);
    if (!$node.width || $node.width < 150) $node.width = 150;
    if (!$node.height || $node.height < 65) $node.height = 65;
    if (!$node.top || $node.top < 0) $node.top = 0;
    if (!$node.left || node.left < 0) $node.left = 0;
    if (!!$node.history && $node.history.length > 0) {
      //edit in 20230626 by lzs 此节点审批历史记录是按时间倒序，取最新的就好
      if (!!node.history[0].createUserName) {
        auditor = '(' + node.history[0].createUserName + ')';
      }
      if (!!node.history[0].namelist) {
        auditor = '(' + node.history[0].namelist + ')';
      }
    }
    if ($node.type == 'conditionnode') {
      $node.width = 160;
      $node.height = 90;
      $node.className.push('lr-workflow-node');
      $node.className.push('item-conditionnode');
      $node.bClassName = 'ico_' + node.type + 'div';
    } else if ($node.type != 'startround' && $node.type != 'endround') {
      $node.className.push('lr-workflow-node');
      $node.name = node.name + auditor;
      $node.bClassName = 'ico_' + node.type;
    } else {
      $node.width = 52;
      $node.height = 52;
      if ($node.type == 'startround') {
        setHasStartround(true);
      } else if ($node.type == 'endround') {
        $node.name = '结束';
        setHasEndround(true);
      }
      $node.className.push('lr-workflow-node');
      $node.className.push('item-' + $node.type);
      $node.name = node.name + auditor;
      $node.bClassName = '';
    }
    $node.css.top = $node.top;
    $node.css.left = $node.left;
    $node.css.width = $node.width;
    $node.css.height = $node.height;
    if (node.state != undefined && (node.type == 'startround' || node.type == 'auditornode' || node.type == 'stepnode' || node.type == 'confluencenode' || node.type == 'childwfnode' || node.type == 'systemauditnode')) {
      $node.css.paddingLeft = 0;
      $node.css.color = '#fff';
      $node.isShowNodeico = false;
      switch (node.state //0正在处理 1 已处理同意 2 已处理不同意 3 未处理 4 当前需要处理的节点
      ) {
        case '0':
          $node.css.background = '#5bc0de';
          $node.css.border = 0;
          break;
        case '1':
          $node.css.background = '#5cb85c';
          $node.css.border = 0;
          break;
        case '2':
          $node.css.background = '#d9534f';
          $node.css.border = 0;
          break;
        case '3':
          $node.css.background = '#999';
          $node.css.border = 0;
          break;
        case '4':
          $node.css.background = '#f0ad4e';
          $node.css.border = 0;
          break;
      }
    }

    // 初始化节点的配置信息
    if (!isold) {
      switch (node.type) {
        case 'startround':
          node.wfForms = [];
          break;
        case 'stepnode':
          node.auditors = [];
          node.wfForms = [];
          node.btnlist = [];
          break;
        case 'auditornode':
          node.auditors = [];
          node.wfForms = [];
          break;
        case 'confluencenode':
          // 会签
          break;
        case 'conditionnode':
          // 条件
          node.conditions = [];
          break;
        case 'childwfnode':
          // 条件
          node.auditors = [];
          break;
      }
    }
    nodes.push($node);
    setNodes((0, _toConsumableArray2["default"])(nodes));
  };

  //删除结点
  var delNode = function delNode(nodeData) {
    if (props.isPreview) {
      return;
    }

    //删除关联线
    for (var i = lines.length - 1; i >= 0; i--) {
      var tmpLine = lines[i];
      if (tmpLine.from != nodeData.id && tmpLine.to != nodeData.id) {} else {
        lines.splice(i, 1);
      }
    }
    setLines((0, _toConsumableArray2["default"])(lines));

    //删除节点
    for (var j = nodes.length - 1; j >= 0; j--) {
      var tmpNode = nodes[j];
      if (tmpNode.id == nodeData.id) {
        nodes.splice(j, 1);
      }
    }
    setNodes((0, _toConsumableArray2["default"])(nodes));
    if (nodeData.type == 'startround') {
      setHasStartround(false);
    } else if (nodeData.type == 'endround') {
      setHasEndround(false);
    }
    setFocusId('');
    setFocusType('');
  };

  //移动结点到一个新的位置
  var moveNode = function moveNode(nodeData, left, top) {
    if (left < 0) left = 0;
    if (top < 0) top = 0;
    nodeData.left = left;
    nodeData.top = top;
    //重画转换线
    resetLines(nodeData.id);
    setNodes((0, _toConsumableArray2["default"])(nodes));
  };

  // 取消所有结点/连线被选定的状态
  var blurItem = function blurItem() {
    if (focusId) {
      if (focusType == 'node') {
        //判断是否为点
        nodes.forEach(function (o) {
          //
          if (o.id == focusId) {
            o.isShowNodeclose = false;
            if (o.className.indexOf('lr-workflow-nodefocus') > 0) {
              o.className.splice(o.className.indexOf('lr-workflow-nodefocus'), 1);
            }
            if (o.className.indexOf('lr-workflow-nodemark') > 0) {
              o.className.splice(o.className.indexOf('lr-workflow-nodemark'), 1);
            }
          }
        });
        setNodes((0, _toConsumableArray2["default"])(nodes));
      } else if (focusType == 'line') {
        var lineData = getLine(focusId);
        if (!(lineData !== null && lineData !== void 0 && lineData.marked)) {
          lines.forEach(function (o) {
            //
            if (o.id == focusId) {
              var $line = o.$line;
              if ((lineData === null || lineData === void 0 ? void 0 : lineData.color) == '2') {
                $line.path.stroke = '#ff3300';
                $line.path.markerEnd = 'url(#arrow2)';
              } else {
                $line.path.stroke = 'gray';
                $line.path.markerEnd = 'url(#arrow1)';
              }
            }
          });
          setLines((0, _toConsumableArray2["default"])(lines));
        }
        lineMove.css = {
          display: 'none'
        };
        lineOper.css = {
          display: 'none'
        };
        setLineMove(_objectSpread({}, lineMove));
        setLineOper(_objectSpread({}, lineMove));
      }
    }
    setFocusId('');
    setFocusType('');
    return true;
  };

  // 选定某个结点/转换线
  var focusItem = function focusItem(id, type) {
    if (!blurItem()) {
      //先执行"取消选中",如果返回FLASE,则也会阻止选定事件继续进行.
      return;
    }

    //如果是节点
    if (type == 'node') {
      nodes.forEach(function (o) {
        //
        if (o.id == id) {
          o.isShowNodeclose = true;
          o.className.push('lr-workflow-nodefocus');
        }
      });
      setNodes((0, _toConsumableArray2["default"])(nodes));
    } else if (type == 'line') {
      //如果是连接线
      lines.forEach(function (o) {
        //
        if (o.id == id && o.$line) {
          var $line = o.$line;
          $line.path.stroke = '#225ee1';
          $line.path.markerEnd = 'url(#arrow3)';
          var x,
            y,
            from = [],
            to = [];
          var tmpfrom = $line.from.split(',');
          var tmpto = $line.to.split(',');
          from[0] = parseInt(tmpfrom[0], 10);
          from[1] = parseInt(tmpfrom[1], 10);
          to[0] = parseInt(tmpto[0], 10);
          to[1] = parseInt(tmpto[1], 10);
          var lineData = getLine(id);
          if (lineData.type == 'lr') {
            from[0] = lineData.M;
            to[0] = from[0];
            lineMove.css = {
              width: '5px',
              height: (to[1] - from[1]) * (to[1] > from[1] ? 1 : -1) + 'px',
              left: from[0] - 3 + 'px',
              top: (to[1] > from[1] ? from[1] : to[1]) + 1 + 'px',
              cursor: 'e-resize',
              display: 'block'
            };
            lineMove.data = {
              type: 'lr',
              tid: id
            };
          } else if (lineData.type == 'tb') {
            from[1] = lineData.M;
            to[1] = from[1];
            lineMove.css = {
              width: (to[0] - from[0]) * (to[0] > from[0] ? 1 : -1) + 'px',
              height: '5px',
              left: (to[0] > from[0] ? from[0] : to[0]) + 1 + 'px',
              top: from[1] - 3 + 'px',
              cursor: 's-resize',
              display: 'block'
            };
            lineMove.data = {
              type: 'tb',
              tid: id
            };
          }
          x = (from[0] + to[0]) / 2 - 35;
          y = (from[1] + to[1]) / 2 + 6;
          lineOper.css = {
            display: 'block',
            left: x + 'px',
            top: y + 'px'
          };
          lineOper.tid = id;
          setLineMove(_objectSpread({}, lineMove));
          setLineOper(_objectSpread({}, lineOper));
        }
      });
      setLines((0, _toConsumableArray2["default"])(lines));
    }
    setFocusId(id);
    setFocusType(type);
    props.changeCurrentBtn('cursor');
  };

  //获取一个DIV的绝对坐标的功能函数,即使是非绝对定位,一样能获取到
  var getElCoordinate = function getElCoordinate(dom) {
    // var dom = e.currentTarget;
    var t = dom.offsetTop;
    var l = dom.offsetLeft;
    dom = dom.offsetParent;
    while (dom) {
      t += dom.offsetTop;
      l += dom.offsetLeft;
      dom = dom.offsetParent;
    }
    return {
      top: t,
      left: l
    };
  };

  // 获取鼠标定位点坐标
  var mousePosition = function mousePosition(e) {
    if (!e) e = window.event;
    var ev = e;
    if (ev.pageX || ev.pageY) {
      return {
        x: ev.pageX,
        y: ev.pageY
      };
    }
    return {
      x: ev.clientX + document.documentElement.scrollLeft - document.body.clientLeft,
      y: ev.clientY + document.documentElement.scrollTop - document.body.clientTop
    };
  };

  //绑定用鼠标移动事件(节点拖动)
  var nodeIcoMousedown = function nodeIcoMousedown(nodeData, e) {
    if (props.isPreview) {
      return;
    }
    var dfop = props;
    e = e || window.event;
    if (dfop.$nowType == 'direct') {
      return;
    }
    var id = nodeData.id;
    var $workAreaCCC = $workArea.current;
    focusItem(id, 'node');
    var ev = mousePosition(e),
      t = getElCoordinate($workAreaCCC);
    ghost.isShow = true;
    ghost.name = nodeData.name;
    ghost.type = nodeData.type;
    ghost.bClassName = nodeData.bClassName;
    ghost.isShowNodeico = nodeData.isShowNodeico;
    if (nodeData.type == 'endround' || nodeData.type == 'startround' || nodeData.type == 'conditionnode') {
      ghost.css = {
        paddingLeft: 0
      };
    } else {
      ghost.css = {
        paddingLeft: 48
      };
    }
    if (nodeData.type == 'conditionnode') {}
    var X, Y;
    t.left = 0;
    X = ev.x - t.left;
    Y = ev.y - t.top;
    var vX = X - nodeData.left,
      vY = Y - nodeData.top;
    var isMove = false;
    // var hack = 1;
    // if (navigator.userAgent.indexOf("8.0") != -1) hack = 0;
    document.onmousemove = function (e) {
      if (!e) e = window.event;
      var ev = mousePosition(e);
      if (X == ev.x - vX && Y == ev.y - vY) return false;
      X = ev.x - vX;
      Y = ev.y - vY - 47;
      if (isMove && !ghost.css.display && ghost.css.display != 'table') {
        ghost.css = {
          display: 'table',
          width: nodeData.css.width,
          height: nodeData.css.height,
          top: nodeData.top,
          left: nodeData.left + t.left,
          cursor: 'move'
        };
      }
      if (X < 60) {
        X = 60;
      } else if (X + nodeData.width > t.left + $workAreaCCC.clientWidth) {
        X = t.left + $workAreaCCC.clientWidth - nodeData.width;
      }
      if (Y < 0) {
        Y = 0;
      } else if (Y + nodeData.height > t.top + $workAreaCCC.clientHeight - 47) {
        Y = $workAreaCCC.clientHeight - nodeData.height + t.top - 47;
      }
      isMove = true;
      var newcss = {};
      Object.assign(newcss, ghost.css);
      newcss.left = X;
      newcss.top = Y;
      ghost.css = newcss;
      setGhost(_objectSpread({}, ghost));
    };
    document.onmouseup = function () {
      ghost = {
        isShow: false
      };
      if (isMove) moveNode(nodeData, X - t.left, Y + 47 - t.top);
      document.onmousemove = null;
      document.onmouseup = null;
      setGhost(_objectSpread({}, ghost));
    };
    return false;
  };

  //绑定鼠标覆盖事件
  var nodeMouseEnter = function nodeMouseEnter(nodeData) {
    if (props.isPreview) {
      return;
    }
    var dfop = props;
    if (dfop.currentBtn != 'direct') return;
    if (nodeData.className.indexOf('r-workflow-nodemark') == -1) {
      nodeData.className.push('lr-workflow-nodemark');
    }
    setNodes((0, _toConsumableArray2["default"])(nodes));
  };

  //绑定鼠标移出事件
  var nodeMouseLeave = function nodeMouseLeave(nodeData) {
    if (props.isPreview) {
      return;
    }
    var dfop = props;
    if (dfop.currentBtn != 'direct') return;
    if (nodeData.className.indexOf('lr-workflow-nodemark') > 0) {
      nodeData.className.splice(nodeData.className.indexOf('lr-workflow-nodemark'), 1);
    }
    setNodes((0, _toConsumableArray2["default"])(nodes));
  };

  //绑定连线时确定初始点
  var nodespotMousedown = function nodespotMousedown(nodeData, kind) {
    if (props.isPreview) {
      return;
    }
    var dfop = props;
    if (dfop.currentBtn != 'direct') return;
    var X, Y;
    X = nodeData.left;
    Y = nodeData.top;
    var position = 'left';
    if (kind == 'left') {
      position = 'left';
      Y += nodeData.height / 2;
    } else if (kind == 'top') {
      position = 'top';
      X += nodeData.width / 2;
    } else if (kind == 'right') {
      position = 'right';
      X += nodeData.width;
      Y += nodeData.height / 2;
    } else if (kind == 'bottom') {
      position = 'bottom';
      X += nodeData.width / 2;
      Y += nodeData.height;
    }
    setLineStart({
      x: X,
      y: Y,
      id: nodeData.id,
      position: position
    });
    var line = {};
    //判断有无临时line
    var hasTmp = false;
    lines.forEach(function (o) {
      //
      if (o.id == 'lr_workflow_tmp_line') {
        hasTmp = true;
        return false;
      }
    });
    if (!hasTmp) {
      line.id = 'lr_workflow_tmp_line';
      var $line = drawLine('1', 'lr_workflow_tmp_line', [X, Y], [X, Y], true, true);
      line.$line = $line;
      lines.push(line);
    }
    console.log('nodespotMousedown');
  };

  //绑定连线时确定结束点
  var nodespotMouseup = function nodespotMouseup(nodeData, kind) {
    if (props.isPreview) {
      return;
    }
    var dfop = props;
    if (dfop.currentBtn != 'direct') return;
    var position = 'left';
    if (kind == 'left') {
      position = 'left';
    } else if (kind == 'top') {
      position = 'top';
    } else if (kind == 'right') {
      position = 'right';
    } else if (kind == 'bottom') {
      position = 'bottom';
    }
    console.log('lineStart', lineStart);
    if (lineStart) addLine({
      id: newGuid(),
      from: lineStart.id,
      to: nodeData.id,
      sp: lineStart.position,
      ep: position,
      name: ''
    });
    console.log(lines);
    setLines((0, _toConsumableArray2["default"])(lines));
    console.log('nodespotMouseup');
  };
  var nodespotMouseenter = function nodespotMouseenter() {
    // var dfop = e.data.$workArea[0].dfop;
    // if (dfop.currentBtn != "direct") return;
    // $(this).addClass("lr-workflow-nodespotmark");
  };

  // 获取线条数据
  var getLine = function getLine(lineId) {
    for (var i = 0, l = lines.length; i < l; i++) {
      if (lineId == lines[i].id) {
        return lines[i];
      }
    }
  };

  // 获取线条端点坐标
  var getLineSpotXY = function getLineSpotXY(nodeId, type) {
    var nodeData;
    for (var i = 0, l = nodes.length; i < l; i++) {
      if (nodeId == nodes[i].id) {
        nodeData = nodes[i];
        break;
      }
    }
    if (!nodeData) {
      return [0, 0];
    }
    var X, Y;
    X = nodeData.left;
    Y = nodeData.top;
    switch (type) {
      case 'left':
        Y += nodeData.height / 2;
        break;
      case 'top':
        X += nodeData.width / 2;
        break;
      case 'right':
        X += nodeData.width;
        Y += nodeData.height / 2;
        break;
      case 'bottom':
        X += nodeData.width / 2;
        Y += nodeData.height;
        break;
    }
    return [X, Y];
  };

  // 计算两个结点间要连折线的话，连线的所有坐标
  var calcPolyPoints = function calcPolyPoints(SP, EP, type, M) {
    var m1 = [],
      m2 = [];
    if (type == 'lr') {
      var m = M || (SP[0] + EP[0]) / 2;
      //粗略计算2个中点
      m1 = [m, SP[1]];
      m2 = [m, EP[1]];
    }
    //如果是允许中段可上下移动的折线,则参数M为可移动中段线的Y坐标
    else if (type == 'tb') {
      var _m = M || (SP[1] + EP[1]) / 2;
      //粗略计算2个中点
      m1 = [SP[0], _m];
      m2 = [EP[0], _m];
    }
    return {
      start: SP,
      m1: m1,
      m2: m2,
      end: EP
    };
  };

  //画一条只有两个中点的折线
  var drawPoly = function drawPoly(color, id, sp, m1, m2, ep, mark) {
    var poly = {},
      strPath = '',
      hi = {},
      path = {};
    if (id != '') poly.id = id;
    poly.from = sp[0] + ',' + sp[1];
    poly.to = ep[0] + ',' + ep[1];
    hi.visibility = 'hidden';
    hi.strokeWidth = 9;
    hi.fill = 'none';
    hi.stroke = 'white';
    strPath = 'M ' + sp[0] + ' ' + sp[1];
    if (m1[0] != sp[0] || m1[1] != sp[1]) strPath += ' L ' + m1[0] + ' ' + m1[1];
    if (m2[0] != ep[0] || m2[1] != ep[1]) strPath += ' L ' + m2[0] + ' ' + m2[1];
    strPath += ' L ' + ep[0] + ' ' + ep[1];
    hi.d = strPath;
    hi.pointerEvents = 'stroke';
    path.d = strPath;
    path.strokeWidth = 2.0;
    path.strokeLinecap = 'round';
    path.fill = 'none';
    if (mark) {
      path.stroke = '#3498DB';
      path.markerEnd = 'url(#arrow3)';
    } else if (color == '2') {
      path.stroke = '#ff3300';
      path.markerEnd = 'url(#arrow2)';
    } else {
      path.stroke = 'gray';
      path.markerEnd = 'url(#arrow1)';
    }
    poly.hi = hi;
    poly.path = path;
    var text = {};
    var x = (m2[0] + m1[0]) / 2;
    var y = (m2[1] + m1[1]) / 2;
    text.textAnchor = 'middle';
    text.x = x;
    text.y = y - 5;
    text.style = {
      cursor: 'text'
    };
    poly.style = {
      cursor: 'pointer'
    };
    poly.text = text;
    return poly;
  };

  // 绘制一条箭头线，并返回线的DOM
  var drawLine = function drawLine(color, id, sp, ep, mark, dash) {
    var line = {
      id: id,
      from: sp[0] + ',' + sp[1],
      to: ep[0] + ',' + ep[1],
      style: {
        cursor: 'crosshair'
      },
      hi: {},
      path: {
        style: {}
      },
      text: {
        isShow: false
      }
    };
    var hi = {};
    hi.visibility = 'hidden';
    hi.strokeWidth = 9;
    hi.fill = 'none';
    hi.stroke = 'white';
    hi.d = 'M ' + sp[0] + ' ' + sp[1] + ' L ' + ep[0] + ' ' + ep[1];
    hi.pointerEvents = 'stroke';
    var path = {};
    path.d = 'M ' + sp[0] + ' ' + sp[1] + ' L ' + ep[0] + ' ' + ep[1];
    path.strokeWidth = 2;
    path.strokeLinecap = 'round';
    path.fill = 'none';
    if (dash) path.style = {
      strokeDasharray: '6,5'
    };
    if (mark) {
      path.stroke = '#3498DB';
      path.markerEnd = 'url(#arrow3)';
    } else if (color == '2') {
      path.stroke = '#ff3300';
      path.markerEnd = 'url(#arrow2)';
    } else {
      path.stroke = 'gray';
      path.markerEnd = 'url(#arrow1)';
    }
    line.style.cursor = 'crosshair';
    if (id != '' && id != 'lr_workflow_tmp_line') {
      var text = {};
      var x = (ep[0] + sp[0]) / 2;
      var y = (ep[1] + sp[1]) / 2;
      text.isShow = true;
      text.textAnchor = 'middle';
      text.x = x;
      text.y = y - 5;
      text.style = {
        cursor: 'text'
      };
      line.text = text;
      line.style.cursor = 'pointer';
    }
    line.hi = hi;
    line.path = path;
    return line;
  };

  //节点点击事件
  var nodeClick = function nodeClick(node, e) {
    e.stopPropagation();
    if (e.detail > 1) {
      //点击次数大于1，当作双击
      // var nodeData = {
      //     id: node.id
      // };
      // props.openNode && _this.props.openNode(nodeData, _this.state.nodes);
    } else {
      //单击
      if (props.isPreview) {
        return;
      }
      focusItem(node.id, 'node');
    }
  };

  // 增加一条线
  var addLine = function addLine(line) {
    // 传阅节点和结束节点不允许做为开始节点
    var _isReturn = false;
    nodes.forEach(function (o) {
      //
      if (o.id == line.from) {
        if (o.type == 'endround' || o.type == 'auditornode') {
          _isReturn = true;
        }
        return false;
      }
    });
    if (_isReturn) return;
    var $line;
    if (line.from == line.to) return;
    // 避免两个节点间不能有一条以上同向接连线
    for (var i = 0, l = lines.length; i < l; i++) {
      if (line.from == lines[i].from && line.to == lines[i].to) {
        return;
      }
    }
    // 获取开始和结束节点的坐标
    var sxy = getLineSpotXY(line.from, line.sp);
    var exy = getLineSpotXY(line.to, line.ep);
    line.name = line.name || '';
    line.color = line.color || '1';
    if (line.type && line.type != 'sl') {
      var res = calcPolyPoints(sxy, exy, line.type, line.M);
      $line = drawPoly(line.color, line.id, res.start, res.m1, res.m2, res.end, line.mark);
    } else {
      line.type = 'sl'; //默认为直线
      $line = drawLine(line.color, line.id, sxy, exy, line.mark, null);
    }
    if (line.name != '') {
      // $($line).find('text').html(line.name);
    }
    line.$line = $line;
    lines.push(line);
    setLines((0, _toConsumableArray2["default"])(lines));
  };

  // 重构所有连向某个结点的线的显示，传参结构为$nodeData数组的一个单元结构
  var resetLines = function resetLines(nodeId) {
    var $line;
    var _loop = function _loop() {
      var sxy = [];
      var exy = [];
      var line = lines[i];
      if (line.from == nodeId || line.to == nodeId) {
        sxy = getLineSpotXY(line.from, line.sp);
        exy = getLineSpotXY(line.to, line.ep);
        var tmpline;
        lines.forEach(function (o) {
          //
          if (o.id == line.id) {
            tmpline = o;
          }
        });
        if (tmpline) {
          if (lines.indexOf(tmpline) > 0) {
            lines.splice(lines.indexOf(tmpline), 1);
          }
        }
        if (line.type == 'sl') {
          $line = drawLine(line.color, line.id, sxy, exy, line.mark, '');
        } else {
          var res = calcPolyPoints(sxy, exy, line.type, line.M);
          $line = drawPoly(line.color, line.id, res.start, res.m1, res.m2, res.end, line.mark);
        }
        line.$line = $line;
        lines.push(line);
        setLines((0, _toConsumableArray2["default"])(lines));
      }
    };
    for (var i = 0, l = lines.length; i < l; i++) {
      _loop();
    }
  };

  //重新设置连线的样式 newType= "sl":直线, "lr":中段可左右移动型折线, "tb":中段可上下移动型折线
  var setLineType = function setLineType(id, newType) {
    var lineData = getLine(id);
    if (!newType || newType == null || newType == '' || newType == lineData.type) return false;
    var from = lineData.from;
    var to = lineData.to;
    lineData.type = newType;
    var sxy = getLineSpotXY(from, lineData.sp);
    var exy = getLineSpotXY(to, lineData.ep);

    // 如果是变成折线
    if (newType != 'sl') {
      calcPolyPoints(sxy, exy, lineData.type, lineData.M);
      setLineM(id, getMValue(sxy, exy, newType));
    }
    // 如果是变回直线
    else {
      delete lineData.M;
      lineMove.css = {
        display: 'none'
      };
      lineMove.data = {};
      setLineMove(_objectSpread({}, lineMove));

      //移除线
      for (var i = lines.length - 1; i >= 0; i--) {
        var tmpLine = lines[i];
        if (tmpLine.id == id) {
          lines.splice(i, 1);
        }
      }
      var $line = drawLine(lineData.color, lineData.id, sxy, exy, lineData.mark, null);
      lineData.$line = $line;
      lines.push(lineData);
    }
    setLines((0, _toConsumableArray2["default"])(lines));
    if (focusId == id) {
      focusItem(id, 'line');
    }
  };

  //设置折线中段的X坐标值（可左右移动时）或Y坐标值（可上下移动时）
  var setLineM = function setLineM(id, M) {
    var lineData = getLine(id);
    if (!lineData || M < 0 || !lineData.type || lineData.type == 'sl') return false;
    var from = lineData.from;
    var to = lineData.to;
    lineData.M = M;
    var sxy = getLineSpotXY(from, lineData.sp);
    var exy = getLineSpotXY(to, lineData.ep);
    var ps = calcPolyPoints(sxy, exy, lineData.type, lineData.M);

    //移除线
    for (var i = lines.length - 1; i >= 0; i--) {
      var tmpLine = lines[i];
      if (tmpLine.id == id) {
        lines.splice(i, 1);
      }
    }
    var $line = drawPoly(lineData.color, id, ps.start, ps.m1, ps.m2, ps.end, lineData.marked || focusId == id);
    lineData.$line = $line;
    lines.push(lineData);
    setLines((0, _toConsumableArray2["default"])(lines));
  };

  //初始化折线中段的X/Y坐标,mType='rb'时为X坐标,mType='tb'时为Y坐标
  var getMValue = function getMValue(sxy, exy, mType) {
    if (mType == 'lr') {
      return (sxy[0] + exy[0]) / 2;
    } else if (mType == 'tb') {
      return (sxy[1] + exy[1]) / 2;
    }
  };

  // 删除线条
  var delLine = function delLine(lineId) {
    for (var i = lines.length - 1; i >= 0; i--) {
      var tmpLine = lines[i];
      if (tmpLine.id == lineId) {
        lines.splice(i, 1);
      }
    }
    setFocusId('');
    setLines((0, _toConsumableArray2["default"])(lines));
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "lr-workflow-work",
    style: {
      width: 5000,
      height: 5000
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "lr-workflow-workinner",
    ref: $workArea
    // unselectable='on'
    ,
    onClick: function onClick(e) {
      clickWorkArea(e);
    },
    onMouseMove: function onMouseMove(e) {
      workAreaMouseMove(e);
    },
    onMouseUp: function onMouseUp() {
      workAreaMouseup();
    }
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    id: 'draw_' + props.id,
    style: {
      width: 5000,
      height: 5000
    }
  }, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("marker", {
    id: "arrow1",
    viewBox: "0 0 6 6",
    refX: "5",
    refY: "3",
    markerUnits: "strokeWidth",
    markerWidth: "6",
    markerHeight: "6",
    orient: "auto"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 0 0 L 6 3 L 0 6 z",
    fill: "gray",
    strokeWidth: "0"
  })), /*#__PURE__*/_react["default"].createElement("marker", {
    id: "arrow2",
    viewBox: "0 0 6 6",
    refX: "5",
    refY: "3",
    markerUnits: "strokeWidth",
    markerWidth: "6",
    markerHeight: "6",
    orient: "auto"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 0 0 L 6 3 L 0 6 z",
    fill: "#ff3300",
    strokeWidth: "0"
  })), /*#__PURE__*/_react["default"].createElement("marker", {
    id: "arrow3",
    viewBox: "0 0 6 6",
    refX: "5",
    refY: "3",
    markerUnits: "strokeWidth",
    markerWidth: "6",
    markerHeight: "6",
    orient: "auto"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 0 0 L 6 3 L 0 6 z",
    fill: "#225ee1",
    strokeWidth: "0"
  }))), lines.map(function (o, i) {
    var $line = o.$line;
    if (!$line) {
      return null;
    }
    var hi = $line.hi;
    var path = $line.path;
    var text = $line.text;
    return /*#__PURE__*/_react["default"].createElement("g", {
      key: i,
      id: o.id,
      from: o.from,
      to: o.to,
      onClick: function onClick() {
        gClick(o.id);
      }
    }, /*#__PURE__*/_react["default"].createElement("path", {
      visibility: hi.visibility,
      strokeWidth: hi.strokeWidth,
      fill: hi.fill,
      stroke: hi.stroke,
      d: hi.d,
      pointerEvents: hi.pointerEvents
    }), /*#__PURE__*/_react["default"].createElement("path", {
      d: path.d,
      strokeWidth: path.strokeWidth,
      strokeLinecap: path.strokeLinecap,
      fill: path.fill,
      style: path.style,
      stroke: path.stroke,
      markerEnd: path.markerEnd
    }), text.isShow ? /*#__PURE__*/_react["default"].createElement("text", {
      textAnchor: text.textAnchor,
      x: text.x,
      y: text.y,
      style: text.style
    }) : null);
  }), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", null), /*#__PURE__*/_react["default"].createElement("path", null), /*#__PURE__*/_react["default"].createElement("text", null))), nodes.map(function (o, i) {
    //
    var nodeCss = o.css;
    var newNodeCss = {};
    Object.assign(newNodeCss, nodeCss);
    newNodeCss.left = o.left;
    newNodeCss.top = o.top;
    //节点
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: o.className.join(' '),
      id: o.id,
      key: i,
      style: newNodeCss,
      onClick: function onClick(e) {
        nodeClick(o, e);
      },
      onMouseEnter: function onMouseEnter() {
        nodeMouseEnter(o);
      },
      onMouseLeave: function onMouseLeave() {
        nodeMouseLeave(o);
      }
    },
    //节点图标
    o.isShowNodeico ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "lr-workflow-nodeico",
      onMouseDown: function onMouseDown(e) {
        nodeIcoMousedown(o, e);
      }
    }, o.type != 'startround' && o.type != 'endround' ? /*#__PURE__*/_react["default"].createElement("b", {
      className: o.bClassName
    }) : null) : null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "lr-workflow-nodetext"
    }, o.name), /*#__PURE__*/_react["default"].createElement("div", {
      className: "lr-workflow-nodeassemble"
    }, o.isShowNodeclose ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "lr-workflow-nodeclose",
      style: {
        display: 'block'
      },
      onClick: function onClick() {
        delNode(o);
      }
    }) : null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "lr-workflow-nodespot left",
      onMouseDown: function onMouseDown() {
        nodespotMousedown(o, 'left');
      },
      onMouseUp: function onMouseUp() {
        nodespotMouseup(o, 'left');
      },
      onMouseEnter: function onMouseEnter() {
        nodespotMouseenter();
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "lr-workflow-nodespotc"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "lr-workflow-nodespot top",
      onMouseDown: function onMouseDown() {
        nodespotMousedown(o, 'top');
      },
      onMouseUp: function onMouseUp() {
        nodespotMouseup(o, 'top');
      },
      onMouseEnter: function onMouseEnter() {
        nodespotMouseenter();
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "lr-workflow-nodespotc"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "lr-workflow-nodespot right",
      onMouseDown: function onMouseDown() {
        nodespotMousedown(o, 'right');
      },
      onMouseUp: function onMouseUp() {
        nodespotMouseup(o, 'right');
      },
      onMouseEnter: function onMouseEnter() {
        nodespotMouseenter();
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "lr-workflow-nodespotc"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "lr-workflow-nodespot bottom",
      onMouseDown: function onMouseDown() {
        nodespotMousedown(o, 'bottom');
      },
      onMouseUp: function onMouseUp() {
        nodespotMouseup(o, 'bottom');
      },
      onMouseEnter: function onMouseEnter() {
        nodespotMouseenter();
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "lr-workflow-nodespotc"
    }))));
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "lr-workflow-linemover",
    style: lineMove.css,
    ref: $linemover,
    onMouseDown: function onMouseDown(e) {
      linemoverMousedown(e);
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "lr-workflow-lineoper",
    style: lineOper.css,
    onClick: function onClick(e) {
      lineoperClick(e);
    }
  }, /*#__PURE__*/_react["default"].createElement("b", {
    className: "lr"
  }), /*#__PURE__*/_react["default"].createElement("b", {
    className: "tb"
  }), /*#__PURE__*/_react["default"].createElement("b", {
    className: "sl"
  }), /*#__PURE__*/_react["default"].createElement("b", {
    className: "x"
  }))),
  //拖动节点的虚影
  ghost.isShow ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "lr-workflow-rsghost"
    // unselectable='on'
    ,
    style: ghost.css
  },
  //节点图标
  ghost.isShowNodeico ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "lr-workflow-nodeico"
  }, ghost.type != 'startround' && ghost.type != 'endround' ? /*#__PURE__*/_react["default"].createElement("b", {
    className: ghost.bClassName
  }) : null) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "lr-workflow-nodetext"
  }, ghost.name), /*#__PURE__*/_react["default"].createElement("div", {
    className: "lr-workflow-nodeassemble"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "lr-workflow-nodespot left"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "lr-workflow-nodespotc"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "lr-workflow-nodespot top"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "lr-workflow-nodespotc"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "lr-workflow-nodespot right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "lr-workflow-nodespotc"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "lr-workflow-nodespot bottom"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "lr-workflow-nodespotc"
  })))) : null);
});
var mapStateToProps = function mapStateToProps(state) {
  return state;
};
var mapDispatchToProps = _objectSpread({}, _action["default"]);
var _default = exports["default"] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true
})(Temp);