import * as iassign from "immutable-assign";

export const instanceIdsGenerator = (prefix, count) => {
    let instanceIds = [];
    for (let i = 0; i < count; i++) {
        instanceIds.push(prefix + "_" + Math.round(Math.random() * Math.pow(10, 10)));
    }
    return instanceIds;
};

export const instanceActionCreator = actionType => (instanceId, actionParamsObj?) => ({
    type: actionType,
    instanceId: instanceId,
    ...actionParamsObj
});

export const instancesReducerCreator = (instanceIdArray, instanceReducer) => {
    let instatncesInitState = {};
    instanceIdArray.forEach(instanceId => {
        instatncesInitState[instanceId] = {};
    });
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

let instanceIdArrays = {};

export const registerInstanceIds = (instancesProp, instanceIdArray) => {
    if (instanceIdArrays[instancesProp] === undefined) {
        instanceIdArrays[instancesProp] = [];
    }
    instanceIdArrays[instancesProp] = instanceIdArrays[instancesProp].concat(instanceIdArray);
};

export const fetchInstanceIdArray = instancesProp => instanceIdArrays[instancesProp];
