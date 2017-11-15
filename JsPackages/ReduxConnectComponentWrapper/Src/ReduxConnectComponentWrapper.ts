import { connect } from "react-redux"; // connect redux and react

const getOwnState = (state, { instancesProp, instanceId }) => state[instancesProp][instanceId];

const generateMapStateToProps = stateProps => {
    return (state, ownProps) => {
        let ownState = getOwnState(state, ownProps.instanceProps);
        return stateProps(ownState, ownProps);
    };
};

const generateMapDispatchToProps = dispatchProps => {
    return (stateProps, dispatch, ownProps) => {
        let { instanceId } = ownProps.instanceProps;
        return dispatchProps(dispatch, instanceId, ownProps, stateProps);
    };
};

// connect Redux container and React presenter (or container) to generate Redux component
export const wrapWithConnect = (stateProps, dispatchProps, presenter) => {
    const mapStateToProps = generateMapStateToProps(stateProps);
    const mapDispatchToProps = generateMapDispatchToProps(dispatchProps);
    const mergeProps = (stateProps, { dispatch }, ownProps) => {
        return {
            ...stateProps,
            ...mapDispatchToProps(stateProps, dispatch, ownProps)
        };
    };
    return connect(mapStateToProps, null, mergeProps, { pure: true })(presenter);
};
