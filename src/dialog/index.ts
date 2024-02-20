import Dialog from './dialog';
import Prompt from './prompt';
import Modal from './modal';

type InternalFormType = typeof Dialog;
type CompoundedComponent = InternalFormType & {
    Prompt: typeof Prompt;
    Modal: typeof Modal;
};

const Temp = Dialog as CompoundedComponent;
Temp.Prompt = Prompt;
Temp.Modal = Modal;

export default Temp;