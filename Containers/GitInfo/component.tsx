import * as React from "react";
import "./actionHandler";
import { reducer } from "./reducer";
import { refreshGitInfo } from "./action"; // To get Action Creators
import { GitSize } from "GitSize";
import { generateReduxComponent } from "ReduxHelper";
import { generateInstanceComponent } from "Instantiator";

const stateProps = (ownState, ownProps) => ({
    refreshCount: ownState.refreshCount !== undefined ? ownState.refreshCount : { count: 0 },
    gitSize: ownState.gitSize !== undefined ? ownState.gitSize : 0,
    gitUrl: ownProps.gitUrl
});

const dispatchProps = (dispatch, instanceId, ownProps, stateProps) => ({
    onClick: () => {
        dispatch(refreshGitInfo(instanceId, { gitUrl: ownProps.gitUrl }));
    },
    init: () => {
        dispatch(refreshGitInfo(instanceId, { gitUrl: ownProps.gitUrl }));
    }
});

function withInitData(WrappedComponent) {
    // ...and returns another component...
    return class extends React.Component {
        constructor(props) {
            super(props);
            props.init();
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
}

const _GitInfo = generateReduxComponent({ stateProps, dispatchProps }, withInitData(GitSize));

export const GitInfo = generateInstanceComponent("GitInfos", _GitInfo, reducer);
