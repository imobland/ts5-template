
import Structs from "./structs.style";

const gerarClasses = function(pre,pos, mediaQuery){

  let str = "";

  // Abre media queryes
  if(mediaQuery){ str = str+` @media (max-width: ${mediaQuery}) { `; }

  str = str+`


    // Grid uni direcional
    .${pre}grid > [c] {
    }
    .${pre}grid.dir-row > [c] {
      --grid-template-cols: none;
    }
    .${pre}grid.dir-col > [c] {
      --grid-template-rows: none;
    }

    // GAPS em Grid uni direcional
    .${pre}grid.dir-row > [c] {
      --gap-x: var(--gap);
      --gap-y: none;
    }
    .${pre}grid.dir-col > [c] {
      --gap-x: none;
      --gap-y: var(--gap);
    }

    .grid[class*=" ${pre}gap-br"] > [c] {
      --gap-y: var(--gap-br);
    }

    // Gera cols / rows por numero + Tamanho fracionado por igual
    .grid[class*=" ${pre}cols-"] > [c] {
      --grid-template-cols: repeat(var(--cols), minmax(0, 1fr));  
    }
    .grid[class*=" ${pre}rows-"] > [c] {
      --grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
    }
  `

  for( let i=1; i<=12; i++){
      str = str+`
      .grid.${pre}cols-${i} { 
        --cols: ${i}; 
      }`;
  }

  for( let i=1; i<=12; i++){
      str = str+`
      .grid.${pre}rows-${i} { 
        --rows: ${i}; 
      }`;
  }

  for( let i=1; i<=12; i++){
    str = str+`
      .${pre}col-span-${i} {
        grid-column: span ${i}; 
      }
    `;
  }

  for( let i=1; i<=12; i++){
    str = str+`
      .${pre}row-span-${i} {
        grid-row: span ${i}; 
      }
    `;
  }

  

  // Fecha media
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

    ${Structs(props)}

    .grid {
      > [c] {
        --grid-template-cols: auto;
        --grid-template-rows: auto;
        --gap-x: var(--gap);
        --gap-y: var(--gap);

        display: grid;
        column-gap: var(--gap-x);
        row-gap: var(--gap-y);
        grid-template-columns: var(--grid-template-cols);
        grid-template-rows: var(--grid-template-rows);
      }
    }
  `;

};
export default style;
