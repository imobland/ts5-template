"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const themes_style_1 = __importDefault(require("./themes.style"));
const areas_style_1 = __importDefault(require("./areas.style"));
const style = function (props) {
    return `
    ${(0, areas_style_1.default)(props)}
    ${(0, themes_style_1.default)(props)}
  `;
};
exports.default = style;
