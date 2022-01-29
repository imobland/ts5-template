"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GroupRadius = function (pre, pos, mediaQuery) {
    let str = "";
    if (mediaQuery) {
        str = str + ` @media (max-width: ${mediaQuery}) { `;
    }
    str = str + `
    .${pre}dir-col.group > [c] {
      
      > [p] {
        --br-bl: 0;
        --br-br: 0;
        --br-tr: 0;
        --br-tl: 0;
      }
      > :first-child {
        --br-tr: var(--ch-br-tr);
        --br-tl: var(--ch-br-tl);
      }
      > :last-child  {
        --br-br: var(--ch-br-br);
        --br-bl: var(--ch-br-bl);
      }
    }

    .${pre}dir-row.group > [c] {
      > [p] {
        --br-bl: 0;
        --br-br: 0;
        --br-tr: 0;
        --br-tl: 0;
      }
      > :first-child {
        --br-tl: var(--ch-br-tl);
        --br-bl: var(--ch-br-bl);
      }
      > :last-child {
        --br-tr: var(--ch-br-tr);
        --br-br: var(--ch-br-br);
      }
    }
    
    .${pre}layers.group > [c] > [p]{
      --br-tr: var(--ch-br-tr);
      --br-br: var(--ch-br-br);
      --br-tl: var(--ch-br-tl);
      --br-bl: var(--ch-br-bl);
    }
  `;
    if (mediaQuery) {
        str = str + `}`;
    }
    return str;
};
const css = function () {
    return `
    ${GroupRadius("", "", false)}
    ${GroupRadius("lg\\:", "", "1199px")}
    ${GroupRadius("md\\:", "", "991px")}
    ${GroupRadius("sm\\:", "", "767px")}
    ${GroupRadius("xs\\:", "", "575px")}

    .group {
      > [c] {
        --ch-br-tl: var(--br-tl);
        --ch-br-tr: var(--br-tr);
        --ch-br-bl: var(--br-bl);
        --ch-br-br: var(--br-br);
        > [p] {
        }
      }
    }
  `;
};
exports.default = css;
