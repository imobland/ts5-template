import {breakpoints, maxContentWidthFromBreakpoint } from "./breakpoints.style";

const gerarClassesCss = function () {
  let str = "";
  let strMaxSizeContent = "";

  for (let key in breakpoints) {
    let bkp = breakpoints[key];

    if (bkp.contentWidth == "expand") {
      strMaxSizeContent = `
      --screen-max-size-content: calc( 100vw  - calc( var(--screen-sangria) * 2rem) );`;
    } else if (bkp.contentWidth == "contract+newSize") {
      strMaxSizeContent = `
      --screen-max-size-content: calc( calc( var(--screen-breakpoint) * 1rem) - calc( var(--screen-sangria) * 2rem) );`;
    } else if (bkp.contentWidth == "contract-only") {
      strMaxSizeContent = `
      --screen-max-size-content: calc( calc( var(--${maxContentWidthFromBreakpoint}-breakpoint) * 1rem) - calc( var(--screen-sangria) * 2rem) );`;
    }

    str = str +
      `
      :root {
        --${key}-breakpoint: ${bkp.size};
      }

      @media (min-width: ${bkp.size}px){

        :root{
          ${strMaxSizeContent}
          --screen-breakpoint: ${bkp.size};
          --screen-sangria: ${bkp.sangria};
          --screen-breakpoint-name: ${key};
        }
        :root:not(.no-scale){
          font-size: ${ bkp.zoom }px !important;
        }
      }
    `;
  }
  return str;
};

const style = function (props) {

  return `

    ${gerarClassesCss()}

    body:not(.without-guideline) .content-w-guideline {
      --pad-l: calc( var(--screen-sangria) * 1rem) !important;
      --pad-r: calc( var(--screen-sangria) * 1rem) !important;

      justify-content: center;

      > [c] {
        max-width: var(--screen-max-size-content);
        min-width: auto !important;
        width: 100% !important;
      }
    }
    
    
  `;
};

export default style;
