"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gerarVariacoesDeCores_1 = __importDefault(require("./functions/gerarVariacoesDeCores"));
const css = function (props) {
    const listaDeCores = (0, gerarVariacoesDeCores_1.default)(props.ThemeConfig.colors);
    return `
    :root {
      
    }
  `;
};
exports.default = css;
