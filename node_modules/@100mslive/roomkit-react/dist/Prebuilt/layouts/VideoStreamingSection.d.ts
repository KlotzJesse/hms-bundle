import React from 'react';
import { ConferencingScreen, DefaultConferencingScreen_Elements, HLSLiveStreamingScreen_Elements } from '@100mslive/types-prebuilt';
export declare const VideoStreamingSection: ({ screenType, elements, hideControls, }: {
    screenType: keyof ConferencingScreen;
    elements: DefaultConferencingScreen_Elements | HLSLiveStreamingScreen_Elements;
    hideControls: boolean;
}) => React.JSX.Element | null;
