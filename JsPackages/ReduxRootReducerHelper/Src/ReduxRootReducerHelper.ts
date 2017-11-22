import * as iassign from "immutable-assign";
import { combineReducers } from "redux";
import { collectReducers } from "ReduxReducerManager";
import {
    collectInstanceIds,
    extractPrefixFromInstanceId,
    extractComponentNameFromInstanceId
} from "ReactInstanceIdManager";

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

const getInstanceUpdatedState = (instanceId, state, action) => {
    const componentName = extractComponentNameFromInstanceId(instanceId);
    if (!(instanceId in state)) return state;
    return iassign(state, state => {
        const instanceState = state[instanceId];
        const combinedReducer = combineReducers(collectReducers()[componentName].reducer);
        const updatedInstanceState = combinedReducer(instanceState, action);
        state[instanceId] = updatedInstanceState;
        return state;
    });
};

const getUpdatedState = (state, action) => {
    let currentInstancePrefix = extractPrefixFromInstanceId(action.instanceId);
    collectInstanceIds().forEach(instanceId => {
        const prefix = extractPrefixFromInstanceId(instanceId);
        if (
            action.instanceId === instanceId ||
            currentInstancePrefix === prefix ||
            currentInstancePrefix === instanceId
        )
            state = getInstanceUpdatedState(instanceId, state, action);
    });
    return state;
};

export const getRootReducer = () => {
    let newState = getNewState();
    return (oldState = newState, action) => {
        let state = getMergedState(oldState, newState);
        return getUpdatedState(state, action);
    };
};
