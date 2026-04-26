export declare const usePIPChat: () => {
    isSupported: boolean;
    requestPipWindow: (width: number, height: number) => Promise<void>;
    pipWindow: Window | null;
};
