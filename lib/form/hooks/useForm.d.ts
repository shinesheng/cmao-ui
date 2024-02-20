import * as React from 'react';
import { RuleConfig } from './../validator';
/**form组件表单实例 */
export interface FormInstance<Values = any> {
    /** @internal: This is an internal usage. Do not use in your prod */
    __INTERNAL__: {
        /** No! Do not use this in your code! */
        name?: string;
        /** No! Do not use this in your code! */
        itemRef: (name: string) => (node: React.ReactElement) => void;
    };
    /**初始化校验规则 */
    initValid: (name: string, obj: any) => void;
    getFieldInstance: (name: string) => any;
    /**获取表单key对应的校验规则 */
    getFieldValid: (name: string) => RuleConfig;
    getValidErrorMsg: (name: string) => any;
    /**校验表单是否符合rule规则，返回true or false */
    checkRule?: () => boolean;
    /**设置表单数据 */
    setData: (data: Values) => void;
    data?: Values;
}
export default function useForm<Values = any>(form?: FormInstance<Values>): [FormInstance<Values>];
