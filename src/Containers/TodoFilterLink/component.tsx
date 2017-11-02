import { setVisibilityFilter } from "./action"; // To get Action Creators
import { Link } from "Link";
import { generateContainer } from "ReduxHelper";

const stateProps = (ownState, ownProps) => ({
    active: ownProps.filter === ownState.visibilityFilter,
    children: ownProps.children
});

const dispatchProps = (stateProps, ownProps, dispatch, instanceId) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(instanceId, { filter: ownProps.filter }));
    }
});

export const TodoFilterLink = generateContainer(stateProps, dispatchProps)(Link);
