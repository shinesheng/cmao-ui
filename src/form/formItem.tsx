import React, { useEffect, useState, useContext, useRef, forwardRef, useImperativeHandle } from 'react';
import Row from '../grid/row';
import Col from '../grid/col';
import { FormContext } from './context';
import { RuleConfig } from './validator';

interface Props {
    /**标题 左侧label名 */
    title: string;
    /**对象名 */
    name: string;
    /**是否需要验证 */
    isValid?: boolean;
    /**校验规则 */
    rules?: RuleConfig,
    children?: any;
    type?: any;
}
const Temp = forwardRef((props: Props, ref) => {
    const { children, rules, ...otherPorps } = props;
    let { formData, formTitle, formValidMsg, changeForm, initValid } = useContext(FormContext);

    useEffect(() => {
        let data: any = {};
        data[props.name] = null;
        changeForm && changeForm(data);
        formTitle[props.name] = props.title;
    }, []);

    const onChange = (e: any, child: any) => {
        let data: any = {};
        Object.assign(data, formData);
        data[props.name] = e.target.value;
        changeForm && changeForm(data);
        //变更时，去除错误信息框
        formValidMsg[props.name] = '';

        //执行该组件的onchange事件
        child && child.props && child.props.onchange && child.props.onchange(e);
    }


    const handleHtml = () => {
        if (props.type == 'radio') {
            return <>
                <Row>
                    <Col span={24} className='cmao-form-item'>
                        <div className="form-item-title">{props.title}</div>
                        <div className="form-control2">
                            {
                                React.Children.map(children, child => {
                                    let cls = {};
                                    if (formValidMsg[props.name]) {
                                        cls = { className: 'cmao-field-error' };
                                    }
                                    let ischeck = false;
                                    if (child.props.value == formData[props.name]) {
                                        ischeck = true;
                                    }
                                    // let 
                                    return React.cloneElement(child, { ...otherPorps, ...cls, ...{ onChange: onChange, checked: ischeck } })
                                })
                            }

                            {
                                formValidMsg[props.name] ? <div className='cmao-field-error-info' title={formValidMsg[props.name]}><i className='fa fa-info-circle'></i></div> : null
                            }
                        </div>
                    </Col>
                </Row>
            </>
        }
        else if (props.type == 'select') {
            return <>
                <Row>
                    <Col span={24} className='cmao-form-item'>
                        <div className="form-item-title">{props.title}</div>
                        <div className="form-control2">
                            {
                                React.Children.map(children, child => {
                                    let cls = {};
                                    if (formValidMsg[props.name]) {
                                        cls = { className: 'cmao-field-error' };
                                    }
                                    return React.cloneElement(child, { ...otherPorps, ...cls, ...{ onChange: (e: any) => { onChange(e, child) }, val: formData[props.name] || '', value: formData[props.name] || '' } })
                                })
                            }

                            {
                                formValidMsg[props.name] ? <div className='cmao-field-error-info' title={formValidMsg[props.name]}><i className='fa fa-info-circle'></i></div> : null
                            }
                        </div>
                    </Col>
                </Row>
            </>
        }
        else {
            return <>
                <Row>
                    <Col span={24} className='cmao-form-item'>
                        <div className="form-item-title">{props.title}</div>
                        <div className="form-control">
                            {
                                React.Children.map(children, child => {
                                    let cls = {};
                                    if (formValidMsg[props.name]) {
                                        cls = { className: 'cmao-field-error' };
                                    }
                                    return React.cloneElement(child, { ...otherPorps, ...cls, ...{ onChange: onChange, value: formData[props.name] || '' } })
                                })
                            }

                            {
                                formValidMsg[props.name] ? <div className='cmao-field-error-info' title={formValidMsg[props.name]}><i className='fa fa-info-circle'></i></div> : null
                            }
                        </div>
                    </Col>
                </Row>
            </>
        }
    }

    if (props.isValid) {
        //写入校验规则到form实例
        initValid(props.name, props.rules);
    }

    return (handleHtml());
});

export default Temp;
