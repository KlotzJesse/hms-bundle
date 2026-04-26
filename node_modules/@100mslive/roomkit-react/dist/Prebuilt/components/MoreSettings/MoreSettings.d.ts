import React from 'react';
import { ConferencingScreen, DefaultConferencingScreen_Elements, HLSLiveStreamingScreen_Elements } from '@100mslive/types-prebuilt';
export declare const MoreSettings: ({ elements, screenType, }: {
    elements: DefaultConferencingScreen_Elements | HLSLiveStreamingScreen_Elements;
    screenType: keyof ConferencingScreen;
}) => React.JSX.Element;
