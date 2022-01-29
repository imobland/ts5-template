"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tamanhosMatriz_style_1 = require("./tamanhosMatriz.style");
const gerarVarsGapsBase = function () {
    let str = "";
    return `
    :root{
      --gap-12: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(46)}rem; 
      --gap-11: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(44)}rem; 
      --gap-10: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(41)}rem; 
      --gap-9: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(38)}rem; 
      --gap-8: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(35)}rem; 
      --gap-7: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(32)}rem; 
      --gap-6: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(29)}rem; 
      --gap-5: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(26)}rem; 
      --gap-4: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(23)}rem; 
      --gap-3: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(19)}rem; 
      --gap-2: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(15)}rem; 
      --gap-1: ${(0, tamanhosMatriz_style_1.getTamanhosViaTamanhosMatriz)(11)}rem; 
      --gap-0: 0rem;
    }
  `;
};
exports.default = gerarVarsGapsBase;
