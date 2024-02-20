import React from 'react';
interface Props {
    list: any;
    /**根据返回true、false来决定步骤是否变动 */
    onChange?: (arg0: BackData) => boolean;
    /**保存按钮的回调方法 */
    saveClick?: () => void;
}
/**
 * 步骤
 * @param props
 * @returns
 */
declare const Temp: (props: Props) => React.JSX.Element;
interface BackData {
    direction: any;
    currentStep: any;
    newStep: any;
}
export default Temp;
