"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const css = function () {
    return `
    .group {
      &.sect,      
      &.box,
      &.pic,
      &.bel{
        > [c] > [p] {
          --shlvl: 0;
        }
      }
    }
  `;
};
exports.default = css;
