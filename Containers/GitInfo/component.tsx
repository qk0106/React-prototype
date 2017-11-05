import "./actionHandler";
import { reducer } from "./reducer";
import { refreshGitInfo } from "./action"; // To get Action Creators
import { GitSize } from "GitSize";
import { generateReduxComponent } from "ConnectHelper";
import { generateInstanceComponent } from "Instantiator";
import { withInitData } from "InitDataWrapper";

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

const _GitInfo = generateReduxComponent({ stateProps, dispatchProps }, withInitData(GitSize));

export const GitInfo = generateInstanceComponent("GitInfos", _GitInfo, reducer);
