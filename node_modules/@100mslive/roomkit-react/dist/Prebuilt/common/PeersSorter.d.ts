import { HMSPeer, HMSPeerID, IStoreReadOnly } from '@100mslive/react-sdk';
declare class PeersSorter {
    storeUnsubscribe: undefined | (() => void);
    store: IStoreReadOnly<any>;
    peers: Map<string, HMSPeer>;
    lruPeers: Set<HMSPeerID>;
    tilesPerPage: number;
    speaker?: HMSPeer;
    listeners: Set<(peers: HMSPeer[]) => void>;
    constructor(store: IStoreReadOnly<any>);
    setPeersAndTilesPerPage: ({ peers, tilesPerPage }: {
        peers: HMSPeer[];
        tilesPerPage: number;
    }) => void;
    onUpdate: (cb: (peers: HMSPeer[]) => void) => void;
    stop: () => void;
    moveSpeakerToFront: (speaker?: HMSPeer) => void;
    onDominantSpeakerChange: (speaker: HMSPeer | null) => void;
    updateListeners: () => void;
    private maintainLruSize;
}
export default PeersSorter;
