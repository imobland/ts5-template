import {
  tamanhosMatriz,
  getTamanhosViaTamanhosMatriz,
} from "../../../_root-config/sizes/tamanhosMatriz.style";

// size multiplier serve pra multiplicar o tamanho dos elementos da box: padding, gaps,
// SizeBase serve pra setar Tamanho BASE nos elementos internos
const sizeMetrics = {
  areas: {
    1: {
      baseMetric: 31,
      suggestedSize: 26,
    },
    2: {
      baseMetric: 29,
      suggestedSize: 26,
    },
    3: {
      baseMetric: 27,
      suggestedSize: 25,
    },
    4: {
      baseMetric: 25,
      suggestedSize: 25,
    },
    5: {
      baseMetric: 23,
      suggestedSize: 24,
    },
    6: {
      baseMetric: 21,
      suggestedSize: 24,
    },
  },
};



const gerarSubAreas = function(n, areas) {
  let str = "";

  if( n - 1 in areas){
    str = str+`
      --ams-plus1: ${getTamanhosViaTamanhosMatriz( areas[n - 1].baseMetric )}rem;
      --ss-plus1: ${getTamanhosViaTamanhosMatriz( areas[n - 1].suggestedSize )}rem;
    `;
  }
  if( n - 2 in areas){
    str = str+`
      --ams-plus2: ${getTamanhosViaTamanhosMatriz( areas[n - 2].baseMetric )}rem;
      --ss-plus2: ${getTamanhosViaTamanhosMatriz( areas[n - 2].suggestedSize )}rem;
    `;
  }
  if( n - 3 in areas){
    str = str+`
      --ams-plus3: ${getTamanhosViaTamanhosMatriz( areas[n - 3].baseMetric )}rem;
      --ss-plus3: ${getTamanhosViaTamanhosMatriz( areas[n - 3].suggestedSize )}rem;
    `;
  }
  
  if( (Number(n) + 1) in areas){
    str = str+`
      --ams-less1: ${getTamanhosViaTamanhosMatriz( areas[ Number(n) + 1].baseMetric )}rem;
      --ss-less1: ${getTamanhosViaTamanhosMatriz( areas[ Number(n) + 1].suggestedSize )}rem;
    `;
  }
  if( Number(n) + 2 in areas){
    str = str+`
      --ams-less2: ${getTamanhosViaTamanhosMatriz( areas[ Number(n) + 2].baseMetric )}rem;
      --ss-less2: ${getTamanhosViaTamanhosMatriz( areas[ Number(n) + 2].suggestedSize )}rem;
    `;
  }
  if( Number(n) + 3 in areas){
    str = str+`
      --ams-less3: ${getTamanhosViaTamanhosMatriz( areas[ Number(n) + 3].baseMetric )}rem;
      --ss-less3: ${getTamanhosViaTamanhosMatriz( areas[ Number(n) + 3].suggestedSize )}rem;
    `;
  }

  return str;
}



const gerarClassesAreas = function (pre, mediaQuery) {
  let str = ``;
  const areas = sizeMetrics.areas;

  if (mediaQuery) {
    str = str + ` @media (max-width: ${mediaQuery}) { `;
  }

  for (let n in areas) {

    // AMS: Area Metric Size
    // SS: size Suggested
    str =
      str +
      `
      .${pre}A${n} {
        --ams: ${getTamanhosViaTamanhosMatriz( areas[n].baseMetric )}rem;
        --ss: ${getTamanhosViaTamanhosMatriz( areas[n].suggestedSize )}rem;
        
        --ams-def: ${getTamanhosViaTamanhosMatriz( areas[n].baseMetric )}rem;
        --ss-def: ${getTamanhosViaTamanhosMatriz( areas[n].suggestedSize )}rem;

        ${gerarSubAreas(n,areas)}
      }
    `;
  }

  if (mediaQuery) { str = str + `}`; }

  return str;
};


const gerarClassesSubAreas = function (pre, mediaQuery) {
  let str = ``;

  if (mediaQuery) {  str = str + ` @media (max-width: ${mediaQuery}) { `; }

    // AMS: Area Metric Size
    // SS: size Suggested
  str =
    str +
    `
    .${pre}A3\\/4{
      --ams: var(--ams-less1);
      --ss: var(--ss-less1);
    }
    .${pre}A{
      --ams: var(--ams-def);
      --ss: var(--ss-def);
    }
    .${pre}A1\\/2{
      --ams: var(--ams-less2);
      --ss: var(--ss-less2);
    }
    .${pre}A1\\/4{
      --ams: var(--ams-less3);
      --ss: var(--ss-less3);
    }
    .${pre}A\\+1{
      --ams: var(--ams-plus1);
      --ss: var(--ss-plus1);
    }
    .${pre}A\\+2{
      --ams: var(--ams-plus2);
      --ss: var(--ss-plus2);
    }
    .${pre}A\\+3{
      --ams: var(--ams-plus3);
      --ss: var(--ss-plus3);
    }
  `;

  if (mediaQuery) { str = str + `}`; }

  return str;
};


const style = function (props) {

  return `
  
  /* AREAS  ========================= */
  
  ${gerarClassesAreas("", false)}
  ${gerarClassesAreas("lg\\:", "1199px")}
  ${gerarClassesAreas("md\\:", "991px")}
  ${gerarClassesAreas("sm\\:", "767px")}
  ${gerarClassesAreas("xs\\:", "575px")}


  ${gerarClassesSubAreas("", false)}
  ${gerarClassesSubAreas("lg\\:", "1199px")}
  ${gerarClassesSubAreas("md\\:", "991px")}
  ${gerarClassesSubAreas("sm\\:", "767px")}
  ${gerarClassesSubAreas("xs\\:", "575px")}
  


  /* TAMANHOS VIA AREA SIZES  ========================= */

  .SA    { --s:  var(--ss) !important;    }
  .SA-1  { --s:  calc( var(--ss) / 1.12244 ) !important;    } 
  .SA-2  { --s:  calc( var(--ss) / ${ 1.12244 * 1.12244 } ) !important;    }
  .SA-3  { --s:  calc( var(--ss) / ${ 1.12244 * 1.12244 * 1.12244 } ) !important;    }
  .SA-4  { --s:  calc( var(--ss) / ${ 1.12244 * 1.12244 * 1.12244 * 1.12244 } ) !important;    }
  .SA\\+1 { --s: calc( var(--ss) * 1.12244 ) !important;    }
  .SA\\+2 { --s: calc( var(--ss) * ${ 1.12244 * 1.12244 } ) !important;    }
  .SA\\+3 { --s: calc( var(--ss) * ${ 1.12244 * 1.12244 * 1.12244 } ) !important;    }
  .SA\\+4 { --s: calc( var(--ss) * ${ 1.12244 * 1.12244 * 1.12244 * 1.12244 } ) !important;    }


  `;
};
export default style;