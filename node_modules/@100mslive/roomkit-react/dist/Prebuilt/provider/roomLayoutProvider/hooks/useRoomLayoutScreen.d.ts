import { ConferencingScreen, DefaultConferencingScreen_Elements, DefaultPreviewScreen_Elements, HLSLiveStreamingScreen_Elements, Screens } from '@100mslive/types-prebuilt';
export declare type useRoomLayoutScreenProps = {
    screen: keyof Screens;
};
export declare function useRoomLayoutPreviewScreen(): {
    isPreviewScreenEnabled: boolean;
    elements: DefaultPreviewScreen_Elements | undefined;
    screenType: "default" | undefined;
};
export declare type ConferencingScreenElements = DefaultConferencingScreen_Elements & HLSLiveStreamingScreen_Elements;
export declare function useRoomLayoutConferencingScreen(): {
    hideSections: string[];
    elements: ConferencingScreenElements;
    screenType: keyof ConferencingScreen;
};
export declare function useRoomLayoutLeaveScreen(): {
    isLeaveScreenEnabled: boolean;
    feedback: import("@100mslive/types-prebuilt/elements/feedback").Feedback | undefined;
};
export declare function useRoomLayoutHeader(): {
    title: string;
    description: string;
    details: (string | Date)[];
};
