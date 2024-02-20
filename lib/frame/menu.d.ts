import React from 'react';
interface Menu {
    resType?: string;
    children?: Array<Menu>;
    resIcon?: any;
    resUrl?: any;
    resourceId?: any;
    title?: any;
}
interface Props {
    data: Array<Menu>;
    activeId: any;
    /**点击菜单回调事件 */
    clickCallback?: (url: string) => void;
}
declare const Temp: (props: Props) => React.JSX.Element;
export default Temp;
