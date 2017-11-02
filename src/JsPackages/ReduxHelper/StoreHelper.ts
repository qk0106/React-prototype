import { createStore } from "redux";
import { fetchMiddlewares } from "./MiddlewaresHelper";

let rootStore = createStore(s => s, fetchMiddlewares());

export const updateStore = rootReducers => {
    rootStore.replaceReducer(rootReducers);
};

export const fetchStore = () => rootStore;
