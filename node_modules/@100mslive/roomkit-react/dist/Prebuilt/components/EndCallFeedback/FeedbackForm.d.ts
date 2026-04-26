import React from 'react';
import { Rating } from '@100mslive/types-prebuilt/elements/feedback';
export declare const FEEBACK_INDEX: {
    THANK_YOU: number;
    INIT: number;
};
export declare const FeedbackModal: ({ ratings, index, setIndex, }: {
    ratings: Rating[];
    index: number;
    setIndex: (index: number) => void;
}) => React.JSX.Element;
export declare const FeedbackContent: ({ ratings, indexSelected, setIndex, }: {
    ratings: Rating[];
    indexSelected: number;
    setIndex: (index: number) => void;
}) => React.JSX.Element;
export declare const FeedbackHeader: ({ onEmojiClicked, ratings, indexSelected, }: {
    onEmojiClicked: (index: number) => void;
    ratings: Rating[];
    indexSelected?: number | undefined;
}) => React.JSX.Element;
export declare const FeedbackForm: ({ rating, comment, setComment, selectedReasons, handleCheckedChange, }: {
    rating: Rating;
    comment: string;
    setComment: (value: string) => void;
    selectedReasons: Set<number>;
    handleCheckedChange: (checked: string | boolean, index: number) => void;
}) => React.JSX.Element;
