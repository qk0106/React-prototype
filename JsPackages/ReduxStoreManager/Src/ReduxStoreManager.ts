import { createStore, applyMiddleware } from "redux";
import { getRootReducer } from "ReduxReducerHelper";
import { collectMiddlewares } from "ReduxMiddlewareManager";

let store;

export const newStore = () => {
    store = createStore(s => s, applyMiddleware(collectMiddlewares()));
};

export const updateStore = () => {
    store.replaceReducer(getRootReducer());
};

export const readStore = () => {
    return store;
};

newStore();
