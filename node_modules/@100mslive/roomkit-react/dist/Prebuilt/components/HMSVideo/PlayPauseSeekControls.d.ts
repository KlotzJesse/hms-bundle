import React from 'react';
export declare const PlayPauseSeekControls: ({ isPaused, onSeekTo, }: {
    isPaused: boolean;
    onSeekTo: (value: number) => void;
}) => React.JSX.Element;
export declare const PlayPauseSeekOverlayControls: ({ isPaused, showControls, hoverControlsVisible, }: {
    isPaused: boolean;
    showControls: boolean;
    hoverControlsVisible: {
        seekBackward: boolean;
        seekForward: boolean;
        pausePlay: boolean;
    };
}) => React.JSX.Element;
