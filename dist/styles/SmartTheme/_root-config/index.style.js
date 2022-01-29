"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cache = exports.style = void 0;
const index_style_1 = __importDefault(require("./colors/index.style"));
const index_style_2 = __importDefault(require("./sizes/index.style"));
const index_style_3 = __importDefault(require("./device/index.style"));
const style = function (props) {
    return `
  ${(0, index_style_2.default)(props)}
  ${(0, index_style_1.default)(props)}
  ${(0, index_style_3.default)(props)}
  `;
};
exports.style = style;
const cache_css_1 = __importDefault(require("./cache.css"));
const cache = function (props) { return `  ${(0, cache_css_1.default)(props)}  `; };
exports.cache = cache;
