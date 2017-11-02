import * as React from "react";
import { refreshGitInfo } from "./action"; // To get Action Creators
import { GitSize } from "GitSize";
import { generateContainer } from "ReduxHelper";
import { generateInstanceId, registerInstance } from "Instantiator";
import { reducer } from "./reducer";

const mapStateToProps = (state, { instancesProp, instanceId, gitUrl }) => {
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

const GitInfoContainer = generateContainer(mapStateToProps, mapDispatchToProps)(GitSize);

export class GitInfo extends React.Component<any> {
    private _instancesProp = "GitInfos";
    private _instanceId = generateInstanceId("Test");
    private _reducer = reducer;

    constructor(props) {
        super(props);
        registerInstance(this._instancesProp, this._instanceId, this._reducer);
    }

    render() {
        let instanceId = this._instanceId;
        let instancesProp = this._instancesProp;
        let { gitUrl } = this.props;
        return (
            <GitInfoContainer
                instancesProp={instancesProp}
                instanceId={instanceId}
                inputText={gitUrl}
            />
        );
    }
}
