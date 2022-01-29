const gerarClasses = function(pre,pos, mediaQuery){
  let str = "";

  if(mediaQuery){ str = str+` @media (max-width: ${mediaQuery}) { `; }

  str = str+`
    .${pre}dir-row.flex > [c] {
      display: flex;
      flex-direction: row;
    } 
    .${pre}dir-col.flex > [c] {
      display: flex;
      flex-direction: column;
    }
  `;

  if(mediaQuery){ str = str+`}`;}

  return str;
}

const style = function (props) {
  return `

    ${gerarClasses("", "", false)}
    ${gerarClasses("lg\\:", "", "1199px")}
    ${gerarClasses("md\\:", "", "991px")}
    ${gerarClasses("sm\\:", "", "767px")}
    ${gerarClasses("xs\\:", "", "575px")}


    // A momento, não terá break responsivo
    .break {
      > [c] {
        flex-wrap: wrap;
      }
    }
    .dir-row.flex {
      &.break > [c]{
        margin-right: calc(var(--gap) * -1);
        margin-bottom: calc(var(--gap-br) * -1);

        > [p] {
          margin-right: var(--gap);
          margin-bottom: var(--gap-br);
        }
      }

      &:not(.break) > [c]{
        gap: var(--gap);
      }
    } 
    .dir-col.flex {
      &.break > [c]{
        margin-right: calc(var(--gap) * -1);
        margin-bottom: calc(var(--gap-br) * -1);

        > [p] {
          margin-right: var(--gap);
          margin-bottom: var(--gap-br);
        }
      }
      &:not(.break) > [c]{
        gap: var(--gap);
      }
    }
  `;
};

export default style;