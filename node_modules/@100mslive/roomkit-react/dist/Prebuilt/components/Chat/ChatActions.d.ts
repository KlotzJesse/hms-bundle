import React from 'react';
import { HMSMessage } from '@100mslive/react-sdk';
export declare const ChatActions: ({ showPinAction, onReply, onReplyGroup, showReply, message, sentByLocalPeer, isMobile, openSheet, setOpenSheet, }: {
    showPinAction: boolean;
    onReply: () => void;
    onReplyGroup: () => void;
    showReply: boolean;
    message: HMSMessage;
    sentByLocalPeer: boolean;
    isMobile: boolean;
    openSheet: boolean;
    setOpenSheet: (value: boolean, e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}) => React.JSX.Element;
