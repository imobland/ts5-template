const gerarClasses = function(pre,pos, mediaQuery){
  let str = "";

  if(mediaQuery){ str = str+` @media (max-width: ${mediaQuery}) { `; }

  str = str+`

    .${pre}gap-12 > [c] {--gap: var(--gap-12) !important; }
    .${pre}gap-11 > [c] {--gap: var(--gap-11) !important; }
    .${pre}gap-10 > [c] {--gap: var(--gap-10) !important; }
    .${pre}gap-9 > [c] {--gap: var(--gap-9) !important; }
    .${pre}gap-8 > [c] {--gap: var(--gap-8) !important; }
    .${pre}gap-7 > [c] {--gap: var(--gap-7) !important; }
    .${pre}gap-6 > [c] {--gap: var(--gap-6) !important; }
    .${pre}gap-5 > [c] {--gap: var(--gap-5) !important; }
    .${pre}gap-4 > [c] {--gap: var(--gap-4) !important; }
    .${pre}gap-3 > [c] {--gap: var(--gap-3) !important; }
    .${pre}gap-2 > [c] {--gap: var(--gap-2) !important; }
    .${pre}gap-1 > [c] {--gap: var(--gap-1) !important; }
    
    .${pre}gap-1rem > [c] {--gap: 1rem !important; }
    .${pre}gap-2rem > [c] {--gap: 2rem !important; }

    .${pre}gap-none > [c],
    .${pre}gap-0 > [c] {
      --gap: 0px !important;
    }

    .${pre}gap-1\\/4b > [c]{ --gap: calc(var(--s) * .25) !important;   }
    .${pre}gap-1\\/3b > [c]{ --gap: calc(var(--s) * .333) !important;  }
    .${pre}gap-1\\/2b  > [c]{ --gap: calc(var(--s) * .5) !important;    }
    .${pre}gap-3\\/4b > [c]{ --gap: calc(var(--s) * .75) !important;   }
    .${pre}gap-1b      > [c]{ --gap: var(--s) !important;               }
    .${pre}gap-1\\.25b > [c]{ --gap: calc(var(--s) * 1.25) !important;  }
    .${pre}gap-1\\.5b  > [c]{ --gap: calc(var(--s) * 1.5) !important;   }
    .${pre}gap-2b      > [c]{ --gap: calc(var(--s) * 2) !important;     }
    .${pre}gap-3b      > [c]{ --gap: calc(var(--s) * 3) !important;     }


    
    .${pre}gap-br-12 > [c] {--gap-br: var(--gap-12) !important; }
    .${pre}gap-br-11 > [c] {--gap-br: var(--gap-11) !important; }
    .${pre}gap-br-10 > [c] {--gap-br: var(--gap-10) !important; }
    .${pre}gap-br-9 > [c] {--gap-br: var(--gap-9) !important; }
    .${pre}gap-br-8 > [c] {--gap-br: var(--gap-8) !important; }
    .${pre}gap-br-7 > [c] {--gap-br: var(--gap-7) !important; }
    .${pre}gap-br-6 > [c] {--gap-br: var(--gap-6) !important; }
    .${pre}gap-br-5 > [c] {--gap-br: var(--gap-5) !important; }
    .${pre}gap-br-4 > [c] {--gap-br: var(--gap-4) !important; }
    .${pre}gap-br-3 > [c] {--gap-br: var(--gap-3) !important; }
    .${pre}gap-br-2 > [c] {--gap-br: var(--gap-2) !important; }
    .${pre}gap-br-1 > [c] {--gap-br: var(--gap-1) !important; }
    
    .${pre}gap-br-1rem > [c] {--gap-br: 1rem !important; }
    .${pre}gap-br-2rem > [c] {--gap-br: 2rem !important; }

    .${pre}gap-br-none > [c],
    .${pre}gap-br-0 > [c] {
      --gap-br: 0px !important;
    }
    
    .${pre}gap-br-1\\/4b > [c]{ --gap-br: calc(var(--s) * .25) !important;   }
    .${pre}gap-br-1\\/3b > [c]{ --gap-br: calc(var(--s) * .333) !important;  }
    .${pre}gap-br-1\\/2b  > [c]{ --gap-br: calc(var(--s) * .5) !important;    }
    .${pre}gap-br-3\\/4b > [c]{ --gap-br: calc(var(--s) * .75) !important;   }
    .${pre}gap-br-1b      > [c]{ --gap-br: var(--s) !important;               }
    .${pre}gap-br-1\\.25b > [c]{ --gap-br: calc(var(--s) * 1.25) !important;  }
    .${pre}gap-br-1\\.5b  > [c]{ --gap-br: calc(var(--s) * 1.5) !important;   }
    .${pre}gap-br-2b      > [c]{ --gap-br: calc(var(--s) * 2) !important;     }
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
