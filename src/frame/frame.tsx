import React, { useState, useEffect } from 'react';
import Head from './head';
import Menu from './menu';

interface Props {
    menu: any;
    view: any;
    /**点击菜单回调事件 */
    clickCallback?: (url: string) => void;
    children?: any;
}
const Frame = (props: Props) => {
    let [menu, setMenu] = useState<any>(props.menu.items);
    useEffect(() => {
        if (props.menu.items) {
            menu = props.menu.items;
            setMenu(props.menu.items)
        }

        return () => { };
    }, []);

    return (
        <div className='fp-page'>
            <Head menu={menu} />
            <div className='fp-body clearfix'>
                <Menu data={props.menu.items} activeId={props.menu.activeId} clickCallback={props.clickCallback} />
                <div className='fp-container' id="J_container">
                    {props.view}
                </div>
            </div>
        </div>
    );
};

export default Frame;
