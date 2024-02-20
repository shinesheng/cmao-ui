import { configureStore } from '@reduxjs/toolkit';

interface StateImp {
    currentBtn?: string;
    nodes?: [];
    lines?: [];
}
function reducer(
    state: StateImp = {
        currentBtn: '',
        nodes: [],
        lines: [],
    },
    action: any,
) {
    let newState: StateImp = {};
    Object.assign(newState, state);
    switch (action.type) {
        case 'changeCurrentBtn':
            newState.currentBtn = action.value;
            break;
        case 'setNodes':
            newState.nodes = action.value;
            break;
        case 'setLines':
            newState.lines = action.value;
            break;
        // default:
        //     return newState
    }
    return newState;
}

let store = configureStore({ reducer });
export default store;
