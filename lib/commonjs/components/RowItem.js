var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(
  require("@babel/runtime/helpers/objectWithoutProperties")
);
var _react = _interopRequireWildcard(require("react"));
var _draggableFlatListContext = require("../context/draggableFlatListContext");
var _refContext = require("../context/refContext");
var _useStableCallback = require("../hooks/useStableCallback");
var _utils = require("../utils");
var _excluded = ["renderItem", "extraData"];
var _jsxFileName =
  "C:\\Users\\Usuario\\Documents\\Projetos\\react-native-draggable-flatlist\\src\\components\\RowItem.tsx";
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
function RowItem(props) {
  var propsRef = (0, _react.useRef)(props);
  propsRef.current = props;
  var _useDraggableFlatList = (0,
    _draggableFlatListContext.useDraggableFlatListContext)(),
    activeKey = _useDraggableFlatList.activeKey;
  var activeKeyRef = (0, _react.useRef)(activeKey);
  activeKeyRef.current = activeKey;
  var _useRefs = (0, _refContext.useRefs)(),
    keyToIndexRef = _useRefs.keyToIndexRef;
  var drag = (0, _useStableCallback.useStableCallback)(function () {
    var _propsRef$current = propsRef.current,
      drag = _propsRef$current.drag,
      itemKey = _propsRef$current.itemKey,
      debug = _propsRef$current.debug;
    if (activeKeyRef.current) {
      if (debug)
        console.log(
          "## attempt to drag item while another item is already active, noop"
        );
    }
    drag(itemKey);
  });
  var renderItem = props.renderItem,
    item = props.item,
    itemKey = props.itemKey,
    extraData = props.extraData;
  var getIndex = (0, _useStableCallback.useStableCallback)(function () {
    return keyToIndexRef.current.get(itemKey);
  });
  return _react.default.createElement(MemoizedInner, {
    isActive: activeKey === itemKey,
    drag: drag,
    renderItem: renderItem,
    item: item,
    getIndex: getIndex,
    extraData: extraData,
    __self: this,
    __source: { fileName: _jsxFileName, lineNumber: 45, columnNumber: 5 },
  });
}
var _default = (0, _utils.typedMemo)(RowItem);
exports.default = _default;
function Inner(_ref) {
  var renderItem = _ref.renderItem,
    extraData = _ref.extraData,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return renderItem(Object.assign({}, rest));
}
var MemoizedInner = (0, _utils.typedMemo)(Inner);
//# sourceMappingURL=RowItem.js.map
