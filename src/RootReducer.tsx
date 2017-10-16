import { combineReducers } from 'redux';

let reducers = {};

export const RegisterToRootReducer = (componentName, reducer) => {
    reducers[componentName] = reducer;
}

export let FetchRootReducer = () => (combineReducers(reducers));
