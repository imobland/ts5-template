const gerarClasses = function (pre, mediaQuery) {
  let str = "";

  if (mediaQuery) { str = str + ` @media (max-width: ${mediaQuery}) { `; }

  str = str +`
    .${pre}bv-dir-b{  --bvl-deg: 0deg;  }
    .${pre}bv-dir-bl{  --bvl-deg: 45deg;  }
    .${pre}bv-dir-l{  --bvl-deg: 90deg;  }
    .${pre}bv-dir-tl{  --bvl-deg: 135deg;  }
    .${pre}bv-dir-t{  --bvl-deg: 180deg;  }
    .${pre}bv-dir-tr{  --bvl-deg: 225deg;  }
    .${pre}bv-dir-r{  --bvl-deg: 270deg;  }
    .${pre}bv-dir-br{  --bvl-deg: 315deg;  }
  `;

  if (mediaQuery) { str = str + `}`; }

  return str;
};

const style = function (props) {
  //
  let str = `
    ${gerarClasses("", false)}  
    ${gerarClasses("lg\\:", "1199px")}
    ${gerarClasses("md\\:", "991px")}
    ${gerarClasses("sm\\:", "767px")}
    ${gerarClasses("xs\\:", "575px")}
  `;
  return str;
};

export default style;
