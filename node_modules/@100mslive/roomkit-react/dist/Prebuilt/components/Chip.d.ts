import React from 'react';
import { CSS } from '../../Theme';
declare const Chip: ({ icon, content, backgroundColor, textColor, hideIfNoContent, onClick, css, }: {
    icon?: React.JSX.Element | undefined;
    content: string;
    backgroundColor?: string | undefined;
    textColor?: string | undefined;
    hideIfNoContent?: boolean | undefined;
    onClick?: (() => void | Promise<void>) | undefined;
    css?: CSS | undefined;
}) => React.JSX.Element | null;
export default Chip;
