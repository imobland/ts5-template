const gerarClasses = function (pre, mediaQuery) {
  let str = "";

  if (mediaQuery) { str = str + ` @media (max-width: ${mediaQuery}) { `; }

  str = str +`
    .ch-border-join {
      &.${pre}dir-col > [c] > [p]:not(:first-child){
        margin-top: calc( -1 * var(--bdw));
      }
      &.${pre}dir-row > [c] > [p]:not(:first-child){
        margin-left: calc( -1 * var(--bdw));
      }
    }
  `;

  if (mediaQuery) { str = str + `}`; }

  return str;
};

const style = function () {
  //
  let str = `
      
    .ch-border-join {
      > [c]{
        --gap: 0 !important;
        > [p]:hover {
          z-index: 1;
        }
        > [p]:focus {
          z-index: 2;
        }
      }
    }
      
    ${gerarClasses("", false)}  
    ${gerarClasses("lg\\:", "1199px")}
    ${gerarClasses("md\\:", "991px")}
    ${gerarClasses("sm\\:", "767px")}
    ${gerarClasses("xs\\:", "575px")}
  `;
  return str;
};

export default style;
