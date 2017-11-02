import { registerReducer, fetchReducers, updateStore } from "ReduxHelper";

let rootInstanceIds = {};

const generateId = () => Math.round(Math.random() * Math.pow(10, 10));

export const generateInstanceId = instanceIdPrefix => instanceIdPrefix + "_" + generateId();

const registerInstanceId = (instancesProp, instanceId) => {
    if (rootInstanceIds[instancesProp] === undefined) {
        rootInstanceIds[instancesProp] = [];
    }
    rootInstanceIds[instancesProp].push(instanceId);
};

export const registerInstance = (instancesProp, instanceId, reducer) => {
    registerInstanceId(instancesProp, instanceId);
    registerReducer(instancesProp, reducer);
    updateStore(fetchReducers());
};

export const fetchInstanceIds = instancesProp => rootInstanceIds[instancesProp];

export const generateInstanceActionCreator = actionType => (instanceId, actionParamsObj?) => ({
    type: actionType,
    instanceId: instanceId,
    requestId: generateId(),
    ...actionParamsObj
});
