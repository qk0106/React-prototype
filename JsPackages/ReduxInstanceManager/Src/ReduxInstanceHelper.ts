import { updateStore } from "ReduxStoreManager";
import { registerReducer, unregisterReducer } from "ReduxReducerManager";
import { registerInstanceId, unregisterInstanceId } from "ReduxInstanceIdManager";
import { generateInstanceId, extractComponentNameFromInstanceId } from "ReduxInstanceIdHelper";

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
