import { connect } from "react-redux";
import { createStore } from "redux";
import { fetchRootReducer, registerToRootReducer } from "RootHelper";

let store = createStore(s => s);
export const fetchStore = () => store;

export const registerReducer = (instancesProp, reducer) => {
    registerToRootReducer(instancesProp, reducer);
    store.replaceReducer(fetchRootReducer());
};

export const yieldContainer = (mapStateToProps, mapDispatchToProps) => {
    const mergeProps = (stateProps, { dispatch }, ownProps) => {
        return {
            ...stateProps,
            ...mapDispatchToProps(stateProps, dispatch, ownProps)
        };
    };
    return connect(mapStateToProps, null, mergeProps);
};
