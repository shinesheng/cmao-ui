function changeCurrentBtn(btn: any) {
    return {
        type: 'changeCurrentBtn',
        value: btn,
    };
}

function setNodes(nodes: any) {
    return {
        type: 'setNodes',
        value: nodes,
    };
}

function setLines(lines: any) {
    return {
        type: 'setLines',
        value: lines,
    };
}

const action = {
    changeCurrentBtn,
    setNodes,
    setLines,
};

export default action;