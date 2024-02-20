"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _frame = _interopRequireDefault(require("./frame"));
var _head = _interopRequireDefault(require("./head"));
var _menu = _interopRequireDefault(require("./menu"));
var Temp = _frame["default"];
Temp.Head = _head["default"];
Temp.Menu = _menu["default"];
var _default = exports["default"] = Temp;