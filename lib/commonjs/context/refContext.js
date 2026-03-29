Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RefProvider;
exports.useRefs = useRefs;
var _react = _interopRequireWildcard(require("react"));
var _reactNativeReanimated = require("react-native-reanimated");
var _constants = require("../constants");
var _propsContext = require("./propsContext");
var _jsxFileName =
  "C:\\Users\\Usuario\\Documents\\Projetos\\react-native-draggable-flatlist\\src\\context\\refContext.tsx";
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
var RefContext = _react.default.createContext(undefined);
function RefProvider(_ref) {
  var children = _ref.children,
    flatListRef = _ref.flatListRef;
  var value = useSetupRefs({ flatListRef: flatListRef });
  return _react.default.createElement(
    RefContext.Provider,
    {
      value: value,
      __self: this,
      __source: { fileName: _jsxFileName, lineNumber: 30, columnNumber: 10 },
    },
    children
  );
}
function useRefs() {
  var value = (0, _react.useContext)(RefContext);
  if (!value) {
    throw new Error(
      "useRefs must be called from within a RefContext.Provider!"
    );
  }
  return value;
}
function useSetupRefs(_ref2) {
  var flatListRefProp = _ref2.flatListRef;
  var props = (0, _propsContext.useProps)();
  var _props$animationConfi = props.animationConfig,
    animationConfig =
      _props$animationConfi === void 0
        ? _constants.DEFAULT_PROPS.animationConfig
        : _props$animationConfi;
  var propsRef = (0, _react.useRef)(props);
  propsRef.current = props;
  var animConfig = (0, _react.useMemo)(
    function () {
      return Object.assign(
        {},
        _constants.DEFAULT_PROPS.animationConfig,
        animationConfig
      );
    },
    [animationConfig]
  );
  var animationConfigRef = (0, _reactNativeReanimated.useSharedValue)(
    animConfig
  );
  (0, _react.useEffect)(
    function () {
      animationConfigRef.value = animConfig;
    },
    [animConfig]
  );
  var cellDataRef = (0, _react.useRef)(new Map());
  var keyToIndexRef = (0, _react.useRef)(new Map());
  var containerRef = (0, _react.useRef)(null);
  var flatlistRefInternal = (0, _react.useRef)(null);
  var flatlistRef = flatListRefProp || flatlistRefInternal;
  var scrollViewRef = (0, _react.useRef)(null);
  var refs = (0, _react.useMemo)(function () {
    return {
      animationConfigRef: animationConfigRef,
      cellDataRef: cellDataRef,
      containerRef: containerRef,
      flatlistRef: flatlistRef,
      keyToIndexRef: keyToIndexRef,
      propsRef: propsRef,
      scrollViewRef: scrollViewRef,
    };
  }, []);
  return refs;
}
//# sourceMappingURL=refContext.js.map
