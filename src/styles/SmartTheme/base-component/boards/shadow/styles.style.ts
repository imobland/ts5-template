const css = function (props) {
  return `
    
    .shadow.sh-style-1 {
      --sh-style: calc( 4rem * var(--shlvl) ) calc( 6rem * var(--shlvl) ) calc( 16rem * var(--shlvl) );
    } 
    .shadow.sh-style-2 {
      --sh-style: calc( -4rem * var(--shlvl) ) calc( -6rem * var(--shlvl) ) calc( 16rem * var(--shlvl) );
    }
    .shadow.sh-style-3 {
      --sh-style: calc( 3rem * var(--shlvl) ) calc( 3rem * var(--shlvl) ) calc( 0rem * var(--shlvl) ) calc( 1rem * var(--shlvl) );
    }

  `;
};

export default css;
