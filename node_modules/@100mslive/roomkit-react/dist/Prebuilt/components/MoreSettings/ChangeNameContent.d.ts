import React from 'react';
export declare const ChangeNameContent: ({ changeName, setCurrentName, currentName, localPeerName, isMobile, onExit, onBackClick, }: {
    changeName: () => Promise<void>;
    setCurrentName: (name: string) => void;
    currentName?: string | undefined;
    localPeerName?: string | undefined;
    isMobile: boolean;
    onExit: () => void;
    onBackClick: () => void;
}) => React.JSX.Element;
