const gerarClasses = function(pre,pos, mediaQuery){
  let str = "";

  if(mediaQuery){ str = str+` @media (max-width: ${mediaQuery}) { `; }

  str = str+`

    .${pre}gap-12 > .slick-slider  {--gap: var(--gap-12) !important; }
    .${pre}gap-11 > .slick-slider  {--gap: var(--gap-11) !important; }
    .${pre}gap-10 > .slick-slider  {--gap: var(--gap-10) !important; }
    .${pre}gap-9 > .slick-slider  {--gap: var(--gap-9) !important; }
    .${pre}gap-8 > .slick-slider  {--gap: var(--gap-8) !important; }
    .${pre}gap-7 > .slick-slider  {--gap: var(--gap-7) !important; }
    .${pre}gap-6 > .slick-slider  {--gap: var(--gap-6) !important; }
    .${pre}gap-5 > .slick-slider  {--gap: var(--gap-5) !important; }
    .${pre}gap-4 > .slick-slider  {--gap: var(--gap-4) !important; }
    .${pre}gap-3 > .slick-slider  {--gap: var(--gap-3) !important; }
    .${pre}gap-2 > .slick-slider  {--gap: var(--gap-2) !important; }
    .${pre}gap-1 > .slick-slider  {--gap: var(--gap-1) !important; }
    
    .${pre}gap-1rem > .slick-slider  {--gap: 1rem !important; }
    .${pre}gap-2rem > .slick-slider  {--gap: 2rem !important; }

    .${pre}gap-none > .slick-slider ,
    .${pre}gap-0 > .slick-slider  {
      --gap: 0px !important;
    }

    .${pre}gap-1\\/4b > .slick-slider { --gap: calc(var(--s) * .25) !important;   }
    .${pre}gap-1\\/3b > .slick-slider { --gap: calc(var(--s) * .333) !important;  }
    .${pre}gap-1\\/2b  > .slick-slider { --gap: calc(var(--s) * .5) !important;    }
    .${pre}gap-3\\/4b > .slick-slider { --gap: calc(var(--s) * .75) !important;   }
    .${pre}gap-1b      > .slick-slider { --gap: var(--s) !important;               }
    .${pre}gap-1\\.25b > .slick-slider { --gap: calc(var(--s) * 1.25) !important;  }
    .${pre}gap-1\\.5b  > .slick-slider { --gap: calc(var(--s) * 1.5) !important;   }
    .${pre}gap-2b      > .slick-slider { --gap: calc(var(--s) * 2) !important;     }
    .${pre}gap-3b      > .slick-slider { --gap: calc(var(--s) * 3) !important;     }


    
    .${pre}gap-br-12 > .slick-slider  {--gap-br: var(--gap-12) !important; }
    .${pre}gap-br-11 > .slick-slider  {--gap-br: var(--gap-11) !important; }
    .${pre}gap-br-10 > .slick-slider  {--gap-br: var(--gap-10) !important; }
    .${pre}gap-br-9 > .slick-slider  {--gap-br: var(--gap-9) !important; }
    .${pre}gap-br-8 > .slick-slider  {--gap-br: var(--gap-8) !important; }
    .${pre}gap-br-7 > .slick-slider  {--gap-br: var(--gap-7) !important; }
    .${pre}gap-br-6 > .slick-slider  {--gap-br: var(--gap-6) !important; }
    .${pre}gap-br-5 > .slick-slider  {--gap-br: var(--gap-5) !important; }
    .${pre}gap-br-4 > .slick-slider  {--gap-br: var(--gap-4) !important; }
    .${pre}gap-br-3 > .slick-slider  {--gap-br: var(--gap-3) !important; }
    .${pre}gap-br-2 > .slick-slider  {--gap-br: var(--gap-2) !important; }
    .${pre}gap-br-1 > .slick-slider  {--gap-br: var(--gap-1) !important; }
    
    .${pre}gap-br-1rem > .slick-slider  {--gap-br: 1rem !important; }
    .${pre}gap-br-2rem > .slick-slider  {--gap-br: 2rem !important; }

    .${pre}gap-br-none > .slick-slider ,
    .${pre}gap-br-0 > .slick-slider  {
      --gap-br: 0px !important;
    }
    
    .${pre}gap-br-1\\/4b > .slick-slider { --gap-br: calc(var(--s) * .25) !important;   }
    .${pre}gap-br-1\\/3b > .slick-slider { --gap-br: calc(var(--s) * .333) !important;  }
    .${pre}gap-br-1\\/2b  > .slick-slider { --gap-br: calc(var(--s) * .5) !important;    }
    .${pre}gap-br-3\\/4b > .slick-slider { --gap-br: calc(var(--s) * .75) !important;   }
    .${pre}gap-br-1b      > .slick-slider { --gap-br: var(--s) !important;               }
    .${pre}gap-br-1\\.25b > .slick-slider { --gap-br: calc(var(--s) * 1.25) !important;  }
    .${pre}gap-br-1\\.5b  > .slick-slider { --gap-br: calc(var(--s) * 1.5) !important;   }
    .${pre}gap-br-2b      > .slick-slider { --gap-br: calc(var(--s) * 2) !important;     }
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

  `;
};
export default style;
