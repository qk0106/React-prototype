import { combineReducers } from "redux";
import { combineInstanceReducers } from "Instantiator";
let reducers = {};

export const registerToRootReducer = (instancesProp, instanceReducerObj) => {
    const intanceReducer = combineReducers(instanceReducerObj);
    const instancesReducer = combineInstanceReducers(instancesProp, intanceReducer);
    reducers[instancesProp] = instancesReducer;
};

export const fetchRootReducer = () => combineReducers(reducers);
