import { combineReducers } from "redux";
import { combineInstanceReducers } from "Instantiator";
let reducers = {};

export const registerToRootReducer = (instancesProp, instanceReducer) => {
    const instancesReducer = combineInstanceReducers(instancesProp, instanceReducer);
    reducers[instancesProp] = instancesReducer;
};

export const fetchRootReducer = () => {
    return combineReducers(reducers);
};
