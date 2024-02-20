import React from 'react';
interface Props {
    id?: string;
    children?: any;
}
/**
 * 滚动条组件， 可以自动匹配高度框架，生成滚动条。
 * 要求 1.子元素高宽比本组件大
 * @param props
 * @returns
 */
declare const Temp: (props: Props) => React.JSX.Element;
export default Temp;
