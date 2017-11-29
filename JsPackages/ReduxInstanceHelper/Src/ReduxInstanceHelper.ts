import { updateStore } from "ReduxStoreManager";
import { registerInstanceId, unregisterInstanceId } from "ReduxInstanceIdManager";
import { registerReducer, unregisterReducer, collectReducers } from "ReduxReducerManager";
import { generateInstanceId, extractComponentNameFromInstanceId } from "ReduxInstanceIdHelper";

import * as iassign from "immutable-assign";
import { combineReducers } from "redux";

export const createInstance = (instanceIdPrefix, componentName, reducer) => {
    const instanceId = generateInstanceId(instanceIdPrefix, componentName);
    registerInstanceId(instanceId);
    registerReducer(reducer, componentName);
    updateStore();
    return instanceId;
};

export const removeInstance = instanceId => {
    const componentName = extractComponentNameFromInstanceId(instanceId);
    unregisterInstanceId(instanceId);
    unregisterReducer(componentName);
    updateStore();
};

export const updateInstance = (instanceId, state, action) => {
    const componentName = extractComponentNameFromInstanceId(instanceId);
    if (!(instanceId in state)) return state;
    return iassign(state, state => {
        const instanceState = state[instanceId];
        const runCombinedReducer = combineReducers(collectReducers()[componentName].reducer);
        const updatedInstanceState = runCombinedReducer(instanceState, action);
        state[instanceId] = updatedInstanceState;
        return state;
    });
};
