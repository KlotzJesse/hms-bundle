import React from 'react';
import type { Layout } from '@100mslive/types-prebuilt';
import { useFetchRoomLayoutResponse } from './hooks/useFetchRoomLayout';
export declare type RoomLayoutProviderProps = {
    roomLayoutEndpoint?: string;
    overrideLayout?: Partial<Layout>;
};
export declare const RoomLayoutContext: React.Context<{
    layout: Layout | undefined;
    updateRoomLayoutForRole: useFetchRoomLayoutResponse['updateRoomLayoutForRole'] | undefined;
    setOriginalLayout: useFetchRoomLayoutResponse['setOriginalLayout'] | undefined;
} | undefined>;
export declare const RoomLayoutProvider: React.FC<React.PropsWithChildren<RoomLayoutProviderProps>>;
export declare const useRoomLayout: () => Layout | undefined;
export declare const useUpdateRoomLayout: () => ((role: string) => void) | undefined;
export declare const useSetOriginalLayout: () => (() => void) | undefined;
