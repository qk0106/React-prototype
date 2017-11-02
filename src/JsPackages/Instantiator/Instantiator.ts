import * as iassign from "immutable-assign";

let rootInstanceIds = {};

const generateId = () => Math.round(Math.random() * Math.pow(10, 10));

const generateInstanceId = instanceIdPrefix => instanceIdPrefix + "_" + generateId();

const registerInstanceId = (instancesProp, instanceId) => {
    if (rootInstanceIds[instancesProp] === undefined) {
        rootInstanceIds[instancesProp] = [];
    }
    rootInstanceIds[instancesProp].push(instanceId);
};

const fetchInstanceIds = instancesProp => rootInstanceIds[instancesProp];

export const generateRegisteredInstanceId = (instancesProp, instanceIdPrefix) => {
    let instanceId = generateInstanceId(instanceIdPrefix);
    registerInstanceId(instancesProp, instanceId);
    return instanceId;
};

export const generateInstanceActionCreator = actionType => (instanceId, actionParamsObj?) => ({
    type: actionType,
    instanceId: instanceId,
    requestId: generateId(),
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
        let mergedInstances = Object.assign({}, instatncesInitState, instances); // reverse the order will cause problem
        let instanceId = action.instanceId;
        if (!(instanceId in mergedInstances)) return mergedInstances;
        return iassign(mergedInstances, obj => {
            const instance = mergedInstances[instanceId];
            const updatedInstance = instanceReducer(instance, action);
            obj[instanceId] = updatedInstance;
            return obj;
        });
    };
};
