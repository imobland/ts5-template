const style = function (props) {

  return `
    :root{
      --c: #333;
    }
    [p] {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: stretch;
      align-items: stretch;
      transition-timing-function: var(--t-timing);
      transition-duration: var(--t-duration);
      transition-property: var(--t-props);

      [b] {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        transition-timing-function: var(--t-timing);
        transition-duration: var(--t-duration);
        transition-property: var(--t-props);
      }
      [c] {
        position: relative;
        min-width: 100%;
        min-height: 100%;
        
        // align-self: stretch;
        transition-timing-function: var(--t-timing);
        transition-duration: var(--t-duration);
        transition-property: var(--t-props);
      }

      &:after {
        content: "";
        display: flex;
      }
      &:before {
          content: "";
          display: flex;
      }

      &.content-align-scroll-adjust{
        // Correção de bug com scroll
        align-items: flex-start;
      }
    }


  
  `;
};
export default style;
