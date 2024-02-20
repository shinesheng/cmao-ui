"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**临时存放的滚动条参数，防止异步渲染state值丢失 */
var tempOp = {};
/**
 * 滚动条组件， 可以自动匹配高度框架，生成滚动条。
 * 要求 1.子元素高宽比本组件大
 * @param props 
 * @returns 
 */
var Temp = function Temp(props) {
  var _useState = (0, _react.useState)(props.id),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    id = _useState2[0],
    setId = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    op = _useState4[0],
    setOp = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    scrollStyle = _useState6[0],
    setScrollStyle = _useState6[1];
  var _useState7 = (0, _react.useState)({}),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    verticalStyle = _useState8[0],
    setVerticalStyle = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    verticalBlockClass = _useState10[0],
    setVerticalBlockClass = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    verticalBlockStyle = _useState12[0],
    setVerticalBlockStyle = _useState12[1];
  var _useState13 = (0, _react.useState)({}),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    horizontalStyle = _useState14[0],
    setHorizontalStyle = _useState14[1];
  var _useState15 = (0, _react.useState)({}),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    horizontalBlockStyle = _useState16[0],
    setHorizontalBlockStyle = _useState16[1];
  var _useState17 = (0, _react.useState)([]),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    horizontalBlockClass = _useState18[0],
    setHorizontalBlockClass = _useState18[1];
  var _useState19 = (0, _react.useState)({}),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    moveStyle = _useState20[0],
    setMoveStyle = _useState20[1];
  var $wrap = (0, _react.useRef)(null); //最外层的容器，它的高度宽度是100%，根据该组件所位于的div样式决定
  var $scroll = (0, _react.useRef)(null); //用于滚动的容器，它的高度宽度是根据子组件来决定，一般比最外层容器大，所以才需要滚动
  var $move = (0, _react.useRef)(null); //移动板的容器

  (0, _react.useEffect)(function () {
    var _$scroll$current, _$scroll$current2, _$wrap$current, _$wrap$current2;
    if (!id) {
      id = 'cmao_' + newGuid();
      setId(id);
    }
    var sh = (_$scroll$current = $scroll.current) === null || _$scroll$current === void 0 ? void 0 : _$scroll$current.clientHeight; //获取的是包含scroll包含children组件的高度
    var sw = (_$scroll$current2 = $scroll.current) === null || _$scroll$current2 === void 0 ? void 0 : _$scroll$current2.clientWidth;
    var h = (_$wrap$current = $wrap.current) === null || _$wrap$current === void 0 ? void 0 : _$wrap$current.clientHeight;
    var w = (_$wrap$current2 = $wrap.current) === null || _$wrap$current2 === void 0 ? void 0 : _$wrap$current2.clientWidth;
    op = {
      id: id,
      sy: 0,
      sx: 0,
      sh: sh,
      sw: sw,
      h: h,
      w: w,
      yh: 0,
      xw: 0,
      // blockX: 0,
      // blockY: 0,
      callback: function callback() {}
    };
    setOp(_objectSpread({}, op));
    update();
    moveStyle = {
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none',
      display: 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 9999,
      cursor: 'pointer'
    };
    setMoveStyle(_objectSpread({}, moveStyle));
    verticalBlockClass = ['cmao-scroll-vertical-block'];
    setVerticalBlockClass((0, _toConsumableArray2["default"])(verticalBlockClass));
    horizontalBlockClass = ['cmao-scroll-horizontal-block'];
    setHorizontalBlockClass((0, _toConsumableArray2["default"])(horizontalBlockClass));
    var resizeObserver = new ResizeObserver(function (entries) {
      var _iterator = _createForOfIteratorHelper(entries),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entry = _step.value;
          if (entry.target === $wrap.current) {
            var _$scroll$current3, _$scroll$current4;
            var shh = (_$scroll$current3 = $scroll.current) === null || _$scroll$current3 === void 0 ? void 0 : _$scroll$current3.clientHeight;
            var sww = (_$scroll$current4 = $scroll.current) === null || _$scroll$current4 === void 0 ? void 0 : _$scroll$current4.clientWidth;
            op.sh = tempOp.sh || shh;
            op.sw = tempOp.sw || sww;
            op.blockX = tempOp.blockX;
            op.blockY = tempOp.blockY;
            op.sy = tempOp.sy || 0;
            op.sx = tempOp.sx || 0;
            scrollWrapOnresize();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
    if ($wrap.current) {
      resizeObserver.observe($wrap.current);
    }
    return function () {
      if ($wrap.current) {
        resizeObserver.unobserve($wrap.current);
      }
      tempOp = {};
    };
  }, []);
  var newGuid = function newGuid() {
    var guid = '';
    for (var i = 1; i <= 32; i++) {
      var n = Math.floor(Math.random() * 16.0).toString(16);
      guid += n;
      if (i == 8 || i == 12 || i == 16 || i == 20) guid += '-';
    }
    return guid;
  };

  // 监听鼠标移动
  var verticalBlockMousedown = function verticalBlockMousedown(e) {
    var newCss = {};
    Object.assign(newCss, moveStyle);
    newCss.display = 'block';
    setMoveStyle(_objectSpread({}, newCss));
    op.isYMousedown = true;
    op.yMousedown = e.pageY;
    setOp(_objectSpread({}, op));
    verticalBlockClass.push('cmao-scroll-active');
    setVerticalBlockClass((0, _toConsumableArray2["default"])(verticalBlockClass));
  };
  var horizontalBlockMousedown = function horizontalBlockMousedown(e) {
    var newCss = {};
    Object.assign(newCss, moveStyle);
    newCss.display = 'block';
    setMoveStyle(_objectSpread({}, newCss));
    op.isXMousedown = true;
    op.xMousedown = e.pageX;
    setOp(_objectSpread({}, op));
    horizontalBlockClass.push('cmao-scroll-active');
    setHorizontalBlockClass((0, _toConsumableArray2["default"])(horizontalBlockClass));
  };
  var wrapMousemove = function wrapMousemove(e) {
    if (op.isYMousedown) {
      var y = e.pageY;
      var _yd = y - op.yMousedown;
      op.yMousedown = y;
      op.oldsy = op.sy;
      op.blockY = op.blockY + _yd;
      if (op.blockY + op.yh > op.h) {
        op.blockY = op.h - op.yh;
      }
      if (op.blockY < 0) {
        op.blockY = 0;
      }
      getY();
      moveY(true, true);
    } else if (op.isXMousedown) {
      var x = e.pageX;
      var _xd = x - op.xMousedown;
      op.xMousedown = x;
      op.oldsx = op.sx;
      op.blockX = op.blockX + _xd;
      if (op.blockX + op.xw > op.w) {
        op.blockX = op.w - op.xw;
      }
      if (op.blockX < 0) {
        op.blockX = 0;
      }
      getX();
      moveX(false);
    }
  };
  var wrapMouseup = function wrapMouseup() {
    op.isYMousedown = false;
    op.isXMousedown = false;
    setOp(_objectSpread({}, op));
    var newCss = {};
    Object.assign(newCss, moveStyle);
    newCss.display = 'none';
    setMoveStyle(_objectSpread({}, newCss));
  };
  var scrollWrapOnresize = function scrollWrapOnresize() {
    if (op) {
      var _$wrap$current3, _$wrap$current4;
      var h = (_$wrap$current3 = $wrap.current) === null || _$wrap$current3 === void 0 ? void 0 : _$wrap$current3.clientHeight;
      var w = (_$wrap$current4 = $wrap.current) === null || _$wrap$current4 === void 0 ? void 0 : _$wrap$current4.clientWidth;
      if (h != op.h) {
        op.h = h;
        updateY();
      }
      if (w != op.w) {
        op.w = w;
        updateX();
      }
    }
  };
  var scrollBoxOnresize = function scrollBoxOnresize() {
    if (op) {
      var _$scroll$current5, _$scroll$current6;
      var sh = (_$scroll$current5 = $scroll.current) === null || _$scroll$current5 === void 0 ? void 0 : _$scroll$current5.clientHeight;
      var sw = (_$scroll$current6 = $scroll.current) === null || _$scroll$current6 === void 0 ? void 0 : _$scroll$current6.clientWidth;
      if (sh != op.sh) {
        op.sh = sh;
        updateY();
      }
      if (sw != op.sw) {
        op.sw = sw;
        updateX();
      }
    }
  };

  // 监听鼠标滚动
  var wrapOnMousewheel = function wrapOnMousewheel(e) {
    if (op.sh > op.h) {
      var delta = e.deltaY < 0 ? 1 : -1;
      var d = delta * 30;
      op.oldsy = op.sy;
      op.sy = op.sy - d;
      moveY(true, true);
      if (op.h + op.sy < op.sh && op.sy > 0) {
        return false;
      }
    } else if (op.sw > op.w) {
      var delta = e.deltaX < 0 ? 1 : -1;
      var d = delta * 30;
      op.oldsx = op.sx;
      op.sx = op.sx - d;
      moveX(true);
      return false;
    }
  };
  var update = function update() {
    // 更新滚动条
    updateY();
    updateX();
  };
  var updateY = function updateY() {
    if (op.sh > op.h) {
      // 出现纵向滚动条
      // 更新显示区域位置
      if (op.sh - op.sy < op.h) {
        var _sy = 0;
        op.sy = op.sh - op.h;
        if (op.sy < 0) {
          op.sy = 0;
        } else {
          _sy = 0 - op.sy;
        }
        var _newCss = {};
        Object.assign(_newCss, scrollStyle);
        _newCss.top = _sy;
        setScrollStyle(_objectSpread({}, _newCss));
      }
      // 更新滚动条高度
      var scrollH = op.h * op.h / op.sh;
      scrollH = scrollH < 30 ? 30 : scrollH;
      op.yh = scrollH;

      // 更新滚动条位置
      var _y = op.sy * (op.h - scrollH) / (op.sh - op.h);
      if (_y + scrollH > op.h) {
        _y = op.h - scrollH;
      }
      if (_y < 0) {
        _y = 0;
      }
      op.blockY = _y;

      // 设置滚动块大小和位置
      var newCss = {};
      Object.assign(newCss, verticalBlockStyle);
      newCss.top = _y;
      newCss.height = scrollH;
      setVerticalBlockStyle(_objectSpread({}, newCss));
    } else {
      op.blockY = 0;
      op.sy = 0;
      var _newCss2 = {};
      Object.assign(_newCss2, scrollStyle);
      _newCss2.top = 0;
      setScrollStyle(_objectSpread({}, _newCss2));
      var newCss2 = {};
      Object.assign(newCss2, verticalBlockStyle);
      newCss2.top = 0;
      newCss2.height = 0;
      setVerticalBlockStyle(_objectSpread({}, newCss2));
    }
    if (op.callback) {
      op.callback(op.sx, op.sy);
    }
    setOp(_objectSpread({}, op));
  };
  var updateX = function updateX() {
    if (op.sw > op.w) {
      // 更新显示区域位置
      if (op.sw - op.sx < op.w) {
        var _sx = 0;
        op.sx = op.sw - op.w;
        if (op.sx < 0) {
          op.sx = 0;
        } else {
          _sx = 0 - op.sx;
        }
        var _newCss3 = {};
        Object.assign(_newCss3, scrollStyle);
        _newCss3.left = _sx;
        setScrollStyle(_objectSpread({}, _newCss3));
      }
      // 更新滚动条高度
      var scrollW = op.w * op.w / op.sw;
      scrollW = scrollW < 30 ? 30 : scrollW;
      op.xw = scrollW;

      // 更新滚动条位置
      var _x = op.sx * (op.w - scrollW) / (op.sw - op.w);
      if (_x + scrollW > op.w) {
        _x = op.w - scrollW;
      }
      if (_x < 0) {
        _x = 0;
      }
      op.blockX = _x;
      // 设置滚动块大小和位置
      var newCss = {};
      Object.assign(newCss, horizontalBlockStyle);
      newCss.left = _x;
      newCss.width = scrollW;
      setHorizontalBlockStyle(_objectSpread({}, newCss));
    } else {
      op.sx = 0;
      op.blockX = 0;
      var _newCss4 = {};
      Object.assign(_newCss4, scrollStyle);
      _newCss4.left = 0;
      setScrollStyle(_objectSpread({}, _newCss4));
      var newCss2 = {};
      Object.assign(_newCss4, horizontalBlockStyle);
      newCss2.left = 0;
      newCss2.width = 0;
      setHorizontalBlockStyle(_objectSpread({}, newCss2));
    }
    if (op.callback) {
      op.callback(op.sx, op.sy);
    }
    setOp(_objectSpread({}, op));
  };
  var moveY = function moveY(isMousewheel, isCallBack) {
    // 更新显示区域位置
    var _sy = 0;
    if (op.sy < 0) {
      op.sy = 0;
    } else if (op.sy + op.h > op.sh) {
      op.sy = op.sh - op.h;
      _sy = 0 - op.sy;
    } else {
      _sy = 0 - op.sy;
    }
    if (isMousewheel) {
      var _y = getBlockY();
      if (_y == 0 && op.sy != 0) {
        op.sy = 0;
        _sy = 0;
      }
      op.blockY = _y;
      // 设置滚动块位置
      var newCss = {};
      Object.assign(newCss, scrollStyle);
      newCss.top = _sy;
      setScrollStyle(_objectSpread({}, newCss));
      var newCss2 = {};
      Object.assign(newCss2, verticalBlockStyle);
      newCss2.top = _y;
      setVerticalBlockStyle(_objectSpread({}, newCss2));
    } else {
      var _newCss5 = {};
      Object.assign(_newCss5, scrollStyle);
      _newCss5.top = _sy;
      setScrollStyle(_objectSpread({}, _newCss5));
      var _newCss6 = {};
      Object.assign(_newCss6, verticalBlockStyle);
      _newCss6.top = op.blockY;
      setVerticalBlockStyle(_objectSpread({}, _newCss6));
    }
    if (isCallBack && op.callback) {
      op.callback(op.sx, op.sy);
    }
    tempOp = _objectSpread({}, op);
  };
  var moveX = function moveX(isMousewheel) {
    // 更新显示区域位置
    var _sx = 0;
    if (op.sx < 0) {
      op.sx = 0;
    } else if (op.sx + op.w > op.sw) {
      op.sx = op.sw - op.w;
      _sx = 0 - op.sx;
    } else {
      _sx = 0 - op.sx;
    }
    if (isMousewheel) {
      // 更新滑块的位置
      var _x = getBlockX();
      if (_x == 0 && op.sx != 0) {
        op.sx = 0;
        _sx = 0;
      }
      op.blockX = _x;
      // 设置滚动块位置
      var newCss = {};
      Object.assign(newCss, scrollStyle);
      newCss.left = _sx;
      setScrollStyle(_objectSpread({}, newCss));
      var newCss2 = {};
      Object.assign(newCss2, horizontalBlockStyle);
      newCss2.left = _x;
      setHorizontalBlockStyle(_objectSpread({}, newCss2));
    } else {
      var _newCss7 = {};
      Object.assign(_newCss7, scrollStyle);
      _newCss7.left = _sx;
      setScrollStyle(_objectSpread({}, _newCss7));
      var _newCss8 = {};
      Object.assign(_newCss8, horizontalBlockStyle);
      _newCss8.left = op.blockX;
      setHorizontalBlockStyle(_objectSpread({}, _newCss8));
    }
    if (op.callback) {
      op.callback(op.sx, op.sy);
    }
    tempOp = _objectSpread({}, op);
  };
  var getBlockY = function getBlockY() {
    var _y = op.sy * (op.h - op.yh) / (op.sh - op.h);
    if (_y + op.yh > op.h) {
      _y = op.h - op.yh;
    }
    if (_y < 0) {
      _y = 0;
    }
    return _y;
  };
  var getY = function getY() {
    op.sy = op.blockY * (op.sh - op.h) / (op.h - op.yh);
    if (op.sy + op.h > op.sh) {
      op.sy = op.sh - op.h;
    }
    if (op.sy < 0) {
      op.sy = 0;
    }
  };
  var getBlockX = function getBlockX() {
    var _x = op.sx * (op.w - op.xw) / (op.sw - op.w);
    if (_x + op.xw > op.w) {
      _x = op.w - op.xw;
    }
    if (_x < 0) {
      _x = 0;
    }
    return _x;
  };
  var getX = function getX() {
    op.sx = op.blockX * (op.sw - op.w) / (op.w - op.xw);
    if (op.sx + op.w > op.sw) {
      op.sx = op.sw - op.w;
    }
    if (op.sx < 0) {
      op.sx = 0;
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "cmao-scroll-wrap",
    ref: $wrap,
    onMouseMove: function onMouseMove(e) {
      wrapMousemove(e);
    },
    onMouseUp: function onMouseUp() {
      wrapMouseup();
    },
    onWheel: function onWheel(e) {
      wrapOnMousewheel(e);
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "cmao-scroll-box",
    id: id + '_box',
    style: scrollStyle,
    ref: $scroll
  }, props.children), /*#__PURE__*/_react["default"].createElement("div", {
    className: "cmao-scroll-vertical",
    style: verticalStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: verticalBlockClass.join(' '),
    id: id + '_vertical',
    style: verticalBlockStyle,
    onMouseDown: function onMouseDown(e) {
      verticalBlockMousedown(e);
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "cmao-scroll-horizontal",
    style: horizontalStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: horizontalBlockClass.join(' '),
    id: id + '_horizontal',
    style: horizontalBlockStyle,
    onMouseDown: function onMouseDown(e) {
      horizontalBlockMousedown(e);
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: moveStyle,
    ref: $move
  })));
};
var _default = exports["default"] = Temp;