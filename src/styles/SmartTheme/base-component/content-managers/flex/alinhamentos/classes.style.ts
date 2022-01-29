
const gerarClasses = function(pre,pos, mediaQuery){

  let str = "";

  // Abre media queryes
  if(mediaQuery){ str = str+` @media (max-width: ${mediaQuery}) { `; }

  str = str+`
    .${pre}center {   align-self: center; }
    .${pre}stretch {  align-self: stretch; }

    .${pre}align-start > [c] { align-items: flex-start;}
    .${pre}align-center > [c] { align-items: center;}
    .${pre}align-end > [c] { align-items: flex-end;}
    .${pre}align-stretch > [c] { align-items: stretch;}

    .${pre}justify-start > [c] { justify-content: flex-start;}
    .${pre}justify-center > [c] { justify-content: center;}
    .${pre}justify-end > [c] { justify-content: flex-end;}
    .${pre}justify-between > [c] { justify-content: space-between;}
    .${pre}justify-evenly > [c] { justify-content: space-evenly;}
    .${pre}justify-around > [c] { justify-content: space-around;}

    .${pre}align-content-start > [c] { align-content: flex-start; }
    .${pre}align-content-center > [c] { align-content: center; }
    .${pre}align-content-end > [c] { align-content: flex-end; }
    .${pre}align-content-stretch > [c] { align-content: stretch; }
    .${pre}align-content-between > [c] { align-content: space-between; }
    .${pre}align-content-evenly > [c] { align-content: space-evenly; }
    .${pre}align-content-around > [c] { align-content: space-around; }

    .${pre}text-align-right {  text-align: right;}
    .${pre}text-align-left  {  text-align: left;}
    .${pre}text-align-center { text-align: center;}
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
