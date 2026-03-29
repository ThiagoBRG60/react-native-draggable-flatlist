var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PropsProvider;
exports.useProps = useProps;
var _objectWithoutProperties2 = _interopRequireDefault(
  require("@babel/runtime/helpers/objectWithoutProperties")
);
var _react = _interopRequireWildcard(require("react"));
var _jsxFileName =
  "C:\\Users\\Usuario\\Documents\\Projetos\\react-native-draggable-flatlist\\src\\context\\propsContext.tsx";
var _excluded = ["children"];
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
var PropsContext = _react.default.createContext(undefined);
function PropsProvider(_ref) {
  var children = _ref.children,
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return _react.default.createElement(
    PropsContext.Provider,
    {
      value: props,
      __self: this,
      __source: { fileName: _jsxFileName, lineNumber: 12, columnNumber: 5 },
    },
    children
  );
}
function useProps() {
  var value = (0, _react.useContext)(PropsContext);
  if (!value) {
    throw new Error("useProps must be called from within PropsProvider!");
  }
  return value;
}
//# sourceMappingURL=propsContext.js.map
