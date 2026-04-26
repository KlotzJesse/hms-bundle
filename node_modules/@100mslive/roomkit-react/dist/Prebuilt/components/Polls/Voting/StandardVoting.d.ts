import React, { Dispatch, SetStateAction } from 'react';
import { HMSPoll } from '@100mslive/react-sdk';
export declare const StandardView: ({ poll, localPeerResponses, updateSavedResponses, }: {
    poll: HMSPoll;
    localPeerResponses: Record<number, number | number[] | undefined>;
    updateSavedResponses: Dispatch<SetStateAction<Record<any, any>>>;
}) => React.JSX.Element | null;
