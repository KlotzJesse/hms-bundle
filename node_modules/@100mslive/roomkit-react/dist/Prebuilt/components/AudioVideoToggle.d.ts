import React from 'react';
export declare const Options: ({ options, selectedDeviceId, onClick, }: {
    options?: (MediaDeviceInfo | InputDeviceInfo)[] | undefined;
    selectedDeviceId?: string | undefined;
    onClick: (deviceId: string) => Promise<void>;
}) => React.JSX.Element;
export declare const NoiseCancellation: ({ actionTile, iconOnly, setOpenOptionsSheet, }: {
    setOpenOptionsSheet?: ((value: boolean) => void) | undefined;
    iconOnly?: boolean | undefined;
    actionTile?: boolean | undefined;
}) => React.JSX.Element | null;
export declare const AudioVideoToggle: ({ hideOptions }: {
    hideOptions?: boolean | undefined;
}) => React.JSX.Element | null;
