const css = function (props) {
  return `

  
  .theme-light {
    --txt-sh: none;
    
    .SuperTitle {
      text-shadow: var(--txt-sh);
    }
    .Title {
      text-shadow: var(--txt-sh);    
    }
    .Desc {
      text-shadow: var(--txt-sh);
    }
    .Caption {
      text-shadow: var(--txt-sh);
    }
    .TextLabel {
      text-shadow: var(--txt-sh);
    }
    .SubText {
      text-shadow: var(--txt-sh);
    }
  }

  
  .theme-dark {
    --txt-sh: none;
    
    .SuperTitle {
      text-shadow: var(--txt-sh);
    }
    .Title {
      text-shadow: var(--txt-sh);    
    }
    .Desc {
      text-shadow: var(--txt-sh);
    }
    .Caption {
      text-shadow: var(--txt-sh);
    }
    .TextLabel {
      text-shadow: var(--txt-sh);
    }
    .SubText {
      text-shadow: var(--txt-sh);
    }
  }




  `;
};
export default css;
