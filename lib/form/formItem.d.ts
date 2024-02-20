import React from 'react';
import { RuleConfig } from './validator';
interface Props {
    /**标题 左侧label名 */
    title: string;
    /**对象名 */
    name: string;
    /**是否需要验证 */
    isValid?: boolean;
    /**校验规则 */
    rules?: RuleConfig;
    children?: any;
}
declare const Temp: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default Temp;
