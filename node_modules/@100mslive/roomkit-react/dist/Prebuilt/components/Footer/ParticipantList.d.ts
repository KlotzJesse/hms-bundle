import React from 'react';
import { HMSPeer, HMSRoleName } from '@100mslive/react-sdk';
export declare const ParticipantList: ({ offStageRoles, onActive, }: {
    offStageRoles: HMSRoleName[];
    onActive: (role: string) => void;
}) => React.JSX.Element | null;
export declare const ParticipantCount: () => React.JSX.Element | null;
export declare const Participant: ({ peer, isConnected, isHandRaisedAccordion, style, }: {
    peer: HMSPeer;
    isConnected: boolean;
    isHandRaisedAccordion?: boolean | undefined;
    style: React.CSSProperties;
}) => React.JSX.Element;
export declare const ParticipantSearch: ({ onSearch, placeholder, inSidePane, }: {
    inSidePane?: boolean | undefined;
    placeholder?: string | undefined;
    onSearch: (val: string) => void;
}) => React.JSX.Element;
