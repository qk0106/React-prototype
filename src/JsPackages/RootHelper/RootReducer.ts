import { combineReducers } from "redux";

let reducers = {};

export const registerToRootReducer = (instancesProp, reducer) => {
    reducers[instancesProp] = reducer;
};

export const fetchRootReducer = () => combineReducers(reducers);
