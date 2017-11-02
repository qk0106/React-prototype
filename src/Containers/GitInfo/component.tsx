import * as React from "react";
import { refreshGitInfo } from "./action"; // To get Action Creators
import { GitSize } from "GitSize";
import { generateContainer } from "ReduxHelper";
import { generateInstanceId, registerInstance } from "Instantiator";
import { reducer } from "./reducer";

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

const instanceComponentCreator = (componentName, reducer, Container) => {
    let classes = {};
    classes[componentName] = class extends React.Component<any> {
        private _instancesProp = componentName + "s";
        private _instanceId = generateInstanceId("Test");
        private _reducer = reducer;

        constructor(props) {
            super(props);
            registerInstance(this._instancesProp, this._instanceId, this._reducer);
        }

        render() {
            let instanceId = this._instanceId;
            let instancesProp = this._instancesProp;
            return (
                <Container
                    instancesProp={instancesProp}
                    instanceId={instanceId}
                    otherProps={this.props}
                />
            );
        }
    };
    return classes[componentName];
};

export const GitInfo = instanceComponentCreator("GitInfo", reducer, GitInfoContainer);
// export class GitInfo extends React.Component<any> {
//     private _instancesProp = "GitInfos";
//     private _instanceId = generateInstanceId("Test");
//     private _reducer = reducer;

//     constructor(props) {
//         super(props);
//         registerInstance(this._instancesProp, this._instanceId, this._reducer);
//     }

//     render() {
//         let instanceId = this._instanceId;
//         let instancesProp = this._instancesProp;
//         return (
//             <GitInfoContainer
//                 instancesProp={instancesProp}
//                 instanceId={instanceId}
//                 otherProps={this.props}
//             />
//         );
//     }
// }
