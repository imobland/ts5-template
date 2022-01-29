const style = function (props) {

  return `
    html{
      overflow: hidden;
    }
    body{
      background-color: #d2d2d2;
      font-family: Open Sans, sans-serif;
      max-height: 100vh;
      overflow: auto;
    }
    #__next{
      max-width: 1920px;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      position: relative;
      display: flex;
      flex-direction: column;
    }
    #floaters{
      max-width: 1920px;
      bottom: 0;
      top: 0;
      pointer-events: none;
      position: fixed;
      width: 100%;
      box-shadow: 0 0 50px #00000038;    
      z-index: 10;
    }
    #sections{
      height: 100%;
      max-width: 1920px;
      >[c]{
        width: 100%;
        height: 100%;
        display: block;
        flex-direction: column;
      }
    }
  `;
};

export default style;
