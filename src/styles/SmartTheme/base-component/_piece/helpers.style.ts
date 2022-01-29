
// 
const gerarClassesPrincipais = function (pre, pos, mediaQuery) {

  let str = ``;

  // Abre media queryes
  if(mediaQuery){ str = str+` @media (max-width: ${mediaQuery}) { `; }

  str = str+`
    .${pre}nowrap {
      white-space: nowrap;
    } 
    .${pre}overflow-ellipsis > [c]{
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .${pre}overflow-hidden {
      overflow: hidden;
    }
    .${pre}content-overflow-hidden > [c]{
      overflow: hidden;
    }

    .${pre}hidden {
      display:none !important;
    }
    .${pre}break-word>[c] {
      word-break: break-word;
    }

    .${pre}z-0{ z-index: 0; }
    .${pre}z-1{ z-index: 1; }
    .${pre}z-2{ z-index: 2; }
    .${pre}z-3{ z-index: 3; }
    .${pre}z-4{ z-index: 4; }
  `;

  // Fecha media
  if(mediaQuery){ str = str+`}`;}

  return str;
}

const style = function (props) {

  return `
    ${gerarClassesPrincipais("", "", false)}
    ${gerarClassesPrincipais("lg\\:", "", "1199px")}
    ${gerarClassesPrincipais("md\\:", "", "991px")}
    ${gerarClassesPrincipais("sm\\:", "", "767px")}
    ${gerarClassesPrincipais("xs\\:", "", "575px")}

    [p].transition-none {
      transition: none;
    }
    .pointer-events-none{
      pointer-events: none;
    }
    .pointer-events-all{
      pointer-events: all;
    }

    .w-auto {
      width: auto;
    }
    .inline{
      display: inline !important; 
    }
  `;
};
export default style;
