import * as iassign from 'immutable-assign';

export const InstanceActionCreator = (actionType, actionParamPropName?, otherPairs?) => (
    (instanceId, actionParam?) => ({
        type: actionType,
        instanceId: instanceId,
        [actionParamPropName]: actionParam,
        ...otherPairs
    })
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
        if (!(action.instanceId in instances)) return instances;
        return iassign(instances, (obj) => {
            const instance = instances[action.instanceId];
            const updatedInstance = instanceReducer(instance, action);
            obj[action.instanceId] = updatedInstance;
            return obj;
        });
    }
);
