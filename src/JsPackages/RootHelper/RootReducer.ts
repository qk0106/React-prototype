import { combineReducers } from "redux";

let reducers = {};
let instanceIdArrays = {};

export const registerInstanceIds = (instancesProp, instanceIdArray) => {
    if (instanceIdArrays[instancesProp] === undefined) {
        instanceIdArrays[instancesProp] = [];
    }
    instanceIdArrays[instancesProp] = instanceIdArrays[instancesProp].concat(instanceIdArray);
};

export const registerToRootReducer = (instancesProp, reducer) => {
    reducers[instancesProp] = reducer;
};

export const fetchInstanceIdArray = instancesProp => instanceIdArrays[instancesProp];
export const fetchRootReducer = () => combineReducers(reducers);
