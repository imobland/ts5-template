
import ShadowHueMapping from './colorMapping.style'
import ShadowTons from './tons.style'
import ShadowSat from './sat.style'
import ShadowAlpha from './gerarClassesDeAlpha'
import ShadowLevel from './level.style'
import ShadowStyles from './styles.style'

const style = function (props) {

  const str =  `

    ${ShadowHueMapping(props)}
    ${ShadowTons(props)}
    ${ShadowSat(props)}
    ${ShadowAlpha(props)}
    ${ShadowLevel(props)}
    ${ShadowStyles(props)}

      

    .box,
    .pic,
    .bel{
      --shlvl: 1;
      /* Style pre setado: style 1 */
      --sh-style: calc( 4rem * var(--shlvl) ) calc( 6rem * var(--shlvl) ) calc( 16rem * var(--shlvl) );

      --box-shadow: var(--sh-style) hsl( var(--shh) calc(100% * var(--shs)) calc(100% * var(--sht) ) / var(--shop) );
    }
    .box.shadow > [b],
    .pic.shadow > [b],
    .bel.shadow > [b],
    [p="input"].bel.shadow {
      box-shadow: var(--box-shadow);
    }

    .sh-inset{
      &.box,
      &.pic,
      &.bel{
        --box-shadow-inset: inset var(--sh-style) hsl( var(--shh) calc(100% * var(--shs)) calc(100% * var(--sht) ) / var(--shop) );
      }
      &.box.shadow > [b],
      &.pic.shadow > [b],
      &.bel.shadow > [b],
      [p="input"].bel.shadow {
        box-shadow: var(--box-shadow-inset);
      }
    }


    :root {
      --shh: 0;
      --shs: 0;
      --sht: 0;
      --shctg: 0;
      --shmdown: 0;
      --shop: 0;
      --sh-inset: "";
    }

  `;

  return str;
};

export default style;
