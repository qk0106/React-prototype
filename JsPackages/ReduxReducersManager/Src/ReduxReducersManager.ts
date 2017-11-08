import * as iassign from "immutable-assign";
import { combineReducers } from "redux";
import { collectInstanceIds } from "ReactInstanceIdManager";

let rootReducers = {};

const getUpdatedInstatncesInitState = instancesProp => {
    let instatncesInitState = {};
    collectInstanceIds(instancesProp).forEach(instanceId => {
        instatncesInitState[instanceId] = {};
    });
    return instatncesInitState;
};

const getMergedInstancesState = (instatncesInitState, instancesState) => {
    let mergedInstancesState = {};
    for (let prop in instatncesInitState) {
        if (instatncesInitState.hasOwnProperty(prop)) {
            mergedInstancesState[prop] = instatncesInitState[prop];
            if (instancesState.hasOwnProperty(prop))
                mergedInstancesState[prop] = instancesState[prop];
        }
    }
    return mergedInstancesState;
};

const getUpdatedInstancesReducer = (instancesProp, instanceReducer) => {
    let instatncesInitState = getUpdatedInstatncesInitState(instancesProp);
    // return reducer that only updates the state of certain instance
    return (instancesState = instatncesInitState, action) => {
        let mergedInstancesState = getMergedInstancesState(instatncesInitState, instancesState);
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

export const updateReducers = (instancesProp, instanceReducer) => {
    const instancesReducer = getUpdatedInstancesReducer(instancesProp, instanceReducer);
    rootReducers[instancesProp] = instancesReducer;
};

export const collectReducers = () => {
    return combineReducers(rootReducers);
};
