import {  tamanhosMatriz,  getTamanhosViaTamanhosMatriz,} from "../../_root-config/sizes/tamanhosMatriz.style";

// size multiplier serve pra multiplicar o tamanho dos elementos da box: padding, gaps,
// SizeBase serve pra setar Tamanho BASE nos elementos internos
const sizes = {
  box: {

    pads: {
      // Compact, Default, Expand
      compact: 1.3,
      default: 1.8,
      expand: 2.5,
    },

    gap: 1,
  },
};

const gerarClassesPads = function (pre, mediaQuery) {
  let str = ``;
  const pads = sizes.box.pads;

  if (mediaQuery) {
    str = str + ` @media (max-width: ${mediaQuery}) { `;
  }

  // Gera AMS: Area Metric sizes.
  for (let label in pads) {
    str =
      str +
      `
        &.${pre}${label} {
          --pad-t : calc( var(--ams) * var(--bpm-${label}) ); 
          --pad-b : calc( var(--ams) * var(--bpm-${label}) ); 
          --pad-l : calc( var(--ams) * var(--bpm-${label}) ); 
          --pad-r : calc( var(--ams) * var(--bpm-${label}) ); 
        }
        &.${pre}y-${label} {
          --pad-t : calc( var(--ams) * var(--bpm-${label}) ); 
          --pad-b : calc( var(--ams) * var(--bpm-${label}) ); 
        }
        &.${pre}x-${label} {
          --pad-l : calc( var(--ams) * var(--bpm-${label}) ); 
          --pad-r : calc( var(--ams) * var(--bpm-${label}) ); 
        }
        &.${pre}t-${label} {
          --pad-t : calc( var(--ams) * var(--bpm-${label}) ); 
        }
        &.${pre}b-${label} {
        --pad-b : calc( var(--ams) * var(--bpm-${label}) ); 
        }
        &.${pre}l-${label} {
          --pad-l : calc( var(--ams) * var(--bpm-${label}) ); 
        }
        &.${pre}r-${label} {
          --pad-r : calc( var(--ams) * var(--bpm-${label}) ); 
        }
    `;
  }

  if (mediaQuery) {
    str = str + `}`;
  }

  return str;
};


const style = function (props) {
  const sb = sizes.box;

  return `

  .box {

    /* PADDINGS  =========================  */

    /* bpm: Box pad metric - Metrica de multiplicação */
    --bpm-default: ${sb.pads.default};
    --bpm-compact: ${sb.pads.compact};
    --bpm-expand: ${sb.pads.expand};
    
    /* AMS: Area Metric sizes.*/
    --pad-t : calc( var(--ams) * var(--bpm-default) ); 
    --pad-b : calc( var(--ams) * var(--bpm-default) ); 
    --pad-l : calc( var(--ams) * var(--bpm-default) ); 
    --pad-r : calc( var(--ams) * var(--bpm-default) ); 
    
    padding-top    : var(--pad-t);
    padding-bottom : var(--pad-b);
    padding-right  : var(--pad-r);
    padding-left   : var(--pad-l);
    
    &.pad-in-content {
      padding-top: 0;
      padding-bottom: 0;
      padding-right: 0;
      padding-left: 0;

      > [c] { 
        padding-top: var(--pad-t);
        padding-bottom: var(--pad-b);
        padding-right: var(--pad-r);
        padding-left: var(--pad-l);
      }
    }
    


    ${gerarClassesPads("", false)}
    ${gerarClassesPads("lg\\:", "1199px")}
    ${gerarClassesPads("md\\:", "991px")}
    ${gerarClassesPads("sm\\:", "767px")}
    ${gerarClassesPads("xs\\:", "575px")}


    /* GAPS  ========================= */

    > [c] {
      --gap: calc( var(--ams) * ${sb.gap} );
    }
    
    
  }

  `;
};
export default style;