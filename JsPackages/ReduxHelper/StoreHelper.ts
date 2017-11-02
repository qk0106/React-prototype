import { createStore } from "redux";
import { collectMiddlewares } from "./MiddlewaresHelper";

let rootStore;

export const updateStore = rootReducers => {
    rootStore.replaceReducer(rootReducers);
};

export const readStore = () => {
    if (rootStore === undefined) rootStore = createStore(s => s, collectMiddlewares());
    return rootStore;
};
