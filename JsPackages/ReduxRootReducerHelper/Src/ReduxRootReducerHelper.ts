import * as iassign from "immutable-assign";
import { combineReducers } from "redux";
import { collectReducers } from "ReduxReducerManager";
import {
    collectInstanceIds,
    extractPrefixFromInstanceId,
    extractComponentNameFromInstanceId
} from "ReduxInstanceIdManager";
import { collectBroadcastListeners } from "ReduxBroadcastListenerManager";
import { collectSharedState } from "ReduxSharedStateManager";

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

const getInstanceUpdatedState = (instanceId, componentName, state, action) => {
    if (!(instanceId in state)) return state;
    return iassign(state, state => {
        const instanceState = state[instanceId];
        const runCombinedReducer = combineReducers(collectReducers()[componentName].reducer);
        const updatedInstanceState = runCombinedReducer(instanceState, action);
        state[instanceId] = updatedInstanceState;
        return state;
    });
};

const isBroadcastListener = componentName => {
    const broadcastListenerRegistry = collectBroadcastListeners();
    if (broadcastListenerRegistry[componentName])
        return broadcastListenerRegistry[componentName].listen;
    else return false;
};

const updateInstanceState = (state, action) => {
    const senderInstanceId = action.instanceId;
    const senderParentInstanceId = extractPrefixFromInstanceId(senderInstanceId);
    collectInstanceIds().forEach(receiverInstanceId => {
        const receiverComponentName = extractComponentNameFromInstanceId(receiverInstanceId);
        const receiverParentInstanceId = extractPrefixFromInstanceId(receiverInstanceId);
        if (
            isBroadcastListener(receiverComponentName) ||
            receiverInstanceId === senderParentInstanceId || // match parent instance
            receiverParentInstanceId === senderParentInstanceId || // match sibling instances, including itself
            receiverParentInstanceId.includes(senderParentInstanceId) // match descendant instances
        )
            state = getInstanceUpdatedState(
                receiverInstanceId,
                receiverComponentName,
                state,
                action
            );
    });
    return state;
};

const updateSharedState = (state, action) => {
    return iassign(state, state => {
        const sharedState = state["SharedState"];
        const sharedStateReducer = collectSharedState();
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

export const getRootReducer = () => {
    let newState = getNewState();
    return (oldState = newState, action) => {
        let state = mergeState(oldState, newState);
        state = updateInstanceState(state, action);
        state = updateSharedState(state, action);
        return state;
    };
};
