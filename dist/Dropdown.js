"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Dropdown = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-select"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: props.name
  }, props.label), /*#__PURE__*/_react.default.createElement("select", {
    type: props.type,
    id: props.name,
    name: props.name,
    required: props.isRequired,
    value: props.state,
    onChange: props.handleChange
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, props.title), props.options.map((option, index) => /*#__PURE__*/_react.default.createElement("option", {
    key: "".concat(option, "-").concat(index),
    value: option
  }, option))));
};
var _default = Dropdown;
exports.default = _default;