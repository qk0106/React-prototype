import { updateStore } from "ReduxStoreManager";
import { updateReducers, collectReducers } from "ReduxReducerManager";
import { registerInstanceId, unregisterInstanceId } from "ReactInstanceIdManager";

const updateRedux = reducer => {
    updateReducers(reducer);
    updateStore(collectReducers());
};

export const registerInstance = (instanceId, reducer) => {
    registerInstanceId(instanceId);
    updateRedux(reducer);
};

export const unregisterInstance = (instanceId, reducer) => {
    unregisterInstanceId(instanceId);
    updateRedux(reducer);
};
