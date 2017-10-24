import * as iassign from "immutable-assign";

export const InstanceIdsGenerator = (prefix, count) => {
    let instanceIds = [];
    for (let i = 0; i < count; i++) {
        instanceIds.push(prefix + "_" + Math.round(Math.random() * Math.pow(10, 10)));
    }
    return instanceIds;
};

export const InstanceActionCreator = (actionType, actionParamNames?) => (
    instanceId,
    actionParams?
) => {
    let actionParamsObj = {};
    if (actionParamNames) {
        actionParamNames.forEach(actionParamName => {
            let actionParam = actionParams[actionParamName];
            actionParamsObj[actionParamName] = actionParam;
        });
    }
    return {
        ...actionParamsObj,
        type: actionType,
        instanceId: instanceId
    };
};

export const InstancesReducerCreator = (instanceIdArray, instanceReducer) => {
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
