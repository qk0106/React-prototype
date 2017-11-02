import * as React from "react";
import { registerReducer, fetchReducers, updateStore } from "ReduxHelper";

let rootInstanceIds = {};

const generateId = () => Math.round(Math.random() * Math.pow(10, 10));

export const generateInstanceId = instanceIdPrefix => instanceIdPrefix + "_" + generateId();

const registerInstanceId = (instancesProp, instanceId) => {
    if (rootInstanceIds[instancesProp] === undefined) {
        rootInstanceIds[instancesProp] = [];
    }
    rootInstanceIds[instancesProp].push(instanceId);
};

export const registerInstance = (instancesProp, instanceId, reducer) => {
    registerInstanceId(instancesProp, instanceId);
    registerReducer(instancesProp, reducer);
    updateStore(fetchReducers());
};

export const fetchInstanceIds = instancesProp => rootInstanceIds[instancesProp];

export const generateInstanceActionCreator = actionType => (instanceId, actionParamsObj?) => ({
    type: actionType,
    instanceId: instanceId,
    requestId: generateId(),
    ...actionParamsObj
});

export const generateInstanceComponent = (componentName, reducer, Container) => {
    return class extends React.Component<any> {
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
};
