
import gerarPadsBels from "./bels.style";

const style = function (props) {

  return `

    .offset-pads {
      --opad-l: 0;
      --opad-t: 0;
      --opad-r: 0;
      --opad-b: 0;
      padding-top: var(--opad-t);
      padding-bottom: var(--opad-b);
      padding-right: var(--opad-r);
      padding-left: var(--opad-l);
      > [b] {
        margin-top: var(--opad-t);
        margin-bottom: var(--opad-b);
        margin-right: var(--opad-r);
        margin-left: var(--opad-l);
      }
      > [c] { 
        padding-top: var(--pad-t);
        padding-bottom: var(--pad-b);
        padding-right: var(--pad-r);
        padding-left: var(--pad-l);
      }
    }

    ${gerarPadsBels("", "", false)}  
    ${gerarPadsBels("lg\\:", "", "1199px")}
    ${gerarPadsBels("md\\:", "", "991px")}
    ${gerarPadsBels("sm\\:", "", "767px")}
    ${gerarPadsBels("xs\\:", "", "575px")}

  `;
};
export default style;
