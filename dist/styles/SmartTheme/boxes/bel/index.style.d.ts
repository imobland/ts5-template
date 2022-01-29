declare const sizeMetrics: {
    bel: {
        pad: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
        };
        gap: number;
        borderW: number;
        icon: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
        };
        iconControl: number;
        scaleElements: {
            text: number;
            smallText: number;
        };
    };
};
declare const style: (props: any) => string;
export { style, sizeMetrics };
