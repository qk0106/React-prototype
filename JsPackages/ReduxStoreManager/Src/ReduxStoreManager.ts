import { createStore, applyMiddleware } from "redux";
import dynamicMiddlewares from "redux-dynamic-middlewares";

let store = createStore(s => s, applyMiddleware(dynamicMiddlewares));

export const newStore = () => {
    store = createStore(s => s, applyMiddleware(dynamicMiddlewares));
};

export const updateStore = rootReducer => {
    store.replaceReducer(rootReducer);
};

export const readStore = () => {
    return store;
};
