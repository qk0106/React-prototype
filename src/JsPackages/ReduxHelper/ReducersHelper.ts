import { combineReducers } from "redux";
import { fetchInstanceIds } from "Instantiator";
import * as iassign from "immutable-assign";

let rootReducers = {};

const generateIntialState = instancesProps => {
    let instatncesInitState = {};
    fetchInstanceIds(instancesProps).forEach(instanceId => {
        instatncesInitState[instanceId] = {};
    });
    return instatncesInitState;
};

const combineInstanceReducers = (instancesProps, instanceReducer) => {
    let instatncesInitState = generateIntialState(instancesProps);

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

export const registerReducer = (instancesProp, instanceReducer) => {
    const instancesReducer = combineInstanceReducers(instancesProp, instanceReducer);
    rootReducers[instancesProp] = instancesReducer;
};

export const fetchReducers = () => {
    return combineReducers(rootReducers);
};
