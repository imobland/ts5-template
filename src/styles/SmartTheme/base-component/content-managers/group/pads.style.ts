

const TransferPads = function(pre,pos, mediaQuery){
  let str = "";

  if(mediaQuery){ str = str+` @media (max-width: ${mediaQuery}) { `; }

  str = str+`
    .transfer.${pre}dir-row > [c] {
      --ch-pad-l: var(--pad-l);
      --ch-pad-r: var(--pad-r);
      --ch-pad-t: var(--pad-t);
      --ch-pad-b: var(--pad-b);
      
      > [p]:first-child {
          --pad-l: var(--ch-pad-l);
      }
      > [p]:last-child {
          --pad-r: var(--ch-pad-r);
      }
      > [p] {
        --pad-t: var(--ch-pad-t);
        --pad-b: var(--ch-pad-b);
      }
    }
    
    .transfer.${pre}dir-col > [c] {
      --ch-pad-l: var(--pad-l);
      --ch-pad-r: var(--pad-r);
      --ch-pad-t: var(--pad-t);
      --ch-pad-b: var(--pad-b);
      
      > [p]:first-child {
          --pad-t: var(--ch-pad-t);
      }
      > [p]:last-child {
          --pad-b: var(--ch-pad-b);
      }
      > [p] {
        --pad-l: var(--ch-pad-l);
        --pad-r: var(--ch-pad-r);
      }
    }
  `;

  if(mediaQuery){ str = str+`}`;}

  return str;
}


const css = function(){

  return `
    ${TransferPads("", "", false)}
    ${TransferPads("lg\\:", "", "1199px")}
    ${TransferPads("md\\:", "", "991px")}
    ${TransferPads("sm\\:", "", "767px")}
    ${TransferPads("xs\\:", "", "575px")}

    /* Anula atributo PADDING do transferidor  */
    .group.transfer {
      padding-top    : 0;
      padding-bottom : 0;
      padding-right  : 0;
      padding-left   : 0;
    }
  `;
}

export default css;