import { connect } from "react-redux";

export const yieldContainer = (mapStateToProps, mapDispatchToProps) => {
    const mergeProps = (stateProps, { dispatch }, ownProps) => {
        return {
            ...stateProps,
            ...mapDispatchToProps(stateProps, dispatch, ownProps)
        };
    };
    return connect(mapStateToProps, null, mergeProps);
};
