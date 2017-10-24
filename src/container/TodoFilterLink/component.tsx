import { setVisibilityFilter } from "./action"; // To get Action Creators
import { Link } from "../../presenter";
import { connect } from "react-redux";

const mapStateToProps = (state, { instancesProp, instanceId, filter, children }) => {
    let ownState = state[instancesProp][instanceId];
    return {
        active: filter === ownState.visibilityFilter,
        children: children
    };
};

const mapDispatchToProps = ({}, dispatch, { instanceId, filter }) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(instanceId, { filter }));
        }
    };
};

const mergeProps = (stateProps, { dispatch }, ownProps) => {
    return {
        ...stateProps,
        ...mapDispatchToProps(stateProps, dispatch, ownProps)
    };
};

export const TodoFilterLink = connect(mapStateToProps, null, mergeProps)(Link);
