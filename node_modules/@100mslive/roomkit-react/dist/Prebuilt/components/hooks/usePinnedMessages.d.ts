import { HMSMessage } from '@100mslive/react-sdk';
export declare type PinnedMessage = {
    text: string;
    id: string;
    pinnedBy: string;
};
/**
 * set pinned chat message by updating the session store
 */
export declare const usePinnedMessages: () => {
    setPinnedMessages: (message: HMSMessage, pinnedBy: string) => Promise<void>;
    removePinnedMessage: (indexToRemove: number) => Promise<void>;
    unpinBlacklistedMessages: (blacklistedMessageIDSet: Set<string>) => Promise<void>;
};
