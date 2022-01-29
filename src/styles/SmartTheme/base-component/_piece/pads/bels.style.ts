const medidas = [
  { label: "1\\/4b", val: .25 },
  { label: "1\\/3b", val: .333 },
  { label: "1\\/2b", val: .5 },
  { label: "3\\/4b", val: .75 },
  { label: "1b",     val: 1 },
  { label: "1\\.4b", val: 1.25 },
  { label: "1\\.5b", val: 1.5 },
  { label: "2b",     val: 2 },
  { label: "3b",     val: 3 },
];

const gerarClasses = function (pre, pos, mediaQuery) {
  let str = "";

  if(mediaQuery){ str = str+` @media (max-width: ${mediaQuery}) { `; }

  for (let i in medidas){
    //
    let label= medidas[i].label;
    let val= medidas[i].val;

    str = str+`
      .${pre}pad-${label}${pos}   {--pad-l: calc( var(--s) * ${val}); --pad-r: calc( var(--s) * ${val}); --pad-t: calc( var(--s) * ${val}); --pad-b: calc( var(--s) * ${val}); }
      .${pre}pad-h-${label}${pos} {--pad-l: calc( var(--s) * ${val}); --pad-r: calc( var(--s) * ${val});  }
      .${pre}pad-v-${label}${pos} {--pad-t: calc( var(--s) * ${val}); --pad-b: calc( var(--s) * ${val}); }
      .${pre}pad-l-${label}${pos} {--pad-l: calc( var(--s) * ${val}); }
      .${pre}pad-r-${label}${pos} {--pad-r: calc( var(--s) * ${val}); }
      .${pre}pad-t-${label}${pos} {--pad-t: calc( var(--s) * ${val}); }
      .${pre}pad-b-${label}${pos} {--pad-b: calc( var(--s) * ${val}); }
    `;
  }

  if(mediaQuery){ str = str+`}`;}

  return str;
}

export default gerarClasses;