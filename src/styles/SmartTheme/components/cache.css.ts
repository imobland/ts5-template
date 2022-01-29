const css = function(props) {
  return `
  .font-display {
    font-family: Oswald, Sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    --font-adjust-top: -.2em;
    --font-adjust-bottom: 0em;
  }
  
  .font-stylized {
    font-family: Dancing Script;
    text-transform: inherit;
    font-weight: bold;
    --font-adjust-top: -0.1em;
    --font-adjust-bottom: 0em;
  }
  
  .font-default {
    font-family: Ubuntu, Sans-serif;
    text-transform: inherit;
    font-weight: 400;
    --font-adjust-top: -0.1em;
    --font-adjust-bottom: 0em;
  }
  
  .font-mono {
    font-family: Monospace;
    text-transform: inherit;
    font-weight: 400;
    --font-adjust-top: -0.1em;
    --font-adjust-bottom: 0em;
  }
  
  :root {
    --font-adjust-top: 0em;
    --s: 16rem;
    --font-adjust-bottom: 0em;
  }
  
  [p="text"] {
    font-size: var(--s);
    color: var(--c);
    -webkit-transition: all .15s ease;
    transition: all .15s ease;
    --line-height: 1em;
    line-height: var(--line-height);
    -webkit-transition: all var(--trans-time) ease;
    transition: all var(--trans-time) ease;
  }
  
  [p="text"].lh1 {
    --line-height: 1em;
  }
  
  [p="text"].lh2 {
    --line-height: 1.4em;
  }
  
  [p="text"].lh3 {
    --line-height: 1.8em;
  }
  
  [p="text"].lh4 {
    --line-height: 2.2em;
  }
  
  [p="text"].lh5 {
    --line-height: 2.6em;
  }
  
  [p="text"]:not(.lh-no-adjust)>[c] {
    margin-top: calc( calc( calc( var(--line-height) - 1em) / -2) + var(--font-adjust-top));
    margin-bottom: calc( calc( calc( var(--line-height) - 1em) / -2) + var(--font-adjust-bottom));
  }
  
  [p="icon"] {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition: all .15s ease;
    transition: all .15s ease;
    color: var(--c);
    font-size: var(--s);
    height: 1em;
    width: 1em;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  
  [p="icon"].fill-current {
    fill: currentColor;
  }
  
  [p="icon"].stroke-current {
    stroke: currentColor;
  }
  
  input.bel,
  select.bel {
    height: calc(var(--s) + 2rem + calc( var(--pad-t) * var(--s)) + calc( var(--pad-b) * var(--s)));
    font-size: var(--s);
    border: 0px;
    width: 100%;
    padding-top: var(--pad-t);
    padding-bottom: var(--pad-b);
    padding-right: var(--pad-r);
    padding-left: var(--pad-l);
    background: var(--bg-c);
    border-radius: var(--b-radius);
    border-top-left-radius: var(--b-radius-tl);
    border-top-right-radius: var(--b-radius-tr);
    border-bottom-left-radius: var(--b-radius-bl);
    border-bottom-right-radius: var(--b-radius-br);
  }
  
  [p="text"] code,
  code[p="text"] {
    color: #d4f;
  }
  
  [p="text"] code:after,
  code[p="text"]:after,
  [p="text"] code:before,
  code[p="text"]:before {
    content: "'";
  }
  
  pre.box>[c] {
    font-size: 16px;
  }
  
  code[class*="language-"],
  pre[class*="language-"] {
    color: #d6deeb;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    font-size: 1em;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }
  
  pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: rgba(29, 59, 83, 0.99);
  }
  
  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection {
    text-shadow: none;
    background: rgba(29, 59, 83, 0.99);
  }
  
  @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
  }
  
  :not(pre)>code[class*="language-"],
  pre[class*="language-"] {
    color: white;
    --board: #011627;
  }
  
  .token.comment,
  .token.prolog,
  .token.cdata {
    color: rgb(99, 119, 119);
    font-style: italic;
  }
  
  .token.punctuation {
    color: rgb(199, 146, 234);
  }
  
  .namespace {
    color: rgb(178, 204, 214);
  }
  
  .token.deleted {
    color: rgba(239, 83, 80, 0.56);
    font-style: italic;
  }
  
  .token.symbol,
  .token.property {
    color: rgb(128, 203, 196);
  }
  
  .token.tag,
  .token.operator,
  .token.keyword {
    color: rgb(127, 219, 202);
  }
  
  .token.boolean {
    color: rgb(255, 88, 116);
  }
  
  .token.number {
    color: rgb(247, 140, 108);
  }
  
  .token.constant,
  .token.function,
  .token.builtin,
  .token.char {
    color: rgb(130, 170, 255);
  }
  
  .token.selector,
  .token.doctype {
    color: rgb(199, 146, 234);
    font-style: italic;
  }
  
  .token.attr-name,
  .token.inserted {
    color: rgb(173, 219, 103);
    font-style: italic;
  }
  
  .token.string,
  .token.url,
  .token.entity,
  .language-css .token.string,
  .style .token.string {
    color: rgb(173, 219, 103);
  }
  
  .token.class-name,
  .token.atrule,
  .token.attr-value {
    color: rgb(255, 203, 139);
  }
  
  .token.regex,
  .token.important,
  .token.variable {
    color: rgb(214, 222, 235);
  }
  
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  
  .token.italic {
    font-style: italic;
  }
  
`;
}
export default css;