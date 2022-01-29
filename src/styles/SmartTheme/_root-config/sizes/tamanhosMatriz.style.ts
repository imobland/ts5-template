import {sizesList} from "./sizesList.style";

const tamanhosMatriz = {
  1: {
    sizeLabel: 28,
    size: sizesList[28],
  },
  2: {
    sizeLabel: 27,
    size: sizesList[27],
  },
  3: {
    sizeLabel: 26,
    size: sizesList[26],
  },
  4: {
    sizeLabel: 25,
    size: sizesList[25],
  },
  5: {
    sizeLabel: 24,
    size: sizesList[24],
  },
  6: {
    sizeLabel: 23,
    size: sizesList[23],
  },
};


const getTamanhosViaTamanhosMatriz = function (size) {
  return sizesList[size];
};

export {tamanhosMatriz, getTamanhosViaTamanhosMatriz} ;