import {sizesList} from "../../../_root-config/sizes/sizesList.style";

const gerarClasses = function (pre, pos, mediaQuery) {
  let str = "";
  
  // Abre media queryes
  if(mediaQuery){ str = str+` @media (max-width: ${mediaQuery}) { `; }

  for (let i = 10; i <= 100; i = i+10){
    str = str+`
    .${pre}min-w-${i}p${pos} { min-width: ${i}%; }
    .${pre}max-w-${i}p${pos} { max-width: ${i}%; }
    .${pre}min-h-${i}p${pos} { min-height: ${i}%; }
    .${pre}max-h-${i}p${pos} { max-height: ${i}%; }
    `;
  }

  str = str+`
    .${pre}min-w-1\\/4p${pos} { min-width: 25%; }
    .${pre}max-w-1\\/4p${pos} { max-width: 25%; }
    .${pre}min-h-1\\/4p${pos} { min-height: 25%; }
    .${pre}max-h-1\\/4p${pos} { max-height: 25%; }

    .${pre}min-w-1\\/3p${pos} { min-width: 33.33%; }
    .${pre}max-w-1\\/3p${pos} { max-width: 33.33%; }
    .${pre}min-h-1\\/3p${pos} { min-height: 33.33%; }
    .${pre}max-h-1\\/3p${pos} { max-height: 33.33%; }

    .${pre}min-w-2\\/3p${pos} { min-width: 66.66%; }
    .${pre}max-w-2\\/3p${pos} { max-width: 66.66%; }
    .${pre}min-h-2\\/3p${pos} { min-height: 66.66%; }
    .${pre}max-h-2\\/3p${pos} { max-height: 66.66%; }

    .${pre}min-w-3\\/4p${pos} { min-width: 75%; }
    .${pre}max-w-3\\/4p${pos} { max-width: 75%; }
    .${pre}min-h-3\\/4p${pos} { min-height: 75%; }
    .${pre}max-h-3\\/4p${pos} { max-height: 75%; }
  `;
  
  str = str+`
    .${pre}min-w-auto${pos} { min-width: auto; }
    .${pre}max-w-auto${pos} { max-width: auto; }
    .${pre}min-h-auto${pos} { min-height: auto; }
    .${pre}max-h-auto${pos} { max-height: auto; }
  `;

  // Fecha media
  if(mediaQuery){ str = str+`}`;}

  return str;
}

export default gerarClasses;