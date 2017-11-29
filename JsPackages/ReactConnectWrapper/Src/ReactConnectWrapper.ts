import { connect } from "react-redux"; // connect redux and react

const getState = (state, key) => state[key];

const generateMapStateToProps = stateProps => {
    return (state, ownProps) => {
        let ownState = getState(state, ownProps.instanceId);
        let sharedResource = getState(state, "SharedResource");
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
