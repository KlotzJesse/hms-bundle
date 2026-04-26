import React from 'react';
declare const PreviewJoin: ({ skipPreview, initialName, asRole, }: {
    skipPreview?: boolean | undefined;
    initialName?: string | undefined;
    asRole?: string | undefined;
}) => React.JSX.Element;
export declare const PreviewTile: ({ name, error }: {
    name: string;
    error?: boolean | undefined;
}) => React.JSX.Element;
export declare const PreviewControls: ({ hideSettings, vbEnabled }: {
    hideSettings: boolean;
    vbEnabled: boolean;
}) => React.JSX.Element;
export declare const PreviewSettings: React.MemoExoticComponent<() => React.JSX.Element>;
export default PreviewJoin;
