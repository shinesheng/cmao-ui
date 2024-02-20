import React from 'react';
interface Props {
    id: string;
    isPreview?: boolean;
    currentBtn?: string;
    nodeRemarks: Record<string, any>;
    changeCurrentBtn?: (arg0: string) => void;
    $nowType?: string;
    ref?: any;
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<Props>, {
    ref?: any;
    id: string;
    changeCurrentBtn?: ((arg0: string) => void) | undefined;
    isPreview?: boolean | undefined;
    currentBtn?: string | undefined;
    nodeRemarks: Record<string, any>;
    $nowType?: string | undefined;
    context?: React.Context<import("react-redux").ReactReduxContextValue<any, import("redux").UnknownAction> | null> | undefined;
    store?: import("redux").Store<any, import("redux").UnknownAction, unknown> | undefined;
}>;
export default _default;
