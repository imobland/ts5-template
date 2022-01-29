const css = function (props) {
  return `
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    :root {
      font-size: 1px;
      flex-direction: row;
    }
    body {
      display: flex;
      min-height: 100vh;
      flex-direction: row;
      display: flex;
      --zoom: 100%;
    }
    a{
      text-decoration: none;
    }
    textarea {
      font-family: inherit !important;
  }

`};
export default css;
