import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

let middlewares = [];

export const registerToRootMiddlewares = middleware => {
    middlewares.push(middleware);
};

const loggerMiddleware = createLogger();
registerToRootMiddlewares(loggerMiddleware);

export const fetchRootMiddlewares = () => applyMiddleware(...middlewares);
