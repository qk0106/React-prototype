import { wrapWithInit } from "ReactInitComponentWrapper";
import { wrapWithConnect } from "ReduxConnectComponentWrapper";
import { refreshGitInfo } from "./action";
import { GitSizePresenter } from "GitSizePresenter";
import { ActionMode } from "ReduxActionModeHelper";

const stateProps = (ownState, ownProps) => ({
    refreshCount: ownState.refreshCount !== undefined ? ownState.refreshCount : { count: 0 },
    gitSize: ownState.gitSize !== undefined ? ownState.gitSize : 0,
    gitUrl: ownProps.gitUrl
});

const dispatchProps = (dispatch, instanceId, ownProps, stateProps) => ({
    init: () => {
        dispatch(refreshGitInfo(instanceId)({ gitUrl: ownProps.gitUrl }));
    },
    onClick: () => {
        dispatch(refreshGitInfo(instanceId, ActionMode.ParentTree)({ gitUrl: ownProps.gitUrl }));
        dispatch(refreshGitInfo(instanceId, ActionMode.Broadcast)({ gitUrl: ownProps.gitUrl }));
    }
});

export const GitInfoSubContainer = wrapWithConnect(
    stateProps,
    dispatchProps,
    wrapWithInit(GitSizePresenter)
);
