import * as iassign from 'immutable-assign';

export const InstancesReducerCreator = (instatncesInitState, instanceReducer) => (
    (instances = instatncesInitState, action) => {
      if(!(action.instanceId in instances)) return instances;
      return iassign(instances, (obj) => {
        const instance = instances[action.instanceId];
        const updatedInstance = instanceReducer(instance, action);
        obj[action.instanceId] = updatedInstance;
        return obj;
      });
    }
);