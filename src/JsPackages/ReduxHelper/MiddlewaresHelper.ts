import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
const loggerMiddleware = createLogger();

let rootMiddlewares = [];

export const registerMiddleware = middleware => {
    rootMiddlewares.push(middleware);
};

registerMiddleware(loggerMiddleware);

export const fetchMiddlewares = () => applyMiddleware(...rootMiddlewares);
