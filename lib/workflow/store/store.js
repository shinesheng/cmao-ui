"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toolkit = require("@reduxjs/toolkit");
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    currentBtn: '',
    nodes: [],
    lines: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState = {};
  Object.assign(newState, state);
  switch (action.type) {
    case 'changeCurrentBtn':
      newState.currentBtn = action.value;
      break;
    case 'setNodes':
      newState.nodes = action.value;
      break;
    case 'setLines':
      newState.lines = action.value;
      break;
    // default:
    //     return newState
  }
  return newState;
}
var store = (0, _toolkit.configureStore)({
  reducer: reducer
});
var _default = exports["default"] = store;