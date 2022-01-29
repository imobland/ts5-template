const gerarClasses = function (pre, mediaQuery) {
  //
  let str = "";

  if (mediaQuery) {  str = str + ` @media (max-width: ${mediaQuery}) { `; }

  str = str + `  
    .${pre}layers.main-first > [c] > :first-child {
      position: relative;
    }
    .${pre}layers.main-last > [c] > :last-child {
      position: relative;
    }
    .${pre}layers > [c] > * {
      position: absolute;
      z-index: 0;
    }

    
    .${pre}disable-layers > [c] > * {
      position: sticky !important;
    }

    .${pre}pos-none {
      left: auto;
      top: auto;
      bottom: auto;
      right: auto;
    }
    .${pre}pos-left {
        left: calc(0% + var(--gap));
        top: calc(0% + var(--gap-br));
        bottom: calc(0% + var(--gap-br));
        right: auto;
    }
    .${pre}pos-left-out {
        right: calc(100% + var(--gap));
        top: calc(0% + var(--gap-br));
        bottom: calc(0% + var(--gap-br));
        left: auto;
    }
    .${pre}pos-right {
        right: calc(0% + var(--gap));
        top: calc(0% + var(--gap-br));
        bottom: calc(0% + var(--gap-br));
        left: auto;
    }
    .${pre}pos-right-out {
        left: calc(100% + var(--gap));
        top: calc(0% + var(--gap-br));
        bottom: calc(0% + var(--gap-br));
        right: auto;
    }
    .${pre}pos-top {
        left: calc(0% + var(--gap));
        right: calc(0% + var(--gap));
        top: calc(0% + var(--gap-br));
        bottom: auto;
    }
    .${pre}pos-top-out {
        left: calc(0% + var(--gap)); 
        right: calc(0% + var(--gap));
        bottom: calc(100% + var(--gap-br));
        top: auto;
    }
    .${pre}pos-bottom {
        left: calc(0% + var(--gap)); 
        right: calc(0% + var(--gap));
        bottom: calc(0% + var(--gap-br));
        top: auto;
    }
    .${pre}pos-bottom-out {
        left: calc(0% + var(--gap)); 
        right: calc(0% + var(--gap));
        top: calc(100% + var(--gap-br));
        bottom: auto;
    }
    
    .${pre}pos-full{
        left: calc(0% + var(--gap));
        right: calc(0% + var(--gap));
        top: calc(0% + var(--gap-br));
        bottom: calc(0% + var(--gap-br));
    }
  `;
  if (mediaQuery) {  str = str + `}`; }

  return str;
};

const style = function (props) {
  return `
    .layers > [c] {
      --gap-br: var(--gap);
    }
    ${gerarClasses("", false)}
    ${gerarClasses("lg\\:", "1199px")}
    ${gerarClasses("md\\:", "991px")}
    ${gerarClasses("sm\\:", "767px")}
    ${gerarClasses("xs\\:", "575px")}
  `;
};
export default style;
