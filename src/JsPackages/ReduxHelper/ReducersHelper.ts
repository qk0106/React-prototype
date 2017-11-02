import { combineReducers } from "redux";
import { generateInstancesReducer } from "Instantiator";

let rootReducers = {};

export const registerReducer = (instancesProp, instanceReducer) => {
    const instancesReducer = generateInstancesReducer(instancesProp, instanceReducer);
    rootReducers[instancesProp] = instancesReducer;
};

export const fetchReducers = () => {
    return combineReducers(rootReducers);
};
