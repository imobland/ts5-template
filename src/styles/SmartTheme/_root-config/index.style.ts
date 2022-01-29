import Colors from "./colors/index.style";
import Sizes from "./sizes/index.style";
import Device from "./device/index.style";

const style = function (props) {
  return `
  ${Sizes(props)}
  ${Colors(props)}
  ${Device(props)}
  `
};

import Cache from "./cache.css";
const cache = function (props) {  return `  ${Cache(props)}  `};

export {style, cache};
