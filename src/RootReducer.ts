import { combineReducers } from 'redux';

let reducers = {};
let instanceIdArrays = {}

export const RegisterInstanceId = (instancesName, instanceIdArray) => {
    if (instanceIdArrays[instancesName] === undefined) {
        instanceIdArrays[instancesName] = [];
    }
    instanceIdArrays[instancesName] = instanceIdArrays[instancesName].concat(instanceIdArray);
}

export const RegisterToRootReducer = (instancesName, reducer) => {
    reducers[instancesName] = reducer;
}

export let FetchInstanceIdArray = (instancesName) => (instanceIdArrays[instancesName]);
export let FetchRootReducer = () => (combineReducers(reducers));
