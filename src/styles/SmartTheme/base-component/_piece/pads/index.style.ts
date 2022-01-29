
import gerarPadsBels from "./bels.style";
import gerarPadsPercentuais from "./percent.style";
import gerarPadsRem from "./rem.style";
import gerarPadsTamanhosMatriz from "./escalar.style";


const style = function (props) {

  return `

    ${gerarPadsBels("", "", false)}  
    ${gerarPadsRem("", "", false)}
    ${gerarPadsPercentuais("", "", false)}
    ${gerarPadsTamanhosMatriz("", "", false)}

    ${gerarPadsBels("lg\\:", "", "1199px")}
    ${gerarPadsRem("lg\\:", "", "1199px")}
    ${gerarPadsPercentuais("lg\\:", "", "1199px")}
    ${gerarPadsTamanhosMatriz("lg\\:", "", "1199px")}

    ${gerarPadsBels("md\\:", "", "991px")}
    ${gerarPadsRem("md\\:", "", "991px")}
    ${gerarPadsPercentuais("md\\:", "", "991px")}
    ${gerarPadsTamanhosMatriz("md\\:", "", "991px")}

    ${gerarPadsBels("sm\\:", "", "767px")}
    ${gerarPadsRem("sm\\:", "", "767px")}
    ${gerarPadsPercentuais("sm\\:", "", "767px")}
    ${gerarPadsTamanhosMatriz("sm\\:", "", "767px")}

    ${gerarPadsBels("xs\\:", "", "575px")}
    ${gerarPadsRem("xs\\:", "", "575px")}
    ${gerarPadsPercentuais("xs\\:", "", "575px")}
    ${gerarPadsTamanhosMatriz("xs\\:", "", "575px")}

  `;
};
export default style;
