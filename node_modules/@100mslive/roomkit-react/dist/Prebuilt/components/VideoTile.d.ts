import React from 'react';
import { CSS } from '../../Theme';
declare const VideoTile: React.MemoExoticComponent<({ peerId, trackId, width, height, objectFit, canMinimise, isDragabble, rootCSS, containerCSS, enableSpotlightingPeer, hideParticipantNameOnTile, roundedVideoTile, hideAudioMuteOnTile, hideMetadataOnTile, }: {
    peerId?: string | undefined;
    trackId?: string | undefined;
    width?: string | number | undefined;
    height?: string | number | undefined;
    objectFit?: string | undefined;
    canMinimise?: boolean | undefined;
    isDragabble?: boolean | undefined;
    rootCSS?: CSS | undefined;
    containerCSS?: CSS | undefined;
    enableSpotlightingPeer?: boolean | undefined;
    hideParticipantNameOnTile?: boolean | undefined;
    roundedVideoTile?: boolean | undefined;
    hideAudioMuteOnTile?: boolean | undefined;
    hideMetadataOnTile?: boolean | undefined;
}) => React.JSX.Element>;
export default VideoTile;
