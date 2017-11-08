import { updateStore } from "ReduxStoreManager";
import { updateReducers, collectReducers } from "ReduxReducersManager";
import { registerInstanceId, unregisterInstanceId } from "ReactInstanceIdManager";

const updateRedux = (instancesProp, reducer) => {
    updateReducers(instancesProp, reducer);
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
