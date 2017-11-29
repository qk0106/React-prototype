import * as iassign from "immutable-assign";
import { combineReducers } from "redux";
import { collectSharedStates } from "ReduxSharedStateManager";

export const updateSharedState = (state, action) => {
    return iassign(state, state => {
        const sharedState = state["SharedState"];
        const sharedStateReducer = collectSharedStates();
        if (
            Object.keys(sharedStateReducer).length === 0 &&
            sharedStateReducer.constructor === Object
        ) {
            state["SharedState"] = {};
        } else {
            const runCombinedReducer = combineReducers(sharedStateReducer);
            state["SharedState"] = runCombinedReducer(sharedState, action);
        }
        return state;
    });
};
