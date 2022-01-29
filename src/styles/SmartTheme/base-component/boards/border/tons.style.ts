
const gerarClassesTom0a100 = function (pre, pos) {
  let str = "";

  for (let i = 0; i <= 100; i = i+5 ) {
    str = str + `
      .${pre}bd-tom-${i}${pos} { 
        --bdt: var(--bdt${i}); 
        --bdtg: var(--bdtg${i}); 
      }
    `;
  }

  return str;
};

const gerarClasses = function (pre, pos) {
  let str = "";

    str = str + `
      .${pre}bd-tom-vibrant${pos} { --bdt: (var(--bds) * var(--bdvibrant)); --bdtg: var(--bdtg50);  }
      .${pre}bd-tom-default${pos} { --bdt: var(--bdtdef); --bdtg: var(--bdtg50); }
      .${pre}bd-tom-l1${pos}      { --bdt: var(--bdtl1);  --bdtg: var(--bdtg75); }
      .${pre}bd-tom-l2${pos}      { --bdt: var(--bdtl2);  --bdtg: var(--bdtg70); }
      .${pre}bd-tom-l3${pos}      { --bdt: var(--bdtl3);  --bdtg: var(--bdtg65); }
      .${pre}bd-tom-l4${pos}      { --bdt: var(--bdtl4);  --bdtg: var(--bdtg60); }
      .${pre}bd-tom-l5${pos}      { --bdt: var(--bdtl5);  --bdtg: var(--bdtg55); }
      .${pre}bd-tom-d1${pos}      { --bdt: var(--bdtd1);  --bdtg: var(--bdtg45); }
      .${pre}bd-tom-d2${pos}      { --bdt: var(--bdtd2);  --bdtg: var(--bdtg40); }
      .${pre}bd-tom-d3${pos}      { --bdt: var(--bdtd3);  --bdtg: var(--bdtg35); }
      .${pre}bd-tom-d4${pos}      { --bdt: var(--bdtd4);  --bdtg: var(--bdtg30); }
      .${pre}bd-tom-d5${pos}      { --bdt: var(--bdtd5);  --bdtg: var(--bdtg25); }
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