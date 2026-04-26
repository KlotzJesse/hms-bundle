import { HMSActions, HMSPeer, HMSTrack } from '@100mslive/react-sdk';
/**
 * video elements are stitched together as a canvas which is converted to
 * another video element converted to PIP.
 * The task is split into two parts -
 * 1. a function which gets hit when the input changes and updates the tracks
 * to show
 * 2. an independent loop which updates the canvas periodically based on the current
 * tracks which should be shown.
 */
declare class PipManager {
    private listeners;
    private canvas;
    private pipVideo;
    private hmsActions;
    private timeoutRef;
    private videoElements;
    private onStateChange;
    private tracksToShow;
    private state;
    constructor();
    listenToStateChange(cb: (value: boolean) => void): void;
    /**
     * @private
     */
    reset(): void;
    /**
     * check if PIP is supported in this browser env
     */
    isSupported(): boolean;
    /**
     * check if pip is currently turned on
     */
    isOn(): boolean;
    /**
     * request browser to start pip and start the render loop updating the pip
     * video element with peer tracks.
     * @param hmsActions
     * @param onStateChangeFn {function(bool):void} callback called to notify change in pip state
     */
    start(hmsActions: HMSActions, onStateChangeFn: (value: boolean) => void): Promise<void>;
    stop: () => Promise<void>;
    /**
     * @param peers {Array} All Remote Peers present in call.
     * @param tracksMap {Object} map of track id to track
     * */
    updatePeersAndTracks(peers: HMSPeer[], tracksMap: Record<string, HMSTrack>): Promise<void>;
    /**
     * @private {boolean} on - whether pip is on/off
     */
    callListeners: (on: boolean) => void;
    /**
     * @private
     */
    init(hmsActions: HMSActions, onStateChangeFn: (value: boolean) => void): Promise<void>;
    initMediaElements(): Promise<void>;
    initializeCanvasAndVideoElement(): {
        canvas: HTMLCanvasElement;
        pipVideo: HTMLVideoElement;
    };
    initializeVideoElements(): HTMLVideoElement[];
    /**
     * render loop is responsible for rendering the video elements on canvas/pip.
     * in each loop current video elements are stitched and painted on canvas
     */
    renderLoop(): void;
    requestPIP(): Promise<void>;
    exitPIP(): void;
    /**
     * Logic - pick only enabled video tracks
     * @param peers {Array<any>}
     * @param tracksMap {Record<string, any>}
     */
    pickTracksToShow(peers: HMSPeer[], tracksMap: Record<string, HMSTrack>): string[];
    /**
     * there has to be a smart reordering of new tracks based on currently showing
     * ones to reduce unnecessary displacement. If someone was showing up both
     * earlier and now, it's a better UX to keep their position same instead
     * of letting it change.
     * The returned array is a shuffled version of newTracks with position of
     * tracks present in the old tracks intact.
     * eg. old = [1,5,9,3], new = [3,8,2,9], result = [8,2,9,3]
     * @param oldTracks {Array}
     * @param newTracks {Array}
     * @return {Array}
     */
    orderNewTracksToShow(newTracks: string[], oldTracks: string[]): string[];
    private showTrack;
    /**
     * call detach for tracks which no longer need to be shown and attach for
     * new ones which are to be shown now.
     * Note: oldTracks and newTracks are not necessarily of same length
     * @param oldTracks {Array<String>}
     * @param newTracks {Array<String>}
     * @param tracksMap {Record<String, any>}
     */
    detachOldAttachNewTracks(oldTracks: Array<string>, newTracks: Array<string>, tracksMap?: Record<string, HMSTrack> | null): Promise<void>;
}
export declare const PictureInPicture: PipManager;
export {};
