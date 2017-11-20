import * as iassign from "immutable-assign";
import { collectInstanceIds } from "ReactInstanceIdManager";
import { combineReducers } from "redux";

let rootReducers = {};

const getInitState = () => {
    let initState = {};
    collectInstanceIds().forEach(instanceId => {
        initState[instanceId] = {};
    });
    return initState;
};

const getMergedState = (state, initState) => {
    let mergedState = {};
    for (let prop in initState) {
        if (initState.hasOwnProperty(prop)) {
            mergedState[prop] = initState[prop];
            if (state.hasOwnProperty(prop)) mergedState[prop] = state[prop];
        }
    }
    return mergedState;
};

const getUpdatedReducers = reducer => {
    let initState = getInitState();
    return (state = initState, action) => {
        let mergedState = getMergedState(state, initState);
        if (action.type === "FETCH_GIT_INFO_SUCCESS") debugger;
        let instanceId = action.instanceId;
        if (!(instanceId in mergedState)) return mergedState;
        return iassign(mergedState, obj => {
            const state = mergedState[instanceId];
            const combinedReducer = combineReducers(reducer);
            const updatedState = combinedReducer(state, action);
            obj[instanceId] = updatedState;
            return obj;
        });
    };
};

export const updateReducers = reducer => {
    rootReducers = getUpdatedReducers(reducer);
};

export const collectReducers = () => {
    return rootReducers;
};
