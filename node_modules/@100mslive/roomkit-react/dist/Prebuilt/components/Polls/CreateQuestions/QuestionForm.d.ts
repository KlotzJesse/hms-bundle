import React from 'react';
import { HMSPollQuestionCreateParams, HMSPollQuestionOptionCreateParams } from '@100mslive/react-sdk';
export declare const QuestionForm: ({ question, index, length, onSave, removeQuestion, isQuiz, }: {
    question: HMSPollQuestionCreateParams & {
        draftID: number;
    };
    index: number;
    length: number;
    onSave: (optionParams: HMSPollQuestionCreateParams & {
        draftID: number;
        saved: boolean;
    }) => void;
    removeQuestion: () => void;
    isQuiz: boolean;
}) => React.JSX.Element;
export declare const isValidQuestion: ({ text, type, options, weight, isQuiz, }: {
    text: string;
    type: string;
    options: HMSPollQuestionOptionCreateParams[];
    weight: number;
    isQuiz?: boolean | undefined;
}) => boolean;
