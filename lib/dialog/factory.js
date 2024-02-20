"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _client = require("react-dom/client");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var dialogId = '_dialog__';
var dialogControllerFactory = function dialogControllerFactory(id) {
  var mountPointClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var root = null;
  return {
    renderDialog: function renderDialog(config) {
      var _root;
      /* config:{
          containerId:'',
          content:'',
          visible:0/1,
          style:{},
          wrapClassName:'',
          mask:true/false,
          onMaskClick:function
      } */
      var ele = document.getElementById(id || dialogId);
      if (ele == null) {
        var body = document.getElementsByTagName('body')[0];
        var dialogEle = document.createElement('div');
        dialogEle.id = id || dialogId;
        var className = ['cmao-fireplug-dialog-mount-point', mountPointClass].filter(function (e) {
          return e;
        }).join(" ");
        dialogEle.className = className;
        body.appendChild(dialogEle);
        ele = dialogEle;
      }
      // const root = ReactDOM.createRoot(ele);
      if (!((_root = root) !== null && _root !== void 0 && _root._internalRoot)) root = (0, _client.createRoot)(ele);
      root.render( /*#__PURE__*/_react["default"].createElement(Dialog, {
        visible: config.visible,
        style: config.style,
        wrapClassName: config.wrapClassName,
        mask: config.mask,
        onMaskClick: config.onMaskClick
      }, config.content));
    },
    destroy: function destroy() {
      var _root2;
      var ele2 = document.getElementById(id || dialogId);
      if (!((_root2 = root) !== null && _root2 !== void 0 && _root2._internalRoot)) root = (0, _client.createRoot)(ele2);
      root.render( /*#__PURE__*/_react["default"].createElement(Dialog, {
        visible: false
      }));
    }
  };
};
var Dialog = function Dialog(props) {
  (0, _react.useEffect)(function () {}, []);
  var mask = function mask() {
    if (!props.mask) {
      return;
    }
    if (props.onMaskClick) {
      props.onMaskClick();
    }
  };
  var cls = ['fp-dialog', props.wrapClassName];
  var style = props.style;
  var view;
  if (props.visible) {
    view = /*#__PURE__*/_react["default"].createElement("div", null, props.mask ? /*#__PURE__*/_react["default"].createElement("div", {
      className: 'fp-mask'
    }) : '', /*#__PURE__*/_react["default"].createElement("div", {
      className: cls.join(' '),
      onClick: mask,
      style: style
    }, props.children));
  } else {
    view = /*#__PURE__*/_react["default"].createElement("div", {
      className: ""
    });
  }
  return view;
};
var _default = exports["default"] = dialogControllerFactory;