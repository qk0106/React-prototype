import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
const loggerMiddleware = createLogger();

let middlewares = [];

export const registerToRootMiddlewares = middleware => {
    middlewares.push(middleware);
};

registerToRootMiddlewares(loggerMiddleware);

export const fetchRootMiddlewares = () => applyMiddleware(...middlewares);
