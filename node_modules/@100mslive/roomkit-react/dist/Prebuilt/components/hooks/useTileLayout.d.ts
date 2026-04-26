import { HMSPeer, TrackWithPeerAndDimensions } from '@100mslive/react-sdk';
export declare const usePagesWithTiles: ({ peers, maxTileCount }: {
    peers: HMSPeer[];
    maxTileCount: number;
}) => TrackWithPeerAndDimensions[][];
export declare const useTileLayout: ({ pageList, maxTileCount, edgeToEdge, }: {
    pageList: TrackWithPeerAndDimensions[][];
    maxTileCount: number;
    edgeToEdge?: boolean | undefined;
}) => {
    pagesWithTiles: TrackWithPeerAndDimensions[][];
    ref: import("react-use/lib/useMeasure").UseMeasureRef<HTMLDivElement>;
};
