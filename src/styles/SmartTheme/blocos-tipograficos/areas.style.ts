const css = function (props) {

  const fontAliases = props.ThemeConfig.fonts.aliases;

  return `

    ${props.ThemeConfig.fonts.elementsCss}

    .font-default{
      font-family: ${fontAliases.default};
    }
    .font-display{
      font-family: ${fontAliases.display};
    }
    .font-stylized{
      font-family: ${fontAliases.stylized};
    }
    .font-highlighted{
      font-family: ${fontAliases.highlighted};
    }
    .font-small{
      font-family: ${fontAliases.small};
    }
    .font-mono{
      font-family: Monospace;
    }


  `;
};
export default css;
