import React, { useEffect, useState } from 'react';

import Input from '../input';


/**
 * 使用方法：
 * <Datepicker name="time"
    wtype="2"
    size='lg'
    value='2018-04-11 20:0:00'
    dateFmt={'yyyy-MM-dd HH:mm:ss'}
    onChange={this.dateChange}/>
 */
const Temp = (props: any) => {

    useEffect(() => {
    }, []);

    const datePicker = (e: any) => {
        
    }

    const clickIcon = () => {
        // datePicker();
    }

    let cls = ['fp-datepicker', props.className];
    if (props.size) {
        cls.push('fp-datepicker-' + props.size);
    }
    return (
        <div className={cls.join(' ')}>
            <Input
                ref={props.name}
                name={props.name}
                value={props.value}
                onClick={datePicker}
                // onKeyUp={valueChange}
                placeholder={props.placeholder}
                size={props.size}
                wtype={props.wtype}
                autoComplete="off"
                disabled={props.disabled}
                readonly={props.readonly}
            />
            <i onClick={clickIcon}></i>
        </div>
    );
}

export default Temp;
