"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearPrompt = clearPrompt;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _factory = _interopRequireDefault(require("./factory"));
/**
 * 使用方法：
 * Prompt.success('success');
 * Prompt.error('error');
 * Prompt.warn('warning');
 */

function BasePrompt(duration) {
  this.controller = (0, _factory["default"])("__cmao_fireplug_prompt__", "cmao-fireplug-prompt");
  this.list = [];
  this.timer = null;
  this.duration = duration;
}
BasePrompt.prototype.render = function (config) {
  this.controller.renderDialog({
    visible: 1,
    wrapClassName: 'fp-prompt',
    mask: config.mask,
    content: /*#__PURE__*/_react["default"].createElement("ul", {
      className: "fp-prompt-items"
    }, this.list.map(function (d, i) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: d.id
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "fp-prompt-content"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: 'fp-' + (d.icon || 'info') + '-icon'
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: "fp-prompt-text"
      }, d.content)));
    }))
  });
};
BasePrompt.prototype.add = function (item) {
  var _this = this;
  /* item:{
      id:'',
      content:'',
      duration:duration
  } */
  if (!item) {
    return;
  }
  var id = item.id;
  this.list.push(item);
  this.render({
    mask: item.mask
  });
  if (item.duration != -1) {
    //延时移除弹窗
    setTimeout(function () {
      removeItem(_this.list, id);
      // this.render({
      //     mask: this.list.length == 0 ? false : true
      // });
      _this.render({
        mask: item.mask
      });
    }, item.duration || this.duration);
  }
  return {
    destroy: function destroy() {
      removeItem(_this.list, id);
      _this.render({
        mask: _this.list.length == 0 ? false : true
      });
    }
  };
};
function removeItem(arr, id) {
  var e = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].id == id) {
      e = i;
      break;
    }
  }
  arr.splice(e, 1);
  return arr;
}
BasePrompt.prototype.clearAll = function () {
  this.list = [];
  this.render({
    mask: false
  });
};
var base = new BasePrompt(2000);
var _default = exports["default"] = {
  error: function error(content) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
    return base.add({
      id: new Date().getTime() / 100000 + '' + 100 * Math.random(),
      icon: 'error',
      content: content,
      duration: duration || 2000
    });
  },
  warn: function warn(content) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
    return base.add({
      id: new Date().getTime() / 100000 + '' + 100 * Math.random(),
      icon: 'warn',
      content: content,
      duration: duration || 1500
    });
  },
  success: function success(content) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
    return base.add({
      id: new Date().getTime() / 100000 + '' + 100 * Math.random(),
      icon: 'success',
      content: content,
      duration: duration || 1500
    });
  },
  loading: function loading() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return base.add({
      id: new Date().getTime() / 100000 + '' + 100 * Math.random(),
      icon: 'loading',
      content: content || '正在加载，请稍后...',
      duration: -1,
      mask: true
    });
  }
};
/**清除所有提示 */
function clearPrompt() {
  base.clearAll();
}