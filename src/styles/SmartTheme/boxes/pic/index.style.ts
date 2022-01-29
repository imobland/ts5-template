
const style = function (props) {

  return `
        
    .pic{
      padding-top: var(--pad-t);
      padding-bottom: var(--pad-b);
      padding-right: var(--pad-r);
      padding-left: var(--pad-l);
      
      &:before {
        padding-bottom: 100%;
      }
    }

    .pic.flow {
      width: 100%;

      > [c] {
        align-items: center;
        justify-content: center;
        display: flex;
        position: absolute;
        top: calc( var(--pad-t) + 0px) !important;
        left: calc( var(--pad-b) + 0px) !important;
        bottom: calc( var(--pad-l) + 0px) !important;
        right: calc( var(--pad-r) + 0px) !important;
        min-width: inherit;
        min-height: inherit;

        > * {
          width: 100%;
          height: 100%;
        }
      }
    }

    .pic.crop > [c] {
      overflow:hidden;
    }
  `;
};

export default style;
