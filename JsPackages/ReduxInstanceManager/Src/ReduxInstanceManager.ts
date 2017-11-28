import { updateStore } from "ReduxStoreManager";
import { getRootReducer } from "ReduxRootReducerHelper";
import { generateInstanceId } from "ReduxInstanceIdHelper";
import { registerReducer, unregisterReducer } from "ReduxReducerManager";
import { registerInstanceId, unregisterInstanceId } from "ReduxInstanceIdManager";

export const registerInstance = (instanceIdPrefix, componentName, reducer) => {
    const instanceId = generateInstanceId(instanceIdPrefix, componentName);
    registerInstanceId(instanceId);
    registerReducer(reducer, componentName);
    updateStore(getRootReducer());
    return instanceId;
};

export const unregisterInstance = (instanceId, componentName) => {
    unregisterInstanceId(instanceId);
    unregisterReducer(componentName);
    updateStore(getRootReducer());
};
