import { connect } from "react-redux";
import { createStore } from "redux";
import { fetchRootMiddlewares } from "RouteHelper";

let store = createStore(s => s, fetchRootMiddlewares());
export const fetchStore = () => store;

export const generateContainer = (mapStateToProps, mapDispatchToProps) => {
    const mergeProps = (stateProps, { dispatch }, ownProps) => {
        return {
            ...stateProps,
            ...mapDispatchToProps(stateProps, dispatch, ownProps)
        };
    };
    return connect(mapStateToProps, null, mergeProps);
};
