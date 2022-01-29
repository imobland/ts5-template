"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cache = exports.style = void 0;
const index_style_1 = __importDefault(require("../_root-config/sizes/index.style"));
const index_style_2 = __importDefault(require("./_piece/index.style"));
const index_style_3 = __importDefault(require("./boards/index.style"));
const index_style_4 = __importDefault(require("./content-managers/flex/index.style"));
const index_style_5 = __importDefault(require("./content-managers/grid/index.style"));
const index_style_6 = __importDefault(require("./content-managers/layer/index.style"));
const index_style_7 = __importDefault(require("./content-managers/group/index.style"));
const index_style_8 = __importDefault(require("./content-managers/slick-slider/index.style"));
const style = function (props) {
    const { sizes } = props.ThemeConfig;
    return `

    ${(0, index_style_3.default)(props)}


    // Tamanhos Base
    ${(0, index_style_1.default)(props)}

    // [P] P-Structure Base 
    ${(0, index_style_2.default)(props)}
  

    // Controladores de conteudo [C] 
    ${(0, index_style_4.default)(props)}
    ${(0, index_style_5.default)(props)}
    ${(0, index_style_6.default)(props)}
    ${(0, index_style_7.default)(props)}
    ${(0, index_style_8.default)(props)}

  `;
};
exports.style = style;
const cache_css_1 = __importDefault(require("./cache.css"));
const cache = function (props) { return ` ${(0, cache_css_1.default)(props)} `; };
exports.cache = cache;
