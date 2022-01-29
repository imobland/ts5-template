import {tamanhosMatriz, getTamanhosViaTamanhosMatriz} from "../../_root-config/sizes/tamanhosMatriz.style";

const sizeMetrics = {
  sect: {
    pad: {
      tiny: 32,
      compact: 35,
      default: 38,
      expand: 41,
      loose: 44,
    },
    gap: 32,
  },
};


const gerarClasses = function (pre, mediaQuery) {
  let str = ``;

  if (mediaQuery) { str = str + ` @media (max-width: ${mediaQuery}) { `; }

  str = str + `

    &.${pre}default {
      --pad-t : calc( 1rem * var(--metric-pad) ); 
      --pad-b : calc( 1rem * var(--metric-pad) ); 
    }
    &.${pre}t-default {
      --pad-t : calc( 1rem * var(--metric-pad) ); 
    }
    &.${pre}b-default {
      --pad-b : calc( 1rem * var(--metric-pad) ); 
    }

    &.${pre}compact{
      --pad-t : calc( 1rem * var(--metric-pad-compact) ); 
      --pad-b : calc( 1rem * var(--metric-pad-compact) ); 
    }
    &.${pre}t-compact {
      --pad-t : calc( 1rem * var(--metric-pad-compact) ); 
    }
    &.${pre}b-compact {
      --pad-b : calc( 1rem * var(--metric-pad-compact) ); 
    }

    &.${pre}tiny{
      --pad-t : calc( 1rem * var(--metric-pad-tiny) ); 
      --pad-b : calc( 1rem * var(--metric-pad-tiny) ); 
    }
    &.${pre}t-tiny {
      --pad-t : calc( 1rem * var(--metric-pad-tiny) ); 
    }
    &.${pre}b-tiny {
      --pad-b : calc( 1rem * var(--metric-pad-tiny) ); 
    }

    &.${pre}loose{
      --pad-t : calc( 1rem * var(--metric-pad-loose) ); 
      --pad-b : calc( 1rem * var(--metric-pad-loose) ); 
    }
    &.${pre}t-loose {
      --pad-t : calc( 1rem * var(--metric-pad-loose) ); 
    }
    &.${pre}b-loose {
      --pad-b : calc( 1rem * var(--metric-pad-loose) ); 
    }
    
    &.${pre}expand{
      --pad-t : calc( 1rem * var(--metric-pad-expand) ); 
      --pad-b : calc( 1rem * var(--metric-pad-expand) ); 
    }
    &.${pre}t-expand {
      --pad-t : calc( 1rem * var(--metric-pad-expand) ); 
    }
    &.${pre}b-expand {
      --pad-b : calc( 1rem * var(--metric-pad-expand) ); 
    }
  `;

  if (mediaQuery) { str = str + `}`; }

  return str;
};



const style = function (props) {
  const ss = sizeMetrics.sect;

  return `

  .sect {

    /* PADDINGS  ========================= */

    --metric-pad: ${ getTamanhosViaTamanhosMatriz( ss.pad.default) };
    --metric-pad-tiny: ${ getTamanhosViaTamanhosMatriz(ss.pad.tiny) };
    --metric-pad-compact: ${ getTamanhosViaTamanhosMatriz(ss.pad.compact) };
    --metric-pad-loose: ${ getTamanhosViaTamanhosMatriz(ss.pad.loose) };
    --metric-pad-expand: ${ getTamanhosViaTamanhosMatriz(ss.pad.expand) };

    // Default
    padding-top    : var(--pad-t);
    padding-bottom : var(--pad-b);
    padding-right  : var(--pad-r);
    padding-left   : var(--pad-l);
    
    &.pad-in-content {
      padding-top: 0;
      padding-bottom:  0;
      padding-right:  0;
      padding-left:  0;
      > [c] { 
        padding-top: var(--pad-t);
        padding-bottom: var(--pad-b);
        padding-right: var(--pad-r);
        padding-left: var(--pad-l);
      }
    }
    
    --pad-t : calc( 1rem * var(--metric-pad) ); 
    --pad-b : calc( 1rem * var(--metric-pad) ); 
    --pad-l : calc( var(--screen-sangria) * 1rem); 
    --pad-r : calc( var(--screen-sangria) * 1rem);

    ${gerarClasses("", false)}
    ${gerarClasses("lg\\:", "1199px")}
    ${gerarClasses("md\\:", "991px")}
    ${gerarClasses("sm\\:", "767px")}
    ${gerarClasses("xs\\:", "575px")}



    /* GAPS  ========================= */
   
    --metric-gap: ${ getTamanhosViaTamanhosMatriz(ss.gap) };

    --gap: var(--metric-gap);

  }
  `;
};
export default style ;
