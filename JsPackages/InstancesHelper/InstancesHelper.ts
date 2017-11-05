import * as iassign from "immutable-assign";
import { updateStore } from "StoreHelper";
import { registerReducer, collectReducers } from "ReducersHelper";
import { registerInstanceId, collectInstanceIds } from "InstanceIdHelper";

export const registerInstance = ({ instancesProp, instanceId }, reducer) => {
    registerInstanceId(instancesProp, instanceId);
    registerReducer(instancesProp, reducer);
    updateStore(collectReducers());
};

const generateInstatncesInitState = instancesProps => {
    let instatncesInitState = {};
    collectInstanceIds(instancesProps).forEach(instanceId => {
        instatncesInitState[instanceId] = {};
    });
    return instatncesInitState;
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
