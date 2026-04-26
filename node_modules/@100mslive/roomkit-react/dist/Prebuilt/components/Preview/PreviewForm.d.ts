import React from 'react';
declare const PreviewForm: ({ name, disabled, onChange, onJoin, enableJoin, cannotPublishVideo, cannotPublishAudio, }: {
    name: string;
    disabled?: boolean | undefined;
    onChange: (name: string) => void;
    onJoin: () => void;
    enableJoin: boolean;
    cannotPublishVideo: boolean;
    cannotPublishAudio: boolean;
}) => React.JSX.Element;
export default PreviewForm;
