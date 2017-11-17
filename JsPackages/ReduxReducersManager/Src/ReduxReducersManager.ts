import * as iassign from "immutable-assign";
import { collectInstanceIds } from "ReactInstanceIdManager";

let rootReducers = {};

const getUpdatedInstancesInitState = () => {
    let instancesInitState = {};
    collectInstanceIds().forEach(instanceId => {
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

const getUpdatedInstancesReducer = instanceReducer => {
    let instancesInitState = getUpdatedInstancesInitState();
    // return reducer that only updates the state of certain instance
    return (instancesState = instancesInitState, action) => {
        let mergedInstancesState = getMergedInstancesState(instancesInitState, instancesState);
        if (action.type === "FETCH_GIT_INFO_SUCCESS") debugger;
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

export const updateInstancesReducer = instanceReducer => {
    rootReducers = getUpdatedInstancesReducer(instanceReducer);
};

export const collectReducers = () => {
    return rootReducers;
};
