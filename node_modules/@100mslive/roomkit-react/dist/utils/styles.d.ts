/**
 * Flex based centering helper styles
 */
export declare const flexCenter: {
    display: string;
    justifyContent: string;
    alignItems: string;
};
/**
 * Gives styles for text ellipsis, with given width as maxWidth.
 * A number in pixels or css width string value can be passed
 * @param {number|string} width
 * @returns
 */
export declare const textEllipsis: (width: number | string) => {
    maxWidth: string | number;
    overflow: string;
    textOverflow: string;
    whiteSpace: string;
    minWidth: number;
};
