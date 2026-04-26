import React from 'react';
/**
 * shows a button which when clicked shows some videos in PIP, clicking
 * again turns it off.
 */
declare const PIPComponent: ({ content }: {
    content?: null | undefined;
}) => React.JSX.Element | null;
/**
 * this is a separate component so it can be conditionally rendered and
 * the subscriptions to store are done only if required.
 */
export declare const ActivatedPIP: () => React.JSX.Element;
export default PIPComponent;
