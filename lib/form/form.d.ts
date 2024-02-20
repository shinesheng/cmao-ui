import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import useForm, { FormInstance } from './hooks/useForm';
interface Props {
    /**表单名称，显示表单头的名称 */
    name: string;
    /**form表单实例
     * 获取方式 例子 const [form] = Form.useForm<xxx>();
     */
    form: FormInstance;
    children?: any;
}
declare const Temp: (props: Props) => React.JSX.Element;
export { useForm };
export default Temp;
