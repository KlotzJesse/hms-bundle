import React from 'react';
export declare const IconButtonWithOptions: ({ disabled, onDisabledClick, testid, tooltipMessage, icon, children, active, hideOptions, onClick, }: {
    onClick: () => void;
    onDisabledClick: () => void;
    icon: React.ReactNode;
    children: React.ReactNode;
    testid?: string | undefined;
    hideOptions?: boolean | undefined;
    active: boolean;
    disabled?: boolean | undefined;
    tooltipMessage?: string | undefined;
}) => React.JSX.Element;
