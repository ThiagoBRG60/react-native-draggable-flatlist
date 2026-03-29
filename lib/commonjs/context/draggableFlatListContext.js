Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DraggableFlatListProvider;
exports.useDraggableFlatListContext = useDraggableFlatListContext;
var _react = _interopRequireWildcard(require("react"));
var _jsxFileName =
  "C:\\Users\\Usuario\\Documents\\Projetos\\react-native-draggable-flatlist\\src\\context\\draggableFlatListContext.tsx";
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
var DraggableFlatListContext = _react.default.createContext(undefined);
function DraggableFlatListProvider(_ref) {
  var activeKey = _ref.activeKey,
    keyExtractor = _ref.keyExtractor,
    horizontal = _ref.horizontal,
    layoutAnimationDisabled = _ref.layoutAnimationDisabled,
    children = _ref.children;
  var value = (0, _react.useMemo)(
    function () {
      return {
        activeKey: activeKey,
        keyExtractor: keyExtractor,
        horizontal: horizontal,
        layoutAnimationDisabled: layoutAnimationDisabled,
      };
    },
    [activeKey, keyExtractor, horizontal, layoutAnimationDisabled]
  );
  return _react.default.createElement(
    DraggableFlatListContext.Provider,
    {
      value: value,
      __self: this,
      __source: { fileName: _jsxFileName, lineNumber: 35, columnNumber: 5 },
    },
    children
  );
}
function useDraggableFlatListContext() {
  var value = (0, _react.useContext)(DraggableFlatListContext);
  if (!value) {
    throw new Error(
      "useDraggableFlatListContext must be called within DraggableFlatListProvider"
    );
  }
  return value;
}
//# sourceMappingURL=draggableFlatListContext.js.map
