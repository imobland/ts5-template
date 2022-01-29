"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bels_style_1 = __importDefault(require("./bels.style"));
const style = function (props) {
    return `

    .offset-pads {
      --opad-l: 0;
      --opad-t: 0;
      --opad-r: 0;
      --opad-b: 0;
      padding-top: var(--opad-t);
      padding-bottom: var(--opad-b);
      padding-right: var(--opad-r);
      padding-left: var(--opad-l);
      > [b] {
        margin-top: var(--opad-t);
        margin-bottom: var(--opad-b);
        margin-right: var(--opad-r);
        margin-left: var(--opad-l);
      }
      > [c] { 
        padding-top: var(--pad-t);
        padding-bottom: var(--pad-b);
        padding-right: var(--pad-r);
        padding-left: var(--pad-l);
      }
    }

    ${(0, bels_style_1.default)("", "", false)}  
    ${(0, bels_style_1.default)("lg\\:", "", "1199px")}
    ${(0, bels_style_1.default)("md\\:", "", "991px")}
    ${(0, bels_style_1.default)("sm\\:", "", "767px")}
    ${(0, bels_style_1.default)("xs\\:", "", "575px")}

  `;
};
exports.default = style;
