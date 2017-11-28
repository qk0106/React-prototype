import dynamicMiddlewares, { addMiddleware } from "redux-dynamic-middlewares";

const middlewareRegistry = dynamicMiddlewares;

export const registerMiddleware = middleware => {
    addMiddleware(middleware);
};

export const collectMiddlewares = () => middlewareRegistry;
