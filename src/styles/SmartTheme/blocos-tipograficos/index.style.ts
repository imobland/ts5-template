
import themes from "./themes.style";
import areas from "./areas.style";

const style = function (props) {
  return `
    ${areas(props)}
    ${themes(props)}
  `;
};

export default style;