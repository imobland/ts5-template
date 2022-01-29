import { Color, ColorImmutable } from "frostcolor";


const CBasecss = `
  --ctg0: 0;
  --ctg5: 0.05;
  --ctg10: 0.1;
  --ctg15: 0.15;
  --ctg20: 0.2;
  --ctg25: 0.25;
  --ctg30: 0.3;
  --ctg35: 0.35;
  --ctg40: 0.4;
  --ctg45: 0.45;
  --ctg50: 0.5;
  --ctg55: 0.55;
  --ctg60: 0.6;
  --ctg65: 0.65;
  --ctg70: 0.7;
  --ctg75: 0.75;
  --ctg80: 0.8;
  --ctg85: 0.85;
  --ctg90: 0.9;
  --ctg95: 0.95;
  --ctg100: 1;


  --ct0: 0;
  --ct5: 0.05;
  --ct10: 0.1;
  --ct15: 0.15;
  --ct20: 0.2;
  --ct25: 0.25;
  --ct30: 0.3;
  --ct35: 0.35;
  --ct40: 0.4;
  --ct45: 0.45;
  --ct50: 0.5;
  --ct55: 0.55;
  --ct60: 0.6;
  --ct65: 0.65;
  --ct70: 0.7;
  --ct75: 0.75;
  --ct80: 0.81;
  --ct85: 0.86;
  --ct90: 0.92;
  --ct95: 0.97;
  --ct100: 1;


`;

const C0css = `
  --c0h: 0deg;
  --c0s: 0;

  --c0tg: 1;
  --c0vibrant: 1;
  --c0tdef: 1;
  --c0tl5: 1;
  --c0tl4: 1;
  --c0tl3: 1;
  --c0tl2: 1;
  --c0tl1: 1;
  --c0td1: 0.95;
  --c0td2: 0.9;
  --c0td3: 0.85;
  --c0td4: 0.8;
  --c0td5: 0.75;
  --c0t0: 0.0;
  --c0t5: 0.05;
  --c0t10: 0.1;
  --c0t15: 0.15;
  --c0t20: 0.2;
  --c0t25: 0.25;
  --c0t30: 0.3;
  --c0t35: 0.35;
  --c0t40: 0.4;
  --c0t45: 0.45;
  --c0t50: 0.5;
  --c0t55: 0.55;
  --c0t60: 0.6;
  --c0t65: 0.65;
  --c0t70: 0.7;
  --c0t75: 0.75;
  --c0t80: 0.81;
  --c0t85: 0.87;
  --c0t90: 0.92;
  --c0t95: 0.97;
  --c0t100: 1;

  --c0ct: .15;
  --c0ch: 0deg;
  --c0cs: 0;

`;

const C4css = `
  --c4h: 0deg;
  --c4s: 0;



  --c4tg: 0;
  --c4vibrant: 0;
  --c4tdef: 0;
  --c4tl5: .25;
  --c4tl4: .2;
  --c4tl3: .15;
  --c4tl2: .11;
  --c4tl1: .07;
  --c4td1: 0;
  --c4td2: 0;
  --c4td3: 0;
  --c4td4: 0;
  --c4td5: 0;
  --c4t0: 0.0;
  --c4t5: 0.07;
  --c4t10: 0.11;
  --c4t15: 0.15;
  --c4t20: 0.2;
  --c4t25: 0.25;
  --c4t30: 0.3;
  --c4t35: 0.35;
  --c4t40: 0.4;
  --c4t45: 0.45;
  --c4t50: 0.5;
  --c4t55: 0.55;
  --c4t60: 0.6;
  --c4t65: 0.65;
  --c4t70: 0.7;
  --c4t75: 0.75;
  --c4t80: 0.8;
  --c4t85: 0.85;
  --c4t90: 0.9;
  --c4t95: 0.95;
  --c4t100: 1;

  --c4ct: .85;
  --c4ch: 0deg;
  --c4cs: 0;
`;

const C1css = `
  --c1h: 230deg;
  --c1-curve-l: -10;
  --c1-curve-d: 10; 

  --c1s: 1;

  --c1mdown: 0.35;
  --c1mup:   0.65;
      --c1mdt: calc(var(--ctbreakpoint) * (0.5 / var(--c1mdown)));
      --c1mut: calc(var(--ctbreakpoint) * (0.5 / var(--c1mup)));

  --c1tg: var(--ctg45);
  --c1tdef: var(--c1t45);
  --c1vibrant: var(--c1t35);

  --c1t0: (0.5 - (var(--c1mdt) * 7 * 1));
  --c1t5: (0.5 - (var(--c1mdt) * 6 * 1));
  --c1t10: (0.5 - (var(--c1mdt) * 5 * 1));
  --c1t15: (0.5 - (var(--c1mdt) * 4 * 1));
  --c1t20: (0.5 - (var(--c1mdt) * 3 * 1));
  --c1t25: (0.5 - (var(--c1mdt) * 2 * 1));
  --c1t30: (0.5 - (var(--c1mdt) * 1 * 1));
  --c1t35: 0.5;
  --c1t40: (0.5 + (var(--c1mut) * 1 * 1));
  --c1t45: (0.5 + (var(--c1mut) * 2 * 1));
  --c1t50: (0.5 + (var(--c1mut) * 3 * 1));
  --c1t55: (0.5 + (var(--c1mut) * 4 * 1));
  --c1t60: (0.5 + (var(--c1mut) * 5 * 1));
  --c1t65: (0.5 + (var(--c1mut) * 6 * 1));
  --c1t70: (0.5 + (var(--c1mut) * 7 * 1));
  --c1t75: (0.5 + (var(--c1mut) * 8 * 1));
  --c1t80: (0.5 + (var(--c1mut) * 9 * 1));
  --c1t85: (0.5 + (var(--c1mut) * 10 * 1));
  --c1t90: (0.5 + (var(--c1mut) * 11 * 1));
  --c1t95: (0.5 + (var(--c1mut) * 12 * 1));
  --c1t100: (0.5 + (var(--c1mut) * 13 * 1));

  --c1tl1: var(--c1t50);
  --c1tl2: var(--c1t55);
  --c1tl3: var(--c1t60);
  --c1tl4: var(--c1t65);
  --c1tl5: var(--c1t70);

  --c1td1: var(--c1t40);
  --c1td2: var(--c1t35);
  --c1td3: var(--c1t30);
  --c1td4: var(--c1t25);
  --c1td5: var(--c1t20);

  --c1ch: 0deg;
  --c1ct: 1;
  --c1cs: 0;
`;

const C2css = `

  --c2h: 39deg;
  --c2-curve-l: 0;
  --c2-curve-d: 0; 

  --c2s: .7;

  --c2mdown: 0.6; 
  --c2mup:   0.4;
      --c2mdt: calc(var(--ctbreakpoint) * (0.5 / var(--c2mdown)));
      --c2mut: calc(var(--ctbreakpoint) * (0.5 / var(--c2mup)));

  --c2tg: var(--ctg70);
  --c2tdef: var(--c2t70);
  --c2vibrant: .5;

  --c2t0: (0.5 - (var(--c2mdt) * 12 * 1));
  --c2t5: (0.5 - (var(--c2mdt) * 11 * 1));
  --c2t10: (0.5 - (var(--c2mdt) * 10 * 1));
  --c2t15: (0.5 - (var(--c2mdt) * 9 * 1));
  --c2t20: (0.5 - (var(--c2mdt) * 8 * 1));
  --c2t25: (0.5 - (var(--c2mdt) * 7 * 1));
  --c2t30: (0.5 - (var(--c2mdt) * 6 * 1));
  --c2t35: (0.5 - (var(--c2mdt) * 5 * 1));
  --c2t40: (0.5 - (var(--c2mdt) * 4 * 1));
  --c2t45: (0.5 - (var(--c2mdt) * 3 * 1));
  --c2t50: (0.5 - (var(--c2mdt) * 2 * 1));
  --c2t55: (0.5 - (var(--c2mdt) * 1 * 1));
  --c2t60: .5;
  --c2t65: (0.5 + (var(--c2mut) * 1 * 1));
  --c2t70: (0.5 + (var(--c2mut) * 2 * 1));
  --c2t75: (0.5 + (var(--c2mut) * 3 * 1));
  --c2t80: (0.5 + (var(--c2mut) * 4 * 1));
  --c2t85: (0.5 + (var(--c2mut) * 5 * 1));
  --c2t90: (0.5 + (var(--c2mut) * 6 * 1));
  --c2t95: (0.5 + (var(--c2mut) * 7 * 1));
  --c2t100: (0.5 + (var(--c2mut) * 8 * 1));

  --c2tl1: var(--c2t75);
  --c2tl2: var(--c2t80);
  --c2tl3: var(--c2t85);
  --c2tl4: var(--c2t90);
  --c2tl5: var(--c2t95);

  --c2td1: var(--c2t65);
  --c2td2: var(--c2t60);
  --c2td3: var(--c2t55);
  --c2td4: var(--c2t50);
  --c2td5: var(--c2t45);

  --c2ch: 0deg;
  --c2ct: 1;
  --c2cs: 0;

`;

const C3css = `
  --c3h: 60deg;
  --c3-curve-l: -10;
  --c3-curve-d: 10;

  --c3s: 1;

  --c3mdown: 0.85;
  --c3mup:   0.15;
  --c3mdt: calc(var(--ctbreakpoint) * (0.5 / var(--c3mdown)));
  --c3mut: calc(var(--ctbreakpoint) * (0.5 / var(--c3mup)));


  --c3tg: var(--ctg85);
  --c3tdef: var(--c3t85);
  --c3vibrant: var(--c3t85);
  --c3t0: (0.5 - (var(--c3mdt) * 17 * 1));
  --c3t5: (0.5 - (var(--c3mdt) * 16 * 1));
  --c3t10: (0.5 - (var(--c3mdt) * 15 * 1));
  --c3t15: (0.5 - (var(--c3mdt) * 14 * 1));
  --c3t20: (0.5 - (var(--c3mdt) * 13 * 1));
  --c3t25: (0.5 - (var(--c3mdt) * 12 * 1));
  --c3t30: (0.5 - (var(--c3mdt) * 11 * 1));
  --c3t35: (0.5 - (var(--c3mdt) * 10 * 1));
  --c3t40: (0.5 - (var(--c3mdt) * 9 * 1));
  --c3t45: (0.5 - (var(--c3mdt) * 8 * 1));
  --c3t50: (0.5 - (var(--c3mdt) * 7 * 1));
  --c3t55: (0.5 - (var(--c3mdt) * 6 * 1));
  --c3t60: (0.5 - (var(--c3mdt) * 5 * 1));
  --c3t65: (0.5 - (var(--c3mdt) * 4 * 1));
  --c3t70: (0.5 - (var(--c3mdt) * 3 * 1));
  --c3t75: (0.5 - (var(--c3mdt) * 2 * 1));
  --c3t80: (0.5 - (var(--c3mdt) * 1 * 1));
  --c3t85: 0.5;
  --c3t90: (0.5 + (var(--c3mut) * 1 * 1.5));
  --c3t95: (0.5 + (var(--c3mut) * 2 * 1));
  --c3t100: (0.5 + (var(--c3mut) * 3 * 1));
  --c3tl5: var(--c3t100);
  --c3tl4: var(--c3t100);
  --c3tl3: var(--c3t100);
  --c3tl2: var(--c3t95);
  --c3tl1: var(--c3t90);
  --c3td1: var(--c3t80);
  --c3td2: var(--c3t75);
  --c3td3: var(--c3t70);
  --c3td4: var(--c3t65);
  --c3td5: var(--c3t60);

  --c3ch: 0deg;
  --c3ct: 0;
  --c3cs: 0;
`;

const css = function (props) {
  const C1 = props.ThemeConfig.colors.C1;
  const C2 = props.ThemeConfig.colors.C2;
  const C3 = props.ThemeConfig.colors.C3;

  return `

    :root {
      --ctbreakpoint: 0.05;
    }

    [p] {
      
      ${CBasecss}

      ${C0css}

      ${C4css}

      ${C1css}

      ${C2css}

      ${C3css}

    }

  `;
};

export default css;
