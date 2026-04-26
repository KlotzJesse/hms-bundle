import React from 'react';
import { HMSRoleName, HMSTrackSource, HMSTrackType } from '@100mslive/react-sdk';
export declare const MuteAllContent: (props: {
    muteAll: () => Promise<void>;
    roles?: string[] | undefined;
    enabled: boolean;
    setEnabled: (value: boolean) => void;
    trackType?: HMSTrackType | undefined;
    setTrackType: (value: HMSTrackType) => void;
    selectedRole?: string | undefined;
    setRole: (value: HMSRoleName) => void;
    selectedSource?: string | undefined;
    setSource: (value: HMSTrackSource) => void;
    isMobile: boolean;
}) => React.JSX.Element;
