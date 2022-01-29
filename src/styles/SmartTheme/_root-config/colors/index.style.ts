// import CoresVarsCss from './smart-colors/_colorSettings.style';

const css = function (props) {

  return `
    :root {
      ${props.ThemeConfig.colors.varsCss}
    }
  `;
};

export default css;


