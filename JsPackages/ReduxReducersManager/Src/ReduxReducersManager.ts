import * as iassign from "immutable-assign";
import { combineReducers } from "redux";
import { collectInstanceIds } from "ReactInstanceIdManager";

let rootReducers = {};

const getUpdatedInstancesInitState = instancesProp => {
    let instancesInitState = {};
    collectInstanceIds(instancesProp).forEach(instanceId => {
        instancesInitState[instanceId] = {};
    });
    return instancesInitState;
};

const getMergedInstancesState = (instancesInitState, instancesState) => {
    let mergedInstancesState = {};
    for (let prop in instancesInitState) {
        if (instancesInitState.hasOwnProperty(prop)) {
            mergedInstancesState[prop] = instancesInitState[prop];
            if (instancesState.hasOwnProperty(prop))
                mergedInstancesState[prop] = instancesState[prop];
        }
    }
    return mergedInstancesState;
};

const getUpdatedInstancesReducer = (instancesProp, instanceReducer) => {
    let instancesInitState = getUpdatedInstancesInitState(instancesProp);
    // return reducer that only updates the state of certain instance
    return (instancesState = instancesInitState, action) => {
        let mergedInstancesState = getMergedInstancesState(instancesInitState, instancesState);
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

export const updateInstancesReducer = (instancesProp, instanceReducer) => {
    const instancesReducer = getUpdatedInstancesReducer(instancesProp, instanceReducer);
    rootReducers[instancesProp] = instancesReducer;
};

export const collectReducers = () => {
    return combineReducers(rootReducers);
};
