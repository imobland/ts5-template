const style = function (props) {

  return `
    
    [p="icon"] {
      display: flex;
      
      transition-timing-function: var(--t-timing);
      transition-duration: var(--t-duration);
      transition-property: var(--t-props);
      
      overflow: inherit;
      color: 
      hsl( 

          calc( var(--c-h) + var(--cur) )

          var(--c-s) 

          calc( 
              var(--c-l) + 

              calc( 
                  calc( 100% - var(--c-l) ) 
                  * var(--c-t) 
                  ) 
              ) 
              
          / var(--c-op)
      ) ;
      font-size: var(--s);
      height: 1em;
      width: 1em;
      align-items: center;
      justify-content: center;

      &.fill-current{
        fill: currentColor;
      }
      &.stroke-current{
        stroke: currentColor;
      }
    }

    

  `;
};
export default style;
