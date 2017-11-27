import { wrapWithConnect } from "ReduxConnectComponentWrapper";

import { setVisibilityFilter } from "./action";
import { LinkPresenter } from "LinkPresenter";

const stateProps = (ownState, ownProps) => ({
    active: ownProps.filter === ownState.visibilityFilter,
    children: ownProps.children
});

const dispatchProps = (dispatch, instanceId, ownProps, stateProps) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(instanceId)({ filter: ownProps.filter }));
    }
});

export const TodoFilterLinkContainer = wrapWithConnect(stateProps, dispatchProps, LinkPresenter);
