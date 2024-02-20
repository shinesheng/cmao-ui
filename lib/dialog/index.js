"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dialog = _interopRequireDefault(require("./dialog"));
var _prompt = _interopRequireDefault(require("./prompt"));
var _modal = _interopRequireDefault(require("./modal"));
var Temp = _dialog["default"];
Temp.Prompt = _prompt["default"];
Temp.Modal = _modal["default"];
var _default = exports["default"] = Temp;