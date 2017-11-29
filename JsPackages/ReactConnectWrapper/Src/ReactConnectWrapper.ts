import { connect } from "react-redux";
import { SHARED_RESOURCE_KEY } from "ReduxSharedResourceHelper";

const generateMapStateToProps = stateProps => {
    return (state, ownProps) => {
        let ownState = state[ownProps.instanceId];
        let sharedResource = state[SHARED_RESOURCE_KEY];
        return stateProps(ownState, ownProps, sharedResource);
    };
};

const generateMapDispatchToProps = dispatchProps => {
    return (stateProps, dispatch, ownProps) => {
        return dispatchProps(dispatch, ownProps.instanceId, ownProps, stateProps);
    };
};

// connect Redux container and React component to generate React-Redux component
export const wrapWithConnect = (stateProps, dispatchProps) => WrappedComponent => {
    const mapStateToProps = generateMapStateToProps(stateProps);
    const mapDispatchToProps = generateMapDispatchToProps(dispatchProps);
    const mergeProps = (stateProps, { dispatch }, ownProps) => {
        return {
            ...stateProps,
            ...mapDispatchToProps(stateProps, dispatch, ownProps)
        };
    };
    return connect(mapStateToProps, null, mergeProps, { pure: true })(WrappedComponent);
};
