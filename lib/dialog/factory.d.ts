declare var dialogControllerFactory: (id: any, mountPointClass?: string) => {
    renderDialog: (config: any) => void;
    destroy: () => void;
};
export default dialogControllerFactory;
