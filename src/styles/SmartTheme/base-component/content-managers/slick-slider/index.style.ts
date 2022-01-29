import Gaps from "./gaps/classes.style";

const gerarClasses = function(pre,pos){

  let str =   `
  
    .slider {
      .slick-slider{
        max-width: calc(100% + var(--gap) );
        margin: 0 calc( var(--gap) / -2 );

        .slick-slide {
          > div {
            display: flex;
            flex-grow: 1;
            margin-left: calc(var(--gap)/2);
            margin-right: calc(var(--gap)/2);
          }
        }
      }

      &.y-loose .slick-list {
        margin-top: calc(var(--gap) * -1);
        margin-bottom: calc(var(--gap) * -1);
        padding-top: calc(var(--gap) * 1);
        padding-bottom: calc(var(--gap) * 1);
      }



      /* SLICK Slider ========================== */
      .slick-slider  {
          position: relative;

          display: block;
          box-sizing: border-box;

          -webkit-user-select: none;
            -moz-user-select: none;
              -ms-user-select: none;
                  user-select: none;

          -webkit-touch-callout: none;
          -khtml-user-select: none;
          touch-action: pan-y;
          -webkit-tap-highlight-color: transparent;
      }
      
      .slick-list
      {
          position: relative;

          display: block;
          overflow: hidden;

          margin: 0;
          padding: 0;
      }
      .slick-list:focus
      {
          outline: none;
      }
      .slick-list.dragging
      {
          cursor: pointer;
          cursor: hand;
      }

      .slick-slider .slick-track,
      .slick-slider .slick-list
      {
          transform: translate3d(0, 0, 0);
      }

      .slick-track
      {
          position: relative;
          top: 0;
          left: 0;

          display: block;
          margin-left: auto;
          margin-right: auto;
      }
      .slick-track:before,
      .slick-track:after
      {
          display: table;

          content: '';
      }
      .slick-track:after
      {
          clear: both;
      }
      .slick-loading .slick-track
      {
          visibility: hidden;
      }

      .slick-slide
      {
          display: none;
          float: left;

          height: 100%;
          min-height: 1px;
      }
      [dir='rtl'] .slick-slide
      {
          float: right;
      }
      .slick-slide img
      {
          display: flex;
      }
      .slick-slide.slick-loading img
      {
          display: none;
      }
      .slick-slide.dragging img
      {
          pointer-events: none;
      }
      .slick-initialized .slick-slide
      {
          display: block;
      }
      .slick-loading .slick-slide
      {
          visibility: hidden;
      }
      .slick-vertical .slick-slide
      {
          display: block;

          height: auto;

          border: 1px solid transparent;
      }
      .slick-arrow.slick-hidden {
          display: none;
      }

      /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7QUFDWDs7SUFFSSxrQkFBa0I7O0lBRWxCLGNBQWM7SUFDZCxzQkFBc0I7O0lBRXRCLHlCQUF5QjtPQUN0QixzQkFBc0I7UUFDckIscUJBQXFCO1lBQ2pCLGlCQUFpQjs7SUFFekIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUVwQixtQkFBbUI7SUFDdkIsd0NBQXdDO0FBQzVDOztBQUVBOztJQUVJLGtCQUFrQjs7SUFFbEIsY0FBYztJQUNkLGdCQUFnQjs7SUFFaEIsU0FBUztJQUNULFVBQVU7QUFDZDtBQUNBOztJQUVJLGFBQWE7QUFDakI7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTs7O0lBT1ksK0JBQStCO0FBQzNDOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTzs7SUFFUCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBOzs7SUFHSSxjQUFjOztJQUVkLFdBQVc7QUFDZjtBQUNBOztJQUVJLFdBQVc7QUFDZjtBQUNBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsV0FBVzs7SUFFWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBOztJQUVJLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksYUFBYTtBQUNqQjtBQUNBOztJQUVJLG9CQUFvQjtBQUN4QjtBQUNBOztJQUVJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxjQUFjOztJQUVkLFlBQVk7O0lBRVosNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2xpZGVyICovXG4uc2xpY2stc2xpZGVyXG57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy10b3VjaC1hY3Rpb246IHBhbi15O1xuICAgICAgICB0b3VjaC1hY3Rpb246IHBhbi15O1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zbGljay1saXN0XG57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuLnNsaWNrLWxpc3Q6Zm9jdXNcbntcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLnNsaWNrLWxpc3QuZHJhZ2dpbmdcbntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY3Vyc29yOiBoYW5kO1xufVxuXG4uc2xpY2stc2xpZGVyIC5zbGljay10cmFjayxcbi5zbGljay1zbGlkZXIgLnNsaWNrLWxpc3RcbntcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4uc2xpY2stdHJhY2tcbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG5cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uc2xpY2stdHJhY2s6YmVmb3JlLFxuLnNsaWNrLXRyYWNrOmFmdGVyXG57XG4gICAgZGlzcGxheTogdGFibGU7XG5cbiAgICBjb250ZW50OiAnJztcbn1cbi5zbGljay10cmFjazphZnRlclxue1xuICAgIGNsZWFyOiBib3RoO1xufVxuLnNsaWNrLWxvYWRpbmcgLnNsaWNrLXRyYWNrXG57XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uc2xpY2stc2xpZGVcbntcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZsb2F0OiBsZWZ0O1xuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbn1cbltkaXI9J3J0bCddIC5zbGljay1zbGlkZVxue1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5zbGljay1zbGlkZSBpbWdcbntcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5zbGljay1zbGlkZS5zbGljay1sb2FkaW5nIGltZ1xue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uc2xpY2stc2xpZGUuZHJhZ2dpbmcgaW1nXG57XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uc2xpY2staW5pdGlhbGl6ZWQgLnNsaWNrLXNsaWRlXG57XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uc2xpY2stbG9hZGluZyAuc2xpY2stc2xpZGVcbntcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uc2xpY2stdmVydGljYWwgLnNsaWNrLXNsaWRlXG57XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5zbGljay1hcnJvdy5zbGljay1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */
       
      // FIX HEIGHT ==================
      &.height-full{
        height: 100%;
        
        .slick-list,
        .slick-track {
            height: 100% !important;
        }
        .slick-track {
          display: flex !important;
        }
        .slick-track .slick-slide {
          display: flex !important;
          height: auto !important;
        }
      }
    }

    
  `
  return str;
}


const style = function (props) {

  return `  
    ${Gaps(props)}
    ${gerarClasses("","")}
  `;
  // ${gerarClasses("lg\\:","")}
  // ${gerarClasses("md\\:","")}
  // ${gerarClasses("sm\\:","")}
  // ${gerarClasses("xs\\:","")}
};
export default style;