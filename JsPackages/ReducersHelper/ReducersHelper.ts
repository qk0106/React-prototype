import { combineReducers } from "redux";
import { generateInstancesReducer } from "InstancesHelper";

let rootReducers = {};

export const registerReducer = (instancesProp, instanceReducer) => {
    const instancesReducer = generateInstancesReducer(instancesProp, instanceReducer);
    rootReducers[instancesProp] = instancesReducer;
};

export const collectReducers = () => {
    return combineReducers(rootReducers);
};
