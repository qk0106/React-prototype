import { setVisibilityFilter } from "./action"; // To get Action Creators
import { Link } from "Link";
import { wrapWithConnect } from "ReduxConnectComponentWrapper";

const stateProps = (ownState, ownProps) => ({
    active: ownProps.filter === ownState.visibilityFilter,
    children: ownProps.children
});

const dispatchProps = (dispatch, instanceId, ownProps, stateProps) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(instanceId, { filter: ownProps.filter }));
    }
});

export const TodoFilterLink = wrapWithConnect({ stateProps, dispatchProps }, Link);
