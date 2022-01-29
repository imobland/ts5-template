"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const p_structure_style_1 = __importDefault(require("./p-structure.style"));
const inspector_1 = __importDefault(require("./inspector"));
const estados_style_1 = __importDefault(require("./estados.style"));
const classesSdeTamanhosMatriz_style_1 = __importDefault(require("./escalas-s-matriz/classesSdeTamanhosMatriz.style"));
const index_style_1 = __importDefault(require("./areas/index.style"));
const index_style_2 = __importDefault(require("./pads/index.style"));
const index_style_3 = __importDefault(require("./offset-pads/index.style"));
const classesAspectRatio_style_1 = __importDefault(require("./aspect-ratio/classesAspectRatio.style"));
const index_style_4 = __importDefault(require("./tamanhos-e-medidas/index.style"));
const classes_style_1 = __importDefault(require("./order/classes.style"));
const classes_style_2 = __importDefault(require("./opacity/classes.style"));
const classes_style_3 = __importDefault(require("./animations/classes.style"));
const index_style_5 = __importDefault(require("./color/index.style"));
const helpers_style_1 = __importDefault(require("./helpers.style"));
const style = function (props) {
    return `

    ${(0, p_structure_style_1.default)(props)} 

    ${(0, estados_style_1.default)(props)}

    ${(0, classesSdeTamanhosMatriz_style_1.default)(props)} 

    ${(0, index_style_4.default)(props)}
    
    ${(0, classesAspectRatio_style_1.default)(props)}

    ${(0, index_style_1.default)(props)} 

    ${(0, index_style_2.default)(props)}

    ${(0, index_style_3.default)(props)}

    ${(0, index_style_5.default)(props)}

    ${(0, classes_style_1.default)(props)}

    ${(0, classes_style_2.default)(props)}

    ${(0, classes_style_3.default)(props)}

    ${(0, inspector_1.default)(props)} 
    ${(0, helpers_style_1.default)(props)}

    :root{
      --t-timing: ease-in-out;
      --t-duration: .15s;
      --t-props: color, background, border, outline, box-shadow, text-shadow, opacity;
    }
    
  `;
};
exports.default = style;
