import React from 'react';
import { HMSPeerID, HMSTrackID } from '@100mslive/react-sdk';
export interface VideoTileStatsProps {
    videoTrackID?: HMSTrackID;
    audioTrackID?: HMSTrackID;
    peerID?: HMSPeerID;
    isLocal: boolean;
}
/**
 * This component can be used to overlay webrtc stats over the Video Tile. For the local tracks it also includes
 * remote inbound stats as sent by the SFU in receiver report.
 */
export declare function VideoTileStats({ videoTrackID, audioTrackID, peerID, isLocal }: VideoTileStatsProps): React.JSX.Element | null;
export declare function isNotNullishAndNot0(value: number | undefined | null): boolean;
/**
 * Check only for presence(not truthy) of a value.
 * Use in places where 0, false need to be considered valid.
 */
export declare function isNotNullish(value: number | string | undefined | null): boolean;
