import * as iassign from "immutable-assign";
import { combineReducers } from "redux";
import { collectInstanceIds } from "ReduxInstanceIdManager";
import { SHARED_RESOURCE_KEY } from "ReduxSharedResourceHelper";

export const getUpdatedTargetState = (state, action, target, reducer) => {
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

const generateCompleteStateEmpty = completeStateKeys => {
    let state = {};
    completeStateKeys.forEach(key => {
        state[key] = {};
    });
    return state;
};

const generateCompleteState = (existingState, completeStateEmpty) => {
    let state = {};
    for (let prop in completeStateEmpty) {
        if (completeStateEmpty.hasOwnProperty(prop)) {
            state[prop] = completeStateEmpty[prop];
            if (existingState.hasOwnProperty(prop)) state[prop] = existingState[prop];
        }
    }
    return state;
};

export const getCompleteState = existingState => {
    const completeStateKeys = collectInstanceIds().concat([SHARED_RESOURCE_KEY]);
    const completeStateEmpty = generateCompleteStateEmpty(completeStateKeys);
    return generateCompleteState(existingState, completeStateEmpty);
};
