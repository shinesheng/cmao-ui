import Frame from './frame';
import Head from './head';
import Menu from './menu';
type InternalFormType = typeof Frame;
type CompoundedComponent = InternalFormType & {
    Head: typeof Head;
    Menu: typeof Menu;
};
declare const Temp: CompoundedComponent;
export default Temp;
