
const gerarClassesTom0a100 = function (pre, pos) {
  let str = "";

  for (let i = 0; i <= 100; i = i+5 ) {
    str = str + `
      .${pre}bv-tom-${i}${pos} { 
        --bvt: var(--bvt${i}); 
        --bvtg: var(--bvtg${i}); 
      }
    `;
  }

  return str;
};

const gerarClasses = function (pre, pos) {
  let str = "";

    str = str + `
      .${pre}bv-tom-vibrant${pos} { --bvt: (var(--bvs) * var(--bvvibrant)); --bvtg: var(--bvtg50);  }
      .${pre}bv-tom-default${pos} { --bvt: var(--bvtdef); --bvtg: var(--bvtg50); }
      .${pre}bv-tom-l1${pos}      { --bvt: var(--bvtl1);  --bvtg: var(--bvtg75); }
      .${pre}bv-tom-l2${pos}      { --bvt: var(--bvtl2);  --bvtg: var(--bvtg70); }
      .${pre}bv-tom-l3${pos}      { --bvt: var(--bvtl3);  --bvtg: var(--bvtg65); }
      .${pre}bv-tom-l4${pos}      { --bvt: var(--bvtl4);  --bvtg: var(--bvtg60); }
      .${pre}bv-tom-l5${pos}      { --bvt: var(--bvtl5);  --bvtg: var(--bvtg55); }
      .${pre}bv-tom-d1${pos}      { --bvt: var(--bvtd1);  --bvtg: var(--bvtg45); }
      .${pre}bv-tom-d2${pos}      { --bvt: var(--bvtd2);  --bvtg: var(--bvtg40); }
      .${pre}bv-tom-d3${pos}      { --bvt: var(--bvtd3);  --bvtg: var(--bvtg35); }
      .${pre}bv-tom-d4${pos}      { --bvt: var(--bvtd4);  --bvtg: var(--bvtg30); }
      .${pre}bv-tom-d5${pos}      { --bvt: var(--bvtd5);  --bvtg: var(--bvtg25); }
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