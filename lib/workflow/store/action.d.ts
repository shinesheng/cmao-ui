declare function changeCurrentBtn(btn: any): {
    type: string;
    value: any;
};
declare function setNodes(nodes: any): {
    type: string;
    value: any;
};
declare function setLines(lines: any): {
    type: string;
    value: any;
};
declare const action: {
    changeCurrentBtn: typeof changeCurrentBtn;
    setNodes: typeof setNodes;
    setLines: typeof setLines;
};
export default action;
