import { connect } from "react-redux";
import { createStore } from "redux";
import { fetchRootReducer, registerToRootReducer, fetchRootMiddlewares } from "RootHelper";

let store = createStore(s => s, fetchRootMiddlewares());
export const fetchStore = () => store;

export const registerReducer = (instancesProp, reducer) => {
    registerToRootReducer(instancesProp, reducer);
    store.replaceReducer(fetchRootReducer());
    console.log(store.getState());
};

export const generateContainer = (mapStateToProps, mapDispatchToProps) => {
    const mergeProps = (stateProps, { dispatch }, ownProps) => {
        return {
            ...stateProps,
            ...mapDispatchToProps(stateProps, dispatch, ownProps)
        };
    };
    return connect(mapStateToProps, null, mergeProps);
};
