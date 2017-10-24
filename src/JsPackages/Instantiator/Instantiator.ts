import * as iassign from "immutable-assign";

let rootInstanceIds = {};

const yieldIds = () => Math.round(Math.random() * Math.pow(10, 10));

const yieldInstanceIds = (instanceIdPrefix, count) => {
    let instanceIds = [];
    for (let i = 0; i < count; i++) {
        instanceIds.push(instanceIdPrefix + "_" + yieldIds());
    }
    return instanceIds;
};

const registerInstanceIds = (instancesProp, instanceIds) => {
    if (rootInstanceIds[instancesProp] === undefined) {
        rootInstanceIds[instancesProp] = [];
    }
    rootInstanceIds[instancesProp] = rootInstanceIds[instancesProp].concat(instanceIds);
};

const fetchInstanceIds = instancesProp => rootInstanceIds[instancesProp];

export const yieldRegisteredInstanceIds = (instancesProp, instanceIdPrefix, count) => {
    let instanceIds = yieldInstanceIds(instanceIdPrefix, count);
    registerInstanceIds(instancesProp, instanceIds);
    return instanceIds;
};

export const generateInstanceActionCreator = actionType => (instanceId, actionParamsObj?) => ({
    type: actionType,
    instanceId: instanceId,
    requestId: yieldIds(),
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
