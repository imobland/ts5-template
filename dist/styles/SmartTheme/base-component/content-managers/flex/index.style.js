"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const directions_style_1 = __importDefault(require("./direction/directions.style"));
const classes_style_1 = __importDefault(require("./alinhamentos/classes.style"));
const classes_style_2 = __importDefault(require("./gaps/classes.style"));
const item_style_1 = __importDefault(require("./item.style"));
const classes_presets_style_1 = __importDefault(require("./classes-presets.style"));
const style = function (props) {
    return `
  ${(0, directions_style_1.default)(props)}
  ${(0, classes_style_1.default)(props)}
  ${(0, classes_style_2.default)(props)}
  ${(0, item_style_1.default)(props)}
  ${(0, classes_presets_style_1.default)(props)}
  `;
};
exports.default = style;
