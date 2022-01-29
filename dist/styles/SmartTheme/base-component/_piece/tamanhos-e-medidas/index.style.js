"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classes_w_h_bels_style_1 = __importDefault(require("./classes-w-h-bels.style"));
const classes_w_h_percentuais_style_1 = __importDefault(require("./classes-w-h-percentuais.style"));
const classes_w_h_viewports_style_1 = __importDefault(require("./classes-w-h-viewports.style"));
const style = function (props) {
    return `

  ${(0, classes_w_h_bels_style_1.default)("", "", false)}  
  ${(0, classes_w_h_viewports_style_1.default)("", "", false)}
  ${(0, classes_w_h_percentuais_style_1.default)("", "", false)}

  ${(0, classes_w_h_bels_style_1.default)("lg\\:", "", "1199px")}
  ${(0, classes_w_h_viewports_style_1.default)("lg\\:", "", "1199px")}
  ${(0, classes_w_h_percentuais_style_1.default)("lg\\:", "", "1199px")}

  ${(0, classes_w_h_bels_style_1.default)("md\\:", "", "991px")}
  ${(0, classes_w_h_viewports_style_1.default)("md\\:", "", "991px")}
  ${(0, classes_w_h_percentuais_style_1.default)("md\\:", "", "991px")}

  ${(0, classes_w_h_bels_style_1.default)("sm\\:", "", "767px")}
  ${(0, classes_w_h_viewports_style_1.default)("sm\\:", "", "767px")}
  ${(0, classes_w_h_percentuais_style_1.default)("sm\\:", "", "767px")}

  ${(0, classes_w_h_bels_style_1.default)("xs\\:", "", "575px")}
  ${(0, classes_w_h_viewports_style_1.default)("xs\\:", "", "575px")}
  ${(0, classes_w_h_percentuais_style_1.default)("xs\\:", "", "575px")}

    
  `;
};
exports.default = style;
