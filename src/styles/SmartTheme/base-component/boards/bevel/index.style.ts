
import BevelHueMapping from './colorMapping.style'
import BevelTons from './tons.style'
import BevelSat from './sat.style'
import BevelAlpha from './gerarClassesDeAlpha'

import BevelDirection from './directions.style'

const style = function (props) {

  const str = `
      

    
    .bevel{
      --bvl-deg: 315deg;
      --bvh: 0;
      --bvs: 0;
      --bvt: 0;
      --bvop: .1;
      --bvstart: 0%;
      --bvend: 100%;
    }    
    
    ${BevelHueMapping(props)}
    ${BevelTons(props)}
    ${BevelSat(props)}
    ${BevelAlpha(props)}

    ${BevelDirection(props)}



    .bevel > [b]:after{
      content: "";
      display: block;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      border-top-left-radius: var(--br-tl);
      border-top-right-radius: var(--br-tr);
      border-bottom-left-radius: var(--br-bl);
      border-bottom-right-radius: var(--br-br);
      background: linear-gradient( var(--bvl-deg), hsl( var(--bvh) calc(100% * var(--bvs)) calc(100% * var(--bvt) ) / 1 ) var(--bvstart), transparent var(--bvend));
      opacity: var(--bvop);
      
      transition-timing-function: var(--t-timing);
      transition-duration: var(--t-duration);
      transition-property: var(--t-props);
    }
    .bv-over-content > [b]:after {
      z-index: 1;
    }
    

    .bv-radial > [b]:after{
      background: radial-gradient(transparent, transparent, var(--bevel-c));
    }

    .bv-mix-hard-light > [b]:after{  mix-blend-mode: hard-light; }
    .bv-mix-color > [b]:after{  mix-blend-mode:color; }
    .bv-mix-color-burn > [b]:after{  mix-blend-mode: color-burn; }
    .bv-mix-hard-light > [b]:after{  mix-blend-mode: hard-light; }
    .bv-mix-color-dodge > [b]:after{  mix-blend-mode:color-dodge; }
    .bv-mix-darken > [b]:after{  mix-blend-mode: darken; }
    .bv-mix-difference > [b]:after{  mix-blend-mode: difference; }
    .bv-mix-exclusion > [b]:after{  mix-blend-mode: exclusion; }
    .bv-mix-hue > [b]:after{  mix-blend-mode: hue; }
    .bv-mix-lighten > [b]:after{  mix-blend-mode:  lighten; }
    .bv-mix-luminosity > [b]:after{  mix-blend-mode:  luminosity; }
    .bv-mix-multiply > [b]:after{  mix-blend-mode:   multiply; }
    .bv-mix-soft-light > [b]:after{  mix-blend-mode:  soft-light; }

    .bv-over-content > [b]:after {
      z-index: 3;
    }

        
    .bv-start-0 { --bvstart: 0%;  }
    .bv-end-0 { --bvend: 0%; }
    .bv-start-5 { --bvstart: 5%;  }
    .bv-end-5 { --bvend: 5%; }
    .bv-start-10 { --bvstart: 10%;  }
    .bv-end-10 { --bvend: 10%; }
    .bv-start-20 { --bvstart: 20%;  }
    .bv-end-20 { --bvend: 20%; }
    .bv-start-30 { --bvstart: 30%;  }
    .bv-end-30 { --bvend: 30%; }
    .bv-start-40 { --bvstart: 40%;  }
    .bv-end-40 { --bvend: 40%; }
    .bv-start-50 { --bvstart: 50%;  }
    .bv-end-50 { --bvend: 50%; }
    .bv-start-60 { --bvstart: 60%;  }
    .bv-end-60 { --bvend: 60%; }
    .bv-start-70 { --bvstart: 70%;  }
    .bv-end-70 { --bvend: 70%; }
    .bv-start-80 { --bvstart: 80%;  }
    .bv-end-80 { --bvend: 80%; }
    .bv-start-90 { --bvstart: 90%;  }
    .bv-end-90 { --bvend: 90%; }
    .bv-start-95 { --bvstart: 95%;  }
    .bv-end-95 { --bvend: 95%; }
    .bv-start-100 { --bvstart: 100%;  }
    .bv-end-100 { --bvend: 100%; }
    
  `;

  return str;
};

export default style;
