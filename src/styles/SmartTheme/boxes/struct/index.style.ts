
const style = function (props) {
  
  return `

    [p=struct]:not(.box):not(.sect):not(.bel) > [c]{
      --gap: calc( var(--s) * .8 );
    }


    .pad {
      --pad-l: 0;
      --pad-r: 0;
      --pad-t: 0;
      --pad-b: 0;
      padding-top    : var(--pad-t);
      padding-bottom : var(--pad-b);
      padding-right  : var(--pad-r);
      padding-left   : var(--pad-l);
    }
    .pad-in-content {
      padding-top: 0;
      padding-bottom: 0;
      padding-right: 0;
      padding-left: 0;
      > [c] { 
        padding-top: var(--pad-t);
        padding-bottom: var(--pad-b);
        padding-right: var(--pad-r);
        padding-left: var(--pad-l);
      }
    }
  `;
};
export default style;