import Dialog from './dialog';
import Prompt from './prompt';
import Modal from './modal';
type InternalFormType = typeof Dialog;
type CompoundedComponent = InternalFormType & {
    Prompt: typeof Prompt;
    Modal: typeof Modal;
};
declare const Temp: CompoundedComponent;
export default Temp;
