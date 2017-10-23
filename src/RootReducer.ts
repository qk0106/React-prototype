import { combineReducers } from "redux";

let reducers = {};
let instanceIdArrays = {};

export const RegisterInstanceId = (instancesProp, instanceIdArray) => {
    if (instanceIdArrays[instancesProp] === undefined) {
        instanceIdArrays[instancesProp] = [];
    }
    instanceIdArrays[instancesProp] = instanceIdArrays[instancesProp].concat(instanceIdArray);
};

export const RegisterToRootReducer = (instancesProp, reducer) => {
    reducers[instancesProp] = reducer;
};

export let FetchInstanceIdArray = instancesProp => instanceIdArrays[instancesProp];
export let FetchRootReducer = () => combineReducers(reducers);
