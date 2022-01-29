"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tamanhosMatriz_style_1 = require("./tamanhosMatriz.style");
const gerarVarsPadsBase = function () {
    let str = "";
    return `
    :root{
      --pad-12: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(46)}rem; 
      --pad-11: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(44)}rem; 
      --pad-10: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(41)}rem; 
      --pad-9: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(38)}rem; 
      --pad-8: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(35)}rem; 
      --pad-7: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(32)}rem; 
      --pad-6: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(29)}rem; 
      --pad-5: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(26)}rem; 
      --pad-4: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(23)}rem; 
      --pad-3: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(19)}rem; 
      --pad-2: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(15)}rem; 
      --pad-1: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(11)}rem; 
      --pad-0: 0rem;
    }
  `;
};
exports.default = gerarVarsPadsBase;
