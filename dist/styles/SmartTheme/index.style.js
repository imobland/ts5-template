"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_style_1 = require("./_root-config/index.style");
const reset_style_1 = __importDefault(require("./reset.style"));
const app_style_1 = __importDefault(require("./app.style"));
const index_style_2 = require("./base-component/index.style");
const index_style_3 = require("./boxes/index.style");
const index_style_4 = require("./components/index.style");
const index_style_5 = __importDefault(require("./blocos-tipograficos/index.style"));
const style = function (props) {
    return `
  ${(0, index_style_1.style)(props)}
  ${(0, reset_style_1.default)(props)}
  ${(0, app_style_1.default)(props)}
  ${(0, index_style_3.style)(props)}
  ${(0, index_style_2.style)(props)}
  ${(0, index_style_4.style)(props)}
  ${(0, index_style_5.default)(props)}
  
  `;
};
exports.default = style;
