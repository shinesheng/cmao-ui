import React from 'react';
/**
 * <TableFixedHead data={this.state.table} initHeight={200}/>
 * table: {
    struct: [
        { title: '手机号码', key: function(d) {
            return <a>{d.phone}</a>;
        }, width: 200 },            // 一定要给宽度，否则不对齐
        { title: '备注', key: 'remark', width: 200 },
        { title: '更新时间', key: 'time' }
    ],
    data: [
        { phone: '13111111111', remark: '123', time: '2018-01-01' },
        { phone: '13122222222', remark: '456', time: '2018-02-02' },
        { phone: '13133333333', remark: '789', time: '2018-03-03' },
        { phone: '13144444444', remark: '000', time: '2018-04-04' }
    ],
    stripe: true
 *
 * 注：列的宽度和不能大于表格的宽度，最后一列可以不设置宽度
 */
declare const Temp: (props: any) => React.JSX.Element;
export default Temp;
