"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function changeCurrentBtn(btn) {
  return {
    type: 'changeCurrentBtn',
    value: btn
  };
}
function setNodes(nodes) {
  return {
    type: 'setNodes',
    value: nodes
  };
}
function setLines(lines) {
  return {
    type: 'setLines',
    value: lines
  };
}
var action = {
  changeCurrentBtn: changeCurrentBtn,
  setNodes: setNodes,
  setLines: setLines
};
var _default = exports["default"] = action;