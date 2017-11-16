import { createStore, applyMiddleware } from "redux";
import dynamicMiddlewares from "redux-dynamic-middlewares";

let rootStore = createStore(s => s, applyMiddleware(dynamicMiddlewares));

export const newStore = () => {
    rootStore = createStore(s => s, applyMiddleware(dynamicMiddlewares));
};

export const updateStore = rootReducers => {
    rootStore.replaceReducer(rootReducers);
};

export const readStore = () => {
    return rootStore;
};
