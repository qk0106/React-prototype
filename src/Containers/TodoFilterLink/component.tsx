import { setVisibilityFilter } from "./action"; // To get Action Creators
import { Link } from "Link";
import { generateContainer } from "ReduxHelper";

const mapStateToProps = (state, { instanceProps, filter, children }) => {
    let ownState = state[instanceProps.instancesProp][instanceProps.instanceId];
    return {
        active: filter === ownState.visibilityFilter,
        children: children
    };
};

const mapDispatchToProps = ({}, dispatch, { instanceProps, filter }) => {
    let { instanceId } = instanceProps;
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(instanceId, { filter }));
        }
    };
};

export const TodoFilterLink = generateContainer(mapStateToProps, mapDispatchToProps)(Link);
