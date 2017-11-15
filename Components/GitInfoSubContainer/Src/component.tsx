import { wrapWithInit } from "ReactInitComponentWrapper";
import { wrapWithConnect } from "ReduxConnectComponentWrapper";
import { refreshGitInfo } from "./action";
import { GitSize } from "GitSize";

const stateProps = (ownState, ownProps) => ({
    refreshCount: ownState.refreshCount !== undefined ? ownState.refreshCount : { count: 0 },
    gitSize: ownState.gitSize !== undefined ? ownState.gitSize : 0,
    gitUrl: ownProps.gitUrl
});

const dispatchProps = (dispatch, instanceId, ownProps, stateProps) => ({
    init: () => {
        dispatch(refreshGitInfo(instanceId, { gitUrl: ownProps.gitUrl }));
    },
    onClick: () => {
        dispatch(refreshGitInfo(instanceId, { gitUrl: ownProps.gitUrl }));
    }
});

export const GitInfo = wrapWithConnect({ stateProps, dispatchProps }, wrapWithInit(GitSize));
