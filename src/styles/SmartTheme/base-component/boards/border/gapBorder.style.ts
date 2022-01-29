const gerarClasses = function (pre, mediaQuery) {
  let str = "";

  if (mediaQuery) { str = str + ` @media (max-width: ${mediaQuery}) { `; }

  str = str +`
    .flex.gap-border{
      &.${pre}dir-col > [c] > [p]:not(:last-child):after {
        top: 100%;
        left: 0;
        right: 0;
        border-top: var(--ch-gap-bdw) var(--ch-gap-bdm) hsl( var(--ch-gap-bdh) calc(100% * var(--ch-gap-bds)) calc(100% * var(--ch-gap-bdt)) / var(--ch-gap-bdop));
      }
      &.${pre}dir-row > [c] > [p]:not(:last-child):after {
        left: 100%;
        top: 0;
        bottom: 0;
        border-left: var(--ch-gap-bdw) var(--ch-gap-bdm) hsl( var(--ch-gap-bdh) calc(100% * var(--ch-gap-bds)) calc(100% * var(--ch-gap-bdt)) / var(--ch-gap-bdop));
      }
    }
  `;

  if (mediaQuery) { str = str + `}`; }

  return str;
};

const style = function () {
  //
  let str = `
    
    .flex.gap-border{
      --ch-gap-bdw: var(--bdw);
      --ch-gap-bdm: var(--bdm);
      --ch-gap-bdh: var(--bdh);
      --ch-gap-bds: var(--bds);
      --ch-gap-bdt: var(--bdt);
      --ch-gap-bdop: var(--bdop);

      >[c]{
        --gap: var(--bdw);

        > [p]:not(:last-child):after {
          content: "";
          position: absolute;
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
