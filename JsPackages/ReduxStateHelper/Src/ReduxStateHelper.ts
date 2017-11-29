import * as iassign from "immutable-assign";
import { combineReducers } from "redux";

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
