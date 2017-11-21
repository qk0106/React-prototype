import * as iassign from "immutable-assign";
import { collectInstanceIds, extractComponentNameFromInstanceId } from "ReactInstanceIdManager";
import { combineReducers } from "redux";

let reducerRegistry = {};

const getNewState = () => {
    let state = {};
    collectInstanceIds().forEach(instanceId => {
        state[instanceId] = {};
    });
    return state;
};

const getMergedState = (oldState, newState) => {
    let state = {};
    for (let prop in newState) {
        if (newState.hasOwnProperty(prop)) {
            state[prop] = newState[prop];
            if (oldState.hasOwnProperty(prop)) state[prop] = oldState[prop];
        }
    }
    return state;
};

const getUpdatedState = (instanceId, action, state) => {
    let componentName = extractComponentNameFromInstanceId(instanceId);
    if (!(instanceId in state)) return state;
    return iassign(state, state => {
        const instanceState = state[instanceId];
        const combinedReducer = combineReducers(reducerRegistry[componentName].reducer);
        const updatedInstanceState = combinedReducer(instanceState, action);
        state[instanceId] = updatedInstanceState;
        return state;
    });
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
    let newState = getNewState();
    return (oldState = newState, action) => {
        let state = getMergedState(oldState, newState);
        let instanceId = action.instanceId;
        return getUpdatedState(instanceId, action, state);
    };
};
