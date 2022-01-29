
const gerarClassesDeAlpha = function (pre, pos) {
  const str = `
    .${pre}sh-op-0${pos}  { --shop: 0;   }
    .${pre}sh-op-5${pos}  { --shop: .05; }
    .${pre}sh-op-10${pos} { --shop: .1;  }
    .${pre}sh-op-15${pos} { --shop: .15; }
    .${pre}sh-op-20${pos} { --shop: .2;  }
    .${pre}sh-op-30${pos} { --shop: .3;  }
    .${pre}sh-op-40${pos} { --shop: .4;  }
    .${pre}sh-op-50${pos} { --shop: .5;  }
    .${pre}sh-op-60${pos} { --shop: .6;  }
    .${pre}sh-op-70${pos} { --shop: .7;  }
    .${pre}sh-op-80${pos} { --shop: .8;  }
    .${pre}sh-op-90${pos} { --shop: .9;  }
    .${pre}sh-op-100${pos}{ --shop: 1;  }
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
