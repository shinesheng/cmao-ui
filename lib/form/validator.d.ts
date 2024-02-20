import { FormInstance } from './hooks/useForm';
declare const validator: any;
export { validator };
export interface RuleConfig {
    /**检查字符 例子：NotNull  */
    checkExpession?: any;
    length?: any;
}
export default function validform(formData: any, form: FormInstance): boolean;
