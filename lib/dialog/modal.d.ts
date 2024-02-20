import React from 'react';
/**
 * 使用方法：
 * <Modal visible={this.state.modal.visible}
        title='hello'
        style={{width: '200px'}}
        footer={null}
        onOk={this.onOK}
        onCancel={this.onCancel}>
        I am Modal
    </Modal>

 * footer可定义为null，则没有底部按钮
 * onOK：确定按钮回调函数
 * onCancel：取消按钮回调函数
 */
declare const Modal: {
    (props: any): React.JSX.Element;
    show(config: any): {
        destroy: () => void;
    };
    confirm(config: any): {
        destroy: () => void;
    };
};
export default Modal;
