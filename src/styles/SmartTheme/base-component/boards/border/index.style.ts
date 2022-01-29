import borderHueMapping from './colorMapping.style'
import borderTons from './tons.style'
import borderSat from './sat.style'
import borderAlpha from './opacity.style'

import borderSideExpand from './sideExpand.style'
import borderGapBorder from './gapBorder.style'
import chBorderJoin from './chBorderJoin.style'

const helpers = function (pre, pos) {
  const str = `
    
    .${pre}bd-w-1rem${pos} { --bdw: 1rem;}
    .${pre}bd-w-2rem${pos} { --bdw: 2rem;}
    .${pre}bd-w-3rem${pos} { --bdw: 3rem;}
    .${pre}bd-w-4rem${pos} { --bdw: 4rem;}
    .${pre}bd-w-5rem${pos} { --bdw: 5rem;}

    .${pre}bd-solid${pos}  { --bdm: solid;  }
    .${pre}bd-dashed${pos} { --bdm: dashed; }
    .${pre}bd-dotted${pos} { --bdm: dotted; }
  `
  return str;
};


const style = function (props) {

  const str =  `

    :root {
      --bdw: 0;
      --bdm: solid;
      --bdh: 0deg;
      --bds: 0;
      --bdt: .5;
      --bdop: 1;
      --bdw: 2rem;
    }

    .border {
      --bd-formula: var(--bdw) var(--bdm) hsl( var(--bdh) calc(100% * var(--bds)) calc(100% * var(--bdt)) / var(--bdop));
    }

    ${borderHueMapping(props)}
    ${borderTons(props)}
    ${borderSat(props)}
    ${borderAlpha()}
 
    ${borderSideExpand()}
    ${borderGapBorder()}
    ${chBorderJoin()}

    ${helpers("", "")}
    ${helpers("h\\:", ":hover")}
    ${helpers("a\\:", ":active")}

  `;

  return str;
};

export default style;
