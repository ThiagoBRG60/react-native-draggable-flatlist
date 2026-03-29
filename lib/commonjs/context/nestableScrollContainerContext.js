var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestableScrollContainerProvider = NestableScrollContainerProvider;
exports.useNestableScrollContainerContext = useNestableScrollContainerContext;
exports.useSafeNestableScrollContainerContext = useSafeNestableScrollContainerContext;
var _slicedToArray2 = _interopRequireDefault(
  require("@babel/runtime/helpers/slicedToArray")
);
var _react = _interopRequireWildcard(require("react"));
var _reactNativeReanimated = require("react-native-reanimated");
var _jsxFileName =
  "C:\\Users\\Usuario\\Documents\\Projetos\\react-native-draggable-flatlist\\src\\context\\nestableScrollContainerContext.tsx";
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
var NestableScrollContainerContext = _react.default.createContext(undefined);
function useSetupNestableScrollContextValue(_ref) {
  var forwardedRef = _ref.forwardedRef;
  var _useState = (0, _react.useState)(true),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    outerScrollEnabled = _useState2[0],
    setOuterScrollEnabled = _useState2[1];
  var scrollViewSize = (0, _reactNativeReanimated.useSharedValue)(0);
  var scrollableRefInner = (0, _react.useRef)(null);
  var scrollableRef = forwardedRef || scrollableRefInner;
  var outerScrollOffset = (0, _reactNativeReanimated.useSharedValue)(0);
  var containerSize = (0, _reactNativeReanimated.useSharedValue)(0);
  var contextVal = (0, _react.useMemo)(
    function () {
      return {
        outerScrollEnabled: outerScrollEnabled,
        setOuterScrollEnabled: setOuterScrollEnabled,
        outerScrollOffset: outerScrollOffset,
        scrollViewSize: scrollViewSize,
        scrollableRef: scrollableRef,
        containerSize: containerSize,
      };
    },
    [outerScrollEnabled]
  );
  return contextVal;
}
function NestableScrollContainerProvider(_ref2) {
  var children = _ref2.children,
    forwardedRef = _ref2.forwardedRef;
  var contextVal = useSetupNestableScrollContextValue({
    forwardedRef: forwardedRef,
  });
  return _react.default.createElement(
    NestableScrollContainerContext.Provider,
    {
      value: contextVal,
      __self: this,
      __source: { fileName: _jsxFileName, lineNumber: 48, columnNumber: 5 },
    },
    children
  );
}
function useNestableScrollContainerContext() {
  var value = (0, _react.useContext)(NestableScrollContainerContext);
  return value;
}
function useSafeNestableScrollContainerContext() {
  var value = useNestableScrollContainerContext();
  if (!value) {
    throw new Error(
      "useSafeNestableScrollContainerContext must be called within a NestableScrollContainerContext.Provider"
    );
  }
  return value;
}
//# sourceMappingURL=nestableScrollContainerContext.js.map
