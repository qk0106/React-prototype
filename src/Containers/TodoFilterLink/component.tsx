import { setVisibilityFilter } from "./action"; // To get Action Creators
import { Link } from "Link";
import { getOwnState, generateContainer } from "ReduxHelper";

const mapStateToProps = (state, { instanceProps, filter, children }) => {
    let ownState = getOwnState(state, instanceProps);
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
