import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import { Provider } from 'react-redux';
import Area from './area';
import { Node, Line } from './area';
import store from './store/store.js';
import Tool from './tool';
import Scroll from '../scroll/index';
import '../scroll/style/index.scss';

interface Props {
    id: string;
    /**是否为预览 */
    isPreview: boolean;
    /**
     * 双击节点node的回调方法
     * @param arg0 当前节点node
     * @returns 
     */
    openNode?: (arg0: Node) => void;
    /**
     * 双击线line的回调方法
     * @param arg0 当前点击的线line
     * @param arg1 当前点击的线line来自的节点
     * @returns 
     */
    openLine?: (arg0: Line, arg1: Node) => void;
    ref?: any;
}
const Temp: React.FC<Props> = forwardRef((props, ref) => {

    let [id] = useState(props.id);
    let [isPreview] = useState(props.isPreview);
    let [toolBtns] = useState([
        'startround',
        'endround',
        'stepnode',
        'confluencenode',
        'conditionnode',
        'auditornode',
        'childwfnode',
    ]);
    let [nodeRemarks] = useState({
        cursor: '选择指针',
        direct: '步骤连线',
        startround: '开始节点',
        endround: '结束节点',
        stepnode: '普通节点',
        confluencenode: '会签节点',
        conditionnode: '条件判断节点',
        auditornode: '传阅节点',
        childwfnode: '子流程节点',
    });
    let [style, setStyle] = useState<any>(null);
    const areaRef = useRef<any>(null);
    const divRef = useRef<any>(null);

    // 将外部需要访问的属性和方法暴露出去
    useImperativeHandle(ref, () => ({
        workflowGet,
        workflowSet,
    }));

    useEffect(() => {

        return () => { };
    }, []);

    //获取节点、线集合
    const workflowGet = () => {
        let data = {
            nodes: areaRef.current.nodes,
            lines: areaRef.current.lines,
        };
        return data;
    };

    //设置流程图
    const workflowSet = (name: any, op: any) => {
        switch (name) {
            case 'updateNodeName':
                // $.lrworkflow.updateNodeName($workArea, op.nodeId);
                break;
            case 'updateLineName':
                // $.lrworkflow.updateLineName($workArea, op.lineId);
                break;
            case 'updateNodeById':
                let nodes = areaRef.current.nodes;
                let tmp: any = []
                nodes.forEach(function (o: any) {
                    //
                    if (o.id == op.id) {
                        o = op.data;
                    }
                    tmp.push(o);
                });
                areaRef.current.setNodes([...tmp]);
                break;
            case 'updateLineById':
                let lines = areaRef.current.lines;
                let tmpLines: any = []
                lines.forEach(function (o: any) {
                    //
                    if (o.id == op.id) {
                        o = op.data;
                    }
                    tmpLines.push(o);
                });
                areaRef.current.setLines([...tmpLines]);
                break;
            case 'set':
                areaRef.current.setNodes([]);
                if (op.data.nodes) {
                    for (let i = 0, l = op.data.nodes.length; i < l; i++) {
                        let node = op.data.nodes[i];
                        areaRef.current.addNode(node, true);
                    }
                }

                areaRef.current.setLines([]);
                if (op.data.lines) {
                    for (let j = 0, l = op.data.lines.length; j < l; j++) {
                        let line = op.data.lines[j];
                        areaRef.current.addLine(line);
                    }
                }
                break;
        }
    };

    const onResize = () => {

    }

    return (
        <div className="lr-workflow" id={id} ref={divRef} style={style} onResize={() => { onResize() }}>
            <Provider store={store}>
                {!isPreview ? (
                    <Tool id={id} nodeRemarks={nodeRemarks} toolBtns={toolBtns} />
                ) : null}
                <Scroll>
                    <Area id={id} nodeRemarks={nodeRemarks} ref={areaRef} openNode={props.openNode} openLine={props.openLine} />
                </Scroll>
            </Provider>
        </div>
    );
});

export default Temp;
