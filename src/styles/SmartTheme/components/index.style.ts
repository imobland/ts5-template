import Cache from "./cache.css";

import Fonts from "./texts/fonts.style";
import Icons from "./icons/index.style";
import Input from "./inputs";
import Pictures from "./pictures/index.style";
import Code from "./code.style";
import Buttons from "./buttons/ElementsPresets.style";

const style = function (props) {
  return `
    ${Fonts(props)}
    ${Icons(props)} 
    ${Input(props)}
    ${Pictures(props)}   
    ${Code(props)} 
    ${Buttons(props)}
  `;
};

const cache = function (props) {  return `  ${Cache(props)}  `};

export {style, cache};