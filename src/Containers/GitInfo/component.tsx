import { refreshGitInfo } from "./action"; // To get Action Creators
import { reducer } from "./reducer";
import { GitSize } from "GitSize";
import { generateContainer } from "ReduxHelper";
import { generateInstanceComponent } from "Instantiator";

const mapStateToProps = (state, { instancesProp, instanceId, otherProps }) => {
    let ownState = state[instancesProp][instanceId];
    let { gitUrl } = otherProps;
    return {
        refreshCount: ownState.refreshCount !== undefined ? ownState.refreshCount : { count: 0 },
        gitSize: ownState.gitSize !== undefined ? ownState.gitSize : 0,
        gitUrl: gitUrl
    };
};

const mapDispatchToProps = ({}, dispatch, { instanceId, otherProps }) => {
    let { gitUrl } = otherProps;
    return {
        onClick: () => {
            dispatch(refreshGitInfo(instanceId, { gitUrl }));
        }
    };
};

const GitInfoContainer = generateContainer(mapStateToProps, mapDispatchToProps)(GitSize);

export const GitInfo = generateInstanceComponent("GitInfo", reducer, GitInfoContainer);
