import React from 'react';
/**
 * 使用方法
 * <Button text="submit" style="primary" size="lg" disabled={true} type="link"/>
 *
 * style: primary, red, 默认default样式
 * size: sm, lg, 默认default
 */
export interface ButtonProps {
    /**css的类名 */
    className?: string;
    /**样式有无radius */
    noRadius?: boolean;
    /**style: primary, red, 默认default样式 */
    style?: string;
    /**size: sm, lg, 默认default */
    size?: string;
    icon?: string;
    /**type="link"用的是a标签，否则用button标签（"submit" | "reset" | "button"）*/
    type?: any;
    /**在用a标签时的href属性 */
    href?: any;
    /**在用a标签时的target属性 */
    target?: any;
    /**点击方法 */
    onClick?: () => void;
    /**按钮文本 */
    text?: string;
    /**按钮子元素 */
    children?: any;
    /**按钮是否有效可点击 */
    disabled?: boolean;
}
declare const Button: (props: ButtonProps) => React.JSX.Element;
export default Button;
