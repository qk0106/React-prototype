import * as iassign from "immutable-assign";
import { combineReducers } from "redux";
import { SHARED_RESOURCE_KEY } from "ReduxSharedResourceHelper";

export const updateTargetState = (state, action, target, reducer) => {
    return iassign(state, state => {
        const targetState = state[target];
        if (Object.keys(reducer).length === 0 && reducer.constructor === Object) {
            state[target] = {};
        } else {
            const runCombinedReducer = combineReducers(reducer);
            state[target] = runCombinedReducer(targetState, action);
        }
        return state;
    });
};

export const mergeState = (existingState, registeredInstancesState) => {
    let mergedState = {};
    for (let prop in registeredInstancesState) {
        if (registeredInstancesState.hasOwnProperty(prop)) {
            mergedState[prop] = registeredInstancesState[prop];
            if (existingState.hasOwnProperty(prop)) mergedState[prop] = existingState[prop];
        }
    }
    mergedState[SHARED_RESOURCE_KEY] = existingState[SHARED_RESOURCE_KEY];
    return mergedState;
};
