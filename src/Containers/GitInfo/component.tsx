import { refreshGitInfo } from "./action"; // To get Action Creators
import { GitSize } from "GitSize";
import { getOwnState, generateContainer } from "ReduxHelper";
import { reducer } from "./reducer";
import { generateInstanceComponent } from "Instantiator";

const mapStateToProps = (state, { instanceProps, gitUrl }) => {
    let ownState = getOwnState(state, instanceProps);
    return {
        refreshCount: ownState.refreshCount !== undefined ? ownState.refreshCount : { count: 0 },
        gitSize: ownState.gitSize !== undefined ? ownState.gitSize : 0,
        gitUrl: gitUrl
    };
};

const mapDispatchToProps = ({}, dispatch, { instanceProps, gitUrl }) => {
    return {
        onClick: () => {
            dispatch(refreshGitInfo(instanceProps.instanceId, { gitUrl }));
        }
    };
};

const GitInfoContainer = generateContainer(mapStateToProps, mapDispatchToProps)(GitSize);

export const GitInfo = generateInstanceComponent("GitInfo", reducer, GitInfoContainer);
