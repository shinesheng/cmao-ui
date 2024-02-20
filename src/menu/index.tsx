import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css'

export interface Menu {
    resType?: string,
    children?: Array<Menu>,
    resIcon?: any,
    resUrl?: any,
    resourceId?: any,
    title?: any,
    isOpenChild?: boolean
}
export interface MenuProps {
    /**菜单的宽度 默认200 单位px */
    width?: number,
    data: Array<Menu>,
    activeId: any,
    /**点击菜单回调事件 返回当前节点的obj对象 */
    clickCallback?: (obj: Menu) => void
}
const Temp = (props: MenuProps) => {
    let [openId, setOpenId] = useState<any>('');
    let [openObj, setOpenObj] = useState<any>({});

    const handleMouseOver = (obj: any) => {
        // openId = obj.resourceId;
        // setOpenId(openId)
    }

    const handleMouseOut = () => {
        // openId = '';
        // setOpenId(openId)
    }

    //节点点击
    const handClick = (obj: any, len: number, e: any) => {
        e.preventDefault();
        if (props.clickCallback) {
            props.clickCallback(obj);
        }
        openObj[obj.resourceId] = !openObj[obj.resourceId];
        setOpenObj({ ...openObj })
    }


    /**递归菜单返回子节点html */
    const getChildItem = (id: any, childArray: any) => {
        let subCss = { display: 'none' };
        if (openObj[id]) {
            subCss = { display: 'block' };
        }
        let _html = childArray.length > 0 ? <ul style={subCss} className='secondItem'>
            {childArray.map((o: any, i: any) => {
                let secondModules = o.children || [];
                let css = ['cmao-menu-item'];

                // 判断当前菜单是否选中，选中则增加高亮样式
                if (o.resourceId == props.activeId) {
                    css.push('cmao-menu-item-select');
                }
                if (openObj[o.resourceId]) {
                    css.push('open');
                }
                let secItems = getChildItem(o.resourceId, o.children);
                return <li
                    // onClick={(e) => { handClick2(o, 0, e) }}
                    key={i}
                >
                    <a className={css.join(' ')}
                        onClick={(e) => { handClick(o, o.children, e) }}>
                        <i></i>
                        <span>{o.title}</span>
                        {
                            secondModules.length > 0 ? <span className="cmao-menu-item-arrow"><i className="fa fa-angle-left"></i></span> : null
                        }
                    </a>
                    {secItems}
                </li>;
            })}
        </ul> : null;
        return _html;
    }

    let width = 200;
    if (props.width) {
        width = props.width;
    }
    return (
        <>
            <div className="cmao-menu" style={{ width: width }}>
                <div className="cmao-menu-wrap">
                    <ul>
                        {
                            props.data.map((o, i) => {
                                // 第一级菜单
                                let secondModules = o.children || [];

                                let css = ['cmao-menu-item'];
                                // 判断当前一级菜单是否选中，选中则增加高亮样式
                                if (o.resourceId == props.activeId) {
                                    css.push('cmao-menu-item-select');
                                }

                                if (openId == o.resourceId) {
                                    css.push('cmao-menu-item-select');
                                }
                                if (openObj[o.resourceId]) {
                                    css.push('open');
                                }

                                //渲染二级菜单
                                let secItems = getChildItem(o.resourceId, secondModules);

                                return <li
                                    key={i}
                                >
                                    <a id={o.resourceId} className={css.join(' ')}
                                        onClick={(e) => { handClick(o, secondModules.length, e) }}>
                                        <i className='fa fa-desktop cmao-menu-item-icon' style={{ color: '#fff' }}></i>
                                        <span>{o.title}</span>
                                        {
                                            secondModules.length > 0 ? <span className="cmao-menu-item-arrow"><i className="fa fa-angle-left"></i></span> : null
                                        }
                                    </a>
                                    {secItems}
                                </li>;
                            })
                        }
                    </ul>

                </div>
            </div>
        </>

    );
};

export default Temp;
