import BgClasses from './bg/index.style'

import ShadowClasses from './shadow/index.style'

import BorderClasses from './border/index.style'

import Radius from './border-radius/index.style'

import Margin from './margin/index.style'

import Gradients from './gradient/index.style'
import Overlays from './overlay/index.style'
import Bevels from './bevel/index.style'

const style = function (props) {

  const str =  `

    ${BgClasses(props)}

    ${ShadowClasses(props)}

    ${BorderClasses(props)}

    ${Radius(props)}

    ${Bevels(props)}

    ${Margin(props)}

    ${Overlays(props)}


    .sect > [c],
    .box > [c],
    .bel > [c],
    .pic > [c] {
    }

    :root {
      --ctbreakpoint: 0.05;
    }

    .bg-none > [b]{
        display: none;
    }

    .board-in-piece {
      background: hsl( var(--bgh) calc(100% * var(--bgs)) calc(100% * var(--bgt)) / var(--bgop))!important;
      
      > [b] {
          display: none;
      }
  }
  `;

  return str;
};

export default style;
