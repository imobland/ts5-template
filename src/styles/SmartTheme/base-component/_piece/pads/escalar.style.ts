
const gerarClasses = function (pre, pos, mediaQuery) {
  let str = "";
  
  if(mediaQuery){ str = str+` @media (max-width: ${mediaQuery}) { `; }

  for (let i = 0; i <= 12; i++){
    str = str+`
      .${pre}pad-${i}${pos}   {--pad-t : var(--pad-${i}); --pad-b : var(--pad-${i}); --pad-l : var(--pad-${i}); --pad-r : var(--pad-${i}); }
      .${pre}pad-h-${i}${pos} {--pad-l : var(--pad-${i}); --pad-r : var(--pad-${i}); }
      .${pre}pad-v-${i}${pos} {--pad-t : var(--pad-${i}); --pad-b : var(--pad-${i}); }
      .${pre}pad-l-${i}${pos} {--pad-l : var(--pad-${i}) }
      .${pre}pad-r-${i}${pos} {--pad-r : var(--pad-${i}) }
      .${pre}pad-t-${i}${pos} {--pad-t : var(--pad-${i}) }
      .${pre}pad-b-${i}${pos} {--pad-b : var(--pad-${i}) }
    `;
  }

  if(mediaQuery){ str = str+`}`;}

  return str;
}

export default gerarClasses;
