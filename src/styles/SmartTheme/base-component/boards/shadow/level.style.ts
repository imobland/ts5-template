
const gerarClassesDeAlpha = function (pre, pos) {
  const str = `
    .${pre}sh-lvl-0${pos} { --shlvl: 0 !important; }
    .${pre}sh-lvl-1${pos} { --shlvl: 1 !important; }
    .${pre}sh-lvl-2${pos} { --shlvl: 2 !important; }
    .${pre}sh-lvl-3${pos} { --shlvl: 3 !important; }
    .${pre}sh-lvl-4${pos} { --shlvl: 4 !important; }
    .${pre}sh-lvl-5${pos} { --shlvl: 5 !important; }
    .${pre}sh-lvl-6${pos} { --shlvl: 6 !important; }
  `
  return str;
};

const style = function (props) {
  //
  let str = `
    ${gerarClassesDeAlpha("", "")}
    ${gerarClassesDeAlpha("h\\:", ":hover")}
    ${gerarClassesDeAlpha("a\\:", ":active")}
  `;
  return str;
};

export default style;
