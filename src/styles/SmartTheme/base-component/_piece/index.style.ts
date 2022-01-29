
import PStructure from "./p-structure.style";
import Inspector from "./inspector";
// HELPERS (ex: .hide .show)
import Estados from "./estados.style";

// --S Tamanhos de Escalas matriz - Classes
import EscalasSMatriz from "./escalas-s-matriz/classesSdeTamanhosMatriz.style";

import Areas from "./areas/index.style";

// Pads - Classes
import Pads from "./pads/index.style";

// Offset Pads - Classes
import OPads from "./offset-pads/index.style";

// Aspect Ratio - Classes
import AspectRatios from "./aspect-ratio/classesAspectRatio.style";

// Tamanhos W- H- Classes
import TamanhosEMedidas from "./tamanhos-e-medidas/index.style";

// Order
import Order from "./order/classes.style";
// Opacity
import Opacity from "./opacity/classes.style";
// Animations
import Animations from "./animations/classes.style";

// Color
import ColorClasses from "./color/index.style";

// HELPERS 
import Helpers from "./helpers.style";

const style = function (props) {
  return `

    ${PStructure(props)} 

    ${Estados(props)}

    ${EscalasSMatriz(props)} 

    ${TamanhosEMedidas(props)}
    
    ${AspectRatios(props)}

    ${Areas(props)} 

    ${Pads(props)}

    ${OPads(props)}

    ${ColorClasses(props)}

    ${Order(props)}

    ${Opacity(props)}

    ${Animations(props)}

    ${Inspector(props)} 
    ${Helpers(props)}

    :root{
      --t-timing: ease-in-out;
      --t-duration: .15s;
      --t-props: color, background, border, outline, box-shadow, text-shadow, opacity;
    }
    
  `;
};
export default style;
