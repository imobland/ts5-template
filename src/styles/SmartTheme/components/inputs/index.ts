





const style = function (props) {
  
  return `

  [p="input"].bel {
    cursor: pointer;

    height: calc(var(--s) + 2rem + calc( var(--pad-t) * var(--s)) + calc( var(--pad-b) * var(--s)) );
    outline: 0rem solid transparent;

    font-size: var(--s);
    
    border: 0px;
    
    width: 100%;

    padding-top    : var(--pad-t);
    padding-bottom : var(--pad-b);
    padding-right  : var(--pad-r);
    padding-left   : var(--pad-l);

    background: var(--bg-c);
    
    border-radius: var(--br);
    border-top-left-radius: var(--br-tl);
    border-top-right-radius: var(--br-tr);
    border-bottom-left-radius: var(--br-bl);
    border-bottom-right-radius: var(--br-br);

    ::placeholder{
    }
    
    &:focus{
      outline: 5rem solid #08f8;
      --bdh: var(--c1h);
      --bds: var(--c1s);
      --bdt: var(--c1tdef);
      --bgh: var(--c0h);
      --bgs: var(--c0s);
      --bgt: var(--c0tdef);
      --bgop: 1;
      --ct: var(--c0t0);
      --pct: var(--c0t0);
      z-index: 2;
    }
    &:hover {
      z-index: 1;
    }
  }

  .form-dark {
    [p="input"].bel {
      &:focus{
        outline: 5rem solid hsl( var(--c1h) calc(100% * var(--c1s)) calc(100% * var(--c1tdef)) / 30% );
        --bdh: var(--c1h);
        --bds: var(--c1s);
        --bdt: var(--c1tdef);
        --bgh: var(--c4h);
        --bgs: var(--c4s);
        --bgt: var(--c4tdef);
        --bgop: 1;
        --ct: var(--c0t100);
        --pct: var(--c0t100);
      }
    }
  }
  
  `;
};
export default style;
