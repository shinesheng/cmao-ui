import Col from './col';
import Row from './row';

type CompoundedComponent = {
    Col: typeof Col;
    Row: typeof Row;
};

let Temp: CompoundedComponent = {
    Col: Col,
    Row: Row
};

export default Temp;