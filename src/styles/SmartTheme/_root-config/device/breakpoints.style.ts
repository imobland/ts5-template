
const breakpoints = {
  xxs: { size: 0, sangria: 20, contentWidth: "expand", zoom: .85, },
  xs: { size: 350, sangria: 20, contentWidth: "expand", zoom: 1, },
  sm: { size: 576, sangria: 30, contentWidth: "expand", zoom: 1, },
  md: { size: 768, sangria: 30, contentWidth: "expand", zoom: 1, },
  lg: { size: 992, sangria: 25, contentWidth: "contract+newSize", zoom: 1, },
  xl: { size: 1200, sangria: 25, contentWidth: "contract+newSize", zoom: 1, },
  xxl: { size: 1400, sangria: 40, contentWidth: "contract-only", zoom: 1.04, },
  xxxl: { size: 1660, sangria: 40, contentWidth: "contract-only", zoom: 1.08, },
  max: { size: 1920, sangria: 40, contentWidth: "contract-only", zoom: 1.12, },
};

const maxContentWidthFromBreakpoint = "xl";

const realBreakpoints = {
  xs : ">= 0    --- smartphones 5` port ", 
  sm : ">= 576  --- tablets 8` port, fablets 7` port ", 
  md : ">= 768  --- tablets 10` port, fablets 7` land,  smartphones 5` land  ", 
  lg : ">= 992  --- tablets 10` land, tablet 13` port  ", 
  xl : ">= 1200 --- desktops, tablets 13` land [DEFAULT DEVICE - Desktop first]"
};

export {breakpoints, maxContentWidthFromBreakpoint, realBreakpoints};