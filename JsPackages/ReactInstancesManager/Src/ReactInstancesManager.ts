import { updateStore } from "ReduxStoreManager";
import { updateInstancesReducer, collectReducers } from "ReduxReducersManager";
import { registerInstanceId, unregisterInstanceId } from "ReactInstanceIdManager";

const updateRedux = (instancesProp, reducer) => {
    updateInstancesReducer(instancesProp, reducer);
    updateStore(collectReducers());
};

export const registerInstance = ({ instancesProp, instanceId }, reducer) => {
    registerInstanceId(instancesProp, instanceId);
    updateRedux(instancesProp, reducer);
};

export const unregisterInstance = ({ instancesProp, instanceId }, reducer) => {
    unregisterInstanceId(instancesProp, instanceId);
    updateRedux(instancesProp, reducer);
};
