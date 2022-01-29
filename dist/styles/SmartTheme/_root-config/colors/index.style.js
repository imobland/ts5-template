"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const css = function (props) {
    return `
    :root {
      ${props.ThemeConfig.colors.varsCss}
    }
  `;
};
exports.default = css;
