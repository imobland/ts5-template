const css = function(props) {
  return `
	:root {
		--b-radius-0: 22.44px;
		--b-radius-1: 16.83px;
		--b-radius-2: 12.62px;
		--b-radius-3: 9.47px;
		--b-radius-4: 7.1px;
		--b-radius-5: 5.33px;
		--b-radius-6: 4px;
		--b-radius-none: 0px;
	}
	
	.bg-C0 {
		--bg-c: var(--C0);
		--bg-cc: var(--C0-contrast);
	}
	
	.bg-C0 bg-d1 {
		--bg-c: var(--C0-D1);
		--bg-cc: var(--C0-contrast);
	}
	
	.bg-C0 bg-d2 {
		--bg-c: var(--C0-D2);
		--bg-cc: var(--C0-contrast);
	}
	
	.bg-C0 bg-d3 {
		--bg-c: var(--C0-D3);
		--bg-cc: var(--C0-contrast);
	}
	
	.bg-C0-L1 {
		--bg-c: var(--C0-L1);
		--bg-cc: var(--C0-contrast);
	}
	
	.bg-C0-L2 {
		--bg-c: var(--C0-L2);
		--bg-cc: var(--C0-contrast);
	}
	
	.bg-C0-L3 {
		--bg-c: var(--C0-L3);
		--bg-cc: var(--C0-contrast);
	}
	
	.bg-C0-P1 {
		--bg-c: var(--C0-P1);
	}
	
	.bg-C0-P2 {
		--bg-c: var(--C0-P2);
	}
	
	.bg-C0-P3 {
		--bg-c: var(--C0-P3);
	}
	
	.bg-C0-V {
		--bg-c: var(--C0-V);
	}
	
	.bevel-C0>[b]:after {
		--bevel-c: var(--C0);
	}
	
	.bevel-C0-D1>[b]:after {
		--bevel-c: var(--C0-D1);
	}
	
	.bevel-C0-D2>[b]:after {
		--bevel-c: var(--C0-D2);
	}
	
	.bevel-C0-D3>[b]:after {
		--bevel-c: var(--C0-D3);
	}
	
	.bevel-C0-L1>[b]:after {
		--bevel-c: var(--C0-L1);
	}
	
	.bevel-C0-L2>[b]:after {
		--bevel-c: var(--C0-L2);
	}
	
	.bevel-C0-L3>[b]:after {
		--bevel-c: var(--C0-L3);
	}
	
	.bevel-C0-P1>[b]:after {
		--bevel-c: var(--C0-P1);
	}
	
	.bevel-C0-P2>[b]:after {
		--bevel-c: var(--C0-P2);
	}
	
	.bevel-C0-P3>[b]:after {
		--bevel-c: var(--C0-P3);
	}
	
	.bevel-C0-V>[b]:after {
		--bevel-c: var(--C0-V);
	}
	
	.overlay-C0>[b]:after {
		--overlay-c: var(--C0);
	}
	
	.overlay-C0-D1>[b]:after {
		--overlay-c: var(--C0-D1);
	}
	
	.overlay-C0-D2>[b]:after {
		--overlay-c: var(--C0-D2);
	}
	
	.overlay-C0-D3>[b]:after {
		--overlay-c: var(--C0-D3);
	}
	
	.overlay-C0-L1>[b]:after {
		--overlay-c: var(--C0-L1);
	}
	
	.overlay-C0-L2>[b]:after {
		--overlay-c: var(--C0-L2);
	}
	
	.overlay-C0-L3>[b]:after {
		--overlay-c: var(--C0-L3);
	}
	
	.overlay-C0-P1>[b]:after {
		--overlay-c: var(--C0-P1);
	}
	
	.overlay-C0-P2>[b]:after {
		--overlay-c: var(--C0-P2);
	}
	
	.overlay-C0-P3>[b]:after {
		--overlay-c: var(--C0-P3);
	}
	
	.overlay-C0-V>[b]:after {
		--overlay-c: var(--C0-V);
	}
	
	.bg-gradient-C0 {
		--bg-gradient-c: var(--C0);
	}
	
	.bg-gradient-C0-D1 {
		--bg-gradient-c: var(--C0-D1);
	}
	
	.bg-gradient-C0-D2 {
		--bg-gradient-c: var(--C0-D2);
	}
	
	.bg-gradient-C0-D3 {
		--bg-gradient-c: var(--C0-D3);
	}
	
	.bg-gradient-C0-L1 {
		--bg-gradient-c: var(--C0-L1);
	}
	
	.bg-gradient-C0-L2 {
		--bg-gradient-c: var(--C0-L2);
	}
	
	.bg-gradient-C0-L3 {
		--bg-gradient-c: var(--C0-L3);
	}
	
	.bg-gradient-C0-P1 {
		--bg-gradient-c: var(--C0-P1);
	}
	
	.bg-gradient-C0-P2 {
		--bg-gradient-c: var(--C0-P2);
	}
	
	.bg-gradient-C0-P3 {
		--bg-gradient-c: var(--C0-P3);
	}
	
	.bg-gradient-C0-V {
		--bg-gradient-c: var(--C0-V);
	}
	
	.bg-gradient-C0-A1 {
		--bg-gradient-c: var(--C0-A1);
	}
	
	.bg-gradient-C0-A2 {
		--bg-gradient-c: var(--C0-A2);
	}
	
	.bg-gradient-C0-A3 {
		--bg-gradient-c: var(--C0-A3);
	}
	
	.bg-C1 {
		--bg-c: var(--C1);
		--bg-cc: var(--C1-contrast);
	}
	
	.bg-C1-D1 {
		--bg-c: var(--C1-D1);
		--bg-cc: var(--C1-contrast);
	}
	
	.bg-C1 bg-d2 {
		--bg-c: var(--C1-D2);
		--bg-cc: var(--C1-contrast);
	}
	
	.bg-C1-D3 {
		--bg-c: var(--C1-D3);
		--bg-cc: var(--C1-contrast);
	}
	
	.bg-C1-L1 {
		--bg-c: var(--C1-L1);
		--bg-cc: var(--C1-contrast);
	}
	
	.bg-C1-L2 {
		--bg-c: var(--C1-L2);
		--bg-cc: var(--C1-contrast);
	}
	
	.bg-C1 bg-l3 {
		--bg-c: var(--C1-L3);
		--bg-cc: var(--C1-contrast);
	}
	
	.bg-C1-P1 {
		--bg-c: var(--C1-P1);
	}
	
	.bg-C1-P2 {
		--bg-c: var(--C1-P2);
	}
	
	.bg-C1-P3 {
		--bg-c: var(--C1-P3);
	}
	
	.bg-C1-V {
		--bg-c: var(--C1-V);
	}
	
	.bevel-C1>[b]:after {
		--bevel-c: var(--C1);
	}
	
	.bevel-C1-D1>[b]:after {
		--bevel-c: var(--C1-D1);
	}
	
	.bevel-C1-D2>[b]:after {
		--bevel-c: var(--C1-D2);
	}
	
	.bevel-C1-D3>[b]:after {
		--bevel-c: var(--C1-D3);
	}
	
	.bevel-C1-L1>[b]:after {
		--bevel-c: var(--C1-L1);
	}
	
	.bevel-C1-L2>[b]:after {
		--bevel-c: var(--C1-L2);
	}
	
	.bevel-C1-L3>[b]:after {
		--bevel-c: var(--C1-L3);
	}
	
	.bevel-C1-P1>[b]:after {
		--bevel-c: var(--C1-P1);
	}
	
	.bevel-C1-P2>[b]:after {
		--bevel-c: var(--C1-P2);
	}
	
	.bevel-C1-P3>[b]:after {
		--bevel-c: var(--C1-P3);
	}
	
	.bevel-C1-V>[b]:after {
		--bevel-c: var(--C1-V);
	}
	
	.overlay-C1>[b]:after {
		--overlay-c: var(--C1);
	}
	
	.overlay-C1-D1>[b]:after {
		--overlay-c: var(--C1-D1);
	}
	
	.overlay-C1-D2>[b]:after {
		--overlay-c: var(--C1-D2);
	}
	
	.overlay-C1-D3>[b]:after {
		--overlay-c: var(--C1-D3);
	}
	
	.overlay-C1-L1>[b]:after {
		--overlay-c: var(--C1-L1);
	}
	
	.overlay-C1-L2>[b]:after {
		--overlay-c: var(--C1-L2);
	}
	
	.overlay-C1-L3>[b]:after {
		--overlay-c: var(--C1-L3);
	}
	
	.overlay-C1-P1>[b]:after {
		--overlay-c: var(--C1-P1);
	}
	
	.overlay-C1-P2>[b]:after {
		--overlay-c: var(--C1-P2);
	}
	
	.overlay-C1-P3>[b]:after {
		--overlay-c: var(--C1-P3);
	}
	
	.overlay-C1-V>[b]:after {
		--overlay-c: var(--C1-V);
	}
	
	.bg-gradient-C1 {
		--bg-gradient-c: var(--C1);
	}
	
	.bg-gradient-C1-D1 {
		--bg-gradient-c: var(--C1-D1);
	}
	
	.bg-gradient-C1-D2 {
		--bg-gradient-c: var(--C1-D2);
	}
	
	.bg-gradient-C1-D3 {
		--bg-gradient-c: var(--C1-D3);
	}
	
	.bg-gradient-C1-L1 {
		--bg-gradient-c: var(--C1-L1);
	}
	
	.bg-gradient-C1-L2 {
		--bg-gradient-c: var(--C1-L2);
	}
	
	.bg-gradient-C1-L3 {
		--bg-gradient-c: var(--C1-L3);
	}
	
	.bg-gradient-C1-P1 {
		--bg-gradient-c: var(--C1-P1);
	}
	
	.bg-gradient-C1-P2 {
		--bg-gradient-c: var(--C1-P2);
	}
	
	.bg-gradient-C1-P3 {
		--bg-gradient-c: var(--C1-P3);
	}
	
	.bg-gradient-C1-V {
		--bg-gradient-c: var(--C1-V);
	}
	
	.bg-gradient-C1-A1 {
		--bg-gradient-c: var(--C1-A1);
	}
	
	.bg-gradient-C1-A2 {
		--bg-gradient-c: var(--C1-A2);
	}
	
	.bg-gradient-C1-A3 {
		--bg-gradient-c: var(--C1-A3);
	}
	
	.bg-C2 {
		--bg-c: var(--C2);
		--bg-cc: var(--C2-contrast);
	}
	
	.bg-C2-D1 {
		--bg-c: var(--C2-D1);
		--bg-cc: var(--C2-contrast);
	}
	
	.bg-C2-D2 {
		--bg-c: var(--C2-D2);
		--bg-cc: var(--C2-contrast);
	}
	
	.bg-C2-D3 {
		--bg-c: var(--C2-D3);
		--bg-cc: var(--C2-contrast);
	}
	
	.bg-C2-L1 {
		--bg-c: var(--C2-L1);
		--bg-cc: var(--C2-contrast);
	}
	
	.bg-C2-L2 {
		--bg-c: var(--C2-L2);
		--bg-cc: var(--C2-contrast);
	}
	
	.bg-C2 bg-l3 {
		--bg-c: var(--C2-L3);
		--bg-cc: var(--C2-contrast);
	}
	
	.bg-C2-P1 {
		--bg-c: var(--C2-P1);
	}
	
	.bg-C2-P2 {
		--bg-c: var(--C2-P2);
	}
	
	.bg-C2 bg-tom-95 {
		--bg-c: var(--C2-P3);
	}
	
	.bg-C2-V {
		--bg-c: var(--C2-V);
	}
	
	.bevel-C2>[b]:after {
		--bevel-c: var(--C2);
	}
	
	.bevel-C2-D1>[b]:after {
		--bevel-c: var(--C2-D1);
	}
	
	.bevel-C2-D2>[b]:after {
		--bevel-c: var(--C2-D2);
	}
	
	.bevel-C2-D3>[b]:after {
		--bevel-c: var(--C2-D3);
	}
	
	.bevel-C2-L1>[b]:after {
		--bevel-c: var(--C2-L1);
	}
	
	.bevel-C2-L2>[b]:after {
		--bevel-c: var(--C2-L2);
	}
	
	.bevel-C2-L3>[b]:after {
		--bevel-c: var(--C2-L3);
	}
	
	.bevel-C2-P1>[b]:after {
		--bevel-c: var(--C2-P1);
	}
	
	.bevel-C2-P2>[b]:after {
		--bevel-c: var(--C2-P2);
	}
	
	.bevel-C2-P3>[b]:after {
		--bevel-c: var(--C2-P3);
	}
	
	.bevel-C2-V>[b]:after {
		--bevel-c: var(--C2-V);
	}
	
	.overlay-C2>[b]:after {
		--overlay-c: var(--C2);
	}
	
	.overlay-C2-D1>[b]:after {
		--overlay-c: var(--C2-D1);
	}
	
	.overlay-C2-D2>[b]:after {
		--overlay-c: var(--C2-D2);
	}
	
	.overlay-C2-D3>[b]:after {
		--overlay-c: var(--C2-D3);
	}
	
	.overlay-C2-L1>[b]:after {
		--overlay-c: var(--C2-L1);
	}
	
	.overlay-C2-L2>[b]:after {
		--overlay-c: var(--C2-L2);
	}
	
	.overlay-C2-L3>[b]:after {
		--overlay-c: var(--C2-L3);
	}
	
	.overlay-C2-P1>[b]:after {
		--overlay-c: var(--C2-P1);
	}
	
	.overlay-C2-P2>[b]:after {
		--overlay-c: var(--C2-P2);
	}
	
	.overlay-C2-P3>[b]:after {
		--overlay-c: var(--C2-P3);
	}
	
	.overlay-C2-V>[b]:after {
		--overlay-c: var(--C2-V);
	}
	
	.bg-gradient-C2 {
		--bg-gradient-c: var(--C2);
	}
	
	.bg-gradient-C2-D1 {
		--bg-gradient-c: var(--C2-D1);
	}
	
	.bg-gradient-C2-D2 {
		--bg-gradient-c: var(--C2-D2);
	}
	
	.bg-gradient-C2-D3 {
		--bg-gradient-c: var(--C2-D3);
	}
	
	.bg-gradient-C2-L1 {
		--bg-gradient-c: var(--C2-L1);
	}
	
	.bg-gradient-C2-L2 {
		--bg-gradient-c: var(--C2-L2);
	}
	
	.bg-gradient-C2-L3 {
		--bg-gradient-c: var(--C2-L3);
	}
	
	.bg-gradient-C2-P1 {
		--bg-gradient-c: var(--C2-P1);
	}
	
	.bg-gradient-C2-P2 {
		--bg-gradient-c: var(--C2-P2);
	}
	
	.bg-gradient-C2-P3 {
		--bg-gradient-c: var(--C2-P3);
	}
	
	.bg-gradient-C2-V {
		--bg-gradient-c: var(--C2-V);
	}
	
	.bg-gradient-C2-A1 {
		--bg-gradient-c: var(--C2-A1);
	}
	
	.bg-gradient-C2-A2 {
		--bg-gradient-c: var(--C2-A2);
	}
	
	.bg-gradient-C2-A3 {
		--bg-gradient-c: var(--C2-A3);
	}
	
	.bg-C3 {
		--bg-c: var(--C3);
		--bg-cc: var(--C3-contrast);
	}
	
	.bg-C3-D1 {
		--bg-c: var(--C3-D1);
		--bg-cc: var(--C3-contrast);
	}
	
	.bg-C3-D2 {
		--bg-c: var(--C3-D2);
		--bg-cc: var(--C3-contrast);
	}
	
	.bg-C3-D3 {
		--bg-c: var(--C3-D3);
		--bg-cc: var(--C3-contrast);
	}
	
	.bg-C3-L1 {
		--bg-c: var(--C3-L1);
		--bg-cc: var(--C3-contrast);
	}
	
	.bg-C3-L2 {
		--bg-c: var(--C3-L2);
		--bg-cc: var(--C3-contrast);
	}
	
	.bg-C3-L3 {
		--bg-c: var(--C3-L3);
		--bg-cc: var(--C3-contrast);
	}
	
	.bg-C3-P1 {
		--bg-c: var(--C3-P1);
	}
	
	.bg-C3-P2 {
		--bg-c: var(--C3-P2);
	}
	
	.bg-C3-P3 {
		--bg-c: var(--C3-P3);
	}
	
	.bg-C3-V {
		--bg-c: var(--C3-V);
	}
	
	.bevel-C3>[b]:after {
		--bevel-c: var(--C3);
	}
	
	.bevel-C3-D1>[b]:after {
		--bevel-c: var(--C3-D1);
	}
	
	.bevel-C3-D2>[b]:after {
		--bevel-c: var(--C3-D2);
	}
	
	.bevel-C3-D3>[b]:after {
		--bevel-c: var(--C3-D3);
	}
	
	.bevel-C3-L1>[b]:after {
		--bevel-c: var(--C3-L1);
	}
	
	.bevel-C3-L2>[b]:after {
		--bevel-c: var(--C3-L2);
	}
	
	.bevel-C3-L3>[b]:after {
		--bevel-c: var(--C3-L3);
	}
	
	.bevel-C3-P1>[b]:after {
		--bevel-c: var(--C3-P1);
	}
	
	.bevel-C3-P2>[b]:after {
		--bevel-c: var(--C3-P2);
	}
	
	.bevel-C3-P3>[b]:after {
		--bevel-c: var(--C3-P3);
	}
	
	.bevel-C3-V>[b]:after {
		--bevel-c: var(--C3-V);
	}
	
	.overlay-C3>[b]:after {
		--overlay-c: var(--C3);
	}
	
	.overlay-C3-D1>[b]:after {
		--overlay-c: var(--C3-D1);
	}
	
	.overlay-C3-D2>[b]:after {
		--overlay-c: var(--C3-D2);
	}
	
	.overlay-C3-D3>[b]:after {
		--overlay-c: var(--C3-D3);
	}
	
	.overlay-C3-L1>[b]:after {
		--overlay-c: var(--C3-L1);
	}
	
	.overlay-C3-L2>[b]:after {
		--overlay-c: var(--C3-L2);
	}
	
	.overlay-C3-L3>[b]:after {
		--overlay-c: var(--C3-L3);
	}
	
	.overlay-C3-P1>[b]:after {
		--overlay-c: var(--C3-P1);
	}
	
	.overlay-C3-P2>[b]:after {
		--overlay-c: var(--C3-P2);
	}
	
	.overlay-C3-P3>[b]:after {
		--overlay-c: var(--C3-P3);
	}
	
	.overlay-C3-V>[b]:after {
		--overlay-c: var(--C3-V);
	}
	
	.bg-gradient-C3 {
		--bg-gradient-c: var(--C3);
	}
	
	.bg-gradient-C3-D1 {
		--bg-gradient-c: var(--C3-D1);
	}
	
	.bg-gradient-C3-D2 {
		--bg-gradient-c: var(--C3-D2);
	}
	
	.bg-gradient-C3-D3 {
		--bg-gradient-c: var(--C3-D3);
	}
	
	.bg-gradient-C3-L1 {
		--bg-gradient-c: var(--C3-L1);
	}
	
	.bg-gradient-C3-L2 {
		--bg-gradient-c: var(--C3-L2);
	}
	
	.bg-gradient-C3-L3 {
		--bg-gradient-c: var(--C3-L3);
	}
	
	.bg-gradient-C3-P1 {
		--bg-gradient-c: var(--C3-P1);
	}
	
	.bg-gradient-C3-P2 {
		--bg-gradient-c: var(--C3-P2);
	}
	
	.bg-gradient-C3-P3 {
		--bg-gradient-c: var(--C3-P3);
	}
	
	.bg-gradient-C3-V {
		--bg-gradient-c: var(--C3-V);
	}
	
	.bg-gradient-C3-A1 {
		--bg-gradient-c: var(--C3-A1);
	}
	
	.bg-gradient-C3-A2 {
		--bg-gradient-c: var(--C3-A2);
	}
	
	.bg-gradient-C3-A3 {
		--bg-gradient-c: var(--C3-A3);
	}
	
	.bg-C4 {
		--bg-c: var(--C4);
		--bg-cc: var(--C4-contrast);
	}
	
	.bg-C0 bg-tom-20 {
		--bg-c: var(--C4-D1);
		--bg-cc: var(--C4-contrast);
	}
	
	.bg-C4-D2 {
		--bg-c: var(--C4-D2);
		--bg-cc: var(--C4-contrast);
	}
	
	.bg-C0 bg-tom-20 {
		--bg-c: var(--C4-D3);
		--bg-cc: var(--C4-contrast);
	}
	
	.bg-C4-L1 {
		--bg-c: var(--C4-L1);
		--bg-cc: var(--C4-contrast);
	}
	
	.bg-C4-L2 {
		--bg-c: var(--C4-L2);
		--bg-cc: var(--C4-contrast);
	}
	
	.bg-C4-L3 {
		--bg-c: var(--C4-L3);
		--bg-cc: var(--C4-contrast);
	}
	
	.bg-C4-P1 {
		--bg-c: var(--C4-P1);
	}
	
	.bg-C4-P2 {
		--bg-c: var(--C4-P2);
	}
	
	.bg-C4-P3 {
		--bg-c: var(--C4-P3);
	}
	
	.bg-C4-V {
		--bg-c: var(--C4-V);
	}
	
	.bevel-C4>[b]:after {
		--bevel-c: var(--C4);
	}
	
	.bevel-C4-D1>[b]:after {
		--bevel-c: var(--C4-D1);
	}
	
	.bevel-C4-D2>[b]:after {
		--bevel-c: var(--C4-D2);
	}
	
	.bevel-C4-D3>[b]:after {
		--bevel-c: var(--C4-D3);
	}
	
	.bevel-C4-L1>[b]:after {
		--bevel-c: var(--C4-L1);
	}
	
	.bevel-C4-L2>[b]:after {
		--bevel-c: var(--C4-L2);
	}
	
	.bevel-C4-L3>[b]:after {
		--bevel-c: var(--C4-L3);
	}
	
	.bevel-C4-P1>[b]:after {
		--bevel-c: var(--C4-P1);
	}
	
	.bevel-C4-P2>[b]:after {
		--bevel-c: var(--C4-P2);
	}
	
	.bevel-C4-P3>[b]:after {
		--bevel-c: var(--C4-P3);
	}
	
	.bevel-C4-V>[b]:after {
		--bevel-c: var(--C4-V);
	}
	
	.overlay-C4>[b]:after {
		--overlay-c: var(--C4);
	}
	
	.overlay-C4-D1>[b]:after {
		--overlay-c: var(--C4-D1);
	}
	
	.overlay-C4-D2>[b]:after {
		--overlay-c: var(--C4-D2);
	}
	
	.overlay-C4-D3>[b]:after {
		--overlay-c: var(--C4-D3);
	}
	
	.overlay-C4-L1>[b]:after {
		--overlay-c: var(--C4-L1);
	}
	
	.overlay-C4-L2>[b]:after {
		--overlay-c: var(--C4-L2);
	}
	
	.overlay-C4-L3>[b]:after {
		--overlay-c: var(--C4-L3);
	}
	
	.overlay-C4-P1>[b]:after {
		--overlay-c: var(--C4-P1);
	}
	
	.overlay-C4-P2>[b]:after {
		--overlay-c: var(--C4-P2);
	}
	
	.overlay-C4-P3>[b]:after {
		--overlay-c: var(--C4-P3);
	}
	
	.overlay-C4-V>[b]:after {
		--overlay-c: var(--C4-V);
	}
	
	.bg-gradient-C4 {
		--bg-gradient-c: var(--C4);
	}
	
	.bg-gradient-C4-D1 {
		--bg-gradient-c: var(--C4-D1);
	}
	
	.bg-gradient-C4-D2 {
		--bg-gradient-c: var(--C4-D2);
	}
	
	.bg-gradient-C4-D3 {
		--bg-gradient-c: var(--C4-D3);
	}
	
	.bg-gradient-C4-L1 {
		--bg-gradient-c: var(--C4-L1);
	}
	
	.bg-gradient-C4-L2 {
		--bg-gradient-c: var(--C4-L2);
	}
	
	.bg-gradient-C4-L3 {
		--bg-gradient-c: var(--C4-L3);
	}
	
	.bg-gradient-C4-P1 {
		--bg-gradient-c: var(--C4-P1);
	}
	
	.bg-gradient-C4-P2 {
		--bg-gradient-c: var(--C4-P2);
	}
	
	.bg-gradient-C4-P3 {
		--bg-gradient-c: var(--C4-P3);
	}
	
	.bg-gradient-C4-V {
		--bg-gradient-c: var(--C4-V);
	}
	
	.bg-gradient-C4-A1 {
		--bg-gradient-c: var(--C4-A1);
	}
	
	.bg-gradient-C4-A2 {
		--bg-gradient-c: var(--C4-A2);
	}
	
	.bg-gradient-C4-A3 {
		--bg-gradient-c: var(--C4-A3);
	}
	
	.hover\:bg-C0:hover {
		--bg-c: var(--C0);
		--bg-cc: var(--C0-contrast);
	}
	
	.hover\:bg-C0 bg-d1:hover {
		--bg-c: var(--C0-D1);
		--bg-cc: var(--C0-contrast);
	}
	
	.hover\:bg-C0 bg-d2:hover {
		--bg-c: var(--C0-D2);
		--bg-cc: var(--C0-contrast);
	}
	
	.hover\:bg-C0 bg-d3:hover {
		--bg-c: var(--C0-D3);
		--bg-cc: var(--C0-contrast);
	}
	
	.hover\:bg-C0-L1:hover {
		--bg-c: var(--C0-L1);
		--bg-cc: var(--C0-contrast);
	}
	
	.hover\:bg-C0-L2:hover {
		--bg-c: var(--C0-L2);
		--bg-cc: var(--C0-contrast);
	}
	
	.hover\:bg-C0-L3:hover {
		--bg-c: var(--C0-L3);
		--bg-cc: var(--C0-contrast);
	}
	
	.hover\:bg-C0-P1:hover {
		--bg-c: var(--C0-P1);
	}
	
	.hover\:bg-C0-P2:hover {
		--bg-c: var(--C0-P2);
	}
	
	.hover\:bg-C0-P3:hover {
		--bg-c: var(--C0-P3);
	}
	
	.hover\:bg-C0-V:hover {
		--bg-c: var(--C0-V);
	}
	
	.hover\:bevel-C0:hover>[b]:after {
		--bevel-c: var(--C0);
	}
	
	.hover\:bevel-C0-D1:hover>[b]:after {
		--bevel-c: var(--C0-D1);
	}
	
	.hover\:bevel-C0-D2:hover>[b]:after {
		--bevel-c: var(--C0-D2);
	}
	
	.hover\:bevel-C0-D3:hover>[b]:after {
		--bevel-c: var(--C0-D3);
	}
	
	.hover\:bevel-C0-L1:hover>[b]:after {
		--bevel-c: var(--C0-L1);
	}
	
	.hover\:bevel-C0-L2:hover>[b]:after {
		--bevel-c: var(--C0-L2);
	}
	
	.hover\:bevel-C0-L3:hover>[b]:after {
		--bevel-c: var(--C0-L3);
	}
	
	.hover\:bevel-C0-P1:hover>[b]:after {
		--bevel-c: var(--C0-P1);
	}
	
	.hover\:bevel-C0-P2:hover>[b]:after {
		--bevel-c: var(--C0-P2);
	}
	
	.hover\:bevel-C0-P3:hover>[b]:after {
		--bevel-c: var(--C0-P3);
	}
	
	.hover\:bevel-C0-V:hover>[b]:after {
		--bevel-c: var(--C0-V);
	}
	
	.hover\:overlay-C0:hover>[b]:after {
		--overlay-c: var(--C0);
	}
	
	.hover\:overlay-C0-D1:hover>[b]:after {
		--overlay-c: var(--C0-D1);
	}
	
	.hover\:overlay-C0-D2:hover>[b]:after {
		--overlay-c: var(--C0-D2);
	}
	
	.hover\:overlay-C0-D3:hover>[b]:after {
		--overlay-c: var(--C0-D3);
	}
	
	.hover\:overlay-C0-L1:hover>[b]:after {
		--overlay-c: var(--C0-L1);
	}
	
	.hover\:overlay-C0-L2:hover>[b]:after {
		--overlay-c: var(--C0-L2);
	}
	
	.hover\:overlay-C0-L3:hover>[b]:after {
		--overlay-c: var(--C0-L3);
	}
	
	.hover\:overlay-C0-P1:hover>[b]:after {
		--overlay-c: var(--C0-P1);
	}
	
	.hover\:overlay-C0-P2:hover>[b]:after {
		--overlay-c: var(--C0-P2);
	}
	
	.hover\:overlay-C0-P3:hover>[b]:after {
		--overlay-c: var(--C0-P3);
	}
	
	.hover\:overlay-C0-V:hover>[b]:after {
		--overlay-c: var(--C0-V);
	}
	
	.hover\:bg-gradient-C0:hover {
		--bg-gradient-c: var(--C0);
	}
	
	.hover\:bg-gradient-C0-D1:hover {
		--bg-gradient-c: var(--C0-D1);
	}
	
	.hover\:bg-gradient-C0-D2:hover {
		--bg-gradient-c: var(--C0-D2);
	}
	
	.hover\:bg-gradient-C0-D3:hover {
		--bg-gradient-c: var(--C0-D3);
	}
	
	.hover\:bg-gradient-C0-L1:hover {
		--bg-gradient-c: var(--C0-L1);
	}
	
	.hover\:bg-gradient-C0-L2:hover {
		--bg-gradient-c: var(--C0-L2);
	}
	
	.hover\:bg-gradient-C0-L3:hover {
		--bg-gradient-c: var(--C0-L3);
	}
	
	.hover\:bg-gradient-C0-P1:hover {
		--bg-gradient-c: var(--C0-P1);
	}
	
	.hover\:bg-gradient-C0-P2:hover {
		--bg-gradient-c: var(--C0-P2);
	}
	
	.hover\:bg-gradient-C0-P3:hover {
		--bg-gradient-c: var(--C0-P3);
	}
	
	.hover\:bg-gradient-C0-V:hover {
		--bg-gradient-c: var(--C0-V);
	}
	
	.hover\:bg-gradient-C0-A1:hover {
		--bg-gradient-c: var(--C0-A1);
	}
	
	.hover\:bg-gradient-C0-A2:hover {
		--bg-gradient-c: var(--C0-A2);
	}
	
	.hover\:bg-gradient-C0-A3:hover {
		--bg-gradient-c: var(--C0-A3);
	}
	
	.hover\:bg-C1:hover {
		--bg-c: var(--C1);
		--bg-cc: var(--C1-contrast);
	}
	
	.hover\:bg-C1-D1:hover {
		--bg-c: var(--C1-D1);
		--bg-cc: var(--C1-contrast);
	}
	
	.hover\:bg-C1 bg-d2:hover {
		--bg-c: var(--C1-D2);
		--bg-cc: var(--C1-contrast);
	}
	
	.hover\:bg-C1-D3:hover {
		--bg-c: var(--C1-D3);
		--bg-cc: var(--C1-contrast);
	}
	
	.hover\:bg-C1-L1:hover {
		--bg-c: var(--C1-L1);
		--bg-cc: var(--C1-contrast);
	}
	
	.hover\:bg-C1-L2:hover {
		--bg-c: var(--C1-L2);
		--bg-cc: var(--C1-contrast);
	}
	
	.hover\:bg-C1 bg-l3:hover {
		--bg-c: var(--C1-L3);
		--bg-cc: var(--C1-contrast);
	}
	
	.hover\:bg-C1-P1:hover {
		--bg-c: var(--C1-P1);
	}
	
	.hover\:bg-C1-P2:hover {
		--bg-c: var(--C1-P2);
	}
	
	.hover\:bg-C1-P3:hover {
		--bg-c: var(--C1-P3);
	}
	
	.hover\:bg-C1-V:hover {
		--bg-c: var(--C1-V);
	}
	
	.hover\:bevel-C1:hover>[b]:after {
		--bevel-c: var(--C1);
	}
	
	.hover\:bevel-C1-D1:hover>[b]:after {
		--bevel-c: var(--C1-D1);
	}
	
	.hover\:bevel-C1-D2:hover>[b]:after {
		--bevel-c: var(--C1-D2);
	}
	
	.hover\:bevel-C1-D3:hover>[b]:after {
		--bevel-c: var(--C1-D3);
	}
	
	.hover\:bevel-C1-L1:hover>[b]:after {
		--bevel-c: var(--C1-L1);
	}
	
	.hover\:bevel-C1-L2:hover>[b]:after {
		--bevel-c: var(--C1-L2);
	}
	
	.hover\:bevel-C1-L3:hover>[b]:after {
		--bevel-c: var(--C1-L3);
	}
	
	.hover\:bevel-C1-P1:hover>[b]:after {
		--bevel-c: var(--C1-P1);
	}
	
	.hover\:bevel-C1-P2:hover>[b]:after {
		--bevel-c: var(--C1-P2);
	}
	
	.hover\:bevel-C1-P3:hover>[b]:after {
		--bevel-c: var(--C1-P3);
	}
	
	.hover\:bevel-C1-V:hover>[b]:after {
		--bevel-c: var(--C1-V);
	}
	
	.hover\:overlay-C1:hover>[b]:after {
		--overlay-c: var(--C1);
	}
	
	.hover\:overlay-C1-D1:hover>[b]:after {
		--overlay-c: var(--C1-D1);
	}
	
	.hover\:overlay-C1-D2:hover>[b]:after {
		--overlay-c: var(--C1-D2);
	}
	
	.hover\:overlay-C1-D3:hover>[b]:after {
		--overlay-c: var(--C1-D3);
	}
	
	.hover\:overlay-C1-L1:hover>[b]:after {
		--overlay-c: var(--C1-L1);
	}
	
	.hover\:overlay-C1-L2:hover>[b]:after {
		--overlay-c: var(--C1-L2);
	}
	
	.hover\:overlay-C1-L3:hover>[b]:after {
		--overlay-c: var(--C1-L3);
	}
	
	.hover\:overlay-C1-P1:hover>[b]:after {
		--overlay-c: var(--C1-P1);
	}
	
	.hover\:overlay-C1-P2:hover>[b]:after {
		--overlay-c: var(--C1-P2);
	}
	
	.hover\:overlay-C1-P3:hover>[b]:after {
		--overlay-c: var(--C1-P3);
	}
	
	.hover\:overlay-C1-V:hover>[b]:after {
		--overlay-c: var(--C1-V);
	}
	
	.hover\:bg-gradient-C1:hover {
		--bg-gradient-c: var(--C1);
	}
	
	.hover\:bg-gradient-C1-D1:hover {
		--bg-gradient-c: var(--C1-D1);
	}
	
	.hover\:bg-gradient-C1-D2:hover {
		--bg-gradient-c: var(--C1-D2);
	}
	
	.hover\:bg-gradient-C1-D3:hover {
		--bg-gradient-c: var(--C1-D3);
	}
	
	.hover\:bg-gradient-C1-L1:hover {
		--bg-gradient-c: var(--C1-L1);
	}
	
	.hover\:bg-gradient-C1-L2:hover {
		--bg-gradient-c: var(--C1-L2);
	}
	
	.hover\:bg-gradient-C1-L3:hover {
		--bg-gradient-c: var(--C1-L3);
	}
	
	.hover\:bg-gradient-C1-P1:hover {
		--bg-gradient-c: var(--C1-P1);
	}
	
	.hover\:bg-gradient-C1-P2:hover {
		--bg-gradient-c: var(--C1-P2);
	}
	
	.hover\:bg-gradient-C1-P3:hover {
		--bg-gradient-c: var(--C1-P3);
	}
	
	.hover\:bg-gradient-C1-V:hover {
		--bg-gradient-c: var(--C1-V);
	}
	
	.hover\:bg-gradient-C1-A1:hover {
		--bg-gradient-c: var(--C1-A1);
	}
	
	.hover\:bg-gradient-C1-A2:hover {
		--bg-gradient-c: var(--C1-A2);
	}
	
	.hover\:bg-gradient-C1-A3:hover {
		--bg-gradient-c: var(--C1-A3);
	}
	
	.hover\:bg-C2:hover {
		--bg-c: var(--C2);
		--bg-cc: var(--C2-contrast);
	}
	
	.hover\:bg-C2-D1:hover {
		--bg-c: var(--C2-D1);
		--bg-cc: var(--C2-contrast);
	}
	
	.hover\:bg-C2-D2:hover {
		--bg-c: var(--C2-D2);
		--bg-cc: var(--C2-contrast);
	}
	
	.hover\:bg-C2-D3:hover {
		--bg-c: var(--C2-D3);
		--bg-cc: var(--C2-contrast);
	}
	
	.hover\:bg-C2-L1:hover {
		--bg-c: var(--C2-L1);
		--bg-cc: var(--C2-contrast);
	}
	
	.hover\:bg-C2-L2:hover {
		--bg-c: var(--C2-L2);
		--bg-cc: var(--C2-contrast);
	}
	
	.hover\:bg-C2 bg-l3:hover {
		--bg-c: var(--C2-L3);
		--bg-cc: var(--C2-contrast);
	}
	
	.hover\:bg-C2-P1:hover {
		--bg-c: var(--C2-P1);
	}
	
	.hover\:bg-C2-P2:hover {
		--bg-c: var(--C2-P2);
	}
	
	.hover\:bg-C2 bg-tom-95:hover {
		--bg-c: var(--C2-P3);
	}
	
	.hover\:bg-C2-V:hover {
		--bg-c: var(--C2-V);
	}
	
	.hover\:bevel-C2:hover>[b]:after {
		--bevel-c: var(--C2);
	}
	
	.hover\:bevel-C2-D1:hover>[b]:after {
		--bevel-c: var(--C2-D1);
	}
	
	.hover\:bevel-C2-D2:hover>[b]:after {
		--bevel-c: var(--C2-D2);
	}
	
	.hover\:bevel-C2-D3:hover>[b]:after {
		--bevel-c: var(--C2-D3);
	}
	
	.hover\:bevel-C2-L1:hover>[b]:after {
		--bevel-c: var(--C2-L1);
	}
	
	.hover\:bevel-C2-L2:hover>[b]:after {
		--bevel-c: var(--C2-L2);
	}
	
	.hover\:bevel-C2-L3:hover>[b]:after {
		--bevel-c: var(--C2-L3);
	}
	
	.hover\:bevel-C2-P1:hover>[b]:after {
		--bevel-c: var(--C2-P1);
	}
	
	.hover\:bevel-C2-P2:hover>[b]:after {
		--bevel-c: var(--C2-P2);
	}
	
	.hover\:bevel-C2-P3:hover>[b]:after {
		--bevel-c: var(--C2-P3);
	}
	
	.hover\:bevel-C2-V:hover>[b]:after {
		--bevel-c: var(--C2-V);
	}
	
	.hover\:overlay-C2:hover>[b]:after {
		--overlay-c: var(--C2);
	}
	
	.hover\:overlay-C2-D1:hover>[b]:after {
		--overlay-c: var(--C2-D1);
	}
	
	.hover\:overlay-C2-D2:hover>[b]:after {
		--overlay-c: var(--C2-D2);
	}
	
	.hover\:overlay-C2-D3:hover>[b]:after {
		--overlay-c: var(--C2-D3);
	}
	
	.hover\:overlay-C2-L1:hover>[b]:after {
		--overlay-c: var(--C2-L1);
	}
	
	.hover\:overlay-C2-L2:hover>[b]:after {
		--overlay-c: var(--C2-L2);
	}
	
	.hover\:overlay-C2-L3:hover>[b]:after {
		--overlay-c: var(--C2-L3);
	}
	
	.hover\:overlay-C2-P1:hover>[b]:after {
		--overlay-c: var(--C2-P1);
	}
	
	.hover\:overlay-C2-P2:hover>[b]:after {
		--overlay-c: var(--C2-P2);
	}
	
	.hover\:overlay-C2-P3:hover>[b]:after {
		--overlay-c: var(--C2-P3);
	}
	
	.hover\:overlay-C2-V:hover>[b]:after {
		--overlay-c: var(--C2-V);
	}
	
	.hover\:bg-gradient-C2:hover {
		--bg-gradient-c: var(--C2);
	}
	
	.hover\:bg-gradient-C2-D1:hover {
		--bg-gradient-c: var(--C2-D1);
	}
	
	.hover\:bg-gradient-C2-D2:hover {
		--bg-gradient-c: var(--C2-D2);
	}
	
	.hover\:bg-gradient-C2-D3:hover {
		--bg-gradient-c: var(--C2-D3);
	}
	
	.hover\:bg-gradient-C2-L1:hover {
		--bg-gradient-c: var(--C2-L1);
	}
	
	.hover\:bg-gradient-C2-L2:hover {
		--bg-gradient-c: var(--C2-L2);
	}
	
	.hover\:bg-gradient-C2-L3:hover {
		--bg-gradient-c: var(--C2-L3);
	}
	
	.hover\:bg-gradient-C2-P1:hover {
		--bg-gradient-c: var(--C2-P1);
	}
	
	.hover\:bg-gradient-C2-P2:hover {
		--bg-gradient-c: var(--C2-P2);
	}
	
	.hover\:bg-gradient-C2-P3:hover {
		--bg-gradient-c: var(--C2-P3);
	}
	
	.hover\:bg-gradient-C2-V:hover {
		--bg-gradient-c: var(--C2-V);
	}
	
	.hover\:bg-gradient-C2-A1:hover {
		--bg-gradient-c: var(--C2-A1);
	}
	
	.hover\:bg-gradient-C2-A2:hover {
		--bg-gradient-c: var(--C2-A2);
	}
	
	.hover\:bg-gradient-C2-A3:hover {
		--bg-gradient-c: var(--C2-A3);
	}
	
	.hover\:bg-C3:hover {
		--bg-c: var(--C3);
		--bg-cc: var(--C3-contrast);
	}
	
	.hover\:bg-C3-D1:hover {
		--bg-c: var(--C3-D1);
		--bg-cc: var(--C3-contrast);
	}
	
	.hover\:bg-C3-D2:hover {
		--bg-c: var(--C3-D2);
		--bg-cc: var(--C3-contrast);
	}
	
	.hover\:bg-C3-D3:hover {
		--bg-c: var(--C3-D3);
		--bg-cc: var(--C3-contrast);
	}
	
	.hover\:bg-C3-L1:hover {
		--bg-c: var(--C3-L1);
		--bg-cc: var(--C3-contrast);
	}
	
	.hover\:bg-C3-L2:hover {
		--bg-c: var(--C3-L2);
		--bg-cc: var(--C3-contrast);
	}
	
	.hover\:bg-C3-L3:hover {
		--bg-c: var(--C3-L3);
		--bg-cc: var(--C3-contrast);
	}
	
	.hover\:bg-C3-P1:hover {
		--bg-c: var(--C3-P1);
	}
	
	.hover\:bg-C3-P2:hover {
		--bg-c: var(--C3-P2);
	}
	
	.hover\:bg-C3-P3:hover {
		--bg-c: var(--C3-P3);
	}
	
	.hover\:bg-C3-V:hover {
		--bg-c: var(--C3-V);
	}
	
	.hover\:bevel-C3:hover>[b]:after {
		--bevel-c: var(--C3);
	}
	
	.hover\:bevel-C3-D1:hover>[b]:after {
		--bevel-c: var(--C3-D1);
	}
	
	.hover\:bevel-C3-D2:hover>[b]:after {
		--bevel-c: var(--C3-D2);
	}
	
	.hover\:bevel-C3-D3:hover>[b]:after {
		--bevel-c: var(--C3-D3);
	}
	
	.hover\:bevel-C3-L1:hover>[b]:after {
		--bevel-c: var(--C3-L1);
	}
	
	.hover\:bevel-C3-L2:hover>[b]:after {
		--bevel-c: var(--C3-L2);
	}
	
	.hover\:bevel-C3-L3:hover>[b]:after {
		--bevel-c: var(--C3-L3);
	}
	
	.hover\:bevel-C3-P1:hover>[b]:after {
		--bevel-c: var(--C3-P1);
	}
	
	.hover\:bevel-C3-P2:hover>[b]:after {
		--bevel-c: var(--C3-P2);
	}
	
	.hover\:bevel-C3-P3:hover>[b]:after {
		--bevel-c: var(--C3-P3);
	}
	
	.hover\:bevel-C3-V:hover>[b]:after {
		--bevel-c: var(--C3-V);
	}
	
	.hover\:overlay-C3:hover>[b]:after {
		--overlay-c: var(--C3);
	}
	
	.hover\:overlay-C3-D1:hover>[b]:after {
		--overlay-c: var(--C3-D1);
	}
	
	.hover\:overlay-C3-D2:hover>[b]:after {
		--overlay-c: var(--C3-D2);
	}
	
	.hover\:overlay-C3-D3:hover>[b]:after {
		--overlay-c: var(--C3-D3);
	}
	
	.hover\:overlay-C3-L1:hover>[b]:after {
		--overlay-c: var(--C3-L1);
	}
	
	.hover\:overlay-C3-L2:hover>[b]:after {
		--overlay-c: var(--C3-L2);
	}
	
	.hover\:overlay-C3-L3:hover>[b]:after {
		--overlay-c: var(--C3-L3);
	}
	
	.hover\:overlay-C3-P1:hover>[b]:after {
		--overlay-c: var(--C3-P1);
	}
	
	.hover\:overlay-C3-P2:hover>[b]:after {
		--overlay-c: var(--C3-P2);
	}
	
	.hover\:overlay-C3-P3:hover>[b]:after {
		--overlay-c: var(--C3-P3);
	}
	
	.hover\:overlay-C3-V:hover>[b]:after {
		--overlay-c: var(--C3-V);
	}
	
	.hover\:bg-gradient-C3:hover {
		--bg-gradient-c: var(--C3);
	}
	
	.hover\:bg-gradient-C3-D1:hover {
		--bg-gradient-c: var(--C3-D1);
	}
	
	.hover\:bg-gradient-C3-D2:hover {
		--bg-gradient-c: var(--C3-D2);
	}
	
	.hover\:bg-gradient-C3-D3:hover {
		--bg-gradient-c: var(--C3-D3);
	}
	
	.hover\:bg-gradient-C3-L1:hover {
		--bg-gradient-c: var(--C3-L1);
	}
	
	.hover\:bg-gradient-C3-L2:hover {
		--bg-gradient-c: var(--C3-L2);
	}
	
	.hover\:bg-gradient-C3-L3:hover {
		--bg-gradient-c: var(--C3-L3);
	}
	
	.hover\:bg-gradient-C3-P1:hover {
		--bg-gradient-c: var(--C3-P1);
	}
	
	.hover\:bg-gradient-C3-P2:hover {
		--bg-gradient-c: var(--C3-P2);
	}
	
	.hover\:bg-gradient-C3-P3:hover {
		--bg-gradient-c: var(--C3-P3);
	}
	
	.hover\:bg-gradient-C3-V:hover {
		--bg-gradient-c: var(--C3-V);
	}
	
	.hover\:bg-gradient-C3-A1:hover {
		--bg-gradient-c: var(--C3-A1);
	}
	
	.hover\:bg-gradient-C3-A2:hover {
		--bg-gradient-c: var(--C3-A2);
	}
	
	.hover\:bg-gradient-C3-A3:hover {
		--bg-gradient-c: var(--C3-A3);
	}
	
	.hover\:bg-C4:hover {
		--bg-c: var(--C4);
		--bg-cc: var(--C4-contrast);
	}
	
	.hover\:bg-C0 bg-tom-20:hover {
		--bg-c: var(--C4-D1);
		--bg-cc: var(--C4-contrast);
	}
	
	.hover\:bg-C4-D2:hover {
		--bg-c: var(--C4-D2);
		--bg-cc: var(--C4-contrast);
	}
	
	.hover\:bg-C0 bg-tom-20:hover {
		--bg-c: var(--C4-D3);
		--bg-cc: var(--C4-contrast);
	}
	
	.hover\:bg-C4-L1:hover {
		--bg-c: var(--C4-L1);
		--bg-cc: var(--C4-contrast);
	}
	
	.hover\:bg-C4-L2:hover {
		--bg-c: var(--C4-L2);
		--bg-cc: var(--C4-contrast);
	}
	
	.hover\:bg-C4-L3:hover {
		--bg-c: var(--C4-L3);
		--bg-cc: var(--C4-contrast);
	}
	
	.hover\:bg-C4-P1:hover {
		--bg-c: var(--C4-P1);
	}
	
	.hover\:bg-C4-P2:hover {
		--bg-c: var(--C4-P2);
	}
	
	.hover\:bg-C4-P3:hover {
		--bg-c: var(--C4-P3);
	}
	
	.hover\:bg-C4-V:hover {
		--bg-c: var(--C4-V);
	}
	
	.hover\:bevel-C4:hover>[b]:after {
		--bevel-c: var(--C4);
	}
	
	.hover\:bevel-C4-D1:hover>[b]:after {
		--bevel-c: var(--C4-D1);
	}
	
	.hover\:bevel-C4-D2:hover>[b]:after {
		--bevel-c: var(--C4-D2);
	}
	
	.hover\:bevel-C4-D3:hover>[b]:after {
		--bevel-c: var(--C4-D3);
	}
	
	.hover\:bevel-C4-L1:hover>[b]:after {
		--bevel-c: var(--C4-L1);
	}
	
	.hover\:bevel-C4-L2:hover>[b]:after {
		--bevel-c: var(--C4-L2);
	}
	
	.hover\:bevel-C4-L3:hover>[b]:after {
		--bevel-c: var(--C4-L3);
	}
	
	.hover\:bevel-C4-P1:hover>[b]:after {
		--bevel-c: var(--C4-P1);
	}
	
	.hover\:bevel-C4-P2:hover>[b]:after {
		--bevel-c: var(--C4-P2);
	}
	
	.hover\:bevel-C4-P3:hover>[b]:after {
		--bevel-c: var(--C4-P3);
	}
	
	.hover\:bevel-C4-V:hover>[b]:after {
		--bevel-c: var(--C4-V);
	}
	
	.hover\:overlay-C4:hover>[b]:after {
		--overlay-c: var(--C4);
	}
	
	.hover\:overlay-C4-D1:hover>[b]:after {
		--overlay-c: var(--C4-D1);
	}
	
	.hover\:overlay-C4-D2:hover>[b]:after {
		--overlay-c: var(--C4-D2);
	}
	
	.hover\:overlay-C4-D3:hover>[b]:after {
		--overlay-c: var(--C4-D3);
	}
	
	.hover\:overlay-C4-L1:hover>[b]:after {
		--overlay-c: var(--C4-L1);
	}
	
	.hover\:overlay-C4-L2:hover>[b]:after {
		--overlay-c: var(--C4-L2);
	}
	
	.hover\:overlay-C4-L3:hover>[b]:after {
		--overlay-c: var(--C4-L3);
	}
	
	.hover\:overlay-C4-P1:hover>[b]:after {
		--overlay-c: var(--C4-P1);
	}
	
	.hover\:overlay-C4-P2:hover>[b]:after {
		--overlay-c: var(--C4-P2);
	}
	
	.hover\:overlay-C4-P3:hover>[b]:after {
		--overlay-c: var(--C4-P3);
	}
	
	.hover\:overlay-C4-V:hover>[b]:after {
		--overlay-c: var(--C4-V);
	}
	
	.hover\:bg-gradient-C4:hover {
		--bg-gradient-c: var(--C4);
	}
	
	.hover\:bg-gradient-C4-D1:hover {
		--bg-gradient-c: var(--C4-D1);
	}
	
	.hover\:bg-gradient-C4-D2:hover {
		--bg-gradient-c: var(--C4-D2);
	}
	
	.hover\:bg-gradient-C4-D3:hover {
		--bg-gradient-c: var(--C4-D3);
	}
	
	.hover\:bg-gradient-C4-L1:hover {
		--bg-gradient-c: var(--C4-L1);
	}
	
	.hover\:bg-gradient-C4-L2:hover {
		--bg-gradient-c: var(--C4-L2);
	}
	
	.hover\:bg-gradient-C4-L3:hover {
		--bg-gradient-c: var(--C4-L3);
	}
	
	.hover\:bg-gradient-C4-P1:hover {
		--bg-gradient-c: var(--C4-P1);
	}
	
	.hover\:bg-gradient-C4-P2:hover {
		--bg-gradient-c: var(--C4-P2);
	}
	
	.hover\:bg-gradient-C4-P3:hover {
		--bg-gradient-c: var(--C4-P3);
	}
	
	.hover\:bg-gradient-C4-V:hover {
		--bg-gradient-c: var(--C4-V);
	}
	
	.hover\:bg-gradient-C4-A1:hover {
		--bg-gradient-c: var(--C4-A1);
	}
	
	.hover\:bg-gradient-C4-A2:hover {
		--bg-gradient-c: var(--C4-A2);
	}
	
	.hover\:bg-gradient-C4-A3:hover {
		--bg-gradient-c: var(--C4-A3);
	}
	
	.active\:bg-C0:active {
		--bg-c: var(--C0);
		--bg-cc: var(--C0-contrast);
	}
	
	.active\:bg-C0 bg-d1:active {
		--bg-c: var(--C0-D1);
		--bg-cc: var(--C0-contrast);
	}
	
	.active\:bg-C0 bg-d2:active {
		--bg-c: var(--C0-D2);
		--bg-cc: var(--C0-contrast);
	}
	
	.active\:bg-C0 bg-d3:active {
		--bg-c: var(--C0-D3);
		--bg-cc: var(--C0-contrast);
	}
	
	.active\:bg-C0-L1:active {
		--bg-c: var(--C0-L1);
		--bg-cc: var(--C0-contrast);
	}
	
	.active\:bg-C0-L2:active {
		--bg-c: var(--C0-L2);
		--bg-cc: var(--C0-contrast);
	}
	
	.active\:bg-C0-L3:active {
		--bg-c: var(--C0-L3);
		--bg-cc: var(--C0-contrast);
	}
	
	.active\:bg-C0-P1:active {
		--bg-c: var(--C0-P1);
	}
	
	.active\:bg-C0-P2:active {
		--bg-c: var(--C0-P2);
	}
	
	.active\:bg-C0-P3:active {
		--bg-c: var(--C0-P3);
	}
	
	.active\:bg-C0-V:active {
		--bg-c: var(--C0-V);
	}
	
	.active\:bevel-C0:active>[b]:after {
		--bevel-c: var(--C0);
	}
	
	.active\:bevel-C0-D1:active>[b]:after {
		--bevel-c: var(--C0-D1);
	}
	
	.active\:bevel-C0-D2:active>[b]:after {
		--bevel-c: var(--C0-D2);
	}
	
	.active\:bevel-C0-D3:active>[b]:after {
		--bevel-c: var(--C0-D3);
	}
	
	.active\:bevel-C0-L1:active>[b]:after {
		--bevel-c: var(--C0-L1);
	}
	
	.active\:bevel-C0-L2:active>[b]:after {
		--bevel-c: var(--C0-L2);
	}
	
	.active\:bevel-C0-L3:active>[b]:after {
		--bevel-c: var(--C0-L3);
	}
	
	.active\:bevel-C0-P1:active>[b]:after {
		--bevel-c: var(--C0-P1);
	}
	
	.active\:bevel-C0-P2:active>[b]:after {
		--bevel-c: var(--C0-P2);
	}
	
	.active\:bevel-C0-P3:active>[b]:after {
		--bevel-c: var(--C0-P3);
	}
	
	.active\:bevel-C0-V:active>[b]:after {
		--bevel-c: var(--C0-V);
	}
	
	.active\:overlay-C0:active>[b]:after {
		--overlay-c: var(--C0);
	}
	
	.active\:overlay-C0-D1:active>[b]:after {
		--overlay-c: var(--C0-D1);
	}
	
	.active\:overlay-C0-D2:active>[b]:after {
		--overlay-c: var(--C0-D2);
	}
	
	.active\:overlay-C0-D3:active>[b]:after {
		--overlay-c: var(--C0-D3);
	}
	
	.active\:overlay-C0-L1:active>[b]:after {
		--overlay-c: var(--C0-L1);
	}
	
	.active\:overlay-C0-L2:active>[b]:after {
		--overlay-c: var(--C0-L2);
	}
	
	.active\:overlay-C0-L3:active>[b]:after {
		--overlay-c: var(--C0-L3);
	}
	
	.active\:overlay-C0-P1:active>[b]:after {
		--overlay-c: var(--C0-P1);
	}
	
	.active\:overlay-C0-P2:active>[b]:after {
		--overlay-c: var(--C0-P2);
	}
	
	.active\:overlay-C0-P3:active>[b]:after {
		--overlay-c: var(--C0-P3);
	}
	
	.active\:overlay-C0-V:active>[b]:after {
		--overlay-c: var(--C0-V);
	}
	
	.active\:bg-gradient-C0:active {
		--bg-gradient-c: var(--C0);
	}
	
	.active\:bg-gradient-C0-D1:active {
		--bg-gradient-c: var(--C0-D1);
	}
	
	.active\:bg-gradient-C0-D2:active {
		--bg-gradient-c: var(--C0-D2);
	}
	
	.active\:bg-gradient-C0-D3:active {
		--bg-gradient-c: var(--C0-D3);
	}
	
	.active\:bg-gradient-C0-L1:active {
		--bg-gradient-c: var(--C0-L1);
	}
	
	.active\:bg-gradient-C0-L2:active {
		--bg-gradient-c: var(--C0-L2);
	}
	
	.active\:bg-gradient-C0-L3:active {
		--bg-gradient-c: var(--C0-L3);
	}
	
	.active\:bg-gradient-C0-P1:active {
		--bg-gradient-c: var(--C0-P1);
	}
	
	.active\:bg-gradient-C0-P2:active {
		--bg-gradient-c: var(--C0-P2);
	}
	
	.active\:bg-gradient-C0-P3:active {
		--bg-gradient-c: var(--C0-P3);
	}
	
	.active\:bg-gradient-C0-V:active {
		--bg-gradient-c: var(--C0-V);
	}
	
	.active\:bg-gradient-C0-A1:active {
		--bg-gradient-c: var(--C0-A1);
	}
	
	.active\:bg-gradient-C0-A2:active {
		--bg-gradient-c: var(--C0-A2);
	}
	
	.active\:bg-gradient-C0-A3:active {
		--bg-gradient-c: var(--C0-A3);
	}
	
	.active\:bg-C1:active {
		--bg-c: var(--C1);
		--bg-cc: var(--C1-contrast);
	}
	
	.active\:bg-C1-D1:active {
		--bg-c: var(--C1-D1);
		--bg-cc: var(--C1-contrast);
	}
	
	.active\:bg-C1 bg-d2:active {
		--bg-c: var(--C1-D2);
		--bg-cc: var(--C1-contrast);
	}
	
	.active\:bg-C1-D3:active {
		--bg-c: var(--C1-D3);
		--bg-cc: var(--C1-contrast);
	}
	
	.active\:bg-C1-L1:active {
		--bg-c: var(--C1-L1);
		--bg-cc: var(--C1-contrast);
	}
	
	.active\:bg-C1-L2:active {
		--bg-c: var(--C1-L2);
		--bg-cc: var(--C1-contrast);
	}
	
	.active\:bg-C1 bg-l3:active {
		--bg-c: var(--C1-L3);
		--bg-cc: var(--C1-contrast);
	}
	
	.active\:bg-C1-P1:active {
		--bg-c: var(--C1-P1);
	}
	
	.active\:bg-C1-P2:active {
		--bg-c: var(--C1-P2);
	}
	
	.active\:bg-C1-P3:active {
		--bg-c: var(--C1-P3);
	}
	
	.active\:bg-C1-V:active {
		--bg-c: var(--C1-V);
	}
	
	.active\:bevel-C1:active>[b]:after {
		--bevel-c: var(--C1);
	}
	
	.active\:bevel-C1-D1:active>[b]:after {
		--bevel-c: var(--C1-D1);
	}
	
	.active\:bevel-C1-D2:active>[b]:after {
		--bevel-c: var(--C1-D2);
	}
	
	.active\:bevel-C1-D3:active>[b]:after {
		--bevel-c: var(--C1-D3);
	}
	
	.active\:bevel-C1-L1:active>[b]:after {
		--bevel-c: var(--C1-L1);
	}
	
	.active\:bevel-C1-L2:active>[b]:after {
		--bevel-c: var(--C1-L2);
	}
	
	.active\:bevel-C1-L3:active>[b]:after {
		--bevel-c: var(--C1-L3);
	}
	
	.active\:bevel-C1-P1:active>[b]:after {
		--bevel-c: var(--C1-P1);
	}
	
	.active\:bevel-C1-P2:active>[b]:after {
		--bevel-c: var(--C1-P2);
	}
	
	.active\:bevel-C1-P3:active>[b]:after {
		--bevel-c: var(--C1-P3);
	}
	
	.active\:bevel-C1-V:active>[b]:after {
		--bevel-c: var(--C1-V);
	}
	
	.active\:overlay-C1:active>[b]:after {
		--overlay-c: var(--C1);
	}
	
	.active\:overlay-C1-D1:active>[b]:after {
		--overlay-c: var(--C1-D1);
	}
	
	.active\:overlay-C1-D2:active>[b]:after {
		--overlay-c: var(--C1-D2);
	}
	
	.active\:overlay-C1-D3:active>[b]:after {
		--overlay-c: var(--C1-D3);
	}
	
	.active\:overlay-C1-L1:active>[b]:after {
		--overlay-c: var(--C1-L1);
	}
	
	.active\:overlay-C1-L2:active>[b]:after {
		--overlay-c: var(--C1-L2);
	}
	
	.active\:overlay-C1-L3:active>[b]:after {
		--overlay-c: var(--C1-L3);
	}
	
	.active\:overlay-C1-P1:active>[b]:after {
		--overlay-c: var(--C1-P1);
	}
	
	.active\:overlay-C1-P2:active>[b]:after {
		--overlay-c: var(--C1-P2);
	}
	
	.active\:overlay-C1-P3:active>[b]:after {
		--overlay-c: var(--C1-P3);
	}
	
	.active\:overlay-C1-V:active>[b]:after {
		--overlay-c: var(--C1-V);
	}
	
	.active\:bg-gradient-C1:active {
		--bg-gradient-c: var(--C1);
	}
	
	.active\:bg-gradient-C1-D1:active {
		--bg-gradient-c: var(--C1-D1);
	}
	
	.active\:bg-gradient-C1-D2:active {
		--bg-gradient-c: var(--C1-D2);
	}
	
	.active\:bg-gradient-C1-D3:active {
		--bg-gradient-c: var(--C1-D3);
	}
	
	.active\:bg-gradient-C1-L1:active {
		--bg-gradient-c: var(--C1-L1);
	}
	
	.active\:bg-gradient-C1-L2:active {
		--bg-gradient-c: var(--C1-L2);
	}
	
	.active\:bg-gradient-C1-L3:active {
		--bg-gradient-c: var(--C1-L3);
	}
	
	.active\:bg-gradient-C1-P1:active {
		--bg-gradient-c: var(--C1-P1);
	}
	
	.active\:bg-gradient-C1-P2:active {
		--bg-gradient-c: var(--C1-P2);
	}
	
	.active\:bg-gradient-C1-P3:active {
		--bg-gradient-c: var(--C1-P3);
	}
	
	.active\:bg-gradient-C1-V:active {
		--bg-gradient-c: var(--C1-V);
	}
	
	.active\:bg-gradient-C1-A1:active {
		--bg-gradient-c: var(--C1-A1);
	}
	
	.active\:bg-gradient-C1-A2:active {
		--bg-gradient-c: var(--C1-A2);
	}
	
	.active\:bg-gradient-C1-A3:active {
		--bg-gradient-c: var(--C1-A3);
	}
	
	.active\:bg-C2:active {
		--bg-c: var(--C2);
		--bg-cc: var(--C2-contrast);
	}
	
	.active\:bg-C2-D1:active {
		--bg-c: var(--C2-D1);
		--bg-cc: var(--C2-contrast);
	}
	
	.active\:bg-C2-D2:active {
		--bg-c: var(--C2-D2);
		--bg-cc: var(--C2-contrast);
	}
	
	.active\:bg-C2-D3:active {
		--bg-c: var(--C2-D3);
		--bg-cc: var(--C2-contrast);
	}
	
	.active\:bg-C2-L1:active {
		--bg-c: var(--C2-L1);
		--bg-cc: var(--C2-contrast);
	}
	
	.active\:bg-C2-L2:active {
		--bg-c: var(--C2-L2);
		--bg-cc: var(--C2-contrast);
	}
	
	.active\:bg-C2 bg-l3:active {
		--bg-c: var(--C2-L3);
		--bg-cc: var(--C2-contrast);
	}
	
	.active\:bg-C2-P1:active {
		--bg-c: var(--C2-P1);
	}
	
	.active\:bg-C2-P2:active {
		--bg-c: var(--C2-P2);
	}
	
	.active\:bg-C2 bg-tom-95:active {
		--bg-c: var(--C2-P3);
	}
	
	.active\:bg-C2-V:active {
		--bg-c: var(--C2-V);
	}
	
	.active\:bevel-C2:active>[b]:after {
		--bevel-c: var(--C2);
	}
	
	.active\:bevel-C2-D1:active>[b]:after {
		--bevel-c: var(--C2-D1);
	}
	
	.active\:bevel-C2-D2:active>[b]:after {
		--bevel-c: var(--C2-D2);
	}
	
	.active\:bevel-C2-D3:active>[b]:after {
		--bevel-c: var(--C2-D3);
	}
	
	.active\:bevel-C2-L1:active>[b]:after {
		--bevel-c: var(--C2-L1);
	}
	
	.active\:bevel-C2-L2:active>[b]:after {
		--bevel-c: var(--C2-L2);
	}
	
	.active\:bevel-C2-L3:active>[b]:after {
		--bevel-c: var(--C2-L3);
	}
	
	.active\:bevel-C2-P1:active>[b]:after {
		--bevel-c: var(--C2-P1);
	}
	
	.active\:bevel-C2-P2:active>[b]:after {
		--bevel-c: var(--C2-P2);
	}
	
	.active\:bevel-C2-P3:active>[b]:after {
		--bevel-c: var(--C2-P3);
	}
	
	.active\:bevel-C2-V:active>[b]:after {
		--bevel-c: var(--C2-V);
	}
	
	.active\:overlay-C2:active>[b]:after {
		--overlay-c: var(--C2);
	}
	
	.active\:overlay-C2-D1:active>[b]:after {
		--overlay-c: var(--C2-D1);
	}
	
	.active\:overlay-C2-D2:active>[b]:after {
		--overlay-c: var(--C2-D2);
	}
	
	.active\:overlay-C2-D3:active>[b]:after {
		--overlay-c: var(--C2-D3);
	}
	
	.active\:overlay-C2-L1:active>[b]:after {
		--overlay-c: var(--C2-L1);
	}
	
	.active\:overlay-C2-L2:active>[b]:after {
		--overlay-c: var(--C2-L2);
	}
	
	.active\:overlay-C2-L3:active>[b]:after {
		--overlay-c: var(--C2-L3);
	}
	
	.active\:overlay-C2-P1:active>[b]:after {
		--overlay-c: var(--C2-P1);
	}
	
	.active\:overlay-C2-P2:active>[b]:after {
		--overlay-c: var(--C2-P2);
	}
	
	.active\:overlay-C2-P3:active>[b]:after {
		--overlay-c: var(--C2-P3);
	}
	
	.active\:overlay-C2-V:active>[b]:after {
		--overlay-c: var(--C2-V);
	}
	
	.active\:bg-gradient-C2:active {
		--bg-gradient-c: var(--C2);
	}
	
	.active\:bg-gradient-C2-D1:active {
		--bg-gradient-c: var(--C2-D1);
	}
	
	.active\:bg-gradient-C2-D2:active {
		--bg-gradient-c: var(--C2-D2);
	}
	
	.active\:bg-gradient-C2-D3:active {
		--bg-gradient-c: var(--C2-D3);
	}
	
	.active\:bg-gradient-C2-L1:active {
		--bg-gradient-c: var(--C2-L1);
	}
	
	.active\:bg-gradient-C2-L2:active {
		--bg-gradient-c: var(--C2-L2);
	}
	
	.active\:bg-gradient-C2-L3:active {
		--bg-gradient-c: var(--C2-L3);
	}
	
	.active\:bg-gradient-C2-P1:active {
		--bg-gradient-c: var(--C2-P1);
	}
	
	.active\:bg-gradient-C2-P2:active {
		--bg-gradient-c: var(--C2-P2);
	}
	
	.active\:bg-gradient-C2-P3:active {
		--bg-gradient-c: var(--C2-P3);
	}
	
	.active\:bg-gradient-C2-V:active {
		--bg-gradient-c: var(--C2-V);
	}
	
	.active\:bg-gradient-C2-A1:active {
		--bg-gradient-c: var(--C2-A1);
	}
	
	.active\:bg-gradient-C2-A2:active {
		--bg-gradient-c: var(--C2-A2);
	}
	
	.active\:bg-gradient-C2-A3:active {
		--bg-gradient-c: var(--C2-A3);
	}
	
	.active\:bg-C3:active {
		--bg-c: var(--C3);
		--bg-cc: var(--C3-contrast);
	}
	
	.active\:bg-C3-D1:active {
		--bg-c: var(--C3-D1);
		--bg-cc: var(--C3-contrast);
	}
	
	.active\:bg-C3-D2:active {
		--bg-c: var(--C3-D2);
		--bg-cc: var(--C3-contrast);
	}
	
	.active\:bg-C3-D3:active {
		--bg-c: var(--C3-D3);
		--bg-cc: var(--C3-contrast);
	}
	
	.active\:bg-C3-L1:active {
		--bg-c: var(--C3-L1);
		--bg-cc: var(--C3-contrast);
	}
	
	.active\:bg-C3-L2:active {
		--bg-c: var(--C3-L2);
		--bg-cc: var(--C3-contrast);
	}
	
	.active\:bg-C3-L3:active {
		--bg-c: var(--C3-L3);
		--bg-cc: var(--C3-contrast);
	}
	
	.active\:bg-C3-P1:active {
		--bg-c: var(--C3-P1);
	}
	
	.active\:bg-C3-P2:active {
		--bg-c: var(--C3-P2);
	}
	
	.active\:bg-C3-P3:active {
		--bg-c: var(--C3-P3);
	}
	
	.active\:bg-C3-V:active {
		--bg-c: var(--C3-V);
	}
	
	.active\:bevel-C3:active>[b]:after {
		--bevel-c: var(--C3);
	}
	
	.active\:bevel-C3-D1:active>[b]:after {
		--bevel-c: var(--C3-D1);
	}
	
	.active\:bevel-C3-D2:active>[b]:after {
		--bevel-c: var(--C3-D2);
	}
	
	.active\:bevel-C3-D3:active>[b]:after {
		--bevel-c: var(--C3-D3);
	}
	
	.active\:bevel-C3-L1:active>[b]:after {
		--bevel-c: var(--C3-L1);
	}
	
	.active\:bevel-C3-L2:active>[b]:after {
		--bevel-c: var(--C3-L2);
	}
	
	.active\:bevel-C3-L3:active>[b]:after {
		--bevel-c: var(--C3-L3);
	}
	
	.active\:bevel-C3-P1:active>[b]:after {
		--bevel-c: var(--C3-P1);
	}
	
	.active\:bevel-C3-P2:active>[b]:after {
		--bevel-c: var(--C3-P2);
	}
	
	.active\:bevel-C3-P3:active>[b]:after {
		--bevel-c: var(--C3-P3);
	}
	
	.active\:bevel-C3-V:active>[b]:after {
		--bevel-c: var(--C3-V);
	}
	
	.active\:overlay-C3:active>[b]:after {
		--overlay-c: var(--C3);
	}
	
	.active\:overlay-C3-D1:active>[b]:after {
		--overlay-c: var(--C3-D1);
	}
	
	.active\:overlay-C3-D2:active>[b]:after {
		--overlay-c: var(--C3-D2);
	}
	
	.active\:overlay-C3-D3:active>[b]:after {
		--overlay-c: var(--C3-D3);
	}
	
	.active\:overlay-C3-L1:active>[b]:after {
		--overlay-c: var(--C3-L1);
	}
	
	.active\:overlay-C3-L2:active>[b]:after {
		--overlay-c: var(--C3-L2);
	}
	
	.active\:overlay-C3-L3:active>[b]:after {
		--overlay-c: var(--C3-L3);
	}
	
	.active\:overlay-C3-P1:active>[b]:after {
		--overlay-c: var(--C3-P1);
	}
	
	.active\:overlay-C3-P2:active>[b]:after {
		--overlay-c: var(--C3-P2);
	}
	
	.active\:overlay-C3-P3:active>[b]:after {
		--overlay-c: var(--C3-P3);
	}
	
	.active\:overlay-C3-V:active>[b]:after {
		--overlay-c: var(--C3-V);
	}
	
	.active\:bg-gradient-C3:active {
		--bg-gradient-c: var(--C3);
	}
	
	.active\:bg-gradient-C3-D1:active {
		--bg-gradient-c: var(--C3-D1);
	}
	
	.active\:bg-gradient-C3-D2:active {
		--bg-gradient-c: var(--C3-D2);
	}
	
	.active\:bg-gradient-C3-D3:active {
		--bg-gradient-c: var(--C3-D3);
	}
	
	.active\:bg-gradient-C3-L1:active {
		--bg-gradient-c: var(--C3-L1);
	}
	
	.active\:bg-gradient-C3-L2:active {
		--bg-gradient-c: var(--C3-L2);
	}
	
	.active\:bg-gradient-C3-L3:active {
		--bg-gradient-c: var(--C3-L3);
	}
	
	.active\:bg-gradient-C3-P1:active {
		--bg-gradient-c: var(--C3-P1);
	}
	
	.active\:bg-gradient-C3-P2:active {
		--bg-gradient-c: var(--C3-P2);
	}
	
	.active\:bg-gradient-C3-P3:active {
		--bg-gradient-c: var(--C3-P3);
	}
	
	.active\:bg-gradient-C3-V:active {
		--bg-gradient-c: var(--C3-V);
	}
	
	.active\:bg-gradient-C3-A1:active {
		--bg-gradient-c: var(--C3-A1);
	}
	
	.active\:bg-gradient-C3-A2:active {
		--bg-gradient-c: var(--C3-A2);
	}
	
	.active\:bg-gradient-C3-A3:active {
		--bg-gradient-c: var(--C3-A3);
	}
	
	.active\:bg-C4:active {
		--bg-c: var(--C4);
		--bg-cc: var(--C4-contrast);
	}
	
	.active\:bg-C0 bg-tom-20:active {
		--bg-c: var(--C4-D1);
		--bg-cc: var(--C4-contrast);
	}
	
	.active\:bg-C4-D2:active {
		--bg-c: var(--C4-D2);
		--bg-cc: var(--C4-contrast);
	}
	
	.active\:bg-C0 bg-tom-20:active {
		--bg-c: var(--C4-D3);
		--bg-cc: var(--C4-contrast);
	}
	
	.active\:bg-C4-L1:active {
		--bg-c: var(--C4-L1);
		--bg-cc: var(--C4-contrast);
	}
	
	.active\:bg-C4-L2:active {
		--bg-c: var(--C4-L2);
		--bg-cc: var(--C4-contrast);
	}
	
	.active\:bg-C4-L3:active {
		--bg-c: var(--C4-L3);
		--bg-cc: var(--C4-contrast);
	}
	
	.active\:bg-C4-P1:active {
		--bg-c: var(--C4-P1);
	}
	
	.active\:bg-C4-P2:active {
		--bg-c: var(--C4-P2);
	}
	
	.active\:bg-C4-P3:active {
		--bg-c: var(--C4-P3);
	}
	
	.active\:bg-C4-V:active {
		--bg-c: var(--C4-V);
	}
	
	.active\:bevel-C4:active>[b]:after {
		--bevel-c: var(--C4);
	}
	
	.active\:bevel-C4-D1:active>[b]:after {
		--bevel-c: var(--C4-D1);
	}
	
	.active\:bevel-C4-D2:active>[b]:after {
		--bevel-c: var(--C4-D2);
	}
	
	.active\:bevel-C4-D3:active>[b]:after {
		--bevel-c: var(--C4-D3);
	}
	
	.active\:bevel-C4-L1:active>[b]:after {
		--bevel-c: var(--C4-L1);
	}
	
	.active\:bevel-C4-L2:active>[b]:after {
		--bevel-c: var(--C4-L2);
	}
	
	.active\:bevel-C4-L3:active>[b]:after {
		--bevel-c: var(--C4-L3);
	}
	
	.active\:bevel-C4-P1:active>[b]:after {
		--bevel-c: var(--C4-P1);
	}
	
	.active\:bevel-C4-P2:active>[b]:after {
		--bevel-c: var(--C4-P2);
	}
	
	.active\:bevel-C4-P3:active>[b]:after {
		--bevel-c: var(--C4-P3);
	}
	
	.active\:bevel-C4-V:active>[b]:after {
		--bevel-c: var(--C4-V);
	}
	
	.active\:overlay-C4:active>[b]:after {
		--overlay-c: var(--C4);
	}
	
	.active\:overlay-C4-D1:active>[b]:after {
		--overlay-c: var(--C4-D1);
	}
	
	.active\:overlay-C4-D2:active>[b]:after {
		--overlay-c: var(--C4-D2);
	}
	
	.active\:overlay-C4-D3:active>[b]:after {
		--overlay-c: var(--C4-D3);
	}
	
	.active\:overlay-C4-L1:active>[b]:after {
		--overlay-c: var(--C4-L1);
	}
	
	.active\:overlay-C4-L2:active>[b]:after {
		--overlay-c: var(--C4-L2);
	}
	
	.active\:overlay-C4-L3:active>[b]:after {
		--overlay-c: var(--C4-L3);
	}
	
	.active\:overlay-C4-P1:active>[b]:after {
		--overlay-c: var(--C4-P1);
	}
	
	.active\:overlay-C4-P2:active>[b]:after {
		--overlay-c: var(--C4-P2);
	}
	
	.active\:overlay-C4-P3:active>[b]:after {
		--overlay-c: var(--C4-P3);
	}
	
	.active\:overlay-C4-V:active>[b]:after {
		--overlay-c: var(--C4-V);
	}
	
	.active\:bg-gradient-C4:active {
		--bg-gradient-c: var(--C4);
	}
	
	.active\:bg-gradient-C4-D1:active {
		--bg-gradient-c: var(--C4-D1);
	}
	
	.active\:bg-gradient-C4-D2:active {
		--bg-gradient-c: var(--C4-D2);
	}
	
	.active\:bg-gradient-C4-D3:active {
		--bg-gradient-c: var(--C4-D3);
	}
	
	.active\:bg-gradient-C4-L1:active {
		--bg-gradient-c: var(--C4-L1);
	}
	
	.active\:bg-gradient-C4-L2:active {
		--bg-gradient-c: var(--C4-L2);
	}
	
	.active\:bg-gradient-C4-L3:active {
		--bg-gradient-c: var(--C4-L3);
	}
	
	.active\:bg-gradient-C4-P1:active {
		--bg-gradient-c: var(--C4-P1);
	}
	
	.active\:bg-gradient-C4-P2:active {
		--bg-gradient-c: var(--C4-P2);
	}
	
	.active\:bg-gradient-C4-P3:active {
		--bg-gradient-c: var(--C4-P3);
	}
	
	.active\:bg-gradient-C4-V:active {
		--bg-gradient-c: var(--C4-V);
	}
	
	.active\:bg-gradient-C4-A1:active {
		--bg-gradient-c: var(--C4-A1);
	}
	
	.active\:bg-gradient-C4-A2:active {
		--bg-gradient-c: var(--C4-A2);
	}
	
	.active\:bg-gradient-C4-A3:active {
		--bg-gradient-c: var(--C4-A3);
	}
	
	.box,
	.bel {
		--c: var(--bg-cc);
		--bg-deg: 105deg;
		--bvl-deg: 90deg;
	}
	
	.box>[b],
	.bel>[b] {
		background: var(--bg-c);
		border-radius: var(--b-radius);
		border-top-left-radius: var(--b-radius-tl);
		border-top-right-radius: var(--b-radius-tr);
		border-bottom-left-radius: var(--b-radius-bl);
		border-bottom-right-radius: var(--b-radius-br);
		overflow: hidden;
		-webkit-transition: all .15s ease;
		transition: all .15s ease;
		box-shadow: 10px 10px 10px #0001;
	}
	
	.gradient>[b] {
		background-image: linear-gradient( var(--bg-deg), var(--bg-c), var(--bg-gradient-c));
	}
	
	.gradient-over>[b]:after {
		content: "";
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		position: absolute;
		background-image: linear-gradient( var(--bg-deg), transparent, var(--bg-gradient-c));
	}
	
	.gradient-0deg {
		--bg-deg: 0deg;
	}
	
	.gradient-45deg {
		--bg-deg: 45deg;
	}
	
	.gradient-90deg {
		--bg-deg: 90deg;
	}
	
	.gradient-135deg {
		--bg-deg: 135deg;
	}
	
	.gradient-180deg {
		--bg-deg: 180deg;
	}
	
	.gradient-225deg {
		--bg-deg: 225deg;
	}
	
	.gradient-270deg {
		--bg-deg: 270deg;
	}
	
	.gradient-315deg {
		--bg-deg: 315deg;
	}
	
	.gradient-360deg {
		--bg-deg: 360deg;
	}
	
	.overlay>[b]:before {
		content: "";
		display: block;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		position: absolute;
		background: var(--overlay-c);
		z-index: 1;
		opacity: .5;
		border-top-left-radius: var(--b-radius-tl);
		border-top-right-radius: var(--b-radius-tr);
		border-bottom-left-radius: var(--b-radius-bl);
		border-bottom-right-radius: var(--b-radius-br);
		-webkit-transition: all .5s ease;
		transition: all .5s ease;
	}
	
	.bevel>[b]:after {
		content: "";
		display: block;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		position: absolute;
		z-index: 1;
		border-top-left-radius: var(--b-radius-tl);
		border-top-right-radius: var(--b-radius-tr);
		border-bottom-left-radius: var(--b-radius-bl);
		border-bottom-right-radius: var(--b-radius-br);
		opacity: .5;
		background: linear-gradient(var(--bvl-deg), var(--bevel-c), transparent);
	}
	
	.bevel-split>[b]:after {
		background: linear-gradient(var(--bvl-deg), var(--bevel-c) 50%, transparent 50%);
	}
	
	.bevel-0deg {
		--bvl-deg: 0deg;
	}
	
	.bevel-45deg {
		--bvl-deg: 45deg;
	}
	
	.bevel-90deg {
		--bvl-deg: 90deg;
	}
	
	.bevel-135deg {
		--bvl-deg: 135deg;
	}
	
	.bevel-180deg {
		--bvl-deg: 180deg;
	}
	
	.bevel-225deg {
		--bvl-deg: 225deg;
	}
	
	.bevel-270deg {
		--bvl-deg: 270deg;
	}
	
	.bevel-315deg {
		--bvl-deg: 315deg;
	}
	
	.bevel-360deg {
		--bvl-deg: 360deg;
	}
	
	.bevel-radial>[b]:after {
		background: radial-gradient(transparent, transparent, var(--bevel-c));
	}
	
	.overlay-filter-saturate-150>[b]:before {
		-webkit-backdrop-filter: saturate(1.5);
		backdrop-filter: saturate(1.5);
	}
	
	.overlay-filter-saturate-200>[b]:before {
		-webkit-backdrop-filter: saturate(2);
		backdrop-filter: saturate(2);
	}
	
	.overlay-filter-saturate-250>[b]:before {
		-webkit-backdrop-filter: saturate(2.5);
		backdrop-filter: saturate(2.5);
	}
	
	.overlay-filter-blur-2>[b]:before {
		-webkit-backdrop-filter: blur(2rem);
		backdrop-filter: blur(2rem);
	}
	
	.overlay-filter-blur-5>[b]:before {
		-webkit-backdrop-filter: blur(5rem);
		backdrop-filter: blur(5rem);
	}
	
	.overlay-filter-blur-10>[b]:before {
		-webkit-backdrop-filter: blur(10rem);
		backdrop-filter: blur(10rem);
	}
	
	.overlay-filter-blur-20>[b]:before {
		-webkit-backdrop-filter: blur(20rem);
		backdrop-filter: blur(20rem);
	}
	
	.overlay-filter-contrast-20>[b]:before {
		-webkit-backdrop-filter: contrast(0.2);
		backdrop-filter: contrast(0.2);
	}
	
	.overlay-filter-contrast-40>[b]:before {
		-webkit-backdrop-filter: contrast(0.4);
		backdrop-filter: contrast(0.4);
	}
	
	.overlay-filter-contrast-60>[b]:before {
		-webkit-backdrop-filter: contrast(0.6);
		backdrop-filter: contrast(0.6);
	}
	
	.overlay-filter-contrast-80>[b]:before {
		-webkit-backdrop-filter: contrast(0.8);
		backdrop-filter: contrast(0.8);
	}
	
	.overlay-filter-contrast-100>[b]:before {
		-webkit-backdrop-filter: contrast(1);
		backdrop-filter: contrast(1);
	}
	
	.overlay-filter-contrast-150>[b]:before {
		-webkit-backdrop-filter: contrast(1.5);
		backdrop-filter: contrast(1.5);
	}
	
	.overlay-filter-contrast-200>[b]:before {
		-webkit-backdrop-filter: contrast(2);
		backdrop-filter: contrast(2);
	}
	
	.overlay-filter-brightness-20>[b]:before {
		-webkit-backdrop-filter: brightness(0.2);
		backdrop-filter: brightness(0.2);
	}
	
	.overlay-filter-brightness-40>[b]:before {
		-webkit-backdrop-filter: brightness(0.4);
		backdrop-filter: brightness(0.4);
	}
	
	.overlay-filter-brightness-60>[b]:before {
		-webkit-backdrop-filter: brightness(0.6);
		backdrop-filter: brightness(0.6);
	}
	
	.overlay-filter-brightness-80>[b]:before {
		-webkit-backdrop-filter: brightness(0.8);
		backdrop-filter: brightness(0.8);
	}
	
	.overlay-filter-brightness-100>[b]:before {
		-webkit-backdrop-filter: brightness(1);
		backdrop-filter: brightness(1);
	}
	
	.overlay-filter-brightness-150>[b]:before {
		-webkit-backdrop-filter: brightness(1.5);
		backdrop-filter: brightness(1.5);
	}
	
	.overlay-filter-brightness-200>[b]:before {
		-webkit-backdrop-filter: brightness(2);
		backdrop-filter: brightness(2);
	}
	
	.overlay-filter-saturation-0>[b]:before {
		-webkit-backdrop-filter: saturate(.0);
		backdrop-filter: saturate(.0);
	}
	
	.overlay-filter-saturation-20>[b]:before {
		-webkit-backdrop-filter: saturate(.2);
		backdrop-filter: saturate(.2);
	}
	
	.overlay-filter-saturation-40>[b]:before {
		-webkit-backdrop-filter: saturate(.4);
		backdrop-filter: saturate(.4);
	}
	
	.overlay-filter-saturation-60>[b]:before {
		-webkit-backdrop-filter: saturate(.6);
		backdrop-filter: saturate(.6);
	}
	
	.overlay-filter-saturation-80>[b]:before {
		-webkit-backdrop-filter: saturate(.8);
		backdrop-filter: saturate(.8);
	}
	
	.overlay-filter-saturation-100>[b]:before {
		-webkit-backdrop-filter: saturate(1);
		backdrop-filter: saturate(1);
	}
	
	.overlay-filter-saturation-120>[b]:before {
		-webkit-backdrop-filter: saturate(1.2);
		backdrop-filter: saturate(1.2);
	}
	
	.overlay-filter-saturation-140>[b]:before {
		-webkit-backdrop-filter: saturate(1.4);
		backdrop-filter: saturate(1.4);
	}
	
	.overlay-filter-saturation-160>[b]:before {
		-webkit-backdrop-filter: saturate(1.6);
		backdrop-filter: saturate(1.6);
	}
	
	.overlay-filter-saturation-180>[b]:before {
		-webkit-backdrop-filter: saturate(1.8);
		backdrop-filter: saturate(1.8);
	}
	
	.overlay-filter-saturation-200>[b]:before {
		-webkit-backdrop-filter: saturate(2);
		backdrop-filter: saturate(2);
	}
	
	.overlay-filter-hue-rotate-45>[b]:before {
		-webkit-backdrop-filter: hue-rotate(45deg);
		backdrop-filter: hue-rotate(45deg);
	}
	
	.overlay-filter-hue-rotate-90>[b]:before {
		-webkit-backdrop-filter: hue-rotate(90deg);
		backdrop-filter: hue-rotate(90deg);
	}
	
	.overlay-filter-hue-rotate-135>[b]:before {
		-webkit-backdrop-filter: hue-rotate(135deg);
		backdrop-filter: hue-rotate(135deg);
	}
	
	.overlay-filter-hue-rotate-180>[b]:before {
		-webkit-backdrop-filter: hue-rotate(180deg);
		backdrop-filter: hue-rotate(180deg);
	}
	
	.overlay-filter-hue-rotate-225>[b]:before {
		-webkit-backdrop-filter: hue-rotate(225deg);
		backdrop-filter: hue-rotate(225deg);
	}
	
	.overlay-filter-hue-rotate-270>[b]:before {
		-webkit-backdrop-filter: hue-rotate(270deg);
		backdrop-filter: hue-rotate(270deg);
	}
	
	.overlay-filter-hue-rotate-315>[b]:before {
		-webkit-backdrop-filter: hue-rotate(315deg);
		backdrop-filter: hue-rotate(315deg);
	}
	
	.overlay-filter-hue-rotate-360>[b]:before {
		-webkit-backdrop-filter: hue-rotate(360deg);
		backdrop-filter: hue-rotate(360deg);
	}
	
	.overlay-alpha-0>[b]:before,
	.bevel-alpha-0>[b]:after {
		opacity: 0;
	}
	
	.overlay-alpha-10>[b]:before,
	.bevel-alpha-10>[b]:after {
		opacity: 0.1;
	}
	
	.overlay-alpha-20>[b]:before,
	.bevel-alpha-20>[b]:after {
		opacity: 0.2;
	}
	
	.overlay-alpha-30>[b]:before,
	.bevel-alpha-30>[b]:after {
		opacity: 0.3;
	}
	
	.overlay-alpha-40>[b]:before,
	.bevel-alpha-40>[b]:after {
		opacity: 0.4;
	}
	
	.overlay-alpha-50>[b]:before,
	.bevel-alpha-50>[b]:after {
		opacity: 0.5;
	}
	
	.overlay-alpha-60>[b]:before,
	.bevel-alpha-60>[b]:after {
		opacity: 0.6;
	}
	
	.overlay-alpha-70>[b]:before,
	.bevel-alpha-70>[b]:after {
		opacity: 0.7;
	}
	
	.overlay-alpha-80>[b]:before,
	.bevel-alpha-80>[b]:after {
		opacity: 0.8;
	}
	
	.overlay-alpha-90>[b]:before,
	.bevel-alpha-90>[b]:after {
		opacity: 0.9;
	}
	
	.overlay-alpha-100>[b]:before,
	.bevel-alpha-100>[b]:after {
		opacity: 1;
	}
	
	.bevel-mix-hard-light>[b]:after {
		mix-blend-mode: hard-light;
	}
	
	.bevel-mix-color>[b]:after {
		mix-blend-mode: color;
	}
	
	.bevel-mix-color-burn>[b]:after {
		mix-blend-mode: color-burn;
	}
	
	.bevel-mix-hard-light>[b]:after {
		mix-blend-mode: hard-light;
	}
	
	.bevel-mix-hard-light>[b]:after {
		mix-blend-mode: hard-light;
	}
	
	.bevel-mix-color-dodge>[b]:after {
		mix-blend-mode: color-dodge;
	}
	
	.bevel-mix-darken>[b]:after {
		mix-blend-mode: darken;
	}
	
	.bevel-mix-difference>[b]:after {
		mix-blend-mode: difference;
	}
	
	.bevel-mix-exclusion>[b]:after {
		mix-blend-mode: exclusion;
	}
	
	.bevel-mix-hue>[b]:after {
		mix-blend-mode: hue;
	}
	
	.bevel-mix-lighten>[b]:after {
		mix-blend-mode: lighten;
	}
	
	.bevel-mix-luminosity>[b]:after {
		mix-blend-mode: luminosity;
	}
	
	.bevel-mix-multiply>[b]:after {
		mix-blend-mode: multiply;
	}
	
	.bevel-mix-soft-light>[b]:after {
		mix-blend-mode: soft-light;
	}
	
	.overlay-mix-hard-light>[b]:before {
		mix-blend-mode: hard-light;
	}
	
	.overlay-mix-color>[b]:before {
		mix-blend-mode: color;
	}
	
	.overlay-mix-color-burn>[b]:before {
		mix-blend-mode: color-burn;
	}
	
	.overlay-mix-hard-light>[b]:before {
		mix-blend-mode: hard-light;
	}
	
	.overlay-mix-hard-light>[b]:before {
		mix-blend-mode: hard-light;
	}
	
	.overlay-mix-color-dodge>[b]:before {
		mix-blend-mode: color-dodge;
	}
	
	.overlay-mix-darken>[b]:before {
		mix-blend-mode: darken;
	}
	
	.overlay-mix-difference>[b]:before {
		mix-blend-mode: difference;
	}
	
	.overlay-mix-exclusion>[b]:before {
		mix-blend-mode: exclusion;
	}
	
	.overlay-mix-hue>[b]:before {
		mix-blend-mode: hue;
	}
	
	.overlay-mix-lighten>[b]:before {
		mix-blend-mode: lighten;
	}
	
	.overlay-mix-luminosity>[b]:before {
		mix-blend-mode: luminosity;
	}
	
	.overlay-mix-multiply>[b]:before {
		mix-blend-mode: multiply;
	}
	
	.overlay-mix-soft-light>[b]:before {
		mix-blend-mode: soft-light;
	}
	
	.board-in-piece {
		background: var(--bg-c);
	}
	
	.board-in-piece>[b] {
		display: none;
	}
	
	.bg-none>[b] {
		display: none;
	}
	
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
		--c: #333;
	}
	
	[p] {
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-align-items: flex-start;
		-webkit-box-align: flex-start;
		-ms-flex-align: flex-start;
		align-items: flex-start;
		border-radius: var(--b-radius);
		border-top-left-radius: var(--b-radius-tl);
		border-top-right-radius: var(--b-radius-tr);
		border-bottom-left-radius: var(--b-radius-bl);
		border-bottom-right-radius: var(--b-radius-br);
	}
	
	[p] [b] {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		pointer-events: none;
	}
	
	[p] [c] {
		position: relative;
		min-width: 100%;
		min-height: 100%;
	}
	
	[p]:after {
		content: "";
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
	}
	
	[p]:before {
		content: "";
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
	}
	
	.inspector [p]>[c] {
		outline: 1px dashed #fff4;
		outline-offset: -1px;
	}
	
	.inspector [p]:before {
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
	}
	
	.inspector [p]:hover:before {
		-webkit-transition: all 0.1s ease;
		transition: all 0.1s ease;
		background: #777f;
		text-shadow: 2px 2px 3px #0002;
		box-shadow: 2px 2px 3px 1px #0003;
		z-index: 5;
		opacity: 1;
	}
	
	.inspector [p]:before {
		background: #333;
		color: #000;
	}
	
	.inspector [p] [p]:before {
		background: #3f3;
		color: #000;
	}
	
	.inspector [p] [p] [p]:before {
		background: #33f;
		color: #fff;
	}
	
	.inspector [p] [p] [p] [p]:before {
		background: #f4f;
		color: #fff;
	}
	
	.inspector [p] [p] [p] [p] [p]:before {
		background: #ff3;
		color: #000;
	}
	
	.inspector [p] [p] [p] [p] [p] [p]:before {
		background: #f3f;
		color: #000;
	}
	
	.inspector [p]:not(.box):before,
	.inspector [p]:not(.box-vertical):before {
		bottom: 100%;
	}
	
	..hide {
		display: none;
	}
	
	..show {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
	}
	
	.grow {
		-webkit-box-flex: 1;
		-webkit-flex-grow: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
	}
	
	.shrink {
		-webkit-flex-shrink: 0;
		-ms-flex-negative: 0;
		flex-shrink: 0;
	}
	
	@media (max-width:1199px) {
		.lg\:.hide {
			display: none;
		}
		.lg\:.show {
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
		}
		.lg\:grow {
			-webkit-box-flex: 1;
			-webkit-flex-grow: 1;
			-ms-flex-positive: 1;
			flex-grow: 1;
		}
		.lg\:shrink {
			-webkit-flex-shrink: 0;
			-ms-flex-negative: 0;
			flex-shrink: 0;
		}
	}
	
	@media (max-width:991px) {
		.md\:.hide {
			display: none;
		}
		.md\:.show {
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
		}
		.md\:grow {
			-webkit-box-flex: 1;
			-webkit-flex-grow: 1;
			-ms-flex-positive: 1;
			flex-grow: 1;
		}
		.md\:shrink {
			-webkit-flex-shrink: 0;
			-ms-flex-negative: 0;
			flex-shrink: 0;
		}
	}
	
	@media (max-width:767px) {
		.sm\:.hide {
			display: none;
		}
		.sm\:.show {
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
		}
		.sm\:grow {
			-webkit-box-flex: 1;
			-webkit-flex-grow: 1;
			-ms-flex-positive: 1;
			flex-grow: 1;
		}
		.sm\:shrink {
			-webkit-flex-shrink: 0;
			-ms-flex-negative: 0;
			flex-shrink: 0;
		}
	}
	
	@media (max-width:575px) {
		.xs\:.hide {
			display: none;
		}
		.xs\:.show {
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
		}
		.xs\:grow {
			-webkit-box-flex: 1;
			-webkit-flex-grow: 1;
			-ms-flex-positive: 1;
			flex-grow: 1;
		}
		.xs\:shrink {
			-webkit-flex-shrink: 0;
			-ms-flex-negative: 0;
			flex-shrink: 0;
		}
	}
	
	.S1 {
		--s: 22.63rem;
	}
	
	.S2 {
		--s: 20.16rem;
	}
	
	.S3 {
		--s: 17.96rem;
	}
	
	.S4 {
		--s: 16rem;
	}
	
	.S5 {
		--s: 14.25rem;
	}
	
	.S6 {
		--s: 12.7rem;
	}
	
	@media (max-width:1199px) {
		.lg\:S1 {
			--s: 22.63rem;
		}
		.lg\:S2 {
			--s: 20.16rem;
		}
		.lg\:S3 {
			--s: 17.96rem;
		}
		.lg\:S4 {
			--s: 16rem;
		}
		.lg\:S5 {
			--s: 14.25rem;
		}
		.lg\:S6 {
			--s: 12.7rem;
		}
	}
	
	@media (max-width:991px) {
		.md\:S1 {
			--s: 22.63rem;
		}
		.md\:S2 {
			--s: 20.16rem;
		}
		.md\:S3 {
			--s: 17.96rem;
		}
		.md\:S4 {
			--s: 16rem;
		}
		.md\:S5 {
			--s: 14.25rem;
		}
		.md\:S6 {
			--s: 12.7rem;
		}
	}
	
	@media (max-width:767px) {
		.sm\:S1 {
			--s: 22.63rem;
		}
		.sm\:S2 {
			--s: 20.16rem;
		}
		.sm\:S3 {
			--s: 17.96rem;
		}
		.sm\:S4 {
			--s: 16rem;
		}
		.sm\:S5 {
			--s: 14.25rem;
		}
		.sm\:S6 {
			--s: 12.7rem;
		}
	}
	
	@media (max-width:575px) {
		.xs\:S1 {
			--s: 22.63rem;
		}
		.xs\:S2 {
			--s: 20.16rem;
		}
		.xs\:S3 {
			--s: 17.96rem;
		}
		.xs\:S4 {
			--s: 16rem;
		}
		.xs\:S5 {
			--s: 14.25rem;
		}
		.xs\:S6 {
			--s: 12.7rem;
		}
	}
	
	[p].pad-8 {
		--pad-t: var(--pad-8);
		--pad-b: var(--pad-8);
		--pad-l: var(--pad-8);
		--pad-r: var(--pad-8);
	}
	
	[p].pad-7 {
		--pad-t: var(--pad-7);
		--pad-b: var(--pad-7);
		--pad-l: var(--pad-7);
		--pad-r: var(--pad-7);
	}
	
	[p].pad-6 {
		--pad-t: var(--pad-6);
		--pad-b: var(--pad-6);
		--pad-l: var(--pad-6);
		--pad-r: var(--pad-6);
	}
	
	[p].pad-5 {
		--pad-t: var(--pad-5);
		--pad-b: var(--pad-5);
		--pad-l: var(--pad-5);
		--pad-r: var(--pad-5);
	}
	
	[p].pad-4 {
		--pad-t: var(--pad-4);
		--pad-b: var(--pad-4);
		--pad-l: var(--pad-4);
		--pad-r: var(--pad-4);
	}
	
	[p].pad-3 {
		--pad-t: var(--pad-3);
		--pad-b: var(--pad-3);
		--pad-l: var(--pad-3);
		--pad-r: var(--pad-3);
	}
	
	[p].pad-2 {
		--pad-t: var(--pad-2);
		--pad-b: var(--pad-2);
		--pad-l: var(--pad-2);
		--pad-r: var(--pad-2);
	}
	
	[p].pad-1 {
		--pad-t: var(--pad-1);
		--pad-b: var(--pad-1);
		--pad-l: var(--pad-1);
		--pad-r: var(--pad-1);
	}
	
	[p].pad-1rem {
		--pad-t: 1rem;
		--pad-b: 1rem;
		--pad-l: 1rem;
		--pad-r: 1rem;
	}
	
	[p].pad-2rem {
		--pad-t: 2rem;
		--pad-b: 2rem;
		--pad-l: 2rem;
		--pad-r: 2rem;
	}
	
	[p].pad-none,
	[p].pad-0 {
		--pad-t: 0px;
		--pad-b: 0px;
		--pad-l: 0px;
		--pad-r: 0px;
	}
	
	[p].pad-h-8 {
		--pad-l: var(--pad-8);
		--pad-r: var(--pad-8);
	}
	
	[p].pad-h-7 {
		--pad-l: var(--pad-7);
		--pad-r: var(--pad-7);
	}
	
	[p].pad-h-6 {
		--pad-l: var(--pad-6);
		--pad-r: var(--pad-6);
	}
	
	[p].pad-h-5 {
		--pad-l: var(--pad-5);
		--pad-r: var(--pad-5);
	}
	
	[p].pad-h-4 {
		--pad-l: var(--pad-4);
		--pad-r: var(--pad-4);
	}
	
	[p].pad-h-3 {
		--pad-l: var(--pad-3);
		--pad-r: var(--pad-3);
	}
	
	[p].pad-h-2 {
		--pad-l: var(--pad-2);
		--pad-r: var(--pad-2);
	}
	
	[p].pad-h-1 {
		--pad-l: var(--pad-1);
		--pad-r: var(--pad-1);
	}
	
	[p].pad-h-1rem {
		--pad-l: 1rem;
		--pad-r: 1rem;
	}
	
	[p].pad-h-2rem {
		--pad-l: 2rem;
		--pad-r: 2rem;
	}
	
	[p].pad-h-none,
	[p].pad-h-0 {
		--pad-l: 0rem;
		--pad-r: 0rem;
	}
	
	[p].pad-v-8 {
		--pad-t: var(--pad-8);
		--pad-b: var(--pad-8);
	}
	
	[p].pad-v-7 {
		--pad-t: var(--pad-7);
		--pad-b: var(--pad-7);
	}
	
	[p].pad-v-6 {
		--pad-t: var(--pad-6);
		--pad-b: var(--pad-6);
	}
	
	[p].pad-v-5 {
		--pad-t: var(--pad-5);
		--pad-b: var(--pad-5);
	}
	
	[p].pad-v-4 {
		--pad-t: var(--pad-4);
		--pad-b: var(--pad-4);
	}
	
	[p].pad-v-3 {
		--pad-t: var(--pad-3);
		--pad-b: var(--pad-3);
	}
	
	[p].pad-v-2 {
		--pad-t: var(--pad-2);
		--pad-b: var(--pad-2);
	}
	
	[p].pad-v-1 {
		--pad-t: var(--pad-1);
		--pad-b: var(--pad-1);
	}
	
	[p].pad-v-1rem {
		--pad-t: 1rem;
		--pad-b: 1rem;
	}
	
	[p].pad-v-2rem {
		--pad-t: 2rem;
		--pad-b: 2rem;
	}
	
	[p].pad-v-none,
	[p].pad-v-0 {
		--pad-t: 0rem;
		--pad-b: 0rem;
	}
	
	[p].pad-l-8 {
		--pad-l: var(--pad-8);
	}
	
	[p].pad-l-7 {
		--pad-l: var(--pad-7);
	}
	
	[p].pad-l-6 {
		--pad-l: var(--pad-6);
	}
	
	[p].pad-l-5 {
		--pad-l: var(--pad-5);
	}
	
	[p].pad-l-4 {
		--pad-l: var(--pad-4);
	}
	
	[p].pad-l-3 {
		--pad-l: var(--pad-3);
	}
	
	[p].pad-l-2 {
		--pad-l: var(--pad-2);
	}
	
	[p].pad-l-1 {
		--pad-l: var(--pad-1);
	}
	
	[p].pad-l-1rem {
		--pad-l: 1rem;
	}
	
	[p].pad-l-2rem {
		--pad-l: 2rem;
	}
	
	[p].pad-l-none,
	[p].pad-l-0 {
		--pad-l: 0rem;
	}
	
	[p].pad-r-8 {
		--pad-r: var(--pad-8);
	}
	
	[p].pad-r-7 {
		--pad-r: var(--pad-7);
	}
	
	[p].pad-r-6 {
		--pad-r: var(--pad-6);
	}
	
	[p].pad-r-5 {
		--pad-r: var(--pad-5);
	}
	
	[p].pad-r-4 {
		--pad-r: var(--pad-4);
	}
	
	[p].pad-r-3 {
		--pad-r: var(--pad-3);
	}
	
	[p].pad-r-2 {
		--pad-r: var(--pad-2);
	}
	
	[p].pad-r-1 {
		--pad-r: var(--pad-1);
	}
	
	[p].pad-r-1rem {
		--pad-r: 1rem;
	}
	
	[p].pad-r-2rem {
		--pad-r: 2rem;
	}
	
	[p].pad-r-none,
	[p].pad-r-0 {
		--pad-r: 0rem;
	}
	
	[p].pad-t-8 {
		--pad-t: var(--pad-8);
	}
	
	[p].pad-t-7 {
		--pad-t: var(--pad-7);
	}
	
	[p].pad-t-6 {
		--pad-t: var(--pad-6);
	}
	
	[p].pad-t-5 {
		--pad-t: var(--pad-5);
	}
	
	[p].pad-t-4 {
		--pad-t: var(--pad-4);
	}
	
	[p].pad-t-3 {
		--pad-t: var(--pad-3);
	}
	
	[p].pad-t-2 {
		--pad-t: var(--pad-2);
	}
	
	[p].pad-t-1 {
		--pad-t: var(--pad-1);
	}
	
	[p].pad-t-1rem {
		--pad-t: 1rem;
	}
	
	[p].pad-t-2rem {
		--pad-t: 2rem;
	}
	
	[p].pad-t-none,
	[p].pad-t-0 {
		--pad-t: 0rem;
	}
	
	[p].pad-b-8 {
		--pad-b: var(--pad-8);
	}
	
	[p].pad-b-7 {
		--pad-b: var(--pad-7);
	}
	
	[p].pad-b-6 {
		--pad-b: var(--pad-6);
	}
	
	[p].pad-b-5 {
		--pad-b: var(--pad-5);
	}
	
	[p].pad-b-4 {
		--pad-b: var(--pad-4);
	}
	
	[p].pad-b-3 {
		--pad-b: var(--pad-3);
	}
	
	[p].pad-b-2 {
		--pad-b: var(--pad-2);
	}
	
	[p].pad-b-1 {
		--pad-b: var(--pad-1);
	}
	
	[p].pad-b-1rem {
		--pad-b: 1rem;
	}
	
	[p].pad-b-2rem {
		--pad-b: 2rem;
	}
	
	[p].pad-b-none,
	[p].pad-b-0 {
		--pad-b: 0rem;
	}
	
	.aspect-16x9:before {
		padding-bottom: 56.55%;
	}
	
	.aspect-9x16:before {
		padding-bottom: 177.777777%;
	}
	
	.aspect-2x1:before {
		padding-bottom: 50%;
	}
	
	.aspect-1x1:before,
	.aspect-square:before {
		padding-bottom: 100%;
	}
	
	.aspect-1x2:before {
		padding-bottom: 200%;
	}
	
	.aspect-1x3:before {
		padding-bottom: 300%;
	}
	
	.aspect-3x1:before {
		padding-bottom: 33.3333%;
	}
	
	.aspect-3x4:before {
		padding-bottom: 133.3333333%;
	}
	
	.aspect-4x3:before {
		padding-bottom: 75%;
	}
	
	@media (max-width:1199px) {
		.lg\:aspect-16x9:before {
			padding-bottom: 56.55%;
		}
		.lg\:aspect-9x16:before {
			padding-bottom: 177.777777%;
		}
		.lg\:aspect-2x1:before {
			padding-bottom: 50%;
		}
		.lg\:aspect-1x1:before,
		.lg\:aspect-square:before {
			padding-bottom: 100%;
		}
		.lg\:aspect-1x2:before {
			padding-bottom: 200%;
		}
		.lg\:aspect-1x3:before {
			padding-bottom: 300%;
		}
		.lg\:aspect-3x1:before {
			padding-bottom: 33.3333%;
		}
		.lg\:aspect-3x4:before {
			padding-bottom: 133.3333333%;
		}
		.lg\:aspect-4x3:before {
			padding-bottom: 75%;
		}
	}
	
	@media (max-width:991px) {
		.md\:aspect-16x9:before {
			padding-bottom: 56.55%;
		}
		.md\:aspect-9x16:before {
			padding-bottom: 177.777777%;
		}
		.md\:aspect-2x1:before {
			padding-bottom: 50%;
		}
		.md\:aspect-1x1:before,
		.md\:aspect-square:before {
			padding-bottom: 100%;
		}
		.md\:aspect-1x2:before {
			padding-bottom: 200%;
		}
		.md\:aspect-1x3:before {
			padding-bottom: 300%;
		}
		.md\:aspect-3x1:before {
			padding-bottom: 33.3333%;
		}
		.md\:aspect-3x4:before {
			padding-bottom: 133.3333333%;
		}
		.md\:aspect-4x3:before {
			padding-bottom: 75%;
		}
	}
	
	@media (max-width:767px) {
		.sm\:aspect-16x9:before {
			padding-bottom: 56.55%;
		}
		.sm\:aspect-9x16:before {
			padding-bottom: 177.777777%;
		}
		.sm\:aspect-2x1:before {
			padding-bottom: 50%;
		}
		.sm\:aspect-1x1:before,
		.sm\:aspect-square:before {
			padding-bottom: 100%;
		}
		.sm\:aspect-1x2:before {
			padding-bottom: 200%;
		}
		.sm\:aspect-1x3:before {
			padding-bottom: 300%;
		}
		.sm\:aspect-3x1:before {
			padding-bottom: 33.3333%;
		}
		.sm\:aspect-3x4:before {
			padding-bottom: 133.3333333%;
		}
		.sm\:aspect-4x3:before {
			padding-bottom: 75%;
		}
	}
	
	@media (max-width:575px) {
		.xs\:aspect-16x9:before {
			padding-bottom: 56.55%;
		}
		.xs\:aspect-9x16:before {
			padding-bottom: 177.777777%;
		}
		.xs\:aspect-2x1:before {
			padding-bottom: 50%;
		}
		.xs\:aspect-1x1:before,
		.xs\:aspect-square:before {
			padding-bottom: 100%;
		}
		.xs\:aspect-1x2:before {
			padding-bottom: 200%;
		}
		.xs\:aspect-1x3:before {
			padding-bottom: 300%;
		}
		.xs\:aspect-3x1:before {
			padding-bottom: 33.3333%;
		}
		.xs\:aspect-3x4:before {
			padding-bottom: 133.3333333%;
		}
		.xs\:aspect-4x3:before {
			padding-bottom: 75%;
		}
	}
	
	[p][class*=" aspect-"]>[c] {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
	
	.w-min-1b {
		min-width: calc( var(--s) * 2);
	}
	
	.w-max-1b {
		max-width: calc( var(--s) * 2);
	}
	
	.w-min-2b {
		min-width: calc( var(--s) * 4);
	}
	
	.w-max-2b {
		max-width: calc( var(--s) * 4);
	}
	
	.w-min-3b {
		min-width: calc( var(--s) * 6);
	}
	
	.w-max-3b {
		max-width: calc( var(--s) * 6);
	}
	
	.w-min-4b {
		min-width: calc( var(--s) * 8);
	}
	
	.w-max-4b {
		max-width: calc( var(--s) * 8);
	}
	
	.w-min-5b {
		min-width: calc( var(--s) * 10);
	}
	
	.w-max-5b {
		max-width: calc( var(--s) * 10);
	}
	
	.w-min-6b {
		min-width: calc( var(--s) * 12);
	}
	
	.w-max-6b {
		max-width: calc( var(--s) * 12);
	}
	
	.w-min-7b {
		min-width: calc( var(--s) * 14);
	}
	
	.w-max-7b {
		max-width: calc( var(--s) * 14);
	}
	
	.w-min-8b {
		min-width: calc( var(--s) * 16);
	}
	
	.w-max-8b {
		max-width: calc( var(--s) * 16);
	}
	
	.w-min-9b {
		min-width: calc( var(--s) * 18);
	}
	
	.w-max-9b {
		max-width: calc( var(--s) * 18);
	}
	
	.w-min-10b {
		min-width: calc( var(--s) * 20);
	}
	
	.w-max-10b {
		max-width: calc( var(--s) * 20);
	}
	
	.w-min-11b {
		min-width: calc( var(--s) * 22);
	}
	
	.w-max-11b {
		max-width: calc( var(--s) * 22);
	}
	
	.w-min-12b {
		min-width: calc( var(--s) * 24);
	}
	
	.w-max-12b {
		max-width: calc( var(--s) * 24);
	}
	
	@media (max-width:1199px) {
		.lg\:w-min-1b {
			min-width: calc( var(--s) * 2);
		}
		.lg\:w-max-1b {
			max-width: calc( var(--s) * 2);
		}
		.lg\:w-min-2b {
			min-width: calc( var(--s) * 4);
		}
		.lg\:w-max-2b {
			max-width: calc( var(--s) * 4);
		}
		.lg\:w-min-3b {
			min-width: calc( var(--s) * 6);
		}
		.lg\:w-max-3b {
			max-width: calc( var(--s) * 6);
		}
		.lg\:w-min-4b {
			min-width: calc( var(--s) * 8);
		}
		.lg\:w-max-4b {
			max-width: calc( var(--s) * 8);
		}
		.lg\:w-min-5b {
			min-width: calc( var(--s) * 10);
		}
		.lg\:w-max-5b {
			max-width: calc( var(--s) * 10);
		}
		.lg\:w-min-6b {
			min-width: calc( var(--s) * 12);
		}
		.lg\:w-max-6b {
			max-width: calc( var(--s) * 12);
		}
		.lg\:w-min-7b {
			min-width: calc( var(--s) * 14);
		}
		.lg\:w-max-7b {
			max-width: calc( var(--s) * 14);
		}
		.lg\:w-min-8b {
			min-width: calc( var(--s) * 16);
		}
		.lg\:w-max-8b {
			max-width: calc( var(--s) * 16);
		}
		.lg\:w-min-9b {
			min-width: calc( var(--s) * 18);
		}
		.lg\:w-max-9b {
			max-width: calc( var(--s) * 18);
		}
		.lg\:w-min-10b {
			min-width: calc( var(--s) * 20);
		}
		.lg\:w-max-10b {
			max-width: calc( var(--s) * 20);
		}
		.lg\:w-min-11b {
			min-width: calc( var(--s) * 22);
		}
		.lg\:w-max-11b {
			max-width: calc( var(--s) * 22);
		}
		.lg\:w-min-12b {
			min-width: calc( var(--s) * 24);
		}
		.lg\:w-max-12b {
			max-width: calc( var(--s) * 24);
		}
	}
	
	@media (max-width:991px) {
		.md\:w-min-1b {
			min-width: calc( var(--s) * 2);
		}
		.md\:w-max-1b {
			max-width: calc( var(--s) * 2);
		}
		.md\:w-min-2b {
			min-width: calc( var(--s) * 4);
		}
		.md\:w-max-2b {
			max-width: calc( var(--s) * 4);
		}
		.md\:w-min-3b {
			min-width: calc( var(--s) * 6);
		}
		.md\:w-max-3b {
			max-width: calc( var(--s) * 6);
		}
		.md\:w-min-4b {
			min-width: calc( var(--s) * 8);
		}
		.md\:w-max-4b {
			max-width: calc( var(--s) * 8);
		}
		.md\:w-min-5b {
			min-width: calc( var(--s) * 10);
		}
		.md\:w-max-5b {
			max-width: calc( var(--s) * 10);
		}
		.md\:w-min-6b {
			min-width: calc( var(--s) * 12);
		}
		.md\:w-max-6b {
			max-width: calc( var(--s) * 12);
		}
		.md\:w-min-7b {
			min-width: calc( var(--s) * 14);
		}
		.md\:w-max-7b {
			max-width: calc( var(--s) * 14);
		}
		.md\:w-min-8b {
			min-width: calc( var(--s) * 16);
		}
		.md\:w-max-8b {
			max-width: calc( var(--s) * 16);
		}
		.md\:w-min-9b {
			min-width: calc( var(--s) * 18);
		}
		.md\:w-max-9b {
			max-width: calc( var(--s) * 18);
		}
		.md\:w-min-10b {
			min-width: calc( var(--s) * 20);
		}
		.md\:w-max-10b {
			max-width: calc( var(--s) * 20);
		}
		.md\:w-min-11b {
			min-width: calc( var(--s) * 22);
		}
		.md\:w-max-11b {
			max-width: calc( var(--s) * 22);
		}
		.md\:w-min-12b {
			min-width: calc( var(--s) * 24);
		}
		.md\:w-max-12b {
			max-width: calc( var(--s) * 24);
		}
	}
	
	@media (max-width:767px) {
		.sm\:w-min-1b {
			min-width: calc( var(--s) * 2);
		}
		.sm\:w-max-1b {
			max-width: calc( var(--s) * 2);
		}
		.sm\:w-min-2b {
			min-width: calc( var(--s) * 4);
		}
		.sm\:w-max-2b {
			max-width: calc( var(--s) * 4);
		}
		.sm\:w-min-3b {
			min-width: calc( var(--s) * 6);
		}
		.sm\:w-max-3b {
			max-width: calc( var(--s) * 6);
		}
		.sm\:w-min-4b {
			min-width: calc( var(--s) * 8);
		}
		.sm\:w-max-4b {
			max-width: calc( var(--s) * 8);
		}
		.sm\:w-min-5b {
			min-width: calc( var(--s) * 10);
		}
		.sm\:w-max-5b {
			max-width: calc( var(--s) * 10);
		}
		.sm\:w-min-6b {
			min-width: calc( var(--s) * 12);
		}
		.sm\:w-max-6b {
			max-width: calc( var(--s) * 12);
		}
		.sm\:w-min-7b {
			min-width: calc( var(--s) * 14);
		}
		.sm\:w-max-7b {
			max-width: calc( var(--s) * 14);
		}
		.sm\:w-min-8b {
			min-width: calc( var(--s) * 16);
		}
		.sm\:w-max-8b {
			max-width: calc( var(--s) * 16);
		}
		.sm\:w-min-9b {
			min-width: calc( var(--s) * 18);
		}
		.sm\:w-max-9b {
			max-width: calc( var(--s) * 18);
		}
		.sm\:w-min-10b {
			min-width: calc( var(--s) * 20);
		}
		.sm\:w-max-10b {
			max-width: calc( var(--s) * 20);
		}
		.sm\:w-min-11b {
			min-width: calc( var(--s) * 22);
		}
		.sm\:w-max-11b {
			max-width: calc( var(--s) * 22);
		}
		.sm\:w-min-12b {
			min-width: calc( var(--s) * 24);
		}
		.sm\:w-max-12b {
			max-width: calc( var(--s) * 24);
		}
	}
	
	@media (max-width:575px) {
		.xs\:w-min-1b {
			min-width: calc( var(--s) * 2);
		}
		.xs\:w-max-1b {
			max-width: calc( var(--s) * 2);
		}
		.xs\:w-min-2b {
			min-width: calc( var(--s) * 4);
		}
		.xs\:w-max-2b {
			max-width: calc( var(--s) * 4);
		}
		.xs\:w-min-3b {
			min-width: calc( var(--s) * 6);
		}
		.xs\:w-max-3b {
			max-width: calc( var(--s) * 6);
		}
		.xs\:w-min-4b {
			min-width: calc( var(--s) * 8);
		}
		.xs\:w-max-4b {
			max-width: calc( var(--s) * 8);
		}
		.xs\:w-min-5b {
			min-width: calc( var(--s) * 10);
		}
		.xs\:w-max-5b {
			max-width: calc( var(--s) * 10);
		}
		.xs\:w-min-6b {
			min-width: calc( var(--s) * 12);
		}
		.xs\:w-max-6b {
			max-width: calc( var(--s) * 12);
		}
		.xs\:w-min-7b {
			min-width: calc( var(--s) * 14);
		}
		.xs\:w-max-7b {
			max-width: calc( var(--s) * 14);
		}
		.xs\:w-min-8b {
			min-width: calc( var(--s) * 16);
		}
		.xs\:w-max-8b {
			max-width: calc( var(--s) * 16);
		}
		.xs\:w-min-9b {
			min-width: calc( var(--s) * 18);
		}
		.xs\:w-max-9b {
			max-width: calc( var(--s) * 18);
		}
		.xs\:w-min-10b {
			min-width: calc( var(--s) * 20);
		}
		.xs\:w-max-10b {
			max-width: calc( var(--s) * 20);
		}
		.xs\:w-min-11b {
			min-width: calc( var(--s) * 22);
		}
		.xs\:w-max-11b {
			max-width: calc( var(--s) * 22);
		}
		.xs\:w-min-12b {
			min-width: calc( var(--s) * 24);
		}
		.xs\:w-max-12b {
			max-width: calc( var(--s) * 24);
		}
	}
	
	.w-min-10p {
		min-width: 10%;
	}
	
	.w-max-10p {
		max-width: 10%;
	}
	
	.w-min-20p {
		min-width: 20%;
	}
	
	.w-max-20p {
		max-width: 20%;
	}
	
	.w-min-30p {
		min-width: 30%;
	}
	
	.w-max-30p {
		max-width: 30%;
	}
	
	.w-min-40p {
		min-width: 40%;
	}
	
	.w-max-40p {
		max-width: 40%;
	}
	
	.w-min-50p {
		min-width: 50%;
	}
	
	.w-max-50p {
		max-width: 50%;
	}
	
	.w-min-60p {
		min-width: 60%;
	}
	
	.w-max-60p {
		max-width: 60%;
	}
	
	.w-min-70p {
		min-width: 70%;
	}
	
	.w-max-70p {
		max-width: 70%;
	}
	
	.w-min-80p {
		min-width: 80%;
	}
	
	.w-max-80p {
		max-width: 80%;
	}
	
	.w-min-90p {
		min-width: 90%;
	}
	
	.w-max-90p {
		max-width: 90%;
	}
	
	.w-min-100p {
		min-width: 100%;
	}
	
	.w-max-100p {
		max-width: 100%;
	}
	
	@media (max-width:1199px) {
		.lg\:w-min-10p {
			min-width: 10%;
		}
		.lg\:w-max-10p {
			max-width: 10%;
		}
		.lg\:w-min-20p {
			min-width: 20%;
		}
		.lg\:w-max-20p {
			max-width: 20%;
		}
		.lg\:w-min-30p {
			min-width: 30%;
		}
		.lg\:w-max-30p {
			max-width: 30%;
		}
		.lg\:w-min-40p {
			min-width: 40%;
		}
		.lg\:w-max-40p {
			max-width: 40%;
		}
		.lg\:w-min-50p {
			min-width: 50%;
		}
		.lg\:w-max-50p {
			max-width: 50%;
		}
		.lg\:w-min-60p {
			min-width: 60%;
		}
		.lg\:w-max-60p {
			max-width: 60%;
		}
		.lg\:w-min-70p {
			min-width: 70%;
		}
		.lg\:w-max-70p {
			max-width: 70%;
		}
		.lg\:w-min-80p {
			min-width: 80%;
		}
		.lg\:w-max-80p {
			max-width: 80%;
		}
		.lg\:w-min-90p {
			min-width: 90%;
		}
		.lg\:w-max-90p {
			max-width: 90%;
		}
		.lg\:w-min-100p {
			min-width: 100%;
		}
		.lg\:w-max-100p {
			max-width: 100%;
		}
	}
	
	@media (max-width:991px) {
		.md\:w-min-10p {
			min-width: 10%;
		}
		.md\:w-max-10p {
			max-width: 10%;
		}
		.md\:w-min-20p {
			min-width: 20%;
		}
		.md\:w-max-20p {
			max-width: 20%;
		}
		.md\:w-min-30p {
			min-width: 30%;
		}
		.md\:w-max-30p {
			max-width: 30%;
		}
		.md\:w-min-40p {
			min-width: 40%;
		}
		.md\:w-max-40p {
			max-width: 40%;
		}
		.md\:w-min-50p {
			min-width: 50%;
		}
		.md\:w-max-50p {
			max-width: 50%;
		}
		.md\:w-min-60p {
			min-width: 60%;
		}
		.md\:w-max-60p {
			max-width: 60%;
		}
		.md\:w-min-70p {
			min-width: 70%;
		}
		.md\:w-max-70p {
			max-width: 70%;
		}
		.md\:w-min-80p {
			min-width: 80%;
		}
		.md\:w-max-80p {
			max-width: 80%;
		}
		.md\:w-min-90p {
			min-width: 90%;
		}
		.md\:w-max-90p {
			max-width: 90%;
		}
		.md\:w-min-100p {
			min-width: 100%;
		}
		.md\:w-max-100p {
			max-width: 100%;
		}
	}
	
	@media (max-width:767px) {
		.sm\:w-min-10p {
			min-width: 10%;
		}
		.sm\:w-max-10p {
			max-width: 10%;
		}
		.sm\:w-min-20p {
			min-width: 20%;
		}
		.sm\:w-max-20p {
			max-width: 20%;
		}
		.sm\:w-min-30p {
			min-width: 30%;
		}
		.sm\:w-max-30p {
			max-width: 30%;
		}
		.sm\:w-min-40p {
			min-width: 40%;
		}
		.sm\:w-max-40p {
			max-width: 40%;
		}
		.sm\:w-min-50p {
			min-width: 50%;
		}
		.sm\:w-max-50p {
			max-width: 50%;
		}
		.sm\:w-min-60p {
			min-width: 60%;
		}
		.sm\:w-max-60p {
			max-width: 60%;
		}
		.sm\:w-min-70p {
			min-width: 70%;
		}
		.sm\:w-max-70p {
			max-width: 70%;
		}
		.sm\:w-min-80p {
			min-width: 80%;
		}
		.sm\:w-max-80p {
			max-width: 80%;
		}
		.sm\:w-min-90p {
			min-width: 90%;
		}
		.sm\:w-max-90p {
			max-width: 90%;
		}
		.sm\:w-min-100p {
			min-width: 100%;
		}
		.sm\:w-max-100p {
			max-width: 100%;
		}
	}
	
	@media (max-width:575px) {
		.xs\:w-min-10p {
			min-width: 10%;
		}
		.xs\:w-max-10p {
			max-width: 10%;
		}
		.xs\:w-min-20p {
			min-width: 20%;
		}
		.xs\:w-max-20p {
			max-width: 20%;
		}
		.xs\:w-min-30p {
			min-width: 30%;
		}
		.xs\:w-max-30p {
			max-width: 30%;
		}
		.xs\:w-min-40p {
			min-width: 40%;
		}
		.xs\:w-max-40p {
			max-width: 40%;
		}
		.xs\:w-min-50p {
			min-width: 50%;
		}
		.xs\:w-max-50p {
			max-width: 50%;
		}
		.xs\:w-min-60p {
			min-width: 60%;
		}
		.xs\:w-max-60p {
			max-width: 60%;
		}
		.xs\:w-min-70p {
			min-width: 70%;
		}
		.xs\:w-max-70p {
			max-width: 70%;
		}
		.xs\:w-min-80p {
			min-width: 80%;
		}
		.xs\:w-max-80p {
			max-width: 80%;
		}
		.xs\:w-min-90p {
			min-width: 90%;
		}
		.xs\:w-max-90p {
			max-width: 90%;
		}
		.xs\:w-min-100p {
			min-width: 100%;
		}
		.xs\:w-max-100p {
			max-width: 100%;
		}
	}
	
	.dir-row.flex>[c] {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
	}
	
	.dir-col.flex>[c] {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
	}
	
	@media (max-width:1199px) {
		.lg\:dir-row.flex>[c] {
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			-webkit-flex-direction: row;
			-ms-flex-direction: row;
			flex-direction: row;
		}
		.lg\:dir-col.flex>[c] {
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			-webkit-flex-direction: column;
			-ms-flex-direction: column;
			flex-direction: column;
		}
	}
	
	@media (max-width:991px) {
		.md\:dir-row.flex>[c] {
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			-webkit-flex-direction: row;
			-ms-flex-direction: row;
			flex-direction: row;
		}
		.md\:dir-col.flex>[c] {
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			-webkit-flex-direction: column;
			-ms-flex-direction: column;
			flex-direction: column;
		}
	}
	
	@media (max-width:767px) {
		.sm\:dir-row.flex>[c] {
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			-webkit-flex-direction: row;
			-ms-flex-direction: row;
			flex-direction: row;
		}
		.sm\:dir-col.flex>[c] {
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			-webkit-flex-direction: column;
			-ms-flex-direction: column;
			flex-direction: column;
		}
	}
	
	@media (max-width:575px) {
		.xs\:dir-row.flex>[c] {
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			-webkit-flex-direction: row;
			-ms-flex-direction: row;
			flex-direction: row;
		}
		.xs\:dir-col.flex>[c] {
			display: -webkit-box;
			display: -webkit-flex;
			display: -ms-flexbox;
			display: flex;
			-webkit-flex-direction: column;
			-ms-flex-direction: column;
			flex-direction: column;
		}
	}
	
	.break>[c] {
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
	}
	
	.dir-row.flex.break>[c] {
		margin-right: calc(var(--gap) * -1);
		margin-bottom: calc(var(--gap-br) * -1);
	}
	
	.dir-row.flex.break>[c]>[p] {
		margin-right: var(--gap);
		margin-bottom: var(--gap-br);
	}
	
	.dir-row.flex:not(.break)>[c] {
		gap: var(--gap);
	}
	
	.dir-col.flex.break>[c] {
		margin-right: calc(var(--gap) * -1);
		margin-bottom: calc(var(--gap-br) * -1);
	}
	
	.dir-col.flex.break>[c]>[p] {
		margin-right: var(--gap);
		margin-bottom: var(--gap-br);
	}
	
	.dir-col.flex:not(.break)>[c] {
		gap: var(--gap);
	}
	
	.center {
		-webkit-align-self: center;
		-ms-flex-item-align: center;
		align-self: center;
	}
	
	.stretch {
		-webkit-align-self: stretch;
		-ms-flex-item-align: stretch;
		align-self: stretch;
	}
	
	.align-start>[c] {
		-webkit-align-items: flex-start;
		-webkit-box-align: flex-start;
		-ms-flex-align: flex-start;
		align-items: flex-start;
	}
	
	.align-center>[c] {
		-webkit-align-items: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	
	.align-end>[c] {
		-webkit-align-items: flex-end;
		-webkit-box-align: flex-end;
		-ms-flex-align: flex-end;
		align-items: flex-end;
	}
	
	.align-stretch>[c] {
		-webkit-align-items: stretch;
		-webkit-box-align: stretch;
		-ms-flex-align: stretch;
		align-items: stretch;
	}
	
	.justify-start>[c] {
		-webkit-box-pack: start;
		-webkit-justify-content: flex-start;
		-ms-flex-pack: start;
		justify-content: flex-start;
	}
	
	.justify-center>[c] {
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
	}
	
	.justify-end>[c] {
		-webkit-box-pack: end;
		-webkit-justify-content: flex-end;
		-ms-flex-pack: end;
		justify-content: flex-end;
	}
	
	.justify-between>[c] {
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}
	
	.justify-evenly>[c] {
		-webkit-box-pack: space-evenly;
		-webkit-justify-content: space-evenly;
		-ms-flex-pack: space-evenly;
		justify-content: space-evenly;
	}
	
	.justify-around>[c] {
		-webkit-box-pack: space-around;
		-webkit-justify-content: space-around;
		-ms-flex-pack: space-around;
		justify-content: space-around;
	}
	
	.align-content-start>[c] {
		-webkit-align-content: flex-start;
		-ms-flex-line-pack: start;
		align-content: flex-start;
	}
	
	.align-content-center>[c] {
		-webkit-align-content: center;
		-ms-flex-line-pack: center;
		align-content: center;
	}
	
	.align-content-end>[c] {
		-webkit-align-content: flex-end;
		-ms-flex-line-pack: end;
		align-content: flex-end;
	}
	
	.align-content-stretch>[c] {
		-webkit-align-content: stretch;
		-ms-flex-line-pack: stretch;
		align-content: stretch;
	}
	
	.align-content-between>[c] {
		-webkit-align-content: space-between;
		-ms-flex-line-pack: space-between;
		align-content: space-between;
	}
	
	.align-content-evenly>[c] {
		-webkit-align-content: space-evenly;
		-ms-flex-line-pack: space-evenly;
		align-content: space-evenly;
	}
	
	.align-content-around>[c] {
		-webkit-align-content: space-around;
		-ms-flex-line-pack: space-around;
		align-content: space-around;
	}
	
	.text-align-right {
		text-align: right;
	}
	
	.text-align-left {
		text-align: left;
	}
	
	.text-align-center {
		text-align: center;
	}
	
	@media (max-width:1199px) {
		.lg\:center {
			-webkit-align-self: center;
			-ms-flex-item-align: center;
			align-self: center;
		}
		.lg\:stretch {
			-webkit-align-self: stretch;
			-ms-flex-item-align: stretch;
			align-self: stretch;
		}
		.lg\:align-start>[c] {
			-webkit-align-items: flex-start;
			-webkit-box-align: flex-start;
			-ms-flex-align: flex-start;
			align-items: flex-start;
		}
		.lg\:align-center>[c] {
			-webkit-align-items: center;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
		}
		.lg\:align-end>[c] {
			-webkit-align-items: flex-end;
			-webkit-box-align: flex-end;
			-ms-flex-align: flex-end;
			align-items: flex-end;
		}
		.lg\:align-stretch>[c] {
			-webkit-align-items: stretch;
			-webkit-box-align: stretch;
			-ms-flex-align: stretch;
			align-items: stretch;
		}
		.lg\:justify-start>[c] {
			-webkit-box-pack: start;
			-webkit-justify-content: flex-start;
			-ms-flex-pack: start;
			justify-content: flex-start;
		}
		.lg\:justify-center>[c] {
			-webkit-box-pack: center;
			-webkit-justify-content: center;
			-ms-flex-pack: center;
			justify-content: center;
		}
		.lg\:justify-end>[c] {
			-webkit-box-pack: end;
			-webkit-justify-content: flex-end;
			-ms-flex-pack: end;
			justify-content: flex-end;
		}
		.lg\:justify-between>[c] {
			-webkit-box-pack: justify;
			-webkit-justify-content: space-between;
			-ms-flex-pack: justify;
			justify-content: space-between;
		}
		.lg\:justify-evenly>[c] {
			-webkit-box-pack: space-evenly;
			-webkit-justify-content: space-evenly;
			-ms-flex-pack: space-evenly;
			justify-content: space-evenly;
		}
		.lg\:justify-around>[c] {
			-webkit-box-pack: space-around;
			-webkit-justify-content: space-around;
			-ms-flex-pack: space-around;
			justify-content: space-around;
		}
		.lg\:align-content-start>[c] {
			-webkit-align-content: flex-start;
			-ms-flex-line-pack: start;
			align-content: flex-start;
		}
		.lg\:align-content-center>[c] {
			-webkit-align-content: center;
			-ms-flex-line-pack: center;
			align-content: center;
		}
		.lg\:align-content-end>[c] {
			-webkit-align-content: flex-end;
			-ms-flex-line-pack: end;
			align-content: flex-end;
		}
		.lg\:align-content-stretch>[c] {
			-webkit-align-content: stretch;
			-ms-flex-line-pack: stretch;
			align-content: stretch;
		}
		.lg\:align-content-between>[c] {
			-webkit-align-content: space-between;
			-ms-flex-line-pack: space-between;
			align-content: space-between;
		}
		.lg\:align-content-evenly>[c] {
			-webkit-align-content: space-evenly;
			-ms-flex-line-pack: space-evenly;
			align-content: space-evenly;
		}
		.lg\:align-content-around>[c] {
			-webkit-align-content: space-around;
			-ms-flex-line-pack: space-around;
			align-content: space-around;
		}
		.lg\:text-align-right {
			text-align: right;
		}
		.lg\:text-align-left {
			text-align: left;
		}
		.lg\:text-align-center {
			text-align: center;
		}
	}
	
	@media (max-width:991px) {
		.md\:center {
			-webkit-align-self: center;
			-ms-flex-item-align: center;
			align-self: center;
		}
		.md\:stretch {
			-webkit-align-self: stretch;
			-ms-flex-item-align: stretch;
			align-self: stretch;
		}
		.md\:align-start>[c] {
			-webkit-align-items: flex-start;
			-webkit-box-align: flex-start;
			-ms-flex-align: flex-start;
			align-items: flex-start;
		}
		.md\:align-center>[c] {
			-webkit-align-items: center;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
		}
		.md\:align-end>[c] {
			-webkit-align-items: flex-end;
			-webkit-box-align: flex-end;
			-ms-flex-align: flex-end;
			align-items: flex-end;
		}
		.md\:align-stretch>[c] {
			-webkit-align-items: stretch;
			-webkit-box-align: stretch;
			-ms-flex-align: stretch;
			align-items: stretch;
		}
		.md\:justify-start>[c] {
			-webkit-box-pack: start;
			-webkit-justify-content: flex-start;
			-ms-flex-pack: start;
			justify-content: flex-start;
		}
		.md\:justify-center>[c] {
			-webkit-box-pack: center;
			-webkit-justify-content: center;
			-ms-flex-pack: center;
			justify-content: center;
		}
		.md\:justify-end>[c] {
			-webkit-box-pack: end;
			-webkit-justify-content: flex-end;
			-ms-flex-pack: end;
			justify-content: flex-end;
		}
		.md\:justify-between>[c] {
			-webkit-box-pack: justify;
			-webkit-justify-content: space-between;
			-ms-flex-pack: justify;
			justify-content: space-between;
		}
		.md\:justify-evenly>[c] {
			-webkit-box-pack: space-evenly;
			-webkit-justify-content: space-evenly;
			-ms-flex-pack: space-evenly;
			justify-content: space-evenly;
		}
		.md\:justify-around>[c] {
			-webkit-box-pack: space-around;
			-webkit-justify-content: space-around;
			-ms-flex-pack: space-around;
			justify-content: space-around;
		}
		.md\:align-content-start>[c] {
			-webkit-align-content: flex-start;
			-ms-flex-line-pack: start;
			align-content: flex-start;
		}
		.md\:align-content-center>[c] {
			-webkit-align-content: center;
			-ms-flex-line-pack: center;
			align-content: center;
		}
		.md\:align-content-end>[c] {
			-webkit-align-content: flex-end;
			-ms-flex-line-pack: end;
			align-content: flex-end;
		}
		.md\:align-content-stretch>[c] {
			-webkit-align-content: stretch;
			-ms-flex-line-pack: stretch;
			align-content: stretch;
		}
		.md\:align-content-between>[c] {
			-webkit-align-content: space-between;
			-ms-flex-line-pack: space-between;
			align-content: space-between;
		}
		.md\:align-content-evenly>[c] {
			-webkit-align-content: space-evenly;
			-ms-flex-line-pack: space-evenly;
			align-content: space-evenly;
		}
		.md\:align-content-around>[c] {
			-webkit-align-content: space-around;
			-ms-flex-line-pack: space-around;
			align-content: space-around;
		}
		.md\:text-align-right {
			text-align: right;
		}
		.md\:text-align-left {
			text-align: left;
		}
		.md\:text-align-center {
			text-align: center;
		}
	}
	
	@media (max-width:767px) {
		.sm\:center {
			-webkit-align-self: center;
			-ms-flex-item-align: center;
			align-self: center;
		}
		.sm\:stretch {
			-webkit-align-self: stretch;
			-ms-flex-item-align: stretch;
			align-self: stretch;
		}
		.sm\:align-start>[c] {
			-webkit-align-items: flex-start;
			-webkit-box-align: flex-start;
			-ms-flex-align: flex-start;
			align-items: flex-start;
		}
		.sm\:align-center>[c] {
			-webkit-align-items: center;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
		}
		.sm\:align-end>[c] {
			-webkit-align-items: flex-end;
			-webkit-box-align: flex-end;
			-ms-flex-align: flex-end;
			align-items: flex-end;
		}
		.sm\:align-stretch>[c] {
			-webkit-align-items: stretch;
			-webkit-box-align: stretch;
			-ms-flex-align: stretch;
			align-items: stretch;
		}
		.sm\:justify-start>[c] {
			-webkit-box-pack: start;
			-webkit-justify-content: flex-start;
			-ms-flex-pack: start;
			justify-content: flex-start;
		}
		.sm\:justify-center>[c] {
			-webkit-box-pack: center;
			-webkit-justify-content: center;
			-ms-flex-pack: center;
			justify-content: center;
		}
		.sm\:justify-end>[c] {
			-webkit-box-pack: end;
			-webkit-justify-content: flex-end;
			-ms-flex-pack: end;
			justify-content: flex-end;
		}
		.sm\:justify-between>[c] {
			-webkit-box-pack: justify;
			-webkit-justify-content: space-between;
			-ms-flex-pack: justify;
			justify-content: space-between;
		}
		.sm\:justify-evenly>[c] {
			-webkit-box-pack: space-evenly;
			-webkit-justify-content: space-evenly;
			-ms-flex-pack: space-evenly;
			justify-content: space-evenly;
		}
		.sm\:justify-around>[c] {
			-webkit-box-pack: space-around;
			-webkit-justify-content: space-around;
			-ms-flex-pack: space-around;
			justify-content: space-around;
		}
		.sm\:align-content-start>[c] {
			-webkit-align-content: flex-start;
			-ms-flex-line-pack: start;
			align-content: flex-start;
		}
		.sm\:align-content-center>[c] {
			-webkit-align-content: center;
			-ms-flex-line-pack: center;
			align-content: center;
		}
		.sm\:align-content-end>[c] {
			-webkit-align-content: flex-end;
			-ms-flex-line-pack: end;
			align-content: flex-end;
		}
		.sm\:align-content-stretch>[c] {
			-webkit-align-content: stretch;
			-ms-flex-line-pack: stretch;
			align-content: stretch;
		}
		.sm\:align-content-between>[c] {
			-webkit-align-content: space-between;
			-ms-flex-line-pack: space-between;
			align-content: space-between;
		}
		.sm\:align-content-evenly>[c] {
			-webkit-align-content: space-evenly;
			-ms-flex-line-pack: space-evenly;
			align-content: space-evenly;
		}
		.sm\:align-content-around>[c] {
			-webkit-align-content: space-around;
			-ms-flex-line-pack: space-around;
			align-content: space-around;
		}
		.sm\:text-align-right {
			text-align: right;
		}
		.sm\:text-align-left {
			text-align: left;
		}
		.sm\:text-align-center {
			text-align: center;
		}
	}
	
	@media (max-width:575px) {
		.xs\:center {
			-webkit-align-self: center;
			-ms-flex-item-align: center;
			align-self: center;
		}
		.xs\:stretch {
			-webkit-align-self: stretch;
			-ms-flex-item-align: stretch;
			align-self: stretch;
		}
		.xs\:align-start>[c] {
			-webkit-align-items: flex-start;
			-webkit-box-align: flex-start;
			-ms-flex-align: flex-start;
			align-items: flex-start;
		}
		.xs\:align-center>[c] {
			-webkit-align-items: center;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
		}
		.xs\:align-end>[c] {
			-webkit-align-items: flex-end;
			-webkit-box-align: flex-end;
			-ms-flex-align: flex-end;
			align-items: flex-end;
		}
		.xs\:align-stretch>[c] {
			-webkit-align-items: stretch;
			-webkit-box-align: stretch;
			-ms-flex-align: stretch;
			align-items: stretch;
		}
		.xs\:justify-start>[c] {
			-webkit-box-pack: start;
			-webkit-justify-content: flex-start;
			-ms-flex-pack: start;
			justify-content: flex-start;
		}
		.xs\:justify-center>[c] {
			-webkit-box-pack: center;
			-webkit-justify-content: center;
			-ms-flex-pack: center;
			justify-content: center;
		}
		.xs\:justify-end>[c] {
			-webkit-box-pack: end;
			-webkit-justify-content: flex-end;
			-ms-flex-pack: end;
			justify-content: flex-end;
		}
		.xs\:justify-between>[c] {
			-webkit-box-pack: justify;
			-webkit-justify-content: space-between;
			-ms-flex-pack: justify;
			justify-content: space-between;
		}
		.xs\:justify-evenly>[c] {
			-webkit-box-pack: space-evenly;
			-webkit-justify-content: space-evenly;
			-ms-flex-pack: space-evenly;
			justify-content: space-evenly;
		}
		.xs\:justify-around>[c] {
			-webkit-box-pack: space-around;
			-webkit-justify-content: space-around;
			-ms-flex-pack: space-around;
			justify-content: space-around;
		}
		.xs\:align-content-start>[c] {
			-webkit-align-content: flex-start;
			-ms-flex-line-pack: start;
			align-content: flex-start;
		}
		.xs\:align-content-center>[c] {
			-webkit-align-content: center;
			-ms-flex-line-pack: center;
			align-content: center;
		}
		.xs\:align-content-end>[c] {
			-webkit-align-content: flex-end;
			-ms-flex-line-pack: end;
			align-content: flex-end;
		}
		.xs\:align-content-stretch>[c] {
			-webkit-align-content: stretch;
			-ms-flex-line-pack: stretch;
			align-content: stretch;
		}
		.xs\:align-content-between>[c] {
			-webkit-align-content: space-between;
			-ms-flex-line-pack: space-between;
			align-content: space-between;
		}
		.xs\:align-content-evenly>[c] {
			-webkit-align-content: space-evenly;
			-ms-flex-line-pack: space-evenly;
			align-content: space-evenly;
		}
		.xs\:align-content-around>[c] {
			-webkit-align-content: space-around;
			-ms-flex-line-pack: space-around;
			align-content: space-around;
		}
		.xs\:text-align-right {
			text-align: right;
		}
		.xs\:text-align-left {
			text-align: left;
		}
		.xs\:text-align-center {
			text-align: center;
		}
	}
	
	.gap-12>[c] {
		--gap: var(--gap-12) !important;
	}
	
	.gap-11>[c] {
		--gap: var(--gap-11) !important;
	}
	
	.gap-10>[c] {
		--gap: var(--gap-10) !important;
	}
	
	.gap-9>[c] {
		--gap: var(--gap-9) !important;
	}
	
	.gap-8>[c] {
		--gap: var(--gap-8) !important;
	}
	
	.gap-7>[c] {
		--gap: var(--gap-7) !important;
	}
	
	.gap-6>[c] {
		--gap: var(--gap-6) !important;
	}
	
	.gap-5>[c] {
		--gap: var(--gap-5) !important;
	}
	
	.gap-4>[c] {
		--gap: var(--gap-4) !important;
	}
	
	.gap-3>[c] {
		--gap: var(--gap-3) !important;
	}
	
	.gap-2>[c] {
		--gap: var(--gap-2) !important;
	}
	
	.gap-1>[c] {
		--gap: var(--gap-1) !important;
	}
	
	.gap-1rem>[c] {
		--gap: 1rem !important;
	}
	
	.gap-2rem>[c] {
		--gap: 2rem !important;
	}
	
	.gap-none>[c],
	.gap-0>[c] {
		--gap: 0px;
	}
	
	.gap-break-12>[c] {
		--gap-br: var(--gap-12) !important;
	}
	
	.gap-break-11>[c] {
		--gap-br: var(--gap-11) !important;
	}
	
	.gap-break-10>[c] {
		--gap-br: var(--gap-10) !important;
	}
	
	.gap-break-9>[c] {
		--gap-br: var(--gap-9) !important;
	}
	
	.gap-break-8>[c] {
		--gap-br: var(--gap-8) !important;
	}
	
	.gap-break-7>[c] {
		--gap-br: var(--gap-7) !important;
	}
	
	.gap-break-6>[c] {
		--gap-br: var(--gap-6) !important;
	}
	
	.gap-break-5>[c] {
		--gap-br: var(--gap-5) !important;
	}
	
	.gap-break-4>[c] {
		--gap-br: var(--gap-4) !important;
	}
	
	.gap-break-3>[c] {
		--gap-br: var(--gap-3) !important;
	}
	
	.gap-break-2>[c] {
		--gap-br: var(--gap-2) !important;
	}
	
	.gap-break-1>[c] {
		--gap-br: var(--gap-1) !important;
	}
	
	.gap-break-1rem>[c] {
		--gap-br: 1rem !important;
	}
	
	.gap-break-2rem>[c] {
		--gap-br: 2rem !important;
	}
	
	.gap-br-none>[c],
	.gap-br-0>[c] {
		--gap-br: 0px;
	}
	
	.flex-block>[c] {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
		-webkit-align-items: flex-start;
		-webkit-box-align: flex-start;
		-ms-flex-align: flex-start;
		align-items: flex-start;
		-webkit-align-content: flex-start;
		-ms-flex-line-pack: start;
		align-content: flex-start;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
	}
	
	.grid.dir-row>[c] {
		grid-template-columns: auto;
		grid-template-rows: none;
	}
	
	.grid.dir-col>[c] {
		grid-template-rows: auto;
		grid-template-columns: none;
	}
	
	.grid.dir-row>[c] {
		-webkit-column-gap: var(--gap);
		column-gap: var(--gap);
		row-gap: none;
	}
	
	.grid.dir-col>[c] {
		row-gap: var(--gap);
		-webkit-column-gap: none;
		column-gap: none;
	}
	
	.grid[class*=" cols-"]>[c] {
		grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
	}
	
	.grid[class*=" rows-"]>[c] {
		grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
	}
	
	.grid.cols-1 {
		--cols: 1;
	}
	
	.grid.cols-2 {
		--cols: 2;
	}
	
	.grid.cols-3 {
		--cols: 3;
	}
	
	.grid.cols-4 {
		--cols: 4;
	}
	
	.grid.cols-5 {
		--cols: 5;
	}
	
	.grid.cols-6 {
		--cols: 6;
	}
	
	.grid.cols-7 {
		--cols: 7;
	}
	
	.grid.cols-8 {
		--cols: 8;
	}
	
	.grid.cols-9 {
		--cols: 9;
	}
	
	.grid.cols-10 {
		--cols: 10;
	}
	
	.grid.cols-11 {
		--cols: 11;
	}
	
	.grid.cols-12 {
		--cols: 12;
	}
	
	.grid.rows-1 {
		--rows: 1;
	}
	
	.grid.rows-2 {
		--rows: 2;
	}
	
	.grid.rows-3 {
		--rows: 3;
	}
	
	.grid.rows-4 {
		--rows: 4;
	}
	
	.grid.rows-5 {
		--rows: 5;
	}
	
	.grid.rows-6 {
		--rows: 6;
	}
	
	.grid.rows-7 {
		--rows: 7;
	}
	
	.grid.rows-8 {
		--rows: 8;
	}
	
	.grid.rows-9 {
		--rows: 9;
	}
	
	.grid.rows-10 {
		--rows: 10;
	}
	
	.grid.rows-11 {
		--rows: 11;
	}
	
	.grid.rows-12 {
		--rows: 12;
	}
	
	.col-span-1 {
		grid-column: span 1;
	}
	
	.col-span-2 {
		grid-column: span 2;
	}
	
	.col-span-3 {
		grid-column: span 3;
	}
	
	.col-span-4 {
		grid-column: span 4;
	}
	
	.col-span-5 {
		grid-column: span 5;
	}
	
	.col-span-6 {
		grid-column: span 6;
	}
	
	.col-span-7 {
		grid-column: span 7;
	}
	
	.col-span-8 {
		grid-column: span 8;
	}
	
	.col-span-9 {
		grid-column: span 9;
	}
	
	.col-span-10 {
		grid-column: span 10;
	}
	
	.col-span-11 {
		grid-column: span 11;
	}
	
	.col-span-12 {
		grid-column: span 12;
	}
	
	.row-span-1 {
		grid-row: span 1;
	}
	
	.row-span-2 {
		grid-row: span 2;
	}
	
	.row-span-3 {
		grid-row: span 3;
	}
	
	.row-span-4 {
		grid-row: span 4;
	}
	
	.row-span-5 {
		grid-row: span 5;
	}
	
	.row-span-6 {
		grid-row: span 6;
	}
	
	.row-span-7 {
		grid-row: span 7;
	}
	
	.row-span-8 {
		grid-row: span 8;
	}
	
	.row-span-9 {
		grid-row: span 9;
	}
	
	.row-span-10 {
		grid-row: span 10;
	}
	
	.row-span-11 {
		grid-row: span 11;
	}
	
	.row-span-12 {
		grid-row: span 12;
	}
	
	@media (max-width:1199px) {
		.grid.lg\:dir-row>[c] {
			grid-template-columns: auto;
			grid-template-rows: none;
		}
		.grid.lg\:dir-col>[c] {
			grid-template-rows: auto;
			grid-template-columns: none;
		}
		.grid.lg\:dir-row>[c] {
			-webkit-column-gap: var(--gap);
			column-gap: var(--gap);
			row-gap: none;
		}
		.grid.lg\:dir-col>[c] {
			row-gap: var(--gap);
			-webkit-column-gap: none;
			column-gap: none;
		}
		.grid[class*=" lg\:cols-"]>[c] {
			grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
		}
		.grid[class*=" lg\:rows-"]>[c] {
			grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
		}
		.grid.lg\:cols-1 {
			--cols: 1;
		}
		.grid.lg\:cols-2 {
			--cols: 2;
		}
		.grid.lg\:cols-3 {
			--cols: 3;
		}
		.grid.lg\:cols-4 {
			--cols: 4;
		}
		.grid.lg\:cols-5 {
			--cols: 5;
		}
		.grid.lg\:cols-6 {
			--cols: 6;
		}
		.grid.lg\:cols-7 {
			--cols: 7;
		}
		.grid.lg\:cols-8 {
			--cols: 8;
		}
		.grid.lg\:cols-9 {
			--cols: 9;
		}
		.grid.lg\:cols-10 {
			--cols: 10;
		}
		.grid.lg\:cols-11 {
			--cols: 11;
		}
		.grid.lg\:cols-12 {
			--cols: 12;
		}
		.grid.lg\:rows-1 {
			--rows: 1;
		}
		.grid.lg\:rows-2 {
			--rows: 2;
		}
		.grid.lg\:rows-3 {
			--rows: 3;
		}
		.grid.lg\:rows-4 {
			--rows: 4;
		}
		.grid.lg\:rows-5 {
			--rows: 5;
		}
		.grid.lg\:rows-6 {
			--rows: 6;
		}
		.grid.lg\:rows-7 {
			--rows: 7;
		}
		.grid.lg\:rows-8 {
			--rows: 8;
		}
		.grid.lg\:rows-9 {
			--rows: 9;
		}
		.grid.lg\:rows-10 {
			--rows: 10;
		}
		.grid.lg\:rows-11 {
			--rows: 11;
		}
		.grid.lg\:rows-12 {
			--rows: 12;
		}
		.lg\:col-span-1 {
			grid-column: span 1;
		}
		.lg\:col-span-2 {
			grid-column: span 2;
		}
		.lg\:col-span-3 {
			grid-column: span 3;
		}
		.lg\:col-span-4 {
			grid-column: span 4;
		}
		.lg\:col-span-5 {
			grid-column: span 5;
		}
		.lg\:col-span-6 {
			grid-column: span 6;
		}
		.lg\:col-span-7 {
			grid-column: span 7;
		}
		.lg\:col-span-8 {
			grid-column: span 8;
		}
		.lg\:col-span-9 {
			grid-column: span 9;
		}
		.lg\:col-span-10 {
			grid-column: span 10;
		}
		.lg\:col-span-11 {
			grid-column: span 11;
		}
		.lg\:col-span-12 {
			grid-column: span 12;
		}
		.lg\:row-span-1 {
			grid-row: span 1;
		}
		.lg\:row-span-2 {
			grid-row: span 2;
		}
		.lg\:row-span-3 {
			grid-row: span 3;
		}
		.lg\:row-span-4 {
			grid-row: span 4;
		}
		.lg\:row-span-5 {
			grid-row: span 5;
		}
		.lg\:row-span-6 {
			grid-row: span 6;
		}
		.lg\:row-span-7 {
			grid-row: span 7;
		}
		.lg\:row-span-8 {
			grid-row: span 8;
		}
		.lg\:row-span-9 {
			grid-row: span 9;
		}
		.lg\:row-span-10 {
			grid-row: span 10;
		}
		.lg\:row-span-11 {
			grid-row: span 11;
		}
		.lg\:row-span-12 {
			grid-row: span 12;
		}
	}
	
	@media (max-width:991px) {
		.grid.md\:dir-row>[c] {
			grid-template-columns: auto;
			grid-template-rows: none;
		}
		.grid.md\:dir-col>[c] {
			grid-template-rows: auto;
			grid-template-columns: none;
		}
		.grid.md\:dir-row>[c] {
			-webkit-column-gap: var(--gap);
			column-gap: var(--gap);
			row-gap: none;
		}
		.grid.md\:dir-col>[c] {
			row-gap: var(--gap);
			-webkit-column-gap: none;
			column-gap: none;
		}
		.grid[class*=" md\:cols-"]>[c] {
			grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
		}
		.grid[class*=" md\:rows-"]>[c] {
			grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
		}
		.grid.md\:cols-1 {
			--cols: 1;
		}
		.grid.md\:cols-2 {
			--cols: 2;
		}
		.grid.md\:cols-3 {
			--cols: 3;
		}
		.grid.md\:cols-4 {
			--cols: 4;
		}
		.grid.md\:cols-5 {
			--cols: 5;
		}
		.grid.md\:cols-6 {
			--cols: 6;
		}
		.grid.md\:cols-7 {
			--cols: 7;
		}
		.grid.md\:cols-8 {
			--cols: 8;
		}
		.grid.md\:cols-9 {
			--cols: 9;
		}
		.grid.md\:cols-10 {
			--cols: 10;
		}
		.grid.md\:cols-11 {
			--cols: 11;
		}
		.grid.md\:cols-12 {
			--cols: 12;
		}
		.grid.md\:rows-1 {
			--rows: 1;
		}
		.grid.md\:rows-2 {
			--rows: 2;
		}
		.grid.md\:rows-3 {
			--rows: 3;
		}
		.grid.md\:rows-4 {
			--rows: 4;
		}
		.grid.md\:rows-5 {
			--rows: 5;
		}
		.grid.md\:rows-6 {
			--rows: 6;
		}
		.grid.md\:rows-7 {
			--rows: 7;
		}
		.grid.md\:rows-8 {
			--rows: 8;
		}
		.grid.md\:rows-9 {
			--rows: 9;
		}
		.grid.md\:rows-10 {
			--rows: 10;
		}
		.grid.md\:rows-11 {
			--rows: 11;
		}
		.grid.md\:rows-12 {
			--rows: 12;
		}
		.md\:col-span-1 {
			grid-column: span 1;
		}
		.md\:col-span-2 {
			grid-column: span 2;
		}
		.md\:col-span-3 {
			grid-column: span 3;
		}
		.md\:col-span-4 {
			grid-column: span 4;
		}
		.md\:col-span-5 {
			grid-column: span 5;
		}
		.md\:col-span-6 {
			grid-column: span 6;
		}
		.md\:col-span-7 {
			grid-column: span 7;
		}
		.md\:col-span-8 {
			grid-column: span 8;
		}
		.md\:col-span-9 {
			grid-column: span 9;
		}
		.md\:col-span-10 {
			grid-column: span 10;
		}
		.md\:col-span-11 {
			grid-column: span 11;
		}
		.md\:col-span-12 {
			grid-column: span 12;
		}
		.md\:row-span-1 {
			grid-row: span 1;
		}
		.md\:row-span-2 {
			grid-row: span 2;
		}
		.md\:row-span-3 {
			grid-row: span 3;
		}
		.md\:row-span-4 {
			grid-row: span 4;
		}
		.md\:row-span-5 {
			grid-row: span 5;
		}
		.md\:row-span-6 {
			grid-row: span 6;
		}
		.md\:row-span-7 {
			grid-row: span 7;
		}
		.md\:row-span-8 {
			grid-row: span 8;
		}
		.md\:row-span-9 {
			grid-row: span 9;
		}
		.md\:row-span-10 {
			grid-row: span 10;
		}
		.md\:row-span-11 {
			grid-row: span 11;
		}
		.md\:row-span-12 {
			grid-row: span 12;
		}
	}
	
	@media (max-width:767px) {
		.grid.sm\:dir-row>[c] {
			grid-template-columns: auto;
			grid-template-rows: none;
		}
		.grid.sm\:dir-col>[c] {
			grid-template-rows: auto;
			grid-template-columns: none;
		}
		.grid.sm\:dir-row>[c] {
			-webkit-column-gap: var(--gap);
			column-gap: var(--gap);
			row-gap: none;
		}
		.grid.sm\:dir-col>[c] {
			row-gap: var(--gap);
			-webkit-column-gap: none;
			column-gap: none;
		}
		.grid[class*=" sm\:cols-"]>[c] {
			grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
		}
		.grid[class*=" sm\:rows-"]>[c] {
			grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
		}
		.grid.sm\:cols-1 {
			--cols: 1;
		}
		.grid.sm\:cols-2 {
			--cols: 2;
		}
		.grid.sm\:cols-3 {
			--cols: 3;
		}
		.grid.sm\:cols-4 {
			--cols: 4;
		}
		.grid.sm\:cols-5 {
			--cols: 5;
		}
		.grid.sm\:cols-6 {
			--cols: 6;
		}
		.grid.sm\:cols-7 {
			--cols: 7;
		}
		.grid.sm\:cols-8 {
			--cols: 8;
		}
		.grid.sm\:cols-9 {
			--cols: 9;
		}
		.grid.sm\:cols-10 {
			--cols: 10;
		}
		.grid.sm\:cols-11 {
			--cols: 11;
		}
		.grid.sm\:cols-12 {
			--cols: 12;
		}
		.grid.sm\:rows-1 {
			--rows: 1;
		}
		.grid.sm\:rows-2 {
			--rows: 2;
		}
		.grid.sm\:rows-3 {
			--rows: 3;
		}
		.grid.sm\:rows-4 {
			--rows: 4;
		}
		.grid.sm\:rows-5 {
			--rows: 5;
		}
		.grid.sm\:rows-6 {
			--rows: 6;
		}
		.grid.sm\:rows-7 {
			--rows: 7;
		}
		.grid.sm\:rows-8 {
			--rows: 8;
		}
		.grid.sm\:rows-9 {
			--rows: 9;
		}
		.grid.sm\:rows-10 {
			--rows: 10;
		}
		.grid.sm\:rows-11 {
			--rows: 11;
		}
		.grid.sm\:rows-12 {
			--rows: 12;
		}
		.sm\:col-span-1 {
			grid-column: span 1;
		}
		.sm\:col-span-2 {
			grid-column: span 2;
		}
		.sm\:col-span-3 {
			grid-column: span 3;
		}
		.sm\:col-span-4 {
			grid-column: span 4;
		}
		.sm\:col-span-5 {
			grid-column: span 5;
		}
		.sm\:col-span-6 {
			grid-column: span 6;
		}
		.sm\:col-span-7 {
			grid-column: span 7;
		}
		.sm\:col-span-8 {
			grid-column: span 8;
		}
		.sm\:col-span-9 {
			grid-column: span 9;
		}
		.sm\:col-span-10 {
			grid-column: span 10;
		}
		.sm\:col-span-11 {
			grid-column: span 11;
		}
		.sm\:col-span-12 {
			grid-column: span 12;
		}
		.sm\:row-span-1 {
			grid-row: span 1;
		}
		.sm\:row-span-2 {
			grid-row: span 2;
		}
		.sm\:row-span-3 {
			grid-row: span 3;
		}
		.sm\:row-span-4 {
			grid-row: span 4;
		}
		.sm\:row-span-5 {
			grid-row: span 5;
		}
		.sm\:row-span-6 {
			grid-row: span 6;
		}
		.sm\:row-span-7 {
			grid-row: span 7;
		}
		.sm\:row-span-8 {
			grid-row: span 8;
		}
		.sm\:row-span-9 {
			grid-row: span 9;
		}
		.sm\:row-span-10 {
			grid-row: span 10;
		}
		.sm\:row-span-11 {
			grid-row: span 11;
		}
		.sm\:row-span-12 {
			grid-row: span 12;
		}
	}
	
	@media (max-width:575px) {
		.grid.xs\:dir-row>[c] {
			grid-template-columns: auto;
			grid-template-rows: none;
		}
		.grid.xs\:dir-col>[c] {
			grid-template-rows: auto;
			grid-template-columns: none;
		}
		.grid.xs\:dir-row>[c] {
			-webkit-column-gap: var(--gap);
			column-gap: var(--gap);
			row-gap: none;
		}
		.grid.xs\:dir-col>[c] {
			row-gap: var(--gap);
			-webkit-column-gap: none;
			column-gap: none;
		}
		.grid[class*=" xs\:cols-"]>[c] {
			grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
		}
		.grid[class*=" xs\:rows-"]>[c] {
			grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
		}
		.grid.xs\:cols-1 {
			--cols: 1;
		}
		.grid.xs\:cols-2 {
			--cols: 2;
		}
		.grid.xs\:cols-3 {
			--cols: 3;
		}
		.grid.xs\:cols-4 {
			--cols: 4;
		}
		.grid.xs\:cols-5 {
			--cols: 5;
		}
		.grid.xs\:cols-6 {
			--cols: 6;
		}
		.grid.xs\:cols-7 {
			--cols: 7;
		}
		.grid.xs\:cols-8 {
			--cols: 8;
		}
		.grid.xs\:cols-9 {
			--cols: 9;
		}
		.grid.xs\:cols-10 {
			--cols: 10;
		}
		.grid.xs\:cols-11 {
			--cols: 11;
		}
		.grid.xs\:cols-12 {
			--cols: 12;
		}
		.grid.xs\:rows-1 {
			--rows: 1;
		}
		.grid.xs\:rows-2 {
			--rows: 2;
		}
		.grid.xs\:rows-3 {
			--rows: 3;
		}
		.grid.xs\:rows-4 {
			--rows: 4;
		}
		.grid.xs\:rows-5 {
			--rows: 5;
		}
		.grid.xs\:rows-6 {
			--rows: 6;
		}
		.grid.xs\:rows-7 {
			--rows: 7;
		}
		.grid.xs\:rows-8 {
			--rows: 8;
		}
		.grid.xs\:rows-9 {
			--rows: 9;
		}
		.grid.xs\:rows-10 {
			--rows: 10;
		}
		.grid.xs\:rows-11 {
			--rows: 11;
		}
		.grid.xs\:rows-12 {
			--rows: 12;
		}
		.xs\:col-span-1 {
			grid-column: span 1;
		}
		.xs\:col-span-2 {
			grid-column: span 2;
		}
		.xs\:col-span-3 {
			grid-column: span 3;
		}
		.xs\:col-span-4 {
			grid-column: span 4;
		}
		.xs\:col-span-5 {
			grid-column: span 5;
		}
		.xs\:col-span-6 {
			grid-column: span 6;
		}
		.xs\:col-span-7 {
			grid-column: span 7;
		}
		.xs\:col-span-8 {
			grid-column: span 8;
		}
		.xs\:col-span-9 {
			grid-column: span 9;
		}
		.xs\:col-span-10 {
			grid-column: span 10;
		}
		.xs\:col-span-11 {
			grid-column: span 11;
		}
		.xs\:col-span-12 {
			grid-column: span 12;
		}
		.xs\:row-span-1 {
			grid-row: span 1;
		}
		.xs\:row-span-2 {
			grid-row: span 2;
		}
		.xs\:row-span-3 {
			grid-row: span 3;
		}
		.xs\:row-span-4 {
			grid-row: span 4;
		}
		.xs\:row-span-5 {
			grid-row: span 5;
		}
		.xs\:row-span-6 {
			grid-row: span 6;
		}
		.xs\:row-span-7 {
			grid-row: span 7;
		}
		.xs\:row-span-8 {
			grid-row: span 8;
		}
		.xs\:row-span-9 {
			grid-row: span 9;
		}
		.xs\:row-span-10 {
			grid-row: span 10;
		}
		.xs\:row-span-11 {
			grid-row: span 11;
		}
		.xs\:row-span-12 {
			grid-row: span 12;
		}
	}
	
	.grid>[c] {
		display: grid;
	}
	
	.grid:not([class*=" dir-"])>[c] {
		grid-template-columns: auto;
		grid-template-rows: auto;
	}
	
	.grid.dir-both>[c],
	.grid:not([class*=" dir-"])>[c] {
		-webkit-column-gap: var(--gap);
		column-gap: var(--gap);
		row-gap: var(--gap);
	}
	
	.grid.dir-both[class*=" gap-br"]>[c],
	.grid:not([class*=" dir-"])[class*=" gap-br"]>[c] {
		row-gap: var(--gap-br);
	}
	
	.layers.main-first>[c]> :first-child {
		position: relative;
	}
	
	.flex.layers>[c]>* {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
	}
	
	.lg\:layers.main-first>[c]> :first-child {
		position: relative;
	}
	
	.lg\:flex.layers>[c]>* {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
	}
	
	.md\:layers.main-first>[c]> :first-child {
		position: relative;
	}
	
	.md\:flex.layers>[c]>* {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
	}
	
	.sm\:layers.main-first>[c]> :first-child {
		position: relative;
	}
	
	.sm\:flex.layers>[c]>* {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
	}
	
	.xs\:layers.main-first>[c]> :first-child {
		position: relative;
	}
	
	.xs\:flex.layers>[c]>* {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
	}
	
	.group>[c]>[p]>[b] {
		box-shadow: none;
	}
	
	.group.dir-col>[c]>.board:not(:first-child)>[b],
	.group.dir-col>[c]>input:not(:first-child),
	.group.dir-col>[c]>select:not(:first-child) {
		border-top-left-radius: 0px;
		border-top-right-radius: 0px;
		--b-radius-tl: 0;
		--b-radius-tr: 0;
	}
	
	.group.dir-col>[c]>.board:not(:last-child)>[b],
	.group.dir-col>[c]>input:not(:last-child),
	.group.dir-col>[c]>select:not(:last-child) {
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
		--b-radius-bl: 0;
		--b-radius-br: 0;
	}
	
	.group.dir-row>[c]>.board:not(:first-child)>[b],
	.group.dir-row>[c]>input:not(:first-child),
	.group.dir-row>[c]>select:not(:first-child) {
		border-top-left-radius: 0px;
		border-bottom-left-radius: 0px;
		--b-radius-bl: 0;
		--b-radius-tl: 0;
	}
	
	.group.dir-row>[c]>.board:not(:last-child)>[b],
	.group.dir-row>[c]>input:not(:last-child),
	.group.dir-row>[c]>select:not(:last-child) {
		border-top-right-radius: 0px;
		border-bottom-right-radius: 0px;
		--b-radius-tr: 0;
		--b-radius-br: 0;
	}
	
	.group.transfer>[c] {
		--ch-b-radius-tl: var(--b-radius-tl);
		--ch-b-radius-tr: var(--b-radius-tr);
		--ch-b-radius-bl: var(--b-radius-bl);
		--ch-b-radius-br: var(--b-radius-br);
	}
	
	.group.transfer>[c]>[p] {
		--b-radius-tl: var(--ch-b-radius-tl);
		--b-radius-tr: var(--ch-b-radius-tr);
		--b-radius-bl: var(--ch-b-radius-bl);
		--b-radius-br: var(--ch-b-radius-br);
	}
	
	.group.transfer {
		padding-top: 0;
		padding-bottom: 0;
		padding-right: 0;
		padding-left: 0;
		--gap: 2rem;
	}
	
	.group.transfer.dir-row>[c] {
		--ch-pad-l: var(--pad-l);
		--ch-pad-r: var(--pad-r);
		--ch-pad-t: var(--pad-t);
		--ch-pad-b: var(--pad-b);
	}
	
	.group.transfer.dir-row>[c]>[p]:first-child {
		--pad-l: var(--ch-pad-l);
	}
	
	.group.transfer.dir-row>[c]>[p]:last-child {
		--pad-r: var(--ch-pad-r);
	}
	
	.group.transfer.dir-row>[c]>[p] {
		--pad-t: var(--ch-pad-t);
		--pad-b: var(--ch-pad-b);
	}
	
	.group.transfer.dir-col>[c] {
		--ch-pad-l: var(--pad-l);
		--ch-pad-r: var(--pad-r);
		--ch-pad-t: var(--pad-t);
		--ch-pad-b: var(--pad-b);
	}
	
	.group.transfer.dir-col>[c]>[p]:first-child {
		--pad-t: var(--ch-pad-t);
	}
	
	.group.transfer.dir-col>[c]>[p]:last-child {
		--pad-b: var(--ch-pad-b);
	}
	
	.group.transfer.dir-col>[c]>[p] {
		--pad-l: var(--ch-pad-l);
		--pad-r: var(--ch-pad-r);
	}
	
	.group.transfer.inner-pads-100p {
		--mt: 1;
	}
	
	.group.transfer.inner-pads-full {
		--mt: 1;
	}
	
	.group.transfer.inner-pads-75p {
		--mt: .75;
	}
	
	.group.transfer.inner-pads-3\/4 {
		--mt: .75;
	}
	
	.group.transfer.inner-pads-66p {
		--mt: .75;
	}
	
	.group.transfer.inner-pads-2\/3 {
		--mt: .75;
	}
	
	.group.transfer.inner-pads-50p {
		--mt: .5;
	}
	
	.group.transfer.inner-pads-1\/2 {
		--mt: .5;
	}
	
	.group.transfer.inner-pads-half {
		--mt: .5;
	}
	
	.group.transfer.inner-pads-33p {
		--mt: .33333;
	}
	
	.group.transfer.inner-pads-1\/3 {
		--mt: .33333;
	}
	
	.group.transfer.inner-pads-third {
		--mt: .33333;
	}
	
	.group.transfer.inner-pads-25p {
		--mt: .25;
	}
	
	.group.transfer.inner-pads-1\/4 {
		--mt: .25;
	}
	
	.group.transfer.inner-pads-quarter {
		--mt: .25;
	}
	
	.group.transfer.inner-pads-20p {
		--mt: .20;
	}
	
	.group.transfer.inner-pads-1\/5 {
		--mt: .20;
	}
	
	.group.transfer.inner-pads-fifth {
		--mt: .20;
	}
	
	.group.transfer.dir-col[class*=" inner-pads"]>[c]>[p]:not(:first-child) {
		--pad-t: calc( var(--ch-pad-t) * var(--mt));
	}
	
	.group.transfer.dir-col[class*=" inner-pads"]>[c]>[p]:not(:last-child) {
		--pad-b: calc( var(--ch-pad-b) * var(--mt));
	}
	
	.group.transfer.dir-row[class*=" inner-pads"]>[c]>[p]:not(:first-child) {
		--pad-l: calc( var(--ch-pad-l) * var(--mt));
	}
	
	.group.transfer.dir-row[class*=" inner-pads"]>[c]>[p]:not(:last-child) {
		--pad-r: calc( var(--ch-pad-r) * var(--mt));
	}
`;
}
export default css;