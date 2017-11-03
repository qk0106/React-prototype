import { connect } from "react-redux";

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

export const generateContainer = (stateProps, dispatchProps) => {
    const mapStateToProps = generateMapStateToProps(stateProps);
    const mapDispatchToProps = generateMapDispatchToProps(dispatchProps);
    const mergeProps = (stateProps, { dispatch }, ownProps) => {
        return {
            ...stateProps,
            ...mapDispatchToProps(stateProps, dispatch, ownProps)
        };
    };
    return connect(mapStateToProps, null, mergeProps, { pure: true });
};
