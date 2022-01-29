import {getTamanhosViaTamanhosMatriz} from "./tamanhosMatriz.style";

const gerarVarsPadsBase = function () {
  let str = "";
  // for (let i = 1; i <= 12; i++){
  //   str = `
  //     --pad-1: 3rem;
  //     .${pre}w-max-${i}b${pos} { max-width: calc( var(--s) * ${ i * 2 } ); }
  //   `;
  // }
  // return str;

  return `
    :root{
      --pad-12: ${getTamanhosViaTamanhosMatriz(46)}rem; 
      --pad-11: ${getTamanhosViaTamanhosMatriz(44)}rem; 
      --pad-10: ${getTamanhosViaTamanhosMatriz(41)}rem; 
      --pad-9: ${getTamanhosViaTamanhosMatriz(38)}rem; 
      --pad-8: ${getTamanhosViaTamanhosMatriz(35)}rem; 
      --pad-7: ${getTamanhosViaTamanhosMatriz(32)}rem; 
      --pad-6: ${getTamanhosViaTamanhosMatriz(29)}rem; 
      --pad-5: ${getTamanhosViaTamanhosMatriz(26)}rem; 
      --pad-4: ${getTamanhosViaTamanhosMatriz(23)}rem; 
      --pad-3: ${getTamanhosViaTamanhosMatriz(19)}rem; 
      --pad-2: ${getTamanhosViaTamanhosMatriz(15)}rem; 
      --pad-1: ${getTamanhosViaTamanhosMatriz(11)}rem; 
      --pad-0: 0rem;
    }
  `;
}

export default gerarVarsPadsBase;