"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colorMapping_style_1 = __importDefault(require("./colorMapping.style"));
const tons_style_1 = __importDefault(require("./tons.style"));
const sat_style_1 = __importDefault(require("./sat.style"));
const opacity_style_1 = __importDefault(require("./opacity.style"));
const sideExpand_style_1 = __importDefault(require("./sideExpand.style"));
const gapBorder_style_1 = __importDefault(require("./gapBorder.style"));
const chBorderJoin_style_1 = __importDefault(require("./chBorderJoin.style"));
const helpers = function (pre, pos) {
    const str = `
    
    .${pre}bd-w-1rem${pos} { --bdw: 1rem;}
    .${pre}bd-w-2rem${pos} { --bdw: 2rem;}
    .${pre}bd-w-3rem${pos} { --bdw: 3rem;}
    .${pre}bd-w-4rem${pos} { --bdw: 4rem;}
    .${pre}bd-w-5rem${pos} { --bdw: 5rem;}

    .${pre}bd-solid${pos}  { --bdm: solid;  }
    .${pre}bd-dashed${pos} { --bdm: dashed; }
    .${pre}bd-dotted${pos} { --bdm: dotted; }
  `;
    return str;
};
const style = function (props) {
    const str = `

    :root {
      --bdw: 0;
      --bdm: solid;
      --bdh: 0deg;
      --bds: 0;
      --bdt: .5;
      --bdop: 1;
      --bdw: 2rem;
    }

    .border {
      --bd-formula: var(--bdw) var(--bdm) hsl( var(--bdh) calc(100% * var(--bds)) calc(100% * var(--bdt)) / var(--bdop));
    }

    ${(0, colorMapping_style_1.default)(props)}
    ${(0, tons_style_1.default)(props)}
    ${(0, sat_style_1.default)(props)}
    ${(0, opacity_style_1.default)()}
 
    ${(0, sideExpand_style_1.default)()}
    ${(0, gapBorder_style_1.default)()}
    ${(0, chBorderJoin_style_1.default)()}

    ${helpers("", "")}
    ${helpers("h\\:", ":hover")}
    ${helpers("a\\:", ":active")}

  `;
    return str;
};
exports.default = style;
