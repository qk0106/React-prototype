import { updateInstance } from "ReduxInstanceHelper";
import { updateSharedState } from "ReduxSharedStateHelper";
import { collectInstanceIds } from "ReduxInstanceIdManager";
import { findTargetInstanceIds } from "ReduxInstanceIdHelper";

const getNewState = () => {
    let state = {};
    collectInstanceIds().forEach(instanceId => {
        state[instanceId] = {};
    });
    return state;
};

const mergeState = (oldState, newState) => {
    let state = {};
    for (let prop in newState) {
        if (newState.hasOwnProperty(prop)) {
            state[prop] = newState[prop];
            if (oldState.hasOwnProperty(prop)) state[prop] = oldState[prop];
        }
    }
    state["SharedState"] = oldState["SharedState"];
    return state;
};

const updateInstanceState = (state, action) => {
    const parentTreeInstanceIds = findTargetInstanceIds(action.instanceId);
    parentTreeInstanceIds.forEach(instanceId => {
        state = updateInstance(instanceId, state, action);
    });
    return state;
};

export const getRootReducer = () => {
    const newState = getNewState();
    return (oldState = newState, action) => {
        let state = mergeState(oldState, newState);
        state = updateInstanceState(state, action);
        state = updateSharedState(state, action);
        return state;
    };
};
