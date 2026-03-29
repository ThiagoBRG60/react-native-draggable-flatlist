var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestableScrollContainer = void 0;
var _extends2 = _interopRequireDefault(
  require("@babel/runtime/helpers/extends")
);
var _react = _interopRequireDefault(require("react"));
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _reactNativeReanimated = _interopRequireWildcard(
  require("react-native-reanimated")
);
var _nestableScrollContainerContext = require("../context/nestableScrollContainerContext");
var _useStableCallback = require("../hooks/useStableCallback");
var _jsxFileName =
    "C:\\Users\\Usuario\\Documents\\Projetos\\react-native-draggable-flatlist\\src\\components\\NestableScrollContainer.tsx",
  _this = this;
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
var AnimatedScrollView = _reactNativeReanimated.default.createAnimatedComponent(
  _reactNativeGestureHandler.ScrollView
);
function NestableScrollContainerInner(props) {
  var _useSafeNestableScrol = (0,
    _nestableScrollContainerContext.useSafeNestableScrollContainerContext)(),
    outerScrollOffset = _useSafeNestableScrol.outerScrollOffset,
    containerSize = _useSafeNestableScrol.containerSize,
    scrollViewSize = _useSafeNestableScrol.scrollViewSize,
    scrollableRef = _useSafeNestableScrol.scrollableRef,
    outerScrollEnabled = _useSafeNestableScrol.outerScrollEnabled;
  var onScroll = (0, _reactNativeReanimated.useAnimatedScrollHandler)({
    onScroll: (function () {
      var _f = function _f(_ref) {
        var contentOffset = _ref.contentOffset;
        outerScrollOffset.value = contentOffset.y;
      };
      _f._closure = { outerScrollOffset: outerScrollOffset };
      _f.asString =
        "function _f({contentOffset:contentOffset}){const{outerScrollOffset}=jsThis._closure;{outerScrollOffset.value=contentOffset.y;}}";
      _f.__workletHash = 1284487457963;
      _f.__location =
        "C:\\Users\\Usuario\\Documents\\Projetos\\react-native-draggable-flatlist\\src\\components\\NestableScrollContainer.tsx (23:14)";
      return _f;
    })(),
  });
  var onLayout = (0, _useStableCallback.useStableCallback)(function (event) {
    var layout = event.nativeEvent.layout;
    containerSize.value = layout.height;
  });
  var onContentSizeChange = (0, _useStableCallback.useStableCallback)(function (
    w,
    h
  ) {
    scrollViewSize.value = h;
    props.onContentSizeChange == null
      ? void 0
      : props.onContentSizeChange(w, h);
  });
  return _react.default.createElement(
    AnimatedScrollView,
    (0, _extends2.default)({}, props, {
      onLayout: onLayout,
      onContentSizeChange: onContentSizeChange,
      scrollEnabled: outerScrollEnabled,
      ref: scrollableRef,
      scrollEventThrottle: 1,
      onScroll: onScroll,
      __self: this,
      __source: { fileName: _jsxFileName, lineNumber: 41, columnNumber: 5 },
    })
  );
}
var NestableScrollContainer = _react.default.forwardRef(function (
  props,
  forwardedRef
) {
  return _react.default.createElement(
    _nestableScrollContainerContext.NestableScrollContainerProvider,
    {
      forwardedRef: forwardedRef || undefined,
      __self: _this,
      __source: { fileName: _jsxFileName, lineNumber: 56, columnNumber: 7 },
    },
    _react.default.createElement(
      NestableScrollContainerInner,
      (0, _extends2.default)({}, props, {
        __self: _this,
        __source: { fileName: _jsxFileName, lineNumber: 61, columnNumber: 9 },
      })
    )
  );
});
exports.NestableScrollContainer = NestableScrollContainer;
//# sourceMappingURL=NestableScrollContainer.js.map
