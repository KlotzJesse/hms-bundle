import { HMSTrackID } from '@100mslive/react-sdk';
interface UseQoEProps {
    videoTrackID?: HMSTrackID;
    audioTrackID?: HMSTrackID;
    isLocal?: boolean;
}
/**
 * calculate QoE using 5 params:
 * p1:freeze_duration_norm
 * p2:resolution_norm
 * p3:fps_norm
 * p4:delay_norm
 * p5:audio_concealed_norm
 * the formula is 5*(p1)^3 * (p2)^0.3 * (p3)^0.5 * (p4)^1 * (p5)*2
 *
 * https://github.com/100mslive/webrtc-benchmark/blob/daily/sssd.py#L112
 */
export declare const useQoE: ({ videoTrackID, audioTrackID, isLocal }: UseQoEProps) => string | undefined;
export {};
