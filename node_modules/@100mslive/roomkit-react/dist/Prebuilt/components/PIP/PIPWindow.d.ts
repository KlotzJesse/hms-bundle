import React from 'react';
declare type PIPWindowProps = {
    pipWindow: Window;
    children: React.ReactNode;
};
export declare const PIPWindow: ({ pipWindow, children }: PIPWindowProps) => React.ReactPortal;
export {};
