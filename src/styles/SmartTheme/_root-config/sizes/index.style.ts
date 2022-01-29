
// VARS CSS 
// --s: 16rem;
import {style as sizesCssVars} from "./sizesList.style";
// --pad-12: 88rem;
import padsCssVars from "./varsPadsBase.style";
// --gap-8: 56.95rem;
import gapsCssVars from "./varsGapsBase.style";
// --b-radius-1: 16px
import radiusCssVars from "./radius.style";

const style = function (props) {
  return `
    ${sizesCssVars(props)}
    ${padsCssVars()};
    ${gapsCssVars()};
    ${radiusCssVars(props)};
  `;
};

export default style;