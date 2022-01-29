const css = function (props) {
  // .bg-C0 > [b] {
  //   --bgtformula: var(--bgt) !important;
  // }

  return `  

  .bg-C0 > [b],
  .h\\:bg-C0:hover > [b],
  [p].a\\:bg-C0:active  > [b] {
    --bgtformula: var(--bgt) !important;
  }
      

  .bg-C0,
  .h\\:bg-C0:hover,
  [p].a\\:bg-C0:active {
    
    --bgtformula: var(--bgt);

    --bgt: var(--c0t100);
    --bgh: var(--c0h);
    --bgs: var(--c0s);
    --bgsdef: var(--c0s);
    --bgmdown: var(--c0mdown);
    --bg-curve-l: var(--c0-curve-l);
    --bg-curve-d: var(--c0-curve-d);
    --bgctg: 1;
    --bgop: 1;
    --bgt0: var(--c0t0);
    --bgt5: var(--c0t5);
    --bgt10: var(--c0t10);
    --bgt15: var(--c0t15);
    --bgt20: var(--c0t20);
    --bgt25: var(--c0t25);
    --bgt30: var(--c0t30);
    --bgt35: var(--c0t35);
    --bgt40: var(--c0t40);
    --bgt45: var(--c0t45);
    --bgt50: var(--c0t50);
    --bgt55: var(--c0t55);
    --bgt60: var(--c0t60);
    --bgt65: var(--c0t65);
    --bgt70: var(--c0t70);
    --bgt75: var(--c0t75);
    --bgt80: var(--c0t80);
    --bgt85: var(--c0t85);
    --bgt90: var(--c0t90);
    --bgt95: var(--c0t95);
    --bgt100: var(--c0t100);

    --bg-vibrant: 1;

    --bgtl1: var(--c0tl1);
    --bgtl2: var(--c0tl2);
    --bgtl3: var(--c0tl3);
    --bgtl4: var(--c0tl4);
    --bgtl5: var(--c0tl5);
    --bgtdef: var(--c0tdef);
    --bgtd1: var(--c0td1);
    --bgtd2: var(--c0td2);
    --bgtd3: var(--c0td3);
    --bgtd4: var(--c0td4);
    --bgtd5: var(--c0td5);

    --ch: var(--c0ch);    
    --ct: var(--c0ct);    
    --cs: var(--c0cs);    

    --pch: var(--c0ch);    
    --pct: var(--c0ct);    
    --pcs: var(--c0cs);    
    
    
  }
  .ch-shadow{
    &.bg-C0 > [c]{  
    }
    &.bg-C0.bg-tom-d1 > [c]{
      --shh: var(--c0h);
      --shs: var(--c0s);
      --shmdown: var(--c0mdown);
      --sht: var(--c0t0);
      --shctg: var(--c0tg);
      --shop: .07;      
    }
    &.bg-C0.bg-tom-d2 > [c]{
      --shh: var(--c0h);
      --shs: var(--c0s);
      --shmdown: var(--c0mdown);
      --sht: var(--c0t0);
      --shctg: var(--c0tg);
      --shop: .1;      
    }
  }





  .bg-C4 > [b],
  .h\\:bg-C4:hover > [b],
  [p].a\\:bg-C4:active  > [b] {
    --bgtformula: var(--bgt) !important;
  }
      

  .bg-C4,
  .h\\:bg-C4:hover,
  [p].a\\:bg-C4:active {
    
    --bgtformula: var(--bgt);

    --bgt: var(--c4t0);
    --bgh: var(--c4h);
    --bgs: var(--c4s);
    --bgsdef: var(--c4s);
    --bgmdown: var(--c4mdown);
    --bg-curve-l: var(--c4-curve-l);
    --bg-curve-d: var(--c4-curve-d);
    --bgctg: 0;
    --bgop: 1;
    --bgt0: var(--c4t0);
    --bgt5: var(--c4t5);
    --bgt10: var(--c4t10);
    --bgt15: var(--c4t15);
    --bgt20: var(--c4t20);
    --bgt25: var(--c4t25);
    --bgt30: var(--c4t30);
    --bgt35: var(--c4t35);
    --bgt40: var(--c4t40);
    --bgt45: var(--c4t45);
    --bgt50: var(--c4t50);
    --bgt55: var(--c4t55);
    --bgt60: var(--c4t60);
    --bgt65: var(--c4t65);
    --bgt70: var(--c4t70);
    --bgt75: var(--c4t75);
    --bgt80: var(--c4t80);
    --bgt85: var(--c4t85);
    --bgt90: var(--c4t90);
    --bgt95: var(--c4t95);
    --bgt100: var(--c4t100);

    --bg-vibrant: 1;

    --bgtl1: var(--c4tl1);
    --bgtl2: var(--c4tl2);
    --bgtl3: var(--c4tl3);
    --bgtl4: var(--c4tl4);
    --bgtl5: var(--c4tl5);
    --bgtdef: var(--c4tdef);
    --bgtd1: var(--c4td1);
    --bgtd2: var(--c4td2);
    --bgtd3: var(--c4td3);
    --bgtd4: var(--c4td4);
    --bgtd5: var(--c4td5);

    --ch: var(--c4ch);    
    --ct: var(--c4ct);    
    --cs: var(--c4cs);    

    --pch: var(--c4ch);    
    --pct: var(--c4ct);    
    --pcs: var(--c4cs);    
    
    > [c]{
      --shh: var(--c4h);
      --shs: var(--c4s);
      --shmdown: var(--c4mdown);
      --sht: var(--c4t0);
      --shctg: var(--c4tg);
      --shop: .1;
    }
  }










    .bg-C1,
    .h\\:bg-C1:hover,
    [p].a\\:bg-C1:active  {

      --bgh: var(--c1h);
      --bgs: var(--c1s);
      --bgsdef: var(--c1s);
      --bgmdown: var(--c1mdown);
      --bg-curve-l: var(--c1-curve-l);
      --bg-curve-d: var(--c1-curve-d);
      --bgt: var(--c1tdef);
      --bgctg: var(--c1tg);
      --bgop: 1;
      --bgt0: var(--c1t0);
      --bgt5: var(--c1t5);
      --bgt10: var(--c1t10);
      --bgt15: var(--c1t15);
      --bgt20: var(--c1t20);
      --bgt25: var(--c1t25);
      --bgt30: var(--c1t30);
      --bgt35: var(--c1t35);
      --bgt40: var(--c1t40);
      --bgt45: var(--c1t45);
      --bgt50: var(--c1t50);
      --bgt55: var(--c1t55);
      --bgt60: var(--c1t60);
      --bgt65: var(--c1t65);
      --bgt70: var(--c1t70);
      --bgt75: var(--c1t75);
      --bgt80: var(--c1t80);
      --bgt85: var(--c1t85);
      --bgt90: var(--c1t90);
      --bgt95: var(--c1t95);
      --bgt100: var(--c1t100);
      --bg-vibrant: var(--c1vibrant);
      --bgtl1: var(--c1tl1);
      --bgtl2: var(--c1tl2);
      --bgtl3: var(--c1tl3);
      --bgtl4: var(--c1tl4);
      --bgtl5: var(--c1tl5);
      --bgtdef: var(--c1tdef);
      --bgtd1: var(--c1td1);
      --bgtd2: var(--c1td2);
      --bgtd3: var(--c1td3);
      --bgtd4: var(--c1td4);
      --bgtd5: var(--c1td5);

      --ch: var(--c1ch);    
      --ct: var(--c1ct);    
      --cs: var(--c1cs);   

      --pch: var(--c1ch);    
      --pct: var(--c1ct);    
      --pcs: var(--c1cs);     



      
      > [c]{
        --shh: var(--c1h);
        --shs: var(--c1s);
        --shmdown: var(--c1mdown);
        --sht: var(--c1t10);
        --shctg: var(--c1tg);
        --shop: .3;
      }
    }










    .bg-C2,
    .h\\:bg-C2:hover,
    [p].a\\:bg-C2:active {
      
      --bgh: var(--c2h);
      --bgs: var(--c2s);
      --bgsdef: var(--c2s);
      --bgmdown: var(--c2mdown);

      --bg-curve-l: var(--c2-curve-l);
      --bg-curve-d: var(--c2-curve-d);

      --bgt: var(--c2tdef);
      --bgctg: var(--c2tg);

      --bgop: 1;

      --bgt0: var(--c2t0);
      --bgt5: var(--c2t5);
      --bgt10: var(--c2t10);
      --bgt15: var(--c2t15);
      --bgt20: var(--c2t20);
      --bgt25: var(--c2t25);
      --bgt30: var(--c2t30);
      --bgt35: var(--c2t35);
      --bgt40: var(--c2t40);
      --bgt45: var(--c2t45);
      --bgt50: var(--c2t50);
      --bgt55: var(--c2t55);
      --bgt60: var(--c2t60);
      --bgt65: var(--c2t65);
      --bgt70: var(--c2t70);
      --bgt75: var(--c2t75);
      --bgt80: var(--c2t80);
      --bgt85: var(--c2t85);
      --bgt90: var(--c2t90);
      --bgt95: var(--c2t95);
      --bgt100: var(--c2t100);

      --bg-vibrant: var(--c2vibrant);

      --bgtl1: var(--c2tl1);
      --bgtl2: var(--c2tl2);
      --bgtl3: var(--c2tl3);
      --bgtl4: var(--c2tl4);
      --bgtl5: var(--c2tl5);
      --bgtdef: var(--c2tdef);
      --bgtd1: var(--c2td1);
      --bgtd2: var(--c2td2);
      --bgtd3: var(--c2td3);
      --bgtd4: var(--c2td4);
      --bgtd5: var(--c2td5);

      --ch: var(--c2ch);    
      --ct: var(--c2ct);    
      --cs: var(--c2cs);     

      --pch: var(--c2ch);    
      --pct: var(--c2ct);    
      --pcs: var(--c2cs);     
    }
    







    .bg-C3,
    .h\\:bg-C3:hover,
    [p].a\\:bg-C3:active  {
      
      --bgh: var(--c3h);
      --bgs: var(--c3s);
      --bgsdef: var(--c3s);
      --bgmdown: var(--c3mdown);
      --bg-curve-l: var(--c3-curve-l);
      --bg-curve-d: var(--c3-curve-d);
      
      --bgt: var(--c3tdef);
      --bgctg: var(--c3tg);

      --bgop: 1;
      --bgt0: var(--c3t0);
      --bgt5: var(--c3t5);
      --bgt10: var(--c3t10);
      --bgt15: var(--c3t15);
      --bgt20: var(--c3t20);
      --bgt25: var(--c3t25);
      --bgt30: var(--c3t30);
      --bgt35: var(--c3t35);
      --bgt40: var(--c3t40);
      --bgt45: var(--c3t45);
      --bgt50: var(--c3t50);
      --bgt55: var(--c3t55);
      --bgt60: var(--c3t60);
      --bgt65: var(--c3t65);
      --bgt70: var(--c3t70);
      --bgt75: var(--c3t75);
      --bgt80: var(--c3t80);
      --bgt85: var(--c3t85);
      --bgt90: var(--c3t90);
      --bgt95: var(--c3t95);
      --bgt100: var(--c3t100);
      --bg-vibrant: var(--c3vibrant);
      --bgtl1: var(--c3tl1);
      --bgtl2: var(--c3tl2);
      --bgtl3: var(--c3tl3);
      --bgtl4: var(--c3tl4);
      --bgtl5: var(--c3tl5);
      --bgtdef: var(--c3tdef);
      --bgtd1: var(--c3td1);
      --bgtd2: var(--c3td2);
      --bgtd3: var(--c3td3);
      --bgtd4: var(--c3td4);
      --bgtd5: var(--c3td5);

      --ch: var(--c3ch);    
      --ct: var(--c3ct);    
      --cs: var(--c3cs);     

      --pch: var(--c3ch);    
      --pct: var(--c3ct);    
      --pcs: var(--c3cs);     

      > [c]{
        --shh: var(--c2h);
        --shs: var(--c2s);
        --shmdown: var(--c2mdown);
        --sht: var(--c2td3);
        --shctg: var(--c2tg);
        --shop: .5;
      }
      

    }
  

    


  `;
};

export default css;