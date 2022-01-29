
const ResponsiveInnerPads = function(pre,pos, mediaQuery){
  let str = "";

  if(mediaQuery){ str = str+` @media (max-width: ${mediaQuery}) { `; }

  str = str+`
    .${pre}ipad-1 { --ipm: 1; }
    .${pre}ipad-3\\/4 { --ipm: .75; }
    .${pre}ipad-2\\/3 { --ipm: .66; }
    .${pre}ipad-1\\/2 { --ipm: .5; }
    .${pre}ipad-1\\/3 { --ipm: .33333; }
    .${pre}ipad-1\\/4 { --ipm: .25; }
    .${pre}ipad-1\\/5 { --ipm: .20; }
  `;
  
  if(mediaQuery){ str = str+`}`;}

  return str;
}

const DirectionInnerPads = function(pre,pos, mediaQuery){
  let str = "";

  if(mediaQuery){ str = str+` @media (max-width: ${mediaQuery}) { `; }

  str = str+`
    .${pre}dir-col.inner-pads > [c] {
      > [p]:not(:first-child) {
          --pad-t: calc( var(--ch-pad-t) * var(--ipm) );
      }
      > [p]:not(:last-child) {
        --pad-b: calc( var(--ch-pad-b) * var(--ipm) );
      }
    }
    .${pre}dir-row.inner-pads > [c] {
      > [p]:not(:first-child) {
          --pad-l: calc( var(--ch-pad-l) * var(--ipm) );
      }
      > [p]:not(:last-child) {
        --pad-r: calc( var(--ch-pad-r) * var(--ipm) );
      }
    }
  `;
  
  if(mediaQuery){ str = str+`}`;}

  return str;
}

const css = function(){

  return `
    ${ResponsiveInnerPads("", "", false)}
    ${ResponsiveInnerPads("lg\\:", "", "1199px")}
    ${ResponsiveInnerPads("md\\:", "", "991px")}
    ${ResponsiveInnerPads("sm\\:", "", "767px")}
    ${ResponsiveInnerPads("xs\\:", "", "575px")}

    ${DirectionInnerPads("", "", false)}
    ${DirectionInnerPads("lg\\:", "", "1199px")}
    ${DirectionInnerPads("md\\:", "", "991px")}
    ${DirectionInnerPads("sm\\:", "", "767px")}
    ${DirectionInnerPads("xs\\:", "", "575px")}
  `;
}

export default css;