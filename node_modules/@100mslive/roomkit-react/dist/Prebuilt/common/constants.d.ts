export declare const QUERY_PARAM_SKIP_PREVIEW = "skip_preview";
export declare const QUERY_PARAM_SKIP_PREVIEW_HEADFUL = "skip_preview_headful";
export declare const QUERY_PARAM_NAME = "name";
export declare const QUERY_PARAM_VIEW_MODE = "ui_mode";
export declare const QUERY_PARAM_PREVIEW_AS_ROLE = "preview_as_role";
export declare const UI_MODE_GRID = "grid";
export declare const MAX_TOASTS = 5;
export declare const RTMP_RECORD_RESOLUTION_MIN = 480;
export declare const RTMP_RECORD_RESOLUTION_MAX = 1280;
export declare const RTMP_RECORD_DEFAULT_RESOLUTION: {
    width: number;
    height: number;
};
export declare const EMOJI_REACTION_TYPE = "EMOJI_REACTION";
export declare const CHAT_SELECTOR: {
    PEER: string;
    ROLE: string;
    EVERYONE: string;
};
export declare const APP_DATA: {
    uiSettings: string;
    chatOpen: string;
    chatSelector: string;
    chatDraft: string;
    appConfig: string;
    sidePane: string;
    hlsStats: string;
    subscribedNotifications: string;
    logo: string;
    hlsStarted: string;
    rtmpStarted: string;
    recordingStarted: string;
    embedConfig: string;
    pinnedTrackId: string;
    dropdownList: string;
    authToken: string;
    pdfConfig: string;
    minimiseInset: string;
    activeScreensharePeerId: string;
    disableNotifications: string;
    pollState: string;
    background: string;
    sheet: string;
    caption: string;
    loadingEffects: string;
    noiseCancellation: string;
};
export declare const UI_SETTINGS: {
    isAudioOnly: string;
    maxTileCount: string;
    uiViewMode: string;
    layoutMode: string;
    showStatsOnTiles: string;
    enableAmbientMusic: string;
    mirrorLocalVideo: string;
};
export declare const SIDE_PANE_OPTIONS: {
    PARTICIPANTS: string;
    CHAT: string;
    STREAMING: string;
    POLLS: string;
    VB: string;
    ROOM_DETAILS: string;
};
export declare type SidePaneOption = (typeof SIDE_PANE_OPTIONS)[keyof typeof SIDE_PANE_OPTIONS];
export declare const SHEET_OPTIONS: {
    ROOM_DETAILS: string;
};
export declare const POLL_STATE: {
    pollInView: string;
    view: string;
};
export declare const POLL_VIEWS: {
    CREATE_POLL_QUIZ: string;
    CREATE_QUESTIONS: string;
    VOTE: string;
    RESULTS: string;
};
export declare const CAPTION_TOAST: {
    captionToast: string;
};
export declare const SUBSCRIBED_NOTIFICATIONS: {
    PEER_JOINED: string;
    PEER_LEFT: string;
    METADATA_UPDATED: string;
    NEW_MESSAGE: string;
    ERROR: string;
};
export declare const CREATE_ROOM_DOC_URL = "https://github.com/100mslive/100ms-web/wiki/Creating-and-joining-a-room";
export declare const HLS_TIMED_METADATA_DOC_URL = "https://www.100ms.live/docs/javascript/v2/how--to-guides/record-and-live-stream/hls/hls-timed-metadata";
export declare const REMOTE_STOP_SCREENSHARE_TYPE = "REMOTE_STOP_SCREENSHARE";
export declare const isChrome: boolean;
export declare const isFirefox: boolean;
export declare const isSafari: boolean;
export declare const isIOS: boolean;
export declare const isMacOS: boolean;
export declare const isAndroid: boolean;
export declare const isIPadOS = false;
export declare enum SESSION_STORE_KEY {
    TRANSCRIPTION_STATE = "transcriptionState",
    PINNED_MESSAGES = "pinnedMessages",
    SPOTLIGHT = "spotlight",
    CHAT_PEER_BLACKLIST = "chatPeerBlacklist",
    CHAT_MESSAGE_BLACKLIST = "chatMessageBlacklist",
    CHAT_STATE = "chatState"
}
export declare enum INTERACTION_TYPE {
    POLL = "Poll",
    QUIZ = "Quiz"
}
export declare enum QUESTION_TYPE_TITLE {
    'single-choice' = "Single Choice",
    'multiple-choice' = "Multiple Choice"
}
export declare enum QUESTION_TYPE {
    SINGLE_CHOICE = "single-choice",
    MULTIPLE_CHOICE = "multiple-choice"
}
export declare const ROLE_CHANGE_DECLINED = "role_change_declined";
export declare const DEFAULT_PORTAL_CONTAINER = ".prebuilt-container";
export declare const TEST_AUDIO_URL = "https://100ms.live/test-audio.wav";
