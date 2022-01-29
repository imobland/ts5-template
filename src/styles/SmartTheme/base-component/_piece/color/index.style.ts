
import ColorHueMapping from './colorMapping.style'
import ColorTons from './tons.style'
import ColorSat from './sat.style'
import ColorOpacity from './opacity.style'

const style = function (props) {
  const str =  `

    [p] {
      color: hsl( var(--ch) calc(100% * var(--cs)) calc(100% * var(--ct)) / var(--c-op)) !important;
      --ctformula: (((var(--cs) * var(--ct)) + ((1 - var(--cs)) * var(--ctg))));
    }
    [p]::placeholder {
      color: hsl( var(--pch) calc(100% * var(--pcs)) calc(100% * var(--pct)) / 40%) !important;
    }
    :root {
      --ch: 0;
      --ct: 0.5;
      --cs: 0;
      --cmdown: 0.5;
      --c-op: 1;
    }

    ${ColorHueMapping(props)}
    ${ColorTons(props)}
    ${ColorSat(props)}
    ${ColorOpacity()}

  `;

    return str;
};

export default style;
