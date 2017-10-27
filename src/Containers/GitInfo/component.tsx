import { refreshGitInfo } from "./action"; // To get Action Creators
import { GitSize } from "GitSize";
import { yieldContainer } from "ReduxHelper";

export const instancesProp = "GitInfos";

const mapStateToProps = (state, { instanceId, gitUrl }) => {
    let ownState = state[instancesProp][instanceId];
    return {
        refreshCount: ownState.refreshCount !== undefined ? ownState.refreshCount : { count: 0 },
        gitSize: ownState.gitSize !== undefined ? ownState.gitSize : 0,
        gitUrl: gitUrl
    };
};

const mapDispatchToProps = ({}, dispatch, { instanceId, gitUrl }) => {
    return {
        onClick: () => {
            dispatch(refreshGitInfo(instanceId, { gitUrl }));
        }
    };
};

export const GitInfo = yieldContainer(mapStateToProps, mapDispatchToProps)(GitSize);
