import * as iassign from "immutable-assign";
import { fetchStore } from "ReduxHelper";
import { fetchRootReducer, registerToRootReducer } from "RouteHelper";

let rootInstanceIds = {};

const generateId = () => Math.round(Math.random() * Math.pow(10, 10));

export const generateInstanceId = instanceIdPrefix => instanceIdPrefix + "_" + generateId();

export const registerInstanceId = (instancesProp, instanceId) => {
    if (rootInstanceIds[instancesProp] === undefined) {
        rootInstanceIds[instancesProp] = [];
    }
    rootInstanceIds[instancesProp].push(instanceId);
};

const fetchInstanceIds = instancesProp => rootInstanceIds[instancesProp];

export const registerInstance = (instancesProp, instanceId, reducer) => {
    let store = fetchStore();
    registerInstanceId(instancesProp, instanceId);
    registerToRootReducer(instancesProp, reducer);
    store.replaceReducer(fetchRootReducer());
    console.log(store.getState());
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
