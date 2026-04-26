import type { Layout } from '@100mslive/types-prebuilt';
export declare type useFetchRoomLayoutProps = {
    endpoint?: string;
    authToken: string;
};
export declare type useFetchRoomLayoutResponse = {
    layout: Layout | undefined;
    updateRoomLayoutForRole: (role: string) => void;
    setOriginalLayout: () => void;
};
export declare const useFetchRoomLayout: ({ endpoint, authToken, }: useFetchRoomLayoutProps) => useFetchRoomLayoutResponse;
