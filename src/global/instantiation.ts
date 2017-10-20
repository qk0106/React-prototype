import * as iassign from 'immutable-assign';

export const InstanceActionCreator = (actionType, actionParamNames?) => (
    (instanceId, actionParams?) => {
        let actionParamsObj = {};
        if (actionParamNames) {
            actionParamNames.forEach((actionParamName, index) => {
                let actionParam = actionParams[index];
                actionParamsObj[actionParamName] = actionParam;
            });
        }
        return {
            type: actionType,
            instanceId: instanceId,
            ...actionParamsObj
        }
    }
);

export const InstancesInitStateCreator = (instanceInitState, instanceIds) => {
    let instancesInitState = {};
    instanceIds.forEach(instanceId => {
        instancesInitState[instanceId] = instanceInitState;
    });
    return instancesInitState;
}

export const InstancesReducerCreator = (instatncesInitState, instanceReducer) => (
    (instances = instatncesInitState, action) => {
        let instanceId = action.instanceId;
        if (!(instanceId in instances)) return instances;
        return iassign(
            instances,
            obj => {
                const instance = instances[instanceId];
                const updatedInstance = instanceReducer(instance, action);
                obj[instanceId] = updatedInstance;
                return obj;
            });
    }
);
