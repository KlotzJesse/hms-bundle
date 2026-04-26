import React from 'react';
import { HMSPollQuestionOption } from '@100mslive/react-sdk';
export declare const OptionInputWithDelete: ({ index, option, handleOptionTextChange, removeOption, }: {
    index: number;
    option: HMSPollQuestionOption;
    handleOptionTextChange: (index: number, value: string) => void;
    removeOption: (index: number) => void;
}) => React.JSX.Element;
