import { updateStore } from "ReduxStoreManager";
import { registerInstanceId, unregisterInstanceId } from "ReactInstanceIdManager";
import { registerReducer, unregisterReducer, getRootReducer } from "ReduxReducerManager";

export const registerInstance = (instanceId, reducer, componentName) => {
    registerInstanceId(instanceId);
    registerReducer(reducer, componentName);
    updateStore(getRootReducer());
};

export const unregisterInstance = (instanceId, reducer, componentName) => {
    unregisterInstanceId(instanceId);
    unregisterReducer(reducer, componentName);
    updateStore(getRootReducer());
};
