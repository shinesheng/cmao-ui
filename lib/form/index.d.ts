import Form, { useForm } from './form';
import FormItem from './formItem';
type InternalFormType = typeof Form;
type CompoundedComponent = InternalFormType & {
    useForm: typeof useForm;
    Item: typeof FormItem;
};
declare const Temp: CompoundedComponent;
export default Temp;
