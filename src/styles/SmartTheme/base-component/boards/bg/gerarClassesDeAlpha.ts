
const gerarClassesDeAlpha = function (pre, pos) {
  const str = `
    .${pre}bg-op-0${pos} { --bgop: 0; }
    .${pre}bg-op-5${pos} { --bgop: .05; }
    .${pre}bg-op-10${pos} { --bgop: .1; }
    .${pre}bg-op-15${pos} { --bgop: .15; }
    .${pre}bg-op-20${pos} { --bgop: .2; }
    .${pre}bg-op-30${pos} { --bgop: .3; }
    .${pre}bg-op-40${pos} { --bgop: .4; }
    .${pre}bg-op-50${pos} { --bgop: .5; }
    .${pre}bg-op-60${pos} { --bgop: .6; }
    .${pre}bg-op-70${pos} { --bgop: .7; }
    .${pre}bg-op-80${pos} { --bgop: .8; }
    .${pre}bg-op-90${pos} { --bgop: .9; }
    .${pre}bg-op-100${pos} { --bgop: 1; }
  `
  return str;
};

const style = function () {
  //
  let str = `
    ${gerarClassesDeAlpha("", "")}
    ${gerarClassesDeAlpha("h\\:", ":hover")}
    ${gerarClassesDeAlpha("a\\:", ":active")}
  `;
  return str;
};

export default style;
