Object.defineProperty(exports, "__esModule", { value: true });
exports.CellProvider = CellProvider;
exports.default = void 0;
exports.useIsActive = useIsActive;
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../utils");
var _jsxFileName =
  "C:\\Users\\Usuario\\Documents\\Projetos\\react-native-draggable-flatlist\\src\\context\\cellContext.tsx";
function _interopRequireWildcard(e, t) {
  if ("function" == typeof WeakMap)
    var r = new WeakMap(),
      n = new WeakMap();
  return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {
    if (!t && e && e.__esModule) return e;
    var o,
      i,
      f = { __proto__: null, default: e };
    if (null === e || ("object" != typeof e && "function" != typeof e))
      return f;
    if ((o = t ? n : r)) {
      if (o.has(e)) return o.get(e);
      o.set(e, f);
    }
    for (var _t in e) {
      "default" !== _t &&
        {}.hasOwnProperty.call(e, _t) &&
        ((i =
          (o = Object.defineProperty) &&
          Object.getOwnPropertyDescriptor(e, _t)) &&
        (i.get || i.set)
          ? o(f, _t, i)
          : (f[_t] = e[_t]));
    }
    return f;
  })(e, t);
}
var CellContext = _react.default.createContext(undefined);
function CellProvider(_ref) {
  var isActive = _ref.isActive,
    children = _ref.children;
  var value = (0, _react.useMemo)(
    function () {
      return { isActive: isActive };
    },
    [isActive]
  );
  return _react.default.createElement(
    CellContext.Provider,
    {
      value: value,
      __self: this,
      __source: { fileName: _jsxFileName, lineNumber: 24, columnNumber: 10 },
    },
    children
  );
}
var _default = (0, _utils.typedMemo)(CellProvider);
exports.default = _default;
function useIsActive() {
  var value = (0, _react.useContext)(CellContext);
  if (!value) {
    throw new Error("useIsActive must be called from within CellProvider!");
  }
  return value.isActive;
}
//# sourceMappingURL=cellContext.js.map
