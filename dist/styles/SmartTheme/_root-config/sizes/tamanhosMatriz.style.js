"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTamanhosViaTamanhosMatriz = exports.tamanhosMatriz = void 0;
const sizesList_style_1 = require("./sizesList.style");
const tamanhosMatriz = {
    1: {
        sizeLabel: 28,
        size: sizesList_style_1.sizesList[28],
    },
    2: {
        sizeLabel: 27,
        size: sizesList_style_1.sizesList[27],
    },
    3: {
        sizeLabel: 26,
        size: sizesList_style_1.sizesList[26],
    },
    4: {
        sizeLabel: 25,
        size: sizesList_style_1.sizesList[25],
    },
    5: {
        sizeLabel: 24,
        size: sizesList_style_1.sizesList[24],
    },
    6: {
        sizeLabel: 23,
        size: sizesList_style_1.sizesList[23],
    },
};
exports.tamanhosMatriz = tamanhosMatriz;
const getTamanhosViaTamanhosMatriz = function (size) {
    return sizesList_style_1.sizesList[size];
};
exports.getTamanhosViaTamanhosMatriz = getTamanhosViaTamanhosMatriz;
