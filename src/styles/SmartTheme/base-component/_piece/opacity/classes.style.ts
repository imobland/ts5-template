
const gerarClasses = function(pre,pos){

  let str = "";

  str = str+`
    .${pre}op-0${pos} {   opacity: 0; }
    .${pre}op-10${pos} {   opacity: .1; }
    .${pre}op-20${pos} {   opacity: .2; }
    .${pre}op-30${pos} {   opacity: .3; }
    .${pre}op-40${pos} {   opacity: .4; }
    .${pre}op-50${pos} {   opacity: .5; }
    .${pre}op-60${pos} {   opacity: .6; }
    .${pre}op-70${pos} {   opacity: .7; }
    .${pre}op-80${pos} {   opacity: .8; }
    .${pre}op-90${pos} {   opacity: .9; }
    .${pre}op-100${pos} {   opacity: 1; }
    
    .${pre}board-op-0${pos} > [b] {   opacity: 0; }
    .${pre}board-op-10${pos} > [b] {   opacity: .1; }
    .${pre}board-op-20${pos} > [b] {   opacity: .2; }
    .${pre}board-op-30${pos} > [b] {   opacity: .3; }
    .${pre}board-op-40${pos} > [b] {   opacity: .4; }
    .${pre}board-op-50${pos} > [b] {   opacity: .5; }
    .${pre}board-op-60${pos} > [b] {   opacity: .6; }
    .${pre}board-op-70${pos} > [b] {   opacity: .7; }
    .${pre}board-op-80${pos} > [b] {   opacity: .8; }
    .${pre}board-op-90${pos} > [b] {   opacity: .9; }
    .${pre}board-op-100${pos} > [b] {   opacity: 1; }
    
    .${pre}content-op-0${pos} > [c] {   opacity: 0; }
    .${pre}content-op-10${pos} > [c] {   opacity: .1; }
    .${pre}content-op-20${pos} > [c] {   opacity: .2; }
    .${pre}content-op-30${pos} > [c] {   opacity: .3; }
    .${pre}content-op-40${pos} > [c] {   opacity: .4; }
    .${pre}content-op-50${pos} > [c] {   opacity: .5; }
    .${pre}content-op-60${pos} > [c] {   opacity: .6; }
    .${pre}content-op-70${pos} > [c] {   opacity: .7; }
    .${pre}content-op-80${pos} > [c] {   opacity: .8; }
    .${pre}content-op-90${pos} > [c] {   opacity: .9; }
    .${pre}content-op-100${pos} > [c] {   opacity: 1; }
  `

  return str;
}


const style = function (props) {
  return `
    ${gerarClasses("", "")}
    ${gerarClasses("h\\:", ":hover")}
    ${gerarClasses("a\\:", ":active")}
  `;
};
export default style;
