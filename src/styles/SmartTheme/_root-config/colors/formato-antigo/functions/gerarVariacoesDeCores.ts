const { Color, ColorImmutable } = require("frostcolor");

const gerarVariantesDeCor = function (color) {
  const C = Color.fromString(color.color);

  const CC = Color.fromString(color.colorContrast);
  const hueLight = color.hueLight;
  const hueDark = color.hueDark;

  const HUE = C.getHue();
  let CV = Color.fromHSL(HUE, 100, 50, 1);

  const Brightness = C.getBrightness();

  let CL1 = C.clone();
  let CL2 = C.clone();
  let CL3 = C.clone();
  let CD1 = C.clone();
  let CD2 = C.clone();
  let CD3 = C.clone();
  let CP1 = C.clone();
  let CP2 = C.clone();
  let CP3 = C.clone();
  let CA1 = C.clone();
  let CA2 = C.clone();
  let CA3 = C.clone();

  CL1 = Color.mix(CL1.lighten(0.05), CL1.clone().setHue(HUE + hueLight), 0.33);
  CL2 = Color.mix(CL2.lighten(0.1), CL2.clone().setHue(HUE + hueLight), 0.66);
  CL3 = Color.mix(CL3.lighten(0.15), CL3.clone().setHue(HUE + hueLight), 0.99);
  CD1 = Color.mix(CD1.darken(0.05), CD1.clone().setHue(HUE + hueDark), 0.33);
  CD2 = Color.mix(CD2.darken(0.1), CD2.clone().setHue(HUE + hueDark), 0.66);
  CD3 = Color.mix(CD3.darken(0.15), CD3.clone().setHue(HUE + hueDark), 0.99);

  CP1 = Color.mix(Color.fromString("#fff"), C, 0.06);
  CP2 = Color.mix(Color.fromString("#fff"), C, 0.085);
  CP3 = Color.mix(Color.fromString("#fff"), C, 0.11);

  CA1 = CA1.setAlpha(0.05).setSaturation(100);
  CA2 = CA2.setAlpha(0.08).setSaturation(100);
  CA3 = CA3.setAlpha(0.11).setSaturation(100);

  if (C.getSaturation() == 0) {
    CP1 = Color.fromString("#fafafa");
    CP2 = Color.fromString("#f8f8f8");
    CP3 = Color.fromString("#f4f4f4");
    CV = Color.fromString("#fafafa");
  }

  const objColor = {
    C: { sufix: "", color: C+"" },
    CC: { sufix: "-contrast", color: CC+"" },
    CL3: { sufix: "-L3", color: CL3+"" },
    CL2: { sufix: "-L2", color: CL2+"" },
    CL1: { sufix: "-L1", color: CL1+"" },
    CD3: { sufix: "-D1", color: CD1+"" },
    CD2: { sufix: "-D2", color: CD2+"" },
    CD1: { sufix: "-D3", color: CD3+"" },
    CP1: { sufix: "-P1", color: CP1+"" },
    CP2: { sufix: "-P2", color: CP2+"" },
    CP3: { sufix: "-P3", color: CP3+"" },
    CV: { sufix: "-V", color: CV+"" },
  }

  // console.log(objColor);

  return objColor;
};

const gerarTodasAsCores = function (listaDeCoresDoCliente) {
  //
  return {
    C0: gerarVariantesDeCor(listaDeCoresDoCliente.C0),
    C1: gerarVariantesDeCor(listaDeCoresDoCliente.C1),
    C2: gerarVariantesDeCor(listaDeCoresDoCliente.C2),
    C3: gerarVariantesDeCor(listaDeCoresDoCliente.C3),
    C4: gerarVariantesDeCor(listaDeCoresDoCliente.C4),
  };
};

export default gerarTodasAsCores;
