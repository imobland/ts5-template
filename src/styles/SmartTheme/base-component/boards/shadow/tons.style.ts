
const gerarClassesTom0a100 = function (pre, pos) {
  let str = "";

  for (let i = 0; i <= 100; i = i+5 ) {
    str = str + `
      .${pre}sh-tom-${i}${pos} { 
        --sht: var(--sht${i}); 
        --shtg: var(--shtg${i}); 
      }
    `;
  }

  return str;
};

const gerarClasses = function (pre, pos) {
  let str = "";

    str = str + `
      .${pre}sh-tom-vibrant${pos} { --sht: (var(--shs) * var(--shvibrant)); --shtg: var(--shtg50);  }
      .${pre}sh-tom-default${pos} { --sht: var(--shtdef); --shtg: var(--shtg50); }
      .${pre}sh-tom-l1${pos}      { --sht: var(--shtl1);  --shtg: var(--shtg75); }
      .${pre}sh-tom-l2${pos}      { --sht: var(--shtl2);  --shtg: var(--shtg70); }
      .${pre}sh-tom-l3${pos}      { --sht: var(--shtl3);  --shtg: var(--shtg65); }
      .${pre}sh-tom-l4${pos}      { --sht: var(--shtl4);  --shtg: var(--shtg60); }
      .${pre}sh-tom-l5${pos}      { --sht: var(--shtl5);  --shtg: var(--shtg55); }
      .${pre}sh-tom-d1${pos}      { --sht: var(--shtd1);  --shtg: var(--shtg45); }
      .${pre}sh-tom-d2${pos}      { --sht: var(--shtd2);  --shtg: var(--shtg40); }
      .${pre}sh-tom-d3${pos}      { --sht: var(--shtd3);  --shtg: var(--shtg35); }
      .${pre}sh-tom-d4${pos}      { --sht: var(--shtd4);  --shtg: var(--shtg30); }
      .${pre}sh-tom-d5${pos}      { --sht: var(--shtd5);  --shtg: var(--shtg25); }
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