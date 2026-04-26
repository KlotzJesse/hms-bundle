import React from 'react';
import { TileCustomisationProps } from '../components/VideoLayouts/GridLayout';
declare const SidePane: ({ tileProps, hideControls, }: {
    tileProps?: TileCustomisationProps | undefined;
    hideControls?: boolean | undefined;
}) => React.JSX.Element | null;
export default SidePane;
