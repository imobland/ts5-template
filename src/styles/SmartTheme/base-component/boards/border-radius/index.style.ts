
import levels from './level.style'

const style = function (props) {

  // BBR: base border radius
  const str =  `

    .box, 
    .pic {
      --bbr: calc( var(--ams) * .6 );
      --br-tl: var(--bbr);
      --br-tr: var(--bbr);
      --br-bl: var(--bbr);
      --br-br: var(--bbr);
    }
    .bel {
      --bbr: calc( var(--ams) * .3 );
      --br-tl: var(--bbr);
      --br-tr: var(--bbr);
      --br-bl: var(--bbr);
      --br-br: var(--bbr);
    }

    ${levels(props)}

    .box,
    .bel,
    .pic,
    .box > [b],
    .bel > [b],
    .pic > [b],
    .box > [b]:before,
    .bel > [b]:before,
    .pic > [b]:before,
    .box > [b]:after,
    .bel > [b]:after,
    .pic > [b]:after,
    .box > [c],
    .bel > [c],
    .pic > [c]{
      border-radius: var(--br-tl) var(--br-tr) var(--br-br) var(--br-bl) !important;
    }

  `;

  return str;
};

export default style;
