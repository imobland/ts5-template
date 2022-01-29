const css = function (props) {

  return `
    
    .bt-default {
      --bgh: var(--c0h);
      --bgs: var(--c0s);
      --bgt: var(--c0tdef);
      --bgctg: var(--ctg100);
      --bgop: 1;
      --ch: var(--c0h);
      --cs: var(--c0s);
      --ct: var(--c0t10);
      --ctg: var(--ctg20);
      --c-op: 1;
      cursor:pointer;
    }
    .bt-default:hover {
      --bgh: var(--c1h);
      --bgs: var(--c1s);
      --bgt: var(--c1tdef);
      --bgctg: var(--ctg50);
      --ch: var(--c0h);
      --cs: var(--c0s);
      --ct: var(--c0t100);
      --ctg: var(--ctg100);
    }
    .bt-default:active {
      --bgh: var(--c1h);
      --bgs: (var(--c1s) - 0.4);
      --bgt: var(--c1td2);
      --bgctg: var(--ctg50);
      --c-op: 0.5;
    }



    .bt-primary {
      --ch: var(--c0h);
      --cs: var(--c0s);
      --ct: var(--c0tdef);
      --ctg: var(--ctg100);
      --bgh: var(--c1h);
      --bgs: var(--c1s);
      --bg-op: 1;
      --bgt: var(--c1tdef);
      --bgctg: var(--ctg50);
      cursor:pointer;
    }
    .bt-primary:hover {
      --bgh: var(--c1h);
      --bgs: var(--c1s);
      --bgt: var(--c1tl1);
      --bgctg: var(--ctg50);
      --ch: var(--c0h);
      --cs: var(--c0s);
      --ct: var(--c0t100);
      --ctg: var(--ctg100);
    }
    .bt-primary:active {
      --bgh: var(--c1h);
      --bgs: (var(--c1s) - 0);
      --bgt: var(--c1td3);
      --bgctg: var(--ctg40);
      --c-op: 0.5;
    }

    .bt-alt {
      --ch: var(--c0h);
      --cs: var(--c0s);
      --ct: var(--c0tdef);
      --ctg: var(--ctg100);
      --bgh: var(--c2h);
      --bgs: var(--c2s);
      --bg-op: 1;
      --bgt: var(--c2tdef);
      --bgctg: var(--ctg50);
      cursor:pointer;
    }
    .bt-alt:hover {
      --bgh: var(--c2h);
      --bgs: var(--c2s);
      --bgt: var(--c2tl1);
      --bgctg: var(--ctg50);
      --ch: var(--c0h);
      --cs: var(--c0s);
      --ct: var(--c0t100);
      --ctg: var(--ctg100);
    }
    .bt-alt:active {
      --bgh: var(--c2h);
      --bgs: (var(--c2s) - 0);
      --bgt: var(--c2td3);
      --bgctg: var(--ctg40);
      --c-op: 0.5;
    }

  `;
};

export default css;