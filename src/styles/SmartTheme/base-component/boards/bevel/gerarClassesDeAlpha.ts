
const gerarClassesDeAlpha = function (pre, pos) {
  const str = `
    .${pre}bv-op-0${pos}  { --bvop: 0;   }
    .${pre}bv-op-5${pos}  { --bvop: .05; }
    .${pre}bv-op-10${pos} { --bvop: .1;  }
    .${pre}bv-op-15${pos} { --bvop: .15; }
    .${pre}bv-op-20${pos} { --bvop: .2;  }
    .${pre}bv-op-30${pos} { --bvop: .3;  }
    .${pre}bv-op-40${pos} { --bvop: .4;  }
    .${pre}bv-op-50${pos} { --bvop: .5;  }
    .${pre}bv-op-60${pos} { --bvop: .6;  }
    .${pre}bv-op-70${pos} { --bvop: .7;  }
    .${pre}bv-op-80${pos} { --bvop: .8;  }
    .${pre}bv-op-90${pos} { --bvop: .9;  }
    .${pre}bv-op-100${pos}{ --bvop: 1;  }
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
