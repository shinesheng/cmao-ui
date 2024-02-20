import React from 'react';
interface Props {
    id: string;
    isPreview?: boolean;
    toolBtns: Array<string>;
    nodeRemarks: Record<string, any>;
    currentBtn?: string;
    changeCurrentBtn?: (arg0: string) => void;
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<Props>, {
    id: string;
    changeCurrentBtn?: ((arg0: string) => void) | undefined;
    isPreview?: boolean | undefined;
    currentBtn?: string | undefined;
    nodeRemarks: Record<string, any>;
    toolBtns: string[];
    context?: React.Context<import("react-redux").ReactReduxContextValue<any, import("redux").UnknownAction> | null> | undefined;
    store?: import("redux").Store<any, import("redux").UnknownAction, unknown> | undefined;
}>;
export default _default;
