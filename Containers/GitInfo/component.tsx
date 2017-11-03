import "./actionHandler";
import { reducer } from "./reducer";
import { refreshGitInfo } from "./action"; // To get Action Creators
import { GitSize } from "GitSize";
import { generateContainer } from "ReduxHelper";
import { generateInstanceComponent } from "Instantiator";

const stateProps = (ownState, ownProps) => ({
    refreshCount: ownState.refreshCount !== undefined ? ownState.refreshCount : { count: 0 },
    gitSize: ownState.gitSize !== undefined ? ownState.gitSize : 0,
    gitUrl: ownProps.gitUrl
});

const dispatchProps = (dispatch, instanceId, ownProps, stateProps) => ({
    onClick: () => {
        dispatch(refreshGitInfo(instanceId, { gitUrl: ownProps.gitUrl }));
    }
});

const _GitInfo = generateContainer({ stateProps, dispatchProps }, GitSize);

export const GitInfo = generateInstanceComponent("GitInfos", _GitInfo, reducer);
