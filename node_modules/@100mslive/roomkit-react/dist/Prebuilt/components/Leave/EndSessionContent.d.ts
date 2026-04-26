import React from 'react';
export declare const EndSessionContent: ({ setShowEndStreamAlert, leaveRoom, isModal, isStreamingOn, }: {
    setShowEndStreamAlert: (value: boolean) => void;
    leaveRoom: (options?: {
        endStream?: boolean;
    }) => Promise<void>;
    isModal?: boolean | undefined;
    isStreamingOn: boolean;
}) => React.JSX.Element;
