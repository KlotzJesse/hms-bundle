/// <reference types="react" />
export declare const usePeerOnStageActions: ({ peerId, role }: {
    peerId: string;
    role: string;
}) => {
    open: boolean;
    setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    lowerPeerHand: () => Promise<void>;
    handleStageAction: () => Promise<void>;
    shouldShowStageRoleChange: string | false | undefined;
    isInStage: boolean;
    bring_to_stage_label: string | undefined;
    remove_from_stage_label: string | undefined;
};
