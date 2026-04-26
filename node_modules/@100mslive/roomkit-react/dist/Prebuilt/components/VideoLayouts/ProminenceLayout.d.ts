import React from 'react';
import { TrackWithPeerAndDimensions } from '@100mslive/react-sdk';
import { CSS } from '../../../Theme';
export declare const ProminenceLayout: {
    Root: ({ children, edgeToEdge, hasSidebar, }: React.PropsWithChildren<{
        edgeToEdge?: boolean | undefined;
        hasSidebar?: boolean | undefined;
    }>) => React.JSX.Element;
    ProminentSection: ({ children, css }: React.PropsWithChildren<{
        css?: CSS | undefined;
    }>) => React.JSX.Element;
    SecondarySection: ({ tiles, children, edgeToEdge, hasSidebar, }: React.PropsWithChildren<{
        tiles: TrackWithPeerAndDimensions[];
        edgeToEdge?: boolean | undefined;
        hasSidebar?: boolean | undefined;
    }>) => React.JSX.Element | null;
};
