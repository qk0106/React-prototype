import * as React from "react";
import * as iassign from "immutable-assign";
import { registerReducer, collectReducers, updateStore } from "ReduxHelper";

let rootInstanceIds = {};

const generateId = () => Math.round(Math.random() * Math.pow(10, 10));

const generateInstanceId = prefix => prefix + "_" + generateId();

const registerInstanceId = (instancesProp, instanceId) => {
    if (rootInstanceIds[instancesProp] === undefined) {
        rootInstanceIds[instancesProp] = [];
    }
    rootInstanceIds[instancesProp].push(instanceId);
};

const registerInstance = ({ instancesProp, instanceId }, reducer) => {
    registerInstanceId(instancesProp, instanceId);
    registerReducer(instancesProp, reducer);
    updateStore(collectReducers());
};

const collectInstanceIds = instancesProp => rootInstanceIds[instancesProp];

const generateInstatncesInitState = instancesProps => {
    let instatncesInitState = {};
    collectInstanceIds(instancesProps).forEach(instanceId => {
        instatncesInitState[instanceId] = {};
    });
    return instatncesInitState;
};

export const generateInstanceActionCreator = actionType => (instanceId, actionParamsObj?) => ({
    type: actionType,
    instanceId: instanceId,
    requestId: generateId(),
    ...actionParamsObj
});

export const generateInstanceComponent = (instancesProp, Component, reducer) => {
    return class extends React.PureComponent<any> {
        private _reducer = reducer;
        private _instanceProps = {
            instancesProp: instancesProp,
            instanceId: generateInstanceId(this.props.instanceIdPrefix)
        };

        constructor(props) {
            super(props);
            registerInstance(this._instanceProps, this._reducer);
        }

        render() {
            return <Component instanceProps={this._instanceProps} {...this.props} />;
        }
    };
};

export const generateInstancesReducer = (instancesProps, instanceReducer) => {
    let instatncesInitState = generateInstatncesInitState(instancesProps);

    // return reducer that only updates the state of certain instance
    return (instancesState = instatncesInitState, action) => {
        let mergedInstancesState = Object.assign({}, instatncesInitState, instancesState); // reverse the order will lose the added instance
        let actionInstanceId = action.instanceId;
        if (!(actionInstanceId in mergedInstancesState)) return mergedInstancesState;
        return iassign(mergedInstancesState, obj => {
            const instanceState = mergedInstancesState[actionInstanceId];
            const updatedInstanceState = instanceReducer(instanceState, action);
            obj[actionInstanceId] = updatedInstanceState;
            return obj;
        });
    };
};
