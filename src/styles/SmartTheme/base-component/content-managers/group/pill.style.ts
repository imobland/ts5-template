

const css = function(){

  return `

    .dir-row.group.pill {
      --pad-t: 0;
      --pad-b: 0;
    }
    .dir-col.group.pill {
      --pad-l: 0;
      --pad-r: 0;
    }

    .group.pill > [c] > [p] {
      --br-bl: 0;
      --br-br: 0;
      --br-tr: 0;
      --br-tl: 0;
    }

  `;
}

export default css;