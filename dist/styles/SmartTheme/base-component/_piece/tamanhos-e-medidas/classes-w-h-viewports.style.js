"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gerarClasses = function (pre, pos, mediaQuery) {
    let str = "";
    if (mediaQuery) {
        str = str + ` @media (max-width: ${mediaQuery}) { `;
    }
    for (let i = 10; i <= 100; i = i + 10) {
        str = str + `
    .${pre}min-w-${i}vw${pos} { min-width: ${i}vw; }
    .${pre}max-w-${i}vw${pos} { max-width: ${i}vw; }
    .${pre}min-h-${i}vh${pos} { min-height: ${i}vh; }
    .${pre}max-h-${i}vh${pos} { max-height: ${i}vh; }
    `;
    }
    if (mediaQuery) {
        str = str + `}`;
    }
    return str;
};
exports.default = gerarClasses;
