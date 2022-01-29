"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colorMapping_style_1 = __importDefault(require("./colorMapping.style"));
const bgTons_style_1 = __importDefault(require("./bgTons.style"));
const bgSat_style_1 = __importDefault(require("./bgSat.style"));
const gerarClassesDeAlpha_1 = __importDefault(require("./gerarClassesDeAlpha"));
const style = function (props) {
    const str = `

    ${(0, colorMapping_style_1.default)(props)}
    ${(0, bgTons_style_1.default)(props)}
    ${(0, bgSat_style_1.default)(props)}
    ${(0, gerarClassesDeAlpha_1.default)()}

    [p="input"].bel,
    [p="select"].bel {
      background: hsl( var(--bgh) calc(100% * var(--bgs)) calc(100% * var(--bgt)) / var(--bgop)) !important;
    }   

    .sect > [b],
    .box > [b],
    .bel > [b],
    .pic > [b],
    .board > [b] {
      background: hsl( var(--bgh) calc(100% * var(--bgs)) calc(100% * var(--bgt)) / var(--bgop)) !important;
    }

    :root {
      --bgh: 0;
      --bgt: 0.5;
      --bgmdown: 0.5;
      --bgctg: 0.5;
      --bgs: 1;
      --bg-op: 1;
    }
    
    .bg-padding-box > [b],
    [p="input"].bg-padding-box { 
      background-clip: padding-box !important; 
    }
  `;
    return str;
};
exports.default = style;
