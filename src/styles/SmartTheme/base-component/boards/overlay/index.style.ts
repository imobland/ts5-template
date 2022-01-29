
const gerarClasses = function (pre, pos) {
  //
  let str = `

    .${pre}blur-0${pos} { --f-bl: blur(0rem); }
    .${pre}blur-1${pos} { --f-bl: blur(2rem); }
    .${pre}blur-2${pos} { --f-bl: blur(5rem); }
    .${pre}blur-3${pos} { --f-bl: blur(10rem); }
    .${pre}blur-4${pos} { --f-bl: blur(20rem); }

    .${pre}contrast-0${pos}  { --f-con: contrast(0); }
    .${pre}contrast-20${pos}  { --f-con: contrast(0.2); }
    .${pre}contrast-40${pos}  { --f-con: contrast(0.4); }
    .${pre}contrast-60${pos}  { --f-con: contrast(0.6); }
    .${pre}contrast-80${pos}  { --f-con: contrast(0.8); }
    .${pre}contrast-100${pos} { --f-con: contrast(1);   }
    .${pre}contrast-120${pos} { --f-con: contrast(1.2); }
    .${pre}contrast-140${pos} { --f-con: contrast(1.4); }
    .${pre}contrast-160${pos} { --f-con: contrast(1.6); }
    .${pre}contrast-180${pos} { --f-con: contrast(1.8); }
    .${pre}contrast-200${pos} { --f-con: contrast(2);   }
      
    .${pre}brightness-0${pos} { --f-bri: brightness(0); }
    .${pre}brightness-20${pos} { --f-bri: brightness(0.2); }
    .${pre}brightness-40${pos} { --f-bri: brightness(0.4); }
    .${pre}brightness-60${pos} { --f-bri: brightness(0.6); }
    .${pre}brightness-80${pos} { --f-bri: brightness(0.8); }
    .${pre}brightness-100${pos} { --f-bri: brightness(1); }
    .${pre}brightness-120${pos} { --f-bri: brightness(1.2); }
    .${pre}brightness-140${pos} { --f-bri: brightness(1.4); }
    .${pre}brightness-160${pos} { --f-bri: brightness(1.6); }
    .${pre}brightness-180${pos} { --f-bri: brightness(1.8); }
    .${pre}brightness-200${pos} { --f-bri: brightness(2); }
        
    .${pre}saturate-0${pos} { --f-sat: saturate(.0); }
    .${pre}saturate-20${pos} { --f-sat: saturate(.2); }
    .${pre}saturate-40${pos} { --f-sat: saturate(.4); }
    .${pre}saturate-60${pos} { --f-sat: saturate(.6); }
    .${pre}saturate-80${pos} { --f-sat: saturate(.8); }
    .${pre}saturate-100${pos} { --f-sat: saturate(1); }
    .${pre}saturate-120${pos} { --f-sat: saturate(1.2) }
    .${pre}saturate-140${pos} { --f-sat: saturate(1.4); }
    .${pre}saturate-160${pos} { --f-sat: saturate(1.6); }
    .${pre}saturate-180${pos} { --f-sat: saturate(1.8); }
    .${pre}saturate-200${pos} { --f-sat: saturate(2); }

    .${pre}hue-rotate-0${pos} { --f-hue: hue-rotate(0deg); }
    .${pre}hue-rotate-45${pos}  { --f-hue: hue-rotate(45deg); }
    .${pre}hue-rotate-90${pos}  { --f-hue: hue-rotate(90deg); }
    .${pre}hue-rotate-135${pos} { --f-hue: hue-rotate(135deg); }
    .${pre}hue-rotate-180${pos} { --f-hue: hue-rotate(180deg); }
    .${pre}hue-rotate-225${pos} { --f-hue: hue-rotate(225deg); }
    .${pre}hue-rotate-270${pos} { --f-hue: hue-rotate(270deg); }
    .${pre}hue-rotate-315${pos} { --f-hue: hue-rotate(315deg); }

    .${pre}mix-hard-light${pos}  { --mbm: hard-light;  }
    .${pre}mix-color${pos}       { --mbm: color;       }
    .${pre}mix-color-burn${pos}  { --mbm: color-burn;  }
    .${pre}mix-hard-light${pos}  { --mbm: hard-light;  }
    .${pre}mix-hard-light${pos}  { --mbm: hard-light;  }
    .${pre}mix-color-dodge${pos} { --mbm: color-dodge; }
    .${pre}mix-darken${pos}      { --mbm: darken;      }
    .${pre}mix-difference${pos}  { --mbm: difference;  }
    .${pre}mix-exclusion${pos}   { --mbm: exclusion;   }
    .${pre}mix-hue${pos}         { --mbm: hue;         }
    .${pre}mix-lighten${pos}     { --mbm: lighten;     }
    .${pre}mix-luminosity${pos}  { --mbm: luminosity;  }
    .${pre}mix-multiply${pos}    { --mbm: multiply;    }
    .${pre}mix-sf-t-light${pos}  { --mbm: sf-t-light;  }
  `;

  return str;
};

const css = function (props) {

  return `

    :root{
      --f-bl: blur(0rem); 
      --f-con: contrast(1); 
      --f-bri: brightness(1); 
      --f-sat: saturate(1); 
      --f-hue: hue-rotate(0deg); 
    }

    .backdrop-filter {
      backdrop-filter: var(--f-bl) var(--f-con) var(--f-bri) var(--f-sat) var(--f-hue);
    }
    .board-backdrop-filter>[b] {
      backdrop-filter: var(--f-bl) var(--f-con) var(--f-bri) var(--f-sat) var(--f-hue);
    }
    .bevel-backdrop-filter>[b]:after {
      backdrop-filter: var(--f-bl) var(--f-con) var(--f-bri) var(--f-sat) var(--f-hue);
    }
    .content-backdrop-filter>[c] {
      backdrop-filter: var(--f-bl) var(--f-con) var(--f-bri) var(--f-sat) var(--f-hue);
    }

    .filter {
      filter: var(--f-bl) var(--f-con) var(--f-bri) var(--f-sat) var(--f-hue);
    }
    .board-filter > [b]{
      filter: var(--f-bl) var(--f-con) var(--f-bri) var(--f-sat) var(--f-hue);
    }
    .content-filter > [c]{
      filter: var(--f-bl) var(--f-con) var(--f-bri) var(--f-sat) var(--f-hue);
    }
    .mix {     
       mix-blend-mode: var(--mbm);
    }
    .board-mix > [b] {     
       mix-blend-mode: var(--mbm);
    }
    .content-mix > [c] {     
       mix-blend-mode: var(--mbm);
    }
    .bv-mix > [b]:after{     
       mix-blend-mode: var(--mbm);
    }

    ${gerarClasses("", "")}
    ${gerarClasses("h\\:", ":hover")}
    ${gerarClasses("a\\:", ":active")}

  `;
};

export default css;
