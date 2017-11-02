import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
const loggerMiddleware = createLogger();

let rootMiddlewares = [];

export const registerToRootMiddlewares = middleware => {
    rootMiddlewares.push(middleware);
};

registerToRootMiddlewares(loggerMiddleware);

export const fetchMiddlewares = () => applyMiddleware(...rootMiddlewares);
