import {sizesList} from "../../../_root-config/sizes/sizesList.style";

const gerarClasses = function (pre, pos, mediaQuery) {
  let str = "";

  // Abre media queryes
  if(mediaQuery){ str = str+` @media (max-width: ${mediaQuery}) { `; }

  for (let i = 1; i <= 12; i++){
    str = str+`
    .${pre}min-w-${i}b${pos} { min-width: calc( var(--s) * ${ i * 2 } ); }
    .${pre}max-w-${i}b${pos} { max-width: calc( var(--s) * ${ i * 2 } ); }
    .${pre}min-h-${i}b${pos} { min-height: calc( var(--s) * ${ i * 2 } ); }
    .${pre}max-h-${i}b${pos} { max-height: calc( var(--s) * ${ i * 2 } ); }
    `;
  }

  // Fecha media
  if(mediaQuery){ str = str+`}`;}

  return str;
}


export default gerarClasses;