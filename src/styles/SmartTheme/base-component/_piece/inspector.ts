const style = function (props) {

  return `
    
    .inspector {
      [p] {
        > [c] {
          outline: 1px dashed #fff4;
          outline-offset: -1px;
        }

        &:before {
          pointer-events: none;
          content: attr(class);
          white-space: nowrap;
          font-size: 13px;
          background: #7772;
          border-radius: 6px;
          text-shadow: 2px 2px 3px #0002;
          padding: 3px 5px;
          position: absolute;
          z-index: 1;
          opacity: 0;
          left: 0;
        }
        :hover {
          &:before {
            transition: all 0.1s ease;
            background: #777f;
            text-shadow: 2px 2px 3px #0002;
            box-shadow: 2px 2px 3px 1px #0003;
            z-index: 5;
            opacity: 1;
          }
        }

        &:before {
          background: #333;
          color: #000;
        }
        [p] {
          &:before {
            background: #3f3;
            color: #000;
          }
          [p] {
            &:before {
              background: #33f;
              color: #fff;
            }
            [p] {
              &:before {
                background: #f4f;
                color: #fff;
              }
              [p] {
                &:before {
                  background: #ff3;
                  color: #000;
                }
                [p] {
                  &:before {
                    background: #f3f;
                    color: #000;
                  }
                }
              }
            }
          }
        }
      }
      [p]:not(.box),
      [p]:not(.box-vertical) {
        &:before {
          bottom: 100%;
        }
      }
    }
  
  `;
};
export default style;
