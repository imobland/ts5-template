"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_style_1 = __importDefault(require("./bg/index.style"));
const index_style_2 = __importDefault(require("./shadow/index.style"));
const index_style_3 = __importDefault(require("./border/index.style"));
const index_style_4 = __importDefault(require("./border-radius/index.style"));
const index_style_5 = __importDefault(require("./margin/index.style"));
const index_style_6 = __importDefault(require("./overlay/index.style"));
const index_style_7 = __importDefault(require("./bevel/index.style"));
const style = function (props) {
    const str = `

    ${(0, index_style_1.default)(props)}

    ${(0, index_style_2.default)(props)}

    ${(0, index_style_3.default)(props)}

    ${(0, index_style_4.default)(props)}

    ${(0, index_style_7.default)(props)}

    ${(0, index_style_5.default)(props)}

    ${(0, index_style_6.default)(props)}


    .sect > [c],
    .box > [c],
    .bel > [c],
    .pic > [c] {
    }

    :root {
      --ctbreakpoint: 0.05;
    }

    .bg-none > [b]{
        display: none;
    }

    .board-in-piece {
      background: hsl( var(--bgh) calc(100% * var(--bgs)) calc(100% * var(--bgt)) / var(--bgop))!important;
      
      > [b] {
          display: none;
      }
  }
  `;
    return str;
};
exports.default = style;
