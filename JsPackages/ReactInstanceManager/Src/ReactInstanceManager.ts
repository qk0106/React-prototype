import { updateStore } from "ReduxStoreManager";
import { registerReducer, unregisterReducer, getRootReducer } from "ReduxReducerManager";
import { registerInstanceId, unregisterInstanceId } from "ReactInstanceIdManager";

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
