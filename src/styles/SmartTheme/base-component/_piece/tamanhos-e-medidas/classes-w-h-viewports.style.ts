import {sizesList} from "../../../_root-config/sizes/sizesList.style";

const gerarClasses = function (pre, pos, mediaQuery) {
  let str = "";

  // Abre media queryes
  if(mediaQuery){ str = str+` @media (max-width: ${mediaQuery}) { `; }

  for (let i = 10; i <= 100; i = i+10){
    str = str+`
    .${pre}min-w-${i}vw${pos} { min-width: ${i}vw; }
    .${pre}max-w-${i}vw${pos} { max-width: ${i}vw; }
    .${pre}min-h-${i}vh${pos} { min-height: ${i}vh; }
    .${pre}max-h-${i}vh${pos} { max-height: ${i}vh; }
    `;
  }

  // Fecha media
  if(mediaQuery){ str = str+`}`;}

  // console.log(str)
  return str;
}

export default gerarClasses;