import Shadows from "./shadows.style";
import Radius from "./radius.style";
import Pads from "./pads.style";
import InnerPads from "./innerPads.style";
import Gaps from "./gaps.style";
import Pill from "./pill.style";

const style = function (props) {
  return `
    ${Radius()}
    ${Shadows()}
    ${Pads()}
    ${InnerPads()}
    ${Gaps()}
    ${Pill()}
  `;
};
export default style;
