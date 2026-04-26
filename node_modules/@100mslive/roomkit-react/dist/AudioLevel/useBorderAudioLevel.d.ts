/// <reference types="react" />
import { HMSTrackID } from '@100mslive/hms-video-store';
/**
 * pass in a track id and get a ref. That ref can be attached to an element which will have border
 * as per audio level post that.
 */
export declare function useBorderAudioLevel(audioTrackId?: HMSTrackID): import("react").MutableRefObject<null>;
export declare const sigmoid: (z: number) => number;
