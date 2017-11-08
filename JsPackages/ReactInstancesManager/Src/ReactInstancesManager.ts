import { updateStore } from "ReduxStoreManager";
import { registerInstanceId, unregisterInstanceId } from "ReactInstanceIdManager";
import { updateReducers, collectReducers } from "ReduxReducersManager";

export const registerInstance = ({ instancesProp, instanceId }, reducer) => {
    registerInstanceId(instancesProp, instanceId);
    updateReducers(instancesProp, reducer);
    updateStore(collectReducers());
};

export const unregisterInstance = ({ instancesProp, instanceId }, reducer) => {
    unregisterInstanceId(instancesProp, instanceId);
    updateReducers(instancesProp, reducer);
    updateStore(collectReducers());
};
