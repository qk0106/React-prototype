import { connect } from "react-redux";
import { createStore } from "redux";
import { fetchMiddlewares } from "./MiddlewaresHelper";

export const generateContainer = (mapStateToProps, mapDispatchToProps) => {
    const mergeProps = (stateProps, { dispatch }, ownProps) => {
        return {
            ...stateProps,
            ...mapDispatchToProps(stateProps, dispatch, ownProps)
        };
    };
    return connect(mapStateToProps, null, mergeProps);
};

let rootStore = createStore(s => s, fetchMiddlewares());

export const fetchStore = () => rootStore;
