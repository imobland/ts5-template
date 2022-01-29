import Structs from "./struct/index.style";
import Sects from "./sect/index.style";
import Boxes from "./box/index.style";
import {style as Bels} from "./bel/index.style";
import Pics from "./pic/index.style";

const style = function (props) {
  return `
    ${Sects(props)}
    ${Boxes(props)}
    ${Bels(props)}
    ${Pics(props)}
    
    ${Structs(props)}
  `;
};

import Cache from "./cache.css";
const cache = function (props) {  return `  ${Cache(props)}  `};

export {style, cache};