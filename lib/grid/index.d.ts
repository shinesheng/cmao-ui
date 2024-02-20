import Col from './col';
import Row from './row';
type CompoundedComponent = {
    Col: typeof Col;
    Row: typeof Row;
};
declare let Temp: CompoundedComponent;
export default Temp;
