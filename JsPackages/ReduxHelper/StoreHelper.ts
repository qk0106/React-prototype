import { createStore, applyMiddleware } from "redux";
import dynamicMiddlewares from "redux-dynamic-middlewares";
import { createLogger } from "redux-logger";
const loggerMiddleware = createLogger();

let rootStore;

export const updateStore = rootReducers => {
    rootStore.replaceReducer(rootReducers);
};

export const readStore = () => {
    if (rootStore === undefined)
        rootStore = createStore(s => s, applyMiddleware(loggerMiddleware, dynamicMiddlewares));
    return rootStore;
};
