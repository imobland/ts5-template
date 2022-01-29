// Colors, sizes, device
import { style as RootConfig } from "./_root-config/index.style";
// Reset e App
import Reset from "./reset.style";
import App from "./app.style";
// Componente Base - Piece Board Content-manager
import { style as ComponentBase } from "./base-component/index.style";
// Boxes - Box, Bel, Pic
import { style as Boxes } from "./boxes/index.style";
// Componentes - Elementos, Inputs, images, icones, text, code
import { style as Components } from "./components/index.style";

// Blocos tipograficos
import BlocosTipograficos from "./blocos-tipograficos/index.style";

// ${RootConfig(props)}
// ${Reset(props)}
// ${App(props)}
// ${ComponentBase(props)}
// ${Boxes(props)}
// ${Components(props)}

const style = function (props) {
  return `
  ${RootConfig(props)}
  ${Reset(props)}
  ${App(props)}
  ${Boxes(props)}
  ${ComponentBase(props)}
  ${Components(props)}
  ${BlocosTipograficos(props)}
  
  `;
};

export default style;
