
const style = function (props) {

  return `

    .box {
      // Default
      padding-top    : var(--pad-t);
      padding-bottom : var(--pad-b);
      padding-right  : var(--pad-r);
      padding-left   : var(--pad-l);
    }
    .box.pad-in-content {
      padding-top: 0;
      padding-bottom:  0;
      padding-right:  0;
      padding-left:  0;
      > [c] {
        padding-top: var(--pad-t);
        padding-bottom: var(--pad-b);
        padding-right: var(--pad-r);
        padding-left: var(--pad-l);
      }
    }

    .A0 {
      width: 100%;
    
      --pad-t : var(--pad-12); 
      --pad-b : var(--pad-12); 
      --pad-l : var(--pad-12); 
      --pad-r : var(--pad-12); 
    
      > [c] {
        width: 1200px;
      }
    
      &:not(.group) > [c] {
        --gap: var(--gap-8);
        --gap-br: var(--gap-8);
      }
      &.group:not([class*=" gap-"]) > [c] {
        --gap: 0;
        --gap-br: 0;
      }
    }
    .gap-A0 > [c] {
      --gap: var(--gap-8);
    }
    .gap-br-A0 > [c] {
      --gap-br: var(--gap-8);
    }
    // Transmite radius automático para os filhos, caso ele tenha um board e filhos não tenham setado a si mesmos
    .A0.box {
      --b-radius: var(--b-radius-0);
      --b-radius-tl: var(--b-radius-0);
      --b-radius-tr: var(--b-radius-0);
      --b-radius-bl: var(--b-radius-0);
      --b-radius-br: var(--b-radius-0);
      > [b] {
        border-radius: 0px;
      }
    }


    
    .A1 {
      --pad-t : var(--pad-11); 
      --pad-b : var(--pad-11); 
      --pad-l : var(--pad-11); 
      --pad-r : var(--pad-11); 
    
      // Emite
      &:not(.group) > [c] {
        --gap: var(--gap-7);
        --gap-br: var(--gap-7);
      }
      &.group:not([class*=" gap-"]) > [c] {

        --gap: 0;
        --gap-br: 0;
      }
    }
    .gap-A1 > [c] {
      --gap: var(--gap-7);
    }
    .gap-br-A1 > [c] {
      --gap-br: var(--gap-7);
    }
    .A1.box {
      --b-radius: var(--b-radius-1);
      --b-radius-tl: var(--b-radius-1);
      --b-radius-tr: var(--b-radius-1);
      --b-radius-bl: var(--b-radius-1);
      --b-radius-br: var(--b-radius-1);
    }



    .A2 {
      
      --pad-t : var(--pad-10); 
      --pad-b : var(--pad-10); 
      --pad-l : var(--pad-10); 
      --pad-r : var(--pad-10); 
    
      // Emite
      &:not(.group) > [c] {
        --gap: var(--gap-6);
        --gap-br: var(--gap-6);
      }
      &.group:not([class*=" gap-"]) > [c] {

        --gap: 0;
        --gap-br: 0;
      }
    }
    .gap-A2 > [c] {
      --gap: var(--gap-6);
    }
    .gap-br-A2 > [c] {
      --gap-br: var(--gap-6);
    }
    .A2.box {
      --b-radius: var(--b-radius-2);
      --b-radius-tl: var(--b-radius-2);
      --b-radius-tr: var(--b-radius-2);
      --b-radius-bl: var(--b-radius-2);
      --b-radius-br: var(--b-radius-2);
    }
    



    
    .A3 {
      
      --pad-t : var(--pad-9); 
      --pad-b : var(--pad-9); 
      --pad-l : var(--pad-9); 
      --pad-r : var(--pad-9); 
    
      // Emite
      &:not(.group) > [c] {
        --gap: var(--gap-5);
        --gap-br: var(--gap-5);
      }
      &.group:not([class*=" gap-"]) > [c] {

        --gap: 0;
        --gap-br: 0;
      }
    }
    .gap-A3 > [c] {
      --gap: var(--gap-5);
    }
    .gap-br-A3 > [c] {
      --gap-br: var(--gap-5);
    }
    .A3.box {
      --b-radius: var(--b-radius-3);
      --b-radius-tl: var(--b-radius-3);
      --b-radius-tr: var(--b-radius-3);
      --b-radius-bl: var(--b-radius-3);
      --b-radius-br: var(--b-radius-3);
    }
    




    .A4 {
      
      --pad-t : var(--pad-8); 
      --pad-b : var(--pad-8); 
      --pad-l : var(--pad-8); 
      --pad-r : var(--pad-8); 
    
      // Emite
      &:not(.group) > [c] {
        --gap: var(--gap-4);
        --gap-br: var(--gap-4);
      }
      &.group:not([class*=" gap-"]) > [c] {

        --gap: 0;
        --gap-br: 0;
      }
    }
    .gap-A4 > [c] {
      --gap: var(--gap-4);
    }
    .gap-br-A4 > [c] {
      --gap-br: var(--gap-4);
    }
    .A4.box {
      --b-radius: var(--b-radius-4);
      --b-radius-tl: var(--b-radius-4);
      --b-radius-tr: var(--b-radius-4);
      --b-radius-bl: var(--b-radius-4);
      --b-radius-br: var(--b-radius-4);
    }




    .A5 {
      
      --pad-t : var(--pad-7); 
      --pad-b : var(--pad-7); 
      --pad-l : var(--pad-7); 
      --pad-r : var(--pad-7); 
    
      // Emite
      &:not(.group) > [c] {
        --gap: var(--gap-3);
        --gap-br: var(--gap-3);
      }
      &.group:not([class*=" gap-"]) > [c] {

        --gap: 0;
        --gap-br: 0;
      }
    }
    .gap-A5 > [c] {
      --gap: var(--gap-3);
    }
    .gap-br-A5 > [c] {
      --gap-br: var(--gap-3);
    }
    .A5.box {
      --b-radius: var(--b-radius-5);
      --b-radius-tl: var(--b-radius-5);
      --b-radius-tr: var(--b-radius-5);
      --b-radius-bl: var(--b-radius-5);
      --b-radius-br: var(--b-radius-5);
    }




    .A6 {
      
      --pad-t : var(--pad-6); 
      --pad-b : var(--pad-6); 
      --pad-l : var(--pad-6); 
      --pad-r : var(--pad-6); 
    
      // Emite
      &:not(.group) > [c] {
        --gap: var(--gap-2);
        --gap-br: var(--gap-2);
      }
      &.group:not([class*=" gap-"]) > [c] {

        --gap: 0;
        --gap-br: 0;
      }
    }
    .gap-A6 > [c] {
      --gap: var(--gap-2);
    }
    .gap-br-A6 > [c] {
      --gap-br: var(--gap-2);
    }
    .A6.box {
      --b-radius: var(--b-radius-6);
      --b-radius-tl: var(--b-radius-6);
      --b-radius-tr: var(--b-radius-6);
      --b-radius-bl: var(--b-radius-6);
      --b-radius-br: var(--b-radius-6);
    }

  `;


};
export default style;
