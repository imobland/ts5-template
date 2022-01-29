const gerarVarsDeUmaCor = function (color, labelColor, sufix) {
  return `
    --${labelColor}${sufix}: ${color};       
  `;
};

const gerarVarsDeCores = function (color, labelColor) {
  //
  let str = "";

  for (const key in color) {
    const colorVariant = color[key];

    str =
      str +
      `
      ${gerarVarsDeUmaCor(colorVariant.color, labelColor, colorVariant.sufix)}
    `;
  }

  return str;
};

const style = function (listaDeCores) {
  //
  let str = "";

  for (const labelColor in listaDeCores) {
    //
    const cor = listaDeCores[labelColor];

    str =
      str +
      `
      ${gerarVarsDeCores(cor, labelColor)}
    `;
  }

  return str;
};
export default style;
