"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ariaLabelsShape = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ariaLabelsShape = exports.ariaLabelsShape = _propTypes.default.shape({
  dateInput: _propTypes.default.objectOf(_propTypes.default.shape({
    startDate: _propTypes.default.string,
    endDate: _propTypes.default.string
  })),
  monthPicker: _propTypes.default.string,
  yearPicker: _propTypes.default.string,
  prevButton: _propTypes.default.string,
  nextButton: _propTypes.default.string
});