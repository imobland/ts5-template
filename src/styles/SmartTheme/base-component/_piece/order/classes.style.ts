
const gerarClasses = function(pre,pos, mediaQuery){

  let str = "";

  // Abre media queryes
  if(mediaQuery){ str = str+` @media (max-width: ${mediaQuery}) { `; }

  str = str+`
  .${pre}order-first {   order: 0; }
    .${pre}order-1 {   order: 1; }
    .${pre}order-2 {   order: 2; }
    .${pre}order-3 {   order: 3; }
    .${pre}order-4 {   order: 4; }
    .${pre}order-5 {   order: 5; }
    .${pre}order-last {   order: 100000; }
  `
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

  `;
};
export default style;
