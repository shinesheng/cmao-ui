import React from 'react';
/**
 * 使用方法：
 * <Dialog visible={this.state.dialog.visible}>
        I am Dialog
    </Dialog>
 */
declare const DialogWrap: {
    (props: any): React.JSX.Element;
    show(config: any): {
        destroy: () => void;
    };
};
export default DialogWrap;
