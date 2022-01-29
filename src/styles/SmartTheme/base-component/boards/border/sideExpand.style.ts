
const gerarClasses = function (pre, mediaQuery) {
  let str = '';

  if(mediaQuery){ str = str+` @media (max-width: ${mediaQuery}) { `; }

  str = str+`

    [p=struct].border.${pre}bd-side-all>[b],
    [p="input"].border.${pre}bd-side-all { 
      border: var(--bd-formula); 
    }
    .${pre}bd-side-all.bd-expand{
      border: var(--bdw) solid transparent;
      >[b]{ 
        margin: var(--bdwi); 
      }
    }
  
    [p=struct].border.${pre}bd-side-l>[b],
    [p="input"].border.${pre}bd-side-l { 
      border: 0px solid transparent;
      border-left: var(--bd-formula); 
    }
    .${pre}bd-side-l.bd-expand{
      border: 0px solid transparent;
      border-left: var(--bdw) solid transparent;
      >[b]{ 
        margin: 0 0 0 var(--bdwi); 
      }
    }

    [p=struct].border.${pre}bd-side-r>[b],
    [p="input"].border.${pre}bd-side-r {
      border: 0px solid transparent; 
      border-right: var(--bd-formula); 
    }
    .${pre}bd-side-r.bd-expand{
      border: 0px solid transparent;
      border-right: var(--bdw) solid transparent;
      >[b]{ 
        margin: 0 var(--bdwi) 0 0; 
      }
    }

    [p=struct].border.${pre}bd-side-t>[b],
    [p="input"].border.${pre}bd-side-t { 
      border: 0px solid transparent;
      border-top: var(--bd-formula); 
    }
    .${pre}bd-side-t.bd-expand{
      border: 0px solid transparent;
      border-top: var(--bdw) solid transparent;
      >[b]{ 
        margin: var(--bdwi) 0 0 0; 
      }
    }

    [p=struct].border.${pre}bd-side-b>[b],
    [p="input"].border.${pre}bd-side-b { 
      border: 0px solid transparent;
      border-bottom: var(--bd-formula); 
    }
    .${pre}bd-side-b.bd-expand{
      border: 0px solid transparent;
      border-bottom: var(--bdw) solid transparent;
      >[b]{ 
        margin: 0 0 var(--bdwi) 0; 
      }
    }

    [p=struct].border.${pre}bd-side-y>[b],
    [p="input"].border.${pre}bd-side-y { 
      border: 0px solid transparent;
      border-bottom: var(--bd-formula); 
      border-top: var(--bd-formula); 
    }
    .${pre}bd-side-y.bd-expand{
      border: 0px solid transparent;
      border-bottom: var(--bdw) solid transparent;
      border-top: var(--bdw) solid transparent;
      >[b]{ 
        margin: var(--bdwi) 0; 
      }
    }

    [p=struct].border.${pre}bd-side-x>[b],
    [p="input"].border.${pre}bd-side-x { 
      border: 0px solid transparent;
      border-right: var(--bd-formula); 
      border-left: var(--bd-formula); 
    }
    .${pre}bd-side-x.bd-expand{
      border: 0px solid transparent;
      border-right: var(--bdw) solid transparent;
      border-left: var(--bdw) solid transparent;
      >[b]{ 
        margin: 0 var(--bdwi); 
      }
    }
  `  

  if(mediaQuery){ str = str+`}`;}

  return str;
};

const style = function () {
  //
  let str = `

    .border.bd-expand{
      --bdwi: calc( var(--bdw) * -1);
    }
      
    ${gerarClasses("", false)}  
    ${gerarClasses("lg\\:", "1199px")}
    ${gerarClasses("md\\:", "991px")}
    ${gerarClasses("sm\\:", "767px")}
    ${gerarClasses("xs\\:", "575px")}
  `;
  return str;
};

export default style;
