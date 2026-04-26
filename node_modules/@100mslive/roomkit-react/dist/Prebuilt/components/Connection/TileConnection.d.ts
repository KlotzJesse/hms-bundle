import React from 'react';
declare const TileConnection: ({ name, peerId, hideLabel, width, pinned, }: {
    name: string;
    peerId: string;
    hideLabel: boolean;
    width?: string | number | undefined;
    pinned?: boolean | undefined;
}) => React.JSX.Element;
export default TileConnection;
