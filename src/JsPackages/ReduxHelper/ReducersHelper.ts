import { combineReducers } from "redux";
import { combineInstanceReducers } from "Instantiator";

let rootReducers = {};

export const registerReducer = (instancesProp, instanceReducer) => {
    const instancesReducer = combineInstanceReducers(instancesProp, instanceReducer);
    rootReducers[instancesProp] = instancesReducer;
};

export const fetchReducers = () => {
    return combineReducers(rootReducers);
};
