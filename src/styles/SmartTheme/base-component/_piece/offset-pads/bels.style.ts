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
      .${pre}opad-l-${label}${pos} {--opad-l: calc( var(--s) * ${val}); }
      .${pre}opad-r-${label}${pos} {--opad-r: calc( var(--s) * ${val}); }
      .${pre}opad-t-${label}${pos} {--opad-t: calc( var(--s) * ${val}); }
      .${pre}opad-b-${label}${pos} {--opad-b: calc( var(--s) * ${val}); }
    `;
  }

  if(mediaQuery){ str = str+`}`;}

  return str;
}

export default gerarClasses;