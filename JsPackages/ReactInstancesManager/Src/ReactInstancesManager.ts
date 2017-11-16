import { updateStore } from "ReduxStoreManager";
import { updateInstancesReducer, collectReducers } from "ReduxReducersManager";
import { registerInstanceId, unregisterInstanceId } from "ReactInstanceIdManager";

const updateRedux = (instanceSet, reducer) => {
    updateInstancesReducer(instanceSet, reducer);
    updateStore(collectReducers());
};

export const registerInstance = ({ instanceSet, instanceId }, reducer) => {
    registerInstanceId(instanceSet, instanceId);
    updateRedux(instanceSet, reducer);
};

export const unregisterInstance = ({ instanceSet, instanceId }, reducer) => {
    unregisterInstanceId(instanceSet, instanceId);
    updateRedux(instanceSet, reducer);
};
