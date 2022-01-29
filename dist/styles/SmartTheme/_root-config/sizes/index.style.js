"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sizesList_style_1 = require("./sizesList.style");
const varsPadsBase_style_1 = __importDefault(require("./varsPadsBase.style"));
const varsGapsBase_style_1 = __importDefault(require("./varsGapsBase.style"));
const radius_style_1 = __importDefault(require("./radius.style"));
const style = function (props) {
    return `
    ${(0, sizesList_style_1.style)(props)}
    ${(0, varsPadsBase_style_1.default)()};
    ${(0, varsGapsBase_style_1.default)()};
    ${(0, radius_style_1.default)(props)};
  `;
};
exports.default = style;
