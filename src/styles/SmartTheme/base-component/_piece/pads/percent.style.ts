
const gerarClasses = function (pre, pos, mediaQuery) {
  let str = "";
  
  // Abre media queryes
  if(mediaQuery){ str = str+` @media (max-width: ${mediaQuery}) { `; }

  for (let i = 5; i <= 30; i = i+5){
    str = str+`
      .${pre}pad-${i}p${pos}    { --pad-l: ${i}%;  --pad-r: ${i}%;  --pad-t: ${i}%;  --pad-b: ${i}%; }
      .${pre}pad-y-${i}p${pos}  { --pad-t: ${i}%;  --pad-b: ${i}%; }
      .${pre}pad-x-${i}p${pos}  { --pad-l: ${i}%;  --pad-r: ${i}%; }
      .${pre}pad-l-${i}p${pos}  { --pad-l: ${i}%;  }
      .${pre}pad-r-${i}p${pos}  { --pad-r: ${i}%;  }
      .${pre}pad-t-${i}p${pos}  { --pad-t: ${i}%;  }
      .${pre}pad-b-${i}p${pos}  { --pad-b: ${i}%;  }
    `;
  }
  
  // Fecha media
  if(mediaQuery){ str = str+`}`;}

  return str;
}

export default gerarClasses;