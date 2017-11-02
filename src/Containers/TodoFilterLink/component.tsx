import { setVisibilityFilter } from "./action"; // To get Action Creators
import { Link } from "Link";
import { generateContainer } from "ReduxHelper";

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

export const TodoFilterLink = generateContainer(mapStateToProps, mapDispatchToProps)(Link);
