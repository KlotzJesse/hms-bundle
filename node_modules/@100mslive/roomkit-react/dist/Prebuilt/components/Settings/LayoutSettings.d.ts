import React from 'react';
export declare const LayoutMode: {
    SIDEBAR: string;
    GALLERY: string;
    SPOTLIGHT: string;
};
export declare type LayoutModeKeys = keyof typeof LayoutMode;
export declare const LayoutModeIconMapping: {
    [x: string]: React.JSX.Element;
};
export declare const LayoutSettings: () => React.JSX.Element;
