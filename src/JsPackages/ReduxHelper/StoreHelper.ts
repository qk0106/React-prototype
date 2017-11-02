import { createStore } from "redux";
import { fetchMiddlewares } from "./MiddlewaresHelper";

let rootStore;

export const updateStore = rootReducers => {
    rootStore.replaceReducer(rootReducers);
};

export const fetchStore = () => {
    if (rootStore === undefined) rootStore = createStore(s => s, fetchMiddlewares());
    return rootStore;
};
