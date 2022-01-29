"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const text_align_style_1 = __importDefault(require("./text-align.style"));
const fonts = function (props) {
    const { colors } = props.ThemeConfig;
    return `

    .fw-100{    font-weight: 100;  }
    .fw-200{    font-weight: 200;  }
    .fw-300{    font-weight: 300;  }
    .fw-400{    font-weight: 400;  }
    .fw-500{    font-weight: 500;  }
    .fw-600{    font-weight: 600;  }
    .fw-700{    font-weight: 700;  }
    .fw-800{    font-weight: 800;  }
    .fw-900{    font-weight: 900;  }

    .ls-05{   letter-spacing: 0.05em;  }
    .ls-1{   letter-spacing: 0.1em;  }
    .ls-15{   letter-spacing: 0.15em;  }
    
    .uppercase{
      text-transform: uppercase !important;
    }

    :root{
      --font-adjust-top: 0em;
      --s: 16rem;
      --font-adjust-bottom: 0em;
    }

    [p="text"] {
      font-size: var(--s);
      transition: all .15s ease;

      --line-height: 1.56em;
      &.lh1{--line-height: 1em;    }
      &.lh2{--line-height: 1.25em; }
      &.lh3{--line-height: 1.56em;  }
      &.lh4{--line-height: 1.953em; }
      &.lh5{--line-height: 2.44em;  }
      &.lh6{--line-height: 3.05em; }

      line-height: var(--line-height);

      
      transition-timing-function: var(--t-timing);
      transition-duration: var(--t-duration);
      transition-property: var(--t-props);
    
      &:not(.lh-no-adjust) > [c] {
          margin-top: calc( calc( calc( var(--line-height) - 1em ) / -2 ) + var(--font-adjust-top) );
          margin-bottom: calc( calc( calc( var(--line-height) - 1em ) / -2 ) + var(--font-adjust-bottom) );
      }

    }

    ${(0, text_align_style_1.default)("", "", false)}  
    ${(0, text_align_style_1.default)("lg\\:", "", "1199px")}
    ${(0, text_align_style_1.default)("md\\:", "", "991px")}
    ${(0, text_align_style_1.default)("sm\\:", "", "767px")}
    ${(0, text_align_style_1.default)("xs\\:", "", "575px")}
    
  `;
};
exports.default = fonts;
