import * as iassign from 'immutable-assign';

export const InstanceActionCreator = (actionType, actionParamNames?) => (
    (instancesProp, instanceId, actionParams?) => {
        let actionParamsObj = {};
        if (actionParamNames) {
            actionParamNames.forEach((actionParamName, index) => {
                let actionParam = actionParams[index];
                actionParamsObj[actionParamName] = actionParam;
            });
        }
        return {
            type: actionType,
            instancesProp: instancesProp,
            instanceId: instanceId,
            ...actionParamsObj
        }
    }
);

export const InstancesReducerCreator = (instanceIdsObj, instanceReducer) => {
    let instanceIdArray = instanceIdsObj.instanceIdArray;
    let instancesProp = instanceIdsObj.instancesProp;
    let instatncesInitState = {};
    instanceIdArray.forEach((instanceId) => {
        instatncesInitState[instanceId] = {};
    });
    return (instances = instatncesInitState, action) => {
        let instanceId = action.instanceId;
        if (instancesProp !== action.instancesProp || !(instanceId in instances)) return instances;
        return iassign(
            instances,
            obj => {
                const instance = instances[instanceId];
                const updatedInstance = instanceReducer(instance, action);
                obj[instanceId] = updatedInstance;
                return obj;
            });
    }
};
