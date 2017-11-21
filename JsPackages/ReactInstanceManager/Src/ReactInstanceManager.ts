import { updateStore } from "ReduxStoreManager";
import { registerReducer, unregisterReducer } from "ReduxReducerManager";
import {
    registerInstanceId,
    unregisterInstanceId,
    extractComponentNameFromInstanceId
} from "ReactInstanceIdManager";
import { getRootReducer } from "ReduxRootReducerHelper";

export const registerInstance = (instanceId, reducer) => {
    const componentName = extractComponentNameFromInstanceId(instanceId);
    registerInstanceId(instanceId);
    registerReducer(reducer, componentName);
    updateStore(getRootReducer());
};

export const unregisterInstance = (instanceId, reducer) => {
    const componentName = extractComponentNameFromInstanceId(instanceId);
    unregisterInstanceId(instanceId);
    unregisterReducer(reducer, componentName);
    updateStore(getRootReducer());
};
