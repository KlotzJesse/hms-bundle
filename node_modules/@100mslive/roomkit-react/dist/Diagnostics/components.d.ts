import React from 'react';
import { CSS } from '../Theme';
export declare const TestContainer: ({ css, children }: {
    css?: CSS | undefined;
    children: React.ReactNode;
}) => React.JSX.Element;
export declare const TestFooter: ({ error, ctaText, children, }: {
    ctaText?: string | undefined;
    error?: Error | undefined;
    children?: React.ReactNode;
}) => React.JSX.Element;
