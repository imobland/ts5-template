const css = function(props) {
  return `
:root {
	--s1: 1;
	--s2: 1.12;
	--s3: 1.26;
	--s4: 1.41;
	--s5: 1.59;
	--s6: 1.78;
	--s7: 2;
	--s8: 2.24;
	--s9: 2.52;
	--s10: 2.83;
	--s11: 3.17;
	--s12: 3.56;
	--s13: 4;
	--s14: 4.49;
	--s15: 5.04;
	--s16: 5.66;
	--s17: 6.35;
	--s18: 7.13;
	--s19: 8;
	--s20: 8.98;
	--s21: 10.08;
	--s22: 11.31;
	--s23: 12.7;
	--s24: 14.25;
	--s25: 16;
	--s26: 17.96;
	--s27: 20.16;
	--s28: 22.63;
	--s29: 25.4;
	--s30: 28.51;
	--s31: 32;
	--s32: 35.92;
	--s33: 40.32;
	--s34: 45.25;
	--s35: 50.8;
	--s36: 57.02;
	--s37: 64;
	--s38: 71.84;
	--s39: 80.63;
	--s40: 90.51;
	--s41: 101.59;
	--s42: 114.03;
	--s43: 128;
	--s44: 143.67;
	--s45: 161.27;
	--s46: 181.02;
	--s47: 203.18;
	--s48: 228.07;
	--s49: 256;
	--s50: 287.35;
	--s51: 322.53;
	--s52: 362.03;
	--s53: 406.37;
	--s54: 456.13;
	--s55: 512;
}

:root {
	--pad-12: 88rem;
	--pad-11: 64rem;
	--pad-10: 52rem;
	--pad-9: 46rem;
	--pad-8: 36rem;
	--pad-7: 30rem;
	--pad-6: 24rem;
	--pad-5: 19rem;
	--pad-4: 15rem;
	--pad-3: 10rem;
	--pad-2: 6rem;
	--pad-1: 3rem;
}

:root {
	--gap-8: 56.95rem;
	--gap-7: 37.96rem;
	--gap-6: 25.3125rem;
	--gap-5: 16.875rem;
	--gap-4: 11.25rem;
	--gap-3: 7.5rem;
	--gap-2: 5rem;
	--gap-1: 2rem;
	--gap-0: 0rem;
}

:root {
	--C0: #f9f9f9;
	--C0-contrast: #222;
	--C0-L3: #fafafa;
	--C0-L2: #fafafa;
	--C0-L1: #f9f9f9;
	--C0-D1: #ededed;
	--C0-D2: #e0e0e0;
	--C0-D3: #d4d4d4;
	--C0-P1: #fafafa;
	--C0-P2: #f8f8f8;
	--C0-P3: #f4f4f4;
	--C0-A1: rgb(249 0 0 / 5%);
	--C0-A2: rgb(249 0 0 / 8%);
	--C0-A3: rgb(249 0 0 / 11%);
	--C0-V: #fafafa;
	--C1: #001ca8;
	--C1-contrast: white;
	--C1-L3: #1200db;
	--C1-L2: #0b0bca;
	--C1-L1: #0515b9;
	--C1-D1: #001fa0;
	--C1-D2: #002297;
	--C1-D3: #00248f;
	--C1-P1: #f0f1fa;
	--C1-P2: #e9ecf8;
	--C1-P3: #e3e6f5;
	--C1-A1: rgb(0 28 168 / 5%);
	--C1-A2: rgb(0 28 168 / 8%);
	--C1-A3: rgb(0 28 168 / 11%);
	--C1-V: #002bff;
	--C2: #ea0953;
	--C2-contrast: white;
	--C2-L3: #f7246a;
	--C2-L2: #f61861;
	--C2-L1: #f60b58;
	--C2-D1: #de0954;
	--C2-D2: #d30854;
	--C2-D3: #c70853;
	--C2-P1: #fef0f5;
	--C2-P2: #fdeaf0;
	--C2-P3: #fde4ec;
	--C2-A1: rgb(234 0 77 / 5%);
	--C2-A2: rgb(234 0 77 / 8%);
	--C2-A3: rgb(234 0 77 / 11%);
	--C2-V: #ff0054;
	--C3: #ffc000;
	--C3-contrast: black;
	--C3-L3: #ffc926;
	--C3-L2: #ffc61a;
	--C3-L1: #ffc30d;
	--C3-D1: #f2ad00;
	--C3-D2: #e69b00;
	--C3-D3: #d98a00;
	--C3-P1: #fffbf0;
	--C3-P2: #fffae9;
	--C3-P3: #fff8e3;
	--C3-A1: rgb(255 192 0 / 5%);
	--C3-A2: rgb(255 192 0 / 8%);
	--C3-A3: rgb(255 192 0 / 11%);
	--C3-V: #ffc000;
	--C4: #333;
	--C4-contrast: white;
	--C4-L3: #525252;
	--C4-L2: #474747;
	--C4-L1: #3d3d3d;
	--C4-D1: #303030;
	--C4-D2: #2e2e2e;
	--C4-D3: #2b2b2b;
	--C4-P1: #fafafa;
	--C4-P2: #f8f8f8;
	--C4-P3: #f4f4f4;
	--C4-A1: rgb(51 0 0 / 5%);
	--C4-A2: rgb(51 0 0 / 8%);
	--C4-A3: rgb(51 0 0 / 11%);
	--C4-V: #fafafa;
}

.C0 {
	--c: var(--C0) !important;
}

.C0-D1 {
	--c: var(--C0-D1) !important;
}

.C0-D2 {
	--c: var(--C0-D2) !important;
}

.C0-D3 {
	--c: var(--C0-D3) !important;
}

.C0-L1 {
	--c: var(--C0-L1) !important;
}

.C0-L2 {
	--c: var(--C0-L2) !important;
}

.C0-L3 {
	--c: var(--C0-L3) !important;
}

.C0-P1 {
	--c: var(--C0-P1) !important;
}

.C0-P2 {
	--c: var(--C0-P2) !important;
}

.C0-P3 {
	--c: var(--C0-P3) !important;
}

.C0-A1 {
	--c: var(--C0-A1) !important;
}

.C0-A2 {
	--c: var(--C0-A2) !important;
}

.C0-A3 {
	--c: var(--C0-A3) !important;
}

.C0-contrast {
	--c: var(--C0-contrast) !important;
}

.C1 {
	--c: var(--C1) !important;
}

.C1-D1 {
	--c: var(--C1-D1) !important;
}

.C1-D2 {
	--c: var(--C1-D2) !important;
}

.C1-D3 {
	--c: var(--C1-D3) !important;
}

.C1-L1 {
	--c: var(--C1-L1) !important;
}

.C1-L2 {
	--c: var(--C1-L2) !important;
}

.C1-L3 {
	--c: var(--C1-L3) !important;
}

.C1-P1 {
	--c: var(--C1-P1) !important;
}

.C1-P2 {
	--c: var(--C1-P2) !important;
}

.C1-P3 {
	--c: var(--C1-P3) !important;
}

.C1-A1 {
	--c: var(--C1-A1) !important;
}

.C1-A2 {
	--c: var(--C1-A2) !important;
}

.C1-A3 {
	--c: var(--C1-A3) !important;
}

.C1-contrast {
	--c: var(--C1-contrast) !important;
}

.C2 {
	--c: var(--C2) !important;
}

.C2-D1 {
	--c: var(--C2-D1) !important;
}

.C2-D2 {
	--c: var(--C2-D2) !important;
}

.C2-D3 {
	--c: var(--C2-D3) !important;
}

.C2-L1 {
	--c: var(--C2-L1) !important;
}

.C2-L2 {
	--c: var(--C2-L2) !important;
}

.C2-L3 {
	--c: var(--C2-L3) !important;
}

.C2-P1 {
	--c: var(--C2-P1) !important;
}

.C2-P2 {
	--c: var(--C2-P2) !important;
}

.C2-P3 {
	--c: var(--C2-P3) !important;
}

.C2-A1 {
	--c: var(--C2-A1) !important;
}

.C2-A2 {
	--c: var(--C2-A2) !important;
}

.C2-A3 {
	--c: var(--C2-A3) !important;
}

.C2-contrast {
	--c: var(--C2-contrast) !important;
}

.C3 {
	--c: var(--C3) !important;
}

.C3-D1 {
	--c: var(--C3-D1) !important;
}

.C3-D2 {
	--c: var(--C3-D2) !important;
}

.C3-D3 {
	--c: var(--C3-D3) !important;
}

.C3-L1 {
	--c: var(--C3-L1) !important;
}

.C3-L2 {
	--c: var(--C3-L2) !important;
}

.C3-L3 {
	--c: var(--C3-L3) !important;
}

.C3-P1 {
	--c: var(--C3-P1) !important;
}

.C3-P2 {
	--c: var(--C3-P2) !important;
}

.C3-P3 {
	--c: var(--C3-P3) !important;
}

.C3-A1 {
	--c: var(--C3-A1) !important;
}

.C3-A2 {
	--c: var(--C3-A2) !important;
}

.C3-A3 {
	--c: var(--C3-A3) !important;
}

.C3-contrast {
	--c: var(--C3-contrast) !important;
}

.C4 {
	--c: var(--C4) !important;
}

.C4-D1 {
	--c: var(--C4-D1) !important;
}

.C4-D2 {
	--c: var(--C4-D2) !important;
}

.C4-D3 {
	--c: var(--C4-D3) !important;
}

.C4-L1 {
	--c: var(--C4-L1) !important;
}

.C4-L2 {
	--c: var(--C4-L2) !important;
}

.C4-L3 {
	--c: var(--C4-L3) !important;
}

.C4-P1 {
	--c: var(--C4-P1) !important;
}

.C4-P2 {
	--c: var(--C4-P2) !important;
}

.C4-P3 {
	--c: var(--C4-P3) !important;
}

.C4-A1 {
	--c: var(--C4-A1) !important;
}

.C4-A2 {
	--c: var(--C4-A2) !important;
}

.C4-A3 {
	--c: var(--C4-A3) !important;
}

.C4-contrast {
	--c: var(--C4-contrast) !important;
}

.hover\:C0:hover {
	--c: var(--C0) !important;
}

.hover\:C0-D1:hover {
	--c: var(--C0-D1) !important;
}

.hover\:C0-D2:hover {
	--c: var(--C0-D2) !important;
}

.hover\:C0-D3:hover {
	--c: var(--C0-D3) !important;
}

.hover\:C0-L1:hover {
	--c: var(--C0-L1) !important;
}

.hover\:C0-L2:hover {
	--c: var(--C0-L2) !important;
}

.hover\:C0-L3:hover {
	--c: var(--C0-L3) !important;
}

.hover\:C0-P1:hover {
	--c: var(--C0-P1) !important;
}

.hover\:C0-P2:hover {
	--c: var(--C0-P2) !important;
}

.hover\:C0-P3:hover {
	--c: var(--C0-P3) !important;
}

.hover\:C0-A1:hover {
	--c: var(--C0-A1) !important;
}

.hover\:C0-A2:hover {
	--c: var(--C0-A2) !important;
}

.hover\:C0-A3:hover {
	--c: var(--C0-A3) !important;
}

.hover\:C0-contrast:hover {
	--c: var(--C0-contrast) !important;
}

.hover\:C1:hover {
	--c: var(--C1) !important;
}

.hover\:C1-D1:hover {
	--c: var(--C1-D1) !important;
}

.hover\:C1-D2:hover {
	--c: var(--C1-D2) !important;
}

.hover\:C1-D3:hover {
	--c: var(--C1-D3) !important;
}

.hover\:C1-L1:hover {
	--c: var(--C1-L1) !important;
}

.hover\:C1-L2:hover {
	--c: var(--C1-L2) !important;
}

.hover\:C1-L3:hover {
	--c: var(--C1-L3) !important;
}

.hover\:C1-P1:hover {
	--c: var(--C1-P1) !important;
}

.hover\:C1-P2:hover {
	--c: var(--C1-P2) !important;
}

.hover\:C1-P3:hover {
	--c: var(--C1-P3) !important;
}

.hover\:C1-A1:hover {
	--c: var(--C1-A1) !important;
}

.hover\:C1-A2:hover {
	--c: var(--C1-A2) !important;
}

.hover\:C1-A3:hover {
	--c: var(--C1-A3) !important;
}

.hover\:C1-contrast:hover {
	--c: var(--C1-contrast) !important;
}

.hover\:C2:hover {
	--c: var(--C2) !important;
}

.hover\:C2-D1:hover {
	--c: var(--C2-D1) !important;
}

.hover\:C2-D2:hover {
	--c: var(--C2-D2) !important;
}

.hover\:C2-D3:hover {
	--c: var(--C2-D3) !important;
}

.hover\:C2-L1:hover {
	--c: var(--C2-L1) !important;
}

.hover\:C2-L2:hover {
	--c: var(--C2-L2) !important;
}

.hover\:C2-L3:hover {
	--c: var(--C2-L3) !important;
}

.hover\:C2-P1:hover {
	--c: var(--C2-P1) !important;
}

.hover\:C2-P2:hover {
	--c: var(--C2-P2) !important;
}

.hover\:C2-P3:hover {
	--c: var(--C2-P3) !important;
}

.hover\:C2-A1:hover {
	--c: var(--C2-A1) !important;
}

.hover\:C2-A2:hover {
	--c: var(--C2-A2) !important;
}

.hover\:C2-A3:hover {
	--c: var(--C2-A3) !important;
}

.hover\:C2-contrast:hover {
	--c: var(--C2-contrast) !important;
}

.hover\:C3:hover {
	--c: var(--C3) !important;
}

.hover\:C3-D1:hover {
	--c: var(--C3-D1) !important;
}

.hover\:C3-D2:hover {
	--c: var(--C3-D2) !important;
}

.hover\:C3-D3:hover {
	--c: var(--C3-D3) !important;
}

.hover\:C3-L1:hover {
	--c: var(--C3-L1) !important;
}

.hover\:C3-L2:hover {
	--c: var(--C3-L2) !important;
}

.hover\:C3-L3:hover {
	--c: var(--C3-L3) !important;
}

.hover\:C3-P1:hover {
	--c: var(--C3-P1) !important;
}

.hover\:C3-P2:hover {
	--c: var(--C3-P2) !important;
}

.hover\:C3-P3:hover {
	--c: var(--C3-P3) !important;
}

.hover\:C3-A1:hover {
	--c: var(--C3-A1) !important;
}

.hover\:C3-A2:hover {
	--c: var(--C3-A2) !important;
}

.hover\:C3-A3:hover {
	--c: var(--C3-A3) !important;
}

.hover\:C3-contrast:hover {
	--c: var(--C3-contrast) !important;
}

.hover\:C4:hover {
	--c: var(--C4) !important;
}

.hover\:C4-D1:hover {
	--c: var(--C4-D1) !important;
}

.hover\:C4-D2:hover {
	--c: var(--C4-D2) !important;
}

.hover\:C4-D3:hover {
	--c: var(--C4-D3) !important;
}

.hover\:C4-L1:hover {
	--c: var(--C4-L1) !important;
}

.hover\:C4-L2:hover {
	--c: var(--C4-L2) !important;
}

.hover\:C4-L3:hover {
	--c: var(--C4-L3) !important;
}

.hover\:C4-P1:hover {
	--c: var(--C4-P1) !important;
}

.hover\:C4-P2:hover {
	--c: var(--C4-P2) !important;
}

.hover\:C4-P3:hover {
	--c: var(--C4-P3) !important;
}

.hover\:C4-A1:hover {
	--c: var(--C4-A1) !important;
}

.hover\:C4-A2:hover {
	--c: var(--C4-A2) !important;
}

.hover\:C4-A3:hover {
	--c: var(--C4-A3) !important;
}

.hover\:C4-contrast:hover {
	--c: var(--C4-contrast) !important;
}

.active\:C0:active {
	--c: var(--C0) !important;
}

.active\:C0-D1:active {
	--c: var(--C0-D1) !important;
}

.active\:C0-D2:active {
	--c: var(--C0-D2) !important;
}

.active\:C0-D3:active {
	--c: var(--C0-D3) !important;
}

.active\:C0-L1:active {
	--c: var(--C0-L1) !important;
}

.active\:C0-L2:active {
	--c: var(--C0-L2) !important;
}

.active\:C0-L3:active {
	--c: var(--C0-L3) !important;
}

.active\:C0-P1:active {
	--c: var(--C0-P1) !important;
}

.active\:C0-P2:active {
	--c: var(--C0-P2) !important;
}

.active\:C0-P3:active {
	--c: var(--C0-P3) !important;
}

.active\:C0-A1:active {
	--c: var(--C0-A1) !important;
}

.active\:C0-A2:active {
	--c: var(--C0-A2) !important;
}

.active\:C0-A3:active {
	--c: var(--C0-A3) !important;
}

.active\:C0-contrast:active {
	--c: var(--C0-contrast) !important;
}

.active\:C1:active {
	--c: var(--C1) !important;
}

.active\:C1-D1:active {
	--c: var(--C1-D1) !important;
}

.active\:C1-D2:active {
	--c: var(--C1-D2) !important;
}

.active\:C1-D3:active {
	--c: var(--C1-D3) !important;
}

.active\:C1-L1:active {
	--c: var(--C1-L1) !important;
}

.active\:C1-L2:active {
	--c: var(--C1-L2) !important;
}

.active\:C1-L3:active {
	--c: var(--C1-L3) !important;
}

.active\:C1-P1:active {
	--c: var(--C1-P1) !important;
}

.active\:C1-P2:active {
	--c: var(--C1-P2) !important;
}

.active\:C1-P3:active {
	--c: var(--C1-P3) !important;
}

.active\:C1-A1:active {
	--c: var(--C1-A1) !important;
}

.active\:C1-A2:active {
	--c: var(--C1-A2) !important;
}

.active\:C1-A3:active {
	--c: var(--C1-A3) !important;
}

.active\:C1-contrast:active {
	--c: var(--C1-contrast) !important;
}

.active\:C2:active {
	--c: var(--C2) !important;
}

.active\:C2-D1:active {
	--c: var(--C2-D1) !important;
}

.active\:C2-D2:active {
	--c: var(--C2-D2) !important;
}

.active\:C2-D3:active {
	--c: var(--C2-D3) !important;
}

.active\:C2-L1:active {
	--c: var(--C2-L1) !important;
}

.active\:C2-L2:active {
	--c: var(--C2-L2) !important;
}

.active\:C2-L3:active {
	--c: var(--C2-L3) !important;
}

.active\:C2-P1:active {
	--c: var(--C2-P1) !important;
}

.active\:C2-P2:active {
	--c: var(--C2-P2) !important;
}

.active\:C2-P3:active {
	--c: var(--C2-P3) !important;
}

.active\:C2-A1:active {
	--c: var(--C2-A1) !important;
}

.active\:C2-A2:active {
	--c: var(--C2-A2) !important;
}

.active\:C2-A3:active {
	--c: var(--C2-A3) !important;
}

.active\:C2-contrast:active {
	--c: var(--C2-contrast) !important;
}

.active\:C3:active {
	--c: var(--C3) !important;
}

.active\:C3-D1:active {
	--c: var(--C3-D1) !important;
}

.active\:C3-D2:active {
	--c: var(--C3-D2) !important;
}

.active\:C3-D3:active {
	--c: var(--C3-D3) !important;
}

.active\:C3-L1:active {
	--c: var(--C3-L1) !important;
}

.active\:C3-L2:active {
	--c: var(--C3-L2) !important;
}

.active\:C3-L3:active {
	--c: var(--C3-L3) !important;
}

.active\:C3-P1:active {
	--c: var(--C3-P1) !important;
}

.active\:C3-P2:active {
	--c: var(--C3-P2) !important;
}

.active\:C3-P3:active {
	--c: var(--C3-P3) !important;
}

.active\:C3-A1:active {
	--c: var(--C3-A1) !important;
}

.active\:C3-A2:active {
	--c: var(--C3-A2) !important;
}

.active\:C3-A3:active {
	--c: var(--C3-A3) !important;
}

.active\:C3-contrast:active {
	--c: var(--C3-contrast) !important;
}

.active\:C4:active {
	--c: var(--C4) !important;
}

.active\:C4-D1:active {
	--c: var(--C4-D1) !important;
}

.active\:C4-D2:active {
	--c: var(--C4-D2) !important;
}

.active\:C4-D3:active {
	--c: var(--C4-D3) !important;
}

.active\:C4-L1:active {
	--c: var(--C4-L1) !important;
}

.active\:C4-L2:active {
	--c: var(--C4-L2) !important;
}

.active\:C4-L3:active {
	--c: var(--C4-L3) !important;
}

.active\:C4-P1:active {
	--c: var(--C4-P1) !important;
}

.active\:C4-P2:active {
	--c: var(--C4-P2) !important;
}

.active\:C4-P3:active {
	--c: var(--C4-P3) !important;
}

.active\:C4-A1:active {
	--c: var(--C4-A1) !important;
}

.active\:C4-A2:active {
	--c: var(--C4-A2) !important;
}

.active\:C4-A3:active {
	--c: var(--C4-A3) !important;
}

.active\:C4-contrast:active {
	--c: var(--C4-contrast) !important;
}

:root {
	--xxs-breakpoint: 0;
}

@media (min-width:0px) {
	:root {
		--screen-max-size-content: calc( 100vw - calc( var(--screen-sangria) * 2rem));
		--screen-breakpoint: 0;
		--screen-sangria: 20;
		--screen-breakpoint-name: xxs;
	}
	:root:not(.no-scale) {
		font-size: 0.85px !important;
	}
}

:root {
	--xs-breakpoint: 350;
}

@media (min-width:350px) {
	:root {
		--screen-max-size-content: calc( 100vw - calc( var(--screen-sangria) * 2rem));
		--screen-breakpoint: 350;
		--screen-sangria: 20;
		--screen-breakpoint-name: xs;
	}
	:root:not(.no-scale) {
		font-size: 1px !important;
	}
}

:root {
	--sm-breakpoint: 576;
}

@media (min-width:576px) {
	:root {
		--screen-max-size-content: calc( 100vw - calc( var(--screen-sangria) * 2rem));
		--screen-breakpoint: 576;
		--screen-sangria: 30;
		--screen-breakpoint-name: sm;
	}
	:root:not(.no-scale) {
		font-size: 1px !important;
	}
}

:root {
	--md-breakpoint: 768;
}

@media (min-width:768px) {
	:root {
		--screen-max-size-content: calc( 100vw - calc( var(--screen-sangria) * 2rem));
		--screen-breakpoint: 768;
		--screen-sangria: 40;
		--screen-breakpoint-name: md;
	}
	:root:not(.no-scale) {
		font-size: 1px !important;
	}
}

:root {
	--lg-breakpoint: 992;
}

@media (min-width:992px) {
	:root {
		--screen-max-size-content: calc( calc( var(--screen-breakpoint) * 1rem) - calc( var(--screen-sangria) * 2rem));
		--screen-breakpoint: 992;
		--screen-sangria: 40;
		--screen-breakpoint-name: lg;
	}
	:root:not(.no-scale) {
		font-size: 1px !important;
	}
}

:root {
	--xl-breakpoint: 1200;
}

@media (min-width:1200px) {
	:root {
		--screen-max-size-content: calc( calc( var(--screen-breakpoint) * 1rem) - calc( var(--screen-sangria) * 2rem));
		--screen-breakpoint: 1200;
		--screen-sangria: 40;
		--screen-breakpoint-name: xl;
	}
	:root:not(.no-scale) {
		font-size: 1px !important;
	}
}

:root {
	--xxl-breakpoint: 1400;
}

@media (min-width:1400px) {
	:root {
		--screen-max-size-content: calc( calc( var(--xl-breakpoint) * 1rem) - calc( var(--screen-sangria) * 2rem));
		--screen-breakpoint: 1400;
		--screen-sangria: 40;
		--screen-breakpoint-name: xxl;
	}
	:root:not(.no-scale) {
		font-size: 1.08px !important;
	}
}

:root {
	--xxxl-breakpoint: 1660;
}

@media (min-width:1660px) {
	:root {
		--screen-max-size-content: calc( calc( var(--xl-breakpoint) * 1rem) - calc( var(--screen-sangria) * 2rem));
		--screen-breakpoint: 1660;
		--screen-sangria: 40;
		--screen-breakpoint-name: xxxl;
	}
	:root:not(.no-scale) {
		font-size: 1.16px !important;
	}
}

:root {
	--max-breakpoint: 1920;
}

@media (min-width:1920px) {
	:root {
		--screen-max-size-content: calc( calc( var(--xl-breakpoint) * 1rem) - calc( var(--screen-sangria) * 2rem));
		--screen-breakpoint: 1920;
		--screen-sangria: 40;
		--screen-breakpoint-name: max;
	}
	:root:not(.no-scale) {
		font-size: 1.24px !important;
	}
}

body:not(.without-guideline) .content-w-guideline {
	--pad-l: calc( var(--screen-sangria) * 1rem) !important;
	--pad-r: calc( var(--screen-sangria) * 1rem) !important;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
}

body:not(.without-guideline) .content-w-guideline>[c] {
	max-width: var(--screen-max-size-content);
	min-width: auto !important;
	width: 100% !important;
}
`;
}
export default css;