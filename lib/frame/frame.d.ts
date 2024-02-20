import React from 'react';
interface Props {
    menu: any;
    view: any;
    /**点击菜单回调事件 */
    clickCallback?: (url: string) => void;
    children?: any;
}
declare const Frame: (props: Props) => React.JSX.Element;
export default Frame;
