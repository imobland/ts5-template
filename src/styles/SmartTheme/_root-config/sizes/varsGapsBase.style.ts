import {getTamanhosViaTamanhosMatriz} from "./tamanhosMatriz.style";

// --gap-8: 56.95rem;
const gerarVarsGapsBase = function () {
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
      --gap-12: ${getTamanhosViaTamanhosMatriz(46)}rem; 
      --gap-11: ${getTamanhosViaTamanhosMatriz(44)}rem; 
      --gap-10: ${getTamanhosViaTamanhosMatriz(41)}rem; 
      --gap-9: ${getTamanhosViaTamanhosMatriz(38)}rem; 
      --gap-8: ${getTamanhosViaTamanhosMatriz(35)}rem; 
      --gap-7: ${getTamanhosViaTamanhosMatriz(32)}rem; 
      --gap-6: ${getTamanhosViaTamanhosMatriz(29)}rem; 
      --gap-5: ${getTamanhosViaTamanhosMatriz(26)}rem; 
      --gap-4: ${getTamanhosViaTamanhosMatriz(23)}rem; 
      --gap-3: ${getTamanhosViaTamanhosMatriz(19)}rem; 
      --gap-2: ${getTamanhosViaTamanhosMatriz(15)}rem; 
      --gap-1: ${getTamanhosViaTamanhosMatriz(11)}rem; 
      --gap-0: 0rem;
    }
  `;
}

export default gerarVarsGapsBase;