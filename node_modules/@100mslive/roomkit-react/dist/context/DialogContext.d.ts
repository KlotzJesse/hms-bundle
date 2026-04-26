import React, { ReactNode } from 'react';
export declare const DialogContainerContext: React.Context<string>;
export declare function DialogContainerProvider({ children, dialogContainerSelector, }: {
    children: ReactNode;
    dialogContainerSelector: string;
}): React.JSX.Element;
