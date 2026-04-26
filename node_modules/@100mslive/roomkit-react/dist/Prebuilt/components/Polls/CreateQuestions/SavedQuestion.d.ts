import React from 'react';
import { HMSPollQuestion } from '@100mslive/react-sdk';
export declare const SavedQuestion: ({ question, index, length, convertToDraft, }: {
    question: HMSPollQuestion & {
        draftID: number;
    };
    index: number;
    length: number;
    convertToDraft: (draftID: number) => void;
}) => React.JSX.Element;
