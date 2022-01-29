import {sizesList} from "../../../_root-config/sizes/sizesList.style";
import { tamanhosMatriz} from "../../../_root-config/sizes/tamanhosMatriz.style";

const gerarClasses = function (pre, pos, mediaQuery) {
  let str = "";

  if (mediaQuery) {  str = str + ` @media (max-width: ${mediaQuery}) { `;  }

  for (const key in tamanhosMatriz) {
    let obj = tamanhosMatriz[key];

    str = str.concat(`
      [p].${pre}S${key}${pos} { --s: ${obj.size}rem !important;  }  
    `);
  }

  if (mediaQuery) { str = str + `}`; }

  return str;
};

const style = function (props) {
  return `
    /* transferncia de tamanho para zoom futuro */
    [p] > [c]{
      --ch-s: var(--s);
    }

    ${gerarClasses("", "", false)}
    ${gerarClasses("lg\\:", "", "1199px")}
    ${gerarClasses("md\\:", "", "991px")}
    ${gerarClasses("sm\\:", "", "767px")}
    ${gerarClasses("xs\\:", "", "575px")}

    
    .S-1  { --s:  calc( var(--ch-s) / var(--scale) ) !important;    } 
    .S-2  { --s:  calc( var(--ch-s) / var(--scale-e2) ) !important;    }
    .S-3  { --s:  calc( var(--ch-s) / var(--scale-e3) ) !important;    }
    .S-4  { --s:  calc( var(--ch-s) / var(--scale-e4) ) !important;    }
    .S-5  { --s:  calc( var(--ch-s) / var(--scale-e5) ) !important;    }
    .S-6  { --s:  calc( var(--ch-s) / var(--scale-e6) ) !important;    }
    .S-7  { --s:  calc( var(--ch-s) / var(--scale-e7) ) !important;    }
    .S-8  { --s:  calc( var(--ch-s) / var(--scale-e8) ) !important;    }
    .S-9  { --s:  calc( var(--ch-s) / var(--scale-e9) ) !important;    }
    .S\\+1 { --s: calc( var(--ch-s) * var(--scale) ) !important;    }
    .S\\+2 { --s: calc( var(--ch-s) * var(--scale-e2) ) !important;    }
    .S\\+3 { --s: calc( var(--ch-s) * var(--scale-e3) ) !important;    }
    .S\\+4 { --s: calc( var(--ch-s) * var(--scale-e4) ) !important;    }
    .S\\+5 { --s: calc( var(--ch-s) * var(--scale-e5) ) !important;    }
    .S\\+6 { --s: calc( var(--ch-s) * var(--scale-e6) ) !important;    }
    .S\\+7 { --s: calc( var(--ch-s) * var(--scale-e7) ) !important;    }
    .S\\+8 { --s: calc( var(--ch-s) * var(--scale-e8) ) !important;    }
    .S\\+9 { --s: calc( var(--ch-s) * var(--scale-e9) ) !important;    }

  `;
};

export default style;
