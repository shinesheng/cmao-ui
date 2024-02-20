"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useForm;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**form组件表单实例 */

function useForm(form) {
  var itemsRef = React.useRef({});
  /**存放表单对象各key关联的校验规则 */
  var validFormObj = {};
  var validErrorMsgObj = {};
  var wrapForm = React.useMemo(function () {
    return form !== null && form !== void 0 ? form : {
      __INTERNAL__: {
        itemRef: function itemRef(name) {
          return function (node) {
            if (node) {
              itemsRef.current[name] = node;
            } else {
              delete itemsRef.current[name];
            }
          };
        },
        initVaildErrorMsg: function initVaildErrorMsg(name, obj) {
          if (obj) {
            validErrorMsgObj[name] = obj;
          } else {
            delete validErrorMsgObj[name];
          }
        }
      },
      initValid: function initValid(name, obj) {
        if (obj) {
          validFormObj[name] = obj;
        } else {
          delete validFormObj[name];
        }
      },
      getFieldInstance: function getFieldInstance(name) {
        return itemsRef.current[name];
      },
      getFieldValid: function getFieldValid(name) {
        return validFormObj[name];
      },
      getValidErrorMsg: function getValidErrorMsg(name) {
        return validErrorMsgObj[name];
      },
      setData: function setData(data) {}
    };
  }, [form]);
  return [wrapForm];
}