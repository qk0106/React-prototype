import { refreshGitInfo } from "./action"; // To get Action Creators
import { GitSize } from "GitSize";
import { getOwnState, generateContainer } from "ReduxHelper";
import { reducer } from "./reducer";
import { generateInstanceComponent } from "Instantiator";

const mapStateToProps = (state, ownProps) => {
    let ownState = getOwnState(state, ownProps.instanceProps);
    return {
        refreshCount: ownState.refreshCount !== undefined ? ownState.refreshCount : { count: 0 },
        gitSize: ownState.gitSize !== undefined ? ownState.gitSize : 0,
        gitUrl: ownProps.gitUrl
    };
};

const mapDispatchToProps = (stateProps, dispatch, ownProps) => {
    let { instanceId } = ownProps.instanceProps;
    return {
        onClick: () => {
            dispatch(refreshGitInfo(instanceId, { gitUrl: ownProps.gitUrl }));
        }
    };
};

const _GitInfo = generateContainer(mapStateToProps, mapDispatchToProps)(GitSize);

export const GitInfo = generateInstanceComponent("GitInfos", reducer, _GitInfo);
