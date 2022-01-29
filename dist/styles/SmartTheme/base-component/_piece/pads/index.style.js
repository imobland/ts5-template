"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bels_style_1 = __importDefault(require("./bels.style"));
const percent_style_1 = __importDefault(require("./percent.style"));
const rem_style_1 = __importDefault(require("./rem.style"));
const escalar_style_1 = __importDefault(require("./escalar.style"));
const style = function (props) {
    return `

    ${(0, bels_style_1.default)("", "", false)}  
    ${(0, rem_style_1.default)("", "", false)}
    ${(0, percent_style_1.default)("", "", false)}
    ${(0, escalar_style_1.default)("", "", false)}

    ${(0, bels_style_1.default)("lg\\:", "", "1199px")}
    ${(0, rem_style_1.default)("lg\\:", "", "1199px")}
    ${(0, percent_style_1.default)("lg\\:", "", "1199px")}
    ${(0, escalar_style_1.default)("lg\\:", "", "1199px")}

    ${(0, bels_style_1.default)("md\\:", "", "991px")}
    ${(0, rem_style_1.default)("md\\:", "", "991px")}
    ${(0, percent_style_1.default)("md\\:", "", "991px")}
    ${(0, escalar_style_1.default)("md\\:", "", "991px")}

    ${(0, bels_style_1.default)("sm\\:", "", "767px")}
    ${(0, rem_style_1.default)("sm\\:", "", "767px")}
    ${(0, percent_style_1.default)("sm\\:", "", "767px")}
    ${(0, escalar_style_1.default)("sm\\:", "", "767px")}

    ${(0, bels_style_1.default)("xs\\:", "", "575px")}
    ${(0, rem_style_1.default)("xs\\:", "", "575px")}
    ${(0, percent_style_1.default)("xs\\:", "", "575px")}
    ${(0, escalar_style_1.default)("xs\\:", "", "575px")}

  `;
};
exports.default = style;
