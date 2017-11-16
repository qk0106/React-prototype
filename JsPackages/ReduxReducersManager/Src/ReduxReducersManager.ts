import * as iassign from "immutable-assign";
import { combineReducers } from "redux";
import { collectInstanceIds } from "ReactInstanceIdManager";

let rootReducers = {};

const getUpdatedInstancesInitState = instanceSet => {
    let instancesInitState = {};
    collectInstanceIds(instanceSet).forEach(instanceId => {
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

const getUpdatedInstancesReducer = (instanceSet, instanceReducer) => {
    let instancesInitState = getUpdatedInstancesInitState(instanceSet);
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

export const updateInstancesReducer = (instanceSet, instanceReducer) => {
    const instancesReducer = getUpdatedInstancesReducer(instanceSet, instanceReducer);
    rootReducers[instanceSet] = instancesReducer;
};

export const collectReducers = () => {
    return combineReducers(rootReducers);
};
