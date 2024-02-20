"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _dialog = _interopRequireDefault(require("./dialog"));
var _index = _interopRequireDefault(require("../button/index"));
var _close = _interopRequireDefault(require("./images/close.png"));
/**
 * 使用方法：
 * <Modal visible={this.state.modal.visible}
        title='hello'
        style={{width: '200px'}}
        footer={null}
        onOk={this.onOK}
        onCancel={this.onCancel}>
        I am Modal
    </Modal>

 * footer可定义为null，则没有底部按钮
 * onOK：确定按钮回调函数
 * onCancel：取消按钮回调函数
 */
var Modal = function Modal(props) {
  // useEffect(() => {
  // }, []);
  var onMaskClick = function onMaskClick() {
    if (props.maskClosable) {
      if (props.onCancel) {
        props.onCancel();
      }
    }
  };
  var cls = ['fp-modal-container', props.wrapClassName];
  return /*#__PURE__*/_react["default"].createElement(_dialog["default"], {
    visible: props.visible,
    onMaskClick: onMaskClick,
    style: props.style,
    wrapClassName: cls.join(' ')
  }, contentRender({
    title: props.title,
    content: props.children,
    footer: props.footer,
    bodyClass: props.bodyClass,
    cancelText: props.cancelText,
    okText: props.okText,
    onCancel: props.onCancel,
    onOk: props.onOk,
    footerText: props.footerText
  }));
};
Modal.show = function (config) {
  var cls = ['fp-modal-container', config.wrapClassName];
  var d = _dialog["default"].show({
    visible: config.visible,
    onMaskClick: function onMaskClick() {
      if (typeof config.maskClosable == 'undefined' || config.maskClosable) {
        d.destroy();
        if (config.onCancel) {
          config.onCancel();
        }
      }
    },
    style: config.style,
    wrapClassName: cls.join(' '),
    content: contentRender({
      title: config.title,
      content: config.content,
      bodyClass: config.bodyClass,
      footer: config.footer,
      cancelText: config.cancelText,
      okText: config.okText,
      onCancel: function onCancel() {
        d.destroy();
        if (config.onCancel) {
          config.onCancel();
        }
      },
      onOk: function onOk() {
        d.destroy();
        if (config.onOk) {
          config.onOk();
        }
      }
    })
  });
  return d;
};
Modal.confirm = function (config) {
  var d = Modal.show({
    content: /*#__PURE__*/_react["default"].createElement("div", {
      className: "fp-confirm"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "fp-confirm-icon"
    }), /*#__PURE__*/_react["default"].createElement("h3", {
      className: "fp-confirm-title"
    }, config.title), /*#__PURE__*/_react["default"].createElement("div", {
      className: "fp-confirm-text"
    }, config.content), /*#__PURE__*/_react["default"].createElement("div", {
      className: "fp-confirm-btn"
    }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
      onClick: function onClick() {
        // d.destroy();
        if (config.onOk) {
          config.onOk();
        }
      },
      size: "sm",
      style: "primary",
      noRadius: true
    }, config.okText || '确定'), config.hideCancelBtn ? null : /*#__PURE__*/_react["default"].createElement(_index["default"], {
      onClick: function () {
        d.destroy();
        if (config.onCancel) {
          config.onCancel();
        }
      }.bind(this),
      className: "fp-modal-cancelBtn",
      size: "sm",
      style: "default",
      noRadius: true
    }, config.cancelText || '取消'))),
    footer: null,
    style: config.style || {
      width: 400,
      height: 200
    },
    maskClosable: config.maskClosable
  });
  return d;
};
function contentRender(config) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, config.title ? /*#__PURE__*/_react["default"].createElement("div", {
    className: 'fp-modal-head'
  }, /*#__PURE__*/_react["default"].createElement("span", null, config.title), /*#__PURE__*/_react["default"].createElement("img", {
    src: _close["default"],
    onClick: config.onCancel
  })) : '', /*#__PURE__*/_react["default"].createElement("div", {
    className: ['fp-modal-body', config.bodyClass].join(' ')
  }, config.content), config.footer !== null ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "fp-modal-foot"
  }, config.footerText ? config.footerText : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "fp-button-panel"
  }, config.okText === null ? '' : /*#__PURE__*/_react["default"].createElement(_index["default"], {
    onClick: config.onOk,
    style: "primary",
    noRadius: true
  }, config.okText || '确定'), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    onClick: config.onCancel,
    className: "fp-modal-cancelBtn",
    style: "default",
    noRadius: true
  }, config.cancelText || '取消'))) : '');
}
var _default = exports["default"] = Modal;