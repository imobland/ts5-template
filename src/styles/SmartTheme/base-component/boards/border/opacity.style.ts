
const gerarClassesDeAlpha = function (pre, pos) {
  const str = `
    .${pre}bd-op-0${pos} { --bdop: 0; }
    .${pre}bd-op-5${pos} { --bdop: .05; }
    .${pre}bd-op-10${pos} { --bdop: .1; }
    .${pre}bd-op-15${pos} { --bdop: .15; }
    .${pre}bd-op-20${pos} { --bdop: .2; }
    .${pre}bd-op-30${pos} { --bdop: .3; }
    .${pre}bd-op-40${pos} { --bdop: .4; }
    .${pre}bd-op-50${pos} { --bdop: .5; }
    .${pre}bd-op-60${pos} { --bdop: .6; }
    .${pre}bd-op-70${pos} { --bdop: .7; }
    .${pre}bd-op-80${pos} { --bdop: .8; }
    .${pre}bd-op-90${pos} { --bdop: .9; }
    .${pre}bd-op-100${pos} { --bdop: 1; }
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
