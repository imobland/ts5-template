

import SizesString from "../_root-config/sizes/index.style";

// PIECE ================================================
import Piece from "./_piece/index.style";
// BOARD ================================================
import Boards from "./boards/index.style";
// CONTENT MANAGER ================================================
// Flex
import DisplayFlex from "./content-managers/flex/index.style";
// Grid
import DisplayGrid from "./content-managers/grid/index.style";
// Layer
import Layers from "./content-managers/layer/index.style";
// Group
import Group from "./content-managers/group/index.style";
// Slider Slick
import Slider from "./content-managers/slick-slider/index.style";


const style = function (props) {

  const { sizes } = props.ThemeConfig;

  return `

    ${Boards(props)}


    // Tamanhos Base
    ${SizesString(props)}

    // [P] P-Structure Base 
    ${Piece(props)}
  

    // Controladores de conteudo [C] 
    ${DisplayFlex(props)}
    ${DisplayGrid(props)}
    ${Layers(props)}
    ${Group(props)}
    ${Slider(props)}

  `;
};

import Cache from "./cache.css";
const cache = function (props) {  return ` ${Cache(props)} `};

export {style, cache};