
import gerarVariacoesDeCores from './functions/gerarVariacoesDeCores';

// import gerarVarsCssDeCores from './gerarVarsCssDeCores'
// ${gerarVarsCssDeCores(listaDeCores)}

const css = function (props) {

  const listaDeCores = gerarVariacoesDeCores( props.ThemeConfig.colors );

  return `
    :root {
      
    }
  `;
};

export default css;


