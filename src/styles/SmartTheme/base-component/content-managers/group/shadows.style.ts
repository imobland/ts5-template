
const css = function(){

  // remove sombra de todos os childs caso o grouper seja boxed 
  return `
    .group {
      &.sect,      
      &.box,
      &.pic,
      &.bel{
        > [c] > [p] {
          --shlvl: 0;
        }
      }
    }
  `;
}

export default css;