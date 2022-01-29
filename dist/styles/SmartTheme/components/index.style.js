"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cache = exports.style = void 0;
const cache_css_1 = __importDefault(require("./cache.css"));
const fonts_style_1 = __importDefault(require("./texts/fonts.style"));
const index_style_1 = __importDefault(require("./icons/index.style"));
const inputs_1 = __importDefault(require("./inputs"));
const index_style_2 = __importDefault(require("./pictures/index.style"));
const code_style_1 = __importDefault(require("./code.style"));
const ElementsPresets_style_1 = __importDefault(require("./buttons/ElementsPresets.style"));
const style = function (props) {
    return `
    ${(0, fonts_style_1.default)(props)}
    ${(0, index_style_1.default)(props)} 
    ${(0, inputs_1.default)(props)}
    ${(0, index_style_2.default)(props)}   
    ${(0, code_style_1.default)(props)} 
    ${(0, ElementsPresets_style_1.default)(props)}
  `;
};
exports.style = style;
const cache = function (props) { return `  ${(0, cache_css_1.default)(props)}  `; };
exports.cache = cache;
