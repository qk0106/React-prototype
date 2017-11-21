import * as iassign from "immutable-assign";
import { collectInstanceIds, extractComponentNameFromInstanceId } from "ReactInstanceIdManager";
import { combineReducers } from "redux";

let reducerRegistry = {};

const getInstanceState = () => {
    let instanceState = {};
    collectInstanceIds().forEach(instanceId => {
        instanceState[instanceId] = {};
    });
    return instanceState;
};

const getMergedState = (state, instanceState) => {
    let mergedState = {};
    for (let prop in instanceState) {
        if (instanceState.hasOwnProperty(prop)) {
            mergedState[prop] = instanceState[prop];
            if (state.hasOwnProperty(prop)) mergedState[prop] = state[prop];
        }
    }
    return mergedState;
};

export const registerReducer = (reducer, componentName) => {
    if (reducerRegistry[componentName] === undefined)
        reducerRegistry[componentName] = { reducer, counter: 1 };
    else reducerRegistry[componentName].counter++;
};

export const unregisterReducer = (reducer, componentName) => {
    reducerRegistry[componentName].counter--;
    if (reducerRegistry[componentName].counter < 1) reducerRegistry[componentName] = undefined;
};

const updatedState = (instanceId, action, mergedState) => {
    let componentName = extractComponentNameFromInstanceId(instanceId);
    if (!(instanceId in mergedState)) return mergedState;
    return iassign(mergedState, obj => {
        const state = mergedState[instanceId];
        const combinedReducer = combineReducers(reducerRegistry[componentName].reducer);
        const instanceState = combinedReducer(state, action);
        obj[instanceId] = instanceState;
        return obj;
    });
};

export const getRootReducer = () => {
    let instanceState = getInstanceState();
    return (state = instanceState, action) => {
        let mergedState = getMergedState(state, instanceState);
        let instanceId = action.instanceId;
        return updatedState(instanceId, action, mergedState);
    };
};
