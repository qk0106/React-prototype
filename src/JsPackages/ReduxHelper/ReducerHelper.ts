import { combineReducers } from "redux";
import { combineInstanceReducers } from "Instantiator";
let reducers = {};

export const registerReducer = (instancesProp, instanceReducer) => {
    const instancesReducer = combineInstanceReducers(instancesProp, instanceReducer);
    reducers[instancesProp] = instancesReducer;
};

export const fetchReducers = () => {
    return combineReducers(reducers);
};
