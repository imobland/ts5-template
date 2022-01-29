
const gerarClasses = function(pre,mediaQuery){
  //
  let str = "";

  if(mediaQuery){ str = str+` @media (max-width: ${mediaQuery}) { `; }

    str = str+`
      .${pre}struct-slider-1 {
        > [c]{
          grid-template-areas:
            ".    main    ."
            "prev main next"
            ".    main    .";
          grid-template-columns: auto minmax(100rem, 100%) auto !important;
          grid-template-rows: auto auto auto !important;
        }
      }
      .${pre}struct-slider-2-left {
        > [c]{
          grid-template-areas:
            ".    main"
            "prev main"
            "next main"
            ".    main";
          grid-template-columns: auto minmax(100rem, 100%) !important;
          grid-template-rows: auto auto auto auto !important;
        }
      }
      .${pre}struct-slider-2-right {
        > [c]{
          grid-template-areas:
            "main .   "
            "main prev"
            "main next"
            "main .   ";
          grid-template-columns: minmax(100rem, 100%) auto !important;
          grid-template-rows: auto auto auto auto !important;
        }
      }
      .${pre}struct-slider-3-top-right {
        > [c]{
          grid-template-areas:
            ".    prev next"
            "main main main";
          grid-template-columns: minmax(100rem, 100%)  1fr  1fr !important;
          grid-template-rows: auto auto !important;
        }
      }
      .${pre}struct-slider-4 {
        > [c]{
          grid-template-areas:
            "main main main main"
            " . prev next .";
          grid-template-columns: 1fr auto auto 1fr !important;
          grid-template-rows: auto auto!important;
        }
      }
    `
  if(mediaQuery){ str = str+`}`;}

  return str;
}


const style = function (props) {

  return `
    ${gerarClasses("", false)}
    ${gerarClasses("md\\:", "991px")}
    ${gerarClasses("sm\\:", "767px")}

    .area-prev{
        grid-area: prev;
    }
    .area-next{
      grid-area: next;
    }
    .area-main{
      grid-area: main;
    }
  `;
};
export default style;