import Frame from './frame';
import Head from './head';
import Menu from './menu';


type InternalFormType = typeof Frame;
type CompoundedComponent = InternalFormType & {
    Head: typeof Head;
    Menu: typeof Menu;
};

const Temp = Frame as CompoundedComponent;
Temp.Head = Head;
Temp.Menu = Menu;

export default Temp;