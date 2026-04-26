import React from 'react';
import { HMSVirtualBackgroundTypes } from '@100mslive/hms-virtual-background/hmsvbplugin';
export declare const VBCollection: ({ options, title, activeBackground, }: {
    options: {
        title?: string | undefined;
        icon?: React.JSX.Element | undefined;
        onClick?: (() => Promise<void>) | undefined;
        mediaURL?: string | undefined;
        value: string | HMSVirtualBackgroundTypes;
        supported?: boolean | undefined;
    }[];
    title: string;
    activeBackground: string;
}) => React.JSX.Element | null;
