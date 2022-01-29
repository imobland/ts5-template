
const gerarClassesTom0a100 = function (pre, pos) {
  let str = "";

  for (let i = 0; i <= 100; i = i+5 ) {
    str = str + `
      .${pre}bg-tom-${i}${pos} { 
        --bgt: var(--bgt${i}); 
        --bgtg: var(--bgtg${i}); 
      }
    `;
  }

  return str;
};

const gerarClasses = function (pre, pos) {
  let str = "";

    str = str + `
      .${pre}bg-tom-vibrant${pos} { --bgt: (var(--bgs) * var(--bgvibrant)); --bgtg: var(--bgtg50);  }
      .${pre}bg-tom-default${pos} { --bgt: var(--bgtdef); --bgtg: var(--bgtg50); }
      .${pre}bg-tom-l1${pos}      { --bgt: var(--bgtl1);  --bgtg: var(--bgtg75); }
      .${pre}bg-tom-l2${pos}      { --bgt: var(--bgtl2);  --bgtg: var(--bgtg70); }
      .${pre}bg-tom-l3${pos}      { --bgt: var(--bgtl3);  --bgtg: var(--bgtg65); }
      .${pre}bg-tom-l4${pos}      { --bgt: var(--bgtl4);  --bgtg: var(--bgtg60); }
      .${pre}bg-tom-l5${pos}      { --bgt: var(--bgtl5);  --bgtg: var(--bgtg55); }
      .${pre}bg-tom-d1${pos}      { --bgt: var(--bgtd1);  --bgtg: var(--bgtg45); }
      .${pre}bg-tom-d2${pos}      { --bgt: var(--bgtd2);  --bgtg: var(--bgtg40); }
      .${pre}bg-tom-d3${pos}      { --bgt: var(--bgtd3);  --bgtg: var(--bgtg35); }
      .${pre}bg-tom-d4${pos}      { --bgt: var(--bgtd4);  --bgtg: var(--bgtg30); }
      .${pre}bg-tom-d5${pos}      { --bgt: var(--bgtd5);  --bgtg: var(--bgtg25); }
    `;

  return str;
};



const css = function (props) {

  return `
    ${gerarClassesTom0a100("", "")}
    ${gerarClassesTom0a100("h\\:", ":hover")}
    ${gerarClassesTom0a100("a\\:", ":active")}

    ${gerarClasses("", "")}
    ${gerarClasses("h\\:", ":hover")}
    ${gerarClasses("a\\:", ":active")}
  `;
};

export default css;