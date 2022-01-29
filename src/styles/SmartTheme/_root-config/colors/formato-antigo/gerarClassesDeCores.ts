import getRGBfromHex from './functions/getRGBListFromHex';

const gerarClassesDeUmaCor = function (color, labelColor, sufix, pre, pos) {

  const rgb = getRGBfromHex(color);

  const str = `
    .${pre}${labelColor}${sufix}${pos} {        
        --c: rgba( ${rgb.red}, ${rgb.green}, ${rgb.blue}, var(--c-op)) !important;       
    }
  `
  return str;
};

const gerarClassesDeCores = function (color, labelColor, pre, pos) {
  //
  let str = "";

  for (const key in color) {
    const colorVariant = color[key];

    str = str + `
      ${gerarClassesDeUmaCor(
        colorVariant.color,
        labelColor,
        colorVariant.sufix,
        pre,
        pos
      )}
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
      ${gerarClassesDeCores(cor, labelColor, "", "")}
      ${gerarClassesDeCores(cor, labelColor, "hover\\:", ":hover")}
      ${gerarClassesDeCores(cor, labelColor, "active\\:", ":active")}
    `;
  }

  return str;
};
export default style;
