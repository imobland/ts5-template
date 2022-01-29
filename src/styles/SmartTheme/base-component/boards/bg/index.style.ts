import BgHueMapping from './colorMapping.style'
import BgTons from './bgTons.style'
import BgSat from './bgSat.style'
import BgAlpha from './gerarClassesDeAlpha'

const style = function (props) {

  const str =  `

    ${BgHueMapping(props)}
    ${BgTons(props)}
    ${BgSat(props)}
    ${BgAlpha()}

    [p="input"].bel,
    [p="select"].bel {
      background: hsl( var(--bgh) calc(100% * var(--bgs)) calc(100% * var(--bgt)) / var(--bgop)) !important;
    }   

    .sect > [b],
    .box > [b],
    .bel > [b],
    .pic > [b],
    .board > [b] {
      background: hsl( var(--bgh) calc(100% * var(--bgs)) calc(100% * var(--bgt)) / var(--bgop)) !important;
    }

    :root {
      --bgh: 0;
      --bgt: 0.5;
      --bgmdown: 0.5;
      --bgctg: 0.5;
      --bgs: 1;
      --bg-op: 1;
    }
    
    .bg-padding-box > [b],
    [p="input"].bg-padding-box { 
      background-clip: padding-box !important; 
    }
  `;

  return str;
};

export default style;
