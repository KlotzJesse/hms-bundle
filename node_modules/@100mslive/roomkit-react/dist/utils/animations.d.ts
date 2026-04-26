export declare const slideDown: (controller: string) => {
    (): string;
    name: string;
};
export declare const slideUp: (controller: string) => {
    (): string;
    name: string;
};
export declare const translateAcross: ({ xFrom, yFrom, zFrom, xTo, yTo, zTo }: {
    xFrom?: string | undefined;
    yFrom?: string | undefined;
    zFrom?: string | undefined;
    xTo?: string | undefined;
    yTo?: string | undefined;
    zTo?: string | undefined;
}) => {
    (): string;
    name: string;
};
export declare const dialogOpen: {
    (): string;
    name: string;
};
export declare const dialogClose: {
    (): string;
    name: string;
};
export declare const slideUpAndFade: (start?: string) => {
    (): string;
    name: string;
};
export declare const slideRightAndFade: (start?: string) => {
    (): string;
    name: string;
};
export declare const sheetSlideIn: {
    (): string;
    name: string;
};
export declare const sheetSlideOut: {
    (): string;
    name: string;
};
export declare const sheetFadeIn: {
    (): string;
    name: string;
};
export declare const sheetFadeOut: {
    (): string;
    name: string;
};
export declare const slideDownAndFade: (start?: string) => {
    (): string;
    name: string;
};
export declare const slideLeftAndFade: (start?: string) => {
    (): string;
    name: string;
};
export declare const popoverAnimation: {
    '@media (prefers-reduced-motion: no-preference)': {
        animationDuration: string;
        animationTimingFunction: string;
        willChange: string;
        '&[data-state="open"]': {
            '&[data-side="top"]': {
                animationName: {
                    (): string;
                    name: string;
                };
            };
            '&[data-side="right"]': {
                animationName: {
                    (): string;
                    name: string;
                };
            };
            '&[data-side="bottom"]': {
                animationName: {
                    (): string;
                    name: string;
                };
            };
            '&[data-side="left"]': {
                animationName: {
                    (): string;
                    name: string;
                };
            };
        };
    };
};
export declare const toastAnimation: {
    '@media (prefers-reduced-motion: no-preference)': {
        animationDuration: string;
        animationTimingFunction: string;
        willChange: string;
        animationName: {
            (): string;
            name: string;
        };
        '&[data-state="open"]': {
            animationName: {
                (): string;
                name: string;
            };
        };
        '&[data-swipe="move"]': {
            transform: string;
        };
        '&[data-swipe="cancel"]': {
            transform: string;
            transition: string;
        };
        '&[data-swipe="end"]': {
            animation: string;
        };
    };
};
