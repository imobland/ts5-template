import {sizesList} from "../../../_root-config/sizes/sizesList.style";

const gerarClasses = function (pre, pos, mediaQuery) {
  let str = ``;

  if (mediaQuery) {
    str = str + ` @media (max-width: ${mediaQuery}) { `;
  }

  str = str + `
    .${pre}aspect-16x9${pos}:before{
        padding-bottom: 56.55%;
    }
    .${pre}aspect-9x16${pos}:before{
        padding-bottom: 177.777777%;
    }
    .${pre}aspect-2x1${pos}:before{
        padding-bottom: 50%;
    }
    .${pre}aspect-1x1${pos}:before,
    .${pre}aspect-square${pos}:before {
        padding-bottom: 100%;
    }
    .${pre}aspect-1x2${pos}:before{
        padding-bottom: 200%;
    }
    .${pre}aspect-1x3${pos}:before{
        padding-bottom: 300%;
    }
    .${pre}aspect-3x1${pos}:before{
        padding-bottom: 33.3333%;
    }
    .${pre}aspect-3x4${pos}:before{   
        padding-bottom: 133.3333333%;
    }
    .${pre}aspect-4x3${pos}:before{
        padding-bottom: 75%;
    }
  `;

  if (mediaQuery) {
    str = str + `}`;
  }

  return str;
};

const style = function (props) {
  return `
      ${gerarClasses("", "", false)}
      ${gerarClasses("lg\\:", "", "1199px")}
      ${gerarClasses("md\\:", "", "991px")}
      ${gerarClasses("sm\\:", "", "767px")}
      ${gerarClasses("xs\\:", "", "575px")}

      [p][class*=" aspect-"] > [c]{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }
    `;
};

export default style;
