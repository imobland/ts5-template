
import gerarMedidasBels from "./classes-w-h-bels.style";
import gerarMedidasPercentuais from "./classes-w-h-percentuais.style";
import gerarMedidasViewport from "./classes-w-h-viewports.style";








const style = function (props) {
  return `

  ${gerarMedidasBels("", "", false)}  
  ${gerarMedidasViewport("", "", false)}
  ${gerarMedidasPercentuais("", "", false)}

  ${gerarMedidasBels("lg\\:", "", "1199px")}
  ${gerarMedidasViewport("lg\\:", "", "1199px")}
  ${gerarMedidasPercentuais("lg\\:", "", "1199px")}

  ${gerarMedidasBels("md\\:", "", "991px")}
  ${gerarMedidasViewport("md\\:", "", "991px")}
  ${gerarMedidasPercentuais("md\\:", "", "991px")}

  ${gerarMedidasBels("sm\\:", "", "767px")}
  ${gerarMedidasViewport("sm\\:", "", "767px")}
  ${gerarMedidasPercentuais("sm\\:", "", "767px")}

  ${gerarMedidasBels("xs\\:", "", "575px")}
  ${gerarMedidasViewport("xs\\:", "", "575px")}
  ${gerarMedidasPercentuais("xs\\:", "", "575px")}

    
  `;
};

export default style;
