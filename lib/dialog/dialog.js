"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _factory = _interopRequireDefault(require("./factory"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var idSub = "_dialog__";

/**
 * 使用方法：
 * <Dialog visible={this.state.dialog.visible}>
        I am Dialog
    </Dialog>
 */
var DialogWrap = function DialogWrap(props) {
  var _useState = (0, _react.useState)(idSub + new Date().getTime() / 10000 + Math.random() * 1000),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 1),
    id = _useState2[0];
  var _useState3 = (0, _react.useState)((0, _factory["default"])(id)),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 1),
    dialogController = _useState4[0];

  //
  var renderd = (0, _react.useEffect)(function () {
    var cls = ['fp-dialog-content', props.wrapClassName]; //
    dialogController.renderDialog({
      content: /*#__PURE__*/_react["default"].createElement("div", {
        className: cls.join(' '),
        style: props.style,
        onClick: function onClick(e) {
          e.stopPropagation();
        }
      }, props.children),
      visible: props.visible,
      wrapClassName: 'fp-modal',
      mask: true,
      onMaskClick: props.onMaskClick
    });
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, renderd, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'none'
    }
  }));
};
var id = idSub + new Date().getTime() / 10000 + Math.random() * 1000;
var dialogController = (0, _factory["default"])(id);
DialogWrap.show = function (config) {
  if (typeof config == 'string') {
    config = {
      content: config
    };
  }
  var cls = ['fp-dialog-content', config.wrapClassName];
  dialogController.renderDialog({
    content: /*#__PURE__*/_react["default"].createElement("div", {
      className: cls.join(' '),
      style: config.style,
      onClick: function onClick(e) {
        e.stopPropagation();
      }
    }, config.content),
    visible: 1,
    wrapClassName: 'fp-modal',
    mask: true,
    onMaskClick: config.onMaskClick
  });
  return {
    destroy: function destroy() {
      dialogController.destroy();
    }
  };
};
var _default = exports["default"] = DialogWrap;