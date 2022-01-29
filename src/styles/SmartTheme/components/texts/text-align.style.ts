const gerarClasses = function (pre, pos, mediaQuery) {

  let str = "";

  if(mediaQuery){ str = str+` @media (max-width: ${mediaQuery}) { `; }

  str = str+`
    .${pre}text-align-center${pos}  { text-align: center;  }
    .${pre}text-align-justify${pos} { text-align: justify; }
    .${pre}text-align-left${pos}    { text-align: left;    }
    .${pre}text-align-right${pos}   { text-align: right;   }
  `;

  if(mediaQuery){ str = str+`}`;}

  return str;
}

export default gerarClasses;