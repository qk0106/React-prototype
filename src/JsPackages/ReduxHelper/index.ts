import { connect } from "react-redux";
import { createStore } from "redux";
import { fetchRootReducer, registerToRootReducer, fetchRootMiddlewares } from "RouteHelper";
import { registerInstanceId } from "Instantiator";

let store = createStore(s => s, fetchRootMiddlewares());
export const fetchStore = () => store;

export const registerReducer = (instancesProp, instanceId, reducer) => {
    registerInstanceId(instancesProp, instanceId);
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
