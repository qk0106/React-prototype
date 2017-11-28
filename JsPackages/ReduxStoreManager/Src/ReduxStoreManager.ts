import { createStore, applyMiddleware } from "redux";
import { collectMiddlewares } from "ReduxMiddlewareManager";
import { getRootReducer } from "ReduxRootReducerHelper";

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
