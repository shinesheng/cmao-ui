import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
export interface Menu {
    resType?: string;
    children?: Array<Menu>;
    resIcon?: any;
    resUrl?: any;
    resourceId?: any;
    title?: any;
    isOpenChild?: boolean;
}
export interface MenuProps {
    /**菜单的宽度 默认200 单位px */
    width?: number;
    data: Array<Menu>;
    activeId: any;
    /**点击菜单回调事件 返回当前节点的obj对象 */
    clickCallback?: (obj: Menu) => void;
}
declare const Temp: (props: MenuProps) => React.JSX.Element;
export default Temp;
