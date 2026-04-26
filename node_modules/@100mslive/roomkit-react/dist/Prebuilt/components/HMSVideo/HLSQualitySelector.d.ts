import React from 'react';
import { HMSHLSLayer } from '@100mslive/hls-player';
export declare function HLSQualitySelector({ open, onOpenChange, layers, onQualityChange, selection, isAuto, containerRef, }: {
    open: boolean;
    onOpenChange: (value: boolean) => void;
    layers: HMSHLSLayer[];
    onQualityChange: (quality: {
        [key: string]: string | number;
    } | HMSHLSLayer) => void;
    selection: HMSHLSLayer;
    isAuto: boolean;
    containerRef?: HTMLDivElement;
}): React.JSX.Element | null;
