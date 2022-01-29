

const style = function (props) {
  return `
      
    .animator{

      &.stop * {
          animation-name: inherit;
      }
    }

    .anime.anime-off,
    .anime-off .anime
    {
      animation-name: inherit !important;
      opacity: 0;
    }
    

    .anime {
      transition: none !important;
      animation-direction: normal;
      animation-iteration-count: 1;
      animation-timing-function: ease-out;
      animation-fill-mode: backwards;

      &.always-visible {
          opacity: 1 !important;
      }
    }


    // DURATION ###############################
      .in-duration-50,
      .animator.out .out-duration-50 {
          animation-duration: 5s;
      }

      .in-duration-45,
      .animator.out .out-duration-45 {
          animation-duration: 4.5s;
      }

      .in-duration-40,
      .animator.out .out-duration-40 {
          animation-duration: 4s;
      }

      .in-duration-35,
      .animator.out .out-duration-35 {
          animation-duration: 3.5s;
      }

      .in-duration-30,
      .animator.out .out-duration-30 {
          animation-duration: 3;
      }

      .in-duration-25,
      .animator.out .out-duration-25 {
          animation-duration: 2.5s;
      }

      .in-duration-20,
      .animator.out .out-duration-20 {
          animation-duration: 2s;
      }

      .in-duration-19,
      .animator.out .out-duration-19 {
          animation-duration: 1.9s;
      }

      .in-duration-18,
      .animator.out .out-duration-18 {
          animation-duration: 1.8s;
      }

      .in-duration-17,
      .animator.out .out-duration-17 {
          animation-duration: 1.7s;
      }

      .in-duration-16,
      .animator.out .out-duration-16 {
          animation-duration: 1.6s;
      }

      .in-duration-15,
      .animator.out .out-duration-15 {
          animation-duration: 1.5s;
      }

      .in-duration-14,
      .animator.out .out-duration-14 {
          animation-duration: 1.4s;
      }

      .in-duration-13,
      .animator.out .out-duration-13 {
          animation-duration: 1.3s;
      }

      .in-duration-12,
      .animator.out .out-duration-12 {
          animation-duration: 1.2s;
      }

      .in-duration-11,
      .animator.out .out-duration-11 {
          animation-duration: 1.1s;
      }

      .in-duration-10,
      .animator.out .out-duration-10 {
          animation-duration: 1s;
      }

      .in-duration-9,
      .animator.out .out-duration-9 {
          animation-duration: .9s;
      }

      .in-duration-8,
      .animator.out .out-duration-8 {
          animation-duration: .8s;
      }

      .in-duration-7,
      .animator.out .out-duration-7 {
          animation-duration: .7s;
      }

      .in-duration-6,
      .animator.out .out-duration-6 {
          animation-duration: .6s;
      }

      .in-duration-5,
      .animator.out .out-duration-5 {
          animation-duration: .5s;
      }

      .in-duration-4,
      .animator.out .out-duration-4 {
          animation-duration: .4s;
      }

      .in-duration-3,
      .animator.out .out-duration-3 {
          animation-duration: .3s;
      }

      .in-duration-2,
      .animator.out .out-duration-2 {
          animation-duration: .2s;
      }

      .in-duration-1,
      .animator.out .out-duration-1 {
          animation-duration: .1s;
      }




    // DELAY #########################
      .in-delay-50,
      .animator.out .out-delay-50 {
          animation-delay: 5s;
      }
      .in-delay-45,
      .animator.out .out-delay-45 {
          animation-delay: 4.5s;
      }
      .in-delay-40,
      .animator.out .out-delay-40 {
          animation-delay: 4s;
      }
      .in-delay-35,
      .animator.out .out-delay-35 {
          animation-delay: 3.5s;
      }
      .in-delay-30,
      .animator.out .out-delay-30 {
          animation-delay: 3s;
      }

      .in-delay-25,
      .animator.out .out-delay-25 {
          animation-delay: 2.5s;
      }

      .in-delay-24,
      .animator.out .out-delay-24 {
          animation-delay: 2.4s;
      }

      .in-delay-23,
      .animator.out .out-delay-23 {
          animation-delay: 2.3s;
      }

      .in-delay-22,
      .animator.out .out-delay-22 {
          animation-delay: 2.2s;
      }

      .in-delay-21,
      .animator.out .out-delay-21 {
          animation-delay: 2.1s;
      }

      .in-delay-20,
      .animator.out .out-delay-20 {
          animation-delay: 2s;
      }

      .in-delay-19,
      .animator.out .out-delay-19 {
          animation-delay: 1.9s;
      }

      .in-delay-18,
      .animator.out .out-delay-18 {
          animation-delay: 1.8s;
      }

      .in-delay-17,
      .animator.out .out-delay-17 {
          animation-delay: 1.7s;
      }

      .in-delay-16,
      .animator.out .out-delay-16 {
          animation-delay: 1.6s;
      }

      .in-delay-15,
      .animator.out .out-delay-15 {
          animation-delay: 1.5s;
      }

      .in-delay-14,
      .animator.out .out-delay-14 {
          animation-delay: 1.4s;
      }

      .in-delay-13,
      .animator.out .out-delay-13 {
          animation-delay: 1.3s;
      }

      .in-delay-12,
      .animator.out .out-delay-12 {
          animation-delay: 1.2s;
      }

      .in-delay-11,
      .animator.out .out-delay-11 {
          animation-delay: 1.1s;
      }

      .in-delay-10,
      .animator.out .out-delay-10 {
          animation-delay: 1s
      }

      .in-delay-9,
      .animator.out .out-delay-9 {
          animation-delay: .9s;
      }

      .in-delay-8,
      .animator.out .out-delay-8 {
          animation-delay: .8s;
      }

      .in-delay-7,
      .animator.out .out-delay-7 {
          animation-delay: .7s;
      }

      .in-delay-6,
      .animator.out .out-delay-6 {
          animation-delay: .6s;
      }

      .in-delay-5,
      .animator.out .out-delay-5 {
          animation-delay: .5s;
      }

      .in-delay-4,
      .animator.out .out-delay-4 {
          animation-delay: .4s;
      }

      .in-delay-3,
      .animator.out .out-delay-3 {
          animation-delay: .3s;
      }

      .in-delay-2,
      .animator.out .out-delay-2 {
          animation-delay: .2s;
      }

      .in-delay-1,
      .animator.out .out-delay-1 {
          animation-delay: .1s;
      }




    // TIMING #########################
    // apenas .timing-* ativa o timing tanto pra entrada quanto pra saida
    // se precisar modificar o timning pra saida, deve-se usar o .out-timing-*
    
      .anime.timing-ease,
      .animator.out .out-timing-ease {
          animation-timing-function: ease;
      }

      .anime.timing-ease-in,
      .animator.out .out-timing-ease-in {
          animation-timing-function: ease-in;
      }

      .anime.timing-ease-in-out,
      .animator.out .out-timing-ease-in-out {
          animation-timing-function: ease-in-out;
      }

      .anime.timing-ease-out,
      .animator.out .out-timing-ease-out {
          animation-timing-function: ease-out;
      }

      .anime.timing-linear,
      .animator.out .out-timing-linear {
          animation-timing-function: linear;
      }

      .anime.timing-elastic,
      .animator.out .out-timing-elastic {
          animation-timing-function: cubic-bezier(0.64, 0.57, 0.67, 1.3);
      }




    // INTERATION COUNT  // 1 by default #########################
      .anime.infinite {
          animation-iteration-count: infinite;
      }
      .animator.out .out-1-times {
          animation-iteration-count: 1;
      }

      .2-times {
          animation-iteration-count: 2;
      }

      .3-times {
          animation-iteration-count: 3;
      }

      .4-times {
          animation-iteration-count: 4;
      }

      .5-times {
          animation-iteration-count: 5;
      }





    // DIRECTION #########################
      // Vai e volta 
      .direction-alternate,
      .animator.out .direction-alternate {
          animation-direction: alternate !important;
      }

      .direction-normal,
      .animator.out .out-direction-normal {
          animation-direction: normal !important;
      }






    .anime.from-up {
      animation-name: fromUp;
    }

    .animator.out .anime.to-up {
      animation-name: toUp;
    }

    @keyframes fromUp {
      from {
          opacity: 0;
          transform: translateY(-50px);
      }
      to {
          opacity: inherit;
      }
    }

    @keyframes toUp {
      from {
          opacity: inherit;
      }
      to {
          opacity: 0;
          transform: translateY(-50px);
      }
    }

    .anime.from-up-far {
      animation-name: fromUpFar;
    }

    .animator.out .anime.to-up-far {
      animation-name: toUpFar;
    }

    @keyframes fromUpFar {
      from {
          transform: translateY(-100%);
      }
      to {
          transform: translateY(0);
      }
    }

    @keyframes toUpFar {
      from {
          transform: translateY(0);
      }
      to {
          transform: translateY(-100%);
      }
    }

    .anime.from-down {
      animation-name: fromDown;
    }

    .animator.out .anime.to-down {
      animation-name: toDown;
    }

    @keyframes fromDown {
      from {
          opacity: 0;
          transform: translateY(50px);
      }
      to {
          opacity: 1;
          transform: translateY(0px);
      }
    }

    @keyframes toDown {
      from {
          opacity: 1;
          transform: translateY(0px);
      }
      to {
          opacity: 0;
          transform: translateY(50px);
      }
    }

    .anime.from-down-far {
      animation-name: fromDownFar;
    }

    .animator.out .anime.to-down-far {
      animation-name: toDownFar;
    }

    @keyframes fromDownFar {
      from {
          transform: translateY(100%);
      }
      to {
          transform: translateY(0);
      }
    }

    @keyframes toDownFar {
      from {
          transform: translateY(0);
      }
      to {
          transform: translateY(100%);
      }
    }

    .anime.from-left {
      animation-name: fromLeft;
      transform-style: preserve-3d;
    }

    .animator.out .anime.to-left {
      animation-name: toLeft;
    }

    @keyframes fromLeft {
      from {
          opacity: 0;
          transform: translateX(-50px);
          transform-style: preserve-3d;
      }
      to {
          opacity: 1;
          transform: translateX(0px);
          transform-style: preserve-3d;
      }
    }

    @keyframes toLeft {
      from {
          opacity: 1;
          transform: translateX(0px);
      }
      to {
          opacity: 0;
          transform: translateX(-50px);
      }
    }

    .anime.from-left-far {
      animation-name: fromLeftFar;
    }

    .animator.out .anime.to-left-far {
      animation-name: toLeftFar;
    }

    @keyframes fromLeftFar {
      from {
          transform: translateX(-100%);
      }
      to {
          transform: translateX(0);
      }
    }

    @keyframes toLeftFar {
      from {
          transform: translateX(0);
      }
      to {
          transform: translateX(-100%);
      }
    }

    .anime.from-down-short {
      animation-name: fromDownShort;
    }

    @keyframes fromDownShort {
      from {
          opacity: 0;
          transform: translateY(20px);
      }
      to {}
    }

    .anime.from-right {
      animation-name: fromRight;
    }

    .animator.out .anime.to-right {
      animation-name: toRight;
    }

    @keyframes fromRight {
      from {
          opacity: 0;
          transform: translateX(50px);
      }
      to {}
    }

    @keyframes toRight {
      from {}
      to {
          opacity: 0;
          transform: translateX(50px);
      }
    }

    .anime.from-right-far {
      animation-name: fromRightFar;
    }

    .animator.out .anime.to-right-far {
      animation-name: toRightFar;
    }

    @keyframes fromRightFar {
      from {
          transform: translateX(100%);
      }
      to {}
    }

    @keyframes toRightFar {
      from {}
      to {
          transform: translateX(100%);
      }
    }

    .zoom-in {
      animation-name: zoomIn;
    }

    .animator.out .to-zoom-in {
      animation-name: zoomIn;
    }

    .zoom-out {
      animation-name: zoomOut;
    }

    .animator.out .to-zoom-out {
      animation-name: toZoomOut;
    }

    @keyframes zoomIn {
      from {
          opacity: 0;
          transform: translateZ(250px);
      }
      to {}
    }

    @keyframes zoomOut {
      from {
          opacity: 0;
          transform: translateZ(-80px);
      }
      to {}
    }

    @keyframes toZoomIn {
      from {}
      to {
          opacity: 0;
          transform: translateZ(250px);
      }
    }

    @keyframes toZoomOut {
      from {}
      to {
          opacity: 0;
          transform: translateZ(-80px);
      }
    }

    .zoom-in-short {
      animation-name: zoomInShort;
    }

    .animator.out .to-zoom-in-short {
      animation-name: zoomInShort;
    }

    .zoom-out-short {
      animation-name: zoomOutShort;
    }

    .animator.out .to-zoom-out-short {
      animation-name: toZoomOutShort;
    }

    @keyframes zoomInShort {
      from {
          transform: translateZ(50px);
      }
      to {
          opacity: 1
      }
    }

    @keyframes zoomOutShort {
      from {
          transform: translateZ(-20px);
      }
      to {
          opacity: 1
      }
    }

    @keyframes toZoomInShort {
      from {
          opacity: 1
      }
      to {
          opacity: 0;
          transform: translateZ(50px);
      }
    }

    @keyframes toZoomOutShort {
      from {
          opacity: 1;
      }
      to {
          opacity: 0;
          transform: translateZ(-20px);
      }
    }

    .zoom-in-far {
      animation-name: zoomInFar;
    }

    .animator.out .to-zoom-in-far {
      animation-name: zoomInFar;
    }

    .zoom-out-far {
      animation-name: zoomOutFar;
    }

    .animator.out .to-zoom-out-far {
      animation-name: toZoomOutFar;
    }

    @keyframes zoomInFar {
      from {
          transform: translateZ(1000px);
      }
      to {
          opacity: 1;
          transform: translateZ(0);
      }
    }

    @keyframes zoomOutFar {
      from {
          transform: translateZ(-1000px);
      }
      to {
          opacity: 1
      }
    }

    @keyframes toZoomInFar {
      from {
          opacity: 1
      }
      to {
          opacity: 0;
          transform: translateZ(1000px);
      }
    }

    @keyframes toZoomOutFar {
      from {
          opacity: 1;
      }
      to {
          opacity: 0;
          transform: translateZ(-1000px);
      }
    }

    .scale-in {
      animation-name: scaleIn;
    }

    .animator.out .to-scale-in {
      animation-name: scaleIn;
    }

    .scale-out {
      animation-name: scaleOut;
    }

    .animator.out .to-scale-out {
      animation-name: toScaleOut;
    }

    @keyframes scaleIn {
      from {
          transform: scale(1.5);
      }
      to {
          opacity: 1;
      }
    }

    @keyframes scaleOut {
      from {
          transform: scale(.66);
      }
      to {
          opacity: 1;
      }
    }

    @keyframes toScaleIn {
      from {
          opacity: 1;
      }
      to {
          opacity: 0;
          transform: scale(1.5);
      }
    }

    @keyframes toScaleOut {
      from {
          opacity: 1;
      }
      to {
          opacity: 0;
          transform: scale(.66);
      }
    }

    .scale-in-far {
      animation-name: scaleInFar;
    }

    .animator.out .to-scale-in-far {
      animation-name: scaleInFar;
    }

    .scale-out-far {
      animation-name: scaleOutFar;
    }

    .animator.out .to-scale-out-far {
      animation-name: toScaleOutFar;
    }

    @keyframes scaleInFar {
      from {
          transform: scale(20);
      }
      to {
          opacity: 1;
      }
    }

    @keyframes scaleOutFar {
      from {
          transform: scale(0);
      }
      to {
          opacity: 1;
      }
    }

    @keyframes toScaleInFar {
      from {
          opacity: 1;
      }
      to {
          opacity: 0;
          transform: scale(20);
      }
    }

    @keyframes toScaleOutFar {
      from {
          opacity: 1;
      }
      to {
          opacity: 0;
          transform: scale(0);
      }
    }

    .rotate-z {
      animation-name: rotateZ;
    }

    .animator.out .to-rotate-z {
      animation-name: rotateZOut;
    }

    .rotate-z-reverse {
      animation-name: rotateZReverse;
    }

    .animator.out .to-rotate-z-reverse {
      animation-name: rotateZReverseOut;
    }

    @keyframes rotateZ {
      from {
          transform: rotateZ(30deg);
      }
      to {
          opacity: 1;
      }
    }

    @keyframes rotateZReverse {
      from {
          transform: rotateZ(-30deg);
      }
      to {
          opacity: 1;
      }
    }

    @keyframes rotateZOut {
      from {}
      to {
          opacity: 0;
          transform: rotateZ(30deg);
      }
    }

    @keyframes rotateZReverseOut {
      from {}
      to {
          opacity: 0;
          transform: rotateZ(-30deg);
      }
    }

    .rotate-y {
      animation-name: rotateY;
    }

    .animator.out .to-rotate-y {
      animation-name: rotateYOut;
    }

    .rotate-y-reverse {
      animation-name: rotateYReverse;
    }

    .animator.out .to-rotate-y-reverse {
      animation-name: rotateYReverseOut;
    }

    @keyframes rotateY {
      from {
          transform: rotateY(30deg);
      }
      to {
          opacity: 1;
      }
    }

    @keyframes rotateYReverse {
      from {
          transform: rotateY(-30deg);
      }
      to {
          opacity: 1;
      }
    }

    @keyframes rotateYOut {
      from {}
      to {
          opacity: 0;
          transform: rotateY(30deg);
      }
    }

    @keyframes rotateYReverseOut {
      from {}
      to {
          opacity: 0;
          transform: rotateY(-30deg);
      }
    }

    .rotate-x {
      animation-name: rotateX;
    }

    .animator.out .to-rotate-x {
      animation-name: rotateXOut;
    }

    .rotate-x-reverse {
      animation-name: rotateXReverse;
    }

    .animator.out .to-rotate-x-reverse {
      animation-name: rotateXReverseOut;
    }

    @keyframes rotateX {
      from {
          transform: rotateX(30deg);
      }
      to {
          opacity: 1;
      }
    }

    @keyframes rotateXReverse {
      from {
          transform: rotateX(-30deg);
      }
      to {
          opacity: 1;
      }
    }

    @keyframes rotateXOut {
      from {}
      to {
          opacity: 0;
          transform: rotateX(30deg);
      }
    }

    @keyframes rotateXReverseOut {
      from {}
      to {
          opacity: 0;
          transform: rotateX(-30deg);
      }
    }

    .anime.blur {
      animation-name: blur;
    }

    .animator.out .to-blur {
      animation-name: toBlur;
    }

    @keyframes blur {
      from {
          opacity: 0;
          filter: blur(4px);
      }
      50% {
          opacity: 0.7;
      }
      to {
          opacity: 1;
      }
    }

    @keyframes toBlur {
      from {
          opacity: 1;
      }
      50% {
          opacity: 0.7;
      }
      to {
          opacity: 0;
          filter: blur(4px);
      }
    }

    .anime.blur-far {
      animation-name: blurFar;
    }

    .animator.out .to-blur-far {
      animation-name: toBlurFar;
    }

    @keyframes blurFar {
      from {
          opacity: 0;
          filter: blur(20px);
      }
      50% {
          opacity: 0.7;
      }
      to {
          opacity: 1;
      }
    }

    @keyframes toBlurFar {
      from {
          opacity: 1;
      }
      50% {
          opacity: 0.7;
      }
      to {
          opacity: 0;
          filter: blur(20px);
      }
    }

    // ##########################################################################
    // ##########################################################################
    // ##########################################################################
    // ##########################################################################
    // flip   flipInX   flipInY   rotateIn   bounceIn  fadeIn   zoomIn   rollIn
    @keyframes flip {
      from {
          transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
          animation-timing-function: ease-out;
      }
      40% {
          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
          animation-timing-function: ease-out;
      }
      50% {
          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
          animation-timing-function: ease-in;
      }
      80% {
          transform: perspective(400px) scale3d(.95, .95, .95);
          animation-timing-function: ease-in;
      }
      to {
          transform: perspective(400px);
          animation-timing-function: ease-in;
      }
    }

    .anime.flip {
      backface-visibility: visible;
      animation-name: flip;
    }

    @keyframes flipInX {
      from {
          transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
          animation-timing-function: ease-in;
          opacity: 0;
      }
      40% {
          transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
          animation-timing-function: ease-in;
      }
      60% {
          transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
          opacity: 1;
      }
      80% {
          transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
      }
      to {
          transform: perspective(400px);
      }
    }

    .flipInX {
      backface-visibility: visible;
      animation-name: flipInX;
    }

    @keyframes flipInY {
      from {
          transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
          animation-timing-function: ease-in;
          opacity: 0;
      }
      40% {
          transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
          animation-timing-function: ease-in;
      }
      60% {
          transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
          opacity: 1;
      }
      80% {
          transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
      }
      to {
          transform: perspective(400px);
      }
    }

    .flipInY {
      backface-visibility: visible;
      animation-name: flipInY;
    }

    @keyframes rotateIn {
      from {
          transform-origin: center;
          transform: rotate3d(0, 0, 1, -200deg);
          opacity: 0;
      }
      to {
          transform-origin: center;
          transform: none;
          opacity: 1;
      }
    }

    .rotateIn {
      animation-name: rotateIn;
    }

    @keyframes bounceIn {
      from,
      20%,
      40%,
      60%,
      80%,
      to {
          animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      }
      0% {
          opacity: 0;
          transform: scale3d(.3, .3, .3);
      }
      20% {
          transform: scale3d(1.1, 1.1, 1.1);
      }
      40% {
          transform: scale3d(.9, .9, .9);
      }
      60% {
          opacity: 1;
          transform: scale3d(1.03, 1.03, 1.03);
      }
      80% {
          transform: scale3d(.97, .97, .97);
      }
      to {
          opacity: 1;
          transform: scale3d(1, 1, 1);
      }
    }

    .bounceIn {
      animation-name: bounceIn;
    }

    @keyframes fadeIn {
      from {
          opacity: 0;
      }
      to {
          opacity: 1;
      }
    }

    .fadeIn {
      animation-name: fadeIn;
    }

    // @keyframes zoomIn {
    //   from {
    //     opacity: 0;
    //     transform: scale3d(.3, .3, .3);
    //   }
    //   50% {
    //     opacity: 1;
    //   }
    // }
    // .zoomIn {
    //   animation-name: zoomIn;
    // }
    @keyframes rollIn {
      from {
          opacity: 0;
          transform: translate3d(-50%, 0, 0) rotate3d(0, 0, 1, -120deg);
      }
      to {
          opacity: 1;
          transform: none;
      }
    }

    .rollIn {
      animation-name: rollIn;
    }
  `;
};
export default style;
