
const gerarClasses = function (pre, pos) {
  let str = "";

  str = str + `
    .${pre}bg-m-t-0${pos} > [b]{ margin-top: 0; }
    .${pre}bg-m-t-1b${pos} > [b]{ margin-top: var(--s); }
    .${pre}bg-m-t-2b${pos} > [b]{ margin-top: calc( var(--s) * 2); }
    .${pre}bg-m-t-3b${pos} > [b]{ margin-top: calc( var(--s) * 3); }
    .${pre}bg-m-t-4b${pos} > [b]{ margin-top: calc( var(--s) * 4); }
    .${pre}bg-m-t-5b${pos} > [b]{ margin-top: calc( var(--s) * 5); }    
  `;

  return str;
};

const css = function (props) {

  const str =  `
    ${gerarClasses("", "")}
    ${gerarClasses("h\\:", ":hover")}
    ${gerarClasses("a\\:", ":active")} 
  `;

  return str;
};

export default css;