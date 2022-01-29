"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gerarClasses = function (pre, pos, mediaQuery) {
    let str = ``;
    if (mediaQuery) {
        str = str + ` @media (max-width: ${mediaQuery}) { `;
    }
    str = str + `
    .${pre}hide {  display:none;  }
    .${pre}show {  display:flex;  }
  `;
    if (mediaQuery) {
        str = str + `}`;
    }
    return str;
};
const style = function (props) {
    return `
    ${gerarClasses("", "", false)}
    ${gerarClasses("lg\\:", "", "1199px")}
    ${gerarClasses("md\\:", "", "991px")}
    ${gerarClasses("sm\\:", "", "767px")}
    ${gerarClasses("xs\\:", "", "575px")}
  `;
};
exports.default = style;
