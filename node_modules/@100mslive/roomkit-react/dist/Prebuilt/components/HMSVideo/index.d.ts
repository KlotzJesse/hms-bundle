/// <reference types="react" />
export declare const HMSVideoPlayer: {
    Root: any;
    Progress: ({ seekProgress, setSeekProgress, }: {
        seekProgress: boolean;
        setSeekProgress: (value: boolean) => void;
    }) => import("react").JSX.Element | null;
    Duration: () => import("react").JSX.Element | null;
    Volume: () => import("react").JSX.Element;
    Controls: {
        Root: any;
        Left: any;
        Right: any;
    };
    PlayPauseSeekControls: {
        Overlay: ({ isPaused, showControls, hoverControlsVisible, }: {
            isPaused: boolean;
            showControls: boolean;
            hoverControlsVisible: {
                seekBackward: boolean;
                seekForward: boolean;
                pausePlay: boolean;
            };
        }) => import("react").JSX.Element;
        Button: ({ isPaused, onSeekTo, }: {
            isPaused: boolean;
            onSeekTo: (value: number) => void;
        }) => import("react").JSX.Element;
    };
};
