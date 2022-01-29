import {tamanhosMatriz, getTamanhosViaTamanhosMatriz} from "../../_root-config/sizes/tamanhosMatriz.style";


const sizeMetrics = {
  bel: {
    pad: {
      xs: 0.25,    // pad 4
      sm: 0.50, // pad 8
      md: 0.75, // pad 12
      lg: 1,   // pad 16
      xl: 1.25,   // pad 20
    },
    gap: 0.2,
    borderW: 0.125,
    icon: {
      xs: 0.55,
      sm: .8,
      md: 1.05,
      lg: 1.3,
      xl: 1.55,
    },
    iconControl: .8,
    scaleElements: {
      text : 0,
      smallText : -2,
    }
  },
};

const geraClassesCssBel = function () {
  let str = "";

  for (const key in tamanhosMatriz) {
    let obj = tamanhosMatriz[key];

    let sb = sizeMetrics.bel;

    str = str.concat(`

    `);
  }

  return str;
};

const style = function (props) {
  const sb = sizeMetrics.bel;

  return `


  .bel {
    user-select: none;

    --metric-pad-xs: ${sb.pad.xs};
    --metric-pad-sm: ${sb.pad.sm};
    --metric-pad-md: ${sb.pad.md};
    --metric-pad-lg: ${sb.pad.lg};
    --metric-pad-xl: ${sb.pad.xl};

    --metric-gap: ${sb.gap};

    --metric-border-w: ${sb.borderW};

    
    --metric-icon-xs: ${sb.icon.xs};
    --metric-icon-sm: ${sb.icon.sm};
    --metric-icon-md: ${sb.icon.md};
    --metric-icon-lg: ${sb.icon.lg};
    --metric-icon-xl: ${sb.icon.xl};

    --metric-icon-control: ${sb.iconControl};
    

    // Default
    padding-top    : var(--pad-t);
    padding-bottom : var(--pad-b);
    padding-right  : var(--pad-r);
    padding-left   : var(--pad-l);

    > [c] {
      align-items: center;
      display: flex;
    }    

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

    > [c] {
      --gap: calc( calc(var(--s) / 1.5) * var(--metric-gap) + calc(var(--pad-l) / 6 + var(--pad-r) / 6));
    }

    [p="icon"]{
      font-size: var(--s);
    }
    [p="text"]{
      font-size: var(--s);
      transition: none;
    }

    &.pad-md,
    & {
      --pad-t : calc( var(--s) * ${sb.pad.md} ); 
      --pad-b : calc( var(--s) * ${sb.pad.md} ); 
      --pad-l : calc( var(--s) * ${sb.pad.md} ); 
      --pad-r : calc( var(--s) * ${sb.pad.md} ); 
    }
    &.pad-y-md {
      --pad-t : calc( var(--s) * ${sb.pad.md} ); 
      --pad-b : calc( var(--s) * ${sb.pad.md} ); 
    }
    &.pad-x-md {
      --pad-l : calc( var(--s) * ${sb.pad.md} ); 
      --pad-r : calc( var(--s) * ${sb.pad.md} ); 
    }


    &.pad-sm{
      --pad-t : calc( var(--s) * ${sb.pad.sm} ); 
      --pad-b : calc( var(--s) * ${sb.pad.sm} ); 
      --pad-l : calc( var(--s) * ${sb.pad.sm} ); 
      --pad-r : calc( var(--s) * ${sb.pad.sm} ); 
    }
    &.pad-y-sm {
      --pad-t : calc( var(--s) * ${sb.pad.sm} ); 
      --pad-b : calc( var(--s) * ${sb.pad.sm} ); 
    }
    &.pad-x-sm {
      --pad-l : calc( var(--s) * ${sb.pad.sm} ); 
      --pad-r : calc( var(--s) * ${sb.pad.sm} ); 
    }


    &.pad-xs{
      --pad-t : calc( var(--s) * ${sb.pad.xs} ); 
      --pad-b : calc( var(--s) * ${sb.pad.xs} ); 
      --pad-l : calc( var(--s) * ${sb.pad.xs} ); 
      --pad-r : calc( var(--s) * ${sb.pad.xs} ); 
    }
    &.pad-y-xs {
      --pad-t : calc( var(--s) * ${sb.pad.xs} ); 
      --pad-b : calc( var(--s) * ${sb.pad.xs} ); 
    }
    &.pad-x-xs {
      --pad-l : calc( var(--s) * ${sb.pad.xs} ); 
      --pad-r : calc( var(--s) * ${sb.pad.xs} ); 
    }

    
    &.pad-lg{
      --pad-t : calc( var(--s) * ${sb.pad.lg} ); 
      --pad-b : calc( var(--s) * ${sb.pad.lg} ); 
      --pad-l : calc( var(--s) * ${sb.pad.lg} ); 
      --pad-r : calc( var(--s) * ${sb.pad.lg} ); 
    }
    &.pad-y-lg {
      --pad-t : calc( var(--s) * ${sb.pad.lg} ); 
      --pad-b : calc( var(--s) * ${sb.pad.lg} ); 
    }
    &.pad-x-lg {
      --pad-l : calc( var(--s) * ${sb.pad.lg} ); 
      --pad-r : calc( var(--s) * ${sb.pad.lg} ); 
    }

    
    &.pad-xl{
      --pad-t : calc( var(--s) * ${sb.pad.xl} ); 
      --pad-b : calc( var(--s) * ${sb.pad.xl} ); 
      --pad-l : calc( var(--s) * ${sb.pad.xl} ); 
      --pad-r : calc( var(--s) * ${sb.pad.xl} ); 
    }
    &.pad-y-xl {
      --pad-t : calc( var(--s) * ${sb.pad.xl} ); 
      --pad-b : calc( var(--s) * ${sb.pad.xl} ); 
    }
    &.pad-x-xl {
      --pad-l : calc( var(--s) * ${sb.pad.xl} ); 
      --pad-r : calc( var(--s) * ${sb.pad.xl} ); 
    }

    
    
    
  }


  .bel [p="icon"] {
    flex-shrink: 0;

    font-size: calc(var(--s) * var(--metric-icon-md));

    &.xs {
      font-size: calc(var(--s) * var(--metric-icon-xs));
    }
    &.sm {
      font-size: calc(var(--s) * var(--metric-icon-sm));
    }
    &.md {
      font-size: calc(var(--s) * var(--metric-icon-md));
    }
    &.lg {
      font-size: calc(var(--s) * var(--metric-icon-lg));
    }
    &.xl {
      font-size: calc(var(--s) * var(--metric-icon-xl));
    }
    

    &.lock-height {
        margin-top: -1em;
        margin-bottom: -1em;
    }

   
  }

  .user-select-all{
    user-select: all;
  }

  
  `;
};
export { style, sizeMetrics };
