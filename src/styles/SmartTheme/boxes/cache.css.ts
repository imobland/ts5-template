const css = function(props) {
  return `
 .box {
    padding-top: var(--pad-t);
    padding-bottom: var(--pad-b);
    padding-right: var(--pad-r);
    padding-left: var(--pad-l);
  }
  
  .box.pad-in-content {
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
    padding-left: 0;
  }
  
  .box.pad-in-content>[c] {
    padding-top: var(--pad-t);
    padding-bottom: var(--pad-b);
    padding-right: var(--pad-r);
    padding-left: var(--pad-l);
  }
  
  .A0 {
    width: 100%;
    --pad-t: var(--pad-12);
    --pad-b: var(--pad-12);
    --pad-l: var(--pad-12);
    --pad-r: var(--pad-12);
  }
  
  .A0>[c] {
    width: 1200px;
  }
  
  .A0:not(.group)>[c] {
    --gap: var(--gap-8);
    --gap-br: var(--gap-8);
  }
  
  .A0.group:not([class*=" gap-"])>[c] {
    --gap: 0;
    --gap-br: 0;
  }
  
  .gap-A0>[c] {
    --gap: var(--gap-8);
  }
  
  .gap-br-A0>[c] {
    --gap-br: var(--gap-8);
  }
  
  .A0.box {
    --b-radius: var(--b-radius-0);
    --b-radius-tl: var(--b-radius-0);
    --b-radius-tr: var(--b-radius-0);
    --b-radius-bl: var(--b-radius-0);
    --b-radius-br: var(--b-radius-0);
  }
  
  .A0.box>[b] {
    border-radius: 0px;
  }
  
  .A1 {
    --pad-t: var(--pad-11);
    --pad-b: var(--pad-11);
    --pad-l: var(--pad-11);
    --pad-r: var(--pad-11);
  }
  
  .A1:not(.group)>[c] {
    --gap: var(--gap-7);
    --gap-br: var(--gap-7);
  }
  
  .A1.group:not([class*=" gap-"])>[c] {
    --gap: 0;
    --gap-br: 0;
  }
  
  .gap-A1>[c] {
    --gap: var(--gap-7);
  }
  
  .gap-br-A1>[c] {
    --gap-br: var(--gap-7);
  }
  
  .A1.box {
    --b-radius: var(--b-radius-1);
    --b-radius-tl: var(--b-radius-1);
    --b-radius-tr: var(--b-radius-1);
    --b-radius-bl: var(--b-radius-1);
    --b-radius-br: var(--b-radius-1);
  }
  
  .A2 {
    --pad-t: var(--pad-10);
    --pad-b: var(--pad-10);
    --pad-l: var(--pad-10);
    --pad-r: var(--pad-10);
  }
  
  .A2:not(.group)>[c] {
    --gap: var(--gap-6);
    --gap-br: var(--gap-6);
  }
  
  .A2.group:not([class*=" gap-"])>[c] {
    --gap: 0;
    --gap-br: 0;
  }
  
  .gap-A2>[c] {
    --gap: var(--gap-6);
  }
  
  .gap-br-A2>[c] {
    --gap-br: var(--gap-6);
  }
  
  .A2.box {
    --b-radius: var(--b-radius-2);
    --b-radius-tl: var(--b-radius-2);
    --b-radius-tr: var(--b-radius-2);
    --b-radius-bl: var(--b-radius-2);
    --b-radius-br: var(--b-radius-2);
  }
  
  .A3 {
    --pad-t: var(--pad-9);
    --pad-b: var(--pad-9);
    --pad-l: var(--pad-9);
    --pad-r: var(--pad-9);
  }
  
  .A3:not(.group)>[c] {
    --gap: var(--gap-5);
    --gap-br: var(--gap-5);
  }
  
  .A3.group:not([class*=" gap-"])>[c] {
    --gap: 0;
    --gap-br: 0;
  }
  
  .gap-A3>[c] {
    --gap: var(--gap-5);
  }
  
  .gap-br-A3>[c] {
    --gap-br: var(--gap-5);
  }
  
  .A3.box {
    --b-radius: var(--b-radius-3);
    --b-radius-tl: var(--b-radius-3);
    --b-radius-tr: var(--b-radius-3);
    --b-radius-bl: var(--b-radius-3);
    --b-radius-br: var(--b-radius-3);
  }
  
  .A4 {
    --pad-t: var(--pad-8);
    --pad-b: var(--pad-8);
    --pad-l: var(--pad-8);
    --pad-r: var(--pad-8);
  }
  
  .A4:not(.group)>[c] {
    --gap: var(--gap-4);
    --gap-br: var(--gap-4);
  }
  
  .A4.group:not([class*=" gap-"])>[c] {
    --gap: 0;
    --gap-br: 0;
  }
  
  .gap-A4>[c] {
    --gap: var(--gap-4);
  }
  
  .gap-br-A4>[c] {
    --gap-br: var(--gap-4);
  }
  
  .A4.box {
    --b-radius: var(--b-radius-4);
    --b-radius-tl: var(--b-radius-4);
    --b-radius-tr: var(--b-radius-4);
    --b-radius-bl: var(--b-radius-4);
    --b-radius-br: var(--b-radius-4);
  }
  
  .A5 {
    --pad-t: var(--pad-7);
    --pad-b: var(--pad-7);
    --pad-l: var(--pad-7);
    --pad-r: var(--pad-7);
  }
  
  .A5:not(.group)>[c] {
    --gap: var(--gap-3);
    --gap-br: var(--gap-3);
  }
  
  .A5.group:not([class*=" gap-"])>[c] {
    --gap: 0;
    --gap-br: 0;
  }
  
  .gap-A5>[c] {
    --gap: var(--gap-3);
  }
  
  .gap-br-A5>[c] {
    --gap-br: var(--gap-3);
  }
  
  .A5.box {
    --b-radius: var(--b-radius-5);
    --b-radius-tl: var(--b-radius-5);
    --b-radius-tr: var(--b-radius-5);
    --b-radius-bl: var(--b-radius-5);
    --b-radius-br: var(--b-radius-5);
  }
  
  .A6 {
    --pad-t: var(--pad-6);
    --pad-b: var(--pad-6);
    --pad-l: var(--pad-6);
    --pad-r: var(--pad-6);
  }
  
  .A6:not(.group)>[c] {
    --gap: var(--gap-2);
    --gap-br: var(--gap-2);
  }
  
  .A6.group:not([class*=" gap-"])>[c] {
    --gap: 0;
    --gap-br: 0;
  }
  
  .gap-A6>[c] {
    --gap: var(--gap-2);
  }
  
  .gap-br-A6>[c] {
    --gap-br: var(--gap-2);
  }
  
  .A6.box {
    --b-radius: var(--b-radius-6);
    --b-radius-tl: var(--b-radius-6);
    --b-radius-tr: var(--b-radius-6);
    --b-radius-bl: var(--b-radius-6);
    --b-radius-br: var(--b-radius-6);
  }
  
  .bel {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    --metric-pad: 0.9;
    --metric-pad-tiny: 0.18;
    --metric-pad-compact: 0.54;
    --metric-pad-loose: 1.7;
    --metric-pad-expand: 3.4;
    --metric-gap: 0.2;
    --metric-border-w: 0.125;
    --metric-icon-xs: 0.5;
    --metric-icon-sm: 0.75;
    --metric-icon-md: 1;
    --metric-icon-lg: 1.333;
    --metric-icon-xl: 1.8;
    --metric-icon-xxl: 2.5;
    --metric-icon-control: 0.8;
    padding-top: var(--pad-t);
    padding-bottom: var(--pad-b);
    padding-right: var(--pad-r);
    padding-left: var(--pad-l);
    --gap: calc( calc(var(--s) / 1.5) * var(--metric-gap) + calc(var(--pad-l) / 6 + var(--pad-r) / 6));
  }
  
  .bel.pad-in-content {
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
    padding-left: 0;
  }
  
  .bel.pad-in-content>[c] {
    padding-top: var(--pad-t);
    padding-bottom: var(--pad-b);
    padding-right: var(--pad-r);
    padding-left: var(--pad-l);
  }
  
  .bel [p="icon"] {
    font-size: var(--s);
  }
  
  .bel [p="text"] {
    font-size: var(--s);
  }
  
  .bel.default,
  .bel {
    --pad-t: calc( var(--s) * var(--metric-pad));
    --pad-b: calc( var(--s) * var(--metric-pad));
    --pad-l: calc( var(--s) * var(--metric-pad));
    --pad-r: calc( var(--s) * var(--metric-pad));
  }
  
  .bel.y-default {
    --pad-t: calc( var(--s) * var(--metric-pad));
    --pad-b: calc( var(--s) * var(--metric-pad));
  }
  
  .bel.x-default {
    --pad-l: calc( var(--s) * var(--metric-pad));
    --pad-r: calc( var(--s) * var(--metric-pad));
  }
  
  .bel.t-default {
    --pad-t: calc( var(--s) * var(--metric-pad));
  }
  
  .bel.b-default {
    --pad-b: calc( var(--s) * var(--metric-pad));
  }
  
  .bel.l-default {
    --pad-l: calc( var(--s) * var(--metric-pad));
  }
  
  .bel.r-default {
    --pad-r: calc( var(--s) * var(--metric-pad));
  }
  
  .bel.compact {
    --pad-t: calc( var(--s) * var(--metric-pad-compact));
    --pad-b: calc( var(--s) * var(--metric-pad-compact));
    --pad-l: calc( var(--s) * var(--metric-pad-compact));
    --pad-r: calc( var(--s) * var(--metric-pad-compact));
  }
  
  .bel.y-compact {
    --pad-t: calc( var(--s) * var(--metric-pad-compact));
    --pad-b: calc( var(--s) * var(--metric-pad-compact));
  }
  
  .bel.x-compact {
    --pad-l: calc( var(--s) * var(--metric-pad-compact));
    --pad-r: calc( var(--s) * var(--metric-pad-compact));
  }
  
  .bel.t-compact {
    --pad-t: calc( var(--s) * var(--metric-pad-compact));
  }
  
  .bel.b-compact {
    --pad-b: calc( var(--s) * var(--metric-pad-compact));
  }
  
  .bel.l-compact {
    --pad-l: calc( var(--s) * var(--metric-pad-compact));
  }
  
  .bel.r-compact {
    --pad-r: calc( var(--s) * var(--metric-pad-compact));
  }
  
  .bel.tiny {
    --pad-t: calc( var(--s) * var(--metric-pad-tiny));
    --pad-b: calc( var(--s) * var(--metric-pad-tiny));
    --pad-l: calc( var(--s) * var(--metric-pad-tiny));
    --pad-r: calc( var(--s) * var(--metric-pad-tiny));
  }
  
  .bel.y-tiny {
    --pad-t: calc( var(--s) * var(--metric-pad-tiny));
    --pad-b: calc( var(--s) * var(--metric-pad-tiny));
  }
  
  .bel.x-tiny {
    --pad-l: calc( var(--s) * var(--metric-pad-tiny));
    --pad-r: calc( var(--s) * var(--metric-pad-tiny));
  }
  
  .bel.t-tiny {
    --pad-t: calc( var(--s) * var(--metric-pad-tiny));
  }
  
  .bel.b-tiny {
    --pad-b: calc( var(--s) * var(--metric-pad-tiny));
  }
  
  .bel.l-tiny {
    --pad-l: calc( var(--s) * var(--metric-pad-tiny));
  }
  
  .bel.r-tiny {
    --pad-r: calc( var(--s) * var(--metric-pad-tiny));
  }
  
  .bel.loose {
    --pad-t: calc( var(--s) * var(--metric-pad-loose));
    --pad-b: calc( var(--s) * var(--metric-pad-loose));
    --pad-l: calc( var(--s) * var(--metric-pad-loose));
    --pad-r: calc( var(--s) * var(--metric-pad-loose));
  }
  
  .bel.y-loose {
    --pad-t: calc( var(--s) * var(--metric-pad-loose));
    --pad-b: calc( var(--s) * var(--metric-pad-loose));
  }
  
  .bel.x-loose {
    --pad-l: calc( var(--s) * var(--metric-pad-loose));
    --pad-r: calc( var(--s) * var(--metric-pad-loose));
  }
  
  .bel.t-loose {
    --pad-t: calc( var(--s) * var(--metric-pad-loose));
  }
  
  .bel.b-loose {
    --pad-b: calc( var(--s) * var(--metric-pad-loose));
  }
  
  .bel.l-loose {
    --pad-l: calc( var(--s) * var(--metric-pad-loose));
  }
  
  .bel.r-loose {
    --pad-r: calc( var(--s) * var(--metric-pad-loose));
  }
  
  .bel.expand {
    --pad-t: calc( var(--s) * var(--metric-pad-loose));
    --pad-b: calc( var(--s) * var(--metric-pad-loose));
    --pad-l: calc( var(--s) * var(--metric-pad-expand));
    --pad-r: calc( var(--s) * var(--metric-pad-expand));
  }
  
  .bel.x-expand {
    --pad-l: calc( var(--s) * var(--metric-pad-expand));
    --pad-r: calc( var(--s) * var(--metric-pad-expand));
  }
  
  .bel.y-expand {
    --pad-t: calc( var(--s) * var(--metric-pad-loose));
    --pad-b: calc( var(--s) * var(--metric-pad-loose));
  }
  
  .bel.t-expand {
    --pad-t: calc( var(--s) * var(--metric-pad-loose));
  }
  
  .bel.b-expand {
    --pad-b: calc( var(--s) * var(--metric-pad-loose));
  }
  
  .bel.l-expand {
    --pad-l: calc( var(--s) * var(--metric-pad-expand));
  }
  
  .bel.r-expand {
    --pad-r: calc( var(--s) * var(--metric-pad-expand));
  }
  
  .bel [p="icon"] {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  
  .bel [p="icon"].xs {
    font-size: calc(var(--s) * var(--metric-icon-xs));
  }
  
  .bel [p="icon"].sm {
    font-size: calc(var(--s) * var(--metric-icon-sm));
  }
  
  .bel [p="icon"].md {
    font-size: calc(var(--s) * var(--metric-icon-md));
  }
  
  .bel [p="icon"].lg {
    font-size: calc(var(--s) * var(--metric-icon-lg));
  }
  
  .bel [p="icon"].xl {
    font-size: calc(var(--s) * var(--metric-icon-xl));
  }
  
  .bel [p="icon"].xxl {
    font-size: calc(var(--s) * var(--metric-icon-xxl));
  }
  
  .bel [p="icon"].lock-height {
    margin-top: -1em;
    margin-bottom: -1em;
  }
`;
}
export default css;