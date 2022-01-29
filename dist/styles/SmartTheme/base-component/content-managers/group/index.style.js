"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shadows_style_1 = __importDefault(require("./shadows.style"));
const radius_style_1 = __importDefault(require("./radius.style"));
const pads_style_1 = __importDefault(require("./pads.style"));
const innerPads_style_1 = __importDefault(require("./innerPads.style"));
const gaps_style_1 = __importDefault(require("./gaps.style"));
const pill_style_1 = __importDefault(require("./pill.style"));
const style = function (props) {
    return `
    ${(0, radius_style_1.default)()}
    ${(0, shadows_style_1.default)()}
    ${(0, pads_style_1.default)()}
    ${(0, innerPads_style_1.default)()}
    ${(0, gaps_style_1.default)()}
    ${(0, pill_style_1.default)()}
  `;
};
exports.default = style;
