"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const level_style_1 = __importDefault(require("./level.style"));
const style = function (props) {
    const str = `

    .box, 
    .pic {
      --bbr: calc( var(--ams) * .6 );
      --br-tl: var(--bbr);
      --br-tr: var(--bbr);
      --br-bl: var(--bbr);
      --br-br: var(--bbr);
    }
    .bel {
      --bbr: calc( var(--ams) * .3 );
      --br-tl: var(--bbr);
      --br-tr: var(--bbr);
      --br-bl: var(--bbr);
      --br-br: var(--bbr);
    }

    ${(0, level_style_1.default)(props)}

    .box,
    .bel,
    .pic,
    .box > [b],
    .bel > [b],
    .pic > [b],
    .box > [b]:before,
    .bel > [b]:before,
    .pic > [b]:before,
    .box > [b]:after,
    .bel > [b]:after,
    .pic > [b]:after,
    .box > [c],
    .bel > [c],
    .pic > [c]{
      border-radius: var(--br-tl) var(--br-tr) var(--br-br) var(--br-bl) !important;
    }

  `;
    return str;
};
exports.default = style;
