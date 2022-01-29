
import Direcoes from "./direction/directions.style";
import Alinhamentos from "./alinhamentos/classes.style";
import Gaps from "./gaps/classes.style";

import ItensInternos from "./item.style";
// Presets Classes  ex: .flex-block
import ClassesPresets from "./classes-presets.style";

const style = function (props) {
  return `
  ${Direcoes(props)}
  ${Alinhamentos(props)}
  ${Gaps(props)}
  ${ItensInternos(props)}
  ${ClassesPresets(props)}
  `;
  
};


export default style;
