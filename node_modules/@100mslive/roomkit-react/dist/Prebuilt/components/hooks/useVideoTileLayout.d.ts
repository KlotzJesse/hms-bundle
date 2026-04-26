import React from 'react';
declare type TileContextType = {
    enableSpotlightingPeer: boolean;
    hideParticipantNameOnTile?: boolean;
    roundedVideoTile?: boolean;
    hideAudioMuteOnTile?: boolean;
    hideAudioLevelOnTile?: boolean;
    objectFit?: 'cover' | 'contain';
    hideMetadataOnTile?: boolean;
};
export declare const VideoTileContext: React.Context<TileContextType>;
export declare const useVideoTileContext: () => TileContextType;
export {};
