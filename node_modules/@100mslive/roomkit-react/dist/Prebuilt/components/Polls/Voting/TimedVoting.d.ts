import React, { Dispatch, SetStateAction } from 'react';
import { HMSPoll } from '@100mslive/react-sdk';
export declare const TimedView: ({ poll, localPeerResponses, updateSavedResponses, }: {
    poll: HMSPoll;
    localPeerResponses?: Record<number, number | number[] | undefined> | undefined;
    updateSavedResponses: Dispatch<SetStateAction<Record<any, any>>>;
}) => React.JSX.Element | null;
