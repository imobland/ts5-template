import LabelColors from "../../../_root-config/colors/labelColors";

const css = function (props) {

  const gerarGradients = function (state) {
    //
    let str = "";
    let stateSelector, statePre;

    if (state == "normal") {
      stateSelector = "";
      statePre = "";
    } else if (state == "hover") {
      stateSelector = ":hover";
      statePre = "hover\\:";
    } else if (state == "active") {
      stateSelector = ":active";
      statePre = "active\\:";
    }

    for (const key in LabelColors) {
      //
      let obj = LabelColors[key];

      str = str.concat(`
        

        .${statePre}bg-gradient-${key}${stateSelector} {
          --bg-gradient-c: var(--${key});
        }
        .${statePre}bg-gradient-${key}-D1${stateSelector} {
          --bg-gradient-c: var(--${key}-D1);
        }
        .${statePre}bg-gradient-${key}-D2${stateSelector} {
          --bg-gradient-c: var(--${key}-D2);
        }
        .${statePre}bg-gradient-${key}-D3${stateSelector} {
          --bg-gradient-c: var(--${key}-D3);
        }
        .${statePre}bg-gradient-${key}-L1${stateSelector} {
          --bg-gradient-c: var(--${key}-L1);
        }
        .${statePre}bg-gradient-${key}-L2${stateSelector} {
          --bg-gradient-c: var(--${key}-L2);
        }
        .${statePre}bg-gradient-${key}-L3${stateSelector} {
          --bg-gradient-c: var(--${key}-L3);
        }
        .${statePre}bg-gradient-${key}-P1${stateSelector} {
          --bg-gradient-c: var(--${key}-P1);
        }
        .${statePre}bg-gradient-${key}-P2${stateSelector} {
          --bg-gradient-c: var(--${key}-P2);
        }
        .${statePre}bg-gradient-${key}-P3${stateSelector} {
          --bg-gradient-c: var(--${key}-P3);
        }
        .${statePre}bg-gradient-${key}-V${stateSelector} {
          --bg-gradient-c: var(--${key}-V);
        }
        
        .${statePre}bg-gradient-${key}-A1${stateSelector} {
          --bg-gradient-c: var(--${key}-A1);
        }
        .${statePre}bg-gradient-${key}-A2${stateSelector} {
          --bg-gradient-c: var(--${key}-A2);
        }
        .${statePre}bg-gradient-${key}-A3${stateSelector} {
          --bg-gradient-c: var(--${key}-A3);
        }
      `);
    }
    return str;
  };

  let gradientsString = gerarGradients("normal") + gerarGradients("hover") + gerarGradients("active");

  return `
    
    ${gradientsString}

 
    .gradient{
      >[b]{
        background-image: linear-gradient( var(--bg-deg), var(--bg-c), var(--bg-gradient-c) );
      }
    }
    .gradient-over{
      >[b]{
        &:after {
          content: "";
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          position: absolute;
          
          background-image: linear-gradient( var(--bg-deg), transparent, var(--bg-gradient-c) );
        }
      }
    }

    .gradient-0deg{  --bg-deg: 0deg;  }
    .gradient-45deg{  --bg-deg: 45deg;  }
    .gradient-90deg{  --bg-deg: 90deg;  }
    .gradient-135deg{  --bg-deg: 135deg;  }
    .gradient-180deg{  --bg-deg: 180deg;  }
    .gradient-225deg{  --bg-deg: 225deg;  }
    .gradient-270deg{  --bg-deg: 270deg;  }
    .gradient-315deg{  --bg-deg: 315deg;  }
    .gradient-360deg{  --bg-deg: 360deg;  }
    
  `;
};

export default css;
