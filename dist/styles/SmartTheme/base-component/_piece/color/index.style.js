"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colorMapping_style_1 = __importDefault(require("./colorMapping.style"));
const tons_style_1 = __importDefault(require("./tons.style"));
const sat_style_1 = __importDefault(require("./sat.style"));
const opacity_style_1 = __importDefault(require("./opacity.style"));
const style = function (props) {
    const str = `

    [p] {
      color: hsl( var(--ch) calc(100% * var(--cs)) calc(100% * var(--ct)) / var(--c-op)) !important;
      --ctformula: (((var(--cs) * var(--ct)) + ((1 - var(--cs)) * var(--ctg))));
    }
    [p]::placeholder {
      color: hsl( var(--pch) calc(100% * var(--pcs)) calc(100% * var(--pct)) / 40%) !important;
    }
    :root {
      --ch: 0;
      --ct: 0.5;
      --cs: 0;
      --cmdown: 0.5;
      --c-op: 1;
    }

    ${(0, colorMapping_style_1.default)(props)}
    ${(0, tons_style_1.default)(props)}
    ${(0, sat_style_1.default)(props)}
    ${(0, opacity_style_1.default)()}

  `;
    return str;
};
exports.default = style;
