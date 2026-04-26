import { HMSHLSPlayer } from '@100mslive/hls-player';
import { HMSPeer } from '@100mslive/react-sdk';
/**
 * Hook to execute a callback when alone in room(after a certain 5d of time)
 * @param {number} thresholdMs The threshold(in ms) after which the callback is executed,
 * starting from the instant when alone in room.
 * note: the cb is not called when another peer joins during this period.
 */
export declare const useWhenAloneInRoom: (thresholdMs?: number) => {
    alone: boolean | undefined;
    aloneForLong: boolean;
};
export declare const useFilteredRoles: () => string[];
export declare const useDefaultChatSelection: () => string;
export declare const useShowStreamingUI: () => boolean;
export declare const useParticipants: (params?: {
    metadata?: {
        isHandRaised?: boolean;
    };
    role?: string;
    search?: string;
}) => {
    participants: HMSPeer[];
    isConnected: boolean | undefined;
    peerCount: number;
    rolesWithParticipants: (string | undefined)[];
};
export declare const useIsLandscape: () => boolean;
export declare const useLandscapeHLSStream: () => boolean;
export declare const useMobileHLSStream: () => boolean;
export declare const useKeyboardHandler: (isPaused: boolean, hlsPlayer: HMSHLSPlayer) => (event: KeyboardEvent) => Promise<void>;
export interface RTMPRecordingResolution {
    width: number;
    height: number;
}
export declare const useRecordingHandler: () => {
    recordingStarted: any;
    startRecording: (resolution?: RTMPRecordingResolution | null) => Promise<void>;
    isRecordingLoading: boolean;
};
export declare function getResolution(recordingResolution: RTMPRecordingResolution | null): RTMPRecordingResolution | undefined;
export interface WaitingRoomInfo {
    isNotAllowedToPublish: boolean;
    isScreenOnlyPublishParams: boolean;
    hasSubscribedRolePublishing: boolean;
}
export declare function useWaitingRoomInfo(): WaitingRoomInfo;
