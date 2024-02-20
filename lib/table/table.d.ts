import React from 'react';
/**
 * 使用方法
 * <Table data={table}/>
 * table: {
    struct: [
        { title: '手机号码', key: function(d) {
            return <a>{d.phone}</a>;
        } },
        { title: '备注', key: 'remark' },
        { title: '更新时间', key: 'time' }
    ],
    data: [
        { phone: '13111111111', remark: '123', time: '2018-01-01' },
        { phone: '13122222222', remark: '456', time: '2018-02-02' },
        { phone: '13133333333', remark: '789', time: '2018-03-03' },
        { phone: '13144444444', remark: '000', time: '2018-04-04' }
    ],
    stripe: true,
    noBorder: false
}
 * 修改了隔行背景色的样式方式，增加stripe，true表示隔行高亮
 * 增加noBorder，true表示表格无边框
 */
declare const Temp: (props: any) => React.JSX.Element;
export default Temp;
