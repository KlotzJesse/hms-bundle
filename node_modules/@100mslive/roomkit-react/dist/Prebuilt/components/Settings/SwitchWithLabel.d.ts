import React from 'react';
declare const SwitchWithLabel: ({ label, icon, id, onChange, checked, hide, }: {
    label: string;
    icon?: React.ReactNode;
    id: string;
    onChange: (value: boolean) => void;
    checked: boolean;
    hide?: boolean | undefined;
}) => React.JSX.Element;
export default SwitchWithLabel;
