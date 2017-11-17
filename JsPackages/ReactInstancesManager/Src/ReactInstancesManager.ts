import { updateStore } from "ReduxStoreManager";
import { updateInstancesReducer, collectReducers } from "ReduxReducersManager";
import { registerInstanceId, unregisterInstanceId } from "ReactInstanceIdManager";

const updateRedux = reducer => {
    updateInstancesReducer(reducer);
    updateStore(collectReducers());
};

export const registerInstance = ({ instanceId }, reducer) => {
    registerInstanceId(instanceId);
    updateRedux(reducer);
};

export const unregisterInstance = ({ instanceId }, reducer) => {
    unregisterInstanceId(instanceId);
    updateRedux(reducer);
};
