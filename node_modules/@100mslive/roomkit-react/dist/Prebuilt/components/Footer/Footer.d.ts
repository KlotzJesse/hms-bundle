import React from 'react';
import { ConferencingScreen } from '@100mslive/types-prebuilt';
import { ConferencingScreenElements } from '../../provider/roomLayoutProvider/hooks/useRoomLayoutScreen';
export declare const Footer: ({ screenType, elements, }: {
    screenType: keyof ConferencingScreen;
    elements: ConferencingScreenElements;
}) => React.JSX.Element;
