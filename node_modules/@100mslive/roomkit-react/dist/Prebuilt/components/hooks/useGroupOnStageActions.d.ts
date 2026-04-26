import { HMSPeer } from '@100mslive/react-sdk';
export declare const useGroupOnStageActions: ({ peers }: {
    peers: HMSPeer[];
}) => {
    lowerAllHands: () => Promise<void[]>;
    bringAllToStage: () => Promise<(void | null)[]> | undefined;
    canBringToStage: boolean | undefined;
    bring_to_stage_label: string | undefined;
    remove_from_stage_label: string | undefined;
};
