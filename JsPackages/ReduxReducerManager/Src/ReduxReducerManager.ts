import * as iassign from "immutable-assign";
import { collectInstanceIds, extractComponentNameFromInstanceId } from "ReactInstanceIdManager";
import { combineReducers } from "redux";

let reducerRegistry = {};

const getUpdatedState = () => {
    let updatedState = {};
    collectInstanceIds().forEach(instanceId => {
        updatedState[instanceId] = {};
    });
    return updatedState;
};

const getMergedState = (state, updatedState) => {
    let mergedState = {};
    for (let prop in updatedState) {
        if (updatedState.hasOwnProperty(prop)) {
            mergedState[prop] = updatedState[prop];
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

export const getRootReducer = () => {
    let updatedState = getUpdatedState();
    return (state = updatedState, action) => {
        let mergedState = getMergedState(state, updatedState);
        let instanceId = action.instanceId;
        let componentName = extractComponentNameFromInstanceId(action.instanceId);
        if (!(instanceId in mergedState)) return mergedState;
        return iassign(mergedState, obj => {
            const state = mergedState[instanceId];
            const combinedReducer = combineReducers(reducerRegistry[componentName].reducer);
            const updatedState = combinedReducer(state, action);
            obj[instanceId] = updatedState;
            return obj;
        });
    };
};
