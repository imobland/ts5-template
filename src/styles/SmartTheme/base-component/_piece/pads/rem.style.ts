
const gerarClasses = function (pre, pos, mediaQuery) {
  let str = "";
  
  if(mediaQuery){ str = str+` @media (max-width: ${mediaQuery}) { `; }

  for (let i = 1; i <= 3; i++){
    str = str+`
      .${pre}pad-${i}rem${pos}    { --pad-l: ${i}rem;  --pad-r: ${i}rem;  --pad-t: ${i}rem;  --pad-b: ${i}rem; }
      .${pre}pad-y-${i}rem${pos}  { --pad-t: ${i}rem;  --pad-b: ${i}rem; }
      .${pre}pad-x-${i}rem${pos}  { --pad-l: ${i}rem;  --pad-r: ${i}rem; }
      .${pre}pad-l-${i}rem${pos}  { --pad-l: ${i}rem;  }
      .${pre}pad-r-${i}rem${pos}  { --pad-r: ${i}rem;  }
      .${pre}pad-t-${i}rem${pos}  { --pad-t: ${i}rem;  }
      .${pre}pad-b-${i}rem${pos}  { --pad-b: ${i}rem;  }
    `;
  }
  
  if(mediaQuery){ str = str+`}`;}

  return str;
}

export default gerarClasses;