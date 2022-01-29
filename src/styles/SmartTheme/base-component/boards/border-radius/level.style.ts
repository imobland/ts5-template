


const gerarClasses = function (pre, pos) {
  const str = `

    .${pre}br-circle${pos} { --br-br: 10000rem ; --br-tl: 10000rem; --br-tr: 10000rem; --br-bl: 10000rem;}

    .${pre}br-0${pos} { --br-br: 0; --br-tl: 0; --br-tr: 0; --br-bl: 0;}
    .${pre}br-1${pos} { --br-br: 3rem; --br-tl: 3rem; --br-tr: 3rem; --br-bl: 3rem;}
    .${pre}br-2${pos} { --br-br: 6rem; --br-tl: 6rem; --br-tr: 6rem; --br-bl: 6rem;}
    .${pre}br-3${pos} { --br-br: 10rem; --br-tl: 10rem; --br-tr: 10rem; --br-bl: 10rem;}
    .${pre}br-4${pos} { --br-br: 15rem; --br-tl: 15rem; --br-tr: 15rem; --br-bl: 15rem;}
    .${pre}br-5${pos} { --br-br: 25rem; --br-tl: 25rem; --br-tr: 25rem; --br-bl: 25rem;}
    .${pre}br-6${pos} { --br-br: 40rem; --br-tl: 40rem; --br-tr: 40rem; --br-bl: 40rem;}
    .${pre}br-7${pos} { --br-br: 60rem; --br-tl: 60rem; --br-tr: 60rem; --br-bl: 60rem;}
    .${pre}br-full${pos} { --br-br: 1000rem; --br-tl: 1000rem; --br-tr: 1000rem; --br-bl: 1000rem;}
    
  
    .${pre}br-tl-0${pos} { --br-tl: 0;}
    .${pre}br-tl-1${pos} { --br-tl: 3rem;}
    .${pre}br-tl-2${pos} { --br-tl: 6rem;}
    .${pre}br-tl-3${pos} { --br-tl: 10rem;}
    .${pre}br-tl-4${pos} { --br-tl: 15rem;}
    .${pre}br-tl-5${pos} { --br-tl: 25rem;}
    .${pre}br-tl-6${pos} { --br-tl: 40rem;}
    .${pre}br-tl-7${pos} { --br-tl: 60rem;}
  
    .${pre}br-tr-0${pos} { --br-tr: 0;}
    .${pre}br-tr-1${pos} { --br-tr: 3rem;}
    .${pre}br-tr-2${pos} { --br-tr: 6rem;}
    .${pre}br-tr-3${pos} { --br-tr: 10rem;}
    .${pre}br-tr-4${pos} { --br-tr: 15rem;}
    .${pre}br-tr-5${pos} { --br-tr: 25rem;}
    .${pre}br-tr-6${pos} { --br-tr: 40rem;}
    .${pre}br-tr-7${pos} { --br-tr: 60rem;}
  
    .${pre}br-br-0${pos} { --br-br: 0;}
    .${pre}br-br-1${pos} { --br-br: 3rem;}
    .${pre}br-br-2${pos} { --br-br: 6rem;}
    .${pre}br-br-3${pos} { --br-br: 10rem;}
    .${pre}br-br-4${pos} { --br-br: 15rem;}
    .${pre}br-br-5${pos} { --br-br: 25rem;}
    .${pre}br-br-6${pos} { --br-br: 40rem;}
    .${pre}br-br-7${pos} { --br-br: 60rem;}
  
    .${pre}br-bl-0${pos} { --br-bl: 0;}
    .${pre}br-bl-1${pos} { --br-bl: 3rem;}
    .${pre}br-bl-2${pos} { --br-bl: 6rem;}
    .${pre}br-bl-3${pos} { --br-bl: 10rem;}
    .${pre}br-bl-4${pos} { --br-bl: 15rem;}
    .${pre}br-bl-5${pos} { --br-bl: 25rem;}
    .${pre}br-bl-6${pos} { --br-bl: 40rem;}
    .${pre}br-bl-7${pos} { --br-bl: 60rem;}
  `
  return str;
};

const style = function (props) {
  //
  let str = `
    ${gerarClasses("", "")}
    ${gerarClasses("h\\:", ":hover")}
    ${gerarClasses("a\\:", ":active")}
  `;
  return str;
};

export default style;
