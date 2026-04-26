import React from 'react';
export declare enum PrebuiltStates {
    MEETING = "meeting",
    PREVIEW = "preview",
    LEAVE = "leave"
}
declare type AppStateContextType = {
    rejoin: () => void;
};
export declare const AppStateContext: React.Context<AppStateContextType>;
export declare const useHMSAppStateContext: () => AppStateContextType;
export declare const useAppStateManager: () => {
    activeState: PrebuiltStates | undefined;
    rejoin: () => void;
};
export {};
