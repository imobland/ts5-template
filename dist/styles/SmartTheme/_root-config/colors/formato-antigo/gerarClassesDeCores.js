"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getRGBListFromHex_1 = __importDefault(require("./functions/getRGBListFromHex"));
const gerarClassesDeUmaCor = function (color, labelColor, sufix, pre, pos) {
    const rgb = (0, getRGBListFromHex_1.default)(color);
    const str = `
    .${pre}${labelColor}${sufix}${pos} {        
        --c: rgba( ${rgb.red}, ${rgb.green}, ${rgb.blue}, var(--c-op)) !important;       
    }
  `;
    return str;
};
const gerarClassesDeCores = function (color, labelColor, pre, pos) {
    let str = "";
    for (const key in color) {
        const colorVariant = color[key];
        str = str + `
      ${gerarClassesDeUmaCor(colorVariant.color, labelColor, colorVariant.sufix, pre, pos)}
    `;
    }
    return str;
};
const style = function (listaDeCores) {
    let str = "";
    for (const labelColor in listaDeCores) {
        const cor = listaDeCores[labelColor];
        str =
            str +
                `
      ${gerarClassesDeCores(cor, labelColor, "", "")}
      ${gerarClassesDeCores(cor, labelColor, "hover\\:", ":hover")}
      ${gerarClassesDeCores(cor, labelColor, "active\\:", ":active")}
    `;
    }
    return str;
};
exports.default = style;
