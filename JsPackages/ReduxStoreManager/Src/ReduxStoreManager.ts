import { createStore, applyMiddleware } from "redux";
import { collectMiddlewares } from "ReduxMiddlewareManager";

let store = createStore(s => s, applyMiddleware(collectMiddlewares()));

export const newStore = () => {
    store = createStore(s => s, applyMiddleware(collectMiddlewares()));
};

export const updateStore = rootReducer => {
    store.replaceReducer(rootReducer);
};

export const readStore = () => {
    return store;
};
