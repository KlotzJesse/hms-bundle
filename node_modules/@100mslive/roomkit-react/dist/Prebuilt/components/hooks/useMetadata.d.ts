export declare const useMyMetadata: () => {
    isHandRaised: boolean;
    isBRBOn: boolean;
    metaData: any;
    updateMetaData: (updatedFields: Record<string, any>) => Promise<boolean>;
    toggleHandRaise: () => Promise<void>;
    toggleBRB: () => Promise<void>;
};
