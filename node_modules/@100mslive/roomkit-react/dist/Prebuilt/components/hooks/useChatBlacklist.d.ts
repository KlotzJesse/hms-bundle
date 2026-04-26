import { SESSION_STORE_KEY } from '../../common/constants';
export declare const useChatBlacklist: (sessionStoreKey: SESSION_STORE_KEY.CHAT_MESSAGE_BLACKLIST | SESSION_STORE_KEY.CHAT_PEER_BLACKLIST) => {
    blacklistItem: (blacklistID: string) => Promise<void>;
    blacklistedIDs: any;
};
export declare const useIsPeerBlacklisted: ({ local, peerCustomerUserId }: {
    local?: boolean | undefined;
    peerCustomerUserId?: string | undefined;
}) => any;
