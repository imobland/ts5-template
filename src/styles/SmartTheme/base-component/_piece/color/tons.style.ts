
const gerarClassesTom0a100 = function (pre, pos) {
  let str = "";

  for (let i = 0; i <= 100; i = i+5 ) {
    str = str + `
      .${pre}c-tom-${i}${pos} { 
        --ct: var(--ct${i}); 
        --ctg: var(--ctg${i}); 
      }
    `;
  }

  return str;
};

const gerarClasses = function (pre, pos) {
  let str = "";

    str = str + `
      .${pre}c-tom-vibrant${pos} { --ct: (var(--cs) * var(--cvibrant)); --ctg: var(--ctg50);  }
      .${pre}c-tom-default${pos} { --ct: var(--ctdef); --ctg: var(--ctg50); }
      .${pre}c-tom-l1${pos}      { --ct: var(--ctl1);  --ctg: var(--ctg75); }
      .${pre}c-tom-l2${pos}      { --ct: var(--ctl2);  --ctg: var(--ctg70); }
      .${pre}c-tom-l3${pos}      { --ct: var(--ctl3);  --ctg: var(--ctg65); }
      .${pre}c-tom-l4${pos}      { --ct: var(--ctl4);  --ctg: var(--ctg60); }
      .${pre}c-tom-l5${pos}      { --ct: var(--ctl5);  --ctg: var(--ctg55); }
      .${pre}c-tom-d1${pos}      { --ct: var(--ctd1);  --ctg: var(--ctg45); }
      .${pre}c-tom-d2${pos}      { --ct: var(--ctd2);  --ctg: var(--ctg40); }
      .${pre}c-tom-d3${pos}      { --ct: var(--ctd3);  --ctg: var(--ctg35); }
      .${pre}c-tom-d4${pos}      { --ct: var(--ctd4);  --ctg: var(--ctg30); }
      .${pre}c-tom-d5${pos}      { --ct: var(--ctd5);  --ctg: var(--ctg25); }
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