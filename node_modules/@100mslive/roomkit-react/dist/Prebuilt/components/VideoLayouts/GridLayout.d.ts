import React from 'react';
import { GridVideoTileLayout } from '@100mslive/types-prebuilt/elements/video_tile_layout';
export declare type TileCustomisationProps = {
    hide_participant_name_on_tile: boolean;
    rounded_video_tile: boolean;
    hide_audio_mute_on_tile: boolean;
    video_object_fit: 'contain' | 'cover';
    edge_to_edge: boolean;
    hide_metadata_on_tile: boolean;
};
export declare type GridLayoutProps = GridVideoTileLayout & TileCustomisationProps;
export declare const GridLayout: ({ enable_local_tile_inset: isInsetEnabled, prominent_roles: prominentRoles, enable_spotlighting_peer, hide_participant_name_on_tile, rounded_video_tile, hide_audio_mute_on_tile, video_object_fit, edge_to_edge, hide_metadata_on_tile, }: GridLayoutProps) => React.JSX.Element;
