const { Color } = require("frostcolor");

 const getRGBListFromHex = function(hex){

  const rgb = Color.fromString(hex).toRGBString();

  const rgbList = rgb.substring(4, rgb.length-1).split(' ');

  const obj = {
    red: rgbList[0],
    green: rgbList[1],
    blue: rgbList[2],
  }

  return obj;
}
export default getRGBListFromHex;