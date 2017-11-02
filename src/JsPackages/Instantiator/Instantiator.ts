import * as iassign from "immutable-assign";

let rootInstanceIds = {};

const yieldId = () => Math.round(Math.random() * Math.pow(10, 10));

const yieldInstanceId = instanceIdPrefix => instanceIdPrefix + "_" + yieldId();

const registerInstanceId = (instancesProp, instanceId) => {
    if (rootInstanceIds[instancesProp] === undefined) {
        rootInstanceIds[instancesProp] = [];
    }
    rootInstanceIds[instancesProp].push(instanceId);
};

const fetchInstanceIds = instancesProp => rootInstanceIds[instancesProp];

export const yieldRegisteredInstanceId = (instancesProp, instanceIdPrefix) => {
    let instanceId = yieldInstanceId(instanceIdPrefix);
    registerInstanceId(instancesProp, instanceId);
    return instanceId;
};

export const generateInstanceActionCreator = actionType => (instanceId, actionParamsObj?) => ({
    type: actionType,
    instanceId: instanceId,
    requestId: yieldId(),
    ...actionParamsObj
});

export const combineInstanceReducers = (instancesProps, instanceReducer) => {
    // fetch instance Ids
    let instanceIds = fetchInstanceIds(instancesProps);

    // generate instatnces initital state based on instance Ids
    let instatncesInitState = {};
    instanceIds.forEach(instanceId => {
        instatncesInitState[instanceId] = {};
    });

    // return reducer that only updates the state of certain instance
    return (instances = instatncesInitState, action) => {
        let instanceId = action.instanceId;
        if (!(instanceId in instances)) return instances;
        return iassign(instances, obj => {
            const instance = instances[instanceId];
            const updatedInstance = instanceReducer(instance, action);
            obj[instanceId] = updatedInstance;
            return obj;
        });
    };
};
