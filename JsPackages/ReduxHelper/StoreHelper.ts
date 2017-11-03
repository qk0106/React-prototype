import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import dynamicMiddlewares from "redux-dynamic-middlewares";
const loggerMiddleware = createLogger();

const rootStore = createStore(s => s, applyMiddleware(loggerMiddleware, dynamicMiddlewares));

export const updateStore = rootReducers => {
    rootStore.replaceReducer(rootReducers);
};

export const readStore = () => {
    return rootStore;
};
