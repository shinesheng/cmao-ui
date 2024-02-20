interface StateImp {
    currentBtn?: string;
    nodes?: [];
    lines?: [];
}
declare let store: import("@reduxjs/toolkit").EnhancedStore<StateImp, any, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<StateImp, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export default store;
