import React from 'react';
/**
 * 使用方法
 * <CollapseTable data={this.state.tableCollapse} />
 * tableCollapse: {
    struct: [
        { title: '', key: 'collapse', width: 80 },
        { title: '姓名', key: 'name', width: 200 },
        { title: '手机号码', key: 'phone', width: 200 }
    ],
    data: [
        {
            name: 'hello1',
            phone: '18768112222',
            subData: (d, i) => {
                return <div className="table-inner-wrap">
                    我是嵌套的内容
                </div>
            }
        },
    ],
    showSubData: false
}
 * struct增加一列，key为collapse
 * data子项中，有subData则有嵌套内容，subData为一个函数
 * showSubData为默认嵌套内容是否全部展开，true为全展开，false为全隐藏，不传为全隐藏
 * <ListView tableCollapse={true}/>
 */
declare const Temp: (props: any) => React.JSX.Element;
export default Temp;
