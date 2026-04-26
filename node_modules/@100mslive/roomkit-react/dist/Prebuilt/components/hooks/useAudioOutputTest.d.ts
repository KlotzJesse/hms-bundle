/// <reference types="react" />
export declare const useAudioOutputTest: ({ deviceId }: {
    deviceId: string;
}) => {
    playing: boolean;
    setPlaying: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    audioRef: import("react").MutableRefObject<HTMLAudioElement | null>;
};
