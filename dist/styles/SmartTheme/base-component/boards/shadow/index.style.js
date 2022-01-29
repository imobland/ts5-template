"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colorMapping_style_1 = __importDefault(require("./colorMapping.style"));
const tons_style_1 = __importDefault(require("./tons.style"));
const sat_style_1 = __importDefault(require("./sat.style"));
const gerarClassesDeAlpha_1 = __importDefault(require("./gerarClassesDeAlpha"));
const level_style_1 = __importDefault(require("./level.style"));
const styles_style_1 = __importDefault(require("./styles.style"));
const style = function (props) {
    const str = `

    ${(0, colorMapping_style_1.default)(props)}
    ${(0, tons_style_1.default)(props)}
    ${(0, sat_style_1.default)(props)}
    ${(0, gerarClassesDeAlpha_1.default)(props)}
    ${(0, level_style_1.default)(props)}
    ${(0, styles_style_1.default)(props)}

      

    .box,
    .pic,
    .bel{
      --shlvl: 1;
      /* Style pre setado: style 1 */
      --sh-style: calc( 4rem * var(--shlvl) ) calc( 6rem * var(--shlvl) ) calc( 16rem * var(--shlvl) );

      --box-shadow: var(--sh-style) hsl( var(--shh) calc(100% * var(--shs)) calc(100% * var(--sht) ) / var(--shop) );
    }
    .box.shadow > [b],
    .pic.shadow > [b],
    .bel.shadow > [b],
    [p="input"].bel.shadow {
      box-shadow: var(--box-shadow);
    }

    .sh-inset{
      &.box,
      &.pic,
      &.bel{
        --box-shadow-inset: inset var(--sh-style) hsl( var(--shh) calc(100% * var(--shs)) calc(100% * var(--sht) ) / var(--shop) );
      }
      &.box.shadow > [b],
      &.pic.shadow > [b],
      &.bel.shadow > [b],
      [p="input"].bel.shadow {
        box-shadow: var(--box-shadow-inset);
      }
    }


    :root {
      --shh: 0;
      --shs: 0;
      --sht: 0;
      --shctg: 0;
      --shmdown: 0;
      --shop: 0;
      --sh-inset: "";
    }

  `;
    return str;
};
exports.default = style;
