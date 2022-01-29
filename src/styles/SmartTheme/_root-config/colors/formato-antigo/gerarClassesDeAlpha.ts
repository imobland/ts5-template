
const gerarClassesDeAlpha = function (pre, pos) {
  const str = `
  .${pre}c-op-0${pos} { --c-op: 0; }
  .${pre}c-op-5${pos} { --c-op: .05; }
  .${pre}c-op-10${pos} { --c-op: .1; }
  .${pre}c-op-15${pos} { --c-op: .15; }
  .${pre}c-op-20${pos} { --c-op: .2; }
  .${pre}c-op-30${pos} { --c-op: .3; }
  .${pre}c-op-40${pos} { --c-op: .4; }
  .${pre}c-op-50${pos} { --c-op: .5; }
  .${pre}c-op-60${pos} { --c-op: .6; }
  .${pre}c-op-70${pos} { --c-op: .7; }
  .${pre}c-op-80${pos} { --c-op: .8; }
  .${pre}c-op-90${pos} { --c-op: .9; }
  .${pre}c-op-100${pos} { --c-op: 1; }
  `
  return str;
};

const style = function () {
  //
  let str = `
    ${gerarClassesDeAlpha("", "")}
    ${gerarClassesDeAlpha("hover\\:", ":hover")}
    ${gerarClassesDeAlpha("active\\:", ":active")}
  `;
  return str;
};

export default style;
